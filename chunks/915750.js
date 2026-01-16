n.d(t, {
    $I: () => G,
    PI: () => x,
    WD: () => B,
    aM: () => V,
    ui: () => H,
}),
    n(388685),
    n(953529),
    n(49124),
    n(642613),
    n(415506);
var r = n(54381),
    i = n(473749),
    a = n(772848),
    o = n(228577),
    s = n(286379),
    l = n(442837),
    c = n(493773),
    u = n(110924),
    d = n(516796),
    f = n(186102),
    p = n(113544),
    _ = n(797614),
    h = n(592125),
    m = n(430824),
    g = n(914010),
    E = n(768581),
    b = n(358085),
    y = n(617136),
    O = n(616022),
    v = n(198535),
    S = n(535584),
    I = n(862657),
    T = n(981631);
function C(e, t, n) {
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
                C(e, t, n[t]);
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
function P(e, t) {
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
    R = 60,
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
        let t = (0, I.VB)(this.questContent),
            n = (0, I.uN)(this.questContent),
            r = (0, p.z5)(),
            i = (0, p.QW)();
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
                                (n = E.ZP.getGuildIconURL({
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
            o = g.Z.getGuildId(),
            s = null != o ? m.Z.getGuild(o) : null,
            l = () =>
                null == s
                    ? []
                    : i()
                          .map((e) => {
                              let t = h.Z.getChannel(e);
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
                (e = E.ZP.getGuildBannerURL(
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
            c.guilds.length > w && ((c.guilds = c.guilds.slice(0, w)), (c.truncated = !0)),
            c.channels.length > w && ((c.channels = c.channels.slice(0, w)), (c.truncated = !0)),
            { brand_safety_context: JSON.stringify(c) }
        );
    }
    constructor(e) {
        var t = this;
        C(this, "id", void 0),
            C(this, "entity", void 0),
            C(this, "questContent", void 0),
            C(this, "triggeredByStatusChange", void 0),
            C(this, "trackGuildAndChannelMetadata", void 0),
            C(this, "questContentPosition", void 0),
            C(this, "questContentRowIndex", void 0),
            C(this, "sourceQuestContent", void 0),
            C(this, "heartbeatTimeoutId", void 0),
            C(this, "lastBeatTime", void 0),
            C(this, "minViewTimeReachedTimeoutId", void 0),
            C(this, "minViewTimeSeconds", void 0),
            C(this, "minViewportPercentage", void 0),
            C(this, "isQuestEnrollmentBlocked", void 0),
            C(this, "isRunning", !1),
            C(this, "trackViewedPlacement", (e) => {
                let t = (0, I.Zp)(this.questContent);
                null != t && (0, I.VB)(this.questContent) && L.add(j(e, t));
            }),
            C(this, "shouldExtendSession", (e) => {
                let t = (0, I.Zp)(this.questContent);
                return null != t && !L.has(j(e, t)) && (0, I.VB)(this.questContent);
            }),
            C(this, "onMinViewTimeReached", async () => {
                let e = (0, I.jY)(this.questContent),
                    t = (0, I.R_)(this.questContent),
                    n = await (0, d.S)((0, y._b)(this.questContent)),
                    r = {
                        trackGuildAndChannelMetadata: this.trackGuildAndChannelMetadata,
                        sourceQuestContent: this.sourceQuestContent,
                    },
                    i = A(
                        {
                            min_view_time_seconds: this.minViewTimeSeconds,
                            min_viewport_percentage: this.minViewportPercentage,
                            triggered_by_status_change: this.triggeredByStatusChange,
                            apple_advertising_id: null != n && (0, b.isIOS)() ? n.advertisingId : null,
                            android_advertising_id: null != n && (0, b.isAndroid)() ? n.advertisingId : null,
                            metadata_raw: null != e ? e : null,
                            metadata_sealed: null != t ? t : null,
                        },
                        (0, f.Z)(),
                        this.getBrandSafetyContext(),
                    );
                this.entity.adContentIds.forEach((e, t) => {
                    let n = this.shouldExtendSession(e);
                    if ((this.trackViewedPlacement(e), this.entity.adCreativeType === o.E.QUEST)) {
                        var a, s, l;
                        let e = this.entity.adContentIds[t],
                            o = O.Z.getQuest(e);
                        (0, S.T)().info(
                            ""
                                .concat(
                                    null != (a = null == o ? void 0 : o.config.messages.questName) ? a : e,
                                    " Quest viewed for at least ",
                                )
                                .concat(this.minViewTimeSeconds, "s at ")
                                .concat((0, y._b)(this.questContent)),
                            { impressionId: this.id },
                        ),
                            (0, y.dA)(
                                P(A({}, r), {
                                    shouldExtendSession: n,
                                    questId: e,
                                    event: T.rMx.QUEST_CONTENT_VIEWED,
                                    properties: P(A({}, i, this.commonProperties(o)), {
                                        traffic_metadata_raw:
                                            null != (s = (0, I.NS)(this.questContent, null == o ? void 0 : o.id))
                                                ? s
                                                : null,
                                        traffic_metadata_sealed:
                                            null != (l = (0, I.K8)(this.questContent, null == o ? void 0 : o.id))
                                                ? l
                                                : null,
                                    }),
                                }),
                            );
                    } else {
                        let e = this.entity.adContentIds[t];
                        (0, S.T)().info(
                            ""
                                .concat(e, " ad content viewed for at least ")
                                .concat(this.minViewTimeSeconds, "s at ")
                                .concat((0, y._b)(this.questContent)),
                            { impressionId: this.id },
                        ),
                            (0, y.Gf)(
                                P(A({}, r), {
                                    shouldExtendSession: n,
                                    adContentId: e,
                                    adCreativeType: this.entity.adCreativeType,
                                    event: T.rMx.QUEST_CONTENT_VIEWED,
                                    properties: A({}, i, this.commonProperties()),
                                }),
                            );
                    }
                });
            }),
            C(this, "beat", function () {
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
                    t.entity.adContentIds.forEach((a, s) => {
                        if (t.entity.adCreativeType === o.E.QUEST) {
                            var l;
                            let a = t.entity.adContentIds[s],
                                o = O.Z.getQuest(a);
                            (0, S.T)().info(
                                ""
                                    .concat(
                                        null != (l = null == o ? void 0 : o.config.messages.questName) ? l : a,
                                        " Quest impression ",
                                    )
                                    .concat(e ? "terminal " : "", "heartbeat: ")
                                    .concat(n, "ms since last heartbeat"),
                                { impressionId: t.id },
                            ),
                                (0, y.dA)(
                                    P(A({}, r), {
                                        questId: a,
                                        event: T.rMx.QUEST_CONTENT_VIEW_TIME,
                                        properties: A({}, i, t.commonProperties(o)),
                                    }),
                                );
                        } else {
                            let a = t.entity.adContentIds[s];
                            (0, S.T)().info(
                                ""
                                    .concat(a, " ad content impression ")
                                    .concat(e ? "terminal " : "", "heartbeat: ")
                                    .concat(n, "ms since last heartbeat"),
                                { impressionId: t.id },
                            ),
                                (0, y.Gf)(
                                    P(A({}, r), {
                                        adContentId: a,
                                        adCreativeType: t.entity.adCreativeType,
                                        event: T.rMx.QUEST_CONTENT_VIEW_TIME,
                                        properties: A({}, i, t.commonProperties()),
                                    }),
                                );
                        }
                    });
                }
                t.lastBeatTime = Date.now();
            }),
            C(this, "commonProperties", (e) =>
                A(
                    {
                        impression_id: this.id,
                        is_quest_enrollment_blocked: this.isQuestEnrollmentBlocked,
                        quest_status: null == e ? void 0 : (0, y.uk)(e),
                    },
                    (0, y.mH)(this.questContent, this.questContentPosition, this.questContentRowIndex),
                ),
            ),
            C(this, "clone", (e) => {
                let { triggeredByStatusChange: t } = e;
                return (
                    this.stop(),
                    new M(
                        A(
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
            C(this, "start", () => {
                this.stop(!1),
                    (this.lastBeatTime = Date.now()),
                    (this.heartbeatTimeoutId = window.setInterval(() => this.beat(), 1000 * R)),
                    (this.minViewTimeReachedTimeoutId = window.setTimeout(
                        this.onMinViewTimeReached,
                        1000 * this.minViewTimeSeconds,
                    ));
                let e = (0, I.jY)(this.questContent),
                    t = (0, I.R_)(this.questContent),
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
                    if (this.entity.adCreativeType === o.E.QUEST) {
                        var i, a, s;
                        let e = this.entity.adContentIds[t],
                            o = O.Z.getQuest(e);
                        (0, S.T)().info(
                            ""
                                .concat(
                                    null != (i = null == o ? void 0 : o.config.messages.questName) ? i : e,
                                    " Quest became visible at ",
                                )
                                .concat((0, y._b)(this.questContent)),
                            { impressionId: this.id },
                        ),
                            (0, y.dA)(
                                P(A({}, n), {
                                    questId: e,
                                    event: T.rMx.QUEST_CONTENT_LOADED,
                                    properties: P(A({}, r, this.commonProperties(o)), {
                                        traffic_metadata_raw:
                                            null != (a = (0, I.NS)(this.questContent, null == o ? void 0 : o.id))
                                                ? a
                                                : null,
                                        traffic_metadata_sealed:
                                            null != (s = (0, I.K8)(this.questContent, null == o ? void 0 : o.id))
                                                ? s
                                                : null,
                                    }),
                                }),
                            );
                    } else {
                        let e = this.entity.adContentIds[t];
                        (0, S.T)().info(
                            "".concat(e, " ad content became visible at ").concat((0, y._b)(this.questContent)),
                            { impressionId: this.id },
                        ),
                            (0, y.Gf)(
                                P(A({}, n), {
                                    adContentId: e,
                                    adCreativeType: this.entity.adCreativeType,
                                    event: T.rMx.QUEST_CONTENT_LOADED,
                                    properties: A({}, r, this.commonProperties()),
                                }),
                            );
                    }
                }),
                    (0, v.a)("QuestImpressionTracker") &&
                        _.Z.increment({
                            name: s.V.QUEST_CONTENT_IMPRESSION,
                            tags: ["quest_content:".concat((0, y._b)(this.questContent))],
                        }),
                    (this.isRunning = !0);
            }),
            C(this, "stop", function () {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                e && t.beat(!0),
                    (t.lastBeatTime = void 0),
                    clearInterval(t.heartbeatTimeoutId),
                    clearTimeout(t.minViewTimeReachedTimeoutId),
                    (t.isRunning = !1);
            });
        let {
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
        (this.id = (0, a.Z)()),
            (this.questContent = i),
            (this.questContentPosition = u),
            (this.minViewTimeSeconds = h),
            (this.minViewportPercentage = x),
            (this.trackGuildAndChannelMetadata = c),
            (this.triggeredByStatusChange = l),
            (this.questContentRowIndex = p),
            (this.isQuestEnrollmentBlocked = m),
            (this.sourceQuestContent = g),
            o.E.QUEST,
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
        n = "questOrQuests" in e ? o.E.QUEST : e.adCreativeType;
    return i.useMemo(() => {
        let r = k({
            adContentIds: t,
            questContent: e.questContent,
        });
        return (
            o.E.QUEST,
            {
                adContentIds: t,
                adCreativeType: n,
                key: r,
            }
        );
    }, [t, e.questContent, n]);
}
function Z(e) {
    let { adContentIds: t, adCreativeType: n } = e,
        r = (0, l.e7)([O.Z], () => (n !== o.E.QUEST || 1 !== t.length ? null : O.Z.getQuest(t[0])), [t, n]),
        a = i.useMemo(() => (null == r ? null : (0, y.uk)(r)), [r]),
        s = (0, u.Z)(a);
    return a !== s;
}
let F = i.createContext(void 0);
function B() {
    let e = i.useContext(F);
    return null == e ? void 0 : e.current;
}
function V() {
    var e;
    return null == (e = B()) ? void 0 : e.getId();
}
function H(e) {
    let { visible: t, visibleChanged: n, focused: a, reference: s, focusedChanged: u, sourceQuestContent: d } = e,
        f = Z(e),
        p = i.useRef(null),
        _ = (0, l.e7)([O.Z], () => null != O.Z.questEnrollmentBlockedUntil, []);
    return (
        (0, c.ZP)(() => () => {
            null != p.current && p.current.stop();
        }),
        i.useEffect(() => {
            let r = a && t,
                i = (n || u || f) && r,
                s = ((n || u) && !r) || f;
            if (((i || s) && null != p.current && p.current.stop(), i)) {
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
                    o.E.QUEST,
                    (p.current = new M(
                        P(A({}, t), {
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
            children: e.children(s, p),
        })
    );
}
