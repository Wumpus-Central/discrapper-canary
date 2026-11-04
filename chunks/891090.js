var n = i(149468),
    r = i(129230),
    s = i(832628),
    l = i(652215),
    u = i(698279),
    d = i(682901);
i.d(
    t,
    {},
    {
        Dt: function (e) {
            let t,
                { sticker: i, location: r } = e;
            (i.type === s.NL.GUILD && (t = i.guild_id),
                n.Ay.trackWithMetadata(l.HAw.EXPRESSION_FAVORITED, {
                    location: r,
                    expression_type: u.kx.STICKER,
                    expression_id: i.id,
                    expression_name: i.name,
                    expression_guild_id: t,
                    is_animated: (0, s.Tw)(i.format_type),
                    is_custom: (0, s.zN)(i.type),
                }));
        },
        Fg: function () {
            r.default.track(l.HAw.SEARCH_STARTED, { search_type: l.I4_.STICKER });
        },
        HA: function (e, t, i) {
            n.Ay.trackWithMetadata(l.HAw.SEARCH_RESULT_VIEWED, {
                search_type: l.I4_.STICKER,
                total_results: t,
                query: e,
                is_suggestion: i,
            });
        },
        Qz: function (e) {
            null != e &&
                "" !== e &&
                n.Ay.trackWithMetadata(l.HAw.SEARCH_RESULT_EMPTY, {
                    query: e,
                    search_type: l.I4_.STICKER,
                    source_object: "Sticker Picker",
                });
        },
        nQ: function (e, t, i) {
            let r,
                { sticker: u } = e;
            (u.type === s.NL.GUILD && (r = u.guild_id),
                n.Ay.trackWithMetadata(l.HAw.SEARCH_RESULT_SELECTED, {
                    load_id: u.id,
                    search_type: l.I4_.STICKER,
                    source_object: "Sticker Picker",
                    total_results: i,
                    expression_guild_id: r,
                    sticker_id: u.id,
                    query: t,
                }));
        },
        p4: function (e) {
            let {
                containerWidth: t,
                favoriteStickers: i,
                frequentlyUsedStickers: r,
                guildStickers: d,
                stickersTotal: c,
            } = e;
            n.Ay.trackWithMetadata(l.HAw.EXPRESSION_PICKER_OPENED, {
                width: t,
                tab: u.kx.STICKER,
                badged: !1,
                num_expressions_favorites: i.length,
                num_animated_expressions_favorites: i.filter((e) => (0, s.Tw)(e.format_type)).length,
                num_custom_expressions_favorites: i.filter((e) => (0, s.zN)(e.type)).length,
                num_standard_expressions_favorites: i.filter((e) => !(0, s.zN)(e.type)).length,
                num_expressions_frecent: r.length,
                num_custom_expressions_frecent: r.filter((e) => (0, s.zN)(e.type)).length,
                num_animated_expressions_frecent: r.filter((e) => (0, s.Tw)(e.format_type)).length,
                num_standard_expressions_frecent: r.filter((e) => !(0, s.zN)(e.type)).length,
                num_current_guild_expressions: d.length,
                num_custom_expressions_total: c,
            });
        },
        ry: function (e) {
            let t,
                { sticker: i, category: r } = e;
            (i.type === s.NL.GUILD && (t = i.guild_id),
                n.Ay.trackWithMetadata(l.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                    type: d.e.EMOJI_PICKER_STICKER_CLICKED,
                    expression_id: i.id,
                    expression_name: i.name,
                    expression_picker_section: r,
                    expression_guild_id: t,
                    is_animated: (0, s.Tw)(i.format_type),
                    is_custom: (0, s.zN)(i.type),
                }));
        },
    },
);
