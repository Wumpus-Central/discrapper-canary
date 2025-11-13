n.d(t, {
    B5: () => L,
    PI: () => P,
    WD: () => k,
    aM: () => U,
    ui: () => G,
}),
    n(388685),
    n(953529),
    n(49124),
    n(642613),
    n(415506);
var r = n(951288),
    i = n(647438),
    a = n(772848),
    o = n(286379),
    s = n(442837),
    l = n(493773),
    c = n(110924),
    u = n(516796),
    d = n(186102),
    f = n(113544),
    _ = n(797614),
    p = n(592125),
    h = n(430824),
    m = n(914010),
    g = n(768581),
    E = n(358085),
    b = n(617136),
    y = n(509212),
    O = n(569984),
    v = n(882198),
    I = n(5881),
    T = n(981631);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
let C = 100,
    N = 60,
    R = 1,
    P = 0.5,
    D = new Set();
function w(e, t) {
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
        let t = (0, y.VB)(this.questContent),
            n = (0, y.uN)(this.questContent),
            r = (0, f.z5)(),
            i = (0, f.QW)();
        if (!(null == n ? void 0 : n.is_campaign_ias_enabled) || !t || void 0 === r || void 0 === i) return null;
        let a = () => {
                let e = r(),
                    t = h.Z.getGuilds();
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
            o = m.Z.getGuildId(),
            s = null != o ? h.Z.getGuild(o) : null,
            l = () =>
                null == s
                    ? []
                    : i()
                          .map((e) => {
                              let t = p.Z.getChannel(e);
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
            c.guilds.length > C && ((c.guilds = c.guilds.slice(0, C)), (c.truncated = !0)),
            c.channels.length > C && ((c.channels = c.channels.slice(0, C)), (c.truncated = !0)),
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
        minViewTimeSeconds: l = R,
        isQuestEnrollmentBlocked: c,
        sourceQuestContent: f,
    }) {
        var p = this;
        S(this, "id", void 0),
            S(this, "quests", void 0),
            S(this, "questContent", void 0),
            S(this, "triggeredByStatusChange", void 0),
            S(this, "trackGuildAndChannelMetadata", void 0),
            S(this, "questContentPosition", void 0),
            S(this, "questContentRowIndex", void 0),
            S(this, "sourceQuestContent", void 0),
            S(this, "heartbeatTimeoutId", void 0),
            S(this, "lastBeatTime", void 0),
            S(this, "minViewTimeReachedTimeoutId", void 0),
            S(this, "minViewTimeSeconds", void 0),
            S(this, "minViewportPercentage", void 0),
            S(this, "isQuestEnrollmentBlocked", void 0),
            S(this, "isRunning", !1),
            S(this, "onMinViewTimeReached", () => {
                this.quests.forEach((e) => {
                    (0, I.T)().info(
                        ""
                            .concat(e.config.messages.questName, " Quest viewed for at least ")
                            .concat(this.minViewTimeSeconds, "s at ")
                            .concat((0, b._b)(this.questContent)),
                        { impressionId: this.id },
                    );
                    let t = !1,
                        n = (0, y.Zp)(this.questContent);
                    if (null != n) {
                        let r = w(e.id, n);
                        (t = !D.has(r) && (0, y.VB)(this.questContent)) && D.add(r);
                    }
                    let r = (0, y.jY)(this.questContent);
                    (0, u.S)((0, b._b)(this.questContent)).then((n) => {
                        (0, b.dA)({
                            questId: e.id,
                            event: T.rMx.QUEST_CONTENT_VIEWED,
                            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                            properties: A(
                                {
                                    min_view_time_seconds: this.minViewTimeSeconds,
                                    min_viewport_percentage: this.minViewportPercentage,
                                    triggered_by_status_change: this.triggeredByStatusChange,
                                    apple_advertising_id: null != n && (0, E.isIOS)() ? n.advertisingId : null,
                                    android_advertising_id: null != n && (0, E.isAndroid)() ? n.advertisingId : null,
                                    metadata_raw: null != r ? r : null,
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
            S(this, "beat", function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                p.quests.forEach((t) => {
                    if (null != p.lastBeatTime) {
                        let n = Math.round(Date.now() - p.lastBeatTime);
                        (0, I.T)().info(
                            ""
                                .concat(t.config.messages.questName, " Quest impression ")
                                .concat(e ? "terminal " : "", "heartbeat: ")
                                .concat(n, "ms since last heartbeat"),
                            { impressionId: p.id },
                        ),
                            (0, b.dA)({
                                questId: t.id,
                                event: T.rMx.QUEST_CONTENT_VIEW_TIME,
                                properties: A(
                                    {
                                        is_termination_beat: e,
                                        viewed_time_ms: n,
                                        triggered_by_status_change: p.triggeredByStatusChange,
                                    },
                                    p.commonProperties(t),
                                ),
                                trackGuildAndChannelMetadata: p.trackGuildAndChannelMetadata,
                                sourceQuestContent: p.sourceQuestContent,
                            });
                    }
                }),
                    (p.lastBeatTime = Date.now());
            }),
            S(this, "commonProperties", (e) =>
                A(
                    {
                        impression_id: this.id,
                        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
                        quest_status: (0, b.uk)(e),
                    },
                    (0, b.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex),
                ),
            ),
            S(this, "clone", (e) => {
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
            S(this, "start", () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * N)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(
                        this.onMinViewTimeReached,
                        1000 * this.minViewTimeSeconds,
                    ));
                let e = (0, y.jY)(this.questContent);
                this.quests.forEach((t) => {
                    (0, I.T)().info(
                        ""
                            .concat(t.config.messages.questName, " Quest became visible at ")
                            .concat((0, b._b)(this.questContent)),
                        { impressionId: this.id },
                    ),
                        (0, b.dA)({
                            questId: t.id,
                            event: T.rMx.QUEST_CONTENT_LOADED,
                            properties: A(
                                {
                                    triggered_by_status_change: this.triggeredByStatusChange,
                                    metadata_raw: null != e ? e : null,
                                },
                                this.commonProperties(t),
                            ),
                            trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                            sourceQuestContent: this.sourceQuestContent,
                        });
                }),
                    (0, v.a)("QuestImpressionTracker") &&
                        _.Z.increment({
                            name: o.V.QUEST_CONTENT_IMPRESSION,
                            tags: ["quest_content:".concat((0, b._b)(this.questContent))],
                        }),
                    (this.isRunning = !0);
            }),
            S(this, "stop", function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && p.beat(!0),
                    (p.lastBeatTime = void 0),
                    clearInterval(p.heartbeatTimeoutId),
                    clearTimeout(p.minViewTimeReachedTimeoutId),
                    (p.isRunning = !1);
            }),
            (this.id = (0, a.Z)()),
            (this.questContent = t),
            (this.questContentPosition = i),
            (this.minViewTimeSeconds = l),
            (this.minViewportPercentage = P),
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
    M = (e) => {
        let t = Array.isArray(e) ? null : (0, b.uk)(e),
            n = (0, c.Z)(t);
        return t !== n;
    },
    j = i.createContext(void 0);
function k() {
    let e = i.useContext(j);
    return null == e ? void 0 : e.current;
}
function U() {
    var e;
    return null == (e = k()) ? void 0 : e.getId();
}
function G(e) {
    let { visible: t, visibleChanged: n, focused: a, reference: o, focusedChanged: c, sourceQuestContent: u } = e,
        d = M(e.questOrQuests),
        f = i.useRef(null),
        _ = (0, s.e7)([O.Z], () => null != O.Z.questEnrollmentBlockedUntil, []);
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
                        isQuestEnrollmentBlocked: _,
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
            _,
            u,
        ]),
        (0, r.jsx)(j.Provider, {
            value: f,
            children: e.children(o, f),
        })
    );
}
