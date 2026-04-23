"use strict";
n.d(t, { A: () => m });
var i = n(607399),
    r = n(17928),
    s = n(228366),
    a = n(366853);
let o = Object.freeze({
    "voice-conversations": { popoutOffset: { x: 45, y: 0 } },
    "writing-messages": { prerequisites: ["voice-conversations"], popoutOffset: { x: -36, y: 0 } },
    "direct-messages": { popoutOffset: { x: 50, y: 0 } },
    "create-first-server": { popoutOffset: { x: 45, y: 0 } },
    "organize-by-topic": { popoutOffset: { x: 50, y: 0 } },
    "instant-invite": { prerequisites: ["organize-by-topic"], popoutOffset: { x: -10, y: 0 } },
    "whos-online": { prerequisites: ["instant-invite"], popoutOffset: { x: -50, y: 0 } },
    "server-settings": { prerequisites: ["instant-invite"], popoutOffset: { y: 32, x: 0 } },
    "friends-list": { prerequisites: ["instant-invite"], popoutOffset: { x: 45, y: 0 } },
    "create-more-servers": { prerequisites: ["server-settings"], popoutOffset: { x: 45, y: 0 } },
});
n(436317);
let l = {},
    d = {},
    _ = !0,
    u = {},
    c = !1;
function E() {
    if (((u = {}), !_))
        for (let [e, t] of Object.entries(o)) {
            let n = !1 !== l[e];
            if (((u[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== l[n] && (u[e] = !1);
        }
}
class h extends r.Ay.Store {
    static displayName = "TutorialIndicatorStore";
    initialize() {
        E(), this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type), this.waitFor(a.A);
    }
    shouldShow(e) {
        return !(!c || _ || (i.Fr && ["writing-messages", "organize-by-topic"].includes(e))) && (u[e] || !1);
    }
    shouldShowAnyIndicators() {
        return !_;
    }
    getIndicators() {
        return d;
    }
    getData() {
        return o;
    }
    getDefinition(e) {
        let t = this.getData();
        return null != t ? t[e] : null;
    }
}
let m = new h(s.h, {
    CONNECTION_OPEN: function (e) {
        let { tutorial: t } = e;
        (c = !0),
            (_ = !0),
            (l = {}),
            null != t && ((_ = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (l[e] = !1))),
            E();
    },
    CONNECTION_CLOSED: function () {
        c = !1;
    },
    TUTORIAL_INDICATOR_DISMISS: function (e) {
        (l = { ...l, [e.tutorialId]: !1 }), (d = { ...d }), delete d[e.tutorialId], E();
    },
    TUTORIAL_INDICATOR_SHOW: function (e) {
        d = { ...d, [e.tutorialId]: e.renderData };
    },
    TUTORIAL_INDICATOR_HIDE: function (e) {
        (d = { ...d }), delete d[e.tutorialId];
    },
    TUTORIAL_INDICATOR_SUPPRESS_ALL: function () {
        _ = !0;
    },
});
