n.d(t, {
    Sc: () => E,
    UP: () => b,
    XE: () => g,
    Zx: () => h,
    _s: () => m,
}),
    n(388685);
var r = n(570140),
    i = n(339085),
    a = n(592125),
    o = n(19780),
    s = n(944486),
    l = n(938475),
    c = n(626135),
    u = n(106301),
    d = n(981631);
function f(e, t, n) {
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
function _(e) {
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
                f(e, t, n[t]);
            });
    }
    return e;
}
function p() {
    var e;
    let t = s.Z.getVoiceChannelId(),
        n = o.Z.getMediaSessionId();
    return null == t
        ? {
              channel_id: void 0,
              guild_id: void 0,
              media_session_id: n,
              call_num_participants: 0,
          }
        : {
              channel_id: t,
              guild_id: null == (e = a.Z.getChannel(t)) ? void 0 : e.guild_id,
              media_session_id: n,
              call_num_participants: l.ZP.countVoiceStatesForChannel(t),
          };
}
function h(e, t) {
    var n;
    let i = null == (n = a.Z.getChannel(s.Z.getVoiceChannelId())) ? void 0 : n.guild_id;
    if (null == e || null == i) return void E(t);
    r.Z.dispatch({
        type: "UPDATE_HANG_STATUS",
        status: e,
        guildId: i,
        saveAsDefault: t,
    }),
        c.default.track(d.rMx.SET_HANG_STATUS, _({ status_type: e }, p()));
}
function m(e, t, n) {
    if ("" === e || null == t) return void E(n);
    r.Z.dispatch({
        type: "UPDATE_HANG_STATUS_CUSTOM",
        emoji: t,
        status: e,
        saveAsDefault: n,
    }),
        c.default.track(d.rMx.SET_HANG_STATUS, _({ status_type: e }, p()));
}
function g(e, t) {
    if (null == e) return void E(t);
    r.Z.dispatch({
        type: "UPDATE_HANG_STATUS_GAME_ACTIVITY",
        applicationId: e,
        saveAsDefault: t,
    }),
        c.default.track(d.rMx.SET_HANG_STATUS, _({ status_type: "game_activity" }, p()));
}
function E(e) {
    r.Z.dispatch({
        type: "CLEAR_HANG_STATUS",
        saveAsDefault: e,
    }),
        c.default.track(d.rMx.CLEAR_HANG_STATUS, _({}, p()));
}
function b() {
    let e = [u.Z.getCustomHangStatus(), ...u.Z.getRecentStatuses()].filter((e) => {
        var t;
        return (
            null != e &&
            "string" != typeof e &&
            null != e.emoji &&
            (null == (t = e.emoji) ? void 0 : t.id) != null &&
            null == i.ZP.getCustomEmojiById(e.emoji.id)
        );
    });
    e.length > 0 &&
        r.Z.dispatch({
            type: "DELETE_INVALID_HANG_STATUSES",
            statuses: e,
        });
}
