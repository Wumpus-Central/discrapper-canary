n.d(t, { Z: () => E });
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(442837),
    s = n(481060),
    l = n(872810),
    c = n(199902),
    u = n(314897),
    d = n(685203),
    f = n(112560),
    p = n(388032),
    _ = n(887844);
let h = 175,
    m = 195,
    g = n(978538);
function E(e) {
    let { participant: t, width: n, noArt: i = !1, selected: E = !1 } = e,
        v = n < m,
        b = (0, a.e7)([c.Z, u.default], () =>
            c.Z.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== u.default.getId();
            })
        );
    return (0, r.jsx)('div', {
        className: o()(_.content, _.streamHidden, { [_.__invalid_small]: v }),
        children: (0, r.jsx)(f.Z, {
            className: _.streamHiddenEmptyState,
            artURL: g,
            noArt: i,
            selected: E,
            size: (0, f.L)(n),
            header: v ? null : p.NW.string(p.t.epU4ER),
            description: E
                ? null
                : (0, r.jsxs)('div', {
                      className: o()(_.streamHiddenCTA, { [_.largePaddingTop]: !v }),
                      children: [
                          (0, r.jsx)(d.a, {
                              isSmall: v,
                              children: (0, r.jsx)(s.Text, {
                                  variant: v ? 'text-sm/semibold' : 'text-md/semibold',
                                  color: 'none',
                                  children: n < h ? p.NW.string(p.t['I6JG4+']) : p.NW.string(p.t['7Xq/nZ'])
                              })
                          }),
                          b
                              ? (0, r.jsx)(d.a, {
                                    className: _.addCTA,
                                    tooltip: p.NW.string(p.t.wCrzur),
                                    onClick: (e) => {
                                        e.stopPropagation(), (0, l.rn)(t.stream, { forceMultiple: !0 });
                                    },
                                    isSmall: v,
                                    children: (0, r.jsx)(s.OgY, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: _.addStreamIcon
                                    })
                                })
                              : null
                      ]
                  })
        })
    });
}
