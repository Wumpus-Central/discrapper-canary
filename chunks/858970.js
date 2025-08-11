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
    m = n(221292),
    p = n(687158),
    g = n(316027),
    b = n(502762),
    j = n(848780),
    h = n(907179),
    x = n(228168),
    y = n(981631),
    v = n(388032),
    O = n(247787);
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
            roleId: Z,
            transitionState: N,
            openedAt: T,
            onHide: E,
            sourceAnalyticsLocations: w = [],
        } = e,
        S = n === y.ME ? void 0 : n,
        A = (0, l.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: C } = (0, c.ZP)([...w, A ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        L = (0, f.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            showGuildProfile: !0,
            guildId: S,
            channelId: I,
            messageId: P,
            roleId: Z,
        }),
        D = [
            {
                icon: o.owK,
                description: v.intl.string(v.t.kcuWvb),
            },
            {
                icon: o.owK,
                description: v.intl.string(A ? v.t.QxrDY2 : v.t.W6fjkZ),
            },
        ],
        k = (0, p.ZP)(t.id, S),
        B = u.ZP.getName(null == k ? void 0 : k.guildId, I, t),
        R = v.intl.formatToPlainString(v.t.KRe1Fh, { name: B });
    return (0, r.jsx)(c.Gt, {
        value: C,
        children: (0, r.jsx)(f.Mt, {
            value: L,
            openedAt: T,
            fetchStartedAt: null == k ? void 0 : k.fetchStartedAt,
            fetchEndedAt: null == k ? void 0 : k.fetchEndedAt,
            isLoaded: null == k ? void 0 : k.isLoaded,
            children: (0, r.jsx)(o.Y0X, {
                "data-migration-pending": !0,
                transitionState: N,
                className: O.root,
                "aria-label": R,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, r.jsxs)(b.Z, {
                    user: t,
                    displayProfile: k,
                    themeType: x.lY.MODAL_V2,
                    children: [
                        (0, r.jsx)("div", { className: O.background }),
                        (0, r.jsxs)("div", {
                            className: O.content,
                            children: [
                                (0, r.jsx)(g.Z, {
                                    user: t,
                                    guildId: S,
                                    iconColor: o.TVs.colors.TEXT_DEFAULT,
                                }),
                                (0, r.jsxs)("div", {
                                    className: O.textContainer,
                                    children: [
                                        (0, r.jsx)(o.X6q, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: v.intl.string(v.t.b33pLC),
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: v.intl.format(A ? v.t.T7QiLi : v.t.MnEow8, { username: B }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: O.safetyTable,
                                    children: D.map((e, t) => {
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
                                        (0, r.jsx)(h.Z, {
                                            size: i.Ph.MEDIUM,
                                            isBlocked: A,
                                            onClick: () => {
                                                E(),
                                                    (0, m.pQ)(
                                                        _(
                                                            {
                                                                action: A
                                                                    ? "VIEW_BLOCKED_PROFILE"
                                                                    : "VIEW_IGNORED_PROFILE",
                                                                analyticsLocations: C,
                                                            },
                                                            L,
                                                        ),
                                                    );
                                            },
                                        }),
                                        (0, r.jsx)(j.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                E(),
                                                    (0, m.pQ)(
                                                        _(
                                                            {
                                                                action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                analyticsLocations: C,
                                                            },
                                                            L,
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
