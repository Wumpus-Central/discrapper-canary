var i,
    a = r(47120);
var o = r(442837),
    s = r(570140);
function l(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let u = {},
    c = {},
    d = new Set();
function f(e) {
    let { guildId: n, channelId: r } = e;
    c = {
        ...c,
        [n]: {
            ...c[n],
            [r]: !0
        }
    };
}
function p(e) {
    let { memberActions: n, guildId: r } = e;
    if (null == n) {
        c[r] = u;
        return;
    }
    (c[r] = n), d.delete(r);
}
function h(e) {
    let { guildId: n } = e;
    d.add(n);
}
function _(e) {
    let { guildId: n } = e;
    d.delete(n);
}
function m(e) {
    let { guild: n } = e;
    if (null == c[n.id]) return !1;
    delete c[n.id];
}
function g(e) {
    let { guildId: n } = e;
    if (null == c[n]) return !1;
    delete c[n];
}
class E extends (i = o.ZP.Store) {
    getCompletedActions(e) {
        return null == e ? null : c[e];
    }
    hasCompletedActionForChannel(e, n) {
        let r = this.getCompletedActions(e);
        return null != r && null != r[n];
    }
    getState(e) {
        return null == e
            ? {}
            : {
                  completedActions: c[e],
                  loading: d.has(e)
              };
    }
}
l(E, 'displayName', 'GuildOnboardingMemberActionStore'),
    (n.Z = new E(s.Z, {
        GUILD_NEW_MEMBER_ACTIONS_FETCH_START: h,
        GUILD_NEW_MEMBER_ACTIONS_FETCH_SUCCESS: p,
        GUILD_NEW_MEMBER_ACTIONS_FETCH_FAIL: _,
        GUILD_NEW_MEMBER_ACTIONS_DELETE_SUCCESS: g,
        COMPLETE_NEW_MEMBER_ACTION: f,
        GUILD_DELETE: m
    }));
