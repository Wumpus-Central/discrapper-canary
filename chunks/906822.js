n.d(t, {
    RC: () => G,
    bK: () => Y,
    go: () => H,
    ur: () => x,
    vU: () => B,
}),
    n(896048),
    n(228524),
    n(457529),
    n(638769),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(835245),
    s = n(323889),
    o = n(731738),
    l = n(311907),
    c = n(964486),
    u = n(475743),
    d = n(345353),
    f = n(69114),
    p = n(633965),
    _ = n(831062),
    h = n(734057),
    m = n(71393),
    g = n(967198),
    E = n(486020),
    b = n(723702),
    y = n(216456),
    O = n(859703),
    A = n(628473),
    v = n(943849),
    S = n(710969),
    I = n(652215);

function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}

function N(e, t) {
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

function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = 100,
    P = 60,
    D = 1,
    x = 0.5,
    L = new Set();

function j(e, t) {
    return "".concat(e, "_").concat(t);
}
class M {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    getBrandSafetyContext() {
        var e;
        let t = (0, S.xn)(this.questContent),
            n = (0, S.vZ)(this.questContent),
            r = (0, p.pc)(),
            i = (0, p.Ld)();
        if (!(null == n ? void 0 : n.is_campaign_ias_enabled) || !t || void 0 === r || void 0 === i) return null;
        let a = () => {
                let e = r(),
                    t = m.A.getGuilds();
                return e
                    .map((e) => {
                        var n;
                        let r = t[e];
                        if (void 0 === r) return null;
                        let i = {
                            id: r.id,
                            name: r.name,
                        };
                        null !== r.description && (i.description = r.description);
                        let a =
                            null !== r.icon &&
                            null !=
                                (n = E.Ay.getGuildIconURL({
                                    id: r.id,
                                    icon: r.icon,
                                    size: 44,
                                    canAnimate: !0,
                                }))
                                ? n
                                : null;
                        return null !== a && (i.icon_url = a), i;
                    })
                    .filter((e) => null !== e);
            },
            s = g.A.getGuildId(),
            o = null != s ? m.A.getGuild(s) : null,
            l = () =>
                null == o
                    ? []
                    : i()
                          .map((e) => {
                              let t = h.A.getChannel(e);
                              if (void 0 === t) return null;
                              let n = {
                                  id: t.id,
                                  name: t.name,
                              };
                              return t.topic.length > 0 && (n.channel_topic = t.topic), n;
                          })
                          .filter((e) => null !== e),
            c = {
                guilds: a(),
                channels: l(),
            };
        null != s && (c.selected_guild_id = s);
        let u =
            (null == o ? void 0 : o.banner) !== null &&
            (null == o ? void 0 : o.banner) !== void 0 &&
            null !=
                (e = E.Ay.getGuildBannerURL(
                    {
                        id: o.id,
                        banner: o.banner,
                    },
                    !0,
                ))
                ? e
                : null;
        return (
            null !== u && (c.selected_guild_banner_url = u),
            c.guilds.length > w && ((c.guilds = c.guilds.slice(0, w)), (c.truncated = !0)),
            c.channels.length > w && ((c.channels = c.channels.slice(0, w)), (c.truncated = !0)),
            {
                brand_safety_context: JSON.stringify(c),
            }
        );
    }
    constructor(e) {
        var t = this;
        T(this, "id", void 0),
            T(this, "entity", void 0),
            T(this, "questContent", void 0),
            T(this, "triggeredByStatusChange", void 0),
            T(this, "trackGuildAndChannelMetadata", void 0),
            T(this, "questContentPosition", void 0),
            T(this, "questContentRowIndex", void 0),
            T(this, "sourceQuestContent", void 0),
            T(this, "heartbeatTimeoutId", void 0),
            T(this, "lastBeatTime", void 0),
            T(this, "minViewTimeReachedTimeoutId", void 0),
            T(this, "minViewTimeSeconds", void 0),
            T(this, "minViewportPercentage", void 0),
            T(this, "isQuestEnrollmentBlocked", void 0),
            T(this, "isRunning", !1),
            T(this, "trackViewedPlacement", (e) => {
                let t = (0, S.HN)(this.questContent);
                null != t && (0, S.xn)(this.questContent) && L.add(j(e, t));
            }),
            T(this, "shouldExtendSession", (e) => {
                let t = (0, S.HN)(this.questContent);
                return null != t && !L.has(j(e, t)) && (0, S.xn)(this.questContent);
            }),
            T(this, "onMinViewTimeReached", async () => {
                let e = (0, S.Li)(this.questContent),
                    t = (0, S.L4)(this.questContent),
                    n = await (0, d.N)((0, y.jO)(this.questContent)),
                    r = {
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        sourceQuestContent: this.sourceQuestContent,
                    },
                    i = C(
                        {
                            min_view_time_seconds: this.minViewTimeSeconds,
                            min_viewport_percentage: this.minViewportPercentage,
                            triggered_by_status_change: this.triggeredByStatusChange,
                            apple_advertising_id: null != n && (0, b.isIOS)() ? n.advertisingId : null,
                            android_advertising_id: null != n && (0, b.isAndroid)() ? n.advertisingId : null,
                            metadata_raw: null != e ? e : null,
                            metadata_sealed: null != t ? t : null,
                        },
                        (0, f.A)(),
                        this.getBrandSafetyContext(),
                    );
                this.entity.adContentIds.forEach((e, t) => {
                    let n = this.shouldExtendSession(e);
                    if ((this.trackViewedPlacement(e), this.entity.adCreativeType === s.p.QUEST)) {
                        var a, o, l;
                        let e = this.entity.adContentIds[t],
                            s = O.A.getQuest(e);
                        (0, v.L)().info(
                            ""
                                .concat(
                                    null != (a = null == s ? void 0 : s.config.messages.questName) ? a : e,
                                    " Quest viewed for at least ",
                                )
                                .concat(this.minViewTimeSeconds, "s at ")
                                .concat((0, y.jO)(this.questContent)),
                            {
                                impressionId: this.id,
                            },
                        ),
                            (0, y.av)(
                                R(C({}, r), {
                                    shouldExtendSession: n,
                                    questId: e,
                                    event: I.HAw.QUEST_CONTENT_VIEWED,
                                    properties: R(C({}, i, this.commonProperties(s)), {
                                        traffic_metadata_raw:
                                            null != (o = (0, S.yI)(this.questContent, null == s ? void 0 : s.id))
                                                ? o
                                                : null,
                                        traffic_metadata_sealed:
                                            null != (l = (0, S.Gp)(this.questContent, null == s ? void 0 : s.id))
                                                ? l
                                                : null,
                                    }),
                                }),
                            );
                    } else {
                        let e = this.entity.adContentIds[t];
                        (0, v.L)().info(
                            ""
                                .concat(e, " ad content viewed for at least ")
                                .concat(this.minViewTimeSeconds, "s at ")
                                .concat((0, y.jO)(this.questContent)),
                            {
                                impressionId: this.id,
                            },
                        ),
                            (0, y.Qg)(
                                R(C({}, r), {
                                    shouldExtendSession: n,
                                    adContentId: e,
                                    adCreativeType: this.entity.adCreativeType,
                                    event: I.HAw.QUEST_CONTENT_VIEWED,
                                    properties: C({}, i, this.commonProperties()),
                                }),
                            );
                    }
                });
            }),
            T(this, "beat", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (null != t.lastBeatTime) {
                    let n = Math.round(Date.now() - t.lastBeatTime),
                        r = {
                            trackGuildAndChannelMetadata: t.trackGuildAndChannelMetadata,
                            sourceQuestContent: t.sourceQuestContent,
                        },
                        i = {
                            is_termination_beat: e,
                            viewed_time_ms: n,
                            triggered_by_status_change: t.triggeredByStatusChange,
                        };
                    t.entity.adContentIds.forEach((a, o) => {
                        if (t.entity.adCreativeType === s.p.QUEST) {
                            var l;
                            let a = t.entity.adContentIds[o],
                                s = O.A.getQuest(a);
                            (0, v.L)().info(
                                ""
                                    .concat(
                                        null != (l = null == s ? void 0 : s.config.messages.questName) ? l : a,
                                        " Quest impression ",
                                    )
                                    .concat(e ? "terminal " : "", "heartbeat: ")
                                    .concat(n, "ms since last heartbeat"),
                                {
                                    impressionId: t.id,
                                },
                            ),
                                (0, y.av)(
                                    R(C({}, r), {
                                        questId: a,
                                        event: I.HAw.QUEST_CONTENT_VIEW_TIME,
                                        properties: C({}, i, t.commonProperties(s)),
                                    }),
                                );
                        } else {
                            let a = t.entity.adContentIds[o];
                            (0, v.L)().info(
                                ""
                                    .concat(a, " ad content impression ")
                                    .concat(e ? "terminal " : "", "heartbeat: ")
                                    .concat(n, "ms since last heartbeat"),
                                {
                                    impressionId: t.id,
                                },
                            ),
                                (0, y.Qg)(
                                    R(C({}, r), {
                                        adContentId: a,
                                        adCreativeType: t.entity.adCreativeType,
                                        event: I.HAw.QUEST_CONTENT_VIEW_TIME,
                                        properties: C({}, i, t.commonProperties()),
                                    }),
                                );
                        }
                    });
                }
                t.lastBeatTime = Date.now();
            }),
            T(this, "commonProperties", (e) =>
                C(
                    {
                        impression_id: this.id,
                        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
                        quest_status: null == e ? void 0 : (0, y.NI)(e),
                    },
                    (0, y.fF)(this.questContent, this.questContentPosition, this.questContentRowIndex),
                ),
            ),
            T(this, "clone", (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new M(
                        C(
                            {
                                questContent: this.questContent,
                                questContentRowIndex: this.questContentRowIndex,
                                questContentPosition: this.questContentPosition,
                                trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                                triggeredByStatusChange: t,
                                isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
                                sourceQuestContent: this.sourceQuestContent,
                            },
                            this.entity,
                        ),
                    )
                );
            }),
            T(this, "start", () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1e3 * P)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(
                        this.onMinViewTimeReached,
                        1e3 * this.minViewTimeSeconds,
                    ));
                let e = (0, S.Li)(this.questContent),
                    t = (0, S.L4)(this.questContent),
                    n = {
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        sourceQuestContent: this.sourceQuestContent,
                    },
                    r = {
                        triggered_by_status_change: this.triggeredByStatusChange,
                        metadata_raw: null != e ? e : null,
                        metadata_sealed: null != t ? t : null,
                    };
                this.entity.adContentIds.forEach((e, t) => {
                    if (this.entity.adCreativeType === s.p.QUEST) {
                        var i, a, o;
                        let e = this.entity.adContentIds[t],
                            s = O.A.getQuest(e);
                        (0, v.L)().info(
                            ""
                                .concat(
                                    null != (i = null == s ? void 0 : s.config.messages.questName) ? i : e,
                                    " Quest became visible at ",
                                )
                                .concat((0, y.jO)(this.questContent)),
                            {
                                impressionId: this.id,
                            },
                        ),
                            (0, y.av)(
                                R(C({}, n), {
                                    questId: e,
                                    event: I.HAw.QUEST_CONTENT_LOADED,
                                    properties: R(C({}, r, this.commonProperties(s)), {
                                        traffic_metadata_raw:
                                            null != (a = (0, S.yI)(this.questContent, null == s ? void 0 : s.id))
                                                ? a
                                                : null,
                                        traffic_metadata_sealed:
                                            null != (o = (0, S.Gp)(this.questContent, null == s ? void 0 : s.id))
                                                ? o
                                                : null,
                                    }),
                                }),
                            );
                    } else {
                        let e = this.entity.adContentIds[t];
                        (0, v.L)().info(
                            "".concat(e, " ad content became visible at ").concat((0, y.jO)(this.questContent)),
                            {
                                impressionId: this.id,
                            },
                        ),
                            (0, y.Qg)(
                                R(C({}, n), {
                                    adContentId: e,
                                    adCreativeType: this.entity.adCreativeType,
                                    event: I.HAw.QUEST_CONTENT_LOADED,
                                    properties: C({}, r, this.commonProperties()),
                                }),
                            );
                    }
                }),
                    (0, A.x)("QuestImpressionTracker") &&
                        _.A.increment({
                            name: o.K.QUEST_CONTENT_IMPRESSION,
                            tags: ["quest_content:".concat((0, y.jO)(this.questContent))],
                        }),
                    (this.isRunning = !0);
            }),
            T(this, "stop", function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && t.beat(!0),
                    (t.lastBeatTime = void 0),
                    clearInterval(t.heartbeatTimeoutId),
                    clearTimeout(t.minViewTimeReachedTimeoutId),
                    (t.isRunning = !1);
            });
        const {
            adContentIds: n,
            adCreativeType: r,
            questContent: i,
            triggeredByStatusChange: l,
            trackGuildAndChannelMetadata: c,
            questContentPosition: u,
            questContentRowIndex: p,
            minViewTimeSeconds: h = D,
            isQuestEnrollmentBlocked: m,
            sourceQuestContent: g,
        } = e;
        (this.id = (0, a.A)()),
            (this.questContent = i),
            (this.questContentPosition = u),
            (this.minViewTimeSeconds = h),
            (this.minViewportPercentage = x),
            (this.trackGuildAndChannelMetadata = c),
            (this.triggeredByStatusChange = l),
            (this.questContentRowIndex = p),
            (this.isQuestEnrollmentBlocked = m),
            (this.sourceQuestContent = g),
            s.p.QUEST,
            (this.entity = {
                adContentIds: n,
                adCreativeType: r,
            });
    }
}

