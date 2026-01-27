n.d(t, {
    CV: () => k,
    Fr: () => er,
    Gn: () => ee,
    Gt: () => Q,
    HA: () => $,
    N1: () => G,
    Oq: () => Y,
    Ov: () => U,
    Oy: () => H,
    QG: () => et,
    R2: () => F,
    Tb: () => eu,
    UZ: () => Z,
    WM: () => B,
    Yb: () => q,
    d6: () => X,
    dQ: () => el,
    g5: () => K,
    jh: () => W,
    lk: () => z,
    lx: () => J,
    qY: () => eo,
    r8: () => en,
    uI: () => ea,
    vD: () => j,
    xB: () => es,
    yO: () => ei,
}),
    n(65821),
    n(896048),
    n(680155),
    n(323874),
    n(14289),
    n(35956);
var r = n(110259),
    i = n(562465),
    a = n(73153),
    o = n(181658),
    s = n(881615),
    l = n(861638),
    c = n(577015),
    u = n(69114),
    d = n(253932),
    f = n(310829),
    p = n(967198),
    _ = n(954571),
    h = n(927813),
    m = n(499785),
    g = n(681370),
    E = n(260364),
    y = n(869359),
    b = n(859703),
    O = n(341915),
    v = n(405670),
    A = n(331138),
    I = n(579473),
    S = n(561844),
    T = n(710969),
    C = n(229006),
    N = n(654487),
    w = n(652215),
    R = n(985018);

function P(e, t, n) {
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

function D(e) {
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
                P(e, t, n[t]);
            });
    }
    return e;
}

function L(e, t) {
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

function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : L(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let M = 5;
async function j(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await i.Bo.post({
                url: w.Rsh.QUEST_ON_CONSOLE_START(e),
                query: t
                    ? {
                          preview: t,
                      }
                    : void 0,
                failImmediatelyWhenRateLimited: !0,
                rejectWithError: !1,
            })
        ).body;
        if (null != n.quest_user_status)
            a.h.dispatch({
                type: "QUESTS_USER_STATUS_UPDATE",
                user_status: n.quest_user_status,
            });
        else if (null != n.error_hints_v2 && n.error_hints_v2.length > 0)
            return {
                errorHints: n.error_hints_v2.slice(0, M),
            };
    } catch (r) {
        var n;
        let e = new o.A(r);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: O.xv.RATE_LIMITED,
                        message: R.intl.string(R.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = null != (n = e.getAnyErrorMessage()) ? n : R.intl.string(R.t.xSCvBf);
        return {
            errorHints: [
                {
                    type: O.xv.GENERIC,
                    message: t,
                    connected_account_id: "",
                    connected_account_type: "",
                },
            ],
        };
    }
    return {
        errorHints: [],
    };
}
async function k(e) {
    await i.Bo.post({
        url: w.Rsh.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1,
    });
}
async function U() {
    await i.Bo.del({
        url: w.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS,
        rejectWithError: !1,
    });
}
async function G() {
    if (!b.A.isFetchingCurrentQuests) {
        a.h.dispatch({
            type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN",
        });
        try {
            let e = await i.Bo.get({
                    url: w.Rsh.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1,
                }),
                t = e.body.quests.filter((e) => (0, C.s2)(e)).map((e) => (0, C.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => {
                    var t;
                    return (
                        (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null ||
                        e.config.rewardsConfig.platforms.length > 0
                    );
                }),
                o = e.body.excluded_quests.map((e) => (0, C._g)(e));
            a.h.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                quests: r,
                excludedQuests: o,
                questEnrollmentBlockedUntil: n,
            });
        } catch (e) {
            a.h.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
                error: new o.A(e),
            });
        }
    }
}
async function F(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: s = !1 } = e;
    try {
        var l;
        let e = await m.A.post({
            url: w.Rsh.QUESTS_HEARTBEAT(t),
            body: {
                stream_key: n,
                application_id: i,
                terminal: s,
            },
            trackedActionData: {
                event: r.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    application_id: i,
                    terminal: s,
                    is_overlay: __OVERLAY__,
                    stack_trace: null != (l = Error().stack) ? l : "",
                    is_playtime_eligible: !0,
                },
            },
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, C.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        a.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_FAILURE",
            error: new o.A(e),
            questId: t,
            streamKey: n,
        });
    }
}

