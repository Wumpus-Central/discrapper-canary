l.d(t, { C: () => h });
var a = l(627968);
l(64700);
var n = l(503698),
    r = l.n(n),
    i = l(158954),
    o = l(990078),
    s = l(397927),
    u = l(985018),
    c = l(530949);
function d() {
    return (0, a.jsx)("div", { className: c.overlay });
}
function p(e) {
    let { iconAlignment: t } = e;
    return (0, a.jsx)("div", {
        className: r()(c.iconContainer, { [c.iconAlignCenter]: "center" === t, [c.iconAlignRight]: "right" === t }),
        children: (0, a.jsx)(s.j96, { size: "sm", color: "white", "aria-hidden": !0, className: c.overlayIcon }),
    });
}
function m(e) {
    let { onClick: t, type: l, accessibleLabel: n } = e,
        r = "remove" === l ? u.intl.string(u.t["2A+piL"]) : u.intl.string(u.t.GaEG4t);
    return (0, a.jsx)(o.m, {
        text: r,
        ariaHidden: !0,
        children: (0, a.jsx)(i.K0, {
            "aria-label": n,
            icon: "remove" === l ? i.ucK : i.mqY,
            size: "sm",
            variant: "overlay-secondary",
            onClick: t,
        }),
    });
}
function h(e) {
    let {
        editingMode: t,
        variant: l,
        onClick: n,
        accessibleLabel: o,
        children: s,
        deleteButtonConfig: u,
        showOverlay: h,
    } = e;
    return (0, a.jsxs)("div", {
        className: c.tileWrapper,
        children: [
            (0, a.jsxs)(i.DUT, {
                "aria-label": o,
                className: r()(c.base, c[l]),
                onClick: n,
                children: [
                    (0, a.jsx)("div", { className: c.content, children: s }),
                    h && (0, a.jsx)(d, {}),
                    "add" === t && (0, a.jsx)(p, { iconAlignment: "bar" === l ? "right" : "center" }),
                ],
            }),
            null != u && (0, a.jsx)("div", { className: c.deleteButtonWrapper, children: (0, a.jsx)(m, { ...u }) }),
        ],
    });
}
(h.Overlay = d), (h.OverlayIcon = p), (h.DeleteButton = m);
