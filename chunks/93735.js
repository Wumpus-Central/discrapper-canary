r.d(n, {
    CN: function () {
        return u;
    },
    N7: function () {
        return _;
    },
    OR: function () {
        return s;
    },
    ZW: function () {
        return h;
    },
    fj: function () {
        return c;
    },
    xG: function () {
        return d;
    }
});
var i = r(47120);
r(774863);
let a = 1;
function o(e) {
    return (null != e.attachments && e.attachments.length > 0) || (null != e.embeds && e.embeds.length > 0);
}
function s(e) {
    if (null == e) return !1;
    let n = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    return o(e) || (null != n && (null == n ? void 0 : n.some((e) => o(e.message))));
}
function l(e) {
    return null != e.content_scan_version ? e.content_scan_version : null != e.contentScanVersion ? e.contentScanVersion : null;
}
function u(e, n) {
    return null == e.content_scan_version || e.content_scan_version < (null != n ? n : a);
}
function c(e, n) {
    var r, i, o, s, u, c, d;
    if (((null === (r = e.video) || void 0 === r ? void 0 : r.width) === 0 && (null === (i = e.video) || void 0 === i ? void 0 : i.height) === 0) || ((null === (o = e.thumbnail) || void 0 === o ? void 0 : o.width) === 0 && (null === (s = e.thumbnail) || void 0 === s ? void 0 : s.height) === 0) || ((null === (u = e.image) || void 0 === u ? void 0 : u.width) === 0 && (null === (c = e.image) || void 0 === c ? void 0 : c.height) === 0) || ('images' in e && (null === (d = e.images) || void 0 === d ? void 0 : d.some((e) => 0 === e.width && 0 === e.height)))) return !1;
    let f = l(e);
    return null == f || f < (null != n ? n : a);
}
function d(e) {
    var n, r, i, a;
    if ((null === (n = e.attachments) || void 0 === n ? void 0 : n.some(u)) || (null === (r = e.embeds) || void 0 === r ? void 0 : r.some(c))) return !0;
    let o = 'messageSnapshots' in e ? e.messageSnapshots : e.message_snapshots;
    if (null == o || 0 === o.length) return !1;
    for (let e of o) if ((null === (i = e.message.attachments) || void 0 === i ? void 0 : i.some(u)) || (null === (a = e.message.embeds) || void 0 === a ? void 0 : a.some(c))) return !0;
    return !1;
}
function f(e) {
    return null == e.content_scan_version;
}
function p(e) {
    var n, r, i, a, o, s, u;
    let c = l(e);
    return !(((null === (n = e.video) || void 0 === n ? void 0 : n.width) === 0 && (null === (r = e.video) || void 0 === r ? void 0 : r.height) === 0) || ((null === (i = e.thumbnail) || void 0 === i ? void 0 : i.width) === 0 && (null === (a = e.thumbnail) || void 0 === a ? void 0 : a.height) === 0) || ((null === (o = e.image) || void 0 === o ? void 0 : o.width) === 0 && (null === (s = e.image) || void 0 === s ? void 0 : s.height) === 0) || ('images' in e && (null === (u = e.images) || void 0 === u ? void 0 : u.some((e) => 0 === e.width && 0 === e.height)))) && null == c;
}
function h(e) {
    var n, r, i, a, o, s, l, u;
    let c = null !== (o = null == e ? void 0 : null === (n = e.attachments) || void 0 === n ? void 0 : n.length) && void 0 !== o ? o : 0,
        d = null !== (s = null == e ? void 0 : null === (r = e.embeds) || void 0 === r ? void 0 : r.length) && void 0 !== s ? s : 0;
    if (0 === c && 0 === d)
        return {
            attachmentIds: [],
            embedIds: []
        };
    let h = null !== (l = null == e ? void 0 : null === (i = e.attachments) || void 0 === i ? void 0 : i.filter(f)) && void 0 !== l ? l : [],
        _ = null !== (u = null == e ? void 0 : null === (a = e.embeds) || void 0 === a ? void 0 : a.filter(p)) && void 0 !== u ? u : [];
    return {
        attachmentIds: h.map((e) => e.id).filter(Boolean),
        embedIds: _.map((e, n) => 'embed_'.concat(n)).filter(Boolean)
    };
}
function _(e) {
    let { attachmentIds: n, embedIds: r } = h(e);
    return n.length > 0 || r.length > 0;
}
