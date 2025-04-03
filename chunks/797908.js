n.d(t, { Z: () => m }), n(47120), n(266796);
var r = n(200651),
    a = n(192379),
    i = n(622535),
    l = n(481060),
    o = n(783097),
    s = n(66637),
    c = n(768581),
    d = n(956965),
    u = n(388032),
    p = n(275459);
let m = function (e) {
    var t, n, m;
    let { application: h, onSelectApplication: g, showCategory: f = !1 } = e,
        _ = a.useRef(null),
        b = null == (t = h.categories) ? void 0 : t[0],
        [x, v] = a.useState(!1),
        C = a.useCallback((e) => {
            e && v(!0);
        }, []),
        j = (0, o.lf)(h),
        y = a.useCallback(() => {
            g(h.id);
        }, [g, h.id]),
        O = a.useMemo(
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
        I = f && null != b;
    return (0, r.jsx)(i.$, {
        innerRef: _,
        onChange: C,
        active: !x,
        children: (0, r.jsx)('div', {
            ref: _,
            className: p.container,
            children: (0, r.jsxs)(s.Z, {
                className: p.card,
                onClick: y,
                onContextMenu: () => {},
                'aria-label': u.NW.string(u.t.np1Wrq),
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
                                          iconURL: O
                                      })
                                    : null
                            }),
                            (0, r.jsx)('div', {
                                className: p.avatarContainer,
                                style: { height: 28 },
                                children: x
                                    ? (0, r.jsx)('img', {
                                          src: O,
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
                            I || j
                                ? (0, r.jsxs)('div', {
                                      className: p.infoContainer,
                                      children: [
                                          I
                                              ? (0, r.jsx)(l.Text, {
                                                    className: p.appCategory,
                                                    variant: 'text-xs/medium',
                                                    color: 'text-normal',
                                                    children: b.name
                                                })
                                              : null,
                                          I && j
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
                                                    children: u.NW.string(u.t['/eVltr'])
                                                })
                                              : null
                                      ]
                                  })
                                : null,
                            (0, r.jsx)(l.Text, {
                                className: p.description,
                                variant: 'text-sm/medium',
                                color: 'header-secondary',
                                lineClamp: I || j ? 2 : 3,
                                children: null != (m = null == (n = h.directory_entry) ? void 0 : n.short_description) ? m : h.description
                            })
                        ]
                    })
                ]
            })
        })
    });
};
