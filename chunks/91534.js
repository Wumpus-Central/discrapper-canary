n.d(t, { A: () => R });
var i = n(627968),
    l = n(311907),
    s = n(534514),
    r = n(834730),
    a = n(825484),
    o = n(821609),
    d = n(331322),
    c = n(404778),
    u = n(793574),
    m = n(688810),
    g = n(509536),
    h = n(945086),
    x = n(212637),
    _ = n(864310),
    p = n(679382),
    A = n(577092),
    E = n(255438),
    f = n(473145),
    j = n(975571),
    N = n(555337),
    I = n(652215);
n(823894);
var C = n(985018),
    b = n(303069);
let v = { page: I.liQ.GUILD_SETTINGS, section: I.JJy.GUILD_SETTINGS_STICKERS, object: I.ZSU.BOOSTING_BANNER },
    S = (e) => {
        let { guild: t } = e,
            { analyticsLocations: n } = (0, m.Ay)(),
            l = (0, _.A)(t.id).available,
            d = I.M2T[I.TVA.TIER_1] - l;
        return (0, i.jsxs)("div", {
            className: b.Zj,
            children: [
                (0, i.jsx)(s.D, {
                    className: b.$P,
                    variant: "heading-xl/semibold",
                    children: C.intl.string(C.t.hzCkyg),
                }),
                (0, i.jsx)(r.E, { className: b.GR, variant: "text-md/normal", children: C.intl.string(C.t.jcesAE) }),
                (0, i.jsxs)(a.e, {
                    className: b.JO,
                    children: [
                        (0, i.jsx)(o.$, {
                            variant: "overlay-primary",
                            text: C.intl.string(C.t.Q5dbTi),
                            onClick: () =>
                                (0, x.A)({
                                    analyticsLocations: n,
                                    analyticsLocation: v,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: d,
                                }),
                        }),
                        (0, i.jsx)(o.$, {
                            variant: "overlay-primary",
                            text: C.intl.string(C.t.hvVgAZ),
                            onClick: () =>
                                (0, g.K4)({ guildId: t.id, location: { section: I.JJy.GUILD_SETTINGS_STICKERS } }),
                        }),
                    ],
                }),
            ],
        });
    },
    T = () =>
        (0, i.jsxs)(d.B, {
            gap: 8,
            children: [
                (0, i.jsx)(r.E, { variant: "text-md/medium", children: C.intl.string(C.t["9N2OWD"]) }),
                (0, i.jsx)(r.E, {
                    variant: "text-sm/normal",
                    children: C.intl.format(C.t.hxLviw, { fileSize: (0, E.up)(524288, { useKibibytes: !0 }) }),
                }),
                (0, i.jsx)(r.E, {
                    variant: "text-sm/normal",
                    children: C.intl.format(C.t.UBj0aX, { articleUrl: j.A.getArticleURL(I.MVz.STICKERS_UPLOAD) }),
                }),
            ],
        }),
    y = (e) => {
        let t,
            n,
            l,
            { guild: s, guildStickers: r } = e,
            a = s.premiumTier,
            o = (0, f.yA)(r, a),
            d = (0, f.ax)(a),
            c = (0, f.aG)(a),
            u = r.length;
        return null == d || a === I.TVA.TIER_3 || o > 0
            ? null
            : (u > c
                  ? ((t = C.intl.formatToPlainString(C.t.ZtAY1f, { level: d })),
                    (n = C.intl.formatToPlainString(C.t["13hOWm"], { level: d })),
                    (l = I.ZSU.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = C.intl.string(C.t.zT9SxY)),
                    (n = C.intl.formatToPlainString(C.t.YaW9wI, { level: d, numAdditional: (0, f.Cp)(d) })),
                    (l = I.ZSU.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, i.jsx)(h.A, {
                  header: t,
                  text: n,
                  guild: s,
                  analyticsLocation: {
                      page: I.liQ.GUILD_SETTINGS,
                      section: I.JJy.GUILD_SETTINGS_STICKERS,
                      object: l,
                      objectType: (0, f.k1)(d),
                  },
              }));
    },
    R = () => {
        let e = (0, l.bG)([N.A], () => N.A.getGuild()),
            t = (0, l.bG)([p.A], () => (null != e ? (p.A.getStickersByGuildId(e.id) ?? []) : []), [e]),
            { analyticsLocations: n } = (0, m.Ay)(u.A.STICKERS);
        if (null == e) return null;
        let r = e.premiumTier !== I.TVA.NONE || t.length > 0;
        return (0, i.jsx)(m.f5, {
            value: n,
            children: (0, i.jsxs)(d.B, {
                gap: 16,
                children: [
                    (0, i.jsx)(s.D, { variant: "heading-lg/semibold", children: C.intl.string(C.t.R5nQkS) }),
                    r
                        ? (0, i.jsxs)("div", {
                              children: [(0, i.jsx)(y, { guild: e, guildStickers: t }), (0, i.jsx)(T, {})],
                          })
                        : (0, i.jsx)(S, { guild: e }),
                    (0, i.jsx)(c.c, { className: b.yF }),
                    (0, i.jsx)(A.A, { guild: e }),
                ],
            }),
        });
    };
