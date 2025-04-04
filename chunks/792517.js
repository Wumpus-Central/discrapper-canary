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
    _ = n(388032),
    p = n(334299);
let h = 175,
    m = 195,
    g = n(978538);
function E(e) {
    let { participant: t, width: n, noArt: i = !1, selected: E = !1 } = e,
        b = n < m,
        y = (0, a.e7)([c.Z, u.default], () =>
            c.Z.getAllActiveStreams().some((e) => {
                let { ownerId: t } = e;
                return t !== u.default.getId();
            })
        );
    return (0, r.jsx)('div', {
        className: o()(p.content, p.streamHidden, { [p.__invalid_small]: b }),
        children: (0, r.jsx)(f.Z, {
            className: p.streamHiddenEmptyState,
            artURL: g,
            noArt: i,
            selected: E,
            size: (0, f.L)(n),
            header: b ? null : _.NW.string(_.t.epU4ER),
            description: E
                ? null
                : (0, r.jsxs)('div', {
                      className: o()(p.streamHiddenCTA, { [p.largePaddingTop]: !b }),
                      children: [
                          (0, r.jsx)(d.a, {
                              isSmall: b,
                              children: (0, r.jsx)(s.Text, {
                                  variant: b ? 'text-sm/semibold' : 'text-md/semibold',
                                  color: 'none',
                                  children: n < h ? _.NW.string(_.t['I6JG4+']) : _.NW.string(_.t['7Xq/nZ'])
                              })
                          }),
                          y
                              ? (0, r.jsx)(d.a, {
                                    className: p.addCTA,
                                    tooltip: _.NW.string(_.t.wCrzur),
                                    onClick: (e) => {
                                        e.stopPropagation(), (0, l.rn)(t.stream, { forceMultiple: !0 });
                                    },
                                    isSmall: b,
                                    children: (0, r.jsx)(s.OgY, {
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
