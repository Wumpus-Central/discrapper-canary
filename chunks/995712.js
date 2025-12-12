n.d(t, { Z: () => d });
var r = n(54381);
n(473749);
var l = n(481060),
    i = n(686546),
    a = n(768581),
    s = n(388032),
    o = n(637462);
let d = (e) => {
    var t;
    let { entry: n } = e,
        { id: d, icon: c, name: u } = n,
        m =
            null !=
            (t = a.ZP.getGuildIconURL({
                id: d,
                icon: c,
                size: 32,
            }))
                ? t
                : void 0;
    return (0, r.jsxs)("div", {
        className: o.container,
        children: [
            (0, r.jsx)(l.Heading, {
                className: o.header,
                variant: "heading-sm/semibold",
                children: s.intl.string(s.t.nTe4HC),
            }),
            (0, r.jsx)("div", {
                className: o.guildContainer,
                children: (0, r.jsxs)("div", {
                    className: o.guildInfo,
                    children: [
                        (0, r.jsx)(i.ZP, {
                            mask: i.ZP.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: o.guildIconMask,
                            children: (0, r.jsx)("img", {
                                src: m,
                                alt: "",
                                className: o.guildIcon,
                            }),
                        }),
                        (0, r.jsx)(l.Text, {
                            color: "text-default",
                            variant: "text-sm/normal",
                            children: u,
                        }),
                    ],
                }),
            }),
        ],
    });
};
