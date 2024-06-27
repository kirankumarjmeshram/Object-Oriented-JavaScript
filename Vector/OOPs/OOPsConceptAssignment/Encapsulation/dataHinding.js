// Data Hinding
    //Create a class BankAccount with private fields accountNumber, 
    //balance, and accountHolderName. 
    //Provide public getter and setter methods for each field. 
    //Write a main method to create an account, set values using setters, 
    //and display the account details using getters.

    class BankAccount {
        #accountNumber;
        #balance;
        #accountHolderName;

        set accountNumber(value) {
            this.#accountNumber = value;
        }

        get accountNumber() {
            return this.#accountNumber
        }

        set balance (value) {
            this.#balance = value;
        }

        get balance () {
            return this.#balance;
        }

        set accountHolderName (value) {
            this.#accountHolderName = value;
        }

        get accountHolderName () {
            return this.#accountHolderName;
        }

        displayDetail () {
            console.log(`Account Number: ${this.#accountNumber}`);
            console.log(`Account Holder Name: ${this.#accountHolderName}`);
            console.log(`Balance: ${this.#balance}`);
        }
    }

    function main() {
        const account = new BankAccount();
        account.balance = 1000;
        account.accountHolderName= 'Kirankumar J Meshram'
        account.accountNumber = 1234567890;
        account.displayDetail();
    }

    main();
