n.d(t, { A: () => eh });
var l = n(477900);
n(582128);
var i = n(503698),
    a = n.n(i),
    r = n(284009),
    s = n.n(r),
    o = n(570138),
    u = n(855986),
    c = n(802516),
    d = n(22363),
    m = n(825484),
    A = n(707606),
    p = n(573648),
    h = n(793574),
    f = n(688810),
    g = n(235986),
    x = n(25528),
    I = n(655724),
    v = n(82149),
    T = n(734057),
    S = n(287809),
    y = n(874546),
    N = n(90644),
    E = n(61330),
    C = n(73963),
    j = n(663249),
    _ = n(821609),
    b = n(522978),
    P = n(417869),
    R = n(792996);
function O(e) {
    let { platform: t, variant: n = "secondary", size: i = "sm", onAction: a, icon: r, ...s } = e;
    return (0, u.bG)([P.A], () => P.A.getAccounts().some((e) => e.type === t.type))
        ? null
        : (0, l.jsx)(_.$, {
              onClick: function () {
                  (a?.(), (0, b.A)({ platformType: t.type, location: "Activity Action" }));
              },
              variant: n,
              size: i,
              icon: r,
              text: R.intl.format(R.t.XWSHTb, { platform: t.name }),
              fullWidth: !0,
              ...s,
          });
}
var D = n(729937),
    U = n(889558),
    L = n(998218);
function M(e) {
    let { activity: t, user: n, variant: i = "secondary", onAction: a, ...r } = e;
    return t?.buttons == null || t.buttons.length < 1
        ? null
        : (0, l.jsx)(l.Fragment, {
              children: t.buttons.map((e, s) =>
                  (0, l.jsx)(
                      _.$,
                      {
                          text: e,
                          variant: i,
                          size: "sm",
                          fullWidth: !0,
                          onClick: () => {
                              (a?.(),
                                  (async function (e, t, n) {
                                      try {
                                          let l = await (0, D.yb)(e, t);
                                          if (l.button_urls.length <= n) return;
                                          let i = l.button_urls[n];
                                          if ("string" != typeof i) return;
                                          let a = L.A.safeParseWithQuery(i);
                                          if (null == a || null == a.protocol || null == a.hostname) return;
                                          (0, U.h)({ href: L.A.format(a), trusted: !1 });
                                      } catch (e) {}
                                  })(t, n.id, s));
                          },
                          ...r,
                      },
                      `customButton-${s}`,
                  ),
              ),
          });
}
var G = n(284525),
    w = n(129095),
    Y = n(977997);
let k = function (e) {
    let { guildId: t, channelId: n, variant: i = "active", size: a = "sm", onAction: r, ...s } = e,
        o = (0, u.bG)([Y.A], () => Y.A.isInChannel(n), [n]);
    return (0, l.jsx)(_.$, {
        variant: i,
        size: a,
        text: R.intl.string(R.t.ZYO5OK),
        disabled: o,
        onClick: function () {
            (r?.(), w.CH(t, n));
        },
        fullWidth: !0,
        ...s,
    });
};
var V = n(626584),
    $ = n(55730),
    F = n(652215);
function H(e) {
    let { activity: t, user: n, variant: i = "secondary", onAction: a, ...r } = e;
    return (0, $.A)(t, F.jUm.INSTANCE)
        ? (0, l.jsx)(_.$, {
              text: R.intl.string(R.t.vwl1PK),
              variant: i,
              size: "sm",
              onClick: function () {
                  (a?.(), new V.A("UserActivityActions").log("notify", n.id, t));
              },
              fullWidth: !0,
              ...r,
          })
        : null;
}
var B = n(607781),
    J = n(866665),
    W = n(109487),
    z = n(353411);
