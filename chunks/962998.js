n.d(t, {
    $C: () => g,
    BC: () => y,
    BG: () => E,
    Mz: () => m,
    TV: () => f,
    dx: () => _,
    qy: () => p,
    rS: () => h,
    xQ: () => k,
});
var r = n(73153),
    s = n(587895),
    o = n(975189),
    i = n(276983),
    l = n(423976),
    a = n(260498),
    c = n(664619),
    d = n(722701),
    u = n(28883);
let p = {
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
    h = {
        publish_options(e, t) {
            let { projectId: n } = t,
                r = w.get(n);
            if (null == r || r.nonce !== e.nonce) return;
            (w.delete(n), clearTimeout(r.timeout));
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
            if ((0, u.d)(e.approval_url, e.approval_kind)) {
                r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: s, approvalUrl: e.approval_url });
                let { promptPublishApproval: t } = await Promise.all([n.e("46233"), n.e("241989"), n.e("574246")]).then(
                    n.bind(n, 200389),
                );
                t(e.approval_url);
            }
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
                            surface: T(e.publish_cta.surface),
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
                surface: T(e.surface),
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
            r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: n, approvalUrl: null });
            let o = S.get(n);
            (S.delete(n),
                null != o && (clearTimeout(o.timeout), o.resolve(e)),
                !0 !== e.ok
                    ? (0, c.Is)(n, e.error ?? "publish_result not ok", !1)
                    : (function (e) {
                          let t = a.Ay.getProject(e),
                              n = d.A.getPublishStatus(e)?.previewDevicePermissions;
                          if (t?.install_scope !== "user" || "" === t.application_id || null == n) return;
                          let r = t.application_id;
                          (0, l.A)({
                              applicationId: r,
                              appName: s.A.getApplication(r)?.name ?? t.name,
                              iframeId: null,
                              permissions: n,
                          });
                      })(n));
        },
        patch_notes_draft(e, t) {
            let { projectId: n } = t,
                r = O.get(n);
            null != r && r.nonce === e.nonce && (O.delete(n), clearTimeout(r.timeout), r.resolve(e));
        },
    };
function _(e) {
    (0, o.KY)(e)?.sendPreparePublish();
}
function f(e, t) {
    let n = !1;
    return new Promise((s, i) => {
        let l = (0, o.KY)(e);
        if (null == l) return void i(Error("Not connected"));
        if (S.has(e)) return void i(Error("Publish already in flight"));
        let a = setTimeout(() => {
            m(e, "Publish timed out");
        }, 9e5);
        (S.set(e, { resolve: s, reject: i, timeout: a }),
            (n = !0),
            r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_START", projectId: e }));
        try {
            l.sendPublish(t);
        } catch (t) {
            (S.delete(e), clearTimeout(a), i(t instanceof Error ? t : Error("publish send failed")));
        }
    })
        .catch((t) => {
            throw ((0, c.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
        })
        .finally(() => {
            n && r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId: e });
        });
}
function g(e) {
    return new Promise((t, n) => {
        let r = (0, o.KY)(e);
        if (null == r) return void n(Error("Not connected"));
        y(e, "Superseded by a newer draft request");
        let s = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            i = setTimeout(() => {
                y(e, "Draft timed out");
            }, 45e3);
        O.set(e, { resolve: t, reject: n, timeout: i, nonce: s });
        try {
            r.sendDraftPatchNotes(s);
        } catch (t) {
            (O.delete(e), clearTimeout(i), n(t instanceof Error ? t : Error("draft send failed")));
        }
    });
}
function E(e, t, n) {
    r.h.dispatch({ type: "CONJURE_PROJECT_PATCH_NOTES_SENT", projectId: e, sent: t });
    try {
        let r = (0, o.KY)(e);
        if (null == r) throw Error("Not connected");
        r.sendPatchNotesSent(t, n);
    } catch (t) {
        console.warn("[conjure] could not record sent patch notes", e, t);
    }
}
let S = new Map();
function m(e, t) {
    (r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: e, approvalUrl: null }), N(e, t));
    let n = S.get(e);
    null != n && (S.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let O = new Map();
function y(e, t) {
    let n = O.get(e);
    null != n && (O.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let b = new Set(["activity", "automod", "widget", "bot"]);
function T(e) {
    return null != e && b.has(e) ? e : null;
}
let w = new Map();
function N(e, t) {
    let n = w.get(e);
    null != n && (w.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
function k(e) {
    return new Promise((t, n) => {
        let r = (0, o.KY)(e);
        if (null == r) return n(Error("Not connected"));
        if (!r.supportsPublishOptions)
            return void t({
                destinations: [{ id: "conjuring", label: "Conjuring" }],
                selected_destination_id: "conjuring",
            });
        N(e, "Superseded by a newer publish request");
        let s = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            i = setTimeout(() => N(e, "Could not load publish destinations. Try again."), 15e3);
        w.set(e, { resolve: t, reject: n, timeout: i, nonce: s });
        try {
            r.sendPublishOptions(s);
        } catch {
            N(e, "Could not load publish destinations. Try again.");
        }
    });
}
