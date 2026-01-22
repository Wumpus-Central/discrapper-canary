n.d(t, {
    BC: () => eN,
    Eh: () => ev,
    Fl: () => eR,
    YN: () => eO,
    fD: () => eS,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(284009),
    l = n.n(o);
n(340287);
var c = n(311907),
    u = n(554146),
    d = n(827734),
    f = n(342952),
    p = n(990078),
    _ = n(397927),
    h = n(308528),
    m = n(367513),
    g = n(956793),
    E = n(401843),
    b = n(775602),
    y = n(969151),
    O = n(1768),
    A = n(262763),
    v = n(402216),
    S = n(826673),
    I = n(822123),
    T = n(643501),
    C = n(409626),
    N = n(692969),
    R = n(279250),
    w = n(607407),
    P = n(263063),
    D = n(721592),
    x = n(378570),
    L = n(565688),
    j = n(93879),
    M = n(242640),
    k = n(912276),
    U = n(636585),
    G = n(95701),
    V = n(734057),
    F = n(71393),
    B = n(576705),
    H = n(994500),
    Y = n(543465),
    W = n(287809),
    K = n(977997),
    z = n(607567),
    q = n(954571),
    X = n(486020),
    Z = n(562153),
    Q = n(939341),
    $ = n(20805),
    J = n(22869),
    ee = n(623671),
    et = n(428249),
    en = n(327098),
    er = n(576757),
    ei = n(202195),
    ea = n(176563),
    es = n(422973),
    eo = n(315246),
    el = n(899682),
    ec = n(424994),
    eu = n(652215),
    ed = n(381941),
    ef = n(188275),
    ep = n(985018),
    e_ = n(187866);

function eh(e, t, n) {
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

function em(e) {
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
                eh(e, t, n[t]);
            });
    }
    return e;
}

