"use strict";
n.d(t, { xs: () => M, n0: () => w });
var i = n(627968),
    r = n(64700),
    s = n(835245),
    a = n(323889),
    o = n(731738),
    l = n(17928),
    u = n(964486),
    c = n(345353),
    d = n(69114),
    _ = n(807393),
    f = n(723702),
    h = n(340124),
    p = n(859703),
    E = n(710969),
    m = n(851936),
    g = n(561844),
    A = n(590202),
    I = n(47167),
    T = n(633965),
    S = n(734057),
    N = n(71393),
    y = n(994500),
    C = n(967198),
    v = n(287809),
    O = n(486020);
n(23766);
var R = n(971649),
    b = n(652215);
let D = new Set();
class L {
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
            sourceQuestContent: f,
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
            (this.sourceQuestContent = f),
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
        let t = (0, E.HN)(this.questContent);
        null != t && (0, E.xn)(this.questContent) && D.add(`${e}_${t}`);
    };
    shouldExtendSession = (e) => {
        let t = (0, E.HN)(this.questContent);
        return null != t && !D.has(`${e}_${t}`) && (0, E.xn)(this.questContent);
    };
    onMinViewTimeReached = async () => {
        let e = await (0, c.N)((0, A.jO)(this.questContent)),
            t = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            n = {
                min_view_time_seconds: this.minViewTimeSeconds,
                min_viewport_percentage: this.minViewportPercentage,
                triggered_by_status_change: this.triggeredByStatusChange,
                apple_advertising_id: null != e && (0, f.isIOS)() ? e.advertisingId : null,
                android_advertising_id: null != e && (0, f.isAndroid)() ? e.advertisingId : null,
                ...(0, d.A)(),
                ...(function (e) {
                    let t,
                        n,
                        i = (0, E.xn)(e),
                        r = (0, E.vZ)(e),
                        s = (0, T.pc)(),
                        a = (0, T.Ld)();
                    if (!r?.is_campaign_ias_enabled || !i || void 0 === s || void 0 === a) return null;
                    let o = C.A.getGuildId(),
                        l = null != o ? N.A.getGuild(o) : null,
                        u = {
                            guilds:
                                ((t = s()),
                                (n = N.A.getGuilds()),
                                t
                                    .map((e) => {
                                        let t = n[e];
                                        if (void 0 === t) return null;
                                        let i = { id: t.id, name: t.name };
                                        null !== t.description && (i.description = t.description);
                                        let r =
                                            null !== t.icon
                                                ? (O.Ay.getGuildIconURL({
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
                                              let t = S.A.getChannel(e);
                                              if (void 0 === t) return null;
                                              let n = { id: t.id, name: (0, I.m1)(t, v.default, y.A) };
                                              return t.topic.length > 0 && (n.channel_topic = t.topic), n;
                                          })
                                          .filter((e) => null !== e),
                        };
                    null != o && (u.selected_guild_id = o);
                    let c =
                        l?.banner !== null && l?.banner !== void 0
                            ? (O.Ay.getGuildBannerURL({ id: l.id, banner: l.banner }, !0) ?? null)
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
            let r = (0, E.L4)(this.questContent, e),
                s = this.shouldExtendSession(e);
            if ((this.trackViewedPlacement(e), this.entity.adCreativeType === a.p.QUEST)) {
                let e = this.entity.adContentIds[i],
                    o = p.A.getQuest(e);
                null == o || (0, E.Ic)(o) || (0, h.zh)(a.p.QUEST, [e]),
                    (0, m.L)().info(
                        `${o?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, A.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, g.av)({
                        ...t,
                        shouldExtendSession: s,
                        questId: e,
                        event: b.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...n,
                            ...this.commonProperties(o),
                            metadata_sealed: r ?? null,
                            traffic_metadata_sealed: (0, E.Gp)(this.questContent, o?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[i];
                (0, m.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, A.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, g.Qg)({
                        ...t,
                        shouldExtendSession: s,
                        adContentId: e,
                        adCreativeType: this.entity.adCreativeType,
                        event: b.HAw.QUEST_CONTENT_VIEWED,
                        properties: { ...n, metadata_sealed: r ?? null, ...this.commonProperties() },
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
                            a = p.A.getQuest(s);
                        (0, m.L)().info(
                            `${a?.config.messages.questName ?? s} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, g.av)({
                                ...i,
                                questId: s,
                                event: b.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...r, ...e.commonProperties(a) },
                            });
                    } else {
                        let s = e.entity.adContentIds[o];
                        (0, m.L)().info(
                            `${s} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, g.Qg)({
                                ...i,
                                adContentId: s,
                                adCreativeType: e.entity.adCreativeType,
                                event: b.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...r, ...e.commonProperties() },
                            });
                    }
                });
            }
            e.lastBeatTime = Date.now();
        };
    })();
    commonProperties = (e) => ({
        impression_id: this.id,
        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
        quest_status: null == e ? void 0 : (0, A.NI)(e),
        ...(0, A.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
    });
    clone = (e) => {
        let { triggeredByStatusChange: t } = e;
        return (
            this.stop(),
            new L({
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
            let r = (0, E.L4)(this.questContent, n);
            if (this.entity.adCreativeType === a.p.QUEST) {
                let n = this.entity.adContentIds[i],
                    s = p.A.getQuest(n);
                (0, m.L)().info(
                    `${s?.config.messages.questName ?? n} Quest became visible at ${(0, A.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, g.av)({
                        ...e,
                        questId: n,
                        event: b.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...t,
                            metadata_sealed: r ?? null,
                            ...this.commonProperties(s),
                            traffic_metadata_sealed: (0, E.Gp)(this.questContent, s?.id) ?? null,
                        },
                    });
            } else {
                let n = this.entity.adContentIds[i];
                (0, m.L)().info(`${n} ad content became visible at ${(0, A.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, g.Qg)({
                        ...e,
                        adContentId: n,
                        adCreativeType: this.entity.adCreativeType,
                        event: b.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...t, metadata_sealed: r ?? null, ...this.commonProperties() },
                    });
            }
        }),
            _.A.increment({
                name: o.K.QUEST_CONTENT_IMPRESSION,
                tags: [`quest_content:${(0, A.jO)(this.questContent)}`],
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
let w = r.createContext(void 0);
function M(e) {
    let { visible: t, visibleChanged: n, focused: s, reference: o, focusedChanged: c, sourceQuestContent: d } = e,
        _ = (0, R.iY)(e),
        f = r.useRef(null),
        h = (0, l.bG)([p.A], () => null != p.A.questEnrollmentBlockedUntil, []);
    return (
        (0, u.Ay)(() => () => {
            null != f.current && f.current.stop();
        }),
        r.useEffect(() => {
            let i = s && t,
                r = (n || c || _) && i,
                o = ((n || c) && !i) || _;
            if (((r || o) && null != f.current && f.current.stop(), r)) {
                let t = {
                    isQuestEnrollmentBlocked: h,
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
                    (f.current = new L({ ...t, adContentIds: e.adContentIds, adCreativeType: e.adCreativeType })),
                    f.current.start();
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
            h,
            d,
            e.adCreativeType,
        ]),
        (0, i.jsx)(w.Provider, { value: f, children: e.children(o, f) })
    );
}
