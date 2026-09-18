n.d(l, { w: () => z, A: () => F });
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
    g = n(688810),
    x = n(922301),
    v = n(660184),
    N = n(73392),
    S = n(386467),
    j = n(534400),
    y = n(176201),
    G = n(676608),
    I = n(342296),
    f = n(317525),
    C = n(486020),
    b = n(834730),
    R = n(687966),
    E = n(429913),
    M = n(35601);
let w = i.memo(function (e) {
    let { message: l, channel: n } = e,
        a = n?.linkedLobby,
        i = (0, E.h)(a?.application_id),
        r = l.additionalName;
    if (null == a || null == r || "" === r) return null;
    let t = i?.icon != null ? C.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }) : void 0;
    return (0, s.jsx)("span", {
        className: M.kL,
        children: (0, s.jsxs)(b.E, {
            tag: "span",
            variant: "text-xs/semibold",
            color: "text-default",
            lineClamp: 1,
            className: M.Qq,
            children: [
                null != t
                    ? (0, s.jsx)("img", { src: t, alt: "", width: 16, height: 16, className: M.qS })
                    : (0, s.jsx)(R.GameControllerIcon, { size: "custom", width: 16, height: 16, className: M.qS }),
                (0, s.jsx)("span", { className: M.em, children: r }),
            ],
        }),
    });
});
var _ = n(109054),
    k = n(560936),
    T = n(743981),
    D = n(318626),
    z = (((a = {})[(a.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (a[(a.BADGES = 1)] = "BADGES"), a);
function F(e) {
    let {
            author: l,
            message: n,
            channel: a,
            userOverride: r,
            compact: b = !1,
            withMentionPrefix: R = !1,
            showPopout: E = !1,
            hideGuildTag: M = !1,
            disableGuildTagProfile: z = !1,
            hideSystemTag: F = !1,
            className: P,
            onClick: q,
            onContextMenu: L,
            onPopoutRequestClose: U,
            renderPopout: O,
            decorations: Y,
            previewGuildId: B,
            subscribeToGroupId: W,
        } = e,
        Z = i.useRef(null),
        H = i.useContext(S.A),
        Q = a?.guild_id ?? H,
        { analyticsLocations: V } = (0, g.Ay)(A.A.USERNAME),
        J = R ? "@" : "",
        { nick: K, colorString: X, colorStrings: $, colorRoleName: ee, displayNameStyles: el } = l,
        en = (0, o.bG)([p.Ay], () => p.Ay.roleStyle),
        ea = "username" === en,
        es = (0, N.a)({ displayNameStyles: el }),
        ei = (0, o.bG)([f.A], () =>
            null == l.guildId || null == l.colorRoleId ? null : f.A.getRole(l.guildId, l.colorRoleId),
        ),
        er = (0, G.jV)(B ?? Q, ei),
        et = (0, _.A)(n),
        eu = i.useContext(d.C),
        eo = eu?.animate || E,
        ed = er && (0, y.kz)(l),
        ec = ea && ed,
        em = a?.isPrivate() && null != el;
    (0, k.A)({ shouldSubscribe: em || ec, subscribeToGroupId: W, authorId: n.author.id });
    let { gradientStyle: eh, gradientClassname: ep } = (0, c.v5)({
            colorStrings: $,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: eo,
        }),
        eA = (0, c.CR)(J + K),
        eg = {
            className: t()(D.oF, es, { [ep]: ec, [D.IW]: "username" === en && null != X }),
            style: (function () {
                if (ea)
                    return ec && null != $
                        ? { ...eh, textDecorationColor: $?.primaryColor ?? void 0 }
                        : null != X
                          ? { color: X }
                          : void 0;
            })(),
            onClick: q,
            onContextMenu: L,
            children: em
                ? (0, s.jsx)(v.A, {
                      userName: eA,
                      displayNameStyles: el,
                      effectDisplayType: eo ? x.G.ANIMATED : x.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != q,
                      textClassName: D.Mu,
                  })
                : eA,
            "data-text": J + K,
            "data-username-has-gradient": !!ed || void 0,
        },
        ex = i.useMemo(
            () =>
                M
                    ? null
                    : (0, s.jsx)(j.Cw, {
                          primaryGuild: l.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: Q,
                          className: D.s4,
                          badgeSize: b ? T.Sl.SIZE_12 : void 0,
                          disableGuildProfile: z,
                      }),
            [b, l.primaryGuild, Q, n.author.id, M, z],
        ),
        ev = r ?? n.author,
        eN =
            null != O && null != E
                ? (0, s.jsx)(I.A, {
                      targetElementRef: Z,
                      user: ev,
                      guildId: Q,
                      channelId: n.channel_id,
                      renderPopout: O,
                      shouldShow: E,
                      shouldPreload: et,
                      position: u.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != l.guildMemberAvatar && null != Q
                              ? (0, C.s7)({ guildId: Q, userId: ev.id, avatar: l.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: U,
                      clickTrap: E,
                      children: (e) => {
                          let { onClick: l, ...n } = e;
                          return (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(m.D, {
                                      tag: "span",
                                      innerRef: Z,
                                      ...n,
                                      ...eg,
                                      className: t()(eg.className, D.vk, P),
                                  }),
                                  ex,
                              ],
                          });
                      },
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [(0, s.jsx)(m.D, { ...eg, className: t()(eg.className, P) }), ex],
                  }),
        eS = null != Y ? Y[0] : null,
        ej = null != Y ? Y[1] : null;
    return (0, s.jsxs)(g.f5, {
        value: V,
        children: [
            null != eS && !F && b ? (0, s.jsxs)(s.Fragment, { children: [" ", eS, " "] }) : null,
            "dot" === en
                ? (0, s.jsx)(h.W, { color: X, colors: ed ? $ : null, name: ee, className: D.m4, hoverOverride: eo })
                : null,
            eN,
            (0, s.jsx)(w, { message: n, channel: a }),
            null != ej ? ej : null,
            null == eS || F || b ? null : eS,
        ],
    });
}
