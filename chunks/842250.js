function c(t, n = 6) {
    return t.length === n;
}
p.d(
    n,
    {},
    {
        n: function (t, n = 6) {
            return c(t, n) ? {} : { otp: "incompleteOtp" };
        },
        r: c,
    },
);
