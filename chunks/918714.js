n.d(t, { Z: () => j }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(493773),
    o = n(480916),
    c = n(17597),
    s = n(624138),
    u = n(845077),
    d = n(132392),
    f = n(118589),
    p = n(210825),
    h = n(535188),
    m = n(856597),
    y = n(231338),
    g = n(241945),
    b = n(388032),
    E = n(104940);
let x = n(575703);
function v(e) {
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
                (0, r.jsx)(m.Z, {}),
                (0, r.jsx)(h.Z, {
                    onSubmit: n,
                    disabled: l,
                }),
            ],
        })
    );
}
let j = function (e) {
    let { onClose: t } = e,
        [n, d] = i.useState(null),
        [h, m] = i.useState(!0),
        [j, _] = i.useState(null),
        [O, A] = i.useState(!1),
        S = i.useCallback(async () => {
            m(!0), _(null);
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
                _(b.intl.string(g.default["/f++3t"]));
            } finally {
                m(!1);
            }
        }, [t]),
        I = i.useCallback(
            async (e) => {
                if (null !== n) {
                    A(!0);
                    try {
                        let t = {
                            task_id: n.task_id,
                            flow_id: n.flow_context.flow_id,
                            data: e,
                        };
                        await (0, u.Wl)(t), S();
                    } catch (e) {
                        _(b.intl.string(g.default["+QRSxc"]));
                    } finally {
                        A(!1);
                    }
                }
            },
            [n, S],
        );
    (0, a.ZP)(() => {
        S();
    });
    let R = i.useMemo(() => (null == n ? void 0 : n.task_type) === f.UA.AGE_VERIFICATION, [n]);
    return (0, r.jsxs)("div", {
        className: E.background,
        children: [
            (0, r.jsx)("img", {
                className: E.artwork,
                src: x,
                alt: "",
            }),
            R
                ? (0, r.jsx)(c.Z, {
                      transitionState: l.Dvm.ENTERED,
                      entryPoint: o.cU.SAFETY_FLOWS,
                      onClose: y.dG,
                      onComplete: async () => {
                          await I({ type: f.rY.Empty });
                      },
                      dismissable: !1,
                  })
                : (0, r.jsx)("div", {
                      className: E.safetyFlow,
                      children: h
                          ? (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                          : (0, r.jsx)("div", {
                                className: E.container,
                                children: (0, r.jsxs)(l.Kqy, {
                                    direction: "horizontal",
                                    justify: "start",
                                    className: E.body,
                                    children: [
                                        null !== j &&
                                            (0, r.jsxs)(l.Kqy, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                className: E.interimBody,
                                                padding: 16,
                                                children: [
                                                    (0, r.jsxs)(l.Kqy, {
                                                        direction: "vertical",
                                                        gap: 4,
                                                        children: [
                                                            (0, r.jsx)(l.X6q, {
                                                                variant: "heading-xl/semibold",
                                                                children: b.intl.string(b.t.c6kn6O),
                                                            }),
                                                            (0, r.jsx)(l.Text, {
                                                                variant: "text-md/normal",
                                                                color: "text-muted",
                                                                children: b.intl.string(b.t.ZUEGFh),
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
                                                                text: b.intl.string(b.t["2jxGen"]),
                                                                onClick: () => {
                                                                    (0, p.R)("safety_flows_modal");
                                                                },
                                                            }),
                                                            (0, r.jsx)(l.zxk, {
                                                                fullWidth: !0,
                                                                text: b.intl.string(b.t["7NqTJi"]),
                                                                onClick: () => {
                                                                    S();
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        null === j &&
                                            null != n &&
                                            (0, r.jsx)(v, {
                                                task: n,
                                                handleSubmit: I,
                                                disabled: O,
                                            }),
                                    ],
                                }),
                            }),
                  }),
        ],
    });
};
