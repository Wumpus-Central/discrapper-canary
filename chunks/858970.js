n.d(t, { Z: () => O }), n(388685), n(953529);
var r = n(951288),
    o = n(442837),
    i = n(755721),
    l = n(481060),
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
    h = n(848780),
    x = n(907179),
    _ = n(981631),
    j = n(671955),
    v = n(388032),
    y = n(220566);
function I(e) {
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
function O(e) {
    let {
            user: t,
            guildId: n,
            channelId: O,
            messageId: Z,
            roleId: P,
            transitionState: T,
            openedAt: C,
            onHide: A,
            sourceAnalyticsLocations: N = [],
        } = e,
        E = n === _.ME ? void 0 : n,
        S = (0, o.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: w } = (0, c.ZP)([...N, S ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        B = (0, f.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            showGuildProfile: !0,
            guildId: E,
            channelId: O,
            messageId: Z,
            roleId: P,
        }),
        L = [
            {
                icon: l.owK,
                description: v.intl.string(v.t.kcuWvb),
            },
            {
                icon: l.owK,
                description: v.intl.string(S ? v.t.QxrDY2 : v.t.W6fjkZ),
            },
        ],
        D = (0, m.ZP)(t.id, E),
        M = u.ZP.getName(null == D ? void 0 : D.guildId, O, t),
        U = v.intl.formatToPlainString(v.t.KRe1Fh, { name: M });
    return (0, r.jsx)(c.Gt, {
        value: w,
        children: (0, r.jsx)(f.Mt, {
            value: B,
            openedAt: C,
            fetchStartedAt: null == D ? void 0 : D.fetchStartedAt,
            fetchEndedAt: null == D ? void 0 : D.fetchEndedAt,
            isLoaded: null == D ? void 0 : D.isLoaded,
            children: (0, r.jsx)(l.Y0X, {
                "data-migration-pending": !0,
                transitionState: T,
                className: y.root,
                "aria-label": U,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, r.jsxs)(g.Z, {
                    user: t,
                    displayProfile: D,
                    themeType: j.l.MODAL_V2,
                    children: [
                        (0, r.jsx)("div", { className: y.background }),
                        (0, r.jsxs)("div", {
                            className: y.content,
                            children: [
                                (0, r.jsx)(b.Z, {
                                    user: t,
                                    guildId: E,
                                    iconColor: l.TVs.colors.TEXT_DEFAULT,
                                }),
                                (0, r.jsxs)("div", {
                                    className: y.textContainer,
                                    children: [
                                        (0, r.jsx)(l.X6q, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: v.intl.string(v.t.b33pLC),
                                        }),
                                        (0, r.jsx)(l.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: v.intl.format(S ? v.t.T7QiLi : v.t.MnEow8, { username: M }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: y.safetyTable,
                                    children: L.map((e, t) => {
                                        let { icon: n, description: o } = e;
                                        return (0, r.jsx)(
                                            s.JZ,
                                            {
                                                icon: n,
                                                title: o,
                                                titleVariant: "text-md/normal",
                                                color: l.TVs.colors.TEXT_DEFAULT.css,
                                            },
                                            t,
                                        );
                                    }),
                                }),
                                (0, r.jsxs)(l.Kqy, {
                                    align: "center",
                                    children: [
                                        (0, r.jsx)(x.Z, {
                                            size: i.Ph.MEDIUM,
                                            isBlocked: S,
                                            onClick: () => {
                                                A(),
                                                    (0, p.pQ)(
                                                        I(
                                                            {
                                                                action: S
                                                                    ? "VIEW_BLOCKED_PROFILE"
                                                                    : "VIEW_IGNORED_PROFILE",
                                                                analyticsLocations: w,
                                                            },
                                                            B,
                                                        ),
                                                    );
                                            },
                                        }),
                                        (0, r.jsx)(h.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                A(),
                                                    (0, p.pQ)(
                                                        I(
                                                            {
                                                                action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                analyticsLocations: w,
                                                            },
                                                            B,
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
