export function formatNumber(value, currency = "USD"){
  currency = currency.toUpperCase();

  const locales = {
    USD: "en-US",
    BRL: "pt-BR",
    EUR: "de-DE"
  }

  return new Intl.NumberFormat(locales[currency]).format(value);
}