function eg(e, t) {
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

function eE(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eg(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function eb(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = ey(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function ey(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}

function eO(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: e_.SW,
        children: t,
    });
}

function eA(e) {
    let { children: t, backgroundImgSrc: n, className: i, style: a = {} } = e,
        { primaryColor: o, secondaryColor: l } = (0, ea.A)(n);
    return (
        null != n && (a.background = "linear-gradient(45deg, ".concat(o, ", ").concat(l, ")")),
        (0, r.jsx)(_.NPJ, {
            theme: eu.NJ8.DARK,
            disableAdaptiveTheme: !0,
            children: (e) =>
                (0, r.jsx)("div", {
                    className: s()(e_.ZK, e, i),
                    style: a,
                    children: t,
                }),
        })
    );
}

function ev(e) {
    let { children: t } = e;
    return (0, r.jsx)("div", {
        className: e_.$m,
        children: t,
    });
}

function eS(e) {
    let { channel: t, user: n, onReaction: a, entry: s, buttons: o = [], header: f, onVoiceChannelPreview: m } = e,
        [g, E] = i.useState(!1),
        [b, y] = i.useState(null),
        A = i.useRef(null),
        v = (0, c.bG)(
            [B.A],
            () => null != t && eu.kvI.CONTENT_ENTRY_EMBEDS.has(t.type) && B.A.can(eu.xBc.SEND_MESSAGES, t),
        ),
        [I, T] = i.useState(!1),
        [C, N] = i.useState(!1),
        { voiceBar: R, joinVoiceButton: w } = eP({
            channel: t,
            entry: s,
            onVoiceChannelPreview: m,
        }),
        { embeddedActivity: P } = (0, en.A)(s),
        D = ew(P),
        x = null != w && 0 === o.length ? [w] : o,
        L = x.length > 0,
        j = x.length >= 2,
        [M, k] = i.useState(!L),
        U = Z.Ay.getName(null == t ? void 0 : t.guild_id, null == t ? void 0 : t.id, n),
        G =
            null != t && g
                ? ep.intl.formatToPlainString(ep.t["8lzR/R"], {
                      channel: "#".concat(t.name),
                  })
                : ep.intl.formatToPlainString(ep.t["4c+CAx"], {
                      channel: "@".concat(U),
                  }),
        F = g ? ep.intl.string(ep.t.Z2CUgn) : ep.intl.string(ep.t.XLGiTG),
        H = async (e) => {
            let r,
                { emoji: i } = e;
            if (null != i) {
                if (
                    (q.default.track(eu.HAw.CONTENT_POPOUT_EMOJI_CLICKED, {
                        surface_type: ec.UG.GUILD_MEMBER_LIST,
                        channel_id: null == t ? void 0 : t.id,
                        guild_id: null == t ? void 0 : t.guild_id,
                    }),
                    (0, S.Dr)(u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP),
                    T(!0),
                    N(!1),
                    g)
                )
                    l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
                else {
                    var s;
                    let e = await h.A.getOrEnsurePrivateChannel(n.id);
                    r = null != (s = V.A.getChannel(e)) ? s : null;
                }
                return (
                    l()(null != r, "Send channel must be defined"),
                    W({
                        reply: ":".concat(i.name, ":"),
                        sendToChannel: r,
                        onComplete: (e, t) => {
                            N(!0),
                                setTimeout(() => {
                                    T(!1), a(e, t);
                                }, 600);
                        },
                        interactionType: ec.PA.REACTION_EMOJI_REACT_SENT,
                        requiresChannelReadiness: !1,
                    })
                );
            }
        },
        Y = async (e) => {
            let r;
            if (((0, S.Dr)(u.M.CONTENT_INVENTORY_ONE_CLICK_REPLY_COACHTIP), g))
                l()(null != t, "shareToChannelMode should only be true if a valid channel is passed"), (r = t);
            else {
                let e = await h.A.openPrivateChannel({
                        recipientIds: n.id,
                    }),
                    t = V.A.getChannel(e);
                l()(null != t, "DM channel must be defined"), (r = t);
            }
            let i = r.type === eu.rbe.DM ? ec.PA.DM_REACTION_MESSAGE_SENT : ec.PA.CHANNEL_REACTION_MESSAGE_SENT;
            return W({
                reply: e,
                sendToChannel: r,
                interactionType: i,
                onComplete: a,
                requiresChannelReadiness: !0,
            });
        },
        W = async (e) => {
            let { reply: t, sendToChannel: n, onComplete: r, interactionType: i, requiresChannelReadiness: a } = e;
            null == b || b.focus(),
                await (0, et.d)({
                    channel: n,
                    content: t,
                    entry: s,
                    whenReady: a,
                    doNotNotifyOnError: !1,
                    location: ed.Hx.CONTENT_INVENTORY_MEMBERLIST,
                }),
                null == r || r(i, n);
        },
        K = null != f ? f : null != R ? R : null != D ? D : void 0,
        z = () => {
            E((e) => !e), M && (null == b || b.focus());
        },
        X = (e) => {
            k(e), e && (null == b || b.focus());
        };
    return (0, r.jsx)("div", {
        ref: A,
        style: {
            pointerEvents: I ? "none" : "all",
        },
        children: (0, r.jsx)(_.Oky, {
            containerRef: A,
            children: (0, r.jsxs)("div", {
                children: [
                    (0, r.jsx)(el.A, {
                        sent: C,
                        shown: I,
                        className: e_.Jt,
                    }),
                    null != K
                        ? K
                        : (0, r.jsx)(es.A, {
                              children: (0, r.jsxs)("div", {
                                  className: e_.T7,
                                  children: [
                                      (0, r.jsx)(eI, {
                                          channel: t,
                                          onClickSuggestion: H,
                                      }),
                                      (0, r.jsx)(O.g1, {
                                          onSelectEmoji: H,
                                      }),
                                  ],
                              }),
                          }),
                    (0, r.jsxs)("div", {
                        className: M ? e_.P2 : e_.VE,
                        children: [
                            (0, r.jsx)(O.nd, {
                                placeholder: G,
                                onEnter: Y,
                                setEditorRef: (e) => y(e),
                                channel: g ? t : void 0,
                                showEmojiButton: null != K,
                                className: e_.N8,
                                autoFocus: !1,
                                renderAttachButton: v
                                    ? () =>
                                          (0, r.jsx)(p.m, {
                                              text: F,
                                              children: (0, r.jsx)(_.DUT, {
                                                  className: e_.wD,
                                                  onClick: z,
                                                  children: g
                                                      ? (0, r.jsx)(_.N$i, {
                                                            size: "custom",
                                                            width: 20,
                                                            height: 20,
                                                        })
                                                      : (0, r.jsx)(_.XxR, {
                                                            size: "custom",
                                                            width: 20,
                                                            height: 20,
                                                        }),
                                              }),
                                          })
                                    : void 0,
                            }),
                            L &&
                                (0, r.jsx)(_.DUT, {
                                    onClick: () => X(!1),
                                    className: e_.i3,
                                    children: (0, r.jsx)(_.PGe, {
                                        size: "custom",
                                        width: 20,
                                        height: 20,
                                        color: d.A.colors.ICON_STRONG,
                                    }),
                                }),
                        ],
                    }),
                    !1 === M &&
                        (0, r.jsxs)("div", {
                            className: e_.fh,
                            children: [
                                !j &&
                                    (0, r.jsx)(
                                        _.Button,
                                        {
                                            fullWidth: !0,
                                            variant: "secondary",
                                            onClick: () => X(!0),
                                            size: j ? "sm" : "md",
                                            text: ep.intl.string(ep.t.OAJQlP),
                                        },
                                        "toggleMessageMode",
                                    ),
                                x,
                            ],
                        }),
                ],
            }),
        }),
    });
}
let eI = (e) => {
    let { channel: t, onClickSuggestion: n } = e,
        [a, s] = i.useState(!1);
    i.useEffect(() => {
        s(!0);
    }, []);
    let o = !!b.A.keyboardModeEnabled && !a,
        l = (0, I.Fj)(null == t ? void 0 : t.guild_id)
            .slice(0, 5)
            .map((e) =>
                null == e.id
                    ? {
                          emoji: e,
                          url: e.url,
                      }
                    : {
                          emoji: e,
                          url: (0, X._O)({
                              id: e.id,
                              animated: e.animated,
                              size: 58,
                          }),
                      },
            );
    return (0, r.jsx)(r.Fragment, {
        children: l.map((e) => {
            let { emoji: t, url: i } = e;
            return null != i
                ? (0, r.jsx)(
                      "div",
                      {
                          children: (0, r.jsx)(p.m, {
                              asContainer: !0,
                              text: ep.intl.formatToPlainString(ep.t.kilW3l, {
                                  emojiName: t.name,
                              }),
                              position: "top",
                              "aria-label": ep.intl.formatToPlainString(ep.t.kilW3l, {
                                  emojiName: t.name,
                              }),
                              shouldShow: !o && void 0,
                              children: (0, r.jsx)(k.D, {
                                  emoji: t,
                                  isDisabled: !a,
                                  onClick: () =>
                                      n({
                                          emoji: t,
                                      }),
                                  className: e_.Zg,
                              }),
                          }),
                      },
                      t.name,
                  )
                : null;
        }),
    });
};

function eT(e) {
    let { channel: t, userDescription: n, entry: i, disableGameProfileLinks: a, onUserPopoutClosed: o } = e,
        l = null == t ? void 0 : t.guild_id,
        { displayParticipants: u, participant1: d, participant2: p, numOtherParticipants: h } = (0, er.A)(i, 3),
        m = (0, c.bG)([W.default], () => W.default.getUser(i.author_id)),
        { streamPreviewUrl: g } = (0, ei.A)(i),
        E = null != g,
        b = [d, p];
    return (0, r.jsxs)("div", {
        className: e_.MH,
        children: [
            (0, r.jsxs)("div", {
                className: e_.WP,
                children: [
                    (0, r.jsx)(f.A, {
                        maxUsers: 3,
                        users: u,
                        size: _._3J.SIZE_24,
                        hideOverflowCount: !0,
                        disableUsernameTooltip: !0,
                        onUserPopoutRequestClose: o,
                    }),
                    (0, r.jsx)(_.hKd, {
                        size: 8,
                        horizontal: !0,
                    }),
                    (0, r.jsx)(_.Heading, {
                        variant: "heading-sm/normal",
                        className: s()(e_.Xn, e_.zA),
                        children: ep.intl.format(n, {
                            user0: Z.Ay.getName(l, null == t ? void 0 : t.id, b[0]),
                            user1: Z.Ay.getName(l, null == t ? void 0 : t.id, b[1]),
                            countOthers: h,
                            countOthersHook: (e, t) =>
                                (0, r.jsx)(
                                    _.Text,
                                    {
                                        variant: "text-sm/medium",
                                        className: s()(e_.Mj, e_.nk),
                                        children: e,
                                    },
                                    t,
                                ),
                            name0Hook: (e, n) =>
                                (0, r.jsx)(
                                    J.A,
                                    {
                                        textClassName: s()(e_.Mj, e_.nk),
                                        text: e,
                                        user: b[0],
                                        channel: t,
                                        onPopoutClosed: o,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                            name1Hook: (e, n) =>
                                (0, r.jsx)(
                                    J.A,
                                    {
                                        textClassName: s()(e_.Mj, e_.nk),
                                        text: e,
                                        user: b[1],
                                        channel: t,
                                        onPopoutClosed: o,
                                        enableDisplayNameStyles: !0,
                                    },
                                    n,
                                ),
                        }),
                    }),
                ],
            }),
            E &&
                (0, r.jsx)(v.Ay, {
                    size: v.Ay.Sizes.SMALL,
                }),
            null != m &&
                (0, r.jsx)(eo.A, {
                    user: m,
                    channel: t,
                    guildId: l,
                    entry: i,
                    disableGameProfileLinks: a,
                }),
        ],
    });
}

function eC(e) {
    let { children: t, onClick: n } = e;
    return null == n
        ? t
        : (0, r.jsx)(_.DUT, {
              className: e_.Zw,
              onClick: n,
              children: t,
          });
}

function eN(e) {
    var t, n, i;
    let {
            title: a,
            subtitle: o,
            badges: l,
            children: c,
            onClickThumbnail: u,
            onClickTitle: d,
            onClickSubtitle: f,
            headerIcons: p,
            disableGameProfileLinks: h = !1,
            showCoverImage: m = !0,
            onUserPopoutClosed: g,
            trackRankingItemInteraction: E,
        } = e,
        b = eb(e, [
            "title",
            "subtitle",
            "badges",
            "children",
            "onClickThumbnail",
            "onClickTitle",
            "onClickSubtitle",
            "headerIcons",
            "disableGameProfileLinks",
            "showCoverImage",
            "onUserPopoutClosed",
            "trackRankingItemInteraction",
        ]),
        { entry: y } = b,
        O = (0, $.zD)(y),
        A = O ? (null == (t = y.extra) ? void 0 : t.application_id) : void 0,
        v = (0, N.A)(
            {
                location: "ContentPopout",
                applicationId: h ? void 0 : A,
                source: C.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: y.author_id,
            },
            {
                onOpened: () => (null == E ? void 0 : E(ec.PA.OPENED_GAME_PROFILE)),
            },
        ),
        { largeImage: S, smallImage: I } = (0, Q.nO)({
            entry: y,
            showCoverImage: m,
        }),
        T = (0, L.w)({
            location: "content_inventory",
        }),
        R = O ? v : void 0;
    return (0, r.jsxs)("div", {
        className: e_.au,
        children: [
            (0, r.jsx)(
                eT,
                eE(
                    em(
                        {
                            disableGameProfileLinks: h,
                        },
                        b,
                    ),
                    {
                        onUserPopoutClosed: g,
                    },
                ),
            ),
            (0, r.jsxs)(eA, {
                backgroundImgSrc: null == S ? void 0 : S.src,
                children: [
                    (0, r.jsxs)("div", {
                        className: e_.CG,
                        children: [
                            (0, r.jsx)("div", {
                                className: e_.Fb,
                                children: (0, r.jsx)(ee.d, {
                                    image: S,
                                    smallImage: I,
                                    aspectRatio: m ? "none" : void 0,
                                    onClick: null != u ? u : R,
                                    size: ee.w.SIZE_72,
                                }),
                            }),
                            (0, r.jsxs)("div", {
                                className: e_.iC,
                                children: [
                                    (0, r.jsx)(eC, {
                                        onClick: null != d ? d : R,
                                        children: (0, r.jsx)(_.Heading, {
                                            variant: "heading-md/medium",
                                            className: s()(e_.$2, {
                                                [e_.bC]: null != p,
                                            }),
                                            lineClamp: 3,
                                            children: a,
                                        }),
                                    }),
                                    null != o
                                        ? (0, r.jsx)(eC, {
                                              onClick: null != f ? f : R,
                                              children: (0, r.jsx)(_.Text, {
                                                  variant: "text-sm/normal",
                                                  className: e_.LG,
                                                  children: o,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(_.hKd, {
                                        size: 8,
                                    }),
                                    l,
                                ],
                            }),
                            (0, r.jsx)("div", {
                                className: e_.hO,
                                children: p,
                            }),
                        ],
                    }),
                    c,
                ],
            }),
            T && null != A && ef.sQ.has(A)
                ? (0, r.jsx)(j.A, {
                      className: e_.zu,
                      applicationId: A,
                      userIds: [y.author_id],
                      cardSize: M.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: null == (n = b.channel) ? void 0 : n.guild_id,
                      channelId: null == (i = b.channel) ? void 0 : i.id,
                  })
                : null,
        ],
    });
}

function eR(e) {
    var t, n, a;
    let {
            title: s,
            subtitle: o,
            badges: l,
            stream: u,
            onClickThumbnail: d,
            onClickTitle: f,
            onClickSubtitle: p,
            onUserPopoutClosed: h,
            trackRankingItemInteraction: m,
        } = e,
        b = eb(e, [
            "title",
            "subtitle",
            "badges",
            "stream",
            "onClickThumbnail",
            "onClickTitle",
            "onClickSubtitle",
            "onUserPopoutClosed",
            "trackRankingItemInteraction",
        ]),
        y = (0, c.bG)([V.A], () => V.A.getChannel(null == u ? void 0 : u.channelId)),
        [O] = i.useMemo(() => (0, R.eo)(y, K.A, F.A, B.A, T.default), [y]),
        { entry: A } = b,
        v = (0, $.zD)(A),
        S = v ? (null == (t = A.extra) ? void 0 : t.application_id) : void 0,
        I = (0, N.A)(
            {
                location: "ContentPopout",
                applicationId: S,
                source: C.Ob.ActivityCard,
                trackEntryPointImpression: !0,
                sourceUserId: A.author_id,
            },
            {
                onOpened: () => (null == m ? void 0 : m(ec.PA.OPENED_GAME_PROFILE)),
            },
        ),
        P = v ? I : void 0,
        { activity: D, activityApplication: x, fallbackApplication: k } = (0, en.A)(A),
        { largeImage: U, smallImage: G } = (0, Q.D8)(D, null != x ? x : k),
        { largeImage: H } = (0, Q.nO)({
            entry: A,
        }),
        Y = (0, L.w)({
            location: "content_inventory",
        });
    return (0, r.jsxs)("div", {
        className: e_.au,
        children: [
            (0, r.jsx)(
                eT,
                eE(em({}, b), {
                    onUserPopoutClosed: h,
                }),
            ),
            (0, r.jsxs)(eA, {
                backgroundImgSrc: null == H ? void 0 : H.src,
                className: e_.uR,
                children: [
                    (0, r.jsx)(eC, {
                        onClick: O
                            ? () => {
                                  g.default.selectVoiceChannel(u.channelId), (0, E.Nl)(u);
                              }
                            : void 0,
                        children: (0, r.jsxs)("div", {
                            className: e_.nh,
                            children: [
                                (0, r.jsx)(w.A, {
                                    className: e_.j7,
                                    stream: u,
                                }),
                                O &&
                                    (0, r.jsx)("div", {
                                        className: e_.NE,
                                        children: (0, r.jsx)(_.Text, {
                                            variant: "text-md/normal",
                                            color: "always-white",
                                            children: ep.intl.string(ep.t["7Xq/nV"]),
                                        }),
                                    }),
                            ],
                        }),
                    }),
                    (0, r.jsxs)("div", {
                        className: e_.$6,
                        children: [
                            null != U &&
                                (0, r.jsx)("div", {
                                    className: e_.Fb,
                                    children: (0, r.jsx)(ee.d, {
                                        image: U,
                                        smallImage: G,
                                        onClick: null != d ? d : P,
                                        size: ee.w.SIZE_72,
                                    }),
                                }),
                            (0, r.jsxs)("div", {
                                className: e_.gv,
                                children: [
                                    (0, r.jsx)(eC, {
                                        onClick: null != f ? f : P,
                                        children: (0, r.jsx)(_.Heading, {
                                            variant: "heading-md/semibold",
                                            className: e_.nk,
                                            lineClamp: 3,
                                            children: s,
                                        }),
                                    }),
                                    null != o
                                        ? (0, r.jsx)(eC, {
                                              onClick: null != p ? p : P,
                                              children: (0, r.jsx)(_.Text, {
                                                  variant: "text-sm/normal",
                                                  className: e_.zA,
                                                  children: o,
                                              }),
                                          })
                                        : null,
                                    (0, r.jsx)(_.hKd, {
                                        size: 8,
                                    }),
                                    l,
                                ],
                            }),
                        ],
                    }),
                ],
            }),
            Y && null != S && ef.sQ.has(S)
                ? (0, r.jsx)(j.A, {
                      className: e_.zu,
                      applicationId: S,
                      userIds: [A.author_id],
                      cardSize: M.Y.SMALL_SQUARE,
                      location: "content_popout",
                      guildId: null == (n = b.channel) ? void 0 : n.guild_id,
                      channelId: null == (a = b.channel) ? void 0 : a.id,
                  })
                : null,
        ],
    });
}

function ew(e) {
    let t = (0, c.bG)([F.A], () => F.A.getGuild((0, y.D)(null == e ? void 0 : e.location))),
        n = (0, c.bG)([V.A], () => V.A.getChannel((0, y.H)(null == e ? void 0 : e.location))),
        i = (0, c.yK)([W.default], () => {
            var t, n;
            return null !=
                (t = null == e || null == (n = e.participants) ? void 0 : n.map((e) => W.default.getUser(e.userId)))
                ? t
                : [];
        });
    return null != e && null != t && null != n && G.k3.has(n.type)
        ? (0, r.jsxs)(r.Fragment, {
              children: [
                  (0, r.jsxs)("div", {
                      className: e_.kP,
                      children: [
                          (0, r.jsxs)(_.DUT, {
                              "aria-label": ep.intl.string(ep.t["W/A4Qp"]),
                              onClick: () => (0, x.iN)(n.id),
                              className: e_.I3,
                              children: [
                                  (0, r.jsx)(P.A, {
                                      guild: t,
                                      size: P.A.Sizes.SMOL,
                                      className: e_.O9,
                                      active: !0,
                                  }),
                                  (0, r.jsx)(_._BQ, {
                                      size: "xxs",
                                      color: d.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                  }),
                                  (0, r.jsx)(_.N$i, {
                                      size: "xs",
                                      color: d.A.colors.TEXT_DEFAULT,
                                  }),
                                  (0, r.jsx)(_.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-default",
                                      className: e_.NR,
                                      children: null == n ? void 0 : n.name,
                                  }),
                              ],
                          }),
                          (0, r.jsx)(U.A, {
                              guildId: t.id,
                              users: i,
                              max: 3,
                              renderUser: (e, n) =>
                                  (0, r.jsx)(_.euF, {
                                      src: e.getAvatarURL(t.id, 16),
                                      size: _._3J.SIZE_16,
                                      "aria-label": "avatar",
                                      className: n,
                                  }),
                              renderMoreUsers: (e) =>
                                  (0, r.jsx)("div", {
                                      className: e_.V9,
                                      children: (0, r.jsx)(_.Text, {
                                          variant: "text-xxs/semibold",
                                          color: "text-default",
                                          children: e,
                                      }),
                                  }),
                          }),
                      ],
                  }),
                  (0, r.jsx)(_.hKd, {
                      size: 16,
                  }),
              ],
          })
        : null;
}

function eP(e) {
    let { channel: t, entry: n, onVoiceChannelPreview: a } = e,
        { streamPreviewUrl: s, channel: o } = (0, ei.A)(n),
        { needSubscriptionToAccess: l } = (0, D.A)(null == t ? void 0 : t.id),
        u = (0, c.bG)([F.A], () => (null != o ? F.A.getGuild(o.guild_id) : void 0)),
        f = (0, c.yK)([z.Ay], () => (null != o ? z.Ay.getVoiceStatesForChannel(o) : []), [o]),
        h = (0, c.bG)([K.A], () => K.A.isInChannel(null == o ? void 0 : o.id)),
        g = i.useMemo(() => {
            for (let e of f) {
                let t = V.A.getDMFromUserId(e.user.id),
                    n = null != t && Y.Ay.isChannelMuted(null, t),
                    r = H.A.isBlockedOrIgnored(e.user.id);
                if (n || r) return !0;
            }
            return !1;
        }, [f]);
    if (null == o || null == u)
        return {
            voiceBar: void 0,
            joinVoiceButton: void 0,
        };
    let E = null != s,
        b = () => {
            m.A.updateChatOpen(o.id, !0), (0, x.iN)(o.id), null == a || a(o);
        },
        y = () => {
            A.A.handleVoiceConnect({
                channel: o,
                connected: h,
                needSubscriptionToAccess: l,
                routeDirectlyToChannel: !0,
            });
        },
        O = (e) => {
            let { children: t, text: n, hasRestrictedOrMutedVCParticipant: i } = e,
                a = i
                    ? (0, r.jsxs)(r.Fragment, {
                          children: [
                              i &&
                                  (0, r.jsx)(_.id, {
                                      size: "custom",
                                      width: 13,
                                      height: 13,
                                      className: e_.vb,
                                  }),
                              ep.intl.string(ep.t.d6DpXI),
                          ],
                      })
                    : n;
            return (0, r.jsx)(
                p.m,
                {
                    "aria-label": i ? ep.intl.string(ep.t.d6DpXI) : null != n && n,
                    __unsupportedReactNodeAsText: a,
                    shouldShow: !0,
                    children: t,
                },
                "voice-preview",
            );
        };
    return {
        voiceBar: (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsxs)("div", {
                    className: e_.kP,
                    children: [
                        (0, r.jsx)(O, {
                            text: ep.intl.string(ep.t.WIVYqJ),
                            hasRestrictedOrMutedVCParticipant: g,
                            children: (0, r.jsxs)(_.DUT, {
                                "aria-label": ep.intl.string(ep.t.WIVYqJ),
                                onClick: b,
                                className: e_.I3,
                                children: [
                                    (0, r.jsx)(P.A, {
                                        guild: u,
                                        size: P.A.Sizes.SMOL,
                                        className: e_.O9,
                                        active: !0,
                                    }),
                                    (0, r.jsx)(_._BQ, {
                                        size: "xxs",
                                        color: d.A.colors.INTERACTIVE_TEXT_DEFAULT,
                                    }),
                                    (0, r.jsx)(_.HKD, {
                                        size: "xs",
                                        color: d.A.colors.TEXT_DEFAULT,
                                    }),
                                    (0, r.jsx)(_.Text, {
                                        variant: "text-sm/medium",
                                        color: "text-default",
                                        className: e_.NR,
                                        children: o.name,
                                    }),
                                ],
                            }),
                        }),
                        (0, r.jsx)(U.A, {
                            guildId: u.id,
                            users: f,
                            max: 3,
                            renderUser: (e, t) =>
                                (0, r.jsx)(_.euF, {
                                    src: e.user.getAvatarURL(u.id, 16),
                                    size: _._3J.SIZE_16,
                                    "aria-label": "avatar",
                                    className: t,
                                }),
                            renderMoreUsers: (e) =>
                                (0, r.jsx)("div", {
                                    className: e_.V9,
                                    children: (0, r.jsx)(_.Text, {
                                        variant: "text-xxs/semibold",
                                        color: "text-default",
                                        children: e,
                                    }),
                                }),
                        }),
                    ],
                }),
                (0, r.jsx)(_.hKd, {
                    size: 16,
                }),
            ],
        }),
        joinVoiceButton: h
            ? null
            : (0, r.jsx)(O, {
                  hasRestrictedOrMutedVCParticipant: g,
                  children: (0, r.jsx)(_.Button, {
                      onClick: y,
                      fullWidth: !0,
                      text: E ? ep.intl.string(ep.t.I6JG46) : ep.intl.string(ep.t.VJlc0S),
                      icon: E ? _.kN9 : _.HKD,
                      variant: "active",
                      size: "md",
                  }),
              }),
    };
}
