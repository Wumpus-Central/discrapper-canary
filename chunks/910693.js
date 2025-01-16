n.d(t, {
    BG: function () {
        return T;
    },
    aY: function () {
        return i;
    },
    dW: function () {
        return I;
    },
    gm: function () {
        return A;
    },
    h1: function () {
        return f;
    },
    jQ: function () {
        return s;
    },
    sE: function () {
        return g;
    }
});
var r,
    l,
    i,
    s,
    a = n(192379),
    o = n(100527),
    E = n(367907),
    u = n(314897),
    c = n(626135),
    d = n(981631);
function _(e, t, n) {
    var r;
    let l = {
        ...t,
        ...(0, E.hH)(null !== (r = t.guild_id) && void 0 !== r ? r : n)
    };
    c.default.track(e, l);
}
function A(e) {
    return a.useCallback(
        (t) => {
            !(function (e) {
                let t = {
                    guild_id: e,
                    location: o.Z.MEMBER_SAFETY_PAGE
                };
                _(d.rMx.MOD_DASH_SEARCH_MEMBERS, t);
            })(e);
        },
        [e]
    );
}
function T(e) {
    return a.useCallback(
        (t) => {
            !(function (e, t) {
                let n = {
                    selected_role_count: t.size,
                    guild_id: e,
                    location: o.Z.MEMBER_SAFETY_PAGE
                };
                _(d.rMx.MOD_DASH_FILTER_ROLES, n);
            })(e, t);
        },
        [e]
    );
}
((r = i || (i = {})).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'), (r.COMMUNICATION_DISABLED = 'communication_disabled'), (r.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'), (r.USERNAME_QUARANTINED = 'username_quarantined');
function I(e) {
    return a.useCallback(
        (t) => {
            !(function (e, t) {
                let n = {
                    flag_type: t,
                    guild_id: e,
                    location: o.Z.MEMBER_SAFETY_PAGE
                };
                _(d.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, n);
            })(e, t);
        },
        [e]
    );
}
function g(e, t) {
    let { location: n, targetUserId: r, targets: l, locations: i } = t;
    return a.useCallback(
        (t) => {
            let s = {
                action_type: t,
                mod_user_id: u.default.getId(),
                guild_id: e,
                location: n,
                locations: i,
                target_user_id: null != r ? r : void 0,
                targets: null != l ? l : void 0
            };
            _(d.rMx.MODERATION_ACTION, s);
        },
        [e, n, r, l, i]
    );
}
function f(e, t) {
    _(d.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: e,
        location: t
    });
}
((l = s || (s = {})).BAN = 'ban'), (l.KICK = 'kick'), (l.MUTE = 'mute'), (l.TIMEOUT = 'timeout'), (l.ADD_ROLE = 'add_role'), (l.REMOVE_ROLE = 'remove_role'), (l.COPY_ID = 'copy_id'), (l.CHANGE_NICKNAME = 'change_nickname');
