n.d(t, { Z: () => c }), n(388685), n(467055);
var r,
    i = n(442837),
    l = n(570140);
function a(e, t, n) {
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
let o = { reportedMessages: {} };
class s extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        null != e &&
            (o.reportedMessages = Object.fromEntries(
                Object.entries(e.reportedMessages).map((e) => {
                    let [t, n] = e;
                    return [t, new Set(n)];
                })
            ));
    }
    getState() {
        return o;
    }
    getReportedMessages() {
        return o.reportedMessages;
    }
    hasReportedMessage(e, t) {
        var n, r;
        return null != (r = null == (n = o.reportedMessages[e]) ? void 0 : n.has(t)) && r;
    }
}
a(s, 'displayName', 'ReportToModStore'),
    a(s, 'persistKey', 'ReportToModStore'),
    a(s, 'migrations', [
        (e) => {
            var t;
            return { reportedMessages: null != (t = null == e ? void 0 : e.reportedMessages) ? t : {} };
        }
    ]);
let c = new s(l.Z, {
    REPORT_TO_MOD_REPORT_MESSAGE_SUCCESS: function (e) {
        let { channelId: t, messageId: n } = e;
        null == o.reportedMessages[t] && (o.reportedMessages[t] = new Set()), o.reportedMessages[t].add(n);
    },
    LOGOUT: function () {
        o.reportedMessages = {};
    }
});
