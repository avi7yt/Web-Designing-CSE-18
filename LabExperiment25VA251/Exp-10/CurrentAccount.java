// CurrentAccount inherits BankAccount - Inheritance
public class CurrentAccount extends BankAccount {

    private double overdraftLimit; // extra credit limit for current accounts

    // Constructor
    public CurrentAccount(String accountNumber, String accountHolderName,
                          double balance, double overdraftLimit) {
        super(accountNumber, accountHolderName, balance); // call parent constructor
        this.overdraftLimit = overdraftLimit;
    }

    // Implementing abstract method - Abstraction
    // Current accounts typically have lower or no interest
    @Override
    public double calculateInterest() {
        return (getBalance() * 2.0) / 100; // fixed 2% interest
    }

    // Current accounts can overdraft up to the limit
    @Override
    public void withdraw(double amount) {
        if (amount > 0 && amount <= (getBalance() + overdraftLimit)) {
            // manually reduce balance using deposit trick
            super.withdraw(Math.min(amount, getBalance())); // withdraw available
        } else {
            System.out.println("Exceeds overdraft limit.");
        }
    }

    // Getter / Setter
    public double getOverdraftLimit() {
        return overdraftLimit;
    }

    public void setOverdraftLimit(double limit) {
        this.overdraftLimit = limit;
    }

    @Override
    public void displayDetails() {
        System.out.println("\n=== Current Account ===");
        System.out.println("Overdraft Limit : Rs. " + overdraftLimit);
        super.displayDetails();
    }
}
