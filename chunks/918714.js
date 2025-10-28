n.d(t, { Z: () => y }), n(388685);
var a = n(951288),
    r = n(647438),
    l = n(481060),
    i = n(493773),
    o = n(480916),
    s = n(17597),
    c = n(624138),
    d = n(845077),
    u = n(132392),
    m = n(118589),
    p = n(210825),
    h = n(535188),
    x = n(856597),
    f = n(231338),
    b = n(213360),
    g = n(388032),
    v = n(104940);
let j = n(575703);
function _(e) {
    let { task: t, handleSubmit: n, disabled: l } = e,
        [i, o] = r.useState(t),
        s = r.useMemo(
            () => ({
                task: i,
                setTask: o,
            }),
            [i, o],
        );
    return (
        r.useEffect(() => {
            o(t);
        }, [t]),
        (0, a.jsxs)(u.y.Provider, {
            value: s,
            children: [
                (0, a.jsx)(x.Z, {}),
                (0, a.jsx)(h.Z, {
                    onSubmit: n,
                    disabled: l,
                }),
            ],
        })
    );
}
let y = function (e) {
    let { onClose: t } = e,
        [n, u] = r.useState(null),
        [h, x] = r.useState(!0),
        [y, C] = r.useState(null),
        [S, E] = r.useState(!1),
        O = r.useCallback(async () => {
            x(!0), C(null);
            try {
                var e;
                let n = await (0, d.PA)();
                if (null == n) return void t();
                !(0, c.Ew)(null == (e = n.ui_component) ? void 0 : e.component.type) &&
                m.VZ.has(n.ui_component.component.type)
                    ? u(n)
                    : u({
                          task_id: n.task_id,
                          task_type: m.UA.REFRESH_APP,
                          assignment_id: n.assignment_id,
                          ui_component: {
                              component: {
                                  type: m.NS.REFRESH_APP,
                                  data: {},
                              },
                          },
                          flow_context: {
                              tasks: [],
                              flow_id: n.flow_context.flow_id,
                          },
                      });
            } catch (e) {
                C(g.intl.string(b.default["/f++3g"]));
            } finally {
                x(!1);
            }
        }, [t]),
        T = r.useCallback(
            async (e) => {
                if (null !== n) {
                    E(!0);
                    try {
                        let t = {
                            task_id: n.task_id,
                            flow_id: n.flow_context.flow_id,
                            data: e,
                        };
                        await (0, d.Wl)(t), O();
                    } catch (e) {
                        C(g.intl.string(b.default["+QRSxc"]));
                    } finally {
                        E(!1);
                    }
                }
            },
            [n, O],
        );
    (0, i.ZP)(() => {
        O();
    });
    let N = r.useMemo(() => (null == n ? void 0 : n.task_type) === m.UA.AGE_VERIFICATION, [n]);
    return (0, a.jsxs)("div", {
        className: v.background,
        children: [
            (0, a.jsx)("img", {
                className: v.artwork,
                src: j,
                alt: "",
            }),
            N
                ? (0, a.jsx)(s.default, {
                      transitionState: l.Dvm.ENTERED,
                      entryPoint: o.cU.SAFETY_FLOWS,
                      onClose: f.dG,
                      onComplete: async () => {
                          await T({ type: m.rY.Empty });
                      },
                      dismissable: !1,
                  })
                : (0, a.jsx)("div", {
                      className: v.safetyFlow,
                      children: h
                          ? (0, a.jsx)(l.$jN, { type: l.$jN.Type.SPINNING_CIRCLE })
                          : (0, a.jsx)("div", {
                                className: v.container,
                                children: (0, a.jsxs)(l.Kqy, {
                                    direction: "horizontal",
                                    justify: "start",
                                    className: v.body,
                                    children: [
                                        null !== y &&
                                            (0, a.jsxs)(l.Kqy, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                className: v.interimBody,
                                                padding: 16,
                                                children: [
                                                    (0, a.jsxs)(l.Kqy, {
                                                        direction: "vertical",
                                                        gap: 4,
                                                        children: [
                                                            (0, a.jsx)(l.Heading, {
                                                                variant: "heading-xl/semibold",
                                                                children: g.intl.string(g.t.c6kn6F),
                                                            }),
                                                            (0, a.jsx)(l.Text, {
                                                                variant: "text-md/normal",
                                                                color: "text-muted",
                                                                children: g.intl.string(g.t.ZUEGFn),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, a.jsxs)(l.Kqy, {
                                                        direction: "horizontal",
                                                        justify: "center",
                                                        align: "center",
                                                        children: [
                                                            (0, a.jsx)(l.Button, {
                                                                fullWidth: !0,
                                                                variant: "secondary",
                                                                text: g.intl.string(g.t["2jxGer"]),
                                                                onClick: () => {
                                                                    (0, p.R)("safety_flows_modal");
                                                                },
                                                            }),
                                                            (0, a.jsx)(l.Button, {
                                                                fullWidth: !0,
                                                                text: g.intl.string(g.t["7NqTJn"]),
                                                                onClick: () => {
                                                                    O();
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        null === y &&
                                            null != n &&
                                            (0, a.jsx)(_, {
                                                task: n,
                                                handleSubmit: T,
                                                disabled: S,
                                            }),
                                    ],
                                }),
                            }),
                  }),
        ],
    });
};
