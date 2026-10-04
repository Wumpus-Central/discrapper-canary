(l.d(t, { default: () => B }), l(321073));
var i = l(477900),
    n = l(582128),
    s = l(540185),
    a = l(17928),
    r = l(554146),
    d = l(834730),
    c = l(224640),
    u = l(20742),
    o = l(761508),
    g = l(508770),
    h = l(689175),
    m = l(192308),
    x = l(939249),
    p = l(152367),
    f = l(661531),
    j = l(71393),
    A = l(870440),
    b = l(248675),
    y = l(375708),
    N = l(223557);
function E(e) {
    let { onOpen: t } = e,
        s = (0, a.bG)([j.A], () => (0, A.Qv)(j.A.getGuildsArray(), "VibegrationsCustomWidgetAddOption").length > 0, []),
        r = n.useCallback(() => {
            (t?.(),
                (0, m.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            l.e("142753"),
                            l.e("268582"),
                            l.e("137872"),
                            l.e("108983"),
                        ]).then(l.bind(l, 632618));
                        return (t) => (0, i.jsx)(e, { ...t });
                    },
                    { stackingBehavior: "stack" },
                ));
        }, [t]);
    return s
        ? (0, i.jsxs)(x.D, {
              className: N.u,
              onClick: r,
              "aria-label": y.intl.string(b.default.yI85oV),
              children: [
                  (0, i.jsx)(p.D, { size: "md", color: f.A.colors.ICON_SUBTLE }),
                  (0, i.jsx)(d.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: y.intl.string(b.default["5WHmVU"]),
                  }),
              ],
          })
        : null;
}
var S = l(826673),
    P = l(287809),
    v = l(403362),
    I = l(633075),
    U = l(210598),
    k = l(503698),
    C = l.n(k),
    w = l(683438),
    G = l(140735),
    R = l(661439),
    W = l(429913),
    O = l(90165),
    D = l(788259),
    L = l(976527);
