"use strict";
n.d(t, { Dt: () => u, Fg: () => d, HA: () => h, Qz: () => f, nQ: () => m, p4: () => c, ry: () => p });
var l = n(58149),
    i = n(954571),
    s = n(194004),
    a = n(652215),
    r = n(698279),
    o = n(788868);
let c = (e) => {
        let {
            containerWidth: t,
            favoriteStickers: n,
            frequentlyUsedStickers: i,
            guildStickers: o,
            stickersTotal: c,
        } = e;
        l.Ay.trackWithMetadata(a.HAw.EXPRESSION_PICKER_OPENED, {
            width: t,
            tab: r.kx.STICKER,
            badged: !1,
            num_expressions_favorites: n.length,
            num_animated_expressions_favorites: n.filter((e) => (0, s.Tw)(e.format_type)).length,
            num_custom_expressions_favorites: n.filter((e) => (0, s.zN)(e.type)).length,
            num_standard_expressions_favorites: n.filter((e) => !(0, s.zN)(e.type)).length,
            num_expressions_frecent: i.length,
            num_custom_expressions_frecent: i.filter((e) => (0, s.zN)(e.type)).length,
            num_animated_expressions_frecent: i.filter((e) => (0, s.Tw)(e.format_type)).length,
            num_standard_expressions_frecent: i.filter((e) => !(0, s.zN)(e.type)).length,
            num_current_guild_expressions: o.length,
            num_custom_expressions_total: c,
        });
    },
    u = (e) => {
        let t,
            { sticker: n, location: i } = e;
        n.type === s.NL.GUILD && (t = n.guild_id),
            l.Ay.trackWithMetadata(a.HAw.EXPRESSION_FAVORITED, {
                location: i,
                expression_type: r.kx.STICKER,
                expression_id: n.id,
                expression_name: n.name,
                expression_guild_id: t,
                is_animated: (0, s.Tw)(n.format_type),
                is_custom: (0, s.zN)(n.type),
            });
    },
    d = () => {
        i.default.track(a.HAw.SEARCH_STARTED, { search_type: a.I4_.STICKER });
    },
    h = (e, t, n) => {
        l.Ay.trackWithMetadata(a.HAw.SEARCH_RESULT_VIEWED, {
            search_type: a.I4_.STICKER,
            total_results: t,
            query: e,
            is_suggestion: n,
        });
    },
    m = (e, t, n) => {
        let i,
            { sticker: r } = e;
        r.type === s.NL.GUILD && (i = r.guild_id),
            l.Ay.trackWithMetadata(a.HAw.SEARCH_RESULT_SELECTED, {
                load_id: r.id,
                search_type: a.I4_.STICKER,
                source_object: "Sticker Picker",
                total_results: n,
                expression_guild_id: i,
                sticker_id: r.id,
                query: t,
            });
    },
    p = (e) => {
        let t,
            { sticker: n, category: i } = e;
        n.type === s.NL.GUILD && (t = n.guild_id),
            l.Ay.trackWithMetadata(a.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                type: o.e.EMOJI_PICKER_STICKER_CLICKED,
                expression_id: n.id,
                expression_name: n.name,
                expression_picker_section: i,
                expression_guild_id: t,
                is_animated: (0, s.Tw)(n.format_type),
                is_custom: (0, s.zN)(n.type),
            });
    },
    f = (e) => {
        null != e &&
            "" !== e &&
            l.Ay.trackWithMetadata(a.HAw.SEARCH_RESULT_EMPTY, {
                query: e,
                search_type: a.I4_.STICKER,
                source_object: "Sticker Picker",
            });
    };
