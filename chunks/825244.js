n.d(t, { A: () => D, E: () => M }), n(321073);
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(615300),
    o = n(311907),
    c = n(554146),
    d = n(397927),
    u = n(444927),
    h = n(919796),
    m = n(58149),
    A = n(668446),
    p = n(997509),
    g = n(794967),
    f = n(595818),
    _ = n(961350),
    E = n(71393),
    C = n(287809),
    x = n(147925),
    S = n(203982),
    T = n(975571),
    I = n(723702),
    N = n(661191),
    v = n(314307),
    y = n(652215),
    b = n(936649),
    R = n(985018),
    j = n(286062);
function M(e) {
    let { className: t, iconUrl: n, icon: a, header: r, completed: o, onClick: c } = e,
        [u, m] = l.useState(!1),
        A = (0, h.A)(o);
    return (
        l.useEffect(() => {
            null != A && o !== A && (m(!0), setTimeout(() => m(!1), 1e3));
        }, [o, A]),
        (0, i.jsxs)(d.DUT, {
            className: s()(t, j.Nr, { [j.so]: o }),
            onClick: c,
            children: [
                a ?? (0, i.jsx)("img", { className: j.Kk, src: n, alt: "" }),
                (0, i.jsx)(d.Text, {
                    color: "text-strong",
                    className: s()(j.t$, j.MY),
                    variant: "text-sm/normal",
                    children: r,
                }),
                o
                    ? (0, i.jsx)(d.A9s, { size: "md", color: "currentColor", className: s()(j.AI, { [j.i0]: u }) })
                    : (0, i.jsx)(x.A, { className: j.UE, direction: x.A.Directions.RIGHT }),
            ],
        })
    );
}
function D(e) {
    let t,
        a,
        h,
        x,
        D,
        O,
        { channel: L } = e,
        P = (0, o.bG)([E.A], () => (null != L ? E.A.getGuild(L.getGuildId()) : null), [L]),
        w = null != P && N.default.extractTimestamp(P.id) < Date.now() - y.NOr,
        k = (0, o.bG)([_.default], () => P?.ownerId === _.default.getId(), [P]),
        { canInvite: U, canManageGuild: G, canMessage: F } = (0, A.Sk)(L, P),
        H = (0, o.bG)(
            [C.default],
            () => C.default.getCurrentUser()?.desktop === !0 || C.default.getCurrentUser()?.mobile === !0,
        ),
        { guildPopulated: B, guildMessaged: V, guildPersonalized: W } = (0, A.lF)(P),
        {
            handleInvite: K,
            handleMessage: z,
            handlePersonalize: Y,
            handleDownload: q,
            handleAddApplication: J,
        } = ((t = l.useCallback(() => {
            m.Ay.trackWithMetadata(y.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: b.XT.CHANNEL_WELCOME,
                action: b.AG.INVITE,
            }),
                null != P &&
                    (0, d.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("92779")]).then(
                            n.bind(n, 234355),
                        );
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guild: P,
                                source: y.PE1.CHANNEL_WELCOME,
                                analyticsLocation: { section: y.JJy.CHANNEL_WELCOME_CTA },
                            });
                    });
        }, [P])),
        (a = l.useCallback(() => {
            m.Ay.trackWithMetadata(y.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: b.XT.CHANNEL_WELCOME,
                action: b.AG.SEND_MESSAGE,
            }),
                S._.dispatch(y.jej.TEXTAREA_FOCUS, { highlight: !0, channelId: y.dJq });
        }, [])),
        (h = l.useCallback(() => {
            m.Ay.trackWithMetadata(y.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: b.XT.CHANNEL_WELCOME,
                action: b.AG.PERSONALIZE_SERVER,
            }),
                null != P && p.A.open(P.id, (0, f.x)(), { section: y.JJy.CHANNEL_WELCOME_CTA });
        }, [P])),
        {
            handleInvite: t,
            handleMessage: a,
            handlePersonalize: h,
            handleDownload: l.useCallback(() => {
                m.Ay.trackWithMetadata(y.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: b.XT.CHANNEL_WELCOME,
                    action: b.AG.DOWNLOAD,
                }),
                    (0, d.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                        return (t) => (0, i.jsx)(e, { source: y.JJy.CHANNEL_WELCOME_CTA, ...t });
                    });
            }, []),
            handleAddApplication: l.useCallback(() => {
                null != P &&
                    (m.Ay.trackWithMetadata(y.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: b.XT.CHANNEL_WELCOME,
                        action: b.AG.ADD_APP,
                    }),
                    (0, d.mMO)(async () => {
                        let { default: e } = await n.e("66003").then(n.bind(n, 258942));
                        return (t) =>
                            (0, i.jsx)(e, {
                                guildId: P.id ?? "",
                                ...t,
                                analyticsType: c.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                            });
                    }));
            }, [P]),
        }),
        $ = !(H || B || V || W),
        { titleAnimatedStyle: Z, opacities: X } =
            ((x = (0, u.A)(() => new r.A.Value(0))),
            (D = (0, u.A)(() => new r.A.Value(0))),
            (O = (0, u.A)(() => [new r.A.Value(0), new r.A.Value(0), new r.A.Value(0), new r.A.Value(0)])),
            l.useEffect(() => {
                r.A.stagger(300, [
                    r.A.parallel([
                        r.A.timing(D, { toValue: 1, duration: 450 }),
                        r.A.timing(x, { toValue: 1, duration: 450 }),
                    ]),
                    r.A.stagger(100, [
                        r.A.timing(O[0], { toValue: 1, duration: 300 }),
                        r.A.timing(O[1], { toValue: 1, duration: 300 }),
                        r.A.timing(O[2], { toValue: 1, duration: 300 }),
                        r.A.timing(O[3], { toValue: 1, duration: 300 }),
                    ]),
                ]).start();
            }, [D, x, O]),
            {
                titleAnimatedStyle: $
                    ? {
                          transform: [
                              { translateY: x.interpolate({ inputRange: [0, 1], outputRange: ["-20px", "0px"] }) },
                          ],
                          opacity: D,
                      }
                    : {},
                opacities: O,
            }),
        [Q, ee] = l.useState([]),
        et = Q.length > 0;
    if (
        (l.useEffect(() => {
            (async () => {
                try {
                    let e = await (0, g.c)(P?.id ?? y.dJq);
                    ee(e.map((e) => e.id));
                } catch {}
            })();
        }, [P?.id]),
        null == P)
    )
        return null;
    let en = [];
    w ||
        (U &&
            en.push(
                (0, i.jsx)(
                    r.A.div,
                    {
                        className: j.cW,
                        style: $ ? { opacity: X[en.length] } : {},
                        children: (0, i.jsx)(M, {
                            iconUrl: d.zNk,
                            header: R.intl.string(R.t.q9n0Ta),
                            completed: B,
                            onClick: K,
                        }),
                    },
                    "invite",
                ),
            ),
        G &&
            en.push(
                (0, i.jsx)(
                    r.A.div,
                    {
                        className: j.cW,
                        style: $ ? { opacity: X[en.length] } : {},
                        children: (0, i.jsx)(M, {
                            iconUrl: d.nIm,
                            header: R.intl.string(R.t.c5kxPh),
                            completed: W,
                            onClick: Y,
                        }),
                    },
                    "customize",
                ),
            ),
        F &&
            en.push(
                (0, i.jsx)(
                    r.A.div,
                    {
                        className: j.cW,
                        style: $ ? { opacity: X[en.length] } : {},
                        children: (0, i.jsx)(M, {
                            iconUrl: d.Tj_,
                            header: R.intl.string(R.t["SoP7+l"]),
                            completed: V,
                            onClick: z,
                        }),
                    },
                    "message",
                ),
            ),
        (0, I.isWeb)() &&
            en.push(
                (0, i.jsx)(
                    r.A.div,
                    {
                        className: j.cW,
                        style: $ ? { opacity: X[en.length] } : {},
                        children: (0, i.jsx)(M, {
                            iconUrl: d.Gl0,
                            header: R.intl.string(R.t.pGVNI9),
                            completed: H,
                            onClick: q,
                        }),
                    },
                    "download",
                ),
            ),
        en.push(
            (0, i.jsx)(
                r.A.div,
                {
                    className: j.cW,
                    style: $ ? { opacity: X[en.length] } : {},
                    children: (0, i.jsx)(M, {
                        iconUrl: d.UJP,
                        header: R.intl.string(R.t.IhHDEO),
                        completed: et,
                        onClick: J,
                    }),
                },
                "addapp",
            ),
        ));
    let ei = k ? R.intl.string(R.t["1ach9C"]) : R.intl.string(R.t["ezm+/j"]);
    w && (ei = R.intl.string(R.t["gwyU/J"]));
    let el = `${T.A.getArticleURL(y.MVz.GUILD_GETTING_STARTED)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm`;
    return (0, i.jsx)(v.Ay, {
        channelId: L.id,
        children: (0, i.jsx)("div", {
            className: j.kL,
            children: (0, i.jsxs)("div", {
                className: j.vW,
                children: [
                    (0, i.jsxs)(r.A.div, {
                        style: Z,
                        children: [
                            (0, i.jsx)(d.Heading, {
                                className: j.ud,
                                variant: "heading-xxl/medium",
                                children: R.intl.format(R.t.rkHVKf, { guildName: P.name }),
                            }),
                            (0, i.jsxs)(d.Text, {
                                color: "text-default",
                                className: s()({ [j.VA]: !0, [j.lg]: 0 === en.length }),
                                variant: "text-sm/normal",
                                children: [ei, " ", en.length > 0 ? R.intl.format(R.t.UOtD32, { guideURL: el }) : null],
                            }),
                        ],
                    }),
                    en,
                ],
            }),
        }),
    });
}
