class Invoice {
    private int invoiceNumber;
    private double amount;

    public Invoice(int invoiceNumber, double amount) {
        this.invoiceNumber = invoiceNumber;
        this.amount = amount;
    }

    public int getInvoiceNumber() {
        return invoiceNumber;
    }

    public double getAmount() {
        return amount;
    }
}

// InvoicePrinter class to handle printing invoices
class InvoicePrinter {
    public void print(Invoice invoice) {
        System.out.println("Invoice Number: " + invoice.getInvoiceNumber());
        System.out.println("Amount: $" + invoice.getAmount());
    }
}

// InvoiceRepository class to handle database operations for invoices
class InvoiceRepository {
    public void save(Invoice invoice) {
        // Simulate saving the invoice to a database
        System.out.println("Saving invoice to the database...");
        System.out.println("Invoice Number: " + invoice.getInvoiceNumber());
        System.out.println("Amount: $" + invoice.getAmount());
    }
}

// Main class to demonstrate the functionality
public class Main {
    public static void main(String[] args) {
        Invoice invoice = new Invoice(123, 456.78);
        
        InvoicePrinter printer = new InvoicePrinter();
        printer.print(invoice);

        InvoiceRepository repository = new InvoiceRepository();
        repository.save(invoice);
    }
}

/*
 * Invoice Number: 123
Amount: $456.78
Saving invoice to the database...
Invoice Number: 123
Amount: $456.78
 */
