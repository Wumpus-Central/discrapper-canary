(n.d(t, { Z: () => u }), n(314940));
var r = n(255367);
n(73800);
var i = n(278074),
    l = n(780384),
    a = n(481060),
    o = n(410030),
    s = n(884697),
    c = n(388032);
let u = (e) => {
    let { category: t, display: n, className: u } = e,
        d = (0, o.ZP)();
    if (null == t.unpublishedAt) return null;
    let p = (0, s.OT)(t.unpublishedAt);
    function h(e) {
        return (0, r.jsx)(a.IGR, {
            disableColor: !0,
            text: e,
            className: u,
            style: (0, l.wj)(d)
                ? {
                      color: 'var(--black-500)',
                      backgroundColor: 'var(--white-500)'
                  }
                : {
                      color: 'var(--white-500)',
                      backgroundColor: 'var(--black-500)'
                  }
        });
    }
    return (0, i.EQ)([n, p > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => h(c.intl.formatToPlainString(c.t['8gsP5O'], { days: p })))
        .with(['modal', !0], () => h(c.intl.formatToPlainString(c.t.Io7ozs, { days: p })))
        .otherwise(() => h(c.intl.string(c.t.Bc13HB)));
};
