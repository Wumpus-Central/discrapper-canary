t.d(n, {
    BG: () => E,
    aY: () => g,
    dW: () => f,
    gm: () => _,
    h1: () => Z,
    jQ: () => h,
    sE: () => v
});
var i,
    l,
    a = t(192379),
    r = t(100527),
    d = t(367907),
    u = t(314897),
    o = t(626135),
    s = t(981631);
function c(e, n, t) {
    var i;
    let l = {
        ...n,
        ...(0, d.hH)(null !== (i = n.guild_id) && void 0 !== i ? i : t)
    };
    o.default.track(e, l);
}
function _(e) {
    return a.useCallback(
        (n) => {
            !(function (e) {
                let n = {
                    guild_id: e,
                    location: r.Z.MEMBER_SAFETY_PAGE
                };
                c(s.rMx.MOD_DASH_SEARCH_MEMBERS, n);
            })(e);
        },
        [e]
    );
}
function E(e) {
    return a.useCallback(
        (n) => {
            !(function (e, n) {
                let t = {
                    selected_role_count: n.size,
                    guild_id: e,
                    location: r.Z.MEMBER_SAFETY_PAGE
                };
                c(s.rMx.MOD_DASH_FILTER_ROLES, t);
            })(e, n);
        },
        [e]
    );
}
var g = (((i = {}).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'), (i.COMMUNICATION_DISABLED = 'communication_disabled'), (i.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'), (i.USERNAME_QUARANTINED = 'username_quarantined'), i);
function f(e) {
    return a.useCallback(
        (n) => {
            !(function (e, n) {
                let t = {
                    flag_type: n,
                    guild_id: e,
                    location: r.Z.MEMBER_SAFETY_PAGE
                };
                c(s.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(e, n);
        },
        [e]
    );
}
var h = (((l = {}).BAN = 'ban'), (l.KICK = 'kick'), (l.MUTE = 'mute'), (l.TIMEOUT = 'timeout'), (l.ADD_ROLE = 'add_role'), (l.REMOVE_ROLE = 'remove_role'), (l.COPY_ID = 'copy_id'), (l.CHANGE_NICKNAME = 'change_nickname'), l);
function v(e, n) {
    let { location: t, targetUserId: i, targets: l, locations: r } = n;
    return a.useCallback(
        (n) => {
            let a = {
                action_type: n,
                mod_user_id: u.default.getId(),
                guild_id: e,
                location: t,
                locations: r,
                target_user_id: null != i ? i : void 0,
                targets: null != l ? l : void 0
            };
            c(s.rMx.MODERATION_ACTION, a);
        },
        [e, t, i, l, r]
    );
}
function Z(e, n) {
    c(s.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: e,
        location: n
    });
}
