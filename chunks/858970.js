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
    g = n(316027),
    b = n(502762),
    h = n(848780),
    j = n(907179),
    y = n(228168),
    x = n(981631),
    O = n(388032),
    v = n(247787);
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
            transitionState: Z,
            openedAt: N,
            onHide: T,
            sourceAnalyticsLocations: S = [],
        } = e,
        A = n === x.ME ? void 0 : n,
        w = (0, l.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: C } = (0, c.ZP)([...S, w ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        G = (0, f.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            showGuildProfile: !0,
            guildId: A,
            channelId: I,
            messageId: P,
            roleId: E,
        }),
        R = [
            {
                icon: o.owK,
                description: O.intl.string(O.t.kcuWvb),
            },
            {
                icon: o.owK,
                description: O.intl.string(w ? O.t.QxrDY2 : O.t.W6fjkZ),
            },
        ],
        L = (0, m.ZP)(t.id, A),
        M = u.ZP.getName(null == L ? void 0 : L.guildId, I, t),
        D = O.intl.formatToPlainString(O.t.KRe1Fh, { name: M });
    return (0, r.jsx)(c.Gt, {
        value: C,
        children: (0, r.jsx)(f.Mt, {
            value: G,
            openedAt: N,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, r.jsx)(o.Y0X, {
                "data-migration-pending": !0,
                transitionState: Z,
                className: v.root,
                "aria-label": D,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, r.jsxs)(b.Z, {
                    user: t,
                    displayProfile: L,
                    themeType: y.lY.MODAL_V2,
                    children: [
                        (0, r.jsx)("div", { className: v.background }),
                        (0, r.jsxs)("div", {
                            className: v.content,
                            children: [
                                (0, r.jsx)(g.Z, {
                                    user: t,
                                    guildId: A,
                                    iconColor: o.TVs.colors.TEXT_DEFAULT,
                                }),
                                (0, r.jsxs)("div", {
                                    className: v.textContainer,
                                    children: [
                                        (0, r.jsx)(o.X6q, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: O.intl.string(O.t.b33pLC),
                                        }),
                                        (0, r.jsx)(o.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: O.intl.format(w ? O.t.T7QiLi : O.t.MnEow8, { username: M }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: v.safetyTable,
                                    children: R.map((e, t) => {
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
                                        (0, r.jsx)(j.Z, {
                                            size: i.Ph.MEDIUM,
                                            isBlocked: w,
                                            onClick: () => {
                                                T(),
                                                    (0, p.pQ)(
                                                        _(
                                                            {
                                                                action: w
                                                                    ? "VIEW_BLOCKED_PROFILE"
                                                                    : "VIEW_IGNORED_PROFILE",
                                                                analyticsLocations: C,
                                                            },
                                                            G,
                                                        ),
                                                    );
                                            },
                                        }),
                                        (0, r.jsx)(h.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                T(),
                                                    (0, p.pQ)(
                                                        _(
                                                            {
                                                                action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                analyticsLocations: C,
                                                            },
                                                            G,
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
