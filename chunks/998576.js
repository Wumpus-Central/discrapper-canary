(l.d(t, { default: () => H }), l(321073));
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
        s = (0, a.bG)([j.A], () => (0, A.RZ)(j.A.getGuildsArray(), "VibegrationsCustomWidgetAddOption").length > 0, []),
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
              "aria-label": y.intl.string(b.default["27bu14"]),
              children: [
                  (0, i.jsx)(p.D, { size: "md", color: f.A.colors.ICON_SUBTLE }),
                  (0, i.jsx)(d.E, {
                      variant: "text-md/medium",
                      color: "text-strong",
                      children: y.intl.string(b.default["4OR+L+"]),
                  }),
              ],
          })
        : null;
}
var S = l(826673),
    P = l(287809),
    v = l(403362),
    k = l(633075),
    I = l(210598),
    U = l(503698),
    C = l.n(U),
    w = l(683438),
    G = l(140735),
    R = l(661439),
    O = l(429913),
    L = l(90165),
    W = l(788259),
    D = l(976527);
function _(e) {
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
    let m = (0, O.A)(t.map((e) => e.applicationId)),
        x = (0, a.yK)([L.A], () =>
            m.map((e) => {
                let t = e?.getCanonicalGameId();
                return null != t ? L.A.getLastPlayedDateTime(t) : null;
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
        className: D.kL,
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
                      className: C()(D.Vg, { [D.i0]: l }),
                      children: f.map((e) => {
                          let { widget: t, isHighlighted: n } = e;
                          return (0, i.jsx)(
                              "li",
                              {
                                  children: (0, i.jsx)(W.A, {
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
                      className: D.wV,
                      children: (0, i.jsx)(d.E, {
                          variant: "text-md/medium",
                          color: "text-subtle",
                          children: y.intl.string(y.t["+p0UgM"]),
                      }),
                  }),
        ],
    });
}
var M = l(96173),
    q = l(49999),
    K = l(901366);
function V(e) {
    let { children: t } = e;
    return (0, i.jsx)("div", {
        className: K.HY,
        children: (0, i.jsx)(d.E, { variant: "text-md/medium", color: "text-subtle", children: t }),
    });
}
function B(e) {
    let { widgets: t, onAddWidget: l, isSubmitting: n, trackUserProfileEditAction: s } = e;
    return (0, i.jsxs)("ul", {
        "aria-label": y.intl.string(y.t["+EIBSA"]),
        className: K.Gm,
        children: [
            t.map((e) =>
                (0, i.jsx)(
                    "li",
                    {
                        children: (0, i.jsx)(W.A, {
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
function H(e) {
    let t,
        { onClose: l, trackUserProfileEditAction: d, highlightedApplicationIds: m, initialCategory: x, ...p } = e;
    n.useEffect(
        () => () => {
            (0, S.Dr)(r.M.USER_PROFILE_PERSONAL_WIDGET_NEW_BADGE, { dismissAction: q.i.AUTO_DISMISS });
        },
        [],
    );
    let f = (0, a.bG)([P.default], () => P.default.getCurrentUser()),
        j = (function () {
            let e = (0, M.A)(),
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
                    for (let i of e) i instanceof k.R ? t.push(i) : l.push(i);
                    return { applicationWidgets: t, collectionWidgets: l };
                })(j),
            [j],
        ),
        N = A.length > 0,
        E = b.length > 0,
        [U, C] = n.useState(() =>
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
    let O = y.intl.string(y.t["grUgR+"]),
        L = (function (e) {
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
        })(U),
        W = (m?.length ?? 0) > 0;
    return (
        (t =
            N || E
                ? "gameStats" === U
                    ? N
                        ? (0, i.jsx)("div", {
                              className: K.lU,
                              children: (0, i.jsx)(_, {
                                  applicationWidgets: A,
                                  dense: A.length >= 20,
                                  handleAddWidget: R,
                                  isSubmitting: w,
                                  trackUserProfileEditAction: d,
                                  highlightedApplicationIds: m,
                              }),
                          })
                        : (0, i.jsx)(V, { children: y.intl.format(y.t.mcdIFp, { tabName: y.intl.string(L) }) })
                    : E
                      ? (0, i.jsx)("div", {
                            className: K.lU,
                            children: (0, i.jsx)(B, {
                                widgets: b,
                                onAddWidget: R,
                                isSubmitting: w,
                                trackUserProfileEditAction: d,
                            }),
                        })
                      : (0, i.jsx)(V, { children: y.intl.format(y.t.mcdIFp, { tabName: y.intl.string(L) }) })
                : (0, i.jsx)(V, { children: y.intl.string(y.t["1nkDOs"]) })),
        (0, i.jsxs)(c.d, {
            size: "lg",
            onClose: l,
            "aria-label": O,
            ...p,
            children: [
                (0, i.jsx)(u.rQ, { title: O }),
                (0, i.jsxs)("div", {
                    className: K.rf,
                    children: [
                        (0, i.jsxs)(o.V, {
                            className: K.C$,
                            type: "side",
                            orientation: "vertical",
                            selectedItem: U,
                            onItemSelect: (e) => {
                                null != e && C(e);
                            },
                            "aria-label": y.intl.string(y.t.bKOzux),
                            children: [
                                (0, i.jsxs)(o.V.Item, {
                                    className: K.pc,
                                    id: "interests",
                                    "aria-label": y.intl.string(y.t.NpchGq),
                                    children: [
                                        y.intl.string(y.t.NpchGq),
                                        (0, I.t0)() && null != b.find((e) => e.type === s.x.PERSONAL)
                                            ? (0, i.jsx)(g.E, { type: "new", variant: "brand" })
                                            : null,
                                    ],
                                }),
                                (0, i.jsxs)(o.V.Item, {
                                    className: K.pc,
                                    id: "gameStats",
                                    "aria-label": y.intl.string(y.t.EKR8Ps),
                                    children: [
                                        y.intl.string(y.t.EKR8Ps),
                                        W && (0, i.jsx)(g.E, { type: "new", variant: "brand" }),
                                    ],
                                }),
                            ],
                        }),
                        (0, i.jsx)(o.V.Panel, {
                            id: U,
                            "aria-label": y.intl.string(L),
                            className: K.Qs,
                            children: (0, i.jsx)(h.Gt, { className: K.XG, fade: !0, children: t }),
                        }),
                    ],
                }),
            ],
        })
    );
}
