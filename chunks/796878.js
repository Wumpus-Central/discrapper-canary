n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var r = n(877624),
    a = n(990078),
    l = n(397927),
    s = n(549996),
    o = n(807098),
    d = n(542780);
function c(e) {
    let { children: t } = e,
        n = (0, s.c)(r.C.PREMIUM_TAB_TOOLTIP),
        c =
            null != n && "premiumTabTooltip" === n.properties.properties.oneofKind
                ? n.properties.properties.premiumTabTooltip
                : null,
        u = (0, o.T)(c?.asset);
    if (null == c) return t;
    let A = (0, i.jsxs)("div", {
        className: d.$e,
        children: [
            null != u && (0, i.jsx)("img", { className: d.NC, src: u, alt: "" }),
            (0, i.jsxs)("div", {
                className: d.Vm,
                children: [
                    (0, i.jsx)(l.Heading, { variant: "heading-md/bold", color: "text-strong", children: c.header }),
                    (0, i.jsx)(l.Text, { variant: "text-sm/normal", color: "text-subtle", children: c.body }),
                ],
            }),
        ],
    });
    return (0, i.jsx)(a.m, {
        __unsupportedReactNodeAsText: A,
        position: "right",
        "aria-label": c.header,
        asContainer: !0,
        children: (0, i.jsx)("div", { children: t }),
    });
}
