n.d(e, { default: () => Q });
var l = n(477900),
    a = n(582128),
    i = n(594247),
    s = n(620409),
    r = n(314116),
    o = n(189213),
    d = n(331322),
    u = n(297264),
    c = n(834730),
    f = n(821609),
    m = n(289873),
    x = n(237528),
    g = n(739187),
    h = n(857250),
    j = n(97483),
    v = n(95477),
    b = n(441349),
    p = n(922016),
    C = n(980707),
    y = n(477782),
    S = n(866665),
    k = n(408278),
    w = n(365199),
    E = n(872162),
    M = n(192308),
    P = n(761508),
    T = n(188698),
    D = n(641245),
    N = n(476133),
    B = n(597331);
function I(t) {
    let [e, n] = a.useState(0),
        [l, i] = a.useState(null);
    a.useEffect(() => {
        let e = !1;
        return (
            t().then(
                (n) => {
                    e || i({ load: t, state: { status: "loaded", data: n, nowMs: Date.now() } });
                },
                () => {
                    e || i({ load: t, state: { status: "failed" } });
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, e]);
    let s = a.useCallback(() => {
            (i(null), n((t) => t + 1));
        }, []),
        r = a.useCallback(() => n((t) => t + 1), []);
    return { state: null != l && l.load === t ? l.state : { status: "loading" }, retry: s, refresh: r };
}
let R = [];
var Y = n(958284),
    z = n(248675),
    V = n(375708),
    L = n(247813);
function F(t) {
    let { title: e, body: n, onRetry: a } = t;
    return (0, l.jsx)("div", {
        className: L.wk,
        role: null != a ? "alert" : void 0,
        children: (0, l.jsxs)(d.B, {
            gap: 8,
            align: "center",
            children: [
                (0, l.jsx)(u.D, { variant: "heading-md/semibold", children: e }),
                (0, l.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: n }),
                null != a
                    ? (0, l.jsx)(f.$, {
                          variant: "secondary",
                          size: "sm",
                          text: V.intl.string(z.default.HOuQ9H),
                          onClick: a,
                      })
                    : null,
            ],
        }),
    });
}
function K() {
    return (0, l.jsx)("div", { className: L.wk, children: (0, l.jsx)(m.y, {}) });
}
function q(t) {
    let { items: e, getMs: n, nowMs: a, renderItem: i } = t;
    return (0, l.jsx)(d.B, {
        gap: 16,
        children: (0, T.v9)(e, n, a).map((t) =>
            (0, l.jsxs)(
                "section",
                {
                    "aria-label": t.label ?? void 0,
                    children: [
                        null != t.label
                            ? (0, l.jsx)(c.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  className: L.$l,
                                  children: t.label,
                              })
                            : null,
                        (0, l.jsx)("ul", { className: L.Ge, children: t.items.map(i) }),
                    ],
                },
                t.key,
            ),
        ),
    });
}
function G(t) {
    let { title: e, fullTitle: n, muted: a = !1, meta: i, trailing: s } = t;
    return (0, l.jsxs)("li", {
        className: L.nM,
        children: [
            (0, l.jsx)("div", {
                className: L.qg,
                children: (0, l.jsxs)(d.B, {
                    gap: 4,
                    children: [
                        (0, l.jsx)(c.E, {
                            variant: "text-md/medium",
                            color: a ? "text-muted" : "text-default",
                            title: null != n && n !== e ? n : void 0,
                            children: e,
                        }),
                        (0, l.jsx)(d.B, { direction: "horizontal", gap: 8, align: "center", children: i }),
                    ],
                }),
            }),
            s,
        ],
    });
}
function O(t) {
    let { versions: e, previewBackups: n, restoreDisabled: a, onRetry: i, onRestore: s } = t;
    if ("loading" === e.status) return (0, l.jsx)(K, {});
    if ("failed" === e.status)
        return (0, l.jsx)(F, {
            title: V.intl.string(z.default.Xduqn2),
            body: V.intl.string(z.default.TOFCh3),
            onRetry: i,
        });
    let { entries: r, previewSha: o, publishedSha: d } = e.data;
    return 0 === r.length
        ? (0, l.jsx)(F, { title: V.intl.string(z.default.MczNnb), body: V.intl.string(z.default["8L/U2T"]) })
        : (0, l.jsx)(q, {
              items: r,
              getMs: (t) => (0, T.YD)(t.authoredAt),
              nowMs: e.nowMs,
              renderItem: (t) => {
                  let e = (0, T.T4)(t.subject, !0 === t.restored),
                      i = (0, T.YD)(t.authoredAt),
                      r = t.sha === o;
                  return (0, l.jsx)(
                      G,
                      {
                          title: e.short,
                          fullTitle: e.full,
                          meta: (0, l.jsxs)(l.Fragment, {
                              children: [
                                  null != i
                                      ? (0, l.jsx)(c.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: (0, T.nY)(i),
                                        })
                                      : null,
                                  r
                                      ? (0, l.jsx)(x.v, {
                                            text: V.intl.string(z.default.KVnLPd),
                                            variant: "blurpleLight",
                                        })
                                      : null,
                                  t.sha === d
                                      ? (0, l.jsx)(x.v, {
                                            text: V.intl.string(z.default.qulPhb),
                                            variant: "greenLight",
                                        })
                                      : null,
                              ],
                          }),
                          trailing: r
                              ? null
                              : (0, l.jsx)(f.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: V.intl.string(z.default.K3Q49G),
                                    "aria-label": V.intl.formatToPlainString(z.default["hXP0m/"], { title: e.short }),
                                    disabled: a,
                                    onClick: () =>
                                        (0, Y.F)({ matchingBackup: (0, T.y0)(t, n), onConfirm: (e) => s(t, e) }),
                                }),
                      },
                      t.sha,
                  );
              },
          });
}
function X(t) {
    let { projectId: e, environment: n, targetMs: l, execute: a, onSettled: i } = t,
        s = V.intl.formatToPlainString(z.default.KfgzUO, { environment: (0, T.K1)(n), time: (0, T.p9)(l) });
    (0, r.A)({
        title: V.intl.string(z.default.rR8rgj),
        subtitle: "stable" === n ? `${V.intl.string(z.default.vMfqqk)} ${s}` : s,
        confirmText: V.intl.string(z.default.XfeFw5),
        variant: "critical",
        onConfirm: async (t) => {
            let n = await (0, N.b)(e, a);
            if (n.ok) {
                ((0, g.P)((0, h.o)(V.intl.string(z.default.yHchfE), j.Ck.SUCCESS)), i());
                return;
            }
            if ("unconfirmed" === n.code) {
                ((0, g.P)((0, h.o)(V.intl.string(z.default.iqN7YA), j.Ck.FAILURE)), i());
                return;
            }
            throw (
                "expired" === n.code && i(),
                t(V.intl.string("expired" === n.code ? z.default.a5pfx4 : z.default.uyjFNZ)),
                Error(`data rewind ${n.code}`)
            );
        },
    });
}
function A(t) {
    let { projectId: e, environment: n, onSaved: i, transitionState: s, onClose: r } = t,
        [d, u] = a.useState(""),
        [c, f] = a.useState(!1),
        [m, x] = a.useState(!1);
    return (0, l.jsx)(o.a, {
        transitionState: s,
        onClose: r,
        title: V.intl.string(z.default.qywOto),
        subtitle: V.intl.formatToPlainString(z.default.sXGNm5, { environment: (0, T.K1)(n) }),
        notice: m ? { message: V.intl.string(z.default.TOxYEF), type: "critical" } : void 0,
        actions: [
            { text: V.intl.string(V.t["ETE/oC"]), variant: "secondary", onClick: r },
            {
                text: V.intl.string(z.default["5/xCdF"]),
                variant: "primary",
                loading: c,
                onClick: function () {
                    (f(!0),
                        x(!1),
                        (0, D.x)(e, () => (0, B._m)(e, n, d))
                            .then((t) => {
                                if (null == t) throw Error("database busy");
                            })
                            .then(
                                () => {
                                    ((0, g.P)((0, h.o)(V.intl.string(z.default.OoHJfv), j.Ck.SUCCESS)), i(), r());
                                },
                                () => {
                                    (f(!1), x(!0));
                                },
                            ));
                },
            },
        ],
        children: (0, l.jsx)(v.k, {
            label: V.intl.string(z.default.WKmhsD),
            value: d,
            onChange: u,
            maxLength: 200,
            disabled: c,
        }),
    });
}
function $(t) {
    return (0, i.tR)((0, i.Bq)(new Date(t), (0, s.Xj)()));
}
function H(t) {
    let { projectId: e, environment: n, restoreWindow: i, onSettled: r, transitionState: d, onClose: u } = t,
        [c] = a.useState(() => Date.now()),
        [f, m] = a.useState(null),
        x = i.earliestRestoreTimestampMs,
        g = null != f ? f.toDate((0, s.Xj)()).getTime() : null,
        h = null != g && g >= x && g <= c;
    return (0, l.jsx)(o.a, {
        transitionState: d,
        onClose: u,
        title: V.intl.string(z.default.L2iFYN),
        subtitle: V.intl.formatToPlainString(z.default.MbjMdo, { days: 30 }),
        actions: [
            { text: V.intl.string(V.t["ETE/oC"]), variant: "secondary", onClick: u },
            {
                text: V.intl.string(z.default.vzbISt),
                variant: "critical-primary",
                disabled: !h,
                onClick: () => {
                    null != g &&
                        h &&
                        (u(),
                        X({
                            projectId: e,
                            environment: n,
                            targetMs: g,
                            execute: () => (0, B.dz)(e, n, g),
                            onSettled: r,
                        }));
                },
            },
        ],
        children: (0, l.jsx)(b.l, {
            label: V.intl.string(z.default["8lOVBi"]),
            granularity: "minute",
            value: f,
            onChange: m,
            minValue: $(x),
            maxValue: $(c),
            errorMessage: null == g || h ? void 0 : V.intl.formatToPlainString(z.default["E+5VOP"], { days: 30 }),
        }),
    });
}
function U(t) {
    let { rewindDisabled: e, onRewindToTime: n } = t,
        i = V.intl.string(z.default.ZoQDS5),
        s = a.useRef(null);
    return (0, l.jsx)(p.Y, {
        targetElementRef: s,
        position: "top",
        align: "left",
        animation: p.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: a } = t;
            return (0, l.jsx)(C.W, {
                navId: "conjure-history-more-options",
                "aria-label": i,
                onClose: a,
                onSelect: a,
                children: (0, l.jsx)(y.Dr, {
                    id: "rewind-to-time",
                    label: V.intl.string(z.default.Xi6pDt),
                    disabled: e,
                    action: n,
                }),
            });
        },
        children: (t, e) => {
            let { onClick: n } = t,
                { isShown: a } = e;
            return (0, l.jsx)("div", {
                ref: s,
                children: (0, l.jsx)(S.m, {
                    text: i,
                    children: (0, l.jsx)(k.K, {
                        icon: w.MoreHorizontalIcon,
                        variant: "secondary",
                        "aria-label": i,
                        "aria-haspopup": "menu",
                        "aria-expanded": a,
                        onClick: n,
                    }),
                }),
            });
        },
    });
}
function W(t) {
    let e,
        {
            environments: n,
            environment: a,
            onEnvironmentChange: i,
            backups: s,
            versionTitles: r,
            restoreDisabled: o,
            onRetry: u,
            onRestoreBackup: m,
        } = t;
    return (
        (e =
            "loading" === s.status
                ? (0, l.jsx)(K, {})
                : "failed" === s.status
                  ? (0, l.jsx)(F, {
                        title: V.intl.string(z.default.Xduqn2),
                        body: V.intl.string(z.default["VGh9H+"]),
                        onRetry: u,
                    })
                  : 0 === s.data.points.length
                    ? (0, l.jsx)(F, { title: V.intl.string(z.default.nvLRYG), body: V.intl.string(z.default.G2DTWl) })
                    : (0, l.jsx)(q, {
                          items: s.data.points,
                          getMs: (t) => (0, T.YD)(t.createdAt),
                          nowMs: s.nowMs,
                          renderItem: (t) => {
                              let e = (0, T.BV)(t),
                                  n = (0, T.YD)(t.createdAt),
                                  a = null != t.sourceSha ? r.get(t.sourceSha) : void 0;
                              return (0, l.jsx)(
                                  G,
                                  {
                                      title: e,
                                      muted: t.expired,
                                      meta: (0, l.jsx)(c.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: [
                                              null != n ? (0, T.nY)(n) : null,
                                              null != a
                                                  ? V.intl.formatToPlainString(z.default.V7YNvf, { title: a })
                                                  : null,
                                          ]
                                              .filter((t) => null != t)
                                              .join(" \xb7 "),
                                      }),
                                      trailing:
                                          t.expired || null == n
                                              ? (0, l.jsx)(c.E, {
                                                    variant: "text-sm/normal",
                                                    color: "text-muted",
                                                    children: V.intl.string(z.default.zPhIa9),
                                                })
                                              : (0, l.jsx)(f.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: V.intl.string(z.default.K3Q49G),
                                                    "aria-label": V.intl.formatToPlainString(z.default["hXP0m/"], {
                                                        title: e,
                                                    }),
                                                    disabled: o,
                                                    onClick: () => m(t, n),
                                                }),
                                  },
                                  t.id,
                              );
                          },
                      })),
        (0, l.jsxs)(d.B, {
            gap: 16,
            children: [
                n.length > 1
                    ? (0, l.jsx)(E.C, {
                          variant: "filter",
                          selectionMode: "single",
                          disallowEmptySelection: !0,
                          label: V.intl.string(z.default.k8NBLj),
                          items: n.map((t) => ({ id: t, label: (0, T.K1)(t) })),
                          selectedKeys: new Set([a]),
                          onSelectionChange: (t) => {
                              if ("all" === t) return;
                              let e = n.find((e) => t.has(e));
                              null != e && i(e);
                          },
                      })
                    : null,
                (0, l.jsx)(c.E, {
                    variant: "text-sm/normal",
                    color: "text-muted",
                    children: V.intl.formatToPlainString(z.default.ptsHZu, { days: 30 }),
                }),
                e,
            ],
        })
    );
}
function Q(t) {
    let { projectId: e, installScope: n, restoreDisabled: i, onRestoreVersion: s, transitionState: r, onClose: d } = t,
        [u, c] = a.useState("versions"),
        {
            environments: f,
            environment: m,
            setEnvironment: x,
            versions: g,
            previewBackups: h,
            previewBackupsLoading: j,
            backups: v,
            restoreWindow: b,
            refreshAllBackups: p,
            versionTitles: C,
        } = (function (t, e) {
            let n = a.useMemo(() => ("user" === e ? ["stable"] : ["preview", "stable"]), [e]),
                [l, i] = a.useState("stable"),
                s = I(a.useCallback(() => (0, B.Du)(t), [t])),
                r = n.includes("preview"),
                o = I(a.useCallback(() => (r ? (0, B.DM)(t, "preview") : Promise.resolve(R)), [t, r])),
                d = I(
                    a.useCallback(
                        () =>
                            Promise.all([(0, B.DM)(t, l), (0, B.ms)(t, l)]).then((t) => {
                                let [e, n] = t;
                                return { points: e, window: n };
                            }),
                        [t, l],
                    ),
                ),
                u = d.refresh,
                c = o.refresh,
                f = a.useCallback(() => {
                    (u(), c());
                }, [u, c]),
                m = s.state,
                x = a.useMemo(() => {
                    let t = new Map();
                    if ("loaded" === m.status) for (let e of m.data.entries) t.set(e.sha, (0, T.T4)(e.subject).short);
                    return t;
                }, [m]);
            return {
                environments: n,
                environment: l,
                setEnvironment: i,
                versions: s,
                previewBackups: "loaded" === o.state.status ? o.state.data : R,
                previewBackupsLoading: "loading" === o.state.status,
                backups: d,
                restoreWindow: "loaded" === d.state.status ? d.state.data.window : null,
                refreshAllBackups: f,
                versionTitles: x,
            };
        })(e, n),
        y = (0, D.u)(e),
        S = a.useCallback(
            (t, e) => {
                (d(), s(t, e));
            },
            [d, s],
        ),
        k = a.useCallback(
            (t, n) => {
                X({
                    projectId: e,
                    environment: t.environment,
                    targetMs: n,
                    execute: () => (0, B.$D)(e, t.id),
                    onSettled: p,
                });
            },
            [e, p],
        ),
        w = a.useCallback(() => {
            null != b &&
                (0, M.openModalLazy)(() =>
                    Promise.resolve((t) =>
                        (0, l.jsx)(H, { ...t, projectId: e, environment: m, restoreWindow: b, onSettled: p }),
                    ),
                );
        }, [b, e, m, p]),
        E =
            "database" === u
                ? [
                      {
                          text: V.intl.string(z.default.uNd2Je),
                          variant: "primary",
                          autoFocus: !1,
                          disabled: "failed" === v.state.status || y,
                          onClick: () => {
                              (0, M.openModalLazy)(() =>
                                  Promise.resolve((t) =>
                                      (0, l.jsx)(A, { ...t, projectId: e, environment: m, onSaved: p }),
                                  ),
                              );
                          },
                      },
                  ]
                : [];
    return (0, l.jsxs)(o.a, {
        transitionState: r,
        onClose: d,
        size: "md",
        title: V.intl.string(z.default["3hIVou"]),
        actionBarInput:
            "database" === u ? (0, l.jsx)(U, { rewindDisabled: null == b || y, onRewindToTime: w }) : void 0,
        actions: E,
        children: [
            (0, l.jsxs)(P.V, {
                type: "top",
                selectedItem: u,
                onItemSelect: c,
                "aria-label": V.intl.string(z.default["/2GnYy"]),
                children: [
                    (0, l.jsx)(P.V.Item, { id: "versions", children: V.intl.string(z.default.aEg2bh) }),
                    (0, l.jsx)(P.V.Item, { id: "database", children: V.intl.string(z.default["GSu/n6"]) }),
                ],
            }),
            (0, l.jsx)(P.V.Panel, {
                id: u,
                className: L.nd,
                children:
                    "versions" === u
                        ? (0, l.jsx)(O, {
                              versions: g.state,
                              previewBackups: h,
                              restoreDisabled: i || j || y,
                              onRetry: g.retry,
                              onRestore: S,
                          })
                        : (0, l.jsx)(W, {
                              environments: f,
                              environment: m,
                              onEnvironmentChange: x,
                              backups: v.state,
                              versionTitles: C,
                              onRetry: v.retry,
                              restoreDisabled: y,
                              onRestoreBackup: k,
                          }),
            }),
        ],
    });
}
