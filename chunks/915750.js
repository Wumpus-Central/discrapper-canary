r.d(n, {
    B5: function () {
        return I;
    },
    PI: function () {
        return E;
    },
    WD: function () {
        return y;
    },
    aM: function () {
        return S;
    },
    ui: function () {
        return A;
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
    f = r(882198),
    _ = r(5881),
    h = r(981631);
function p(e, n, r) {
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
let m = 60,
    g = 1,
    E = 0.5;
class v {
    getId() {
        return this.id;
    }
    constructor({ questOrQuests: e, questContent: n, triggeredByStatusChange: r, trackGuildAndChannelMetadata: i, questContentPosition: a, questContentRowIndex: s, minViewTimeSeconds: u = g }) {
        var I = this;
        p(this, 'id', void 0),
            p(this, 'quests', void 0),
            p(this, 'questContent', void 0),
            p(this, 'triggeredByStatusChange', void 0),
            p(this, 'trackGuildAndChannelMetadata', void 0),
            p(this, 'questContentPosition', void 0),
            p(this, 'questContentRowIndex', void 0),
            p(this, 'heartbeatTimeoutId', void 0),
            p(this, 'lastBeatTime', void 0),
            p(this, 'minViewTimeReachedTimeoutId', void 0),
            p(this, 'minViewTimeSeconds', void 0),
            p(this, 'minViewportPercentage', void 0),
            p(this, 'isRunning', !1),
            p(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, _.T)().info(
                        ''
                            .concat(e.config.messages.questName, ' Quest viewed for at least ')
                            .concat(this.minViewTimeSeconds, 's at ')
                            .concat((0, d._b)(this.questContent)),
                        { impressionId: this.id }
                    ),
                        (0, d.dA)({
                            questId: e.id,
                            event: h.rMx.QUEST_CONTENT_VIEWED,
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
            p(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                I.quests.forEach((n) => {
                    if (null != I.lastBeatTime) {
                        let r = Math.round(Date.now() - I.lastBeatTime);
                        (0, _.T)().info(
                            ''
                                .concat(n.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(r, 'ms since last heartbeat'),
                            { impressionId: I.id }
                        ),
                            (0, d.dA)({
                                questId: n.id,
                                event: h.rMx.QUEST_CONTENT_VIEW_TIME,
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
            p(this, 'commonProperties', (e) => ({
                impression_id: this.id,
                quest_status: (0, d.uk)(e),
                ...(0, d.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
            })),
            p(this, 'clone', (e) => {
                let { triggeredByStatusChange: n } = e;
                return (
                    this.stop(),
                    new v({
                        questContent: this.questContent,
                        questOrQuests: this.quests,
                        questContentRowIndex: this.questContentRowIndex,
                        questContentPosition: this.questContentPosition,
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        triggeredByStatusChange: n
                    })
                );
            }),
            p(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * m)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, _.T)().info(''.concat(e.config.messages.questName, ' Quest became visible at ').concat((0, d._b)(this.questContent)), { impressionId: this.id }),
                            (0, d.dA)({
                                questId: e.id,
                                event: h.rMx.QUEST_CONTENT_LOADED,
                                properties: {
                                    triggered_by_status_change: this.triggeredByStatusChange,
                                    ...this.commonProperties(e)
                                },
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                            });
                    }),
                    (0, f.a)('QuestImpressionTracker') &&
                        c.Z.increment({
                            name: l.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, d._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            p(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && I.beat(!0), (I.lastBeatTime = void 0), clearInterval(I.heartbeatTimeoutId), clearTimeout(I.minViewTimeReachedTimeoutId), (I.isRunning = !1);
            }),
            (this.id = (0, o.Z)()),
            (this.questContent = n),
            (this.questContentPosition = a),
            (this.minViewTimeSeconds = u),
            (this.minViewportPercentage = E),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = i),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = s);
    }
}
let I = (e, n) => {
        let r = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(r, '_').concat(n);
    },
    T = (e) => {
        let n = Array.isArray(e) ? null : (0, d.uk)(e),
            r = (0, u.Z)(n);
        return n !== r;
    },
    b = s.createContext(void 0);
function y() {
    let e = s.useContext(b);
    return null == e ? void 0 : e.current;
}
function S() {
    var e;
    return null === (e = y()) || void 0 === e ? void 0 : e.getId();
}
function A(e) {
    let { visible: n, visibleChanged: r, reference: i, focused: o, focusedChanged: l, impression: u } = e,
        c = T(e.questOrQuests);
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
                    ((u.current = new v({
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
        (0, a.jsx)(b.Provider, {
            value: u,
            children: e.children(i, u)
        })
    );
}
