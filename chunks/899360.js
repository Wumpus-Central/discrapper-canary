var e = t(839516),
    i = t(124077),
    a = t(752222),
    r = t(792996);
let u = { kind: "available" },
    o = { kind: "all_full" };
function d(n) {
    let { name: l } = n,
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return r.intl.formatToPlainString(a.default.xuM052, {
        orgName: l,
        noun: (0, i.A)({ displayNoun: t, lowercase: !0 }),
    });
}
t.d(
    l,
    {},
    {
        Ay: function (n) {
            return null != n &&
                0 !== n.length &&
                n.every((n) => {
                    let { organization: l } = n;
                    return (0, e.A)(l);
                })
                ? 1 === n.length
                    ? { kind: "single_full", organization: n[0].organization }
                    : o
                : u;
        },
        m$: function (n) {
            switch (n.kind) {
                case "available":
                    return;
                case "single_full":
                    return d(n.organization);
                case "all_full":
                    return r.intl.string(a.default.bY80Jh);
            }
        },
        zA: d,
    },
);
