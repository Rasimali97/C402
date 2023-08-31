using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.ConstrainedExecution;
using System.Text;
using System.Threading.Tasks;

namespace first_homework
{
    internal class Program
    {

        static void Main(string[] args)
        {


            //1. iki ededdin cemi 




            //int ededler(int a, int b)
            //{
            //    return a + b;
            //}

            //int toplam = ededler(22, 8);
            //Console.WriteLine(toplam);

            ///////////////////////////////////////////////////////

            //2. iki ededin cemi ile ferqinin hasili





            //Console.Write("Birinci ededi daxil edin: ");
            //int eded1 = Convert.ToInt32(Console.ReadLine());

            //Console.Write("İkinci ededi daxil edin: ");
            //int eded2 = Convert.ToInt32(Console.ReadLine());

            //int toplam = cem(eded1, eded2);
            //int ferq = hasil(eded1, eded2);

            //Console.WriteLine($"Hasilin neticesi: {ferq}");

            //int cem(int a, int b)
            //    { 
            //        return a + b;

            //    }
            //     int hasil(int a, int b)

            //    {  
            //        return (a - b) * cem(a,b); 
            //    }

            ////////////////////////////////////////////////////////

            //3.{"salam","masin","buz","ev","kod","meymun","avtobus"} arrayinda 4 hərfdən az olan sözləri çapa verən proqram tərtib edin.

            //string[] soz = { "salam", "masin", "buz", "ev", "kod", "meymun", "avtobus" };
            //for (int i = 0; i < soz.Length; i++)
            //{
            //    if (soz[i].Length < 4)
            //    {
            //        Console.WriteLine(soz[i]);
            //    }



            //}
            /////////////////////////////////////////////////////////
            //4. {"salam","masin","buz","ev","kod","meymun","avtobus"} arrayinda 4 hərfdən çox olan sözlərin sonuna AZE ifadəsini əlavə edərək çapa verən proqram tərtib edin.
            //    string[] soz = { "salam", "masin", "buz", "ev", "kod", "meymun", "avtobus" };
            //    for (int i = 0; i < soz.Length; i++)
            //    {
            //        if (soz[i].Length > 4)
            //        {
            //            Console.WriteLine(soz[i] + "AZE");
            //        }
            //    }
            //}

            /////////////////////////////////////////////////////////

            //5.{"salam","masin","buz","ev","kod","meymun","avtobus"} arrayinda olan elementləri çapa verən proqram tərtib edin.

            //string[] soz = { "salam", "masin", "buz", "ev", "kod", "meymun", "avtobus" };
            //for (int i = 0; i < soz.Length; i++)
            //{

            //        Console.WriteLine(soz[i]);

            //}

            /////////////////////////////////////////////////////////

            //6. {"salam","masin","buz","ev","kod","meymun","avtobus"} arrayinin elemetlərini arasında boşluqlar olmaq şərti ilə yan-yana düzən proqram tərtib edin.

            //string[] soz = { "salam", "masin", "buz", "ev", "kod", "meymun", "avtobus" };
            //for (int i = 0; i < soz.Length; i++)
            //{

            //    Console.Write(soz[i]+" ");

            //}

            /////////////////////////////////////////////////////////

            //7. 0-dan 100-ə qədər olan ədədləri çapa verən proqram tərtib edin.
            //for (int a = 0; a <= 100;a++)
            //    {
            //    Console.WriteLine(a);
            //}

            //////////////////////////////////////////////////////////

            //8. 0-dan 100-ə qədər olan cüt ədədləri çap edən proqram tərtib edin.
            //for (int a = 0; a <= 100; a++)
            //{
            //    if(a % 2 == 0)
            //    Console.WriteLine(a);
            //}

            //////////////////////////////////////////////////////////

            //8.  0-dan 100-ə qədər olan tək ədədlərin cəmini tapan proqram tərtib edin.
            //    int cem = 0;
            //    for (int a = 0; a <= 100; a++)
            //    {
            //        if (a % 2 != 0)
            //            cem = cem + a;

            //    }
            //    Console.WriteLine(cem);

            //////////////////////////////////////////////////////////

            //9.   0-dan 100-ə qədər olan ədədlər içərisində rəqəmləri bir birinə bərabər olan iki rəqəmli ədədləri çap edən proqram tərtib edin.

            //    Console.WriteLine("0-dan 100-e qeder her iki reqemi beraber olan ededler:");
            //    tapilaneded();
            //}
            //static void tapilaneded()
            //    {
            //        for (int eded = 10; eded < 100; eded++)
            //        {
            //            int onluq = eded / 10;
            //            int qaliq = eded % 10;

            //            if (onluq == qaliq)
            //            {
            //                Console.WriteLine(eded);
            //            }
            //        }


            /////////////////////////////////////////////////////////
            //10.  İstənilən arrayin 1-ci elementini çapa verən funksiya yazın. Funksiya arraylari parametr olaraq alacaq.
            //11.  İstənilən arrayin sonuncu elementini çapa verən funksiya yazın. Funksiya arraylari parametr olaraq alacaq.

            int[] need_array = { 5, 10, 15, 20, 25 };
            tapilaneded(need_array);

            void tapilaneded(int[] some_array)
            {
                Console.WriteLine("Birinci element : " + some_array[0]);
                Console.WriteLine("Sonuncu element : " + some_array[some_array.Length-1]);
            }


            


        }
    }
    }


