n.d(t, { Z: () => m }), n(388685), n(953529);
var r = n(200651),
    i = n(192379),
    a = n(622535),
    l = n(481060),
    s = n(783097),
    o = n(66637),
    c = n(768581),
    d = n(956965),
    u = n(388032),
    p = n(275459);
let m = function (e) {
    var t, n, m;
    let { application: h, onSelectApplication: g, showCategory: _ = !1 } = e,
        f = i.useRef(null),
        b = null == (t = h.categories) ? void 0 : t[0],
        [x, v] = i.useState(!1),
        C = i.useCallback((e) => {
            e && v(!0);
        }, []),
        j = (0, s.lf)(h),
        y = i.useCallback(() => {
            g(h.id);
        }, [g, h.id]),
        I = i.useMemo(
            () =>
                x
                    ? c.ZP.getApplicationIconURL({
                          id: h.id,
                          icon: h.icon,
                          size: 48
                      })
                    : void 0,
            [x, h]
        ),
        O = _ && null != b;
    return (0, r.jsx)(a.$, {
        innerRef: f,
        onChange: C,
        active: !x,
        children: (0, r.jsx)('div', {
            ref: f,
            className: p.container,
            children: (0, r.jsxs)(o.Z, {
                className: p.card,
                onClick: y,
                onContextMenu: () => {},
                'aria-label': u.intl.string(u.t.np1Wrq),
                children: [
                    (0, r.jsxs)('div', {
                        className: p.header,
                        children: [
                            (0, r.jsx)('div', {
                                style: {
                                    width: '100%',
                                    display: 'block',
                                    aspectRatio: 16 / 9
                                },
                                children: x
                                    ? (0, r.jsx)(d.Z, {
                                          application: h,
                                          bannerType: 'card',
                                          iconURL: I
                                      })
                                    : null
                            }),
                            (0, r.jsx)('div', {
                                className: p.avatarContainer,
                                style: { height: 28 },
                                children: x
                                    ? (0, r.jsx)('img', {
                                          src: I,
                                          alt: '',
                                          className: p.avatar,
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
                    (0, r.jsxs)('div', {
                        className: p.appDetails,
                        children: [
                            (0, r.jsx)('div', {
                                className: p.titleContainer,
                                children: (0, r.jsx)('div', {
                                    className: p.title,
                                    children: (0, r.jsx)(l.X6q, {
                                        variant: 'heading-md/semibold',
                                        color: 'header-primary',
                                        className: p.appName,
                                        children: h.name
                                    })
                                })
                            }),
                            O || j
                                ? (0, r.jsxs)('div', {
                                      className: p.infoContainer,
                                      children: [
                                          O
                                              ? (0, r.jsx)(l.Text, {
                                                    className: p.appCategory,
                                                    variant: 'text-xs/medium',
                                                    color: 'text-normal',
                                                    children: b.name
                                                })
                                              : null,
                                          O && j
                                              ? (0, r.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-secondary',
                                                    children: '\u2022'
                                                })
                                              : null,
                                          j
                                              ? (0, r.jsx)(l.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-secondary',
                                                    children: u.intl.string(u.t['/eVltr'])
                                                })
                                              : null
                                      ]
                                  })
                                : null,
                            (0, r.jsx)(l.Text, {
                                className: p.description,
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                lineClamp: O || j ? 2 : 3,
                                children: null != (m = null == (n = h.directory_entry) ? void 0 : n.short_description) ? m : h.description
                            })
                        ]
                    })
                ]
            })
        })
    });
};
