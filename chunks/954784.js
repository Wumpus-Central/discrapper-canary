l.d(a, { default: () => T }), l(321073);
var i = l(627968),
    n = l(64700),
    s = l(189213),
    t = l(17928),
    o = l(276293),
    r = l(939249),
    c = l(834730),
    d = l(289873),
    m = l(534514),
    _ = l(781696),
    u = l(565645),
    h = l(47167),
    j = l(713654),
    x = l(573435),
    p = l(915089),
    N = l(159273),
    A = l(7584),
    b = l(548118),
    g = l(714991),
    C = l(976860),
    E = l(734057),
    f = l(71393),
    y = l(576705),
    I = l(147925),
    k = l(954571),
    v = l(447696),
    w = l(684407),
    G = l(652215),
    S = l(818348),
    D = l(985018),
    P = l(539841);
let R = (e) => {
        let { channelData: a, onClose: l, trackOptionClick: n } = e,
            s = (0, t.bG)([E.A], () => E.A.getChannel(a.channel_id)),
            d = (0, h.Ay)(s),
            m = (0, t.bG)([y.A], () => null != s && y.A.can(S.xB.VIEW_CHANNEL, s)),
            _ = (0, t.bG)([N.Ay], () => (null != a.emoji_id ? N.Ay.getCustomEmojiById(a.emoji_id) : null), [
                a.emoji_id,
            ]),
            x = null != a.emoji_name ? A.Ay.getByName(A.Ay.convertSurrogateToName(a.emoji_name, !1)) : null,
            p = (0, j.gU)(s) ?? o.N;
        return null != s && m
            ? (0, i.jsxs)(r.D, {
                  className: P.NV,
                  onClick: () => {
                      n(), l(), (0, C.uh)(s.guild_id, s.id);
                  },
                  children: [
                      null != _ || null != x
                          ? (0, i.jsx)(u.A, {
                                emojiName: null != a.emoji_id ? _?.name : a.emoji_name,
                                animated: null != _ && _.animated,
                                emojiId: _?.id,
                                autoplay: !0,
                                className: P.oK,
                            })
                          : (0, i.jsx)(p, { className: P.p }),
                      (0, i.jsxs)("div", {
                          className: P.uP,
                          children: [
                              (0, i.jsx)(c.E, { variant: "text-md/normal", className: P.I0, children: a.description }),
                              (0, i.jsxs)(c.E, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: [
                                      (0, i.jsx)(p, { className: P.nO, size: "xxs", color: "currentColor" }),
                                      (0, i.jsx)("span", { children: d }),
                                  ],
                              }),
                          ],
                      }),
                      (0, i.jsx)(I.A, { direction: I.A.Directions.RIGHT, className: P.R_ }),
                  ],
              })
            : null;
    },
    T = (e) => {
        let { onClose: a, transitionState: l, guildId: o, isPreview: r } = e,
            u = (0, t.bG)([f.A], () => f.A.getGuild(o)),
            {
                welcomeScreen: h,
                fetching: j,
                hasError: N,
            } = (0, t.cf)([w.A], () => ({
                welcomeScreen: w.A.get(o),
                fetching: w.A.isFetching(),
                hasError: w.A.hasError(),
            })),
            A = (0, p.GV)();
        n.useEffect(() => {
            null == h && (0, v.Fy)(o);
        }, [o, h]),
            n.useEffect(() => {
                !1 === j && !0 === N && null == h && a();
            }, [j, N, a, h]),
            n.useEffect(() => {
                h === w.E && !1 === j && a();
            }, [a, h, j]),
            n.useEffect(() => {
                !0 !== r && k.default.track(G.HAw.OPEN_MODAL, { type: "Guild Welcome Screen", guild_id: o });
            }, [o, r]);
        let C = n.useCallback(
            (e) => {
                if (null == h || !0 === r) return;
                let a = [],
                    l = [],
                    i = !1;
                h.welcome_channels?.forEach((e) => {
                    a.push(e.description), l.push(e.channel_id), null != e.emoji_id && (i = !0);
                }),
                    k.default.track(G.HAw.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                        index: e,
                        guild_id: o,
                        options: a,
                        options_channel_ids: l,
                        guild_description: h.description,
                        has_custom_emojis: i,
                    });
            },
            [o, r, h],
        );
        return null == u
            ? null
            : null == h
              ? (0, i.jsx)(s.Modal, {
                    transitionState: l,
                    "aria-label": D.intl.string(D.t.ZTNur7),
                    title: D.intl.string(D.t.ZTNur7),
                    onClose: () => Promise.resolve(a()),
                    actions: [],
                    children: (0, i.jsx)(d.y, { type: d.y.Type.SPINNING_CIRCLE }),
                })
              : (0, i.jsx)(s.Modal, {
                    transitionState: l,
                    "aria-labelledby": A,
                    actions: [{ text: D.intl.string(D.t.jizr82), onClick: a, variant: "secondary" }],
                    title: D.intl.string(D.t["3iCBUn"]),
                    onClose: () => Promise.resolve(a()),
                    children: (0, i.jsxs)("div", {
                        className: P.jE,
                        children: [
                            (0, i.jsx)(x.Ay, {
                                mask: x.Ay.Masks.SQUIRCLE,
                                width: 64,
                                height: 64,
                                className: P.$f,
                                children: (0, i.jsx)(b.Ay, {
                                    size: b.Ay.Sizes.LARGER,
                                    guild: u,
                                    active: !0,
                                    animate: !0,
                                    tabIndex: -1,
                                }),
                            }),
                            (0, i.jsx)(m.D, {
                                variant: "heading-xl/semibold",
                                className: P.wx,
                                id: A,
                                children: D.intl.format(D.t["0aydCN"], {
                                    guildName: u.name,
                                    guildNameHook: (e, a) =>
                                        (0, i.jsxs)(
                                            "span",
                                            {
                                                children: [
                                                    (0, i.jsx)(g.A, {
                                                        guild: u,
                                                        className: P.eZ,
                                                        flowerStarClassName: P.mP,
                                                        tooltipColor: _.ST.Colors.PRIMARY,
                                                    }),
                                                    (0, i.jsx)("strong", { className: P.aC, children: e }),
                                                ],
                                            },
                                            a,
                                        ),
                                }),
                            }),
                            null != h.description
                                ? (0, i.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      className: P.eF,
                                      children: h.description,
                                  })
                                : null,
                            (0, i.jsx)(m.D, {
                                variant: "heading-sm/semibold",
                                className: P.XU,
                                children: D.intl.string(D.t["haj5+i"]),
                            }),
                            (0, i.jsx)("div", {
                                className: P.fF,
                                children: h.welcome_channels?.map((e, l) =>
                                    (0, i.jsx)(
                                        R,
                                        { channelData: e, trackOptionClick: () => C(l), onClose: a },
                                        `${e.channel_id}-${l}`,
                                    ),
                                ),
                            }),
                        ],
                    }),
                });
    };
