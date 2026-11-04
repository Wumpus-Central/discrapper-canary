a.d(e, { default: () => tl });
var n = a(477900),
    l = a(582128),
    s = a(594247),
    i = a(70254),
    r = a(314116),
    d = a(189213),
    o = a(331322),
    u = a(534514),
    c = a(834730),
    m = a(821609),
    f = a(289873),
    h = a(866665),
    x = a(237528),
    g = a(858899),
    j = a(95477),
    b = a(441349),
    v = a(192308),
    p = a(123292),
    y = a(265872),
    C = a(165862),
    w = a(477782),
    k = a(408278),
    S = a(365199),
    E = a(761508),
    P = a(502707),
    T = a(128761),
    N = a(395592),
    M = a(503922),
    D = a(967008);
function I(t) {
    let [e, a] = l.useState(0),
        [n, s] = l.useState(null);
    l.useEffect(() => {
        let e = !1;
        return (
            t().then(
                (a) => {
                    e || s({ load: t, state: { status: "loaded", data: a, nowMs: Date.now() } });
                },
                () => {
                    e || s({ load: t, state: { status: "failed" } });
                },
            ),
            () => {
                e = !0;
            }
        );
    }, [t, e]);
    let i = l.useCallback(() => {
            (s(null), a((t) => t + 1));
        }, []),
        r = l.useCallback(() => a((t) => t + 1), []);
    return { state: null != n && n.load === t ? n.state : { status: "loading" }, retry: i, refresh: r };
}
let B = [];
var z = a(908492);
(a(134528), a(947204));
var L = a(536637),
    $ = a.n(L),
    H = a(688954),
    A = a(191850),
    O = a(792996),
    R = a(131270),
    V = a(165648);
