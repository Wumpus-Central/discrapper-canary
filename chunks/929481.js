n.d(t, { Ay: () => W, gm: () => Z, IC: () => q, dG: () => $, Pk: () => K });
var i = n(477900),
    a = n(582128),
    l = n(503698),
    r = n.n(l);
if (21552 == n.j) var s = n(837381);
var u = n(17928);
if (21552 == n.j) var o = n(3026);
var c = n(97808),
    d = n(778712),
    g = n(866665);
if (21552 == n.j) var h = n(834730);
if (21552 == n.j) var f = n(259678);
var m = n(25639),
    x = n(186369),
    N = n(148719),
    A = n(47167),
    v = n(970812),
    E = n(713654),
    D = n(945096),
    S = n(922301),
    b = n(660184),
    j = n(598104),
    y = n(95035),
    T = n(162199),
    M = n(683180),
    p = n(323384),
    C = n(818085),
    R = n(375708);
function w(e) {
    let { iconClassName: t, containerClassName: n } = e;
    return (0, i.jsx)(g.m, {
        text: R.intl.string(C.default.yLw6Hg),
        delay: 500,
        children: (0, i.jsx)("div", {
            role: "img",
            "aria-label": R.intl.string(C.default.yg36OD),
            className: n,
            children: (0, i.jsx)(p.k, { color: "currentColor", className: t }),
        }),
    });
}
var _ = n(71393),
    I = n(290863),
    L = n(741961),
    k = n(287809),
    G = n(977997),
    U = n(19575),
    H = n(66933),
    O = n(652215),
    V = n(790782),
    B = n(180961),
    P = n(601551);
