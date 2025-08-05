(n.d(t, { Z: () => E }), n(388685), n(467055));
var r,
    i = n(442837),
    a = n(570140),
    o = n(914010);
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
let l = null,
    c = null,
    u = { reportedMessages: {} };
function d(e) {
    let { channelId: t, messageId: n } = e;
    (null == u.reportedMessages[t] && (u.reportedMessages[t] = new Set()), u.reportedMessages[t].add(n));
}
function f() {
    let e = o.Z.getLastSelectedGuildId();
    e !== l && ((c = null), (l = null != e ? e : null));
}
function _(e) {
    let { user: t, guildId: n } = e;
    n === l && null != c && c.set(t.id, !0);
}
function p(e) {
    let { user: t, guildId: n } = e;
    n === l && null != c && c.set(t.id, !1);
}
function h(e) {
    let { bans: t, guildId: n, userIds: r } = e;
    if (n !== l) return;
    let i = new Set(
            t.map((e) => {
                var t;
                return null == (t = e.user) ? void 0 : t.id;
            })
        ),
        a = Array.from(new Set(null != r ? r : [])).filter((e) => !i.has(e));
    (null == c && (c = new Map()),
        i.forEach((e) => {
            null == c || c.set(e, !0);
        }),
        a.forEach((e) => {
            null == c || c.set(e, !1);
        }));
}
function m() {
    ((l = null), (c = null), (u.reportedMessages = {}));
}
class g extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (null != e &&
            (u.reportedMessages = Object.fromEntries(
                Object.entries(e.reportedMessages).map((e) => {
                    let [t, n] = e;
                    return [t, new Set(n)];
                })
            )),
            this.syncWith([o.Z], f));
    }
    getState() {
        return u;
    }
    isUserBanned(e) {
        var t;
        return null != (t = null == c ? void 0 : c.get(e)) ? t : null;
    }
    getReportedMessages() {
        return u.reportedMessages;
    }
    hasReportedMessage(e, t) {
        var n, r;
        return null != (r = null == (n = u.reportedMessages[e]) ? void 0 : n.has(t)) && r;
    }
}
(s(g, 'displayName', 'ReportToModStore'),
    s(g, 'persistKey', 'ReportToModStore'),
    s(g, 'migrations', [
        (e) => {
            var t;
            return { reportedMessages: null != (t = null == e ? void 0 : e.reportedMessages) ? t : {} };
        }
    ]));
let E = new g(a.Z, {
    REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: d,
    GUILD_BAN_ADD: _,
    GUILD_BAN_REMOVE: p,
    GUILD_SETTINGS_LOADED_BANS_BATCH: h,
    LOGOUT: m
});
