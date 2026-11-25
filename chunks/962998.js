var r = n(73153),
    s = n(587895),
    o = n(975189),
    i = n(276983),
    l = n(908276),
    a = n(260498),
    c = n(612210),
    d = n(677690),
    u = n(664619),
    p = n(722701),
    h = n(811587),
    _ = n(28883);
let f = new Map();
function g(e, t) {
    (clearTimeout(f.get(e)),
        f.delete(e),
        t?.status === "pending" &&
            f.set(
                e,
                setTimeout(() => E(e), 18e4),
            ),
        r.h.dispatch({ type: "CONJURE_PROJECT_SAFETY_RECHECK", projectId: e, recheck: t }));
}
function E(e) {
    p.A.getSafetyRecheck(e)?.status === "pending" && g(e, { status: "unavailable" });
}
let S = new Map();
function m(e, t) {
    (r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: e, approvalUrl: null }), k(e, t));
    let n = S.get(e);
    null != n && (S.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let y = new Map();
function T(e, t) {
    let n = y.get(e);
    null != n && (y.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let O = new Set(h.n),
    b = new Set(["activity", "automod", "widget", "bot"]);
function N(e) {
    return null != e && b.has(e) ? e : null;
}
let C = new Map();
function k(e, t) {
    let n = C.get(e);
    null != n && (C.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
n.d(
    t,
    {},
    {
        $C: function (e) {
            return new Promise((t, n) => {
                let r = (0, o.KY)(e);
                if (null == r) return void n(Error("Not connected"));
                T(e, "Superseded by a newer draft request");
                let s = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
                    i = setTimeout(() => {
                        T(e, "Draft timed out");
                    }, 45e3);
                y.set(e, { resolve: t, reject: n, timeout: i, nonce: s });
                try {
                    r.sendDraftPatchNotes(s);
                } catch (t) {
                    (y.delete(e), clearTimeout(i), n(t instanceof Error ? t : Error("draft send failed")));
                }
            });
        },
        $N: function (e) {
            p.A.getSafetyRecheck(e)?.status === "cleared" && g(e, null);
        },
        BC: T,
        BG: function (e, t, n) {
            r.h.dispatch({ type: "CONJURE_PROJECT_PATCH_NOTES_SENT", projectId: e, sent: t });
            try {
                let r = (0, o.KY)(e);
                if (null == r) throw Error("Not connected");
                r.sendPatchNotesSent(t, n);
            } catch (t) {
                console.warn("[conjure] could not record sent patch notes", e, t);
            }
        },
        Mz: m,
        Nc: E,
        TV: function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                s = !1;
            return new Promise((i, l) => {
                let a = (0, o.KY)(e);
                if (null == a) return void l(Error("Not connected"));
                if (S.has(e)) return void l(Error("Publish already in flight"));
                let c = setTimeout(() => {
                    m(e, "Publish timed out");
                }, 9e5);
                (S.set(e, { resolve: i, reject: l, timeout: c }),
                    (s = !0),
                    r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_START", projectId: e }));
                try {
                    a.sendPublish(t, n);
                } catch (t) {
                    (S.delete(e), clearTimeout(c), l(t instanceof Error ? t : Error("publish send failed")));
                }
            })
                .catch((t) => {
                    throw ((0, u.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
                })
                .finally(() => {
                    s && r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId: e });
                });
        },
        dx: function (e) {
            (0, o.KY)(e)?.sendPreparePublish();
        },
        qy: {
            publish_notice(e, t) {
                let { projectId: n } = t;
                r.h.dispatch({
                    type: "CONJURE_CHAT_PUBLISH_NOTICE",
                    projectId: n,
                    id: e.id,
                    content: e.content,
                    timestamp: e.ts,
                    publishNotice: e.publish_notice,
                });
            },
        },
        rS: {
            safety_recheck(e, t) {
                let { projectId: n } = t,
                    r = (function (e) {
                        switch (e.status) {
                            case "pending":
                            case "unavailable":
                                return { status: e.status };
                            case "not_held":
                                return { status: "cleared", reason: "" };
                            case "cleared":
                            case "held":
                                return "string" == typeof e.reason ? { status: e.status, reason: e.reason } : null;
                            case "limited":
                                return "cooldown" === e.limit || "daily" === e.limit
                                    ? { status: "limited", limit: e.limit }
                                    : null;
                            default:
                                return null;
                        }
                    })(e);
                null != r && g(n, r);
            },
            publish_options(e, t) {
                let { projectId: n } = t,
                    r = C.get(n);
                if (null == r || r.nonce !== e.nonce) return;
                (C.delete(n), clearTimeout(r.timeout));
                let s = e.options;
                !0 !== e.ok ||
                null == s ||
                !Array.isArray(s.destinations) ||
                0 === s.destinations.length ||
                s.destinations.length > 7 ||
                s.destinations.some(
                    (e) =>
                        "string" != typeof e?.id ||
                        0 === e.id.length ||
                        e.id.length > 100 ||
                        "string" != typeof e.label ||
                        0 === e.label.length ||
                        e.label.length > 100,
                ) ||
                new Set(
                    s.destinations.map((e) => {
                        let { id: t } = e;
                        return t;
                    }),
                ).size !== s.destinations.length ||
                !s.destinations.some((e) => {
                    let { id: t } = e;
                    return t === s.selected_destination_id;
                })
                    ? r.reject(Error(e.error ?? "Could not load publish destinations. Try again."))
                    : r.resolve(s);
            },
            async publish_approval_required(e, t) {
                let { projectId: s } = t;
                if ((0, _.d)(e.approval_url, e.approval_kind)) {
                    if (p.A.getPublishApprovalUrl(s) === e.approval_url) return;
                    r.h.dispatch({
                        type: "CONJURE_PROJECT_PUBLISH_APPROVAL",
                        projectId: s,
                        approvalUrl: e.approval_url,
                    });
                    let { promptPublishApproval: t } = await Promise.all([n.e(46233), n.e(241989), n.e(574246)]).then(
                        n.bind(n, 200389),
                    );
                    t(e.approval_url);
                }
            },
            publish_progress(e, t) {
                let { projectId: n } = t;
                if (!O.has(e.stage)) return;
                let s = Number.isFinite(e.stage_elapsed_ms) ? Math.max(0, e.stage_elapsed_ms) : 0;
                ("approval" !== e.stage &&
                    r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: n, approvalUrl: null }),
                    r.h.dispatch({
                        type: "CONJURE_PROJECT_PUBLISH_PROGRESS",
                        projectId: n,
                        progress: { stage: e.stage, stageStartedAt: Date.now() - s },
                    }));
            },
            publish_cta(e, t) {
                let { projectId: n } = t;
                null != e.publish_cta &&
                    r.h.dispatch({
                        type: "CONJURE_CHAT_TURN_PATCH",
                        projectId: n,
                        turnId: e.turn_id,
                        patch: {
                            publishCta: {
                                surface: N(e.publish_cta.surface),
                                reason: "new_ui" === e.publish_cta.reason ? "new_ui" : "first_publish",
                            },
                        },
                    });
            },
            publish_status(e, t) {
                var n;
                let { projectId: s } = t;
                r.h.dispatch({
                    type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                    projectId: s,
                    publishState:
                        "string" == typeof (n = e).publish_state && "" !== n.publish_state
                            ? n.publish_state
                            : !0 !== n.published
                              ? !0 === n.has_unpublished_changes
                                  ? "not_live"
                                  : "nothing_built"
                              : !0 === n.has_unpublished_changes
                                ? "live_outdated"
                                : "live_current",
                    surface: N(e.surface),
                    previewAppChannels: Array.isArray(e.preview_app_channels)
                        ? e.preview_app_channels.filter((e) => "string" == typeof e)
                        : [],
                    newAppChannels: Array.isArray(e.new_app_channels)
                        ? e.new_app_channels.filter((e) => "string" == typeof e)
                        : [],
                    previewDevicePermissions: Array.isArray(e.preview_device_permissions)
                        ? e.preview_device_permissions.filter(i.de)
                        : [],
                    publishedRevision: "number" == typeof e.published_revision ? e.published_revision : null,
                    publishedAt: "string" == typeof e.published_at ? e.published_at : null,
                    publishing: !0 === e.publishing,
                    patchNotesSent: Array.isArray(e.patch_notes_sent)
                        ? e.patch_notes_sent.flatMap((e) =>
                              "number" == typeof e?.published_revision &&
                              "string" == typeof e.guild_id &&
                              "string" == typeof e.channel_id &&
                              "string" == typeof e.message_id
                                  ? [
                                        {
                                            publishedRevision: e.published_revision,
                                            guildId: e.guild_id,
                                            channelId: e.channel_id,
                                            messageId: e.message_id,
                                        },
                                    ]
                                  : [],
                          )
                        : void 0,
                    newUiUnpublished: !0 === e.new_ui_unpublished,
                    safetyHold: !0 === e.safety_hold,
                    voiceChannelPin: (0, d.O_)(e.voice_channel_pin),
                    views: (0, c.s)(e),
                });
            },
            publish_result(e, t) {
                let { projectId: n } = t;
                r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: n, approvalUrl: null });
                let o = S.get(n);
                (S.delete(n),
                    null != o && (clearTimeout(o.timeout), o.resolve(e)),
                    !0 !== e.ok
                        ? (0, u.Is)(n, e.error ?? "publish_result not ok", !1)
                        : (function (e) {
                              let t = a.Ay.getProject(e),
                                  n = p.A.getPublishStatus(e)?.previewDevicePermissions;
                              if (t?.install_scope !== "user" || "" === t.application_id || null == n) return;
                              let r = t.application_id;
                              (0, l.Ay)({
                                  applicationId: r,
                                  appName: s.A.getApplication(r)?.name ?? t.name,
                                  iframeId: null,
                                  permissions: n,
                              });
                          })(n));
            },
            patch_notes_draft(e, t) {
                let { projectId: n } = t,
                    r = y.get(n);
                null != r && r.nonce === e.nonce && (y.delete(n), clearTimeout(r.timeout), r.resolve(e));
            },
        },
        xQ: function (e) {
            return new Promise((t, n) => {
                let r = (0, o.KY)(e);
                if (null == r) return n(Error("Not connected"));
                if (!r.supportsPublishOptions)
                    return void t({
                        destinations: [{ id: "conjuring", label: "Conjuring" }],
                        selected_destination_id: "conjuring",
                    });
                k(e, "Superseded by a newer publish request");
                let s = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
                    i = setTimeout(() => k(e, "Could not load publish destinations. Try again."), 15e3);
                C.set(e, { resolve: t, reject: n, timeout: i, nonce: s });
                try {
                    r.sendPublishOptions(s);
                } catch {
                    k(e, "Could not load publish destinations. Try again.");
                }
            });
        },
        zu: function (e) {
            if (p.A.getSafetyRecheck(e)?.status === "pending") return;
            let t = (0, o.b4)(e, "safety recheck", (e) => e.sendSafetyRecheck());
            g(e, t ? { status: "pending" } : { status: "unavailable" });
        },
    },
);
