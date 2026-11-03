n.d(t, {
    $C: () => b,
    $N: () => S,
    BC: () => A,
    BG: () => k,
    Mz: () => N,
    Nc: () => E,
    TV: () => T,
    dx: () => O,
    qy: () => _,
    rS: () => y,
    xQ: () => J,
    zu: () => m,
});
var r = n(73153),
    s = n(587895),
    i = n(975189),
    o = n(276983),
    l = n(423976),
    a = n(260498),
    c = n(677690),
    d = n(664619),
    u = n(722701),
    p = n(811587),
    h = n(28883);
let _ = {
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
    f = new Map();
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
    u.A.getSafetyRecheck(e)?.status === "pending" && g(e, { status: "unavailable" });
}
function S(e) {
    u.A.getSafetyRecheck(e)?.status === "cleared" && g(e, null);
}
function m(e) {
    if (u.A.getSafetyRecheck(e)?.status === "pending") return;
    let t = (0, i.b4)(e, "safety recheck", (e) => e.sendSafetyRecheck());
    g(e, t ? { status: "pending" } : { status: "unavailable" });
}
let y = {
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
            r = P.get(n);
        if (null == r || r.nonce !== e.nonce) return;
        (P.delete(n), clearTimeout(r.timeout));
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
        if ((0, h.d)(e.approval_url, e.approval_kind)) {
            if (u.A.getPublishApprovalUrl(s) === e.approval_url) return;
            r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: s, approvalUrl: e.approval_url });
            let { promptPublishApproval: t } = await Promise.all([n.e("46233"), n.e("241989"), n.e("574246")]).then(
                n.bind(n, 200389),
            );
            t(e.approval_url);
        }
    },
    publish_progress(e, t) {
        let { projectId: n } = t;
        if (!R.has(e.stage)) return;
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
                        surface: U(e.publish_cta.surface),
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
            surface: U(e.surface),
            previewAppChannels: Array.isArray(e.preview_app_channels)
                ? e.preview_app_channels.filter((e) => "string" == typeof e)
                : [],
            previewDevicePermissions: Array.isArray(e.preview_device_permissions)
                ? e.preview_device_permissions.filter(o.de)
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
            voiceChannelPin: (0, c.O_)(e.voice_channel_pin),
        });
    },
    publish_result(e, t) {
        let { projectId: n } = t;
        r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: n, approvalUrl: null });
        let i = C.get(n);
        (C.delete(n),
            null != i && (clearTimeout(i.timeout), i.resolve(e)),
            !0 !== e.ok
                ? (0, d.Is)(n, e.error ?? "publish_result not ok", !1)
                : (function (e) {
                      let t = a.Ay.getProject(e),
                          n = u.A.getPublishStatus(e)?.previewDevicePermissions;
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
            r = w.get(n);
        null != r && r.nonce === e.nonce && (w.delete(n), clearTimeout(r.timeout), r.resolve(e));
    },
};
function O(e) {
    (0, i.KY)(e)?.sendPreparePublish();
}
function T(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = !1;
    return new Promise((o, l) => {
        let a = (0, i.KY)(e);
        if (null == a) return void l(Error("Not connected"));
        if (C.has(e)) return void l(Error("Publish already in flight"));
        let c = setTimeout(() => {
            N(e, "Publish timed out");
        }, 9e5);
        (C.set(e, { resolve: o, reject: l, timeout: c }),
            (s = !0),
            r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_START", projectId: e }));
        try {
            a.sendPublish(t, n);
        } catch (t) {
            (C.delete(e), clearTimeout(c), l(t instanceof Error ? t : Error("publish send failed")));
        }
    })
        .catch((t) => {
            throw ((0, d.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
        })
        .finally(() => {
            s && r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId: e });
        });
}
function b(e) {
    return new Promise((t, n) => {
        let r = (0, i.KY)(e);
        if (null == r) return void n(Error("Not connected"));
        A(e, "Superseded by a newer draft request");
        let s = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            o = setTimeout(() => {
                A(e, "Draft timed out");
            }, 45e3);
        w.set(e, { resolve: t, reject: n, timeout: o, nonce: s });
        try {
            r.sendDraftPatchNotes(s);
        } catch (t) {
            (w.delete(e), clearTimeout(o), n(t instanceof Error ? t : Error("draft send failed")));
        }
    });
}
function k(e, t, n) {
    r.h.dispatch({ type: "CONJURE_PROJECT_PATCH_NOTES_SENT", projectId: e, sent: t });
    try {
        let r = (0, i.KY)(e);
        if (null == r) throw Error("Not connected");
        r.sendPatchNotesSent(t, n);
    } catch (t) {
        console.warn("[conjure] could not record sent patch notes", e, t);
    }
}
let C = new Map();
function N(e, t) {
    (r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: e, approvalUrl: null }), I(e, t));
    let n = C.get(e);
    null != n && (C.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let w = new Map();
function A(e, t) {
    let n = w.get(e);
    null != n && (w.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let R = new Set(p.n),
    v = new Set(["activity", "automod", "widget", "bot"]);
function U(e) {
    return null != e && v.has(e) ? e : null;
}
let P = new Map();
function I(e, t) {
    let n = P.get(e);
    null != n && (P.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
function J(e) {
    return new Promise((t, n) => {
        let r = (0, i.KY)(e);
        if (null == r) return n(Error("Not connected"));
        if (!r.supportsPublishOptions)
            return void t({
                destinations: [{ id: "conjuring", label: "Conjuring" }],
                selected_destination_id: "conjuring",
            });
        I(e, "Superseded by a newer publish request");
        let s = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            o = setTimeout(() => I(e, "Could not load publish destinations. Try again."), 15e3);
        P.set(e, { resolve: t, reject: n, timeout: o, nonce: s });
        try {
            r.sendPublishOptions(s);
        } catch {
            I(e, "Could not load publish destinations. Try again.");
        }
    });
}
