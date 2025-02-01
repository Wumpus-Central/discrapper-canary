n.d(t, {
    A_: () => E,
    Ok: () => T,
    U4: () => v,
    Ye: () => h.Z,
    ZJ: () => I,
    q: () => y
}),
    n(789020);
var i = n(913527),
    r = n.n(i),
    a = n(442837),
    s = n(367907),
    o = n(731429),
    l = n(306680),
    u = n(9156),
    c = n(626135),
    d = n(630388),
    f = n(621600),
    _ = n(709054),
    p = n(569471),
    h = n(814391),
    m = n(124368),
    g = n(981631);
n(388032);
function E() {
    (0, s.yw)(g.rMx.THREAD_BROWSER_TAB_CHANGED);
}
function v() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'Modal';
    (0, s.yw)(g.rMx.OPEN_MODAL, {
        type: 'Thread Browser',
        location_section: e
    });
}
function y() {
    c.default.track(g.rMx.OPEN_POPOUT, { type: 'Active Threads Popout' });
}
function I(e, t) {
    var n, i;
    let r = (0, o.K)(e);
    if (null == r) return;
    let a = e.getGuildId(),
        s = e.parent_id,
        l = (0, f.I)(a, s),
        _ = (e) => ((0, d.yE)(e, m.iN.ALL_MESSAGES) ? f.$R[g.bL.ALL_MESSAGES] : (0, d.yE)(e, m.iN.ONLY_MENTIONS) ? f.$R[g.bL.ONLY_MENTIONS] : (0, d.yE)(e, m.iN.NO_MESSAGES) ? f.$R[g.bL.NO_MESSAGES] : f.$R[g.bL.NULL]),
        h = null !== (n = p.Z.flags(e.id)) && void 0 !== n ? n : 0,
        E = _(h),
        v = p.Z.isMuted(e.id),
        y = (0, f.sK)(p.Z.getMuteConfig(e.id)),
        { can_send_message: I, ...T } = r,
        b = {
            ...T,
            channel_id: e.id,
            guild_id: a,
            parent_id: s,
            channel_type: e.type,
            has_interacted_with_thread: (h & m.iN.HAS_INTERACTED) != 0,
            parent_is_muted: u.ZP.isGuildOrCategoryOrChannelMuted(a, s),
            old_thread_notification_setting: E,
            new_thread_notification_setting: null != t.flags ? _(t.flags) : E,
            parent_notification_setting: l.channel_message_notification_settings,
            old_thread_is_muted: v,
            new_thread_is_muted: null !== (i = t.muted) && void 0 !== i ? i : v,
            old_thread_muted_until: y,
            new_thread_muted_until: null != t.mute_config ? (0, f.sK)(t.mute_config) : y
        };
    c.default.track(g.rMx.THREAD_NOTIFICATION_SETTINGS_UPDATED, b);
}
let T = (e) => {
    var t, n;
    let i = (0, a.e7)([l.ZP], () => l.ZP.lastMessageId(e.id)),
        s = null != i ? _.default.extractTimestamp(i) : null,
        o = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
        u = null != o ? r()(o).valueOf() : null;
    return null !== (n = null != s ? s : u) && void 0 !== n ? n : _.default.extractTimestamp(e.id);
};
