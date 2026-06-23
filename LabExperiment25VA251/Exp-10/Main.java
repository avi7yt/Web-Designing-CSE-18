public class Main {

    public static void main(String[] args) {

        System.out.println("========================================");
        System.out.println("     BANK MANAGEMENT SYSTEM - Java OOP ");
        System.out.println("========================================");

        // Create SavingsAccount object
        SavingsAccount savings = new SavingsAccount("SA1001", "Ananya Sharma", 50000, 4.5);

        // Create CurrentAccount object
        CurrentAccount current = new CurrentAccount("CA2001", "Rohan Mehta", 30000, 10000);

        // Display initial details
        savings.displayDetails();
        current.displayDetails();

        // Deposit money
        System.out.println("\n--- Depositing money ---");
        savings.deposit(10000);
        current.deposit(5000);

        // Withdraw money
        System.out.println("\n--- Withdrawing money ---");
        savings.withdraw(5000);
        current.withdraw(8000);

        // Display updated details
        System.out.println("\n--- Updated Account Details ---");
        savings.displayDetails();
        current.displayDetails();

        // Polymorphism - using parent reference
        System.out.println("\n--- Polymorphism Demo ---");
        BankAccount account1 = new SavingsAccount("SA9999", "Priya Nair", 20000, 5.0);
        BankAccount account2 = new CurrentAccount("CA9999", "Karan Verma", 15000, 5000);

        account1.displayDetails();
        account2.displayDetails();
    }
}
