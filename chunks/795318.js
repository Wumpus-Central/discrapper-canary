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
            menuItemProps: { rootItemId: n, id: a, type: l },
            menuName: c,
            location: u,
            entrypoint: d,
            targetUserId: f,
            tileType: p
        } = e,
        _ = o.Z.getChannelId(),
        h = o.Z.getGuildId(),
        m = null === (t = i.Z.getChannel(_)) || void 0 === t ? void 0 : t.type;
    (0, r.yw)(s.rMx.CALL_SETTINGS_MENU_ITEM_INTERACTED, {
        location: u,
        menu_name: c,
        menu_item_type: l,
        root_menu_item_id: n,
        menu_item_id: a,
        entrypoint: d,
        target_user_id: f,
        voice_channel_guild_id: h,
        voice_channel_id: _,
        voice_channel_type: m,
        tile_type: p
    });
}
