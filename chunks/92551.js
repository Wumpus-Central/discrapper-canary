var i = n(226536),
    r = n(626584),
    a = n(792996);
let s = new r.A("MarketingStringFormat.tsx");
function l(e, t, n) {
    if ("" === e) return { ok: !0, content: t };
    try {
        return { ok: !0, content: n((0, i.b2)(e, a.intl.currentLocale)) };
    } catch (e) {
        return (s.warn("Failed to format marketing string", e), { ok: !1, error: String(e) });
    }
}
n.d(
    t,
    {},
    {
        d: function (e, t) {
            return l(e, "", (e) => a.intl.format(() => e, t));
        },
        n: function (e, t) {
            return l(e, "", (e) => a.intl.formatToPlainString(() => e, t));
        },
    },
);
