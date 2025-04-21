n.d(t, { Z: () => x }), n(953529);
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    l = n(481060),
    s = n(410030),
    o = n(686546),
    c = n(565138),
    d = n(372769),
    u = n(134432),
    p = n(601964),
    m = n(768581),
    h = n(981631),
    g = n(388032),
    _ = n(754726),
    f = n(129512),
    b = n(330065);
function x(e) {
    let { guild: t, className: n, onClick: i } = e,
        x = (0, s.ZP)(),
        v = new p.ZP({
            name: t.name,
            icon: t.icon
        }),
        C = m.ZP.getGuildDiscoverySplashURL({
            id: t.id,
            splash: t.discovery_splash,
            size: 192 * (0, u.x_)()
        }),
        j =
            null != C
                ? C
                : (function (e) {
                      switch (e) {
                          case h.BRd.DARK:
                              return f;
                          case h.BRd.LIGHT:
                              return b;
                      }
                  })(x),
        y = m.ZP.getGuildIconURL({
            id: t.id,
            icon: t.icon,
            size: 50
        });
    return (0, r.jsxs)(l.P3F, {
        className: a()(_.card, n),
        onClick: i,
        'aria-label': g.intl.string(g.t.RB4L29),
        children: [
            (0, r.jsxs)('div', {
                className: _.cardHeader,
                children: [
                    (0, r.jsx)('img', {
                        src: j,
                        alt: '',
                        className: _.splashImage
                    }),
                    (0, r.jsx)('div', {
                        className: _.guildIcon,
                        children: (0, r.jsx)(o.ZP, {
                            mask: o.ZP.Masks.AVATAR_DEFAULT,
                            width: 58,
                            height: 58,
                            children: (0, r.jsx)('div', {
                                className: _.iconMask,
                                children: (0, r.jsx)(c.Z, {
                                    className: _.__invalid_icon,
                                    iconSrc: y,
                                    guild: v,
                                    size: c.Z.Sizes.LARGE
                                })
                            })
                        })
                    })
                ]
            }),
            (0, r.jsxs)('div', {
                className: _.cardDetails,
                children: [
                    (0, r.jsxs)('div', {
                        className: _.guildNameWrapper,
                        children: [
                            (0, r.jsx)(d.Z, {
                                className: _.guildBadge,
                                guild: t,
                                tooltipColor: l.ua7.Colors.PRIMARY
                            }),
                            (0, r.jsx)(l.X6q, {
                                variant: 'heading-md/semibold',
                                className: _.guildName,
                                children: t.name
                            })
                        ]
                    }),
                    (0, r.jsx)(l.Text, {
                        className: _.guildDescription,
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        lineClamp: 2,
                        children: t.description
                    }),
                    (0, r.jsx)('div', {
                        className: _.memberInfo,
                        children: (0, r.jsxs)('div', {
                            className: _.memberCountWrapper,
                            children: [
                                (0, r.jsx)(l.tBG, {
                                    color: 'currentColor',
                                    className: _.memberCountIcon,
                                    size: 'xs'
                                }),
                                (0, r.jsx)(l.Text, {
                                    variant: 'text-xs/normal',
                                    color: 'header-secondary',
                                    children: g.intl.format(g.t.zRl6XV, { count: t.approximate_member_count })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
