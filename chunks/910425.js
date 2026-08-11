"use strict";
n.d(t, { f8: () => f, UF: () => A, dx: () => E, zs: () => h, Sc: () => I, Lg: () => p }), n(938796);
var i = n(989349),
    r = n.n(i),
    a = n(665260),
    s = n(17928),
    l = n(626584),
    o = n(677413),
    d = n(383233),
    c = n(287809);
let u = (0, n(945810).mj)({
    name: "2026-04-scheduled-messages-ui-backup",
    kind: "user",
    defaultConfig: !1,
    variations: { 0: !1, 1: !0 },
});
var _ = n(652215);
let E = new l.A("Scheduled Messages");
function A(e) {
    let { content: t, flags: n } = e,
        [i, r] = (0, o.Ay)(t);
    return i ? [r, (0, a.UI)(n ?? 0, _.pr7.SUPPRESS_NOTIFICATIONS)] : [t, n ?? 0];
}
function h(e) {
    let { content: t, flags: n } = e;
    return (0, a.Lt)(n ?? 0, _.pr7.SUPPRESS_NOTIFICATIONS) ? `${o.f5} ${t}` : t;
}
function I() {
    let e = (0, s.bG)([c.default], () => c.default.getCurrentUser()?.isStaff() ?? !1),
        t = u.useConfig({ location: "useCanUseScheduledMessages" });
    return e || t;
}
function f(e) {
    return (c.default.getCurrentUser()?.isStaff() ?? !1) || u.getConfig({ location: e });
}
function p(e) {
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
        attachmentUploads: (e.attachment_uploads ?? []).map((e) => ({
            filename: e.filename,
            uploadedFilename: e.uploaded_filename,
            description: e.description,
            title: e.title,
        })),
        record: new d.Ay({
            id: e.scheduled_message_id,
            content: e.scheduled_message.content,
            author: c.default.getUser(e.user_id),
            timestamp: r()(e.send_at_timestamp).toDate(),
            channel_id: e.scheduled_message.channel_id,
        }),
    };
}
