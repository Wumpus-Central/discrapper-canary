"use strict";
n.d(t, { A: () => u });
var i = n(17928),
    r = n(228366),
    a = n(935208),
    s = n(734057);
let l = {},
    o = l;
function d() {
    a.default.keys(o).forEach((e) => {
        null == s.A.getChannel(e) && delete o[e];
    });
}
class c extends i.Ay.PersistedStore {
    static displayName = "CollapsedVoiceChannelStore";
    static persistKey = "collapsedChannels";
    initialize(e) {
        this.waitFor(s.A), (o = e ?? l);
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
let u = new c(r.h, {
    CONNECTION_OPEN: d,
    OVERLAY_INITIALIZE: d,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        o[t] ? delete o[t] : (o[t] = !0), (o = { ...o });
    },
});
