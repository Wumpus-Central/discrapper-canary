n.d(t, {
    $C: () => E,
    BC: () => y,
    BG: () => S,
    Mz: () => O,
    TV: () => g,
    dx: () => f,
    qy: () => h,
    rS: () => _,
    xQ: () => R,
});
var s = n(73153),
    r = n(587895),
    o = n(975189),
    i = n(276983),
    l = n(423976),
    a = n(260498),
    c = n(664619),
    d = n(722701),
    u = n(811587),
    p = n(28883);
let h = {
        publish_notice(e, t) {
            let { projectId: n } = t;
            s.h.dispatch({
                type: "CONJURE_CHAT_PUBLISH_NOTICE",
                projectId: n,
                id: e.id,
                content: e.content,
                timestamp: e.ts,
                publishNotice: e.publish_notice,
            });
        },
    },
    _ = {
        publish_options(e, t) {
            let { projectId: n } = t,
                s = k.get(n);
            if (null == s || s.nonce !== e.nonce) return;
            (k.delete(n), clearTimeout(s.timeout));
            let r = e.options;
            !0 !== e.ok ||
            null == r ||
            !Array.isArray(r.destinations) ||
            0 === r.destinations.length ||
            r.destinations.length > 7 ||
            r.destinations.some(
                (e) =>
                    "string" != typeof e?.id ||
                    0 === e.id.length ||
                    e.id.length > 100 ||
                    "string" != typeof e.label ||
                    0 === e.label.length ||
                    e.label.length > 100,
            ) ||
            new Set(
                r.destinations.map((e) => {
                    let { id: t } = e;
                    return t;
                }),
            ).size !== r.destinations.length ||
            !r.destinations.some((e) => {
                let { id: t } = e;
                return t === r.selected_destination_id;
            })
                ? s.reject(Error(e.error ?? "Could not load publish destinations. Try again."))
                : s.resolve(r);
        },
        async publish_approval_required(e, t) {
            let { projectId: r } = t;
            if ((0, p.d)(e.approval_url, e.approval_kind)) {
                if (d.A.getPublishApprovalUrl(r) === e.approval_url) return;
                s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: r, approvalUrl: e.approval_url });
                let { promptPublishApproval: t } = await Promise.all([n.e("46233"), n.e("241989"), n.e("574246")]).then(
                    n.bind(n, 200389),
                );
                t(e.approval_url);
            }
        },
        publish_progress(e, t) {
            let { projectId: n } = t;
            if (!T.has(e.stage)) return;
            let r = Number.isFinite(e.stage_elapsed_ms) ? Math.max(0, e.stage_elapsed_ms) : 0;
            ("approval" !== e.stage &&
                s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: n, approvalUrl: null }),
                s.h.dispatch({
                    type: "CONJURE_PROJECT_PUBLISH_PROGRESS",
                    projectId: n,
                    progress: { stage: e.stage, stageStartedAt: Date.now() - r },
                }));
        },
        publish_cta(e, t) {
            let { projectId: n } = t;
            null != e.publish_cta &&
                s.h.dispatch({
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
            let { projectId: r } = t;
            s.h.dispatch({
                type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                projectId: r,
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
            });
        },
        publish_result(e, t) {
            let { projectId: n } = t;
            s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: n, approvalUrl: null });
            let o = m.get(n);
            (m.delete(n),
                null != o && (clearTimeout(o.timeout), o.resolve(e)),
                !0 !== e.ok
                    ? (0, c.Is)(n, e.error ?? "publish_result not ok", !1)
                    : (function (e) {
                          let t = a.Ay.getProject(e),
                              n = d.A.getPublishStatus(e)?.previewDevicePermissions;
                          if (t?.install_scope !== "user" || "" === t.application_id || null == n) return;
                          let s = t.application_id;
                          (0, l.A)({
                              applicationId: s,
                              appName: r.A.getApplication(s)?.name ?? t.name,
                              iframeId: null,
                              permissions: n,
                          });
                      })(n));
        },
        patch_notes_draft(e, t) {
            let { projectId: n } = t,
                s = b.get(n);
            null != s && s.nonce === e.nonce && (b.delete(n), clearTimeout(s.timeout), s.resolve(e));
        },
    };
function f(e) {
    (0, o.KY)(e)?.sendPreparePublish();
}
function g(e, t) {
    let n = !1;
    return new Promise((r, i) => {
        let l = (0, o.KY)(e);
        if (null == l) return void i(Error("Not connected"));
        if (m.has(e)) return void i(Error("Publish already in flight"));
        let a = setTimeout(() => {
            O(e, "Publish timed out");
        }, 9e5);
        (m.set(e, { resolve: r, reject: i, timeout: a }),
            (n = !0),
            s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_START", projectId: e }));
        try {
            l.sendPublish(t);
        } catch (t) {
            (m.delete(e), clearTimeout(a), i(t instanceof Error ? t : Error("publish send failed")));
        }
    })
        .catch((t) => {
            throw ((0, c.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
        })
        .finally(() => {
            n && s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId: e });
        });
}
function E(e) {
    return new Promise((t, n) => {
        let s = (0, o.KY)(e);
        if (null == s) return void n(Error("Not connected"));
        y(e, "Superseded by a newer draft request");
        let r = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            i = setTimeout(() => {
                y(e, "Draft timed out");
            }, 45e3);
        b.set(e, { resolve: t, reject: n, timeout: i, nonce: r });
        try {
            s.sendDraftPatchNotes(r);
        } catch (t) {
            (b.delete(e), clearTimeout(i), n(t instanceof Error ? t : Error("draft send failed")));
        }
    });
}
function S(e, t, n) {
    s.h.dispatch({ type: "CONJURE_PROJECT_PATCH_NOTES_SENT", projectId: e, sent: t });
    try {
        let s = (0, o.KY)(e);
        if (null == s) throw Error("Not connected");
        s.sendPatchNotesSent(t, n);
    } catch (t) {
        console.warn("[conjure] could not record sent patch notes", e, t);
    }
}
let m = new Map();
function O(e, t) {
    (s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: e, approvalUrl: null }), C(e, t));
    let n = m.get(e);
    null != n && (m.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let b = new Map();
function y(e, t) {
    let n = b.get(e);
    null != n && (b.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let T = new Set(u.n),
    w = new Set(["activity", "automod", "widget", "bot"]);
function N(e) {
    return null != e && w.has(e) ? e : null;
}
let k = new Map();
function C(e, t) {
    let n = k.get(e);
    null != n && (k.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
function R(e) {
    return new Promise((t, n) => {
        let s = (0, o.KY)(e);
        if (null == s) return n(Error("Not connected"));
        if (!s.supportsPublishOptions)
            return void t({
                destinations: [{ id: "conjuring", label: "Conjuring" }],
                selected_destination_id: "conjuring",
            });
        C(e, "Superseded by a newer publish request");
        let r = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            i = setTimeout(() => C(e, "Could not load publish destinations. Try again."), 15e3);
        k.set(e, { resolve: t, reject: n, timeout: i, nonce: r });
        try {
            s.sendPublishOptions(r);
        } catch {
            C(e, "Could not load publish destinations. Try again.");
        }
    });
}
