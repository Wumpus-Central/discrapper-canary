n.d(t, { Z: () => I }), n(388685), n(953529);
var r = n(255367),
    l = n(442837),
    i = n(755721),
    o = n(481060),
    a = n(100527),
    c = n(906732),
    s = n(138201),
    d = n(699516),
    u = n(5192),
    f = n(785717),
    p = n(221292),
    m = n(687158),
    b = n(316027),
    g = n(502762),
    j = n(848780),
    y = n(907179),
    O = n(228168),
    x = n(981631),
    h = n(388032),
    v = n(931944);
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function I(e) {
    let {
            user: t,
            guildId: n,
            channelId: I,
            messageId: P,
            roleId: E,
            transitionState: T,
            openedAt: Z,
            onHide: N,
            sourceAnalyticsLocations: S = [],
        } = e,
        w = n === x.ME ? void 0 : n,
        A = (0, l.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: C } = (0, c.ZP)([...S, A ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        D = (0, f.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            showGuildProfile: !0,
            guildId: w,
            channelId: I,
            messageId: P,
            roleId: E,
        }),
        L = [
            {
                icon: o.owK,
                description: h.intl.string(h.t.kcuWvb),
            },
            {
                icon: o.owK,
                description: h.intl.string(A ? h.t.QxrDY2 : h.t.W6fjkZ),
            },
        ],
        R = (0, m.ZP)(t.id, w),
        k = u.ZP.getName(null == R ? void 0 : R.guildId, I, t),
        G = h.intl.formatToPlainString(h.t.KRe1Fh, { name: k });
    return (0, r.jsx)(c.Gt, {
        value: C,
        children: (0, r.jsx)(f.Mt, {
            value: D,
            openedAt: Z,
            fetchStartedAt: null == R ? void 0 : R.fetchStartedAt,
            fetchEndedAt: null == R ? void 0 : R.fetchEndedAt,
            isLoaded: null == R ? void 0 : R.isLoaded,
            children: (0, r.jsx)(o.Y0X, {
                "data-migration-pending": !0,
                transitionState: T,
                className: v.root,
                "aria-label": G,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, r.jsxs)(g.Z, {
                    user: t,
                    displayProfile: R,
                    themeType: O.lY.MODAL_V2,
                    children: [
                        (0, r.jsx)("div", { className: v.background }),
                        (0, r.jsxs)("div", {
                            className: v.content,
                            children: [
                                (0, r.jsx)(b.Z, {
                                    user: t,
                                    guildId: w,
                                    iconColor: o.TVs.colors.TEXT_DEFAULT,
                                }),
                                (0, r.jsxs)("div", {
                                    className: v.textContainer,
                                    children: [
                                        (0, r.jsx)(o.X6q, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: h.intl.string(h.t.b33pLC),
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: h.intl.format(A ? h.t.T7QiLi : h.t.MnEow8, { username: k }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: v.safetyTable,
                                    children: L.map((e, t) => {
                                        let { icon: n, description: l } = e;
                                        return (0, r.jsx)(
                                            s.JZ,
                                            {
                                                icon: n,
                                                title: l,
                                                titleVariant: "text-md/normal",
                                                color: o.TVs.colors.TEXT_DEFAULT.css,
                                            },
                                            t,
                                        );
                                    }),
                                }),
                                (0, r.jsxs)(o.Kqy, {
                                    align: "center",
                                    children: [
                                        (0, r.jsx)(y.Z, {
                                            size: i.Ph.MEDIUM,
                                            isBlocked: A,
                                            onClick: () => {
                                                N(),
                                                    (0, p.pQ)(
                                                        _(
                                                            {
                                                                action: A
                                                                    ? "VIEW_BLOCKED_PROFILE"
                                                                    : "VIEW_IGNORED_PROFILE",
                                                                analyticsLocations: C,
                                                            },
                                                            D,
                                                        ),
                                                    );
                                            },
                                        }),
                                        (0, r.jsx)(j.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                N(),
                                                    (0, p.pQ)(
                                                        _(
                                                            {
                                                                action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                analyticsLocations: C,
                                                            },
                                                            D,
                                                        ),
                                                    );
                                            },
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        }),
    });
}
