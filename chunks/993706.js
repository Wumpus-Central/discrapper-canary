(n.d(t, { Z: () => g }), n(388685), n(467055));
var r,
    i = n(442837),
    l = n(570140),
    a = n(914010);
function o(e, t, n) {
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
let s = null,
    c = null,
    u = { reportedMessages: {} };
function d() {
    let e = a.Z.getLastSelectedGuildId();
    e !== s && ((c = null), (s = null != e ? e : null));
}
class f extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        (null != e &&
            (u.reportedMessages = Object.fromEntries(
                Object.entries(e.reportedMessages).map((e) => {
                    let [t, n] = e;
                    return [t, new Set(n)];
                })
            )),
            this.syncWith([a.Z], d));
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
(o(f, 'displayName', 'ReportToModStore'),
    o(f, 'persistKey', 'ReportToModStore'),
    o(f, 'migrations', [
        (e) => {
            var t;
            return { reportedMessages: null != (t = null == e ? void 0 : e.reportedMessages) ? t : {} };
        }
    ]));
let g = new f(l.Z, {
    REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: function (e) {
        let { channelId: t, messageId: n } = e;
        (null == u.reportedMessages[t] && (u.reportedMessages[t] = new Set()), u.reportedMessages[t].add(n));
    },
    GUILD_BAN_ADD: function (e) {
        let { user: t, guildId: n } = e;
        n === s && null != c && c.set(t.id, !0);
    },
    GUILD_BAN_REMOVE: function (e) {
        let { user: t, guildId: n } = e;
        n === s && null != c && c.set(t.id, !1);
    },
    GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
        let { bans: t, guildId: n, userIds: r } = e;
        if (n !== s) return;
        let i = new Set(
                t.map((e) => {
                    var t;
                    return null == (t = e.user) ? void 0 : t.id;
                })
            ),
            l = Array.from(new Set(null != r ? r : [])).filter((e) => !i.has(e));
        (null == c && (c = new Map()),
            i.forEach((e) => {
                null == c || c.set(e, !0);
            }),
            l.forEach((e) => {
                null == c || c.set(e, !1);
            }));
    },
    LOGOUT: function () {
        ((s = null), (c = null), (u.reportedMessages = {}));
    }
});
