var e = t(839516),
    i = t(752222),
    r = t(792996);
let a = { kind: "available" },
    u = { kind: "all_full" };
function o(n) {
    let { name: l } = n;
    return r.intl.formatToPlainString(i.default.xuM052, { orgName: l, noun: r.intl.string(i.default.xXXGsq) });
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
                    : u
                : a;
        },
        m$: function (n) {
            switch (n.kind) {
                case "available":
                    return;
                case "single_full":
                    return o(n.organization);
                case "all_full":
                    return r.intl.string(i.default.bY80Jh);
            }
        },
        zA: o,
    },
);
