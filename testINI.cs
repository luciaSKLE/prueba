using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class testINI : MonoBehaviour
{
    public testINI()
    {
        Debug.Log("Ha entrado en el constructor de testINI");
    }
    public string IP;
    Config_Reader config;
    // Start is called before the first frame update
    void Start()
    {
        //config = new Config_Reader();
        config = GetComponent<Config_Reader>();
        //config.path = @"config.ini";
        //IP = config.read_IP();
        Debug.Log(IP);
    }

    
}
