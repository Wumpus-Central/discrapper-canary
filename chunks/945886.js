"use strict";
n.d(t, { A: () => c });
var s = n(311907),
    i = n(73153),
    r = n(661191),
    l = n(734057);
let a = {},
    o = a;
function d() {
    r.default.keys(o).forEach((e) => {
        null == l.A.getChannel(e) && delete o[e];
    });
}
class h extends s.Ay.PersistedStore {
    static displayName = "CollapsedVoiceChannelStore";
    static persistKey = "collapsedChannels";
    initialize(e) {
        this.waitFor(l.A), (o = e ?? a);
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
let c = new h(i.h, {
    CONNECTION_OPEN: d,
    OVERLAY_INITIALIZE: d,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        o[t] ? delete o[t] : (o[t] = !0), (o = { ...o });
    },
});
