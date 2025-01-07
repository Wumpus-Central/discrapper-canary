t(47120);
var a = t(200651),
    i = t(192379),
    r = t(622535),
    l = t(481060),
    o = t(783097),
    s = t(924489),
    c = t(824606),
    d = t(66637),
    u = t(768581),
    m = t(956965),
    p = t(388032),
    _ = t(833643);
let g = 28;
n.Z = function (e) {
    var n, t, f, v, C;
    let { application: x, onSelectApplication: h, showCategory: b = !1 } = e,
        I = (0, c.Z)({ application: x }),
        j = null === (n = x.categories) || void 0 === n ? void 0 : n[0],
        [S, N] = i.useState(!1),
        E = i.useCallback((e) => {
            e && N(!0);
        }, []),
        y = (0, o.lf)(x),
        A = i.useCallback(() => {
            h(x.id);
        }, [h, x.id]),
        T = i.useMemo(
            () =>
                S
                    ? u.ZP.getApplicationIconURL({
                          id: x.id,
                          icon: x.icon,
                          size: 48
                      })
                    : void 0,
            [S, x]
        ),
        P = (null !== (v = null === (t = x.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== v ? v : 0) > 0 || I.length > 0,
        R = (0, a.jsx)(s.Z, {
            application: x,
            textVariant: 'text-xs/medium',
            mutualGuilds: I,
            mutualGuildShownMax: 3,
            guildIconSize: s.x.SMALL,
            compact: !0
        }),
        Z = b && null != j;
    return (0, a.jsx)(r.$, {
        onChange: E,
        active: !S,
        children: (0, a.jsx)('div', {
            className: _.container,
            children: (0, a.jsxs)(d.Z, {
                className: _.card,
                onClick: A,
                onContextMenu: () => {},
                children: [
                    (0, a.jsxs)('div', {
                        className: _.header,
                        children: [
                            (0, a.jsx)('div', {
                                style: {
                                    width: '100%',
                                    display: 'block',
                                    aspectRatio: 16 / 9
                                },
                                children: S
                                    ? (0, a.jsx)(m.Z, {
                                          application: x,
                                          bannerType: 'card',
                                          iconURL: T
                                      })
                                    : null
                            }),
                            (0, a.jsx)('div', {
                                className: _.avatarContainer,
                                style: { height: g },
                                children: S
                                    ? (0, a.jsx)('img', {
                                          src: T,
                                          alt: '',
                                          className: _.avatar,
                                          height: 48,
                                          width: 48,
                                          style: {
                                              borderWidth: 4,
                                              marginLeft: 12
                                          }
                                      })
                                    : null
                            })
                        ]
                    }),
                    (0, a.jsxs)('div', {
                        className: _.appDetails,
                        children: [
                            (0, a.jsx)('div', {
                                className: _.titleContainer,
                                children: (0, a.jsx)('div', {
                                    className: _.title,
                                    children: (0, a.jsx)(l.Heading, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        className: _.appName,
                                        children: x.name
                                    })
                                })
                            }),
                            Z || y
                                ? (0, a.jsxs)('div', {
                                      className: _.infoContainer,
                                      children: [
                                          Z
                                              ? (0, a.jsx)(l.Text, {
                                                    className: _.appCategory,
                                                    variant: 'text-xs/medium',
                                                    color: 'text-normal',
                                                    children: j.name
                                                })
                                              : null,
                                          Z && y
                                              ? (0, a.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-secondary',
                                                    children: '\u2022'
                                                })
                                              : null,
                                          y
                                              ? (0, a.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-secondary',
                                                    children: p.intl.string(p.t['/eVltr'])
                                                })
                                              : null
                                      ]
                                  })
                                : null,
                            (0, a.jsx)(l.Text, {
                                className: _.description,
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                lineClamp: Z || y ? 2 : 3,
                                children: null !== (C = null === (f = x.directory_entry) || void 0 === f ? void 0 : f.short_description) && void 0 !== C ? C : x.description
                            }),
                            P
                                ? (0, a.jsx)('div', {
                                      className: _.memberDetails,
                                      children: R
                                  })
                                : null
                        ]
                    })
                ]
            })
        })
    });
};
