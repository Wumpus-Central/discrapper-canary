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
    var n, t, v, f, C;
    let { application: h, onSelectApplication: x, showCategory: b = !1 } = e,
        I = (0, c.Z)({ application: h }),
        S = null === (n = h.categories) || void 0 === n ? void 0 : n[0],
        [j, E] = i.useState(!1),
        y = i.useCallback((e) => {
            e && E(!0);
        }, []),
        N = (0, o.lf)(h),
        A = i.useCallback(() => {
            x(h.id);
        }, [x, h.id]),
        T = i.useMemo(
            () =>
                j
                    ? u.ZP.getApplicationIconURL({
                          id: h.id,
                          icon: h.icon,
                          size: 48
                      })
                    : void 0,
            [j, h]
        ),
        P = (null !== (f = null === (t = h.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== f ? f : 0) > 0 || I.length > 0,
        R = (0, a.jsx)(s.Z, {
            application: h,
            textVariant: 'text-xs/medium',
            mutualGuilds: I,
            mutualGuildShownMax: 3,
            guildIconSize: s.x.SMALL,
            compact: !0
        }),
        Z = b && null != S;
    return (0, a.jsx)(r.$, {
        onChange: y,
        active: !j,
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
                                children: j
                                    ? (0, a.jsx)(m.Z, {
                                          application: h,
                                          bannerType: 'card',
                                          iconURL: T
                                      })
                                    : null
                            }),
                            (0, a.jsx)('div', {
                                className: _.avatarContainer,
                                style: { height: g },
                                children: j
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
                                        children: h.name
                                    })
                                })
                            }),
                            Z || N
                                ? (0, a.jsxs)('div', {
                                      className: _.infoContainer,
                                      children: [
                                          Z
                                              ? (0, a.jsx)(l.Text, {
                                                    className: _.appCategory,
                                                    variant: 'text-xs/medium',
                                                    color: 'text-normal',
                                                    children: S.name
                                                })
                                              : null,
                                          Z && N
                                              ? (0, a.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-secondary',
                                                    children: '\u2022'
                                                })
                                              : null,
                                          N
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
                                lineClamp: Z || N ? 2 : 3,
                                children: null !== (C = null === (v = h.directory_entry) || void 0 === v ? void 0 : v.short_description) && void 0 !== C ? C : h.description
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
