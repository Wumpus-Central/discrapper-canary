function c(t, n = 6) {
    return t.length === n;
}
function e(t, n = 6) {
    return c(t, n) ? {} : { otp: "incompleteOtp" };
}
p.d(n, { n: () => e, r: () => c });
