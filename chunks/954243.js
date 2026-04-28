n.d(t, { xs: () => G, n0: () => M });
var i = n(627968),
    a = n(64700),
    r = n(132500),
    _ = n(323889),
    s = n(731738),
    l = n(17928),
    o = n(964486),
    E = n(345353),
    d = n(69114),
    c = n(831062),
    u = n(723702),
    I = n(829219),
    T = n(859703),
    A = n(710969),
    S = n(851936),
    N = n(561844),
    O = n(590202),
    f = n(47167),
    R = n(633965),
    C = n(734057),
    D = n(71393),
    L = n(994500),
    p = n(967198),
    m = n(287809),
    h = n(486020);
n(23766);
var g = n(971649),
    b = n(652215);
let U = new Set();
class P {
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
            triggeredByStatusChange: a,
            trackGuildAndChannelMetadata: s,
            questContentPosition: l,
            questContentRowIndex: o,
            minViewTimeSeconds: E = 1,
            isQuestEnrollmentBlocked: d,
            onImpression: c,
            sourceQuestContent: u,
        } = e;
        (this.id = (0, r.A)()),
            (this.questContent = i),
            (this.questContentPosition = l),
            (this.minViewTimeSeconds = E),
            (this.minViewportPercentage = 0.5),
            (this.trackGuildAndChannelMetadata = s),
            (this.triggeredByStatusChange = a),
            (this.questContentRowIndex = o),
            (this.isQuestEnrollmentBlocked = d),
            (this.onImpressionCallback = c),
            (this.sourceQuestContent = u),
            _.p.QUEST,
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
        null != t && (0, A.xn)(this.questContent) && U.add(`${e}_${t}`);
    };
    shouldExtendSession = (e) => {
        let t = (0, A.HN)(this.questContent);
        return null != t && !U.has(`${e}_${t}`) && (0, A.xn)(this.questContent);
    };
    onMinViewTimeReached = async () => {
        let e = await (0, E.N)((0, O.jO)(this.questContent)),
            t = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            n = {
                min_view_time_seconds: this.minViewTimeSeconds,
                min_viewport_percentage: this.minViewportPercentage,
                triggered_by_status_change: this.triggeredByStatusChange,
                apple_advertising_id: null != e && (0, u.isIOS)() ? e.advertisingId : null,
                android_advertising_id: null != e && (0, u.isAndroid)() ? e.advertisingId : null,
                ...(0, d.A)(),
                ...(function (e) {
                    let t,
                        n,
                        i = (0, A.xn)(e),
                        a = (0, A.vZ)(e),
                        r = (0, R.pc)(),
                        _ = (0, R.Ld)();
                    if (!a?.is_campaign_ias_enabled || !i || void 0 === r || void 0 === _) return null;
                    let s = p.A.getGuildId(),
                        l = null != s ? D.A.getGuild(s) : null,
                        o = {
                            guilds:
                                ((t = r()),
                                (n = D.A.getGuilds()),
                                t
                                    .map((e) => {
                                        let t = n[e];
                                        if (void 0 === t) return null;
                                        let i = { id: t.id, name: t.name };
                                        null !== t.description && (i.description = t.description);
                                        let a =
                                            null !== t.icon
                                                ? (h.Ay.getGuildIconURL({
                                                      id: t.id,
                                                      icon: t.icon,
                                                      size: 44,
                                                      canAnimate: !0,
                                                  }) ?? null)
                                                : null;
                                        return null !== a && (i.icon_url = a), i;
                                    })
                                    .filter((e) => null !== e)),
                            channels:
                                null == l
                                    ? []
                                    : _()
                                          .map((e) => {
                                              let t = C.A.getChannel(e);
                                              if (void 0 === t) return null;
                                              let n = { id: t.id, name: (0, f.m1)(t, m.default, L.A) };
                                              return t.topic.length > 0 && (n.channel_topic = t.topic), n;
                                          })
                                          .filter((e) => null !== e),
                        };
                    null != s && (o.selected_guild_id = s);
                    let E =
                        l?.banner !== null && l?.banner !== void 0
                            ? (h.Ay.getGuildBannerURL({ id: l.id, banner: l.banner }, !0) ?? null)
                            : null;
                    return (
                        null !== E && (o.selected_guild_banner_url = E),
                        o.guilds.length > 100 && ((o.guilds = o.guilds.slice(0, 100)), (o.truncated = !0)),
                        o.channels.length > 100 && ((o.channels = o.channels.slice(0, 100)), (o.truncated = !0)),
                        { brand_safety_context: JSON.stringify(o) }
                    );
                })(this.questContent),
            };
        this.entity.adContentIds.forEach((e, i) => {
            let a = (0, A.L4)(this.questContent, e),
                r = this.shouldExtendSession(e);
            if ((this.trackViewedPlacement(e), this.entity.adCreativeType === _.p.QUEST)) {
                let e = this.entity.adContentIds[i],
                    s = T.A.getQuest(e);
                null == s || (0, A.Ic)(s) || (0, I.zh)(_.p.QUEST, [e]),
                    (0, S.L)().info(
                        `${s?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, O.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, N.av)({
                        ...t,
                        shouldExtendSession: r,
                        questId: e,
                        event: b.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...n,
                            ...this.commonProperties(s),
                            metadata_sealed: a ?? null,
                            traffic_metadata_raw: (0, A.yI)(this.questContent, s?.id) ?? null,
                            traffic_metadata_sealed: (0, A.Gp)(this.questContent, s?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[i];
                (0, S.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, O.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, N.Qg)({
                        ...t,
                        shouldExtendSession: r,
                        adContentId: e,
                        adCreativeType: this.entity.adCreativeType,
                        event: b.HAw.QUEST_CONTENT_VIEWED,
                        properties: { ...n, metadata_sealed: a ?? null, ...this.commonProperties() },
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
                    a = {
                        is_termination_beat: t,
                        viewed_time_ms: n,
                        triggered_by_status_change: e.triggeredByStatusChange,
                    };
                e.entity.adContentIds.forEach((r, s) => {
                    if (e.entity.adCreativeType === _.p.QUEST) {
                        let r = e.entity.adContentIds[s],
                            _ = T.A.getQuest(r);
                        (0, S.L)().info(
                            `${_?.config.messages.questName ?? r} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, N.av)({
                                ...i,
                                questId: r,
                                event: b.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...a, ...e.commonProperties(_) },
                            });
                    } else {
                        let r = e.entity.adContentIds[s];
                        (0, S.L)().info(
                            `${r} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, N.Qg)({
                                ...i,
                                adContentId: r,
                                adCreativeType: e.entity.adCreativeType,
                                event: b.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...a, ...e.commonProperties() },
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
        quest_status: null == e ? void 0 : (0, O.NI)(e),
        ...(0, O.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
    });
    clone = (e) => {
        let { triggeredByStatusChange: t } = e;
        return (
            this.stop(),
            new P({
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
            let a = (0, A.L4)(this.questContent, n);
            if (this.entity.adCreativeType === _.p.QUEST) {
                let n = this.entity.adContentIds[i],
                    r = T.A.getQuest(n);
                (0, S.L)().info(
                    `${r?.config.messages.questName ?? n} Quest became visible at ${(0, O.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, N.av)({
                        ...e,
                        questId: n,
                        event: b.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...t,
                            metadata_sealed: a ?? null,
                            ...this.commonProperties(r),
                            traffic_metadata_raw: (0, A.yI)(this.questContent, r?.id) ?? null,
                            traffic_metadata_sealed: (0, A.Gp)(this.questContent, r?.id) ?? null,
                        },
                    });
            } else {
                let n = this.entity.adContentIds[i];
                (0, S.L)().info(`${n} ad content became visible at ${(0, O.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, N.Qg)({
                        ...e,
                        adContentId: n,
                        adCreativeType: this.entity.adCreativeType,
                        event: b.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...t, metadata_sealed: a ?? null, ...this.commonProperties() },
                    });
            }
        }),
            c.A.increment({
                name: s.K.QUEST_CONTENT_IMPRESSION,
                tags: [`quest_content:${(0, O.jO)(this.questContent)}`],
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
let M = a.createContext(void 0);
function G(e) {
    let { visible: t, visibleChanged: n, focused: r, reference: s, focusedChanged: E, sourceQuestContent: d } = e,
        c = (0, g.iY)(e),
        u = a.useRef(null),
        I = (0, l.bG)([T.A], () => null != T.A.questEnrollmentBlockedUntil, []);
    return (
        (0, o.Ay)(() => () => {
            null != u.current && u.current.stop();
        }),
        a.useEffect(() => {
            let i = r && t,
                a = (n || E || c) && i,
                s = ((n || E) && !i) || c;
            if (((a || s) && null != u.current && u.current.stop(), a)) {
                let t = {
                    isQuestEnrollmentBlocked: I,
                    minViewTimeSeconds: e.minViewTimeSeconds,
                    onImpression: e.onImpression,
                    questContent: e.questContent,
                    questContentPosition: e.questContentPosition,
                    questContentRowIndex: e.questContentRowIndex,
                    sourceQuestContent: d,
                    trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                    triggeredByStatusChange: c,
                };
                e.adCreativeType,
                    _.p.QUEST,
                    (u.current = new P({ ...t, adContentIds: e.adContentIds, adCreativeType: e.adCreativeType })),
                    u.current.start();
            }
        }, [
            r,
            t,
            E,
            n,
            e.adContentIds,
            e.onImpression,
            e.questContent,
            e.questContentPosition,
            e.questContentRowIndex,
            e.trackGuildAndChannelMetadata,
            c,
            e.minViewTimeSeconds,
            I,
            d,
            e.adCreativeType,
        ]),
        (0, i.jsx)(M.Provider, { value: u, children: e.children(s, u) })
    );
}
