t.d(n, {
    A: () => I,
    c: () => k,
}),
    t(228524);
var l,
    r = t(627968),
    i = t(64700),
    a = t(503698),
    o = t.n(a),
    c = t(311907),
    s = t(435371),
    u = t(397927),
    d = t(148719),
    g = t(713654),
    p = t(931991),
    m = t(660110),
    v = t(576705),
    f = t(435328),
    h = t(530209),
    b = t(974930),
    y = t(428978),
    A = t(850183),
    j = t(557582),
    x = t(888637),
    O = t(823991),
    C = t(988794),
    E = t(652215),
    N = t(985018),
    P = t(340500),
    k = (((l = {})[(l.BANNER = 0)] = "BANNER"), (l[(l.THUMBNAIL = 1)] = "THUMBNAIL"), l);

function w(e) {
    let { channel: n, onClick: t } = e,
        { canManageAllEvents: l } = (0, p.nr)(n),
        a = (0, c.bG)([v.A], () => !n.isGuildVocal() || v.A.can(E.xBc.CONNECT, n), [n]),
        m = i.useMemo(() => (0, d.A)(n), [n]),
        f = i.useMemo(() => {
            let e = (0, g.gU)(n);
            return null != e
                ? i.createElement(e, {
                      color: "currentColor",
                      size: "custom",
                      width: 20,
                      height: 20,
                      className: P.Kk,
                  })
                : null;
        }, [n]);
    return (0, r.jsx)(s.m_, {
        text: N.intl.string(N.t.nHjY9C),
        shouldShow: !a && null != t,
        children: (0, r.jsxs)(u.DUT, {
            className: o()(P.mG, P.nU, {
                [P.MN]: a && null != t,
                [P.Pm]: !a && null != t,
            }),
            onClick: t,
            children: [
                (0, r.jsx)(s.m_, {
                    text: N.intl.string(N.t["48WXaW"]),
                    shouldShow: l && m && a && null != t,
                    children: f,
                }),
                (0, r.jsx)(u.Text, {
                    variant: "text-sm/normal",
                    color: "none",
                    className: P.h7,
                    children: n.name,
                }),
            ],
        }),
    });
}

function G(e) {
    let { channel: n, onJoinClick: t, handleLocationClick: l, location: i, isExternal: a } = e;
    return null != n
        ? (0, r.jsx)(w, {
              channel: n,
              onClick: t,
          })
        : (0, r.jsxs)(u.DUT, {
              className: P.mG,
              onClick: l,
              children: [
                  (0, r.jsx)(u.BT6, {
                      size: "custom",
                      color: "currentColor",
                      height: 20,
                      width: 20,
                      className: o()(P.nU, P.Kk),
                  }),
                  (0, r.jsx)(u.Text, {
                      className: a ? P.dC : P.h7,
                      variant: "text-sm/normal",
                      children: (0, f.l)(i, !0),
                  }),
              ],
          });
}

function _(e) {
    let {
            channel: n,
            entityType: t,
            isJoined: l,
            isActive: i,
            isUserLurking: a,
            rsvped: o,
            canInvite: c,
            onContextMenu: s,
            onJoinClick: d,
            onRsvpClick: g,
            onStartClick: p,
            onInviteClick: m,
            onEndClick: v,
            onJoinGuildClick: f,
        } = e,
        b = (0, h.D)(n, t),
        A = (0, y.Zq)({
            entityType: t,
            isJoined: l,
            isActive: i,
            isUserLurking: a,
            rsvped: o,
            canInvite: c,
            isChannelPublic: b,
            channel: n,
            onJoinClick: d,
            onRsvpClick: g,
            onStartClick: p,
            onInviteClick: m,
            onEndClick: v,
            onJoinGuildClick: f,
        });
    return (0, r.jsxs)(u.ButtonGroup, {
        fullWidth: !1,
        size: "sm",
        children: [
            null != s
                ? (0, r.jsx)(y.jD, {
                      onClick: s,
                  })
                : null,
            null == A
                ? void 0
                : A.map((e, n) =>
                      (0, r.jsx)(
                          u.Button,
                          (function (e) {
                              for (var n = 1; n < arguments.length; n++) {
                                  var t = null != arguments[n] ? arguments[n] : {},
                                      l = Object.keys(t);
                                  "function" == typeof Object.getOwnPropertySymbols &&
                                      (l = l.concat(
                                          Object.getOwnPropertySymbols(t).filter(function (e) {
                                              return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                          }),
                                      )),
                                      l.forEach(function (n) {
                                          var l;
                                          (l = t[n]),
                                              n in e
                                                  ? Object.defineProperty(e, n, {
                                                        value: l,
                                                        enumerable: !0,
                                                        configurable: !0,
                                                        writable: !0,
                                                    })
                                                  : (e[n] = l);
                                      });
                              }
                              return e;
                          })({}, e),
                          n,
                      ),
                  ),
        ],
    });
}

