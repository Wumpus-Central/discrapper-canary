r.d(t, {
    Z: () => f,
    k: () => p,
}),
    r(314940);
var n,
    l = r(951288);
r(647438);
var i = r(278074),
    a = r(685816),
    o = r(780384),
    s = r(481060),
    c = r(410030),
    u = r(884697),
    d = r(388032),
    p = (((n = {}).BANNER = "banner"), (n.MODAL = "modal"), (n.CARD = "card"), n);
let f = (e) => {
    let { category: t, display: r, className: n, shopBlockType: p } = e,
        f = (0, c.ZP)();
    if (null == t.unpublishedAt) return null;
    let b = (0, u.OT)(t.unpublishedAt);
    function h(e) {
        return (0, l.jsx)(s.IGR, {
            disableColor: !0,
            text: e,
            className: n,
            style: (0, o.wj)(f)
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
    return (0, i.EQ)([r, b > 1])
        .with(["card", !0], () =>
            null != p && p === a.z.HERO ? h(d.intl.formatToPlainString(d.t.Io7ozs, { days: b })) : null,
        )
        .with(["banner", !0], () => h(d.intl.formatToPlainString(d.t["8gsP5O"], { days: b })))
        .with(["modal", !0], () => h(d.intl.formatToPlainString(d.t.Io7ozs, { days: b })))
        .otherwise(() => h(d.intl.string(d.t.Bc13HB)));
};
