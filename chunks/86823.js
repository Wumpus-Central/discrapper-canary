n.d(e, { default: () => _ });
var l = n(477900),
    a = n(582128),
    i = n(594247),
    s = n(620409),
    r = n(314116),
    o = n(189213),
    d = n(331322),
    u = n(297264),
    c = n(834730),
    m = n(821609),
    f = n(289873),
    x = n(237528),
    g = n(739187),
    h = n(857250),
    v = n(97483),
    j = n(95477),
    p = n(441349),
    b = n(922016),
    C = n(980707),
    S = n(477782),
    w = n(866665),
    k = n(408278),
    y = n(365199),
    E = n(872162),
    M = n(192308),
    P = n(761508),
    R = n(188698),
    D = n(641245),
    T = n(476133),
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
let z = [];
var N = n(958284),
    V = n(248675),
    L = n(375708),
    Y = n(247813);
function F(t) {
    let { title: e, body: n, onRetry: a } = t;
    return (0, l.jsx)("div", {
        className: Y.wk,
        role: null != a ? "alert" : void 0,
        children: (0, l.jsxs)(d.B, {
            gap: 8,
            align: "center",
            children: [
                (0, l.jsx)(u.D, { variant: "heading-md/semibold", children: e }),
                (0, l.jsx)(c.E, { variant: "text-sm/normal", color: "text-muted", children: n }),
                null != a
                    ? (0, l.jsx)(m.$, {
                          variant: "secondary",
                          size: "sm",
                          text: L.intl.string(V.default.inZDNR),
                          onClick: a,
                      })
                    : null,
            ],
        }),
    });
}
function X() {
    return (0, l.jsx)("div", { className: Y.wk, children: (0, l.jsx)(f.y, {}) });
}
function A(t) {
    let { items: e, getMs: n, nowMs: a, renderItem: i } = t;
    return (0, l.jsx)(d.B, {
        gap: 16,
        children: (0, R.v9)(e, n, a).map((t) =>
            (0, l.jsxs)(
                "section",
                {
                    "aria-label": t.label ?? void 0,
                    children: [
                        null != t.label
                            ? (0, l.jsx)(c.E, {
                                  variant: "text-xs/semibold",
                                  color: "text-muted",
                                  className: Y.$l,
                                  children: t.label,
                              })
                            : null,
                        (0, l.jsx)("ul", { className: Y.Ge, children: t.items.map(i) }),
                    ],
                },
                t.key,
            ),
        ),
    });
}
function K(t) {
    let { title: e, fullTitle: n, muted: a = !1, meta: i, trailing: s } = t;
    return (0, l.jsxs)("li", {
        className: Y.nM,
        children: [
            (0, l.jsx)("div", {
                className: Y.qg,
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
function U(t) {
    let { versions: e, previewBackups: n, restoreDisabled: a, onRetry: i, onRestore: s } = t;
    if ("loading" === e.status) return (0, l.jsx)(X, {});
    if ("failed" === e.status)
        return (0, l.jsx)(F, {
            title: L.intl.string(V.default.wreXF8),
            body: L.intl.string(V.default["9msAg+"]),
            onRetry: i,
        });
    let { entries: r, previewSha: o, publishedSha: d } = e.data;
    return 0 === r.length
        ? (0, l.jsx)(F, { title: L.intl.string(V.default.b0VCzz), body: L.intl.string(V.default.qK4iRl) })
        : (0, l.jsx)(A, {
              items: r,
              getMs: (t) => (0, R.YD)(t.authoredAt),
              nowMs: e.nowMs,
              renderItem: (t) => {
                  let e = (0, R.T4)(t.subject, !0 === t.restored),
                      i = (0, R.YD)(t.authoredAt),
                      r = t.sha === o;
                  return (0, l.jsx)(
                      K,
                      {
                          title: e.short,
                          fullTitle: e.full,
                          meta: (0, l.jsxs)(l.Fragment, {
                              children: [
                                  null != i
                                      ? (0, l.jsx)(c.E, {
                                            variant: "text-sm/normal",
                                            color: "text-muted",
                                            children: (0, R.nY)(i),
                                        })
                                      : null,
                                  r
                                      ? (0, l.jsx)(x.v, {
                                            text: L.intl.string(V.default.p9o9Bn),
                                            variant: "blurpleLight",
                                        })
                                      : null,
                                  t.sha === d
                                      ? (0, l.jsx)(x.v, {
                                            text: L.intl.string(V.default.sgu3s0),
                                            variant: "greenLight",
                                        })
                                      : null,
                              ],
                          }),
                          trailing: r
                              ? null
                              : (0, l.jsx)(m.$, {
                                    variant: "secondary",
                                    size: "sm",
                                    text: L.intl.string(V.default.HRwmHd),
                                    "aria-label": L.intl.formatToPlainString(V.default.vLxgyn, { title: e.short }),
                                    disabled: a,
                                    onClick: () =>
                                        (0, N.F)({ matchingBackup: (0, R.y0)(t, n), onConfirm: (e) => s(t, e) }),
                                }),
                      },
                      t.sha,
                  );
              },
          });
}
function $(t) {
    let { projectId: e, environment: n, targetMs: l, execute: a, onSettled: i } = t,
        s = L.intl.formatToPlainString(V.default.iDUC4z, { environment: (0, R.K1)(n), time: (0, R.p9)(l) });
    (0, r.A)({
        title: L.intl.string(V.default.tIpnIV),
        subtitle: "stable" === n ? `${L.intl.string(V.default.bNg9lp)} ${s}` : s,
        confirmText: L.intl.string(V.default.od8SSP),
        variant: "critical",
        onConfirm: async (t) => {
            let n = await (0, T.W)(e, a);
            if (n.ok) {
                ((0, g.P)((0, h.o)(L.intl.string(V.default.qumxHM), v.Ck.SUCCESS)), i());
                return;
            }
            if ("unconfirmed" === n.code) {
                ((0, g.P)((0, h.o)(L.intl.string(V.default["2xSPXh"]), v.Ck.FAILURE)), i());
                return;
            }
            throw (
                "expired" === n.code && i(),
                t(L.intl.string("expired" === n.code ? V.default["Yz433/"] : V.default.kXofol)),
                Error(`data rewind ${n.code}`)
            );
        },
    });
}
function H(t) {
    let { projectId: e, environment: n, onSaved: i, transitionState: s, onClose: r } = t,
        [d, u] = a.useState(""),
        [c, m] = a.useState(!1),
        [f, x] = a.useState(!1);
    return (0, l.jsx)(o.a, {
        transitionState: s,
        onClose: r,
        title: L.intl.string(V.default["5pw1pS"]),
        subtitle: L.intl.formatToPlainString(V.default.ItF01S, { environment: (0, R.K1)(n) }),
        notice: f ? { message: L.intl.string(V.default.LKReJO), type: "critical" } : void 0,
        actions: [
            { text: L.intl.string(L.t["ETE/oC"]), variant: "secondary", onClick: r },
            {
                text: L.intl.string(V.default.Bpyo6W),
                variant: "primary",
                loading: c,
                onClick: function () {
                    (m(!0),
                        x(!1),
                        (0, D.Q)(e, () => (0, B._m)(e, n, d))
                            .then((t) => {
                                if (null == t) throw Error("database busy");
                            })
                            .then(
                                () => {
                                    ((0, g.P)((0, h.o)(L.intl.string(V.default.qPv8cC), v.Ck.SUCCESS)), i(), r());
                                },
                                () => {
                                    (m(!1), x(!0));
                                },
                            ));
                },
            },
        ],
        children: (0, l.jsx)(j.k, {
            label: L.intl.string(V.default.OzfUSX),
            value: d,
            onChange: u,
            maxLength: 200,
            disabled: c,
        }),
    });
}
function W(t) {
    return (0, i.tR)((0, i.Bq)(new Date(t), (0, s.Xj)()));
}
function q(t) {
    let { projectId: e, environment: n, restoreWindow: i, onSettled: r, transitionState: d, onClose: u } = t,
        [c] = a.useState(() => Date.now()),
        [m, f] = a.useState(null),
        x = i.earliestRestoreTimestampMs,
        g = null != m ? m.toDate((0, s.Xj)()).getTime() : null,
        h = null != g && g >= x && g <= c;
    return (0, l.jsx)(o.a, {
        transitionState: d,
        onClose: u,
        title: L.intl.string(V.default.fRsBRV),
        subtitle: L.intl.formatToPlainString(V.default["iJw/ws"], { days: 30 }),
        actions: [
            { text: L.intl.string(L.t["ETE/oC"]), variant: "secondary", onClick: u },
            {
                text: L.intl.string(V.default["Qv/coU"]),
                variant: "critical-primary",
                disabled: !h,
                onClick: () => {
                    null != g &&
                        h &&
                        (u(),
                        $({
                            projectId: e,
                            environment: n,
                            targetMs: g,
                            execute: () => (0, B.dz)(e, n, g),
                            onSettled: r,
                        }));
                },
            },
        ],
        children: (0, l.jsx)(p.l, {
            label: L.intl.string(V.default.i4OahU),
            granularity: "minute",
            value: m,
            onChange: f,
            minValue: W(x),
            maxValue: W(c),
            errorMessage: null == g || h ? void 0 : L.intl.formatToPlainString(V.default.NpCPnt, { days: 30 }),
        }),
    });
}
function O(t) {
    let { rewindDisabled: e, onRewindToTime: n } = t,
        i = L.intl.string(V.default.UWXeC7),
        s = a.useRef(null);
    return (0, l.jsx)(b.Y, {
        targetElementRef: s,
        position: "top",
        align: "left",
        animation: b.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: a } = t;
            return (0, l.jsx)(C.W, {
                navId: "vibegrations-history-more-options",
                "aria-label": i,
                onClose: a,
                onSelect: a,
                children: (0, l.jsx)(S.Dr, {
                    id: "rewind-to-time",
                    label: L.intl.string(V.default["+Hu37Q"]),
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
                children: (0, l.jsx)(w.m, {
                    text: i,
                    children: (0, l.jsx)(k.K, {
                        icon: y.MoreHorizontalIcon,
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
function Q(t) {
    let e,
        {
            environments: n,
            environment: a,
            onEnvironmentChange: i,
            backups: s,
            versionTitles: r,
            restoreDisabled: o,
            onRetry: u,
            onRestoreBackup: f,
        } = t;
    return (
        (e =
            "loading" === s.status
                ? (0, l.jsx)(X, {})
                : "failed" === s.status
                  ? (0, l.jsx)(F, {
                        title: L.intl.string(V.default.wreXF8),
                        body: L.intl.string(V.default.KEesRL),
                        onRetry: u,
                    })
                  : 0 === s.data.points.length
                    ? (0, l.jsx)(F, {
                          title: L.intl.string(V.default["3C8ZzS"]),
                          body: L.intl.string(V.default.eudxh5),
                      })
                    : (0, l.jsx)(A, {
                          items: s.data.points,
                          getMs: (t) => (0, R.YD)(t.createdAt),
                          nowMs: s.nowMs,
                          renderItem: (t) => {
                              let e = (0, R.BV)(t),
                                  n = (0, R.YD)(t.createdAt),
                                  a = null != t.sourceSha ? r.get(t.sourceSha) : void 0;
                              return (0, l.jsx)(
                                  K,
                                  {
                                      title: e,
                                      muted: t.expired,
                                      meta: (0, l.jsx)(c.E, {
                                          variant: "text-sm/normal",
                                          color: "text-muted",
                                          children: [
                                              null != n ? (0, R.nY)(n) : null,
                                              null != a
                                                  ? L.intl.formatToPlainString(V.default["koj/GO"], { title: a })
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
                                                    children: L.intl.string(V.default["9t+o3n"]),
                                                })
                                              : (0, l.jsx)(m.$, {
                                                    variant: "secondary",
                                                    size: "sm",
                                                    text: L.intl.string(V.default.HRwmHd),
                                                    "aria-label": L.intl.formatToPlainString(V.default.vLxgyn, {
                                                        title: e,
                                                    }),
                                                    disabled: o,
                                                    onClick: () => f(t, n),
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
                          label: L.intl.string(V.default["3dFV+F"]),
                          items: n.map((t) => ({ id: t, label: (0, R.K1)(t) })),
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
                    children: L.intl.formatToPlainString(V.default["ddx7d+"], { days: 30 }),
                }),
                e,
            ],
        })
    );
}
function _(t) {
    let { projectId: e, installScope: n, restoreDisabled: i, onRestoreVersion: s, transitionState: r, onClose: d } = t,
        [u, c] = a.useState("versions"),
        {
            environments: m,
            environment: f,
            setEnvironment: x,
            versions: g,
            previewBackups: h,
            previewBackupsLoading: v,
            backups: j,
            restoreWindow: p,
            refreshAllBackups: b,
            versionTitles: C,
        } = (function (t, e) {
            let n = a.useMemo(() => ("user" === e ? ["stable"] : ["preview", "stable"]), [e]),
                [l, i] = a.useState("stable"),
                s = I(a.useCallback(() => (0, B.Du)(t), [t])),
                r = n.includes("preview"),
                o = I(a.useCallback(() => (r ? (0, B.DM)(t, "preview") : Promise.resolve(z)), [t, r])),
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
                m = a.useCallback(() => {
                    (u(), c());
                }, [u, c]),
                f = s.state,
                x = a.useMemo(() => {
                    let t = new Map();
                    if ("loaded" === f.status) for (let e of f.data.entries) t.set(e.sha, (0, R.T4)(e.subject).short);
                    return t;
                }, [f]);
            return {
                environments: n,
                environment: l,
                setEnvironment: i,
                versions: s,
                previewBackups: "loaded" === o.state.status ? o.state.data : z,
                previewBackupsLoading: "loading" === o.state.status,
                backups: d,
                restoreWindow: "loaded" === d.state.status ? d.state.data.window : null,
                refreshAllBackups: m,
                versionTitles: x,
            };
        })(e, n),
        S = (0, D.l)(e),
        w = a.useCallback(
            (t, e) => {
                (d(), s(t, e));
            },
            [d, s],
        ),
        k = a.useCallback(
            (t, n) => {
                $({
                    projectId: e,
                    environment: t.environment,
                    targetMs: n,
                    execute: () => (0, B.$D)(e, t.id),
                    onSettled: b,
                });
            },
            [e, b],
        ),
        y = a.useCallback(() => {
            null != p &&
                (0, M.openModalLazy)(() =>
                    Promise.resolve((t) =>
                        (0, l.jsx)(q, { ...t, projectId: e, environment: f, restoreWindow: p, onSettled: b }),
                    ),
                );
        }, [p, e, f, b]),
        E =
            "database" === u
                ? [
                      {
                          text: L.intl.string(V.default.gdfVSI),
                          variant: "primary",
                          autoFocus: !1,
                          disabled: "failed" === j.state.status || S,
                          onClick: () => {
                              (0, M.openModalLazy)(() =>
                                  Promise.resolve((t) =>
                                      (0, l.jsx)(H, { ...t, projectId: e, environment: f, onSaved: b }),
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
        title: L.intl.string(V.default.QapR0u),
        actionBarInput:
            "database" === u ? (0, l.jsx)(O, { rewindDisabled: null == p || S, onRewindToTime: y }) : void 0,
        actions: E,
        children: [
            (0, l.jsxs)(P.V, {
                type: "top",
                selectedItem: u,
                onItemSelect: c,
                "aria-label": L.intl.string(V.default["lwk+Y5"]),
                children: [
                    (0, l.jsx)(P.V.Item, { id: "versions", children: L.intl.string(V.default.xrXg3C) }),
                    (0, l.jsx)(P.V.Item, { id: "database", children: L.intl.string(V.default.ioigYm) }),
                ],
            }),
            (0, l.jsx)(P.V.Panel, {
                id: u,
                className: Y.nd,
                children:
                    "versions" === u
                        ? (0, l.jsx)(U, {
                              versions: g.state,
                              previewBackups: h,
                              restoreDisabled: i || v || S,
                              onRetry: g.retry,
                              onRestore: w,
                          })
                        : (0, l.jsx)(Q, {
                              environments: m,
                              environment: f,
                              onEnvironmentChange: x,
                              backups: j.state,
                              versionTitles: C,
                              onRetry: j.retry,
                              restoreDisabled: S,
                              onRestoreBackup: k,
                          }),
            }),
        ],
    });
}
