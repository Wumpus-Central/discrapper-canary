n.d(t, {
    V: () => c,
    Z: () => l,
});
var r = n(54381);
n(473749);
var i = n(330711),
    a = n(793030),
    o = n(692547),
    s = n(678058);
function l(e) {
    let { type: t } = e;
    return (0, r.jsx)(c, {
        icon:
            "user" === t
                ? (0, r.jsx)(a.tBG, {
                      size: "xxs",
                      color: o.Z.colors.INTERACTIVE_NORMAL,
                  })
                : (0, r.jsx)(a.QTo, {
                      size: "xxs",
                      color: o.Z.colors.INTERACTIVE_NORMAL,
                  }),
        text: "user" === t ? i.Z.Messages.STOREFRONT_USER_SUBSCRIPTION : i.Z.Messages.STOREFRONT_SERVER_SUBSCRIPTION,
    });
}
function c(e) {
    let { icon: t, text: n } = e;
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            t,
            (0, r.jsx)(a.xvT, {
                color: "header-primary",
                variant: "text-sm/medium",
                children: n,
            }),
        ],
    });
}
