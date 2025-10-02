t.d(n, { Z: () => I }), t(388685), t(953529);
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
    j = t(848780),
    x = t(907179),
    v = t(981631),
    g = t(671955),
    b = t(388032),
    y = t(220566);
function O(e) {
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
function I(e) {
    let {
            user: n,
            guildId: t,
            channelId: I,
            messageId: Z,
            roleId: P,
            transitionState: N,
            openedAt: T,
            onHide: A,
            sourceAnalyticsLocations: E = [],
        } = e,
        S = t === v.ME ? void 0 : t,
        C = (0, i.e7)([c.Z], () => c.Z.isBlocked(n.id)),
        { analyticsLocations: w } = (0, s.ZP)([...E, C ? o.Z.BLOCKED_PROFILE_MODAL : o.Z.IGNORED_PROFILE_MODAL]),
        _ = (0, u.ZB)({
            layout: "MODAL_V2",
            userId: n.id,
            showGuildProfile: !0,
            guildId: S,
            channelId: I,
            messageId: Z,
            roleId: P,
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
        L = d.ZP.getName(null == R ? void 0 : R.guildId, I, n),
        M = b.intl.formatToPlainString(b.t.KRe1Fh, { name: L });
    return (0, l.jsx)(s.Gt, {
        value: w,
        children: (0, l.jsx)(u.Mt, {
            value: _,
            openedAt: T,
            fetchStartedAt: null == R ? void 0 : R.fetchStartedAt,
            fetchEndedAt: null == R ? void 0 : R.fetchEndedAt,
            isLoaded: null == R ? void 0 : R.isLoaded,
            children: (0, l.jsx)(r.Y0X, {
                "data-migration-pending": !0,
                transitionState: N,
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
                                        (0, l.jsx)(r.X6q, {
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
                                        (0, l.jsx)(x.Z, {
                                            size: "md",
                                            isBlocked: C,
                                            onClick: () => {
                                                A(),
                                                    (0, m.pQ)(
                                                        O(
                                                            {
                                                                action: C
                                                                    ? "VIEW_BLOCKED_PROFILE"
                                                                    : "VIEW_IGNORED_PROFILE",
                                                                analyticsLocations: w,
                                                            },
                                                            _,
                                                        ),
                                                    );
                                            },
                                        }),
                                        (0, l.jsx)(j.Z, {
                                            userId: n.id,
                                            onClick: () => {
                                                A(),
                                                    (0, m.pQ)(
                                                        O(
                                                            {
                                                                action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                                                analyticsLocations: w,
                                                            },
                                                            _,
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
