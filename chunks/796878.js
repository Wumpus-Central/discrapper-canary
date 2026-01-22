n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var i = n(877624),
    l = n(990078),
    a = n(397927),
    s = n(549996),
    o = n(807098),
    c = n(542780);

function u(e) {
    let { children: t } = e,
        n = (0, s.c)(i.C.PREMIUM_TAB_TOOLTIP),
        u =
            null != n && "premiumTabTooltip" === n.properties.properties.oneofKind
                ? n.properties.properties.premiumTabTooltip
                : null,
        d = (0, o.T)(null == u ? void 0 : u.asset);
    if (null == u) return t;
    let p = (0, r.jsxs)("div", {
        className: c.$e,
        children: [
            null != d &&
                (0, r.jsx)("img", {
                    className: c.NC,
                    src: d,
                    alt: "",
                }),
            (0, r.jsxs)("div", {
                className: c.Vm,
                children: [
                    (0, r.jsx)(a.Heading, {
                        variant: "heading-md/bold",
                        color: "text-strong",
                        children: u.header,
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children: u.body,
                    }),
                ],
            }),
        ],
    });
    return (0, r.jsx)(l.m, {
        __unsupportedReactNodeAsText: p,
        position: "right",
        "aria-label": u.header,
        asContainer: !0,
        children: (0, r.jsx)("div", {
            children: t,
        }),
    });
}
