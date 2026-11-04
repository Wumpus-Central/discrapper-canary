l.d(t, { A: () => ep });
var n = l(477900);
l(582128);
var i = l(503698),
    a = l.n(i),
    s = l(284009),
    r = l.n(s),
    o = l(570138),
    c = l(855986),
    u = l(802516),
    d = l(22363),
    m = l(825484),
    A = l(707606),
    h = l(573648),
    p = l(793574),
    y = l(688810),
    x = l(235986),
    g = l(25528),
    f = l(655724),
    j = l(82149),
    v = l(734057),
    N = l(287809),
    T = l(874546),
    I = l(90644),
    S = l(61330),
    C = l(73963),
    b = l(663249),
    P = l(821609),
    L = l(80320),
    _ = l(417869),
    E = l(792996);
function O(e) {
    let { platform: t, variant: l = "secondary", size: i = "sm", onAction: a, icon: s, ...r } = e;
    return (0, c.bG)([_.A], () => _.A.getAccounts().some((e) => e.type === t.type))
        ? null
        : (0, n.jsx)(P.$, {
              onClick: function () {
                  (a?.(), (0, L.A)({ platformType: t.type, location: "Activity Action" }));
              },
              variant: l,
              size: i,
              icon: s,
              text: E.intl.format(E.t.XWSHTb, { platform: t.name }),
              fullWidth: !0,
              ...r,
          });
}
var G = l(729937),
    k = l(889558),
    z = l(998218);
function M(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: a, ...s } = e;
    return t?.buttons == null || t.buttons.length < 1
        ? null
        : (0, n.jsx)(n.Fragment, {
              children: t.buttons.map((e, r) =>
                  (0, n.jsx)(
                      P.$,
                      {
                          text: e,
                          variant: i,
                          size: "sm",
                          fullWidth: !0,
                          onClick: () => {
                              (a?.(),
                                  (async function (e, t, l) {
                                      try {
                                          let n = await (0, G.yb)(e, t);
                                          if (n.button_urls.length <= l) return;
                                          let i = n.button_urls[l];
                                          if ("string" != typeof i) return;
                                          let a = z.A.safeParseWithQuery(i);
                                          if (null == a || null == a.protocol || null == a.hostname) return;
                                          (0, k.h)({ href: z.A.format(a), trusted: !1 });
                                      } catch (e) {}
                                  })(t, l.id, r));
                          },
                          ...s,
                      },
                      `customButton-${r}`,
                  ),
              ),
          });
}
var W = l(284525),
    U = l(129095),
    D = l(977997);
let R = function (e) {
    let { guildId: t, channelId: l, variant: i = "active", size: a = "sm", onAction: s, ...r } = e,
        o = (0, c.bG)([D.A], () => D.A.isInChannel(l), [l]);
    return (0, n.jsx)(P.$, {
        variant: i,
        size: a,
        text: E.intl.string(E.t.ZYO5OK),
        disabled: o,
        onClick: function () {
            (s?.(), U.CH(t, l));
        },
        fullWidth: !0,
        ...r,
    });
};
var w = l(626584),
    $ = l(55730),
    V = l(652215);
function Y(e) {
    let { activity: t, user: l, variant: i = "secondary", onAction: a, ...s } = e;
    return (0, $.A)(t, V.jUm.INSTANCE)
        ? (0, n.jsx)(P.$, {
              text: E.intl.string(E.t.vwl1PK),
              variant: i,
              size: "sm",
              onClick: function () {
                  (a?.(), new w.A("UserActivityActions").log("notify", l.id, t));
              },
              fullWidth: !0,
              ...s,
          })
        : null;
}
var H = l(607781),
    B = l(866665),
    F = l(109487),
    K = l(353411);
