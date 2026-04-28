n.d(t, { A: () => ea, u: () => en });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(17928),
    c = n(885574),
    o = n(834730),
    u = n(395332),
    d = n(704824),
    g = n(429913),
    m = n(633075),
    f = n(667049),
    x = n(287809),
    p = n(403362),
    I = n(369374),
    A = n(323082),
    h = n(379848),
    E = n(840387),
    j = n(201718),
    N = n(495544),
    v = n(615405),
    T = n(289173),
    S = n(373842),
    _ = n(600761),
    C = n(605694),
    O = n(990078),
    k = n(657718),
    R = n(789645),
    b = n(478016),
    D = n(183555),
    L = n(735321),
    P = n(606758),
    G = n(518477),
    w = n(49999),
    y = n(985018);
function M(e) {
    let { user: t, application: n, onDismiss: s } = e,
        { trackUserProfileEditAction: a } = (0, D.NJ)(),
        r = l.useMemo(() => new m.R({ applicationId: n.id }), [n.id]),
        c = l.useCallback(() => {
            null != r &&
                ((0, L.Y5)(r),
                a({ action: "WIDGET_ADDED", ...r.getProfileEditAnalyticsOptions() }),
                (0, P.XA)(G.jM.WIDGET_ADDED));
        }, [r, a]);
    return (0, i.jsx)(C.A, {
        user: t,
        widget: r,
        subtle: !0,
        cta: (0, i.jsx)(C.A.Cta, {
            showSuggestedForYou: !0,
            heading: y.intl.format(y.t.OIzLCy, { applicationName: n.name }),
            content: y.intl.format(y.t.BQySru, { applicationName: n.name }),
            buttons: (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(O.m, {
                        text: y.intl.string(y.t.WAI6xu),
                        ariaHidden: !0,
                        children: (0, i.jsx)(k.S, {
                            variant: "secondary",
                            size: "sm",
                            icon: R.P,
                            "aria-label": y.intl.string(y.t.WAI6xu),
                            onClick: () => {
                                s(w.i.USER_DISMISS);
                            },
                        }),
                    }),
                    (0, i.jsx)(O.m, {
                        text: y.intl.string(y.t["lBG2s/"]),
                        ariaHidden: !0,
                        children: (0, i.jsx)(k.S, {
                            variant: "primary",
                            size: "sm",
                            icon: b.U,
                            "aria-label": y.intl.formatToPlainString(y.t.KfGahB, { applicationName: n.name }),
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
var U = n(192308),
    F = n(821609),
    W = n(307301),
    H = n(773669),
    X = n(79284);
function B(e) {
    let { className: t } = e,
        s = ["en-US", "en-GB"].includes((0, r.bG)([H.default], () => H.default.locale))
            ? y.intl.string(y.t.OYlggR)
            : y.intl.string(y.t.Y55Tua),
        { trackUserProfileEditAction: c } = (0, D.NJ)(),
        u = l.useCallback(() => {
            c({ action: "PRESS_ADD_WIDGET" }),
                (0, U.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([n.e("8978"), n.e("87591")]).then(n.bind(n, 333114));
                        return (t) => (0, i.jsx)(e, { ...t, trackUserProfileEditAction: c });
                    },
                    { stackingBehavior: "stack" },
                );
        }, [c]);
    return (0, i.jsxs)("div", {
        className: a()(X.w, t),
        children: [
            (0, i.jsx)(o.E, { variant: "text-xs/semibold", color: "text-subtle", children: s }),
            (0, i.jsx)(F.$, {
                icon: W.j,
                text: y.intl.string(y.t["lBG2s/"]),
                size: "sm",
                variant: "secondary",
                onClick: u,
            }),
        ],
    });
}
var V = n(192),
    K = n(128988),
    Y = n(939318),
    z = n(982599),
    q = n(515054),
    J = n(534514),
    Q = n(725386),
    Z = n(502944),
    $ = n(215538);
function ee() {
    let { trackUserProfileAction: e, trackUserProfileEditAction: t } = (0, D.NJ)(),
        n = l.useRef(!1),
        s = (0, Q.A)({ location: "UserProfileModalV2WidgetsEmptyState" });
    return (
        l.useEffect(() => {
            n.current || (e({ action: "VIEW_WIDGETS_EMPTY_STATE" }), (n.current = !0));
        }, [e]),
        (0, i.jsxs)("div", {
            className: $.Ie,
            children: [
                (0, i.jsxs)("div", {
                    className: $.FS,
                    children: [
                        (0, i.jsx)(J.D, {
                            variant: "heading-md/medium",
                            color: "text-strong",
                            children: y.intl.string(y.t["oqalC+"]),
                        }),
                        (0, i.jsx)(o.E, {
                            variant: "text-sm/normal",
                            color: "text-default",
                            children: y.intl.string(y.t.O9SQ1c),
                        }),
                    ],
                }),
                (0, i.jsx)("ul", {
                    className: $.ZW,
                    "aria-label": y.intl.string(y.t["+EIBSA"]),
                    children: s.map((e) =>
                        (0, i.jsx)(
                            "li",
                            { children: (0, i.jsx)(Z.A, { widget: e, size: "small", trackUserProfileEditAction: t }) },
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
    return t instanceof m.R
        ? (0, i.jsx)(C.A, { widget: t, ...n })
        : (0, T.fu)(t)
          ? (0, i.jsx)(Y.A, { widget: t, ...n })
          : null;
}
function ei() {
    return (0, i.jsxs)("div", {
        className: et.mJ,
        children: [
            (0, i.jsx)(c.m, { size: "xs" }),
            (0, i.jsx)(o.E, {
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
        currentUser: n,
    } = (function (e) {
        let { enabled: t } = I.A.useConfig({ location: e.location }),
            n = (0, r.bG)([x.default], () => x.default.getCurrentUser()),
            i = (0, u.w$)({ location: e.location }),
            s = l.useMemo(() => i?.filter((e) => e.isEligibleForSuggestions()), [i]),
            a = l.useMemo(() => s?.map((e) => e.applicationId) ?? [], [s]),
            c = (0, g.A)(a),
            { tokens: o, fetched: A } = (0, d.j)(a),
            h = (0, f.A)(n?.id),
            E = null == n || null == s || null == o || !A;
        return l.useMemo(
            () =>
                E
                    ? { isLoading: E }
                    : t
                      ? { isLoading: E, suggestions: [], currentUser: n }
                      : {
                            isLoading: E,
                            suggestions: s
                                .map((e) => {
                                    let t = c.find((t) => t?.id === e.applicationId);
                                    return null == t ||
                                        null == o.find((t) => t.application.id === e.applicationId) ||
                                        null != h.find((t) => t instanceof m.R && t.applicationId === e.applicationId)
                                        ? null
                                        : { config: e, application: t, dismissibleContent: e.suggestedWidgetLinkedDc };
                                })
                                .filter(p.Vq),
                            currentUser: n,
                        },
            [t, E, s, n, c, o, h],
        );
    })({ location: "ApplicationWidgetUpsell" });
    return e || null == n
        ? null
        : (0, i.jsx)(h.Ay, {
              contentTypes: t.map((e) => e.dismissibleContent),
              bypassAutoDismiss: !0,
              children: (e) => {
                  let { visibleContent: l, markAsDismissed: s } = e,
                      a = t.find((e) => e.dismissibleContent === l);
                  return null == a ? null : (0, i.jsx)(M, { user: n, application: a.application, onDismiss: s });
              },
          });
}
function es(e) {
    let { user: t, guildId: n, channelId: s } = e,
        a = (0, f.A)(t.id),
        c = (0, r.bG)([N.default], () => N.default.getId() === t.id),
        o = (() => {
            let [e, t] = (0, r.yK)([v.A], () => [v.A.ipCountryCode, v.A.ipCountryCodeRequest]),
                n = (0, E.Z)();
            return (
                l.useEffect(() => {
                    null == e && null == t && n && (0, A.xe)();
                }, [e, t, n]),
                "GB" === e && n
            );
        })(),
        d = (0, u.QR)({ location: "UserProfileModalV2Widgets" }),
        x = 0 === a.length && c,
        p = l.useMemo(() => a.filter(T.fu), [a]),
        I = l.useMemo(() => a.filter((e) => e instanceof m.R), [a]);
    (0, S.Y)(c, p),
        ((e, t) => {
            let n = l.useMemo(() => t.map((e) => e.applicationId), [t]);
            (0, g.A)(n);
            let { data: i, refetch: s } = (0, j.P)(e),
                a = l.useRef(null !== i);
            l.useEffect(() => {
                a.current && ((a.current = !1), s());
            }, [s]);
        })(t.id, I);
    let h = () =>
        (0, i.jsxs)(i.Fragment, {
            children: [
                c &&
                    (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(B, { className: et.cG }),
                            o && (0, i.jsx)(ei, {}),
                            d && (0, i.jsx)(el, {}),
                        ],
                    }),
                a.map((e, l) =>
                    (0, i.jsx)(en, { widget: e, user: t, guildId: n, channelId: s, index: l }, e.getUniqueKey()),
                ),
            ],
        });
    return x ? (0, i.jsx)(ee, {}) : c ? (0, i.jsx)(V.D, { children: h() }) : h();
}
function ea(e) {
    let { user: t, ...n } = e,
        s = l.useRef(null);
    (0, _.i)({ containerRef: s });
    let r = (0, z.k)(t.id);
    return (0, i.jsxs)(q.K, {
        "data-scroller": !0,
        scrollerRef: s,
        className: a()(et.XG, { [et.az]: r }),
        fade: !0,
        children: [(0, i.jsx)(K.A, { scrollerRef: s }), (0, i.jsx)(es, { user: t, ...n })],
    });
}
