"use strict";
n.d(t, { A: () => c });
var r = n(311907),
    i = n(73153),
    s = n(961350);
let a = { users: {} };
function o(e) {
    let { channelId: t } = e,
        n = s.default.getId();
    if (null == n) return !1;
    null == a.users[n] && (a.users[n] = { channels: {} }), (a.users[n].channels[t] = !0);
}
function l(e) {
    let { channelId: t } = e,
        n = s.default.getId();
    if (null == n || null == a.users[n]) return !1;
    delete a.users[n].channels[t];
}
class u extends r.Ay.DeviceSettingsStore {
    static displayName = "ChannelSpoilerAgreeStore";
    static persistKey = "ChannelSpoilerAgreeStore";
    initialize(e) {
        this.waitFor(s.default), (a = null != e && null != e.users ? { users: e.users } : { users: {} });
    }
    didAgree(e) {
        if (null == e) return !1;
        let t = s.default.getId();
        return null != t && (a.users[t]?.channels[e] || !1);
    }
    getState() {
        return a;
    }
    getUserAgnosticState() {
        return a;
    }
}
let c = new u(i.h, { CHANNEL_SPOILER_AGREE: o, CHANNEL_SPOILER_AGREE_CLEAR: l });
