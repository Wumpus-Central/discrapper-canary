n.d(t, { Z: () => W }), n(361932), n(187205), n(388685), n(642613), n(781311), n(539854), n(472816), n(794429);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(481060),
    c = n(933557),
    u = n(471445),
    d = n(686546),
    p = n(318374),
    h = n(305347),
    f = n(473403),
    m = n(99214),
    g = n(46145),
    y = n(886118),
    O = n(301801),
    v = n(752048),
    b = n(592125),
    E = n(984933),
    _ = n(430824),
    x = n(496675),
    S = n(699516),
    I = n(594174),
    C = n(979651),
    j = n(823379),
    w = n(136015),
    N = n(981631),
    Z = n(388032),
    T = n(89524);
let P = (e) => [
        e.userId,
        ...(function (e) {
            let t = I.default.getUser(e.userId);
            if (null == t) return [];
            let n = t.username,
                i = (0, m.e3)(t);
            return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(j.lm)));
        })(e),
    ],
    A = {
        searchType: y.S.FUZZY,
        sortType: y.E.JARO_WINKLER,
        searchStringGenerator: (e) => {
            var t, n;
            let { channel: i, voiceStates: r } = e;
            return [
                i.name,
                i.id,
                i.guild_id,
                null != (n = null == (t = _.Z.getGuild(i.guild_id)) ? void 0 : t.name) ? n : "",
                ...r.flatMap((e) => P(e)),
            ].filter(j.lm);
        },
        throttleMs: 100,
    },
    D = {
        searchType: y.S.FUZZY,
        sortType: y.E.JARO_WINKLER,
        searchStringGenerator: P,
        throttleMs: 100,
    },
    k = r.memo(function (e) {
        let { channel: t, query: n } = e,
            [l] = (0, a.e7)([C.Z], () => [C.Z.getVoiceStatesForChannel(t.id), C.Z.getVoiceStateVersion()], [t.id], w.Q),
            [o, c] = r.useState([]);
        (0, O.BO)(n, Object.values(l), c, D);
        let u = (0, a.Wu)(
                [C.Z, I.default, v.Z, S.Z],
                () =>
                    Object.values(C.Z.getVoiceStatesForChannel(t.id))
                        .map((e) => I.default.getUser(e.userId))
                        .filter(j.lm)
                        .sort((e, t) => {
                            var i, r, l, a;
                            if (o.length > 0 && "" !== n.trim()) {
                                if (o.some((t) => t.userId === e.id)) return -1;
                                if (o.some((e) => e.userId === t.id)) return 1;
                            }
                            return S.Z.isFriend(e.id) && !S.Z.isFriend(t.id)
                                ? -1
                                : !S.Z.isFriend(e.id) && S.Z.isFriend(t.id)
                                  ? 1
                                  : (null != (l = null == (i = v.Z.getUserAffinity(t.id)) ? void 0 : i.vcProbability)
                                        ? l
                                        : 0) -
                                    (null != (a = null == (r = v.Z.getUserAffinity(e.id)) ? void 0 : r.vcProbability)
                                        ? a
                                        : 0);
                        }),
                [t.id, o, n],
            ),
            d = t.getGuildId(),
            h = Math.max(o.length, 2);
        return null == d
            ? null
            : (0, i.jsx)(p.Z, {
                  users: u,
                  guildId: d,
                  maxUsers: Math.min(h, 4),
                  size: s.EFr.SIZE_24,
                  overflowCountClassName: T.overflowCount,
                  overflowCountVariant: "text-xs/semibold",
                  disableUserPopout: !0,
                  "aria-label": Z.intl.string(Z.t.TxqPQU),
              });
    }),
    R = r.memo(function (e) {
        var t;
        let { channel: n } = e,
            r = n.getGuildId(),
            l = (0, a.e7)([_.Z], () => _.Z.getGuild(r), [r]);
        if (null == l)
            switch (n.type) {
                case N.d4z.DM:
                    return (0, i.jsx)(f.je, {
                        channel: n,
                        size: s.EFr.SIZE_32,
                    });
                case N.d4z.GROUP_DM:
                    return (0, i.jsx)(f.ge, {
                        channel: n,
                        size: s.EFr.SIZE_32,
                    });
                default:
                    return null;
            }
        return (0, i.jsx)(d.ZP, {
            mask: d.QS.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, i.jsx)("div", {
                className: T.guildIconWrapper,
                children: (0, i.jsx)(h.Ft, {
                    guildId: l.id,
                    guildName: null != (t = l.name) ? t : Z.intl.string(Z.t.DmIUGB),
                    guildIcon: l.icon,
                    iconSize: 32,
                }),
            }),
        });
    }),
    L = r.memo(function (e) {
        var t;
        let {
                channelId: n,
                isHighlighted: r,
                currentVoiceChannel: l,
                onClick: d,
                onMouseOver: p,
                onMouseLeave: h,
                query: f,
            } = e,
            m = (0, a.e7)([b.Z], () => b.Z.getChannel(n), [n]),
            g = null == m ? void 0 : m.getGuildId(),
            y = (0, a.e7)([_.Z], () => _.Z.getGuild(g), [g]),
            O = (0, u.KS)(m, y),
            v = (null == l ? void 0 : l.id) === n,
            E = v ? "text-feedback-positive" : r ? "interactive-active" : "text-muted",
            x = v ? s.TVs.colors.TEXT_FEEDBACK_POSITIVE : r ? s.TVs.colors.INTERACTIVE_ACTIVE : s.TVs.colors.ICON_MUTED;
        return null == m
            ? null
            : (0, i.jsxs)(s.kL8, {
                  className: o()(T.channelItemContainer, r && T.channelItemHighlighted),
                  "aria-label": m.name,
                  onClick: () => d(n),
                  onMouseOver: () => p(n),
                  onMouseLeave: () => h(n),
                  children: [
                      (0, i.jsx)("div", {
                          className: T.channelItemIcon,
                          children: (0, i.jsx)(R, { channel: m }),
                      }),
                      (0, i.jsxs)("div", {
                          className: T.channelItemNameContainer,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: T.channelItemName,
                                  children: [
                                      null != O
                                          ? (0, i.jsx)(O, {
                                                color: x,
                                                size: "xs",
                                                className: T.channelIcon,
                                            })
                                          : void 0,
                                      (0, i.jsx)(s.Text, {
                                          variant: v ? "text-sm/semibold" : "text-sm/medium",
                                          color: E,
                                          className: T.channelItemNameText,
                                          children: (0, c.F6)(m, I.default, S.Z),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(s.Text, {
                                  variant: v ? "text-xs/semibold" : "text-xs/medium",
                                  color: E,
                                  children: null != (t = null == y ? void 0 : y.name) ? t : m.name,
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: T.channelItemAvatars,
                          children: (0, i.jsx)(k, {
                              channel: m,
                              currentVoiceChannel: l,
                              query: f,
                          }),
                      }),
                  ],
              });
    }),
    M = r.memo(function (e) {
        let { emptyText: t } = e;
        return (0, i.jsx)("div", {
            className: T.emptyChannelItem,
            children: (0, i.jsx)(s.Text, {
                variant: "text-md/normal",
                color: "text-primary",
                children: t,
            }),
        });
    }),
    V = r.memo(function (e) {
        let {
                sectionHeader: t,
                channelIds: n,
                currentVoiceChannel: l,
                onSelect: o,
                hasQuery: a,
                query: c,
                scrollable: u = !0,
            } = e,
            [d, p] = r.useState(null),
            h = (e) => {
                p(e);
            },
            f = () => {
                p(null);
            },
            m = u ? s.zJl : "div";
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: T.recentChannelsMenuHeader,
                    children: (0, i.jsx)(s.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        children: t,
                    }),
                }),
                (0, i.jsxs)(m, {
                    className: T.channelList,
                    children: [
                        a && 0 === n.length && (0, i.jsx)(M, { emptyText: Z.intl.string(Z.t.nxSS09) }),
                        n.map((e) =>
                            (0, i.jsx)(
                                L,
                                {
                                    channelId: e,
                                    isHighlighted: e === d,
                                    currentVoiceChannel: l,
                                    onClick: () => {
                                        o(e);
                                    },
                                    onMouseOver: h,
                                    onMouseLeave: f,
                                    query: c,
                                },
                                e,
                            ),
                        ),
                    ],
                }),
            ],
        });
    });
