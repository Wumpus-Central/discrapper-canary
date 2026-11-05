var l = n(395592),
    r = n(503922),
    i = n(191850),
    a = n(792996);
let s = { ok: !1, code: "failed", message: "" };
async function u(e, t) {
    return (await (0, l.x)(e, () => t().catch(() => s))) ?? s;
}
n.d(
    t,
    {},
    {
        b: u,
        c: function (e, t) {
            return u(e, () => (0, r.$D)(e, t.id)).then((e) =>
                e.ok ? null : a.intl.string("unconfirmed" === e.code ? i.default.iqN7YA : i.default.Npmmnp),
            );
        },
    },
);
