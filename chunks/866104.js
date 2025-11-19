n.d(t, {
    C: () => R,
    Z: () => N,
}),
    n(388685),
    n(953529),
    n(781311);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
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
    S = n(918319);
function A(e) {
    let { onClick: t } = e;
    return (0, r.jsxs)(l.P3F, {
        onClick: t,
        className: S.showMoreButton,
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "header-primary",
                children: T.intl.string(T.t.J4cw1q),
            }),
            (0, r.jsx)(l.LZC, {
                size: 4,
                horizontal: !0,
            }),
            (0, r.jsx)(g.Z, {
                direction: g.Z.Directions.RIGHT,
                className: S.showMoreArrow,
            }),
        ],
    });
}
function C(e) {
    return (0, s.cj)([h.ZP, m.default], () => {
        var t, n;
        let r = m.default.getCurrentUser();
        o()(null != r, "user cannot be null");
        let i = h.ZP.getMember(e, r.id);
        return {
            nickname: null != (t = null == i ? void 0 : i.nick) ? t : E.ZP.getName(r),
            nickcolor: null != (n = null == i ? void 0 : i.colorString) ? n : void 0,
        };
    }, [e]);
}
function N(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        i = p.QK.useSetting(),
        a = (0, b.n)() && i,
        [o, s] = (0, _.Z)(t, a),
        l = a
            ? (0, r.jsx)(d.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: S.coverImage,
                  width: 655,
                  poster: (0, u.b)("server_products/storefront/default-header.png"),
                  src: (0, u.b)("server_products/storefront/default-header.mov"),
              })
            : (0, r.jsx)("img", {
                  src: (0, u.b)("server_products/storefront/default-header.png"),
                  alt: "",
                  className: S.coverImage,
              });
    return (0, r.jsx)("div", {
        ref: o,
        className: S.coverImageContainer,
        children:
            null == s || n
                ? l
                : (0, r.jsx)("img", {
                      src: s,
                      alt: "",
                      className: S.coverImage,
                  }),
    });
}
function R(e) {
    var t, n;
    let { guild: a, subscriptionsSettings: o } = e,
        s = a.id,
        { nickname: d, nickcolor: _ } = C(s),
        { isTruncated: p, ExpandableTextContainer: h } = (0, y.s)(),
        m = () => (0, I.Z)({ guildId: s }),
        g = (null != (n = null == o || null == (t = o.description) ? void 0 : t.trim().length) ? n : 0) > 0,
        [E, b] = i.useState(1),
        R = (0, c.Z)("(max-width: 1439px)"),
        { selectedTab: P, isPhantomPreview: D } = (0, O.m)(),
        w = P === v.y.GUILD_PRODUCTS_PREVIEW ? T.intl.string(T.t["LvXy/H"]) : T.intl.string(T.t.XyqKh8),
        L = (e) => {
            null != e && e.clientHeight > 30 && b(2);
        };
    function x(e, t) {
        return (0, r.jsx)(
            "span",
            {
                style: { color: _ },
                children: e,
            },
            t,
        );
    }
    let M = g
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(h, {
                      lineClamp: R || 2 === E ? 2 : 3,
                      children: (0, r.jsx)(l.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: null == o ? void 0 : o.description,
                      }),
                  }),
                  p &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(l.LZC, { size: 4 }), (0, r.jsx)(A, { onClick: m })],
                      }),
              ],
          })
        : (0, r.jsx)(l.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              children: D ? w : T.intl.string(T.t["NY/FIW"]),
          });
    return (0, r.jsxs)("div", {
        className: S.container,
        children: [
            (0, r.jsxs)("div", {
                className: S.infoContainer,
                children: [
                    (0, r.jsx)("div", {
                        children: (0, r.jsx)(f.Z, {
                            guild: a,
                            size: f.Z.Sizes.LARGER,
                            iconSrc:
                                null == a.icon || D
                                    ? (0, u.b)("server_products/storefront/default-guild-icon.jpg")
                                    : void 0,
                        }),
                    }),
                    (0, r.jsx)(l.LZC, {
                        size: 16,
                        horizontal: !0,
                    }),
                    (0, r.jsxs)("div", {
                        children: [
                            (0, r.jsx)("div", {
                                ref: L,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "heading-xl/semibold",
                                    color: "header-primary",
                                    lineClamp: 2,
                                    children: D
                                        ? T.intl.string(T.t.rtgp7q)
                                        : T.intl.formatToPlainString(T.t.NZeik9, { guildName: a.name }),
                                }),
                            }),
                            (0, r.jsx)(l.LZC, { size: 8 }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: T.intl.format(T.t["7JwrlH"], {
                                    username: d,
                                    usernameHook: x,
                                }),
                            }),
                            (0, r.jsx)(l.LZC, { size: 9 }),
                            M,
                        ],
                    }),
                ],
            }),
            (0, r.jsx)(N, {
                coverImageAsset: null == o ? void 0 : o.cover_image_asset,
                isPreview: D,
            }),
        ],
    });
}
