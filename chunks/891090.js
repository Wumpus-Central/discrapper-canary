"use strict";
n.d(t, { Dt: () => c, Fg: () => d, HA: () => h, Qz: () => p, nQ: () => m, p4: () => u, ry: () => f });
var l = n(95561),
    i = n(174459),
    s = n(194004),
    r = n(652215),
    a = n(698279),
    o = n(202541);
function u(e) {
    let { containerWidth: t, favoriteStickers: n, frequentlyUsedStickers: i, guildStickers: o, stickersTotal: u } = e;
    l.Ay.trackWithMetadata(r.HAw.EXPRESSION_PICKER_OPENED, {
        width: t,
        tab: a.kx.STICKER,
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
        num_custom_expressions_total: u,
    });
}
function c(e) {
    let t,
        { sticker: n, location: i } = e;
    n.type === s.NL.GUILD && (t = n.guild_id),
        l.Ay.trackWithMetadata(r.HAw.EXPRESSION_FAVORITED, {
            location: i,
            expression_type: a.kx.STICKER,
            expression_id: n.id,
            expression_name: n.name,
            expression_guild_id: t,
            is_animated: (0, s.Tw)(n.format_type),
            is_custom: (0, s.zN)(n.type),
        });
}
function d() {
    i.default.track(r.HAw.SEARCH_STARTED, { search_type: r.I4_.STICKER });
}
function h(e, t, n) {
    l.Ay.trackWithMetadata(r.HAw.SEARCH_RESULT_VIEWED, {
        search_type: r.I4_.STICKER,
        total_results: t,
        query: e,
        is_suggestion: n,
    });
}
function m(e, t, n) {
    let i,
        { sticker: a } = e;
    a.type === s.NL.GUILD && (i = a.guild_id),
        l.Ay.trackWithMetadata(r.HAw.SEARCH_RESULT_SELECTED, {
            load_id: a.id,
            search_type: r.I4_.STICKER,
            source_object: "Sticker Picker",
            total_results: n,
            expression_guild_id: i,
            sticker_id: a.id,
            query: t,
        });
}
function f(e) {
    let t,
        { sticker: n, category: i } = e;
    n.type === s.NL.GUILD && (t = n.guild_id),
        l.Ay.trackWithMetadata(r.HAw.EXPRESSION_PICKER_EXPRESSION_SELECTED, {
            type: o.e.EMOJI_PICKER_STICKER_CLICKED,
            expression_id: n.id,
            expression_name: n.name,
            expression_picker_section: i,
            expression_guild_id: t,
            is_animated: (0, s.Tw)(n.format_type),
            is_custom: (0, s.zN)(n.type),
        });
}
function p(e) {
    null != e &&
        "" !== e &&
        l.Ay.trackWithMetadata(r.HAw.SEARCH_RESULT_EMPTY, {
            query: e,
            search_type: r.I4_.STICKER,
            source_object: "Sticker Picker",
        });
}
