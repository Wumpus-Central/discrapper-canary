t.d(n, { Z: () => Z }), t(388685), t(953529);
var l = t(54381),
    i = t(442837),
    o = t(481060),
    r = t(100527),
    s = t(906732),
    a = t(138201),
    c = t(699516),
    d = t(5192),
    u = t(785717),
    m = t(221292),
    p = t(687158),
    f = t(316027),
    x = t(502762),
    h = t(848780),
    v = t(907179),
    j = t(981631),
    g = t(671955),
    b = t(388032),
    I = t(220566);
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
            messageId: _,
            roleId: O,
            transitionState: N,
            openedAt: T,
            onHide: A,
            sourceAnalyticsLocations: P = [],
        } = e,
        E = t === j.ME ? void 0 : t,
        C = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
        { analyticsLocations: S } = (0, s.ZP)([...P, C ? r.Z.BLOCKED_PROFILE_MODAL : r.Z.IGNORED_PROFILE_MODAL]),
        w = (0, u.ZB)({
            layout: "MODAL_V2",
            userId: n.id,
            showGuildProfile: !0,
            guildId: E,
            channelId: Z,
            messageId: _,
            roleId: O,
        }),
        D = [
            {
                icon: o.owK,
                description: b.intl.string(b.t.kcuWva),
            },
            {
                icon: o.owK,
                description: b.intl.string(C ? b.t.QxrDY1 : b.t.W6fjkS),
            },
        ],
        R = (0, p.ZP)(n.id, E),
        L = d.ZP.getName(null == R ? void 0 : R.guildId, Z, n),
        M = b.intl.formatToPlainString(b.t.KRe1Fk, { name: L });
    return (0, l.jsx)(s.Gt, {
        value: S,
        children: (0, l.jsx)(u.Mt, {
            value: w,
            openedAt: T,
            fetchStartedAt: null == R ? void 0 : R.fetchStartedAt,
            fetchEndedAt: null == R ? void 0 : R.fetchEndedAt,
            isLoaded: null == R ? void 0 : R.isLoaded,
            children: (0, l.jsx)(o.Y0X, {
                "data-migration-pending": !0,
                transitionState: N,
                className: I.root,
                "aria-label": M,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, l.jsxs)(x.Z, {
                    user: n,
                    displayProfile: R,
                    themeType: g.l.MODAL_V2,
                    children: [
                        (0, l.jsx)("div", { className: I.background }),
                        (0, l.jsxs)("div", {
                            className: I.content,
                            children: [
                                (0, l.jsx)(f.Z, {
                                    user: n,
                                    guildId: E,
                                }),
                                (0, l.jsxs)("div", {
                                    className: I.textContainer,
                                    children: [
                                        (0, l.jsx)(o.Heading, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: b.intl.string(b.t.b33pLD),
                                        }),
                                        (0, l.jsx)(o.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: b.intl.format(C ? b.t.T7QiLn : b.t.MnEowy, { username: L }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: I.safetyTable,
                                    children: D.map((e, n) => {
                                        let { icon: t, description: i } = e;
                                        return (0, l.jsx)(
                                            a.JZ,
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
                                                A(),
                                                    (0, m.pQ)(
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
                                                A(),
                                                    (0, m.pQ)(
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
