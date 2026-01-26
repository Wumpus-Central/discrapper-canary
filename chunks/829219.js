n.d(t, {
    CV: () => L,
    Fr: () => ee,
    Gn: () => Q,
    Gt: () => z,
    HA: () => X,
    N1: () => M,
    Oq: () => F,
    Ov: () => j,
    Oy: () => V,
    QG: () => J,
    R2: () => k,
    Tb: () => eo,
    UZ: () => K,
    WM: () => G,
    Yb: () => W,
    d6: () => q,
    dQ: () => ea,
    g5: () => H,
    jh: () => B,
    lk: () => Y,
    lx: () => Z,
    qY: () => er,
    r8: () => $,
    uI: () => en,
    vD: () => x,
    xB: () => ei,
    yO: () => et,
}),
    n(65821),
    n(896048);
var r = n(110259),
    i = n(562465),
    a = n(73153),
    s = n(181658),
    o = n(881615),
    l = n(861638),
    c = n(577015),
    u = n(69114),
    d = n(310829),
    f = n(954571),
    p = n(927813),
    _ = n(499785),
    h = n(681370),
    m = n(260364),
    g = n(869359),
    E = n(859703),
    y = n(341915),
    b = n(405670),
    O = n(579473),
    v = n(561844),
    A = n(710969),
    I = n(229006),
    S = n(654487),
    T = n(652215),
    C = n(985018);