function q(t) {
    let e,
        a,
        s,
        { projectId: i, id: r, notesCache: d } = t,
        { state: u, retry: f } =
            ((e = `${i}/${r}`),
            (a = I(
                l.useCallback(() => {
                    let t = d.get(e);
                    if (t?.status === "loaded") return Promise.resolve(t.data);
                    if (t?.status === "loading") return t.promise;
                    let a = (async function (t, e) {
                        let a = await (0, H.h)(t, `/agent/publish-history/${encodeURIComponent(e)}/notes`, {
                            method: "POST",
                        });
                        if (!a.ok) throw Error(`publish history notes failed (${a.status})`);
                        return (await a.json()).notes;
                    })(i, r).then(
                        (t) => (d.set(e, { status: "loaded", data: t, nowMs: Date.now() }), t),
                        (t) => {
                            throw (d.delete(e), t);
                        },
                    );
                    return (d.set(e, { status: "loading", promise: a }), a);
                }, [i, r, d, e]),
            )),
            (s = d.get(e)),
            { ...a, state: s?.status === "loaded" ? s : a.state });
    if ("failed" === u.status)
        return (0, n.jsxs)(o.B, {
            gap: 8,
            children: [
                (0, n.jsx)(c.E, {
                    variant: "body-sm/normal",
                    color: "text-muted",
                    children: O.intl.string(A.default.cBIaeW),
                }),
                (0, n.jsx)(m.$, {
                    variant: "secondary",
                    size: "sm",
                    text: O.intl.string(A.default.HOuQ9H),
                    onClick: f,
                }),
            ],
        });
    let h = "loaded" === u.status ? u.data : null;
    return (0, n.jsx)("div", {
        role: "status",
        className: R.Q2,
        children: (0, n.jsx)(c.E, {
            variant: "body-sm/normal",
            className: V.PT,
            children:
                "loading" === u.status
                    ? O.intl.string(A.default["LmWLc+"])
                    : null == h
                      ? O.intl.string(A.default.hcrQOo)
                      : "" === h
                        ? O.intl.string(A.default["0bDcBs"])
                        : (0, z.U)(h, !0, { allowList: !0, allowHeading: !0, allowLinks: !1 }),
        }),
    });
}
let G = l.memo(function (t) {
    var e;
    let { projectId: a, entry: s, notesCache: i } = t,
        [r, d] = l.useState(!1),
        u = l.useId(),
        f = ((e = s.publishedAt), O.intl.formatToPlainString(A.default["/spQzC"], { date: $()(e).format("LLL") }));
    return (0, n.jsx)("li", {
        className: R.f_,
        children: (0, n.jsxs)(o.B, {
            gap: 12,
            children: [
                (0, n.jsx)(c.E, { variant: "body-md/medium", children: f }),
                (0, n.jsx)(m.$, {
                    variant: "secondary",
                    size: "sm",
                    text: O.intl.string(r ? A.default["Qro2x/"] : A.default.ufHcsq),
                    "aria-label": O.intl.formatToPlainString(A.default["M9L+3I"], { title: f }),
                    "aria-expanded": r,
                    "aria-controls": u,
                    onClick: () => d((t) => !t),
                }),
                (0, n.jsx)("div", {
                    id: u,
                    hidden: !r,
                    children: r ? (0, n.jsx)(q, { projectId: a, id: s.id, notesCache: i }) : null,
                }),
            ],
        }),
    });
});
function K(t) {
    let { projectId: e } = t,
        a = (function (t) {
            let e = l.useMemo(() => new Map(), []),
                [a, n] = l.useState([null]),
                s = a.at(-1) ?? null,
                i = I(
                    l.useCallback(
                        () =>
                            (async function (t, e) {
                                let a = await (0, H.h)(t, "/agent/publish-history", {
                                    query: null == e ? void 0 : { before: e },
                                });
                                if (!a.ok) throw Error(`publish history failed (${a.status})`);
                                return await a.json();
                            })(t, s),
                        [t, s],
                    ),
                ),
                r = "loaded" === i.state.status ? i.state.data.nextCursor : null;
            return {
                state: i.state,
                notesCache: e,
                page: a.length,
                hasPrevious: a.length > 1,
                hasNext: null != r,
                previous: () => n((t) => (t.length > 1 ? t.slice(0, -1) : t)),
                next: () => {
                    null != r && n((t) => [...t, r]);
                },
                retry: () => {
                    (n([null]), i.retry());
                },
            };
        })(e),
        { state: s } = a;
    return "loading" === s.status
        ? (0, n.jsx)(c.E, { variant: "body-sm/normal", children: O.intl.string(A.default["d/Wf8N"]) })
        : "failed" === s.status
          ? (0, n.jsxs)(o.B, {
                gap: 12,
                children: [
                    (0, n.jsx)(c.E, { variant: "body-sm/normal", children: O.intl.string(A.default.TzCJWI) }),
                    (0, n.jsx)(m.$, { variant: "secondary", text: O.intl.string(A.default.HOuQ9H), onClick: a.retry }),
                ],
            })
          : 0 === s.data.entries.length
            ? (0, n.jsx)(c.E, {
                  variant: "body-sm/normal",
                  color: "text-muted",
                  children: O.intl.string(A.default["19L92G"]),
              })
            : (0, n.jsxs)(o.B, {
                  gap: 16,
                  children: [
                      (0, n.jsx)(c.E, {
                          variant: "body-sm/normal",
                          color: "text-muted",
                          children: O.intl.string(A.default.Kzt1rI),
                      }),
                      (0, n.jsx)("ul", {
                          className: R.jO,
                          children: s.data.entries.map((t) =>
                              (0, n.jsx)(G, { projectId: e, entry: t, notesCache: a.notesCache }, t.id),
                          ),
                      }),
                      (0, n.jsxs)("nav", {
                          className: R.X$,
                          "aria-label": O.intl.string(A.default.uMdX5T),
                          children: [
                              (0, n.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: O.intl.string(A.default["4un98A"]),
                                  disabled: !a.hasPrevious,
                                  onClick: a.previous,
                              }),
                              (0, n.jsx)(c.E, {
                                  variant: "body-sm/normal",
                                  children: O.intl.formatToPlainString(A.default["54samz"], { page: a.page }),
                              }),
                              (0, n.jsx)(m.$, {
                                  variant: "secondary",
                                  size: "sm",
                                  text: O.intl.string(A.default.HqheLL),
                                  disabled: !a.hasNext,
                                  onClick: a.next,
                              }),
                          ],
                      }),
                  ],
              });
}
var Q = a(155899),
    W = a(796734);