function X(e) {
    let {
            activity: t,
            user: l,
            source: i,
            size: a = "sm",
            variant: s = "secondary",
            fullWidth: r,
            onAction: o,
            ...c
        } = e,
        { label: u, tooltip: d, loading: m, disabled: A, onClick: h } = (0, K._B)(t, l, i);
    return (0, n.jsx)(B.m, {
        text: d,
        children: (0, n.jsx)(P.$, {
            variant: s,
            size: a,
            icon: F.L,
            text: u,
            fullWidth: r,
            onClick: function () {
                (o?.(), h());
            },
            disabled: A,
            loading: m,
            ...c,
        }),
    });
}
function Q(e) {
    let { activity: t, user: l, source: i, onAction: a } = e;
    return null != t && (0, $.A)(t, V.jUm.PLAY) && (0, I.A)(t)
        ? (0, n.jsx)(X, { fullWidth: !0, activity: t, user: l, source: i, onAction: a })
        : null;
}
var J = l(408278),
    q = l(835723),
    Z = l(562153);
function ee(e) {
    let {
            activity: t,
            user: l,
            channelId: i,
            guildId: a,
            source: s,
            size: r = "sm",
            variant: o = "secondary",
            onAction: c,
            ...u
        } = e,
        { tooltip: d, loading: m, disabled: A, onClick: h } = (0, K.J$)(t, l, s, Z.Ay.getNickname(a, i, l));
    return (0, n.jsx)(B.m, {
        text: d,
        children: (0, n.jsx)(J.K, {
            icon: q.J,
            size: r,
            variant: o,
            onClick: function () {
                (c?.(), h());
            },
            disabled: A,
            loading: m,
            "aria-label": d ?? t.name,
            ...u,
        }),
    });
}
function et(e) {
    let { activity: t, user: l, guildId: i, channelId: a, source: s, onAction: r } = e;
    return null != t && (0, $.A)(t, V.jUm.SYNC) && (0, I.A)(t)
        ? (0, n.jsx)(ee, {
              size: "sm",
              variant: "secondary",
              user: l,
              activity: t,
              guildId: i ?? void 0,
              channelId: a,
              source: s,
              onAction: r,
          })
        : null;
}
var el = l(648246),
    en = l(183623),
    ei = l(622631),
    ea = l(136969),
    es = l(597798),
    er = l(401843),
    eo = l(711589),
    ec = l(267102),
    eu = l(616356),
    ed = l(188567),
    em = l(408399);