function z(e) {
    let { searchQuery: t, currentVoiceChannel: n, onSelect: r } = e,
        { recentVoiceChannelIds: l, friendVoiceChannelIds: c } = (function () {
            let e = (function () {
                    let e = (0, a.Wu)(
                        [I.default, S.Z, v.Z],
                        () =>
                            S.Z.getFriendIDs()
                                .sort((e, t) => {
                                    var n, i, r, l;
                                    return null == e && null == t
                                        ? 0
                                        : null == e
                                          ? 1
                                          : null == t
                                            ? -1
                                            : (null !=
                                              (r =
                                                  null == (n = v.Z.getUserAffinity(t))
                                                      ? void 0
                                                      : n.communicationProbability)
                                                  ? r
                                                  : 0) -
                                              (null !=
                                              (l =
                                                  null == (i = v.Z.getUserAffinity(e))
                                                      ? void 0
                                                      : i.communicationProbability)
                                                  ? l
                                                  : 0);
                                })
                                .reduce((e, t) => {
                                    let n = I.default.getUser(t);
                                    return null != n && e.push(n), e;
                                }, []),
                        [],
                    );
                    return (0, a.Wu)(
                        [C.Z, b.Z, x.Z],
                        () =>
                            Array.from(
                                e
                                    .map((e) => C.Z.getDiscoverableVoiceStateForUser(e.id))
                                    .reduce((e, t) => {
                                        let n = null == t ? void 0 : t.channelId;
                                        if (null == n) return e;
                                        let i = b.Z.getChannel(n);
                                        return null != i && x.Z.can(N.Plq.CONNECT, i) && e.add(n), e;
                                    }, new Set()),
                            ).filter(j.lm),
                        [e],
                    );
                })(),
                t = (0, a.Wu)([g.Z, b.Z, x.Z], () => {
                    let t = g.Z.getChannelHistory(),
                        n = new Set(e);
                    return Array.from(
                        new Set(
                            t.reduce((e, t) => {
                                let i = b.Z.getChannel(t);
                                return null != i && x.Z.can(N.Plq.CONNECT, i) && !n.has(t) && e.push(t), e;
                            }, []),
                        ),
                    );
                }, [e]);
            return {
                friendVoiceChannelIds: e,
                recentVoiceChannelIds: t,
            };
        })();
    return l.length > 0 || c.length > 0
        ? (0, i.jsxs)(s.zJl, {
              className: o()(T.channelList, T.channelListWrapper),
              children: [
                  l.length > 0 &&
                      (0, i.jsx)(V, {
                          sectionHeader: Z.intl.string(Z.t.lnk2NT),
                          channelIds: l.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: r,
                          scrollable: !1,
                      }),
                  c.length > 0 &&
                      (0, i.jsx)(V, {
                          sectionHeader: Z.intl.string(Z.t["0lvb9P"]),
                          channelIds: c.slice(0, 8),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: r,
                          scrollable: !1,
                      }),
              ],
          })
        : (0, i.jsx)(M, { emptyText: Z.intl.string(Z.t["3ET7Aw"]) });
}
function U(e) {
    e.stopPropagation();
}
function W(e) {
    var t, n;
    let { currentVoiceChannel: l, onClose: o, onSelect: c } = e,
        u = (0, a.Wu)(
            [_.Z, E.ZP, C.Z, S.Z, x.Z],
            () =>
                _.Z.getGuildsArray()
                    .reduce(
                        (e, t) => [
                            ...e,
                            ...E.ZP.getChannels(t.id)
                                [E.Zb].filter(
                                    (e) => x.Z.can(N.Plq.VIEW_CHANNEL, e.channel) && x.Z.can(N.Plq.CONNECT, e.channel),
                                )
                                .map((e) => {
                                    let { channel: t } = e;
                                    return t;
                                }),
                        ],
                        [],
                    )
                    .map((e) => ({
                        channel: e,
                        voiceStates: Object.values(C.Z.getVoiceStatesForChannel(e.id)).filter((e) =>
                            S.Z.isFriend(e.userId),
                        ),
                    })),
            [],
        ),
        [d, p] = r.useState(""),
        [h, f] = r.useState([]);
    (0, O.BO)(d, u, f, A);
    let m = r.useCallback(
            (e) => {
                "Escape" === e.key && o();
            },
            [o],
        ),
        g = r.useCallback(
            (e) => {
                c(e), o();
            },
            [c, o],
        );
    r.useEffect(
        () => (
            document.addEventListener("keydown", m, !0),
            () => {
                document.removeEventListener("keydown", m, !0);
            }
        ),
        [o, m],
    );
    let y = "" !== d.trim(),
        v = h.length > 20,
        b = { count: v ? 20 : h.length },
        I = r.useMemo(
            () => ({
                onMouseDown: U,
                onMouseMove: U,
                onMouseUp: U,
                onMouseEnter: U,
                onMouseLeave: U,
            }),
            [],
        );
    return (0, i.jsxs)(
        "div",
        ((t = (function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    i = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols &&
                    (i = i.concat(
                        Object.getOwnPropertySymbols(n).filter(function (e) {
                            return Object.getOwnPropertyDescriptor(n, e).enumerable;
                        }),
                    )),
                    i.forEach(function (t) {
                        var i;
                        (i = n[t]),
                            t in e
                                ? Object.defineProperty(e, t, {
                                      value: i,
                                      enumerable: !0,
                                      configurable: !0,
                                      writable: !0,
                                  })
                                : (e[t] = i);
                    });
            }
            return e;
        })({ className: T.recentChannelsMenu }, I)),
        (n = n =
            {
                children: [
                    (0, i.jsx)("div", {
                        className: T.searchBarContainer,
                        children: (0, i.jsx)(s.E1j, {
                            autoFocus: !0,
                            query: d,
                            placeholder: Z.intl.string(Z.t.UyA6SU),
                            onClear: () => {
                                p("");
                            },
                            onKeyDown: m,
                            onChange: (e) => {
                                p(e);
                            },
                            inputProps: { "aria-label": Z.intl.string(Z.t.UyA6SU) },
                        }),
                    }),
                    y
                        ? (0, i.jsx)(V, {
                              sectionHeader: v ? Z.intl.format(Z.t.qdXiQ0, b) : Z.intl.format(Z.t["Aq+8wM"], b),
                              channelIds: h
                                  .map((e) => {
                                      let { channel: t } = e;
                                      return t.id;
                                  })
                                  .slice(0, 20),
                              hasQuery: y,
                              query: d,
                              currentVoiceChannel: l,
                              onSelect: g,
                          })
                        : (0, i.jsx)(z, {
                              searchQuery: d,
                              currentVoiceChannel: l,
                              onSelect: g,
                          }),
                ],
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t),
    );
}
