n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var a = n(481060),
    i = n(686546),
    o = n(768581),
    l = n(388032),
    s = n(91709);
let c = (e) => {
    var t;
    let { entry: n } = e,
        { id: c, icon: d, name: u } = n,
        _ =
            null !=
            (t = o.ZP.getGuildIconURL({
                id: c,
                icon: d,
                size: 32,
            }))
                ? t
                : void 0;
    return (0, r.jsxs)("div", {
        className: s.container,
        children: [
            (0, r.jsx)(a.X6q, {
                className: s.header,
                variant: "heading-sm/semibold",
                children: l.intl.string(l.t.nTe4HB),
            }),
            (0, r.jsx)("div", {
                className: s.guildContainer,
                children: (0, r.jsxs)("div", {
                    className: s.guildInfo,
                    children: [
                        (0, r.jsx)(i.ZP, {
                            mask: i.ZP.Masks.SQUIRCLE,
                            width: 32,
                            height: 32,
                            className: s.guildIconMask,
                            children: (0, r.jsx)("img", {
                                src: _,
                                alt: "",
                                className: s.guildIcon,
                            }),
                        }),
                        (0, r.jsx)(a.Text, {
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
