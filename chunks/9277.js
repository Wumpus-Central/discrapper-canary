var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(232713),
    c = r(442837),
    d = r(114101),
    f = r(481060),
    _ = r(540059),
    h = r(28546),
    p = r(581883),
    m = r(459273),
    g = r(443603),
    E = r(981631),
    v = r(957825),
    I = r(388032),
    T = r(553796);
function b(e, n) {
    let { disabled: r, type: i } = e,
        [o, b] = s.useState(!1),
        y = (0, c.e7)([p.Z], () => {
            var e, n;
            return o && Object.values(null !== (n = null === (e = p.Z.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== n ? n : {}).length <= 2;
        }),
        [S, A, N] = (0, h.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], u.X),
        C = s.useRef(0),
        R = s.useCallback(() => {
            b(!0),
                clearTimeout(C.current),
                (C.current = setTimeout(() => {
                    b(!1), (C.current = 0);
                }, 2000));
        }, []);
    (0, m.yp)({
        event: E.CkL.FAVORITE_GIF,
        handler: R
    });
    let O = s.useCallback(() => {
            (0, h.RO)(v.X1.GIF, i);
        }, [i]),
        { Component: D, events: L, play: x } = (0, d.V)(),
        w = (0, _.Q3)('ChannelGIFPickerButton');
    if (r) return null;
    let P = S === v.X1.GIF && A === i;
    return (0, a.jsx)(f.Tooltip, {
        text: y ? I.intl.string(I.t.mE2e8P) : null,
        forceOpen: !0,
        children: (e) =>
            (0, a.jsx)('div', {
                ref: n,
                className: l()(v.CT, T.buttonContainer),
                ...e,
                children: (0, a.jsx)(g.Z, {
                    innerClassName: T.button,
                    onMouseEnter: L.onMouseEnter,
                    onMouseLeave: L.onMouseLeave,
                    onClick: () => {
                        O(), x();
                    },
                    isActive: P,
                    pulse: o,
                    'aria-label': I.intl.string(I.t.PtVpk5),
                    'aria-expanded': P,
                    'aria-haspopup': 'dialog',
                    'aria-controls': N,
                    children: (0, a.jsx)(D, {
                        size: w ? 'refresh_sm' : void 0,
                        color: 'currentColor'
                    })
                })
            })
    });
}
n.Z = s.memo(s.forwardRef(b));
