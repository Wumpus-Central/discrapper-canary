n.d(t, { Z: () => b });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(570140),
    c = n(493773),
    u = n(585483),
    d = n(821020),
    f = n(736670),
    h = n(82409),
    p = n(981631),
    g = n(388032),
    m = n(888831);
function b(e) {
    let { children: t, popoutPosition: n, popoutAlign: l, targetElementRef: h, spacing: b = 0 } = e,
        { isOpen: y, setIsOpen: O } = (0, f.Z)(),
        v = i.useCallback(() => {
            O(!1);
        }, [O]),
        j = i.useCallback(() => {
            O(!y);
        }, [y, O]);
    (0, c.ZP)(() => {
        let e = () => {
            O(!1);
        };
        return s.Z.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => s.Z.unsubscribe("USER_SETTINGS_MODAL_OPEN", e);
    }),
        i.useEffect(
            () => (u.S.subscribe(p.CkL.TOGGLE_INBOX, j), () => void u.S.unsubscribe(p.CkL.TOGGLE_INBOX, j)),
            [j],
        );
    let { entrypoint: x } = (0, d.pN)({ location: "NotificationsInboxPopout" });
    return (0, r.jsx)(a.yRy, {
        targetElementRef: h,
        shouldShow: y,
        align: l,
        animation: x === d.u3.TITLE_BAR_LEFT ? a.yRy.Animation.TRANSLATE : a.yRy.Animation.FADE,
        animationPosition: x === d.u3.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: v,
        spacing: b,
        renderPopout: () =>
            (0, r.jsx)(a.VqE, {
                "aria-label": g.intl.string(g.t.GSmTKJ),
                className: o()({
                    [m.repositionLayerTitlebarPopout]: x === d.u3.TITLE_BAR_LEFT,
                    [m.repositionLayerSidebarPopout]: x === d.u3.SERVER_RAIL_TOP,
                }),
                children: (0, r.jsx)(_, {}),
            }),
        children: (e, n) => {
            let { isShown: r } = n;
            return t(j, r, e);
        },
    });
}
function _() {
    return (0, r.jsxs)("div", {
        className: m.container,
        children: [
            (0, r.jsx)("div", {
                className: m.backgroundContainer,
                children: (0, r.jsx)("span", { className: m.background }),
            }),
            (0, r.jsx)(h.Z, {}),
        ],
    });
}