function eA(e) {
    let { isCurrentUser: t, applicationStream: l, onAction: i } = e,
        a = (0, c.bG)(
            [eu.A],
            () =>
                null != l &&
                eu.A.getAllActiveStreamsForChannel(l.channelId).filter((e) => {
                    let { ownerId: t } = e;
                    return t !== l.ownerId;
                }).length > 0,
        ),
        { actionString: s, canWatch: r, isWatching: o } = (0, eo.K)(l),
        u = (0, ec.aL)();
    function d(e) {
        null != l &&
            (i?.(),
            es.default.selectVoiceChannel(l.channelId),
            o || (0, er.Nl)(l, { forceMultiple: e }),
            u.dispatch(V.jej.POPOUT_CLOSE),
            ed._.dispatch(V.jej.MODAL_CLOSE),
            ea.A.popAll());
    }
    return null == l
        ? null
        : (0, n.jsxs)("div", {
              className: em.w,
              children: [
                  (0, n.jsx)(P.$, {
                      size: "sm",
                      variant: o ? "secondary" : "active",
                      icon: en.F,
                      text: s,
                      disabled: t || o || !r,
                      onClick: () => d(!1),
                      fullWidth: !0,
                  }),
                  a && !o
                      ? (0, n.jsx)(B.m, {
                            text: E.intl.string(E.t.wCrzut),
                            children: (0, n.jsx)(J.K, {
                                variant: "secondary",
                                size: "sm",
                                icon: ei.v,
                                "aria-label": E.intl.string(E.t.wCrzut),
                                onClick: () => {
                                    d(!0);
                                },
                            }),
                        })
                      : null,
              ],
          });
}
var eh = l(279954);
let ep = (0, A.A)((e) => {
    let {
            activity: t,
            embeddedActivity: l,
            user: i,
            applicationStream: s,
            className: A,
            guildId: P,
            channelId: L,
            source: _,
            buttonVariant: E,
            type: G,
            onAction: k,
        } = e,
        z = (0, c.bG)([N.default], () => {
            let e = N.default.getCurrentUser();
            return (r()(null != e, "UserActivityActions: currentUser cannot be undefined"), e);
        }),
        U = G === b.O.STREAM_PREVIEW || null != s,
        D = (0, I.A)(t),
        w = D ? x.A.Direction.HORIZONTAL : x.A.Direction.VERTICAL,
        $ = (0, c.bG)([v.A], () => (null != L ? v.A.getChannel(L) : null), [L]),
        B = null != $ && (0, g.F9)(t),
        F = t?.application_id,
        K = (0, C.A)(F),
        { analyticsLocations: X } = (0, y.Ay)(p.A.VOICE_CHANNEL_ACTIVITY_ACTIONS),
        J = w === x.A.Direction.VERTICAL;
    return (0, n.jsx)(x.A, {
        grow: 0,
        align: x.A.Align.STRETCH,
        direction: w,
        wrap: J ? x.A.Wrap.WRAP : x.A.Wrap.NO_WRAP,
        className: a()(A, eh.jx, J ? eh.Vd : eh.xM),
        children: (function () {
            if (!(0, T.Ay)(t)) {
                if ((0, S.A)(t))
                    return (0, n.jsx)(O, { platform: h.A.get(V.fg2.XBOX), variant: E, onAction: k, icon: u.Y });
                if (t?.platform === o.y.PLAYSTATION_4 || t?.platform === o.y.PLAYSTATION_5)
                    return (0, n.jsx)(O, { variant: E, platform: h.A.get(V.fg2.PLAYSTATION), onAction: k, icon: d.X });
            }
            if (D) {
                let e = (0, n.jsx)(et, { activity: t, user: i, guildId: P, channelId: L, source: _, onAction: k }),
                    l = (0, n.jsx)(Q, { activity: t, user: i, source: _, onAction: k });
                return (0, n.jsxs)(m.e, { size: "sm", fullWidth: !0, children: [l, e] });
            }
            if ((0, j.Cy)(t)) {
                let e = (0, j.UW)(t);
                return null == e
                    ? null
                    : (0, n.jsx)(R, { guildId: e.guildId, channelId: e.channelId, variant: E, onAction: k });
            }
            return U
                ? (0, n.jsxs)(n.Fragment, {
                      children: [
                          (0, n.jsx)(eA, { isCurrentUser: z.id === i.id, applicationStream: s, onAction: k }),
                          K.length > 0
                              ? (0, n.jsx)(H.A, {
                                    distributorCTAConfigs: K,
                                    applicationId: F ?? "",
                                    analyticsLocations: X,
                                    buttonVariant: "secondary",
                                })
                              : null,
                      ],
                  })
                : (0, n.jsxs)(n.Fragment, {
                      children: [
                          B && (0, n.jsx)(f.B, { userId: i.id, channel: $, onAction: k }),
                          (0, n.jsx)(el.A, { activity: t, variant: B ? "secondary" : E, onAction: k }),
                          (0, n.jsx)(W.A, {
                              activity: t,
                              embeddedActivity: l,
                              user: i,
                              variant: B ? "secondary" : E,
                              onAction: k,
                          }),
                          (0, n.jsx)(Y, { activity: t, user: i, variant: B ? "secondary" : E, onAction: k }),
                          (0, n.jsx)(M, { user: i, activity: t, variant: B ? "secondary" : E, onAction: k }),
                          K.length > 0
                              ? (0, n.jsx)(H.A, {
                                    distributorCTAConfigs: K,
                                    applicationId: F ?? "",
                                    analyticsLocations: X,
                                    buttonVariant: "secondary",
                                })
                              : null,
                      ],
                  });
        })(),
    });
});