function Z(e) {
    let {
            activity: t,
            user: n,
            source: i,
            size: a = "sm",
            variant: r = "secondary",
            fullWidth: s,
            onAction: o,
            ...u
        } = e,
        { label: c, tooltip: d, loading: m, disabled: A, onClick: p } = (0, z._B)(t, n, i);
    return (0, l.jsx)(J.m, {
        text: d,
        children: (0, l.jsx)(_.$, {
            variant: r,
            size: a,
            icon: W.SpotifyNeutralIcon,
            text: c,
            fullWidth: s,
            onClick: function () {
                (o?.(), p());
            },
            disabled: A,
            loading: m,
            ...u,
        }),
    });
}
function X(e) {
    let { activity: t, user: n, source: i, onAction: a } = e;
    return null != t && (0, $.A)(t, F.jUm.PLAY) && (0, N.A)(t)
        ? (0, l.jsx)(Z, { fullWidth: !0, activity: t, user: n, source: i, onAction: a })
        : null;
}
var Q = n(408278),
    q = n(835723),
    K = n(562153);
function ee(e) {
    let {
            activity: t,
            user: n,
            channelId: i,
            guildId: a,
            source: r,
            size: s = "sm",
            variant: o = "secondary",
            onAction: u,
            ...c
        } = e,
        { tooltip: d, loading: m, disabled: A, onClick: p } = (0, z.J$)(t, n, r, K.Ay.getNickname(a, i, n));
    return (0, l.jsx)(J.m, {
        text: d,
        children: (0, l.jsx)(Q.K, {
            icon: q.UserPlayIcon,
            size: s,
            variant: o,
            onClick: function () {
                (u?.(), p());
            },
            disabled: A,
            loading: m,
            "aria-label": d ?? t.name,
            ...c,
        }),
    });
}
function et(e) {
    let { activity: t, user: n, guildId: i, channelId: a, source: r, onAction: s } = e;
    return null != t && (0, $.A)(t, F.jUm.SYNC) && (0, N.A)(t)
        ? (0, l.jsx)(ee, {
              size: "sm",
              variant: "secondary",
              user: n,
              activity: t,
              guildId: i ?? void 0,
              channelId: a,
              source: r,
              onAction: s,
          })
        : null;
}
var en = n(648246),
    el = n(183623),
    ei = n(622631),
    ea = n(136969),
    er = n(597798),
    es = n(401843),
    eo = n(711589),
    eu = n(267102),
    ec = n(616356),
    ed = n(188567),
    em = n(408399);
