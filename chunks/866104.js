(n.d(t, {
    C: () => T,
    Z: () => S
}),
    n(388685),
    n(953529),
    n(781311));
var r = n(255367),
    i = n(73800),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(131388),
    u = n(357352),
    d = n(70097),
    p = n(565138),
    m = n(353254),
    f = n(695346),
    _ = n(271383),
    g = n(594174),
    h = n(671533),
    b = n(51144),
    E = n(506071),
    C = n(696014),
    O = n(847033),
    y = n(544978),
    v = n(893182),
    x = n(388032),
    I = n(414521);
function j(e) {
    let { onClick: t } = e;
    return (0, r.jsxs)(s.P3F, {
        onClick: t,
        className: I.showMoreButton,
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: x.intl.string(x.t.J4cw1t)
            }),
            (0, r.jsx)(s.LZC, {
                size: 4,
                horizontal: !0
            }),
            (0, r.jsx)(h.Z, {
                direction: h.Z.Directions.RIGHT,
                className: I.showMoreArrow
            })
        ]
    });
}
function S(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        i = f.QK.useSetting(),
        l = (0, E.n)() && i,
        [a, o] = (0, m.Z)(t, l),
        s = l
            ? (0, r.jsx)(d.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: I.coverImage,
                  width: 655,
                  poster: (0, u.b)('server_products/storefront/default-header.png'),
                  src: (0, u.b)('server_products/storefront/default-header.mov')
              })
            : (0, r.jsx)('img', {
                  src: (0, u.b)('server_products/storefront/default-header.png'),
                  alt: '',
                  className: I.coverImage
              });
    return (0, r.jsx)('div', {
        ref: a,
        className: I.coverImageContainer,
        children:
            null == o || n
                ? s
                : (0, r.jsx)('img', {
                      src: o,
                      alt: '',
                      className: I.coverImage
                  })
    });
}
function T(e) {
    var t, n;
    let { guild: l, subscriptionsSettings: d } = e,
        m = l.id,
        { nickname: f, nickcolor: h } = (0, o.cj)(
            [_.ZP, g.default],
            () => {
                var e, t;
                let n = g.default.getCurrentUser();
                a()(null != n, 'user cannot be null');
                let r = _.ZP.getMember(m, n.id);
                return {
                    nickname: null != (e = null == r ? void 0 : r.nick) ? e : b.ZP.getName(n),
                    nickcolor: null != (t = null == r ? void 0 : r.colorString) ? t : void 0
                };
            },
            [m]
        ),
        { isTruncated: E, ExpandableTextContainer: T } = (0, C.s)(),
        N = (null != (n = null == d || null == (t = d.description) ? void 0 : t.trim().length) ? n : 0) > 0,
        [P, A] = i.useState(1),
        w = (0, c.Z)('(max-width: 1439px)'),
        { selectedTab: Z, isPhantomPreview: R } = (0, O.m)(),
        D = Z === y.y.GUILD_PRODUCTS_PREVIEW ? x.intl.string(x.t['LvXy/P']) : x.intl.string(x.t.XyqKh4),
        L = N
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(T, {
                          lineClamp: w || 2 === P ? 2 : 3,
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-default',
                              children: null == d ? void 0 : d.description
                          })
                      }),
                      E &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [(0, r.jsx)(s.LZC, { size: 4 }), (0, r.jsx)(j, { onClick: () => (0, v.Z)({ guildId: m }) })]
                          })
                  ]
              })
            : (0, r.jsx)(s.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-default',
                  children: R ? D : x.intl.string(x.t['NY/FIS'])
              });
    return (0, r.jsxs)('div', {
        className: I.container,
        children: [
            (0, r.jsxs)('div', {
                className: I.infoContainer,
                children: [
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(p.Z, {
                            guild: l,
                            size: p.Z.Sizes.LARGER,
                            iconSrc: null == l.icon || R ? (0, u.b)('server_products/storefront/default-guild-icon.jpg') : void 0
                        })
                    }),
                    (0, r.jsx)(s.LZC, {
                        size: 16,
                        horizontal: !0
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)('div', {
                                ref: (e) => {
                                    null != e && e.clientHeight > 30 && A(2);
                                },
                                children: (0, r.jsx)(s.X6q, {
                                    variant: 'heading-xl/semibold',
                                    color: 'header-primary',
                                    lineClamp: 2,
                                    children: R ? x.intl.string(x.t.rtgp7u) : x.intl.formatToPlainString(x.t.NZeik5, { guildName: l.name })
                                })
                            }),
                            (0, r.jsx)(s.LZC, { size: 8 }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                color: 'text-default',
                                children: x.intl.format(x.t['7JwrlJ'], {
                                    username: f,
                                    usernameHook: function (e, t) {
                                        return (0, r.jsx)(
                                            'span',
                                            {
                                                style: { color: h },
                                                children: e
                                            },
                                            t
                                        );
                                    }
                                })
                            }),
                            (0, r.jsx)(s.LZC, { size: 9 }),
                            L
                        ]
                    })
                ]
            }),
            (0, r.jsx)(S, {
                coverImageAsset: null == d ? void 0 : d.cover_image_asset,
                isPreview: R
            })
        ]
    });
}
