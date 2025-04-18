n.d(t, {
    B5: () => N,
    PI: () => O,
    WD: () => R,
    aM: () => P,
    ui: () => w
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(200651),
    i = n(192379),
    a = n(772848),
    o = n(286379),
    s = n(493773),
    l = n(110924),
    c = n(797614),
    u = n(617136),
    d = n(113434),
    f = n(918701),
    _ = n(882198),
    p = n(5881),
    h = n(981631);
function m(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                m(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = 60,
    v = 1,
    O = 0.5,
    I = new Set();
function S(e, t) {
    return ''.concat(e, '_').concat(t);
}
class T {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    constructor({ questOrQuests: e, questContent: t, adDecisionData: n, triggeredByStatusChange: r, trackGuildAndChannelMetadata: i, questContentPosition: s, questContentRowIndex: l, minViewTimeSeconds: d = v }) {
        var E = this;
        m(this, 'id', void 0),
            m(this, 'quests', void 0),
            m(this, 'questContent', void 0),
            m(this, 'triggeredByStatusChange', void 0),
            m(this, 'trackGuildAndChannelMetadata', void 0),
            m(this, 'questContentPosition', void 0),
            m(this, 'questContentRowIndex', void 0),
            m(this, 'adDecisionData', void 0),
            m(this, 'heartbeatTimeoutId', void 0),
            m(this, 'lastBeatTime', void 0),
            m(this, 'minViewTimeReachedTimeoutId', void 0),
            m(this, 'minViewTimeSeconds', void 0),
            m(this, 'minViewportPercentage', void 0),
            m(this, 'isRunning', !1),
            m(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, p.T)().info(
                        ''
                            .concat(e.config.messages.questName, ' Quest viewed for at least ')
                            .concat(this.minViewTimeSeconds, 's at ')
                            .concat((0, u._b)(this.questContent)),
                        { impressionId: this.id }
                    );
                    let t = !1,
                        n = (0, f.Zp)(this.questContent);
                    if (null != n) {
                        let r = S(e.id, n);
                        (t = !I.has(r) && (0, f.VB)(this.questContent)) && I.add(r);
                    }
                    (0, u.dA)({
                        questId: e.id,
                        event: h.rMx.QUEST_CONTENT_VIEWED,
                        properties: g(
                            {
                                min_view_time_seconds: this.minViewTimeSeconds,
                                min_viewport_percentage: this.minViewportPercentage,
                                triggered_by_status_change: this.triggeredByStatusChange
                            },
                            this.commonProperties(e)
                        ),
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        shouldExtendSession: t
                    });
                });
            }),
            m(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                E.quests.forEach((t) => {
                    if (null != E.lastBeatTime) {
                        let n = Math.round(Date.now() - E.lastBeatTime);
                        (0, p.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: E.id }
                        ),
                            (0, u.dA)({
                                questId: t.id,
                                event: h.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: g(
                                    {
                                        is_termination_beat: e,
                                        viewed_time_ms: n,
                                        triggered_by_status_change: E.triggeredByStatusChange
                                    },
                                    E.commonProperties(t)
                                ),
                                trackGuildAndChannelMetadata: E.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (E.lastBeatTime = Date.now());
            }),
            m(this, 'commonProperties', (e) => g(b(g({ impression_id: this.id }, (0, f.eE)(this.adDecisionData)), { quest_status: (0, u.uk)(e) }), (0, u.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex))),
            m(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new T({
                        questContent: this.questContent,
                        adDecisionData: this.adDecisionData,
                        questOrQuests: this.quests,
                        questContentRowIndex: this.questContentRowIndex,
                        questContentPosition: this.questContentPosition,
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        triggeredByStatusChange: t
                    })
                );
            }),
            m(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * y)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, p.T)().info(''.concat(e.config.messages.questName, ' Quest became visible at ').concat((0, u._b)(this.questContent)), { impressionId: this.id }),
                            (0, u.dA)({
                                questId: e.id,
                                event: h.rMx.QUEST_CONTENT_LOADED,
                                properties: g({ triggered_by_status_change: this.triggeredByStatusChange }, this.commonProperties(e)),
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                            });
                    }),
                    (0, _.a)('QuestImpressionTracker') &&
                        c.Z.increment({
                            name: o.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, u._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            m(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && E.beat(!0), (E.lastBeatTime = void 0), clearInterval(E.heartbeatTimeoutId), clearTimeout(E.minViewTimeReachedTimeoutId), (E.isRunning = !1);
            }),
            (this.id = (0, a.Z)()),
            (this.adDecisionData = n),
            (this.questContent = t),
            (this.questContentPosition = s),
            (this.minViewTimeSeconds = d),
            (this.minViewportPercentage = O),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = i),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = l);
    }
}
let N = (e, t) => {
        let n = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(n, '_').concat(t);
    },
    A = (e) => {
        let t = Array.isArray(e) ? null : (0, u.uk)(e),
            n = (0, l.Z)(t);
        return t !== n;
    },
    C = i.createContext(void 0);
function R() {
    let e = i.useContext(C);
    return null == e ? void 0 : e.current;
}
function P() {
    var e;
    return null == (e = R()) ? void 0 : e.getId();
}
function w(e) {
    let { visible: t, visibleChanged: n, focused: a, reference: o, focusedChanged: l } = e,
        c = A(e.questOrQuests),
        u = (0, d.KZ)(e.questContent),
        f = i.useRef(null);
    return (
        (0, s.ZP)(() => () => {
            null != f.current && f.current.stop();
        }),
        i.useEffect(() => {
            let r = a && t,
                i = (n || l || c) && r,
                o = ((n || l) && !r) || c;
            (i || o) && null != f.current && f.current.stop(),
                i &&
                    ((f.current = new T({
                        adDecisionData: u,
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: c,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds
                    })),
                    f.current.start());
        }, [a, t, l, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, c, e.minViewTimeSeconds, u]),
        (0, r.jsx)(C.Provider, {
            value: f,
            children: e.children(o, f)
        })
    );
}
