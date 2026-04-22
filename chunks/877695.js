n.d(t, { A: () => j });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(110259),
    o = n(311907),
    d = n(890856),
    c = n(123292),
    u = n(846293),
    m = n(775602),
    _ = n(793574),
    h = n(688810),
    p = n(139286),
    g = n(9994),
    A = n(461888),
    f = n(179283),
    x = n(123213),
    C = n(86376),
    E = n(42780),
    I = n(21599),
    v = n(860689),
    b = n(897288),
    T = n(168428),
    S = n(652215),
    y = n(985018),
    N = n(778424);
function j(e) {
    let { invite: t, isMemberOfGuild: n, message: a, onTransitionToInviteChannel: u, onAcceptInstantInvite: A } = e,
        x = l.useRef(null),
        [j, R] = l.useState(!0),
        [P, w] = l.useState(!1),
        D = t.state === S.elq.ACCEPTING,
        k = (0, o.bG)([m.A], () => m.A.useReducedMotion),
        { analyticsLocations: O } = (0, h.Ay)(_.A.INVITE_EMBED);
    (0, p.A)({
        name: r.ImpressionNames.INVITE_EMBED,
        type: r.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, I._U)(t.code, a.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: O,
        },
    }),
        l.useLayoutEffect(() => {
            w((x.current?.clientHeight ?? 0) > 292);
        }, [w]);
    let M = (0, g.oO)(t),
        U = l.useCallback(() => {
            !P || (j && R(!1));
        }, [j, P]),
        G = l.useCallback(() => {
            !P || j || R(!0);
        }, [j, P]),
        B = l.useMemo(
            () =>
                P && x.current?.clientHeight != null
                    ? {
                          height: j ? 292 : x.current.clientHeight + 36 + 48,
                          transition: k ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [j, P, k],
        );
    return null == M
        ? (0, i.jsx)(T.A, {})
        : (0, i.jsxs)(d.s, {
              className: s()(N.Gg, { [N.vk]: P && j }),
              onClick: U,
              style: B,
              "aria-label": y.intl.string(y.t.dcl9MQ),
              children: [
                  (0, i.jsxs)("div", {
                      className: N.uY,
                      ref: x,
                      children: [
                          (0, i.jsx)(E.J$, { profile: M, className: N.vK }),
                          (0, i.jsx)(E.CG, { profile: M }),
                          (0, i.jsx)(C.A, { profile: M }),
                          (0, i.jsx)(f.P, { profile: M, className: N.rb }),
                          (0, i.jsx)(b.A, {
                              guild: null != t.guild ? (0, v.DY)(t.guild) : null,
                              roles: t.roles,
                              className: N.Ei,
                          }),
                      ],
                  }),
                  P && !j
                      ? (0, i.jsx)("div", {
                            className: N.Se,
                            children: (0, i.jsx)(c.Q, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: G,
                                text: y.intl.string(y.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, i.jsxs)("div", {
                      className: s()(N.qr, { [N.iK]: P }),
                      children: [
                          P && j ? (0, i.jsx)("div", { className: N.D7 }) : null,
                          (0, i.jsx)("div", {
                              className: s()(N.z8, { [N.it]: P && j }),
                              children: (0, i.jsx)("div", {
                                  className: N.UD,
                                  children: (0, i.jsx)(L, {
                                      invite: t,
                                      profile: M,
                                      isMemberOfGuild: n,
                                      message: a,
                                      submitting: D,
                                      onTransitionToInviteChannel: u,
                                      onAcceptInstantInvite: A,
                                  }),
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function L(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: a,
            message: s,
            submitting: r,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: c, ctaType: m } = (0, A.Ay)(n, A.cn.INVITE, t.code),
        { analyticsLocations: p } = (0, h.Ay)(_.A.INVITE_EMBED),
        g = l.useCallback(() => {
            let e = a ? "transition" : "accept";
            (0, u.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: s.author.id,
                    invite_message_id: s.id,
                    invite_instance_id: (0, I._U)(t.code, s.id),
                },
                p,
            );
        }, [t, s, p, a]);
    return null == m
        ? null
        : (0, i.jsx)(x.Y, {
              guildId: c,
              ctaType: m,
              submitting: r,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: g,
          });
}
