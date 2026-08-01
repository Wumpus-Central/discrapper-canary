l.d(t, { default: () => q });
var i = l(477900),
    n = l(582128),
    a = l(793574);
let s = (0, l(945810).mj)({
    name: "2026-07-gdop-discovery",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
var r = l(189213),
    d = l(17928),
    c = l(834730),
    u = l(287809),
    o = l(633075),
    g = l(916533),
    h = l(96173);
function m(e) {
    let t = (0, h.A)(),
        [l, i] = n.useState(t);
    return (
        n.useEffect(() => {
            t.length > l.length && i(t);
        }, [t, l]),
        n.useMemo(() => {
            if (null == e || 0 === e.length) return l;
            function t(t) {
                return null != e && t instanceof o.R && e.includes(t.applicationId);
            }
            return [...l.filter(t), ...l.filter((e) => !t(e))];
        }, [l, e])
    );
}
var f = l(375708),
    x = l(242112);
function p(e) {
    let { onClose: t, trackUserProfileEditAction: l, highlightedApplicationIds: a, ...s } = e,
        h = (0, d.bG)([u.default], () => u.default.getCurrentUser()),
        p = m(a),
        j = p.length > 0,
        [A, b] = n.useState(!1),
        y = { onClick: () => t(), text: f.intl.string(f.t.cpT0Cq) },
        N = n.useCallback(() => {
            b(!0), t();
        }, [t]);
    return null == h
        ? null
        : (0, i.jsx)(r.Modal, {
              title: f.intl.string(f.t["grUgR+"]),
              actions: j ? [] : [y],
              size: j ? "md" : "sm",
              onClose: t,
              ...s,
              children: j
                  ? (0, i.jsx)("ul", {
                        "aria-label": f.intl.string(f.t["+EIBSA"]),
                        className: x.f,
                        children: p.map((e) =>
                            (0, i.jsx)(
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
                  : (0, i.jsx)(c.E, {
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
    C = l(503698),
    E = l.n(C),
    P = l(892547),
    S = l(140735),
    v = l(661439),
    I = l(429913),
    U = l(90165),
    k = l(943440);
function w(e) {
    let {
            applicationWidgets: t,
            dense: l,
            handleAddWidget: a,
            isSubmitting: s,
            trackUserProfileEditAction: r,
            highlightedApplicationIds: u,
        } = e,
        [o, h] = n.useState(""),
        [m] = n.useState(() => Date.now());
    n.useEffect(() => {
        (0, v.X)();
    }, []);
    let x = (0, I.A)(t.map((e) => e.applicationId)),
        p = (0, d.yK)([U.A], () =>
            x.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? U.A.getLastPlayedDateTime(t) : null;
            }),
        ),
        j = n.useMemo(() => {
            let e = new Set(u ?? []),
                l = m - 7776e6;
            return t
                .map((t, i) => {
                    let n = p[i] ?? null;
                    return {
                        widget: t,
                        searchName: (x[i]?.name ?? "").toLowerCase(),
                        isHighlighted: e.has(t.applicationId),
                        recentlyPlayedAt: null != n && n > l ? n : null,
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
        A = n.useMemo(() => {
            let e = o.trim().toLowerCase();
            return "" === e
                ? j
                : j.filter((t) => {
                      let { searchName: l } = t;
                      return l.includes(e);
                  });
        }, [j, o]);
    return (0, i.jsxs)("div", {
        className: k.kL,
        children: [
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(P.I, {
                            query: o,
                            onChange: h,
                            onClear: () => h(""),
                            placeholder: f.intl.string(f.t.fBRUk1),
                            "aria-label": f.intl.string(f.t.fBRUk1),
                        }),
                        (0, i.jsx)(S.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: f.intl.format(f.t["r/EUap"], { count: A.length }),
                        }),
                    ],
                }),
            A.length > 0
                ? (0, i.jsx)("ul", {
                      "aria-label": f.intl.string(f.t.mW75GT),
                      className: E()(k.Vg, { [k.i0]: l }),
                      children: A.map((e) => {
                          let { widget: t, isHighlighted: n } = e;
                          return (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsx)(g.A, {
                                      widget: t,
                                      onAddWidget: a,
                                      loading: s,
                                      size: l ? "small" : "default",
                                      trackUserProfileEditAction: r,
                                      isHighlighted: n,
                                      hideApplicationWidgetStatus: l,
                                  }),
                              },
                              t.getUniqueKey(),
                          );
                      }),
                  })
                : (0, i.jsx)("div", {
                      className: k.wV,
                      children: (0, i.jsx)(c.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: f.intl.string(f.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var R = l(433833);
function G(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: R.HY,
        children: (0, i.jsx)(c.E, { variant: "text-md/medium", color: "text-subtle", children: t }),
    });
}
function W(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: n, trackUserProfileEditAction: a } = e;
    return (0, i.jsx)("ul", {
        "aria-label": f.intl.string(f.t["+EIBSA"]),
        className: R.Gm,
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                { children: (0, i.jsx)(g.A, { widget: e, onAddWidget: l, loading: n, trackUserProfileEditAction: a }) },
                e.getUniqueKey(),
            ),
        ),
    });
}
function K(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: a, highlightedApplicationIds: s, initialCategory: r, ...c } = e,
        g = (0, d.bG)([u.default], () => u.default.getCurrentUser()),
        h = m(),
        { applicationWidgets: x, collectionWidgets: p } = n.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = [];
                    for (let i of e) i instanceof o.R ? t.push(i) : l.push(i);
                    return { applicationWidgets: t, collectionWidgets: l };
                })(h),
            [h],
        ),
        C = x.length > 0,
        E = p.length > 0,
        [P, S] = n.useState(() =>
            (function (e) {
                let { initialCategory: t, hasInterests: l, highlightedApplicationIds: i } = e;
                return "gameStats" === t || (i?.length ?? 0) > 0 ? "gameStats" : l ? "interests" : "gameStats";
            })({ initialCategory: r, hasInterests: E, highlightedApplicationIds: s }),
        ),
        [v, I] = n.useState(!1),
        U = n.useCallback(() => {
            I(!0), l();
        }, [l]);
    if (null == g) return null;
    let k = f.intl.string(f.t["grUgR+"]),
        K = "gameStats" === P ? f.t.EKR8Ps : f.t.NpchGq,
        q = (s?.length ?? 0) > 0;
    return (
        (t =
            C || E
                ? "gameStats" === P
                    ? C
                        ? (0, i.jsx)("div", {
                              className: R.lU,
                              children: (0, i.jsx)(w, {
                                  applicationWidgets: x,
                                  dense: x.length >= 20,
                                  handleAddWidget: U,
                                  isSubmitting: v,
                                  trackUserProfileEditAction: a,
                                  highlightedApplicationIds: s,
                              }),
                          })
                        : (0, i.jsx)(G, { children: f.intl.format(f.t.mcdIFp, { tabName: f.intl.string(K) }) })
                    : E
                      ? (0, i.jsx)("div", {
                            className: R.lU,
                            children: (0, i.jsx)(W, {
                                widgets: p,
                                onAddWidget: U,
                                isSubmitting: v,
                                trackUserProfileEditAction: a,
                            }),
                        })
                      : (0, i.jsx)(G, { children: f.intl.format(f.t.mcdIFp, { tabName: f.intl.string(K) }) })
                : (0, i.jsx)(G, { children: f.intl.string(f.t["1nkDOs"]) })),
        (0, i.jsxs)(j.d, {
            size: "lg",
            onClose: l,
            "aria-label": k,
            ...c,
            children: [
                (0, i.jsx)(A.rQ, { title: k }),
                (0, i.jsxs)("div", {
                    className: R.rf,
                    children: [
                        (0, i.jsxs)(b.V, {
                            className: R.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: P,
                            onItemSelect: (e) => {
                                null != e && S(e);
                            },
                            "aria-label": f.intl.string(f.t.bKOzux),
                            children: [
                                (0, i.jsx)(b.V.Item, {
                                    className: R.pc,
                                    id: "interests",
                                    children: f.intl.string(f.t.NpchGq),
                                }),
                                (0, i.jsx)(b.V.Item, {
                                    className: R.pc,
                                    id: "gameStats",
                                    "aria-label": f.intl.string(f.t.EKR8Ps),
                                    children: (0, i.jsxs)("span", {
                                        className: R.wx,
                                        children: [
                                            f.intl.string(f.t.EKR8Ps),
                                            q && (0, i.jsx)(y.E, { type: "new", variant: "brand" }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                        (0, i.jsx)(b.V.Panel, {
                            id: P,
                            "aria-label": f.intl.string(K),
                            className: R.Qs,
                            children: (0, i.jsx)(N.Gt, { className: R.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
function q(e) {
    let { initialCategory: t, ...l } = e;
    return s.useConfig({ location: a.A.USER_PROFILE_APPLICATION_WIDGET }).enabled
        ? (0, i.jsx)(K, { initialCategory: t, ...l })
        : (0, i.jsx)(p, { ...l });
}
