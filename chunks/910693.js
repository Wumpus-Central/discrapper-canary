n.d(t, {
    BG: () => d,
    aY: () => A,
    dW: () => T,
    gm: () => _,
    h1: () => N,
    jQ: () => I,
    sE: () => O
});
var r,
    l,
    s = n(73800),
    i = n(100527),
    a = n(367907),
    o = n(314897),
    E = n(626135),
    u = n(981631);
function c(e, t, n) {
    var r;
    let l = (function (e) {
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
                    var r;
                    (r = n[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: r,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[t] = r);
                });
        }
        return e;
    })({}, t, (0, a.hH)(null != (r = t.guild_id) ? r : n));
    E.default.track(e, l);
}
function _(e) {
    return s.useCallback(
        (t) => {
            let n = {
                guild_id: e,
                location: i.Z.MEMBER_SAFETY_PAGE
            };
            c(u.rMx.MOD_DASH_SEARCH_MEMBERS, n);
        },
        [e]
    );
}
function d(e) {
    return s.useCallback(
        (t) => {
            let n = {
                selected_role_count: t.size,
                guild_id: e,
                location: i.Z.MEMBER_SAFETY_PAGE
            };
            c(u.rMx.MOD_DASH_FILTER_ROLES, n);
        },
        [e]
    );
}
var A = (((r = {}).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'), (r.COMMUNICATION_DISABLED = 'communication_disabled'), (r.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'), (r.USERNAME_QUARANTINED = 'username_quarantined'), r);
function T(e) {
    return s.useCallback(
        (t) => {
            let n = {
                flag_type: t,
                guild_id: e,
                location: i.Z.MEMBER_SAFETY_PAGE
            };
            c(u.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n);
        },
        [e]
    );
}
var I = (((l = {}).BAN = 'ban'), (l.KICK = 'kick'), (l.MUTE = 'mute'), (l.TIMEOUT = 'timeout'), (l.ADD_ROLE = 'add_role'), (l.REMOVE_ROLE = 'remove_role'), (l.COPY_ID = 'copy_id'), (l.CHANGE_NICKNAME = 'change_nickname'), l);
function O(e, t) {
    let { location: n, targetUserId: r, targets: l, locations: i } = t;
    return s.useCallback(
        (t) => {
            let s = {
                action_type: t,
                mod_user_id: o.default.getId(),
                guild_id: e,
                location: n,
                locations: i,
                target_user_id: null != r ? r : void 0,
                targets: null != l ? l : void 0
            };
            c(u.rMx.MODERATION_ACTION, s);
        },
        [e, n, r, l, i]
    );
}
function N(e, t) {
    c(u.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: e,
        location: t
    });
}
