r.d(t, { default: () => s });
var n = r(200651);
r(192379);
var a = r(481060),
    i = r(239091),
    c = r(324701),
    o = r(898150),
    l = r(388032);
function s(e) {
    let { message: t } = e,
        r = (0, o.r)({
            createReminder: (e) =>
                (0, c.z)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e
                })
        });
    return (0, n.jsx)(a.v2r, {
        navId: 'message-reminder-snooze',
        onClose: i.Zy,
        'aria-label': l.intl.string(l.t.Xm41aW),
        onSelect: () => {},
        children: r
    });
}
