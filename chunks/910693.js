t.d(n, {
    BG: () => _,
    aY: () => g,
    dW: () => f,
    gm: () => E,
    h1: () => h,
    jQ: () => v,
    sE: () => Z
});
var i,
    l,
    r = t(192379),
    a = t(100527),
    u = t(367907),
    d = t(314897),
    o = t(626135),
    s = t(981631);
function c(e, n, t) {
    var i;
    let l = {
        ...n,
        ...(0, u.hH)(null !== (i = n.guild_id) && void 0 !== i ? i : t)
    };
    o.default.track(e, l);
}
function E(e) {
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
function _(e) {
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
var g = (((i = {}).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'), (i.COMMUNICATION_DISABLED = 'communication_disabled'), (i.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'), (i.USERNAME_QUARANTINED = 'username_quarantined'), i);
function f(e) {
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
var v = (((l = {}).BAN = 'ban'), (l.KICK = 'kick'), (l.MUTE = 'mute'), (l.TIMEOUT = 'timeout'), (l.ADD_ROLE = 'add_role'), (l.REMOVE_ROLE = 'remove_role'), (l.COPY_ID = 'copy_id'), (l.CHANGE_NICKNAME = 'change_nickname'), l);
function Z(e, n) {
    let { location: t, targetUserId: i, targets: l, locations: a } = n;
    return r.useCallback(
        (n) => {
            let r = {
                action_type: n,
                mod_user_id: d.default.getId(),
                guild_id: e,
                location: t,
                locations: a,
                target_user_id: null != i ? i : void 0,
                targets: null != l ? l : void 0
            };
            c(s.rMx.MODERATION_ACTION, r);
        },
        [e, t, i, l, a]
    );
}
function h(e, n) {
    c(s.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: e,
        location: n
    });
}
