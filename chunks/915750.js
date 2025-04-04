n.d(t, {
    B5: () => T,
    PI: () => v,
    WD: () => C,
    aM: () => R,
    ui: () => P
}),
    n(47120),
    n(230036),
    n(411104);
var r = n(200651),
    i = n(192379),
    o = n(772848),
    a = n(286379),
    s = n(110924),
    l = n(797614),
    c = n(617136),
    u = n(113434),
    d = n(918701),
    f = n(882198),
    _ = n(5881),
    p = n(981631);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g(e, t) {
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
function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let b = 60,
    y = 1,
    v = 0.5,
    O = new Set();
function I(e, t) {
    return ''.concat(e, '_').concat(t);
}
class S {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    constructor({ questOrQuests: e, questContent: t, adDecisionData: n, triggeredByStatusChange: r, trackGuildAndChannelMetadata: i, questContentPosition: s, questContentRowIndex: u, minViewTimeSeconds: g = y }) {
        var T = this;
        h(this, 'id', void 0),
            h(this, 'quests', void 0),
            h(this, 'questContent', void 0),
            h(this, 'triggeredByStatusChange', void 0),
            h(this, 'trackGuildAndChannelMetadata', void 0),
            h(this, 'questContentPosition', void 0),
            h(this, 'questContentRowIndex', void 0),
            h(this, 'adDecisionData', void 0),
            h(this, 'heartbeatTimeoutId', void 0),
            h(this, 'lastBeatTime', void 0),
            h(this, 'minViewTimeReachedTimeoutId', void 0),
            h(this, 'minViewTimeSeconds', void 0),
            h(this, 'minViewportPercentage', void 0),
            h(this, 'isRunning', !1),
            h(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, _.T)().info(
                        ''
                            .concat(e.config.messages.questName, ' Quest viewed for at least ')
                            .concat(this.minViewTimeSeconds, 's at ')
                            .concat((0, c._b)(this.questContent)),
                        { impressionId: this.id }
                    );
                    let t = !1,
                        n = (0, d.Zp)(this.questContent);
                    if (null != n) {
                        let r = I(e.id, n);
                        (t = !O.has(r) && (0, d.VB)(this.questContent)) && O.add(r);
                    }
                    (0, c.dA)({
                        questId: e.id,
                        event: p.rMx.QUEST_CONTENT_VIEWED,
                        properties: m(
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
            h(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                T.quests.forEach((t) => {
                    if (null != T.lastBeatTime) {
                        let n = Math.round(Date.now() - T.lastBeatTime);
                        (0, _.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: T.id }
                        ),
                            (0, c.dA)({
                                questId: t.id,
                                event: p.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: m(
                                    {
                                        is_termination_beat: e,
                                        viewed_time_ms: n,
                                        triggered_by_status_change: T.triggeredByStatusChange
                                    },
                                    T.commonProperties(t)
                                ),
                                trackGuildAndChannelMetadata: T.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (T.lastBeatTime = Date.now());
            }),
            h(this, 'commonProperties', (e) => m(E(m({ impression_id: this.id }, (0, d.eE)(this.adDecisionData)), { quest_status: (0, c.uk)(e) }), (0, c.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex))),
            h(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new S({
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
            h(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * b)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, _.T)().info(''.concat(e.config.messages.questName, ' Quest became visible at ').concat((0, c._b)(this.questContent)), { impressionId: this.id }),
                            (0, c.dA)({
                                questId: e.id,
                                event: p.rMx.QUEST_CONTENT_LOADED,
                                properties: m({ triggered_by_status_change: this.triggeredByStatusChange }, this.commonProperties(e)),
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                            });
                    }),
                    (0, f.a)('QuestImpressionTracker') &&
                        l.Z.increment({
                            name: a.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, c._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            h(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && T.beat(!0), (T.lastBeatTime = void 0), clearInterval(T.heartbeatTimeoutId), clearTimeout(T.minViewTimeReachedTimeoutId), (T.isRunning = !1);
            }),
            (this.id = (0, o.Z)()),
            (this.adDecisionData = n),
            (this.questContent = t),
            (this.questContentPosition = s),
            (this.minViewTimeSeconds = g),
            (this.minViewportPercentage = v),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = i),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = u);
    }
}
let T = (e, t) => {
        let n = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(n, '_').concat(t);
    },
    N = (e) => {
        let t = Array.isArray(e) ? null : (0, c.uk)(e),
            n = (0, s.Z)(t);
        return t !== n;
    },
    A = i.createContext(void 0);
function C() {
    let e = i.useContext(A);
    return null == e ? void 0 : e.current;
}
function R() {
    var e;
    return null == (e = C()) ? void 0 : e.getId();
}
function P(e) {
    let { visible: t, visibleChanged: n, reference: o, focused: a, focusedChanged: s, impression: l } = e,
        c = N(e.questOrQuests),
        d = (0, u.KZ)(e.questContent);
    return (
        i.useEffect(
            () => () => {
                null != l.current && l.current.stop();
            },
            [l]
        ),
        i.useEffect(() => {
            let r = a && t,
                i = (n || s || c) && r,
                o = ((n || s) && !r) || c;
            (i || o) && null != l.current && l.current.stop(),
                i &&
                    ((l.current = new S({
                        adDecisionData: d,
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: c,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds
                    })),
                    l.current.start());
        }, [a, t, l, s, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, c, e.minViewTimeSeconds, d]),
        (0, r.jsx)(A.Provider, {
            value: l,
            children: e.children(o, l)
        })
    );
}
