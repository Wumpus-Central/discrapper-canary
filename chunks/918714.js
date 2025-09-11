n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(893776),
    o = n(480916),
    c = n(17597),
    s = n(624138),
    u = n(845077),
    d = n(132392),
    f = n(118589),
    p = n(535188),
    h = n(856597),
    m = n(241945),
    y = n(388032),
    g = n(104940);
let b = n(575703);
function E(e) {
    let { task: t, handleSubmit: n, disabled: l } = e,
        [a, o] = i.useState(t),
        c = i.useMemo(
            () => ({
                task: a,
                setTask: o,
            }),
            [a, o],
        );
    return (
        i.useEffect(() => {
            o(t);
        }, [t]),
        (0, r.jsxs)(d.y.Provider, {
            value: c,
            children: [
                (0, r.jsx)(h.Z, {}),
                (0, r.jsx)(p.Z, {
                    onSubmit: n,
                    disabled: l,
                }),
            ],
        })
    );
}
let x = function (e) {
    let { onClose: t } = e,
        [n, d] = i.useState(null),
        [p, h] = i.useState(!0),
        [x, v] = i.useState(null),
        [j, _] = i.useState(!1),
        O = i.useCallback(async () => {
            h(!0), v(null);
            try {
                var e;
                let n = await (0, u.PA)();
                if (null == n) return void t();
                !(0, s.Ew)(null == (e = n.ui_component) ? void 0 : e.component.type) &&
                f.VZ.has(n.ui_component.component.type)
                    ? d(n)
                    : d({
                          task_id: n.task_id,
                          task_type: f.UA.REFRESH_APP,
                          assignment_id: n.assignment_id,
                          ui_component: {
                              component: {
                                  type: f.NS.REFRESH_APP,
                                  data: {},
                              },
                          },
                          flow_context: {
                              tasks: [],
                              flow_id: n.flow_context.flow_id,
                          },
                      });
            } catch (e) {
                v(y.intl.string(m.default["/f++3t"]));
            } finally {
                h(!1);
            }
        }, [t]),
        A = i.useCallback(
            async (e) => {
                if (null !== n) {
                    _(!0);
                    try {
                        let t = {
                            task_id: n.task_id,
                            flow_id: n.flow_context.flow_id,
                            data: e,
                        };
                        await (0, u.Wl)(t), O();
                    } catch (e) {
                        v(y.intl.string(m.default["+QRSxc"]));
                    } finally {
                        _(!1);
                    }
                }
            },
            [n, O],
        );
    i.useEffect(() => {
        O();
    }, [O]);
    let S = i.useMemo(() => (null == n ? void 0 : n.task_type) === f.UA.AGE_VERIFICATION, [n]);
    return (0, r.jsxs)("div", {
        className: g.background,
        children: [
            (0, r.jsx)("img", {
                className: g.artwork,
                src: b,
                alt: "",
            }),
            S
                ? (0, r.jsx)(c.default, {
                      transitionState: l.Dvm.ENTERED,
                      entryPoint: o.cU.SAFETY_FLOWS,
                      onClose: async () => {},
                      onComplete: async () => {
                          await A({ type: f.rY.Empty });
                      },
                  })
                : (0, r.jsx)("div", {
                      className: g.safetyFlow,
                      children: p
                          ? (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                          : (0, r.jsx)("div", {
                                className: g.container,
                                children: (0, r.jsxs)(l.Kqy, {
                                    direction: "horizontal",
                                    justify: "start",
                                    className: g.body,
                                    children: [
                                        null !== x &&
                                            (0, r.jsxs)(l.Kqy, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                className: g.interimBody,
                                                padding: 16,
                                                children: [
                                                    (0, r.jsxs)(l.Kqy, {
                                                        direction: "vertical",
                                                        gap: 4,
                                                        children: [
                                                            (0, r.jsx)(l.X6q, {
                                                                variant: "heading-xl/semibold",
                                                                children: y.intl.string(y.t.c6kn6O),
                                                            }),
                                                            (0, r.jsx)(l.Text, {
                                                                variant: "text-md/normal",
                                                                color: "text-muted",
                                                                children: y.intl.string(y.t.ZUEGFh),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(l.Kqy, {
                                                        direction: "horizontal",
                                                        justify: "center",
                                                        align: "center",
                                                        children: [
                                                            (0, r.jsx)(l.zxk, {
                                                                fullWidth: !0,
                                                                variant: "secondary",
                                                                text: y.intl.string(y.t["2jxGen"]),
                                                                onClick: () => {
                                                                    a.Z.logout("safety_flows_modal");
                                                                },
                                                            }),
                                                            (0, r.jsx)(l.zxk, {
                                                                fullWidth: !0,
                                                                text: y.intl.string(y.t["7NqTJi"]),
                                                                onClick: () => {
                                                                    O();
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        null === x &&
                                            null != n &&
                                            (0, r.jsx)(E, {
                                                task: n,
                                                handleSubmit: A,
                                                disabled: j,
                                            }),
                                    ],
                                }),
                            }),
                  }),
        ],
    });
};
