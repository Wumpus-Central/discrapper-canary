var c = h(318626);
let n = { LATIN12: c.Xh, LATIN24: c.ID, ASIAN: c.KC },
    p = /(AM|PM)$/;
h.d(
    t,
    {},
    {
        A: function (A) {
            return null != A.match(p) ? n.LATIN24 : A.length <= 5 ? n.LATIN12 : n.ASIAN;
        },
    },
);