function N(e, t, n) {
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

function w(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}

function R(e, t) {
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
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let D = 5;
async function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await i.Bo.post({
                url: T.Rsh.QUEST_ON_CONSOLE_START(e),
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
                errorHints: n.error_hints_v2.slice(0, D),
            };
    } catch (r) {
        var n;
        let e = new s.A(r);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: y.xv.RATE_LIMITED,
                        message: C.intl.string(C.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = null != (n = e.getAnyErrorMessage()) ? n : C.intl.string(C.t.xSCvBf);
        return {
            errorHints: [
                {
                    type: y.xv.GENERIC,
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
async function L(e) {
    await i.Bo.post({
        url: T.Rsh.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1,
    });
}
async function j() {
    await i.Bo.del({
        url: T.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS,
        rejectWithError: !1,
    });
}
async function M() {
    if (!E.A.isFetchingCurrentQuests) {
        a.h.dispatch({
            type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN",
        });
        try {
            let e = await i.Bo.get({
                    url: T.Rsh.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1,
                }),
                t = e.body.quests.filter((e) => (0, I.s2)(e)).map((e) => (0, I.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => {
                    var t;
                    return (
                        (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null ||
                        e.config.rewardsConfig.platforms.length > 0
                    );
                }),
                s = e.body.excluded_quests.map((e) => (0, I._g)(e));
            a.h.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_SUCCESS",
                quests: r,
                excludedQuests: s,
                questEnrollmentBlockedUntil: n,
            });
        } catch (e) {
            a.h.dispatch({
                type: "QUESTS_FETCH_CURRENT_QUESTS_FAILURE",
                error: new s.A(e),
            });
        }
    }
}
async function k(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: o = !1 } = e;
    try {
        var l;
        let e = await _.A.post({
            url: T.Rsh.QUESTS_HEARTBEAT(t),
            body: {
                stream_key: n,
                application_id: i,
                terminal: o,
            },
            trackedActionData: {
                event: r.NetworkActionNames.QUEST_HEARTBEAT,
                properties: {
                    quest_id: t,
                    application_id: i,
                    terminal: o,
                    is_overlay: __OVERLAY__,
                    stack_trace: null != (l = Error().stack) ? l : "",
                    is_playtime_eligible: !0,
                },
            },
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_SUCCESS",
            userStatus: (0, I.tp)(e.body),
            questId: t,
            streamKey: n,
        });
    } catch (e) {
        a.h.dispatch({
            type: "QUESTS_SEND_HEARTBEAT_FAILURE",
            error: new s.A(e),
            questId: t,
            streamKey: n,
        });
    }
}

function U(e) {
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
var G = (function (e) {
    return (
        (e.SUCCESS = "success"),
        (e.CAPTCHA_FAILED = "captcha_failed"),
        (e.UNKNOWN_ERROR = "unknown_error"),
        (e.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
        e
    );
})({});
async function V(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, v.Y5)({
                questId: e,
                questContent: t.questContent,
                questContentCTA: t.questContentCTA,
                questContentPosition: t.questContentPosition,
                questContentRowIndex: t.questContentRowIndex,
                sourceQuestContent: t.sourceQuestContent,
            }),
        e === S.Fw && (0, d.u)(),
        E.A.isEnrolling(e))
    )
        return {
            type: "previous_in_flight_request",
        };
    a.h.dispatch({
        type: "QUESTS_ENROLL_BEGIN",
        questId: e,
    });
    try {
        let n = (0, A.Li)(t.questContent),
            r = (0, A.L4)(t.questContent),
            s = await i.Bo.post({
                url: T.Rsh.QUESTS_ENROLL(e),
                body: P(
                    w(
                        {
                            location: t.questContent,
                        },
                        (0, A.Kc)(e, t.questContent),
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
                enrolledQuestUserStatus: (0, I.tp)(s.body),
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
            U(t)
                ? {
                      type: "captcha_failed",
                  }
                : {
                      type: "unknown_error",
                  }
        );
    }
}
async function F(e, t, n) {
    if (!E.A.isClaimingReward(e)) {
        a.h.dispatch({
            type: "QUESTS_CLAIM_REWARD_BEGIN",
            questId: e,
        });
        try {
            let r = (0, A.Li)(n),
                s = (0, A.L4)(n),
                o = await i.Bo.post({
                    url: T.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: P(
                        w(
                            {
                                platform: t,
                                location: n,
                            },
                            (0, A.Kc)(e, n),
                        ),
                        {
                            metadata_raw: null != r ? r : null,
                            metadata_sealed: null != s ? s : null,
                        },
                    ),
                    rejectWithError: !1,
                }),
                l = (0, I.Dv)(o.body);
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
                    error: new s.A(t),
                    questId: e,
                }),
                t)
            );
        }
    }
}
async function B(e) {
    if (!E.A.isFetchingRewardCode(e)) {
        a.h.dispatch({
            type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
            questId: e,
        });
        try {
            let t = await i.Bo.get({
                url: T.Rsh.QUESTS_REWARD_CODE(e),
                rejectWithError: !1,
            });
            a.h.dispatch({
                type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
                questId: e,
                rewardCode: (0, I.Rd)(t.body),
            });
        } catch (t) {
            throw (
                (a.h.dispatch({
                    type: "QUESTS_FETCH_REWARD_CODE_FAILURE",
                    error: new s.A(t),
                    questId: e,
                }),
                t)
            );
        }
    }
}
async function H(e, t) {
    let n = E.A.isDismissingContent(e),
        r = (0, A.vy)(t);
    if (!n && r) {
        a.h.dispatch({
            type: "QUESTS_DISMISS_CONTENT_BEGIN",
            questId: e,
            content: t,
        });
        try {
            let n = await i.Bo.post({
                url: T.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                body: w({}, (0, A.Kc)(e, t)),
                rejectWithError: !1,
            });
            a.h.dispatch({
                type: "QUESTS_DISMISS_CONTENT_SUCCESS",
                dismissedQuestUserStatus: (0, I.tp)(n.body),
            });
        } catch (t) {
            a.h.dispatch({
                type: "QUESTS_DISMISS_CONTENT_FAILURE",
                error: new s.A(t),
                questId: e,
            });
        }
    }
}

function Y(e) {
    a.h.dispatch({
        type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
        streamKey: e,
    });
}
async function W(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.Bo.post({
            url: T.Rsh.QUESTS_PREVIEW_COMPLETE(e),
            body: {
                percent: t,
            },
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
            previewQuestUserStatus: (0, I.tp)(n.body),
        });
    } catch (t) {
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
            error: new s.A(t),
            questId: e,
        });
    }
}
async function K(e) {
    try {
        let t = await i.Bo.del({
            url: T.Rsh.QUESTS_PREVIEW_STATUS(e),
            body: {},
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
            previewQuestUserStatus: (0, I.tp)(t.body),
        });
    } catch (t) {
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
            error: new s.A(t),
            questId: e,
        });
    }
}
async function z(e) {
    try {
        a.h.dispatch({
            type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL",
        });
        let t = await i.Bo.del({
            url: T.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e),
            body: {},
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
            previewQuestUserStatus: (0, I.tp)(t.body),
        });
    } catch (t) {
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
            error: new s.A(t),
            questId: e,
        });
    }
}

