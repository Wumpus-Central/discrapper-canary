n.d(e, { w: () => z, A: () => F });
var a,
    s = n(477900),
    i = n(582128),
    r = n(503698),
    t = n.n(r),
    u = n(607399),
    o = n(17928),
    d = n(473193),
    c = n(36075),
    m = n(939249),
    h = n(545442),
    p = n(775602),
    A = n(793574),
    x = n(688810),
    g = n(922301),
    v = n(660184),
    N = n(73392),
    S = n(386467),
    j = n(534400),
    G = n(176201),
    I = n(676608),
    y = n(342296),
    f = n(317525),
    C = n(486020),
    b = n(834730),
    E = n(687966),
    R = n(429913),
    k = n(35601);
let w = i.memo(function (l) {
    let { message: e, channel: n } = l,
        a = n?.linkedLobby,
        i = (0, R.h)(a?.application_id),
        r = e.additionalName;
    if (null == a || null == r || "" === r) return null;
    let t = i?.icon != null ? C.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }) : void 0;
    return (0, s.jsx)("span", {
        className: k.kL,
        children: (0, s.jsxs)(b.E, {
            tag: "span",
            variant: "text-xs/semibold",
            color: "text-default",
            lineClamp: 1,
            className: k.Qq,
            children: [
                null != t
                    ? (0, s.jsx)("img", { src: t, alt: "", width: 16, height: 16, className: k.qS })
                    : (0, s.jsx)(E.GameControllerIcon, { size: "custom", width: 16, height: 16, className: k.qS }),
                (0, s.jsx)("span", { className: k.em, children: r }),
            ],
        }),
    });
});
var _ = n(109054),
    M = n(560936),
    D = n(743981),
    T = n(318626),
    z = (((a = {})[(a.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (a[(a.BADGES = 1)] = "BADGES"), a);
function F(l) {
    let {
            author: e,
            message: n,
            channel: a,
            userOverride: r,
            compact: b = !1,
            withMentionPrefix: E = !1,
            showPopout: R = !1,
            hideGuildTag: k = !1,
            disableGuildTagProfile: z = !1,
            hideSystemTag: F = !1,
            className: P,
            onClick: q,
            onContextMenu: L,
            onPopoutRequestClose: U,
            renderPopout: B,
            decorations: O,
            previewGuildId: W,
            subscribeToGroupId: Y,
        } = l,
        Z = i.useRef(null),
        H = i.useContext(S.A),
        Q = a?.guild_id ?? H,
        { analyticsLocations: V } = (0, x.Ay)(A.A.USERNAME),
        J = E ? "@" : "",
        { nick: K, colorString: X, colorStrings: $, colorRoleName: ll, displayNameStyles: le } = e,
        ln = (0, o.bG)([p.Ay], () => p.Ay.roleStyle),
        la = "username" === ln,
        ls = (0, N.a)({ displayNameStyles: le }),
        li = (0, o.bG)([f.A], () =>
            null == e.guildId || null == e.colorRoleId ? null : f.A.getRole(e.guildId, e.colorRoleId),
        ),
        lr = (0, I.jV)(W ?? Q, li),
        lt = (0, _.A)(n),
        lu = i.useContext(d.C),
        lo = lu?.animate || R,
        ld = lr && (0, G.kz)(e),
        lc = la && ld,
        lm = a?.isPrivate() && null != le;
    (0, M.A)({ shouldSubscribe: lm || lc, subscribeToGroupId: Y, authorId: n.author.id });
    let { gradientStyle: lh, gradientClassname: lp } = (0, c.v5)({
            colorStrings: $,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: lo,
        }),
        lA = (0, c.CR)(J + K),
        lx = {
            className: t()(T.oF, ls, { [lp]: lc, [T.IW]: "username" === ln && null != X }),
            style: (function () {
                if (la)
                    return lc && null != $
                        ? { ...lh, textDecorationColor: $?.primaryColor ?? void 0 }
                        : null != X
                          ? { color: X }
                          : void 0;
            })(),
            onClick: q,
            onContextMenu: L,
            children: lm
                ? (0, s.jsx)(v.A, {
                      userName: lA,
                      displayNameStyles: le,
                      effectDisplayType: lo ? g.G.ANIMATED : g.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != q,
                      textClassName: T.Mu,
                  })
                : lA,
            "data-text": J + K,
            "data-username-has-gradient": !!ld || void 0,
        },
        lg = i.useMemo(
            () =>
                k
                    ? null
                    : (0, s.jsx)(j.Cw, {
                          primaryGuild: e.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: Q,
                          className: T.s4,
                          badgeSize: b ? D.Sl.SIZE_12 : void 0,
                          disableGuildProfile: z,
                      }),
            [b, e.primaryGuild, Q, n.author.id, k, z],
        ),
        lv = r ?? n.author,
        lN =
            null != B && null != R
                ? (0, s.jsx)(y.A, {
                      targetElementRef: Z,
                      user: lv,
                      guildId: Q,
                      channelId: n.channel_id,
                      renderPopout: B,
                      shouldShow: R,
                      shouldPreload: lt,
                      position: u.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != e.guildMemberAvatar && null != Q
                              ? (0, C.s7)({ guildId: Q, userId: lv.id, avatar: e.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: U,
                      clickTrap: R,
                      children: (l) => {
                          let { onClick: e, ...n } = l;
                          return (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(m.D, {
                                      tag: "span",
                                      innerRef: Z,
                                      ...n,
                                      ...lx,
                                      className: t()(lx.className, T.vk, P),
                                  }),
                                  lg,
                              ],
                          });
                      },
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [(0, s.jsx)(m.D, { ...lx, className: t()(lx.className, P) }), lg],
                  }),
        lS = null != O ? O[0] : null,
        lj = null != O ? O[1] : null;
    return (0, s.jsxs)(x.f5, {
        value: V,
        children: [
            null != lS && !F && b ? (0, s.jsxs)(s.Fragment, { children: [" ", lS, " "] }) : null,
            "dot" === ln
                ? (0, s.jsx)(h.W, { color: X, colors: ld ? $ : null, name: ll, className: T.m4, hoverOverride: lo })
                : null,
            lN,
            (0, s.jsx)(w, { message: n, channel: a }),
            null != lj ? lj : null,
            null == lS || F || b ? null : lS,
        ],
    });
}
