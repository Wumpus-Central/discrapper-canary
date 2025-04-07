n.d(t, { Z: () => h }), n(388685);
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
    _ = n(388032),
    p = n(72903);
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
        placeholder: _.NW.string(_.t.XPGZXF),
        'aria-label': _.NW.string(_.t.ljnBlp),
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
                                      className: p.popoutRoleDot,
                                      color: null != (t = e.colorString) ? t : (0, l.Rf)(f.p6O),
                                      background: !1,
                                      tooltip: !1
                                  })
                                : (0, r.jsx)(u.xko, {
                                      className: p.popoutRoleCircle,
                                      color: null != (n = e.colorString) ? n : (0, l.Rf)(f.p6O)
                                  }),
                            (0, r.jsx)(u.lo1.Label, { children: e.name })
                        ]
                    },
                    e.id
                );
            })
    });
};
