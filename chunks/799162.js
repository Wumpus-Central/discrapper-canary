n.d(l, { w: () => D, A: () => F });
var s,
    t = n(627968),
    r = n(64700),
    i = n(503698),
    a = n.n(i),
    u = n(607399),
    o = n(17928),
    d = n(473193),
    c = n(36075),
    A = n(939249),
    m = n(545442),
    h = n(775602),
    p = n(793574),
    f = n(688810),
    S = n(922301),
    g = n(660184),
    v = n(73392),
    y = n(386467),
    x = n(534400),
    I = n(176201),
    N = n(676608),
    R = n(342296),
    _ = n(317525),
    T = n(486020),
    C = n(834730),
    E = n(687966),
    j = n(429913),
    b = n(375408);
let G = r.memo(function (e) {
    let { message: l, channel: n } = e,
        s = n?.linkedLobby,
        r = (0, j.h)(s?.application_id),
        i = l.additionalName;
    if (null == s || null == i || "" === i) return null;
    let a = r?.icon != null ? T.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, size: 16 }) : void 0;
    return (0, t.jsx)("span", {
        className: b.kL,
        children: (0, t.jsxs)(C.E, {
            tag: "span",
            variant: "text-xs/semibold",
            color: "text-default",
            lineClamp: 1,
            className: b.Qq,
            children: [
                null != a
                    ? (0, t.jsx)("img", { src: a, alt: "", width: 16, height: 16, className: b.qS })
                    : (0, t.jsx)(E._, { size: "custom", width: 16, height: 16, className: b.qS }),
                (0, t.jsx)("span", { className: b.em, children: i }),
            ],
        }),
    });
});
var M = n(109054),
    w = n(560936),
    O = n(743981),
    k = n(281867),
    D = (((s = {})[(s.SYSTEM_TAG = 0)] = "SYSTEM_TAG"), (s[(s.BADGES = 1)] = "BADGES"), s);
function F(e) {
    let {
            author: l,
            message: n,
            channel: s,
            userOverride: i,
            compact: C = !1,
            withMentionPrefix: E = !1,
            showPopout: j = !1,
            hideGuildTag: b = !1,
            hideSystemTag: D = !1,
            className: F,
            onClick: L,
            onContextMenu: z,
            onPopoutRequestClose: V,
            renderPopout: P,
            decorations: H,
            previewGuildId: U,
            subscribeToGroupId: B,
        } = e,
        W = r.useRef(null),
        $ = r.useContext(y.A),
        q = s?.guild_id ?? $,
        { analyticsLocations: Z } = (0, f.Ay)(p.A.USERNAME),
        K = E ? "@" : "",
        { nick: Y, colorString: Q, colorStrings: J, colorRoleName: X, displayNameStyles: ee } = l,
        el = (0, o.bG)([h.Ay], () => h.Ay.roleStyle),
        en = "username" === el,
        es = (0, v.a)({ displayNameStyles: ee }),
        et = (0, o.bG)([_.A], () =>
            null == l.guildId || null == l.colorRoleId ? null : _.A.getRole(l.guildId, l.colorRoleId),
        ),
        er = (0, N.jV)(U ?? q, et),
        ei = (0, M.A)(n),
        ea = r.useContext(d.C),
        eu = ea?.animate || j,
        eo = er && (0, I.kz)(l),
        ed = en && eo,
        ec = s?.isPrivate() && null != ee;
    (0, w.A)({ shouldSubscribe: ec || ed, subscribeToGroupId: B, authorId: n.author.id });
    let { gradientStyle: eA, gradientClassname: em } = (0, c.v5)({
            colorStrings: J,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: eu,
        }),
        eh = (0, c.CR)(K + Y),
        ep = {
            className: a()(k.oF, es, { [em]: ed, [k.IW]: "username" === el && null != Q }),
            style: (function () {
                if (en)
                    return ed && null != J
                        ? { ...eA, textDecorationColor: J?.primaryColor ?? void 0 }
                        : null != Q
                          ? { color: Q }
                          : void 0;
            })(),
            onClick: L,
            onContextMenu: z,
            children: ec
                ? (0, t.jsx)(g.A, {
                      userName: eh,
                      displayNameStyles: ee,
                      effectDisplayType: eu ? S.G.ANIMATED : S.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != L,
                      textClassName: k.Mu,
                  })
                : eh,
            "data-text": K + Y,
            "data-username-has-gradient": !!eo || void 0,
        },
        ef = r.useMemo(
            () =>
                b
                    ? null
                    : (0, t.jsx)(x.Cw, {
                          primaryGuild: l.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: q,
                          className: k.s4,
                          badgeSize: C ? O.Sl.SIZE_12 : void 0,
                      }),
            [C, l.primaryGuild, q, n.author.id, b],
        ),
        eS = i ?? n.author,
        eg =
            null != P && null != j
                ? (0, t.jsx)(R.A, {
                      targetElementRef: W,
                      user: eS,
                      guildId: q,
                      channelId: n.channel_id,
                      renderPopout: P,
                      shouldShow: j,
                      shouldPreload: ei,
                      position: u.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != l.guildMemberAvatar && null != q
                              ? (0, T.s7)({ guildId: q, userId: eS.id, avatar: l.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: V,
                      clickTrap: j,
                      children: (e) => {
                          let { onClick: l, ...n } = e;
                          return (0, t.jsxs)(t.Fragment, {
                              children: [
                                  (0, t.jsx)(A.D, {
                                      tag: "span",
                                      innerRef: W,
                                      ...n,
                                      ...ep,
                                      className: a()(ep.className, k.vk, F),
                                  }),
                                  ef,
                              ],
                          });
                      },
                  })
                : (0, t.jsxs)(t.Fragment, {
                      children: [(0, t.jsx)(A.D, { ...ep, className: a()(ep.className, F) }), ef],
                  }),
        ev = null != H ? H[0] : null,
        ey = null != H ? H[1] : null;
    return (0, t.jsxs)(f.f5, {
        value: Z,
        children: [
            null != ev && !D && C ? (0, t.jsxs)(t.Fragment, { children: [" ", ev, " "] }) : null,
            "dot" === el
                ? (0, t.jsx)(m.W, { color: Q, colors: eo ? J : null, name: X, className: k.m4, hoverOverride: eu })
                : null,
            eg,
            (0, t.jsx)(G, { message: n, channel: s }),
            null != ey ? ey : null,
            null == ev || D || C ? null : ev,
        ],
    });
}
