n.d(t, {
    CV: () => x,
    Fr: () => J,
    Gn: () => Z,
    Gt: () => K,
    HA: () => X,
    N1: () => j,
    Oq: () => V,
    Ov: () => L,
    Oy: () => G,
    QG: () => Q,
    R2: () => M,
    Tb: () => es,
    UZ: () => W,
    WM: () => U,
    Yb: () => Y,
    d6: () => z,
    dQ: () => ei,
    g5: () => B,
    jh: () => F,
    lk: () => H,
    lx: () => q,
    qY: () => en,
    r8: () => $,
    uI: () => et,
    vD: () => D,
    xB: () => er,
    yO: () => ee,
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
    h = n(216456),
    m = n(260364),
    g = n(869359),
    E = n(859703),
    b = n(341915),
    y = n(405670),
    O = n(579473),
    A = n(710969),
    v = n(229006),
    S = n(654487),
    I = n(652215),
    T = n(985018);
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
function N(e) {
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
function w(e, t) {
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
let P = 5;
async function D(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    try {
        let n = (
            await i.Bo.post({
                url: I.Rsh.QUEST_ON_CONSOLE_START(e),
                query: t ? { preview: t } : void 0,
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
            return { errorHints: n.error_hints_v2.slice(0, P) };
    } catch (r) {
        var n;
        let e = new s.A(r);
        if (429 === e.status)
            return {
                errorHints: [
                    {
                        type: b.xv.RATE_LIMITED,
                        message: T.intl.string(T.t.Whhv4w),
                        connected_account_id: "",
                        connected_account_type: "",
                    },
                ],
            };
        let t = null != (n = e.getAnyErrorMessage()) ? n : T.intl.string(T.t.xSCvBf);
        return {
            errorHints: [
                {
                    type: b.xv.GENERIC,
                    message: t,
                    connected_account_id: "",
                    connected_account_type: "",
                },
            ],
        };
    }
    return { errorHints: [] };
}
async function x(e) {
    await i.Bo.post({
        url: I.Rsh.QUEST_ON_CONSOLE_STOP(e),
        rejectWithError: !1,
    });
}
async function L() {
    await i.Bo.del({
        url: I.Rsh.QUESTS_RESET_RECENT_QUEST_COMPLETIONS,
        rejectWithError: !1,
    });
}
async function j() {
    if (!E.A.isFetchingCurrentQuests) {
        a.h.dispatch({ type: "QUESTS_FETCH_CURRENT_QUESTS_BEGIN" });
        try {
            let e = await i.Bo.get({
                    url: I.Rsh.QUESTS_CURRENT_QUESTS,
                    rejectWithError: !1,
                }),
                t = e.body.quests.filter((e) => (0, v.s2)(e)).map((e) => (0, v.rO)(e)),
                n = e.body.quest_enrollment_blocked_until,
                r = t.filter((e) => {
                    var t;
                    return (
                        (null == (t = e.userStatus) ? void 0 : t.claimedAt) != null ||
                        e.config.rewardsConfig.platforms.length > 0
                    );
                }),
                s = e.body.excluded_quests.map((e) => (0, v._g)(e));
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
async function M(e) {
    let { questId: t, streamKey: n, applicationId: i, terminal: o = !1 } = e;
    try {
        var l;
        let e = await _.A.post({
            url: I.Rsh.QUESTS_HEARTBEAT(t),
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
            userStatus: (0, v.tp)(e.body),
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
function k(e) {
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
var U = (function (e) {
    return (
        (e.SUCCESS = "success"),
        (e.CAPTCHA_FAILED = "captcha_failed"),
        (e.UNKNOWN_ERROR = "unknown_error"),
        (e.PREVIOUS_IN_FLIGHT_REQUEST = "previous_in_flight_request"),
        e
    );
})({});
async function G(e, t) {
    if (
        (null != t.questContentCTA &&
            (0, h.Y5)({
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
        return { type: "previous_in_flight_request" };
    a.h.dispatch({
        type: "QUESTS_ENROLL_BEGIN",
        questId: e,
    });
    try {
        let n = (0, A.Li)(t.questContent),
            r = (0, A.L4)(t.questContent),
            s = await i.Bo.post({
                url: I.Rsh.QUESTS_ENROLL(e),
                body: w(N({ location: t.questContent }, (0, A.Kc)(e, t.questContent)), {
                    metadata_raw: null != n ? n : null,
                    metadata_sealed: null != r ? r : null,
                }),
                rejectWithError: !0,
            });
        return (
            a.h.dispatch({
                type: "QUESTS_ENROLL_SUCCESS",
                enrolledQuestUserStatus: (0, v.tp)(s.body),
            }),
            { type: "success" }
        );
    } catch (t) {
        return (
            a.h.dispatch({
                type: "QUESTS_ENROLL_FAILURE",
                questId: e,
            }),
            k(t) ? { type: "captcha_failed" } : { type: "unknown_error" }
        );
    }
}
async function V(e, t, n) {
    if (!E.A.isClaimingReward(e)) {
        a.h.dispatch({
            type: "QUESTS_CLAIM_REWARD_BEGIN",
            questId: e,
        });
        try {
            let r = (0, A.Li)(n),
                s = (0, A.L4)(n),
                o = await i.Bo.post({
                    url: I.Rsh.QUESTS_CLAIM_REWARD(e),
                    body: w(
                        N(
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
                l = (0, v.Dv)(o.body);
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
async function F(e) {
    if (!E.A.isFetchingRewardCode(e)) {
        a.h.dispatch({
            type: "QUESTS_FETCH_REWARD_CODE_BEGIN",
            questId: e,
        });
        try {
            let t = await i.Bo.get({
                url: I.Rsh.QUESTS_REWARD_CODE(e),
                rejectWithError: !1,
            });
            a.h.dispatch({
                type: "QUESTS_FETCH_REWARD_CODE_SUCCESS",
                questId: e,
                rewardCode: (0, v.Rd)(t.body),
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
async function B(e, t) {
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
                url: I.Rsh.QUESTS_DISMISS_CONTENT(e, t),
                body: N({}, (0, A.Kc)(e, t)),
                rejectWithError: !1,
            });
            a.h.dispatch({
                type: "QUESTS_DISMISS_CONTENT_SUCCESS",
                dismissedQuestUserStatus: (0, v.tp)(n.body),
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
function H(e) {
    a.h.dispatch({
        type: "QUESTS_DISMISS_PROGRESS_TRACKING_FAILURE_NOTICE",
        streamKey: e,
    });
}
async function Y(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
    try {
        let n = await i.Bo.post({
            url: I.Rsh.QUESTS_PREVIEW_COMPLETE(e),
            body: { percent: t },
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
            previewQuestUserStatus: (0, v.tp)(n.body),
        });
    } catch (t) {
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
            error: new s.A(t),
            questId: e,
        });
    }
}
async function W(e) {
    try {
        let t = await i.Bo.del({
            url: I.Rsh.QUESTS_PREVIEW_STATUS(e),
            body: {},
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
            previewQuestUserStatus: (0, v.tp)(t.body),
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
        a.h.dispatch({ type: "QUESTS_DOCK_RESET_SOFT_DISMISSAL" });
        let t = await i.Bo.del({
            url: I.Rsh.QUESTS_PREVIEW_DISMISSIBILITY(e),
            body: {},
            rejectWithError: !1,
        });
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_SUCCESS",
            previewQuestUserStatus: (0, v.tp)(t.body),
        });
    } catch (t) {
        a.h.dispatch({
            type: "QUESTS_PREVIEW_UPDATE_FAILURE",
            error: new s.A(t),
            questId: e,
        });
    }
}
function z(e) {
    a.h.dispatch({
        type: "QUESTS_DELIVERY_OVERRIDE",
        questId: e,
    });
}
function q(e, t) {
    a.h.dispatch({
        type: "QUESTS_SELECT_TASK_PLATFORM",
        questId: e,
        platform: t,
    });
}
async function X() {
    if (!E.A.isFetchingClaimedQuests) {
        a.h.dispatch({ type: "QUESTS_FETCH_CLAIMED_QUESTS_BEGIN" });
        try {
            let e = (
                await i.Bo.get({
                    url: I.Rsh.QUESTS_CLAIMED_QUESTS,
                    rejectWithError: !1,
                })
            ).body.quests.map((e) => (0, v.S)(e));
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
function Z(e, t, n) {
    a.h.dispatch({
        type: "QUESTS_UPDATE_OPTIMISTIC_PROGRESS",
        questId: e,
        taskEventName: t,
        progress: n,
    });
}
function Q(e) {
    a.h.dispatch({
        type: "QUESTS_RESET_OPTIMISTIC_PROGRESS",
        questId: e,
    });
}
async function $(e, t) {
    var n, r, c, d, p, _, h, E;
    let y = Date.now();
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
                    url: I.Rsh.QUEST_FETCH_QUEST_TO_DELIVER(e, null == s ? void 0 : s.uuid, E.uuid),
                    rejectWithError: !1,
                })
            ).body,
            A = O.quest,
            S = null != A ? (0, v.Yn)(A) : void 0;
        if (
            (a.h.dispatch({
                type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
                quest: S,
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
                fetchedAt: y,
            }),
            g.A.recordQuestRequestApiResponse("/quests/decision", {
                wasSuccessful: !0,
                adRequestId: String(O.request_id),
                currentQuestId: null != (n = null == S ? void 0 : S.id) ? n : null,
                currentFetchedAt: y,
            }),
            null == S)
        )
            return;
        e === b.yW.DESKTOP_ACCOUNT_PANEL_AREA && m.A.startTracking(S.id),
            f.default.track(
                I.HAw.QUEST_DECISION_RECEIVED,
                w(N({}, (0, u.A)()), {
                    quest_id: S.id,
                    caller_source: t,
                    ad_request_id: String(O.request_id),
                }),
            );
    } catch (n) {
        g.A.recordQuestRequestApiResponse("/quests/decision", { wasSuccessful: !1 }),
            f.default.track(
                I.HAw.QUEST_DECISION_ROUNDTRIP_ERROR,
                w(N({}, (0, u.A)()), {
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
function J(e, t) {
    a.h.dispatch({
        type: "QUESTS_FETCH_QUEST_TO_DELIVER_SUCCESS",
        quest: void 0,
        placement: e,
        fetchedAt: Date.now(),
        responseTtlSeconds: t / 1000,
    });
}
async function ee(e, t) {
    a.h.dispatch({
        type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_BEGIN",
        content: t,
    });
    try {
        let n = await (0, l.Ht)(),
            r = e.join(","),
            s = await i.Bo.get({
                url: I.Rsh.QUEST_EARNED_DECISION(r, t, null == n ? void 0 : n.uuid),
                rejectWithError: !1,
            }),
            o = s.body.quests,
            c = new Map();
        if (null != o) for (let [e, t] of Object.entries(o)) (0, v.s2)(t) && c.set(e, (0, v.rO)(t));
        let u = s.body.metadata_raw;
        return (
            a.h.dispatch({
                type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_SUCCESS",
                quests: c,
                metadataRaw: u,
                content: t,
            }),
            {
                quests: c,
                metadataRaw: u,
            }
        );
    } catch (e) {
        a.h.dispatch({
            type: "QUESTS_FETCH_EARNED_QUEST_TO_DELIVER_FAILURE",
            error: new s.A(e),
            content: t,
        });
    }
}
async function et(e, t) {
    var n;
    await _.A.post({
        url: I.Rsh.QUESTS_VIDEO_PROGRESS(e),
        body: { timestamp: t },
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
async function en(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = (0, O.tW)(e, O.fY.VIDEO_PLAYER_TRANSCRIPT, void 0, t);
    if (null == n)
        return void y.Ay.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: y.Lx.FAILURE,
        });
    y.Ay.getState().setTranscriptAsset({
        questId: e.id,
        fetchStatus: y.Lx.FETCHING,
    });
    try {
        let t = await i.Bo.get({
            url: n.url,
            rejectWithError: !0,
        });
        y.Ay.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: y.Lx.SUCCESS,
            text: t.text,
            url: n.url,
        });
    } catch (t) {
        y.Ay.getState().setTranscriptAsset({
            questId: e.id,
            fetchStatus: y.Lx.FAILURE,
        });
    }
}
async function er(e) {
    let t = await i.Bo.get({
        url: I.Rsh.QUEST(e),
        rejectWithError: !1,
    });
    return (0, v.Yn)(t.body);
}
async function ei(e) {
    if (!E.A.isFetchingQuestPreview(e)) {
        a.h.dispatch({
            type: "QUESTS_FETCH_PREVIEW_BEGIN",
            questId: e,
        });
        try {
            let t = await i.Bo.get({
                url: I.Rsh.QUEST_PREVIEW(e),
                rejectWithError: !1,
            });
            a.h.dispatch({
                type: "QUESTS_FETCH_PREVIEW_SUCCESS",
                questId: e,
                quest: (0, v.rO)(t.body),
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
let ea = 5 * p.A.Millis.MINUTE;
async function es() {
    if (E.A.isFetchingQuestHomeTakeover()) return;
    let e = E.A.getLastFetchedQuestHomeTakeover();
    if (!(null != e && Date.now() - e <= ea)) {
        a.h.dispatch({ type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_BEGIN" });
        try {
            let e = [b.gh.QUEST_HOME_BANNER],
                t = await i.Bo.get({
                    url: I.Rsh.QUEST_PLACEMENT,
                    query: {
                        placements: e,
                        platform: b.vg.WEB,
                    },
                    rejectWithError: !1,
                });
            a.h.dispatch({
                type: "QUESTS_FETCH_QUEST_HOME_TAKEOVER_SUCCESS",
                takeover: (0, v.Em)(t.body),
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
