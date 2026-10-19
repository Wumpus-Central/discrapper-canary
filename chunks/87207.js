n.d(t, { A: () => d });
var l = n(17928),
    i = n(355622),
    r = n(931664),
    s = n(576705),
    a = n(522602),
    o = n(680671),
    u = n(652215);
let c = new Set([
    i.oU.THREAD_CREATION,
    i.oU.CREATE_FORUM_POST,
    i.oU.CREATE_ANNOUNCEMENT_POST,
    i.oU.EDIT,
    i.oU.FORWARD_MESSAGE_INPUT,
]);
function d(e, t) {
    let n = (0, l.bG)([s.A], () => !!e.isPrivate() || s.A.can(u.xBc.SEND_VOICE_MESSAGES, e)),
        i = (0, l.bG)([r.A, a.A], () => {
            let n = t?.drafts?.type;
            if (null == n) return !1;
            let l = r.A.getStickerPreview(e.id, n);
            return (null != l && l.length > 0) || a.A.getUploads(e.id, n).length > 0;
        });
    return (
        !(null == t || !(0, o.t)() || t.voiceMessages?.button !== !0 || c.has(t) || e.isForumLikeChannel()) && !i && n
    );
}
