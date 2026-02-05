"use strict";
n.d(t, { Dt: () => c, Fg: () => d, HA: () => _, Qz: () => h, nQ: () => f, p4: () => u, ry: () => p });
var r = n(58149),
    i = n(954571),
    a = n(842086),
    s = n(652215),
    o = n(698279),
    l = n(788868);
let u = (e) => {
        let {
            containerWidth: t,
            favoriteStickers: n,
            frequentlyUsedStickers: i,
            guildStickers: l,
            stickersTotal: u,
        } = e;
        r.Ay.trackWithMetadata(s.HAw.EXPRESSION_PICKER_OPENED, {
            width: t,
            tab: o.kx.STICKER,
            badged: !1,
            num_expressions_favorites: n.length,
            num_animated_expressions_favorites: n.filter((e) => (0, a.Tw)(e.format_type)).length,
            num_custom_expressions_favorites: n.filter((e) => (0, a.zN)(e.type)).length,
            num_standard_expressions_favorites: n.filter((e) => !(0, a.zN)(e.type)).length,
            num_expressions_frecent: i.length,
            num_custom_expressions_frecent: i.filter((e) => (0, a.zN)(e.type)).length,
            num_animated_expressions_frecent: i.filter((e) => (0, a.Tw)(e.format_type)).length,
            num_standard_expressions_frecent: i.filter((e) => !(0, a.zN)(e.type)).length,
            num_current_guild_expressions: l.length,
            num_custom_expressions_total: u,
        });
    },
    c = (e) => {
        let t,
            { sticker: n, location: i } = e;
        n.type === a.NL.GUILD && (t = n.guild_id),
            r.Ay.trackWithMetadata(s.HAw.EXPRESSION_FAVORITED, {
                location: i,
                expression_type: o.kx.STICKER,
                expression_id: n.id,
                expression_name: n.name,
                expression_guild_id: t,
                is_animated: (0, a.Tw)(n.format_type),
                is_custom: (0, a.zN)(n.type),
            });
    },
    d = () => {
        i.default.track(s.HAw.SEARCH_STARTED, { search_type: s.I4_.STICKER });
    },
    _ = (e, t, n) => {
        r.Ay.trackWithMetadata(s.HAw.SEARCH_RESULT_VIEWED, {
            search_type: s.I4_.STICKER,
            total_results: t,
            query: e,
            is_suggestion: n,
        });
    },
    f = (e, t, n) => {
        let i,
            { sticker: o } = e;
        o.type === a.NL.GUILD && (i = o.guild_id),
            r.Ay.trackWithMetadata(s.HAw.SEARCH_RESULT_SELECTED, {
                load_id: o.id,
                search_type: s.I4_.STICKER,
                source_object: "Sticker Picker",
                total_results: n,
                expression_guild_id: i,
                sticker_id: o.id,
                query: t,
            });
    },
    p = (e) => {
        let t,
            { sticker: n, category: i } = e;
        n.type === a.NL.GUILD && (t = n.guild_id),
            r.Ay.trackWithMetadata(s.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                type: l.e.EMOJI_PICKER_STICKER_CLICKED,
                expression_id: n.id,
                expression_name: n.name,
                expression_picker_section: i,
                expression_guild_id: t,
                is_animated: (0, a.Tw)(n.format_type),
                is_custom: (0, a.zN)(n.type),
            });
    },
    h = (e) => {
        null != e &&
            "" !== e &&
            r.Ay.trackWithMetadata(s.HAw.SEARCH_RESULT_EMPTY, {
                query: e,
                search_type: s.I4_.STICKER,
                source_object: "Sticker Picker",
            });
    };
