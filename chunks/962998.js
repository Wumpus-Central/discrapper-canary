n.d(t, { $C: () => u, BC: () => g, BG: () => p, Mz: () => _, TV: () => d, dx: () => c, qy: () => i, rS: () => a });
var r = n(73153),
    s = n(975189),
    o = n(664619),
    l = n(722701);
let i = {
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
    a = {
        publish_cta(e, t) {
            let { projectId: n } = t;
            null != e.publish_cta &&
                r.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: {
                        publishCta: {
                            surface: E(e.publish_cta.surface),
                            reason: "new_ui" === e.publish_cta.reason ? "new_ui" : "first_publish",
                        },
                    },
                });
        },
        publish_status(e, t) {
            let { projectId: n } = t;
            r.h.dispatch({
                type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                projectId: n,
                published: !0 === e.published,
                hasUnpublishedChanges: !0 === e.has_unpublished_changes,
                surface: E(e.surface),
                previewAppChannels: Array.isArray(e.preview_app_channels)
                    ? e.preview_app_channels.filter((e) => "string" == typeof e)
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
            let { projectId: n } = t,
                s = h.get(n);
            if ((h.delete(n), null != s && (clearTimeout(s.timeout), s.resolve(e)), !0 !== e.ok))
                (0, o.Is)(n, e.error ?? "publish_result not ok", !1);
            else {
                let e = l.A.getPublishStatus(n);
                null != e &&
                    r.h.dispatch({
                        type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                        projectId: n,
                        published: !0,
                        hasUnpublishedChanges: !1,
                        surface: e.surface,
                        previewAppChannels: e.previewAppChannels,
                        publishedRevision: e.publishedRevision,
                        publishedAt: e.publishedAt,
                    });
            }
        },
        patch_notes_draft(e, t) {
            let { projectId: n } = t,
                r = f.get(n);
            null != r && r.nonce === e.nonce && (f.delete(n), clearTimeout(r.timeout), r.resolve(e));
        },
    };
function c(e) {
    (0, s.KY)(e)?.sendPreparePublish();
}
function d(e) {
    let t = !1;
    return new Promise((n, o) => {
        let l = (0, s.KY)(e);
        if (null == l) return void o(Error("Not connected"));
        if (h.has(e)) return void o(Error("Publish already in flight"));
        let i = setTimeout(() => {
            _(e, "Publish timed out");
        }, 9e5);
        (h.set(e, { resolve: n, reject: o, timeout: i }),
            (t = !0),
            r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_START", projectId: e }));
        try {
            l.sendPublish();
        } catch (t) {
            (h.delete(e), clearTimeout(i), o(t instanceof Error ? t : Error("publish send failed")));
        }
    })
        .catch((t) => {
            throw ((0, o.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
        })
        .finally(() => {
            t && r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId: e });
        });
}
function u(e) {
    return new Promise((t, n) => {
        let r = (0, s.KY)(e);
        if (null == r) return void n(Error("Not connected"));
        g(e, "Superseded by a newer draft request");
        let o = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            l = setTimeout(() => {
                g(e, "Draft timed out");
            }, 45e3);
        f.set(e, { resolve: t, reject: n, timeout: l, nonce: o });
        try {
            r.sendDraftPatchNotes(o);
        } catch (t) {
            (f.delete(e), clearTimeout(l), n(t instanceof Error ? t : Error("draft send failed")));
        }
    });
}
function p(e, t, n) {
    r.h.dispatch({ type: "CONJURE_PROJECT_PATCH_NOTES_SENT", projectId: e, sent: t });
    try {
        let r = (0, s.KY)(e);
        if (null == r) throw Error("Not connected");
        r.sendPatchNotesSent(t, n);
    } catch (t) {
        console.warn("[conjure] could not record sent patch notes", e, t);
    }
}
let h = new Map();
function _(e, t) {
    let n = h.get(e);
    null != n && (h.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let f = new Map();
function g(e, t) {
    let n = f.get(e);
    null != n && (f.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let S = new Set(["activity", "automod", "widget", "bot"]);
function E(e) {
    return null != e && S.has(e) ? e : null;
}
