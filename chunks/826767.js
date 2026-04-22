"use strict";
n.d(t, { A: () => a });
var r = n(222823),
    i = n(927813),
    s = n(661191);
function a(e) {
    if (null == e.threadMetadata) return 0;
    let t = e.threadMetadata.autoArchiveDuration * i.A.Millis.MINUTE;
    return (
        (function (e) {
            if (null == e.threadMetadata) return 0;
            let t = r.Ay.lastMessageId(e.id) ?? e.id;
            return Math.max(
                s.default.extractTimestamp(t),
                null != e.threadMetadata.archiveTimestamp ? new Date(e.threadMetadata.archiveTimestamp).getTime() : 0,
            );
        })(e) + t
    );
}
