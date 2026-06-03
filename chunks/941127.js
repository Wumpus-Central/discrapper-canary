i.d(t, { A: () => ea, u: () => ei });
var n = i(627968),
    l = i(64700),
    s = i(503698),
    a = i.n(s),
    r = i(17928),
    c = i(885574),
    o = i(834730),
    u = i(457965),
    d = i(704824),
    m = i(429913),
    g = i(633075),
    f = i(667049),
    x = i(287809),
    I = i(403362),
    p = i(369374),
    A = i(753390),
    h = i(379848),
    E = i(840387),
    j = i(201718),
    N = i(495544),
    v = i(615405),
    T = i(289173),
    S = i(373842),
    _ = i(600761),
    C = i(605694),
    O = i(990078),
    k = i(657718),
    b = i(789645),
    R = i(478016),
    D = i(183555),
    L = i(735321),
    G = i(606758),
    P = i(518477),
    w = i(49999),
    y = i(375708);
function M(e) {
    let { user: t, application: i, onDismiss: s } = e,
        { trackUserProfileEditAction: a } = (0, D.NJ)(),
        r = l.useMemo(() => new g.R({ applicationId: i.id }), [i.id]),
        c = l.useCallback(() => {
            null != r &&
                ((0, L.Y5)(r),
                a({ action: "WIDGET_ADDED", ...r.getProfileEditAnalyticsOptions() }),
                (0, G.XA)(P.jM.WIDGET_ADDED));
        }, [r, a]);
    return (0, n.jsx)(C.A, {
        user: t,
        widget: r,
        subtle: !0,
        cta: (0, n.jsx)(C.A.Cta, {
            showSuggestedForYou: !0,
            heading: y.intl.format(y.t.OIzLCy, { applicationName: i.name }),
            content: y.intl.format(y.t.BQySru, { applicationName: i.name }),
            buttons: (0, n.jsxs)(n.Fragment, {
                children: [
                    (0, n.jsx)(O.m, {
                        text: y.intl.string(y.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, n.jsx)(k.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: b.P,
                            "aria-label": y.intl.string(y.t.WAI6xu),
                            onClick: () => {
                                s(w.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, n.jsx)(O.m, {
                        text: y.intl.string(y.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, n.jsx)(k.S, {
                            variant: "primary",
                            size: "sm",
                            icon: R.U,
                            "aria-label": y.intl.formatToPlainString(y.t.KfGahB, { applicationName: i.name }),
                            onClick: () => {
                                s(w.i.TAKE_ACTION), c();
                            },
                        }),
                    }),
                ],
            }),
        }),
    });
}
var U = i(192308),
    F = i(821609),
    W = i(307301),
    H = i(773669),
    B = i(79284);
function V(e) {
    let { className: t } = e,
        s = ["en-US", "en-GB"].includes((0, r.bG)([H.default], () => H.default.locale))
            ? y.intl.string(y.t.OYlggR)
            : y.intl.string(y.t.Y55Tua),
        { trackUserProfileEditAction: c } = (0, D.NJ)(),
        u = l.useCallback(() => {
            c({ action: "PRESS_ADD_WIDGET" }),
                (0, U.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([i.e("43284"), i.e("87591")]).then(i.bind(i, 333114));
                        return (t) => (0, n.jsx)(e, { ...t, trackUserProfileEditAction: c });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [c]);
    return (0, n.jsxs)("div", {
        className: a()(B.w, t),
        children: [
            (0, n.jsx)(o.E, { variant: "text-xs/semibold", color: "text-subtle", children: s }),
            (0, n.jsx)(F.$, {
                icon: W.j,
                text: y.intl.string(y.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: u,
            }),
        ],
    });
}
var X = i(192),
    z = i(128988),
    K = i(939318),
    Y = i(982599),
    q = i(515054),
    J = i(534514),
    Q = i(725386),
    Z = i(502944),
    $ = i(215538);
function ee() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, D.NJ)(),
        i = l.useRef(!1),
        s = (0, Q.A)({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            i.current || (e({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (i.current = !0));
        }, [e]),
        (0, n.jsxs)("div", {
            className: $.Ie,
            children: [
                (0, n.jsxs)("div", {
                    className: $.FS,
                    children: [
                        (0, n.jsx)(J.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: y.intl.string(y.t["oqalC+"]),
                        }),
                        (0, n.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: y.intl.string(y.t.O9SQ1c),
                        }),
                    ],
                }),
                (0, n.jsx)("ul", {
                    className: $.ZW,
                    "aria-label": y.intl.string(y.t["+EIBSA"]),
                    children: s.map((e) =>
                        (0, n.jsx)(
                            "li",
                            { children: (0, n.jsx)(Z.A, { widget: e, size: "small", trackUserProfileEditAction: t }) },
                            e.getUniqueKey(),
                        ),
                    ),
                }),
            ],
        })
    );
}
var et = i(117444);
function ei(e) {
    let { widget: t, ...i } = e;
    return t instanceof g.R
        ? (0, n.jsx)(C.A, { widget: t, ...i })
        : (0, T.fu)(t)
          ? (0, n.jsx)(K.A, { widget: t, ...i })
          : null;
}
function en() {
    return (0, n.jsxs)("div", {
        className: et.mJ,
        children: [
            (0, n.jsx)(c.m, { size: "xs" }),
            (0, n.jsx)(o.E, {
                "aria-label": y.intl.string(y.t["7blcz6"]),
                variant: "text-xs/normal",
                color: "text-muted",
                children: y.intl.string(y.t["7blcz6"]),
            }),
        ],
    });
}
function el() {
    let {
        isLoading: e,
        suggestions: t,
        currentUser: i,
    } = (function (e) {
        let { enabled: t } = p.A.useConfig({ location: e.location }),
            i = (0, r.bG)([x.default], () => x.default.getCurrentUser()),
            n = (0, u.w$)({ location: e.location }),
            s = l.useMemo(() => n?.filter((e) => e.isEligibleForSuggestions()), [n]),
            a = l.useMemo(() => s?.map((e) => e.applicationId) ?? [], [s]),
            c = (0, m.A)(a),
            { tokens: o, fetched: A } = (0, d.j)(a),
            h = (0, f.A)(i?.id),
            E = null == i || null == s || null == o || !A;
        return l.useMemo(
            () =>
                E
                    ? { isLoading: E }
                    : t
                      ? { isLoading: E, suggestions: [], currentUser: i }
                      : {
                            isLoading: E,
                            suggestions: s
                                .map((e) => {
                                    let t = c.find((t) => t?.id === e.applicationId);
                                    return null == t ||
                                        null == o.find((t) => t.application.id === e.applicationId) ||
                                        null != h.find((t) => t instanceof g.R && t.applicationId === e.applicationId)
                                        ? null
                                        : { config: e, application: t, dismissibleContent: e.suggestedWidgetLinkedDc };
                                })
                                .filter(I.Vq),
                            currentUser: i,
                        },
            [t, E, s, i, c, o, h],
        );
    })({ location: "ApplicationWidgetUpsell" });
    return e || null == i
        ? null
        : (0, n.jsx)(h.Ay, {
              contentTypes: t.map((e) => e.dismissibleContent),
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: l, markAsDismissed: s } = e,
                      a = t.find((e) => e.dismissibleContent === l);
                  return null == a ? null : (0, n.jsx)(M, { user: i, application: a.application, onDismiss: s });
              },
          });
}
function es(e) {
    let { user: t, guildId: i, channelId: s } = e,
        a = (0, f.A)(t.id),
        c = (0, r.bG)([N.default], () => N.default.getId() === t.id),
        o = (() => {
            let [e, t] = (0, r.yK)([v.A], () => [v.A.ipCountryCode, v.A.ipCountryCodeRequest]),
                i = (0, E.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && i && (0, A.xe)();
                }, [e, t, i]),
                "GB" === e && i
            );
        })(),
        d = (0, u.QR)({ location: "UserProfileModalV2Widgets" }),
        x = 0 === a.length && c,
        I = l.useMemo(() => a.filter(T.fu), [a]),
        p = l.useMemo(() => a.filter((e) => e instanceof g.R), [a]);
    (0, S.Y)(c, I),
        ((e, t) => {
            let i = l.useMemo(() => t.map((e) => e.applicationId), [t]);
            (0, m.A)(i);
            let { data: n, refetch: s } = (0, j.P)(e),
                a = l.useRef(null !== n);
            l.useEffect(() => {
                a.current && ((a.current = !1), s());
            }, [s]);
        })(t.id, p);
    let h = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                c &&
                    (0, n.jsxs)(n.Fragment, {
                        children: [
                            (0, n.jsx)(V, { className: et.cG }),
                            o && (0, n.jsx)(en, {}),
                            d && (0, n.jsx)(el, {}),
                        ],
                    }),
                a.map((e, l) =>
                    (0, n.jsx)(ei, { widget: e, user: t, guildId: i, channelId: s, index: l }, e.getUniqueKey()),
                ),
            ],
        });
    return x ? (0, n.jsx)(ee, {}) : c ? (0, n.jsx)(X.D, { children: h() }) : h();
}
function ea(e) {
    let { user: t, ...i } = e,
        s = l.useRef(null);
    (0, _.i)({ containerRef: s });
    let r = (0, Y.k)(t.id);
    return (0, n.jsxs)(q.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: a()(et.XG, { [et.az]: r }),
        fade: !0,
        children: [(0, n.jsx)(z.A, { scrollerRef: s }), (0, n.jsx)(es, { user: t, ...i })],
    });
}
