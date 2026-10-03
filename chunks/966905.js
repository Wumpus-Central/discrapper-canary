n.d(t, { W: () => o, c: () => u });
var l = n(277977),
    a = n(866265),
    i = n(50617),
    s = n(375708);
let r = { ok: !1, code: "failed", message: "" };
async function o(e, t) {
    return (await (0, a.Q)(e, () => t().catch(() => r))) ?? r;
}
function u(e, t) {
    return o(e, () => (0, l.$D)(e, t.id)).then((e) =>
        e.ok ? null : s.intl.string("unconfirmed" === e.code ? i.default["2xSPXh"] : i.default.Eik7n8),
    );
}
