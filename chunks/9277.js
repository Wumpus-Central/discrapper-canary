var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(232713),
    c = r(442837),
    d = r(114101),
    f = r(481060),
    p = r(540059),
    h = r(28546),
    _ = r(581883),
    m = r(459273),
    g = r(443603),
    E = r(981631),
    v = r(957825),
    y = r(388032),
    b = r(553796);
function I(e, n) {
    let { disabled: r, type: i } = e,
        [s, I] = o.useState(!1),
        T = (0, c.e7)([_.Z], () => {
            var e, n;
            return s && Object.values(null !== (n = null === (e = _.Z.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== n ? n : {}).length <= 2;
        }),
        [S, A, C] = (0, h.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], u.X),
        N = o.useRef(0),
        R = o.useCallback(() => {
            I(!0),
                clearTimeout(N.current),
                (N.current = setTimeout(() => {
                    I(!1), (N.current = 0);
                }, 2000));
        }, []);
    (0, m.yp)({
        event: E.CkL.FAVORITE_GIF,
        handler: R
    });
    let O = o.useCallback(() => {
            (0, h.RO)(v.X1.GIF, i);
        }, [i]),
        { Component: D, events: L, play: x } = (0, d.V)(),
        w = (0, p.Q3)('ChannelGIFPickerButton');
    if (r) return null;
    let P = S === v.X1.GIF && A === i;
    return (0, a.jsx)(f.Tooltip, {
        text: T ? y.intl.string(y.t.mE2e8P) : null,
        forceOpen: !0,
        children: (e) =>
            (0, a.jsx)('div', {
                ref: n,
                className: l()(v.CT, b.buttonContainer),
                ...e,
                children: (0, a.jsx)(g.Z, {
                    innerClassName: b.button,
                    onMouseEnter: L.onMouseEnter,
                    onMouseLeave: L.onMouseLeave,
                    onClick: () => {
                        O(), x();
                    },
                    isActive: P,
                    pulse: s,
                    'aria-label': y.intl.string(y.t.PtVpk5),
                    'aria-expanded': P,
                    'aria-haspopup': 'dialog',
                    'aria-controls': C,
                    children: (0, a.jsx)(D, {
                        size: w ? 'refresh_sm' : void 0,
                        color: 'currentColor'
                    })
                })
            })
    });
}
n.Z = o.memo(o.forwardRef(I));
