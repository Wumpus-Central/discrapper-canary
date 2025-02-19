n.d(t, { Z: () => T }), n(47120);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(232713),
    l = n(442837),
    c = n(114101),
    u = n(481060),
    d = n(540059),
    f = n(28546),
    p = n(581883),
    _ = n(459273),
    h = n(443603),
    m = n(981631),
    g = n(957825),
    E = n(388032),
    v = n(342203);
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
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
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
    let { disabled: n, type: o } = e,
        [b, O] = i.useState(!1),
        I = (0, l.e7)([p.Z], () => {
            var e, t;
            return b && Object.values(null !== (t = null === (e = p.Z.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2;
        }),
        [T, N, A] = (0, f.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], s.X),
        C = i.useRef(0),
        R = i.useCallback(() => {
            O(!0),
                clearTimeout(C.current),
                (C.current = setTimeout(() => {
                    O(!1), (C.current = 0);
                }, 2000));
        }, []);
    (0, _.yp)({
        event: m.CkL.FAVORITE_GIF,
        handler: R
    });
    let P = i.useCallback(() => {
            (0, f.RO)(g.X1.GIF, o);
        }, [o]),
        { Component: w, events: D, play: x } = (0, c.V)(),
        L = (0, d.Q3)('ChannelGIFPickerButton');
    if (n) return null;
    let M = T === g.X1.GIF && N === o;
    return (0, r.jsx)(u.ua7, {
        text: I ? E.NW.string(E.t.mE2e8P) : null,
        forceOpen: !0,
        children: (e) =>
            (0, r.jsx)(
                'div',
                S(
                    y(
                        {
                            ref: t,
                            className: a()(g.CT, v.buttonContainer)
                        },
                        e
                    ),
                    {
                        children: (0, r.jsx)(h.Z, {
                            innerClassName: v.button,
                            onMouseEnter: D.onMouseEnter,
                            onMouseLeave: D.onMouseLeave,
                            onClick: () => {
                                P(), x();
                            },
                            isActive: M,
                            pulse: b,
                            'aria-label': E.NW.string(E.t.PtVpk5),
                            'aria-expanded': M,
                            'aria-haspopup': 'dialog',
                            'aria-controls': A,
                            children: (0, r.jsx)(w, {
                                size: L ? 'refresh_sm' : void 0,
                                color: 'currentColor'
                            })
                        })
                    }
                )
            )
    });
}
let T = i.memo(i.forwardRef(I));
