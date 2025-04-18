n.d(t, { Z: () => m }), n(388685);
var r = n(200651);
n(192379);
var i = n(658722),
    a = n.n(i),
    o = n(392711),
    s = n.n(o),
    l = n(866442),
    c = n(442837),
    u = n(481060),
    d = n(181918),
    f = n(430824),
    _ = n(981631),
    p = n(388032),
    h = n(72903);
let m = function (e) {
    let { className: t, guild: n, roleStyle: i, roleFilter: o, onSelect: m, onClose: g } = e,
        E = (0, c.e7)([f.Z], () => f.Z.getRoles(n.id)),
        b = (0, d.$V)(n.id, 'AddRolesPopout'),
        y = (e) =>
            s()(E)
                .filter(o)
                .filter((t) => a()(e.toLowerCase(), t.name.toLowerCase()))
                .value();
    return (0, r.jsx)(u.DBG, {
        className: t,
        value: new Set(),
        onChange: m,
        placeholder: p.NW.string(p.t.XPGZXF),
        'aria-label': p.NW.string(p.t.ljnBlp),
        onClose: g,
        children: (e) =>
            y(e).map((e) => {
                var t, n;
                return (0, r.jsxs)(
                    u.lo1,
                    {
                        value: e.id,
                        children: [
                            'dot' === i
                                ? (0, r.jsx)(u.FhE, {
                                      className: h.popoutRoleDot,
                                      color: null != (t = e.colorString) ? t : (0, l.Rf)(_.p6O),
                                      colors: b ? e.colorStrings : null,
                                      background: !1,
                                      tooltip: !1
                                  })
                                : (0, r.jsx)(u.xko, {
                                      className: h.popoutRoleCircle,
                                      color: null != (n = e.colorString) ? n : (0, l.Rf)(_.p6O),
                                      colors: b ? e.colorStrings : null
                                  }),
                            (0, r.jsx)(u.lo1.Label, { children: e.name })
                        ]
                    },
                    e.id
                );
            })
    });
};
