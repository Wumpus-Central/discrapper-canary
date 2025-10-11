t.d(n, { Z: () => Z }), t(388685), t(953529);
var l = t(951288),
    i = t(442837),
    r = t(481060),
    o = t(100527),
    s = t(906732),
    a = t(138201),
    c = t(699516),
    d = t(5192),
    u = t(785717),
    m = t(221292),
    p = t(687158),
    f = t(316027),
    h = t(502762),
    x = t(848780),
    j = t(907179),
    v = t(981631),
    g = t(671955),
    b = t(388032),
    y = t(220566);
function I(e) {
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
            roleId: N,
            transitionState: P,
            openedAt: T,
            onHide: A,
            sourceAnalyticsLocations: E = [],
        } = e,
        S = t === v.ME ? void 0 : t,
        C = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
        { analyticsLocations: _ } = (0, s.ZP)([...E, C ? o.Z.BLOCKED_PROFILE_MODAL : o.Z.IGNORED_PROFILE_MODAL]),
        w = (0, u.ZB)({
            layout: "MODAL_V2",
            userId: n.id,
            showGuildProfile: !0,
            guildId: S,
            channelId: Z,
            messageId: O,
            roleId: N,
        }),
        D = [
            {
                icon: r.owK,
                description: b.intl.string(b.t.kcuWvb),
            },
            {
                icon: r.owK,
                description: b.intl.string(C ? b.t.QxrDY2 : b.t.W6fjkZ),
            },
        ],
        R = (0, p.ZP)(n.id, S),
        L = d.ZP.getName(null == R ? void 0 : R.guildId, Z, n),
        M = b.intl.formatToPlainString(b.t.KRe1Fh, { name: L });
    return (0, l.jsx)(s.Gt, {
        value: _,
        children: (0, l.jsx)(u.Mt, {
            value: w,
            openedAt: T,
            fetchStartedAt: null == R ? void 0 : R.fetchStartedAt,
            fetchEndedAt: null == R ? void 0 : R.fetchEndedAt,
            isLoaded: null == R ? void 0 : R.isLoaded,
            children: (0, l.jsx)(r.Y0X, {
                "data-migration-pending": !0,
                transitionState: P,
                className: y.root,
                "aria-label": M,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, l.jsxs)(h.Z, {
                    user: n,
                    displayProfile: R,
                    themeType: g.l.MODAL_V2,
                    children: [
                        (0, l.jsx)("div", { className: y.background }),
                        (0, l.jsxs)("div", {
                            className: y.content,
                            children: [
                                (0, l.jsx)(f.Z, {
                                    user: n,
                                    guildId: S,
                                }),
                                (0, l.jsxs)("div", {
                                    className: y.textContainer,
                                    children: [
                                        (0, l.jsx)(r.Heading, {
                                            variant: "heading-xl/bold",
                                            color: "text-default",
                                            children: b.intl.string(b.t.b33pLC),
                                        }),
                                        (0, l.jsx)(r.Text, {
                                            variant: "text-md/medium",
                                            color: "text-default",
                                            children: b.intl.format(C ? b.t.T7QiLi : b.t.MnEow8, { username: L }),
                                        }),
                                    ],
                                }),
                                (0, l.jsx)("div", {
                                    className: y.safetyTable,
                                    children: D.map((e, n) => {
                                        let { icon: t, description: i } = e;
                                        return (0, l.jsx)(
                                            a.JZ,
                                            {
                                                icon: t,
                                                title: i,
                                                titleVariant: "text-md/normal",
                                                color: r.TVs.colors.TEXT_DEFAULT.css,
                                            },
                                            n,
                                        );
                                    }),
                                }),
                                (0, l.jsxs)(r.Kqy, {
                                    align: "center",
                                    children: [
                                        (0, l.jsx)(j.Z, {
                                            size: "md",
                                            isBlocked: C,
                                            onClick: () => {
                                                A(),
                                                    (0, m.pQ)(
                                                        I(
                                                            {
                                                                action: C
                                                                    ? "VIEW_BLOCKED_PROFILE"
                                                                    : "VIEW_IGNORED_PROFILE",
                                                                analyticsLocations: _,
                                                            },
                                                            w,
                                                        ),
                                                    );
                                            },
                                        }),
                                        (0, l.jsx)(x.Z, {
                                            userId: n.id,
                                            onClick: () => {
                                                A(),
                                                    (0, m.pQ)(
                                                        I(
                                                            {
                                                                action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                analyticsLocations: _,
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
