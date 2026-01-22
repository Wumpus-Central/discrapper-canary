n.d(t, {
    A: () => G,
    c: () => T,
}),
    n(228524);
var l,
    a = n(627968),
    i = n(64700),
    c = n(503698),
    r = n.n(c),
    s = n(311907),
    d = n(435371),
    u = n(397927),
    o = n(148719),
    f = n(713654),
    b = n(931991),
    h = n(660110),
    _ = n(576705),
    m = n(435328),
    x = n(530209),
    v = n(974930),
    g = n(428978),
    p = n(850183),
    j = n(557582),
    A = n(888637),
    y = n(823991),
    C = n(988794),
    k = n(652215),
    N = n(985018),
    E = n(340500),
    T = (((l = {})[(l.BANNER = 0)] = "BANNER"), (l[(l.THUMBNAIL = 1)] = "THUMBNAIL"), l);

function D(e) {
    let { channel: t, onClick: n } = e,
        { canManageAllEvents: l } = (0, b.nr)(t),
        c = (0, s.bG)([_.A], () => !t.isGuildVocal() || _.A.can(k.xBc.CONNECT, t), [t]),
        h = i.useMemo(() => (0, o.A)(t), [t]),
        m = i.useMemo(() => {
            let e = (0, f.gU)(t);
            return null != e
                ? i.createElement(e, {
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: E.Kk,
                  })
                : null;
        }, [t]);
    return (0, a.jsx)(d.m_, {
        text: N.intl.string(N.t.nHjY9C),
        shouldShow: !c && null != n,
        children: (0, a.jsxs)(u.DUT, {
            className: r()(E.mG, E.nU, {
                [E.MN]: c && null != n,
                [E.Pm]: !c && null != n,
            }),
            onClick: n,
            children: [
                (0, a.jsx)(d.m_, {
                    text: N.intl.string(N.t["48WXaW"]),
                    shouldShow: l && h && c && null != n,
                    children: m,
                }),
                (0, a.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: E.h7,
                    children: t.name,
                }),
            ],
        }),
    });
}

function w(e) {
    let { channel: t, onJoinClick: n, handleLocationClick: l, location: i, isExternal: c } = e;
    return null != t
        ? (0, a.jsx)(D, {
              channel: t,
              onClick: n,
          })
        : (0, a.jsxs)(u.DUT, {
              className: E.mG,
              onClick: l,
              children: [
                  (0, a.jsx)(u.BT6, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: r()(E.nU, E.Kk),
                  }),
                  (0, a.jsx)(u.Text, {
                      className: c ? E.dC : E.h7,
                      variant: "text-sm/normal",
                      children: (0, m.l)(i, !0),
                  }),
              ],
          });
}

function S(e) {
    let {
            channel: t,
            entityType: n,
            isJoined: l,
            isActive: i,
            isUserLurking: c,
            rsvped: r,
            canInvite: s,
            onContextMenu: d,
            onJoinClick: o,
            onRsvpClick: f,
            onStartClick: b,
            onInviteClick: h,
            onEndClick: _,
            onJoinGuildClick: m,
        } = e,
        v = (0, x.D)(t, n),
        p = (0, g.Zq)({
            entityType: n,
            isJoined: l,
            isActive: i,
            isUserLurking: c,
            rsvped: r,
            canInvite: s,
            isChannelPublic: v,
            channel: t,
            onJoinClick: o,
            onRsvpClick: f,
            onStartClick: b,
            onInviteClick: h,
            onEndClick: _,
            onJoinGuildClick: m,
        });
    return (0, a.jsxs)(u.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != d
                ? (0, a.jsx)(g.jD, {
                      onClick: d,
                  })
                : null,
            null == p
                ? void 0
                : p.map((e, t) =>
                      (0, a.jsx)(
                          u.Button,
                          (function (e) {
                              for (var t = 1; t < arguments.length; t++) {
                                  var n = null != arguments[t] ? arguments[t] : {},
                                      l = Object.keys(n);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (l = l.concat(
                                          Object.getOwnPropertySymbols(n).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                          }),
                                      )),
                                      l.forEach(function (t) {
                                          var l;
                                          (l = n[t]),
                                              t in e
                                                  ? Object.defineProperty(e, t, {
                                                        value: l,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[t] = l);
                                      });
                              }
                              return e;
                          })({}, e),
                          t,
                      ),
                  ),
        ],
    });
}

