let r;
n.d(t, { Z: () => u });
var i,
    l = n(442837),
    a = n(570140);
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
let s = { lastGuildDismissedTime: {} };
class c extends (i = l.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s;
        r = e;
    }
    getUserAgnosticState() {
        return r;
    }
    getLastGuildDismissedTime(e) {
        return r.lastGuildDismissedTime[e];
    }
}
(o(c, 'displayName', 'ApplicationSubscriptionChannelNoticeStore'), o(c, 'persistKey', 'ApplicationSubscriptionChannelNoticeStore'));
let u = new c(a.Z, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
        let { guildId: t } = e;
        r.lastGuildDismissedTime[t] = Date.now();
    }
});
