"use strict";
n.d(t, { xs: () => U, n0: () => k });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(323889),
    o = n(731738),
    l = n(17928),
    u = n(964486),
    c = n(274670),
    d = n(144779),
    _ = n(345353),
    h = n(69114),
    f = n(807393),
    p = n(723702),
    E = n(340124),
    m = n(859703),
    g = n(104886),
    A = n(710969),
    I = n(851936),
    T = n(561844),
    S = n(590202),
    y = n(47167),
    C = n(633965),
    N = n(734057),
    v = n(71393),
    R = n(994500),
    O = n(967198),
    b = n(287809),
    D = n(486020);
n(23766);
var L = n(971649),
    w = n(823784),
    M = n(652215);
let P = new Set();
class x {
    id;
    entity;
    questContent;
    triggeredByStatusChange;
    trackGuildAndChannelMetadata;
    questContentPosition;
    questContentRowIndex;
    sourceQuestContent;
    heartbeatTimeoutId;
    lastBeatTime;
    minViewTimeReachedTimeoutId;
    minViewTimeSeconds;
    minViewportPercentage;
    isQuestEnrollmentBlocked;
    onImpressionCallback;
    isRunning = !1;
    migrateQuestContentLoadedToCaptureAdUserAction;
    constructor(e) {
        const {
            adContentIds: t,
            adCreativeType: n,
            questContent: i,
            triggeredByStatusChange: r,
            trackGuildAndChannelMetadata: o,
            questContentPosition: l,
            questContentRowIndex: u,
            minViewTimeSeconds: c = 1,
            isQuestEnrollmentBlocked: d,
            onImpression: _,
            sourceQuestContent: h,
        } = e;
        (this.id = (0, s.A)()),
            (this.questContent = i),
            (this.questContentPosition = l),
            (this.minViewTimeSeconds = c),
            (this.minViewportPercentage = 0.5),
            (this.trackGuildAndChannelMetadata = o),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = u),
            (this.isQuestEnrollmentBlocked = d),
            (this.onImpressionCallback = _),
            (this.sourceQuestContent = h),
            (this.migrateQuestContentLoadedToCaptureAdUserAction = (0, g.E5)(
                g.kI.STEP_1_LOADED,
                "quest_content_impression",
            )),
            a.p.QUEST,
            (this.entity = { adContentIds: t, adCreativeType: n });
    }
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    trackViewedPlacement = (e) => {
        let t = (0, A.HN)(this.questContent);
        null != t && (0, A.xn)(this.questContent) && P.add(`${e}_${t}`);
    };
    shouldExtendSession = (e) => {
        let t = (0, A.HN)(this.questContent);
        return null != t && !P.has(`${e}_${t}`) && (0, A.xn)(this.questContent);
    };
    onMinViewTimeReached = async () => {
        let e = await (0, _.N)((0, S.jO)(this.questContent)),
            t = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            n = {
                min_view_time_seconds: this.minViewTimeSeconds,
                min_viewport_percentage: this.minViewportPercentage,
                triggered_by_status_change: this.triggeredByStatusChange,
                apple_advertising_id: null != e && (0, p.isIOS)() ? e.advertisingId : null,
                android_advertising_id: null != e && (0, p.isAndroid)() ? e.advertisingId : null,
                ...(0, h.A)(),
                ...(function (e) {
                    let t,
                        n,
                        i = (0, A.xn)(e),
                        r = (0, A.vZ)(e),
                        s = (0, C.pc)(),
                        a = (0, C.Ld)();
                    if (!r?.is_campaign_ias_enabled || !i || void 0 === s || void 0 === a) return null;
                    let o = O.A.getGuildId(),
                        l = null != o ? v.A.getGuild(o) : null,
                        u = {
                            guilds:
                                ((t = s()),
                                (n = v.A.getGuilds()),
                                t
                                    .map((e) => {
                                        let t = n[e];
                                        if (void 0 === t) return null;
                                        let i = { id: t.id, name: t.name };
                                        null !== t.description && (i.description = t.description);
                                        let r =
                                            null !== t.icon
                                                ? (D.Ay.getGuildIconURL({
                                                      id: t.id,
                                                      icon: t.icon,
                                                      size: 44,
                                                      canAnimate: !0,
                                                  }) ?? null)
                                                : null;
                                        return null !== r && (i.icon_url = r), i;
                                    })
                                    .filter((e) => null !== e)),
                            channels:
                                null == l
                                    ? []
                                    : a()
                                          .map((e) => {
                                              let t = N.A.getChannel(e);
                                              if (void 0 === t) return null;
                                              let n = { id: t.id, name: (0, y.m1)(t, b.default, R.A) };
                                              return t.topic.length > 0 && (n.channel_topic = t.topic), n;
                                          })
                                          .filter((e) => null !== e),
                        };
                    null != o && (u.selected_guild_id = o);
                    let c =
                        l?.banner !== null && l?.banner !== void 0
                            ? (D.Ay.getGuildBannerURL({ id: l.id, banner: l.banner }, !0) ?? null)
                            : null;
                    return (
                        null !== c && (u.selected_guild_banner_url = c),
                        u.guilds.length > 100 && ((u.guilds = u.guilds.slice(0, 100)), (u.truncated = !0)),
                        u.channels.length > 100 && ((u.channels = u.channels.slice(0, 100)), (u.truncated = !0)),
                        { brand_safety_context: JSON.stringify(u) }
                    );
                })(this.questContent),
            };
        this.entity.adContentIds.forEach((e, i) => {
            let r = (0, A.L4)(this.sourceQuestContent, e),
                s = this.shouldExtendSession(e);
            if ((this.trackViewedPlacement(e), this.entity.adCreativeType === a.p.QUEST)) {
                let e = this.entity.adContentIds[i],
                    o = m.A.getQuest(e);
                null == o || (0, A.Ic)(o) || (0, E.zh)(a.p.QUEST, [e]),
                    (0, I.L)().info(
                        `${o?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, S.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, T.av)({
                        ...t,
                        shouldExtendSession: s,
                        questId: e,
                        event: M.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...n,
                            ...this.commonProperties(),
                            metadata_sealed: r ?? null,
                            search_session_id: (0, w.tv)()?.uuid ?? null,
                            traffic_metadata_sealed: (0, A.Gp)(this.sourceQuestContent, o?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[i];
                (0, I.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, S.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, T.Qg)({
                        ...t,
                        shouldExtendSession: s,
                        adContentId: e,
                        adCreativeType: this.entity.adCreativeType,
                        event: M.HAw.QUEST_CONTENT_VIEWED,
                        properties: { ...n, ...this.commonProperties() },
                    });
            }
        }),
            this.onImpressionCallback?.();
    };
    beat = (() => {
        var e = this;
        return function () {
            let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            if (null != e.lastBeatTime) {
                let n = Math.round(Date.now() - e.lastBeatTime),
                    i = {
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        sourceQuestContent: e.sourceQuestContent,
                    },
                    r = {
                        is_termination_beat: t,
                        viewed_time_ms: n,
                        triggered_by_status_change: e.triggeredByStatusChange,
                    };
                e.entity.adContentIds.forEach((s, o) => {
                    if (e.entity.adCreativeType === a.p.QUEST) {
                        let s = e.entity.adContentIds[o],
                            a = m.A.getQuest(s);
                        (0, I.L)().info(
                            `${a?.config.messages.questName ?? s} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, T.av)({
                                ...i,
                                questId: s,
                                event: M.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...r, ...e.commonProperties() },
                            });
                    } else {
                        let s = e.entity.adContentIds[o];
                        (0, I.L)().info(
                            `${s} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, T.Qg)({
                                ...i,
                                adContentId: s,
                                adCreativeType: e.entity.adCreativeType,
                                event: M.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...r, ...e.commonProperties() },
                            });
                    }
                });
            }
            e.lastBeatTime = Date.now();
        };
    })();
    commonProperties = () => ({
        impression_id: this.id,
        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
        ...(0, S.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
    });
    clone = (e) => {
        let { triggeredByStatusChange: t } = e;
        return (
            this.stop(),
            new x({
                questContent: this.questContent,
                questContentRowIndex: this.questContentRowIndex,
                questContentPosition: this.questContentPosition,
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                triggeredByStatusChange: t,
                isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
                onImpression: this.onImpressionCallback,
                sourceQuestContent: this.sourceQuestContent,
                ...this.entity,
            })
        );
    };
    start = () => {
        this.stop(!1),
            (this.lastBeatTime = Date.now()),
            (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 6e4)),
            (this.minViewTimeReachedTimeoutId = window.setTimeout(
                this.onMinViewTimeReached,
                1e3 * this.minViewTimeSeconds,
            ));
        let e = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            t = { triggered_by_status_change: this.triggeredByStatusChange };
        this.entity.adContentIds.forEach((n, i) => {
            let r = (0, A.L4)(this.sourceQuestContent, n);
            if (this.migrateQuestContentLoadedToCaptureAdUserAction) {
                let e =
                    (this.entity.adCreativeType === a.p.QUEST,
                    { adCreativeType: this.entity.adCreativeType, adCreativeId: this.entity.adContentIds[i] });
                (0, c.r)({
                    type: d.F.END_CONTENT_LOAD,
                    surfaceId: this.questContent,
                    sourceQuestContent: this.sourceQuestContent,
                    impressionId: this.id,
                    triggeredByStatusChange: this.triggeredByStatusChange,
                    trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                    questContentPosition: this.questContentPosition,
                    questContentRowIndex: this.questContentRowIndex,
                    ...e,
                });
                return;
            }
            if (this.entity.adCreativeType === a.p.QUEST) {
                let n = this.entity.adContentIds[i],
                    s = m.A.getQuest(n);
                (0, I.L)().info(
                    `${s?.config.messages.questName ?? n} Quest became visible at ${(0, S.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, T.av)({
                        ...e,
                        questId: n,
                        event: M.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...t,
                            metadata_sealed: r ?? null,
                            ...this.commonProperties(),
                            traffic_metadata_sealed: (0, A.Gp)(this.sourceQuestContent, s?.id) ?? null,
                        },
                    });
            } else {
                let n = this.entity.adContentIds[i];
                (0, I.L)().info(`${n} ad content became visible at ${(0, S.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, T.Qg)({
                        ...e,
                        adContentId: n,
                        adCreativeType: this.entity.adCreativeType,
                        event: M.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...t, ...this.commonProperties() },
                    });
            }
        }),
            f.A.increment({
                name: o.K.QUEST_CONTENT_IMPRESSION,
                tags: [`quest_content:${(0, S.jO)(this.questContent)}`],
            }),
            (this.isRunning = !0);
    };
    stop = (() => {
        var e = this;
        return function () {
            let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
            t && e.beat(!0),
                (e.lastBeatTime = void 0),
                clearInterval(e.heartbeatTimeoutId),
                clearTimeout(e.minViewTimeReachedTimeoutId),
                (e.isRunning = !1);
        };
    })();
}
let k = r.createContext(void 0);
function U(e) {
    let { visible: t, visibleChanged: n, focused: s, reference: o, focusedChanged: c, sourceQuestContent: d } = e,
        _ = (0, L.iY)(e),
        h = r.useRef(null),
        f = (0, l.bG)([m.A], () => null != m.A.questEnrollmentBlockedUntil, []);
    return (
        (0, u.Ay)(() => () => {
            null != h.current && h.current.stop();
        }),
        r.useEffect(() => {
            let i = s && t,
                r = (n || c || _) && i,
                o = ((n || c) && !i) || _;
            if (((r || o) && null != h.current && h.current.stop(), r)) {
                let t = {
                    isQuestEnrollmentBlocked: f,
                    minViewTimeSeconds: e.minViewTimeSeconds,
                    onImpression: e.onImpression,
                    questContent: e.questContent,
                    questContentPosition: e.questContentPosition,
                    questContentRowIndex: e.questContentRowIndex,
                    sourceQuestContent: d,
                    trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                    triggeredByStatusChange: _,
                };
                e.adCreativeType,
                    a.p.QUEST,
                    (h.current = new x({ ...t, adContentIds: e.adContentIds, adCreativeType: e.adCreativeType })),
                    h.current.start();
            }
        }, [
            s,
            t,
            c,
            n,
            e.adContentIds,
            e.onImpression,
            e.questContent,
            e.questContentPosition,
            e.questContentRowIndex,
            e.trackGuildAndChannelMetadata,
            _,
            e.minViewTimeSeconds,
            f,
            d,
            e.adCreativeType,
        ]),
        (0, i.jsx)(k.Provider, { value: h, children: e.children(o, h) })
    );
}
