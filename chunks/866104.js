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
    l = n.n(a),
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
    N = n(388032),
    j = n(414521);
function C(e) {
    let { onClick: t } = e;
    return (0, r.jsxs)(s.P3F, {
        onClick: t,
        className: j.showMoreButton,
        children: [
            (0, r.jsx)(s.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: N.NW.string(N.t.J4cw1t)
            }),
            (0, r.jsx)(s.LZC, {
                size: 4,
                horizontal: !0
            }),
            (0, r.jsx)(_.Z, {
                direction: _.Z.Directions.RIGHT,
                className: j.showMoreArrow
            })
        ]
    });
}
function I(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        i = f.QK.useSetting(),
        a = (0, x.n)() && i,
        [l, o] = (0, m.Z)(t, a),
        s = a
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
        ref: l,
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
function S(e) {
    var t, n;
    let { guild: a, subscriptionsSettings: d } = e,
        m = a.id,
        { nickname: f, nickcolor: _ } = (0, o.cj)(
            [h.ZP, g.default],
            () => {
                var e, t;
                let n = g.default.getCurrentUser();
                l()(null != n, 'user cannot be null');
                let r = h.ZP.getMember(m, n.id);
                return {
                    nickname: null != (e = null == r ? void 0 : r.nick) ? e : b.ZP.getName(n),
                    nickcolor: null != (t = null == r ? void 0 : r.colorString) ? t : void 0
                };
            },
            [m]
        ),
        { isTruncated: x, ExpandableTextContainer: S } = (0, y.s)(),
        T = (null != (n = null == d || null == (t = d.description) ? void 0 : t.trim().length) ? n : 0) > 0,
        [P, A] = i.useState(1),
        w = (0, c.Z)('(max-width: 1439px)'),
        { selectedTab: Z, isPhantomPreview: k } = (0, E.m)(),
        R = Z === v.y.GUILD_PRODUCTS_PREVIEW ? N.NW.string(N.t['LvXy/P']) : N.NW.string(N.t.XyqKh4),
        D = T
            ? (0, r.jsxs)(r.Fragment, {
                  children: [
                      (0, r.jsx)(S, {
                          lineClamp: w || 2 === P ? 2 : 3,
                          children: (0, r.jsx)(s.Text, {
                              variant: 'text-sm/normal',
                              color: 'text-normal',
                              children: null == d ? void 0 : d.description
                          })
                      }),
                      x &&
                          (0, r.jsxs)(r.Fragment, {
                              children: [(0, r.jsx)(s.LZC, { size: 4 }), (0, r.jsx)(C, { onClick: () => (0, O.Z)({ guildId: m }) })]
                          })
                  ]
              })
            : (0, r.jsx)(s.Text, {
                  variant: 'text-sm/normal',
                  color: 'text-normal',
                  children: k ? R : N.NW.string(N.t['NY/FIS'])
              });
    return (0, r.jsxs)('div', {
        className: j.container,
        children: [
            (0, r.jsxs)('div', {
                className: j.infoContainer,
                children: [
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(p.Z, {
                            guild: a,
                            size: p.Z.Sizes.LARGER,
                            iconSrc: null == a.icon || k ? (0, u.b)('server_products/storefront/default-guild-icon.jpg') : void 0
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
                                    children: k ? N.NW.string(N.t.rtgp7u) : N.NW.formatToPlainString(N.t.NZeik5, { guildName: a.name })
                                })
                            }),
                            (0, r.jsx)(s.LZC, { size: 8 }),
                            (0, r.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                color: 'text-normal',
                                children: N.NW.format(N.t['7JwrlJ'], {
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
                isPreview: k
            })
        ]
    });
}
