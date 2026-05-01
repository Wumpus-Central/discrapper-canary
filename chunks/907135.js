n.d(t, { A: () => J });
var l,
    s,
    i = n(627968),
    a = n(64700),
    r = n(289873),
    o = n(331322),
    c = n(534514),
    u = n(834730),
    d = n(821609),
    h = n(964486),
    m = n(847599),
    p = n(595746),
    f = n(240248),
    g = n(110259);
n(181658);
var A = n(499785),
    x = n(652215);
async function C() {
    let e = await A.A.get({
        url: x.Rsh.SAFETY_FLOWS_TASK,
        trackedActionData: { event: g.NetworkActionNames.USER_VERIFY },
        rejectWithError: !0,
    });
    return 204 === e.status ? null : e.body;
}
async function E(e) {
    return (
        await A.A.post({
            url: x.Rsh.SAFETY_FLOWS_TASK,
            body: e,
            trackedActionData: { event: g.NetworkActionNames.USER_VERIFY },
            rejectWithError: !0,
        })
    ).body;
}
let v = a.createContext(null);
function T() {
    let e = a.useContext(v);
    if (null == e) throw Error("useSafetyFlowTask must be used within a SafetyFlowTaskContext Provider");
    return e;
}
var j = n(837451),
    N = n(985018),
    _ =
        (((l = {})[(l.REFRESH_APP = -1)] = "REFRESH_APP"),
        (l[(l.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
        (l[(l.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        l);
let S = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
    },
    R = new Set(Object.values(S));
N.intl.string(j.default["Qm6K/s"]), N.intl.string(j.default["dSkE/A"]);
var y = (((s = {}).Empty = "empty"), (s.VerificationCode = "verification_code"), s),
    I = n(627575),
    b = n(17928),
    M = n(155718),
    w = n(139716),
    O = n(287809),
    U = n(430993),
    D = n(825484),
    k = n(436818);
let P = (e) => {
        let { actions: t, footerInput: n } = e;
        return 0 === t.length && null == n
            ? null
            : (0, i.jsxs)("footer", {
                  className: k.q,
                  children: [
                      null != n && (0, i.jsx)("div", { children: n }),
                      (0, i.jsx)(D.e, {
                          className: k.G,
                          justify: "end",
                          children: t.map((e, t) => (0, i.jsx)(d.$, { ...e }, t)),
                      }),
                  ],
              });
    },
    L = { bottom: 40, left: 32, right: 32, top: 32 };
var F = n(831067);
let G = (e) => {
    let { children: t, actions: n, footerInput: l, title: s } = e;
    return (0, i.jsxs)(o.B, {
        direction: "vertical",
        justify: "start",
        padding: L,
        className: F.kL,
        children: [
            (0, i.jsx)(c.D, { variant: "heading-lg/semibold", className: F.R_, children: s }),
            (0, i.jsx)(U.c, { children: t }),
            (0, i.jsx)("div", { className: F.Ic }),
            (0, i.jsx)(P, { actions: n, footerInput: l }),
        ],
    });
};
var B = n(242235);
let V = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                l = a.useCallback(async () => {
                    await t({ type: y.Empty }), window.location.reload();
                }, [t]);
            return (0, i.jsxs)("div", {
                className: B.kL,
                children: [
                    (0, i.jsx)(c.D, {
                        variant: "heading-lg/bold",
                        className: B.DD,
                        children: N.intl.string(j.default.v52itt),
                    }),
                    (0, i.jsx)(u.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: B.h_,
                        children: N.intl.string(j.default["5am8D3"]),
                    }),
                    (0, i.jsx)(o.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, i.jsx)(d.$, {
                            variant: "primary",
                            text: N.intl.string(j.default["GDsHl+"]),
                            onClick: l,
                            disabled: n,
                        }),
                    }),
                ],
            });
        },
        age_verification: function (e) {
            let { onSubmit: t } = e,
                n = (0, b.bG)([O.default], () => O.default.getCurrentUser());
            return (0, i.jsx)(G, {
                title: "Lorem ipsum dolor",
                actions: [
                    {
                        text: "Consectetur adipiscing",
                        variant: "primary",
                        onClick: () => {
                            n?.ageVerificationStatus === M.Tk.UNVERIFIED
                                ? w.A.showAgeVerificationGetStartedModal({
                                      entryPoint: m.q1.SAFETY_FLOWS,
                                      onClose: () => t({ type: y.Empty }),
                                  })
                                : t({ type: y.Empty });
                        },
                    },
                ],
                children: (0, i.jsxs)(o.B, {
                    gap: 8,
                    children: [
                        (0, i.jsx)(u.E, {
                            variant: "text-md/normal",
                            children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        }),
                        (0, i.jsx)(u.E, {
                            variant: "text-md/normal",
                            children: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        }),
                        (0, i.jsx)(u.E, { variant: "text-md/normal", children: "Ut enim ad minim veniam quis" }),
                    ],
                }),
            });
        },
    },
    H = (e) => {
        let { onSubmit: t, disabled: n } = e,
            { task: l } = T(),
            s = V[l.ui_component.component.type];
        return null == s
            ? null
            : (0, i.jsx)(s, {
                  configData: l.ui_component.component.data,
                  onSubmit: t,
                  taskId: l.task_id,
                  flowId: l.flow_context?.flow_id,
                  assignmentId: l.assignment_id,
                  disabled: n,
              });
    };
var Q = n(754302),
    W = n(721940);
