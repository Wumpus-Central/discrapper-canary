n.d(t, { Z: () => I }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(574583),
    l = n(442837),
    c = n(114101),
    u = n(28664),
    d = n(777019),
    f = n(28546),
    _ = n(581883),
    p = n(459273),
    h = n(713913),
    m = n(541716),
    g = n(443603),
    E = n(981631),
    b = n(957825),
    y = n(388032),
    O = n(564355);
function v(e, t) {
    let { disabled: n, type: a } = e,
        [v, I] = i.useState(!1),
        T = (0, l.e7)([_.Z], () => {
            var e, t;
            return (
                v &&
                Object.values(
                    null != (t = null == (e = _.Z.frecencyWithoutFetchingLatest.favoriteGifs) ? void 0 : e.gifs)
                        ? t
                        : {},
                ).length <= 2
            );
        }),
        [S, A, C] = (0, f.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], s.X),
        N = i.useRef(0),
        R = i.useCallback(() => {
            I(!0),
                clearTimeout(N.current),
                (N.current = setTimeout(() => {
                    I(!1), (N.current = 0);
                }, 2000));
        }, []);
    (0, p.yp)({
        event: E.CkL.FAVORITE_GIF,
        handler: R,
    });
    let P = i.useCallback(() => {
            (0, f.RO)(b.X1.GIF, a);
        }, [a]),
        { Component: D, events: w, play: x } = (0, c.V)(),
        L = (0, h.v)(d.O),
        M = a === m.Ie.NORMAL ? L : void 0;
    if (n) return null;
    let j = S === b.X1.GIF && A === a;
    return (0, r.jsx)(u.u, {
        keyboardShortcut: T ? void 0 : M,
        text: y.intl.string(T ? y.t.mE2e8A : y.t.nffuyb),
        shouldShow: T || null != M,
        forceOpen: T,
        children: (0, r.jsx)("div", {
            ref: t,
            className: o()(b.CT, O.buttonContainer),
            children: (0, r.jsx)(g.Z, {
                className: O.button,
                onMouseEnter: w.onMouseEnter,
                onMouseLeave: w.onMouseLeave,
                onClick: () => {
                    P(), x();
                },
                isActive: j,
                pulse: v,
                "aria-label": y.intl.string(y.t.PtVpk2),
                "aria-expanded": j,
                "aria-haspopup": "dialog",
                "aria-controls": C,
                children: (0, r.jsx)(D, {
                    size: "refresh_sm",
                    color: "currentColor",
                }),
            }),
        }),
    });
}
let I = i.memo(i.forwardRef(v));
