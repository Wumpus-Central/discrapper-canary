n.d(t, { A: () => H, E: () => F }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(615300),
    o = n(311907),
    c = n(554146),
    d = n(939249),
    u = n(834730),
    h = n(933832),
    m = n(192308),
    A = n(134292),
    g = n(984896),
    _ = n(645945),
    p = n(869840),
    f = n(383669),
    E = n(534514),
    C = n(444927),
    x = n(919796),
    S = n(58149),
    I = n(668446),
    v = n(997509),
    N = n(794967),
    T = n(595818),
    y = n(961350),
    b = n(71393),
    j = n(287809),
    R = n(147925),
    M = n(203982),
    L = n(975571),
    D = n(723702),
    P = n(661191),
    O = n(314307),
    w = n(652215),
    U = n(936649),
    k = n(985018),
    G = n(516847);
function F(e) {
    let { className: t, iconUrl: n, icon: a, header: r, completed: o, onClick: c } = e,
        [m, A] = l.useState(!1),
        g = (0, x.A)(o);
    return (
        l.useEffect(() => {
            null != g && o !== g && (A(!0), setTimeout(() => A(!1), 1e3));
        }, [o, g]),
        (0, i.jsxs)(d.D, {
            className: s()(t, G.Nr, { [G.so]: o }),
            onClick: c,
            children: [
                a ?? (0, i.jsx)("img", { className: G.Kk, src: n, alt: "" }),
                (0, i.jsx)(u.E, {
                    color: "text-strong",
                    className: s()(G.t$, G.MY),
                    variant: "text-sm/normal",
                    children: r,
                }),
                o
                    ? (0, i.jsx)(h.A, { size: "md", color: "currentColor", className: s()(G.AI, { [G.i0]: m }) })
                    : (0, i.jsx)(R.A, { className: G.UE, direction: R.A.Directions.RIGHT }),
            ],
        })
    );
}
function H(e) {
    let t,
        a,
        d,
        h,
        x,
        R,
        { channel: H } = e,
        B = (0, o.bG)([b.A], () => (null != H ? b.A.getGuild(H.getGuildId()) : null), [H]),
        V = null != B && P.default.extractTimestamp(B.id) < Date.now() - w.NOr,
        W = (0, o.bG)([y.default], () => B?.ownerId === y.default.getId(), [B]),
        { canInvite: z, canManageGuild: K, canMessage: Y } = (0, I.Sk)(H, B),
        q = (0, o.bG)(
            [j.default],
            () => j.default.getCurrentUser()?.desktop === !0 || j.default.getCurrentUser()?.mobile === !0,
        ),
        { guildPopulated: J, guildMessaged: $, guildPersonalized: Z } = (0, I.lF)(B),
        {
            handleInvite: X,
            handleMessage: Q,
            handlePersonalize: ee,
            handleDownload: et,
            handleAddApplication: en,
        } = ((t = l.useCallback(() => {
            S.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: U.XT.CHANNEL_WELCOME,
                action: U.AG.INVITE,
            }),
                null != B &&
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("28136"), n.e("43600"), n.e("85905")]).then(
                            n.bind(n, 234355),
                        );
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guild: B,
                                source: w.PE1.CHANNEL_WELCOME,
                                analyticsLocation: { section: w.JJy.CHANNEL_WELCOME_CTA },
                            });
                    });
        }, [B])),
        (a = l.useCallback(() => {
            S.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: U.XT.CHANNEL_WELCOME,
                action: U.AG.SEND_MESSAGE,
            }),
                M._.dispatch(w.jej.TEXTAREA_FOCUS, { highlight: !0, channelId: w.dJq });
        }, [])),
        (d = l.useCallback(() => {
            S.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: U.XT.CHANNEL_WELCOME,
                action: U.AG.PERSONALIZE_SERVER,
            }),
                null != B && v.A.open(B.id, (0, T.x)(), { section: w.JJy.CHANNEL_WELCOME_CTA });
        }, [B])),
        {
            handleInvite: t,
            handleMessage: a,
            handlePersonalize: d,
            handleDownload: l.useCallback(() => {
                S.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: U.XT.CHANNEL_WELCOME,
                    action: U.AG.DOWNLOAD,
                }),
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                        return (t) => (0, i.jsx)(e, { source: w.JJy.CHANNEL_WELCOME_CTA, ...t });
                    });
            }, []),
            handleAddApplication: l.useCallback(() => {
                null != B &&
                    (S.Ay.trackWithMetadata(w.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: U.XT.CHANNEL_WELCOME,
                        action: U.AG.ADD_APP,
                    }),
                    (0, m.openModalLazy)(async () => {
                        let { default: e } = await n.e("66003").then(n.bind(n, 258942));
                        return (t) =>
                            (0, i.jsx)(e, {
                                guildId: B.id ?? "",
                                ...t,
                                analyticsType: c.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                            });
                    }));
            }, [B]),
        }),
        ei = !(q || J || $ || Z),
        { titleAnimatedStyle: el, opacities: ea } =
            ((h = (0, C.A)(() => new r.A.Value(0))),
            (x = (0, C.A)(() => new r.A.Value(0))),
            (R = (0, C.A)(() => [new r.A.Value(0), new r.A.Value(0), new r.A.Value(0), new r.A.Value(0)])),
            l.useEffect(() => {
                r.A.stagger(300, [
                    r.A.parallel([
                        r.A.timing(x, { toValue: 1, duration: 450 }),
                        r.A.timing(h, { toValue: 1, duration: 450 }),
                    ]),
                    r.A.stagger(100, [
                        r.A.timing(R[0], { toValue: 1, duration: 300 }),
                        r.A.timing(R[1], { toValue: 1, duration: 300 }),
                        r.A.timing(R[2], { toValue: 1, duration: 300 }),
                        r.A.timing(R[3], { toValue: 1, duration: 300 }),
                    ]),
                ]).start();
            }, [x, h, R]),
            {
                titleAnimatedStyle: ei
                    ? {
                          transform: [
                              { translateY: h.interpolate({ inputRange: [0, 1], outputRange: ["-20px", "0px"] }) },
                          ],
                          opacity: x,
                      }
                    : {},
                opacities: R,
            }),
        [es, er] = l.useState([]),
        eo = es.length > 0;
    if (
        (l.useEffect(() => {
            (async () => {
                try {
                    let e = await (0, N.c)(B?.id ?? w.dJq);
                    er(e.map((e) => e.id));
                } catch {}
            })();
        }, [B?.id]),
        null == B)
    )
        return null;
    let ec = [];
    V ||
        (z &&
            ec.push(
                (0, i.jsx)(
                    r.A.div,
                    {
                        className: G.cW,
                        style: ei ? { opacity: ea[ec.length] } : {},
                        children: (0, i.jsx)(F, {
                            iconUrl: A,
                            header: k.intl.string(k.t.q9n0Ta),
                            completed: J,
                            onClick: X,
                        }),
                    },
                    "invite",
                ),
            ),
        K &&
            ec.push(
                (0, i.jsx)(
                    r.A.div,
                    {
                        className: G.cW,
                        style: ei ? { opacity: ea[ec.length] } : {},
                        children: (0, i.jsx)(F, {
                            iconUrl: g,
                            header: k.intl.string(k.t.c5kxPh),
                            completed: Z,
                            onClick: ee,
                        }),
                    },
                    "customize",
                ),
            ),
        Y &&
            ec.push(
                (0, i.jsx)(
                    r.A.div,
                    {
                        className: G.cW,
                        style: ei ? { opacity: ea[ec.length] } : {},
                        children: (0, i.jsx)(F, {
                            iconUrl: _,
                            header: k.intl.string(k.t["SoP7+l"]),
                            completed: $,
                            onClick: Q,
                        }),
                    },
                    "message",
                ),
            ),
        (0, D.isWeb)() &&
            ec.push(
                (0, i.jsx)(
                    r.A.div,
                    {
                        className: G.cW,
                        style: ei ? { opacity: ea[ec.length] } : {},
                        children: (0, i.jsx)(F, {
                            iconUrl: p,
                            header: k.intl.string(k.t.pGVNI9),
                            completed: q,
                            onClick: et,
                        }),
                    },
                    "download",
                ),
            ),
        ec.push(
            (0, i.jsx)(
                r.A.div,
                {
                    className: G.cW,
                    style: ei ? { opacity: ea[ec.length] } : {},
                    children: (0, i.jsx)(F, {
                        iconUrl: f,
                        header: k.intl.string(k.t.IhHDEO),
                        completed: eo,
                        onClick: en,
                    }),
                },
                "addapp",
            ),
        ));
    let ed = W ? k.intl.string(k.t["1ach9C"]) : k.intl.string(k.t["ezm+/j"]);
    V && (ed = k.intl.string(k.t["gwyU/J"]));
    let eu = `${L.A.getArticleURL(w.MVz.GUILD_GETTING_STARTED)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm`;
    return (0, i.jsx)(O.Ay, {
        channelId: H.id,
        children: (0, i.jsx)("div", {
            className: G.kL,
            children: (0, i.jsxs)("div", {
                className: G.vW,
                children: [
                    (0, i.jsxs)(r.A.div, {
                        style: el,
                        children: [
                            (0, i.jsx)(E.D, {
                                className: G.ud,
                                variant: "heading-xxl/medium",
                                children: k.intl.format(k.t.rkHVKf, { guildName: B.name }),
                            }),
                            (0, i.jsxs)(u.E, {
                                color: "text-default",
                                className: s()({ [G.VA]: !0, [G.lg]: 0 === ec.length }),
                                variant: "text-sm/normal",
                                children: [ed, " ", ec.length > 0 ? k.intl.format(k.t.UOtD32, { guideURL: eu }) : null],
                            }),
                        ],
                    }),
                    ec,
                ],
            }),
        }),
    });
}
