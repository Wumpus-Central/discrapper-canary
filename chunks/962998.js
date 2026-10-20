n.d(t, { $C: () => p, BC: () => S, BG: () => h, Mz: () => f, TV: () => u, dx: () => d, qy: () => a, rS: () => c });
var r = n(73153),
    s = n(975189),
    o = n(276983),
    i = n(664619),
    l = n(722701);
let a = {
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
    c = {
        publish_cta(e, t) {
            let { projectId: n } = t;
            null != e.publish_cta &&
                r.h.dispatch({
                    type: "CONJURE_CHAT_TURN_PATCH",
                    projectId: n,
                    turnId: e.turn_id,
                    patch: {
                        publishCta: {
                            surface: m(e.publish_cta.surface),
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
                surface: m(e.surface),
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
            });
        },
        publish_result(e, t) {
            let { projectId: n } = t,
                s = _.get(n);
            if ((_.delete(n), null != s && (clearTimeout(s.timeout), s.resolve(e)), !0 !== e.ok))
                (0, i.Is)(n, e.error ?? "publish_result not ok", !1);
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
                        previewDevicePermissions: e.previewDevicePermissions,
                        publishedRevision: e.publishedRevision,
                        publishedAt: e.publishedAt,
                    });
            }
        },
        patch_notes_draft(e, t) {
            let { projectId: n } = t,
                r = g.get(n);
            null != r && r.nonce === e.nonce && (g.delete(n), clearTimeout(r.timeout), r.resolve(e));
        },
    };
function d(e) {
    (0, s.KY)(e)?.sendPreparePublish();
}
function u(e) {
    let t = !1;
    return new Promise((n, o) => {
        let i = (0, s.KY)(e);
        if (null == i) return void o(Error("Not connected"));
        if (_.has(e)) return void o(Error("Publish already in flight"));
        let l = setTimeout(() => {
            f(e, "Publish timed out");
        }, 9e5);
        (_.set(e, { resolve: n, reject: o, timeout: l }),
            (t = !0),
            r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_START", projectId: e }));
        try {
            i.sendPublish();
        } catch (t) {
            (_.delete(e), clearTimeout(l), o(t instanceof Error ? t : Error("publish send failed")));
        }
    })
        .catch((t) => {
            throw ((0, i.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
        })
        .finally(() => {
            t && r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId: e });
        });
}
function p(e) {
    return new Promise((t, n) => {
        let r = (0, s.KY)(e);
        if (null == r) return void n(Error("Not connected"));
        S(e, "Superseded by a newer draft request");
        let o = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            i = setTimeout(() => {
                S(e, "Draft timed out");
            }, 45e3);
        g.set(e, { resolve: t, reject: n, timeout: i, nonce: o });
        try {
            r.sendDraftPatchNotes(o);
        } catch (t) {
            (g.delete(e), clearTimeout(i), n(t instanceof Error ? t : Error("draft send failed")));
        }
    });
}
function h(e, t, n) {
    r.h.dispatch({ type: "CONJURE_PROJECT_PATCH_NOTES_SENT", projectId: e, sent: t });
    try {
        let r = (0, s.KY)(e);
        if (null == r) throw Error("Not connected");
        r.sendPatchNotesSent(t, n);
    } catch (t) {
        console.warn("[conjure] could not record sent patch notes", e, t);
    }
}
let _ = new Map();
function f(e, t) {
    let n = _.get(e);
    null != n && (_.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let g = new Map();
function S(e, t) {
    let n = g.get(e);
    null != n && (g.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let E = new Set(["activity", "automod", "widget", "bot"]);
function m(e) {
    return null != e && E.has(e) ? e : null;
}
