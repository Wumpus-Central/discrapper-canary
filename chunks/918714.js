n.d(t, { Z: () => g }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    l = n(624138),
    c = n(845077),
    o = n(132392),
    s = n(118589),
    u = n(535188),
    d = n(856597),
    f = n(241945),
    p = n(388032),
    m = n(104940);
let y = n(575703);
function h(e) {
    let { task: t, handleSubmit: n, disabled: l } = e,
        [c, s] = i.useState(t),
        f = i.useMemo(
            () => ({
                task: c,
                setTask: s,
            }),
            [c, s],
        );
    return (
        i.useEffect(() => {
            s(t);
        }, [t]),
        (0, r.jsx)(o.y.Provider, {
            value: f,
            children: (0, r.jsxs)(a.Kqy, {
                direction: "horizontal",
                justify: "start",
                className: m.body,
                children: [
                    (0, r.jsx)(d.Z, {}),
                    (0, r.jsx)(u.Z, {
                        onSubmit: n,
                        disabled: l,
                    }),
                ],
            }),
        })
    );
}
let g = function (e) {
    let { onClose: t } = e,
        [n, o] = i.useState(null),
        [u, d] = i.useState(!0),
        [g, b] = i.useState(null),
        [v, j] = i.useState(!1),
        x = i.useCallback(async () => {
            d(!0), b(null);
            try {
                var e;
                let n = await (0, c.PA)();
                if (null == n) return void t();
                !(0, l.Ew)(null == (e = n.ui_component) ? void 0 : e.component.type) &&
                s.VZ.has(n.ui_component.component.type)
                    ? o(n)
                    : o({
                          task_id: n.task_id,
                          task_type: s.UA.REFRESH_APP,
                          assignment_id: n.assignment_id,
                          ui_component: {
                              component: {
                                  type: s.NS.REFRESH_APP,
                                  data: {},
                              },
                          },
                          flow_context: {
                              tasks: [],
                              flow_id: n.flow_context.flow_id,
                          },
                      });
            } catch (e) {
                b(p.intl.string(f.default["/f++3t"]));
            } finally {
                d(!1);
            }
        }, [t]),
        E = i.useCallback(
            async (e) => {
                if (null !== n) {
                    j(!0);
                    try {
                        let t = {
                            task_id: n.task_id,
                            flow_id: n.flow_context.flow_id,
                            data: e,
                        };
                        await (0, c.Wl)(t), x();
                    } catch (e) {
                        b(p.intl.string(f.default["+QRSxc"]));
                    } finally {
                        j(!1);
                    }
                }
            },
            [n, x],
        );
    return (
        i.useEffect(() => {
            x();
        }, [x]),
        (0, r.jsxs)("div", {
            className: m.background,
            children: [
                (0, r.jsx)("img", {
                    className: m.artwork,
                    src: y,
                    alt: "",
                }),
                (0, r.jsx)("div", {
                    className: m.safetyFlow,
                    children: (0, r.jsxs)("div", {
                        className: m.container,
                        children: [
                            u &&
                                (0, r.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: p.intl.string(f.default.v0H5Tk),
                                }),
                            null !== g &&
                                (0, r.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    color: "text-danger",
                                    className: m.error,
                                    children: g,
                                }),
                            !u &&
                                null === g &&
                                null != n &&
                                (0, r.jsx)(h, {
                                    task: n,
                                    handleSubmit: E,
                                    disabled: v,
                                }),
                        ],
                    }),
                }),
            ],
        })
    );
};
