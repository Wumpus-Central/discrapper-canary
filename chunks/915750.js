n.d(t, {
    B5: () => D,
    PI: () => C,
    WD: () => M,
    aM: () => k,
    ui: () => j
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(255367),
    i = n(73800),
    a = n(772848),
    o = n(286379),
    s = n(442837),
    l = n(493773),
    c = n(110924),
    u = n(516796),
    d = n(186102),
    _ = n(797614),
    f = n(358085),
    p = n(617136),
    h = n(113434),
    m = n(569984),
    g = n(918701),
    E = n(882198),
    b = n(5881),
    y = n(46140),
    O = n(981631);
function v(e, t, n) {
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
function I(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let A = 60,
    N = 1,
    C = 0.5,
    R = new Set();
function P(e, t) {
    return ''.concat(e, '_').concat(t);
}
class w {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    constructor({ questOrQuests: e, questContent: t, adDecisionData: n, triggeredByStatusChange: r, trackGuildAndChannelMetadata: i, questContentPosition: s, questContentRowIndex: l, minViewTimeSeconds: c = N, isQuestEnrollmentBlocked: h }) {
        var m = this;
        v(this, 'id', void 0),
            v(this, 'quests', void 0),
            v(this, 'questContent', void 0),
            v(this, 'triggeredByStatusChange', void 0),
            v(this, 'trackGuildAndChannelMetadata', void 0),
            v(this, 'questContentPosition', void 0),
            v(this, 'questContentRowIndex', void 0),
            v(this, 'adDecisionData', void 0),
            v(this, 'heartbeatTimeoutId', void 0),
            v(this, 'lastBeatTime', void 0),
            v(this, 'minViewTimeReachedTimeoutId', void 0),
            v(this, 'minViewTimeSeconds', void 0),
            v(this, 'minViewportPercentage', void 0),
            v(this, 'isQuestEnrollmentBlocked', void 0),
            v(this, 'isRunning', !1),
            v(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, b.T)().info(
                        ''
                            .concat(e.config.messages.questName, ' Quest viewed for at least ')
                            .concat(this.minViewTimeSeconds, 's at ')
                            .concat((0, p._b)(this.questContent)),
                        { impressionId: this.id }
                    );
                    let t = !1,
                        n = (0, g.Zp)(this.questContent);
                    if (null != n) {
                        let r = P(e.id, n);
                        (t = !R.has(r) && (0, g.VB)(this.questContent)) && R.add(r);
                    }
                    let r = I(
                            {
                                min_view_time_seconds: this.minViewTimeSeconds,
                                min_viewport_percentage: this.minViewportPercentage,
                                triggered_by_status_change: this.triggeredByStatusChange
                            },
                            (0, d.Z)(),
                            this.commonProperties(e)
                        ),
                        i = (0, u.S)();
                    null != i && ((0, f.isIOS)() ? (r.apple_advertising_id = i.advertisingId) : (0, f.isAndroid)() && (r.android_advertising_id = i.advertisingId)),
                        (0, p.dA)({
                            questId: e.id,
                            event: O.rMx.QUEST_CONTENT_VIEWED,
                            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                            properties: r,
                            shouldExtendSession: t
                        });
                });
            }),
            v(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                m.quests.forEach((t) => {
                    if (null != m.lastBeatTime) {
                        let n = Math.round(Date.now() - m.lastBeatTime);
                        (0, b.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: m.id }
                        ),
                            (0, p.dA)({
                                questId: t.id,
                                event: O.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: I(
                                    {
                                        is_termination_beat: e,
                                        viewed_time_ms: n,
                                        triggered_by_status_change: m.triggeredByStatusChange
                                    },
                                    m.commonProperties(t)
                                ),
                                trackGuildAndChannelMetadata: m.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (m.lastBeatTime = Date.now());
            }),
            v(this, 'commonProperties', (e) =>
                I(
                    S(I({ impression_id: this.id }, this.adDecisionData), {
                        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
                        quest_status: (0, p.uk)(e)
                    }),
                    (0, p.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
                )
            ),
            v(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new w({
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
            v(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * A)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, b.T)().info(''.concat(e.config.messages.questName, ' Quest became visible at ').concat((0, p._b)(this.questContent)), { impressionId: this.id }),
                            (0, p.dA)({
                                questId: e.id,
                                event: O.rMx.QUEST_CONTENT_LOADED,
                                properties: I({ triggered_by_status_change: this.triggeredByStatusChange }, this.commonProperties(e)),
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                            });
                    }),
                    (0, E.a)('QuestImpressionTracker') &&
                        _.Z.increment({
                            name: o.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, p._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            v(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && m.beat(!0), (m.lastBeatTime = void 0), clearInterval(m.heartbeatTimeoutId), clearTimeout(m.minViewTimeReachedTimeoutId), (m.isRunning = !1);
            }),
            (this.id = (0, a.Z)()),
            (this.adDecisionData = null != n ? n : y.Jp),
            (this.questContent = t),
            (this.questContentPosition = s),
            (this.minViewTimeSeconds = c),
            (this.minViewportPercentage = C),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = i),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = l),
            (this.isQuestEnrollmentBlocked = h);
    }
}
let D = (e, t) => {
        let n = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(n, '_').concat(t);
    },
    L = (e) => {
        let t = Array.isArray(e) ? null : (0, p.uk)(e),
            n = (0, c.Z)(t);
        return t !== n;
    },
    x = i.createContext(void 0);
function M() {
    let e = i.useContext(x);
    return null == e ? void 0 : e.current;
}
function k() {
    var e;
    return null == (e = M()) ? void 0 : e.getId();
}
function j(e) {
    let { visible: t, visibleChanged: n, focused: a, reference: o, focusedChanged: c } = e,
        u = L(e.questOrQuests),
        d = (0, h.KZ)(e.questContent),
        _ = i.useRef(null),
        f = (0, s.e7)([m.Z], () => null != m.Z.questEnrollmentBlockedUntil, []);
    return (
        (0, l.ZP)(() => () => {
            null != _.current && _.current.stop();
        }),
        i.useEffect(() => {
            let r = a && t,
                i = (n || c || u) && r,
                o = ((n || c) && !r) || u;
            (i || o) && null != _.current && _.current.stop(),
                i &&
                    ((_.current = new w({
                        adDecisionData: d,
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: u,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds,
                        isQuestEnrollmentBlocked: f
                    })),
                    _.current.start());
        }, [a, t, c, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, u, e.minViewTimeSeconds, d, f]),
        (0, r.jsx)(x.Provider, {
            value: _,
            children: e.children(o, _)
        })
    );
}
