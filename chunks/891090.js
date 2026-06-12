"use strict";
n.d(t, { Dt: () => c, Fg: () => d, HA: () => _, Qz: () => p, nQ: () => h, p4: () => u, ry: () => f });
var i = n(95561),
    r = n(174459),
    s = n(194004),
    a = n(652215),
    o = n(698279),
    l = n(788868);
let u = (e) => {
        let {
            containerWidth: t,
            favoriteStickers: n,
            frequentlyUsedStickers: r,
            guildStickers: l,
            stickersTotal: u,
        } = e;
        i.Ay.trackWithMetadata(a.HAw.EXPRESSION_PICKER_OPENED, {
            width: t,
            tab: o.kx.STICKER,
            badged: !1,
            num_expressions_favorites: n.length,
            num_animated_expressions_favorites: n.filter((e) => (0, s.Tw)(e.format_type)).length,
            num_custom_expressions_favorites: n.filter((e) => (0, s.zN)(e.type)).length,
            num_standard_expressions_favorites: n.filter((e) => !(0, s.zN)(e.type)).length,
            num_expressions_frecent: r.length,
            num_custom_expressions_frecent: r.filter((e) => (0, s.zN)(e.type)).length,
            num_animated_expressions_frecent: r.filter((e) => (0, s.Tw)(e.format_type)).length,
            num_standard_expressions_frecent: r.filter((e) => !(0, s.zN)(e.type)).length,
            num_current_guild_expressions: l.length,
            num_custom_expressions_total: u,
        });
    },
    c = (e) => {
        let t,
            { sticker: n, location: r } = e;
        n.type === s.NL.GUILD && (t = n.guild_id),
            i.Ay.trackWithMetadata(a.HAw.EXPRESSION_FAVORITED, {
                location: r,
                expression_type: o.kx.STICKER,
                expression_id: n.id,
                expression_name: n.name,
                expression_guild_id: t,
                is_animated: (0, s.Tw)(n.format_type),
                is_custom: (0, s.zN)(n.type),
            });
    },
    d = () => {
        r.default.track(a.HAw.SEARCH_STARTED, { search_type: a.I4_.STICKER });
    },
    _ = (e, t, n) => {
        i.Ay.trackWithMetadata(a.HAw.SEARCH_RESULT_VIEWED, {
            search_type: a.I4_.STICKER,
            total_results: t,
            query: e,
            is_suggestion: n,
        });
    },
    h = (e, t, n) => {
        let r,
            { sticker: o } = e;
        o.type === s.NL.GUILD && (r = o.guild_id),
            i.Ay.trackWithMetadata(a.HAw.SEARCH_RESULT_SELECTED, {
                load_id: o.id,
                search_type: a.I4_.STICKER,
                source_object: "Sticker Picker",
                total_results: n,
                expression_guild_id: r,
                sticker_id: o.id,
                query: t,
            });
    },
    f = (e) => {
        let t,
            { sticker: n, category: r } = e;
        n.type === s.NL.GUILD && (t = n.guild_id),
            i.Ay.trackWithMetadata(a.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
                type: l.e.EMOJI_PICKER_STICKER_CLICKED,
                expression_id: n.id,
                expression_name: n.name,
                expression_picker_section: r,
                expression_guild_id: t,
                is_animated: (0, s.Tw)(n.format_type),
                is_custom: (0, s.zN)(n.type),
            });
    },
    p = (e) => {
        null != e &&
            "" !== e &&
            i.Ay.trackWithMetadata(a.HAw.SEARCH_RESULT_EMPTY, {
                query: e,
                search_type: a.I4_.STICKER,
                source_object: "Sticker Picker",
            });
    };