function I(e) {
    let {
            className: n,
            guild: t,
            channel: l,
            creator: i,
            name: a,
            entityType: c,
            description: s,
            imageLocation: d = 0,
            imageSource: g,
            isActive: p,
            isUserLurking: v,
            isJoined: f = !1,
            isMember: h = !1,
            speakers: y,
            speakerCount: E,
            rsvped: N,
            canInvite: k,
            location: w,
            truncate: I,
            onContextMenu: S,
            onJoinClick: T,
            onJoinGuildClick: D,
            onRsvpClick: L,
            onStartClick: M,
            onInviteClick: B,
            onEndClick: U,
            onClick: R,
            isNew: V,
            guildEvent: K,
            eventPreview: H,
            recurrenceRule: J,
            recurrenceId: z,
            hideAgeVerificationNotice: q,
        } = e,
        F = c === C.Ps.EXTERNAL,
        X = F ? (e) => e.stopPropagation() : void 0,
        W = [];
    if (null != J && null != event) {
        let e = (0, b.X7)(J);
        W = (0, b.er)(4, e, new Date(K.scheduled_start_time));
    }
    let Q = W.length > 0;
    return (0, r.jsxs)(u.sqX, {
        "aria-label": a,
        onClick: () => (null == R ? void 0 : R(z)),
        onContextMenu: S,
        className: o()(
            P.Nr,
            {
                [P.oR]: f,
                [P.hT]: v,
            },
            n,
        ),
        children: [
            (0, r.jsxs)("div", {
                className: o()(P.Ms, {
                    [P.AD]: Q,
                }),
                children: [
                    0 === d &&
                        (0, r.jsx)(A.A, {
                            source: g,
                        }),
                    (0, r.jsx)(j.Ay, {
                        creator: i,
                        name: a,
                        description: s,
                        imageSource: 1 === d ? g : null,
                        truncate: I,
                        guildId: null == t ? void 0 : t.id,
                        isNew: V,
                        guildEvent: K,
                        eventPreview: H,
                        recurrenceId: z,
                    }),
                    p &&
                        null != t &&
                        null != y &&
                        E > 0 &&
                        (0, r.jsx)(O.A, {
                            guild: t,
                            speakers: y,
                            speakerCount: E,
                            className: P.YK,
                        }),
                    (0, r.jsx)("hr", {
                        className: P.yF,
                    }),
                    !q &&
                        C.Tn.has(K.entity_type) &&
                        (0, r.jsx)(m.A, {
                            className: P.K4,
                            noBackground: !0,
                            divider: m.V.BOTTOM,
                            channelId: null == l ? void 0 : l.id,
                        }),
                    (0, r.jsxs)("div", {
                        className: o()(P.mG, P.qr),
                        children: [
                            (0, r.jsx)(G, {
                                channel: l,
                                onJoinClick: T,
                                handleLocationClick: X,
                                location: w,
                                isExternal: F,
                            }),
                            (0, r.jsx)("div", {
                                className: P.AQ,
                                children: (0, r.jsx)(_, {
                                    channel: l,
                                    entityType: c,
                                    isActive: p,
                                    isJoined: f,
                                    isUserLurking: v,
                                    isMember: h,
                                    rsvped: N,
                                    canInvite: k,
                                    onContextMenu: S,
                                    onRsvpClick: L,
                                    onJoinGuildClick: D,
                                    onInviteClick: B,
                                    onJoinClick: T,
                                    onStartClick: M,
                                    onEndClick: U,
                                }),
                            }),
                        ],
                    }),
                    Q &&
                        (0, r.jsx)("hr", {
                            className: P.yF,
                        }),
                ],
            }),
            Q &&
                (0, r.jsx)(x.A, {
                    guildId: null == t ? void 0 : t.id,
                    recurrenceRule: J,
                    guildEventId: K.id,
                    onRecurrenceClick: R,
                }),
        ],
    });
}