function G(e) {
    let {
            className: t,
            guild: n,
            channel: l,
            creator: i,
            name: c,
            entityType: s,
            description: d,
            imageLocation: o = 0,
            imageSource: f,
            isActive: b,
            isUserLurking: _,
            isJoined: m = !1,
            isMember: x = !1,
            speakers: g,
            speakerCount: k,
            rsvped: N,
            canInvite: T,
            location: D,
            truncate: G,
            onContextMenu: P,
            onJoinClick: O,
            onJoinGuildClick: R,
            onRsvpClick: M,
            onStartClick: U,
            onInviteClick: L,
            onEndClick: I,
            onClick: q,
            isNew: z,
            guildEvent: K,
            eventPreview: B,
            recurrenceRule: X,
            recurrenceId: V,
            hideAgeVerificationNotice: W,
        } = e,
        Z = s === C.Ps.EXTERNAL,
        J = Z ? (e) => e.stopPropagation() : void 0,
        Y = [];
    if (null != X && null != event) {
        let e = (0, v.X7)(X);
        Y = (0, v.er)(4, e, new Date(K.scheduled_start_time));
    }
    let F = Y.length > 0;
    return (0, a.jsxs)(u.sqX, {
        "aria-label": c,
        onClick: () => (null == q ? void 0 : q(V)),
        onContextMenu: P,
        className: r()(
            E.Nr,
            {
                [E.oR]: m,
                [E.hT]: _,
            },
            t,
        ),
        children: [
            (0, a.jsxs)("div", {
                className: r()(E.Ms, {
                    [E.AD]: F,
                }),
                children: [
                    0 === o &&
                        (0, a.jsx)(p.A, {
                            source: f,
                        }),
                    (0, a.jsx)(j.Ay, {
                        creator: i,
                        name: c,
                        description: d,
                        imageSource: 1 === o ? f : null,
                        truncate: G,
                        guildId: null == n ? void 0 : n.id,
                        isNew: z,
                        guildEvent: K,
                        eventPreview: B,
                        recurrenceId: V,
                    }),
                    b &&
                        null != n &&
                        null != g &&
                        k > 0 &&
                        (0, a.jsx)(y.A, {
                            guild: n,
                            speakers: g,
                            speakerCount: k,
                            className: E.YK,
                        }),
                    (0, a.jsx)("hr", {
                        className: E.yF,
                    }),
                    !W &&
                        C.Tn.has(K.entity_type) &&
                        (0, a.jsx)(h.A, {
                            className: E.K4,
                            noBackground: !0,
                            divider: !0,
                        }),
                    (0, a.jsxs)("div", {
                        className: r()(E.mG, E.qr),
                        children: [
                            (0, a.jsx)(w, {
                                channel: l,
                                onJoinClick: O,
                                handleLocationClick: J,
                                location: D,
                                isExternal: Z,
                            }),
                            (0, a.jsx)("div", {
                                className: E.AQ,
                                children: (0, a.jsx)(S, {
                                    channel: l,
                                    entityType: s,
                                    isActive: b,
                                    isJoined: m,
                                    isUserLurking: _,
                                    isMember: x,
                                    rsvped: N,
                                    canInvite: T,
                                    onContextMenu: P,
                                    onRsvpClick: M,
                                    onJoinGuildClick: R,
                                    onInviteClick: L,
                                    onJoinClick: O,
                                    onStartClick: U,
                                    onEndClick: I,
                                }),
                            }),
                        ],
                    }),
                    F &&
                        (0, a.jsx)("hr", {
                            className: E.yF,
                        }),
                ],
            }),
            F &&
                (0, a.jsx)(A.A, {
                    guildId: null == n ? void 0 : n.id,
                    recurrenceRule: X,
                    guildEventId: K.id,
                    onRecurrenceClick: q,
                }),
        ],
    });
}
