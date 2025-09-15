n.d(t, { Z: () => v }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(481060),
    a = n(480916),
    o = n(17597),
    c = n(624138),
    s = n(845077),
    u = n(132392),
    d = n(118589),
    f = n(210825),
    p = n(535188),
    h = n(856597),
    m = n(231338),
    y = n(241945),
    g = n(388032),
    b = n(104940);
let E = n(575703);
function x(e) {
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
        (0, r.jsxs)(u.y.Provider, {
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
let v = function (e) {
    let { onClose: t } = e,
        [n, u] = i.useState(null),
        [p, h] = i.useState(!0),
        [v, j] = i.useState(null),
        [_, O] = i.useState(!1),
        A = i.useCallback(async () => {
            h(!0), j(null);
            try {
                var e;
                let n = await (0, s.PA)();
                if (null == n) return void t();
                !(0, c.Ew)(null == (e = n.ui_component) ? void 0 : e.component.type) &&
                d.VZ.has(n.ui_component.component.type)
                    ? u(n)
                    : u({
                          task_id: n.task_id,
                          task_type: d.UA.REFRESH_APP,
                          assignment_id: n.assignment_id,
                          ui_component: {
                              component: {
                                  type: d.NS.REFRESH_APP,
                                  data: {},
                              },
                          },
                          flow_context: {
                              tasks: [],
                              flow_id: n.flow_context.flow_id,
                          },
                      });
            } catch (e) {
                j(g.intl.string(y.default["/f++3t"]));
            } finally {
                h(!1);
            }
        }, [t]),
        S = i.useCallback(
            async (e) => {
                if (null !== n) {
                    O(!0);
                    try {
                        let t = {
                            task_id: n.task_id,
                            flow_id: n.flow_context.flow_id,
                            data: e,
                        };
                        await (0, s.Wl)(t), A();
                    } catch (e) {
                        j(g.intl.string(y.default["+QRSxc"]));
                    } finally {
                        O(!1);
                    }
                }
            },
            [n, A],
        );
    i.useEffect(() => {
        A();
    }, [A]);
    let I = i.useMemo(() => (null == n ? void 0 : n.task_type) === d.UA.AGE_VERIFICATION, [n]);
    return (0, r.jsxs)("div", {
        className: b.background,
        children: [
            (0, r.jsx)("img", {
                className: b.artwork,
                src: E,
                alt: "",
            }),
            I
                ? (0, r.jsx)(o.Z, {
                      transitionState: l.Dvm.ENTERED,
                      entryPoint: a.cU.SAFETY_FLOWS,
                      onClose: m.dG,
                      onComplete: async () => {
                          await S({ type: d.rY.Empty });
                      },
                      dismissable: !1,
                  })
                : (0, r.jsx)("div", {
                      className: b.safetyFlow,
                      children: p
                          ? (0, r.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                          : (0, r.jsx)("div", {
                                className: b.container,
                                children: (0, r.jsxs)(l.Kqy, {
                                    direction: "horizontal",
                                    justify: "start",
                                    className: b.body,
                                    children: [
                                        null !== v &&
                                            (0, r.jsxs)(l.Kqy, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                className: b.interimBody,
                                                padding: 16,
                                                children: [
                                                    (0, r.jsxs)(l.Kqy, {
                                                        direction: "vertical",
                                                        gap: 4,
                                                        children: [
                                                            (0, r.jsx)(l.X6q, {
                                                                variant: "heading-xl/semibold",
                                                                children: g.intl.string(g.t.c6kn6O),
                                                            }),
                                                            (0, r.jsx)(l.Text, {
                                                                variant: "text-md/normal",
                                                                color: "text-muted",
                                                                children: g.intl.string(g.t.ZUEGFh),
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
                                                                text: g.intl.string(g.t["2jxGen"]),
                                                                onClick: () => {
                                                                    (0, f.R)("safety_flows_modal");
                                                                },
                                                            }),
                                                            (0, r.jsx)(l.zxk, {
                                                                fullWidth: !0,
                                                                text: g.intl.string(g.t["7NqTJi"]),
                                                                onClick: () => {
                                                                    A();
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        null === v &&
                                            null != n &&
                                            (0, r.jsx)(x, {
                                                task: n,
                                                handleSubmit: S,
                                                disabled: _,
                                            }),
                                    ],
                                }),
                            }),
                  }),
        ],
    });
};
