n.d(t, {
    A: () => D,
    E: () => R,
}),
    n(896048),
    n(321073);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(615300),
    o = n(311907),
    c = n(554146),
    u = n(397927),
    d = n(444927),
    f = n(919796),
    p = n(58149),
    h = n(668446),
    b = n(997509),
    g = n(794967),
    m = n(595818),
    A = n(961350),
    y = n(71393),
    O = n(287809),
    j = n(147925),
    v = n(203982),
    x = n(975571),
    E = n(723702),
    _ = n(661191),
    C = n(314307),
    S = n(652215),
    I = n(936649),
    N = n(985018),
    T = n(286062);
function P(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e) {
    let { className: t, iconUrl: n, icon: i, header: s, completed: o, onClick: c } = e,
        [d, p] = l.useState(!1),
        h = (0, f.A)(o);
    return (
        l.useEffect(() => {
            null != h && o !== h && (p(!0), setTimeout(() => p(!1), 1000));
        }, [o, h]),
        (0, r.jsxs)(u.DUT, {
            className: a()(t, T.Nr, { [T.so]: o }),
            onClick: c,
            children: [
                null != i
                    ? i
                    : (0, r.jsx)("img", {
                          className: T.Kk,
                          src: n,
                          alt: "",
                      }),
                (0, r.jsx)(u.Text, {
                    color: "text-strong",
                    className: a()(T.t$, T.MY),
                    variant: "text-sm/normal",
                    children: s,
                }),
                o
                    ? (0, r.jsx)(u.A9s, {
                          size: "md",
                          color: "currentColor",
                          className: a()(T.AI, { [T.i0]: d }),
                      })
                    : (0, r.jsx)(j.A, {
                          className: T.UE,
                          direction: j.A.Directions.RIGHT,
                      }),
            ],
        })
    );
}
function D(e) {
    let t,
        i,
        f,
        j,
        D,
        M,
        { channel: L } = e,
        G = (0, o.bG)([y.A], () => (null != L ? y.A.getGuild(L.getGuildId()) : null), [L]),
        k = null != G && _.default.extractTimestamp(G.id) < Date.now() - S.NOr,
        U = (0, o.bG)([A.default], () => (null == G ? void 0 : G.ownerId) === A.default.getId(), [G]),
        { canInvite: V, canManageGuild: F, canMessage: H } = (0, h.Sk)(L, G),
        B = (0, o.bG)([O.default], () => {
            var e, t;
            return (
                (null == (e = O.default.getCurrentUser()) ? void 0 : e.desktop) === !0 ||
                (null == (t = O.default.getCurrentUser()) ? void 0 : t.mobile) === !0
            );
        }),
        { guildPopulated: K, guildMessaged: W, guildPersonalized: z } = (0, h.lF)(G),
        {
            handleInvite: Y,
            handleMessage: q,
            handlePersonalize: X,
            handleDownload: J,
            handleAddApplication: Q,
        } = ((t = l.useCallback(() => {
            p.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: I.XT.CHANNEL_WELCOME,
                action: I.AG.INVITE,
            }),
                null != G &&
                    (0, u.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("43600"), n.e("28136"), n.e("42821")]).then(
                            n.bind(n, 234355),
                        );
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                w(P({}, t), {
                                    guild: G,
                                    source: S.PE1.CHANNEL_WELCOME,
                                    analyticsLocation: { section: S.JJy.CHANNEL_WELCOME_CTA },
                                }),
                            );
                    });
        }, [G])),
        (i = l.useCallback(() => {
            p.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: I.XT.CHANNEL_WELCOME,
                action: I.AG.SEND_MESSAGE,
            }),
                v._.dispatch(S.jej.TEXTAREA_FOCUS, {
                    highlight: !0,
                    channelId: S.dJq,
                });
        }, [])),
        (f = l.useCallback(() => {
            p.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                setup_type: I.XT.CHANNEL_WELCOME,
                action: I.AG.PERSONALIZE_SERVER,
            }),
                null != G && b.A.open(G.id, (0, m.x)(), { section: S.JJy.CHANNEL_WELCOME_CTA });
        }, [G])),
        {
            handleInvite: t,
            handleMessage: i,
            handlePersonalize: f,
            handleDownload: l.useCallback(() => {
                p.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                    setup_type: I.XT.CHANNEL_WELCOME,
                    action: I.AG.DOWNLOAD,
                }),
                    (0, u.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("56423"), n.e("25280")]).then(n.bind(n, 987482));
                        return (t) => (0, r.jsx)(e, P({ source: S.JJy.CHANNEL_WELCOME_CTA }, t));
                    });
            }, []),
            handleAddApplication: l.useCallback(() => {
                null != G &&
                    (p.Ay.trackWithMetadata(S.HAw.SERVER_SETUP_CTA_CLICKED, {
                        setup_type: I.XT.CHANNEL_WELCOME,
                        action: I.AG.ADD_APP,
                    }),
                    (0, u.mMO)(async () => {
                        let { default: e } = await n.e("66003").then(n.bind(n, 258942));
                        return (t) => {
                            var n;
                            return (0, r.jsx)(
                                e,
                                w(P({ guildId: null != (n = G.id) ? n : "" }, t), {
                                    analyticsType: c.M.APP_DIRECTORY_SERVER_SETUP_UPSELL_MODAL,
                                }),
                            );
                        };
                    }));
            }, [G]),
        }),
        Z = !(B || K || W || z),
        { titleAnimatedStyle: $, opacities: ee } =
            ((j = (0, d.A)(() => new s.A.Value(0))),
            (D = (0, d.A)(() => new s.A.Value(0))),
            (M = (0, d.A)(() => [new s.A.Value(0), new s.A.Value(0), new s.A.Value(0), new s.A.Value(0)])),
            l.useEffect(() => {
                s.A.stagger(300, [
                    s.A.parallel([
                        s.A.timing(D, {
                            toValue: 1,
                            duration: 450,
                        }),
                        s.A.timing(j, {
                            toValue: 1,
                            duration: 450,
                        }),
                    ]),
                    s.A.stagger(100, [
                        s.A.timing(M[0], {
                            toValue: 1,
                            duration: 300,
                        }),
                        s.A.timing(M[1], {
                            toValue: 1,
                            duration: 300,
                        }),
                        s.A.timing(M[2], {
                            toValue: 1,
                            duration: 300,
                        }),
                        s.A.timing(M[3], {
                            toValue: 1,
                            duration: 300,
                        }),
                    ]),
                ]).start();
            }, [D, j, M]),
            {
                titleAnimatedStyle: Z
                    ? {
                          transform: [
                              {
                                  translateY: j.interpolate({
                                      inputRange: [0, 1],
                                      outputRange: ["-20px", "0px"],
                                  }),
                              },
                          ],
                          opacity: D,
                      }
                    : {},
                opacities: M,
            }),
        [et, en] = l.useState([]),
        er = et.length > 0;
    if (
        (l.useEffect(() => {
            (async () => {
                try {
                    var e;
                    let t = await (0, g.c)(null != (e = null == G ? void 0 : G.id) ? e : S.dJq);
                    en(t.map((e) => e.id));
                } catch (e) {}
            })();
        }, [null == G ? void 0 : G.id]),
        null == G)
    )
        return null;
    let el = [];
    k ||
        (V &&
            el.push(
                (0, r.jsx)(
                    s.A.div,
                    {
                        className: T.cW,
                        style: Z ? { opacity: ee[el.length] } : {},
                        children: (0, r.jsx)(R, {
                            iconUrl: u.zNk,
                            header: N.intl.string(N.t.q9n0Ta),
                            completed: K,
                            onClick: Y,
                        }),
                    },
                    "invite",
                ),
            ),
        F &&
            el.push(
                (0, r.jsx)(
                    s.A.div,
                    {
                        className: T.cW,
                        style: Z ? { opacity: ee[el.length] } : {},
                        children: (0, r.jsx)(R, {
                            iconUrl: u.nIm,
                            header: N.intl.string(N.t.c5kxPh),
                            completed: z,
                            onClick: X,
                        }),
                    },
                    "customize",
                ),
            ),
        H &&
            el.push(
                (0, r.jsx)(
                    s.A.div,
                    {
                        className: T.cW,
                        style: Z ? { opacity: ee[el.length] } : {},
                        children: (0, r.jsx)(R, {
                            iconUrl: u.Tj_,
                            header: N.intl.string(N.t["SoP7+l"]),
                            completed: W,
                            onClick: q,
                        }),
                    },
                    "message",
                ),
            ),
        (0, E.isWeb)() &&
            el.push(
                (0, r.jsx)(
                    s.A.div,
                    {
                        className: T.cW,
                        style: Z ? { opacity: ee[el.length] } : {},
                        children: (0, r.jsx)(R, {
                            iconUrl: u.Gl0,
                            header: N.intl.string(N.t.pGVNI9),
                            completed: B,
                            onClick: J,
                        }),
                    },
                    "download",
                ),
            ),
        el.push(
            (0, r.jsx)(
                s.A.div,
                {
                    className: T.cW,
                    style: Z ? { opacity: ee[el.length] } : {},
                    children: (0, r.jsx)(R, {
                        iconUrl: u.UJP,
                        header: N.intl.string(N.t.IhHDEO),
                        completed: er,
                        onClick: Q,
                    }),
                },
                "addapp",
            ),
        ));
    let ei = U ? N.intl.string(N.t["1ach9C"]) : N.intl.string(N.t["ezm+/j"]);
    k && (ei = N.intl.string(N.t["gwyU/J"]));
    let ea = "".concat(
        x.A.getArticleURL(S.MVz.GUILD_GETTING_STARTED),
        "?utm_source=discord&utm_medium=blog&utm_campaign=2020-06_help-new-user&utm_content=--t%3Apm",
    );
    return (0, r.jsx)(C.Ay, {
        channelId: L.id,
        children: (0, r.jsx)("div", {
            className: T.kL,
            children: (0, r.jsxs)("div", {
                className: T.vW,
                children: [
                    (0, r.jsxs)(s.A.div, {
                        style: $,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                className: T.ud,
                                variant: "heading-xxl/medium",
                                children: N.intl.format(N.t.rkHVKf, { guildName: G.name }),
                            }),
                            (0, r.jsxs)(u.Text, {
                                color: "text-default",
                                className: a()({
                                    [T.VA]: !0,
                                    [T.lg]: 0 === el.length,
                                }),
                                variant: "text-sm/normal",
                                children: [ei, " ", el.length > 0 ? N.intl.format(N.t.UOtD32, { guideURL: ea }) : null],
                            }),
                        ],
                    }),
                    el,
                ],
            }),
        }),
    });
}
