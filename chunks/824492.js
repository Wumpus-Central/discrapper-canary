n.d(t, { A: () => o });
var i = n(17928),
    r = n(228366),
    a = n(495544);
let l = { users: {} };
class s extends i.Ay.DeviceSettingsStore {
    static displayName = "ChannelSpoilerAgreeStore";
    static persistKey = "ChannelSpoilerAgreeStore";
    initialize(e) {
        this.waitFor(a.default), (l = null != e && null != e.users ? { users: e.users } : { users: {} });
    }
    didAgree(e) {
        if (null == e) return !1;
        let t = a.default.getId();
        return null != t && (l.users[t]?.channels[e] || !1);
    }
    getState() {
        return l;
    }
    getUserAgnosticState() {
        return l;
    }
}
let o = new s(r.h, {
    CHANNEL_SPOILER_AGREE: function (e) {
        let { channelId: t } = e,
            n = a.default.getId();
        if (null == n) return !1;
        null == l.users[n] && (l.users[n] = { channels: {} }), (l.users[n].channels[t] = !0);
    },
    CHANNEL_SPOILER_AGREE_CLEAR: function (e) {
        let { channelId: t } = e,
            n = a.default.getId();
        if (null == n || null == l.users[n]) return !1;
        delete l.users[n].channels[t];
    },
});
