n.d(t, { y: () => u }), n(953529);
var r = n(951288);
n(647438);
var i = n(481060),
    l = n(686546),
    a = n(565138),
    s = n(411198),
    o = n(388032),
    c = n(407749);
let u = (e) => {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let u = s.Qs(t),
        { name: d, description: h } = u;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(i.X6q, {
                variant: "heading-md/normal",
                color: "header-muted",
                className: c.alignStart,
                children: o.intl.string(o.t.Eabu19),
            }),
            (0, r.jsxs)("div", {
                className: c.guild,
                children: [
                    (0, r.jsx)(l.ZP, {
                        mask: l.ZP.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, r.jsx)(a.Z, {
                            guild: u,
                            size: a.Z.Sizes.MEDIUM,
                            active: !0,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: c.guildInfo,
                        children: [
                            (0, r.jsx)(i.X6q, {
                                variant: "heading-sm/semibold",
                                children: d,
                            }),
                            (0, r.jsxs)("div", {
                                className: c.speaker,
                                children: [
                                    (0, r.jsx)("div", { className: c.dot }),
                                    null != n && n > 0
                                        ? (0, r.jsx)(i.Text, {
                                              variant: "text-sm/normal",
                                              children: o.intl.format(o.t["LC+S+v"], { membersOnline: n }),
                                          })
                                        : null,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            null != h &&
                "" !== h &&
                (0, r.jsx)(i.Text, {
                    color: "header-secondary",
                    className: c.alignStart,
                    variant: "text-sm/normal",
                    children: h,
                }),
        ],
    });
};
