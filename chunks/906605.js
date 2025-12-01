n.d(t, {
    Sc: () => b,
    UP: () => y,
    XE: () => E,
    YU: () => v,
    Zx: () => h,
    _s: () => g,
    tg: () => O,
}),
    n(388685);
var r = n(570140),
    i = n(339085),
    a = n(592125),
    o = n(944486),
    s = n(626135),
    l = n(106301),
    c = n(699263),
    u = n(54332),
    d = n(505905),
    f = n(981631);
function p(e, t, n) {
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
                p(e, t, n[t]);
            });
    }
    return e;
}
function m() {
    var e;
    return (0, c.Z)(null != (e = o.Z.getVoiceChannelId()) ? e : void 0);
}
function h(e, t) {
    var n;
    let i = null == (n = a.Z.getChannel(o.Z.getVoiceChannelId())) ? void 0 : n.guild_id;
    if (null == e || null == i) return void b(!1, t);
    r.Z.dispatch({
        type: "UPDATE_HANG_STATUS",
        status: e,
        guildId: i,
        saveAsDefault: t,
    }),
        s.default.track(
            f.rMx.SET_HANG_STATUS,
            _(
                {
                    status_type: e,
                    manual_update: !!t,
                },
                m(),
            ),
        );
}
function g(e, t, n) {
    if ("" === e || null == t) return void b(!1, n);
    r.Z.dispatch({
        type: "UPDATE_HANG_STATUS_CUSTOM",
        emoji: t,
        status: e,
        saveAsDefault: n,
    }),
        s.default.track(
            f.rMx.SET_HANG_STATUS,
            _(
                {
                    status_type: d.tN.CUSTOM,
                    custom_status_text: e,
                    custom_status_emoji_id: t.id,
                    custom_status_emoji_name: t.name,
                    manual_update: !!n,
                },
                m(),
            ),
        );
}
function E(e, t) {
    if (null == e) return void b(!1, t);
    r.Z.dispatch({
        type: "UPDATE_HANG_STATUS_GAME_ACTIVITY",
        applicationId: e,
        saveAsDefault: t,
    }),
        s.default.track(
            f.rMx.SET_HANG_STATUS,
            _(
                {
                    status_type: "game_activity",
                    manual_update: !!t,
                },
                m(),
            ),
        );
}
function b(e, t) {
    r.Z.dispatch({
        type: "CLEAR_HANG_STATUS",
        saveAsDefault: t,
    }),
        s.default.track(f.rMx.CLEAR_HANG_STATUS, _({ manual_update: !!e }, m()));
}
function y() {
    let e = [l.Z.getCustomHangStatus(), ...l.Z.getRecentStatuses(), ...l.Z.getFavoritedStatuses()].filter((e) => {
        var t;
        return (
            !(null == e || (0, u.Z)(e)) &&
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
function O(e, t) {
    r.Z.dispatch({
        type: "UPDATE_FAVORITE_HANG_STATUS",
        status: e,
        emoji: t,
    });
}
function v() {
    r.Z.dispatch({ type: "RESET_HANG_STATUS_STATE" });
}
