"use strict";
function r(e) {
    return (
        (null != e.attachments && e.attachments.length > 0) ||
        (null != e.embeds && e.embeds.length > 0) ||
        (null != e.components && e.components.length > 0)
    );
}
function i(e) {
    if (null == e) return !1;
    let t = "messageSnapshots" in e ? e.messageSnapshots : e.message_snapshots;
    return r(e) || (null != t && t?.some((e) => r(e.message)));
}
n.d(t, { b: () => i });
