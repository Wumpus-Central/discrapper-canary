n.d(t, { Z: () => y }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(524825),
    l = n(442837),
    c = n(114101),
    u = n(28664),
    d = n(28546),
    f = n(581883),
    _ = n(459273),
    p = n(443603),
    h = n(981631),
    m = n(957825),
    g = n(388032),
    E = n(564355);
function b(e, t) {
    let { disabled: n, type: a } = e,
        [b, y] = i.useState(!1),
        O = (0, l.e7)([f.Z], () => {
            var e, t;
            return (
                b &&
                Object.values(
                    null != (t = null == (e = f.Z.frecencyWithoutFetchingLatest.favoriteGifs) ? void 0 : e.gifs)
                        ? t
                        : {},
                ).length <= 2
            );
        }),
        [v, I, T] = (0, d.Iu)((e) => [e.activeView, e.activeViewType, e.pickerId], s.X),
        S = i.useRef(0),
        A = i.useCallback(() => {
            y(!0),
                clearTimeout(S.current),
                (S.current = setTimeout(() => {
                    y(!1), (S.current = 0);
                }, 2000));
        }, []);
    (0, _.yp)({
        event: h.CkL.FAVORITE_GIF,
        handler: A,
    });
    let C = i.useCallback(() => {
            (0, d.RO)(m.X1.GIF, a);
        }, [a]),
        { Component: N, events: R, play: P } = (0, c.V)();
    if (n) return null;
    let w = v === m.X1.GIF && I === a;
    return (0, r.jsx)(u.u, {
        text: O ? g.intl.string(g.t.mE2e8P) : null,
        forceOpen: !0,
        children: (0, r.jsx)("div", {
            ref: t,
            className: o()(m.CT, E.buttonContainer),
            children: (0, r.jsx)(p.Z, {
                className: E.button,
                onMouseEnter: R.onMouseEnter,
                onMouseLeave: R.onMouseLeave,
                onClick: () => {
                    C(), P();
                },
                isActive: w,
                pulse: b,
                "aria-label": g.intl.string(g.t.PtVpk5),
                "aria-expanded": w,
                "aria-haspopup": "dialog",
                "aria-controls": T,
                children: (0, r.jsx)(N, {
                    size: "refresh_sm",
                    color: "currentColor",
                }),
            }),
        }),
    });
}
let y = i.memo(i.forwardRef(b));
