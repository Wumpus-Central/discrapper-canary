(n.d(t, { Z: () => h }), n(388685));
var r = n(255367);
n(73800);
var i = n(658722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(442837),
    c = n(481060),
    u = n(402235),
    d = n(485386),
    _ = n(981631),
    f = n(388032),
    p = n(72903);
let h = function (e) {
    let { className: t, guild: n, roleStyle: i, roleFilter: o, onSelect: h, onClose: m } = e,
        g = (0, l.e7)([d.Z], () => d.Z.getSortedRoles(n.id)),
        E = (0, u.ZP)(n.id, null),
        b = (e) =>
            s()(g)
                .filter(o)
                .filter((t) => a()(e.toLowerCase(), t.name.toLowerCase()))
                .value();
    return (0, r.jsx)(c.DBG, {
        className: t,
        value: new Set(),
        onChange: h,
        placeholder: f.intl.string(f.t.XPGZXF),
        'aria-label': f.intl.string(f.t.ljnBlp),
        onClose: m,
        children: (e) =>
            b(e).map((e) => {
                var t, n;
                return (0, r.jsxs)(
                    c.lo1,
                    {
                        value: e.id,
                        children: [
                            'dot' === i
                                ? (0, r.jsx)(c.FhE, {
                                      className: p.popoutRoleDot,
                                      color: null != (t = e.colorString) ? t : _.Pbq,
                                      colors: E ? e.colorStrings : null,
                                      background: !1,
                                      tooltip: !1
                                  })
                                : (0, r.jsx)(c.xko, {
                                      className: p.popoutRoleCircle,
                                      color: null != (n = e.colorString) ? n : _.Pbq,
                                      colors: E ? e.colorStrings : null
                                  }),
                            (0, r.jsx)(c.lo1.Label, { children: e.name })
                        ]
                    },
                    e.id
                );
            })
    });
};
