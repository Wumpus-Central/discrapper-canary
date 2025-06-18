n.d(t, {
    B5: () => P,
    PI: () => A,
    WD: () => L,
    aM: () => x,
    ui: () => k
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
    f = n(797614),
    _ = n(358085),
    p = n(617136),
    h = n(569984),
    m = n(918701),
    g = n(882198),
    E = n(5881),
    b = n(981631);
function y(e, t, n) {
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
function O(e) {
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
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = 60,
    S = 1,
    A = 0.5,
    N = new Set();
function C(e, t) {
    return ''.concat(e, '_').concat(t);
}
class R {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    constructor({ questOrQuests: e, questContent: t, triggeredByStatusChange: n, trackGuildAndChannelMetadata: r, questContentPosition: i, questContentRowIndex: s, minViewTimeSeconds: l = S, isQuestEnrollmentBlocked: c }) {
        var h = this;
        y(this, 'id', void 0),
            y(this, 'quests', void 0),
            y(this, 'questContent', void 0),
            y(this, 'triggeredByStatusChange', void 0),
            y(this, 'trackGuildAndChannelMetadata', void 0),
            y(this, 'questContentPosition', void 0),
            y(this, 'questContentRowIndex', void 0),
            y(this, 'heartbeatTimeoutId', void 0),
            y(this, 'lastBeatTime', void 0),
            y(this, 'minViewTimeReachedTimeoutId', void 0),
            y(this, 'minViewTimeSeconds', void 0),
            y(this, 'minViewportPercentage', void 0),
            y(this, 'isQuestEnrollmentBlocked', void 0),
            y(this, 'isRunning', !1),
            y(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, E.T)().info(
                        ''
                            .concat(e.config.messages.questName, ' Quest viewed for at least ')
                            .concat(this.minViewTimeSeconds, 's at ')
                            .concat((0, p._b)(this.questContent)),
                        { impressionId: this.id }
                    );
                    let t = !1,
                        n = (0, m.Zp)(this.questContent);
                    if (null != n) {
                        let r = C(e.id, n);
                        (t = !N.has(r) && (0, m.VB)(this.questContent)) && N.add(r);
                    }
                    let r = O(
                            {
                                min_view_time_seconds: this.minViewTimeSeconds,
                                min_viewport_percentage: this.minViewportPercentage,
                                triggered_by_status_change: this.triggeredByStatusChange
                            },
                            (0, d.Z)(),
                            this.commonProperties(e)
                        ),
                        i = (0, u.S)();
                    null != i && ((0, _.isIOS)() ? (r.apple_advertising_id = i.advertisingId) : (0, _.isAndroid)() && (r.android_advertising_id = i.advertisingId)),
                        (0, p.dA)({
                            questId: e.id,
                            event: b.rMx.QUEST_CONTENT_VIEWED,
                            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                            properties: r,
                            shouldExtendSession: t
                        });
                });
            }),
            y(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                h.quests.forEach((t) => {
                    if (null != h.lastBeatTime) {
                        let n = Math.round(Date.now() - h.lastBeatTime);
                        (0, E.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: h.id }
                        ),
                            (0, p.dA)({
                                questId: t.id,
                                event: b.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: O(
                                    {
                                        is_termination_beat: e,
                                        viewed_time_ms: n,
                                        triggered_by_status_change: h.triggeredByStatusChange
                                    },
                                    h.commonProperties(t)
                                ),
                                trackGuildAndChannelMetadata: h.trackGuildAndChannelMetadata
                            });
                    }
                }),
                    (h.lastBeatTime = Date.now());
            }),
            y(this, 'commonProperties', (e) =>
                O(
                    I(O({ impression_id: this.id }, (0, m.qe)(e.id, this.questContent)), {
                        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
                        quest_status: (0, p.uk)(e)
                    }),
                    (0, p.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
                )
            ),
            y(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new R({
                        questContent: this.questContent,
                        questOrQuests: this.quests,
                        questContentRowIndex: this.questContentRowIndex,
                        questContentPosition: this.questContentPosition,
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        triggeredByStatusChange: t,
                        isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked
                    })
                );
            }),
            y(this, 'start', () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * T)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        (0, E.T)().info(''.concat(e.config.messages.questName, ' Quest became visible at ').concat((0, p._b)(this.questContent)), { impressionId: this.id }),
                            (0, p.dA)({
                                questId: e.id,
                                event: b.rMx.QUEST_CONTENT_LOADED,
                                properties: O({ triggered_by_status_change: this.triggeredByStatusChange }, this.commonProperties(e)),
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata
                            });
                    }),
                    (0, g.a)('QuestImpressionTracker') &&
                        f.Z.increment({
                            name: o.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, p._b)(this.questContent))]
                        }),
                    (this.isRunning = !0);
            }),
            y(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && h.beat(!0), (h.lastBeatTime = void 0), clearInterval(h.heartbeatTimeoutId), clearTimeout(h.minViewTimeReachedTimeoutId), (h.isRunning = !1);
            }),
            (this.id = (0, a.Z)()),
            (this.questContent = t),
            (this.questContentPosition = i),
            (this.minViewTimeSeconds = l),
            (this.minViewportPercentage = A),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = r),
            (this.triggeredByStatusChange = n),
            (this.questContentRowIndex = s),
            (this.isQuestEnrollmentBlocked = c);
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
    w = (e) => {
        let t = Array.isArray(e) ? null : (0, p.uk)(e),
            n = (0, c.Z)(t);
        return t !== n;
    },
    D = i.createContext(void 0);
function L() {
    let e = i.useContext(D);
    return null == e ? void 0 : e.current;
}
function x() {
    var e;
    return null == (e = L()) ? void 0 : e.getId();
}
function k(e) {
    let { visible: t, visibleChanged: n, focused: a, reference: o, focusedChanged: c } = e,
        u = w(e.questOrQuests),
        d = i.useRef(null),
        f = (0, s.e7)([h.Z], () => null != h.Z.questEnrollmentBlockedUntil, []);
    return (
        (0, l.ZP)(() => () => {
            null != d.current && d.current.stop();
        }),
        i.useEffect(() => {
            let r = a && t,
                i = (n || c || u) && r,
                o = ((n || c) && !r) || u;
            (i || o) && null != d.current && d.current.stop(),
                i &&
                    ((d.current = new R({
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: u,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds,
                        isQuestEnrollmentBlocked: f
                    })),
                    d.current.start());
        }, [a, t, c, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, u, e.minViewTimeSeconds, f]),
        (0, r.jsx)(D.Provider, {
            value: d,
            children: e.children(o, d)
        })
    );
}
