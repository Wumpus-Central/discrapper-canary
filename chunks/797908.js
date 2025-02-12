n.d(t, { Z: () => h }), n(47120);
var i = n(200651),
    a = n(192379),
    r = n(622535),
    l = n(481060),
    s = n(783097),
    o = n(66637),
    c = n(768581),
    d = n(956965),
    u = n(388032),
    m = n(633870);
let h = function (e) {
    var t, n, h;
    let { application: p, onSelectApplication: g, showCategory: _ = !1 } = e,
        x = null === (t = p.categories) || void 0 === t ? void 0 : t[0],
        [C, v] = a.useState(!1),
        f = a.useCallback((e) => {
            e && v(!0);
        }, []),
        I = (0, s.lf)(p),
        b = a.useCallback(() => {
            g(p.id);
        }, [g, p.id]),
        j = a.useMemo(
            () =>
                C
                    ? c.ZP.getApplicationIconURL({
                          id: p.id,
                          icon: p.icon,
                          size: 48
                      })
                    : void 0,
            [C, p]
        ),
        S = _ && null != x;
    return (0, i.jsx)(r.$, {
        onChange: f,
        active: !C,
        children: (0, i.jsx)('div', {
            className: m.container,
            children: (0, i.jsxs)(o.Z, {
                className: m.card,
                onClick: b,
                onContextMenu: () => {},
                children: [
                    (0, i.jsxs)('div', {
                        className: m.header,
                        children: [
                            (0, i.jsx)('div', {
                                style: {
                                    width: '100%',
                                    display: 'block',
                                    aspectRatio: 16 / 9
                                },
                                children: C
                                    ? (0, i.jsx)(d.Z, {
                                          application: p,
                                          bannerType: 'card',
                                          iconURL: j
                                      })
                                    : null
                            }),
                            (0, i.jsx)('div', {
                                className: m.avatarContainer,
                                style: { height: 28 },
                                children: C
                                    ? (0, i.jsx)('img', {
                                          src: j,
                                          alt: '',
                                          className: m.avatar,
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
                    (0, i.jsxs)('div', {
                        className: m.appDetails,
                        children: [
                            (0, i.jsx)('div', {
                                className: m.titleContainer,
                                children: (0, i.jsx)('div', {
                                    className: m.title,
                                    children: (0, i.jsx)(l.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        className: m.appName,
                                        children: p.name
                                    })
                                })
                            }),
                            S || I
                                ? (0, i.jsxs)('div', {
                                      className: m.infoContainer,
                                      children: [
                                          S
                                              ? (0, i.jsx)(l.Text, {
                                                    className: m.appCategory,
                                                    variant: 'text-xs/medium',
                                                    color: 'text-normal',
                                                    children: x.name
                                                })
                                              : null,
                                          S && I
                                              ? (0, i.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-secondary',
                                                    children: '\u2022'
                                                })
                                              : null,
                                          I
                                              ? (0, i.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-secondary',
                                                    children: u.intl.string(u.t['/eVltr'])
                                                })
                                              : null
                                      ]
                                  })
                                : null,
                            (0, i.jsx)(l.Text, {
                                className: m.description,
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                lineClamp: S || I ? 2 : 3,
                                children: null !== (h = null === (n = p.directory_entry) || void 0 === n ? void 0 : n.short_description) && void 0 !== h ? h : p.description
                            })
                        ]
                    })
                ]
            })
        })
    });
};
