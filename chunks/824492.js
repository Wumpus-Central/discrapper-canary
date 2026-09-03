n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366),
    a = n(280450);
let s = { users: {} };
class l extends i.Ay.DeviceSettingsStore {
    static displayName = "ChannelSpoilerAgreeStore";
    static persistKey = "ChannelSpoilerAgreeStore";
    initialize(e) {
        this.waitFor(a.default), (s = null != e && null != e.users ? { users: e.users } : { users: {} });
    }
    didAgree(e) {
        if (null == e) return !1;
        let t = a.default.getId();
        return null != t && (s.users[t]?.channels[e] || !1);
    }
    getState() {
        return s;
    }
    getUserAgnosticState() {
        return s;
    }
}
let o = new l(r.h, {
    CHANNEL_SPOILER_AGREE: function (e) {
        let { channelId: t } = e,
            n = a.default.getId();
        if (null == n) return !1;
        null == s.users[n] && (s.users[n] = { channels: {} }), (s.users[n].channels[t] = !0);
    },
    CHANNEL_SPOILER_AGREE_CLEAR: function (e) {
        let { channelId: t } = e,
            n = a.default.getId();
        if (null == n || null == s.users[n]) return !1;
        delete s.users[n].channels[t];
    },
});
