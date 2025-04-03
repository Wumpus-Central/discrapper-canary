n.d(t, {
    BG: () => f,
    aY: () => b,
    dW: () => E,
    gm: () => _,
    h1: () => p,
    jQ: () => O,
    sE: () => g
});
var r,
    l,
    o = n(192379),
    i = n(100527),
    u = n(367907),
    c = n(314897),
    a = n(626135),
    d = n(981631);
function s(e, t, n) {
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
    })({}, t, (0, u.hH)(null != (r = t.guild_id) ? r : n));
    a.default.track(e, l);
}
function _(e) {
    return o.useCallback(
        (t) => {
            let n = {
                guild_id: e,
                location: i.Z.MEMBER_SAFETY_PAGE
            };
            s(d.rMx.MOD_DASH_SEARCH_MEMBERS, n);
        },
        [e]
    );
}
function f(e) {
    return o.useCallback(
        (t) => {
            let n = {
                selected_role_count: t.size,
                guild_id: e,
                location: i.Z.MEMBER_SAFETY_PAGE
            };
            s(d.rMx.MOD_DASH_FILTER_ROLES, n);
        },
        [e]
    );
}
var b = (((r = {}).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'), (r.COMMUNICATION_DISABLED = 'communication_disabled'), (r.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'), (r.USERNAME_QUARANTINED = 'username_quarantined'), r);
function E(e) {
    return o.useCallback(
        (t) => {
            let n = {
                flag_type: t,
                guild_id: e,
                location: i.Z.MEMBER_SAFETY_PAGE
            };
            s(d.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n);
        },
        [e]
    );
}
var O = (((l = {}).BAN = 'ban'), (l.KICK = 'kick'), (l.MUTE = 'mute'), (l.TIMEOUT = 'timeout'), (l.ADD_ROLE = 'add_role'), (l.REMOVE_ROLE = 'remove_role'), (l.COPY_ID = 'copy_id'), (l.CHANGE_NICKNAME = 'change_nickname'), l);
function g(e, t) {
    let { location: n, targetUserId: r, targets: l, locations: i } = t;
    return o.useCallback(
        (t) => {
            let o = {
                action_type: t,
                mod_user_id: c.default.getId(),
                guild_id: e,
                location: n,
                locations: i,
                target_user_id: null != r ? r : void 0,
                targets: null != l ? l : void 0
            };
            s(d.rMx.MODERATION_ACTION, o);
        },
        [e, n, r, l, i]
    );
}
function p(e, t) {
    s(d.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: e,
        location: t
    });
}
