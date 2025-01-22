r.d(n, {
    A_: function () {
        return b;
    },
    Ok: function () {
        return A;
    },
    U4: function () {
        return I;
    },
    Ye: function () {
        return g.Z;
    },
    ZJ: function () {
        return S;
    },
    q: function () {
        return T;
    }
});
var i = r(789020);
var a = r(913527),
    o = r.n(a),
    s = r(442837),
    l = r(367907),
    u = r(731429),
    c = r(306680),
    d = r(9156),
    f = r(626135),
    p = r(630388),
    h = r(621600),
    _ = r(709054),
    m = r(569471),
    g = r(814391),
    E = r(124368),
    v = r(981631);
r(388032);
let y = () => ({
    minutes: t['1Rcf/v'],
    hours: t['vgnx5+'],
    days: t['fNvE5+'],
    month: intl.string(t.P7Gyg4)
});
function b() {
    (0, l.yw)(v.rMx.THREAD_BROWSER_TAB_CHANGED);
}
function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'Modal';
    (0, l.yw)(v.rMx.OPEN_MODAL, {
        type: 'Thread Browser',
        location_section: e
    });
}
function T() {
    f.default.track(v.rMx.OPEN_POPOUT, { type: 'Active Threads Popout' });
}
function S(e, n) {
    var r, i;
    let a = (0, u.K)(e);
    if (null == a) return;
    let o = e.getGuildId(),
        s = e.parent_id,
        l = (0, h.I)(o, s),
        c = (e) => {
            if ((0, p.yE)(e, E.iN.ALL_MESSAGES)) return h.$R[v.bL.ALL_MESSAGES];
            if ((0, p.yE)(e, E.iN.ONLY_MENTIONS)) return h.$R[v.bL.ONLY_MENTIONS];
            if ((0, p.yE)(e, E.iN.NO_MESSAGES)) return h.$R[v.bL.NO_MESSAGES];
            return h.$R[v.bL.NULL];
        },
        _ = null !== (r = m.Z.flags(e.id)) && void 0 !== r ? r : 0,
        g = c(_),
        y = m.Z.isMuted(e.id),
        b = (0, h.sK)(m.Z.getMuteConfig(e.id)),
        { can_send_message: I, ...T } = a,
        S = {
            ...T,
            channel_id: e.id,
            guild_id: o,
            parent_id: s,
            channel_type: e.type,
            has_interacted_with_thread: (_ & E.iN.HAS_INTERACTED) != 0,
            parent_is_muted: d.ZP.isGuildOrCategoryOrChannelMuted(o, s),
            old_thread_notification_setting: g,
            new_thread_notification_setting: null != n.flags ? c(n.flags) : g,
            parent_notification_setting: l.channel_message_notification_settings,
            old_thread_is_muted: y,
            new_thread_is_muted: null !== (i = n.muted) && void 0 !== i ? i : y,
            old_thread_muted_until: b,
            new_thread_muted_until: null != n.mute_config ? (0, h.sK)(n.mute_config) : b
        };
    f.default.track(v.rMx.THREAD_NOTIFICATION_SETTINGS_UPDATED, S);
}
let A = (e) => {
    var n, r;
    let i = (0, s.e7)([c.ZP], () => c.ZP.lastMessageId(e.id)),
        a = null != i ? _.default.extractTimestamp(i) : null,
        l = null === (n = e.threadMetadata) || void 0 === n ? void 0 : n.createTimestamp,
        u = null != l ? o()(l).valueOf() : null;
    return null !== (r = null != a ? a : u) && void 0 !== r ? r : _.default.extractTimestamp(e.id);
};