function V(e) {
    var t, n;
    return (
        e instanceof c.CaptchaCancelError ||
        (null != e &&
            "object" == typeof e &&
            ((400 === e.status && (null == (t = e.body) ? void 0 : t.captcha_key) != null) ||
                (null != e.captchaFields && !!(Object.keys(e.captchaFields).length > 0)) ||
                (null == (n = e.fields) ? void 0 : n.captcha_key) != null ||
                !1))
    );
}
var B = (function (e) {
    return (
        (e.SUCCESS = "success"),
        (e.CAPTCHA_FAILED = "captcha_failed"),
        (e.UNKNOWN_ERROR = "unknown_error"),
        (e.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
        e
    );
})({});
async function H(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, S.Y5)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex,
                sourceQuestContent: t.sourceQuestContent,
            }),
        e === N.Fw && (0, f.u)(),
        b.A.isEnrolling(e))
    )
        return {
            type: "previous_in_flight_request",
        };
    a.h.dispatch({
        type: "QUESTS_ENROLL_BEGIN",
        questId: e,
    });
    try {
        let n = (0, T.Li)(t.questContent),
            r = (0, T.L4)(t.questContent),
            o = await i.Bo.post({
                url: w.Rsh.QUESTS_ENROLL(e),
                body: x(
                    D(
                        {
                            location: t.questContent,
                        },
                        (0, T.Kc)(e, t.questContent),
                    ),
                    {
                        metadata_raw: null != n ? n : null,
                        metadata_sealed: null != r ? r : null,
                    },
                ),
                rejectWithError: !0,
            });
        return (
            a.h.dispatch({
                type: "QUESTS_ENROLL_SUCCESS",
                enrolledQuestUserStatus: (0, C.tp)(o.body),
            }),
            {
                type: "success",
            }
        );
    } catch (t) {
        return (
            a.h.dispatch({
                type: "QUESTS_ENROLL_FAILURE",
                questId: e,
            }),
            V(t)
                ? {
                      type: "captcha_failed",
                  }
                : {
                      type: "unknown_error",
                  }
        );
    }
}
async function Y(e, t, n) {
    if (!b.A.isClaimingReward(e)) {
        a.h.dispatch({
            type: "QUESTS_CLAIM_REWARD_BEGIN",
            questId: e,
        });
        try {
            let r = (0, T.Li)(n),
                o = (0, T.L4)(n),
                s = await i.Bo.post({
                    url: w.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: x(
                        D(
                            {
                                platform: t,
                                location: n,
                            },
                            (0, T.Kc)(e, n),
                        ),
                        {
                            metadata_raw: null != r ? r : null,
                            metadata_sealed: null != o ? o : null,
                        },
                    ),
                    rejectWithError: !1,
                }),
                l = (0, C.Dv)(s.body);
            return (
                0 === l.errors.length
                    ? a.h.dispatch({
                          type: "QUESTS_CLAIM_REWARD_SUCCESS",
                          questId: e,
                          entitlements: l,
                      })
                    : a.h.dispatch({
                          type: "QUESTS_CLAIM_REWARD_FAILURE",
                          error: l.errors,
                          questId: e,
                      }),
                l
            );
        } catch (t) {
            throw (
                (a.h.dispatch({
                    type: "QUESTS_CLAIM_REWARD_FAILURE",
                    error: new o.A(t),
                    questId: e,
                }),
                t)
            );
        }
    }
}
async function W(e) {
    if (!b.A.isFetchingRewardCode(e)) {
        a.h.dispatch({
            type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
            questId: e,
        });
        try {
            let t = await i.Bo.get({
                url: w.Rsh.QUESTS_REWARD_CODE(e),
                rejectWithError: !1,
            });
            a.h.dispatch({
                type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
                questId: e,
                rewardCode: (0, C.Rd)(t.body),
            });
        } catch (t) {
            throw (
                (a.h.dispatch({
                    type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
                    error: new o.A(t),
                    questId: e,
                }),
                t)
            );
        }
    }
}
async function K(e, t) {
    let n = b.A.isDismissingContent(e),
        r = (0, T.vy)(t);
    if (!n && r) {
        a.h.dispatch({
            type: "QUESTS_DISMISS_CONTENT_BEGIN",
            questId: e,
            content: t,
        });
        try {
            let n = await i.Bo.post({
                url: w.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                body: D({}, (0, T.Kc)(e, t)),
                rejectWithError: !1,
            });
            a.h.dispatch({
                type: "QUESTS_DISMISS_CONTENT_SUCCESS",
                dismissedQuestUserStatus: (0, C.tp)(n.body),
            });
        } catch (t) {
            a.h.dispatch({
                type: "QUESTS_DISMISS_CONTENT_FAILURE",
                error: new o.A(t),
                questId: e,
            });
        }
    }
}

