n.d(t, { d: () => d, n: () => s });
var o = n(226536),
    l = n(626584),
    a = n(105292);
let r = new l.A("MarketingStringFormat.tsx");
function i(e, t, n) {
    if ("" === e) return { ok: !0, content: t };
    try {
        return { ok: !0, content: n((0, o.b2)(e, a.intl.currentLocale)) };
    } catch (e) {
        return (r.warn("Failed to format marketing string", e), { ok: !1, error: String(e) });
    }
}
function d(e, t) {
    return i(e, "", (e) => a.intl.format(() => e, t));
}
function s(e, t) {
    return i(e, "", (e) => a.intl.formatToPlainString(() => e, t));
}
