n.d(t, { xs: () => y, n0: () => M });
var i = n(627968),
    r = n(64700),
    a = n(132500),
    s = n(323889),
    _ = n(731738),
    l = n(17928),
    o = n(964486),
    E = n(345353),
    d = n(69114),
    c = n(831062),
    u = n(723702),
    I = n(829219),
    A = n(859703),
    T = n(710969),
    S = n(851936),
    N = n(561844),
    O = n(590202),
    R = n(47167),
    f = n(633965),
    C = n(734057),
    p = n(71393),
    m = n(994500),
    L = n(967198),
    D = n(287809),
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
            triggeredByStatusChange: r,
            trackGuildAndChannelMetadata: _,
            questContentPosition: l,
            questContentRowIndex: o,
            minViewTimeSeconds: E = 1,
            isQuestEnrollmentBlocked: d,
            onImpression: c,
            sourceQuestContent: u,
        } = e;
        (this.id = (0, a.A)()),
            (this.questContent = i),
            (this.questContentPosition = l),
            (this.minViewTimeSeconds = E),
            (this.minViewportPercentage = 0.5),
            (this.trackGuildAndChannelMetadata = _),
            (this.triggeredByStatusChange = r),
            (this.questContentRowIndex = o),
            (this.isQuestEnrollmentBlocked = d),
            (this.onImpressionCallback = c),
            (this.sourceQuestContent = u),
            s.p.QUEST,
            (this.entity = { adContentIds: t, adCreativeType: n });
    }
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    trackViewedPlacement = (e) => {
        let t = (0, T.HN)(this.questContent);
        null != t && (0, T.xn)(this.questContent) && U.add(`${e}_${t}`);
    };
    shouldExtendSession = (e) => {
        let t = (0, T.HN)(this.questContent);
        return null != t && !U.has(`${e}_${t}`) && (0, T.xn)(this.questContent);
    };
    onMinViewTimeReached = async () => {
        let e = (0, T.L4)(this.questContent),
            t = await (0, E.N)((0, O.jO)(this.questContent)),
            n = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            i = {
                min_view_time_seconds: this.minViewTimeSeconds,
                min_viewport_percentage: this.minViewportPercentage,
                triggered_by_status_change: this.triggeredByStatusChange,
                apple_advertising_id: null != t && (0, u.isIOS)() ? t.advertisingId : null,
                android_advertising_id: null != t && (0, u.isAndroid)() ? t.advertisingId : null,
                metadata_sealed: e ?? null,
                ...(0, d.A)(),
                ...(function (e) {
                    let t,
                        n,
                        i = (0, T.xn)(e),
                        r = (0, T.vZ)(e),
                        a = (0, f.pc)(),
                        s = (0, f.Ld)();
                    if (!r?.is_campaign_ias_enabled || !i || void 0 === a || void 0 === s) return null;
                    let _ = L.A.getGuildId(),
                        l = null != _ ? p.A.getGuild(_) : null,
                        o = {
                            guilds:
                                ((t = a()),
                                (n = p.A.getGuilds()),
                                t
                                    .map((e) => {
                                        let t = n[e];
                                        if (void 0 === t) return null;
                                        let i = { id: t.id, name: t.name };
                                        null !== t.description && (i.description = t.description);
                                        let r =
                                            null !== t.icon
                                                ? (h.Ay.getGuildIconURL({
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
                                    : s()
                                          .map((e) => {
                                              let t = C.A.getChannel(e);
                                              if (void 0 === t) return null;
                                              let n = { id: t.id, name: (0, R.m1)(t, D.default, m.A) };
                                              return t.topic.length > 0 && (n.channel_topic = t.topic), n;
                                          })
                                          .filter((e) => null !== e),
                        };
                    null != _ && (o.selected_guild_id = _);
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
        this.entity.adContentIds.forEach((e, t) => {
            let r = this.shouldExtendSession(e);
            if ((this.trackViewedPlacement(e), this.entity.adCreativeType === s.p.QUEST)) {
                let e = this.entity.adContentIds[t],
                    a = A.A.getQuest(e);
                null == a || (0, T.Ic)(a) || (0, I.zh)(s.p.QUEST, [e]),
                    (0, S.L)().info(
                        `${a?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, O.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, N.av)({
                        ...n,
                        shouldExtendSession: r,
                        questId: e,
                        event: b.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...i,
                            ...this.commonProperties(a),
                            traffic_metadata_raw: (0, T.yI)(this.questContent, a?.id) ?? null,
                            traffic_metadata_sealed: (0, T.Gp)(this.questContent, a?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[t];
                (0, S.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, O.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, N.Qg)({
                        ...n,
                        shouldExtendSession: r,
                        adContentId: e,
                        adCreativeType: this.entity.adCreativeType,
                        event: b.HAw.QUEST_CONTENT_VIEWED,
                        properties: { ...i, ...this.commonProperties() },
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
                e.entity.adContentIds.forEach((a, _) => {
                    if (e.entity.adCreativeType === s.p.QUEST) {
                        let a = e.entity.adContentIds[_],
                            s = A.A.getQuest(a);
                        (0, S.L)().info(
                            `${s?.config.messages.questName ?? a} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, N.av)({
                                ...i,
                                questId: a,
                                event: b.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...r, ...e.commonProperties(s) },
                            });
                    } else {
                        let a = e.entity.adContentIds[_];
                        (0, S.L)().info(
                            `${a} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, N.Qg)({
                                ...i,
                                adContentId: a,
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
        let e = (0, T.L4)(this.questContent),
            t = {
                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                sourceQuestContent: this.sourceQuestContent,
            },
            n = { triggered_by_status_change: this.triggeredByStatusChange, metadata_sealed: e ?? null };
        this.entity.adContentIds.forEach((e, i) => {
            if (this.entity.adCreativeType === s.p.QUEST) {
                let e = this.entity.adContentIds[i],
                    r = A.A.getQuest(e);
                (0, S.L)().info(
                    `${r?.config.messages.questName ?? e} Quest became visible at ${(0, O.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, N.av)({
                        ...t,
                        questId: e,
                        event: b.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...n,
                            ...this.commonProperties(r),
                            traffic_metadata_raw: (0, T.yI)(this.questContent, r?.id) ?? null,
                            traffic_metadata_sealed: (0, T.Gp)(this.questContent, r?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[i];
                (0, S.L)().info(`${e} ad content became visible at ${(0, O.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, N.Qg)({
                        ...t,
                        adContentId: e,
                        adCreativeType: this.entity.adCreativeType,
                        event: b.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...n, ...this.commonProperties() },
                    });
            }
        }),
            c.A.increment({
                name: _.K.QUEST_CONTENT_IMPRESSION,
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
let M = r.createContext(void 0);
function y(e) {
    let { visible: t, visibleChanged: n, focused: a, reference: _, focusedChanged: E, sourceQuestContent: d } = e,
        c = (0, g.iY)(e),
        u = r.useRef(null),
        I = (0, l.bG)([A.A], () => null != A.A.questEnrollmentBlockedUntil, []);
    return (
        (0, o.Ay)(() => () => {
            null != u.current && u.current.stop();
        }),
        r.useEffect(() => {
            let i = a && t,
                r = (n || E || c) && i,
                _ = ((n || E) && !i) || c;
            if (((r || _) && null != u.current && u.current.stop(), r)) {
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
                    s.p.QUEST,
                    (u.current = new P({ ...t, adContentIds: e.adContentIds, adCreativeType: e.adCreativeType })),
                    u.current.start();
            }
        }, [
            a,
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
        (0, i.jsx)(M.Provider, { value: u, children: e.children(_, u) })
    );
}