let z = {
        [_.EMAIL_VERIFICATION]: N.intl.string(j.default.HC4IiR),
        [_.REFRESH_APP]: N.intl.string(j.default.SzfxQ3),
        [_.AGE_VERIFICATION]: N.intl.string(j.default["dSkE/A"]),
    },
    q = function () {
        let { task: e } = T(),
            t = e.flow_context.tasks.findIndex((t) => t.task_type === e.task_type);
        return (0, i.jsxs)(o.B, {
            direction: "vertical",
            justify: "space-between",
            padding: L,
            className: W.k,
            children: [
                (0, i.jsxs)(o.B, {
                    direction: "vertical",
                    justify: "space-between",
                    children: [
                        (0, i.jsx)(c.D, {
                            variant: "display-md",
                            className: W.D,
                            children: N.intl.string(j.default["/OpRAP"]),
                        }),
                        (0, i.jsx)(o.B, {
                            direction: "vertical",
                            justify: "space-between",
                            gap: 0,
                            children: e.flow_context.tasks.map((e, n) =>
                                (0, i.jsx)(
                                    Q.B,
                                    {
                                        title: z[e.task_type] ?? "",
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
                (0, i.jsx)(u.E, {
                    variant: "text-md/normal",
                    color: "text-subtle",
                    children: N.intl.format(j.default["0DHxym"], {
                        handleLogOut: () => (0, I.k)("safety_flows_sidebar"),
                    }),
                }),
            ],
        });
    };
var Z = n(231723),
    K = n(818348),
    $ = n(561452);
let Y = n(843020);
function X(e) {
    let { task: t, handleSubmit: n, disabled: l } = e,
        [s, r] = a.useState(t),
        o = a.useMemo(() => ({ task: s, setTask: r }), [s, r]);
    return (
        a.useEffect(() => {
            r(t);
        }, [t]),
        (0, i.jsxs)(v.Provider, {
            value: o,
            children: [(0, i.jsx)(q, {}), (0, i.jsx)(H, { onSubmit: n, disabled: l })],
        })
    );
}
let J = function (e) {
    let { transitionState: t, onClose: n } = e,
        [l, s] = a.useState(null),
        [g, A] = a.useState(!0),
        [x, v] = a.useState(null),
        [T, b] = a.useState(!1),
        M = a.useCallback(async () => {
            A(!0), v(null);
            try {
                let e = await C();
                if (null == e) return void n();
                !(0, f.uJ)(e.ui_component?.component.type) && R.has(e.ui_component.component.type)
                    ? s(e)
                    : s({
                          task_id: e.task_id,
                          task_type: _.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: S.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                v(N.intl.string(j.default["/f++3g"]));
            } finally {
                A(!1);
            }
        }, [n]),
        w = a.useCallback(
            async (e) => {
                if (null !== l) {
                    b(!0);
                    try {
                        let t = { task_id: l.task_id, flow_id: l.flow_context.flow_id, data: e };
                        await E(t), M();
                    } catch (e) {
                        v(N.intl.string(j.default["+QRSxc"]));
                    } finally {
                        b(!1);
                    }
                }
            },
            [l, M],
        );
    (0, h.Ay)(() => {
        M();
    });
    let O = a.useMemo(() => l?.task_type === _.AGE_VERIFICATION, [l]);
    return (0, i.jsxs)("div", {
        className: $.Tp,
        children: [
            (0, i.jsx)("img", { className: $.xX, src: Y, alt: "" }),
            O
                ? (0, i.jsx)(p.default, {
                      transitionState: t ?? Z.ip.ENTERED,
                      entryPoint: m.q1.SAFETY_FLOWS,
                      onClose: K.tE,
                      onComplete: async () => {
                          await w({ type: y.Empty });
                      },
                      dismissable: !1,
                  })
                : (0, i.jsx)("div", {
                      className: $.nA,
                      children: g
                          ? (0, i.jsx)(r.y, { type: r.y.Type.SPINNING_CIRCLE })
                          : (0, i.jsx)("div", {
                                className: $.kL,
                                children: (0, i.jsxs)(o.B, {
                                    direction: "horizontal",
                                    justify: "start",
                                    className: $.rf,
                                    children: [
                                        null !== x &&
                                            (0, i.jsxs)(o.B, {
                                                direction: "vertical",
                                                justify: "space-between",
                                                align: "center",
                                                className: $.Nj,
                                                padding: 16,
                                                children: [
                                                    (0, i.jsxs)(o.B, {
                                                        direction: "vertical",
                                                        gap: 4,
                                                        children: [
                                                            (0, i.jsx)(c.D, {
                                                                variant: "heading-xl/semibold",
                                                                children: N.intl.string(N.t.c6kn6F),
                                                            }),
                                                            (0, i.jsx)(u.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-muted",
                                                                children: N.intl.string(N.t.ZUEGFn),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, i.jsxs)(o.B, {
                                                        direction: "horizontal",
                                                        justify: "center",
                                                        align: "center",
                                                        children: [
                                                            (0, i.jsx)(d.$, {
                                                                fullWidth: !0,
                                                                variant: "secondary",
                                                                text: N.intl.string(N.t["2jxGer"]),
                                                                onClick: () => {
                                                                    (0, I.k)("safety_flows_modal");
                                                                },
                                                            }),
                                                            (0, i.jsx)(d.$, {
                                                                fullWidth: !0,
                                                                text: N.intl.string(N.t["7NqTJn"]),
                                                                onClick: () => {
                                                                    M();
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        null === x &&
                                            null != l &&
                                            (0, i.jsx)(X, { task: l, handleSubmit: w, disabled: T }),
                                    ],
                                }),
                            }),
                  }),
        ],
    });
};