function q(e) {
    a.h.dispatch({
        type: "QUESTS_DELIVERY_OVERRIDE",
        questId: e,
    });
}

function Z(e, t) {
    a.h.dispatch({
        type: "QUESTS_SELECT_TASK_PLATFORM",
        questId: e,
        platform: t,
    });
}
async function X() {
    if (!E.A.isFetchingClaimedQuests) {
        a.h.dispatch({
            type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN",
        });
        try {
            let e = (
                await i.Bo.get({
                    url: T.Rsh.QUESTS_CLAIMED_QUESTS,
                    rejectWithError: !1,
                })
            ).body.quests.map((e) => (0, I.S)(e));
            a.h.dispatch({
                type: "QUESTS_FETCH_CLAIMED_QUESTS_SUCCESS",
                quests: e,
            });
        } catch (e) {
            a.h.dispatch({
                type: "QUESTS_FETCH_CLAIMED_QUESTS_FAILURE",
                error: new s.A(e),
            });
        }
    }
}

function Q(e, t, n) {
    a.h.dispatch({
        type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS",
        questId: e,
        taskEventName: t,
        progress: n,
    });
}

function J(e) {
    a.h.dispatch({
        type: "QUESTS_RESET_OPTIMISTIC_PROGRESS",
        questId: e,
    });
}
async function $(e, t) {
    var n, r, c, d, p, _, h, E;
    let b = Date.now();
    g.A.recordQuestRequestAttempt("/quests/decision", t, e),
        a.h.dispatch({
            type: "QUESTS_FETCH_QUEST_TO_DELIVER_BEGIN",
            placement: e,
        });
    try {
        let s = await (0, l.Ht)(),
            E = await (0, o.sN)(),
            O = (
                await i.Bo.get({
                    url: T.Rsh.QUEST_FETCH_QUEST_TO_DELIVER(e, null == s ? void 0 : s.uuid, E.uuid),
                    rejectWithError: !1,
                })
            ).body,
            v = O.quest,
            A = null != v ? (0, I.Yn)(v) : void 0;
        if (
            (a.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: A,
                adDecisionData: {
                    ad_id: null == (r = O.ad_identifiers) ? void 0 : r.ad_id,
                    adset_id: null == (c = O.ad_identifiers) ? void 0 : c.adset_id,
                    ad_set_id: null == (d = O.ad_identifiers) ? void 0 : d.ad_set_id,
                    campaign_id: null == (p = O.ad_identifiers) ? void 0 : p.campaign_id,
                    creative_id: null == (_ = O.ad_identifiers) ? void 0 : _.creative_id,
                    creative_type: null == (h = O.ad_identifiers) ? void 0 : h.creative_type,
                    decision_id: O.request_id,
                    is_targeted: null != O.ad_identifiers,
                },
                metadataRaw: O.metadata_raw,
                metadataSealed: O.metadata_sealed,
                trafficMetadataRaw: O.traffic_metadata_raw,
                trafficMetadataSealed: O.traffic_metadata_sealed,
                adContext: O.ad_context,
                responseTtlSeconds: O.response_ttl_seconds,
                placement: e,
                fetchedAt: b,
            }),
            g.A.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(O.request_id),
                currentQuestId: null != (n = null == A ? void 0 : A.id) ? n : null,
                currentFetchedAt: b,
            }),
            null == A)
        )
            return;
        e === y.yW.DESKTOP_ACCOUNT_PANEL_AREA && m.A.startTracking(A.id),
            f.default.track(
                T.HAw.QUEST_DECISION_RECEIVED,
                P(w({}, (0, u.A)()), {
                    quest_id: A.id,
                    caller_source: t,
                    ad_request_id: String(O.request_id),
                }),
            );
    } catch (n) {
        g.A.recordQuestRequestApiResponse("/quests/decision", {
            wasSuccessful: !1,
            currentFetchedAt: b,
        }),
            f.default.track(
                T.HAw.QUEST_DECISION_ROUNDTRIP_ERROR,
                P(w({}, (0, u.A)()), {
                    reason: null != (E = null == n ? void 0 : n.message) ? E : null,
                    api_error: new s.A(n).getAnyErrorMessage(),
                    caller_source: t,
                }),
            ),
            a.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_FAILURE",
                error: new s.A(n),
                placement: e,
            });
    }
}

