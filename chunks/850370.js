l.d(t, { default: () => H });
var n = l(477900),
    i = l(582128),
    a = l(793574);
let r = (0, l(945810).mj)({
    name: "2026-07-gdop-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var s = l(189213),
    d = l(17928),
    c = l(834730),
    u = l(287809),
    o = l(633075),
    g = l(788259),
    h = l(96173);
function m(e) {
    let t = (0, h.A)(),
        [l, n] = i.useState(t);
    return (
        i.useEffect(() => {
            t.length > l.length && n(t);
        }, [t, l]),
        i.useMemo(() => {
            if (null == e || 0 === e.length) return l;
            function t(t) {
                return null != e && t instanceof o.R && e.includes(t.applicationId);
            }
            return [...l.filter(t), ...l.filter((e) => !t(e))];
        }, [l, e])
    );
}
var f = l(375708),
    x = l(455007);
function p(e) {
    let { onClose: t, trackUserProfileEditAction: l, highlightedApplicationIds: a, ...r } = e,
        h = (0, d.bG)([u.default], () => u.default.getCurrentUser()),
        p = m(a),
        j = p.length > 0,
        [A, b] = i.useState(!1),
        y = { onClick: () => t(), text: f.intl.string(f.t.cpT0Cq) },
        N = i.useCallback(() => {
            b(!0), t();
        }, [t]);
    return null == h
        ? null
        : (0, n.jsx)(s.Modal, {
              title: f.intl.string(f.t["grUgR+"]),
              actions: j ? [] : [y],
              size: j ? "md" : "sm",
              onClose: t,
              ...r,
              children: j
                  ? (0, n.jsx)("ul", {
                        "aria-label": f.intl.string(f.t["+EIBSA"]),
                        className: x.f,
                        children: p.map((e) =>
                            (0, n.jsx)(
                                g.A,
                                {
                                    widget: e,
                                    onAddWidget: N,
                                    loading: A,
                                    trackUserProfileEditAction: l,
                                    isHighlighted: null != a && e instanceof o.R && a.includes(e.applicationId),
                                },
                                e.getUniqueKey(),
                            ),
                        ),
                    })
                  : (0, n.jsx)(c.E, {
                        variant: "text-md/medium",
                        color: "text-subtle",
                        children: f.intl.string(f.t["1nkDOs"]),
                    }),
          });
}
l(321073);
var j = l(224640),
    A = l(20742),
    b = l(761508),
    y = l(508770),
    N = l(689175),
    E = l(403362),
    v = l(210598),
    C = l(503698),
    I = l.n(C),
    P = l(892547),
    U = l(140735),
    k = l(661439),
    w = l(429913),
    S = l(90165),
    G = l(976527);
function R(e) {
    let {
            applicationWidgets: t,
            dense: l,
            handleAddWidget: a,
            isSubmitting: r,
            trackUserProfileEditAction: s,
            highlightedApplicationIds: u,
        } = e,
        [o, h] = i.useState(""),
        [m] = i.useState(() => Date.now());
    i.useEffect(() => {
        (0, k.X)();
    }, []);
    let x = (0, w.A)(t.map((e) => e.applicationId)),
        p = (0, d.yK)([S.A], () =>
            x.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? S.A.getLastPlayedDateTime(t) : null;
            }),
        ),
        j = i.useMemo(() => {
            let e = new Set(u ?? []),
                l = m - 7776e6;
            return t
                .map((t, n) => {
                    let i = p[n] ?? null;
                    return {
                        widget: t,
                        searchName: (x[n]?.name ?? "").toLowerCase(),
                        isHighlighted: e.has(t.applicationId),
                        recentlyPlayedAt: null != i && i > l ? i : null,
                    };
                })
                .sort((e, t) =>
                    e.isHighlighted !== t.isHighlighted
                        ? e.isHighlighted
                            ? -1
                            : 1
                        : e.recentlyPlayedAt !== t.recentlyPlayedAt
                          ? null == e.recentlyPlayedAt
                              ? 1
                              : null == t.recentlyPlayedAt
                                ? -1
                                : t.recentlyPlayedAt - e.recentlyPlayedAt
                          : e.searchName.localeCompare(t.searchName),
                );
        }, [t, x, u, p, m]),
        A = i.useMemo(() => {
            let e = o.trim().toLowerCase();
            return "" === e
                ? j
                : j.filter((t) => {
                      let { searchName: l } = t;
                      return l.includes(e);
                  });
        }, [j, o]);
    return (0, n.jsxs)("div", {
        className: G.kL,
        children: [
            l &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(P.I, {
                            query: o,
                            onChange: h,
                            onClear: () => h(""),
                            placeholder: f.intl.string(f.t.fBRUk1),
                            "aria-label": f.intl.string(f.t.fBRUk1),
                        }),
                        (0, n.jsx)(U.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: f.intl.format(f.t["r/EUap"], { count: A.length }),
                        }),
                    ],
                }),
            A.length > 0
                ? (0, n.jsx)("ul", {
                      "aria-label": f.intl.string(f.t.mW75GT),
                      className: I()(G.Vg, { [G.i0]: l }),
                      children: A.map((e) => {
                          let { widget: t, isHighlighted: i } = e;
                          return (0, n.jsx)(
                              "li",
                              {
                                  children: (0, n.jsx)(g.A, {
                                      widget: t,
                                      onAddWidget: a,
                                      loading: r,
                                      size: l ? "small" : "default",
                                      trackUserProfileEditAction: s,
                                      isHighlighted: i,
                                      hideApplicationWidgetStatus: l,
                                  }),
                              },
                              t.getUniqueKey(),
                          );
                      }),
                  })
                : (0, n.jsx)("div", {
                      className: G.wV,
                      children: (0, n.jsx)(c.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: f.intl.string(f.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var q = l(488634);
function W(e) {
    let { children: t } = e;
    return (0, n.jsx)("div", {
        className: q.HY,
        children: (0, n.jsx)(c.E, { variant: "text-md/medium", color: "text-subtle", children: t }),
    });
}
function O(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: i, trackUserProfileEditAction: a } = e;
    return (0, n.jsx)("ul", {
        "aria-label": f.intl.string(f.t["+EIBSA"]),
        className: q.Gm,
        children: t.map((e) =>
            (0, n.jsx)(
                "li",
                { children: (0, n.jsx)(g.A, { widget: e, onAddWidget: l, loading: i, trackUserProfileEditAction: a }) },
                e.getUniqueKey(),
            ),
        ),
    });
}
function K(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: a, highlightedApplicationIds: r, initialCategory: s, ...c } = e,
        h = (0, d.bG)([u.default], () => u.default.getCurrentUser()),
        x = m(),
        {
            applicationWidgets: p,
            collectionWidgets: C,
            personalWidget: I,
        } = i.useMemo(
            () =>
                (function (e) {
                    let t,
                        l = [],
                        n = [];
                    for (let i of e) i instanceof o.R ? l.push(i) : i instanceof v.Tu ? (t = i) : n.push(i);
                    return { applicationWidgets: l, collectionWidgets: n, personalWidget: t };
                })(x),
            [x],
        ),
        P = p.length > 0,
        U = C.length > 0,
        k = null != I,
        [w, S] = i.useState(() =>
            (function (e) {
                let {
                    initialCategory: t,
                    hasInterests: l,
                    hasGameStats: n,
                    hasCreateYourOwn: i,
                    highlightedApplicationIds: a,
                } = e;
                return (a?.length ?? 0) > 0
                    ? "gameStats"
                    : null != t
                      ? t
                      : l
                        ? "interests"
                        : n
                          ? "gameStats"
                          : i
                            ? "createYourOwn"
                            : "interests";
            })({
                initialCategory: s,
                hasInterests: U,
                hasGameStats: P,
                hasCreateYourOwn: k,
                highlightedApplicationIds: r,
            }),
        ),
        [G, K] = i.useState(!1),
        H = i.useCallback(() => {
            K(!0), l();
        }, [l]);
    if (null == h) return null;
    let V = f.intl.string(f.t["grUgR+"]),
        L = (function (e) {
            switch (e) {
                case "interests":
                    return f.t.NpchGq;
                case "gameStats":
                    return f.t.EKR8Ps;
                case "createYourOwn":
                    return f.t.eGAirq;
                default:
                    (0, E.xb)(e);
            }
        })(w),
        M = (r?.length ?? 0) > 0;
    return (
        (t =
            P || U || k
                ? "gameStats" === w
                    ? P
                        ? (0, n.jsx)("div", {
                              className: q.lU,
                              children: (0, n.jsx)(R, {
                                  applicationWidgets: p,
                                  dense: p.length >= 20,
                                  handleAddWidget: H,
                                  isSubmitting: G,
                                  trackUserProfileEditAction: a,
                                  highlightedApplicationIds: r,
                              }),
                          })
                        : (0, n.jsx)(W, { children: f.intl.format(f.t.mcdIFp, { tabName: f.intl.string(L) }) })
                    : "createYourOwn" === w
                      ? null != I
                          ? (0, n.jsx)("div", {
                                className: q.lU,
                                children: (0, n.jsx)(g.A, {
                                    widget: I,
                                    onAddWidget: H,
                                    loading: G,
                                    trackUserProfileEditAction: a,
                                }),
                            })
                          : (0, n.jsx)(W, { children: f.intl.format(f.t.mcdIFp, { tabName: f.intl.string(L) }) })
                      : U
                        ? (0, n.jsx)("div", {
                              className: q.lU,
                              children: (0, n.jsx)(O, {
                                  widgets: C,
                                  onAddWidget: H,
                                  isSubmitting: G,
                                  trackUserProfileEditAction: a,
                              }),
                          })
                        : (0, n.jsx)(W, { children: f.intl.format(f.t.mcdIFp, { tabName: f.intl.string(L) }) })
                : (0, n.jsx)(W, { children: f.intl.string(f.t["1nkDOs"]) })),
        (0, n.jsxs)(j.d, {
            size: "lg",
            onClose: l,
            "aria-label": V,
            ...c,
            children: [
                (0, n.jsx)(A.rQ, { title: V }),
                (0, n.jsxs)("div", {
                    className: q.rf,
                    children: [
                        (0, n.jsxs)(b.V, {
                            className: q.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: w,
                            onItemSelect: (e) => {
                                null != e && S(e);
                            },
                            "aria-label": f.intl.string(f.t.bKOzux),
                            children: [
                                (0, n.jsx)(b.V.Item, {
                                    className: q.pc,
                                    id: "interests",
                                    children: f.intl.string(f.t.NpchGq),
                                }),
                                (0, n.jsxs)(b.V.Item, {
                                    className: q.pc,
                                    id: "gameStats",
                                    "aria-label": f.intl.string(f.t.EKR8Ps),
                                    children: [
                                        f.intl.string(f.t.EKR8Ps),
                                        M && (0, n.jsx)(y.E, { type: "new", variant: "brand" }),
                                    ],
                                }),
                                k
                                    ? (0, n.jsxs)(b.V.Item, {
                                          className: q.pc,
                                          id: "createYourOwn",
                                          "aria-label": f.intl.string(f.t.eGAirq),
                                          children: [
                                              f.intl.string(f.t.eGAirq),
                                              (0, v.t0)() && (0, n.jsx)(y.E, { type: "new", variant: "brand" }),
                                          ],
                                      })
                                    : null,
                            ],
                        }),
                        (0, n.jsx)(b.V.Panel, {
                            id: w,
                            "aria-label": f.intl.string(L),
                            className: q.Qs,
                            children: (0, n.jsx)(N.Gt, { className: q.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function H(e) {
    let { initialCategory: t, ...l } = e;
    return r.useConfig({ location: a.A.USER_PROFILE_APPLICATION_WIDGET }).enabled
        ? (0, n.jsx)(K, { initialCategory: t, ...l })
        : (0, n.jsx)(p, { ...l });
}
