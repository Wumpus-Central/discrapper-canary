n.d(t, { A: () => u });
var i = n(17928),
    s = n(228366),
    l = n(935208),
    r = n(734057);
let a = {},
    o = a;
function d() {
    l.default.keys(o).forEach((e) => {
        null == r.A.getChannel(e) && delete o[e];
    });
}
class h extends i.Ay.PersistedStore {
    static displayName = "CollapsedVoiceChannelStore";
    static persistKey = "collapsedChannels";
    initialize(e) {
        this.waitFor(r.A), (o = e ?? a);
    }
    getState() {
        return o;
    }
    getCollapsed() {
        return o;
    }
    isCollapsed(e) {
        return o[e] || !1;
    }
}
let u = new h(s.h, {
    CONNECTION_OPEN: d,
    OVERLAY_INITIALIZE: d,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        o[t] ? delete o[t] : (o[t] = !0), (o = { ...o });
    },
});
