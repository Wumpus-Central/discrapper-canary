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
    g = n(271383),
    _ = n(594174),
    h = n(671533),
    b = n(51144),
    E = n(506071),
    C = n(696014),
    x = n(847033),
    v = n(544978),
    O = n(893182),
    y = n(388032),
    j = n(414521);
function I(e) {
    let { onClick: t } = e;
    return (0, r.jsxs)(s.P3F, {
        onClick: t,
        className: j.showMoreButton,
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: y.intl.string(y.t.J4cw1t)
            }),
            (0, r.jsx)(s.LZC, {
                size: 4,
                horizontal: !0
            }),
            (0, r.jsx)(h.Z, {
                direction: h.Z.Directions.RIGHT,
                className: j.showMoreArrow
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
                  className: j.coverImage,
                  width: 655,
                  poster: (0, u.b)('server_products/storefront/default-header.png'),
                  src: (0, u.b)('server_products/storefront/default-header.mov')
              })
            : (0, r.jsx)('img', {
                  src: (0, u.b)('server_products/storefront/default-header.png'),
                  alt: '',
                  className: j.coverImage
              });
    return (0, r.jsx)('div', {
        ref: a,
        className: j.coverImageContainer,
        children:
            null == o || n
                ? s
                : (0, r.jsx)('img', {
                      src: o,
                      alt: '',
                      className: j.coverImage
                  })
    });
}
function T(e) {
    var t, n;
    let { guild: l, subscriptionsSettings: d } = e,
        m = l.id,
        { nickname: f, nickcolor: h } = (0, o.cj)(
            [g.ZP, _.default],
            () => {
                var e, t;
                let n = _.default.getCurrentUser();
                a()(null != n, 'user cannot be null');
                let r = g.ZP.getMember(m, n.id);
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
        { selectedTab: Z, isPhantomPreview: R } = (0, x.m)(),
        L = Z === v.y.GUILD_PRODUCTS_PREVIEW ? y.intl.string(y.t['LvXy/P']) : y.intl.string(y.t.XyqKh4),
        D = N
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
                              children: [(0, r.jsx)(s.LZC, { size: 4 }), (0, r.jsx)(I, { onClick: () => (0, O.Z)({ guildId: m }) })]
                          })
                  ]
              })
            : (0, r.jsx)(s.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-default',
                  children: R ? L : y.intl.string(y.t['NY/FIS'])
              });
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            (0, r.jsxs)('div', {
                className: j.infoContainer,
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
                                    children: R ? y.intl.string(y.t.rtgp7u) : y.intl.formatToPlainString(y.t.NZeik5, { guildName: l.name })
                                })
                            }),
                            (0, r.jsx)(s.LZC, { size: 8 }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                color: 'text-default',
                                children: y.intl.format(y.t['7JwrlJ'], {
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
                            D
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
