n.d(t, { Z: () => W }), n(361932), n(187205), n(388685), n(642613), n(781311), n(539854), n(472816), n(794429);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    o = n.n(l),
    a = n(442837),
    s = n(36563),
    u = n(481060),
    c = n(933557),
    d = n(471445),
    h = n(686546),
    p = n(305347),
    f = n(473403),
    m = n(99214),
    g = n(46145),
    O = n(886118),
    y = n(301801),
    E = n(752048),
    v = n(592125),
    b = n(984933),
    S = n(430824),
    x = n(496675),
    j = n(699516),
    I = n(594174),
    C = n(979651),
    Z = n(823379),
    N = n(136015),
    w = n(981631),
    T = n(388032),
    _ = n(89524);
let P = (e) => [
        e.userId,
        ...(function (e) {
            let t = I.default.getUser(e.userId);
            if (null == t) return [];
            let n = t.username,
                i = (0, m.e3)(t);
            return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(Z.lm)));
        })(e),
    ],
    A = {
        searchType: O.S.FUZZY,
        sortType: O.E.JARO_WINKLER,
        searchStringGenerator: (e) => {
            var t, n;
            let { channel: i, voiceStates: r } = e;
            return [
                i.name,
                i.id,
                i.guild_id,
                null != (n = null == (t = S.Z.getGuild(i.guild_id)) ? void 0 : t.name) ? n : "",
                ...r.flatMap((e) => P(e)),
            ].filter(Z.lm);
        },
        throttleMs: 100,
    },
    D = {
        searchType: O.S.FUZZY,
        sortType: O.E.JARO_WINKLER,
        searchStringGenerator: P,
        throttleMs: 100,
    },
    R = r.memo(function (e) {
        let { channel: t, query: n } = e,
            [l] = (0, a.e7)([C.Z], () => [C.Z.getVoiceStatesForChannel(t.id), C.Z.getVoiceStateVersion()], [t.id], N.Q),
            [o, c] = r.useState([]);
        (0, y.BO)(n, Object.values(l), c, D);
        let d = (0, a.Wu)(
                [C.Z, I.default, E.Z, j.Z],
                () =>
                    Object.values(C.Z.getVoiceStatesForChannel(t.id))
                        .map((e) => I.default.getUser(e.userId))
                        .filter(Z.lm)
                        .sort((e, t) => {
                            var i, r, l, a;
                            if (o.length > 0 && "" !== n.trim()) {
                                if (o.some((t) => t.userId === e.id)) return -1;
                                if (o.some((e) => e.userId === t.id)) return 1;
                            }
                            return j.Z.isFriend(e.id) && !j.Z.isFriend(t.id)
                                ? -1
                                : !j.Z.isFriend(e.id) && j.Z.isFriend(t.id)
                                  ? 1
                                  : (null != (l = null == (i = E.Z.getUserAffinity(t.id)) ? void 0 : i.vcProbability)
                                        ? l
                                        : 0) -
                                    (null != (a = null == (r = E.Z.getUserAffinity(e.id)) ? void 0 : r.vcProbability)
                                        ? a
                                        : 0);
                        }),
                [t.id, o, n],
            ),
            h = t.getGuildId(),
            p = Math.max(o.length, 2);
        return null == h
            ? null
            : (0, i.jsx)(s.Z, {
                  users: d,
                  guildId: h,
                  maxUsers: Math.min(p, 4),
                  size: u.EFr.SIZE_24,
                  overflowCountClassName: _.overflowCount,
                  overflowCountVariant: "text-xs/semibold",
                  disableUserPopout: !0,
                  "aria-label": T.intl.string(T.t.TxqPQR),
              });
    }),
    k = r.memo(function (e) {
        var t;
        let { channel: n } = e,
            r = n.getGuildId(),
            l = (0, a.e7)([S.Z], () => S.Z.getGuild(r), [r]);
        if (null == l)
            switch (n.type) {
                case w.d4z.DM:
                    return (0, i.jsx)(f.je, {
                        channel: n,
                        size: u.EFr.SIZE_32,
                    });
                case w.d4z.GROUP_DM:
                    return (0, i.jsx)(f.ge, {
                        channel: n,
                        size: u.EFr.SIZE_32,
                    });
                default:
                    return null;
            }
        return (0, i.jsx)(h.ZP, {
            mask: h.QS.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, i.jsx)("div", {
                className: _.guildIconWrapper,
                children: (0, i.jsx)(p.Ft, {
                    guildId: l.id,
                    guildName: null != (t = l.name) ? t : T.intl.string(T.t.DmIUGK),
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
                onClick: s,
                onMouseOver: h,
                onMouseLeave: p,
                query: f,
            } = e,
            m = (0, a.e7)([v.Z], () => v.Z.getChannel(n), [n]),
            g = null == m ? void 0 : m.getGuildId(),
            O = (0, a.e7)([S.Z], () => S.Z.getGuild(g), [g]),
            y = (0, d.KS)(m, O),
            E = (null == l ? void 0 : l.id) === n,
            b = E ? "text-feedback-positive" : r ? "interactive-active" : "text-muted",
            x = E ? u.TVs.colors.TEXT_FEEDBACK_POSITIVE : r ? u.TVs.colors.INTERACTIVE_ACTIVE : u.TVs.colors.ICON_MUTED;
        return null == m
            ? null
            : (0, i.jsxs)(u.kL8, {
                  className: o()(_.channelItemContainer, r && _.channelItemHighlighted),
                  "aria-label": m.name,
                  onClick: () => s(n),
                  onMouseOver: () => h(n),
                  onMouseLeave: () => p(n),
                  children: [
                      (0, i.jsx)("div", {
                          className: _.channelItemIcon,
                          children: (0, i.jsx)(k, { channel: m }),
                      }),
                      (0, i.jsxs)("div", {
                          className: _.channelItemNameContainer,
                          children: [
                              (0, i.jsxs)("div", {
                                  className: _.channelItemName,
                                  children: [
                                      null != y
                                          ? (0, i.jsx)(y, {
                                                color: x,
                                                size: "xs",
                                                className: _.channelIcon,
                                            })
                                          : void 0,
                                      (0, i.jsx)(u.Text, {
                                          variant: E ? "text-sm/semibold" : "text-sm/medium",
                                          color: b,
                                          className: _.channelItemNameText,
                                          children: (0, c.F6)(m, I.default, j.Z),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(u.Text, {
                                  variant: E ? "text-xs/semibold" : "text-xs/medium",
                                  color: b,
                                  children: null != (t = null == O ? void 0 : O.name) ? t : m.name,
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: _.channelItemAvatars,
                          children: (0, i.jsx)(R, {
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
            className: _.emptyChannelItem,
            children: (0, i.jsx)(u.Text, {
                variant: "text-md/normal",
                color: "text-strong",
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
                query: s,
                scrollable: c = !0,
            } = e,
            [d, h] = r.useState(null),
            p = (e) => {
                h(e);
            },
            f = () => {
                h(null);
            },
            m = c ? u.zJl : "div";
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: _.recentChannelsMenuHeader,
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        children: t,
                    }),
                }),
                (0, i.jsxs)(m, {
                    className: _.channelList,
                    children: [
                        a && 0 === n.length && (0, i.jsx)(M, { emptyText: T.intl.string(T.t.nxSS03) }),
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
                                    onMouseOver: p,
                                    onMouseLeave: f,
                                    query: s,
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
        { recentVoiceChannelIds: l, friendVoiceChannelIds: s } = (function () {
            let e = (function () {
                    let e = (0, a.Wu)(
                        [I.default, j.Z, E.Z],
                        () =>
                            j.Z.getFriendIDs()
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
                                                  null == (n = E.Z.getUserAffinity(t))
                                                      ? void 0
                                                      : n.communicationProbability)
                                                  ? r
                                                  : 0) -
                                              (null !=
                                              (l =
                                                  null == (i = E.Z.getUserAffinity(e))
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
                        [C.Z, v.Z, x.Z],
                        () =>
                            Array.from(
                                e
                                    .map((e) => C.Z.getDiscoverableVoiceStateForUser(e.id))
                                    .reduce((e, t) => {
                                        let n = null == t ? void 0 : t.channelId;
                                        if (null == n) return e;
                                        let i = v.Z.getChannel(n);
                                        return null != i && x.Z.can(w.Plq.CONNECT, i) && e.add(n), e;
                                    }, new Set()),
                            ).filter(Z.lm),
                        [e],
                    );
                })(),
                t = (0, a.Wu)([g.Z, v.Z, x.Z], () => {
                    let t = g.Z.getChannelHistory(),
                        n = new Set(e);
                    return Array.from(
                        new Set(
                            t.reduce((e, t) => {
                                let i = v.Z.getChannel(t);
                                return null != i && x.Z.can(w.Plq.CONNECT, i) && !n.has(t) && e.push(t), e;
                            }, []),
                        ),
                    );
                }, [e]);
            return {
                friendVoiceChannelIds: e,
                recentVoiceChannelIds: t,
            };
        })();
    return l.length > 0 || s.length > 0
        ? (0, i.jsxs)(u.zJl, {
              className: o()(_.channelList, _.channelListWrapper),
              children: [
                  l.length > 0 &&
                      (0, i.jsx)(V, {
                          sectionHeader: T.intl.string(T.t.lnk2NQ),
                          channelIds: l.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => r(e, "recent channel"),
                          scrollable: !1,
                      }),
                  s.length > 0 &&
                      (0, i.jsx)(V, {
                          sectionHeader: T.intl.string(T.t["0lvb9O"]),
                          channelIds: s.slice(0, 8),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => r(e, "friend channel"),
                          scrollable: !1,
                      }),
              ],
          })
        : (0, i.jsx)(M, { emptyText: T.intl.string(T.t["3ET7Ay"]) });
}
function U(e) {
    e.stopPropagation();
}
function W(e) {
    var t, n;
    let { currentVoiceChannel: l, onClose: o, onSelect: s } = e,
        c = (0, a.Wu)(
            [S.Z, b.ZP, C.Z, j.Z, x.Z],
            () =>
                S.Z.getGuildsArray()
                    .reduce(
                        (e, t) => [
                            ...e,
                            ...b.ZP.getChannels(t.id)
                                [b.Zb].filter(
                                    (e) => x.Z.can(w.Plq.VIEW_CHANNEL, e.channel) && x.Z.can(w.Plq.CONNECT, e.channel),
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
                            j.Z.isFriend(e.userId),
                        ),
                    })),
            [],
        ),
        [d, h] = r.useState(""),
        [p, f] = r.useState([]);
    (0, y.BO)(d, c, f, A);
    let m = r.useCallback(
            (e) => {
                "Escape" === e.key && o();
            },
            [o],
        ),
        g = r.useCallback(
            (e, t) => {
                s(e, t), o();
            },
            [s, o],
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
    let O = "" !== d.trim(),
        E = p.length > 20,
        v = { count: E ? 20 : p.length },
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
        })({ className: _.recentChannelsMenu }, I)),
        (n = n =
            {
                children: [
                    (0, i.jsx)("div", {
                        className: _.searchBarContainer,
                        children: (0, i.jsx)(u.E1j, {
                            autoFocus: !0,
                            query: d,
                            placeholder: T.intl.string(T.t.UyA6ST),
                            onClear: () => {
                                h("");
                            },
                            onKeyDown: m,
                            onChange: (e) => {
                                h(e);
                            },
                            inputProps: { "aria-label": T.intl.string(T.t.UyA6ST) },
                        }),
                    }),
                    O
                        ? (0, i.jsx)(V, {
                              sectionHeader: E ? T.intl.format(T.t.qdXiQ1, v) : T.intl.format(T.t["Aq+8wB"], v),
                              channelIds: p
                                  .map((e) => {
                                      let { channel: t } = e;
                                      return t.id;
                                  })
                                  .slice(0, 20),
                              hasQuery: O,
                              query: d,
                              currentVoiceChannel: l,
                              onSelect: (e) => g(e, "search channel"),
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
