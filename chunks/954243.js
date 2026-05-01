n.d(t, { xs: () => v, n0: () => U });
var i = n(627968),
    a = n(64700),
    r = n(132500),
    s = n(323889),
    l = n(731738),
    o = n(17928),
    d = n(964486),
    c = n(345353),
    _ = n(69114),
    E = n(831062),
    u = n(723702),
    A = n(829219),
    I = n(859703),
    T = n(710969),
    h = n(851936),
    S = n(561844),
    N = n(590202),
    f = n(47167),
    p = n(633965),
    m = n(734057),
    O = n(71393),
    C = n(994500),
    R = n(967198),
    g = n(287809),
    L = n(486020);
n(23766);
var D = n(971649),
    b = n(652215);
let M = new Set();
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
            trackGuildAndChannelMetadata: l,
            questContentPosition: o,
            questContentRowIndex: d,
            minViewTimeSeconds: c = 1,
            isQuestEnrollmentBlocked: _,
            onImpression: E,
            sourceQuestContent: u,
        } = e;
        (this.id = (0, r.A)()),
            (this.questContent = i),
            (this.questContentPosition = o),
            (this.minViewTimeSeconds = c),
            (this.minViewportPercentage = 0.5),
            (this.trackGuildAndChannelMetadata = l),
            (this.triggeredByStatusChange = a),
            (this.questContentRowIndex = d),
            (this.isQuestEnrollmentBlocked = _),
            (this.onImpressionCallback = E),
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
        null != t && (0, T.xn)(this.questContent) && M.add(`${e}_${t}`);
    };
    shouldExtendSession = (e) => {
        let t = (0, T.HN)(this.questContent);
        return null != t && !M.has(`${e}_${t}`) && (0, T.xn)(this.questContent);
    };
    onMinViewTimeReached = async () => {
        let e = await (0, c.N)((0, N.jO)(this.questContent)),
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
                ...(0, _.A)(),
                ...(function (e) {
                    let t,
                        n,
                        i = (0, T.xn)(e),
                        a = (0, T.vZ)(e),
                        r = (0, p.pc)(),
                        s = (0, p.Ld)();
                    if (!a?.is_campaign_ias_enabled || !i || void 0 === r || void 0 === s) return null;
                    let l = R.A.getGuildId(),
                        o = null != l ? O.A.getGuild(l) : null,
                        d = {
                            guilds:
                                ((t = r()),
                                (n = O.A.getGuilds()),
                                t
                                    .map((e) => {
                                        let t = n[e];
                                        if (void 0 === t) return null;
                                        let i = { id: t.id, name: t.name };
                                        null !== t.description && (i.description = t.description);
                                        let a =
                                            null !== t.icon
                                                ? (L.Ay.getGuildIconURL({
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
                                null == o
                                    ? []
                                    : s()
                                          .map((e) => {
                                              let t = m.A.getChannel(e);
                                              if (void 0 === t) return null;
                                              let n = { id: t.id, name: (0, f.m1)(t, g.default, C.A) };
                                              return t.topic.length > 0 && (n.channel_topic = t.topic), n;
                                          })
                                          .filter((e) => null !== e),
                        };
                    null != l && (d.selected_guild_id = l);
                    let c =
                        o?.banner !== null && o?.banner !== void 0
                            ? (L.Ay.getGuildBannerURL({ id: o.id, banner: o.banner }, !0) ?? null)
                            : null;
                    return (
                        null !== c && (d.selected_guild_banner_url = c),
                        d.guilds.length > 100 && ((d.guilds = d.guilds.slice(0, 100)), (d.truncated = !0)),
                        d.channels.length > 100 && ((d.channels = d.channels.slice(0, 100)), (d.truncated = !0)),
                        { brand_safety_context: JSON.stringify(d) }
                    );
                })(this.questContent),
            };
        this.entity.adContentIds.forEach((e, i) => {
            let a = (0, T.L4)(this.questContent, e),
                r = this.shouldExtendSession(e);
            if ((this.trackViewedPlacement(e), this.entity.adCreativeType === s.p.QUEST)) {
                let e = this.entity.adContentIds[i],
                    l = I.A.getQuest(e);
                null == l || (0, T.Ic)(l) || (0, A.zh)(s.p.QUEST, [e]),
                    (0, h.L)().info(
                        `${l?.config.messages.questName ?? e} Quest viewed for at least ${this.minViewTimeSeconds}s at ${(0, N.jO)(this.questContent)}`,
                        { impressionId: this.id },
                    ),
                    (0, S.av)({
                        ...t,
                        shouldExtendSession: r,
                        questId: e,
                        event: b.HAw.QUEST_CONTENT_VIEWED,
                        properties: {
                            ...n,
                            ...this.commonProperties(l),
                            metadata_sealed: a ?? null,
                            traffic_metadata_raw: (0, T.yI)(this.questContent, l?.id) ?? null,
                            traffic_metadata_sealed: (0, T.Gp)(this.questContent, l?.id) ?? null,
                        },
                    });
            } else {
                let e = this.entity.adContentIds[i];
                (0, h.L)().info(
                    `${e} ad content viewed for at least ${this.minViewTimeSeconds}s at ${(0, N.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, S.Qg)({
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
                e.entity.adContentIds.forEach((r, l) => {
                    if (e.entity.adCreativeType === s.p.QUEST) {
                        let r = e.entity.adContentIds[l],
                            s = I.A.getQuest(r);
                        (0, h.L)().info(
                            `${s?.config.messages.questName ?? r} Quest impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, S.av)({
                                ...i,
                                questId: r,
                                event: b.HAw.QUEST_CONTENT_VIEW_TIME,
                                properties: { ...a, ...e.commonProperties(s) },
                            });
                    } else {
                        let r = e.entity.adContentIds[l];
                        (0, h.L)().info(
                            `${r} ad content impression ${t ? "terminal " : ""}heartbeat: ${n}ms since last heartbeat`,
                            { impressionId: e.id },
                        ),
                            (0, S.Qg)({
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
        quest_status: null == e ? void 0 : (0, N.NI)(e),
        ...(0, N.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
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
            let a = (0, T.L4)(this.questContent, n);
            if (this.entity.adCreativeType === s.p.QUEST) {
                let n = this.entity.adContentIds[i],
                    r = I.A.getQuest(n);
                (0, h.L)().info(
                    `${r?.config.messages.questName ?? n} Quest became visible at ${(0, N.jO)(this.questContent)}`,
                    { impressionId: this.id },
                ),
                    (0, S.av)({
                        ...e,
                        questId: n,
                        event: b.HAw.QUEST_CONTENT_LOADED,
                        properties: {
                            ...t,
                            metadata_sealed: a ?? null,
                            ...this.commonProperties(r),
                            traffic_metadata_raw: (0, T.yI)(this.questContent, r?.id) ?? null,
                            traffic_metadata_sealed: (0, T.Gp)(this.questContent, r?.id) ?? null,
                        },
                    });
            } else {
                let n = this.entity.adContentIds[i];
                (0, h.L)().info(`${n} ad content became visible at ${(0, N.jO)(this.questContent)}`, {
                    impressionId: this.id,
                }),
                    (0, S.Qg)({
                        ...e,
                        adContentId: n,
                        adCreativeType: this.entity.adCreativeType,
                        event: b.HAw.QUEST_CONTENT_LOADED,
                        properties: { ...t, metadata_sealed: a ?? null, ...this.commonProperties() },
                    });
            }
        }),
            E.A.increment({
                name: l.K.QUEST_CONTENT_IMPRESSION,
                tags: [`quest_content:${(0, N.jO)(this.questContent)}`],
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
let U = a.createContext(void 0);
function v(e) {
    let { visible: t, visibleChanged: n, focused: r, reference: l, focusedChanged: c, sourceQuestContent: _ } = e,
        E = (0, D.iY)(e),
        u = a.useRef(null),
        A = (0, o.bG)([I.A], () => null != I.A.questEnrollmentBlockedUntil, []);
    return (
        (0, d.Ay)(() => () => {
            null != u.current && u.current.stop();
        }),
        a.useEffect(() => {
            let i = r && t,
                a = (n || c || E) && i,
                l = ((n || c) && !i) || E;
            if (((a || l) && null != u.current && u.current.stop(), a)) {
                let t = {
                    isQuestEnrollmentBlocked: A,
                    minViewTimeSeconds: e.minViewTimeSeconds,
                    onImpression: e.onImpression,
                    questContent: e.questContent,
                    questContentPosition: e.questContentPosition,
                    questContentRowIndex: e.questContentRowIndex,
                    sourceQuestContent: _,
                    trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                    triggeredByStatusChange: E,
                };
                e.adCreativeType,
                    s.p.QUEST,
                    (u.current = new P({ ...t, adContentIds: e.adContentIds, adCreativeType: e.adCreativeType })),
                    u.current.start();
            }
        }, [
            r,
            t,
            c,
            n,
            e.adContentIds,
            e.onImpression,
            e.questContent,
            e.questContentPosition,
            e.questContentRowIndex,
            e.trackGuildAndChannelMetadata,
            E,
            e.minViewTimeSeconds,
            A,
            _,
            e.adCreativeType,
        ]),
        (0, i.jsx)(U.Provider, { value: u, children: e.children(l, u) })
    );
}
