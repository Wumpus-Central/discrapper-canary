i.d(t, { Dt: () => a, Fg: () => _, HA: () => o, Qz: () => E, nQ: () => f, p4: () => c, ry: () => p });
var n = i(95561),
    r = i(174459),
    s = i(194004),
    l = i(652215),
    u = i(698279),
    d = i(202541);
function c(e) {
    let { containerWidth: t, favoriteStickers: i, frequentlyUsedStickers: r, guildStickers: d, stickersTotal: c } = e;
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
}
function a(e) {
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
}
function _() {
    r.default.track(l.HAw.SEARCH_STARTED, { search_type: l.I4_.STICKER });
}
function o(e, t, i) {
    n.Ay.trackWithMetadata(l.HAw.SEARCH_RESULT_VIEWED, {
        search_type: l.I4_.STICKER,
        total_results: t,
        query: e,
        is_suggestion: i,
    });
}
function f(e, t, i) {
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
}
function p(e) {
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
}
function E(e) {
    null != e &&
        "" !== e &&
        n.Ay.trackWithMetadata(l.HAw.SEARCH_RESULT_EMPTY, {
            query: e,
            search_type: l.I4_.STICKER,
            source_object: "Sticker Picker",
        });
}
