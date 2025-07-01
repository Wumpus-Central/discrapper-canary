(n.d(t, { Z: () => p }), n(388685));
var r = n(255367),
    i = n(73800),
    a = n(481060),
    l = n(624138),
    o = n(845077),
    c = n(118589),
    s = n(603700),
    u = n(697498),
    d = n(388032),
    f = n(70421);
let p = () => {
    let [e, t] = i.useState(null),
        [n, p] = i.useState(!0),
        [m, y] = i.useState(null),
        [h, g] = i.useState(!1),
        b = i.useCallback(async () => {
            (p(!0), y(null));
            try {
                var e;
                let n = await (0, o.PA)();
                if (null == n) return;
                !(0, l.Ew)(null == (e = n.ui_component) ? void 0 : e.type) && c.VZ.has(n.ui_component.type)
                    ? t(n)
                    : t({
                          task_id: n.task_id,
                          task_type: c.UA.REFRESH_APP,
                          assignment_id: n.assignment_id,
                          ui_component: {
                              type: c.NS.REFRESH_APP,
                              data: {}
                          },
                          flow_context: {
                              tasks: [],
                              flow_id: n.flow_context.flow_id
                          }
                      });
            } catch (e) {
                y(d.intl.string(u.default['/f++3t']));
            } finally {
                p(!1);
            }
        }, []),
        E = i.useCallback(
            async (t) => {
                if (null !== e) {
                    g(!0);
                    try {
                        var n;
                        let r = {
                            task_id: e.task_id,
                            flow_id: null == (n = e.flow_context) ? void 0 : n.flow_id,
                            data: t
                        };
                        (await (0, o.Wl)(r), b());
                    } catch (e) {
                        y(d.intl.string(u.default['+QRSxc']));
                    } finally {
                        g(!1);
                    }
                }
            },
            [e, b]
        );
    return (
        i.useEffect(() => {
            b();
        }, [b]),
        (0, r.jsx)('div', {
            className: f.safetyFlow,
            children: (0, r.jsxs)('div', {
                className: f.container,
                children: [
                    (0, r.jsx)(a.xBx, {
                        separator: !1,
                        className: f.header,
                        children: (0, r.jsx)(a.X6q, {
                            variant: 'heading-xl/bold',
                            children: d.intl.string(u.default.gqwhj4)
                        })
                    }),
                    (0, r.jsxs)(a.hzk, {
                        className: f.body,
                        children: [
                            n &&
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: d.intl.string(u.default.v0H5Tk)
                                }),
                            null !== m &&
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-danger',
                                    className: f.error,
                                    children: m
                                }),
                            !n &&
                                null === m &&
                                null !== e &&
                                (0, r.jsx)(s.Z, {
                                    task: e,
                                    onSubmit: E,
                                    disabled: h
                                })
                        ]
                    })
                ]
            })
        })
    );
};
