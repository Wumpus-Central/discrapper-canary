n.d(l, { y: () => N });
var t = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    o = n(249686),
    c = n.n(o),
    i = n(646514),
    u = n(603392),
    d = n(628284),
    m = n(695366),
    g = n(834730),
    p = n(23339),
    y = n(627805);
function x(e) {
    let { entity: l, className: n } = e,
        r = s()(
            y.EG,
            { [y.my]: "avatar" === l.type, [y.EB]: "guild" === l.type, [y.Hj]: "guild" === l.type && null == l.src },
            n,
        );
    return (0, t.jsx)("span", { className: r, "aria-hidden": !0, children: (0, t.jsx)(C, { entity: l }) });
}
function C(e) {
    let { entity: l } = e;
    switch (l.type) {
        case "emoji":
            if ("unicode" in l)
                return (0, t.jsx)(g.E, {
                    variant: "body-lg/normal",
                    color: "text-default",
                    tag: "span",
                    lineClamp: 1,
                    children: l.unicode,
                });
            return (0, t.jsx)("img", { className: y.Sl, src: l.src, alt: l.alt ?? "", draggable: !1 });
        case "avatar":
            return (0, t.jsx)("img", { className: y.Sl, src: l.src, alt: l.alt ?? "", draggable: !1 });
        case "guild":
            if (null == l.src) {
                let e = (0, p.oN)(l.name);
                return (0, t.jsx)(g.E, {
                    ...(e.length <= 1
                        ? { variant: "body-xs/normal" }
                        : e.length <= 4
                          ? { variant: "footnote/normal" }
                          : 5 === e.length
                            ? { variant: "footnote/normal", style: { fontSize: 7 } }
                            : { variant: "footnote/normal", style: { fontSize: 5 } }),
                    color: "text-default",
                    tag: "span",
                    lineClamp: 1,
                    children: e,
                });
            }
            return (0, t.jsx)("img", { className: y.Sl, src: l.src, alt: l.name, draggable: !1 });
        case "image":
            return (0, t.jsx)("img", { className: s()(y.Sl, y.M2), src: l.src, alt: l.alt ?? "", draggable: !1 });
    }
}
function f(e) {
    return "object" == typeof e && null != e && "type" in e && "string" == typeof e.type;
}
var j = n(395762);
let h = {
    success: { color: i.A.colors.ICON_FEEDBACK_POSITIVE, icon: d.CircleCheckIcon },
    critical: { color: i.A.colors.ICON_FEEDBACK_CRITICAL, icon: m.CircleErrorIcon },
};
function N(e) {
    return null != e.__dangerouslyRenderContent
        ? (0, t.jsx)("div", { className: j.customContent, children: e.__dangerouslyRenderContent() })
        : (0, t.jsx)(v, { ...e });
}
function v(e) {
    let { variant: l = "default", text: n, icon: a, iconColor: o, secondaryIconColor: d } = e,
        m = (0, u.r)(i.A.modules.toast.TEXT_LINE_COUNT),
        p = r.useMemo(() => {
            let e = h[l];
            if (null == e && f(a)) return (0, t.jsx)(x, { entity: a });
            let n = e?.icon ?? (f(a) ? void 0 : a);
            if (null == n) return null;
            let r = { color: e?.color ?? o ?? i.A.colors.ICON_DEFAULT };
            return (null != d && (r.secondaryColor = d), (0, t.jsx)(n, { className: j.icon, size: "sm", ...r }));
        }, [a, o, d, l]);
    return (0, t.jsxs)("div", {
        className: s()(j.wrapper, j[l]),
        children: [
            (0, t.jsx)("div", { className: s()(j.baselayer, j[l]) }),
            (0, t.jsxs)("div", {
                className: j.content,
                children: [
                    p,
                    !c()(n) &&
                        (0, t.jsx)(g.E, { variant: "body-md/normal", color: "text-strong", lineClamp: m, children: n }),
                ],
            }),
        ],
    });
}
