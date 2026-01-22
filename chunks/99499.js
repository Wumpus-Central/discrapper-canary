n.d(t, {
    A: () => l,
});
var r = n(627968),
    i = n(990078),
    a = n(397927),
    s = n(519412),
    o = n(985018);
let l = (e) => {
    let { onInvite: t, disabled: n } = e;
    return (0, r.jsx)(a.DUT, {
        onClick: n ? void 0 : t,
        children: (0, r.jsx)(i.m, {
            text: o.intl.string(s.default["U/DzKb"]),
            shouldShow: !n,
            children: (0, r.jsx)(a.Rvf, {
                size: "sm",
                color: n ? a.LU0.colors.ICON_SUBTLE : a.LU0.colors.ICON_STRONG,
            }),
        }),
    });
};
