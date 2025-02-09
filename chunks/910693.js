t.d(n, {
    BG: () => f,
    aY: () => p,
    dW: () => E,
    gm: () => _,
    h1: () => v,
    jQ: () => g,
    sE: () => h
});
var l,
    i,
    r = t(192379),
    a = t(100527),
    u = t(367907),
    o = t(314897),
    d = t(626135),
    s = t(981631);
function c(e, n, t) {
    var l;
    let i = {
        ...n,
        ...(0, u.hH)(null !== (l = n.guild_id) && void 0 !== l ? l : t)
    };
    d.default.track(e, i);
}
function _(e) {
    return r.useCallback(
        (n) => {
            !(function (e) {
                let n = {
                    guild_id: e,
                    location: a.Z.MEMBER_SAFETY_PAGE
                };
                c(s.rMx.MOD_DASH_SEARCH_MEMBERS, n);
            })(e);
        },
        [e]
    );
}
function f(e) {
    return r.useCallback(
        (n) => {
            !(function (e, n) {
                let t = {
                    selected_role_count: n.size,
                    guild_id: e,
                    location: a.Z.MEMBER_SAFETY_PAGE
                };
                c(s.rMx.MOD_DASH_FILTER_ROLES, t);
            })(e, n);
        },
        [e]
    );
}
var p = (((l = {}).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'), (l.COMMUNICATION_DISABLED = 'communication_disabled'), (l.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'), (l.USERNAME_QUARANTINED = 'username_quarantined'), l);
function E(e) {
    return r.useCallback(
        (n) => {
            !(function (e, n) {
                let t = {
                    flag_type: n,
                    guild_id: e,
                    location: a.Z.MEMBER_SAFETY_PAGE
                };
                c(s.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(e, n);
        },
        [e]
    );
}
var g = (((i = {}).BAN = 'ban'), (i.KICK = 'kick'), (i.MUTE = 'mute'), (i.TIMEOUT = 'timeout'), (i.ADD_ROLE = 'add_role'), (i.REMOVE_ROLE = 'remove_role'), (i.COPY_ID = 'copy_id'), (i.CHANGE_NICKNAME = 'change_nickname'), i);
function h(e, n) {
    let { location: t, targetUserId: l, targets: i, locations: a } = n;
    return r.useCallback(
        (n) => {
            let r = {
                action_type: n,
                mod_user_id: o.default.getId(),
                guild_id: e,
                location: t,
                locations: a,
                target_user_id: null != l ? l : void 0,
                targets: null != i ? i : void 0
            };
            c(s.rMx.MODERATION_ACTION, r);
        },
        [e, t, l, i, a]
    );
}
function v(e, n) {
    c(s.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: e,
        location: n
    });
}
