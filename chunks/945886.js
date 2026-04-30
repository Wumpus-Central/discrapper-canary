"use strict";
n.d(t, { A: () => d });
var i = n(17928),
    r = n(228366),
    s = n(935208),
    a = n(734057);
let o = {},
    l = o;
function u() {
    s.default.keys(l).forEach((e) => {
        null == a.A.getChannel(e) && delete l[e];
    });
}
class c extends i.Ay.PersistedStore {
    static displayName = "CollapsedVoiceChannelStore";
    static persistKey = "collapsedChannels";
    initialize(e) {
        this.waitFor(a.A), (l = e ?? o);
    }
    getState() {
        return l;
    }
    getCollapsed() {
        return l;
    }
    isCollapsed(e) {
        return l[e] || !1;
    }
}
let d = new c(r.h, {
    CONNECTION_OPEN: u,
    OVERLAY_INITIALIZE: u,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        l[t] ? delete l[t] : (l[t] = !0), (l = { ...l });
    },
});
