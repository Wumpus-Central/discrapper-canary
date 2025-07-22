t.d(e, {
    BG: () => c,
    aY: () => h,
    dW: () => u,
    gm: () => f,
    h1: () => C,
    jQ: () => E,
    sE: () => d
});
var n,
    r,
    l = t(73800),
    i = t(100527),
    s = t(367907),
    a = t(314897),
    o = t(626135),
    g = t(981631);
function v(A, e, t) {
    var n;
    let r = (function (A) {
        for (var e = 1; e < arguments.length; e++) {
            var t = null != arguments[e] ? arguments[e] : {},
                n = Object.keys(t);
            ('function' == typeof Object.getOwnPropertySymbols &&
                (n = n.concat(
                    Object.getOwnPropertySymbols(t).filter(function (A) {
                        return Object.getOwnPropertyDescriptor(t, A).enumerable;
                    })
                )),
                n.forEach(function (e) {
                    var n;
                    ((n = t[e]),
                        e in A
                            ? Object.defineProperty(A, e, {
                                  value: n,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (A[e] = n));
                }));
        }
        return A;
    })({}, e, (0, s.hH)(null != (n = e.guild_id) ? n : t));
    o.default.track(A, r);
}
function f(A) {
    return l.useCallback(
        (e) => {
            let t = {
                guild_id: A,
                location: i.Z.MEMBER_SAFETY_PAGE
            };
            v(g.rMx.MOD_DASH_SEARCH_MEMBERS, t);
        },
        [A]
    );
}
function c(A) {
    return l.useCallback(
        (e) => {
            let t = {
                selected_role_count: e.size,
                guild_id: A,
                location: i.Z.MEMBER_SAFETY_PAGE
            };
            v(g.rMx.MOD_DASH_FILTER_ROLES, t);
        },
        [A]
    );
}
var h = (((n = {}).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'), (n.COMMUNICATION_DISABLED = 'communication_disabled'), (n.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'), (n.USERNAME_QUARANTINED = 'username_quarantined'), n);
function u(A) {
    return l.useCallback(
        (e) => {
            let t = {
                flag_type: e,
                guild_id: A,
                location: i.Z.MEMBER_SAFETY_PAGE
            };
            v(g.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
        },
        [A]
    );
}
var E = (((r = {}).BAN = 'ban'), (r.KICK = 'kick'), (r.MUTE = 'mute'), (r.TIMEOUT = 'timeout'), (r.ADD_ROLE = 'add_role'), (r.REMOVE_ROLE = 'remove_role'), (r.COPY_ID = 'copy_id'), (r.CHANGE_NICKNAME = 'change_nickname'), r);
function d(A, e) {
    let { location: t, targetUserId: n, targets: r, locations: i } = e;
    return l.useCallback(
        (e) => {
            let l = {
                action_type: e,
                mod_user_id: a.default.getId(),
                guild_id: A,
                location: t,
                locations: i,
                target_user_id: null != n ? n : void 0,
                targets: null != r ? r : void 0
            };
            v(g.rMx.MODERATION_ACTION, l);
        },
        [A, t, n, r, i]
    );
}
function C(A, e) {
    v(g.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: A,
        location: e
    });
}