function z(e) {
    a.h.dispatch({
        type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
        streamKey: e,
    });
}
async function q(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.Bo.post({
            url: w.Rsh.QUESTS_PREVIEW_COMPLETE(e),
            body: {
                percent: t,
            },
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
            previewQuestUserStatus: (0, C.tp)(n.body),
        });
    } catch (t) {
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
            error: new o.A(t),
            questId: e,
        });
    }
}
async function Z(e) {
    try {
        let t = await i.Bo.del({
            url: w.Rsh.QUESTS_PREVIEW_STATUS(e),
            body: {},
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
            previewQuestUserStatus: (0, C.tp)(t.body),
        });
    } catch (t) {
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
            error: new o.A(t),
            questId: e,
        });
    }
}
async function Q(e) {
    try {
        a.h.dispatch({
            type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL",
        });
        let t = await i.Bo.del({
            url: w.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e),
            body: {},
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
            previewQuestUserStatus: (0, C.tp)(t.body),
        });
    } catch (t) {
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
            error: new o.A(t),
            questId: e,
        });
    }
}

function X(e) {
    a.h.dispatch({
        type: "QUESTS_DELIVERY_OVERRIDE",
        questId: e,
    });
}

function J(e, t) {
    a.h.dispatch({
        type: "QUESTS_SELECT_TASK_PLATFORM",
        questId: e,
        platform: t,
    });
}
async function $() {
    if (!b.A.isFetchingClaimedQuests) {
        a.h.dispatch({
            type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN",
        });
        try {
            let e = (
                await i.Bo.get({
                    url: w.Rsh.QUESTS_CLAIMED_QUESTS,
                    rejectWithError: !1,
                })
            ).body.quests.map((e) => (0, C.S)(e));
            a.h.dispatch({
                type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS",
                quests: e,
            });
        } catch (e) {
            a.h.dispatch({
                type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE",
                error: new o.A(e),
            });
        }
    }
}

function ee(e, t, n) {
    a.h.dispatch({
        type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS",
        questId: e,
        taskEventName: t,
        progress: n,
    });
}

function et(e) {
    a.h.dispatch({
        type: "QUESTS_RESET_OPTIMISTIC_PROGRESS",
        questId: e,
    });
}
async function en(e, t) {
    var n, r, c, f, h, m, g, b;
    let v = Date.now();
    y.A.recordQuestRequestAttempt("/quests/decision", t, e),
        a.h.dispatch({
            type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN",
            placement: e,
        });
    try {
        let o = await (0, l.Ht)(),
            b = await (0, s.sN)(),
            I = A.r.getConfig({
                location: "QuestActionCreators.fetchQuestToDeliver",
            }),
            S = d.H1.getSetting(),
            T = p.A.getGuildId(),
            N = I.enabled && S && null != T ? T : void 0,
            R = new URLSearchParams({
                placement: String(e),
            });
        (null == o ? void 0 : o.uuid) != null && R.append("client_heartbeat_session_id", o.uuid),
            null != b.uuid && R.append("client_ad_session_id", b.uuid),
            null != N && R.append("guild_id", N);
        let P = (
                await i.Bo.get({
                    url: "".concat(w.Rsh.QUEST_FETCH_QUEST_TO_DELIVER, "?").concat(R.toString()),
                    rejectWithError: !1,
                })
            ).body,
            L = P.quest,
            M = null != L ? (0, C.Yn)(L) : void 0;
        if (
            (a.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: M,
                adDecisionData: {
                    ad_id: null == (r = P.ad_identifiers) ? void 0 : r.ad_id,
                    adset_id: null == (c = P.ad_identifiers) ? void 0 : c.adset_id,
                    ad_set_id: null == (f = P.ad_identifiers) ? void 0 : f.ad_set_id,
                    campaign_id: null == (h = P.ad_identifiers) ? void 0 : h.campaign_id,
                    creative_id: null == (m = P.ad_identifiers) ? void 0 : m.creative_id,
                    creative_type: null == (g = P.ad_identifiers) ? void 0 : g.creative_type,
                    decision_id: P.request_id,
                    is_targeted: null != P.ad_identifiers,
                },
                metadataRaw: P.metadata_raw,
                metadataSealed: P.metadata_sealed,
                trafficMetadataRaw: P.traffic_metadata_raw,
                trafficMetadataSealed: P.traffic_metadata_sealed,
                adContext: P.ad_context,
                responseTtlSeconds: P.response_ttl_seconds,
                placement: e,
                fetchedAt: v,
            }),
            y.A.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(P.request_id),
                currentQuestId: null != (n = null == M ? void 0 : M.id) ? n : null,
                currentFetchedAt: v,
            }),
            null == M)
        )
            return;
        e === O.yW.DESKTOP_ACCOUNT_PANEL_AREA && E.A.startTracking(M.id),
            _.default.track(
                w.HAw.QUEST_DECISION_RECEIVED,
                x(D({}, (0, u.A)()), {
                    quest_id: M.id,
                    caller_source: t,
                    ad_request_id: String(P.request_id),
                }),
            );
    } catch (n) {
        y.A.recordQuestRequestApiResponse("/quests/decision", {
            wasSuccessful: !1,
            currentFetchedAt: v,
        }),
            _.default.track(
                w.HAw.QUEST_DECISION_ROUNDTRIP_ERROR,
                x(D({}, (0, u.A)()), {
                    reason: null != (b = null == n ? void 0 : n.message) ? b : null,
                    api_error: new o.A(n).getAnyErrorMessage(),
                    caller_source: t,
                }),
            ),
            a.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE",
                error: new o.A(n),
                placement: e,
            });
    }
}

