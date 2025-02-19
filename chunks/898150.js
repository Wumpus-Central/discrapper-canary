r.d(t, {
    MessageReminderEditMenu: () => d,
    r: () => l
}),
    r(653041);
var n = r(200651),
    a = r(192379),
    c = r(481060),
    o = r(239091),
    i = r(324701),
    s = r(550727),
    u = r(388032);
function l(e) {
    let { createReminder: t } = e,
        o = a.useCallback(() => {
            (0, c.ZDy)(async () => {
                let { default: e } = await r.e('43866').then(r.bind(r, 423639));
                return (r) => {
                    var a, c;
                    return (0, n.jsx)(
                        e,
                        ((a = (function (e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {},
                                    n = Object.keys(r);
                                'function' == typeof Object.getOwnPropertySymbols &&
                                    (n = n.concat(
                                        Object.getOwnPropertySymbols(r).filter(function (e) {
                                            return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                        })
                                    )),
                                    n.forEach(function (t) {
                                        var n;
                                        (n = r[t]),
                                            t in e
                                                ? Object.defineProperty(e, t, {
                                                      value: n,
                                                      enumerable: !0,
                                                      configurable: !0,
                                                      writable: !0
                                                  })
                                                : (e[t] = n);
                                    });
                            }
                            return e;
                        })({}, r)),
                        (c = c = { createReminder: t }),
                        Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(c))
                            : (function (e, t) {
                                  var r = Object.keys(e);
                                  if (Object.getOwnPropertySymbols) {
                                      var n = Object.getOwnPropertySymbols(e);
                                      r.push.apply(r, n);
                                  }
                                  return r;
                              })(Object(c)).forEach(function (e) {
                                  Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(c, e));
                              }),
                        a)
                    );
                };
            });
        }, [t]);
    return a.useMemo(() => {
        let e = s.B.map((e) => {
            let { getDueAt: r, getLabel: a } = e;
            return (0, n.jsx)(
                c.sNh,
                {
                    id: 'create-reminder-'.concat(a()),
                    label: a(),
                    action: () => t(r())
                },
                'create-reminder-'.concat(a())
            );
        });
        return (
            e.push(
                (0, n.jsx)(
                    c.sNh,
                    {
                        id: 'create-reminder-custom',
                        label: u.NW.string(u.t.OLA8Zm),
                        action: o
                    },
                    'custom'
                )
            ),
            e
        );
    }, [t, o]);
}
function d(e) {
    let { message: t, label: r } = e,
        a = l({
            createReminder: (e) =>
                (0, i.z)({
                    channelId: t.channel_id,
                    messageId: t.id,
                    dueAt: e
                })
        });
    return (0, n.jsx)(c.v2r, {
        navId: 'message-reminder-create',
        onClose: o.Zy,
        'aria-label': u.NW.string(u.t.mJ3P0N),
        onSelect: () => null,
        children: (0, n.jsx)(c.kSQ, {
            label: r,
            children: a
        })
    });
}
