n.d(t, {
    C: function () {
        return j;
    },
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    s = n(481060),
    c = n(131388),
    u = n(357352),
    d = n(70097),
    m = n(565138),
    h = n(353254),
    f = n(695346),
    p = n(271383),
    _ = n(594174),
    g = n(671533),
    E = n(51144),
    C = n(506071),
    I = n(696014),
    x = n(847033),
    N = n(544978),
    v = n(893182),
    T = n(388032),
    S = n(340621);
function A(e) {
    let { onClick: t } = e;
    return (0, i.jsxs)(s.Clickable, {
        onClick: t,
        className: S.showMoreButton,
        children: [
            (0, i.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: T.intl.string(T.t.J4cw1t)
            }),
            (0, i.jsx)(s.Spacer, {
                size: 4,
                horizontal: !0
            }),
            (0, i.jsx)(g.Z, {
                direction: g.Z.Directions.RIGHT,
                className: S.showMoreArrow
            })
        ]
    });
}
function b(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        r = f.QK.useSetting(),
        l = (0, C.n)() && r,
        [a, o] = (0, h.Z)(t, l),
        s = l
            ? (0, i.jsx)(d.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: S.coverImage,
                  width: 655,
                  poster: (0, u.b)('server_products/storefront/default-header.png'),
                  src: (0, u.b)('server_products/storefront/default-header.mov')
              })
            : (0, i.jsx)('img', {
                  src: (0, u.b)('server_products/storefront/default-header.png'),
                  alt: '',
                  className: S.coverImage
              });
    return (0, i.jsx)('div', {
        ref: a,
        className: S.coverImageContainer,
        children:
            null == o || n
                ? s
                : (0, i.jsx)('img', {
                      src: o,
                      alt: '',
                      className: S.coverImage
                  })
    });
}
function j(e) {
    var t, n, l;
    let { guild: d, subscriptionsSettings: h } = e,
        f = d.id;
    let { nickname: g, nickcolor: C } =
            ((l = f),
            (0, o.cj)(
                [p.ZP, _.default],
                () => {
                    var e, t;
                    let n = _.default.getCurrentUser();
                    a()(null != n, 'user cannot be null');
                    let i = p.ZP.getMember(l, n.id);
                    return {
                        nickname: null !== (e = null == i ? void 0 : i.nick) && void 0 !== e ? e : E.ZP.getName(n),
                        nickcolor: null !== (t = null == i ? void 0 : i.colorString) && void 0 !== t ? t : void 0
                    };
                },
                [l]
            )),
        { isTruncated: j, ExpandableTextContainer: R } = (0, I.s)(),
        Z = (null !== (n = null == h ? void 0 : null === (t = h.description) || void 0 === t ? void 0 : t.trim().length) && void 0 !== n ? n : 0) > 0,
        [P, L] = r.useState(1),
        y = (0, c.Z)('(max-width: 1439px)'),
        { selectedTab: O, isPhantomPreview: M } = (0, x.m)(),
        k = O === N.y.GUILD_PRODUCTS_PREVIEW ? T.intl.string(T.t['LvXy/P']) : T.intl.string(T.t.XyqKh4),
        D = Z
            ? (0, i.jsxs)(i.Fragment, {
                  children: [
                      (0, i.jsx)(R, {
                          lineClamp: y || 2 === P ? 2 : 3,
                          children: (0, i.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-normal',
                              children: null == h ? void 0 : h.description
                          })
                      }),
                      j &&
                          (0, i.jsxs)(i.Fragment, {
                              children: [(0, i.jsx)(s.Spacer, { size: 4 }), (0, i.jsx)(A, { onClick: () => (0, v.Z)({ guildId: f }) })]
                          })
                  ]
              })
            : (0, i.jsx)(s.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-normal',
                  children: M ? k : T.intl.string(T.t['NY/FIS'])
              });
    return (0, i.jsxs)('div', {
        className: S.container,
        children: [
            (0, i.jsxs)('div', {
                className: S.infoContainer,
                children: [
                    (0, i.jsx)('div', {
                        children: (0, i.jsx)(m.Z, {
                            guild: d,
                            size: m.Z.Sizes.LARGER,
                            iconSrc: null == d.icon || M ? (0, u.b)('server_products/storefront/default-guild-icon.jpg') : void 0
                        })
                    }),
                    (0, i.jsx)(s.Spacer, {
                        size: 16,
                        horizontal: !0
                    }),
                    (0, i.jsxs)('div', {
                        children: [
                            (0, i.jsx)('div', {
                                ref: (e) => {
                                    null != e && e.clientHeight > 30 && L(2);
                                },
                                children: (0, i.jsx)(s.Heading, {
                                    variant: 'heading-xl/semibold',
                                    color: 'header-primary',
                                    lineClamp: 2,
                                    children: M ? T.intl.string(T.t.rtgp7u) : T.intl.formatToPlainString(T.t.NZeik5, { guildName: d.name })
                                })
                            }),
                            (0, i.jsxs)(i.Fragment, {
                                children: [
                                    (0, i.jsx)(s.Spacer, { size: 8 }),
                                    (0, i.jsx)(s.Text, {
                                        variant: 'text-md/normal',
                                        color: 'text-normal',
                                        children: T.intl.format(T.t['7JwrlJ'], {
                                            username: g,
                                            usernameHook: function (e, t) {
                                                return (0, i.jsx)(
                                                    'span',
                                                    {
                                                        style: { color: C },
                                                        children: e
                                                    },
                                                    t
                                                );
                                            }
                                        })
                                    }),
                                    (0, i.jsx)(s.Spacer, { size: 9 }),
                                    D
                                ]
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(b, {
                coverImageAsset: null == h ? void 0 : h.cover_image_asset,
                isPreview: M
            })
        ]
    });
}