function k(e) {
    let { adContentIds: t, questContent: n } = e;
    return "".concat([...t].sort().join("_"), "_").concat(n);
}

function U(e, t) {
    return i.useMemo(
        () => (null != t ? [t] : null != e ? (Array.isArray(e) ? e.map((e) => e.id) : [e.id]) : []),
        [e, t],
    );
}

function G(e) {
    let t = U("questOrQuests" in e ? e.questOrQuests : void 0, "adContentId" in e ? e.adContentId : void 0),
        n = "questOrQuests" in e ? s.p.QUEST : e.adCreativeType;
    return i.useMemo(() => {
        let r = k({
            adContentIds: t,
            questContent: e.questContent,
        });
        return (
            s.p.QUEST,
            {
                adContentIds: t,
                adCreativeType: n,
                key: r,
            }
        );
    }, [t, e.questContent, n]);
}

function V(e) {
    let { adContentIds: t, adCreativeType: n } = e,
        r = (0, l.bG)([O.A], () => (n !== s.p.QUEST || 1 !== t.length ? null : O.A.getQuest(t[0])), [t, n]),
        a = i.useMemo(() => (null == r ? null : (0, y.NI)(r)), [r]),
        o = (0, u.A)(a);
    return a !== o;
}
let F = i.createContext(void 0);

