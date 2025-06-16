n.d(t, { Z: () => u }), n(314940);
var r = n(255367);
n(73800);
var i = n(278074),
    a = n(780384),
    o = n(481060),
    s = n(410030),
    l = n(884697),
    c = n(388032);
let u = (e) => {
    let { category: t, display: n, className: u } = e,
        d = (0, s.ZP)();
    if (null == t.unpublishedAt) return null;
    let f = (0, l.OT)(t.unpublishedAt);
    function _(e) {
        return (0, r.jsx)(o.IGR, {
            disableColor: !0,
            text: e,
            className: u,
            style: (0, a.wj)(d)
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
    return (0, i.EQ)([n, f > 1])
        .with(['card', !0], () => null)
        .with(['banner', !0], () => _(c.intl.formatToPlainString(c.t['8gsP5O'], { days: f })))
        .with(['modal', !0], () => _(c.intl.formatToPlainString(c.t.Io7ozs, { days: f })))
        .otherwise(() => _(c.intl.string(c.t.Bc13HB)));
};
