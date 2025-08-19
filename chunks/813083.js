r.d(t, {
    Z: () => p,
    k: () => d,
}),
    r(314940);
var n,
    l = r(951288);
r(647438);
var a = r(278074),
    i = r(780384),
    o = r(481060),
    s = r(410030),
    c = r(884697),
    u = r(388032),
    d = (((n = {}).BANNER = "banner"), (n.MODAL = "modal"), (n.CARD = "card"), n);
let p = (e) => {
    let { category: t, display: r, className: n } = e,
        d = (0, s.ZP)();
    if (null == t.unpublishedAt) return null;
    let p = (0, c.OT)(t.unpublishedAt);
    function g(e) {
        return (0, l.jsx)(o.IGR, {
            disableColor: !0,
            text: e,
            className: n,
            style: (0, i.wj)(d)
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
    return (0, a.EQ)([r, p > 1])
        .with(["card", !0], () => null)
        .with(["banner", !0], () => g(u.intl.formatToPlainString(u.t["8gsP5O"], { days: p })))
        .with(["modal", !0], () => g(u.intl.formatToPlainString(u.t.Io7ozs, { days: p })))
        .otherwise(() => g(u.intl.string(u.t.Bc13HB)));
};
