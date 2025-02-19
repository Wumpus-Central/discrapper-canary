t.d(n, {
    BG: () => E,
    aY: () => f,
    dW: () => g,
    gm: () => _,
    h1: () => h,
    jQ: () => A,
    sE: () => v
});
var i,
    l,
    r = t(192379),
    u = t(100527),
    a = t(367907),
    o = t(314897),
    d = t(626135),
    c = t(981631);
function s(e, n, t) {
    var i;
    let l = (function (e) {
        for (var n = 1; n < arguments.length; n++) {
            var t = null != arguments[n] ? arguments[n] : {},
                i = Object.keys(t);
            'function' == typeof Object.getOwnPropertySymbols &&
                (i = i.concat(
                    Object.getOwnPropertySymbols(t).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })
                )),
                i.forEach(function (n) {
                    var i;
                    (i = t[n]),
                        n in e
                            ? Object.defineProperty(e, n, {
                                  value: i,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[n] = i);
                });
        }
        return e;
    })({}, n, (0, a.hH)(null !== (i = n.guild_id) && void 0 !== i ? i : t));
    d.default.track(e, l);
}
function _(e) {
    return r.useCallback(
        (n) => {
            !(function (e) {
                let n = {
                    guild_id: e,
                    location: u.Z.MEMBER_SAFETY_PAGE
                };
                s(c.rMx.MOD_DASH_SEARCH_MEMBERS, n);
            })(e);
        },
        [e]
    );
}
function E(e) {
    return r.useCallback(
        (n) => {
            !(function (e, n) {
                let t = {
                    selected_role_count: n.size,
                    guild_id: e,
                    location: u.Z.MEMBER_SAFETY_PAGE
                };
                s(c.rMx.MOD_DASH_FILTER_ROLES, t);
            })(e, n);
        },
        [e]
    );
}
var f = (((i = {}).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'), (i.COMMUNICATION_DISABLED = 'communication_disabled'), (i.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'), (i.USERNAME_QUARANTINED = 'username_quarantined'), i);
function g(e) {
    return r.useCallback(
        (n) => {
            !(function (e, n) {
                let t = {
                    flag_type: n,
                    guild_id: e,
                    location: u.Z.MEMBER_SAFETY_PAGE
                };
                s(c.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(e, n);
        },
        [e]
    );
}
var A = (((l = {}).BAN = 'ban'), (l.KICK = 'kick'), (l.MUTE = 'mute'), (l.TIMEOUT = 'timeout'), (l.ADD_ROLE = 'add_role'), (l.REMOVE_ROLE = 'remove_role'), (l.COPY_ID = 'copy_id'), (l.CHANGE_NICKNAME = 'change_nickname'), l);
function v(e, n) {
    let { location: t, targetUserId: i, targets: l, locations: u } = n;
    return r.useCallback(
        (n) => {
            let r = {
                action_type: n,
                mod_user_id: o.default.getId(),
                guild_id: e,
                location: t,
                locations: u,
                target_user_id: null != i ? i : void 0,
                targets: null != l ? l : void 0
            };
            s(c.rMx.MODERATION_ACTION, r);
        },
        [e, t, i, l, u]
    );
}
function h(e, n) {
    s(c.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: e,
        location: n
    });
}
