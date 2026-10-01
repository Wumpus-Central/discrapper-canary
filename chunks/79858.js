n.d(t, { A: () => C });
var i = n(607399),
    l = n(17928),
    r = n(73153),
    s = n(597643);
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
    d = !0,
    c = {},
    h = !1;
function f() {
    if (((c = {}), !d))
        for (let [e, t] of Object.entries(a)) {
            let n = !1 !== o[e];
            if (((c[e] = n), n && null != t.prerequisites)) for (let n of t.prerequisites) !1 !== o[n] && (c[e] = !1);
        }
}
class g extends l.Ay.Store {
    static displayName = "TutorialIndicatorStore";
    initialize() {
        (f(), this.mustEmitChanges((e) => "CONNECTION_OPEN" !== e.type), this.waitFor(s.A));
    }
    shouldShow(e) {
        return !(!h || d || (i.Fr && ["writing-messages", "organize-by-topic"].includes(e))) && (c[e] || !1);
    }
    shouldShowAnyIndicators() {
        return !d;
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
let C = new g(r.h, {
    CONNECTION_OPEN: function (e) {
        let { tutorial: t } = e;
        ((h = !0),
            (d = !0),
            (o = {}),
            null != t && ((d = t.indicators_suppressed), t.indicators_confirmed.forEach((e) => (o[e] = !1))),
            f());
    },
    CONNECTION_CLOSED: function () {
        h = !1;
    },
    TUTORIAL_INDICATOR_DISMISS: function (e) {
        ((o = { ...o, [e.tutorialId]: !1 }), (u = { ...u }), delete u[e.tutorialId], f());
    },
    TUTORIAL_INDICATOR_SHOW: function (e) {
        u = { ...u, [e.tutorialId]: e.renderData };
    },
    TUTORIAL_INDICATOR_HIDE: function (e) {
        ((u = { ...u }), delete u[e.tutorialId]);
    },
    TUTORIAL_INDICATOR_SUPPRESS_ALL: function () {
        d = !0;
    },
});
