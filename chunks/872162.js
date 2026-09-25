n.d(t, { C: () => g });
var i = n(477900);
let r = { xs: "text-xs/normal", sm: "text-sm/normal", md: "text-md/normal" },
    a = { xs: "xxs", sm: "xs", md: "sm" };
var s = n(582128),
    l = n(877603),
    o = n(15626),
    d = n(503698),
    c = n.n(d),
    u = n(160844),
    _ = n(661531),
    E = n(789645),
    A = n(834730),
    h = n(478576);
function I(e) {
    let { graphic: t, size: n } = e;
    if ("type" in t)
        switch (t.type) {
            case "role":
                let { color: r } = t;
                return (0, i.jsx)("div", { className: h.m4, "data-size": n, style: { backgroundColor: r } });
            case "avatar":
                let { src: s } = t;
                return (0, i.jsx)("img", { className: h.my, "data-size": n, src: s, alt: "" });
            case "image":
                let { src: l } = t;
                return (0, i.jsx)("img", { className: h.Sl, "data-size": n, src: l, alt: "" });
            default:
                return null;
        }
    return (0, i.jsx)(t, { size: a[n], color: "currentColor" });
}
var f = n(70074),
    p = n(132473);
function T(e) {
    let { label: t, size: n, variant: s = "default", isDisabled: o, icon: d, accessibilityHint: h, ...T } = e,
        m = [t, h].filter(Boolean).join(", ");
    return (0, i.jsx)(l.vw, {
        ...T,
        "data-mana-component": "tag",
        className: c()(p.Tc, f.GA),
        "data-variant": s,
        textValue: m,
        isDisabled: o,
        children: (e) => {
            let { allowsRemoving: s } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    null != d && (0, i.jsx)(I, { graphic: d, size: n }),
                    (0, i.jsx)(A.E, { color: "none", variant: r[n], children: t }),
                    s &&
                        (0, i.jsx)(u.$, {
                            slot: "remove",
                            children: (0, i.jsx)(E.P, { size: a[n], color: _.A.colors.ICON_DEFAULT }),
                        }),
                ],
            });
        },
    });
}
function m(e) {
    let {
            listRef: t,
            label: n,
            disabled: r,
            disabledKeys: a,
            selectionMode: d = "none",
            selectionBehavior: c,
            layout: u = "default",
            size: _ = "md",
            variant: E,
            items: A,
            onRemove: h,
            children: I,
            selectedKeys: f,
            onSelectionChange: m,
            disallowEmptySelection: g,
        } = e,
        S = s.useContext(o._),
        N = s.useMemo(() => (r && "all" !== a ? new Set([...(a ?? []), ...A.map((e) => e.id)]) : a), [r, a, A]);
    return (0, i.jsxs)(l.CR, {
        "aria-label": n,
        id: S?.controlId,
        "data-mana-component": "tag-group",
        "aria-describedby": S?.describedById,
        "data-layout": u,
        "data-size": _,
        "data-variant": E,
        className: p.WD,
        selectionMode: d,
        selectionBehavior: c,
        selectedKeys: f,
        onSelectionChange: m,
        disabledKeys: N,
        disallowEmptySelection: g,
        onRemove: h,
        children: [
            (0, i.jsx)(l.LY, {
                ref: t,
                className: p.Tw,
                children: A.map((e) => (0, s.createElement)(T, { ...e, key: e.id, size: _, variant: E })),
            }),
            I,
        ],
    });
}
function g(e) {
    let { mode: t, variant: n = "default", layout: r = "default", size: a = "inline" === r ? "sm" : "md", ...s } = e;
    return (0, i.jsx)(m, { ...s, layout: r, size: a, variant: n });
}
