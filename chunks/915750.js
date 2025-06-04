n.d(t, {
    B5: () => w,
    PI: () => N,
    WD: () => x,
    aM: () => k,
    ui: () => M
}),
    n(388685),
    n(642613),
    n(415506);
var r = n(255367),
    i = n(73800),
    o = n(772848),
    a = n(286379),
    s = n(442837),
    l = n(493773),
    c = n(110924),
    u = n(516796),
    d = n(797614),
    f = n(358085),
    _ = n(617136),
    p = n(113434),
    h = n(569984),
    m = n(918701),
    g = n(882198),
    E = n(5881),
    b = n(46140),
    y = n(981631);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = 60,
    A = 1,
    N = 0.5,
    C = new Set();
function P(e, t) {
    return ''.concat(e, '_').concat(t);
}
class R {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    constructor({ questOrQuests: e, questContent: t, adDecisionData: n, triggeredByStatusChange: r, trackGuildAndChannelMetadata: i, questContentPosition: s, questContentRowIndex: l, minViewTimeSeconds: c = A, isQuestEnrollmentBlocked: p }) {
        var I = this;
        O(this, 'id', void 0),
            O(this, 'quests', void 0),
            O(this, 'questContent', void 0),
            O(this, 'triggeredByStatusChange', void 0),
            O(this, 'trackGuildAndChannelMetadata', void 0),
            O(this, 'questContentPosition', void 0),
            O(this, 'questContentRowIndex', void 0),
            O(this, 'adDecisionData', void 0),
            O(this, 'heartbeatTimeoutId', void 0),
            O(this, 'lastBeatTime', void 0),
            O(this, 'minViewTimeReachedTimeoutId', void 0),
            O(this, 'minViewTimeSeconds', void 0),
            O(this, 'minViewportPercentage', void 0),
            O(this, 'isQuestEnrollmentBlocked', void 0),
            O(this, 'isRunning', !1),
            O(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, E.T)().info(
                        ''
                            .concat(e.config.messages.questName, ' Quest viewed for at least ')
                            .concat(this.minViewTimeSeconds, 's at ')
                            .concat((0, _._b)(this.questContent)),
                        { impressionId: this.id }
                    );
                    let t = !1,
                        n = (0, m.Zp)(this.questContent);
                    if (null != n) {
                        let r = P(e.id, n);
                        (t = !C.has(r) && (0, m.VB)(this.questContent)) && C.add(r);
                    }
                    let r = v(
                            {
                                min_view_time_seconds: this.minViewTimeSeconds,
                                min_viewport_percentage: this.minViewportPercentage,
                                triggered_by_status_change: this.triggeredByStatusChange,
                                google_advertising_id: h.Z.googleAdvertisingId
                            },
                            this.commonProperties(e)
                        ),
                        i = (0, u.S)();
                    null != i && (0, f.isIOS)() && (r.apple_advertising_id = i.advertisingId),
                        (0, _.dA)({
                            questId: e.id,
                            event: y.rMx.QUEST_CONTENT_VIEWED,
                            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                            properties: r,
                            shouldExtendSession: t
                        });
                });
            }),
            O(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                I.quests.forEach((t) => {
                    if (null != I.lastBeatTime) {
                        let n = Math.round(Date.now() - I.lastBeatTime);
                        (0, E.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: I.id }
                        ),
                            (0, _.dA)({
                                questId: t.id,
                                event: y.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: v(
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
            O(this, 'commonProperties', (e) =>
                v(
                    S(v({ impression_id: this.id }, this.adDecisionData), {
                        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
                        quest_status: (0, _.uk)(e)
                    }),
                    (0, _.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
                )
            ),
            O(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new R({
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
            O(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * T)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, E.T)().info(''.concat(e.config.messages.questName, ' Quest became visible at ').concat((0, _._b)(this.questContent)), { impressionId: this.id }),
                            (0, _.dA)({
                                questId: e.id,
                                event: y.rMx.QUEST_CONTENT_LOADED,
                                properties: v({ triggered_by_status_change: this.triggeredByStatusChange }, this.commonProperties(e)),
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                            });
                    }),
                    (0, g.a)('QuestImpressionTracker') &&
                        d.Z.increment({
                            name: a.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, _._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            O(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && I.beat(!0), (I.lastBeatTime = void 0), clearInterval(I.heartbeatTimeoutId), clearTimeout(I.minViewTimeReachedTimeoutId), (I.isRunning = !1);
            }),
            (this.id = (0, o.Z)()),
            (this.adDecisionData = null != n ? n : b.Jp),
            (this.questContent = t),
            (this.questContentPosition = s),
            (this.minViewTimeSeconds = c),
            (this.minViewportPercentage = N),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = i),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = l),
            (this.isQuestEnrollmentBlocked = p);
    }
}
let w = (e, t) => {
        let n = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(n, '_').concat(t);
    },
    D = (e) => {
        let t = Array.isArray(e) ? null : (0, _.uk)(e),
            n = (0, c.Z)(t);
        return t !== n;
    },
    L = i.createContext(void 0);
function x() {
    let e = i.useContext(L);
    return null == e ? void 0 : e.current;
}
function k() {
    var e;
    return null == (e = x()) ? void 0 : e.getId();
}
function M(e) {
    let { visible: t, visibleChanged: n, focused: o, reference: a, focusedChanged: c } = e,
        u = D(e.questOrQuests),
        d = (0, p.KZ)(e.questContent),
        f = i.useRef(null),
        _ = (0, s.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil, []);
    return (
        (0, l.ZP)(() => () => {
            null != f.current && f.current.stop();
        }),
        i.useEffect(() => {
            let r = o && t,
                i = (n || c || u) && r,
                a = ((n || c) && !r) || u;
            (i || a) && null != f.current && f.current.stop(),
                i &&
                    ((f.current = new R({
                        adDecisionData: d,
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: u,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds,
                        isQuestEnrollmentBlocked: _
                    })),
                    f.current.start());
        }, [o, t, c, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, u, e.minViewTimeSeconds, d, _]),
        (0, r.jsx)(L.Provider, {
            value: f,
            children: e.children(a, f)
        })
    );
}
