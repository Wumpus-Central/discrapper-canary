"use strict";
n.d(t, { A: () => T });
var i = n(627968),
    s = n(311907),
    l = n(397927),
    r = n(793574),
    a = n(688810),
    o = n(509536),
    d = n(945086),
    c = n(212637),
    u = n(864310),
    m = n(679382),
    g = n(577092),
    x = n(255438),
    h = n(473145),
    _ = n(975571),
    p = n(555337),
    A = n(652215);
n(823894);
var f = n(985018),
    j = n(519309);
let N = { page: A.liQ.GUILD_SETTINGS, section: A.JJy.GUILD_SETTINGS_STICKERS, object: A.ZSU.BOOSTING_BANNER },
    E = (e) => {
        let { guild: t } = e,
            { analyticsLocations: n } = (0, a.Ay)(),
            s = (0, u.A)(t.id).available,
            r = A.M2T[A.TVA.TIER_1] - s;
        return (0, i.jsxs)("div", {
            className: j.Zj,
            children: [
                (0, i.jsx)(l.Heading, {
                    className: j.$P,
                    variant: "heading-xl/semibold",
                    children: f.intl.string(f.t.hzCkyg),
                }),
                (0, i.jsx)(l.Text, { className: j.GR, variant: "text-md/normal", children: f.intl.string(f.t.jcesAE) }),
                (0, i.jsxs)(l.ButtonGroup, {
                    className: j.JO,
                    children: [
                        (0, i.jsx)(l.Button, {
                            variant: "overlay-primary",
                            text: f.intl.string(f.t.Q5dbTi),
                            onClick: () =>
                                (0, c.A)({
                                    analyticsLocations: n,
                                    analyticsLocation: N,
                                    guildId: t.id,
                                    totalNumberOfSlotsToAssign: r,
                                }),
                        }),
                        (0, i.jsx)(l.Button, {
                            variant: "overlay-primary",
                            text: f.intl.string(f.t.hvVgAZ),
                            onClick: () =>
                                (0, o.K4)({ guildId: t.id, location: { section: A.JJy.GUILD_SETTINGS_STICKERS } }),
                        }),
                    ],
                }),
            ],
        });
    },
    b = () =>
        (0, i.jsxs)(l.BJc, {
            gap: 8,
            children: [
                (0, i.jsx)(l.Text, { variant: "text-md/medium", children: f.intl.string(f.t["9N2OWD"]) }),
                (0, i.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: f.intl.format(f.t.hxLviw, { fileSize: (0, x.up)(524288, { useKibibytes: !0 }) }),
                }),
                (0, i.jsx)(l.Text, {
                    variant: "text-sm/normal",
                    children: f.intl.format(f.t.UBj0aX, { articleUrl: _.A.getArticleURL(A.MVz.STICKERS_UPLOAD) }),
                }),
            ],
        }),
    C = (e) => {
        let t,
            n,
            s,
            { guild: l, guildStickers: r } = e,
            a = l.premiumTier,
            o = (0, h.yA)(r, a),
            c = (0, h.ax)(a),
            u = (0, h.aG)(a),
            m = r.length;
        return null == c || a === A.TVA.TIER_3 || o > 0
            ? null
            : (m > u
                  ? ((t = f.intl.formatToPlainString(f.t.ZtAY1f, { level: c })),
                    (n = f.intl.formatToPlainString(f.t["13hOWm"], { level: c })),
                    (s = A.ZSU.BOOST_UPSELL_BANNER_LOST_LEVEL))
                  : ((t = f.intl.string(f.t.zT9SxY)),
                    (n = f.intl.formatToPlainString(f.t.YaW9wI, { level: c, numAdditional: (0, h.Cp)(c) })),
                    (s = A.ZSU.BOOST_UPSELL_BANNER_SLOTS_FULL)),
              (0, i.jsx)(d.A, {
                  header: t,
                  text: n,
                  guild: l,
                  analyticsLocation: {
                      page: A.liQ.GUILD_SETTINGS,
                      section: A.JJy.GUILD_SETTINGS_STICKERS,
                      object: s,
                      objectType: (0, h.k1)(c),
                  },
              }));
    },
    T = () => {
        let e = (0, s.bG)([p.A], () => p.A.getGuild()),
            t = (0, s.bG)([m.A], () => (null != e ? (m.A.getStickersByGuildId(e.id) ?? []) : []), [e]),
            { analyticsLocations: n } = (0, a.Ay)(r.A.STICKERS);
        if (null == e) return null;
        let o = e.premiumTier !== A.TVA.NONE || t.length > 0;
        return (0, i.jsx)(a.f5, {
            value: n,
            children: (0, i.jsxs)(l.BJc, {
                gap: 16,
                children: [
                    (0, i.jsx)(l.Heading, { variant: "heading-lg/semibold", children: f.intl.string(f.t.R5nQkS) }),
                    o
                        ? (0, i.jsxs)("div", {
                              children: [(0, i.jsx)(C, { guild: e, guildStickers: t }), (0, i.jsx)(b, {})],
                          })
                        : (0, i.jsx)(E, { guild: e }),
                    (0, i.jsx)(l.cGx, { className: j.yF }),
                    (0, i.jsx)(g.A, { guild: e }),
                ],
            }),
        });
    };
