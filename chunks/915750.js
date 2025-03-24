n.d(t, {
    B5: () => y,
    PI: () => b,
    WD: () => S,
    aM: () => T,
    ui: () => N
}),
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
let g = 60,
    E = 1,
    b = 0.5;
class v {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    constructor({ questOrQuests: e, questContent: t, questDecisionId: n, triggeredByStatusChange: r, trackGuildAndChannelMetadata: i, questContentPosition: s, questContentRowIndex: u, minViewTimeSeconds: d = E }) {
        var y = this;
        h(this, 'id', void 0),
            h(this, 'quests', void 0),
            h(this, 'questContent', void 0),
            h(this, 'triggeredByStatusChange', void 0),
            h(this, 'trackGuildAndChannelMetadata', void 0),
            h(this, 'questContentPosition', void 0),
            h(this, 'questContentRowIndex', void 0),
            h(this, 'questDecisionId', void 0),
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
                    ),
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
                            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                        });
                });
            }),
            h(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                y.quests.forEach((t) => {
                    if (null != y.lastBeatTime) {
                        let n = Math.round(Date.now() - y.lastBeatTime);
                        (0, _.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: y.id }
                        ),
                            (0, c.dA)({
                                questId: t.id,
                                event: p.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: m(
                                    {
                                        is_termination_beat: e,
                                        viewed_time_ms: n,
                                        triggered_by_status_change: y.triggeredByStatusChange
                                    },
                                    y.commonProperties(t)
                                ),
                                trackGuildAndChannelMetadata: y.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (y.lastBeatTime = Date.now());
            }),
            h(this, 'commonProperties', (e) =>
                m(
                    {
                        impression_id: this.id,
                        decision_id: this.questDecisionId,
                        quest_status: (0, c.uk)(e)
                    },
                    (0, c.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
                )
            ),
            h(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new v({
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
            h(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * g)),
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
                e && y.beat(!0), (y.lastBeatTime = void 0), clearInterval(y.heartbeatTimeoutId), clearTimeout(y.minViewTimeReachedTimeoutId), (y.isRunning = !1);
            }),
            (this.id = (0, o.Z)()),
            (this.questDecisionId = n),
            (this.questContent = t),
            (this.questContentPosition = s),
            (this.minViewTimeSeconds = d),
            (this.minViewportPercentage = b),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = i),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = u);
    }
}
let y = (e, t) => {
        let n = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(n, '_').concat(t);
    },
    O = (e) => {
        let t = Array.isArray(e) ? null : (0, c.uk)(e),
            n = (0, s.Z)(t);
        return t !== n;
    },
    I = i.createContext(void 0);
function S() {
    let e = i.useContext(I);
    return null == e ? void 0 : e.current;
}
function T() {
    var e;
    return null === (e = S()) || void 0 === e ? void 0 : e.getId();
}
function N(e) {
    let { visible: t, visibleChanged: n, reference: o, focused: a, focusedChanged: s, impression: l } = e,
        c = O(e.questOrQuests),
        f = (0, u.zP)((0, d.Zp)(e.questContent));
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
                    ((l.current = new v({
                        questDecisionId: f,
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: c,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds
                    })),
                    l.current.start());
        }, [a, t, l, s, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, c, e.minViewTimeSeconds, f]),
        (0, r.jsx)(I.Provider, {
            value: l,
            children: e.children(o, l)
        })
    );
}
