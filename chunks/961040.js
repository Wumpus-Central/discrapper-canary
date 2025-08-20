n.d(t, { Z: () => b });
var r = n(951288),
    i = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(481060),
    s = n(570140),
    c = n(493773),
    u = n(585483),
    d = n(821020),
    p = n(736670),
    f = n(82409),
    h = n(981631),
    g = n(388032),
    m = n(888831);
function b(e) {
    let { children: t, popoutPosition: n, popoutAlign: l, targetElementRef: f, spacing: b = 0 } = e,
        { isOpen: _, setIsOpen: y } = (0, p.Z)(),
        v = i.useCallback(() => {
            y(!1);
        }, [y]),
        j = i.useCallback(() => {
            y(!_);
        }, [_, y]);
    (0, c.ZP)(() => {
        let e = () => {
            y(!1);
        };
        return s.Z.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => s.Z.unsubscribe("USER_SETTINGS_MODAL_OPEN", e);
    }),
        i.useEffect(
            () => (u.S.subscribe(h.CkL.TOGGLE_INBOX, j), () => void u.S.unsubscribe(h.CkL.TOGGLE_INBOX, j)),
            [j],
        );
    let { entrypoint: C } = (0, d.pN)({ location: "NotificationsInboxPopout" });
    return (0, r.jsx)(a.yRy, {
        targetElementRef: f,
        shouldShow: _,
        align: l,
        animation: C === d.u3.TITLE_BAR_LEFT ? a.yRy.Animation.TRANSLATE : a.yRy.Animation.FADE,
        animationPosition: C === d.u3.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: v,
        spacing: b,
        renderPopout: () =>
            (0, r.jsx)(a.VqE, {
                "aria-label": g.intl.string(g.t.GSmTKC),
                className: o()({
                    [m.repositionLayerTitlebarPopout]: C === d.u3.TITLE_BAR_LEFT,
                    [m.repositionLayerSidebarPopout]: C === d.u3.SERVER_RAIL_TOP,
                }),
                children: (0, r.jsx)(O, {}),
            }),
        children: (e, n) => {
            let { isShown: r } = n;
            return t(j, r, e);
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
            (0, r.jsx)(f.Z, {}),
        ],
    });
}
