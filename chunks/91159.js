n.d(t, {
    A_: () => I,
    Ok: () => C,
    U4: () => T,
    Ye: () => h.Z,
    ZJ: () => A,
    q: () => N
}),
    n(789020);
var r = n(913527),
    i = n.n(r),
    o = n(442837),
    a = n(367907),
    s = n(731429),
    l = n(306680),
    c = n(9156),
    u = n(626135),
    d = n(630388),
    f = n(621600),
    p = n(709054),
    _ = n(569471),
    h = n(814391),
    m = n(124368),
    g = n(981631);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function v(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function b(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function O(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(388032);
function I() {
    (0, a.yw)(g.rMx.THREAD_BROWSER_TAB_CHANGED);
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'Modal';
    (0, a.yw)(g.rMx.OPEN_MODAL, {
        type: 'Thread Browser',
        location_section: e
    });
}
function N() {
    u.default.track(g.rMx.OPEN_POPOUT, { type: 'Active Threads Popout' });
}
function A(e, t) {
    var n, r;
    let i = (0, s.K)(e);
    if (null == i) return;
    let o = e.getGuildId(),
        a = e.parent_id,
        l = (0, f.I)(o, a),
        p = (e) => ((0, d.yE)(e, m.iN.ALL_MESSAGES) ? f.$R[g.bL.ALL_MESSAGES] : (0, d.yE)(e, m.iN.ONLY_MENTIONS) ? f.$R[g.bL.ONLY_MENTIONS] : (0, d.yE)(e, m.iN.NO_MESSAGES) ? f.$R[g.bL.NO_MESSAGES] : f.$R[g.bL.NULL]),
        h = null !== (n = _.Z.flags(e.id)) && void 0 !== n ? n : 0,
        E = p(h),
        b = _.Z.isMuted(e.id),
        S = (0, f.sK)(_.Z.getMuteConfig(e.id)),
        { can_send_message: I } = i,
        T = y(v({}, O(i, ['can_send_message'])), {
            channel_id: e.id,
            guild_id: o,
            parent_id: a,
            channel_type: e.type,
            has_interacted_with_thread: (h & m.iN.HAS_INTERACTED) != 0,
            parent_is_muted: c.ZP.isGuildOrCategoryOrChannelMuted(o, a),
            old_thread_notification_setting: E,
            new_thread_notification_setting: null != t.flags ? p(t.flags) : E,
            parent_notification_setting: l.channel_message_notification_settings,
            old_thread_is_muted: b,
            new_thread_is_muted: null !== (r = t.muted) && void 0 !== r ? r : b,
            old_thread_muted_until: S,
            new_thread_muted_until: null != t.mute_config ? (0, f.sK)(t.mute_config) : S
        });
    u.default.track(g.rMx.THREAD_NOTIFICATION_SETTINGS_UPDATED, T);
}
let C = (e) => {
    var t, n;
    let r = (0, o.e7)([l.ZP], () => l.ZP.lastMessageId(e.id)),
        a = null != r ? p.default.extractTimestamp(r) : null,
        s = null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.createTimestamp,
        c = null != s ? i()(s).valueOf() : null;
    return null !== (n = null != a ? a : c) && void 0 !== n ? n : p.default.extractTimestamp(e.id);
};
