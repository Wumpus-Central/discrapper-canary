let r;
n.d(t, { Z: () => u });
var i,
    l = n(442837),
    o = n(570140);
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
let c = { lastGuildDismissedTime: {} };
class s extends (i = l.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        r = e;
    }
    getUserAgnosticState() {
        return r;
    }
    getLastGuildDismissedTime(e) {
        return r.lastGuildDismissedTime[e];
    }
}
a(s, 'displayName', 'ApplicationSubscriptionChannelNoticeStore'), a(s, 'persistKey', 'ApplicationSubscriptionChannelNoticeStore');
let u = new s(o.Z, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
        let { guildId: t } = e;
        r.lastGuildDismissedTime[t] = Date.now();
    }
});
