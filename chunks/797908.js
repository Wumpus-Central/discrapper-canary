t(47120);
var a = t(200651),
    i = t(192379),
    r = t(622535),
    l = t(481060),
    o = t(783097),
    s = t(66637),
    c = t(768581),
    d = t(956965),
    u = t(388032),
    m = t(833643);
let p = 28;
n.Z = function (e) {
    var n, t, _;
    let { application: g, onSelectApplication: f, showCategory: v = !1 } = e,
        C = null === (n = g.categories) || void 0 === n ? void 0 : n[0],
        [x, h] = i.useState(!1),
        b = i.useCallback((e) => {
            e && h(!0);
        }, []),
        I = (0, o.lf)(g),
        j = i.useCallback(() => {
            f(g.id);
        }, [f, g.id]),
        S = i.useMemo(
            () =>
                x
                    ? c.ZP.getApplicationIconURL({
                          id: g.id,
                          icon: g.icon,
                          size: 48
                      })
                    : void 0,
            [x, g]
        ),
        E = v && null != C;
    return (0, a.jsx)(r.$, {
        onChange: b,
        active: !x,
        children: (0, a.jsx)('div', {
            className: m.container,
            children: (0, a.jsxs)(s.Z, {
                className: m.card,
                onClick: j,
                onContextMenu: () => {},
                children: [
                    (0, a.jsxs)('div', {
                        className: m.header,
                        children: [
                            (0, a.jsx)('div', {
                                style: {
                                    width: '100%',
                                    display: 'block',
                                    aspectRatio: 16 / 9
                                },
                                children: x
                                    ? (0, a.jsx)(d.Z, {
                                          application: g,
                                          bannerType: 'card',
                                          iconURL: S
                                      })
                                    : null
                            }),
                            (0, a.jsx)('div', {
                                className: m.avatarContainer,
                                style: { height: p },
                                children: x
                                    ? (0, a.jsx)('img', {
                                          src: S,
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
                    (0, a.jsxs)('div', {
                        className: m.appDetails,
                        children: [
                            (0, a.jsx)('div', {
                                className: m.titleContainer,
                                children: (0, a.jsx)('div', {
                                    className: m.title,
                                    children: (0, a.jsx)(l.Heading, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        className: m.appName,
                                        children: g.name
                                    })
                                })
                            }),
                            E || I
                                ? (0, a.jsxs)('div', {
                                      className: m.infoContainer,
                                      children: [
                                          E
                                              ? (0, a.jsx)(l.Text, {
                                                    className: m.appCategory,
                                                    variant: 'text-xs/medium',
                                                    color: 'text-normal',
                                                    children: C.name
                                                })
                                              : null,
                                          E && I
                                              ? (0, a.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-secondary',
                                                    children: '\u2022'
                                                })
                                              : null,
                                          I
                                              ? (0, a.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-secondary',
                                                    children: u.intl.string(u.t['/eVltr'])
                                                })
                                              : null
                                      ]
                                  })
                                : null,
                            (0, a.jsx)(l.Text, {
                                className: m.description,
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                lineClamp: E || I ? 2 : 3,
                                children: null !== (_ = null === (t = g.directory_entry) || void 0 === t ? void 0 : t.short_description) && void 0 !== _ ? _ : g.description
                            })
                        ]
                    })
                ]
            })
        })
    });
};