let F = {
    SELECTED: P.J1,
    CONNECTED: P.d4,
    UNREAD_IMPORTANT: P.V2,
    UNREAD_LESS_IMPORTANT: P.modeUnreadLessImportant,
    MUTED: P.F4,
    LOCKED: P.yg,
};
function $(e) {
    e.preventDefault(), e.stopPropagation();
}
let z = U.Ay.getEnableHardwareAcceleration() ? c.Js : c.eu;
function q(e) {
    let { channel: t, size: n = d._3.SIZE_20, className: a } = e;
    return (0, i.jsx)(j.A, { className: a, channel: t, "aria-hidden": !0, size: n });
}
function K(e) {
    let { channel: t, size: n = d._3.SIZE_20, className: a } = e,
        l = (0, u.bG)([k.default], () => k.default.getUser(t?.recipients[0])),
        r = (0, u.bG)(
            [L.A],
            () => !(null == l || null == t || t.isMultiUserDM()) && null != L.A.getTypingUsers(t?.id)[l?.id],
        ),
        {
            status: s,
            isMobile: o,
            isVR: c,
        } = (0, u.cf)([I.A], () =>
            null == l || null == t || t.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: I.A.getStatus(l.id), isMobile: I.A.isMobileOnline(l.id), isVR: I.A.isVROnline(l.id) },
        );
    return (0, i.jsx)(z, {
        className: a,
        size: n,
        src: l?.getAvatarURL(void 0, 40),
        status: s,
        isMobile: o,
        isVR: c,
        isTyping: r,
        "aria-label": l?.username,
        statusTooltip: !0,
    });
}
let Z = a.memo(function (e) {
        let {
                className: t,
                containerClassName: n,
                channel: a,
                locked: l,
                hasActiveThreads: s,
                hasUsersInVoiceChannel: o,
            } = e,
            c = (0, u.bG)([_.A], () => _.A.getGuild(a.guild_id), [a.guild_id]),
            { enableWaveformIcon: d } = (0, x.b)(a.guild_id, "ChannelItemIcon"),
            h = (0, M.Bp)(a, "ChannelItemIcon"),
            f = (0, u.bG)([m.A], () => m.A.getAnimationStyle(a.id), [a.id]);
        if (h) return (0, i.jsx)(w, { channel: a, iconClassName: r()(P.Kk, t), containerClassName: r()(P.zc, n) });
        let A = a.type === O.rbe.GUILD_VOICE,
            D = null;
        if (d && A && !l && o)
            D = (0, i.jsx)(v.A, {
                color: "currentColor",
                className: r()(P.Kk, t),
                animationStyle: f,
                locked: (0, N.A)(a),
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case O.rbe.DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, i.jsx)(K, { channel: e, className: n });
                        };
                    case O.rbe.GROUP_DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, i.jsx)(q, { channel: e, className: n });
                        };
                    default:
                        return (0, E.gU)(e, t, n);
                }
            })(a, c, { locked: l, hasActiveThreads: s });
            if (null == e) return null;
            D = (0, i.jsx)(e, { color: "currentColor", className: r()(P.Kk, t) });
        }
        let S = (0, E.Bq)(a, c, l, s),
            b = `${S} icon`;
        return (0, i.jsx)(g.m, {
            text: S,
            delay: 500,
            children: (0, i.jsx)("div", { role: "img", "aria-label": b, className: r()(P.zc, n), children: D }),
        });
    }),
    W =
        21552 == n.j
            ? a.forwardRef(function (e, t) {
                  let {
                          channel: n,
                          name: l,
                          muted: c,
                          selected: d,
                          connected: g,
                          unread: m,
                          locked: x,
                          hasActiveThreads: N,
                          onClick: v,
                          onMouseDown: E,
                          onMouseUp: D,
                          onContextMenu: S,
                          connectDragPreview: b,
                          className: j,
                          iconClassName: M,
                          subtitle: p,
                          subtitleColor: C,
                          channel: { type: R },
                          onMouseEnter: w,
                          onMouseLeave: _,
                          "aria-label": I,
                          children: L,
                          guild: k,
                          channelTypeOverride: U,
                          forceInteractable: z,
                          mentionCount: q,
                          resolvedUnreadSetting: K,
                          isFavoriteSuggestion: W,
                          hasActiveEvent: J = !1,
                          transitionExtras: X,
                      } = e,
                      Q = K === V.e.ALL_MESSAGES || (null != q && q > 0),
                      ee = (0, u.bG)([G.A], () => Object.values(G.A.getVoiceStatesForChannel(n.id)).length > 0, [n.id]),
                      { role: et, ...en } = (0, s.rm)(n.id),
                      ei = a.useRef(null),
                      ea = a.useRef(null),
                      el = (0, T.A)(n);
                  null != el && H.A.getConfig({ guildId: el, location: "channel_item" });
                  let er = O.BVt.CHANNEL(el, n.id),
                      es = (0, A.Ay)(n),
                      eu = n.isGuildVocal(),
                      eo = null != v || null != D || null != E || z,
                      ec = (0, i.jsx)("div", {
                          className: r()({ [P.ow]: W }),
                          ref: ea,
                          children: (0, i.jsxs)(y.A, {
                              role: eu && !g ? "button" : "link",
                              href: eu ? void 0 : er,
                              target: "_blank",
                              ref: ei,
                              className: P.nf,
                              onClick: () => v?.(n),
                              transitionExtras: X,
                              ...en,
                              "aria-label": I,
                              "aria-current": d ? "page" : void 0,
                              focusProps: { enabled: !1 },
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: P.Y5,
                                      children: [
                                          (0, i.jsx)(Z, {
                                              className: M,
                                              channel: n,
                                              guild: k,
                                              hasUsersInVoiceChannel: ee,
                                              hasActiveThreads: N,
                                              locked: x,
                                          }),
                                          (0, i.jsx)(o.A, {
                                              className: r()(P.UU, { [P.NW]: J }),
                                              "aria-hidden": !0,
                                              children: (0, i.jsx)(Y, {
                                                  textVariant: "text-md/medium",
                                                  channel: n,
                                                  name: null != l ? l : es,
                                              }),
                                          }),
                                          a.Children.count(L) > 0
                                              ? (0, i.jsx)("div", {
                                                    onClick: $,
                                                    onKeyPress: $,
                                                    className: P.Y_,
                                                    children: L,
                                                })
                                              : null,
                                      ],
                                  }),
                                  null != p
                                      ? (0, i.jsx)("div", {
                                            className: P.MA,
                                            children: (0, i.jsx)(h.E, {
                                                color: C ?? "text-muted",
                                                variant: "text-xs/medium",
                                                className: P.VA,
                                                children: p,
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                      });
                  return (0, i.jsx)(f.vN, {
                      focusTarget: ei,
                      ringTarget: ea,
                      offset: { top: 2, bottom: 2, right: 4 },
                      children: (0, i.jsxs)("div", {
                          ref: t,
                          className: r()(
                              j,
                              eo ? P.iE : P.IA,
                              (function () {
                                  if (d) return r()(B.rM, F.SELECTED);
                                  if (g) return r()(B.rM, F.CONNECTED);
                                  if (x) return F.LOCKED;
                                  if (c) return F.MUTED;
                                  if (m)
                                      if (Q) return F.UNREAD_IMPORTANT;
                                      else return F.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case O.rbe.GUILD_STAGE_VOICE:
                                      case O.rbe.GUILD_VOICE:
                                          return P.typeVoice;
                                      case O.rbe.ANNOUNCEMENT_THREAD:
                                      case O.rbe.PUBLIC_THREAD:
                                      case O.rbe.PRIVATE_THREAD:
                                          return P.ZS;
                                      case O.rbe.GUILD_ANNOUNCEMENT:
                                      case O.rbe.GUILD_TEXT:
                                      case O.rbe.GUILD_STORE:
                                      case O.rbe.GUILD_FORUM:
                                      case O.rbe.GUILD_MEDIA:
                                      default:
                                          return P.typeDefault;
                                  }
                              })(U ?? R),
                          ),
                          onMouseUp: (e) => D?.(e, n),
                          onMouseDown: (e) => E?.(e, n),
                          onContextMenu: (e) => S?.(e, n),
                          onMouseEnter: w,
                          onMouseLeave: _,
                          children: [
                              c || !m ? null : (0, i.jsx)("div", { className: r()(P.gy, Q ? P.WS : void 0) }),
                              b?.(ec) ?? ec,
                          ],
                      }),
                  });
              })
            : null;
function Y(e) {
    let { channel: t, name: n, textVariant: l } = e,
        r = t.isPrivate() && 1 === (t.rawRecipients ?? []).length,
        s = t.rawRecipients?.[0]?.display_name_styles,
        u = a.useMemo(() => (r ? (0, D.mT)(s) : null), [r, s]);
    return null != u
        ? (0, i.jsx)(b.A, {
              userName: n,
              displayNameStyles: u,
              effectDisplayType: S.G.PLAIN,
              boldFontOpacity: 0.9,
              textVariant: l,
          })
        : (0, i.jsx)(h.E, { variant: l, tag: "span", color: "none", children: n });
}
