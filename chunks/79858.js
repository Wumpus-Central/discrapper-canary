"use strict";
n.d(t, { A: () => f });
var l = n(607399),
    i = n(17928),
    r = n(228366),
    s = n(617710);
let a = Object.freeze({
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
let o = {},
    u = {},
    c = !0,
    d = {},
    m = !1;
function h() {
    if (((d = {}), !c))
        for (let [e, t] of Object.entries(a)) {
            let n = !1 !== o[e];
            if (((d[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== o[n] && (d[e] = !1);
        }
}
class p extends i.Ay.Store {
    static displayName = "TutorialIndicatorStore";
    initialize() {
        h(), this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type), this.waitFor(s.A);
    }
    shouldShow(e) {
        return !(!m || c || (l.Fr && ["writing-messages", "organize-by-topic"].includes(e))) && (d[e] || !1);
    }
    shouldShowAnyIndicators() {
        return !c;
    }
    getIndicators() {
        return u;
    }
    getData() {
        return a;
    }
    getDefinition(e) {
        let t = this.getData();
        return null != t ? t[e] : null;
    }
}
let f = new p(r.h, {
    CONNECTION_OPEN: function (e) {
        let { tutorial: t } = e;
        (m = !0),
            (c = !0),
            (o = {}),
            null != t && ((c = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (o[e] = !1))),
            h();
    },
    CONNECTION_CLOSED: function () {
        m = !1;
    },
    TUTORIAL_INDICATOR_DISMISS: function (e) {
        (o = { ...o, [e.tutorialId]: !1 }), (u = { ...u }), delete u[e.tutorialId], h();
    },
    TUTORIAL_INDICATOR_SHOW: function (e) {
        u = { ...u, [e.tutorialId]: e.renderData };
    },
    TUTORIAL_INDICATOR_HIDE: function (e) {
        (u = { ...u }), delete u[e.tutorialId];
    },
    TUTORIAL_INDICATOR_SUPPRESS_ALL: function () {
        c = !0;
    },
});
