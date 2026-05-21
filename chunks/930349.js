a.d(l, { V: () => k, Y: () => m });
var i = a(627968),
    n = a(64700),
    t = a(503698),
    r = a.n(t),
    s = a(408278),
    d = a(241326),
    u = a(417270),
    c = a(939249),
    o = a(245604),
    v = a(661531),
    g = a(990078),
    h = a(713517),
    f = a(375708),
    b = a(889536);
function p() {
    return (0, i.jsx)("div", { className: b.overlay });
}
let m = n.forwardRef(function (e, l) {
    let { variant: a, disabled: n = !1, isInteracting: t = !1, children: c, deleteButton: o } = e,
        v = o?.type === "remove" ? f.intl.string(f.t.N86XcP) : f.intl.string(f.t.wgIPss);
    return (0, i.jsxs)("div", {
        ref: l,
        className: r()(b.tile, b[a], { [b.disabled]: n, [b.isInteracting]: t }),
        children: [
            c,
            !n &&
                null != o &&
                (0, i.jsx)("div", {
                    className: r()(b.deleteButtonWrapper, { [b.resetButton]: "reset" === o.type }),
                    children: (0, i.jsx)(g.m, {
                        text: v,
                        ariaHidden: !0,
                        children: (0, i.jsx)(s.K, {
                            "aria-label": o.accessibleLabel,
                            icon: "remove" === o.type ? d.u : u.m,
                            size: "sm",
                            variant: "overlay-secondary",
                            onClick: o.onClick,
                        }),
                    }),
                }),
        ],
    });
});
function k(e) {
    let {
            variant: l,
            onClick: a,
            accessibleLabel: t,
            accessibleValue: s,
            renderPreview: d,
            showOverlayOnHover: u = !1,
            disabled: g = !1,
            buttonRef: k,
            affordance: A,
            ...I
        } = e,
        y = "add" === A,
        C = n.useRef(null),
        { isHoveringOrFocusing: x } = (0, h.A)(C),
        j = x && !g,
        w = n.useRef(null),
        N = k ?? w,
        P =
            null != A && "add" !== A
                ? {
                      ...A,
                      onClick: () => {
                          A.onClick(), N.current?.focus();
                      },
                  }
                : void 0;
    return (0, i.jsx)(m, {
        ref: C,
        variant: l,
        disabled: g,
        isInteracting: j,
        deleteButton: P,
        children: (0, i.jsxs)(c.D, {
            innerRef: N,
            className: b.tileButton,
            "aria-label": null != s ? f.intl.formatToPlainString(f.t["E+mIJ+"], { label: t, value: s }) : t,
            onClick: g ? void 0 : a,
            "aria-disabled": g,
            tabIndex: g ? -1 : 0,
            ...I,
            children: [
                (0, i.jsx)("div", { className: b.content, children: d(j) }),
                u && !g && (0, i.jsx)(p, {}),
                y &&
                    (0, i.jsx)("div", {
                        className: r()(b.iconContainer, {
                            [b.iconAlignCenter]: "square" === l || "full-height-bar" === l,
                            [b.iconAlignRight]: "bar" === l,
                        }),
                        children: (0, i.jsx)(o.U, {
                            size: "md",
                            color: v.A.colors.ICON_STRONG,
                            secondaryColor: v.A.colors.ICON_INVERT,
                            className: b.overlayIcon,
                        }),
                    }),
            ],
        }),
    });
}
