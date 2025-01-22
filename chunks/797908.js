n(47120);
var i = n(200651),
    a = n(192379),
    r = n(622535),
    l = n(481060),
    o = n(783097),
    s = n(66637),
    c = n(768581),
    d = n(956965),
    u = n(388032),
    m = n(833643);
let p = 28;
t.Z = function (e) {
    var t, n, h;
    let { application: g, onSelectApplication: C, showCategory: x = !1 } = e,
        v = null === (t = g.categories) || void 0 === t ? void 0 : t[0],
        [_, f] = a.useState(!1),
        b = a.useCallback((e) => {
            e && f(!0);
        }, []),
        I = (0, o.lf)(g),
        S = a.useCallback(() => {
            C(g.id);
        }, [C, g.id]),
        j = a.useMemo(
            () =>
                _
                    ? c.ZP.getApplicationIconURL({
                          id: g.id,
                          icon: g.icon,
                          size: 48
                      })
                    : void 0,
            [_, g]
        ),
        N = x && null != v;
    return (0, i.jsx)(r.$, {
        onChange: b,
        active: !_,
        children: (0, i.jsx)('div', {
            className: m.container,
            children: (0, i.jsxs)(s.Z, {
                className: m.card,
                onClick: S,
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
                                children: _
                                    ? (0, i.jsx)(d.Z, {
                                          application: g,
                                          bannerType: 'card',
                                          iconURL: j
                                      })
                                    : null
                            }),
                            (0, i.jsx)('div', {
                                className: m.avatarContainer,
                                style: { height: p },
                                children: _
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
                                    children: (0, i.jsx)(l.Heading, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        className: m.appName,
                                        children: g.name
                                    })
                                })
                            }),
                            N || I
                                ? (0, i.jsxs)('div', {
                                      className: m.infoContainer,
                                      children: [
                                          N
                                              ? (0, i.jsx)(l.Text, {
                                                    className: m.appCategory,
                                                    variant: 'text-xs/medium',
                                                    color: 'text-normal',
                                                    children: v.name
                                                })
                                              : null,
                                          N && I
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
                                lineClamp: N || I ? 2 : 3,
                                children: null !== (h = null === (n = g.directory_entry) || void 0 === n ? void 0 : n.short_description) && void 0 !== h ? h : g.description
                            })
                        ]
                    })
                ]
            })
        })
    });
};
