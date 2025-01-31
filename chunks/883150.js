n.d(t, { default: () => c });
var a = n(200651);
n(192379);
var r = n(481060),
    i = n(239091),
    d = n(324701),
    l = n(898150),
    s = n(388032);
function c(e) {
    let { message: t } = e,
        n = (0, l.r)({
            createReminder: (e) =>
                (0, d.z)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e
                })
        });
    return (0, a.jsx)(r.v2r, {
        navId: 'message-reminder-snooze',
        onClose: i.Zy,
        'aria-label': s.intl.string(s.t.Xm41aW),
        onSelect: () => {},
        children: n
    });
}
