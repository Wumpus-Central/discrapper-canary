n.d(t, {
    B5: () => C,
    PI: () => S,
    WD: () => w,
    aM: () => D,
    ui: () => L
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(200651),
    i = n(192379),
    o = n(772848),
    a = n(286379),
    s = n(442837),
    l = n(493773),
    c = n(110924),
    u = n(797614),
    d = n(617136),
    f = n(113434),
    _ = n(569984),
    p = n(918701),
    h = n(882198),
    m = n(5881),
    g = n(981631);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
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
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let v = 60,
    I = 1,
    S = 0.5,
    T = new Set();
function A(e, t) {
    return ''.concat(e, '_').concat(t);
}
class N {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    constructor({ questOrQuests: e, questContent: t, adDecisionData: n, triggeredByStatusChange: r, trackGuildAndChannelMetadata: i, questContentPosition: s, questContentRowIndex: l, minViewTimeSeconds: c = I, isQuestEnrollmentBlocked: f }) {
        var _ = this;
        E(this, 'id', void 0),
            E(this, 'quests', void 0),
            E(this, 'questContent', void 0),
            E(this, 'triggeredByStatusChange', void 0),
            E(this, 'trackGuildAndChannelMetadata', void 0),
            E(this, 'questContentPosition', void 0),
            E(this, 'questContentRowIndex', void 0),
            E(this, 'adDecisionData', void 0),
            E(this, 'heartbeatTimeoutId', void 0),
            E(this, 'lastBeatTime', void 0),
            E(this, 'minViewTimeReachedTimeoutId', void 0),
            E(this, 'minViewTimeSeconds', void 0),
            E(this, 'minViewportPercentage', void 0),
            E(this, 'isQuestEnrollmentBlocked', void 0),
            E(this, 'isRunning', !1),
            E(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, m.T)().info(
                        ''
                            .concat(e.config.messages.questName, ' Quest viewed for at least ')
                            .concat(this.minViewTimeSeconds, 's at ')
                            .concat((0, d._b)(this.questContent)),
                        { impressionId: this.id }
                    );
                    let t = !1,
                        n = (0, p.Zp)(this.questContent);
                    if (null != n) {
                        let r = A(e.id, n);
                        (t = !T.has(r) && (0, p.VB)(this.questContent)) && T.add(r);
                    }
                    (0, d.dA)({
                        questId: e.id,
                        event: g.rMx.QUEST_CONTENT_VIEWED,
                        properties: b(
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
            E(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                _.quests.forEach((t) => {
                    if (null != _.lastBeatTime) {
                        let n = Math.round(Date.now() - _.lastBeatTime);
                        (0, m.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: _.id }
                        ),
                            (0, d.dA)({
                                questId: t.id,
                                event: g.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: b(
                                    {
                                        is_termination_beat: e,
                                        viewed_time_ms: n,
                                        triggered_by_status_change: _.triggeredByStatusChange
                                    },
                                    _.commonProperties(t)
                                ),
                                trackGuildAndChannelMetadata: _.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (_.lastBeatTime = Date.now());
            }),
            E(this, 'commonProperties', (e) =>
                b(
                    O(b({ impression_id: this.id }, (0, p.eE)(this.adDecisionData)), {
                        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
                        quest_status: (0, d.uk)(e)
                    }),
                    (0, d.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
                )
            ),
            E(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new N({
                        questContent: this.questContent,
                        adDecisionData: this.adDecisionData,
                        questOrQuests: this.quests,
                        questContentRowIndex: this.questContentRowIndex,
                        questContentPosition: this.questContentPosition,
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        triggeredByStatusChange: t,
                        isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked
                    })
                );
            }),
            E(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * v)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, m.T)().info(''.concat(e.config.messages.questName, ' Quest became visible at ').concat((0, d._b)(this.questContent)), { impressionId: this.id }),
                            (0, d.dA)({
                                questId: e.id,
                                event: g.rMx.QUEST_CONTENT_LOADED,
                                properties: b({ triggered_by_status_change: this.triggeredByStatusChange }, this.commonProperties(e)),
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                            });
                    }),
                    (0, h.a)('QuestImpressionTracker') &&
                        u.Z.increment({
                            name: a.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, d._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            E(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && _.beat(!0), (_.lastBeatTime = void 0), clearInterval(_.heartbeatTimeoutId), clearTimeout(_.minViewTimeReachedTimeoutId), (_.isRunning = !1);
            }),
            (this.id = (0, o.Z)()),
            (this.adDecisionData = n),
            (this.questContent = t),
            (this.questContentPosition = s),
            (this.minViewTimeSeconds = c),
            (this.minViewportPercentage = S),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = i),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = l),
            (this.isQuestEnrollmentBlocked = f);
    }
}
let C = (e, t) => {
        let n = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(n, '_').concat(t);
    },
    R = (e) => {
        let t = Array.isArray(e) ? null : (0, d.uk)(e),
            n = (0, c.Z)(t);
        return t !== n;
    },
    P = i.createContext(void 0);
function w() {
    let e = i.useContext(P);
    return null == e ? void 0 : e.current;
}
function D() {
    var e;
    return null == (e = w()) ? void 0 : e.getId();
}
function L(e) {
    let { visible: t, visibleChanged: n, focused: o, reference: a, focusedChanged: c } = e,
        u = R(e.questOrQuests),
        d = (0, f.KZ)(e.questContent),
        p = i.useRef(null),
        h = (0, s.e7)([_.Z], () => null != _.Z.questEnrollmentBlockedUntil, []);
    return (
        (0, l.ZP)(() => () => {
            null != p.current && p.current.stop();
        }),
        i.useEffect(() => {
            let r = o && t,
                i = (n || c || u) && r,
                a = ((n || c) && !r) || u;
            (i || a) && null != p.current && p.current.stop(),
                i &&
                    ((p.current = new N({
                        adDecisionData: d,
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: u,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds,
                        isQuestEnrollmentBlocked: h
                    })),
                    p.current.start());
        }, [o, t, c, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, u, e.minViewTimeSeconds, d, h]),
        (0, r.jsx)(P.Provider, {
            value: p,
            children: e.children(a, p)
        })
    );
}
