"use strict";
n.d(t, { A: () => l });
var i = n(17928),
    r = n(228366),
    s = n(495544);
let a = { users: {} };
class o extends i.Ay.DeviceSettingsStore {
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
let l = new o(r.h, {
    CHANNEL_SPOILER_AGREE: function (e) {
        let { channelId: t } = e,
            n = s.default.getId();
        if (null == n) return !1;
        null == a.users[n] && (a.users[n] = { channels: {} }), (a.users[n].channels[t] = !0);
    },
    CHANNEL_SPOILER_AGREE_CLEAR: function (e) {
        let { channelId: t } = e,
            n = s.default.getId();
        if (null == n || null == a.users[n]) return !1;
        delete a.users[n].channels[t];
    },
});
