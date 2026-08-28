"use strict";
n.d(t, { n: () => p });
var i = n(477900),
    r = n(582128),
    a = n(111040),
    s = n(15626),
    l = n(503698),
    o = n.n(l),
    d = n(160844),
    c = n(661531),
    u = n(789645),
    _ = n(834730),
    E = n(478576);
function A(e) {
    let { graphic: t, layout: n } = e;
    if ("type" in t)
        switch (t.type) {
            case "role":
                let { color: r } = t;
                return (0, i.jsx)("div", { className: E.m4, style: { backgroundColor: r } });
            case "avatar":
                let { src: a } = t;
                return (0, i.jsx)("img", { className: E.my, src: a, alt: "" });
            case "image":
                let { src: s } = t;
                return (0, i.jsx)("img", { className: E.Sl, src: s, alt: "" });
            default:
                return null;
        }
    return (0, i.jsx)(t, { size: "inline" === n ? "xs" : "sm", color: "currentColor" });
}
var h = n(70074),
    I = n(132473);
function f(e) {
    let { label: t, layout: n, variant: r = "default", isDisabled: s, icon: l, accessibilityHint: E, ...f } = e,
        p = [t, E].filter(Boolean).join(", ");
    return (0, i.jsx)(a.vw, {
        ...f,
        className: o()(I.Tc, h.GA),
        "data-variant": r,
        textValue: p,
        isDisabled: s,
        children: (e) => {
            let { allowsRemoving: r } = e;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    null != l && (0, i.jsx)(A, { graphic: l, layout: n }),
                    (0, i.jsx)(_.E, {
                        color: "none",
                        variant: "inline" === n ? "text-sm/normal" : "text-md/normal",
                        children: t,
                    }),
                    r &&
                        (0, i.jsx)(d.$, {
                            slot: "remove",
                            children: (0, i.jsx)(u.P, {
                                size: "inline" === n ? "xs" : "sm",
                                color: c.A.colors.ICON_DEFAULT,
                            }),
                        }),
                ],
            });
        },
    });
}
function p(e) {
    let {
            listRef: t,
            label: n,
            disabledKeys: l,
            selectionMode: o = "none",
            selectionBehavior: d,
            layout: c = "default",
            variant: u,
            items: _,
            onRemove: E,
            children: A,
            selectedKeys: h,
            onSelectionChange: p,
            disallowEmptySelection: T,
        } = e,
        m = r.useContext(s._);
    return (0, i.jsxs)(a.CR, {
        "aria-label": n,
        id: m?.controlId,
        "aria-describedby": m?.describedById,
        "data-layout": c,
        "data-variant": u,
        className: I.WD,
        selectionMode: o,
        selectionBehavior: d,
        selectedKeys: h,
        onSelectionChange: p,
        disabledKeys: l,
        disallowEmptySelection: T,
        onRemove: E,
        children: [
            (0, i.jsx)(a.LY, {
                ref: t,
                className: I.Tw,
                children: _.map((e) =>
                    (0, r.createElement)(f, {
                        ...e,
                        key: e.id,
                        layout: c,
                        variant: u,
                        accessibilityHint: e.accessibilityHint,
                    }),
                ),
            }),
            A,
        ],
    });
}
