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
    y = n(104940);
let m = n(575703);
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
                className: y.body,
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
let g = function () {
    let [e, t] = i.useState(null),
        [n, o] = i.useState(!0),
        [u, d] = i.useState(null),
        [g, b] = i.useState(!1),
        j = i.useCallback(async () => {
            o(!0), d(null);
            try {
                var e;
                let n = await (0, c.PA)();
                if (null == n) return;
                !(0, l.Ew)(null == (e = n.ui_component) ? void 0 : e.component.type) &&
                s.VZ.has(n.ui_component.component.type)
                    ? t(n)
                    : t({
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
                d(p.intl.string(f.default["/f++3t"]));
            } finally {
                o(!1);
            }
        }, []),
        v = i.useCallback(
            async (t) => {
                if (null !== e) {
                    b(!0);
                    try {
                        let n = {
                            task_id: e.task_id,
                            flow_id: e.flow_context.flow_id,
                            data: t,
                        };
                        await (0, c.Wl)(n), j();
                    } catch (e) {
                        d(p.intl.string(f.default["+QRSxc"]));
                    } finally {
                        b(!1);
                    }
                }
            },
            [e, j],
        );
    return (
        i.useEffect(() => {
            j();
        }, [j]),
        (0, r.jsxs)("div", {
            className: y.background,
            children: [
                (0, r.jsx)(a.y5t, {
                    forceLevel: 6,
                    children: (0, r.jsx)("img", {
                        className: y.artwork,
                        src: m,
                        alt: "",
                    }),
                }),
                (0, r.jsx)("div", {
                    className: y.safetyFlow,
                    children: (0, r.jsxs)("div", {
                        className: y.container,
                        children: [
                            n &&
                                (0, r.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: p.intl.string(f.default.v0H5Tk),
                                }),
                            null !== u &&
                                (0, r.jsx)(a.Text, {
                                    variant: "text-md/normal",
                                    color: "text-danger",
                                    className: y.error,
                                    children: u,
                                }),
                            !n &&
                                null === u &&
                                null != e &&
                                (0, r.jsx)(h, {
                                    task: e,
                                    handleSubmit: v,
                                    disabled: g,
                                }),
                        ],
                    }),
                }),
            ],
        })
    );
};
