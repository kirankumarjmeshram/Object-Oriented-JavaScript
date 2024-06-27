// Validation in Setters:
// Modify the BankAccount class from the previous question to include 
// validation in the setter for balance (e.g., balance cannot be negative). 
// Write a main method to test this validation.


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

    set balance(value) {
        if(value >=0) {
            this.#balance = value;
        }else {
            console.log("Balance cannot be negative.");
        }
        
    }

    get balance() {
        return this.#balance;
    }

    set accountHolderName(value) {
        this.#accountHolderName = value;
    }

    get accountHolderName() {
        return this.#accountHolderName;
    }

    displayDetail() {
        console.log(`Account Number: ${this.#accountNumber}`);
        console.log(`Account Holder Name: ${this.#accountHolderName}`);
        console.log(`Balance: ${this.#balance}`);
    }
}

function main() {
    const account = new BankAccount();
    account.balance = -1000;
    account.accountHolderName = 'Kirankumar J Meshram'
    account.accountNumber = 1234567890;
    account.displayDetail();
}

main();

// Balance cannot be negative.
// Account Number: 1234567890
// Account Holder Name: Kirankumar J Meshram
// Balance: undefined