function eA(e) {
    let { isCurrentUser: t, applicationStream: n, onAction: i } = e,
        a = (0, u.bG)(
            [ec.A],
            () =>
                null != n &&
                ec.A.getAllActiveStreamsForChannel(n.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== n.ownerId;
                }).length > 0,
        ),
        { actionString: r, canWatch: s, isWatching: o } = (0, eo.K)(n),
        c = (0, eu.aL)();
    function d(e) {
        null != n &&
            (i?.(),
            er.default.selectVoiceChannel(n.channelId),
            o || (0, es.Nl)(n, { forceMultiple: e }),
            c.dispatch(F.jej.POPOUT_CLOSE),
            ed._.dispatch(F.jej.MODAL_CLOSE),
            ea.A.popAll());
    }
    return null == n
        ? null
        : (0, l.jsxs)("div", {
              className: em.w,
              children: [
                  (0, l.jsx)(_.$, {
                      size: "sm",
                      variant: o ? "secondary" : "active",
                      icon: el.ScreenArrowIcon,
                      text: r,
                      disabled: t || o || !s,
                      onClick: () => d(!1),
                      fullWidth: !0,
                  }),
                  a && !o
                      ? (0, l.jsx)(J.m, {
                            text: R.intl.string(R.t.wCrzut),
                            children: (0, l.jsx)(Q.K, {
                                variant: "secondary",
                                size: "sm",
                                icon: ei.EyePlusIcon,
                                "aria-label": R.intl.string(R.t.wCrzut),
                                onClick: () => {
                                    d(!0);
                                },
                            }),
                        })
                      : null,
              ],
          });
}
var ep = n(279954);
let eh = (0, A.A)((e) => {
    let {
            activity: t,
            embeddedActivity: n,
            user: i,
            applicationStream: r,
            className: A,
            guildId: _,
            channelId: b,
            source: P,
            buttonVariant: R,
            type: D,
            onAction: U,
        } = e,
        L = (0, u.bG)([S.default], () => {
            let e = S.default.getCurrentUser();
            return (s()(null != e, "UserActivityActions: currentUser cannot be undefined"), e);
        }),
        w = D === j.O.STREAM_PREVIEW || null != r,
        Y = (0, N.A)(t),
        V = Y ? g.A.Direction.HORIZONTAL : g.A.Direction.VERTICAL,
        $ = (0, u.bG)([T.A], () => (null != b ? T.A.getChannel(b) : null), [b]),
        J = null != $ && (0, x.F9)(t),
        W = t?.application_id,
        z = (0, C.A)(W),
        { analyticsLocations: Z } = (0, f.Ay)(h.A.VOICE_CHANNEL_ACTIVITY_ACTIONS),
        Q = V === g.A.Direction.VERTICAL;
    return (0, l.jsx)(g.A, {
        grow: 0,
        align: g.A.Align.STRETCH,
        direction: V,
        wrap: Q ? g.A.Wrap.WRAP : g.A.Wrap.NO_WRAP,
        className: a()(A, ep.jx, Q ? ep.Vd : ep.xM),
        children: (function () {
            if (!(0, y.Ay)(t)) {
                if ((0, E.A)(t))
                    return (0, l.jsx)(O, {
                        platform: p.A.get(F.fg2.XBOX),
                        variant: R,
                        onAction: U,
                        icon: c.XboxNeutralIcon,
                    });
                if (t?.platform === o.y.PLAYSTATION_4 || t?.platform === o.y.PLAYSTATION_5)
                    return (0, l.jsx)(O, {
                        variant: R,
                        platform: p.A.get(F.fg2.PLAYSTATION),
                        onAction: U,
                        icon: d.PlaystationNeutralIcon,
                    });
            }
            if (Y) {
                let e = (0, l.jsx)(et, { activity: t, user: i, guildId: _, channelId: b, source: P, onAction: U }),
                    n = (0, l.jsx)(X, { activity: t, user: i, source: P, onAction: U });
                return (0, l.jsxs)(m.e, { size: "sm", fullWidth: !0, children: [n, e] });
            }
            if ((0, v.Cy)(t)) {
                let e = (0, v.UW)(t);
                return null == e
                    ? null
                    : (0, l.jsx)(k, { guildId: e.guildId, channelId: e.channelId, variant: R, onAction: U });
            }
            return w
                ? (0, l.jsxs)(l.Fragment, {
                      children: [
                          (0, l.jsx)(eA, { isCurrentUser: L.id === i.id, applicationStream: r, onAction: U }),
                          z.length > 0
                              ? (0, l.jsx)(B.A, {
                                    distributorCTAConfigs: z,
                                    applicationId: W ?? "",
                                    analyticsLocations: Z,
                                    buttonVariant: "secondary",
                                })
                              : null,
                      ],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [
                          J && (0, l.jsx)(I.B, { userId: i.id, channel: $, onAction: U }),
                          (0, l.jsx)(en.A, { activity: t, variant: J ? "secondary" : R, onAction: U }),
                          (0, l.jsx)(G.A, {
                              activity: t,
                              embeddedActivity: n,
                              user: i,
                              variant: J ? "secondary" : R,
                              onAction: U,
                          }),
                          (0, l.jsx)(H, { activity: t, user: i, variant: J ? "secondary" : R, onAction: U }),
                          (0, l.jsx)(M, { user: i, activity: t, variant: J ? "secondary" : R, onAction: U }),
                          z.length > 0
                              ? (0, l.jsx)(B.A, {
                                    distributorCTAConfigs: z,
                                    applicationId: W ?? "",
                                    analyticsLocations: Z,
                                    buttonVariant: "secondary",
                                })
                              : null,
                      ],
                  });
        })(),
    });
});
