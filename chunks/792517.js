r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    s = r.n(a),
    o = r(442837),
    l = r(481060),
    u = r(872810),
    c = r(199902),
    d = r(314897),
    f = r(685203),
    _ = r(112560),
    h = r(388032),
    p = r(845110);
let m = 175,
    g = 195,
    E = r(978538);
function v(e) {
    let { participant: n, width: r, noArt: a = !1, selected: v = !1 } = e,
        I = r < g,
        T = (0, o.e7)([c.Z, d.default], () =>
            c.Z.getAllActiveStreams().some((e) => {
                let { ownerId: n } = e;
                return n !== d.default.getId();
            })
        );
    return (0, i.jsx)('div', {
        className: s()(p.content, p.streamHidden, { [p.__invalid_small]: I }),
        children: (0, i.jsx)(_.Z, {
            className: p.streamHiddenEmptyState,
            artURL: E,
            noArt: a,
            selected: v,
            size: (0, _.L)(r),
            header: I ? null : h.intl.string(h.t.epU4ER),
            description: v
                ? null
                : (0, i.jsxs)('div', {
                      className: s()(p.streamHiddenCTA, { [p.largePaddingTop]: !I }),
                      children: [
                          (0, i.jsx)(f.a, {
                              isSmall: I,
                              children: (0, i.jsx)(l.Text, {
                                  variant: I ? 'text-sm/semibold' : 'text-md/semibold',
                                  color: 'none',
                                  children: r < m ? h.intl.string(h.t['I6JG4+']) : h.intl.string(h.t['7Xq/nZ'])
                              })
                          }),
                          T
                              ? (0, i.jsx)(f.a, {
                                    className: p.addCTA,
                                    tooltip: h.intl.string(h.t.wCrzur),
                                    onClick: (e) => {
                                        e.stopPropagation(), (0, u.rn)(n.stream, { forceMultiple: !0 });
                                    },
                                    isSmall: I,
                                    children: (0, i.jsx)(l.EyePlusIcon, {
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
