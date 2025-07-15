let i;
n.d(t, { Z: () => d });
var r,
    l = n(442837),
    o = n(570140);
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
let a = { lastGuildDismissedTime: {} };
class c extends (r = l.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
        i = e;
    }
    getUserAgnosticState() {
        return i;
    }
    getLastGuildDismissedTime(e) {
        return i.lastGuildDismissedTime[e];
    }
}
(s(c, 'displayName', 'ApplicationSubscriptionChannelNoticeStore'), s(c, 'persistKey', 'ApplicationSubscriptionChannelNoticeStore'));
let d = new c(o.Z, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
        let { guildId: t } = e;
        i.lastGuildDismissedTime[t] = Date.now();
    }
});
