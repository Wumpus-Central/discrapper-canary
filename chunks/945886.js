n.d(t, { A: () => u });
var i = n(17928),
    s = n(228366),
    l = n(935208),
    r = n(734057);
let a = {},
    d = a;
function h() {
    l.default.keys(d).forEach((e) => {
        null == r.A.getChannel(e) && delete d[e];
    });
}
class o extends i.Ay.PersistedStore {
    static displayName = "CollapsedVoiceChannelStore";
    static persistKey = "collapsedChannels";
    initialize(e) {
        this.waitFor(r.A), (d = e ?? a);
    }
    getState() {
        return d;
    }
    getCollapsed() {
        return d;
    }
    isCollapsed(e) {
        return d[e] || !1;
    }
}
let u = new o(s.h, {
    CONNECTION_OPEN: h,
    OVERLAY_INITIALIZE: h,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        d[t] ? delete d[t] : (d[t] = !0), (d = { ...d });
    },
});
