a.d(t, {
    MessageReminderEditMenu: () => o,
    r: () => c
}),
    a(653041);
var n = a(200651),
    r = a(192379),
    i = a(481060),
    d = a(239091),
    s = a(324701),
    l = a(550727),
    u = a(388032);
function c(e) {
    let { createReminder: t } = e,
        d = r.useCallback(() => {
            (0, i.ZDy)(async () => {
                let { default: e } = await a.e('43866').then(a.bind(a, 423639));
                return (a) =>
                    (0, n.jsx)(e, {
                        ...a,
                        createReminder: t
                    });
            });
        }, [t]);
    return r.useMemo(() => {
        let e = l.B.map((e) => {
            let { getDueAt: a, getLabel: r } = e;
            return (0, n.jsx)(
                i.sNh,
                {
                    id: 'create-reminder-'.concat(r()),
                    label: r(),
                    action: () => t(a())
                },
                'create-reminder-'.concat(r())
            );
        });
        return (
            e.push(
                (0, n.jsx)(
                    i.sNh,
                    {
                        id: 'create-reminder-custom',
                        label: u.intl.string(u.t.OLA8Zm),
                        action: d
                    },
                    'custom'
                )
            ),
            e
        );
    }, [t, d]);
}
function o(e) {
    let { message: t, label: a } = e,
        r = c({
            createReminder: (e) =>
                (0, s.z)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e
                })
        });
    return (0, n.jsx)(i.v2r, {
        navId: 'message-reminder-create',
        onClose: d.Zy,
        'aria-label': u.intl.string(u.t.mJ3P0N),
        onSelect: () => null,
        children: (0, n.jsx)(i.kSQ, {
            label: a,
            children: r
        })
    });
}
