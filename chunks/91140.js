n.d(t, {
    W: () => b,
    Z: () => O,
}),
    n(388685);
var r = n(54381),
    i = n(473749),
    a = n(636977),
    o = n(704215),
    s = n(481060),
    l = n(206074),
    c = n(728345),
    u = n(243778),
    d = n(633181),
    f = n(379357),
    p = n(442550),
    _ = n(297781),
    h = n(443487),
    m = n(388032),
    g = n(835406),
    E = n(925002);
let b = [_.OV, _.EE, _.Af, _.U9, _.wO, _.f, _.n8, _.v1, _.pQ],
    y = (e) => {
        let { entry: t, channel: n, selected: i, hovered: y, isFirstApplicationOccurrence: O } = e,
            { largeImage: v } = (0, f.rv)({
                entry: t,
                showCoverImage: !1,
            }),
            { data: S } = (0, c.IX)(t.extra.application_id),
            I = (0, l.q)(S) && O,
            T = I ? [o.z.CLOUD_PLAY_NEW_BADGE] : [],
            [C] = (0, u.US)(T);
        return (0, r.jsxs)(h.Zb, {
            selected: i,
            usesCardRows: !0,
            children: [
                (0, r.jsx)(d.Z, {
                    applicationId: t.extra.application_id,
                    questContent: a.j.MEMBERS_LIST_CARD,
                    children: (e) => {
                        var i;
                        return (0, r.jsxs)(h.lS, {
                            ref: e,
                            children: [
                                (0, r.jsxs)(h.e$, {
                                    children: [
                                        (0, r.jsx)(h.F9, {
                                            entry: t,
                                            channelId: n.id,
                                            guildId: n.guild_id,
                                        }),
                                        (0, r.jsx)(h.ll, { children: t.extra.game_name }),
                                        (0, r.jsx)(_.Gk, {
                                            location: _.Gt.CARD,
                                            children: b.map((e, n) =>
                                                (0, r.jsx)(
                                                    e,
                                                    {
                                                        entry: t,
                                                        hovered: y,
                                                    },
                                                    n,
                                                ),
                                            ),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(p.f, {
                                    alt: null != (i = null == v ? void 0 : v.text) ? i : null == v ? void 0 : v.alt,
                                    src: null == v ? void 0 : v.src,
                                    size: 48,
                                    className: E.thumbnail,
                                    showTooltip: (null == v ? void 0 : v.text) != null,
                                }),
                            ],
                        });
                    },
                }),
                I &&
                    (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(h.xx, {}),
                            (0, r.jsxs)(h.lS, {
                                className: g.cloudPlaySection,
                                children: [
                                    (0, r.jsxs)("div", {
                                        className: g.cloudPlaySectionTextContainer,
                                        children: [
                                            (0, r.jsx)(s.v3n, {
                                                color: s.TVs.colors.ICON_SUBTLE,
                                                size: "xxs",
                                            }),
                                            (0, r.jsx)(s.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-subtle",
                                                children: m.intl.string(m.t["5HiF2i"]),
                                            }),
                                        ],
                                    }),
                                    C === o.z.CLOUD_PLAY_NEW_BADGE &&
                                        (0, r.jsx)(s.IGR, {
                                            text: m.intl.string(m.t.y2b7CA),
                                            color: s.TVs.colors.BACKGROUND_BRAND.css,
                                        }),
                                ],
                            }),
                        ],
                    }),
            ],
        });
    },
    O = i.memo(y);
