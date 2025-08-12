n.d(t, { Z: () => b });
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    s = n(481060),
    a = n(570140),
    c = n(493773),
    u = n(585483),
    d = n(821020),
    h = n(736670),
    p = n(82409),
    f = n(981631),
    g = n(388032),
    m = n(11779);
function b(e) {
    let { children: t, popoutPosition: n, popoutAlign: l, targetElementRef: p, spacing: b = 0 } = e,
        { isOpen: _, setIsOpen: y } = (0, h.Z)(),
        C = i.useCallback(() => {
            y(!1);
        }, [y]),
        v = i.useCallback(() => {
            y(!_);
        }, [_, y]);
    (0, c.ZP)(() => {
        let e = () => {
            y(!1);
        };
        return a.Z.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => a.Z.unsubscribe("USER_SETTINGS_MODAL_OPEN", e);
    }),
        i.useEffect(
            () => (u.S.subscribe(f.CkL.TOGGLE_INBOX, v), () => void u.S.unsubscribe(f.CkL.TOGGLE_INBOX, v)),
            [v],
        );
    let { entrypoint: j } = (0, d.pN)({ location: "NotificationsInboxPopout" });
    return (0, r.jsx)(s.yRy, {
        targetElementRef: p,
        shouldShow: _,
        align: l,
        animation: j === d.u3.TITLE_BAR_LEFT ? s.yRy.Animation.TRANSLATE : s.yRy.Animation.FADE,
        animationPosition: j === d.u3.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: C,
        spacing: b,
        renderPopout: () =>
            (0, r.jsx)(s.VqE, {
                "aria-label": g.intl.string(g.t.GSmTKC),
                className: o()({
                    [m.repositionLayerTitlebarPopout]: j === d.u3.TITLE_BAR_LEFT,
                    [m.repositionLayerSidebarPopout]: j === d.u3.SERVER_RAIL_TOP,
                }),
                children: (0, r.jsx)(O, {}),
            }),
        children: (e, n) => {
            let { isShown: r } = n;
            return t(v, r, e);
        },
    });
}
function O() {
    return (0, r.jsxs)("div", {
        className: m.container,
        children: [
            (0, r.jsx)("div", {
                className: m.backgroundContainer,
                children: (0, r.jsx)("span", { className: m.background }),
            }),
            (0, r.jsx)(p.Z, {}),
        ],
    });
}
