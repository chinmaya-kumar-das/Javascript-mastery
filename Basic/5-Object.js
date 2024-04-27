//class
//class is the templete for a object
class student{
    constructor(branch,name,roll){
        this.branch=branch
        this.name=name
        this.roll=roll
    }
    setData(branch){
        this.branch=branch
    }
    getData(){
        return this.name+","+this.roll+", "+this.branch;
    }
    Print(){
        console.log("Book Sold : Details was "+this.name+","+this.roll+", "+this.branch)
    }

}

let stu1=new student("MCA","chinmaya",101)
stu1.setData("MBA")
console.log(stu1)
console.log(stu1.getData())
stu1.Print()