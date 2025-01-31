n.d(t, {
    CN: () => o,
    N7: () => _,
    OR: () => a,
    ZW: () => f,
    fj: () => l,
    xG: () => u
}),
    n(47120),
    n(774863);
let i = 1;
function r(e) {
    return (null != e.attachments && e.attachments.length > 0) || (null != e.embeds && e.embeds.length > 0);
}
function a(e) {
    if (null == e) return !1;
    let t = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    return r(e) || (null != t && (null == t ? void 0 : t.some((e) => r(e.message))));
}
function s(e) {
    return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion ? e.contentScanVersion : null;
}
function o(e, t) {
    return null == e.content_scan_version || e.content_scan_version < (null != t ? t : i);
}
function l(e, t) {
    var n, r, a, o, l, u, c;
    if (((null === (n = e.video) || void 0 === n ? void 0 : n.width) === 0 && (null === (r = e.video) || void 0 === r ? void 0 : r.height) === 0) || ((null === (a = e.thumbnail) || void 0 === a ? void 0 : a.width) === 0 && (null === (o = e.thumbnail) || void 0 === o ? void 0 : o.height) === 0) || ((null === (l = e.image) || void 0 === l ? void 0 : l.width) === 0 && (null === (u = e.image) || void 0 === u ? void 0 : u.height) === 0) || ('images' in e && (null === (c = e.images) || void 0 === c ? void 0 : c.some((e) => 0 === e.width && 0 === e.height)))) return !1;
    let d = s(e);
    return null == d || d < (null != t ? t : i);
}
function u(e) {
    var t, n, i, r;
    if ((null === (t = e.attachments) || void 0 === t ? void 0 : t.some(o)) || (null === (n = e.embeds) || void 0 === n ? void 0 : n.some(l))) return !0;
    let a = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    if (null == a || 0 === a.length) return !1;
    for (let e of a) if ((null === (i = e.message.attachments) || void 0 === i ? void 0 : i.some(o)) || (null === (r = e.message.embeds) || void 0 === r ? void 0 : r.some(l))) return !0;
    return !1;
}
function c(e) {
    return null == e.content_scan_version;
}
function d(e) {
    var t, n, i, r, a, o, l;
    let u = s(e);
    return !(((null === (t = e.video) || void 0 === t ? void 0 : t.width) === 0 && (null === (n = e.video) || void 0 === n ? void 0 : n.height) === 0) || ((null === (i = e.thumbnail) || void 0 === i ? void 0 : i.width) === 0 && (null === (r = e.thumbnail) || void 0 === r ? void 0 : r.height) === 0) || ((null === (a = e.image) || void 0 === a ? void 0 : a.width) === 0 && (null === (o = e.image) || void 0 === o ? void 0 : o.height) === 0) || ('images' in e && (null === (l = e.images) || void 0 === l ? void 0 : l.some((e) => 0 === e.width && 0 === e.height)))) && null == u;
}
function f(e) {
    var t, n, i, r, a, s, o, l;
    let u = null !== (a = null == e ? void 0 : null === (t = e.attachments) || void 0 === t ? void 0 : t.length) && void 0 !== a ? a : 0,
        f = null !== (s = null == e ? void 0 : null === (n = e.embeds) || void 0 === n ? void 0 : n.length) && void 0 !== s ? s : 0;
    if (0 === u && 0 === f)
        return {
            attachmentIds: [],
            embedIds: []
        };
    let _ = null !== (o = null == e ? void 0 : null === (i = e.attachments) || void 0 === i ? void 0 : i.filter(c)) && void 0 !== o ? o : [],
        p = null !== (l = null == e ? void 0 : null === (r = e.embeds) || void 0 === r ? void 0 : r.filter(d)) && void 0 !== l ? l : [];
    return {
        attachmentIds: _.map((e) => e.id).filter(Boolean),
        embedIds: p.map((e, t) => 'embed_'.concat(t)).filter(Boolean)
    };
}
function _(e) {
    let { attachmentIds: t, embedIds: n } = f(e);
    return t.length > 0 || n.length > 0;
}
