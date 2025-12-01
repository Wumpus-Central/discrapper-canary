n.d(t, {
    A_: () => I,
    Ok: () => N,
    U4: () => T,
    Ye: () => m.Z,
    ZJ: () => C,
    q: () => A,
}),
    n(997841);
var r = n(913527),
    i = n.n(r),
    a = n(95015),
    o = n(442837),
    s = n(367907),
    l = n(731429),
    c = n(306680),
    u = n(9156),
    d = n(626135),
    f = n(621600),
    p = n(709054),
    _ = n(569471),
    m = n(814391),
    h = n(124368),
    g = n(981631);
function E(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function b(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = S(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function S(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n(388032);
function I() {
    (0, s.yw)(g.rMx.THREAD_BROWSER_TAB_CHANGED);
}
function T() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Modal";
    (0, s.yw)(g.rMx.OPEN_MODAL, {
        type: "Thread Browser",
        location_section: e,
    });
}
function A() {
    d.default.track(g.rMx.OPEN_POPOUT, { type: "Active Threads Popout" });
}
function C(e, t) {
    var n, r;
    let i = (0, l.K)(e);
    if (null == i) return;
    let o = e.getGuildId(),
        s = e.parent_id,
        c = (0, f.I)(o, s),
        p = (e) =>
            (0, a.yE)(e, h.iN.ALL_MESSAGES)
                ? f.$R[g.bL.ALL_MESSAGES]
                : (0, a.yE)(e, h.iN.ONLY_MENTIONS)
                  ? f.$R[g.bL.ONLY_MENTIONS]
                  : (0, a.yE)(e, h.iN.NO_MESSAGES)
                    ? f.$R[g.bL.NO_MESSAGES]
                    : f.$R[g.bL.NULL],
        m = null != (n = _.Z.flags(e.id)) ? n : 0,
        E = p(m),
        y = _.Z.isMuted(e.id),
        S = (0, f.sK)(_.Z.getMuteConfig(e.id)),
        { can_send_message: I, parent_channel_type: T } = i,
        A = O(b({}, v(i, ["can_send_message", "parent_channel_type"])), {
            channel_id: e.id,
            guild_id: o,
            parent_id: s,
            channel_type: e.type,
            has_interacted_with_thread: (m & h.iN.HAS_INTERACTED) != 0,
            parent_is_muted: u.ZP.isGuildOrCategoryOrChannelMuted(o, s),
            old_thread_notification_setting: E,
            new_thread_notification_setting: null != t.flags ? p(t.flags) : E,
            parent_notification_setting: c.channel_message_notification_settings,
            old_thread_is_muted: y,
            new_thread_is_muted: null != (r = t.muted) ? r : y,
            old_thread_muted_until: S,
            new_thread_muted_until: null != t.mute_config ? (0, f.sK)(t.mute_config) : S,
        });
    d.default.track(g.rMx.THREAD_NOTIFICATION_SETTINGS_UPDATED, A);
}
let N = (e) => {
    var t, n;
    let r = (0, o.e7)([c.ZP], () => c.ZP.lastMessageId(e.id)),
        a = null != r ? p.default.extractTimestamp(r) : null,
        s = null == (t = e.threadMetadata) ? void 0 : t.createTimestamp,
        l = null != s ? i()(s).valueOf() : null;
    return null != (n = null != a ? a : l) ? n : p.default.extractTimestamp(e.id);
};
