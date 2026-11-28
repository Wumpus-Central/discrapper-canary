n.d(t, { default: () => D });
var e = n(477900),
    a = n(582128),
    i = n(331322),
    r = n(534514),
    s = n(834730),
    o = n(853555),
    c = n(845079),
    u = n(641655),
    d = n(404778),
    h = n(821609),
    g = n(668639),
    x = n(416052);
function b(l, t) {
    let n,
        e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
        a = `https://${window.GLOBAL_ENV.RELEASE_CHANNEL.startsWith("staging") ? "conjure.town" : "conjure.city"}/${l}/${
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
    return null == e ? a : `${a}/${e}`;
}
var f = n(314116),
    m = n(858899),
    j = n(691885),
    p = n(95477),
    v = n(957565),
    k = n(233470),
    C = n(792996);
let y = [1800, 3600, 21600, 43200, 86400, 604800];
var E = n(620632),
    w = n(652215),
    B = n(258576);
function _(l) {
    let { project: t, isOwner: n, disabled: o = !1 } = l,
        [c, u] = a.useState(604800),
        [d, g] = a.useState(null),
        [x, _] = a.useState(!1),
        [S, P] = a.useState(!1),
        I = a.useMemo(
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
        z = a.useCallback(async () => {
            (_(!0), P(!1));
            try {
                let l = await (async function (l, t) {
                    let { body: n } = await E.Bo.post({
                        url: w.Rsh.CONJURE_PROJECT_REMIX_TICKET(l),
                        body: { share_max_age: t },
                        rejectWithError: !0,
                    });
                    return n.ticket;
                })(t.id, c);
                g(b(t.application_id, t.name, l));
            } catch {
                P(!0);
            }
            _(!1);
        }, [t.id, t.application_id, t.name, c]),
        L = a.useCallback(async () => {
            _(!0);
            try {
                (await (0, k.CW)(t.id, { reset_share_links: !0 }),
                    g(null),
                    P(!1),
                    (0, m.P0)({ text: C.intl.string(B.default.w9w1Zh), variant: "success" }));
            } catch {
                (0, m.P0)({ text: C.intl.string(B.default["5lL390"]), variant: "critical" });
            }
            _(!1);
        }, [t.id]),
        N = a.useCallback(() => {
            (0, f.A)({
                title: C.intl.string(B.default.LQawVH),
                subtitle: C.intl.string(B.default.xBBqXx),
                confirmText: C.intl.string(B.default.oq0hBy),
                variant: "critical",
                onConfirm: L,
            });
        }, [L]),
        A = a.useCallback(() => {
            null != d &&
                (0, v.C)(
                    d,
                    () => (0, m.P0)({ text: C.intl.string(C.t["L/PwZf"]), variant: "success" }),
                    () => (0, m.P0)({ text: C.intl.string(B.default["8m6QAX"]), variant: "critical" }),
                );
        }, [d]);
    return (0, e.jsxs)(i.B, {
        gap: 12,
        children: [
            (0, e.jsxs)(i.B, {
                gap: 4,
                children: [
                    (0, e.jsx)(r.D, { variant: "heading-md/semibold", children: C.intl.string(B.default["/lZVfj"]) }),
                    (0, e.jsx)(s.E, {
                        variant: "body-sm/normal",
                        color: "text-muted",
                        children: C.intl.string(B.default.wp7r6t),
                    }),
                ],
            }),
            (0, e.jsxs)(i.B, {
                direction: "horizontal",
                gap: 8,
                align: "end",
                children: [
                    (0, e.jsx)(j.l, {
                        selectionMode: "single",
                        label: C.intl.string(B.default.eMlOXz),
                        options: I,
                        value: c,
                        onSelectionChange: (l) => u(l),
                        disabled: o,
                        fullWidth: !0,
                    }),
                    (0, e.jsx)(h.$, {
                        variant: "primary",
                        text: C.intl.string(B.default.wELODD),
                        loading: x,
                        disabled: o,
                        onClick: z,
                    }),
                ],
            }),
            S
                ? (0, e.jsx)(s.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      children: C.intl.string(B.default.KIrnzC),
                  })
                : null,
            null != d
                ? (0, e.jsxs)(i.B, {
                      direction: "horizontal",
                      gap: 8,
                      align: "end",
                      children: [
                          (0, e.jsx)(p.k, {
                              label: C.intl.string(B.default.IPmhvk),
                              value: d,
                              readOnly: !0,
                              fullWidth: !0,
                          }),
                          (0, e.jsx)(h.$, { variant: "secondary", text: C.intl.string(C.t.OpuAlK), onClick: A }),
                      ],
                  })
                : null,
            n
                ? (0, e.jsx)(i.B, {
                      direction: "horizontal",
                      justify: "start",
                      children: (0, e.jsx)(h.$, {
                          variant: "critical-secondary",
                          size: "sm",
                          text: C.intl.string(B.default.oq0hBy),
                          disabled: x || o,
                          onClick: N,
                      }),
                  })
                : null,
        ],
    });
}
var S = n(265872),
    P = n(165862),
    I = n(477782),
    z = n(559106),
    L = n(847374),
    N = n(883282);
function A(l) {
    let { sharing: t } = l,
        { isOwner: n, options: r, mode: o, canChange: c, changing: u, changeMode: d } = t,
        [h, g] = a.useState(!1),
        x = a.useCallback(() => g(!1), []),
        b = a.useCallback(() => g((l) => !l), []),
        f = a.useRef(null),
        m = a.useId(),
        j = C.intl.string(B.default.jDBYrs),
        p = r.find((l) => l.value === o),
        v = !c || u;
    return (0, e.jsxs)("div", {
        className: N.n,
        children: [
            (0, e.jsxs)(i.B, {
                gap: 4,
                children: [
                    (0, e.jsx)(s.E, { id: m, variant: "body-md/medium", color: "text-strong", children: j }),
                    n
                        ? null
                        : (0, e.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-subtle",
                              children: C.intl.string(B.default.WLBlI4),
                          }),
                ],
            }),
            (0, e.jsx)(S.Y, {
                targetElementRef: f,
                shouldShow: h && !v,
                onRequestClose: x,
                position: "bottom",
                align: "right",
                animation: S.Y.Animation.NONE,
                renderPopout: (l) => {
                    let { closePopout: t } = l;
                    return (0, e.jsx)(P.W, {
                        navId: "conjure-sharing-mode",
                        "aria-label": j,
                        onClose: t,
                        onSelect: t,
                        children: r.map((l) =>
                            (0, e.jsx)(
                                I.iD,
                                {
                                    id: `conjure-sharing-mode-${l.value}`,
                                    group: "conjure-sharing-mode",
                                    label: l.label,
                                    checked: l.value === o,
                                    action: () => {
                                        (x(), l.value !== o && d(l.value));
                                    },
                                },
                                l.value,
                            ),
                        ),
                    });
                },
                children: (l, t) => {
                    let { onClick: n, ...a } = l,
                        { isShown: i } = t;
                    return (0, e.jsx)(z.vN, {
                        children: (0, e.jsxs)("button", {
                            ...a,
                            ref: f,
                            type: "button",
                            className: N.h,
                            "aria-labelledby": m,
                            "aria-haspopup": "menu",
                            "aria-expanded": i,
                            disabled: v,
                            onClick: b,
                            children: [
                                (0, e.jsx)(s.E, {
                                    tag: "span",
                                    variant: "body-md/medium",
                                    color: "none",
                                    children: p?.label,
                                }),
                                (0, e.jsx)(L.ChevronSmallDownIcon, { size: "sm", color: "currentColor" }),
                            ],
                        }),
                    });
                },
            }),
        ],
    });
}
function O(l) {
    let { project: t, sharing: n } = l,
        { isOwner: a, mode: r, changing: o, loadFailed: c } = n;
    return (0, e.jsxs)(i.B, {
        gap: 16,
        children: [
            "public" === r || "link" === r
                ? (0, e.jsxs)(e.Fragment, {
                      children: [
                          "public" === r
                              ? (0, e.jsx)($, { project: t, disabled: o })
                              : (0, e.jsx)(_, { project: t, isOwner: a, disabled: o }),
                          (0, e.jsx)(d.c, {}),
                      ],
                  })
                : null,
            (0, e.jsx)(A, { sharing: n }),
            c && !o && "public" !== r
                ? (0, e.jsxs)(i.B, {
                      direction: "horizontal",
                      gap: 8,
                      align: "center",
                      children: [
                          (0, e.jsx)(s.E, {
                              variant: "body-sm/normal",
                              color: "text-feedback-critical",
                              children: C.intl.string(B.default["0e9nOP"]),
                          }),
                          (0, e.jsx)(h.$, {
                              variant: "secondary",
                              size: "sm",
                              text: C.intl.string(C.t["5911Lb"]),
                              onClick: n.reload,
                          }),
                      ],
                  })
                : null,
            n.saveFailed
                ? (0, e.jsx)(s.E, {
                      variant: "body-sm/normal",
                      color: "text-feedback-critical",
                      children: C.intl.string(B.default.wzqQPR),
                  })
                : null,
        ],
    });
}
function $(l) {
    let { project: t, disabled: n } = l,
        r = b(t.application_id, t.name),
        o = a.useId();
    return (0, e.jsxs)(i.B, {
        gap: 8,
        children: [
            (0, e.jsx)(s.E, {
                id: o,
                variant: "body-sm/medium",
                color: "text-default",
                children: C.intl.string(B.default.IPmhvk),
            }),
            (0, e.jsx)(g.hN, { titleId: o, children: (0, e.jsx)(x.A, { value: r, disabled: n }) }),
        ],
    });
}
var R = n(566600);
function D(l) {
    let { projectId: t } = l,
        n = (0, u.A)(t);
    a.useEffect(() => {
        let l = new Set();
        function n() {
            let n = (0, o.UJ)(t);
            null == n || n.inert || ((n.inert = !0), l.add(n));
        }
        n();
        let e = setInterval(n, 250);
        return () => {
            for (let t of (clearInterval(e), l)) t.inert = !1;
        };
    }, [t]);
    let { project: d } = n,
        h = C.intl.formatToPlainString(B.default.pgxjO4, { app: d?.name ?? "" });
    return (0, e.jsxs)("div", {
        className: R.n,
        role: "dialog",
        "aria-label": h,
        children: [
            null != d ? (0, e.jsx)(c.A, { project: d, size: "dialog" }) : null,
            (0, e.jsxs)(i.B, {
                gap: 4,
                children: [
                    (0, e.jsx)(r.D, { variant: "heading-md/semibold", children: h }),
                    (0, e.jsx)(s.E, {
                        variant: "body-sm/normal",
                        color: "text-subtle",
                        children: C.intl.string(B.default.mbybxl),
                    }),
                ],
            }),
            null == d ? null : (0, e.jsx)(O, { project: d, sharing: n }),
        ],
    });
}
