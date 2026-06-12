"use strict";
n.d(t, { A: () => p });
var i = n(607399),
    r = n(17928),
    s = n(228366),
    a = n(617710);
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
    u = {},
    c = !0,
    d = {},
    _ = !1;
function h() {
    if (((d = {}), !c))
        for (let [e, t] of Object.entries(o)) {
            let n = !1 !== l[e];
            if (((d[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== l[n] && (d[e] = !1);
        }
}
class f extends r.Ay.Store {
    static displayName = "TutorialIndicatorStore";
    initialize() {
        h(), this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type), this.waitFor(a.A);
    }
    shouldShow(e) {
        return !(!_ || c || (i.Fr && ["writing-messages", "organize-by-topic"].includes(e))) && (d[e] || !1);
    }
    shouldShowAnyIndicators() {
        return !c;
    }
    getIndicators() {
        return u;
    }
    getData() {
        return o;
    }
    getDefinition(e) {
        let t = this.getData();
        return null != t ? t[e] : null;
    }
}
let p = new f(s.h, {
    CONNECTION_OPEN: function (e) {
        let { tutorial: t } = e;
        (_ = !0),
            (c = !0),
            (l = {}),
            null != t && ((c = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (l[e] = !1))),
            h();
    },
    CONNECTION_CLOSED: function () {
        _ = !1;
    },
    TUTORIAL_INDICATOR_DISMISS: function (e) {
        (l = { ...l, [e.tutorialId]: !1 }), (u = { ...u }), delete u[e.tutorialId], h();
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
