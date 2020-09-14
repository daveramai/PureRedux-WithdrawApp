export default function withdraw(amt) {
  return {
    type: "WITHDRAW",
    amt: amt,
  };
}
