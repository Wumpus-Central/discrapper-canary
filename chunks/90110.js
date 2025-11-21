n.d(t, { Z: () => N }), n(953529);
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
    _ = n(782568),
    p = n(317381),
    h = n(513202),
    m = n(835473),
    g = n(550385),
    E = n(757266),
    b = n(695103),
    y = n(535139),
    O = n(222613),
    v = n(388032),
    I = n(428498);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N() {
    let e = (0, m.q)(b.Z.testModeApplicationId),
        {
            canStartAuthorization: t,
            hasAlreadyLinked: n,
            startAuthorization: i,
            preferredFlow: o,
            connectionApp: u,
            debug: { isSubscribedToAuthorizeRequest: _, oauth2Token: T, hasConnectionEntrypointUrl: S, validFlows: A },
        } = (0, y.F)(e, { debug: !0 }),
        C = (0, c.e7)([E.Z], () => null != e && E.Z.isConnected(e.id)),
        N = (0, c.e7)([p.ZP], () => p.ZP.getSelfEmbeddedActivities()),
        D = "authorization_debug",
        w = [
            {
                id: "authorization_debug",
                name: v.intl.string(O.default.vR0zs6),
            },
        ],
        L = () =>
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)("div", {
                        className: I.header,
                        children: (0, r.jsx)("div", {
                            className: I.headerTextContainer,
                            children: (0, r.jsx)(l.X6q, {
                                variant: "heading-lg/extrabold",
                                children: v.intl.format(O.default.KoK4J9, { appName: "" }),
                            }),
                        }),
                    }),
                    (0, r.jsx)("div", {
                        className: I.body,
                        children: (0, r.jsx)(l.$jN, { className: I.spinner }),
                    }),
                ],
            }),
        x = () => (
            s()(null != e, "Application should be defined when rendering the test mode panel"),
            (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsxs)("div", {
                        className: I.header,
                        children: [
                            (0, r.jsx)("div", {
                                className: I.headerTextContainer,
                                children: (0, r.jsx)(l.X6q, {
                                    variant: "heading-lg/extrabold",
                                    children: v.intl.format(O.default.KoK4J9, { appName: e.name }),
                                }),
                            }),
                            (0, r.jsx)(l.hU, {
                                variant: "icon-only",
                                icon: l.CTb,
                                "aria-label": "Close",
                                onClick: () => (0, g.Ll)(),
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: I.body,
                        children: [
                            (0, r.jsx)(d.njP, {
                                className: I.tabBar,
                                selectedItem: D,
                                onItemSelect: () => {},
                                orientation: "horizontal",
                                type: "top",
                                look: "brand",
                                children: w.map((e) =>
                                    (0, r.jsx)(
                                        d.njP.Item,
                                        {
                                            className: a()(I.tab, { [I.selected]: e.id === D }),
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
                                color: "text-secondary",
                                children: v.intl.string(O.default["no+FQS"]),
                            }),
                            (0, r.jsx)(R, {
                                overallStatus: _ ? 0 : C ? 3 : 1,
                                name: v.intl.string(O.default.AGLx00),
                                steps: [
                                    {
                                        status: C ? 2 : 4,
                                        text: v.intl.string(O.default.kxF9br),
                                        description: C ? null : v.intl.string(O.default.PFxxJa),
                                        learnMoreLink: C
                                            ? null
                                            : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                    },
                                    {
                                        status: _ ? 2 : C ? 3 : 4,
                                        text: v.intl.string(O.default.S94dzs),
                                        description: _ || !C ? null : v.intl.string(O.default.aTULMB),
                                        learnMoreLink:
                                            _ || !C
                                                ? null
                                                : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                                    },
                                ],
                                isChosen: o === y.r.RPC,
                            }),
                            (0, r.jsx)(R, {
                                overallStatus: +!S,
                                name: v.intl.string(O.default.K3ObrU),
                                steps: [
                                    {
                                        status: S ? 2 : 4,
                                        text: v.intl.string(O.default["8a7IrV"]),
                                        description: S
                                            ? v.intl.formatToPlainString(O.default["9iLeL2"], {
                                                  url: null == u ? void 0 : u.connectionEntrypointUrl,
                                              })
                                            : null,
                                    },
                                ],
                                isChosen: o === y.r.WEB,
                            }),
                        ],
                    }),
                    (0, r.jsxs)("div", {
                        className: I.footer,
                        children: [
                            (0, r.jsx)(P, {
                                status: +!n,
                                text: v.intl.string(v.t["Vu/zmQ"]),
                            }),
                            0 === A.length &&
                                (0, r.jsx)(l.xvT, {
                                    style: {
                                        minWidth: 0,
                                        overflow: "hidden",
                                    },
                                    variant: "text-md/medium",
                                    children: v.intl.string(O.default.eg0mNa),
                                }),
                            (0, r.jsx)(l.zxk, {
                                variant: "secondary",
                                disabled: !t || n,
                                onClick: () => i(),
                                text: v.intl.string(O.default.w0pN4R),
                                fullWidth: !0,
                            }),
                            null != T &&
                                (0, r.jsx)(l.zxk, {
                                    variant: "secondary",
                                    onClick: () => {
                                        f.Z.delete(T.id);
                                        let t = N.get(e.id);
                                        null != t &&
                                            h.Z.leaveActivity({
                                                location: t.location,
                                                applicationId: e.id,
                                                showFeedback: !1,
                                            });
                                    },
                                    text: v.intl.string(O.default.tkIymA),
                                    fullWidth: !0,
                                }),
                        ],
                    }),
                ],
            })
        );
    return (0, r.jsx)("div", {
        "data-app-right-panel": !0,
        className: I.debugToolsPanel,
        children: (0, r.jsx)(l.y5t, { children: null != e ? x() : L() }),
    });
}
function R(e) {
    let { overallStatus: t, name: n, steps: i, isChosen: a } = e;
    return (0, r.jsxs)("div", {
        className: I.categoryContainer,
        children: [
            (0, r.jsx)(P, {
                status: t,
                text: n,
            }),
            i.map((e, t) => (0, r.jsx)(D, S({}, e), t)),
            a &&
                (0, r.jsx)("div", {
                    className: I.calloutBox,
                    children: (0, r.jsx)(l.xvT, {
                        variant: "text-sm/medium",
                        color: "text-secondary",
                        children: v.intl.string(O.default.OEkrCx),
                    }),
                }),
        ],
    });
}
function P(e) {
    let { text: t, status: n } = e;
    return (0, r.jsxs)("div", {
        className: I.categoryHeader,
        children: [
            (0, r.jsx)(l.xvT, {
                variant: "text-md/semibold",
                color: "text-secondary",
                children: t,
            }),
            (0, r.jsx)(w, { status: n }),
        ],
    });
}
function D(e) {
    let { status: t, text: n, description: i, learnMoreLink: a } = e;
    return (0, r.jsxs)("div", {
        className: I.statusRow,
        children: [
            (0, r.jsx)(w, { status: t }),
            (0, r.jsxs)("div", {
                className: I.statusTextContainer,
                children: [
                    (0, r.jsx)(l.xvT, {
                        variant: "text-md/medium",
                        children: n,
                    }),
                    null != i &&
                        (0, r.jsx)(l.xvT, {
                            variant: "text-sm/medium",
                            color: "text-secondary",
                            children: i,
                        }),
                    null != a &&
                        (0, r.jsx)(l.Avr, {
                            textVariant: "text-sm/medium",
                            text: v.intl.string(v.t.hvVgAZ),
                            onClick: () => (0, _.Z)(a),
                        }),
                ],
            }),
        ],
    });
}
function w(e) {
    let { status: t } = e,
        n = {
            size: "sm",
            className: I.statusIcon,
        };
    switch (t) {
        case 0:
            return (0, r.jsx)(l.owK, C(S({}, n), { color: u.Z.colors.ICON_FEEDBACK_POSITIVE }));
        case 1:
            return (0, r.jsx)(l.k$p, C(S({}, n), { color: u.Z.colors.ICON_FEEDBACK_CRITICAL }));
        case 2:
            return (0, r.jsx)(l.kmB, C(S({}, n), { color: u.Z.colors.ICON_FEEDBACK_POSITIVE }));
        case 3:
            return (0, r.jsx)(l.aNP, C(S({}, n), { color: u.Z.colors.ICON_FEEDBACK_WARNING }));
        case 4:
            return (0, r.jsx)(l.Dio, C(S({}, n), { color: u.Z.colors.ICON_FEEDBACK_CRITICAL }));
    }
}
