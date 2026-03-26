n.d(t, { A: () => D, E: () => M }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(615300),
    o = n(311907),
    c = n(554146),
    d = n(397927),
    u = n(444927),
    h = n(919796),
    m = n(58149),
    A = n(668446),
    g = n(997509),
    p = n(794967),
    f = n(595818),
    _ = n(961350),
    E = n(71393),
    x = n(287809),
    C = n(147925),
    S = n(203982),
    I = n(975571),
    T = n(723702),
    N = n(661191),
    v = n(314307),
    b = n(652215),
    y = n(936649),
    j = n(985018),
    R = n(103935);
function M(e) {
    let { className: t, iconUrl: n, icon: s, header: r, completed: o, onClick: c } = e,
        [u, m] = l.useState(!1),
        A = (0, h.A)(o);
    return (
        l.useEffect(() => {
            null != A && o !== A && (m(!0), setTimeout(() => m(!1), 1e3));
        }, [o, A]),
        (0, i.jsxs)(d.DUT, {
            className: a()(t, R.Nr, { [R.so]: o }),
            onClick: c,
            children: [
                s ?? (0, i.jsx)("img", { className: R.Kk, src: n, alt: "" }),
                (0, i.jsx)(d.Text, {
                    color: "text-strong",
                    className: a()(R.t$, R.MY),
                    variant: "text-sm/normal",
                    children: r,
                }),
                o
                    ? (0, i.jsx)(d.A9s, { size: "md", color: "currentColor", className: a()(R.AI, { [R.i0]: u }) })
                    : (0, i.jsx)(C.A, { className: R.UE, direction: C.A.Directions.RIGHT }),
            ],
        })
    );
}
function D(e) {
    let t,
        s,
        h,
        C,
        D,
        O,
        { channel: L } = e,
        P = (0, o.bG)([E.A], () => (null != L ? E.A.getGuild(L.getGuildId()) : null), [L]),
        w = null != P && N.default.extractTimestamp(P.id) < Date.now() - b.NOr,
        k = (0, o.bG)([_.default], () => P?.ownerId === _.default.getId(), [P]),
        { canInvite: U, canManageGuild: G, canMessage: F } = (0, A.Sk)(L, P),
        H = (0, o.bG)(
            [x.default],
            () => x.default.getCurrentUser()?.desktop === !0 || x.default.getCurrentUser()?.mobile === !0,
        ),
        { guildPopulated: B, guildMessaged: V, guildPersonalized: K } = (0, A.lF)(P),
        {
            handleInvite: W,
            handleMessage: z,
            handlePersonalize: Y,
            handleDownload: q,
            handleAddApplication: J,
        } = ((t = l.useCallback(() => {
            m.Ay.trackWithMetadata(b.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: y.XT.CHANNEL_WELCOME,
                action: y.AG.INVITE,
            }),
                null != P &&
                    (0, d.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("72469")]).then(
                            n.bind(n, 234355),
                        );
                        return (t) =>
                            (0, i.jsx)(e, {
                                ...t,
                                guild: P,
                                source: b.PE1.CHANNEL_WELCOME,
                                analyticsLocation: { section: b.JJy.CHANNEL_WELCOME_CTA },
                            });
                    });
        }, [P])),
        (s = l.useCallback(() => {
            m.Ay.trackWithMetadata(b.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: y.XT.CHANNEL_WELCOME,
                action: y.AG.SEND_MESSAGE,
            }),
                S._.dispatch(b.jej.TEXTAREA_FOCUS, { highlight: !0, channelId: b.dJq });
        }, [])),
        (h = l.useCallback(() => {
            m.Ay.trackWithMetadata(b.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: y.XT.CHANNEL_WELCOME,
                action: y.AG.PERSONALIZE_SERVER,
            }),
                null != P && g.A.open(P.id, (0, f.x)(), { section: b.JJy.CHANNEL_WELCOME_CTA });
        }, [P])),
        {
            handleInvite: t,
            handleMessage: s,
            handlePersonalize: h,
            handleDownload: l.useCallback(() => {
                m.Ay.trackWithMetadata(b.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: y.XT.CHANNEL_WELCOME,
                    action: y.AG.DOWNLOAD,
                }),
                    (0, d.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                        return (t) => (0, i.jsx)(e, { source: b.JJy.CHANNEL_WELCOME_CTA, ...t });
                    });
            }, []),
            handleAddApplication: l.useCallback(() => {
                null != P &&
                    (m.Ay.trackWithMetadata(b.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: y.XT.CHANNEL_WELCOME,
                        action: y.AG.ADD_APP,
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
        $ = !(H || B || V || K),
        { titleAnimatedStyle: Z, opacities: X } =
            ((C = (0, u.A)(() => new r.A.Value(0))),
            (D = (0, u.A)(() => new r.A.Value(0))),
            (O = (0, u.A)(() => [new r.A.Value(0), new r.A.Value(0), new r.A.Value(0), new r.A.Value(0)])),
            l.useEffect(() => {
                r.A.stagger(300, [
                    r.A.parallel([
                        r.A.timing(D, { toValue: 1, duration: 450 }),
                        r.A.timing(C, { toValue: 1, duration: 450 }),
                    ]),
                    r.A.stagger(100, [
                        r.A.timing(O[0], { toValue: 1, duration: 300 }),
                        r.A.timing(O[1], { toValue: 1, duration: 300 }),
                        r.A.timing(O[2], { toValue: 1, duration: 300 }),
                        r.A.timing(O[3], { toValue: 1, duration: 300 }),
                    ]),
                ]).start();
            }, [D, C, O]),
            {
                titleAnimatedStyle: $
                    ? {
                          transform: [
                              { translateY: C.interpolate({ inputRange: [0, 1], outputRange: ["-20px", "0px"] }) },
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
                    let e = await (0, p.c)(P?.id ?? b.dJq);
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
                        className: R.cW,
                        style: $ ? { opacity: X[en.length] } : {},
                        children: (0, i.jsx)(M, {
                            iconUrl: d.zNk,
                            header: j.intl.string(j.t.q9n0Ta),
                            completed: B,
                            onClick: W,
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
                        className: R.cW,
                        style: $ ? { opacity: X[en.length] } : {},
                        children: (0, i.jsx)(M, {
                            iconUrl: d.nIm,
                            header: j.intl.string(j.t.c5kxPh),
                            completed: K,
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
                        className: R.cW,
                        style: $ ? { opacity: X[en.length] } : {},
                        children: (0, i.jsx)(M, {
                            iconUrl: d.Tj_,
                            header: j.intl.string(j.t["SoP7+l"]),
                            completed: V,
                            onClick: z,
                        }),
                    },
                    "message",
                ),
            ),
        (0, T.isWeb)() &&
            en.push(
                (0, i.jsx)(
                    r.A.div,
                    {
                        className: R.cW,
                        style: $ ? { opacity: X[en.length] } : {},
                        children: (0, i.jsx)(M, {
                            iconUrl: d.Gl0,
                            header: j.intl.string(j.t.pGVNI9),
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
                    className: R.cW,
                    style: $ ? { opacity: X[en.length] } : {},
                    children: (0, i.jsx)(M, {
                        iconUrl: d.UJP,
                        header: j.intl.string(j.t.IhHDEO),
                        completed: et,
                        onClick: J,
                    }),
                },
                "addapp",
            ),
        ));
    let ei = k ? j.intl.string(j.t["1ach9C"]) : j.intl.string(j.t["ezm+/j"]);
    w && (ei = j.intl.string(j.t["gwyU/J"]));
    let el = `${I.A.getArticleURL(b.MVz.GUILD_GETTING_STARTED)}?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm`;
    return (0, i.jsx)(v.Ay, {
        channelId: L.id,
        children: (0, i.jsx)("div", {
            className: R.kL,
            children: (0, i.jsxs)("div", {
                className: R.vW,
                children: [
                    (0, i.jsxs)(r.A.div, {
                        style: Z,
                        children: [
                            (0, i.jsx)(d.Heading, {
                                className: R.ud,
                                variant: "heading-xxl/medium",
                                children: j.intl.format(j.t.rkHVKf, { guildName: P.name }),
                            }),
                            (0, i.jsxs)(d.Text, {
                                color: "text-default",
                                className: a()({ [R.VA]: !0, [R.lg]: 0 === en.length }),
                                variant: "text-sm/normal",
                                children: [ei, " ", en.length > 0 ? j.intl.format(j.t.UOtD32, { guideURL: el }) : null],
                            }),
                        ],
                    }),
                    en,
                ],
            }),
        }),
    });
}
