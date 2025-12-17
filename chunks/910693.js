n.d(t, {
    BG: () => _,
    aY: () => A,
    dW: () => T,
    gm: () => d,
    h1: () => f,
    jQ: () => I,
    sE: () => m,
});
var r,
    l,
    i = n(473749),
    a = n(100527),
    s = n(367907),
    o = n(314897),
    u = n(626135),
    c = n(981631);
function E(e, t, n) {
    var r;
    let l = (function (e) {
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
                    var r;
                    (r = n[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0,
                              })
                            : (e[t] = r);
                });
        }
        return e;
    })({}, t, (0, s.hH)(null != (r = t.guild_id) ? r : n));
    u.default.track(e, l);
}
function d(e) {
    return i.useCallback(
        (t) => {
            let n = {
                guild_id: e,
                location: a.Z.MEMBER_SAFETY_PAGE,
            };
            E(c.rMx.MOD_DASH_SEARCH_MEMBERS, n);
        },
        [e],
    );
}
function _(e) {
    return i.useCallback(
        (t) => {
            let n = {
                selected_role_count: t.size,
                guild_id: e,
                location: a.Z.MEMBER_SAFETY_PAGE,
            };
            E(c.rMx.MOD_DASH_FILTER_ROLES, n);
        },
        [e],
    );
}
var A =
    (((r = {}).UNUSUAL_DM_ACTIVITY = "unusual_dm_activity"),
    (r.COMMUNICATION_DISABLED = "communication_disabled"),
    (r.UNUSUAL_ACCOUNT_ACTIVITY = "unusual_account_activity"),
    (r.USERNAME_QUARANTINED = "username_quarantined"),
    r);
function T(e) {
    return i.useCallback(
        (t) => {
            let n = {
                flag_type: t,
                guild_id: e,
                location: a.Z.MEMBER_SAFETY_PAGE,
            };
            E(c.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n);
        },
        [e],
    );
}
var I =
    (((l = {}).BAN = "ban"),
    (l.KICK = "kick"),
    (l.MUTE = "mute"),
    (l.TIMEOUT = "timeout"),
    (l.ADD_ROLE = "add_role"),
    (l.REMOVE_ROLE = "remove_role"),
    (l.COPY_ID = "copy_id"),
    (l.CHANGE_NICKNAME = "change_nickname"),
    l);
function m(e, t) {
    let { location: n, targetUserId: r, targets: l, locations: a } = t;
    return i.useCallback(
        (t) => {
            let i = {
                action_type: t,
                mod_user_id: o.default.getId(),
                guild_id: e,
                location: n,
                locations: a,
                target_user_id: null != r ? r : void 0,
                targets: null != l ? l : void 0,
            };
            E(c.rMx.MODERATION_ACTION, i);
        },
        [e, n, r, l, a],
    );
}
function f(e, t) {
    E(c.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: e,
        location: t,
    });
}
