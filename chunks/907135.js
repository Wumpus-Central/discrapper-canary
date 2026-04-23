n.d(t, { A: () => J });
var i,
    s,
    l = n(627968),
    a = n(64700),
    r = n(289873),
    o = n(331322),
    c = n(534514),
    u = n(834730),
    d = n(821609),
    p = n(964486),
    h = n(847599),
    m = n(595746),
    _ = n(240248),
    f = n(110259);
n(181658);
var g = n(499785),
    A = n(652215);
async function x() {
    let e = await g.A.get({
        url: A.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: { event: f.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function E(e) {
    return (
        await g.A.post({
            url: A.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: f.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
let C = a.createContext(null);
function T() {
    let e = a.useContext(C);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var S = n(837451),
    b = n(985018),
    v =
        (((i = {})[(i.REFRESH_APP = -1)] = "REFRESH_APP"),
        (i[(i.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
        (i[(i.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        i);
let j = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
    },
    I = new Set(Object.values(j));
b.intl.string(S.default["Qm6K/s"]), b.intl.string(S.default["dSkE/A"]);
var y = (((s = {}).Empty = "empty"), (s.VerificationCode = "verification_code"), s),
    R = n(627575),
    N = n(17928),
    M = n(155718),
    O = n(139716),
    U = n(287809),
    k = n(430993),
    P = n(825484),
    w = n(436818);
let L = (e) => {
        let { actions: t, footerInput: n } = e;
        return 0 === t.length && null == n
            ? null
            : (0, l.jsxs)("footer", {
                  className: w.q,
                  children: [
                      null != n && (0, l.jsx)("div", { children: n }),
                      (0, l.jsx)(P.e, {
                          className: w.G,
                          justify: "end",
                          children: t.map((e, t) => (0, l.jsx)(d.$, { ...e }, t)),
                      }),
                  ],
              });
    },
    D = { bottom: 40, left: 32, right: 32, top: 32 };
var F = n(831067);
let B = (e) => {
    let { children: t, actions: n, footerInput: i, title: s } = e;
    return (0, l.jsxs)(o.B, {
        direction: "vertical",
        justify: "start",
        padding: D,
        className: F.kL,
        children: [
            (0, l.jsx)(c.D, { variant: "heading-lg/semibold", className: F.R_, children: s }),
            (0, l.jsx)(k.c, { children: t }),
            (0, l.jsx)("div", { className: F.Ic }),
            (0, l.jsx)(L, { actions: n, footerInput: i }),
        ],
    });
};
var G = n(242235);
let V = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                i = a.useCallback(async () => {
                    await t({ type: y.Empty }), window.location.reload();
                }, [t]);
            return (0, l.jsxs)("div", {
                className: G.kL,
                children: [
                    (0, l.jsx)(c.D, {
                        variant: "heading-lg/bold",
                        className: G.DD,
                        children: b.intl.string(S.default.v52itt),
                    }),
                    (0, l.jsx)(u.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: G.h_,
                        children: b.intl.string(S.default["5am8D3"]),
                    }),
                    (0, l.jsx)(o.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, l.jsx)(d.$, {
                            variant: "primary",
                            text: b.intl.string(S.default["GDsHl+"]),
                            onClick: i,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, N.bG)([U.default], () => U.default.getCurrentUser());
            return (0, l.jsx)(B, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: () => {
                            n?.ageVerificationStatus === M.Tk.UNVERIFIED
                                ? O.A.showAgeVerificationGetStartedModal({
                                      entryPoint: h.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: y.Empty }),
                                  })
                                : t({ type: y.Empty });
                        },
                    },
                ],
                children: (0, l.jsxs)(o.B, {
                    gap: 8,
                    children: [
                        (0, l.jsx)(u.E, {
                            variant: "text-md/normal",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        }),
                        (0, l.jsx)(u.E, {
                            variant: "text-md/normal",
                            children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        }),
                        (0, l.jsx)(u.E, { variant: "text-md/normal", children: "Ut enim ad minim veniam quis" }),
                    ],
                }),
            });
        },
    },
    W = (e) => {
        let { onSubmit: t, disabled: n } = e,
            { task: i } = T(),
            s = V[i.ui_component.component.type];
        return null == s
            ? null
            : (0, l.jsx)(s, {
                  configData: i.ui_component.component.data,
                  onSubmit: t,
                  taskId: i.task_id,
                  flowId: i.flow_context?.flow_id,
                  assignmentId: i.assignment_id,
                  disabled: n,
              });
    };
var Q = n(754302),
    H = n(721940);
let q = {
        [v.EMAIL_VERIFICATION]: b.intl.string(S.default.HC4IiR),
        [v.REFRESH_APP]: b.intl.string(S.default.SzfxQ3),
        [v.AGE_VERIFICATION]: b.intl.string(S.default["dSkE/A"]),
    },
    z = function () {
        let { task: e } = T(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, l.jsxs)(o.B, {
            direction: "vertical",
            justify: "space-between",
            padding: D,
            className: H.k,
            children: [
                (0, l.jsxs)(o.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, l.jsx)(c.D, {
                            variant: "display-md",
                            className: H.D,
                            children: b.intl.string(S.default["/OpRAP"]),
                        }),
                        (0, l.jsx)(o.B, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) =>
                                (0, l.jsx)(
                                    Q.B,
                                    {
                                        title: q[e.task_type] ?? "",
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
                (0, l.jsx)(u.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: b.intl.format(S.default["0DHxym"], {
                        handleLogOut: () => (0, R.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var K = n(231723),
    $ = n(818348),
    Y = n(561452);
let X = n(843020);
function Z(e) {
    let { task: t, handleSubmit: n, disabled: i } = e,
        [s, r] = a.useState(t),
        o = a.useMemo(() => ({ task: s, setTask: r }), [s, r]);
    return (
        a.useEffect(() => {
            r(t);
        }, [t]),
        (0, l.jsxs)(C.Provider, {
            value: o,
            children: [(0, l.jsx)(z, {}), (0, l.jsx)(W, { onSubmit: n, disabled: i })],
        })
    );
}
let J = function (e) {
    let { transitionState: t, onClose: n } = e,
        [i, s] = a.useState(null),
        [f, g] = a.useState(!0),
        [A, C] = a.useState(null),
        [T, N] = a.useState(!1),
        M = a.useCallback(async () => {
            g(!0), C(null);
            try {
                let e = await x();
                if (null == e) return void n();
                !(0, _.uJ)(e.ui_component?.component.type) && I.has(e.ui_component.component.type)
                    ? s(e)
                    : s({
                          task_id: e.task_id,
                          task_type: v.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: j.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                C(b.intl.string(S.default["/f++3g"]));
            } finally {
                g(!1);
            }
        }, [n]),
        O = a.useCallback(
            async (e) => {
                if (null !== i) {
                    N(!0);
                    try {
                        let t = { task_id: i.task_id, flow_id: i.flow_context.flow_id, data: e };
                        await E(t), M();
                    } catch (e) {
                        C(b.intl.string(S.default["+QRSxc"]));
                    } finally {
                        N(!1);
                    }
                }
            },
            [i, M],
        );
    (0, p.Ay)(() => {
        M();
    });
    let U = a.useMemo(() => i?.task_type === v.AGE_VERIFICATION, [i]);
    return (0, l.jsxs)("div", {
        className: Y.Tp,
        children: [
            (0, l.jsx)("img", { className: Y.xX, src: X, alt: "" }),
            U
                ? (0, l.jsx)(m.default, {
                      transitionState: t ?? K.ip.ENTERED,
                      entryPoint: h.q1.SAFETY_FLOWS,
                      onClose: $.tE,
                      onComplete: async () => {
                          await O({ type: y.Empty });
                      },
                      dismissable: !1,
                  })
                : (0, l.jsx)("div", {
                      className: Y.nA,
                      children: f
                          ? (0, l.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE })
                          : (0, l.jsx)("div", {
                                className: Y.kL,
                                children: (0, l.jsxs)(o.B, {
                                    direction: "horizontal",
                                    justify: "start",
                                    className: Y.rf,
                                    children: [
                                        null !== A &&
                                            (0, l.jsxs)(o.B, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                className: Y.Nj,
                                                padding: 16,
                                                children: [
                                                    (0, l.jsxs)(o.B, {
                                                        direction: "vertical",
                                                        gap: 4,
                                                        children: [
                                                            (0, l.jsx)(c.D, {
                                                                variant: "heading-xl/semibold",
                                                                children: b.intl.string(b.t.c6kn6F),
                                                            }),
                                                            (0, l.jsx)(u.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-muted",
                                                                children: b.intl.string(b.t.ZUEGFn),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, l.jsxs)(o.B, {
                                                        direction: "horizontal",
                                                        justify: "center",
                                                        align: "center",
                                                        children: [
                                                            (0, l.jsx)(d.$, {
                                                                fullWidth: !0,
                                                                variant: "secondary",
                                                                text: b.intl.string(b.t["2jxGer"]),
                                                                onClick: () => {
                                                                    (0, R.k)("safety_flows_modal");
                                                                },
                                                            }),
                                                            (0, l.jsx)(d.$, {
                                                                fullWidth: !0,
                                                                text: b.intl.string(b.t["7NqTJn"]),
                                                                onClick: () => {
                                                                    M();
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        null === A &&
                                            null != i &&
                                            (0, l.jsx)(Z, { task: i, handleSubmit: O, disabled: T }),
                                    ],
                                }),
                            }),
                  }),
        ],
    });
};
