n.d(t, { Z: () => g }), n(388685), n(467055);
var r,
    i = n(442837),
    l = n(570140),
    o = n(914010);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let c = null,
    s = null,
    u = { reportedMessages: {} };
function d() {
    let e = o.Z.getLastSelectedGuildId();
    e !== c && ((s = null), (c = null != e ? e : null));
}
class f extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            (u.reportedMessages = Object.fromEntries(
                Object.entries(e.reportedMessages).map((e) => {
                    let [t, n] = e;
                    return [t, new Set(n)];
                }),
            )),
            this.syncWith([o.Z], d);
    }
    getState() {
        return u;
    }
    isUserBanned(e) {
        var t;
        return null != (t = null == s ? void 0 : s.get(e)) ? t : null;
    }
    getReportedMessages() {
        return u.reportedMessages;
    }
    hasReportedMessage(e, t) {
        var n, r;
        return null != (r = null == (n = u.reportedMessages[e]) ? void 0 : n.has(t)) && r;
    }
}
a(f, "displayName", "ReportToModStore"),
    a(f, "persistKey", "ReportToModStore"),
    a(f, "migrations", [
        (e) => {
            var t;
            return { reportedMessages: null != (t = null == e ? void 0 : e.reportedMessages) ? t : {} };
        },
    ]);
let g = new f(l.Z, {
    REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: function (e) {
        let { channelId: t, messageId: n } = e;
        null == u.reportedMessages[t] && (u.reportedMessages[t] = new Set()), u.reportedMessages[t].add(n);
    },
    GUILD_BAN_ADD: function (e) {
        let { user: t, guildId: n } = e;
        n === c && null != s && s.set(t.id, !0);
    },
    GUILD_BAN_REMOVE: function (e) {
        let { user: t, guildId: n } = e;
        n === c && null != s && s.set(t.id, !1);
    },
    GUILD_SETTINGS_LOADED_BANS_BATCH: function (e) {
        let { bans: t, guildId: n, userIds: r } = e;
        if (n !== c) return;
        let i = new Set(
                t.map((e) => {
                    var t;
                    return null == (t = e.user) ? void 0 : t.id;
                }),
            ),
            l = Array.from(new Set(null != r ? r : [])).filter((e) => !i.has(e));
        null == s && (s = new Map()),
            i.forEach((e) => {
                null == s || s.set(e, !0);
            }),
            l.forEach((e) => {
                null == s || s.set(e, !1);
            });
    },
    LOGOUT: function () {
        (c = null), (s = null), (u.reportedMessages = {});
    },
});
