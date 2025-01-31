n.d(t, { Z: () => _ }), n(627341);
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(278074),
    o = n(657707),
    l = n(481060),
    u = n(841784),
    c = n(556638),
    d = n(981631),
    f = n(748442);
function _(e) {
    let { activity: t, stream: n, tooltip: r, className: _ } = e;
    if (null == t && null == n) return null;
    let p =
        null != n
            ? o.m3e
            : (0, s.EQ)(t)
                  .when(u.Z, () => o.jje)
                  .with({ type: d.IIU.PLAYING }, () => o.iWm)
                  .with({ type: d.IIU.LISTENING }, () => o.aXf)
                  .with({ type: d.IIU.WATCHING }, () => o.ARS)
                  .with({ type: d.IIU.STREAMING }, () => o.m3e)
                  .with({ type: d.IIU.COMPETING }, () => o.iWm)
                  .otherwise(() => null);
    return null == p
        ? null
        : null == r
          ? (0, i.jsx)(p, {
                size: 'custom',
                color: l.TVs.colors.STATUS_POSITIVE,
                className: a()(f.icon, _)
            })
          : (0, i.jsx)(l.ua7, {
                text: r,
                tooltipContentClassName: f.container,
                delay: c.X,
                children: (e) =>
                    (0, i.jsx)(p, {
                        ...e,
                        size: 'custom',
                        color: l.TVs.colors.STATUS_POSITIVE,
                        className: a()(f.icon, _)
                    })
            });
}
