n.d(t, {
    B5: () => L,
    PI: () => R,
    WD: () => k,
    aM: () => U,
    ui: () => G,
}),
    n(388685),
    n(953529),
    n(49124),
    n(642613),
    n(415506);
var r = n(54381),
    i = n(473749),
    a = n(772848),
    o = n(286379),
    s = n(442837),
    l = n(493773),
    c = n(110924),
    u = n(516796),
    d = n(186102),
    f = n(113544),
    p = n(797614),
    _ = n(592125),
    m = n(430824),
    h = n(914010),
    g = n(768581),
    E = n(358085),
    b = n(617136),
    y = n(616022),
    O = n(198535),
    v = n(535584),
    S = n(862657),
    I = n(981631);
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
let A = 100,
    N = 60,
    P = 1,
    R = 0.5,
    w = new Set();
function D(e, t) {
    return "".concat(e, "_").concat(t);
}
class x {
    getId() {
        return this.id;
    }
    getQuestContentPosition() {
        return this.questContentPosition;
    }
    getBrandSafetyContext() {
        var e;
        let t = (0, S.VB)(this.questContent),
            n = (0, S.uN)(this.questContent),
            r = (0, f.z5)(),
            i = (0, f.QW)();
        if (!(null == n ? void 0 : n.is_campaign_ias_enabled) || !t || void 0 === r || void 0 === i) return null;
        let a = () => {
                let e = r(),
                    t = m.Z.getGuilds();
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
                                (n = g.ZP.getGuildIconURL({
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
            o = h.Z.getGuildId(),
            s = null != o ? m.Z.getGuild(o) : null,
            l = () =>
                null == s
                    ? []
                    : i()
                          .map((e) => {
                              let t = _.Z.getChannel(e);
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
        null != o && (c.selected_guild_id = o);
        let u =
            (null == s ? void 0 : s.banner) !== null &&
            (null == s ? void 0 : s.banner) !== void 0 &&
            null !=
                (e = g.ZP.getGuildBannerURL(
                    {
                        id: s.id,
                        banner: s.banner,
                    },
                    !0,
                ))
                ? e
                : null;
        return (
            null !== u && (c.selected_guild_banner_url = u),
            c.guilds.length > A && ((c.guilds = c.guilds.slice(0, A)), (c.truncated = !0)),
            c.channels.length > A && ((c.channels = c.channels.slice(0, A)), (c.truncated = !0)),
            { brand_safety_context: JSON.stringify(c) }
        );
    }
    constructor({
        questOrQuests: e,
        questContent: t,
        triggeredByStatusChange: n,
        trackGuildAndChannelMetadata: r,
        questContentPosition: i,
        questContentRowIndex: s,
        minViewTimeSeconds: l = P,
        isQuestEnrollmentBlocked: c,
        sourceQuestContent: f,
    }) {
        var _ = this;
        T(this, "id", void 0),
            T(this, "quests", void 0),
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
            T(this, "onMinViewTimeReached", () => {
                this.quests.forEach((e) => {
                    (0, v.T)().info(
                        ""
                            .concat(e.config.messages.questName, " Quest viewed for at least ")
                            .concat(this.minViewTimeSeconds, "s at ")
                            .concat((0, b._b)(this.questContent)),
                        { impressionId: this.id },
                    );
                    let t = !1,
                        n = (0, S.Zp)(this.questContent);
                    if (null != n) {
                        let r = D(e.id, n);
                        (t = !w.has(r) && (0, S.VB)(this.questContent)) && w.add(r);
                    }
                    let r = (0, S.jY)(this.questContent),
                        i = (0, S.R_)(this.questContent),
                        a = (0, S.NS)(this.questContent, e.id),
                        o = (0, S.K8)(this.questContent, e.id);
                    (0, u.S)((0, b._b)(this.questContent)).then((n) => {
                        (0, b.dA)({
                            questId: e.id,
                            event: I.rMx.QUEST_CONTENT_VIEWED,
                            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                            properties: C(
                                {
                                    min_view_time_seconds: this.minViewTimeSeconds,
                                    min_viewport_percentage: this.minViewportPercentage,
                                    triggered_by_status_change: this.triggeredByStatusChange,
                                    apple_advertising_id: null != n && (0, E.isIOS)() ? n.advertisingId : null,
                                    android_advertising_id: null != n && (0, E.isAndroid)() ? n.advertisingId : null,
                                    metadata_raw: null != r ? r : null,
                                    metadata_sealed: null != i ? i : null,
                                    traffic_metadata_raw: null != a ? a : null,
                                    traffic_metadata_sealed: null != o ? o : null,
                                },
                                (0, d.Z)(),
                                this.commonProperties(e),
                                this.getBrandSafetyContext(),
                            ),
                            shouldExtendSession: t,
                            sourceQuestContent: this.sourceQuestContent,
                        });
                    });
                });
            }),
            T(this, "beat", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                _.quests.forEach((t) => {
                    if (null != _.lastBeatTime) {
                        let n = Math.round(Date.now() - _.lastBeatTime);
                        (0, v.T)().info(
                            ""
                                .concat(t.config.messages.questName, " Quest impression ")
                                .concat(e ? "terminal " : "", "heartbeat: ")
                                .concat(n, "ms since last heartbeat"),
                            { impressionId: _.id },
                        ),
                            (0, b.dA)({
                                questId: t.id,
                                event: I.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: C(
                                    {
                                        is_termination_beat: e,
                                        viewed_time_ms: n,
                                        triggered_by_status_change: _.triggeredByStatusChange,
                                    },
                                    _.commonProperties(t),
                                ),
                                trackGuildAndChannelMetadata: _.trackGuildAndChannelMetadata,
                                sourceQuestContent: _.sourceQuestContent,
                            });
                    }
                }),
                    (_.lastBeatTime = Date.now());
            }),
            T(this, "commonProperties", (e) =>
                C(
                    {
                        impression_id: this.id,
                        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
                        quest_status: (0, b.uk)(e),
                    },
                    (0, b.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex),
                ),
            ),
            T(this, "clone", (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new x({
                        questContent: this.questContent,
                        questOrQuests: this.quests,
                        questContentRowIndex: this.questContentRowIndex,
                        questContentPosition: this.questContentPosition,
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        triggeredByStatusChange: t,
                        isQuestEnrollmentBlocked: this.isQuestEnrollmentBlocked,
                        sourceQuestContent: this.sourceQuestContent,
                    })
                );
            }),
            T(this, "start", () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * N)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(
                        this.onMinViewTimeReached,
                        1000 * this.minViewTimeSeconds,
                    ));
                let e = (0, S.jY)(this.questContent),
                    t = (0, S.R_)(this.questContent);
                this.quests.forEach((n) => {
                    let r = (0, S.NS)(this.questContent, n.id),
                        i = (0, S.K8)(this.questContent, n.id);
                    (0, v.T)().info(
                        ""
                            .concat(n.config.messages.questName, " Quest became visible at ")
                            .concat((0, b._b)(this.questContent)),
                        { impressionId: this.id },
                    ),
                        (0, b.dA)({
                            questId: n.id,
                            event: I.rMx.QUEST_CONTENT_LOADED,
                            properties: C(
                                {
                                    triggered_by_status_change: this.triggeredByStatusChange,
                                    metadata_raw: null != e ? e : null,
                                    metadata_sealed: null != t ? t : null,
                                    traffic_metadata_raw: null != r ? r : null,
                                    traffic_metadata_sealed: null != i ? i : null,
                                },
                                this.commonProperties(n),
                            ),
                            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                            sourceQuestContent: this.sourceQuestContent,
                        });
                }),
                    (0, O.a)("QuestImpressionTracker") &&
                        p.Z.increment({
                            name: o.V.QUEST_CONTENT_IMPRESSION,
                            tags: ["quest_content:".concat((0, b._b)(this.questContent))],
                        }),
                    (this.isRunning = !0);
            }),
            T(this, "stop", function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && _.beat(!0),
                    (_.lastBeatTime = void 0),
                    clearInterval(_.heartbeatTimeoutId),
                    clearTimeout(_.minViewTimeReachedTimeoutId),
                    (_.isRunning = !1);
            }),
            (this.id = (0, a.Z)()),
            (this.questContent = t),
            (this.questContentPosition = i),
            (this.minViewTimeSeconds = l),
            (this.minViewportPercentage = R),
            (this.quests = Array.isArray(e) ? e : [e]),
            (this.trackGuildAndChannelMetadata = r),
            (this.triggeredByStatusChange = n),
            (this.questContentRowIndex = s),
            (this.isQuestEnrollmentBlocked = c),
            (this.sourceQuestContent = f);
    }
}
let L = (e, t) => {
        let n = Array.isArray(e)
            ? e
                  .sort()
                  .map((e) => e.id)
                  .join("_")
            : e.id;
        return "".concat(n, "_").concat(t);
    },
    j = (e) => {
        let t = Array.isArray(e) ? null : (0, b.uk)(e),
            n = (0, c.Z)(t);
        return t !== n;
    },
    M = i.createContext(void 0);
