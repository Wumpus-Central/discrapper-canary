n.d(t, { Z: () => f }), n(388685);
var r = n(255367),
    i = n(73800),
    a = n(481060),
    l = n(845077),
    c = n(118589),
    o = n(603700),
    s = n(697498),
    u = n(388032),
    d = n(70421);
let f = () => {
    let [e, t] = i.useState(null),
        [n, f] = i.useState(!0),
        [p, m] = i.useState(null),
        [g, h] = i.useState(!1),
        y = i.useCallback(async () => {
            f(!0), m(null);
            try {
                var e;
                let n = await (0, l.P)();
                if (null == n) return;
                (null == (e = n.components) ? void 0 : e.every((e) => c.V.has(e.type)))
                    ? t(n)
                    : t({
                          task_id: n.task_id,
                          flow_id: n.flow_id,
                          assignment_id: n.assignment_id,
                          components: [
                              {
                                  type: c.N.REFRESH_APP,
                                  data: {}
                              }
                          ]
                      });
            } catch (e) {
                m(u.intl.string(s.default['/f++3t']));
            } finally {
                f(!1);
            }
        }, []),
        b = i.useCallback(
            async (t) => {
                if (null !== e) {
                    h(!0);
                    try {
                        let n = {
                            task_id: e.task_id,
                            flow_id: e.flow_id,
                            assignment_id: e.assignment_id,
                            data: t
                        };
                        await (0, l.W)(n), y();
                    } catch (e) {
                        m(u.intl.string(s.default['+QRSxc']));
                    } finally {
                        h(!1);
                    }
                }
            },
            [e, y]
        );
    return (
        i.useEffect(() => {
            y();
        }, [y]),
        (0, r.jsx)('div', {
            className: d.safetyFlow,
            children: (0, r.jsxs)('div', {
                className: d.container,
                children: [
                    (0, r.jsx)(a.xBx, {
                        separator: !1,
                        className: d.header,
                        children: (0, r.jsx)(a.X6q, {
                            variant: 'heading-xl/bold',
                            children: u.intl.string(s.default.gqwhj4)
                        })
                    }),
                    (0, r.jsxs)(a.hzk, {
                        className: d.body,
                        children: [
                            n &&
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-muted',
                                    children: u.intl.string(s.default.v0H5Tk)
                                }),
                            null !== p &&
                                (0, r.jsx)(a.Text, {
                                    variant: 'text-md/normal',
                                    color: 'text-danger',
                                    className: d.error,
                                    children: p
                                }),
                            !n &&
                                null === p &&
                                null !== e &&
                                (0, r.jsx)(o.Z, {
                                    task: e,
                                    onSubmit: b,
                                    disabled: g
                                })
                        ]
                    })
                ]
            })
        })
    );
};
