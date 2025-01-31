n.d(t, {
    BG: () => d,
    aY: () => A,
    dW: () => T,
    gm: () => _,
    h1: () => g,
    jQ: () => I,
    sE: () => N
});
var r,
    l,
    i = n(192379),
    a = n(100527),
    s = n(367907),
    o = n(314897),
    E = n(626135),
    u = n(981631);
function c(e, t, n) {
    var r;
    let l = {
        ...t,
        ...(0, s.hH)(null !== (r = t.guild_id) && void 0 !== r ? r : n)
    };
    E.default.track(e, l);
}
function _(e) {
    return i.useCallback(
        (t) => {
            !(function (e) {
                let t = {
                    guild_id: e,
                    location: a.Z.MEMBER_SAFETY_PAGE
                };
                c(u.rMx.MOD_DASH_SEARCH_MEMBERS, t);
            })(e);
        },
        [e]
    );
}
function d(e) {
    return i.useCallback(
        (t) => {
            !(function (e, t) {
                let n = {
                    selected_role_count: t.size,
                    guild_id: e,
                    location: a.Z.MEMBER_SAFETY_PAGE
                };
                c(u.rMx.MOD_DASH_FILTER_ROLES, n);
            })(e, t);
        },
        [e]
    );
}
var A = (((r = {}).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'), (r.COMMUNICATION_DISABLED = 'communication_disabled'), (r.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'), (r.USERNAME_QUARANTINED = 'username_quarantined'), r);
function T(e) {
    return i.useCallback(
        (t) => {
            !(function (e, t) {
                let n = {
                    flag_type: t,
                    guild_id: e,
                    location: a.Z.MEMBER_SAFETY_PAGE
                };
                c(u.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n);
            })(e, t);
        },
        [e]
    );
}
var I = (((l = {}).BAN = 'ban'), (l.KICK = 'kick'), (l.MUTE = 'mute'), (l.TIMEOUT = 'timeout'), (l.ADD_ROLE = 'add_role'), (l.REMOVE_ROLE = 'remove_role'), (l.COPY_ID = 'copy_id'), (l.CHANGE_NICKNAME = 'change_nickname'), l);
function N(e, t) {
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
                targets: null != l ? l : void 0
            };
            c(u.rMx.MODERATION_ACTION, i);
        },
        [e, n, r, l, a]
    );
}
function g(e, t) {
    c(u.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: e,
        location: t
    });
}
