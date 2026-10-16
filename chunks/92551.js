r.d(n, { d: () => s, n: () => p });
var e = r(226536),
    o = r(626584),
    i = r(105292);
let a = new o.A("MarketingStringFormat.tsx");
function c(t, n, r) {
    if ("" === t) return { ok: !0, content: n };
    try {
        return { ok: !0, content: r((0, e.b2)(t, i.intl.currentLocale)) };
    } catch (t) {
        return (a.warn("Failed to format marketing string", t), { ok: !1, error: String(t) });
    }
}
function s(t, n) {
    return c(t, "", (t) => i.intl.format(() => t, n));
}
function p(t, n) {
    return c(t, "", (t) => i.intl.formatToPlainString(() => t, n));
}
