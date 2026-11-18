(i.d(e, { ru: () => tp, Ay: () => tm }), i(321073));
var n = i(477900),
    l = i(582128),
    a = i(284009),
    r = i.n(a),
    o = i(6161),
    s = i(681154),
    u = i(974690),
    c = i(855986),
    d = i(534890),
    f = i(820081),
    A = i(241541),
    p = i(559647),
    y = i(866665),
    m = i(408278),
    g = i(297152),
    I = i(834730),
    E = i(821609),
    _ = i(308368),
    S = i(298990),
    N = i(308528),
    C = i(730134),
    h = i(964486),
    T = i(55730),
    v = i(874546),
    O = i(429913),
    b = i(878014),
    L = i(402216),
    x = i(506326),
    D = i(428249),
    R = i(205184),
    k = i(812020),
    U = i(927813),
    M = i(811091),
    V = i(20805),
    j = i(583846);
let w = U.A.Millis.WEEK;
function P(t) {
    let e = (0, R.s)(t),
        i = (0, c.cf)([k.A], () => k.A.getUserAffinitiesMap());
    return l.useMemo(
        () =>
            null == e
                ? []
                : e
                      .filter(
                          (e) => (0, V.zD)(e) && (0, V.P)(e) && e.extra.application_id === t && M.default.age(e.id) < w,
                      )
                      .sort((t, e) => G(i, e) - G(i, t)),
        [e, t, i],
    );
}
let K = 30 * U.A.Seconds.MINUTE;
function G(t, e) {
    let i = e.participants;
    if (0 === i.length) return 0;
    let n = Math.max(
            ...i.map((e) => {
                let i = t.get(e);
                return (i?.communicationProbability ?? 0) + 1e-4;
            }),
        ),
        l = Math.exp(-((M.default.age(e.id) / 1e3 / K) * 0.01)),
        a = e.traits.some((t) => t.type !== u.K.DURATION_SECONDS),
        r = (0, j.I5)(e);
    return n * l * (1 + 0.6 * (a && !r ? 1 : 0));
}
var Y = i(474397),
    F = i(279877),
    H = i(976860),
    J = i(404885),
    B = i(802880),
    z = i(616356),
    $ = i(734057),
    X = i(290863),
    W = i(994500),
    q = i(287809),
    Z = i(943577),
    Q = i(373954),
    tt = i(562153),
    te = i(810412),
    ti = i(870373),
    tn = i(243612),
    tl = i(652215),
    ta = i(381941),
    tr = i(792996),
    to = i(294029);
