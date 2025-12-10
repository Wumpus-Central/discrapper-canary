n.d(t, {
    C: () => P,
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
    p = n(353254),
    _ = n(695346),
    m = n(271383),
    h = n(594174),
    g = n(671533),
    E = n(51144),
    b = n(506071),
    y = n(696014),
    O = n(847033),
    v = n(544978),
    S = n(893182),
    I = n(388032),
    T = n(793701);
function C(e) {
    let { onClick: t } = e;
    return (0, r.jsxs)(l.P3F, {
        onClick: t,
        className: T.showMoreButton,
        children: [
            (0, r.jsx)(l.Text, {
                variant: "text-sm/medium",
                color: "header-primary",
                children: I.intl.string(I.t.J4cw1q),
            }),
            (0, r.jsx)(l.LZC, {
                size: 4,
                horizontal: !0,
            }),
            (0, r.jsx)(g.Z, {
                direction: g.Z.Directions.RIGHT,
                className: T.showMoreArrow,
            }),
        ],
    });
}
function A(e) {
    return (0, s.cj)([m.ZP, h.default], () => {
        var t, n;
        let r = h.default.getCurrentUser();
        o()(null != r, "user cannot be null");
        let i = m.ZP.getMember(e, r.id);
        return {
            nickname: null != (t = null == i ? void 0 : i.nick) ? t : E.ZP.getName(r),
            nickcolor: null != (n = null == i ? void 0 : i.colorString) ? n : void 0,
        };
    }, [e]);
}
function N(e) {
    let { coverImageAsset: t, isPreview: n = !1 } = e,
        i = _.QK.useSetting(),
        a = (0, b.n)() && i,
        [o, s] = (0, p.Z)(t, a),
        l = a
            ? (0, r.jsx)(d.Z, {
                  autoPlay: !0,
                  loop: !0,
                  className: T.coverImage,
                  width: 655,
                  poster: (0, u.b)("server_products/storefront/default-header.png"),
                  src: (0, u.b)("server_products/storefront/default-header.mov"),
              })
            : (0, r.jsx)("img", {
                  src: (0, u.b)("server_products/storefront/default-header.png"),
                  alt: "",
                  className: T.coverImage,
              });
    return (0, r.jsx)("div", {
        ref: o,
        className: T.coverImageContainer,
        children:
            null == s || n
                ? l
                : (0, r.jsx)("img", {
                      src: s,
                      alt: "",
                      className: T.coverImage,
                  }),
    });
}
function P(e) {
    var t, n;
    let { guild: a, subscriptionsSettings: o } = e,
        s = a.id,
        { nickname: d, nickcolor: p } = A(s),
        { isTruncated: _, ExpandableTextContainer: m } = (0, y.s)(),
        h = () => (0, S.Z)({ guildId: s }),
        g = (null != (n = null == o || null == (t = o.description) ? void 0 : t.trim().length) ? n : 0) > 0,
        [E, b] = i.useState(1),
        P = (0, c.Z)("(max-width: 1439px)"),
        { selectedTab: R, isPhantomPreview: D } = (0, O.m)(),
        w = R === v.y.GUILD_PRODUCTS_PREVIEW ? I.intl.string(I.t["LvXy/H"]) : I.intl.string(I.t.XyqKh8),
        x = (e) => {
            null != e && e.clientHeight > 30 && b(2);
        };
    function L(e, t) {
        return (0, r.jsx)(
            "span",
            {
                style: { color: p },
                children: e,
            },
            t,
        );
    }
    let j = g
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsx)(m, {
                      lineClamp: P || 2 === E ? 2 : 3,
                      children: (0, r.jsx)(l.Text, {
                          variant: "text-sm/normal",
                          color: "text-default",
                          children: null == o ? void 0 : o.description,
                      }),
                  }),
                  _ &&
                      (0, r.jsxs)(r.Fragment, {
                          children: [(0, r.jsx)(l.LZC, { size: 4 }), (0, r.jsx)(C, { onClick: h })],
                      }),
              ],
          })
        : (0, r.jsx)(l.Text, {
              variant: "text-sm/normal",
              color: "text-default",
              children: D ? w : I.intl.string(I.t["NY/FIW"]),
          });
    return (0, r.jsxs)("div", {
        className: T.container,
        children: [
            (0, r.jsxs)("div", {
                className: T.infoContainer,
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
                                ref: x,
                                children: (0, r.jsx)(l.Heading, {
                                    variant: "heading-xl/semibold",
                                    color: "header-primary",
                                    lineClamp: 2,
                                    children: D
                                        ? I.intl.string(I.t.rtgp7q)
                                        : I.intl.formatToPlainString(I.t.NZeik9, { guildName: a.name }),
                                }),
                            }),
                            (0, r.jsx)(l.LZC, { size: 8 }),
                            (0, r.jsx)(l.Text, {
                                variant: "text-md/normal",
                                color: "text-default",
                                children: I.intl.format(I.t["7JwrlH"], {
                                    username: d,
                                    usernameHook: L,
                                }),
                            }),
                            (0, r.jsx)(l.LZC, { size: 9 }),
                            j,
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
