// Declare a variable using var and assign it a value.
// Declare a variable using let and assign it a value.
// Declare a variable using const and assign it a value.
{
    var num=12;
    let name="chinmaya";
    const pincode=754025;
}
// Try to reassign a value to a variable declared with const. Observe the error.
{
    const a=10;
    // const a=23;
    // SyntaxError: Identifier 'a' has already been declared
}
// Declare a variable inside a function using var and access it outside the function.
// Declare a variable inside a function using let and access it outside the function.
// Declare a variable inside a function using const and access it outside the function.
{
    function greet(){
        let a=12;
        var b=23;
        const c=2;
    }
    // console.log(a+"it show not defined");
    // console.log(b+"it show not defined");
    // console.log(c+"it show not defined");
}
// Declare a variable outside a block using var and access it inside the block.
// Declare a variable outside a block using let and access it inside the block.
// Declare a variable outside a block using const and access it inside the block.
{
    let a=12;
    var b=23;
    const c=2;
    {
        console.log(c);
        console.log(b);
        console.log(a);
    }
}
// Declare a variable inside a block using var and access it outside the block.
// Declare a variable inside a block using let and access it outside the block.
// Declare a variable inside a block using const and access it outside the block.
{
    {
        let a=12;
        var b=23;
        const c=2;
    }
    // console.log(a);
    // console.log(b);
    // console.log(a);
}
// Declare a variable using var and try to access it before initialization. Observe the result.
// Declare a variable using let and try to access it before initialization. Observe the result.
// Declare a variable using const and try to access it before initialization. Observe the result.
{
    a=10;
    console.log(a);
    var a=20;

    // b=20;
    // console.log(b)
    // let b;

    // c=20;
    // console.log(c)
    // let c;

}
// Declare a variable inside a loop using var and observe its scope.
// Declare a variable inside a loop using let and observe its scope.
// Declare a variable inside a loop using const and observe its scope.
{
    // while(true){
    //     let a=10;
    //     var b=20;
    //     const c=30;
    // }
    // console.log(a);
    // console.log(c);
    // console.log(b);
    // for (var i = 0; i < 3; i++) {
    //     var localVar = "Variable inside loop";
    // }

    // console.log("Inside loop:", localVar);
    // console.log("Outside loop:", i);

}
// Declare a variable with the same name inside and outside a block using var and observe the result.
// Declare a variable with the same name inside and outside a block using let and observe the result.
// Declare a variable with the same name inside and outside a block using const and observe the result.
{
    {
        let a=12;
        var b=23;
        const c=2;
    }
    let a=12;
    var b=23;
    const c=2;
}
// Declare a variable using var and try to shadow a variable from an outer scope.
// Declare a variable using let and try to shadow a variable from an outer scope.
// Declare a variable using const and try to shadow a variable from an outer scope.
{
    let a=12;
    var b=23;
    const c=23;
    console.log("outer a"+a);
    console.log("outer b"+b);
    console.log("outer c"+c);
    {
        let a=1;
        var b=3;
        const c=2;
        console.log("inner a"+a);
        console.log("inner b"+b);
        console.log("inner c"+c);
    }
}
