(n.d(t, {
    C: () => R,
    Z: () => C
}),
    n(388685),
    n(953529),
    n(781311));
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    s = n(442837),
    l = n(481060),
    c = n(131388),
    u = n(357352),
    d = n(70097),
    f = n(565138),
    _ = n(353254),
    p = n(695346),
    h = n(271383),
    m = n(594174),
    g = n(671533),
    E = n(51144),
    b = n(506071),
    y = n(696014),
    O = n(847033),
    v = n(544978),
    I = n(893182),
    T = n(388032),
    S = n(414521);
function A(e) {
    let { onClick: t } = e;
    return (0, r.jsxs)(l.P3F, {
        onClick: t,
        className: S.showMoreButton,
        children: [
            (0, r.jsx)(l.Text, {
                variant: 'text-sm/medium',
                color: 'header-primary',
                children: T.intl.string(T.t.J4cw1t)
            }),
            (0, r.jsx)(l.LZC, {
                size: 4,
                horizontal: !0
            }),
            (0, r.jsx)(g.Z, {
                direction: g.Z.Directions.RIGHT,
                className: S.showMoreArrow
            })
        ]
    });
}
function N(e) {
    return (0, s.cj)(
        [h.ZP, m.default],
        () => {
            var t, n;
            let r = m.default.getCurrentUser();
            a()(null != r, 'user cannot be null');
            let i = h.ZP.getMember(e, r.id);
            return {
                nickname: null != (t = null == i ? void 0 : i.nick) ? t : E.ZP.getName(r),
                nickcolor: null != (n = null == i ? void 0 : i.colorString) ? n : void 0
            };
        },
        [e]
    );
}
function C(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        i = p.QK.useSetting(),
        o = (0, b.n)() && i,
        [a, s] = (0, _.Z)(t, o),
        l = o
            ? (0, r.jsx)(d.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: S.coverImage,
                  width: 655,
                  poster: (0, u.b)('server_products/storefront/default-header.png'),
                  src: (0, u.b)('server_products/storefront/default-header.mov')
              })
            : (0, r.jsx)('img', {
                  src: (0, u.b)('server_products/storefront/default-header.png'),
                  alt: '',
                  className: S.coverImage
              });
    return (0, r.jsx)('div', {
        ref: a,
        className: S.coverImageContainer,
        children:
            null == s || n
                ? l
                : (0, r.jsx)('img', {
                      src: s,
                      alt: '',
                      className: S.coverImage
                  })
    });
}
function R(e) {
    var t, n;
    let { guild: o, subscriptionsSettings: a } = e,
        s = o.id,
        { nickname: d, nickcolor: _ } = N(s),
        { isTruncated: p, ExpandableTextContainer: h } = (0, y.s)(),
        m = () => (0, I.Z)({ guildId: s }),
        g = (null != (n = null == a || null == (t = a.description) ? void 0 : t.trim().length) ? n : 0) > 0,
        [E, b] = i.useState(1),
        R = (0, c.Z)('(max-width: 1439px)'),
        { selectedTab: P, isPhantomPreview: w } = (0, O.m)(),
        D = P === v.y.GUILD_PRODUCTS_PREVIEW ? T.intl.string(T.t['LvXy/P']) : T.intl.string(T.t.XyqKh4),
        L = (e) => {
            null != e && e.clientHeight > 30 && b(2);
        };
    function x(e, t) {
        return (0, r.jsx)(
            'span',
            {
                style: { color: _ },
                children: e
            },
            t
        );
    }
    let M = g
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(h, {
                      lineClamp: R || 2 === E ? 2 : 3,
                      children: (0, r.jsx)(l.Text, {
                          variant: 'text-sm/normal',
                          color: 'text-default',
                          children: null == a ? void 0 : a.description
                      })
                  }),
                  p &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(l.LZC, { size: 4 }), (0, r.jsx)(A, { onClick: m })]
                      })
              ]
          })
        : (0, r.jsx)(l.Text, {
              variant: 'text-sm/normal',
              color: 'text-default',
              children: w ? D : T.intl.string(T.t['NY/FIS'])
          });
    return (0, r.jsxs)('div', {
        className: S.container,
        children: [
            (0, r.jsxs)('div', {
                className: S.infoContainer,
                children: [
                    (0, r.jsx)('div', {
                        children: (0, r.jsx)(f.Z, {
                            guild: o,
                            size: f.Z.Sizes.LARGER,
                            iconSrc: null == o.icon || w ? (0, u.b)('server_products/storefront/default-guild-icon.jpg') : void 0
                        })
                    }),
                    (0, r.jsx)(l.LZC, {
                        size: 16,
                        horizontal: !0
                    }),
                    (0, r.jsxs)('div', {
                        children: [
                            (0, r.jsx)('div', {
                                ref: L,
                                children: (0, r.jsx)(l.X6q, {
                                    variant: 'heading-xl/semibold',
                                    color: 'header-primary',
                                    lineClamp: 2,
                                    children: w ? T.intl.string(T.t.rtgp7u) : T.intl.formatToPlainString(T.t.NZeik5, { guildName: o.name })
                                })
                            }),
                            (0, r.jsx)(l.LZC, { size: 8 }),
                            (0, r.jsx)(l.Text, {
                                variant: 'text-md/normal',
                                color: 'text-default',
                                children: T.intl.format(T.t['7JwrlJ'], {
                                    username: d,
                                    usernameHook: x
                                })
                            }),
                            (0, r.jsx)(l.LZC, { size: 9 }),
                            M
                        ]
                    })
                ]
            }),
            (0, r.jsx)(C, {
                coverImageAsset: null == a ? void 0 : a.cover_image_asset,
                isPreview: w
            })
        ]
    });
}
