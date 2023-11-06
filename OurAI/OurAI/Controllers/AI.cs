namespace OurAI.Controllers;

public class AI : IAI
{
    //Metotlarında kendisine gelen dizinin içindeki sayılar arasından bilgi değeri bakımından en değerli olana göre console sırayla yazdıracak.

    private static AI instance;

    public static AI Instance
    {
        get
        {
            if (instance == null)
            {
                instance = new AI();
            }

            return instance;
        }
        set
        {
            instance = value;
        }
    }
    
    private  List<(int index, int value, int puan)> _values;
    public List<int> numbers = new();
    
    public ref List<(int index, int value, int puan)> Values
    {
        get
        { 
            return ref _values;
        }
    }

    // Old School
    // public ref List<(int index, int value, int puan)> GetValues()
    // {
    //     return ref _values;
    // }

    public AI()
    {
        Values = new List<(int index, int value, int puan)>();
        Create(ref numbers);
    }
    
    // Aldığı dizi içerisindeki her bilgi puanlandıracak.
    public void Calculate(List<int> numbers)
    {
        for (int i = 0; i < numbers.Count; i++)
        {
            int low = i;
            int high = numbers.Count - i - 1;

            int puan = high > low ? (high - low) : (low - high);
            
            Values.Add((i,numbers[i],puan));
        }
    }

    //Kendisine gelen değeri ilgili indexten aşağı veya yukarı olacak şekilde bölecek. Not : İndexi içermemeli.
    public void Divide(ref List<int> numbers, int index = 0,States state = States.first)
    {
        List<int> temp = new List<int>();
        switch (state)
        {
            case States.first:
                break;
            case States.higher:
                for (int i = index + 1; i < numbers.Count; i++)
                {
                    temp.Add(numbers[i]);
                }
                Fill(temp,ref numbers);
                break;
            case States.lower:
                for (int i = 0; i < index; i++)
                {
                    temp.Add(numbers[i]);
                }
                Fill(temp,ref numbers);
                break;
        }
    }

    private void Fill(List<int> list,ref List<int> empty)
    {
        empty.Clear();
        for (int i = 0; i < list.Count; i++)
        {
            empty.Add(list[i]);
        }
    }
    //Kendisine gelen değeri ilgili tuple listinden bulup indeksini bize döndürecek.
    public int Find(List<(int index,int value,int puan)> values,int number)
    {
        int index = values.Find(p => p.value == number).index;
        
        return index;
    }
    //Kendisine gelen listeyi uygun biçimde ekraan basacak
    public void Print(List<(int index, int value, int puan)> sortedValues)
    {
        for (int i = 0; i < sortedValues.Count; i++)
        {
            Console.WriteLine("Sayı {0}\t =>{1}",sortedValues[i].value,sortedValues[i].puan);
        }
    }

    public List<(int value, int puan)> Send(List<(int index, int value, int puan)> sortedValues)
    {
        List<(int value, int puan)> temp = new ();

        for (int i = 0; i < sortedValues.Count(); i++)
        {
            temp.Add((sortedValues[i].value,sortedValues[i].puan));
        }
        //ClearValues();
        return temp;
    }
    //kendisine gelen listeyi vpuana göre sıralayacak
    public void Sort(ref List<(int index, int value, int puan)> values)
    {
        values = values.OrderBy(p => p.puan).ToList();
    }

    public void ClearValues()
    {
        Values.Clear();
    }
    public void Create(ref List<int> numbers)
    {
        for (int i = 0; i < 100; i++)
        {
            numbers.Add(i + 1);
        }
    }
}

public enum States
{
    first,
    higher,
    lower,
    finish
}