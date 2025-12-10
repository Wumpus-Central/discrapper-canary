n.d(t, { y: () => u }), n(953529);
var r = n(54381);
n(473749);
var i = n(481060),
    s = n(686546),
    l = n(565138),
    a = n(411198),
    o = n(388032),
    c = n(407749);
let u = (e) => {
    let { guild: t, onlineCount: n } = e;
    if (null == t) return null;
    let u = a.Qs(t),
        { name: d, description: h } = u;
    return (0, r.jsxs)("div", {
        children: [
            (0, r.jsx)(i.Heading, {
                variant: "heading-md/normal",
                color: "text-muted",
                className: c.alignStart,
                children: o.intl.string(o.t.Eabu1z),
            }),
            (0, r.jsxs)("div", {
                className: c.guild,
                children: [
                    (0, r.jsx)(s.ZP, {
                        mask: s.ZP.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: (0, r.jsx)(l.Z, {
                            guild: u,
                            size: l.Z.Sizes.MEDIUM,
                            active: !0,
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: c.guildInfo,
                        children: [
                            (0, r.jsx)(i.Heading, {
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
                                              children: o.intl.format(o.t["LC+S+m"], { membersOnline: n }),
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
                    color: "text-default",
                    className: c.alignStart,
                    variant: "text-sm/normal",
                    children: h,
                }),
        ],
    });
};
