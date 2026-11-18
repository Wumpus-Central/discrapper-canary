var t = e(839516),
    i = e(752222),
    r = e(792996);
let u = { kind: "available" },
    a = { kind: "all_full" };
function o(n) {
    let { name: l } = n,
        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
    return r.intl.formatToPlainString(i.default.xuM052, { orgName: l, displayNoun: e ?? "other" });
}
e.d(
    l,
    {},
    {
        Ay: function (n) {
            if (
                null == n ||
                0 === n.length ||
                !n.every((n) => {
                    let { organization: l } = n;
                    return (0, t.A)(l);
                })
            )
                return u;
            if (1 === n.length) {
                let [{ organization: l, displayNoun: e }] = n;
                return { kind: "single_full", organization: l, displayNoun: e };
            }
            return a;
        },
        m$: function (n) {
            switch (n.kind) {
                case "available":
                    return;
                case "single_full":
                    return o(n.organization, n.displayNoun);
                case "all_full":
                    return r.intl.string(i.default.bY80Jh);
            }
        },
        zA: o,
    },
);
