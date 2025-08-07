n.d(t, { Z: () => I }), n(388685), n(953529);
var r = n(255367),
    l = n(442837),
    o = n(755721),
    i = n(481060),
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
    j = n(848780),
    h = n(907179),
    y = n(228168),
    O = n(981631),
    x = n(388032),
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
        A = n === O.ME ? void 0 : n,
        w = (0, l.e7)([d.Z], () => d.Z.isBlocked(t.id)),
        { analyticsLocations: C } = (0, c.ZP)([...S, w ? a.Z.BLOCKED_PROFILE_MODAL : a.Z.IGNORED_PROFILE_MODAL]),
        R = (0, f.ZB)({
            layout: "MODAL_V2",
            userId: t.id,
            showGuildProfile: !0,
            guildId: A,
            channelId: I,
            messageId: P,
            roleId: E,
        }),
        G = [
            {
                icon: i.owK,
                description: x.intl.string(x.t.kcuWvb),
            },
            {
                icon: i.owK,
                description: x.intl.string(w ? x.t.QxrDY2 : x.t.W6fjkZ),
            },
        ],
        L = (0, m.ZP)(t.id, A),
        M = u.ZP.getName(null == L ? void 0 : L.guildId, I, t),
        D = x.intl.formatToPlainString(x.t.KRe1Fh, { name: M });
    return (0, r.jsx)(c.Gt, {
        value: C,
        children: (0, r.jsx)(f.Mt, {
            value: R,
            openedAt: N,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, r.jsx)(i.Y0X, {
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
                                    iconColor: i.TVs.colors.TEXT_DEFAULT,
                                }),
                                (0, r.jsxs)("div", {
                                    className: v.textContainer,
                                    children: [
                                        (0, r.jsx)(i.X6q, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: x.intl.string(x.t.b33pLC),
                                        }),
                                        (0, r.jsx)(i.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: x.intl.format(w ? x.t.T7QiLi : x.t.MnEow8, { username: M }),
                                        }),
                                    ],
                                }),
                                (0, r.jsx)("div", {
                                    className: v.safetyTable,
                                    children: G.map((e, t) => {
                                        let { icon: n, description: l } = e;
                                        return (0, r.jsx)(
                                            s.JZ,
                                            {
                                                icon: n,
                                                title: l,
                                                titleVariant: "text-md/normal",
                                                color: i.TVs.colors.TEXT_DEFAULT.css,
                                            },
                                            t,
                                        );
                                    }),
                                }),
                                (0, r.jsxs)(i.Kqy, {
                                    align: "center",
                                    children: [
                                        (0, r.jsx)(h.Z, {
                                            size: o.Ph.MEDIUM,
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
                                                            R,
                                                        ),
                                                    );
                                            },
                                        }),
                                        (0, r.jsx)(j.Z, {
                                            userId: t.id,
                                            onClick: () => {
                                                T(),
                                                    (0, p.pQ)(
                                                        _(
                                                            {
                                                                action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                analyticsLocations: C,
                                                            },
                                                            R,
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
