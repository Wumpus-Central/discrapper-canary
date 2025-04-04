n.d(t, {
    CN: () => s,
    N7: () => _,
    OR: () => o,
    ZW: () => f,
    fj: () => l,
    xG: () => c
}),
    n(47120),
    n(774863);
let r = 1;
function i(e) {
    return (null != e.attachments && e.attachments.length > 0) || (null != e.embeds && e.embeds.length > 0);
}
function o(e) {
    if (null == e) return !1;
    let t = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    return i(e) || (null != t && (null == t ? void 0 : t.some((e) => i(e.message))));
}
function a(e) {
    return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion ? e.contentScanVersion : null;
}
function s(e, t) {
    return null == e.content_scan_version || e.content_scan_version < (null != t ? t : r);
}
function l(e, t) {
    var n, i, o, s, l, c, u;
    if (((null == (n = e.video) ? void 0 : n.width) === 0 && (null == (i = e.video) ? void 0 : i.height) === 0) || ((null == (o = e.thumbnail) ? void 0 : o.width) === 0 && (null == (s = e.thumbnail) ? void 0 : s.height) === 0) || ((null == (l = e.image) ? void 0 : l.width) === 0 && (null == (c = e.image) ? void 0 : c.height) === 0) || ('images' in e && (null == (u = e.images) ? void 0 : u.some((e) => 0 === e.width && 0 === e.height)))) return !1;
    let d = a(e);
    return null == d || d < (null != t ? t : r);
}
function c(e) {
    var t, n, r, i;
    if ((null == (t = e.attachments) ? void 0 : t.some(s)) || (null == (n = e.embeds) ? void 0 : n.some(l))) return !0;
    let o = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    if (null == o || 0 === o.length) return !1;
    for (let e of o) if ((null == (r = e.message.attachments) ? void 0 : r.some(s)) || (null == (i = e.message.embeds) ? void 0 : i.some(l))) return !0;
    return !1;
}
function u(e) {
    return null == e.content_scan_version;
}
function d(e) {
    var t, n, r, i, o, s, l;
    let c = a(e);
    return !(((null == (t = e.video) ? void 0 : t.width) === 0 && (null == (n = e.video) ? void 0 : n.height) === 0) || ((null == (r = e.thumbnail) ? void 0 : r.width) === 0 && (null == (i = e.thumbnail) ? void 0 : i.height) === 0) || ((null == (o = e.image) ? void 0 : o.width) === 0 && (null == (s = e.image) ? void 0 : s.height) === 0) || ('images' in e && (null == (l = e.images) ? void 0 : l.some((e) => 0 === e.width && 0 === e.height)))) && null == c;
}
function f(e) {
    var t, n, r, i, o, a, s, l;
    let c = null != (o = null == e || null == (t = e.attachments) ? void 0 : t.length) ? o : 0,
        f = null != (a = null == e || null == (n = e.embeds) ? void 0 : n.length) ? a : 0;
    if (0 === c && 0 === f)
        return {
            attachmentIds: [],
            embedIds: []
        };
    let _ = null != (s = null == e || null == (r = e.attachments) ? void 0 : r.filter(u)) ? s : [],
        p = null != (l = null == e || null == (i = e.embeds) ? void 0 : i.filter(d)) ? l : [];
    return {
        attachmentIds: _.map((e) => e.id).filter(Boolean),
        embedIds: p.map((e, t) => 'embed_'.concat(t)).filter(Boolean)
    };
}
function _(e) {
    let { attachmentIds: t, embedIds: n } = f(e);
    return t.length > 0 || n.length > 0;
}
