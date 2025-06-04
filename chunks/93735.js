n.d(t, {
    CN: () => l,
    N7: () => p,
    OR: () => a,
    ZW: () => _,
    fj: () => c,
    xG: () => u
}),
    n(388685);
var r = n(774863),
    i = n(470734);
function o(e) {
    return (null != e.attachments && e.attachments.length > 0) || (null != e.embeds && e.embeds.length > 0);
}
function a(e) {
    if (null == e) return !1;
    let t = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    return o(e) || (null != t && (null == t ? void 0 : t.some((e) => o(e.message))));
}
function s(e) {
    return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion ? e.contentScanVersion : null;
}
function l(e) {
    let t = e.content_scan_version,
        n = r.Z.validContentScanVersion;
    return null == t || t < n;
}
function c(e) {
    var t, n, i, o, a, l, c;
    if (((null == (t = e.video) ? void 0 : t.width) === 0 && (null == (n = e.video) ? void 0 : n.height) === 0) || ((null == (i = e.thumbnail) ? void 0 : i.width) === 0 && (null == (o = e.thumbnail) ? void 0 : o.height) === 0) || ((null == (a = e.image) ? void 0 : a.width) === 0 && (null == (l = e.image) ? void 0 : l.height) === 0) || ('images' in e && (null == (c = e.images) ? void 0 : c.some((e) => 0 === e.width && 0 === e.height)))) return !1;
    let u = s(e),
        d = r.Z.validContentScanVersion;
    return null == u || u < d;
}
function u(e) {
    var t, n, r, i;
    if ((null == (t = e.attachments) ? void 0 : t.some(l)) || (null == (n = e.embeds) ? void 0 : n.some(c))) return !0;
    let o = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    if (null == o || 0 === o.length) return !1;
    for (let e of o) if ((null == (r = e.message.attachments) ? void 0 : r.some(l)) || (null == (i = e.message.embeds) ? void 0 : i.some(c))) return !0;
    return !1;
}
function d(e) {
    let t = (0, i.U2)('isAttachmentUnscannedForTimeout'),
        n = r.Z.validContentScanVersion;
    return null == e.content_scan_version || (t && e.content_scan_version !== n);
}
function f(e) {
    var t, n, o, a, l, c, u;
    let d = s(e),
        f = (0, i.U2)('isEmbedUnscannedForTimeout');
    if (((null == (t = e.video) ? void 0 : t.width) === 0 && (null == (n = e.video) ? void 0 : n.height) === 0) || ((null == (o = e.thumbnail) ? void 0 : o.width) === 0 && (null == (a = e.thumbnail) ? void 0 : a.height) === 0) || ((null == (l = e.image) ? void 0 : l.width) === 0 && (null == (c = e.image) ? void 0 : c.height) === 0) || ('images' in e && (null == (u = e.images) ? void 0 : u.some((e) => 0 === e.width && 0 === e.height)))) return !1;
    let _ = r.Z.validContentScanVersion;
    return null == d || (f && d !== _);
}
function _(e) {
    var t, n, r, i, o, a, s, l;
    let c = null != (o = null == e || null == (t = e.attachments) ? void 0 : t.length) ? o : 0,
        u = null != (a = null == e || null == (n = e.embeds) ? void 0 : n.length) ? a : 0;
    if (0 === c && 0 === u)
        return {
            attachmentIds: [],
            embedIds: []
        };
    let _ = null != (s = null == e || null == (r = e.attachments) ? void 0 : r.filter(d)) ? s : [],
        p = null != (l = null == e || null == (i = e.embeds) ? void 0 : i.filter(f)) ? l : [];
    return {
        attachmentIds: _.map((e) => e.id).filter(Boolean),
        embedIds: p.map((e, t) => 'embed_'.concat(t)).filter(Boolean)
    };
}
function p(e) {
    let { attachmentIds: t, embedIds: n } = _(e);
    return t.length > 0 || n.length > 0;
}
