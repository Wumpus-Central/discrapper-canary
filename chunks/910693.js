n.d(t, {
    BG: () => g,
    aY: () => b,
    dW: () => O,
    gm: () => f,
    h1: () => y,
    jQ: () => E,
    sE: () => _
});
var l,
    r,
    i = n(73800),
    o = n(100527),
    a = n(367907),
    u = n(314897),
    c = n(626135),
    d = n(981631);
function s(e, t, n) {
    var l;
    let r = (function (e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
            'function' == typeof Object.getOwnPropertySymbols &&
                (l = l.concat(
                    Object.getOwnPropertySymbols(n).filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })
                )),
                l.forEach(function (t) {
                    var l;
                    (l = n[t]),
                        t in e
                            ? Object.defineProperty(e, t, {
                                  value: l,
                                  enumerable: !0,
                                  configurable: !0,
                                  writable: !0
                              })
                            : (e[t] = l);
                });
        }
        return e;
    })({}, t, (0, a.hH)(null != (l = t.guild_id) ? l : n));
    c.default.track(e, r);
}
function f(e) {
    return i.useCallback(
        (t) => {
            let n = {
                guild_id: e,
                location: o.Z.MEMBER_SAFETY_PAGE
            };
            s(d.rMx.MOD_DASH_SEARCH_MEMBERS, n);
        },
        [e]
    );
}
function g(e) {
    return i.useCallback(
        (t) => {
            let n = {
                selected_role_count: t.size,
                guild_id: e,
                location: o.Z.MEMBER_SAFETY_PAGE
            };
            s(d.rMx.MOD_DASH_FILTER_ROLES, n);
        },
        [e]
    );
}
var b = (((l = {}).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'), (l.COMMUNICATION_DISABLED = 'communication_disabled'), (l.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'), (l.USERNAME_QUARANTINED = 'username_quarantined'), l);
function O(e) {
    return i.useCallback(
        (t) => {
            let n = {
                flag_type: t,
                guild_id: e,
                location: o.Z.MEMBER_SAFETY_PAGE
            };
            s(d.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n);
        },
        [e]
    );
}
var E = (((r = {}).BAN = 'ban'), (r.KICK = 'kick'), (r.MUTE = 'mute'), (r.TIMEOUT = 'timeout'), (r.ADD_ROLE = 'add_role'), (r.REMOVE_ROLE = 'remove_role'), (r.COPY_ID = 'copy_id'), (r.CHANGE_NICKNAME = 'change_nickname'), r);
function _(e, t) {
    let { location: n, targetUserId: l, targets: r, locations: o } = t;
    return i.useCallback(
        (t) => {
            let i = {
                action_type: t,
                mod_user_id: u.default.getId(),
                guild_id: e,
                location: n,
                locations: o,
                target_user_id: null != l ? l : void 0,
                targets: null != r ? r : void 0
            };
            s(d.rMx.MODERATION_ACTION, i);
        },
        [e, n, l, r, o]
    );
}
function y(e, t) {
    s(d.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: e,
        location: t
    });
}
