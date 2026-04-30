n.d(t, { dx: () => u, UF: () => c, Sc: () => h, Lg: () => E }), n(938796);
var i = n(665260),
    l = n(17928),
    a = n(626584),
    r = n(677413),
    s = n(287809);
let o = (0, n(945810).mj)({
    name: "2026-04-scheduled-messages-ui-backup",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var d = n(652215);
let u = new a.A("Scheduled Messages");
function c(e) {
    let { content: t, flags: n } = e,
        [l, a] = (0, r.A)(t);
    return l ? [a, (0, i.UI)(n ?? 0, d.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
}
function h() {
    let e = (0, l.bG)([s.default], () => s.default.getCurrentUser()?.isStaff() ?? !1),
        t = o.useConfig({ location: "useCanUseScheduledMessages" });
    return e || t;
}
function E(e) {
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