function B() {
    let e = i.useContext(F);
    return null == e ? void 0 : e.current;
}

function H() {
    var e;
    return null == (e = B()) ? void 0 : e.getId();
}

function Y(e) {
    let { visible: t, visibleChanged: n, focused: a, reference: o, focusedChanged: u, sourceQuestContent: d } = e,
        f = V(e),
        p = i.useRef(null),
        _ = (0, l.bG)([O.A], () => null != O.A.questEnrollmentBlockedUntil, []);
    return (
        (0, c.Ay)(() => () => {
            null != p.current && p.current.stop();
        }),
        i.useEffect(() => {
            let r = a && t,
                i = (n || u || f) && r,
                o = ((n || u) && !r) || f;
            if (((i || o) && null != p.current && p.current.stop(), i)) {
                let t = {
                    isQuestEnrollmentBlocked: _,
                    minViewTimeSeconds: e.minViewTimeSeconds,
                    questContent: e.questContent,
                    questContentPosition: e.questContentPosition,
                    questContentRowIndex: e.questContentRowIndex,
                    sourceQuestContent: d,
                    trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                    triggeredByStatusChange: f,
                };
                e.adCreativeType,
                    s.p.QUEST,
                    (p.current = new M(
                        R(C({}, t), {
                            adContentIds: e.adContentIds,
                            adCreativeType: e.adCreativeType,
                        }),
                    )),
                    p.current.start();
            }
        }, [
            a,
            t,
            u,
            n,
            e.adContentIds,
            e.questContent,
            e.questContentPosition,
            e.questContentRowIndex,
            e.trackGuildAndChannelMetadata,
            f,
            e.minViewTimeSeconds,
            _,
            d,
            e.adCreativeType,
        ]),
        (0, r.jsx)(F.Provider, {
            value: p,
            children: e.children(o, p),
        })
    );
}
