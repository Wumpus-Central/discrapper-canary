let r;
n.d(t, { Z: () => d });
var i,
    a = n(442837),
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
let l = { lastGuildDismissedTime: {} };
function c(e) {
    let { guildId: t } = e;
    r.lastGuildDismissedTime[t] = Date.now();
}
class u extends (i = a.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l;
        r = e;
    }
    getUserAgnosticState() {
        return r;
    }
    getLastGuildDismissedTime(e) {
        return r.lastGuildDismissedTime[e];
    }
}
(s(u, 'displayName', 'ApplicationSubscriptionChannelNoticeStore'), s(u, 'persistKey', 'ApplicationSubscriptionChannelNoticeStore'));
let d = new u(o.Z, { APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: c });