function k() {
    let e = i.useContext(M);
    return null == e ? void 0 : e.current;
}
function U() {
    var e;
    return null == (e = k()) ? void 0 : e.getId();
}
function G(e) {
    let { visible: t, visibleChanged: n, focused: a, reference: o, focusedChanged: c, sourceQuestContent: u } = e,
        d = j(e.questOrQuests),
        f = i.useRef(null),
        p = (0, s.e7)([y.Z], () => null != y.Z.questEnrollmentBlockedUntil, []);
    return (
        (0, l.ZP)(() => () => {
            null != f.current && f.current.stop();
        }),
        i.useEffect(() => {
            let r = a && t,
                i = (n || c || d) && r,
                o = ((n || c) && !r) || d;
            (i || o) && null != f.current && f.current.stop(),
                i &&
                    ((f.current = new x({
                        questOrQuests: e.questOrQuests,
                        questContent: e.questContent,
                        questContentPosition: e.questContentPosition,
                        questContentRowIndex: e.questContentRowIndex,
                        triggeredByStatusChange: d,
                        trackGuildAndChannelMetadata: e.trackGuildAndChannelMetadata,
                        minViewTimeSeconds: e.minViewTimeSeconds,
                        isQuestEnrollmentBlocked: p,
                        sourceQuestContent: u,
                    })),
                    f.current.start());
        }, [
            a,
            t,
            c,
            n,
            e.questOrQuests,
            e.questContent,
            e.questContentPosition,
            e.questContentRowIndex,
            e.trackGuildAndChannelMetadata,
            d,
            e.minViewTimeSeconds,
            p,
            u,
        ]),
        (0, r.jsx)(M.Provider, {
            value: f,
            children: e.children(o, f),
        })
    );
}
