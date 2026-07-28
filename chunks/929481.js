n.d(t, { Ay: () => Y, gm: () => W, IC: () => K, dG: () => z, Pk: () => Z });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    r = n.n(l);
if (21552 == n.j) var s = n(837381);
var u = n(17928);
if (21552 == n.j) var o = n(3026);
var c = n(97808),
    d = n(778712),
    g = n(866665);
if (21552 == n.j) var h = n(834730);
if (21552 == n.j) var f = n(187322);
var m = n(25639),
    x = n(186369),
    A = n(148719),
    N = n(47167),
    v = n(970812),
    E = n(713654),
    D = n(945096),
    S = n(922301),
    b = n(660184),
    j = n(598104),
    y = n(95035),
    T = n(162199),
    M = n(491394),
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
var I = n(20386),
    _ = n(71393),
    L = n(290863),
    k = n(741961),
    G = n(287809),
    U = n(977997),
    H = n(19575),
    O = n(66933),
    B = n(652215),
    V = n(790782),
    P = n(180961),
    F = n(601551);
let $ = {
    SELECTED: F.J1,
    CONNECTED: F.d4,
    UNREAD_IMPORTANT: F.V2,
    UNREAD_LESS_IMPORTANT: F.modeUnreadLessImportant,
    MUTED: F.F4,
    LOCKED: F.yg,
};
function z(e) {
    e.preventDefault(), e.stopPropagation();
}
let q = H.Ay.getEnableHardwareAcceleration() ? c.Js : c.eu;
function K(e) {
    let { channel: t, size: n = d._3.SIZE_20, className: a } = e;
    return (0, i.jsx)(j.A, { className: a, channel: t, "aria-hidden": !0, size: n });
}
function Z(e) {
    let { channel: t, size: n = d._3.SIZE_20, className: a } = e,
        l = (0, u.bG)([G.default], () => G.default.getUser(t?.recipients[0])),
        r = (0, u.bG)(
            [k.A],
            () => !(null == l || null == t || t.isMultiUserDM()) && null != k.A.getTypingUsers(t?.id)[l?.id],
        ),
        {
            status: s,
            isMobile: o,
            isVR: c,
        } = (0, u.cf)([L.A], () =>
            null == l || null == t || t.isMultiUserDM()
                ? { status: null, isMobile: !1, isVR: !1 }
                : { status: L.A.getStatus(l.id), isMobile: L.A.isMobileOnline(l.id), isVR: L.A.isVROnline(l.id) },
        );
    return (0, i.jsx)(q, {
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
let W = a.memo(function (e) {
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
        if (h) return (0, i.jsx)(w, { channel: a, iconClassName: r()(F.Kk, t), containerClassName: r()(F.zc, n) });
        let N = a.type === B.rbe.GUILD_VOICE,
            D = null;
        if (d && N && !l && o)
            D = (0, i.jsx)(v.A, {
                color: "currentColor",
                className: r()(F.Kk, t),
                animationStyle: f,
                locked: (0, A.A)(a),
            });
        else {
            let e = (function (e, t, n) {
                switch (e.type) {
                    case B.rbe.DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, i.jsx)(Z, { channel: e, className: n });
                        };
                    case B.rbe.GROUP_DM:
                        return function (t) {
                            let { className: n } = t;
                            return (0, i.jsx)(K, { channel: e, className: n });
                        };
                    default:
                        return (0, E.gU)(e, t, n);
                }
            })(a, c, { locked: l, hasActiveThreads: s });
            if (null == e) return null;
            D = (0, i.jsx)(e, { color: "currentColor", className: r()(F.Kk, t) });
        }
        let S = (0, E.Bq)(a, c, l, s),
            b = `${S} icon`;
        return (0, i.jsx)(g.m, {
            text: S,
            delay: 500,
            children: (0, i.jsx)("div", { role: "img", "aria-label": b, className: r()(F.zc, n), children: D }),
        });
    }),
    Y =
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
                          hasActiveThreads: A,
                          onClick: v,
                          onMouseDown: E,
                          onMouseUp: D,
                          onContextMenu: S,
                          connectDragPreview: b,
                          className: j,
                          iconClassName: p,
                          subtitle: C,
                          subtitleColor: R,
                          channel: { type: w },
                          onMouseEnter: _,
                          onMouseLeave: L,
                          "aria-label": k,
                          children: G,
                          guild: H,
                          channelTypeOverride: q,
                          forceInteractable: K,
                          mentionCount: Z,
                          resolvedUnreadSetting: Y,
                          isFavoriteSuggestion: X,
                          hasActiveEvent: Q = !1,
                          transitionExtras: ee,
                      } = e,
                      et = Y === V.e.ALL_MESSAGES || (null != Z && Z > 0),
                      en = (0, u.bG)([U.A], () => Object.values(U.A.getVoiceStatesForChannel(n.id)).length > 0, [n.id]),
                      ei = (0, M.Bp)(n, "ChannelItem"),
                      { role: ea, ...el } = (0, s.rm)(n.id),
                      er = a.useRef(null),
                      es = a.useRef(null),
                      eu = (0, T.A)(n);
                  null != eu && O.A.getConfig({ guildId: eu, location: "channel_item" });
                  let eo = B.BVt.CHANNEL(eu, n.id),
                      ec = (0, N.Ay)(n),
                      ed = n.isGuildVocal(),
                      eg = null != v || null != D || null != E || K,
                      eh = (0, i.jsx)("div", {
                          className: r()({ [F.ow]: X }),
                          ref: es,
                          children: (0, i.jsxs)(y.A, {
                              role: ed && !g ? "button" : "link",
                              href: ed ? void 0 : eo,
                              target: "_blank",
                              ref: er,
                              className: F.nf,
                              onClick: () => v?.(n),
                              transitionExtras: ee,
                              ...el,
                              "aria-label": k,
                              "aria-current": d ? "page" : void 0,
                              focusProps: { enabled: !1 },
                              children: [
                                  (0, i.jsxs)("div", {
                                      className: F.Y5,
                                      children: [
                                          (0, i.jsx)(W, {
                                              className: p,
                                              channel: n,
                                              guild: H,
                                              hasUsersInVoiceChannel: en,
                                              hasActiveThreads: A,
                                              locked: x,
                                          }),
                                          (0, i.jsx)(o.A, {
                                              className: r()(F.UU, { [F.NW]: Q }),
                                              "aria-hidden": !0,
                                              children: (0, i.jsx)(J, {
                                                  textVariant: "text-md/medium",
                                                  channel: n,
                                                  name: null != l ? l : ec,
                                              }),
                                          }),
                                          ei ? (0, i.jsx)(I.A, { channel: n }) : null,
                                          a.Children.count(G) > 0
                                              ? (0, i.jsx)("div", {
                                                    onClick: z,
                                                    onKeyPress: z,
                                                    className: F.Y_,
                                                    children: G,
                                                })
                                              : null,
                                      ],
                                  }),
                                  null != C
                                      ? (0, i.jsx)("div", {
                                            className: F.MA,
                                            children: (0, i.jsx)(h.E, {
                                                color: R ?? "text-muted",
                                                variant: "text-xs/medium",
                                                className: F.VA,
                                                children: C,
                                            }),
                                        })
                                      : null,
                              ],
                          }),
                      });
                  return (0, i.jsx)(f.vN, {
                      focusTarget: er,
                      ringTarget: es,
                      offset: { top: 2, bottom: 2, right: 4 },
                      children: (0, i.jsxs)("div", {
                          ref: t,
                          className: r()(
                              j,
                              eg ? F.iE : F.IA,
                              (function () {
                                  if (d) return r()(P.rM, $.SELECTED);
                                  if (g) return r()(P.rM, $.CONNECTED);
                                  if (x) return $.LOCKED;
                                  if (c) return $.MUTED;
                                  if (m)
                                      if (et) return $.UNREAD_IMPORTANT;
                                      else return $.UNREAD_LESS_IMPORTANT;
                                  return null;
                              })(),
                              (function (e) {
                                  switch (e) {
                                      case B.rbe.GUILD_STAGE_VOICE:
                                      case B.rbe.GUILD_VOICE:
                                          return F.typeVoice;
                                      case B.rbe.ANNOUNCEMENT_THREAD:
                                      case B.rbe.PUBLIC_THREAD:
                                      case B.rbe.PRIVATE_THREAD:
                                          return F.ZS;
                                      case B.rbe.GUILD_ANNOUNCEMENT:
                                      case B.rbe.GUILD_TEXT:
                                      case B.rbe.GUILD_STORE:
                                      case B.rbe.GUILD_FORUM:
                                      case B.rbe.GUILD_MEDIA:
                                      default:
                                          return F.typeDefault;
                                  }
                              })(q ?? w),
                          ),
                          onMouseUp: (e) => D?.(e, n),
                          onMouseDown: (e) => E?.(e, n),
                          onContextMenu: (e) => S?.(e, n),
                          onMouseEnter: _,
                          onMouseLeave: L,
                          children: [
                              c || !m ? null : (0, i.jsx)("div", { className: r()(F.gy, et ? F.WS : void 0) }),
                              b?.(eh) ?? eh,
                          ],
                      }),
                  });
              })
            : null;
function J(e) {
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
