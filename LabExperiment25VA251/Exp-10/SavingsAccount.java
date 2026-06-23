// SavingsAccount inherits BankAccount - Inheritance
public class SavingsAccount extends BankAccount {

    private double interestRate; // e.g. 4.5 means 4.5%

    // Constructor
    public SavingsAccount(String accountNumber, String accountHolderName,
                          double balance, double interestRate) {
        super(accountNumber, accountHolderName, balance); // call parent constructor
        this.interestRate = interestRate;
    }

    // Implementing abstract method - Abstraction
    @Override
    public double calculateInterest() {
        return (getBalance() * interestRate) / 100;
    }

    // Getter / Setter
    public double getInterestRate() {
        return interestRate;
    }

    public void setInterestRate(double rate) {
        this.interestRate = rate;
    }

    @Override
    public void displayDetails() {
        System.out.println("\n=== Savings Account ===");
        System.out.println("Interest Rate   : " + interestRate + "%");
        super.displayDetails();
    }
}
