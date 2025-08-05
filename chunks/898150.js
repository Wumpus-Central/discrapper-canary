(n.d(t, {
    MessageReminderEditMenu: () => h,
    r: () => p
}),
    n(539854));
var r = n(255367),
    i = n(73800),
    a = n(481060),
    o = n(239091),
    s = n(324701),
    l = n(550727),
    c = n(388032);
function u(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                u(e, t, n[t]);
            }));
    }
    return e;
}
function f(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p(e) {
    let { createReminder: t } = e,
        o = i.useCallback(() => {
            (0, a.ZDy)(async () => {
                let { default: e } = await n.e('43866').then(n.bind(n, 423639));
                return (n) => (0, r.jsx)(e, _(d({}, n), { createReminder: t }));
            });
        }, [t]);
    return i.useMemo(() => {
        let e = l.B.map((e) => {
            let { getDueAt: n, getLabel: i } = e;
            return (0, r.jsx)(
                a.sNh,
                {
                    id: 'create-reminder-'.concat(i()),
                    label: i(),
                    action: () => t(n())
                },
                'create-reminder-'.concat(i())
            );
        });
        return (
            e.push(
                (0, r.jsx)(
                    a.sNh,
                    {
                        id: 'create-reminder-custom',
                        label: c.intl.string(c.t.OLA8Zm),
                        action: o
                    },
                    'custom'
                )
            ),
            e
        );
    }, [t, o]);
}
function h(e) {
    let { message: t, label: n } = e,
        i = p({
            createReminder: (e) =>
                (0, s.z)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e
                })
        });
    return (0, r.jsx)(a.v2r, {
        navId: 'message-reminder-create',
        onClose: o.Zy,
        'aria-label': c.intl.string(c.t.mJ3P0N),
        onSelect: () => null,
        children: (0, r.jsx)(a.kSQ, {
            label: n,
            children: i
        })
    });
}
