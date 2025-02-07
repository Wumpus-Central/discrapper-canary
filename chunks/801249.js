let i;
n.d(t, { Z: () => l });
var o,
    a = n(442837),
    r = n(570140);
function _(e, t, n) {
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
class s extends (o = a.ZP.DeviceSettingsStore) {
    initialize() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c;
        i = e;
    }
    getUserAgnosticState() {
        return i;
    }
    getLastGuildDismissedTime(e) {
        return i.lastGuildDismissedTime[e];
    }
}
_(s, 'displayName', 'ApplicationSubscriptionChannelNoticeStore'), _(s, 'persistKey', 'ApplicationSubscriptionChannelNoticeStore');
let l = new s(r.Z, {
    APPLICATION_SUBSCRIPTIONS_CHANNEL_NOTICE_DISMISSED: function (e) {
        let { guildId: t } = e;
        i.lastGuildDismissedTime[t] = Date.now();
    }
});