function ts(t) {
    let e,
        { entry: i, currentUserActivity: a, idx: o, variant: s } = t,
        u = (0, c.bG)([q.default], () => q.default.getUser(i.author_id)),
        [g, I] = l.useState("unsent"),
        [E, S] = l.useState(!1);
    l.useEffect(() => {
        if ("sent" === g) {
            let t = setTimeout(() => S(!0), 2e3);
            return () => clearTimeout(t);
        }
    }, [g]);
    let C = (0, tn.JH)(a?.application_id ?? i.extra.application_id),
        h = null != C,
        T = h ? tr.intl.string(tr.t["3fRySx"]) : tr.intl.string(tr.t.XHxDIV);
    return (
        (e = "sent" === g ? (E ? d.ChatIcon : f.CheckmarkSmallBoldIcon) : h ? A.GroupPlusIcon : p.SendMessageIcon),
        (0, n.jsx)(y.m, {
            text: T,
            "aria-label": T,
            children: (0, n.jsx)(m.K, {
                icon: e,
                "aria-label": T,
                loading: "sending" === g,
                onClick: E
                    ? async function () {
                          if (null == u) return;
                          let t = await N.A.getOrEnsurePrivateChannel(u.id),
                              e = $.A.getChannel(t) ?? null;
                          (r()(null != e, "Send channel must be defined"),
                              (0, H.pX)(tl.BVt.CHANNEL(e.guild_id, e.id)),
                              (0, Y.A)(tl.BRT.OVERLAY, !0),
                              (0, te.YX)(tl.uss.ACTIVITY, { type: te.Z5.REDIRECT, value: te.IP.CHAT, userId: u.id }));
                      }
                    : async function (t) {
                          if (null != u && "unsent" === g) {
                              t.stopPropagation();
                              try {
                                  if ((I("sending"), h && null != C))
                                      await _.A.sendActivityInviteUser({
                                          type: tl.xL.JOIN,
                                          userId: u.id,
                                          activity: C,
                                          location: tl.ThZ.UNLOCKED_OVERLAY,
                                      });
                                  else {
                                      let t = await N.A.getOrEnsurePrivateChannel(u.id),
                                          e = $.A.getChannel(t) ?? null;
                                      (r()(null != e, "Send channel must be defined"),
                                          (0, H.pX)(tl.BVt.CHANNEL(e.guild_id, e.id)),
                                          (0, Y.A)(tl.BRT.OVERLAY, !0),
                                          !0 === i.extra.fake_inventory_item
                                              ? await (0, D.J)({
                                                    channel: e,
                                                    content: tr.intl.formatToPlainString(tr.t.UVBA9g, {
                                                        gameName: i.extra.game_name,
                                                    }),
                                                    whenReady: !0,
                                                    doNotNotifyOnError: !1,
                                                    location: ta.Hx.OVERLAY,
                                                })
                                              : await (0, D.d)({
                                                    channel: e,
                                                    content: tr.intl.string(tr.t.DwAcMz),
                                                    entry: i,
                                                    whenReady: !0,
                                                    doNotNotifyOnError: !1,
                                                    location: ta.Hx.OVERLAY,
                                                }));
                                  }
                                  ((0, ti.g)(tl.HAw.OVERLAY_GAME_INVITE_SENT, {
                                      target_user_id: u.id,
                                      target_content_entry_id: i.id,
                                      target_index: o,
                                  }),
                                      (0, te.YX)(tl.uss.ACTIVITY, {
                                          type: te.Z5.INVITE,
                                          value: te.IP.INVITE_SENT,
                                          userId: u.id,
                                      }),
                                      I("sent"));
                              } catch (t) {
                                  I("unsent");
                              }
                          }
                      },
                variant: "subtle" === s ? "icon-only" : "secondary",
                size: "sm",
            }),
        })
    );
}
function tu(t) {
    let { entry: e, currentUserActivity: i, variant: a } = t,
        r = (0, c.bG)([q.default], () => q.default.getUser(e.author_id)),
        o = i?.application_id ?? e.extra.application_id,
        s = (0, c.bG)([X.A], () => (null != r ? X.A.getApplicationActivity(r.id, o) : null), [o, r]),
        [u, d] = l.useState("unsent");
    if (!(null != s && (0, T.A)(s, tl.jUm.JOIN)) || (!(0, T.A)(s, tl.jUm.EMBEDDED) && !(0, v.Ay)(s))) return null;
    let A = tr.intl.string(tr.t.OKsSCR);
    return (0, n.jsx)(y.m, {
        text: A,
        "aria-label": A,
        children: (0, n.jsx)(m.K, {
            icon: "sent" === u ? f.CheckmarkSmallBoldIcon : g.HandRequestSpeakIcon,
            "aria-label": A,
            loading: "sending" === u,
            onClick: async function (t) {
                if (null != s && null != r && "unsent" === u) {
                    t.stopPropagation();
                    try {
                        (d("sending"),
                            await _.A.sendActivityInviteUser({
                                type: tl.xL.JOIN_REQUEST,
                                userId: r.id,
                                activity: s,
                                location: tl.ThZ.UNLOCKED_OVERLAY,
                            }),
                            (0, te.YX)(tl.uss.ACTIVITY, {
                                type: te.Z5.INVITE,
                                value: te.IP.JOIN_REQUEST_SENT,
                                userId: r.id,
                            }),
                            d("sent"));
                    } catch (t) {
                        d("unsent");
                    }
                }
            },
            variant: "subtle" === a ? "icon-only" : "secondary",
            size: "sm",
        }),
    });
}
function tc(t) {
    let { entry: e, currentUserActivity: i, idx: l, variant: a } = t,
        r = (0, c.bG)([q.default], () => q.default.getUser(e.author_id)),
        o = (0, c.bG)([z.A], () => (null != r ? z.A.getAnyStreamForUser(r.id) : null), [r]),
        {
            isMobileOnline: s,
            isVROnline: u,
            status: d,
        } = (0, c.cf)(
            [X.A],
            () =>
                null == r
                    ? { isMobileOnline: void 0, isVROnline: void 0, status: void 0 }
                    : {
                          isMobileOnline: X.A.isMobileOnline(r.id),
                          isVROnline: X.A.isVROnline(r.id),
                          status: X.A.getStatus(r.id),
                      },
            [r],
        );
    return null == r
        ? null
        : (0, n.jsxs)("div", {
              className: to.nM,
              children: [
                  (0, n.jsx)(C.A, { className: to.my, user: r, isMobile: s, isVR: u, status: d }),
                  (0, n.jsxs)("div", {
                      className: to.zH,
                      children: [
                          (0, n.jsxs)("div", {
                              className: to.Yn,
                              children: [
                                  (0, n.jsx)(I.E, {
                                      className: to.Xh,
                                      variant: "body-md/medium",
                                      color: "text-strong",
                                      children: tt.Ay.getName(void 0, void 0, r),
                                  }),
                                  null != o && (0, n.jsx)(L.Ay, { className: to.Ok }),
                              ],
                          }),
                          (0, n.jsx)(x.mG, {
                              location: x.N5.OVERLAY,
                              className: to.cV,
                              children: [x.iq, x.tR, x.K7, x.sp, x.MK].map((t, i) =>
                                  (0, n.jsx)(t, { entry: e }, `entry-${i}`),
                              ),
                          }),
                      ],
                  }),
                  (0, n.jsxs)("div", {
                      className: to.nB,
                      children: [
                          (0, n.jsx)(tu, { entry: e, currentUserActivity: i, idx: l, variant: a }),
                          (0, n.jsx)(ts, { entry: e, currentUserActivity: i, idx: l, variant: a }),
                      ],
                  }),
              ],
          });
}
function td(t) {
    return new Set(t.map((t) => t.author_id));
}
function tf(t) {
    let { entries: e, currentUserActivity: i, className: a, hideHeader: r = !1, variant: o = "default" } = t,
        s = (0, te.Dk)(() => td(e), [e]),
        c = (0, te.Dk)(
            () =>
                new Set(
                    Array.from(td(e)).filter((t) => {
                        let i = e.find((e) => {
                            let { author_id: i } = e;
                            return t === i;
                        });
                        return (
                            null != i &&
                            null !=
                                i.traits.find((t) => {
                                    let { type: e } = t;
                                    return e === u.K.IS_LIVE;
                                })
                        );
                    }),
                ),
            [e],
        ),
        d = (0, te.Dk)(() => new Set(e.map((t) => t.id)), [e]);
    return (l.useEffect(() => {
        (0, te.Y)(tl.uss.ACTIVITY, {
            locked: Q.default.isInstanceLocked(),
            shownUserIds: Array.from(s),
            liveUserIds: Array.from(c),
            contentInventoryIds: Array.from(d),
        });
    }, [s, c, d]),
    0 === e.length)
        ? null
        : (0, n.jsxs)("div", {
              className: a,
              children: [
                  !r &&
                      (0, n.jsx)("div", {
                          className: to.v4,
                          children: (0, n.jsx)(I.E, {
                              variant: "body-xs/medium",
                              color: "subtle" === o ? "text-subtle" : "text-default",
                              tag: "div",
                              children: tr.intl.string(tr.t.y9eo7a),
                          }),
                      }),
                  e.map((t, e) => (0, n.jsx)(tc, { idx: e, entry: t, currentUserActivity: i, variant: o }, e)),
              ],
          });
}
function tA(t) {
    let { gamingId: e, maxUserShowCount: i, userAffinityThresholdV2: n = 0.0029 } = t,
        a = P(e);
    (0, h.Ay)(() => {
        (0, J.u)();
    });
    let r = (0, tn.xl)(e),
        d = (0, c.yK)(
            [Z.A, W.A, k.A],
            () => {
                if (null == e) return [];
                let t = Z.A.nowPlayingCards,
                    i = { v2: n };
                return t
                    .reduce((t, i) => {
                        if (i.type !== tl.ZzC.USER) return (i.type, t);
                        {
                            let n = i.party.currentActivities;
                            if (0 === n.length) return t;
                            for (let i of n) i.application.id === e && null != i.activity && t.push(i);
                            return t;
                        }
                    }, [])
                    .filter((t) => {
                        let e = t.activityUser.id,
                            n = W.A.isFriend(e);
                        return (function (t, e, i) {
                            let { v2: n } = i;
                            if (null == t) return e;
                            let {
                                communicationProbability: l,
                                dmProbability: a,
                                serverMessageProbability: r,
                                vcProbability: o,
                            } = t;
                            switch (!0) {
                                case l > n:
                                case a > n:
                                case r > n:
                                case o > n:
                                    return !0;
                                default:
                                    return e;
                            }
                        })(k.A.getUserAffinity(e), n, i);
                    });
            },
            [e, n],
        );
    return (
        (0, h.Ay)(() => (F.O(), () => F.v())),
        {
            entries: l.useMemo(() => {
                let t = a.filter((t) => !d.some((e) => e.activityUser.id === t.author_id)),
                    e = [
                        ...d.map((t) => {
                            let e;
                            return (
                                (e = t.activity?.timestamps?.start ?? Date.now()),
                                {
                                    id: M.default.fromTimestamp(e),
                                    author_id: t.activityUser.id,
                                    extra: {
                                        type: "played_game_extra",
                                        game_name: t.activity?.name ?? t.application.name,
                                        application_id: t.activity?.application_id ?? t.application.id,
                                        fake_inventory_item: !0,
                                    },
                                    content_type: s.ContentInventoryEntryType.PLAYED_GAME,
                                    author_type: o.ContentInventoryAuthorType.USER,
                                    participants: t.playingMembers.map((t) => t.id),
                                    traits: [{ type: u.K.IS_LIVE, is_live: !0 }],
                                }
                            );
                        }),
                        ...t,
                    ];
                return null != i ? e.slice(0, i) : e;
            }, [a, d, i]),
            currentUserActivity: r,
        }
    );
}
function tp(t) {
    let e = tA(t);
    return (0, n.jsx)(tf, { ...e, className: t.className, variant: t.variant });
}
function ty(t) {
    let { activity: e, currentUser: i, showInviteButton: l = !0 } = t,
        a = (0, tn.JH)(e?.application_id),
        r = (0, O.h)(e?.application_id),
        o = (0, b.D)(r);
    return null == e || null == i
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  (0, n.jsx)(B.A, {
                      className: to.M4,
                      activity: e,
                      user: i,
                      currentUser: i,
                      appContext: tl.BRT.OVERLAY,
                  }),
                  null != a && !o && l
                      ? (0, n.jsx)("div", {
                            className: to.DJ,
                            children: (0, n.jsx)(E.$, {
                                text: tr.intl.string(tr.t["6Qgrev"]),
                                size: "sm",
                                variant: "secondary",
                                onClick: () => {
                                    ((0, S.qf)(a, !1, tl.BRT.POPOUT),
                                        (0, te.YX)(tl.uss.ACTIVITY, { type: te.Z5.INVITE, value: te.IP.PANEL_OPENED }));
                                },
                            }),
                        })
                      : null,
              ],
          });
}
function tm(t) {
    let { locked: e } = t,
        i = (0, tn.b4)(),
        l = i?.id,
        a = i?.altId,
        r = P(l),
        o = (0, c.bG)([q.default], () => q.default.getCurrentUser()),
        s = null != a ? a : l,
        u = (0, tn.xl)(s);
    (0, h.Ay)(() => (F.O(), () => F.v()));
    let d = tA({ gamingId: s, userAffinityThresholdV2: 0.00145, maxUserShowCount: 12 });
    return e || (0 === r.length && null == u)
        ? null
        : (0, n.jsxs)("div", {
              className: to.kL,
              children: [
                  (0, n.jsx)(ty, { activity: u, currentUser: o }),
                  (0, n.jsx)(tf, { ...d, className: to.l_, hideHeader: !0 }),
              ],
          });
}
