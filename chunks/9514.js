n.d(t, { default: () => B });
var i = n(477900),
    e = n(582128),
    a = n(855986),
    r = n(189213),
    s = n(331322),
    u = n(691885),
    c = n(834730),
    o = n(821609),
    d = n(858899),
    g = n(95477),
    f = n(957565),
    h = n(420036),
    b = n(233470),
    p = n(260498),
    x = n(951178);
function k(l, t) {
    let n,
        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        e = `https://${window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") ? "conjure.town" : "conjure.city"}/${l}/${
            "" ===
            (n = t
                .normalize("NFKD")
                .replace(/[\u0300-\u036f]/g, "")
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, "-")
                .slice(0, 48)
                .replace(/^-+|-+$/g, ""))
                ? "app"
                : n
        }`;
    return null == i ? e : `${e}/${i}`;
}
async function j(l, t) {
    try {
        let n = await (0, b.U1)(l, t, (0, b.gg)());
        return n.ok ? !0 === n.body.share_links_enabled : null;
    } catch {
        return null;
    }
}
n(938796);
var m = n(314116),
    v = n(534514),
    C = n(792996);
let y = [1800, 3600, 21600, 43200, 86400, 604800];
var w = n(620632),
    _ = n(652215),
    P = n(191850);
function E(l) {
    let { project: t, isOwner: n } = l,
        [a, r] = e.useState(604800),
        [h, p] = e.useState(null),
        [x, j] = e.useState(!1),
        [E, B] = e.useState(!1),
        S = e.useMemo(
            () =>
                y.map((l) => ({
                    id: String(l),
                    label:
                        l < 3600
                            ? C.intl.formatToPlainString(C.t.iXLF9W, { minutes: l / 60 })
                            : l < 86400
                              ? C.intl.formatToPlainString(C.t.xCjYxK, { hours: l / 3600 })
                              : C.intl.formatToPlainString(C.t["k2UNz+"], { days: l / 86400 }),
                    value: l,
                })),
            [],
        ),
        L = e.useCallback(async () => {
            (j(!0), B(!1));
            try {
                let l = await (async function (l, t) {
                    let { body: n } = await w.Bo.post({
                        url: _.Rsh.CONJURE_PROJECT_REMIX_TICKET(l),
                        body: { share_max_age: t },
                        rejectWithError: !0,
                    });
                    return n.ticket;
                })(t.id, a);
                p(k(t.application_id, t.name, l));
            } catch {
                B(!0);
            }
            j(!1);
        }, [t.id, t.application_id, t.name, a]),
        z = e.useCallback(async () => {
            j(!0);
            try {
                (await (0, b.CW)(t.id, { reset_share_links: !0 }),
                    p(null),
                    B(!1),
                    (0, d.P0)({ text: C.intl.string(P.default.w9w1Zh), variant: "success" }));
            } catch {
                (0, d.P0)({ text: C.intl.string(P.default["5lL390"]), variant: "critical" });
            }
            j(!1);
        }, [t.id]),
        A = e.useCallback(() => {
            (0, m.A)({
                title: C.intl.string(P.default.LQawVH),
                subtitle: C.intl.string(P.default.xBBqXx),
                confirmText: C.intl.string(P.default.oq0hBy),
                variant: "critical",
                onConfirm: z,
            });
        }, [z]),
        O = e.useCallback(() => {
            null != h &&
                (0, f.C)(
                    h,
                    () => (0, d.P0)({ text: C.intl.string(C.t["L/PwZf"]), variant: "success" }),
                    () => (0, d.P0)({ text: C.intl.string(P.default["8m6QAX"]), variant: "critical" }),
                );
        }, [h]);
    return (0, i.jsxs)(s.B, {
        gap: 12,
        children: [
            (0, i.jsxs)(s.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(v.D, { variant: "heading-md/semibold", children: C.intl.string(P.default["/lZVfj"]) }),
                    (0, i.jsx)(c.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: C.intl.string(P.default.wp7r6t),
                    }),
                ],
            }),
            (0, i.jsxs)(s.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, i.jsx)(u.l, {
                        selectionMode: "single",
                        label: C.intl.string(P.default.eMlOXz),
                        options: S,
                        value: a,
                        onSelectionChange: (l) => r(l),
                        fullWidth: !0,
                    }),
                    (0, i.jsx)(o.$, {
                        variant: "primary",
                        text: C.intl.string(P.default.wELODD),
                        loading: x,
                        onClick: L,
                    }),
                ],
            }),
            E
                ? (0, i.jsx)(c.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      children: C.intl.string(P.default.KIrnzC),
                  })
                : null,
            null != h
                ? (0, i.jsxs)(s.B, {
                      direction: "horizontal",
                      gap: 8,
                      align: "end",
                      children: [
                          (0, i.jsx)(g.k, {
                              label: C.intl.string(P.default.IPmhvk),
                              value: h,
                              readOnly: !0,
                              fullWidth: !0,
                          }),
                          (0, i.jsx)(o.$, { variant: "secondary", text: C.intl.string(C.t.OpuAlK), onClick: O }),
                      ],
                  })
                : null,
            n
                ? (0, i.jsx)(s.B, {
                      direction: "horizontal",
                      justify: "start",
                      children: (0, i.jsx)(o.$, {
                          variant: "critical-secondary",
                          size: "sm",
                          text: C.intl.string(P.default.oq0hBy),
                          disabled: x,
                          onClick: A,
                      }),
                  })
                : null,
        ],
    });
}
function B(l) {
    let { projectId: t, transitionState: n, onClose: d } = l,
        g = (0, a.bG)([p.Ay], () => p.Ay.getProject(t) ?? null, [t]),
        {
            shareLinksEnabled: f,
            loadFailed: k,
            setShareLinksEnabled: m,
            reload: v,
        } = (function (l) {
            let [t, n] = e.useState(null),
                [i, a] = e.useState(!1),
                r = e.useCallback((l) => {
                    (n(l), a(!1));
                }, []);
            e.useEffect(() => {
                let t = new AbortController();
                return (
                    !(async function () {
                        let n = await j(l, t.signal);
                        t.signal.aborted || (null == n ? a(!0) : r(n));
                    })(),
                    () => t.abort()
                );
            }, [l, r]);
            let s = e.useCallback(async () => {
                let t = await j(l);
                null == t ? a(!0) : r(t);
            }, [l, r]);
            return { shareLinksEnabled: t, loadFailed: i, setShareLinksEnabled: r, reload: s };
        })(t),
        [y, w] = e.useState(null),
        [_, B] = e.useState(!1),
        L = e.useCallback(
            async (l) => {
                let t =
                    null != g && (null != f || k)
                        ? (function (l, t, n) {
                              let i = (function (l, t) {
                                  let { flags: n } = l;
                                  return null == n ? null : t ? n | x.Zh.PUBLIC : n & ~x.Zh.PUBLIC;
                              })(l, "public" === n);
                              if (null == i) return null;
                              let e = {};
                              return (
                                  i !== l.flags && (e.flags = i),
                                  "link" === n && !0 !== t && (e.share_links_enabled = !0),
                                  "collaborators" === n && !1 !== t && (e.share_links_enabled = !1),
                                  e
                              );
                          })(g, f, l)
                        : null;
                if (null != g && null != t && 0 !== Object.keys(t).length) {
                    (w(l), B(!1));
                    try {
                        (await (0, b.CW)(g.id, t), null != t.share_links_enabled && m(t.share_links_enabled));
                    } catch {
                        (B(!0), await v());
                    }
                    w(null);
                }
            },
            [g, f, k, m, v],
        ),
        z = e.useMemo(
            () => [
                {
                    id: "collaborators",
                    value: "collaborators",
                    label: C.intl.string(P.default["a/Tlqf"]),
                    description: C.intl.string(P.default.Nvva0C),
                },
                {
                    id: "link",
                    value: "link",
                    label: C.intl.string(P.default.e0VakN),
                    description: C.intl.string(P.default.LTgWMb),
                },
                {
                    id: "public",
                    value: "public",
                    label: C.intl.string(P.default["98MAcX"]),
                    description: C.intl.string(P.default.NtgDy0),
                },
            ],
            [],
        ),
        A = null != g && (0, p.PV)(g),
        O = null != g && A && (0, x.IU)(g) && (null != f || k),
        W = y ?? (null != g ? ((0, x.XE)(g) ? "public" : null == f ? null : f ? "link" : "collaborators") : null);
    return (0, i.jsx)(r.a, {
        transitionState: n,
        onClose: d,
        title: C.intl.string(C.t.RDE0Sc),
        size: "md",
        actions: [{ text: C.intl.string(C.t.i4jeWR), variant: "primary", onClick: d }],
        children:
            null == g
                ? null
                : (0, i.jsxs)(s.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(u.l, {
                              selectionMode: "single",
                              label: C.intl.string(P.default.ujIxRm),
                              description: A
                                  ? z.find((l) => l.value === W)?.description
                                  : C.intl.string(P.default.WLBlI4),
                              options: z,
                              value: W ?? void 0,
                              disabled: !O || null != y,
                              onSelectionChange: L,
                              fullWidth: !0,
                          }),
                          k && null == y && "public" !== W
                              ? (0, i.jsxs)(s.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "center",
                                    children: [
                                        (0, i.jsx)(c.E, {
                                            variant: "body-sm/normal",
                                            color: "text-feedback-critical",
                                            children: C.intl.string(P.default["0e9nOP"]),
                                        }),
                                        (0, i.jsx)(o.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: C.intl.string(C.t["5911Lb"]),
                                            onClick: v,
                                        }),
                                    ],
                                })
                              : null,
                          _
                              ? (0, i.jsx)(c.E, {
                                    variant: "body-sm/normal",
                                    color: "text-feedback-critical",
                                    children: C.intl.string(P.default.wzqQPR),
                                })
                              : null,
                          "public" === W && null == y ? (0, i.jsx)(S, { project: g }) : null,
                          "link" === W && null == y ? (0, i.jsx)(E, { project: g, isOwner: A }) : null,
                          A ? (0, i.jsx)(h.A, { projectId: g.id }) : null,
                      ],
                  }),
    });
}
function S(l) {
    let { project: t } = l,
        n = k(t.application_id, t.name),
        a = e.useCallback(() => {
            (0, f.C)(
                n,
                () => (0, d.P0)({ text: C.intl.string(C.t["L/PwZf"]), variant: "success" }),
                () => (0, d.P0)({ text: C.intl.string(P.default["8m6QAX"]), variant: "critical" }),
            );
        }, [n]);
    return (0, i.jsxs)(s.B, {
        direction: "horizontal",
        gap: 8,
        align: "end",
        children: [
            (0, i.jsx)(g.k, { label: C.intl.string(P.default.IPmhvk), value: n, readOnly: !0, fullWidth: !0 }),
            (0, i.jsx)(o.$, { variant: "secondary", text: C.intl.string(C.t.OpuAlK), onClick: a }),
        ],
    });
}
