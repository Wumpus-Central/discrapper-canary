n.d(l, { w: () => D, A: () => F });
var s,
    t = n(477900),
    r = n(582128),
    a = n(503698),
    i = n.n(a),
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
    y = n(73392),
    I = n(386467),
    v = n(534400),
    x = n(176201),
    N = n(676608),
    R = n(342296),
    T = n(317525),
    _ = n(486020),
    C = n(834730),
    E = n(687966),
    j = n(429913),
    b = n(375408);
let G = r.memo(function (e) {
    let { message: l, channel: n } = e,
        s = n?.linkedLobby,
        r = (0, j.h)(s?.application_id),
        a = l.additionalName;
    if (null == s || null == a || "" === a) return null;
    let i = r?.icon != null ? _.Ay.getApplicationIconURL({ id: r.id, icon: r.icon, size: 16 }) : void 0;
    return (0, t.jsx)("span", {
        className: b.kL,
        children: (0, t.jsxs)(C.E, {
            tag: "span",
            variant: "text-xs/semibold",
            color: "text-default",
            lineClamp: 1,
            className: b.Qq,
            children: [
                null != i
                    ? (0, t.jsx)("img", { src: i, alt: "", width: 16, height: 16, className: b.qS })
                    : (0, t.jsx)(E.GameControllerIcon, { size: "custom", width: 16, height: 16, className: b.qS }),
                (0, t.jsx)("span", { className: b.em, children: a }),
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
            userOverride: a,
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
        $ = r.useContext(I.A),
        q = s?.guild_id ?? $,
        { analyticsLocations: Z } = (0, f.Ay)(p.A.USERNAME),
        K = E ? "@" : "",
        { nick: Y, colorString: Q, colorStrings: J, colorRoleName: X, displayNameStyles: ee } = l,
        el = (0, o.bG)([h.Ay], () => h.Ay.roleStyle),
        en = "username" === el,
        es = (0, y.a)({ displayNameStyles: ee }),
        et = (0, o.bG)([T.A], () =>
            null == l.guildId || null == l.colorRoleId ? null : T.A.getRole(l.guildId, l.colorRoleId),
        ),
        er = (0, N.jV)(U ?? q, et),
        ea = (0, M.A)(n),
        ei = r.useContext(d.C),
        eu = ei?.animate || j,
        eo = er && (0, x.kz)(l),
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
            className: i()(k.oF, es, { [em]: ed, [k.IW]: "username" === el && null != Q }),
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
                    : (0, t.jsx)(v.Cw, {
                          primaryGuild: l.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: q,
                          className: k.s4,
                          badgeSize: C ? O.Sl.SIZE_12 : void 0,
                      }),
            [C, l.primaryGuild, q, n.author.id, b],
        ),
        eS = a ?? n.author,
        eg =
            null != P && null != j
                ? (0, t.jsx)(R.A, {
                      targetElementRef: W,
                      user: eS,
                      guildId: q,
                      channelId: n.channel_id,
                      renderPopout: P,
                      shouldShow: j,
                      shouldPreload: ea,
                      position: u.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != l.guildMemberAvatar && null != q
                              ? (0, _.s7)({ guildId: q, userId: eS.id, avatar: l.guildMemberAvatar, size: 80 })
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
                                      className: i()(ep.className, k.vk, F),
                                  }),
                                  ef,
                              ],
                          });
                      },
                  })
                : (0, t.jsxs)(t.Fragment, {
                      children: [(0, t.jsx)(A.D, { ...ep, className: i()(ep.className, F) }), ef],
                  }),
        ey = null != H ? H[0] : null,
        eI = null != H ? H[1] : null;
    return (0, t.jsxs)(f.f5, {
        value: Z,
        children: [
            null != ey && !D && C ? (0, t.jsxs)(t.Fragment, { children: [" ", ey, " "] }) : null,
            "dot" === el
                ? (0, t.jsx)(m.W, { color: Q, colors: eo ? J : null, name: X, className: k.m4, hoverOverride: eu })
                : null,
            eg,
            (0, t.jsx)(G, { message: n, channel: s }),
            null != eI ? eI : null,
            null == ey || D || C ? null : ey,
        ],
    });
}
