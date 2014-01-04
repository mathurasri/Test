using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HelloWorld
{
    class Panda
    {
        public string name;
        public static int population;

        public Panda(string name)
        {
            this.name = name;
            population = population + 1;
        }
    }
}
