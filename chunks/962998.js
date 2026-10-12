n.d(t, { $C: () => u, BC: () => _, Mz: () => h, TV: () => d, qy: () => a, rS: () => c });
var r = n(73153),
    s = n(975189),
    o = n(260498),
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
                    patch: { publishCta: { surface: E(e.publish_cta.surface) } },
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
            });
        },
        publish_result(e, t) {
            let { projectId: n } = t,
                s = p.get(n);
            if ((p.delete(n), null != s && (clearTimeout(s.timeout), s.resolve(e)), !0 !== e.ok))
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
function d(e) {
    let t = !1;
    return new Promise((n, o) => {
        let i = (0, s.KY)(e);
        if (null == i) return void o(Error("Not connected"));
        if (p.has(e)) return void o(Error("Publish already in flight"));
        let l = setTimeout(() => {
            h(e, "Publish timed out");
        }, 9e5);
        (p.set(e, { resolve: n, reject: o, timeout: l }),
            (t = !0),
            r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_START", projectId: e }));
        try {
            i.sendPublish();
        } catch (t) {
            (p.delete(e), clearTimeout(l), o(t instanceof Error ? t : Error("publish send failed")));
        }
    })
        .catch((t) => {
            throw ((0, i.Is)(e, t instanceof Error ? t.message : "publish failed", !1), t);
        })
        .finally(() => {
            t && r.h.dispatch({ type: "CONJURE_PROJECT_PUBLISH_SETTLE", projectId: e });
        });
}
function u(e) {
    return new Promise((t, n) => {
        let r = (0, s.KY)(e);
        if (null == r) return void n(Error("Not connected"));
        _(e, "Superseded by a newer draft request");
        let i = `${Date.now()}-${Math.random().toString(36).slice(2)}`,
            l = setTimeout(() => {
                _(e, "Draft timed out");
            }, 45e3);
        f.set(e, { resolve: t, reject: n, timeout: l, nonce: i });
        try {
            r.sendDraftPatchNotes(i, o.Ay.getProject(e)?.name);
        } catch (t) {
            (f.delete(e), clearTimeout(l), n(t instanceof Error ? t : Error("draft send failed")));
        }
    });
}
let p = new Map();
function h(e, t) {
    let n = p.get(e);
    null != n && (p.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let f = new Map();
function _(e, t) {
    let n = f.get(e);
    null != n && (f.delete(e), clearTimeout(n.timeout), n.reject(Error(t)));
}
let g = new Set(["activity", "automod", "widget", "bot"]);
function E(e) {
    return null != e && g.has(e) ? e : null;
}