function er(e, t) {
    a.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function ei(e, t, n) {
    let r = Date.now();
    g.A.recordEarnedRequestAttempt(t, n),
        a.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN",
            content: t,
        });
    try {
        var s;
        let n = await (0, l.Ht)(),
            o = e.join(","),
            c = await i.Bo.get({
                url: w.Rsh.QUEST_EARNED_DECISION(o, t, null == n ? void 0 : n.uuid),
                rejectWithError: !1,
            }),
            u = c.body.quests,
            d = new Map();
        if (null != u) for (let [e, t] of Object.entries(u)) (0, C.s2)(t) && d.set(e, (0, C.rO)(t));
        let f = c.body.metadata_raw;
        return (
            a.h.dispatch({
                type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
                quests: d,
                metadataRaw: f,
                content: t,
            }),
            g.A.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: null != (s = c.body.request_id) ? s : null,
                fetchedAt: r,
            }),
            {
                quests: d,
                metadataRaw: f,
            }
        );
    } catch (e) {
        g.A.recordEarnedRequestApiResponse(t, {
            wasSuccessful: !1,
            fetchedAt: r,
        }),
            a.h.dispatch({
                type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE",
                error: new o.A(e),
                content: t,
            });
    }
}
async function ea(e, t) {
    var n;
    await m.A.post({
        url: w.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: {
            timestamp: t,
        },
        trackedActionData: {
            event: r.NetworkActionNames.QUEST_VIDEO_PROGRESS,
            properties: {
                quest_id: e,
                timestamp_sec: t.toString(),
                stack_trace: null != (n = Error().stack) ? n : "",
            },
        },
        rejectWithError: !1,
    });
}
async function eo(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, I.tW)(e, I.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n)
        return void v.Ay.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: v.Lx.FAILURE,
        });
    v.Ay.getState().setTranscriptAsset({
        questId: e.id,
        fetchStatus: v.Lx.FETCHING,
    });
    try {
        let t = await i.Bo.get({
            url: n.url,
            rejectWithError: !0,
        });
        v.Ay.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: v.Lx.SUCCESS,
            text: t.text,
            url: n.url,
        });
    } catch (t) {
        v.Ay.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: v.Lx.FAILURE,
        });
    }
}
async function es(e) {
    let t = await i.Bo.get({
        url: w.Rsh.QUEST(e),
        rejectWithError: !1,
    });
    return (0, C.Yn)(t.body);
}
async function el(e) {
    if (!b.A.isFetchingQuestPreview(e)) {
        a.h.dispatch({
            type: "QUESTS_FETCH_PREVIEW_BEGIN",
            questId: e,
        });
        try {
            let t = await i.Bo.get({
                url: w.Rsh.QUEST_PREVIEW(e),
                rejectWithError: !1,
            });
            a.h.dispatch({
                type: "QUESTS_FETCH_PREVIEW_SUCCESS",
                questId: e,
                quest: (0, C.rO)(t.body),
            });
        } catch (t) {
            throw (
                (a.h.dispatch({
                    type: "QUESTS_FETCH_PREVIEW_FAILURE",
                    error: new o.A(t),
                    questId: e,
                }),
                t)
            );
        }
    }
}
let ec = 5 * h.A.Millis.MINUTE;
async function eu() {
    if (b.A.isFetchingQuestHomeTakeover()) return;
    let e = b.A.getLastFetchedQuestHomeTakeover();
    if (!(null != e && Date.now() - e <= ec)) {
        a.h.dispatch({
            type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN",
        });
        try {
            let e = [O.gh.QUEST_HOME_BANNER],
                t = await i.Bo.get({
                    url: w.Rsh.QUEST_PLACEMENT,
                    query: {
                        placements: e,
                        platform: O.vg.WEB,
                    },
                    rejectWithError: !1,
                });
            a.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS",
                takeover: (0, C.Em)(t.body),
            });
        } catch (e) {
            throw (
                (a.h.dispatch({
                    type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE",
                    error: new o.A(e),
                }),
                e)
            );
        }
    }
}