function ee(e, t) {
    a.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1e3,
    });
}
async function et(e, t, n) {
    let r = Date.now();
    h.A.recordEarnedRequestAttempt(t, n),
        a.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN",
            content: t,
        });
    try {
        var o;
        let n = await (0, l.Ht)(),
            s = e.join(","),
            c = await i.Bo.get({
                url: T.Rsh.QUEST_EARNED_DECISION(s, t, null == n ? void 0 : n.uuid),
                rejectWithError: !1,
            }),
            u = c.body.quests,
            d = new Map();
        if (null != u) for (let [e, t] of Object.entries(u)) (0, I.s2)(t) && d.set(e, (0, I.rO)(t));
        let f = c.body.metadata_raw;
        return (
            a.h.dispatch({
                type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
                quests: d,
                metadataRaw: f,
                content: t,
            }),
            h.A.recordEarnedRequestApiResponse(t, {
                wasSuccessful: !0,
                requestId: null != (o = c.body.request_id) ? o : null,
                fetchedAt: r,
            }),
            {
                quests: d,
                metadataRaw: f,
            }
        );
    } catch (e) {
        h.A.recordEarnedRequestApiResponse(t, {
            wasSuccessful: !1,
            fetchedAt: r,
        }),
            a.h.dispatch({
                type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE",
                error: new s.A(e),
                content: t,
            });
    }
}
async function en(e, t) {
    var n;
    await _.A.post({
        url: T.Rsh.QUESTS_VIDEO_PROGRESS(e),
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
async function er(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, O.tW)(e, O.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n)
        return void b.Ay.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: b.Lx.FAILURE,
        });
    b.Ay.getState().setTranscriptAsset({
        questId: e.id,
        fetchStatus: b.Lx.FETCHING,
    });
    try {
        let t = await i.Bo.get({
            url: n.url,
            rejectWithError: !0,
        });
        b.Ay.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: b.Lx.SUCCESS,
            text: t.text,
            url: n.url,
        });
    } catch (t) {
        b.Ay.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: b.Lx.FAILURE,
        });
    }
}
async function ei(e) {
    let t = await i.Bo.get({
        url: T.Rsh.QUEST(e),
        rejectWithError: !1,
    });
    return (0, I.Yn)(t.body);
}
async function ea(e) {
    if (!E.A.isFetchingQuestPreview(e)) {
        a.h.dispatch({
            type: "QUESTS_FETCH_PREVIEW_BEGIN",
            questId: e,
        });
        try {
            let t = await i.Bo.get({
                url: T.Rsh.QUEST_PREVIEW(e),
                rejectWithError: !1,
            });
            a.h.dispatch({
                type: "QUESTS_FETCH_PREVIEW_SUCCESS",
                questId: e,
                quest: (0, I.rO)(t.body),
            });
        } catch (t) {
            throw (
                (a.h.dispatch({
                    type: "QUESTS_FETCH_PREVIEW_FAILURE",
                    error: new s.A(t),
                    questId: e,
                }),
                t)
            );
        }
    }
}
let es = 5 * p.A.Millis.MINUTE;
async function eo() {
    if (E.A.isFetchingQuestHomeTakeover()) return;
    let e = E.A.getLastFetchedQuestHomeTakeover();
    if (!(null != e && Date.now() - e <= es)) {
        a.h.dispatch({
            type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN",
        });
        try {
            let e = [y.gh.QUEST_HOME_BANNER],
                t = await i.Bo.get({
                    url: T.Rsh.QUEST_PLACEMENT,
                    query: {
                        placements: e,
                        platform: y.vg.WEB,
                    },
                    rejectWithError: !1,
                });
            a.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS",
                takeover: (0, I.Em)(t.body),
            });
        } catch (e) {
            throw (
                (a.h.dispatch({
                    type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_FAILURE",
                    error: new s.A(e),
                }),
                e)
            );
        }
    }
}
