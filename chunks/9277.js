n.d(t, { Z: () => S }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(55160),
    l = n(442837),
    c = n(114101),
    u = n(28664),
    d = n(777019),
    f = n(28546),
    p = n(581883),
    _ = n(459273),
    m = n(713913),
    h = n(541716),
    g = n(443603),
    E = n(981631),
    b = n(957825),
    y = n(388032),
    O = n(564355);
function v(e, t) {
    let { disabled: n, type: a, channel: v } = e,
        [S, I] = i.useState(!1),
        T = (0, l.e7)([p.Z], () => {
            var e, t;
            return (
                S &&
                Object.values(
                    null != (t = null == (e = p.Z.frecencyWithoutFetchingLatest.favoriteGifs) ? void 0 : e.gifs)
                        ? t
                        : {},
                ).length <= 2
            );
        }),
        [C, A, N, P] = (0, f.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId, e.activeChannelId], s.X),
        R = i.useRef(0),
        D = i.useCallback(() => {
            I(!0),
                clearTimeout(R.current),
                (R.current = setTimeout(() => {
                    I(!1), (R.current = 0);
                }, 2000));
        }, []);
    (0, _.yp)({
        event: E.CkL.FAVORITE_GIF,
        handler: D,
    });
    let w = i.useCallback(() => {
            (0, f.RO)(b.X1.GIF, a, v.id);
        }, [a, v.id]),
        { Component: x, events: L, play: j } = (0, c.V)(),
        M = (0, m.v)(d.O),
        k = a === h.Ie.NORMAL ? M : void 0;
    if (n) return null;
    let U = C === b.X1.GIF && A === a && P === v.id;
    return (0, r.jsx)(u.u, {
        keyboardShortcut: T ? void 0 : k,
        text: y.intl.string(T ? y.t.mE2e8A : y.t.nffuyb),
        shouldShow: T || null != k,
        forceOpen: T,
        children: (0, r.jsx)("div", {
            ref: t,
            className: o()(b.CT, O.buttonContainer),
            children: (0, r.jsx)(g.Z, {
                className: O.button,
                onMouseEnter: L.onMouseEnter,
                onMouseLeave: L.onMouseLeave,
                onClick: () => {
                    w(), j();
                },
                isActive: U,
                pulse: S,
                "aria-label": y.intl.string(y.t.PtVpk2),
                "aria-expanded": U,
                "aria-haspopup": "dialog",
                "aria-controls": N,
                children: (0, r.jsx)(x, {
                    size: "refresh_sm",
                    color: "currentColor",
                }),
            }),
        }),
    });
}
let S = i.memo(i.forwardRef(v));
