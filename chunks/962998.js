n.d(t, {
    $C: () => h,
    BC: () => S,
    BG: () => _,
    Mz: () => g,
    TV: () => p,
    dx: () => u,
    qy: () => c,
    rS: () => d,
    xQ: () => T,
});
var s = n(73153),
    r = n(975189),
    o = n(276983),
    i = n(664619),
    l = n(722701),
    a = n(28883);
let c = {
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
    d = {
        publish_options(e, t) {
            let { projectId: n } = t,
                s = b.get(n);
            if (null == s || s.nonce !== e.nonce) return;
            (b.delete(n), clearTimeout(s.timeout));
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
            if ((0, a.d)(e.approval_url, e.approval_kind)) {
                s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: r, approvalUrl: e.approval_url });
                let { promptPublishApproval: t } = await Promise.all([n.e("46233"), n.e("241989"), n.e("574246")]).then(
                    n.bind(n, 200389),
                );
                t(e.approval_url);
            }
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
                            surface: O(e.publish_cta.surface),
                            reason: "new_ui" === e.publish_cta.reason ? "new_ui" : "first_publish",
                        },
                    },
                });
        },
        publish_status(e, t) {
            let { projectId: n } = t;
            s.h.dispatch({
                type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
                projectId: n,
                published: !0 === e.published,
                hasUnpublishedChanges: !0 === e.has_unpublished_changes,
                surface: O(e.surface),
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
            let { projectId: n } = t;
            s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: n, approvalUrl: null });
            let r = f.get(n);
            if ((f.delete(n), null != r && (clearTimeout(r.timeout), r.resolve(e)), !0 !== e.ok))
                (0, i.Is)(n, e.error ?? "publish_result not ok", !1);
            else {
                let e = l.A.getPublishStatus(n);
                null != e &&
                    s.h.dispatch({
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
                s = E.get(n);
            null != s && s.nonce === e.nonce && (E.delete(n), clearTimeout(s.timeout), s.resolve(e));
        },
    };
function u(e) {
    (0, r.KY)(e)?.sendPreparePublish();
}
function p(e, t) {
    let n = !1;
    return new Promise((o, i) => {
        let l = (0, r.KY)(e);
        if (null == l) return void i(Error("Not connected"));
        if (f.has(e)) return void i(Error("Publish already in flight"));
        let a = setTimeout(() => {
            g(e, "Publish timed out");
        }, 9e5);
        (f.set(e, { resolve: o, reject: i, timeout: a }),
            (n = !0),
            s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_START", projectId: e }));
        try {
            l.sendPublish(t);
        } catch (t) {
            (f.delete(e), clearTimeout(a), i(t instanceof Error ? t : Error("publish send failed")));
        }
    })
        .catch((t) => {
            throw ((0, i.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
        })
        .finally(() => {
            n && s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId: e });
        });
}
function h(e) {
    return new Promise((t, n) => {
        let s = (0, r.KY)(e);
        if (null == s) return void n(Error("Not connected"));
        S(e, "Superseded by a newer draft request");
        let o = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            i = setTimeout(() => {
                S(e, "Draft timed out");
            }, 45e3);
        E.set(e, { resolve: t, reject: n, timeout: i, nonce: o });
        try {
            s.sendDraftPatchNotes(o);
        } catch (t) {
            (E.delete(e), clearTimeout(i), n(t instanceof Error ? t : Error("draft send failed")));
        }
    });
}
function _(e, t, n) {
    s.h.dispatch({ type: "CONJURE_PROJECT_PATCH_NOTES_SENT", projectId: e, sent: t });
    try {
        let s = (0, r.KY)(e);
        if (null == s) throw Error("Not connected");
        s.sendPatchNotesSent(t, n);
    } catch (t) {
        console.warn("[conjure] could not record sent patch notes", e, t);
    }
}
let f = new Map();
function g(e, t) {
    (s.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_APPROVAL", projectId: e, approvalUrl: null }), y(e, t));
    let n = f.get(e);
    null != n && (f.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let E = new Map();
function S(e, t) {
    let n = E.get(e);
    null != n && (E.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let m = new Set(["activity", "automod", "widget", "bot"]);
function O(e) {
    return null != e && m.has(e) ? e : null;
}
let b = new Map();
function y(e, t) {
    let n = b.get(e);
    null != n && (b.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
function T(e) {
    return new Promise((t, n) => {
        let s = (0, r.KY)(e);
        if (null == s) return n(Error("Not connected"));
        if (!s.supportsPublishOptions)
            return void t({
                destinations: [{ id: "conjuring", label: "Conjuring" }],
                selected_destination_id: "conjuring",
            });
        y(e, "Superseded by a newer publish request");
        let o = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            i = setTimeout(() => y(e, "Could not load publish destinations. Try again."), 15e3);
        b.set(e, { resolve: t, reject: n, timeout: i, nonce: o });
        try {
            s.sendPublishOptions(o);
        } catch {
            y(e, "Could not load publish destinations. Try again.");
        }
    });
}