function V(e) {
    let {
            applicationWidgets: t,
            dense: l,
            handleAddWidget: s,
            isSubmitting: r,
            trackUserProfileEditAction: c,
            highlightedApplicationIds: u,
        } = e,
        [o, g] = n.useState(""),
        [h] = n.useState(() => Date.now());
    n.useEffect(() => {
        (0, R.X)();
    }, []);
    let m = (0, W.A)(t.map((e) => e.applicationId)),
        x = (0, a.yK)([O.A], () =>
            m.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? O.A.getLastPlayedDateTime(t) : null;
            }),
        ),
        p = n.useMemo(() => {
            let e = new Set(u ?? []),
                l = h - 7776e6;
            return t
                .map((t, i) => {
                    let n = x[i] ?? null;
                    return {
                        widget: t,
                        searchName: (m[i]?.name ?? "").toLowerCase(),
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
        }, [t, m, u, x, h]),
        f = n.useMemo(() => {
            let e = o.trim().toLowerCase();
            return "" === e
                ? p
                : p.filter((t) => {
                      let { searchName: l } = t;
                      return l.includes(e);
                  });
        }, [p, o]);
    return (0, i.jsxs)("div", {
        className: L.kL,
        children: [
            l &&
                (0, i.jsxs)(i.Fragment, {
                    children: [
                        (0, i.jsx)(w.I, {
                            query: o,
                            onChange: g,
                            onClear: () => g(""),
                            placeholder: y.intl.string(y.t.fBRUk1),
                            "aria-label": y.intl.string(y.t.fBRUk1),
                        }),
                        (0, i.jsx)(G.A, {
                            "aria-live": "polite",
                            role: "region",
                            children: y.intl.format(y.t["r/EUap"], { count: f.length }),
                        }),
                    ],
                }),
            f.length > 0
                ? (0, i.jsx)("ul", {
                      "aria-label": y.intl.string(y.t.mW75GT),
                      className: C()(L.Vg, { [L.i0]: l }),
                      children: f.map((e) => {
                          let { widget: t, isHighlighted: n } = e;
                          return (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsx)(D.A, {
                                      widget: t,
                                      onAddWidget: s,
                                      loading: r,
                                      size: l ? "small" : "default",
                                      trackUserProfileEditAction: c,
                                      isHighlighted: n,
                                      hideApplicationWidgetStatus: l,
                                  }),
                              },
                              t.getUniqueKey(),
                          );
                      }),
                  })
                : (0, i.jsx)("div", {
                      className: L.wV,
                      children: (0, i.jsx)(d.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: y.intl.string(y.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var _ = l(96173),
    M = l(49999),
    q = l(901366);
function H(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: q.HY,
        children: (0, i.jsx)(d.E, { variant: "text-md/medium", color: "text-subtle", children: t }),
    });
}
function K(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: n, trackUserProfileEditAction: s } = e;
    return (0, i.jsxs)("ul", {
        "aria-label": y.intl.string(y.t["+EIBSA"]),
        className: q.Gm,
        children: [
            t.map((e) =>
                (0, i.jsx)(
                    "li",
                    {
                        children: (0, i.jsx)(D.A, {
                            widget: e,
                            onAddWidget: l,
                            loading: n,
                            trackUserProfileEditAction: s,
                        }),
                    },
                    e.getUniqueKey(),
                ),
            ),
            (0, i.jsx)("li", { children: (0, i.jsx)(E, { onOpen: l }) }),
        ],
    });
}
function B(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: d, highlightedApplicationIds: m, initialCategory: x, ...p } = e;
    n.useEffect(
        () => () => {
            (0, S.Dr)(r.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, { dismissAction: M.i.AUTO_DISMISS });
        },
        [],
    );
    let f = (0, a.bG)([P.default], () => P.default.getCurrentUser()),
        j = (function () {
            let e = (0, _.A)(),
                [t, l] = n.useState(e);
            return (
                n.useEffect(() => {
                    e.length > t.length && l(e);
                }, [e, t]),
                n.useMemo(() => t, [t, void 0])
            );
        })(),
        { applicationWidgets: A, collectionWidgets: b } = n.useMemo(
            () =>
                (function (e) {
                    let t = [],
                        l = [];
                    for (let i of e) i instanceof I.R ? t.push(i) : l.push(i);
                    return { applicationWidgets: t, collectionWidgets: l };
                })(j),
            [j],
        ),
        N = A.length > 0,
        E = b.length > 0,
        [k, C] = n.useState(() =>
            (function (e) {
                let { initialCategory: t, hasInterests: l, hasGameStats: i, highlightedApplicationIds: n } = e;
                return (n?.length ?? 0) > 0
                    ? "gameStats"
                    : null != t
                      ? t
                      : l
                        ? "interests"
                        : i
                          ? "gameStats"
                          : "interests";
            })({ initialCategory: x, hasInterests: E, hasGameStats: N, highlightedApplicationIds: m }),
        ),
        [w, G] = n.useState(!1),
        R = n.useCallback(() => {
            (G(!0), l());
        }, [l]);
    if (null == f) return null;
    let W = y.intl.string(y.t["grUgR+"]),
        O = (function (e) {
            switch (e) {
                case "interests":
                    return y.t.NpchGq;
                case "gameStats":
                    return y.t.EKR8Ps;
                case "createYourOwn":
                    return y.t.eGAirq;
                default:
                    (0, v.xb)(e);
            }
        })(k),
        D = (m?.length ?? 0) > 0;
    return (
        (t =
            N || E
                ? "gameStats" === k
                    ? N
                        ? (0, i.jsx)("div", {
                              className: q.lU,
                              children: (0, i.jsx)(V, {
                                  applicationWidgets: A,
                                  dense: A.length >= 20,
                                  handleAddWidget: R,
                                  isSubmitting: w,
                                  trackUserProfileEditAction: d,
                                  highlightedApplicationIds: m,
                              }),
                          })
                        : (0, i.jsx)(H, { children: y.intl.format(y.t.mcdIFp, { tabName: y.intl.string(O) }) })
                    : E
                      ? (0, i.jsx)("div", {
                            className: q.lU,
                            children: (0, i.jsx)(K, {
                                widgets: b,
                                onAddWidget: R,
                                isSubmitting: w,
                                trackUserProfileEditAction: d,
                            }),
                        })
                      : (0, i.jsx)(H, { children: y.intl.format(y.t.mcdIFp, { tabName: y.intl.string(O) }) })
                : (0, i.jsx)(H, { children: y.intl.string(y.t["1nkDOs"]) })),
        (0, i.jsxs)(c.d, {
            size: "lg",
            onClose: l,
            "aria-label": W,
            ...p,
            children: [
                (0, i.jsx)(u.rQ, { title: W }),
                (0, i.jsxs)("div", {
                    className: q.rf,
                    children: [
                        (0, i.jsxs)(o.V, {
                            className: q.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: k,
                            onItemSelect: (e) => {
                                null != e && C(e);
                            },
                            "aria-label": y.intl.string(y.t.bKOzux),
                            children: [
                                (0, i.jsxs)(o.V.Item, {
                                    className: q.pc,
                                    id: "interests",
                                    "aria-label": y.intl.string(y.t.NpchGq),
                                    children: [
                                        y.intl.string(y.t.NpchGq),
                                        (0, U.t0)() && null != b.find((e) => e.type === s.x.PERSONAL)
                                            ? (0, i.jsx)(g.E, { type: "new", variant: "brand" })
                                            : null,
                                    ],
                                }),
                                (0, i.jsxs)(o.V.Item, {
                                    className: q.pc,
                                    id: "gameStats",
                                    "aria-label": y.intl.string(y.t.EKR8Ps),
                                    children: [
                                        y.intl.string(y.t.EKR8Ps),
                                        D && (0, i.jsx)(g.E, { type: "new", variant: "brand" }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(o.V.Panel, {
                            id: k,
                            "aria-label": y.intl.string(O),
                            className: q.Qs,
                            children: (0, i.jsx)(h.Gt, { className: q.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
