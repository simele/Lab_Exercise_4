
    let person = {
        fn: "",
        ln:"",
        birthYear: "",
        age:"",
        job:"",
        eligibleVote:"you can't vote",
        familyMembers: [],
        weight:"",
        height:"",
    
        calculateAge: function(){
            return this.age = new Date().getFullYear() - this.birthYear;
        },
        isEligible: function(){
            let tempAge = this.calculateAge();
            if(tempAge >= 18){
                this.eligibleVote = "you can vote";
            }else{
                this.eligibleVote= "you can't vote";
            }
        },

        //BMI calcualtor function below


        calcBmi: function(){
            let bmi = this.weight / (this.height * this.height);

            
            //toFixed(x) convert number to string and rounding the number to keep "x" number of decimals

            console.log("your BMI is : " + bmi);
        }



    };
    
    
 

    
    
    person.fn = prompt("your first name? ");
    person.ln = prompt("your last name? ");
    person.birthYear = prompt("your date of Birth? ");
    person.job = prompt("your job? ");
    person.weight = prompt("enter your weight(KG): ")
    person.height = prompt("enter your height(M): ")
    let numberOfFamily = prompt("Number of Family?")


    for(var i=0;i<parseInt(numberOfFamily); i++){
        person.familyMembers[i] = prompt("your family members" + (i + 1))
    }
    

    

person.calculateAge();
person.isEligible();




(function(){
    console.log("your profile");
    console.log("Full Name: " + person.fn + " "+person.ln);
    console.log("Profession : " + person.job);
    console.log("Age : " + person.age + " " + "years old");
    console.log("can you vote? " + person.eligibleVote)
    console.log("family Members");
    
    person.familyMembers.forEach(function(member, i){
        console.log("family member" + (i + 1) + ":" + member)

    

    });

    person.calcBmi();
    
})();




