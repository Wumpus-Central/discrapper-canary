"use strict";
n.d(t, { A: () => J });
var i,
    r,
    s = n(627968),
    a = n(64700),
    o = n(289873),
    l = n(331322),
    u = n(534514),
    c = n(834730),
    d = n(821609),
    _ = n(964486),
    f = n(847599),
    h = n(595746),
    p = n(240248),
    E = n(562708);
n(181658);
var m = n(499785),
    g = n(652215);
async function A() {
    let e = await m.A.get({
        url: g.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: { event: E.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function I(e) {
    return (
        await m.A.post({
            url: g.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: E.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
let T = a.createContext(null);
function S() {
    let e = a.useContext(T);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var N = n(837451),
    y = n(375708),
    C =
        (((i = {})[(i.REFRESH_APP = -1)] = "REFRESH_APP"),
        (i[(i.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
        (i[(i.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        i);
let v = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
    },
    O = new Set(Object.values(v));
y.intl.string(N.default["Qm6K/s"]), y.intl.string(N.default["dSkE/A"]);
var R = (((r = {}).Empty = "empty"), (r.VerificationCode = "verification_code"), r),
    b = n(627575),
    D = n(17928),
    L = n(155718),
    w = n(139716),
    M = n(287809),
    P = n(430993),
    x = n(825484),
    U = n(436818);
let k = (e) => {
        let { actions: t, footerInput: n } = e;
        return 0 === t.length && null == n
            ? null
            : (0, s.jsxs)("footer", {
                  className: U.q,
                  children: [
                      null != n && (0, s.jsx)("div", { children: n }),
                      (0, s.jsx)(x.e, {
                          className: U.G,
                          justify: "end",
                          children: t.map((e, t) => (0, s.jsx)(d.$, { ...e }, t)),
                      }),
                  ],
              });
    },
    G = { bottom: 40, left: 32, right: 32, top: 32 };
var F = n(831067);
let V = (e) => {
    let { children: t, actions: n, footerInput: i, title: r } = e;
    return (0, s.jsxs)(l.B, {
        direction: "vertical",
        justify: "start",
        padding: G,
        className: F.kL,
        children: [
            (0, s.jsx)(u.D, { variant: "heading-lg/semibold", className: F.R_, children: r }),
            (0, s.jsx)(P.c, { children: t }),
            (0, s.jsx)("div", { className: F.Ic }),
            (0, s.jsx)(k, { actions: n, footerInput: i }),
        ],
    });
};
var B = n(242235);
let H = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = a.useCallback(async () => {
                    await t({ type: R.Empty }), window.location.reload();
                }, [t]);
            return (0, s.jsxs)("div", {
                className: B.kL,
                children: [
                    (0, s.jsx)(u.D, {
                        variant: "heading-lg/bold",
                        className: B.DD,
                        children: y.intl.string(N.default.v52itt),
                    }),
                    (0, s.jsx)(c.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: B.h_,
                        children: y.intl.string(N.default["5am8D3"]),
                    }),
                    (0, s.jsx)(l.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, s.jsx)(d.$, {
                            variant: "primary",
                            text: y.intl.string(N.default["GDsHl+"]),
                            onClick: i,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, D.bG)([M.default], () => M.default.getCurrentUser());
            return (0, s.jsx)(V, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: () => {
                            n?.ageVerificationStatus === L.Tk.UNVERIFIED
                                ? w.A.showAgeVerificationGetStartedModal({
                                      entryPoint: f.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: R.Empty }),
                                  })
                                : t({ type: R.Empty });
                        },
                    },
                ],
                children: (0, s.jsxs)(l.B, {
                    gap: 8,
                    children: [
                        (0, s.jsx)(c.E, {
                            variant: "text-md/normal",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        }),
                        (0, s.jsx)(c.E, {
                            variant: "text-md/normal",
                            children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        }),
                        (0, s.jsx)(c.E, { variant: "text-md/normal", children: "Ut enim ad minim veniam quis" }),
                    ],
                }),
            });
        },
    },
    j = (e) => {
        let { onSubmit: t, disabled: n } = e,
            { task: i } = S(),
            r = H[i.ui_component.component.type];
        return null == r
            ? null
            : (0, s.jsx)(r, {
                  configData: i.ui_component.component.data,
                  onSubmit: t,
                  taskId: i.task_id,
                  flowId: i.flow_context?.flow_id,
                  assignmentId: i.assignment_id,
                  disabled: n,
              });
    };
var Y = n(754302),
    W = n(721940);
let K = {
        [C.EMAIL_VERIFICATION]: y.intl.string(N.default.HC4IiR),
        [C.REFRESH_APP]: y.intl.string(N.default.SzfxQ3),
        [C.AGE_VERIFICATION]: y.intl.string(N.default["dSkE/A"]),
    },
    z = function () {
        let { task: e } = S(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, s.jsxs)(l.B, {
            direction: "vertical",
            justify: "space-between",
            padding: G,
            className: W.k,
            children: [
                (0, s.jsxs)(l.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, s.jsx)(u.D, {
                            variant: "display-md",
                            className: W.D,
                            children: y.intl.string(N.default["/OpRAP"]),
                        }),
                        (0, s.jsx)(l.B, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) =>
                                (0, s.jsx)(
                                    Y.B,
                                    {
                                        title: K[e.task_type] ?? "",
                                        listType: "numbered",
                                        index: n,
                                        color: n === t ? "text-strong" : n < t ? "feedback-positive" : "text-muted",
                                        completed: n < t,
                                    },
                                    e.task_type,
                                ),
                            ),
                        }),
                    ],
                }),
                (0, s.jsx)(c.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: y.intl.format(N.default["0DHxym"], {
                        handleLogOut: () => (0, b.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var $ = n(231723),
    q = n(818348),
    Z = n(561452);
let X = n(843020);
function Q(e) {
    let { task: t, handleSubmit: n, disabled: i } = e,
        [r, o] = a.useState(t),
        l = a.useMemo(() => ({ task: r, setTask: o }), [r, o]);
    return (
        a.useEffect(() => {
            o(t);
        }, [t]),
        (0, s.jsxs)(T.Provider, {
            value: l,
            children: [(0, s.jsx)(z, {}), (0, s.jsx)(j, { onSubmit: n, disabled: i })],
        })
    );
}
let J = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, r] = a.useState(null),
        [E, m] = a.useState(!0),
        [g, T] = a.useState(null),
        [S, D] = a.useState(!1),
        L = a.useCallback(async () => {
            m(!0), T(null);
            try {
                let e = await A();
                if (null == e) return void n();
                !(0, p.uJ)(e.ui_component?.component.type) && O.has(e.ui_component.component.type)
                    ? r(e)
                    : r({
                          task_id: e.task_id,
                          task_type: C.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: v.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                T(y.intl.string(N.default["/f++3g"]));
            } finally {
                m(!1);
            }
        }, [n]),
        w = a.useCallback(
            async (e) => {
                if (null !== i) {
                    D(!0);
                    try {
                        let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
                        await I(t), L();
                    } catch (e) {
                        T(y.intl.string(N.default["+QRSxc"]));
                    } finally {
                        D(!1);
                    }
                }
            },
            [i, L],
        );
    (0, _.Ay)(() => {
        L();
    });
    let M = a.useMemo(() => i?.task_type === C.AGE_VERIFICATION, [i]);
    return (0, s.jsxs)("div", {
        className: Z.Tp,
        children: [
            (0, s.jsx)("img", { className: Z.xX, src: X, alt: "" }),
            M
                ? (0, s.jsx)(h.default, {
                      transitionState: t ?? $.ip.ENTERED,
                      entryPoint: f.q1.SAFETY_FLOWS,
                      onClose: q.tE,
                      onComplete: async () => {
                          await w({ type: R.Empty });
                      },
                      dismissable: !1,
                  })
                : (0, s.jsx)("div", {
                      className: Z.nA,
                      children: E
                          ? (0, s.jsx)(o.y, { type: o.y.Type.SPINNING_CIRCLE })
                          : (0, s.jsx)("div", {
                                className: Z.kL,
                                children: (0, s.jsxs)(l.B, {
                                    direction: "horizontal",
                                    justify: "start",
                                    className: Z.rf,
                                    children: [
                                        null !== g &&
                                            (0, s.jsxs)(l.B, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                className: Z.Nj,
                                                padding: 16,
                                                children: [
                                                    (0, s.jsxs)(l.B, {
                                                        direction: "vertical",
                                                        gap: 4,
                                                        children: [
                                                            (0, s.jsx)(u.D, {
                                                                variant: "heading-xl/semibold",
                                                                children: y.intl.string(y.t.c6kn6F),
                                                            }),
                                                            (0, s.jsx)(c.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-muted",
                                                                children: y.intl.string(y.t.ZUEGFn),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, s.jsxs)(l.B, {
                                                        direction: "horizontal",
                                                        justify: "center",
                                                        align: "center",
                                                        children: [
                                                            (0, s.jsx)(d.$, {
                                                                fullWidth: !0,
                                                                variant: "secondary",
                                                                text: y.intl.string(y.t["2jxGer"]),
                                                                onClick: () => {
                                                                    (0, b.k)("safety_flows_modal");
                                                                },
                                                            }),
                                                            (0, s.jsx)(d.$, {
                                                                fullWidth: !0,
                                                                text: y.intl.string(y.t["7NqTJn"]),
                                                                onClick: () => {
                                                                    L();
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        null === g &&
                                            null != i &&
                                            (0, s.jsx)(Q, { task: i, handleSubmit: w, disabled: S }),
                                    ],
                                }),
                            }),
                  }),
        ],
    });
};
