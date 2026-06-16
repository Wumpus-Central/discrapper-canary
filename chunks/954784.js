i.d(l, { default: () => P }), i(321073);
var s = i(627968),
    a = i(64700),
    n = i(189213),
    t = i(17928),
    r = i(276293),
    o = i(939249),
    c = i(834730),
    d = i(289873),
    m = i(534514),
    u = i(781696),
    h = i(565645),
    j = i(47167),
    x = i(713654),
    N = i(573435),
    _ = i(915089),
    A = i(159273),
    p = i(7584),
    g = i(548118),
    E = i(714991),
    C = i(976860),
    f = i(734057),
    y = i(71393),
    k = i(576705),
    v = i(147925),
    b = i(174459),
    I = i(225315),
    S = i(684407),
    G = i(652215),
    w = i(818348),
    R = i(375708),
    D = i(539841);
let L = (e) => {
        let { channelData: l, onClose: i, trackOptionClick: a } = e,
            n = (0, t.bG)([f.A], () => f.A.getChannel(l.channel_id)),
            d = (0, j.Ay)(n),
            m = (0, t.bG)([k.A], () => null != n && k.A.can(w.xB.VIEW_CHANNEL, n)),
            u = (0, t.bG)([A.Ay], () => (null != l.emoji_id ? A.Ay.getCustomEmojiById(l.emoji_id) : null), [
                l.emoji_id,
            ]),
            N = null != l.emoji_name ? p.Ay.getByName(p.Ay.convertSurrogateToName(l.emoji_name, !1)) : null,
            _ = (0, x.gU)(n) ?? r.N;
        return null != n && m
            ? (0, s.jsxs)(o.D, {
                  className: D.NV,
                  onClick: () => {
                      a(), i(), (0, C.uh)(n.guild_id, n.id);
                  },
                  children: [
                      null != u || null != N
                          ? (0, s.jsx)(h.A, {
                                emojiName: null != l.emoji_id ? u?.name : l.emoji_name,
                                animated: null != u && u.animated,
                                emojiId: u?.id,
                                autoplay: !0,
                                className: D.oK,
                            })
                          : (0, s.jsx)(_, { className: D.p }),
                      (0, s.jsxs)("div", {
                          className: D.uP,
                          children: [
                              (0, s.jsx)(c.E, { variant: "text-md/normal", className: D.I0, children: l.description }),
                              (0, s.jsxs)(c.E, {
                                  variant: "text-xs/normal",
                                  color: "text-default",
                                  children: [
                                      (0, s.jsx)(_, { className: D.nO, size: "xxs", color: "currentColor" }),
                                      (0, s.jsx)("span", { children: d }),
                                  ],
                              }),
                          ],
                      }),
                      (0, s.jsx)(v.A, { direction: v.A.Directions.RIGHT, className: D.R_ }),
                  ],
              })
            : null;
    },
    P = (e) => {
        let { onClose: l, transitionState: i, guildId: r, isPreview: o } = e,
            h = (0, t.bG)([y.A], () => y.A.getGuild(r)),
            {
                welcomeScreen: j,
                fetching: x,
                hasError: A,
            } = (0, t.cf)([S.A], () => ({
                welcomeScreen: S.A.get(r),
                fetching: S.A.isFetching(),
                hasError: S.A.hasError(),
            })),
            p = (0, _.GV)();
        a.useEffect(() => {
            null == j && (0, I.Fy)(r);
        }, [r, j]),
            a.useEffect(() => {
                !1 === x && !0 === A && null == j && l();
            }, [x, A, l, j]),
            a.useEffect(() => {
                j === S.E && !1 === x && l();
            }, [l, j, x]),
            a.useEffect(() => {
                !0 !== o && b.default.track(G.HAw.OPEN_MODAL, { type: "Guild Welcome Screen", guild_id: r });
            }, [r, o]);
        let C = a.useCallback(
            (e) => {
                if (null == j || !0 === o) return;
                let l = [],
                    i = [],
                    s = !1;
                j.welcome_channels?.forEach((e) => {
                    l.push(e.description), i.push(e.channel_id), null != e.emoji_id && (s = !0);
                }),
                    b.default.track(G.HAw.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                        index: e,
                        guild_id: r,
                        options: l,
                        options_channel_ids: i,
                        guild_description: j.description,
                        has_custom_emojis: s,
                    });
            },
            [r, o, j],
        );
        return null == h
            ? null
            : null == j
              ? (0, s.jsx)(n.Modal, {
                    transitionState: i,
                    "aria-label": R.intl.string(R.t.ZTNur7),
                    title: R.intl.string(R.t.ZTNur7),
                    onClose: () => Promise.resolve(l()),
                    actions: [],
                    children: (0, s.jsx)(d.y, { type: d.y.Type.SPINNING_CIRCLE }),
                })
              : (0, s.jsx)(n.Modal, {
                    transitionState: i,
                    "aria-labelledby": p,
                    actions: [{ text: R.intl.string(R.t.jizr82), onClick: l, variant: "secondary" }],
                    title: R.intl.string(R.t["3iCBUn"]),
                    onClose: () => Promise.resolve(l()),
                    children: (0, s.jsxs)("div", {
                        className: D.jE,
                        children: [
                            (0, s.jsx)(N.Ay, {
                                mask: N.Ay.Masks.SQUIRCLE,
                                width: 64,
                                height: 64,
                                className: D.$f,
                                children: (0, s.jsx)(g.Ay, {
                                    size: g.Ay.Sizes.LARGER,
                                    guild: h,
                                    active: !0,
                                    animate: !0,
                                    tabIndex: -1,
                                }),
                            }),
                            (0, s.jsx)(m.D, {
                                variant: "heading-xl/semibold",
                                className: D.wx,
                                id: p,
                                children: R.intl.format(R.t["0aydCN"], {
                                    guildName: h.name,
                                    guildNameHook: (e, l) =>
                                        (0, s.jsxs)(
                                            "span",
                                            {
                                                children: [
                                                    (0, s.jsx)(E.A, {
                                                        guild: h,
                                                        className: D.eZ,
                                                        flowerStarClassName: D.mP,
                                                        tooltipColor: u.ST.Colors.PRIMARY,
                                                    }),
                                                    (0, s.jsx)("strong", { className: D.aC, children: e }),
                                                ],
                                            },
                                            l,
                                        ),
                                }),
                            }),
                            null != j.description
                                ? (0, s.jsx)(c.E, {
                                      variant: "text-sm/normal",
                                      color: "text-default",
                                      className: D.eF,
                                      children: j.description,
                                  })
                                : null,
                            (0, s.jsx)(m.D, {
                                variant: "heading-sm/semibold",
                                className: D.XU,
                                children: R.intl.string(R.t["haj5+i"]),
                            }),
                            (0, s.jsx)("div", {
                                className: D.fF,
                                children: j.welcome_channels?.map((e, i) =>
                                    (0, s.jsx)(
                                        L,
                                        { channelData: e, trackOptionClick: () => C(i), onClose: l },
                                        `${e.channel_id}-${i}`,
                                    ),
                                ),
                            }),
                        ],
                    }),
                });
    };
