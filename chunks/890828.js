n.d(t, { Z: () => W }), n(361932), n(187205), n(388685), n(642613), n(781311), n(539854), n(472816), n(794429);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(442837),
    s = n(36563),
    c = n(481060),
    u = n(933557),
    d = n(471445),
    f = n(686546),
    h = n(305347),
    p = n(473403),
    m = n(99214),
    g = n(46145),
    b = n(886118),
    y = n(301801),
    O = n(752048),
    v = n(592125),
    E = n(984933),
    S = n(430824),
    x = n(496675),
    I = n(699516),
    C = n(594174),
    j = n(979651),
    _ = n(823379),
    Z = n(136015),
    N = n(981631),
    w = n(388032),
    T = n(805953);
let P = (e) => [
        e.userId,
        ...(function (e) {
            let t = C.default.getUser(e.userId);
            if (null == t) return [];
            let n = t.username,
                i = (0, m.e3)(t);
            return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(_.lm)));
        })(e),
    ],
    A = {
        searchType: b.S.FUZZY,
        sortType: b.E.JARO_WINKLER,
        searchStringGenerator: (e) => {
            var t, n;
            let { channel: i, voiceStates: r } = e;
            return [
                i.name,
                i.id,
                i.guild_id,
                null != (n = null == (t = S.Z.getGuild(i.guild_id)) ? void 0 : t.name) ? n : "",
                ...r.flatMap((e) => P(e)),
            ].filter(_.lm);
        },
        throttleMs: 100,
    },
    k = {
        searchType: b.S.FUZZY,
        sortType: b.E.JARO_WINKLER,
        searchStringGenerator: P,
        throttleMs: 100,
    },
    D = r.memo(function (e) {
        let { channel: t, query: n } = e,
            [l] = (0, o.e7)([j.Z], () => [j.Z.getVoiceStatesForChannel(t.id), j.Z.getVoiceStateVersion()], [t.id], Z.Q),
            [a, u] = r.useState([]);
        (0, y.BO)(n, Object.values(l), u, k);
        let d = (0, o.Wu)(
                [j.Z, C.default, O.Z, I.Z],
                () =>
                    Object.values(j.Z.getVoiceStatesForChannel(t.id))
                        .map((e) => C.default.getUser(e.userId))
                        .filter(_.lm)
                        .sort((e, t) => {
                            var i, r, l, o;
                            if (a.length > 0 && "" !== n.trim()) {
                                if (a.some((t) => t.userId === e.id)) return -1;
                                if (a.some((e) => e.userId === t.id)) return 1;
                            }
                            return I.Z.isFriend(e.id) && !I.Z.isFriend(t.id)
                                ? -1
                                : !I.Z.isFriend(e.id) && I.Z.isFriend(t.id)
                                  ? 1
                                  : (null != (l = null == (i = O.Z.getUserAffinity(t.id)) ? void 0 : i.vcProbability)
                                        ? l
                                        : 0) -
                                    (null != (o = null == (r = O.Z.getUserAffinity(e.id)) ? void 0 : r.vcProbability)
                                        ? o
                                        : 0);
                        }),
                [t.id, a, n],
            ),
            f = t.getGuildId(),
            h = Math.max(a.length, 2);
        return null == f
            ? null
            : (0, i.jsx)(s.Z, {
                  users: d,
                  guildId: f,
                  maxUsers: Math.min(h, 4),
                  size: c.EFr.SIZE_24,
                  overflowCountClassName: T.overflowCount,
                  overflowCountVariant: "text-xs/semibold",
                  disableUserPopout: !0,
                  "aria-label": w.intl.string(w.t.TxqPQR),
              });
    }),
    R = r.memo(function (e) {
        var t;
        let { channel: n } = e,
            r = n.getGuildId(),
            l = (0, o.e7)([S.Z], () => S.Z.getGuild(r), [r]);
        if (null == l)
            switch (n.type) {
                case N.d4z.DM:
                    return (0, i.jsx)(p.je, {
                        channel: n,
                        size: c.EFr.SIZE_32,
                    });
                case N.d4z.GROUP_DM:
                    return (0, i.jsx)(p.ge, {
                        channel: n,
                        size: c.EFr.SIZE_32,
                    });
                default:
                    return null;
            }
        return (0, i.jsx)(f.ZP, {
            mask: f.QS.CLAN_ICON,
            width: 32,
            height: 32,
            children: (0, i.jsx)("div", {
                className: T.guildIconWrapper,
                children: (0, i.jsx)(h.Ft, {
                    guildId: l.id,
                    guildName: null != (t = l.name) ? t : w.intl.string(w.t.DmIUGK),
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
                onMouseOver: f,
                onMouseLeave: h,
                query: p,
            } = e,
            m = (0, o.e7)([v.Z], () => v.Z.getChannel(n), [n]),
            g = null == m ? void 0 : m.getGuildId(),
            b = (0, o.e7)([S.Z], () => S.Z.getGuild(g), [g]),
            y = (0, d.KS)(m, b),
            O = (null == l ? void 0 : l.id) === n,
            E = O ? "text-feedback-positive" : r ? "interactive-text-active" : "text-muted",
            x = O
                ? c.TVs.colors.TEXT_FEEDBACK_POSITIVE
                : r
                  ? c.TVs.colors.INTERACTIVE_TEXT_ACTIVE
                  : c.TVs.colors.ICON_MUTED;
        return null == m
            ? null
            : (0, i.jsxs)(c.kL8, {
                  className: a()(T.channelItemContainer, r && T.channelItemHighlighted),
                  "aria-label": m.name,
                  onClick: () => s(n),
                  onMouseOver: () => f(n),
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
                                      null != y
                                          ? (0, i.jsx)(y, {
                                                color: x,
                                                size: "xs",
                                                className: T.channelIcon,
                                            })
                                          : void 0,
                                      (0, i.jsx)(c.Text, {
                                          variant: O ? "text-sm/semibold" : "text-sm/medium",
                                          color: E,
                                          className: T.channelItemNameText,
                                          children: (0, u.F6)(m, C.default, I.Z),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(c.Text, {
                                  variant: O ? "text-xs/semibold" : "text-xs/medium",
                                  color: E,
                                  children: null != (t = null == b ? void 0 : b.name) ? t : m.name,
                              }),
                          ],
                      }),
                      (0, i.jsx)("div", {
                          className: T.channelItemAvatars,
                          children: (0, i.jsx)(D, {
                              channel: m,
                              currentVoiceChannel: l,
                              query: p,
                          }),
                      }),
                  ],
              });
    }),
    M = r.memo(function (e) {
        let { emptyText: t } = e;
        return (0, i.jsx)("div", {
            className: T.emptyChannelItem,
            children: (0, i.jsx)(c.Text, {
                variant: "text-md/normal",
                color: "text-strong",
                children: t,
            }),
        });
    }),
    z = r.memo(function (e) {
        let {
                sectionHeader: t,
                channelIds: n,
                currentVoiceChannel: l,
                onSelect: a,
                hasQuery: o,
                query: s,
                scrollable: u = !0,
            } = e,
            [d, f] = r.useState(null),
            h = (e) => {
                f(e);
            },
            p = () => {
                f(null);
            },
            m = u ? c.zJl : "div";
        return (0, i.jsxs)("div", {
            children: [
                (0, i.jsx)("div", {
                    className: T.recentChannelsMenuHeader,
                    children: (0, i.jsx)(c.Text, {
                        variant: "text-sm/semibold",
                        color: "text-muted",
                        children: t,
                    }),
                }),
                (0, i.jsxs)(m, {
                    className: T.channelList,
                    children: [
                        o && 0 === n.length && (0, i.jsx)(M, { emptyText: w.intl.string(w.t.nxSS03) }),
                        n.map((e) =>
                            (0, i.jsx)(
                                L,
                                {
                                    channelId: e,
                                    isHighlighted: e === d,
                                    currentVoiceChannel: l,
                                    onClick: () => {
                                        a(e);
                                    },
                                    onMouseOver: h,
                                    onMouseLeave: p,
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
function V(e) {
    let { searchQuery: t, currentVoiceChannel: n, onSelect: r } = e,
        { recentVoiceChannelIds: l, friendVoiceChannelIds: s } = (function () {
            let e = (function () {
                    let e = (0, o.Wu)(
                        [C.default, I.Z, O.Z],
                        () =>
                            I.Z.getFriendIDs()
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
                                                  null == (n = O.Z.getUserAffinity(t))
                                                      ? void 0
                                                      : n.communicationProbability)
                                                  ? r
                                                  : 0) -
                                              (null !=
                                              (l =
                                                  null == (i = O.Z.getUserAffinity(e))
                                                      ? void 0
                                                      : i.communicationProbability)
                                                  ? l
                                                  : 0);
                                })
                                .reduce((e, t) => {
                                    let n = C.default.getUser(t);
                                    return null != n && e.push(n), e;
                                }, []),
                        [],
                    );
                    return (0, o.Wu)(
                        [j.Z, v.Z, x.Z],
                        () =>
                            Array.from(
                                e
                                    .map((e) => j.Z.getDiscoverableVoiceStateForUser(e.id))
                                    .reduce((e, t) => {
                                        let n = null == t ? void 0 : t.channelId;
                                        if (null == n) return e;
                                        let i = v.Z.getChannel(n);
                                        return null != i && x.Z.can(N.Plq.CONNECT, i) && e.add(n), e;
                                    }, new Set()),
                            ).filter(_.lm),
                        [e],
                    );
                })(),
                t = (0, o.Wu)([g.Z, v.Z, x.Z], () => {
                    let t = g.Z.getChannelHistory(),
                        n = new Set(e);
                    return Array.from(
                        new Set(
                            t.reduce((e, t) => {
                                let i = v.Z.getChannel(t);
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
    return l.length > 0 || s.length > 0
        ? (0, i.jsxs)(c.zJl, {
              className: a()(T.channelList, T.channelListWrapper),
              children: [
                  l.length > 0 &&
                      (0, i.jsx)(z, {
                          sectionHeader: w.intl.string(w.t.lnk2NQ),
                          channelIds: l.slice(0, 3),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => r(e, "recent channel"),
                          scrollable: !1,
                      }),
                  s.length > 0 &&
                      (0, i.jsx)(z, {
                          sectionHeader: w.intl.string(w.t["0lvb9O"]),
                          channelIds: s.slice(0, 8),
                          hasQuery: !1,
                          query: t,
                          currentVoiceChannel: n,
                          onSelect: (e) => r(e, "friend channel"),
                          scrollable: !1,
                      }),
              ],
          })
        : (0, i.jsx)(M, { emptyText: w.intl.string(w.t["3ET7Ay"]) });
}
function U(e) {
    e.stopPropagation();
}
function W(e) {
    var t, n;
    let { currentVoiceChannel: l, onClose: a, onSelect: s } = e,
        u = (0, o.Wu)(
            [S.Z, E.ZP, j.Z, I.Z, x.Z],
            () =>
                S.Z.getGuildsArray()
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
                        voiceStates: Object.values(j.Z.getVoiceStatesForChannel(e.id)).filter((e) =>
                            I.Z.isFriend(e.userId),
                        ),
                    })),
            [],
        ),
        [d, f] = r.useState(""),
        [h, p] = r.useState([]);
    (0, y.BO)(d, u, p, A);
    let m = r.useCallback(
            (e) => {
                "Escape" === e.key && a();
            },
            [a],
        ),
        g = r.useCallback(
            (e, t) => {
                s(e, t), a();
            },
            [s, a],
        );
    r.useEffect(
        () => (
            document.addEventListener("keydown", m, !0),
            () => {
                document.removeEventListener("keydown", m, !0);
            }
        ),
        [a, m],
    );
    let b = "" !== d.trim(),
        O = h.length > 20,
        v = { count: O ? 20 : h.length },
        C = r.useMemo(
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
        })({ className: T.recentChannelsMenu }, C)),
        (n = n =
            {
                children: [
                    (0, i.jsx)("div", {
                        className: T.searchBarContainer,
                        children: (0, i.jsx)(c.E1j, {
                            autoFocus: !0,
                            query: d,
                            placeholder: w.intl.string(w.t.UyA6ST),
                            onClear: () => {
                                f("");
                            },
                            onKeyDown: m,
                            onChange: (e) => {
                                f(e);
                            },
                            inputProps: { "aria-label": w.intl.string(w.t.UyA6ST) },
                        }),
                    }),
                    b
                        ? (0, i.jsx)(z, {
                              sectionHeader: O ? w.intl.format(w.t.qdXiQ1, v) : w.intl.format(w.t["Aq+8wB"], v),
                              channelIds: h
                                  .map((e) => {
                                      let { channel: t } = e;
                                      return t.id;
                                  })
                                  .slice(0, 20),
                              hasQuery: b,
                              query: d,
                              currentVoiceChannel: l,
                              onSelect: (e) => g(e, "search channel"),
                          })
                        : (0, i.jsx)(V, {
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
