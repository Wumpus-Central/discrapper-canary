n.d(t, { Z: () => m });
var r = n(54381),
    i = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(481060),
    s = n(570140),
    c = n(493773),
    u = n(585483),
    d = n(821020),
    f = n(736670),
    h = n(82409),
    p = n(981631),
    g = n(388032),
    b = n(122069);
function m(e) {
    let { children: t, popoutPosition: n, popoutAlign: l, targetElementRef: h, spacing: m = 0 } = e,
        { isOpen: O, setIsOpen: v } = (0, f.Z)(),
        j = i.useCallback(() => {
            v(!1);
        }, [v]),
        C = i.useCallback(() => {
            v(!O);
        }, [O, v]);
    (0, c.ZP)(() => {
        let e = () => {
            v(!1);
        };
        return s.Z.subscribe("USER_SETTINGS_MODAL_OPEN", e), () => s.Z.unsubscribe("USER_SETTINGS_MODAL_OPEN", e);
    }),
        i.useEffect(
            () => (u.S.subscribe(p.CkL.TOGGLE_INBOX, C), () => void u.S.unsubscribe(p.CkL.TOGGLE_INBOX, C)),
            [C],
        );
    let { entrypoint: x } = (0, d.pN)({ location: "NotificationsInboxPopout" });
    return (0, r.jsx)(o.yRy, {
        targetElementRef: h,
        shouldShow: O,
        align: l,
        animation: x === d.u3.TITLE_BAR_LEFT ? o.yRy.Animation.TRANSLATE : o.yRy.Animation.FADE,
        animationPosition: x === d.u3.TITLE_BAR_LEFT ? "bottom" : "left",
        position: n,
        onRequestClose: j,
        spacing: m,
        renderPopout: () =>
            (0, r.jsx)(o.VqE, {
                "aria-label": g.intl.string(g.t.GSmTKJ),
                className: a()({
                    [b.repositionLayerTitlebarPopout]: x === d.u3.TITLE_BAR_LEFT,
                    [b.repositionLayerSidebarPopout]: x === d.u3.SERVER_RAIL_TOP,
                }),
                children: (0, r.jsx)(y, {}),
            }),
        children: (e, n) => {
            let { isShown: r } = n;
            return t(C, r, e);
        },
    });
}
function y() {
    return (0, r.jsxs)("div", {
        className: b.container,
        children: [
            (0, r.jsx)("div", {
                className: b.backgroundContainer,
                children: (0, r.jsx)("span", { className: b.background }),
            }),
            (0, r.jsx)(h.Z, {}),
        ],
    });
}
