n.d(t, { Z: () => R }), n(388685);
var r = n(54381),
    i = n(473749),
    l = n(392711),
    a = n.n(l),
    s = n(954955),
    o = n.n(s),
    c = n(442837),
    u = n(481060),
    d = n(570140),
    p = n(365113),
    f = n(313481),
    h = n(616022),
    g = n(509212),
    m = n(93127),
    _ = n(752048),
    b = n(594174),
    E = n(801077),
    O = n(626135),
    y = n(70956),
    v = n(225559),
    I = n(910436),
    C = n(203028),
    S = n(358924),
    T = n(292140),
    N = n(525296),
    j = n(981631),
    P = n(324805),
    x = n(388032),
    A = n(559909);
let Z = 15 * y.Z.Millis.MINUTE,
    w = (0, N.Z)(function (e) {
        let { party: t, onUserContextMenu: n, onChannelContextMenu: l, quest: a } = e,
            s = i.useRef(null),
            c = (0, r.jsx)(C.Z, {
                party: t,
                onUserContextMenu: n,
            }),
            d = (0, r.jsx)(I.Z, {
                party: t,
                onChannelContextMenu: l,
                quest: a,
            }),
            { partiedMembers: f, applicationStreams: h, currentActivities: g, voiceChannels: m } = t,
            _ = f.length,
            b = h.length,
            E = g.length,
            y = m.length > 0,
            v = p.o.useConfig({ location: "itemcard" }).demureActivityCards,
            N = i.useCallback(() => {
                let e = g
                    .filter((e) => {
                        var t, n;
                        return (
                            (null == (t = e.game) ? void 0 : t.name) != null &&
                            (0, O.isGameApplicationType)(null == (n = e.game) ? void 0 : n.type)
                        );
                    })
                    .map((e) => e.game.name);
                O.default.track(j.rMx.NOW_PLAYING_CARD_HOVERED, {
                    num_users: _,
                    num_streams: b,
                    num_activities: E,
                    in_voice_channel: y,
                    games_detected: e,
                });
            }, [_, b, E, y, g]),
            P = i.useMemo(() => o()(N, Z), [N]);
        return null != c || null != d
            ? (0, r.jsx)(u.yRy, {
                  targetElementRef: s,
                  position: "left",
                  renderPopout: (e) => {
                      let { closePopout: n } = e;
                      return (0, r.jsx)(T.Z, {
                          party: t,
                          close: n,
                      });
                  },
                  spacing: 8,
                  children: (e, t) => {
                      var n, i;
                      let { isShown: l } = t;
                      return (0, r.jsx)(
                          S.Z,
                          ((n = (function (e) {
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
                          })({}, e)),
                          (i = i =
                              {
                                  ref: s,
                                  onMouseEnter: P,
                                  "aria-haspopup": "menu",
                                  className: A.itemCard,
                                  active: l,
                                  flat: v,
                                  children: (0, r.jsxs)("div", {
                                      children: [c, d],
                                  }),
                              }),
                          Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                              : (function (e, t) {
                                    var n = Object.keys(e);
                                    if (Object.getOwnPropertySymbols) {
                                        var r = Object.getOwnPropertySymbols(e);
                                        n.push.apply(n, r);
                                    }
                                    return n;
                                })(Object(i)).forEach(function (e) {
                                    Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                }),
                          n),
                      );
                  },
              })
            : null;
    }),
    L = a().throttle(() => m._(), 300000);
function R() {
    let {
            nowPlayingCards: e,
            loaded: t,
            needsRefresh: n,
            fetching: l,
            currentUser: a,
        } = (0, c.cj)([E.Z, _.Z, b.default], () => ({
            nowPlayingCards: E.Z.nowPlayingCards,
            loaded: E.Z.loaded,
            needsRefresh: _.Z.shouldFetch(),
            fetching: _.Z.isFetching(),
            currentUser: b.default.getCurrentUser(),
        })),
        s = (0, c.e7)([h.Z], () => h.Z.quests),
        o = (0, f.Fy)(Array.from(s.values()));
    i.useEffect(() => (d.Z.wait(() => v.L()), () => d.Z.wait(() => v.v())), [null == a ? void 0 : a.id]),
        i.useEffect(() => {
            n && !l && L();
        }, [n, l]);
    let p = i.useMemo(() => {
            let t = new Map(),
                n = new Set(),
                r = (0, g.NI)(s, P.l$);
            for (let i of e)
                i.party.currentActivities.forEach((e) => {
                    let { activity: l } = e;
                    if (null == l) return;
                    let a = (0, g.ZZ)(r, l);
                    null == a || n.has(a.id) || (t.set(i.party.id, a), n.add(a.id));
                });
            return t;
        }, [e, s, o]),
        m = null;
    return t
        ? (m =
              e.length > 0
                  ? e.map((e) => {
                        let { party: t } = e;
                        return (0, r.jsx)(
                            w,
                            {
                                party: t,
                                quest: p.get(t.id),
                            },
                            t.id,
                        );
                    })
                  : (0, r.jsxs)("div", {
                        className: A.emptyCard,
                        children: [
                            (0, r.jsx)(u.Heading, {
                                variant: "heading-md/semibold",
                                className: A.emptyHeader,
                                children: x.intl.string(x.t["ngJ/5u"]),
                            }),
                            (0, r.jsx)(u.Text, {
                                color: "none",
                                className: A.emptyText,
                                variant: "text-sm/normal",
                                children: x.intl.string(x.t["99ZWxQ"]),
                            }),
                        ],
                    }))
        : (0, r.jsx)("div", {
              className: A.emptyCard,
              children: (0, r.jsx)(u.$jN, {}),
          });
}
