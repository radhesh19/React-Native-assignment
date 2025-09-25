// mockData.ts
export const mockData = {
  cardDetails: {
    cardType: "Debit Card",
    cardName: "Mark Henry",
    cardNumber: "5647 3411 2413 2020",
    expiryDate: "12/20",
    cvv: "456",
    vendor: "VISA",
  },
  accountInfo: {
    availableBalance: { amount: "3,000", currency: "S$" },
    spendingLimit: {
      currentLimit: { amount: 345, currency: "S$" },
      maxLimit: { amount: 5000, currency: "S$" },
    },
  },
  menuOptions: [
    { title: "Top-up account", description: "Deposit money to your account to use with card", action: "topUpAccount" },
    { title: "Weekly spending limit", description: "Your weekly spending limit is S$ 5,000", action: "setSpendingLimit", isToggleable: true, isToggledOn: true },
    { title: "Freeze card", description: null, action: "freezeCard", isToggleable: true, isToggledOn: false },
    { title: "Get a new card", description: "This deactivates your current debit card", action: "getNewCard" },
    { title: "Deactivated cards", description: "Your previously deactivated cards", action: "viewDeactivatedCards" },
  ],
};
