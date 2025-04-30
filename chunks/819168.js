n.d(t, { Z: () => o });
var r = n(306680),
    i = n(70956),
    a = n(709054);
function o(e) {
    if (null == e.threadMetadata) return 0;
    let t = e.threadMetadata.autoArchiveDuration * i.Z.Millis.MINUTE;
    return s(e) + t;
}
function s(e) {
    var t;
    if (null == e.threadMetadata) return 0;
    let n = null != (t = r.ZP.lastMessageId(e.id)) ? t : e.id;
    return Math.max(a.default.extractTimestamp(n), null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0);
}
