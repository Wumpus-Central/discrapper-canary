n.d(t, {
    W: () => E,
    Z: () => y,
}),
    n(388685);
var r = n(951288),
    i = n(647438),
    a = n(704215),
    o = n(481060),
    s = n(206074),
    l = n(728345),
    c = n(377171),
    u = n(243778),
    d = n(379357),
    f = n(442550),
    _ = n(297781),
    p = n(443487),
    h = n(388032),
    m = n(800371),
    g = n(451419);
let E = [_.OV, _.EE, _.Af, _.U9, _.wO, _.f, _.n8, _.v1, _.pQ],
    b = (e) => {
        var t;
        let { entry: n, channel: i, selected: b, hovered: y } = e,
            { largeImage: O } = (0, d.rv)({
                entry: n,
                showCoverImage: !1,
            }),
            { data: v } = (0, l.IX)(n.extra.application_id),
            I = (0, s.q)(v, "MemberListGamingContent"),
            T = I ? [a.z.CLOUD_PLAY_NEW_BADGE] : [],
            [S] = (0, u.US)(T),
            A = I;
        return (0, r.jsxs)(p.Zb, {
            selected: b,
            usesCardRows: !0,
            isAutoHeight: A,
            children: [
                (0, r.jsxs)(p.lS, {
                    children: [
                        (0, r.jsxs)(p.e$, {
                            children: [
                                (0, r.jsx)(p.F9, {
                                    entry: n,
                                    channelId: i.id,
                                    guildId: i.guild_id,
                                }),
                                (0, r.jsx)(p.ll, { children: n.extra.game_name }),
                                (0, r.jsx)(_.Gk, {
                                    location: _.Gt.CARD,
                                    children: E.map((e, t) =>
                                        (0, r.jsx)(
                                            e,
                                            {
                                                entry: n,
                                                hovered: y,
                                            },
                                            t,
                                        ),
                                    ),
                                }),
                            ],
                        }),
                        (0, r.jsx)(f.f, {
                            alt: null != (t = null == O ? void 0 : O.text) ? t : null == O ? void 0 : O.alt,
                            src: null == O ? void 0 : O.src,
                            size: 48,
                            className: g.thumbnail,
                            showTooltip: (null == O ? void 0 : O.text) != null,
                        }),
                    ],
                }),
                I &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(p.xx, {}),
                            (0, r.jsxs)(p.lS, {
                                className: m.cloudPlaySection,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: m.cloudPlaySectionTextContainer,
                                        children: [
                                            (0, r.jsx)(o.v3n, {
                                                color: o.TVs.colors.ICON_SECONDARY,
                                                size: "xxs",
                                            }),
                                            (0, r.jsx)(o.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-secondary",
                                                children: h.intl.string(h.t["5HiF2t"]),
                                            }),
                                        ],
                                    }),
                                    S === a.z.CLOUD_PLAY_NEW_BADGE &&
                                        (0, r.jsx)(o.IGR, {
                                            text: h.intl.string(h.t.y2b7CA),
                                            color: c.Z.BG_BRAND,
                                        }),
                                ],
                            }),
                        ],
                    }),
            ],
        });
    },
    y = i.memo(b);
