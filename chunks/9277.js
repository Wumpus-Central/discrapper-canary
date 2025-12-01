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
    let { disabled: n, type: a } = e,
        [v, S] = i.useState(!1),
        I = (0, l.e7)([p.Z], () => {
            var e, t;
            return (
                v &&
                Object.values(
                    null != (t = null == (e = p.Z.frecencyWithoutFetchingLatest.favoriteGifs) ? void 0 : e.gifs)
                        ? t
                        : {},
                ).length <= 2
            );
        }),
        [T, A, C] = (0, f.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], s.X),
        N = i.useRef(0),
        P = i.useCallback(() => {
            S(!0),
                clearTimeout(N.current),
                (N.current = setTimeout(() => {
                    S(!1), (N.current = 0);
                }, 2000));
        }, []);
    (0, _.yp)({
        event: E.CkL.FAVORITE_GIF,
        handler: P,
    });
    let R = i.useCallback(() => {
            (0, f.RO)(b.X1.GIF, a);
        }, [a]),
        { Component: w, events: D, play: x } = (0, c.V)(),
        L = (0, m.v)(d.O),
        j = a === h.Ie.NORMAL ? L : void 0;
    if (n) return null;
    let M = T === b.X1.GIF && A === a;
    return (0, r.jsx)(u.u, {
        keyboardShortcut: I ? void 0 : j,
        text: y.intl.string(I ? y.t.mE2e8A : y.t.nffuyb),
        shouldShow: I || null != j,
        forceOpen: I,
        children: (0, r.jsx)("div", {
            ref: t,
            className: o()(b.CT, O.buttonContainer),
            children: (0, r.jsx)(g.Z, {
                className: O.button,
                onMouseEnter: D.onMouseEnter,
                onMouseLeave: D.onMouseLeave,
                onClick: () => {
                    R(), x();
                },
                isActive: M,
                pulse: v,
                "aria-label": y.intl.string(y.t.PtVpk2),
                "aria-expanded": M,
                "aria-haspopup": "dialog",
                "aria-controls": C,
                children: (0, r.jsx)(w, {
                    size: "refresh_sm",
                    color: "currentColor",
                }),
            }),
        }),
    });
}
let S = i.memo(i.forwardRef(v));
