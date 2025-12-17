n.d(t, { Z: () => R }), n(953529);
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(512722),
    s = n.n(o),
    l = n(793030),
    c = n(442837),
    u = n(692547),
    d = n(481060),
    f = n(384275),
    p = n(782568),
    _ = n(317381),
    m = n(513202),
    h = n(100527),
    g = n(906732),
    E = n(835473),
    b = n(550385),
    y = n(757266),
    O = n(695103),
    v = n(524995),
    S = n(349350),
    I = n(388032),
    T = n(536789);
function C(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R() {
    let e = (0, E.q)(O.Z.testModeApplicationId),
        { analyticsLocations: t } = (0, g.ZP)(h.Z.SDK_DEBUG_TOOLS),
        {
            canStartAuthorization: n,
            hasAlreadyLinked: i,
            startAuthorization: o,
            preferredFlow: u,
            connectionApp: p,
            debug: { isSubscribedToAuthorizeRequest: C, oauth2Token: A, hasConnectionEntrypointUrl: N, validFlows: P },
        } = (0, v.F)(e, { debug: !0 }),
        R = (0, c.e7)([y.Z], () => null != e && y.Z.isConnected(e.id)),
        x = (0, c.e7)([_.ZP], () => _.ZP.getSelfEmbeddedActivities()),
        L = "authorization_debug",
        j = [
            {
                id: "authorization_debug",
                name: I.intl.string(S.default.vR0zs6),
            },
        ],
        M = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: T.header,
                        children: (0, r.jsx)("div", {
                            className: T.headerTextContainer,
                            children: (0, r.jsx)(l.X6q, {
                                variant: "heading-lg/extrabold",
                                children: I.intl.format(S.default.KoK4J9, { appName: "" }),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: T.body,
                        children: (0, r.jsx)(l.$jN, { className: T.spinner }),
                    }),
                ],
            }),
        k = () => (
            s()(null != e, "Application should be defined when rendering the test mode panel"),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: T.header,
                        children: [
                            (0, r.jsx)("div", {
                                className: T.headerTextContainer,
                                children: (0, r.jsx)(l.X6q, {
                                    variant: "heading-lg/extrabold",
                                    children: I.intl.format(S.default.KoK4J9, { appName: e.name }),
                                }),
                            }),
                            (0, r.jsx)(l.hU, {
                                variant: "icon-only",
                                icon: l.CTb,
                                "aria-label": "Close",
                                onClick: () => (0, b.Ll)(),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: T.body,
                        children: [
                            (0, r.jsx)(d.njP, {
                                className: T.tabBar,
                                selectedItem: L,
                                onItemSelect: () => {},
                                orientation: "horizontal",
                                type: "top",
                                look: "brand",
                                children: j.map((e) =>
                                    (0, r.jsx)(
                                        d.njP.Item,
                                        {
                                            className: a()(T.tab, { [T.selected]: e.id === L }),
                                            id: e.id,
                                            "aria-label": e.name,
                                            children: e.name,
                                        },
                                        e.id,
                                    ),
                                ),
                            }),
                            (0, r.jsx)(l.xvT, {
                                variant: "text-md/medium",
                                color: "text-subtle",
                                children: I.intl.string(S.default["no+FQS"]),
                            }),
                            (0, r.jsx)(w, {
                                overallStatus: C ? 0 : R ? 3 : 1,
                                name: I.intl.string(S.default.AGLx00),
                                steps: [
                                    {
                                        status: R ? 2 : 4,
                                        text: I.intl.string(S.default.kxF9br),
                                        description: R ? null : I.intl.string(S.default.PFxxJa),
                                        learnMoreLink: R
                                            ? null
                                            : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                    },
                                    {
                                        status: C ? 2 : R ? 3 : 4,
                                        text: I.intl.string(S.default.S94dzs),
                                        description: C || !R ? null : I.intl.string(S.default.aTULMB),
                                        learnMoreLink:
                                            C || !R
                                                ? null
                                                : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                    },
                                ],
                                isChosen: u === v.r.RPC,
                            }),
                            (0, r.jsx)(w, {
                                overallStatus: +!N,
                                name: I.intl.string(S.default.K3ObrU),
                                steps: [
                                    {
                                        status: N ? 2 : 4,
                                        text: I.intl.string(S.default["8a7IrV"]),
                                        description: N
                                            ? I.intl.formatToPlainString(S.default["9iLeL2"], {
                                                  url: null == p ? void 0 : p.connectionEntrypointUrl,
                                              })
                                            : null,
                                    },
                                ],
                                isChosen: u === v.r.WEB,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: T.footer,
                        children: [
                            (0, r.jsx)(D, {
                                status: +!i,
                                text: I.intl.string(I.t["Vu/zmQ"]),
                            }),
                            0 === P.length &&
                                (0, r.jsx)(l.xvT, {
                                    style: {
                                        minWidth: 0,
                                        overflow: "hidden",
                                    },
                                    variant: "text-md/medium",
                                    children: I.intl.string(S.default.eg0mNa),
                                }),
                            (0, r.jsx)(l.zxk, {
                                variant: "secondary",
                                disabled: !n || i,
                                onClick: () => o({ analyticsLocations: t }),
                                text: I.intl.string(S.default.w0pN4R),
                                fullWidth: !0,
                            }),
                            null != A &&
                                (0, r.jsx)(l.zxk, {
                                    variant: "secondary",
                                    onClick: () => {
                                        f.Z.delete(A.id);
                                        let t = x.get(e.id);
                                        null != t &&
                                            m.Z.leaveActivity({
                                                location: t.location,
                                                applicationId: e.id,
                                                showFeedback: !1,
                                            });
                                    },
                                    text: I.intl.string(S.default.tkIymA),
                                    fullWidth: !0,
                                }),
                        ],
                    }),
                ],
            })
        );
    return (0, r.jsx)("div", {
        "data-app-right-panel": !0,
        className: T.debugToolsPanel,
        children: (0, r.jsx)(l.y5t, { children: null != e ? k() : M() }),
    });
}
function w(e) {
    let { overallStatus: t, name: n, steps: i, isChosen: a } = e;
    return (0, r.jsxs)("div", {
        className: T.categoryContainer,
        children: [
            (0, r.jsx)(D, {
                status: t,
                text: n,
            }),
            i.map((e, t) => (0, r.jsx)(x, A({}, e), t)),
            a &&
                (0, r.jsx)("div", {
                    className: T.calloutBox,
                    children: (0, r.jsx)(l.xvT, {
                        variant: "text-sm/medium",
                        color: "text-subtle",
                        children: I.intl.string(S.default.OEkrCx),
                    }),
                }),
        ],
    });
}
function D(e) {
    let { text: t, status: n } = e;
    return (0, r.jsxs)("div", {
        className: T.categoryHeader,
        children: [
            (0, r.jsx)(l.xvT, {
                variant: "text-md/semibold",
                color: "text-subtle",
                children: t,
            }),
            (0, r.jsx)(L, { status: n }),
        ],
    });
}
function x(e) {
    let { status: t, text: n, description: i, learnMoreLink: a } = e;
    return (0, r.jsxs)("div", {
        className: T.statusRow,
        children: [
            (0, r.jsx)(L, { status: t }),
            (0, r.jsxs)("div", {
                className: T.statusTextContainer,
                children: [
                    (0, r.jsx)(l.xvT, {
                        variant: "text-md/medium",
                        children: n,
                    }),
                    null != i &&
                        (0, r.jsx)(l.xvT, {
                            variant: "text-sm/medium",
                            color: "text-subtle",
                            children: i,
                        }),
                    null != a &&
                        (0, r.jsx)(l.Avr, {
                            textVariant: "text-sm/medium",
                            text: I.intl.string(I.t.hvVgAZ),
                            onClick: () => (0, p.Z)(a),
                        }),
                ],
            }),
        ],
    });
}
function L(e) {
    let { status: t } = e,
        n = {
            size: "sm",
            className: T.statusIcon,
        };
    switch (t) {
        case 0:
            return (0, r.jsx)(l.owK, P(A({}, n), { color: u.Z.colors.ICON_FEEDBACK_POSITIVE }));
        case 1:
            return (0, r.jsx)(l.k$p, P(A({}, n), { color: u.Z.colors.ICON_FEEDBACK_CRITICAL }));
        case 2:
            return (0, r.jsx)(l.kmB, P(A({}, n), { color: u.Z.colors.ICON_FEEDBACK_POSITIVE }));
        case 3:
            return (0, r.jsx)(l.aNP, P(A({}, n), { color: u.Z.colors.ICON_FEEDBACK_WARNING }));
        case 4:
            return (0, r.jsx)(l.Dio, P(A({}, n), { color: u.Z.colors.ICON_FEEDBACK_CRITICAL }));
    }
}
