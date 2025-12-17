t.d(n, { Z: () => Z }), t(388685), t(953529);
var l = t(54381),
    i = t(442837),
    o = t(481060),
    r = t(100527),
    a = t(906732),
    c = t(138201),
    s = t(699516),
    d = t(5192),
    u = t(785717),
    f = t(221292),
    m = t(687158),
    p = t(316027),
    x = t(502762),
    h = t(848780),
    v = t(907179),
    b = t(981631),
    j = t(671955),
    g = t(388032),
    I = t(162074);
function y(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols &&
            (l = l.concat(
                Object.getOwnPropertySymbols(t).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                }),
            )),
            l.forEach(function (n) {
                var l;
                (l = t[n]),
                    n in e
                        ? Object.defineProperty(e, n, {
                              value: l,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[n] = l);
            });
    }
    return e;
}
function Z(e) {
    let {
            user: n,
            guildId: t,
            channelId: Z,
            messageId: O,
            roleId: T,
            transitionState: N,
            openedAt: A,
            onHide: P,
            sourceAnalyticsLocations: E = [],
        } = e,
        _ = t === b.ME ? void 0 : t,
        C = (0, i.e7)([s.Z], () => s.Z.isBlocked(n.id)),
        { analyticsLocations: S } = (0, a.ZP)([...E, C ? r.Z.BLOCKED_PROFILE_MODAL : r.Z.IGNORED_PROFILE_MODAL]),
        w = (0, u.ZB)({
            layout: "MODAL_V2",
            userId: n.id,
            showGuildProfile: !0,
            guildId: _,
            channelId: Z,
            messageId: O,
            roleId: T,
        }),
        D = [
            {
                icon: o.owK,
                description: g.intl.string(g.t.kcuWva),
            },
            {
                icon: o.owK,
                description: g.intl.string(C ? g.t.QxrDY1 : g.t.W6fjkS),
            },
        ],
        L = (0, m.ZP)(n.id, _),
        R = d.ZP.getName(null == L ? void 0 : L.guildId, Z, n),
        M = g.intl.formatToPlainString(g.t.KRe1Fk, { name: R });
    return (0, l.jsx)(a.Gt, {
        value: S,
        children: (0, l.jsx)(u.Mt, {
            value: w,
            openedAt: A,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, l.jsx)(o.Y0X, {
                "data-migration-pending": !0,
                transitionState: N,
                className: I.root,
                "aria-label": M,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, l.jsxs)(x.Z, {
                    user: n,
                    displayProfile: L,
                    themeType: j.l.MODAL_V2,
                    children: [
                        (0, l.jsx)("div", { className: I.background }),
                        (0, l.jsxs)("div", {
                            className: I.content,
                            children: [
                                (0, l.jsx)(p.Z, {
                                    user: n,
                                    guildId: _,
                                }),
                                (0, l.jsxs)("div", {
                                    className: I.textContainer,
                                    children: [
                                        (0, l.jsx)(o.Heading, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: g.intl.string(g.t.b33pLD),
                                        }),
                                        (0, l.jsx)(o.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: g.intl.format(C ? g.t.T7QiLn : g.t.MnEowy, { username: R }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: I.safetyTable,
                                    children: D.map((e, n) => {
                                        let { icon: t, description: i } = e;
                                        return (0, l.jsx)(
                                            c.JZ,
                                            {
                                                icon: t,
                                                title: i,
                                                titleVariant: "text-md/normal",
                                                color: o.TVs.colors.TEXT_DEFAULT.css,
                                            },
                                            n,
                                        );
                                    }),
                                }),
                                (0, l.jsxs)(o.Kqy, {
                                    align: "center",
                                    children: [
                                        (0, l.jsx)(v.Z, {
                                            size: "md",
                                            isBlocked: C,
                                            onClick: () => {
                                                P(),
                                                    (0, f.pQ)(
                                                        y(
                                                            {
                                                                action: C
                                                                    ? "VIEW_BLOCKED_PROFILE"
                                                                    : "VIEW_IGNORED_PROFILE",
                                                                analyticsLocations: S,
                                                            },
                                                            w,
                                                        ),
                                                    );
                                            },
                                        }),
                                        (0, l.jsx)(h.Z, {
                                            userId: n.id,
                                            onClick: () => {
                                                P(),
                                                    (0, f.pQ)(
                                                        y(
                                                            {
                                                                action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                analyticsLocations: S,
                                                            },
                                                            w,
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
