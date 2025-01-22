var i = r(47120);
var a = r(200651);
r(192379);
var o = r(658722),
    s = r.n(o),
    l = r(392711),
    u = r.n(l),
    c = r(866442),
    d = r(442837),
    f = r(481060),
    p = r(430824),
    h = r(981631),
    _ = r(388032),
    m = r(286841);
function g(e) {
    let { className: n, guild: r, roleStyle: i, roleFilter: o, onSelect: l, onClose: g } = e,
        E = (0, d.e7)([p.Z], () => p.Z.getRoles(r.id)),
        v = (e) =>
            u()(E)
                .filter(o)
                .filter((n) => s()(e.toLowerCase(), n.name.toLowerCase()))
                .value();
    return (0, a.jsx)(f.ComboboxPopout, {
        className: n,
        value: new Set(),
        onChange: l,
        placeholder: _.intl.string(_.t.XPGZXF),
        'aria-label': _.intl.string(_.t.ljnBlp),
        onClose: g,
        children: (e) =>
            v(e).map((e) => {
                var n, r;
                return (0, a.jsxs)(
                    f.ComboboxItem,
                    {
                        value: e.id,
                        children: [
                            'dot' === i
                                ? (0, a.jsx)(f.RoleDot, {
                                      className: m.popoutRoleDot,
                                      color: null !== (n = e.colorString) && void 0 !== n ? n : (0, c.Rf)(h.p6O),
                                      background: !1,
                                      tooltip: !1
                                  })
                                : (0, a.jsx)(f.RoleCircle, {
                                      className: m.popoutRoleCircle,
                                      color: null !== (r = e.colorString) && void 0 !== r ? r : (0, c.Rf)(h.p6O)
                                  }),
                            (0, a.jsx)(f.ComboboxItem.Label, { children: e.name })
                        ]
                    },
                    e.id
                );
            })
    });
}
n.Z = g;
