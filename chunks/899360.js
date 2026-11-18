var l = e(839516),
    r = e(124077),
    u = e(752222),
    i = e(792996);
let a = { kind: "available" },
    s = { kind: "all_full" };
function d(n) {
    let { name: t } = n,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return i.intl.formatToPlainString(u.default.xuM052, {
        orgName: t,
        noun: (0, r.A)({ displayNoun: e, lowercase: !0 }),
    });
}
e.d(
    t,
    {},
    {
        Ay: function (n) {
            if (
                null == n ||
                0 === n.length ||
                !n.every((n) => {
                    let { organization: t } = n;
                    return (0, l.A)(t);
                })
            )
                return a;
            if (1 === n.length) {
                let [{ organization: t, displayNoun: e }] = n;
                return { kind: "single_full", organization: t, displayNoun: e };
            }
            return s;
        },
        m$: function (n) {
            switch (n.kind) {
                case "available":
                    return;
                case "single_full":
                    return d(n.organization, n.displayNoun);
                case "all_full":
                    return i.intl.string(u.default.bY80Jh);
            }
        },
        zA: d,
    },
);
