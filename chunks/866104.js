n.d(t, {
    C: () => N,
    Z: () => I
}),
    n(388685),
    n(953529),
    n(781311);
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
    h = n(271383),
    g = n(594174),
    _ = n(671533),
    b = n(51144),
    x = n(506071),
    y = n(696014),
    E = n(847033),
    v = n(544978),
    O = n(893182),
    j = n(388032),
    C = n(414521);
function S(e) {
    let { onClick: t } = e;
    return (0, r.jsxs)(s.P3F, {
        onClick: t,
        className: C.showMoreButton,
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: j.intl.string(j.t.J4cw1t)
            }),
            (0, r.jsx)(s.LZC, {
                size: 4,
                horizontal: !0
            }),
            (0, r.jsx)(_.Z, {
                direction: _.Z.Directions.RIGHT,
                className: C.showMoreArrow
            })
        ]
    });
}
function I(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        i = f.QK.useSetting(),
        l = (0, x.n)() && i,
        [a, o] = (0, m.Z)(t, l),
        s = l
            ? (0, r.jsx)(d.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: C.coverImage,
                  width: 655,
                  poster: (0, u.b)('server_products/storefront/default-header.png'),
                  src: (0, u.b)('server_products/storefront/default-header.mov')
              })
            : (0, r.jsx)('img', {
                  src: (0, u.b)('server_products/storefront/default-header.png'),
                  alt: '',
                  className: C.coverImage
              });
    return (0, r.jsx)('div', {
        ref: a,
        className: C.coverImageContainer,
        children:
            null == o || n
                ? s
                : (0, r.jsx)('img', {
                      src: o,
                      alt: '',
                      className: C.coverImage
                  })
    });
}
function N(e) {
    var t, n;
    let { guild: l, subscriptionsSettings: d } = e,
        m = l.id,
        { nickname: f, nickcolor: _ } = (0, o.cj)(
            [h.ZP, g.default],
            () => {
                var e, t;
                let n = g.default.getCurrentUser();
                a()(null != n, 'user cannot be null');
                let r = h.ZP.getMember(m, n.id);
                return {
                    nickname: null != (e = null == r ? void 0 : r.nick) ? e : b.ZP.getName(n),
                    nickcolor: null != (t = null == r ? void 0 : r.colorString) ? t : void 0
                };
            },
            [m]
        ),
        { isTruncated: x, ExpandableTextContainer: N } = (0, y.s)(),
        T = (null != (n = null == d || null == (t = d.description) ? void 0 : t.trim().length) ? n : 0) > 0,
        [P, A] = i.useState(1),
        w = (0, c.Z)('(max-width: 1439px)'),
        { selectedTab: Z, isPhantomPreview: R } = (0, E.m)(),
        k = Z === v.y.GUILD_PRODUCTS_PREVIEW ? j.intl.string(j.t['LvXy/P']) : j.intl.string(j.t.XyqKh4),
        D = T
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(N, {
                          lineClamp: w || 2 === P ? 2 : 3,
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-normal',
                              children: null == d ? void 0 : d.description
                          })
                      }),
                      x &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [(0, r.jsx)(s.LZC, { size: 4 }), (0, r.jsx)(S, { onClick: () => (0, O.Z)({ guildId: m }) })]
                          })
                  ]
              })
            : (0, r.jsx)(s.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-normal',
                  children: R ? k : j.intl.string(j.t['NY/FIS'])
              });
    return (0, r.jsxs)('div', {
        className: C.container,
        children: [
            (0, r.jsxs)('div', {
                className: C.infoContainer,
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
                                    children: R ? j.intl.string(j.t.rtgp7u) : j.intl.formatToPlainString(j.t.NZeik5, { guildName: l.name })
                                })
                            }),
                            (0, r.jsx)(s.LZC, { size: 8 }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                color: 'text-normal',
                                children: j.intl.format(j.t['7JwrlJ'], {
                                    username: f,
                                    usernameHook: function (e, t) {
                                        return (0, r.jsx)(
                                            'span',
                                            {
                                                style: { color: _ },
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
            (0, r.jsx)(I, {
                coverImageAsset: null == d ? void 0 : d.cover_image_asset,
                isPreview: R
            })
        ]
    });
}
