    //1st one feetToMile
    function feetToMile(feet){
        if (feet <= 0){
            return "Distance can not be negative!"
        } else {
            let mile = feet / 5280;
            return mile;
        }
    };
    var resultMile = feetToMile(12000).toFixed(2);
    console.log(resultMile);


    //2nd One woodCalculator
    function woodCalculator(numChair, numTable, numBed){
        let woodChair = numChair * 1;
        let woodTable = numTable * 3;
        let woodBed = numBed * 5;
        let total = woodChair + woodTable + woodBed;
        return total;
    };
    let result = woodCalculator(23, 10, 20);
    console.log(result);


    //3rd brickCalculator
    function brickCalculator(floorNumber){
        if (floorNumber <=10 && floorNumber >=1){
            let brickNumber = floorNumber * 15000;
            return brickNumber;
        }
        else if (floorNumber > 10 && floorNumber <= 20) {
            let brickNumber = ((floorNumber - 10) * 12000) + 150000;
            return brickNumber;
        }
        else if (floorNumber > 20){
            let brickNumber =((floorNumber - 20) * 10000) + 270000;
            return brickNumber;
        }
        else {
            return "Something is wrong!";
        }
    };
    let result1 = brickCalculator(12);
    console.log(result1);
    let result2 = brickCalculator(20);
    console.log(result2);
    let result3 = brickCalculator(30);
    console.log(result3);
    let result4 = brickCalculator(-4);
    console.log(result4);


    //4th tinyFriend
    function tinyFriend(friend){
        let singleFriend =friend[0];
        for(let i = 0; i < friends.length; i++){
            let element = friends[i];
            if (element < singleFriend){
                singleFriend = element ;
            }
        }
        return singleFriend;
    };
    let friends =["Ashraful", "Shakib", "Mortaza", "Hasan", "Rakib" , "Joy"];
    let results = tinyFriend(friends);
    console.log(results);