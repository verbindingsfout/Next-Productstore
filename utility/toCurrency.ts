export const toCurrency = new Intl.NumberFormat("nl", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
}).format;
