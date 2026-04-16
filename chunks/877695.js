n.d(t, { A: () => N });
var i = n(627968),
    a = n(64700),
    l = n(503698),
    s = n.n(l),
    r = n(110259),
    o = n(311907),
    d = n(397927),
    c = n(846293),
    u = n(775602),
    _ = n(793574),
    m = n(688810),
    h = n(139286),
    p = n(9994),
    g = n(461888),
    A = n(179283),
    x = n(123213),
    f = n(86376),
    C = n(42780),
    E = n(21599),
    I = n(860689),
    v = n(897288),
    b = n(168428),
    T = n(652215),
    y = n(985018),
    S = n(14712);
function N(e) {
    let { invite: t, isMemberOfGuild: n, message: l, onTransitionToInviteChannel: c, onAcceptInstantInvite: g } = e,
        x = a.useRef(null),
        [N, L] = a.useState(!0),
        [R, P] = a.useState(!1),
        w = t.state === T.elq.ACCEPTING,
        M = (0, o.bG)([u.A], () => u.A.useReducedMotion),
        { analyticsLocations: D } = (0, m.Ay)(_.A.INVITE_EMBED);
    (0, h.A)({
        name: r.ImpressionNames.INVITE_EMBED,
        type: r.ImpressionTypes.VIEW,
        properties: {
            invite_code: t.code,
            invite_guild_id: t.guild?.id,
            invite_channel_id: t.channel?.id,
            invite_instance_id: (0, E._U)(t.code, l.id),
            invite_channel_type: t.channel?.type,
            embed_type: "guild_invite_v2",
            location_stack: D,
        },
    }),
        a.useLayoutEffect(() => {
            P((x.current?.clientHeight ?? 0) > 292);
        }, [P]);
    let k = (0, p.oO)(t),
        O = a.useCallback(() => {
            !R || (N && L(!1));
        }, [N, R]),
        U = a.useCallback(() => {
            !R || N || L(!0);
        }, [N, R]),
        B = a.useMemo(
            () =>
                R && x.current?.clientHeight != null
                    ? {
                          height: N ? 292 : x.current.clientHeight + 36 + 48,
                          transition: M ? void 0 : "height 0.2s ease",
                      }
                    : {},
            [N, R, M],
        );
    return null == k
        ? (0, i.jsx)(b.A, {})
        : (0, i.jsxs)(d.sqX, {
              className: s()(S.Gg, { [S.vk]: R && N }),
              onClick: O,
              style: B,
              "aria-label": y.intl.string(y.t.dcl9MQ),
              children: [
                  (0, i.jsxs)("div", {
                      className: S.uY,
                      ref: x,
                      children: [
                          (0, i.jsx)(C.J$, { profile: k, className: S.vK }),
                          (0, i.jsx)(C.CG, { profile: k }),
                          (0, i.jsx)(f.A, { profile: k }),
                          (0, i.jsx)(A.P, { profile: k, className: S.rb }),
                          (0, i.jsx)(v.A, {
                              guild: null != t.guild ? (0, I.DY)(t.guild) : null,
                              roles: t.roles,
                              className: S.Ei,
                          }),
                      ],
                  }),
                  R && !N
                      ? (0, i.jsx)("div", {
                            className: S.Se,
                            children: (0, i.jsx)(d.QWc, {
                                textVariant: "text-xs/medium",
                                variant: "secondary",
                                size: "sm",
                                onClick: U,
                                text: y.intl.string(y.t.xdCLeM),
                            }),
                        })
                      : null,
                  (0, i.jsxs)("div", {
                      className: s()(S.qr, { [S.iK]: R }),
                      children: [
                          R && N ? (0, i.jsx)("div", { className: S.D7 }) : null,
                          (0, i.jsx)("div", {
                              className: s()(S.z8, { [S.it]: R && N }),
                              children: (0, i.jsx)("div", {
                                  className: S.UD,
                                  children: (0, i.jsx)(j, {
                                      invite: t,
                                      profile: k,
                                      isMemberOfGuild: n,
                                      message: l,
                                      submitting: w,
                                      onTransitionToInviteChannel: c,
                                      onAcceptInstantInvite: g,
                                  }),
                              }),
                          }),
                      ],
                  }),
              ],
          });
}
function j(e) {
    let {
            invite: t,
            profile: n,
            isMemberOfGuild: l,
            message: s,
            submitting: r,
            onTransitionToInviteChannel: o,
            onAcceptInstantInvite: d,
        } = e,
        { guildId: u, ctaType: h } = (0, g.Ay)(n, g.cn.INVITE, t.code),
        { analyticsLocations: p } = (0, m.Ay)(_.A.INVITE_EMBED),
        A = a.useCallback(() => {
            let e = l ? "transition" : "accept";
            (0, c.he)(
                {
                    invite: t,
                    action: e,
                    inviter_id: s.author.id,
                    invite_message_id: s.id,
                    invite_instance_id: (0, E._U)(t.code, s.id),
                },
                p,
            );
        }, [t, s, p, l]);
    return null == h
        ? null
        : (0, i.jsx)(x.Y, {
              guildId: u,
              ctaType: h,
              submitting: r,
              onGoToGuild: o,
              onAcceptInvite: d,
              onStartApplication: d,
              onComplete: A,
          });
}
