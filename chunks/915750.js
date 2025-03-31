n.d(t, {
    B5: () => O,
    PI: () => v,
    WD: () => T,
    aM: () => A,
    ui: () => N
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
let E = 60,
    b = 1,
    v = 0.5;
class y {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    constructor({ questOrQuests: e, questContent: t, questDecisionId: n, triggeredByStatusChange: r, trackGuildAndChannelMetadata: i, questContentPosition: l, questContentRowIndex: d, minViewTimeSeconds: f = b }) {
        var O = this;
        m(this, 'id', void 0),
            m(this, 'quests', void 0),
            m(this, 'questContent', void 0),
            m(this, 'triggeredByStatusChange', void 0),
            m(this, 'trackGuildAndChannelMetadata', void 0),
            m(this, 'questContentPosition', void 0),
            m(this, 'questContentRowIndex', void 0),
            m(this, 'questDecisionId', void 0),
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
                    ),
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
                            shouldExtendSession: s.F.DESKTOP_DELIVERY.has(this.questContent) || s.F.MOBILE_DELIVERY.has(this.questContent)
                        });
                });
            }),
            m(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                O.quests.forEach((t) => {
                    if (null != O.lastBeatTime) {
                        let n = Math.round(Date.now() - O.lastBeatTime);
                        (0, p.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: O.id }
                        ),
                            (0, u.dA)({
                                questId: t.id,
                                event: h.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: g(
                                    {
                                        is_termination_beat: e,
                                        viewed_time_ms: n,
                                        triggered_by_status_change: O.triggeredByStatusChange
                                    },
                                    O.commonProperties(t)
                                ),
                                trackGuildAndChannelMetadata: O.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (O.lastBeatTime = Date.now());
            }),
            m(this, 'commonProperties', (e) =>
                g(
                    {
                        impression_id: this.id,
                        decision_id: this.questDecisionId,
                        quest_status: (0, u.uk)(e)
                    },
                    (0, u.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
                )
            ),
            m(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new y({
                        questContent: this.questContent,
                        questDecisionId: this.questDecisionId,
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
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * E)),
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
                            name: a.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, u._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            m(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && O.beat(!0), (O.lastBeatTime = void 0), clearInterval(O.heartbeatTimeoutId), clearTimeout(O.minViewTimeReachedTimeoutId), (O.isRunning = !1);
            }),
            (this.id = (0, o.Z)()),
            (this.questDecisionId = n),
            (this.questContent = t),
            (this.questContentPosition = l),
            (this.minViewTimeSeconds = f),
            (this.minViewportPercentage = v),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = i),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = d);
    }
}
let O = (e, t) => {
        let n = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(n, '_').concat(t);
    },
    I = (e) => {
        let t = Array.isArray(e) ? null : (0, u.uk)(e),
            n = (0, l.Z)(t);
        return t !== n;
    },
    S = i.createContext(void 0);
function T() {
    let e = i.useContext(S);
    return null == e ? void 0 : e.current;
}
function A() {
    var e;
    return null === (e = T()) || void 0 === e ? void 0 : e.getId();
}
function N(e) {
    let { visible: t, visibleChanged: n, reference: o, focused: a, focusedChanged: s, impression: l } = e,
        c = I(e.questOrQuests),
        u = (0, d.zP)((0, f.Zp)(e.questContent));
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
                    ((l.current = new y({
                        questDecisionId: u,
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
        (0, r.jsx)(S.Provider, {
            value: l,
            children: e.children(o, l)
        })
    );
}
