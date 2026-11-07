n.d(t, { default: () => E });
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
    h = n(233470),
    b = n(260498),
    p = n(951178);
function x(l, t) {
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
async function k(l, t) {
    try {
        let n = await (0, h.U1)(l, t, (0, h.gg)());
        return n.ok ? !0 === n.body.share_links_enabled : null;
    } catch {
        return null;
    }
}
n(938796);
var j = n(314116),
    m = n(534514),
    v = n(792996);
let C = [1800, 3600, 21600, 43200, 86400, 604800];
var y = n(620632),
    w = n(652215),
    _ = n(191850);
function P(l) {
    let { project: t, isOwner: n } = l,
        [a, r] = e.useState(604800),
        [b, p] = e.useState(null),
        [k, P] = e.useState(!1),
        [E, B] = e.useState(!1),
        S = e.useMemo(
            () =>
                C.map((l) => ({
                    id: String(l),
                    label:
                        l < 3600
                            ? v.intl.formatToPlainString(v.t.iXLF9W, { minutes: l / 60 })
                            : l < 86400
                              ? v.intl.formatToPlainString(v.t.xCjYxK, { hours: l / 3600 })
                              : v.intl.formatToPlainString(v.t["k2UNz+"], { days: l / 86400 }),
                    value: l,
                })),
            [],
        ),
        L = e.useCallback(async () => {
            (P(!0), B(!1));
            try {
                let l = await (async function (l, t) {
                    let { body: n } = await y.Bo.post({
                        url: w.Rsh.CONJURE_PROJECT_REMIX_TICKET(l),
                        body: { share_max_age: t },
                        rejectWithError: !0,
                    });
                    return n.ticket;
                })(t.id, a);
                p(x(t.application_id, t.name, l));
            } catch {
                B(!0);
            }
            P(!1);
        }, [t.id, t.application_id, t.name, a]),
        z = e.useCallback(async () => {
            P(!0);
            try {
                (await (0, h.CW)(t.id, { reset_share_links: !0 }),
                    p(null),
                    B(!1),
                    (0, d.P0)({ text: v.intl.string(_.default.w9w1Zh), variant: "success" }));
            } catch {
                (0, d.P0)({ text: v.intl.string(_.default["5lL390"]), variant: "critical" });
            }
            P(!1);
        }, [t.id]),
        A = e.useCallback(() => {
            (0, j.A)({
                title: v.intl.string(_.default.LQawVH),
                subtitle: v.intl.string(_.default.xBBqXx),
                confirmText: v.intl.string(_.default.oq0hBy),
                variant: "critical",
                onConfirm: z,
            });
        }, [z]),
        O = e.useCallback(() => {
            null != b &&
                (0, f.C)(
                    b,
                    () => (0, d.P0)({ text: v.intl.string(v.t["L/PwZf"]), variant: "success" }),
                    () => (0, d.P0)({ text: v.intl.string(_.default["8m6QAX"]), variant: "critical" }),
                );
        }, [b]);
    return (0, i.jsxs)(s.B, {
        gap: 12,
        children: [
            (0, i.jsxs)(s.B, {
                gap: 4,
                children: [
                    (0, i.jsx)(m.D, { variant: "heading-md/semibold", children: v.intl.string(_.default["/lZVfj"]) }),
                    (0, i.jsx)(c.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: v.intl.string(_.default.wp7r6t),
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
                        label: v.intl.string(_.default.eMlOXz),
                        options: S,
                        value: a,
                        onSelectionChange: (l) => r(l),
                        fullWidth: !0,
                    }),
                    (0, i.jsx)(o.$, {
                        variant: "primary",
                        text: v.intl.string(_.default.wELODD),
                        loading: k,
                        onClick: L,
                    }),
                ],
            }),
            E
                ? (0, i.jsx)(c.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      children: v.intl.string(_.default.KIrnzC),
                  })
                : null,
            null != b
                ? (0, i.jsxs)(s.B, {
                      direction: "horizontal",
                      gap: 8,
                      align: "end",
                      children: [
                          (0, i.jsx)(g.k, {
                              label: v.intl.string(_.default.IPmhvk),
                              value: b,
                              readOnly: !0,
                              fullWidth: !0,
                          }),
                          (0, i.jsx)(o.$, { variant: "secondary", text: v.intl.string(v.t.OpuAlK), onClick: O }),
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
                          text: v.intl.string(_.default.oq0hBy),
                          disabled: k,
                          onClick: A,
                      }),
                  })
                : null,
        ],
    });
}
function E(l) {
    let { projectId: t, transitionState: n, onClose: d } = l,
        g = (0, a.bG)([b.Ay], () => b.Ay.getProject(t) ?? null, [t]),
        {
            shareLinksEnabled: f,
            loadFailed: x,
            setShareLinksEnabled: j,
            reload: m,
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
                        let n = await k(l, t.signal);
                        t.signal.aborted || (null == n ? a(!0) : r(n));
                    })(),
                    () => t.abort()
                );
            }, [l, r]);
            let s = e.useCallback(async () => {
                let t = await k(l);
                null == t ? a(!0) : r(t);
            }, [l, r]);
            return { shareLinksEnabled: t, loadFailed: i, setShareLinksEnabled: r, reload: s };
        })(t),
        [C, y] = e.useState(null),
        [w, E] = e.useState(!1),
        S = e.useCallback(
            async (l) => {
                let t =
                    null != g && (null != f || x)
                        ? (function (l, t, n) {
                              let i = (function (l, t) {
                                  let { flags: n } = l;
                                  return null == n ? null : t ? n | p.Zh.PUBLIC : n & ~p.Zh.PUBLIC;
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
                    (y(l), E(!1));
                    try {
                        (await (0, h.CW)(g.id, t), null != t.share_links_enabled && j(t.share_links_enabled));
                    } catch {
                        (E(!0), await m());
                    }
                    y(null);
                }
            },
            [g, f, x, j, m],
        ),
        L = e.useMemo(
            () => [
                {
                    id: "collaborators",
                    value: "collaborators",
                    label: v.intl.string(_.default["a/Tlqf"]),
                    description: v.intl.string(_.default.Nvva0C),
                },
                {
                    id: "link",
                    value: "link",
                    label: v.intl.string(_.default.e0VakN),
                    description: v.intl.string(_.default.LTgWMb),
                },
                {
                    id: "public",
                    value: "public",
                    label: v.intl.string(_.default["98MAcX"]),
                    description: v.intl.string(_.default.NtgDy0),
                },
            ],
            [],
        ),
        z = null != g && (0, b.PV)(g),
        A = null != g && z && (0, p.IU)(g) && (null != f || x),
        O = C ?? (null != g ? ((0, p.XE)(g) ? "public" : null == f ? null : f ? "link" : "collaborators") : null);
    return (0, i.jsx)(r.a, {
        transitionState: n,
        onClose: d,
        title: v.intl.string(v.t.RDE0Sc),
        size: "md",
        actions: [{ text: v.intl.string(v.t.i4jeWR), variant: "primary", onClick: d }],
        children:
            null == g
                ? null
                : (0, i.jsxs)(s.B, {
                      gap: 16,
                      children: [
                          (0, i.jsx)(u.l, {
                              selectionMode: "single",
                              label: v.intl.string(_.default.ujIxRm),
                              description: z
                                  ? L.find((l) => l.value === O)?.description
                                  : v.intl.string(_.default.WLBlI4),
                              options: L,
                              value: O ?? void 0,
                              disabled: !A || null != C,
                              onSelectionChange: S,
                              fullWidth: !0,
                          }),
                          x && null == C && "public" !== O
                              ? (0, i.jsxs)(s.B, {
                                    direction: "horizontal",
                                    gap: 8,
                                    align: "center",
                                    children: [
                                        (0, i.jsx)(c.E, {
                                            variant: "body-sm/normal",
                                            color: "text-feedback-critical",
                                            children: v.intl.string(_.default["0e9nOP"]),
                                        }),
                                        (0, i.jsx)(o.$, {
                                            variant: "secondary",
                                            size: "sm",
                                            text: v.intl.string(v.t["5911Lb"]),
                                            onClick: m,
                                        }),
                                    ],
                                })
                              : null,
                          w
                              ? (0, i.jsx)(c.E, {
                                    variant: "body-sm/normal",
                                    color: "text-feedback-critical",
                                    children: v.intl.string(_.default.wzqQPR),
                                })
                              : null,
                          "public" === O && null == C ? (0, i.jsx)(B, { project: g }) : null,
                          "link" === O && null == C ? (0, i.jsx)(P, { project: g, isOwner: z }) : null,
                      ],
                  }),
    });
}
function B(l) {
    let { project: t } = l,
        n = x(t.application_id, t.name),
        a = e.useCallback(() => {
            (0, f.C)(
                n,
                () => (0, d.P0)({ text: v.intl.string(v.t["L/PwZf"]), variant: "success" }),
                () => (0, d.P0)({ text: v.intl.string(_.default["8m6QAX"]), variant: "critical" }),
            );
        }, [n]);
    return (0, i.jsxs)(s.B, {
        direction: "horizontal",
        gap: 8,
        align: "end",
        children: [
            (0, i.jsx)(g.k, { label: v.intl.string(_.default.IPmhvk), value: n, readOnly: !0, fullWidth: !0 }),
            (0, i.jsx)(o.$, { variant: "secondary", text: v.intl.string(v.t.OpuAlK), onClick: a }),
        ],
    });
}
