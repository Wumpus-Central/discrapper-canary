n.d(t, { Z: () => g }), n(47120);
var i,
    r = n(442837),
    a = n(570140);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let o = {},
    l = {},
    u = new Set();
function c(e) {
    let { guildId: t, channelId: n } = e;
    l = {
        ...l,
        [t]: {
            ...l[t],
            [n]: !0
        }
    };
}
function d(e) {
    let { memberActions: t, guildId: n } = e;
    if (null == t) {
        l[n] = o;
        return;
    }
    (l[n] = t), u.delete(n);
}
function f(e) {
    let { guildId: t } = e;
    u.add(t);
}
function _(e) {
    let { guildId: t } = e;
    u.delete(t);
}
function p(e) {
    let { guild: t } = e;
    if (null == l[t.id]) return !1;
    delete l[t.id];
}
function h(e) {
    let { guildId: t } = e;
    if (null == l[t]) return !1;
    delete l[t];
}
class m extends (i = r.ZP.Store) {
    getCompletedActions(e) {
        return null == e ? null : l[e];
    }
    hasCompletedActionForChannel(e, t) {
        let n = this.getCompletedActions(e);
        return null != n && null != n[t];
    }
    getState(e) {
        return null == e
            ? {}
            : {
                  completedActions: l[e],
                  loading: u.has(e)
              };
    }
}
s(m, 'displayName', 'GuildOnboardingMemberActionStore');
let g = new m(a.Z, {
    GUILD_NEW_MEMBER_ACTIONS_FETCH_START: f,
    GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: d,
    GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: _,
    GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: h,
    COMPLETE_NEW_MEMBER_ACTION: c,
    GUILD_DELETE: p
});
