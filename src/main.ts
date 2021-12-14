/* eslint-disable complexity */
/* eslint-disable max-depth */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-magic-numbers */
/* eslint-disable max-nested-callbacks */
export { init };
  import * as https from 'https';

// FEATURE:     Get a report of the next 5 rocket launches
// As a:        space explorer
// I want to:   see the status of the next launches
// In order to: set an alarma for the next one

const MIN = 1000 * 60;
const HOUR = 1000 * 60 * 60;
const DAY = 1000 * 60 * 60 * 24;
const WEEK = 1000 * 60 * 60 * 24 * 7;

function init(): boolean {  
  console.log('App ready');
  https.get('https://lldev.thespacedevs.com/2.0.0/launch/upcoming/?mode=list&limit=' + 5, res => {
    res.setEncoding('utf8');
    let body = '';
    res.on('data', data => {
      body += data;
    });
    res.on('end', () => {
      const bodyData = JSON.parse(body);
      const rockets = bodyData.results;
      let alarm = null;
      for (let i = 0; i < 5; i++) {
        const date = new Date(rockets[i].net);
        if (rockets[i].status === 1) {
          
          console.log('✅ ' + date.toLocaleString() + ' - ' + rockets[i].name);
        } else {
          console.log('❌ ' + date.toLocaleString() + ' - ' + rockets[i].name);
        }
      }
      console.log('⏰ ' + alarm);
    });
  });
  return true;
}

function hasAlarm(falta: number): string{
  let alarm = "";
  if (alarm === null) {
    const falta = Date.getTime() - new Date('2020-06-13 05:00:00').getTime();
    if (falta < HOUR){
      alarm = printMinutes(falta);
    }
    else if (falta < DAY){
      alarm = printHours(falta);
    }
    else if (falta < WEEK){
      alarm = printDays(falta);
    }
    else{
      alarm = printWeeks(falta);
    }
  }

  return alarm;
}

function printMinutes(falta: number) : string{
  let alarm = "";
  alarm =
    'Alerta, próximo despegue en ' +
    Math.floor(falta / MIN) +
    (Math.floor(falta / MIN) === 1 ? ' minuto' : ' minutos');
    ' minutos';
  return alarm;
}

function printHours(falta: number) : string{
  let alarm = ""
  alarm =
    'Atención, próximo despegue en ' +
    Math.floor(falta / HOUR) +
    (Math.floor(falta / HOUR) === 1 ? ' hora' : ' horas');
  return alarm;
}

function printDays(falta: number) : string{
  let alarm = ""
  alarm =
    'Relax, próximo despegue en ' +
    Math.floor(falta / DAY) +
    (Math.floor(falta / DAY) === 1 ? ' día' : ' días');
  return alarm;
}

function printWeeks(falta: number) : string{
  let alarm = ""
  alarm =
    'Aburrimiento, próximo despegue en ' +
    Math.floor(falta / WEEK) +
    (Math.floor(falta / WEEK) === 1 ? ' semana' : ' semanas');
  return alarm;
}

init()