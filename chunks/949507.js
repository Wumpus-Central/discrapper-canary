n.d(t, { Z: () => v }), n(953529);
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    l = n(481060),
    s = n(410030),
    o = n(686546),
    c = n(565138),
    d = n(372769),
    u = n(134432),
    p = n(768581),
    m = n(411198),
    h = n(981631),
    f = n(388032),
    b = n(135587),
    g = n(129512),
    x = n(330065);
function v(e) {
    let { guild: t, className: n, onClick: r } = e,
        v = (0, s.ZP)(),
        C = (0, m.dangerouslyConstructGuildRecordFromUntypedObject)({
            name: t.name,
            icon: t.icon,
        }),
        j = p.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: t.discovery_splash,
            size: 192 * (0, u.x_)(),
        }),
        _ =
            null != j
                ? j
                : (function (e) {
                      switch (e) {
                          case h.BRd.DARK:
                              return g;
                          case h.BRd.LIGHT:
                              return x;
                      }
                  })(v),
        y = p.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 50,
        });
    return (0, a.jsxs)(l.P3F, {
        className: i()(b.card, n),
        onClick: r,
        "aria-label": f.intl.string(f.t.RB4L2x),
        children: [
            (0, a.jsxs)("div", {
                className: b.cardHeader,
                children: [
                    (0, a.jsx)("img", {
                        src: _,
                        alt: "",
                        className: b.splashImage,
                    }),
                    (0, a.jsx)("div", {
                        className: b.guildIcon,
                        children: (0, a.jsx)(o.ZP, {
                            mask: o.ZP.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, a.jsx)("div", {
                                className: b.iconMask,
                                children: (0, a.jsx)(c.Z, {
                                    className: b.__invalid_icon,
                                    iconSrc: y,
                                    guild: C,
                                    size: c.Z.Sizes.LARGE,
                                }),
                            }),
                        }),
                    }),
                ],
            }),
            (0, a.jsxs)("div", {
                className: b.cardDetails,
                children: [
                    (0, a.jsxs)("div", {
                        className: b.guildNameWrapper,
                        children: [
                            (0, a.jsx)(d.Z, {
                                className: b.guildBadge,
                                guild: t,
                                tooltipColor: l.aML.Colors.PRIMARY,
                            }),
                            (0, a.jsx)(l.Heading, {
                                variant: "heading-md/semibold",
                                className: b.guildName,
                                children: t.name,
                            }),
                        ],
                    }),
                    (0, a.jsx)(l.Text, {
                        className: b.guildDescription,
                        variant: "text-sm/normal",
                        color: "text-default",
                        lineClamp: 2,
                        children: t.description,
                    }),
                    (0, a.jsx)("div", {
                        className: b.memberInfo,
                        children: (0, a.jsxs)("div", {
                            className: b.memberCountWrapper,
                            children: [
                                (0, a.jsx)(l.tBG, {
                                    color: "currentColor",
                                    className: b.memberCountIcon,
                                    size: "xs",
                                }),
                                (0, a.jsx)(l.Text, {
                                    variant: "text-xs/normal",
                                    color: "text-default",
                                    children: f.intl.format(f.t.zRl6XR, { count: t.approximate_member_count }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        ],
    });
}
