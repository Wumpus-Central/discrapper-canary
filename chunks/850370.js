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
    g = l(657855),
    h = l(725386);
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
    p = l(242112);
function x(e) {
    let { onClose: t, trackUserProfileEditAction: l, highlightedApplicationIds: a, ...s } = e,
        h = (0, d.bG)([u.default], () => u.default.getCurrentUser()),
        x = m(a),
        j = x.length > 0,
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
                        className: p.f,
                        children: x.map((e) =>
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
    y = l(689175),
    N = l(503698),
    C = l.n(N),
    S = l(892547),
    I = l(140735),
    P = l(661439),
    U = l(429913),
    k = l(90165),
    v = l(943440);
function E(e) {
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
        (0, P.X)();
    }, []);
    let p = (0, U.A)(t.map((e) => e.applicationId)),
        x = (0, d.yK)([k.A], () =>
            p.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? k.A.getLastPlayedDateTime(t) : null;
            }),
        ),
        j = n.useMemo(() => {
            let e = new Set(u ?? []),
                l = m - 7776e6;
            return t
                .map((t, i) => {
                    let n = x[i] ?? null;
                    return {
                        widget: t,
                        searchName: (p[i]?.name ?? "").toLowerCase(),
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
        }, [t, p, u, x, m]),
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
        className: v.kL,
        children: [
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(S.I, {
                            query: o,
                            onChange: h,
                            onClear: () => h(""),
                            placeholder: f.intl.string(f.t.fBRUk1),
                            "aria-label": f.intl.string(f.t.fBRUk1),
                        }),
                        (0, i.jsx)(I.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: f.intl.format(f.t["r/EUap"], { count: A.length }),
                        }),
                    ],
                }),
            A.length > 0
                ? (0, i.jsx)("ul", {
                      "aria-label": f.intl.string(f.t.mW75GT),
                      className: C()(v.Vg, { [v.i0]: l }),
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
                      className: v.wV,
                      children: (0, i.jsx)(c.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: f.intl.string(f.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var w = l(433833);
function R(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: w.HY,
        children: (0, i.jsx)(c.E, { variant: "text-md/medium", color: "text-subtle", children: t }),
    });
}
function G(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: n, trackUserProfileEditAction: a } = e;
    return (0, i.jsx)("ul", {
        "aria-label": f.intl.string(f.t["+EIBSA"]),
        className: w.Gm,
        children: t.map((e) =>
            (0, i.jsx)(
                "li",
                { children: (0, i.jsx)(g.A, { widget: e, onAddWidget: l, loading: n, trackUserProfileEditAction: a }) },
                e.getUniqueKey(),
            ),
        ),
    });
}
function W(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: a, highlightedApplicationIds: s, initialCategory: r, ...c } = e,
        g = (0, d.bG)([u.default], () => u.default.getCurrentUser()),
        h = m(),
        { applicationWidgets: p, collectionWidgets: x } = n.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = [];
                    for (let i of e) i instanceof o.R ? t.push(i) : l.push(i);
                    return { applicationWidgets: t, collectionWidgets: l };
                })(h),
            [h],
        ),
        N = p.length > 0,
        C = x.length > 0,
        [S, I] = n.useState(() =>
            (function (e) {
                let { initialCategory: t, hasInterests: l, highlightedApplicationIds: i } = e;
                return "gameStats" === t || (i?.length ?? 0) > 0 ? "gameStats" : l ? "interests" : "gameStats";
            })({ initialCategory: r, hasInterests: C, highlightedApplicationIds: s }),
        ),
        [P, U] = n.useState(!1),
        k = n.useCallback(() => {
            U(!0), l();
        }, [l]);
    if (null == g) return null;
    let v = f.intl.string(f.t["grUgR+"]),
        W = "gameStats" === S ? f.t.EKR8Ps : f.t.NpchGq;
    return (
        (t =
            N || C
                ? "gameStats" === S
                    ? N
                        ? (0, i.jsx)("div", {
                              className: w.lU,
                              children: (0, i.jsx)(E, {
                                  applicationWidgets: p,
                                  dense: p.length >= 20,
                                  handleAddWidget: k,
                                  isSubmitting: P,
                                  trackUserProfileEditAction: a,
                                  highlightedApplicationIds: s,
                              }),
                          })
                        : (0, i.jsx)(R, { children: f.intl.format(f.t.mcdIFp, { tabName: f.intl.string(W) }) })
                    : C
                      ? (0, i.jsx)("div", {
                            className: w.lU,
                            children: (0, i.jsx)(G, {
                                widgets: x,
                                onAddWidget: k,
                                isSubmitting: P,
                                trackUserProfileEditAction: a,
                            }),
                        })
                      : (0, i.jsx)(R, { children: f.intl.format(f.t.mcdIFp, { tabName: f.intl.string(W) }) })
                : (0, i.jsx)(R, { children: f.intl.string(f.t["1nkDOs"]) })),
        (0, i.jsxs)(j.d, {
            size: "lg",
            onClose: l,
            "aria-label": v,
            ...c,
            children: [
                (0, i.jsx)(A.rQ, { title: v }),
                (0, i.jsxs)("div", {
                    className: w.rf,
                    children: [
                        (0, i.jsxs)(b.V, {
                            className: w.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: S,
                            onItemSelect: (e) => {
                                null != e && I(e);
                            },
                            "aria-label": f.intl.string(f.t.bKOzux),
                            children: [
                                (0, i.jsx)(b.V.Item, {
                                    className: w.pc,
                                    id: "interests",
                                    children: f.intl.string(f.t.NpchGq),
                                }),
                                (0, i.jsx)(b.V.Item, {
                                    className: w.pc,
                                    id: "gameStats",
                                    children: f.intl.string(f.t.EKR8Ps),
                                }),
                            ],
                        }),
                        (0, i.jsx)(b.V.Panel, {
                            id: S,
                            "aria-label": f.intl.string(W),
                            className: w.Qs,
                            children: (0, i.jsx)(y.Gt, { className: w.XG, fade: !0, children: t }),
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
        ? (0, i.jsx)(W, { initialCategory: t, ...l })
        : (0, i.jsx)(x, { ...l });
}
