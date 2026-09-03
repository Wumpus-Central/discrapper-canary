n.d(t, { A: () => s });
var i = n(573163),
    r = n(927813),
    a = n(935208);
function s(e) {
    if (null == e.threadMetadata) return 0;
    let t = e.threadMetadata.autoArchiveDuration * r.A.Millis.MINUTE;
    return (
        (function (e) {
            if (null == e.threadMetadata) return 0;
            let t = i.Ay.lastMessageId(e.id) ?? e.id;
            return Math.max(
                a.default.extractTimestamp(t),
                null != e.lastNonMessageActivityTimestamp ? new Date(e.lastNonMessageActivityTimestamp).getTime() : 0,
                null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0,
            );
        })(e) + t
    );
}
