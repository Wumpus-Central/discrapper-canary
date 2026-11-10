var l = n(855986),
    r = n(462887),
    i = n(736653),
    u = n(775602);
function o(e, t, n) {
    return null == e ? null : t ? (n ? e.darkStaticUrl : e.darkUrl) : n ? e.lightStaticUrl : e.lightUrl;
}
n.d(
    t,
    {},
    {
        T: function (e, t) {
            let n = (0, i.Ay)(),
                a = (0, l.bG)([u.Ay], () => u.Ay.useReducedMotion);
            return o(e, (0, r.M)(n) || !0 === t, a);
        },
        c: o,
    },
);
