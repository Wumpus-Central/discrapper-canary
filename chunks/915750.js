r.d(n, {
    B5: function () {
        return b;
    },
    PI: function () {
        return I;
    },
    WD: function () {
        return A;
    },
    aM: function () {
        return N;
    },
    ui: function () {
        return C;
    }
});
var i = r(411104);
var a = r(200651),
    s = r(192379),
    o = r(772848),
    l = r(286379),
    u = r(110924),
    c = r(797614),
    d = r(617136),
    f = r(113434),
    _ = r(918701),
    h = r(882198),
    p = r(5881),
    m = r(981631);
function g(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let E = 60,
    v = 1,
    I = 0.5;
class T {
    getId() {
        return this.id;
    }
    constructor({ questOrQuests: e, questContent: n, questDecisionId: r, triggeredByStatusChange: i, trackGuildAndChannelMetadata: a, questContentPosition: s, questContentRowIndex: u, minViewTimeSeconds: f = v }) {
        var _ = this;
        g(this, 'id', void 0),
            g(this, 'quests', void 0),
            g(this, 'questContent', void 0),
            g(this, 'triggeredByStatusChange', void 0),
            g(this, 'trackGuildAndChannelMetadata', void 0),
            g(this, 'questContentPosition', void 0),
            g(this, 'questContentRowIndex', void 0),
            g(this, 'questDecisionId', void 0),
            g(this, 'heartbeatTimeoutId', void 0),
            g(this, 'lastBeatTime', void 0),
            g(this, 'minViewTimeReachedTimeoutId', void 0),
            g(this, 'minViewTimeSeconds', void 0),
            g(this, 'minViewportPercentage', void 0),
            g(this, 'isRunning', !1),
            g(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, p.T)().info(
                        ''
                            .concat(e.config.messages.questName, ' Quest viewed for at least ')
                            .concat(this.minViewTimeSeconds, 's at ')
                            .concat((0, d._b)(this.questContent)),
                        { impressionId: this.id }
                    ),
                        (0, d.dA)({
                            questId: e.id,
                            event: m.rMx.QUEST_CONTENT_VIEWED,
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
            g(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                _.quests.forEach((n) => {
                    if (null != _.lastBeatTime) {
                        let r = Math.round(Date.now() - _.lastBeatTime);
                        (0, p.T)().info(
                            ''
                                .concat(n.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(r, 'ms since last heartbeat'),
                            { impressionId: _.id }
                        ),
                            (0, d.dA)({
                                questId: n.id,
                                event: m.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: {
                                    is_termination_beat: e,
                                    viewed_time_ms: r,
                                    triggered_by_status_change: _.triggeredByStatusChange,
                                    ..._.commonProperties(n)
                                },
                                trackGuildAndChannelMetadata: _.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (_.lastBeatTime = Date.now());
            }),
            g(this, 'commonProperties', (e) => ({
                impression_id: this.id,
                decision_id: this.questDecisionId,
                quest_status: (0, d.uk)(e),
                ...(0, d.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
            })),
            g(this, 'clone', (e) => {
                let { triggeredByStatusChange: n } = e;
                return (
                    this.stop(),
                    new T({
                        questContent: this.questContent,
                        questDecisionId: this.questDecisionId,
                        questOrQuests: this.quests,
                        questContentRowIndex: this.questContentRowIndex,
                        questContentPosition: this.questContentPosition,
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        triggeredByStatusChange: n
                    })
                );
            }),
            g(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * E)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, p.T)().info(''.concat(e.config.messages.questName, ' Quest became visible at ').concat((0, d._b)(this.questContent)), { impressionId: this.id }),
                            (0, d.dA)({
                                questId: e.id,
                                event: m.rMx.QUEST_CONTENT_LOADED,
                                properties: {
                                    triggered_by_status_change: this.triggeredByStatusChange,
                                    ...this.commonProperties(e)
                                },
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                            });
                    }),
                    (0, h.a)('QuestImpressionTracker') &&
                        c.Z.increment({
                            name: l.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, d._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            g(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && _.beat(!0), (_.lastBeatTime = void 0), clearInterval(_.heartbeatTimeoutId), clearTimeout(_.minViewTimeReachedTimeoutId), (_.isRunning = !1);
            }),
            (this.id = (0, o.Z)()),
            (this.questDecisionId = r),
            (this.questContent = n),
            (this.questContentPosition = s),
            (this.minViewTimeSeconds = f),
            (this.minViewportPercentage = I),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = a),
            (this.triggeredByStatusChange = i),
            (this.questContentRowIndex = u);
    }
}
let b = (e, n) => {
        let r = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(r, '_').concat(n);
    },
    y = (e) => {
        let n = Array.isArray(e) ? null : (0, d.uk)(e),
            r = (0, u.Z)(n);
        return n !== r;
    },
    S = s.createContext(void 0);
function A() {
    let e = s.useContext(S);
    return null == e ? void 0 : e.current;
}
function N() {
    var e;
    return null === (e = A()) || void 0 === e ? void 0 : e.getId();
}
function C(e) {
    let { visible: n, visibleChanged: r, reference: i, focused: o, focusedChanged: l, impression: u } = e,
        c = y(e.questOrQuests),
        d = (0, f.zP)((0, _.Zp)(e.questContent));
    return (
        s.useEffect(
            () => () => {
                null != u.current && u.current.stop();
            },
            [u]
        ),
        s.useEffect(() => {
            let i = o && n,
                a = (r || l || c) && i,
                s = ((r || l) && !i) || c;
            (a || s) && null != u.current && u.current.stop(),
                a &&
                    ((u.current = new T({
                        questDecisionId: d,
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: c,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds
                    })),
                    u.current.start());
        }, [o, n, u, l, r, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, c, e.minViewTimeSeconds, d]),
        (0, a.jsx)(S.Provider, {
            value: u,
            children: e.children(i, u)
        })
    );
}
