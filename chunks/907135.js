n.d(t, { A: () => J });
var s,
    l,
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
    g = n(562708);
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
    _ = n(375708),
    N =
        (((s = {})[(s.REFRESH_APP = -1)] = "REFRESH_APP"),
        (s[(s.EMAIL_VERIFICATION = 3)] = "EMAIL_VERIFICATION"),
        (s[(s.AGE_VERIFICATION = 9)] = "AGE_VERIFICATION"),
        s);
let S = {
        EMAIL_VERIFICATION: "email_verification",
        PHONE_VERIFICATION: "phone_verification",
        GENERIC_CALL_TO_ACTION: "generic_call_to_action",
        REFRESH_APP: "refresh_app",
        AGE_VERIFICATION: "age_verification",
    },
    R = new Set(Object.values(S));
_.intl.string(j.default["Qm6K/s"]), _.intl.string(j.default["dSkE/A"]);
var I = (((l = {}).Empty = "empty"), (l.VerificationCode = "verification_code"), l),
    y = n(627575),
    b = n(17928),
    M = n(155718),
    w = n(139716),
    O = n(287809),
    U = n(430993),
    D = n(825484),
    P = n(214437);
let k = (e) => {
        let { actions: t, footerInput: n } = e;
        return 0 === t.length && null == n
            ? null
            : (0, i.jsxs)("footer", {
                  className: P.q,
                  children: [
                      null != n && (0, i.jsx)("div", { children: n }),
                      (0, i.jsx)(D.e, {
                          className: P.G,
                          justify: "end",
                          children: t.map((e, t) => (0, i.jsx)(d.$, { ...e }, t)),
                      }),
                  ],
              });
    },
    L = { bottom: 40, left: 32, right: 32, top: 32 };
var F = n(831067);
let G = (e) => {
    let { children: t, actions: n, footerInput: s, title: l } = e;
    return (0, i.jsxs)(o.B, {
        direction: "vertical",
        justify: "start",
        padding: L,
        className: F.kL,
        children: [
            (0, i.jsx)(c.D, { variant: "heading-lg/semibold", className: F.R_, children: l }),
            (0, i.jsx)(U.c, { children: t }),
            (0, i.jsx)("div", { className: F.Ic }),
            (0, i.jsx)(k, { actions: n, footerInput: s }),
        ],
    });
};
var V = n(242235);
let B = {
        refresh_app: (e) => {
            let { onSubmit: t, disabled: n } = e,
                s = a.useCallback(async () => {
                    await t({ type: I.Empty }), window.location.reload();
                }, [t]);
            return (0, i.jsxs)("div", {
                className: V.kL,
                children: [
                    (0, i.jsx)(c.D, {
                        variant: "heading-lg/bold",
                        className: V.DD,
                        children: _.intl.string(j.default.v52itt),
                    }),
                    (0, i.jsx)(u.E, {
                        variant: "text-md/normal",
                        color: "text-muted",
                        className: V.h_,
                        children: _.intl.string(j.default["5am8D3"]),
                    }),
                    (0, i.jsx)(o.B, {
                        direction: "horizontal",
                        justify: "end",
                        children: (0, i.jsx)(d.$, {
                            variant: "primary",
                            text: _.intl.string(j.default["GDsHl+"]),
                            onClick: s,
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
                                      onClose: () => t({ type: I.Empty }),
                                  })
                                : t({ type: I.Empty });
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
            { task: s } = T(),
            l = B[s.ui_component.component.type];
        return null == l
            ? null
            : (0, i.jsx)(l, {
                  configData: s.ui_component.component.data,
                  onSubmit: t,
                  taskId: s.task_id,
                  flowId: s.flow_context?.flow_id,
                  assignmentId: s.assignment_id,
                  disabled: n,
              });
    };
var Q = n(754302),
    W = n(721940);
let z = {
        [N.EMAIL_VERIFICATION]: _.intl.string(j.default.HC4IiR),
        [N.REFRESH_APP]: _.intl.string(j.default.SzfxQ3),
        [N.AGE_VERIFICATION]: _.intl.string(j.default["dSkE/A"]),
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
                            children: _.intl.string(j.default["/OpRAP"]),
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
                    children: _.intl.format(j.default["0DHxym"], {
                        handleLogOut: () => (0, y.k)("safety_flows_sidebar"),
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
    let { task: t, handleSubmit: n, disabled: s } = e,
        [l, r] = a.useState(t),
        o = a.useMemo(() => ({ task: l, setTask: r }), [l, r]);
    return (
        a.useEffect(() => {
            r(t);
        }, [t]),
        (0, i.jsxs)(v.Provider, {
            value: o,
            children: [(0, i.jsx)(q, {}), (0, i.jsx)(H, { onSubmit: n, disabled: s })],
        })
    );
}
let J = function (e) {
    let { transitionState: t, onClose: n } = e,
        [s, l] = a.useState(null),
        [g, A] = a.useState(!0),
        [x, v] = a.useState(null),
        [T, b] = a.useState(!1),
        M = a.useCallback(async () => {
            A(!0), v(null);
            try {
                let e = await C();
                if (null == e) return void n();
                !(0, f.uJ)(e.ui_component?.component.type) && R.has(e.ui_component.component.type)
                    ? l(e)
                    : l({
                          task_id: e.task_id,
                          task_type: N.REFRESH_APP,
                          assignment_id: e.assignment_id,
                          ui_component: { component: { type: S.REFRESH_APP, data: {} } },
                          flow_context: { tasks: [], flow_id: e.flow_context.flow_id },
                      });
            } catch {
                v(_.intl.string(j.default["/f++3g"]));
            } finally {
                A(!1);
            }
        }, [n]),
        w = a.useCallback(
            async (e) => {
                if (null !== s) {
                    b(!0);
                    try {
                        let t = { task_id: s.task_id, flow_id: s.flow_context.flow_id, data: e };
                        await E(t), M();
                    } catch (e) {
                        v(_.intl.string(j.default["+QRSxc"]));
                    } finally {
                        b(!1);
                    }
                }
            },
            [s, M],
        );
    (0, h.Ay)(() => {
        M();
    });
    let O = a.useMemo(() => s?.task_type === N.AGE_VERIFICATION, [s]);
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
                          await w({ type: I.Empty });
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
                                                                children: _.intl.string(_.t.c6kn6F),
                                                            }),
                                                            (0, i.jsx)(u.E, {
                                                                variant: "text-md/normal",
                                                                color: "text-muted",
                                                                children: _.intl.string(_.t.ZUEGFn),
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
                                                                text: _.intl.string(_.t["2jxGer"]),
                                                                onClick: () => {
                                                                    (0, y.k)("safety_flows_modal");
                                                                },
                                                            }),
                                                            (0, i.jsx)(d.$, {
                                                                fullWidth: !0,
                                                                text: _.intl.string(_.t["7NqTJn"]),
                                                                onClick: () => {
                                                                    M();
                                                                },
                                                            }),
                                                        ],
                                                    }),
                                                ],
                                            }),
                                        null === x &&
                                            null != s &&
                                            (0, i.jsx)(X, { task: s, handleSubmit: w, disabled: T }),
                                    ],
                                }),
                            }),
                  }),
        ],
    });
};
