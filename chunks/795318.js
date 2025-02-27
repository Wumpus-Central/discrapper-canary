n.d(t, {
    o: () => c,
    u: () => l
});
var r = n(367907),
    i = n(592125),
    o = n(19780),
    a = n(354459),
    s = n(981631);
function l(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
        { targetUserId: r, tileType: i, entrypoint: o } = n;
    return (n) =>
        c({
            menuItemProps: n,
            menuName: e,
            location: t,
            entrypoint: null != o ? o : a.A5.CONTEXT_MENU,
            targetUserId: r,
            tileType: i
        });
}
function c(e) {
    var t;
    let {
            menuItemProps: { type: n },
            menuName: a,
            location: l,
            entrypoint: c,
            targetUserId: u,
            tileType: d
        } = e,
        f = o.Z.getChannelId(),
        _ = o.Z.getGuildId(),
        p = null === (t = i.Z.getChannel(f)) || void 0 === t ? void 0 : t.type;
    (0, r.yw)(s.rMx.CALL_SETTINGS_MENU_ITEM_INTERACTED, {
        location: l,
        menu_name: a,
        menu_item_type: n,
        entrypoint: c,
        target_user_id: u,
        voice_channel_guild_id: _,
        voice_channel_id: f,
        voice_channel_type: p,
        tile_type: d
    });
}
