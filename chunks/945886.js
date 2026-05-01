n.d(t, { A: () => c });
var l = n(17928),
    i = n(228366),
    s = n(935208),
    a = n(734057);
let r = {},
    d = r;
function u() {
    s.default.keys(d).forEach((e) => {
        null == a.A.getChannel(e) && delete d[e];
    });
}
class o extends l.Ay.PersistedStore {
    static displayName = "CollapsedVoiceChannelStore";
    static persistKey = "collapsedChannels";
    initialize(e) {
        this.waitFor(a.A), (d = e ?? r);
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
let c = new o(i.h, {
    CONNECTION_OPEN: u,
    OVERLAY_INITIALIZE: u,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        d[t] ? delete d[t] : (d[t] = !0), (d = { ...d });
    },
});
