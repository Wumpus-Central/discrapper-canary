n.d(t, {
    o: () => u,
    u: () => c
});
var r = n(314897),
    i = n(592125),
    a = n(19780),
    o = n(626135),
    s = n(354459),
    l = n(981631);
function c(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetUserId: r, tileType: i, entrypoint: a } = n;
    return (n) =>
        u({
            menuItemProps: n,
            menuName: e,
            location: t,
            entrypoint: null != a ? a : s.A5.CONTEXT_MENU,
            targetUserId: r,
            tileType: i
        });
}
function u(e) {
    var t;
    let {
            menuItemProps: { type: n },
            menuName: s,
            location: c,
            entrypoint: u,
            targetUserId: d,
            tileType: f
        } = e,
        _ = a.Z.getChannelId(),
        p = a.Z.getGuildId(),
        h = null == (t = i.Z.getChannel(_)) ? void 0 : t.type,
        m = r.default.getId();
    o.default.track(l.rMx.CALL_MENU_ITEM_INTERACTED, {
        location: c,
        menu_name: s,
        menu_item_type: n,
        entrypoint: u,
        targets_self: null == d ? void 0 : d === m,
        guild_id: p,
        channel_id: _,
        channel_type: h,
        tile_type: f
    });
}
