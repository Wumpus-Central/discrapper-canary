"use strict";
n.d(t, { n: () => a });
var r = n(508675),
    i = n(690521),
    s = n(307731);
function a(e, t) {
    if (null == e.id) return !0;
    let n = r.Ay.getCustomEmojiById(e.id);
    return null != n && !i.Ay.isEmojiDisabled({ emoji: n, channel: t, intention: s.EmojiIntention.STATUS });
}
