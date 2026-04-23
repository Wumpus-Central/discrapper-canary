a.d(t, { A: () => w });
var n = a(627968),
    l = a(64700),
    i = a(503698),
    s = a.n(i),
    r = a(311907),
    o = a(534514),
    d = a(834730),
    c = a(821609),
    u = a(292666),
    m = a(404778),
    h = a(824552),
    p = a(793574),
    x = a(688810),
    g = a(975460),
    v = a(362490),
    b = a(487431),
    _ = a(587895),
    f = a(429913),
    j = a(15285),
    A = a(905552),
    y = a(546183),
    C = a(134861),
    E = a(71393),
    S = a(967198),
    N = a(157257),
    k = a(985018),
    I = a(311350),
    D = a(325126),
    T = a(505206);
function w() {
    var e;
    let t,
        a,
        i = l.useRef(null),
        { analyticsLocations: w } = (0, x.Ay)(p.A.DEV_TOOLS),
        [O, R] = l.useState(""),
        L = (0, r.bG)([S.A], () => S.A.getGuildId()),
        M = (0, r.bG)([E.A], () => E.A.getGuild(L)),
        P = M?.gameApplicationIds ?? [],
        U = (0, f.A)(P).filter((e) => null != e),
        B = (0, r.bG)([j.Ay, N.A], () => (0, A.A)(j.Ay, N.A)),
        G = (0, f.h)(O),
        F = (0, g.g)(G),
        V = (0, r.yK)([_.A], () => G?.linkedGames?.map((e) => _.A.getApplication(e.id)).filter((e) => null != e) ?? []),
        $ = (0, v.RD)(G, { allowedFlows: [v._M.RPC], debug: !0 }),
        W = (0, v.RD)(G, { allowedFlows: [v._M.WEB], debug: !0 }),
        H = (0, r.bG)([C.A], () => null != F && C.A.isConnected(F.id)),
        z = (0, v.RD)(G, { debug: !0 }),
        { canDeauthorize: K, deauthorize: Y } =
            ((e = G?.id),
            (t = (0, r.bG)([y.default], () => y.default.getNewestTokenForApplication(e))),
            (a = l.useCallback(() => {
                null != t && h.A.delete(t.id);
            }, [t])),
            { canDeauthorize: null != t, deauthorize: a });
    return (0, n.jsxs)("div", {
        ref: i,
        className: s()(T.nd, D.nd),
        children: [
            (0, n.jsxs)("div", {
                className: D.kL,
                children: [
                    (0, n.jsx)(o.D, { variant: "heading-lg/normal", children: "Guild Official Games" }),
                    null != M
                        ? (0, n.jsxs)(n.Fragment, {
                              children: [
                                  (0, n.jsxs)(d.E, { variant: "text-md/normal", children: [M.name, " (", M.id, ")"] }),
                                  U.length > 0
                                      ? (0, n.jsxs)(n.Fragment, {
                                            children: [
                                                (0, n.jsx)(d.E, {
                                                    variant: "text-sm/semibold",
                                                    children: "Official Games",
                                                }),
                                                U.map((e) =>
                                                    (0, n.jsx)(
                                                        c.$,
                                                        {
                                                            onClick: () => R(e.id),
                                                            variant: O === e.id ? "primary" : "secondary",
                                                            text: `${e.name} (${e.id})`,
                                                        },
                                                        e.id,
                                                    ),
                                                ),
                                            ],
                                        })
                                      : (0, n.jsx)(d.E, { variant: "text-md/normal", children: "No official games" }),
                              ],
                          })
                        : (0, n.jsx)(d.E, { variant: "text-md/normal", children: "No guild selected" }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: D.kL,
                children: [
                    (0, n.jsx)(o.D, { variant: "heading-lg/normal", children: "Application" }),
                    (0, n.jsx)(u.k, { label: "Application ID", value: O, onChange: R }),
                    null != B && null != B.id
                        ? (0, n.jsx)(c.$, {
                              onClick: () => R(B.id),
                              variant: "primary",
                              text: `Use detected game: ${B.name} (${B.id})`,
                          })
                        : null,
                    (0, n.jsxs)(d.E, {
                        variant: "text-md/normal",
                        children: ["Application Name: ", null != G ? G.name : "N/A"],
                    }),
                    (0, n.jsxs)(d.E, {
                        variant: "text-md/normal",
                        children: [
                            "Linked Games:",
                            " ",
                            V.length > 0
                                ? V.map((e) => ((0, g.t)(G)?.id === e.id ? `${e.name}*` : e.name)).join(", ")
                                : "N/A",
                        ],
                    }),
                ],
            }),
            (0, n.jsx)(m.c, {}),
            (0, n.jsxs)("div", {
                className: D.kL,
                children: [
                    (0, n.jsx)(o.D, { variant: "heading-lg/normal", children: "Authorization" }),
                    (0, n.jsx)(b.VT, {
                        overallStatus: $.debug.isSubscribedToAuthorizeRequest
                            ? b.nW.OVERALL_GOOD
                            : H
                              ? b.nW.WARN
                              : b.nW.OVERALL_BAD,
                        name: k.intl.string(I.default.AGLx00),
                        steps: [
                            {
                                status: H ? b.nW.GOOD : b.nW.BAD,
                                text: k.intl.string(I.default.kxF9br),
                                description: H ? null : k.intl.string(I.default.PFxxJa),
                                learnMoreLink: H
                                    ? null
                                    : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                            {
                                status: $.debug.isSubscribedToAuthorizeRequest ? b.nW.GOOD : H ? b.nW.WARN : b.nW.BAD,
                                text: k.intl.string(I.default.S94dzs),
                                description:
                                    $.debug.isSubscribedToAuthorizeRequest || !H
                                        ? null
                                        : k.intl.string(I.default.aTULMB),
                                learnMoreLink:
                                    $.debug.isSubscribedToAuthorizeRequest || !H
                                        ? null
                                        : "https://discord.com/developers/docs/discord-social-sdk/how-to/debug-log",
                            },
                        ],
                        isChosen: z.chosenFlow === v._M.RPC,
                    }),
                    (0, n.jsx)(b.VT, {
                        overallStatus: W.debug.hasConnectionEntrypointUrl ? b.nW.OVERALL_GOOD : b.nW.OVERALL_BAD,
                        name: k.intl.string(I.default.K3ObrU),
                        steps: [
                            {
                                status: W.debug.hasConnectionEntrypointUrl ? b.nW.GOOD : b.nW.BAD,
                                text: k.intl.string(I.default["8a7IrV"]),
                                description: W.debug.hasConnectionEntrypointUrl
                                    ? k.intl.formatToPlainString(I.default["9iLeL2"], {
                                          url: W.connectionApp?.connectionEntrypointUrl,
                                      })
                                    : null,
                            },
                        ],
                        isChosen: z.chosenFlow === v._M.WEB,
                    }),
                    (0, n.jsx)(b.Sy, {
                        status: z.hasAlreadyLinked ? b.nW.OVERALL_GOOD : b.nW.OVERALL_BAD,
                        text: k.intl.string(k.t["Vu/zmQ"]),
                    }),
                    0 === z.debug.validFlows.length &&
                        (0, n.jsx)(d.E, {
                            style: { minWidth: 0, overflow: "hidden" },
                            variant: "text-md/medium",
                            children: k.intl.string(I.default.eg0mNa),
                        }),
                    (0, n.jsx)(c.$, {
                        disabled: !z.canStartAuthorization,
                        onClick: () => z.startAuthorization({ analyticsLocations: w }),
                        variant: "primary",
                        text: "Start Authorization",
                    }),
                    (0, n.jsx)(d.E, {
                        variant: "text-sm/normal",
                        color: "text-subtle",
                        children:
                            "This will start whichever authorization flow is available. RPC authorization takes precedence over web.",
                    }),
                    (0, n.jsx)(c.$, {
                        disabled: !$.canStartAuthorization,
                        onClick: () => $.startAuthorization({ analyticsLocations: w }),
                        variant: "secondary",
                        text: "Start In-App Authorization",
                    }),
                    (0, n.jsx)(c.$, {
                        disabled: !W.canStartAuthorization,
                        onClick: () => W.startAuthorization({ analyticsLocations: w }),
                        variant: "secondary",
                        text: "Start Web Authorization",
                    }),
                    (0, n.jsx)(c.$, { disabled: !K, onClick: Y, variant: "critical-primary", text: "Deauthorize" }),
                ],
            }),
            G?.applicationAccountLinkBenefitConfig != null &&
                (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(m.c, {}),
                        (0, n.jsxs)("div", {
                            className: D.kL,
                            children: [
                                (0, n.jsx)(o.D, { variant: "heading-lg/normal", children: "Reward Configuration" }),
                                (0, n.jsx)("div", {
                                    className: D.Nr,
                                    children: (0, n.jsxs)("div", {
                                        className: D.Tc,
                                        children: [
                                            null != G.applicationAccountLinkBenefitConfig.reward_image &&
                                                (0, n.jsx)("img", {
                                                    src: G.applicationAccountLinkBenefitConfig.reward_image,
                                                    alt: "Reward",
                                                    className: D.L8,
                                                }),
                                            (0, n.jsx)(d.E, {
                                                variant: "text-md/semibold",
                                                children:
                                                    G.applicationAccountLinkBenefitConfig.reward_name ??
                                                    "Unnamed Reward",
                                            }),
                                        ],
                                    }),
                                }),
                            ],
                        }),
                    ],
                }),
        ],
    });
}
