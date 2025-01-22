r.d(n, {
    Z: function () {
        return v;
    }
});
var i = r(200651);
r(192379);
var a = r(120356),
    o = r.n(a),
    s = r(442837),
    l = r(481060),
    u = r(872810),
    c = r(199902),
    d = r(314897),
    f = r(685203),
    p = r(112560),
    h = r(388032),
    _ = r(845110);
let m = 175,
    g = 195,
    E = r(978538);
function v(e) {
    let { participant: n, width: r, noArt: a = !1, selected: v = !1 } = e,
        y = r < g,
        b = (0, s.e7)([c.Z, d.default], () =>
            c.Z.getAllActiveStreams().some((e) => {
                let { ownerId: n } = e;
                return n !== d.default.getId();
            })
        );
    return (0, i.jsx)('div', {
        className: o()(_.content, _.streamHidden, { [_.__invalid_small]: y }),
        children: (0, i.jsx)(p.Z, {
            className: _.streamHiddenEmptyState,
            artURL: E,
            noArt: a,
            selected: v,
            size: (0, p.L)(r),
            header: y ? null : h.intl.string(h.t.epU4ER),
            description: v
                ? null
                : (0, i.jsxs)('div', {
                      className: o()(_.streamHiddenCTA, { [_.largePaddingTop]: !y }),
                      children: [
                          (0, i.jsx)(f.a, {
                              isSmall: y,
                              children: (0, i.jsx)(l.Text, {
                                  variant: y ? 'text-sm/semibold' : 'text-md/semibold',
                                  color: 'none',
                                  children: r < m ? h.intl.string(h.t['I6JG4+']) : h.intl.string(h.t['7Xq/nZ'])
                              })
                          }),
                          b
                              ? (0, i.jsx)(f.a, {
                                    className: _.addCTA,
                                    tooltip: h.intl.string(h.t.wCrzur),
                                    onClick: (e) => {
                                        e.stopPropagation(), (0, u.rn)(n.stream, { forceMultiple: !0 });
                                    },
                                    isSmall: y,
                                    children: (0, i.jsx)(l.EyePlusIcon, {
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
