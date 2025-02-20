r.d(t, { default: () => d });
var n = r(200651);
r(192379);
var a = r(481060),
    c = r(239091),
    i = r(324701),
    o = r(898150),
    s = r(388032);
function d(e) {
    let { message: t } = e,
        r = (0, o.r)({
            createReminder: (e) =>
                (0, i.z)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e
                })
        });
    return (0, n.jsx)(a.v2r, {
        navId: 'message-reminder-snooze',
        onClose: c.Zy,
        'aria-label': s.NW.string(s.t.Xm41aW),
        onSelect: () => {},
        children: r
    });
}
