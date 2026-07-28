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
    y = n(176201),
    I = n(676608),
    G = n(342296),
    f = n(317525),
    C = n(486020),
    b = n(834730),
    E = n(687966),
    R = n(429913),
    _ = n(375408);
let k = i.memo(function (l) {
    let { message: e, channel: n } = l,
        a = n?.linkedLobby,
        i = (0, R.h)(a?.application_id),
        r = e.additionalName;
    if (null == a || null == r || "" === r) return null;
    let t = i?.icon != null ? C.Ay.getApplicationIconURL({ id: i.id, icon: i.icon, size: 16 }) : void 0;
    return (0, s.jsx)("span", {
        className: _.kL,
        children: (0, s.jsxs)(b.E, {
            tag: "span",
            variant: "text-xs/semibold",
            color: "text-default",
            lineClamp: 1,
            className: _.Qq,
            children: [
                null != t
                    ? (0, s.jsx)("img", { src: t, alt: "", width: 16, height: 16, className: _.qS })
                    : (0, s.jsx)(E._, { size: "custom", width: 16, height: 16, className: _.qS }),
                (0, s.jsx)("span", { className: _.em, children: r }),
            ],
        }),
    });
});
var w = n(109054),
    M = n(560936),
    D = n(743981),
    T = n(281867),
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
            hideGuildTag: _ = !1,
            hideSystemTag: z = !1,
            className: F,
            onClick: q,
            onContextMenu: L,
            onPopoutRequestClose: P,
            renderPopout: U,
            decorations: B,
            previewGuildId: O,
            subscribeToGroupId: W,
        } = l,
        Y = i.useRef(null),
        Z = i.useContext(S.A),
        H = a?.guild_id ?? Z,
        { analyticsLocations: Q } = (0, x.Ay)(A.A.USERNAME),
        V = E ? "@" : "",
        { nick: J, colorString: K, colorStrings: X, colorRoleName: $, displayNameStyles: ll } = e,
        le = (0, o.bG)([p.Ay], () => p.Ay.roleStyle),
        ln = "username" === le,
        la = (0, N.a)({ displayNameStyles: ll }),
        ls = (0, o.bG)([f.A], () =>
            null == e.guildId || null == e.colorRoleId ? null : f.A.getRole(e.guildId, e.colorRoleId),
        ),
        li = (0, I.jV)(O ?? H, ls),
        lr = (0, w.A)(n),
        lt = i.useContext(d.C),
        lu = lt?.animate || R,
        lo = li && (0, y.kz)(e),
        ld = ln && lo,
        lc = a?.isPrivate() && null != ll;
    (0, M.A)({ shouldSubscribe: lc || ld, subscribeToGroupId: W, authorId: n.author.id });
    let { gradientStyle: lm, gradientClassname: lh } = (0, c.v5)({
            colorStrings: X,
            roleStyle: "username",
            includeConvenienceGlow: !0,
            animateGradient: lu,
        }),
        lp = (0, c.CR)(V + J),
        lA = {
            className: t()(T.oF, la, { [lh]: ld, [T.IW]: "username" === le && null != K }),
            style: (function () {
                if (ln)
                    return ld && null != X
                        ? { ...lm, textDecorationColor: X?.primaryColor ?? void 0 }
                        : null != K
                          ? { color: K }
                          : void 0;
            })(),
            onClick: q,
            onContextMenu: L,
            children: lc
                ? (0, s.jsx)(v.A, {
                      userName: lp,
                      displayNameStyles: ll,
                      effectDisplayType: lu ? g.G.ANIMATED : g.G.PLAIN,
                      loop: !0,
                      shouldUnderlineOnHover: null != q,
                      textClassName: T.Mu,
                  })
                : lp,
            "data-text": V + J,
            "data-username-has-gradient": !!lo || void 0,
        },
        lx = i.useMemo(
            () =>
                _
                    ? null
                    : (0, s.jsx)(j.Cw, {
                          primaryGuild: e.primaryGuild,
                          userId: n.author.id,
                          contextGuildId: H,
                          className: T.s4,
                          badgeSize: b ? D.Sl.SIZE_12 : void 0,
                      }),
            [b, e.primaryGuild, H, n.author.id, _],
        ),
        lg = r ?? n.author,
        lv =
            null != U && null != R
                ? (0, s.jsx)(G.A, {
                      targetElementRef: Y,
                      user: lg,
                      guildId: H,
                      channelId: n.channel_id,
                      renderPopout: U,
                      shouldShow: R,
                      shouldPreload: lr,
                      position: u.Fr ? "window_center" : "right",
                      avatarUrl:
                          null != e.guildMemberAvatar && null != H
                              ? (0, C.s7)({ guildId: H, userId: lg.id, avatar: e.guildMemberAvatar, size: 80 })
                              : void 0,
                      onRequestClose: P,
                      clickTrap: R,
                      children: (l) => {
                          let { onClick: e, ...n } = l;
                          return (0, s.jsxs)(s.Fragment, {
                              children: [
                                  (0, s.jsx)(m.D, {
                                      tag: "span",
                                      innerRef: Y,
                                      ...n,
                                      ...lA,
                                      className: t()(lA.className, T.vk, F),
                                  }),
                                  lx,
                              ],
                          });
                      },
                  })
                : (0, s.jsxs)(s.Fragment, {
                      children: [(0, s.jsx)(m.D, { ...lA, className: t()(lA.className, F) }), lx],
                  }),
        lN = null != B ? B[0] : null,
        lS = null != B ? B[1] : null;
    return (0, s.jsxs)(x.f5, {
        value: Q,
        children: [
            null != lN && !z && b ? (0, s.jsxs)(s.Fragment, { children: [" ", lN, " "] }) : null,
            "dot" === le
                ? (0, s.jsx)(h.W, { color: K, colors: lo ? X : null, name: $, className: T.m4, hoverOverride: lu })
                : null,
            lv,
            (0, s.jsx)(k, { message: n, channel: a }),
            null != lS ? lS : null,
            null == lN || z || b ? null : lN,
        ],
    });
}
