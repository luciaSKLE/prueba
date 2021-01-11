using System;
using System.Runtime.InteropServices;
using System.Text;
using UnityEngine;

public class Config_Reader : MonoBehaviour
{
    public string IP;
    public int port;
    public string topics;

    IniFile rd;

    public Config_Reader()
    {
        this.IP = "";
        this.port = 0;
        this.topics = "";

    }
    public string read_IP()
    {
        //rd.path = this.path;
        this.rd = new IniFile();
        this.IP = "IP...";
        //this.IP = rd.IniReadValue("Session", "IP_session");
        return this.IP;
    }

    public int read_port()
    {
        //rd.path = this.path;
        this.port = int.Parse(rd.IniReadValue("Session", "port"));
        return this.port;
    }

    public string read_topics()
    {
        //rd.path = this.path;
        this.topics = rd.IniReadValue("Topics", null);
        return this.topics;
    }


}
