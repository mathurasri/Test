using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    class HelloWorld1
    {
        static void Main(string[] args)
        {
            Panda panda1 = new Panda("Panda1");
            Console.WriteLine("Panda1 Info:" + " " + panda1.name + " " + Panda.population);
            
            Panda panda2 = new Panda("Panda2");            
            Console.WriteLine("Panda2 Info:" + " " + panda2.name + " " + Panda.population);

            Console.WriteLine("My Panda");

            Console.ReadLine();

        }
    }
}
