t.d(e, {
    BG: function () {
        return p;
    },
    aY: function () {
        return r;
    },
    dW: function () {
        return g;
    },
    gm: function () {
        return E;
    },
    h1: function () {
        return A;
    },
    jQ: function () {
        return u;
    },
    sE: function () {
        return h;
    }
});
var i,
    l,
    r,
    u,
    a = t(192379),
    o = t(100527),
    d = t(367907),
    s = t(314897),
    c = t(626135),
    f = t(981631);
function _(n, e, t) {
    var i;
    let l = {
        ...e,
        ...(0, d.hH)(null !== (i = e.guild_id) && void 0 !== i ? i : t)
    };
    c.default.track(n, l);
}
function E(n) {
    return a.useCallback(
        (e) => {
            !(function (n) {
                let e = {
                    guild_id: n,
                    location: o.Z.MEMBER_SAFETY_PAGE
                };
                _(f.rMx.MOD_DASH_SEARCH_MEMBERS, e);
            })(n);
        },
        [n]
    );
}
function p(n) {
    return a.useCallback(
        (e) => {
            !(function (n, e) {
                let t = {
                    selected_role_count: e.size,
                    guild_id: n,
                    location: o.Z.MEMBER_SAFETY_PAGE
                };
                _(f.rMx.MOD_DASH_FILTER_ROLES, t);
            })(n, e);
        },
        [n]
    );
}
((i = r || (r = {})).UNUSUAL_DM_ACTIVITY = 'unusual_dm_activity'), (i.COMMUNICATION_DISABLED = 'communication_disabled'), (i.UNUSUAL_ACCOUNT_ACTIVITY = 'unusual_account_activity'), (i.USERNAME_QUARANTINED = 'username_quarantined');
function g(n) {
    return a.useCallback(
        (e) => {
            !(function (n, e) {
                let t = {
                    flag_type: e,
                    guild_id: n,
                    location: o.Z.MEMBER_SAFETY_PAGE
                };
                _(f.rMx.MOD_DASH_FILTER_SAFETY_FLAGS, t);
            })(n, e);
        },
        [n]
    );
}
function h(n, e) {
    let { location: t, targetUserId: i, targets: l, locations: r } = e;
    return a.useCallback(
        (e) => {
            let u = {
                action_type: e,
                mod_user_id: s.default.getId(),
                guild_id: n,
                location: t,
                locations: r,
                target_user_id: null != i ? i : void 0,
                targets: null != l ? l : void 0
            };
            _(f.rMx.MODERATION_ACTION, u);
        },
        [n, t, i, l, r]
    );
}
function A(n, e) {
    _(f.rMx.MOD_DASH_MEMBERS_TABLE_VIEWED, {
        guild_id: n,
        location: e
    });
}
((l = u || (u = {})).BAN = 'ban'), (l.KICK = 'kick'), (l.MUTE = 'mute'), (l.TIMEOUT = 'timeout'), (l.ADD_ROLE = 'add_role'), (l.REMOVE_ROLE = 'remove_role'), (l.COPY_ID = 'copy_id'), (l.CHANGE_NICKNAME = 'change_nickname');
