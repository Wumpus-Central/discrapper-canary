n.d(t, {
    Z: () => f,
    k: () => p,
}),
    n(314940);
var r,
    l = n(951288);
n(647438);
var a = n(278074),
    i = n(685816),
    o = n(780384),
    s = n(481060),
    c = n(410030),
    u = n(884697),
    d = n(388032),
    p = (((r = {}).BANNER = "banner"), (r.MODAL = "modal"), (r.CARD = "card"), r);
let f = (e) => {
    let { category: t, display: n, className: r, shopBlockType: p } = e,
        f = (0, c.ZP)();
    if (null == t.unpublishedAt) return null;
    let b = (0, u.OT)(t.unpublishedAt);
    function y(e) {
        return (0, l.jsx)(s.IGR, {
            disableColor: !0,
            text: e,
            className: r,
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
    return (0, a.EQ)([n, b > 1])
        .with(["card", !0], () =>
            null != p && p === i.z.HERO ? y(d.intl.formatToPlainString(d.t.Io7ozs, { days: b })) : null,
        )
        .with(["banner", !0], () => y(d.intl.formatToPlainString(d.t["8gsP5O"], { days: b })))
        .with(["modal", !0], () => y(d.intl.formatToPlainString(d.t.Io7ozs, { days: b })))
        .otherwise(() => y(d.intl.string(d.t.Bc13HB)));
};
