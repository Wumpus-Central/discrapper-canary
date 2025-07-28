(n.d(t, {
    B5: () => w,
    PI: () => N,
    WD: () => M,
    aM: () => k,
    ui: () => j
}),
    n(388685),
    n(642613),
    n(953529),
    n(49124),
    n(415506));
var r = n(255367),
    i = n(73800),
    a = n(772848),
    o = n(286379),
    s = n(442837),
    l = n(493773),
    c = n(110924),
    u = n(516796),
    d = n(186102),
    f = n(113544),
    _ = n(797614);
(n(592125), n(430824), n(914010), n(768581));
var p = n(358085),
    h = n(617136),
    m = n(509212),
    g = n(569984),
    E = n(882198),
    b = n(5881),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                O(e, t, n[t]);
            }));
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function T(e, t) {
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
let S = 60,
    A = 1,
    N = 0.5,
    C = new Set();
function R(e, t) {
    return ''.concat(e, '_').concat(t);
}
class P {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    constructor({ questOrQuests: e, questContent: t, triggeredByStatusChange: n, trackGuildAndChannelMetadata: r, questContentPosition: i, questContentRowIndex: s, minViewTimeSeconds: l = A, isQuestEnrollmentBlocked: c, sourceQuestContent: f, brandSafetyContext: g }) {
        var I = this;
        (O(this, 'id', void 0),
            O(this, 'quests', void 0),
            O(this, 'questContent', void 0),
            O(this, 'triggeredByStatusChange', void 0),
            O(this, 'trackGuildAndChannelMetadata', void 0),
            O(this, 'questContentPosition', void 0),
            O(this, 'questContentRowIndex', void 0),
            O(this, 'sourceQuestContent', void 0),
            O(this, 'brandSafetyContext', void 0),
            O(this, 'heartbeatTimeoutId', void 0),
            O(this, 'lastBeatTime', void 0),
            O(this, 'minViewTimeReachedTimeoutId', void 0),
            O(this, 'minViewTimeSeconds', void 0),
            O(this, 'minViewportPercentage', void 0),
            O(this, 'isQuestEnrollmentBlocked', void 0),
            O(this, 'isRunning', !1),
            O(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, b.T)().info(
                        ''
                            .concat(e.config.messages.questName, ' Quest viewed for at least ')
                            .concat(this.minViewTimeSeconds, 's at ')
                            .concat((0, h._b)(this.questContent)),
                        { impressionId: this.id }
                    );
                    let t = !1,
                        n = (0, m.Zp)(this.questContent);
                    if (null != n) {
                        let r = R(e.id, n);
                        (t = !C.has(r) && (0, m.VB)(this.questContent)) && C.add(r);
                    }
                    let r = v(
                        {
                            min_view_time_seconds: this.minViewTimeSeconds,
                            min_viewport_percentage: this.minViewportPercentage,
                            triggered_by_status_change: this.triggeredByStatusChange,
                            brand_safety_context: this.brandSafetyContext
                        },
                        (0, d.Z)(),
                        this.commonProperties(e)
                    );
                    (0, u.S)().then((n) => {
                        (null != n && ((0, p.isIOS)() ? (r.apple_advertising_id = n.advertisingId) : (0, p.isAndroid)() && (r.android_advertising_id = n.advertisingId)),
                            (0, h.dA)({
                                questId: e.id,
                                event: y.rMx.QUEST_CONTENT_VIEWED,
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                                properties: r,
                                shouldExtendSession: t,
                                sourceQuestContent: this.sourceQuestContent
                            }));
                    });
                });
            }),
            O(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                (I.quests.forEach((t) => {
                    if (null != I.lastBeatTime) {
                        let n = Math.round(Date.now() - I.lastBeatTime);
                        ((0, b.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: I.id }
                        ),
                            (0, h.dA)({
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
                                trackGuildAndChannelMetadata: I.trackGuildAndChannelMetadata,
                                sourceQuestContent: I.sourceQuestContent
                            }));
                    }
                }),
                    (I.lastBeatTime = Date.now()));
            }),
            O(this, 'commonProperties', (e) =>
                v(
                    T(v({ impression_id: this.id }, (0, m.qe)(e.id, this.questContent)), {
                        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
                        quest_status: (0, h.uk)(e)
                    }),
                    (0, h.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
                )
            ),
            O(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new P({
                        questContent: this.questContent,
                        questOrQuests: this.quests,
                        questContentRowIndex: this.questContentRowIndex,
                        questContentPosition: this.questContentPosition,
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        triggeredByStatusChange: t,
                        isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
                        sourceQuestContent: this.sourceQuestContent
                    })
                );
            }),
            O(this, 'start', () => {
                (this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * S)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        ((0, b.T)().info(''.concat(e.config.messages.questName, ' Quest became visible at ').concat((0, h._b)(this.questContent)), { impressionId: this.id }),
                            (0, h.dA)({
                                questId: e.id,
                                event: y.rMx.QUEST_CONTENT_LOADED,
                                properties: v({ triggered_by_status_change: this.triggeredByStatusChange }, this.commonProperties(e)),
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                                sourceQuestContent: this.sourceQuestContent
                            }));
                    }),
                    (0, E.a)('QuestImpressionTracker') &&
                        _.Z.increment({
                            name: o.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, h._b)(this.questContent))]
                        }),
                    (this.isRunning = !0));
            }),
            O(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                (e && I.beat(!0), (I.lastBeatTime = void 0), clearInterval(I.heartbeatTimeoutId), clearTimeout(I.minViewTimeReachedTimeoutId), (I.isRunning = !1));
            }),
            (this.id = (0, a.Z)()),
            (this.questContent = t),
            (this.questContentPosition = i),
            (this.minViewTimeSeconds = l),
            (this.minViewportPercentage = N),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = r),
            (this.triggeredByStatusChange = n),
            (this.questContentRowIndex = s),
            (this.isQuestEnrollmentBlocked = c),
            (this.sourceQuestContent = f),
            (this.brandSafetyContext = g));
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
};
function D(e, t) {
    ((0, m.VB)(t), (0, f.z5)(), (0, f.QW)(), Array.isArray(e));
}
let L = (e) => {
        let t = Array.isArray(e) ? null : (0, h.uk)(e),
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
    let { visible: t, visibleChanged: n, focused: a, reference: o, focusedChanged: c, sourceQuestContent: u } = e,
        d = L(e.questOrQuests),
        f = D(e.questOrQuests, e.questContent),
        _ = i.useRef(null),
        p = (0, s.e7)([g.Z], () => null != g.Z.questEnrollmentBlockedUntil, []);
    return (
        (0, l.ZP)(() => () => {
            null != _.current && _.current.stop();
        }),
        i.useEffect(() => {
            let r = a && t,
                i = (n || c || d) && r,
                o = ((n || c) && !r) || d;
            ((i || o) && null != _.current && _.current.stop(),
                i &&
                    ((_.current = new P({
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: d,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds,
                        isQuestEnrollmentBlocked: p,
                        sourceQuestContent: u,
                        brandSafetyContext: f
                    })),
                    _.current.start()));
        }, [a, t, c, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, d, e.minViewTimeSeconds, p, u, f]),
        (0, r.jsx)(x.Provider, {
            value: _,
            children: e.children(o, _)
        })
    );
}
