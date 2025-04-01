n.d(t, {
    B5: () => I,
    PI: () => y,
    WD: () => N,
    aM: () => A,
    ui: () => C
}),
    n(230036),
    n(411104);
var r = n(200651),
    i = n(192379),
    o = n(772848),
    a = n(286379),
    s = n(636977),
    l = n(110924),
    c = n(797614),
    u = n(617136),
    d = n(113434),
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
    v = 1,
    y = 0.5;
class O {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    constructor({ questOrQuests: e, questContent: t, adDecisionData: n, triggeredByStatusChange: r, trackGuildAndChannelMetadata: i, questContentPosition: l, questContentRowIndex: d, minViewTimeSeconds: g = v }) {
        var I = this;
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
                            .concat((0, u._b)(this.questContent)),
                        { impressionId: this.id }
                    ),
                        (0, u.dA)({
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
                            shouldExtendSession: s.F.DESKTOP_DELIVERY.has(this.questContent) || s.F.MOBILE_DELIVERY.has(this.questContent)
                        });
                });
            }),
            h(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                I.quests.forEach((t) => {
                    if (null != I.lastBeatTime) {
                        let n = Math.round(Date.now() - I.lastBeatTime);
                        (0, _.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: I.id }
                        ),
                            (0, u.dA)({
                                questId: t.id,
                                event: p.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: m(
                                    {
                                        is_termination_beat: e,
                                        viewed_time_ms: n,
                                        triggered_by_status_change: I.triggeredByStatusChange
                                    },
                                    I.commonProperties(t)
                                ),
                                trackGuildAndChannelMetadata: I.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (I.lastBeatTime = Date.now());
            }),
            h(this, 'commonProperties', (e) => {
                var t, n;
                return m(
                    E(
                        m(
                            {
                                impression_id: this.id,
                                decision_id: null === (t = this.adDecisionData) || void 0 === t ? void 0 : t.decisionId
                            },
                            null === (n = this.adDecisionData) || void 0 === n ? void 0 : n.adIdentifiers
                        ),
                        { quest_status: (0, u.uk)(e) }
                    ),
                    (0, u.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
                );
            }),
            h(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new O({
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
                        (0, _.T)().info(''.concat(e.config.messages.questName, ' Quest became visible at ').concat((0, u._b)(this.questContent)), { impressionId: this.id }),
                            (0, u.dA)({
                                questId: e.id,
                                event: p.rMx.QUEST_CONTENT_LOADED,
                                properties: m({ triggered_by_status_change: this.triggeredByStatusChange }, this.commonProperties(e)),
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                            });
                    }),
                    (0, f.a)('QuestImpressionTracker') &&
                        c.Z.increment({
                            name: a.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, u._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            h(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && I.beat(!0), (I.lastBeatTime = void 0), clearInterval(I.heartbeatTimeoutId), clearTimeout(I.minViewTimeReachedTimeoutId), (I.isRunning = !1);
            }),
            (this.id = (0, o.Z)()),
            (this.adDecisionData = n),
            (this.questContent = t),
            (this.questContentPosition = l),
            (this.minViewTimeSeconds = g),
            (this.minViewportPercentage = y),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = i),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = d);
    }
}
let I = (e, t) => {
        let n = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(n, '_').concat(t);
    },
    S = (e) => {
        let t = Array.isArray(e) ? null : (0, u.uk)(e),
            n = (0, l.Z)(t);
        return t !== n;
    },
    T = i.createContext(void 0);
function N() {
    let e = i.useContext(T);
    return null == e ? void 0 : e.current;
}
function A() {
    var e;
    return null === (e = N()) || void 0 === e ? void 0 : e.getId();
}
function C(e) {
    let { visible: t, visibleChanged: n, reference: o, focused: a, focusedChanged: s, impression: l } = e,
        c = S(e.questOrQuests),
        u = (0, d.KZ)(e.questContent);
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
                    ((l.current = new O({
                        adDecisionData: u,
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: c,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds
                    })),
                    l.current.start());
        }, [a, t, l, s, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, c, e.minViewTimeSeconds, u]),
        (0, r.jsx)(T.Provider, {
            value: l,
            children: e.children(o, l)
        })
    );
}
