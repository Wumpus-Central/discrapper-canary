n.d(t, { A: () => er, u: () => en });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l),
    s = n(17928),
    o = n(885574),
    c = n(834730),
    d = n(457965),
    u = n(704824),
    g = n(429913),
    _ = n(633075),
    f = n(667049),
    m = n(287809),
    p = n(403362),
    x = n(369374),
    I = n(323082),
    h = n(379848),
    A = n(840387),
    E = n(201718),
    C = n(495544),
    v = n(615405),
    b = n(289173),
    N = n(373842),
    S = n(600761),
    T = n(605694),
    j = n(990078),
    O = n(657718),
    L = n(789645),
    k = n(478016),
    P = n(183555),
    R = n(735321),
    D = n(606758),
    y = n(518477),
    w = n(49999),
    G = n(985018);
function M(e) {
    let { user: t, application: n, onDismiss: l } = e,
        { trackUserProfileEditAction: r } = (0, P.NJ)(),
        s = a.useMemo(() => new _.R({ applicationId: n.id }), [n.id]),
        o = a.useCallback(() => {
            null != s &&
                ((0, R.Y5)(s),
                r({ action: "WIDGET_ADDED", ...s.getProfileEditAnalyticsOptions() }),
                (0, D.XA)(y.jM.WIDGET_ADDED));
        }, [s, r]);
    return (0, i.jsx)(T.A, {
        user: t,
        widget: s,
        subtle: !0,
        cta: (0, i.jsx)(T.A.Cta, {
            showSuggestedForYou: !0,
            heading: G.intl.format(G.t.OIzLCy, { applicationName: n.name }),
            content: G.intl.format(G.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(j.m, {
                        text: G.intl.string(G.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(O.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: L.P,
                            "aria-label": G.intl.string(G.t.WAI6xu),
                            onClick: () => {
                                l(w.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(j.m, {
                        text: G.intl.string(G.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(O.S, {
                            variant: "primary",
                            size: "sm",
                            icon: k.U,
                            "aria-label": G.intl.formatToPlainString(G.t.KfGahB, { applicationName: n.name }),
                            onClick: () => {
                                l(w.i.TAKE_ACTION), o();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
var U = n(192308),
    F = n(821609),
    H = n(307301),
    W = n(773669),
    B = n(79284);
function V(e) {
    let { className: t } = e,
        l = ["en-US", "en-GB"].includes((0, s.bG)([W.default], () => W.default.locale))
            ? G.intl.string(G.t.OYlggR)
            : G.intl.string(G.t.Y55Tua),
        { trackUserProfileEditAction: o } = (0, P.NJ)(),
        d = a.useCallback(() => {
            o({ action: "PRESS_ADD_WIDGET" }),
                (0, U.openModalLazy)(
                    async () => {
                        let { default: e } = await n.e("87591").then(n.bind(n, 333114));
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: o });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [o]);
    return (0, i.jsxs)("div", {
        className: r()(B.w, t),
        children: [
            (0, i.jsx)(c.E, { variant: "text-xs/semibold", color: "text-subtle", children: l }),
            (0, i.jsx)(F.$, {
                icon: H.j,
                text: G.intl.string(G.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: d,
            }),
        ],
    });
}
var z = n(192),
    X = n(128988),
    K = n(939318),
    Y = n(982599),
    q = n(515054),
    Q = n(534514),
    Z = n(725386),
    J = n(502944),
    $ = n(215538);
function ee() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, P.NJ)(),
        n = a.useRef(!1),
        l = (0, Z.A)({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        a.useEffect(() => {
            n.current || (e({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (n.current = !0));
        }, [e]),
        (0, i.jsxs)("div", {
            className: $.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: $.FS,
                    children: [
                        (0, i.jsx)(Q.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: G.intl.string(G.t["oqalC+"]),
                        }),
                        (0, i.jsx)(c.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: G.intl.string(G.t.O9SQ1c),
                        }),
                    ],
                }),
                (0, i.jsx)("ul", {
                    className: $.ZW,
                    "aria-label": G.intl.string(G.t["+EIBSA"]),
                    children: l.map((e) =>
                        (0, i.jsx)(
                            "li",
                            { children: (0, i.jsx)(J.A, { widget: e, size: "small", trackUserProfileEditAction: t }) },
                            e.getUniqueKey(),
                        ),
                    ),
                }),
            ],
        })
    );
}
var et = n(117444);
function en(e) {
    let { widget: t, ...n } = e;
    return t instanceof _.R
        ? (0, i.jsx)(T.A, { widget: t, ...n })
        : t instanceof b.Yy
          ? (0, i.jsx)(K.A, { widget: t, ...n })
          : null;
}
function ei() {
    return (0, i.jsxs)("div", {
        className: et.mJ,
        children: [
            (0, i.jsx)(o.m, { size: "xs" }),
            (0, i.jsx)(c.E, {
                "aria-label": G.intl.string(G.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: G.intl.string(G.t["7blcz6"]),
            }),
        ],
    });
}
function ea() {
    let {
        isLoading: e,
        suggestions: t,
        currentUser: n,
    } = (function (e) {
        let { enabled: t } = x.A.useConfig({ location: e.location }),
            n = (0, s.bG)([m.default], () => m.default.getCurrentUser()),
            i = (0, d.w$)({ location: e.location }),
            l = a.useMemo(() => i?.filter((e) => e.isEligibleForSuggestions()), [i]),
            r = a.useMemo(() => l?.map((e) => e.applicationId) ?? [], [l]),
            o = (0, g.A)(r),
            { tokens: c, fetched: I } = (0, u.j)(r),
            h = (0, f.A)(n?.id),
            A = null == n || null == l || null == c || !I;
        return a.useMemo(
            () =>
                A
                    ? { isLoading: A }
                    : t
                      ? { isLoading: A, suggestions: [], currentUser: n }
                      : {
                            isLoading: A,
                            suggestions: l
                                .map((e) => {
                                    let t = o.find((t) => t?.id === e.applicationId);
                                    return null == t ||
                                        null == c.find((t) => t.application.id === e.applicationId) ||
                                        null != h.find((t) => t instanceof _.R && t.applicationId === e.applicationId)
                                        ? null
                                        : { config: e, application: t, dismissibleContent: e.suggestedWidgetLinkedDc };
                                })
                                .filter(p.Vq),
                            currentUser: n,
                        },
            [t, A, l, n, o, c, h],
        );
    })({ location: "ApplicationWidgetUpsell" });
    return e || null == n
        ? null
        : (0, i.jsx)(h.Ay, {
              contentTypes: t.map((e) => e.dismissibleContent),
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: a, markAsDismissed: l } = e,
                      r = t.find((e) => e.dismissibleContent === a);
                  return null == r ? null : (0, i.jsx)(M, { user: n, application: r.application, onDismiss: l });
              },
          });
}
function el(e) {
    let { user: t, guildId: n, channelId: l } = e,
        r = (0, f.A)(t.id),
        o = (0, s.bG)([C.default], () => C.default.getId() === t.id),
        c = (() => {
            let [e, t] = (0, s.yK)([v.A], () => [v.A.ipCountryCode, v.A.ipCountryCodeRequest]),
                n = (0, A.Z)();
            return (
                a.useEffect(() => {
                    null == e && null == t && n && (0, I.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        u = (0, d.QR)({ location: "UserProfileModalV2Widgets" }),
        m = 0 === r.length && o,
        p = a.useMemo(() => r.filter(b.fu), [r]),
        x = a.useMemo(() => r.filter((e) => e instanceof _.R), [r]);
    (0, N.Y)(o, p),
        ((e, t) => {
            let n = a.useMemo(() => t.map((e) => e.applicationId), [t]);
            (0, g.A)(n);
            let { data: i, refetch: l } = (0, E.P)(e),
                r = a.useRef(null !== i);
            a.useEffect(() => {
                r.current && ((r.current = !1), l());
            }, [l]);
        })(t.id, x);
    let h = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                o &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(V, { className: et.cG }),
                            c && (0, i.jsx)(ei, {}),
                            u && (0, i.jsx)(ea, {}),
                        ],
                    }),
                r.map((e, a) =>
                    (0, i.jsx)(en, { widget: e, user: t, guildId: n, channelId: l, index: a }, e.getUniqueKey()),
                ),
            ],
        });
    return m ? (0, i.jsx)(ee, {}) : o ? (0, i.jsx)(z.D, { children: h() }) : h();
}
function er(e) {
    let { user: t, ...n } = e,
        l = a.useRef(null);
    (0, S.i)({ containerRef: l });
    let s = (0, Y.k)(t.id);
    return (0, i.jsxs)(q.K, {
        "data-scroller": !0,
        scrollerRef: l,
        className: r()(et.XG, { [et.az]: s }),
        fade: !0,
        children: [(0, i.jsx)(X.A, { scrollerRef: l }), (0, i.jsx)(el, { user: t, ...n })],
    });
}