function X(t) {
    let { title: e, body: a, onRetry: l } = t;
    return (0, n.jsx)("div", {
        className: W.wk,
        role: null != l ? "alert" : void 0,
        children: (0, n.jsxs)(o.B, {
            gap: 8,
            align: "center",
            children: [
                (0, n.jsx)(u.D, { variant: "heading-sm/semibold", children: e }),
                (0, n.jsx)(c.E, { variant: "body-sm/normal", color: "text-muted", children: a }),
                null != l
                    ? (0, n.jsx)(m.$, {
                          variant: "secondary",
                          size: "sm",
                          text: O.intl.string(A.default.HOuQ9H),
                          onClick: l,
                      })
                    : null,
            ],
        }),
    });
}
function Y() {
    return (0, n.jsx)("div", { className: W.wk, children: (0, n.jsx)(f.y, {}) });
}
function F(t) {
    let { items: e, getMs: a, nowMs: l, renderItem: s } = t;
    return (0, n.jsx)(o.B, {
        gap: 16,
        children: (0, T.v9)(e, a, l).map((t) =>
            (0, n.jsxs)(
                "section",
                {
                    "aria-label": t.label ?? void 0,
                    children: [
                        null != t.label
                            ? (0, n.jsx)(c.E, {
                                  variant: "body-xs/semibold",
                                  color: "text-muted",
                                  className: W.$l,
                                  children: t.label,
                              })
                            : null,
                        (0, n.jsx)("ul", { className: W.Ge, children: t.items.map(s) }),
                    ],
                },
                t.key,
            ),
        ),
    });
}
function _(t) {
    let { title: e, fullTitle: a, muted: l = !1, meta: s, trailing: i } = t;
    return (0, n.jsxs)("li", {
        className: W.nM,
        children: [
            (0, n.jsx)("div", {
                className: W.qg,
                children: (0, n.jsxs)(o.B, {
                    gap: 4,
                    children: [
                        (0, n.jsx)(h.m, {
                            text: null != a && a !== e ? a : null,
                            children: (0, n.jsx)(c.E, {
                                variant: "body-md/medium",
                                color: l ? "text-muted" : "text-default",
                                children: e,
                            }),
                        }),
                        (0, n.jsx)(o.B, { direction: "horizontal", gap: 8, align: "center", children: s }),
                    ],
                }),
            }),
            i,
        ],
    });
}
function J(t) {
    let { versions: e, previewBackups: a, restoreDisabled: l, showsPublishState: s, onRetry: i, onRestore: r } = t;
    if ("loading" === e.status) return (0, n.jsx)(Y, {});
    if ("failed" === e.status)
        return (0, n.jsx)(X, {
            title: O.intl.string(A.default.Xduqn2),
            body: O.intl.string(A.default.TOFCh3),
            onRetry: i,
        });
    let { entries: d, publishedSha: o } = e.data,
        u = (0, T.FA)(e.data);
    return 0 === d.length
        ? (0, n.jsx)(X, { title: O.intl.string(A.default.MczNnb), body: O.intl.string(A.default["8L/U2T"]) })
        : (0, n.jsx)(F, {
              items: d,
              getMs: (t) => (0, T.YD)(t.authoredAt),
              nowMs: e.nowMs,
              renderItem: (t) => {
                  let e = (0, T.T4)(t.subject, !0 === t.restored),
                      i = (0, T.YD)(t.authoredAt),
                      d = t.sha === u;
                  return (0, n.jsx)(
                      _,
                      {
                          title: e.short,
                          fullTitle: e.full,
                          meta: (0, n.jsxs)(n.Fragment, {
                              children: [
                                  null != i
                                      ? (0, n.jsx)(c.E, {
                                            variant: "body-sm/normal",
                                            color: "text-muted",
                                            children: (0, T.nY)(i),
                                        })
                                      : null,
                                  s && d
                                      ? (0, n.jsx)(x.v, {
                                            text: O.intl.string(A.default.KVnLPd),
                                            variant: "blurpleLight",
                                        })
                                      : null,
                                  s && t.sha === o
                                      ? (0, n.jsx)(x.v, {
                                            text: O.intl.string(A.default.qulPhb),
                                            variant: "greenLight",
                                        })
                                      : null,
                              ],
                          }),
                          trailing:
                              d || !1 === t.restorable
                                  ? null
                                  : (0, n.jsx)(m.$, {
                                        variant: "secondary",
                                        size: "sm",
                                        text: O.intl.string(A.default["1NAPyC"]),
                                        "aria-label": O.intl.formatToPlainString(A.default["2KgEnm"], {
                                            title: e.short,
                                        }),
                                        disabled: l,
                                        onClick: () =>
                                            (0, Q.F)({ matchingBackup: (0, T.y0)(t, a), onConfirm: (e) => r(t, e) }),
                                    }),
                      },
                      t.sha,
                  );
              },
          });
}
function U(t) {
    let { projectId: e, environment: a, targetMs: n, execute: l, onSettled: s } = t,
        i = (0, T.Nc)(a, n);
    (0, r.A)({
        title: i.title,
        subtitle: i.body,
        confirmText: i.confirmText,
        variant: i.critical ? "critical" : "primary",
        onConfirm: async (t) => {
            let a = await (0, D.b)(e, l);
            if (a.ok) {
                ((0, g.P0)({ text: O.intl.string(A.default.yHchfE), variant: "success" }), s());
                return;
            }
            if ("unconfirmed" === a.code) {
                ((0, g.P0)({ text: O.intl.string(A.default.iqN7YA), variant: "critical" }), s());
                return;
            }
            throw (
                "expired" === a.code && s(),
                t(O.intl.string("expired" === a.code ? A.default.a5pfx4 : A.default.uyjFNZ)),
                Error(`data rewind ${a.code}`)
            );
        },
    });
}
function Z(t) {
    let { projectId: e, environment: a, onSaved: s, transitionState: i, onClose: r } = t,
        [o, u] = l.useState(""),
        [c, m] = l.useState(!1),
        [f, h] = l.useState(!1);
    return (0, n.jsx)(d.a, {
        transitionState: i,
        onClose: r,
        title: O.intl.string(A.default.qywOto),
        subtitle: O.intl.formatToPlainString(A.default.sXGNm5, { environment: (0, T.K1)(a) }),
        notice: f ? { message: O.intl.string(A.default.TOxYEF), type: "critical", role: "alert" } : void 0,
        actions: [
            { text: O.intl.string(O.t["ETE/oC"]), variant: "secondary", onClick: r },
            {
                text: O.intl.string(A.default["5/xCdF"]),
                variant: "primary",
                loading: c,
                onClick: function () {
                    (m(!0),
                        h(!1),
                        (0, N.x)(e, () => (0, M._m)(e, a, o))
                            .then((t) => {
                                if (null == t) throw Error("database busy");
                            })
                            .then(
                                () => {
                                    ((0, g.P0)({ text: O.intl.string(A.default.OoHJfv), variant: "success" }),
                                        s(),
                                        r());
                                },
                                () => {
                                    (m(!1), h(!0));
                                },
                            ));
                },
            },
        ],
        children: (0, n.jsx)(j.k, {
            label: O.intl.string(A.default.WKmhsD),
            value: o,
            onChange: u,
            maxLength: 200,
            disabled: c,
        }),
    });
}
function tt(t) {
    return (0, s.tR)((0, s.Bq)(new Date(t), (0, i.Xj)()));
}
function te(t) {
    let { projectId: e, environment: a, restoreWindow: r, onSettled: o, transitionState: u, onClose: c } = t,
        [m] = l.useState(() => Date.now()),
        [f, h] = l.useState(null),
        x = r.earliestRestoreTimestampMs,
        g = null != f ? f.toDate((0, i.Xj)()).getTime() : null,
        j = null != g && g >= x && g <= m;
    return (0, n.jsx)(d.a, {
        transitionState: u,
        onClose: c,
        title: O.intl.string(A.default.L2iFYN),
        subtitle: O.intl.formatToPlainString(A.default.MbjMdo, { days: 30 }),
        actions: [
            { text: O.intl.string(O.t["ETE/oC"]), variant: "secondary", onClick: c },
            {
                text: O.intl.string(A.default.vzbISt),
                variant: "critical-primary",
                disabled: !j,
                onClick: () => {
                    null != g &&
                        j &&
                        (c(),
                        U({
                            projectId: e,
                            environment: a,
                            targetMs: g,
                            execute: () => (0, M.dz)(e, a, g),
                            onSettled: o,
                        }));
                },
            },
        ],
        children: (0, n.jsx)(b.l, {
            label: O.intl.string(A.default["8lOVBi"]),
            granularity: "minute",
            value: f,
            onChange: (t) => h(null == t ? null : (0, s.tR)(t)),
            minValue: tt(x),
            maxValue: tt(m),
            errorMessage: null == g || j ? void 0 : O.intl.formatToPlainString(A.default["E+5VOP"], { days: 30 }),
        }),
    });
}
function ta(t) {
    let e,
        {
            projectId: a,
            database: s,
            sharedDatabase: i,
            versionTitles: r,
            busy: d,
            onRestoreBackup: f,
            onSettled: h,
        } = t,
        [x, g] = l.useState(!1),
        j = l.useId(),
        { environment: b, backups: y } = s,
        C = (0, T.u4)(b, i),
        w = "loaded" === y.state.status ? y.state.data.window : null,
        k = y.state;
    if ("loading" === k.status) e = (0, n.jsx)(Y, {});
    else if ("failed" === k.status)
        e = (0, n.jsx)(X, {
            title: O.intl.string(A.default.Xduqn2),
            body: O.intl.string(A.default["VGh9H+"]),
            onRetry: y.retry,
        });
    else if (0 === k.data.points.length)
        e = (0, n.jsx)(c.E, {
            variant: "body-sm/normal",
            color: "text-muted",
            children: O.intl.string(A.default.G2DTWl),
        });
    else {
        let { shown: t, collapsible: a } = (0, T.KA)(k.data.points, x);
        e = (0, n.jsxs)(o.B, {
            gap: 4,
            children: [
                (0, n.jsx)("ul", {
                    className: W.Ge,
                    children: t.map((t) => {
                        let e = (0, T.fd)(t, r),
                            { restoreToMs: a } = e;
                        return (0, n.jsx)(
                            _,
                            {
                                title: e.title,
                                muted: null == a,
                                meta: (0, n.jsx)(c.E, {
                                    variant: "body-sm/normal",
                                    color: "text-muted",
                                    children: e.detail,
                                }),
                                trailing:
                                    null == a
                                        ? (0, n.jsx)(c.E, {
                                              variant: "body-sm/normal",
                                              color: "text-muted",
                                              children: O.intl.string(A.default.zPhIa9),
                                          })
                                        : (0, n.jsx)(m.$, {
                                              variant: "secondary",
                                              size: "sm",
                                              text: O.intl.string(A.default.K3Q49G),
                                              "aria-label": O.intl.formatToPlainString(A.default["hXP0m/"], {
                                                  title: e.title,
                                              }),
                                              disabled: d,
                                              onClick: () => f(t, a),
                                          }),
                            },
                            t.id,
                        );
                    }),
                }),
                a
                    ? (0, n.jsx)(o.B, {
                          align: "start",
                          children: (0, n.jsx)(p.Q, {
                              text: O.intl.string(x ? A.default.GgleNC : A.default.qCWKAE),
                              onClick: () => g((t) => !t),
                          }),
                      })
                    : null,
            ],
        });
    }
    return (0, n.jsx)("section", {
        "aria-labelledby": j,
        className: W.$H,
        children: (0, n.jsxs)(o.B, {
            gap: 12,
            children: [
                (0, n.jsxs)(o.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    align: "center",
                    gap: 12,
                    children: [
                        (0, n.jsx)(u.D, { variant: "heading-lg/semibold", id: j, children: C }),
                        (0, n.jsx)(tn, {
                            label: O.intl.formatToPlainString(A.default.tmSDLN, { database: C }),
                            saveDisabled: "failed" === k.status || d,
                            restoreDisabled: null == w || d,
                            onSaveBackup: function () {
                                return (0, v.mM)(() =>
                                    Promise.resolve((t) =>
                                        (0, n.jsx)(Z, { ...t, projectId: a, environment: b, onSaved: h }),
                                    ),
                                );
                            },
                            onRestoreToTime: function () {
                                null != w &&
                                    (0, v.mM)(() =>
                                        Promise.resolve((t) =>
                                            (0, n.jsx)(te, {
                                                ...t,
                                                projectId: a,
                                                environment: b,
                                                restoreWindow: w,
                                                onSettled: h,
                                            }),
                                        ),
                                    );
                            },
                        }),
                    ],
                }),
                e,
            ],
        }),
    });
}
function tn(t) {
    let { label: e, saveDisabled: a, restoreDisabled: s, onSaveBackup: i, onRestoreToTime: r } = t,
        d = l.useRef(null);
    return (0, n.jsx)(y.Y, {
        targetElementRef: d,
        position: "bottom",
        align: "right",
        animation: y.Y.Animation.NONE,
        renderPopout: (t) => {
            let { closePopout: l } = t;
            return (0, n.jsxs)(C.W, {
                navId: "conjure-history-database-options",
                "aria-label": e,
                onClose: l,
                onSelect: l,
                children: [
                    (0, n.jsx)(w.Dr, {
                        id: "back-up-now",
                        label: O.intl.string(A.default.uNd2Je),
                        disabled: a,
                        action: i,
                    }),
                    (0, n.jsx)(w.Dr, {
                        id: "restore-to-time",
                        label: O.intl.string(A.default.Xi6pDt),
                        disabled: s,
                        action: r,
                    }),
                ],
            });
        },
        children: (t, a) => {
            let { onClick: l } = t,
                { isShown: s } = a;
            return (0, n.jsx)("div", {
                ref: d,
                children: (0, n.jsx)(h.m, {
                    text: e,
                    children: (0, n.jsx)(k.K, {
                        icon: S.MoreHorizontalIcon,
                        variant: "secondary",
                        size: "sm",
                        "aria-label": e,
                        "aria-haspopup": "menu",
                        "aria-expanded": s,
                        onClick: l,
                    }),
                }),
            });
        },
    });
}
function tl(t) {
    let e,
        a,
        s,
        i,
        r,
        u,
        m,
        f,
        h,
        x,
        g,
        j,
        b,
        v,
        { projectId: p, installScope: y, restoreDisabled: C, onRestoreVersion: w, transitionState: k, onClose: S } = t,
        [D, z] = l.useState("versions"),
        {
            sharedDatabase: L,
            versions: $,
            databases: H,
            previewBackups: R,
            previewBackupsLoading: V,
            refreshAllBackups: q,
            versionTitles: G,
        } = ((a = (e = l.useMemo(() => ("user" === y ? ["stable"] : ["stable", "preview"]), [y])).includes("preview")),
        (s = I(l.useCallback(() => (0, M.Du)(p), [p]))),
        (i = I(
            l.useCallback(() => {
                var t;
                return (
                    (t = "stable"),
                    Promise.all([(0, M.DM)(p, t), (0, M.ms)(p, t)]).then((t) => {
                        let [e, a] = t;
                        return { points: e, window: a };
                    })
                );
            }, [p]),
        )),
        (r = I(l.useCallback(() => (a ? (0, M.DM)(p, "preview") : Promise.resolve(B)), [p, a]))),
        (u = I(l.useCallback(() => (a ? (0, M.ms)(p, "preview") : Promise.resolve(null)), [p, a]))),
        (m = i.refresh),
        (f = r.refresh),
        (h = u.refresh),
        (x = l.useCallback(() => {
            (m(), f(), h());
        }, [m, f, h])),
        (g = e.map((t) => {
            var e, a;
            let n, l;
            return {
                environment: t,
                backups:
                    "preview" === t
                        ? ((e = r),
                          (a = u),
                          (n = e.state),
                          (l = a.state),
                          {
                              state:
                                  "failed" === n.status || "failed" === l.status
                                      ? { status: "failed" }
                                      : "loading" === n.status || "loading" === l.status
                                        ? { status: "loading" }
                                        : null == l.data
                                          ? { status: "failed" }
                                          : {
                                                status: "loaded",
                                                data: { points: n.data, window: l.data },
                                                nowMs: n.nowMs,
                                            },
                              retry: function () {
                                  (e.retry(), a.retry());
                              },
                              refresh: function () {
                                  (e.refresh(), a.refresh());
                              },
                          })
                        : i,
            };
        })),
        (j = s.state),
        (b = l.useMemo(() => {
            let t = new Map();
            if ("loaded" === j.status) for (let e of j.data.entries) t.set(e.sha, (0, T.T4)(e.subject).short);
            return t;
        }, [j])),
        {
            sharedDatabase: !a,
            versions: s,
            databases: g,
            previewBackups: "loaded" === (v = r.state).status ? v.data : B,
            previewBackupsLoading: "loading" === v.status,
            refreshAllBackups: x,
            versionTitles: b,
        }),
        Q = (0, N.u)(p),
        X = (0, P.A)(p),
        Y = l.useCallback(
            (t, e) => {
                (S(), w(t, e));
            },
            [S, w],
        ),
        F = l.useCallback(
            (t, e) => {
                U({
                    projectId: p,
                    environment: t.environment,
                    targetMs: e,
                    execute: () => (0, M.$D)(p, t.id),
                    onSettled: q,
                });
            },
            [p, q],
        );
    return (0, n.jsxs)(d.a, {
        transitionState: k,
        onClose: S,
        size: "md",
        title: O.intl.string(A.default["3hIVou"]),
        actions: [],
        children: [
            (0, n.jsxs)(E.V, {
                type: "top",
                selectedItem: D,
                onItemSelect: z,
                "aria-label": O.intl.string(A.default["/2GnYy"]),
                children: [
                    (0, n.jsx)(E.V.Item, { id: "versions", children: O.intl.string(A.default.aEg2bh) }),
                    (0, n.jsx)(E.V.Item, { id: "database", children: O.intl.string(A.default["GSu/n6"]) }),
                    (0, n.jsx)(E.V.Item, { id: "publishes", children: O.intl.string(A.default["656Avb"]) }),
                ],
            }),
            (0, n.jsx)(E.V.Panel, {
                id: D,
                className: W.nd,
                children:
                    "versions" === D
                        ? (0, n.jsx)(J, {
                              versions: $.state,
                              previewBackups: R,
                              restoreDisabled: C || V || Q,
                              showsPublishState: !X,
                              onRetry: $.retry,
                              onRestore: Y,
                          })
                        : "publishes" === D
                          ? (0, n.jsx)(K, { projectId: p }, p)
                          : (0, n.jsxs)(o.B, {
                                gap: 24,
                                children: [
                                    (0, n.jsx)(c.E, {
                                        variant: "body-sm/normal",
                                        color: "text-muted",
                                        children: O.intl.formatToPlainString(A.default.ptsHZu, { days: 30 }),
                                    }),
                                    H.map((t) =>
                                        (0, n.jsx)(
                                            ta,
                                            {
                                                projectId: p,
                                                database: t,
                                                sharedDatabase: L,
                                                versionTitles: G,
                                                busy: Q,
                                                onRestoreBackup: F,
                                                onSettled: q,
                                            },
                                            t.environment,
                                        ),
                                    ),
                                ],
                            }),
            }),
        ],
    });
}
