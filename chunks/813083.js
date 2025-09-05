n.d(t, {
    Z: () => f,
    k: () => d,
}),
    n(314940);
var r = n(951288);
n(647438);
var i = n(278074),
    a = n(685816),
    o = n(780384),
    s = n(481060),
    l = n(410030),
    c = n(884697),
    u = n(388032),
    d = (function (e) {
        return (e.BANNER = "banner"), (e.MODAL = "modal"), (e.CARD = "card"), e;
    })({});
let f = (e) => {
    let { category: t, display: n, className: d, shopBlockType: f } = e,
        _ = (0, l.ZP)();
    if (null == t.unpublishedAt) return null;
    let p = (0, c.OT)(t.unpublishedAt);
    function h(e) {
        return (0, r.jsx)(s.IGR, {
            disableColor: !0,
            text: e,
            className: d,
            style: (0, o.wj)(_)
                ? {
                      color: "var(--black-500)",
                      backgroundColor: "var(--white-500)",
                  }
                : {
                      color: "var(--white-500)",
                      backgroundColor: "var(--black-500)",
                  },
        });
    }
    return (0, i.EQ)([n, p > 1])
        .with(["card", !0], () =>
            null != f && f === a.z.HERO ? h(u.intl.formatToPlainString(u.t.Io7ozs, { days: p })) : null,
        )
        .with(["banner", !0], () => h(u.intl.formatToPlainString(u.t["8gsP5O"], { days: p })))
        .with(["modal", !0], () => h(u.intl.formatToPlainString(u.t.Io7ozs, { days: p })))
        .otherwise(() => h(u.intl.string(u.t.Bc13HB)));
};
