"use strict";
n.d(t, { A: () => f });
var l = n(607399),
    i = n(17928),
    s = n(228366),
    a = n(366853);
let r = Object.freeze({
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
    c = {},
    u = !0,
    d = {},
    h = !1;
function m() {
    if (((d = {}), !u))
        for (let [e, t] of Object.entries(r)) {
            let n = !1 !== o[e];
            if (((d[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== o[n] && (d[e] = !1);
        }
}
class p extends i.Ay.Store {
    static displayName = "TutorialIndicatorStore";
    initialize() {
        m(), this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type), this.waitFor(a.A);
    }
    shouldShow(e) {
        return !(!h || u || (l.Fr && ["writing-messages", "organize-by-topic"].includes(e))) && (d[e] || !1);
    }
    shouldShowAnyIndicators() {
        return !u;
    }
    getIndicators() {
        return c;
    }
    getData() {
        return r;
    }
    getDefinition(e) {
        let t = this.getData();
        return null != t ? t[e] : null;
    }
}
let f = new p(s.h, {
    CONNECTION_OPEN: function (e) {
        let { tutorial: t } = e;
        (h = !0),
            (u = !0),
            (o = {}),
            null != t && ((u = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (o[e] = !1))),
            m();
    },
    CONNECTION_CLOSED: function () {
        h = !1;
    },
    TUTORIAL_INDICATOR_DISMISS: function (e) {
        (o = { ...o, [e.tutorialId]: !1 }), (c = { ...c }), delete c[e.tutorialId], m();
    },
    TUTORIAL_INDICATOR_SHOW: function (e) {
        c = { ...c, [e.tutorialId]: e.renderData };
    },
    TUTORIAL_INDICATOR_HIDE: function (e) {
        (c = { ...c }), delete c[e.tutorialId];
    },
    TUTORIAL_INDICATOR_SUPPRESS_ALL: function () {
        u = !0;
    },
});
