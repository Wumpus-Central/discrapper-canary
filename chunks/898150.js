n.d(t, {
    MessageReminderEditMenu: () => d,
    r: () => u
}),
    n(539854);
var r = n(200651),
    i = n(192379),
    l = n(481060),
    a = n(239091),
    o = n(324701),
    s = n(550727),
    c = n(388032);
function u(e) {
    let { createReminder: t } = e,
        a = i.useCallback(() => {
            (0, l.ZDy)(async () => {
                let { default: e } = await n.e('43866').then(n.bind(n, 423639));
                return (n) => {
                    var i, l;
                    return (0, r.jsx)(
                        e,
                        ((i = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (r = r.concat(
                                        Object.getOwnPropertySymbols(n).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                        })
                                    )),
                                    r.forEach(function (t) {
                                        var r;
                                        (r = n[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: r,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = r);
                                    });
                            }
                            return e;
                        })({}, n)),
                        (l = l = { createReminder: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l))
                            : (function (e, t) {
                                  var n = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var r = Object.getOwnPropertySymbols(e);
                                      n.push.apply(n, r);
                                  }
                                  return n;
                              })(Object(l)).forEach(function (e) {
                                  Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e));
                              }),
                        i)
                    );
                };
            });
        }, [t]);
    return i.useMemo(() => {
        let e = s.B.map((e) => {
            let { getDueAt: n, getLabel: i } = e;
            return (0, r.jsx)(
                l.sNh,
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
                    l.sNh,
                    {
                        id: 'create-reminder-custom',
                        label: c.NW.string(c.t.OLA8Zm),
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
        i = u({
            createReminder: (e) =>
                (0, o.z)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e
                })
        });
    return (0, r.jsx)(l.v2r, {
        navId: 'message-reminder-create',
        onClose: a.Zy,
        'aria-label': c.NW.string(c.t.mJ3P0N),
        onSelect: () => null,
        children: (0, r.jsx)(l.kSQ, {
            label: n,
            children: i
        })
    });
}
