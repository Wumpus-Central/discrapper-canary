n.d(t, { Z: () => s });
var i = n(306680),
    r = n(70956),
    a = n(709054);
function s(e) {
    if (null == e.threadMetadata) return 0;
    let t = e.threadMetadata.autoArchiveDuration * r.Z.Millis.MINUTE;
    return o(e) + t;
}
function o(e) {
    var t;
    if (null == e.threadMetadata) return 0;
    let n = null !== (t = i.ZP.lastMessageId(e.id)) && void 0 !== t ? t : e.id;
    return Math.max(a.default.extractTimestamp(n), null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0);
}
