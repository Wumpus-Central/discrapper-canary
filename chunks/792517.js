n.d(t, { Z: () => E });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(442837),
    o = n(481060),
    l = n(872810),
    u = n(199902),
    c = n(314897),
    d = n(685203),
    f = n(112560),
    _ = n(388032),
    p = n(53512);
let h = 175,
    m = 195,
    g = n(978538);
function E(e) {
    let { participant: t, width: n, noArt: r = !1, selected: E = !1 } = e,
        v = n < m,
        y = (0, s.e7)([u.Z, c.default], () =>
            u.Z.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== c.default.getId();
            })
        );
    return (0, i.jsx)('div', {
        className: a()(p.content, p.streamHidden, { [p.__invalid_small]: v }),
        children: (0, i.jsx)(f.Z, {
            className: p.streamHiddenEmptyState,
            artURL: g,
            noArt: r,
            selected: E,
            size: (0, f.L)(n),
            header: v ? null : _.intl.string(_.t.epU4ER),
            description: E
                ? null
                : (0, i.jsxs)('div', {
                      className: a()(p.streamHiddenCTA, { [p.largePaddingTop]: !v }),
                      children: [
                          (0, i.jsx)(d.a, {
                              isSmall: v,
                              children: (0, i.jsx)(o.Text, {
                                  variant: v ? 'text-sm/semibold' : 'text-md/semibold',
                                  color: 'none',
                                  children: n < h ? _.intl.string(_.t['I6JG4+']) : _.intl.string(_.t['7Xq/nZ'])
                              })
                          }),
                          y
                              ? (0, i.jsx)(d.a, {
                                    className: p.addCTA,
                                    tooltip: _.intl.string(_.t.wCrzur),
                                    onClick: (e) => {
                                        e.stopPropagation(), (0, l.rn)(t.stream, { forceMultiple: !0 });
                                    },
                                    isSmall: v,
                                    children: (0, i.jsx)(o.OgY, {
                                        size: 'xs',
                                        color: 'currentColor',
                                        className: p.addStreamIcon
                                    })
                                })
                              : null
                      ]
                  })
        })
    });
}
