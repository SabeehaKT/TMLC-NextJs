class Student{
    int id;
    String name;
    public Student(int idnum, String nameof){
        this.id = idnum;
        this.name = nameof;
        displayInfo();
    }
    public void displayInfo(){
        System.out.println("id: " + id);
        System.out.println("name: " + name);
    }
}

public class StudentApp{
    public static void main(String[] args){
        Student obj = new Student(5,"Sabeeha");
        obj.displayInfo();
        System.out.println("Main method finished");
    }
}