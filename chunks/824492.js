"use strict";
n.d(t, { A: () => u });
var r = n(311907),
    i = n(73153),
    s = n(287809);
let a = { users: {} };
function o(e) {
    let { channelId: t } = e,
        n = s.default.getCurrentUser()?.id;
    if (null == n) return !1;
    null == a.users[n] && (a.users[n] = { channels: {} }), (a.users[n].channels[t] = !0);
}
class l extends r.Ay.DeviceSettingsStore {
    static displayName = "ChannelSpoilerAgreeStore";
    static persistKey = "ChannelSpoilerAgreeStore";
    initialize(e) {
        a = null != e && null != e.users ? { users: e.users } : { users: {} };
    }
    didAgree(e) {
        if (null == e) return !1;
        let t = s.default.getCurrentUser()?.id;
        return null != t && (a.users[t]?.channels[e] || !1);
    }
    getState() {
        return a;
    }
    getUserAgnosticState() {
        return a;
    }
}
let u = new l(i.h, { CHANNEL_SPOILER_AGREE: o });
