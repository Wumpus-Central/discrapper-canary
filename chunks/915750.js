n.d(t, {
    B5: () => y,
    PI: () => E,
    WD: () => T,
    aM: () => S,
    ui: () => A
}),
    n(411104);
var i = n(200651),
    r = n(192379),
    a = n(772848),
    s = n(286379),
    o = n(110924),
    l = n(797614),
    u = n(617136),
    c = n(113434),
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
let m = 60,
    g = 1,
    E = 0.5;
class v {
    getId() {
        return this.id;
    }
    constructor({ questOrQuests: e, questContent: t, questDecisionId: n, triggeredByStatusChange: i, trackGuildAndChannelMetadata: r, questContentPosition: o, questContentRowIndex: c, minViewTimeSeconds: d = g }) {
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
                            .concat((0, u._b)(this.questContent)),
                        { impressionId: this.id }
                    ),
                        (0, u.dA)({
                            questId: e.id,
                            event: p.rMx.QUEST_CONTENT_VIEWED,
                            properties: {
                                min_view_time_seconds: this.minViewTimeSeconds,
                                min_viewport_percentage: this.minViewportPercentage,
                                triggered_by_status_change: this.triggeredByStatusChange,
                                ...this.commonProperties(e)
                            },
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
                            (0, u.dA)({
                                questId: t.id,
                                event: p.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: {
                                    is_termination_beat: e,
                                    viewed_time_ms: n,
                                    triggered_by_status_change: y.triggeredByStatusChange,
                                    ...y.commonProperties(t)
                                },
                                trackGuildAndChannelMetadata: y.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (y.lastBeatTime = Date.now());
            }),
            h(this, 'commonProperties', (e) => ({
                impression_id: this.id,
                decision_id: this.questDecisionId,
                quest_status: (0, u.uk)(e),
                ...(0, u.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
            })),
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
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * m)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, _.T)().info(''.concat(e.config.messages.questName, ' Quest became visible at ').concat((0, u._b)(this.questContent)), { impressionId: this.id }),
                            (0, u.dA)({
                                questId: e.id,
                                event: p.rMx.QUEST_CONTENT_LOADED,
                                properties: {
                                    triggered_by_status_change: this.triggeredByStatusChange,
                                    ...this.commonProperties(e)
                                },
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                            });
                    }),
                    (0, f.a)('QuestImpressionTracker') &&
                        l.Z.increment({
                            name: s.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, u._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            h(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && y.beat(!0), (y.lastBeatTime = void 0), clearInterval(y.heartbeatTimeoutId), clearTimeout(y.minViewTimeReachedTimeoutId), (y.isRunning = !1);
            }),
            (this.id = (0, a.Z)()),
            (this.questDecisionId = n),
            (this.questContent = t),
            (this.questContentPosition = o),
            (this.minViewTimeSeconds = d),
            (this.minViewportPercentage = E),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = r),
            (this.triggeredByStatusChange = i),
            (this.questContentRowIndex = c);
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
    I = (e) => {
        let t = Array.isArray(e) ? null : (0, u.uk)(e),
            n = (0, o.Z)(t);
        return t !== n;
    },
    b = r.createContext(void 0);
function T() {
    let e = r.useContext(b);
    return null == e ? void 0 : e.current;
}
function S() {
    var e;
    return null === (e = T()) || void 0 === e ? void 0 : e.getId();
}
function A(e) {
    let { visible: t, visibleChanged: n, reference: a, focused: s, focusedChanged: o, impression: l } = e,
        u = I(e.questOrQuests),
        f = (0, c.zP)((0, d.Zp)(e.questContent));
    return (
        r.useEffect(
            () => () => {
                null != l.current && l.current.stop();
            },
            [l]
        ),
        r.useEffect(() => {
            let i = s && t,
                r = (n || o || u) && i,
                a = ((n || o) && !i) || u;
            (r || a) && null != l.current && l.current.stop(),
                r &&
                    ((l.current = new v({
                        questDecisionId: f,
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: u,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds
                    })),
                    l.current.start());
        }, [s, t, l, o, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, u, e.minViewTimeSeconds, f]),
        (0, i.jsx)(b.Provider, {
            value: l,
            children: e.children(a, l)
        })
    );
}
