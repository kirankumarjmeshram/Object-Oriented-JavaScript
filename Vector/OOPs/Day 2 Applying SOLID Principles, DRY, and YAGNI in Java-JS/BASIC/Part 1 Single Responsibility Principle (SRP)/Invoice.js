//This structure ensures each class has a single responsibility, adhering to the Single Responsibility Principle (SRP).
class Invoice {
    constructor(invoiceNumber, amount) {
        this.invoiceNumber = invoiceNumber;
        this.amount = amount;
    }

    getInvoiceNumber() {
        return this.invoiceNumber;
    }

    getAmount() {
        return this.amount;
    }
}

// InvoicePrinter class to handle printing invoices
class InvoicePrinter {
    print(invoice) {
        console.log(`Invoice Number: ${invoice.getInvoiceNumber()}`);
        console.log(`Amount: $${invoice.getAmount()}`);
    }
}

// InvoiceRepository class to handle database operations for invoices
class InvoiceRepository {
    save(invoice) {
        // Simulate saving the invoice to a database
        console.log("Saving invoice to the database...");
        console.log(`Invoice Number: ${invoice.getInvoiceNumber()}`);
        console.log(`Amount: $${invoice.getAmount()}`);
    }
}

// Main function to demonstrate the functionality
function main() {
    const invoice = new Invoice(123, 456.78);

    const printer = new InvoicePrinter();
    printer.print(invoice);

    const repository = new InvoiceRepository();
    repository.save(invoice);
}

main();

/**
 * Invoice Number: 123
Amount: $456.78
Saving invoice to the database...
Invoice Number: 123
Amount: $456.78
*
 * /
