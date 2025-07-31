(n.d(t, {
    B5: () => j,
    PI: () => L,
    WD: () => B,
    aM: () => V,
    ui: () => F
}),
    n(388685),
    n(953529),
    n(49124),
    n(642613),
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
    _ = n(113544),
    f = n(797614),
    p = n(592125),
    h = n(430824),
    m = n(914010),
    g = n(768581),
    E = n(358085),
    b = n(617136),
    y = n(509212),
    O = n(569984),
    v = n(811399),
    I = n(882198),
    T = n(5881),
    S = n(981631);
function A(e, t, n) {
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
function N(e) {
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
                A(e, t, n[t]);
            }));
    }
    return e;
}
function C(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let P = 100,
    w = 60,
    D = 1,
    L = 0.5,
    x = new Set();
function M(e, t) {
    return ''.concat(e, '_').concat(t);
}
class k {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    getBrandSafetyContext() {
        var e;
        let t = (0, v.d)(this.questContent),
            n = (0, y.VB)(this.questContent),
            r = (0, y.uN)(this.questContent),
            i = (0, _.z5)(),
            a = (0, _.QW)();
        if (!t || !(null == r ? void 0 : r.is_campaign_ias_enabled) || !n || void 0 === i || void 0 === a) return null;
        let o = () => {
                let e = i(),
                    t = h.Z.getGuilds();
                return e
                    .map((e) => {
                        var n;
                        let r = t[e];
                        if (void 0 === r) return null;
                        let i = {
                            id: r.id,
                            name: r.name
                        };
                        null !== r.description && (i.description = r.description);
                        let a =
                            null !== r.icon &&
                            null !=
                                (n = g.ZP.getGuildIconURL({
                                    id: r.id,
                                    icon: r.icon,
                                    size: 44,
                                    canAnimate: !0
                                }))
                                ? n
                                : null;
                        return (null !== a && (i.icon_url = a), i);
                    })
                    .filter((e) => null !== e);
            },
            s = m.Z.getGuildId(),
            l = null != s ? h.Z.getGuild(s) : null,
            c = () =>
                null == l
                    ? []
                    : a()
                          .map((e) => {
                              let t = p.Z.getChannel(e);
                              if (void 0 === t) return null;
                              let n = {
                                  id: t.id,
                                  name: t.name
                              };
                              return (t.topic.length > 0 && (n.channel_topic = t.topic), n);
                          })
                          .filter((e) => null !== e),
            u = {
                guilds: o(),
                channels: c()
            };
        null != s && (u.selected_guild_id = s);
        let d =
            (null == l ? void 0 : l.banner) !== null &&
            (null == l ? void 0 : l.banner) !== void 0 &&
            null !=
                (e = g.ZP.getGuildBannerURL(
                    {
                        id: l.id,
                        banner: l.banner
                    },
                    !0
                ))
                ? e
                : null;
        return (null !== d && (u.selected_guild_banner_url = d), u.guilds.length > P && ((u.guilds = u.guilds.slice(0, P)), (u.truncated = !0)), u.channels.length > P && ((u.channels = u.channels.slice(0, P)), (u.truncated = !0)), { brand_safety_context: JSON.stringify(u) });
    }
    constructor({ questOrQuests: e, questContent: t, triggeredByStatusChange: n, trackGuildAndChannelMetadata: r, questContentPosition: i, questContentRowIndex: s, minViewTimeSeconds: l = D, isQuestEnrollmentBlocked: c, sourceQuestContent: _ }) {
        var p = this;
        (A(this, 'id', void 0),
            A(this, 'quests', void 0),
            A(this, 'questContent', void 0),
            A(this, 'triggeredByStatusChange', void 0),
            A(this, 'trackGuildAndChannelMetadata', void 0),
            A(this, 'questContentPosition', void 0),
            A(this, 'questContentRowIndex', void 0),
            A(this, 'sourceQuestContent', void 0),
            A(this, 'heartbeatTimeoutId', void 0),
            A(this, 'lastBeatTime', void 0),
            A(this, 'minViewTimeReachedTimeoutId', void 0),
            A(this, 'minViewTimeSeconds', void 0),
            A(this, 'minViewportPercentage', void 0),
            A(this, 'isQuestEnrollmentBlocked', void 0),
            A(this, 'isRunning', !1),
            A(this, 'onMinViewTimeReached', () => {
                this.quests.forEach((e) => {
                    (0, T.T)().info(
                        ''
                            .concat(e.config.messages.questName, ' Quest viewed for at least ')
                            .concat(this.minViewTimeSeconds, 's at ')
                            .concat((0, b._b)(this.questContent)),
                        { impressionId: this.id }
                    );
                    let t = !1,
                        n = (0, y.Zp)(this.questContent);
                    if (null != n) {
                        let r = M(e.id, n);
                        (t = !x.has(r) && (0, y.VB)(this.questContent)) && x.add(r);
                    }
                    let r = N(
                        {
                            min_view_time_seconds: this.minViewTimeSeconds,
                            min_viewport_percentage: this.minViewportPercentage,
                            triggered_by_status_change: this.triggeredByStatusChange
                        },
                        (0, d.Z)(),
                        this.commonProperties(e),
                        this.getBrandSafetyContext()
                    );
                    (0, u.S)().then((n) => {
                        (null != n && ((0, E.isIOS)() ? (r.apple_advertising_id = n.advertisingId) : (0, E.isAndroid)() && (r.android_advertising_id = n.advertisingId)),
                            (0, b.dA)({
                                questId: e.id,
                                event: S.rMx.QUEST_CONTENT_VIEWED,
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                                properties: r,
                                shouldExtendSession: t,
                                sourceQuestContent: this.sourceQuestContent
                            }));
                    });
                });
            }),
            A(this, 'beat', function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                (p.quests.forEach((t) => {
                    if (null != p.lastBeatTime) {
                        let n = Math.round(Date.now() - p.lastBeatTime);
                        ((0, T.T)().info(
                            ''
                                .concat(t.config.messages.questName, ' Quest impression ')
                                .concat(e ? 'terminal ' : '', 'heartbeat: ')
                                .concat(n, 'ms since last heartbeat'),
                            { impressionId: p.id }
                        ),
                            (0, b.dA)({
                                questId: t.id,
                                event: S.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: N(
                                    {
                                        is_termination_beat: e,
                                        viewed_time_ms: n,
                                        triggered_by_status_change: p.triggeredByStatusChange
                                    },
                                    p.commonProperties(t)
                                ),
                                trackGuildAndChannelMetadata: p.trackGuildAndChannelMetadata,
                                sourceQuestContent: p.sourceQuestContent
                            }));
                    }
                }),
                    (p.lastBeatTime = Date.now()));
            }),
            A(this, 'commonProperties', (e) =>
                N(
                    R(N({ impression_id: this.id }, (0, y.qe)(e.id, this.questContent)), {
                        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
                        quest_status: (0, b.uk)(e)
                    }),
                    (0, b.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex)
                )
            ),
            A(this, 'clone', (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new k({
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
            A(this, 'start', () => {
                (this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * w)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(this.onMinViewTimeReached, 1000 * this.minViewTimeSeconds)),
                    this.quests.forEach((e) => {
                        ((0, T.T)().info(''.concat(e.config.messages.questName, ' Quest became visible at ').concat((0, b._b)(this.questContent)), { impressionId: this.id }),
                            (0, b.dA)({
                                questId: e.id,
                                event: S.rMx.QUEST_CONTENT_LOADED,
                                properties: N({ triggered_by_status_change: this.triggeredByStatusChange }, this.commonProperties(e)),
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                                sourceQuestContent: this.sourceQuestContent
                            }));
                    }),
                    (0, I.a)('QuestImpressionTracker') &&
                        f.Z.increment({
                            name: o.V.QUEST_CONTENT_IMPRESSION,
                            tags: ['quest_content:'.concat((0, b._b)(this.questContent))]
                        }),
                    (this.isRunning = !0));
            }),
            A(this, 'stop', function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                (e && p.beat(!0), (p.lastBeatTime = void 0), clearInterval(p.heartbeatTimeoutId), clearTimeout(p.minViewTimeReachedTimeoutId), (p.isRunning = !1));
            }),
            (this.id = (0, a.Z)()),
            (this.questContent = t),
            (this.questContentPosition = i),
            (this.minViewTimeSeconds = l),
            (this.minViewportPercentage = L),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = r),
            (this.triggeredByStatusChange = n),
            (this.questContentRowIndex = s),
            (this.isQuestEnrollmentBlocked = c),
            (this.sourceQuestContent = _));
    }
}
let j = (e, t) => {
        let n = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join('_')
            : e.id;
        return ''.concat(n, '_').concat(t);
    },
    U = (e) => {
        let t = Array.isArray(e) ? null : (0, b.uk)(e),
            n = (0, c.Z)(t);
        return t !== n;
    },
    G = i.createContext(void 0);
function B() {
    let e = i.useContext(G);
    return null == e ? void 0 : e.current;
}
function V() {
    var e;
    return null == (e = B()) ? void 0 : e.getId();
}
function F(e) {
    let { visible: t, visibleChanged: n, focused: a, reference: o, focusedChanged: c, sourceQuestContent: u } = e,
        d = U(e.questOrQuests),
        _ = i.useRef(null),
        f = (0, s.e7)([O.Z], () => null != O.Z.questEnrollmentBlockedUntil, []);
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
                    ((_.current = new k({
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: d,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds,
                        isQuestEnrollmentBlocked: f,
                        sourceQuestContent: u
                    })),
                    _.current.start()));
        }, [a, t, c, n, e.questOrQuests, e.questContent, e.questContentPosition, e.questContentRowIndex, e.trackGuildAndChannelMetadata, d, e.minViewTimeSeconds, f, u]),
        (0, r.jsx)(G.Provider, {
            value: _,
            children: e.children(o, _)
        })
    );
}
