n.d(t, {
    C: () => j,
    Z: () => A
}),
    n(47120);
var i = n(200651),
    l = n(192379),
    a = n(512722),
    r = n.n(a),
    s = n(442837),
    o = n(481060),
    c = n(131388),
    d = n(357352),
    u = n(70097),
    m = n(565138),
    _ = n(353254),
    h = n(695346),
    p = n(271383),
    g = n(594174),
    f = n(671533),
    x = n(51144),
    C = n(506071),
    v = n(696014),
    E = n(847033),
    I = n(544978),
    N = n(893182),
    S = n(388032),
    T = n(340621);
function b(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(o.P3F, {
        onClick: t,
        className: T.showMoreButton,
        children: [
            (0, i.jsx)(o.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: S.intl.string(S.t.J4cw1t)
            }),
            (0, i.jsx)(o.LZC, {
                size: 4,
                horizontal: !0
            }),
            (0, i.jsx)(f.Z, {
                direction: f.Z.Directions.RIGHT,
                className: T.showMoreArrow
            })
        ]
    });
}
function A(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        l = h.QK.useSetting(),
        a = (0, C.n)() && l,
        [r, s] = (0, _.Z)(t, a),
        o = a
            ? (0, i.jsx)(u.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: T.coverImage,
                  width: 655,
                  poster: (0, d.b)('server_products/storefront/default-header.png'),
                  src: (0, d.b)('server_products/storefront/default-header.mov')
              })
            : (0, i.jsx)('img', {
                  src: (0, d.b)('server_products/storefront/default-header.png'),
                  alt: '',
                  className: T.coverImage
              });
    return (0, i.jsx)('div', {
        ref: r,
        className: T.coverImageContainer,
        children:
            null == s || n
                ? o
                : (0, i.jsx)('img', {
                      src: s,
                      alt: '',
                      className: T.coverImage
                  })
    });
}
function j(e) {
    var t, n;
    let { guild: a, subscriptionsSettings: u } = e,
        _ = a.id,
        { nickname: h, nickcolor: f } = (0, s.cj)(
            [p.ZP, g.default],
            () => {
                var e, t;
                let n = g.default.getCurrentUser();
                r()(null != n, 'user cannot be null');
                let i = p.ZP.getMember(_, n.id);
                return {
                    nickname: null !== (e = null == i ? void 0 : i.nick) && void 0 !== e ? e : x.ZP.getName(n),
                    nickcolor: null !== (t = null == i ? void 0 : i.colorString) && void 0 !== t ? t : void 0
                };
            },
            [_]
        ),
        { isTruncated: C, ExpandableTextContainer: j } = (0, v.s)(),
        y = (null !== (n = null == u ? void 0 : null === (t = u.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0,
        [Z, R] = l.useState(1),
        L = (0, c.Z)('(max-width: 1439px)'),
        { selectedTab: P, isPhantomPreview: k } = (0, E.m)(),
        M = P === I.y.GUILD_PRODUCTS_PREVIEW ? S.intl.string(S.t['LvXy/P']) : S.intl.string(S.t.XyqKh4),
        O = y
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(j, {
                          lineClamp: L || 2 === Z ? 2 : 3,
                          children: (0, i.jsx)(o.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-normal',
                              children: null == u ? void 0 : u.description
                          })
                      }),
                      C &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(o.LZC, { size: 4 }), (0, i.jsx)(b, { onClick: () => (0, N.Z)({ guildId: _ }) })]
                          })
                  ]
              })
            : (0, i.jsx)(o.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-normal',
                  children: k ? M : S.intl.string(S.t['NY/FIS'])
              });
    return (0, i.jsxs)('div', {
        className: T.container,
        children: [
            (0, i.jsxs)('div', {
                className: T.infoContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(m.Z, {
                            guild: a,
                            size: m.Z.Sizes.LARGER,
                            iconSrc: null == a.icon || k ? (0, d.b)('server_products/storefront/default-guild-icon.jpg') : void 0
                        })
                    }),
                    (0, i.jsx)(o.LZC, {
                        size: 16,
                        horizontal: !0
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)('div', {
                                ref: (e) => {
                                    null != e && e.clientHeight > 30 && R(2);
                                },
                                children: (0, i.jsx)(o.X6q, {
                                    variant: 'heading-xl/semibold',
                                    color: 'header-primary',
                                    lineClamp: 2,
                                    children: k ? S.intl.string(S.t.rtgp7u) : S.intl.formatToPlainString(S.t.NZeik5, { guildName: a.name })
                                })
                            }),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(o.LZC, { size: 8 }),
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-normal',
                                        children: S.intl.format(S.t['7JwrlJ'], {
                                            username: h,
                                            usernameHook: function (e, t) {
                                                return (0, i.jsx)(
                                                    'span',
                                                    {
                                                        style: { color: f },
                                                        children: e
                                                    },
                                                    t
                                                );
                                            }
                                        })
                                    }),
                                    (0, i.jsx)(o.LZC, { size: 9 }),
                                    O
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(A, {
                coverImageAsset: null == u ? void 0 : u.cover_image_asset,
                isPreview: k
            })
        ]
    });
}
