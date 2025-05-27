n.d(t, {
    B5: () => P,
    PI: () => T,
    WD: () => D,
    aM: () => L,
    ui: () => x
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
    u = n(797614),
    d = n(617136),
    f = n(113434),
    _ = n(569984),
    p = n(918701),
    h = n(882198),
    m = n(5881),
    g = n(46140),
    E = n(981631);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
            });
    }
    return e;
}
function O(e, t) {
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
function v(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : O(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let I = 60,
    S = 1,
    T = 0.5,
    A = new Set();
function N(e, t) {
    return ''.concat(e, '_').concat(t);
}
class C {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    constructor({ questOrQuests: e, questContent: t, adDecisionData: n, triggeredByStatusChange: r, trackGuildAndChannelMetadata: i, questContentPosition: s, questContentRowIndex: l, minViewTimeSeconds: c = S, isQuestEnrollmentBlocked: f }) {
        var O = this;
        b(this, 'id', void 0),
            b(this, 'quests', void 0),
            b(this, 'questContent', void 0),
            b(this, 'triggeredByStatusChange', void 0),
            b(this, 'trackGuildAndChannelMetadata', void 0),
            b(this, 'questContentPosition', void 0),
            b(this, 'questContentRowIndex', void 0),
            b(this, 'adDecisionData', void 0),
            b(this, 'heartbeatTimeoutId', void 0),
            b(this, 'lastBeatTime', void 0),
            b(this, 'minViewTimeReachedTimeoutId', void 0),
            b(this, 'minViewTimeSeconds', void 0),
            b(this, 'minViewportPercentage', void 0),
            b(this, 'isQuestEnrollmentBlocked', void 0),
            b(this, 'isRunning', !1),
            b(this, 'onMinViewTimeReached', () => {
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
                        let r = N(e.id, n);
                        (t = !A.has(r) && (0, p.VB)(this.questContent)) && A.add(r);
                    }
                    (0, d.dA)({
                        questId: e.id,
                        event: E.rMx.QUEST_CONTENT_VIEWED,
                        properties: y(
                            {
                                min_view_time_seconds: this.minViewTimeSeconds,
                                min_viewport_percentage: this.minViewportPercentage,
                                triggered_by_status_change: this.triggeredByStatusChange,
                                google_advertising_id: _.Z.googleAdvertisingId
                            },
                            this.commonProperties(e)
                        ),
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        shouldExtendSession: t
                    });
                });
            }),
            b(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                O.quests.forEach((t) => {
                    if (null != O.lastBeatTime) {
                        let n = Math.round(Date.now() - O.lastBeatTime);
                        (0, m.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: O.id }
                        ),
                            (0, d.dA)({
                                questId: t.id,
                                event: E.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: y(
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
            b(this, 'commonProperties', (e) =>
                y(
                    v(y({ impression_id: this.id }, this.adDecisionData), {
                        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
                        quest_status: (0, d.uk)(e)
                    }),
                    (0, d.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
                )
            ),
            b(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new C({
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
            b(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * I)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, m.T)().info(''.concat(e.config.messages.questName, ' Quest became visible at ').concat((0, d._b)(this.questContent)), { impressionId: this.id }),
                            (0, d.dA)({
                                questId: e.id,
                                event: E.rMx.QUEST_CONTENT_LOADED,
                                properties: y({ triggered_by_status_change: this.triggeredByStatusChange }, this.commonProperties(e)),
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
            b(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && O.beat(!0), (O.lastBeatTime = void 0), clearInterval(O.heartbeatTimeoutId), clearTimeout(O.minViewTimeReachedTimeoutId), (O.isRunning = !1);
            }),
            (this.id = (0, o.Z)()),
            (this.adDecisionData = null != n ? n : g.Jp),
            (this.questContent = t),
            (this.questContentPosition = s),
            (this.minViewTimeSeconds = c),
            (this.minViewportPercentage = T),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = i),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = l),
            (this.isQuestEnrollmentBlocked = f);
    }
}
let P = (e, t) => {
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
    w = i.createContext(void 0);
function D() {
    let e = i.useContext(w);
    return null == e ? void 0 : e.current;
}
function L() {
    var e;
    return null == (e = D()) ? void 0 : e.getId();
}
function x(e) {
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
                    ((p.current = new C({
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
        (0, r.jsx)(w.Provider, {
            value: p,
            children: e.children(a, p)
        })
    );
}
