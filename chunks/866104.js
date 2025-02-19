n.d(t, {
    C: () => S,
    Z: () => I
}),
    n(47120),
    n(266796),
    n(566702);
var r = n(200651),
    i = n(192379),
    a = n(512722),
    o = n.n(a),
    l = n(442837),
    s = n(481060),
    c = n(131388),
    d = n(357352),
    u = n(70097),
    p = n(565138),
    m = n(353254),
    f = n(695346),
    h = n(271383),
    g = n(594174),
    _ = n(671533),
    b = n(51144),
    v = n(506071),
    y = n(696014),
    x = n(847033),
    O = n(544978),
    E = n(893182),
    j = n(388032),
    N = n(39252);
function C(e) {
    let { onClick: t } = e;
    return (0, r.jsxs)(s.P3F, {
        onClick: t,
        className: N.showMoreButton,
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: j.NW.string(j.t.J4cw1t)
            }),
            (0, r.jsx)(s.LZC, {
                size: 4,
                horizontal: !0
            }),
            (0, r.jsx)(_.Z, {
                direction: _.Z.Directions.RIGHT,
                className: N.showMoreArrow
            })
        ]
    });
}
function I(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        i = f.QK.useSetting(),
        a = (0, v.n)() && i,
        [o, l] = (0, m.Z)(t, a),
        s = a
            ? (0, r.jsx)(u.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: N.coverImage,
                  width: 655,
                  poster: (0, d.b)('server_products/storefront/default-header.png'),
                  src: (0, d.b)('server_products/storefront/default-header.mov')
              })
            : (0, r.jsx)('img', {
                  src: (0, d.b)('server_products/storefront/default-header.png'),
                  alt: '',
                  className: N.coverImage
              });
    return (0, r.jsx)('div', {
        ref: o,
        className: N.coverImageContainer,
        children:
            null == l || n
                ? s
                : (0, r.jsx)('img', {
                      src: l,
                      alt: '',
                      className: N.coverImage
                  })
    });
}
function S(e) {
    var t, n;
    let { guild: a, subscriptionsSettings: u } = e,
        m = a.id,
        { nickname: f, nickcolor: _ } = (0, l.cj)(
            [h.ZP, g.default],
            () => {
                var e, t;
                let n = g.default.getCurrentUser();
                o()(null != n, 'user cannot be null');
                let r = h.ZP.getMember(m, n.id);
                return {
                    nickname: null !== (e = null == r ? void 0 : r.nick) && void 0 !== e ? e : b.ZP.getName(n),
                    nickcolor: null !== (t = null == r ? void 0 : r.colorString) && void 0 !== t ? t : void 0
                };
            },
            [m]
        ),
        { isTruncated: v, ExpandableTextContainer: S } = (0, y.s)(),
        P = (null !== (n = null == u ? void 0 : null === (t = u.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0,
        [T, A] = i.useState(1),
        w = (0, c.Z)('(max-width: 1439px)'),
        { selectedTab: Z, isPhantomPreview: k } = (0, x.m)(),
        R = Z === O.y.GUILD_PRODUCTS_PREVIEW ? j.NW.string(j.t['LvXy/P']) : j.NW.string(j.t.XyqKh4),
        L = P
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(S, {
                          lineClamp: w || 2 === T ? 2 : 3,
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-normal',
                              children: null == u ? void 0 : u.description
                          })
                      }),
                      v &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [(0, r.jsx)(s.LZC, { size: 4 }), (0, r.jsx)(C, { onClick: () => (0, E.Z)({ guildId: m }) })]
                          })
                  ]
              })
            : (0, r.jsx)(s.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-normal',
                  children: k ? R : j.NW.string(j.t['NY/FIS'])
              });
    return (0, r.jsxs)('div', {
        className: N.container,
        children: [
            (0, r.jsxs)('div', {
                className: N.infoContainer,
                children: [
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(p.Z, {
                            guild: a,
                            size: p.Z.Sizes.LARGER,
                            iconSrc: null == a.icon || k ? (0, d.b)('server_products/storefront/default-guild-icon.jpg') : void 0
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
                                    children: k ? j.NW.string(j.t.rtgp7u) : j.NW.formatToPlainString(j.t.NZeik5, { guildName: a.name })
                                })
                            }),
                            (0, r.jsxs)(r.Fragment, {
                                children: [
                                    (0, r.jsx)(s.LZC, { size: 8 }),
                                    (0, r.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-normal',
                                        children: j.NW.format(j.t['7JwrlJ'], {
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
                                    L
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, r.jsx)(I, {
                coverImageAsset: null == u ? void 0 : u.cover_image_asset,
                isPreview: k
            })
        ]
    });
}
