n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    a = n(481060),
    l = n(480916),
    o = n(17597),
    c = n(624138),
    s = n(845077),
    u = n(132392),
    d = n(118589),
    f = n(535188),
    p = n(856597),
    m = n(241945),
    y = n(388032),
    g = n(104940);
let h = n(575703);
function E(e) {
    let { task: t, handleSubmit: n, disabled: l } = e,
        [o, c] = i.useState(t),
        s = i.useMemo(
            () => ({
                task: o,
                setTask: c,
            }),
            [o, c],
        );
    return (
        i.useEffect(() => {
            c(t);
        }, [t]),
        (0, r.jsx)(u.y.Provider, {
            value: s,
            children: (0, r.jsxs)(a.Kqy, {
                direction: "horizontal",
                justify: "start",
                className: g.body,
                children: [
                    (0, r.jsx)(p.Z, {}),
                    (0, r.jsx)(f.Z, {
                        onSubmit: n,
                        disabled: l,
                    }),
                ],
            }),
        })
    );
}
let x = function (e) {
    let { onClose: t } = e,
        [n, u] = i.useState(null),
        [f, p] = i.useState(!0),
        [x, v] = i.useState(null),
        [b, j] = i.useState(!1),
        _ = i.useCallback(async () => {
            p(!0), v(null);
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
                v(y.intl.string(m.default["/f++3t"]));
            } finally {
                p(!1);
            }
        }, [t]),
        O = i.useCallback(
            async (e) => {
                if (null !== n) {
                    j(!0);
                    try {
                        let t = {
                            task_id: n.task_id,
                            flow_id: n.flow_context.flow_id,
                            data: e,
                        };
                        await (0, s.Wl)(t), _();
                    } catch (e) {
                        v(y.intl.string(m.default["+QRSxc"]));
                    } finally {
                        j(!1);
                    }
                }
            },
            [n, _],
        );
    i.useEffect(() => {
        _();
    }, [_]);
    let A = i.useMemo(() => (null == n ? void 0 : n.task_type) === d.UA.AGE_VERIFICATION, [n]);
    return (0, r.jsxs)("div", {
        className: g.background,
        children: [
            (0, r.jsx)("img", {
                className: g.artwork,
                src: h,
                alt: "",
            }),
            A
                ? (0, r.jsx)(o.default, {
                      transitionState: a.Dvm.ENTERED,
                      entryPoint: l.cU.SAFETY_FLOWS,
                      onClose: async () => {},
                      onComplete: async () => {
                          await O({ type: d.rY.Empty });
                      },
                  })
                : (0, r.jsx)("div", {
                      className: g.safetyFlow,
                      children: (0, r.jsxs)("div", {
                          className: g.container,
                          children: [
                              f &&
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-md/normal",
                                      color: "text-muted",
                                      children: y.intl.string(m.default.v0H5Tk),
                                  }),
                              null !== x &&
                                  (0, r.jsx)(a.Text, {
                                      variant: "text-md/normal",
                                      color: "text-danger",
                                      className: g.error,
                                      children: x,
                                  }),
                              !f &&
                                  null === x &&
                                  null != n &&
                                  (0, r.jsx)(E, {
                                      task: n,
                                      handleSubmit: O,
                                      disabled: b,
                                  }),
                          ],
                      }),
                  }),
        ],
    });
};
