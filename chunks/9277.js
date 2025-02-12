n.d(t, { Z: () => I }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(232713),
    l = n(442837),
    u = n(114101),
    c = n(481060),
    d = n(540059),
    f = n(28546),
    _ = n(581883),
    p = n(459273),
    h = n(443603),
    m = n(981631),
    g = n(957825),
    E = n(388032),
    v = n(513632);
function y(e, t) {
    let { disabled: n, type: a } = e,
        [y, I] = r.useState(!1),
        T = (0, l.e7)([_.Z], () => {
            var e, t;
            return y && Object.values(null !== (t = null === (e = _.Z.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2;
        }),
        [b, S, A] = (0, f.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], o.X),
        N = r.useRef(0),
        C = r.useCallback(() => {
            I(!0),
                clearTimeout(N.current),
                (N.current = setTimeout(() => {
                    I(!1), (N.current = 0);
                }, 2000));
        }, []);
    (0, p.yp)({
        event: m.CkL.FAVORITE_GIF,
        handler: C
    });
    let R = r.useCallback(() => {
            (0, f.RO)(g.X1.GIF, a);
        }, [a]),
        { Component: O, events: D, play: L } = (0, u.V)(),
        x = (0, d.Q3)('ChannelGIFPickerButton');
    if (n) return null;
    let P = b === g.X1.GIF && S === a;
    return (0, i.jsx)(c.ua7, {
        text: T ? E.intl.string(E.t.mE2e8P) : null,
        forceOpen: !0,
        children: (e) =>
            (0, i.jsx)('div', {
                ref: t,
                className: s()(g.CT, v.buttonContainer),
                ...e,
                children: (0, i.jsx)(h.Z, {
                    innerClassName: v.button,
                    onMouseEnter: D.onMouseEnter,
                    onMouseLeave: D.onMouseLeave,
                    onClick: () => {
                        R(), L();
                    },
                    isActive: P,
                    pulse: y,
                    'aria-label': E.intl.string(E.t.PtVpk5),
                    'aria-expanded': P,
                    'aria-haspopup': 'dialog',
                    'aria-controls': A,
                    children: (0, i.jsx)(O, {
                        size: x ? 'refresh_sm' : void 0,
                        color: 'currentColor'
                    })
                })
            })
    });
}
let I = r.memo(r.forwardRef(y));
