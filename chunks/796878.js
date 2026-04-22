a.d(l, { A: () => d });
var t = a(627968);
a(64700);
var s = a(877624),
    i = a(990078),
    n = a(534514),
    c = a(834730),
    h = a(549996),
    r = a(807098),
    o = a(88077);
function d(e) {
    let { children: l } = e,
        a = (0, h.c)(s.C.PREMIUM_TAB_TOOLTIP),
        d =
            null != a && "premiumTabTooltip" === a.properties.properties.oneofKind
                ? a.properties.properties.premiumTabTooltip
                : null,
        v = (0, r.T)(d?.asset);
    if (null == d) return l;
    let g = (0, t.jsxs)("div", {
        className: o.$e,
        children: [
            null != v && (0, t.jsx)("img", { className: o.NC, src: v, alt: "" }),
            (0, t.jsxs)("div", {
                className: o.Vm,
                children: [
                    (0, t.jsx)(n.D, { variant: "heading-md/bold", color: "text-strong", children: d.header }),
                    (0, t.jsx)(c.E, { variant: "text-sm/normal", color: "text-subtle", children: d.body }),
                ],
            }),
        ],
    });
    return (0, t.jsx)(i.m, {
        __unsupportedReactNodeAsText: g,
        position: "right",
        "aria-label": d.header,
        asContainer: !0,
        children: (0, t.jsx)("div", { children: l }),
    });
}
