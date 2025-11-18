n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(481060),
    l = n(686546),
    a = n(768581),
    s = n(388032),
    o = n(837945);
let c = (e) => {
    var t;
    let { entry: n } = e,
        { id: c, icon: d, name: u } = n,
        m =
            null !=
            (t = a.ZP.getGuildIconURL({
                id: c,
                icon: d,
                size: 32,
            }))
                ? t
                : void 0;
    return (0, r.jsxs)("div", {
        className: o.container,
        children: [
            (0, r.jsx)(i.Heading, {
                className: o.header,
                variant: "heading-sm/semibold",
                children: s.intl.string(s.t.nTe4HC),
            }),
            (0, r.jsx)("div", {
                className: o.guildContainer,
                children: (0, r.jsxs)("div", {
                    className: o.guildInfo,
                    children: [
                        (0, r.jsx)(l.ZP, {
                            mask: l.ZP.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: o.guildIconMask,
                            children: (0, r.jsx)("img", {
                                src: m,
                                alt: "",
                                className: o.guildIcon,
                            }),
                        }),
                        (0, r.jsx)(i.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: u,
                        }),
                    ],
                }),
            }),
        ],
    });
};
