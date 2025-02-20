n.d(t, { Z: () => h }), n(47120);
var r = n(200651);
n(192379);
var i = n(658722),
    o = n.n(i),
    a = n(392711),
    s = n.n(a),
    l = n(866442),
    c = n(442837),
    u = n(481060),
    d = n(430824),
    f = n(981631),
    p = n(388032),
    _ = n(929792);
let h = function (e) {
    let { className: t, guild: n, roleStyle: i, roleFilter: a, onSelect: h, onClose: m } = e,
        g = (0, c.e7)([d.Z], () => d.Z.getRoles(n.id)),
        E = (e) =>
            s()(g)
                .filter(a)
                .filter((t) => o()(e.toLowerCase(), t.name.toLowerCase()))
                .value();
    return (0, r.jsx)(u.DBG, {
        className: t,
        value: new Set(),
        onChange: h,
        placeholder: p.NW.string(p.t.XPGZXF),
        'aria-label': p.NW.string(p.t.ljnBlp),
        onClose: m,
        children: (e) =>
            E(e).map((e) => {
                var t, n;
                return (0, r.jsxs)(
                    u.lo1,
                    {
                        value: e.id,
                        children: [
                            'dot' === i
                                ? (0, r.jsx)(u.FhE, {
                                      className: _.popoutRoleDot,
                                      color: null !== (t = e.colorString) && void 0 !== t ? t : (0, l.Rf)(f.p6O),
                                      background: !1,
                                      tooltip: !1
                                  })
                                : (0, r.jsx)(u.xko, {
                                      className: _.popoutRoleCircle,
                                      color: null !== (n = e.colorString) && void 0 !== n ? n : (0, l.Rf)(f.p6O)
                                  }),
                            (0, r.jsx)(u.lo1.Label, { children: e.name })
                        ]
                    },
                    e.id
                );
            })
    });
};
