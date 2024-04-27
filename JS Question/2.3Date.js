// // Write a function to get the current date.
// {
//     let date=new Date()
//     console.log(date)
// }
// // Write a function to get the current time.
// {
//     let date=new Date()
//     console.log(date.getHours()+" "+ date.getMinutes()+" "+date.getSeconds())
// }
// // Write a function to get the current day of the week.
// {
//     let date=new Date()
//     console.log(date.getDay())
// }
// // Write a function to get the current month.
// {
//     let date=new Date()
//     console.log(date.getMonth())
// }
// // Write a function to get the current year.
// {
//     let date=new Date()
//     console.log(date.getFullYear())
// }
// // Write a function to format the current date as "MM/DD/YYYY".
// {
//     {
//         let date=new Date()
//         console.log(date.getDate()+"/"+ date.getMonth()+"/"+date.getFullYear())
//     }
// }
// // Write a function to format the current time as "HH:MM:SS".
// {
//     {
//         let date=new Date()
//         console.log(date.getHours()+":"+ date.getMinutes()+":"+date.getSeconds())
//     }
// }
// // Write a function to get the number of days in the current month.
// {
//     let date=new Date()
//     let month=date.getMonth()
//     console.log(month.get)
// }
// // Write a function to get the current date and time in ISO format.
// {
//     let date=new Date()
//     console.log(date.toISOString())
// }
// // Write a function to get the current timestamp.
// {
//     let date=new Date()
//     let timestamp=Date.now()
//     console.log(timestamp)
// }
// Write a function to add a specified number of days to the current date.
{
    let date=new Date()
    let days=10
    let result=new Date(date.getTime()+days * 24 * 60 * 60 * 1000)
    console.log("New Date is "+result.toISOString().split('T')[0])
}
// Write a function to subtract a specified number of days from the current date.
{
    function subtractDaysFromCurrentDate(days) {
        var currentDate = new Date();
        var resultDate = new Date(currentDate.getTime() - days * 24 * 60 * 60 * 1000);
        return resultDate;
    }
    
    // Example usage:
    var daysToSubtract = 7;
    var resultDate = subtractDaysFromCurrentDate(daysToSubtract);
    console.log("Resulting date after subtracting " + daysToSubtract + " days:", resultDate.toISOString().split('T')[0]);
    

}
// Write a function to add a specified number of months to the current date.
{
    let date=new Date()
    let days=10
    let result=new Date(date.getTime()+days * 24 * 60 * 60 * 1000)
    console.log("New Date is "+result.toISOString().split('T')[0])
}
// Write a function to subtract a specified number of months from the current date.
// Write a function to add a specified number of years to the current date.
// Write a function to subtract a specified number of years from the current date.
// Write a function to compare two dates and return true if the first date is after the second date.
// Write a function to compare two dates and return true if the first date is before the second date.
// Write a function to check if a given year is a leap year.
// Write a function to get the current week number of the year.
// Write a function to get the number of days between two dates.
// Write a function to get the number of months between two dates.
// Write a function to get the number of years between two dates.
// Write a function to get the number of days in a month of a given year.
// Write a function to get the first day of a month of a given year.
// Write a function to get the last day of a month of a given year.
// Write a function to check if a given date is today.
{
    let date=Date.now()
    let given=new Date(2024,3,22)
    if(date==given){
        console.log(today)
    }else{
        console.log("not today")
    }
}
// Write a function to check if a given date is in the past.
// Write a function to check if a given date is in the future.
// Write a function to check if a given date is a weekend.
// Write a function to check if a given date is a weekday.
// Write a function to get the next weekday after a given date.
// Write a function to get the previous weekday before a given date.
// Write a function to get the number of weekdays between two dates.
// Write a function to get the number of weekends between two dates.
// Write a function to get the number of working days between two dates (excluding weekends).
// Write a function to add a specified number of working days to a given date.
// Write a function to subtract a specified number of working days from a given date.
// Write a function to get the number of full weeks between two dates.
// Write a function to get the number of full months between two dates.
// Write a function to get the number of full years between two dates.
// Write a function to get the current time in different time zones.
// Write a function to convert a date from one time zone to another.
// Write a function to get the number of milliseconds since midnight.
// Write a function to get the number of seconds since midnight.
// Write a function to get the number of minutes since midnight.
// Write a function to get the number of hours since midnight.
// Write a function to get the number of milliseconds until the end of the day.
// Write a function to get the number of seconds until the end of the day.
// Write a function to get the number of minutes until the end of the day.