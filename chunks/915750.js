r.d(n, {
    B5: function () {
        return v;
    },
    PI: function () {
        return g;
    },
    WD: function () {
        return b;
    },
    ui: function () {
        return y;
    }
});
var i = r(200651),
    a = r(192379),
    s = r(772848),
    o = r(286379),
    l = r(110924),
    u = r(797614),
    c = r(617136),
    d = r(882198),
    f = r(5881),
    _ = r(981631);
function h(e, n, r) {
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
let p = 60,
    m = 1,
    g = 0.5;
class E {
    getId() {
        return this.id;
    }
    constructor({ questOrQuests: e, questContent: n, triggeredByStatusChange: r, trackGuildAndChannelMetadata: i, questContentPosition: a, questContentRowIndex: l, minViewTimeSeconds: v = m }) {
        var I = this;
        h(this, 'id', void 0),
            h(this, 'quests', void 0),
            h(this, 'questContent', void 0),
            h(this, 'triggeredByStatusChange', void 0),
            h(this, 'trackGuildAndChannelMetadata', void 0),
            h(this, 'questContentPosition', void 0),
            h(this, 'questContentRowIndex', void 0),
            h(this, 'heartbeatTimeoutId', void 0),
            h(this, 'lastBeatTime', void 0),
            h(this, 'minViewTimeReachedTimeoutId', void 0),
            h(this, 'minViewTimeSeconds', void 0),
            h(this, 'minViewportPercentage', void 0),
            h(this, 'isRunning', !1),
            h(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, f.T)().info(''.concat(e.config.messages.questName, ' Quest viewed for at least ').concat(this.minViewTimeSeconds, 's'), { impressionId: this.id }),
                        (0, c.dA)({
                            questId: e.id,
                            event: _.rMx.QUEST_CONTENT_VIEWED,
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
                I.quests.forEach((n) => {
                    if (null != I.lastBeatTime) {
                        let r = Math.round(Date.now() - I.lastBeatTime);
                        (0, f.T)().info(
                            ''
                                .concat(n.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(r, 'ms since last heartbeat'),
                            { impressionId: I.id }
                        ),
                            (0, c.dA)({
                                questId: n.id,
                                event: _.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: {
                                    is_termination_beat: e,
                                    viewed_time_ms: r,
                                    triggered_by_status_change: I.triggeredByStatusChange,
                                    ...I.commonProperties(n)
                                },
                                trackGuildAndChannelMetadata: I.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (I.lastBeatTime = Date.now());
            }),
            h(this, 'commonProperties', (e) => ({
                impression_id: this.id,
                quest_status: (0, c.uk)(e),
                ...(0, c.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
            })),
            h(this, 'clone', (e) => {
                let { triggeredByStatusChange: n } = e;
                return (
                    this.stop(),
                    new E({
                        questContent: this.questContent,
                        questOrQuests: this.quests,
                        questContentRowIndex: this.questContentRowIndex,
                        questContentPosition: this.questContentPosition,
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        triggeredByStatusChange: n
                    })
                );
            }),
            h(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * p)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, f.T)().info(''.concat(e.config.messages.questName, ' Quest became visible'), { impressionId: this.id }),
                            (0, c.dA)({
                                questId: e.id,
                                event: _.rMx.QUEST_CONTENT_LOADED,
                                properties: {
                                    triggered_by_status_change: this.triggeredByStatusChange,
                                    ...this.commonProperties(e)
                                },
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                            });
                    }),
                    (0, d.a)('QuestImpressionTracker') &&
                        u.Z.increment({
                            name: o.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, c._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            h(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && I.beat(!0), (I.lastBeatTime = void 0), clearInterval(I.heartbeatTimeoutId), clearTimeout(I.minViewTimeReachedTimeoutId), (I.isRunning = !1);
            }),
            (this.id = (0, s.Z)()),
            (this.questContent = n),
            (this.questContentPosition = a),
            (this.minViewTimeSeconds = v),
            (this.minViewportPercentage = g),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = i),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = l);
    }
}
let v = (e, n) => {
        let r = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(r, '_').concat(n);
    },
    I = (e) => {
        let n = Array.isArray(e) ? null : (0, c.uk)(e),
            r = (0, l.Z)(n);
        return n !== r;
    },
    T = a.createContext(void 0);
function b() {
    let e = a.useContext(T);
    return void 0 === e && console.log('useQuestImpression called outside of QuestContentImpressionTracker'), null == e ? void 0 : e.current;
}
function y(e) {
    let { visible: n, visibleChanged: r, reference: s, focused: o, focusedChanged: l, impression: u } = e,
        c = I(e.questOrQuests);
    return (
        a.useEffect(
            () => () => {
                null != u.current && u.current.stop();
            },
            [u]
        ),
        a.useEffect(() => {
            let i = o && n,
                a = (r || l || c) && i,
                s = ((r || l) && !i) || c;
            (a || s) && null != u.current && u.current.stop(),
                a &&
                    ((u.current = new E({
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: c,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds
                    })),
                    u.current.start());
        }, [o, n, u, l, r, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, c, e.minViewTimeSeconds]),
        (0, i.jsx)(T.Provider, {
            value: u,
            children: e.children(s, u)
        })
    );
}
