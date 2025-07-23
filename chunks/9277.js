(n.d(t, { Z: () => T }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(94171),
    l = n(442837),
    c = n(114101),
    u = n(481060),
    d = n(28546),
    _ = n(581883),
    f = n(459273),
    p = n(443603),
    h = n(981631),
    m = n(957825),
    g = n(388032),
    E = n(302195);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            }));
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    let { disabled: n, type: a } = e,
        [b, O] = i.useState(!1),
        I = (0, l.e7)([_.Z], () => {
            var e, t;
            return b && Object.values(null != (t = null == (e = _.Z.frecencyWithoutFetchingLatest.favoriteGifs) ? void 0 : e.gifs) ? t : {}).length <= 2;
        }),
        [T, S, A] = (0, d.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], s.X),
        N = i.useRef(0),
        C = i.useCallback(() => {
            (O(!0),
                clearTimeout(N.current),
                (N.current = setTimeout(() => {
                    (O(!1), (N.current = 0));
                }, 2000)));
        }, []);
    (0, f.yp)({
        event: h.CkL.FAVORITE_GIF,
        handler: C
    });
    let R = i.useCallback(() => {
            (0, d.RO)(m.X1.GIF, a);
        }, [a]),
        { Component: P, events: w, play: D } = (0, c.V)();
    if (n) return null;
    let L = T === m.X1.GIF && S === a;
    return (0, r.jsx)(u.ua7, {
        text: I ? g.intl.string(g.t.mE2e8P) : null,
        forceOpen: !0,
        children: (e) =>
            (0, r.jsx)(
                'div',
                v(
                    y(
                        {
                            ref: t,
                            className: o()(m.CT, E.buttonContainer)
                        },
                        e
                    ),
                    {
                        children: (0, r.jsx)(p.Z, {
                            innerClassName: E.button,
                            onMouseEnter: w.onMouseEnter,
                            onMouseLeave: w.onMouseLeave,
                            onClick: () => {
                                (R(), D());
                            },
                            isActive: L,
                            pulse: b,
                            'aria-label': g.intl.string(g.t.PtVpk5),
                            'aria-expanded': L,
                            'aria-haspopup': 'dialog',
                            'aria-controls': A,
                            children: (0, r.jsx)(P, {
                                size: 'refresh_sm',
                                color: 'currentColor'
                            })
                        })
                    }
                )
            )
    });
}
let T = i.memo(i.forwardRef(I));
