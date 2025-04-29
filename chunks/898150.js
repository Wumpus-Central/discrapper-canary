n.d(t, {
    MessageReminderEditMenu: () => d,
    r: () => u
}),
    n(539854);
var i = n(255367),
    r = n(73800),
    l = n(481060),
    a = n(239091),
    o = n(324701),
    s = n(550727),
    c = n(388032);
function u(e) {
    let { createReminder: t } = e,
        a = r.useCallback(() => {
            (0, l.ZDy)(async () => {
                let { default: e } = await n.e('43866').then(n.bind(n, 423639));
                return (n) => {
                    var r, l;
                    return (0, i.jsx)(
                        e,
                        ((r = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    i = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (i = i.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    i.forEach(function (t) {
                                        var i;
                                        (i = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: i,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = i);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l = { createReminder: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var i = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, i);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        r)
                    );
                };
            });
        }, [t]);
    return r.useMemo(() => {
        let e = s.B.map((e) => {
            let { getDueAt: n, getLabel: r } = e;
            return (0, i.jsx)(
                l.sNh,
                {
                    id: 'create-reminder-'.concat(r()),
                    label: r(),
                    action: () => t(n())
                },
                'create-reminder-'.concat(r())
            );
        });
        return (
            e.push(
                (0, i.jsx)(
                    l.sNh,
                    {
                        id: 'create-reminder-custom',
                        label: c.intl.string(c.t.OLA8Zm),
                        action: a
                    },
                    'custom'
                )
            ),
            e
        );
    }, [t, a]);
}
function d(e) {
    let { message: t, label: n } = e,
        r = u({
            createReminder: (e) =>
                (0, o.z)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e
                })
        });
    return (0, i.jsx)(l.v2r, {
        navId: 'message-reminder-create',
        onClose: a.Zy,
        'aria-label': c.intl.string(c.t.mJ3P0N),
        onSelect: () => null,
        children: (0, i.jsx)(l.kSQ, {
            label: n,
            children: r
        })
    });
}
