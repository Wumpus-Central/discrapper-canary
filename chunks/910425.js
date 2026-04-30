"use strict";
n.d(t, { dx: () => c, UF: () => d, Sc: () => _, Lg: () => f }), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(626584),
    a = n(677413),
    o = n(287809);
let l = (0, n(945810).mj)({
    name: "2026-04-scheduled-messages-ui-backup",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var u = n(652215);
let c = new s.A("Scheduled Messages");
function d(e) {
    let { content: t, flags: n } = e,
        [r, s] = (0, a.A)(t);
    return r ? [s, (0, i.UI)(n ?? 0, u.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
}
function _() {
    let e = (0, r.bG)([o.default], () => o.default.getCurrentUser()?.isStaff() ?? !1),
        t = l.useConfig({ location: "useCanUseScheduledMessages" });
    return e || t;
}
function f(e) {
    var t;
    return {
        userId: e.user_id,
        scheduledMessageId: e.scheduled_message_id,
        sendAtTimestamp: e.send_at_timestamp,
        scheduledMessage: {
            channelId: (t = e.scheduled_message).channel_id,
            content: t.content,
            type: t.type,
            flags: t.flags,
            messageReference: t.message_reference,
        },
        state: e.state,
    };
}
