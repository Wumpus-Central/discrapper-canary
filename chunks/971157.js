n.d(t, { A: () => E }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(179771),
    a = n(158954),
    r = n(311907),
    o = n(397927),
    d = n(157559),
    c = n(235986),
    u = n(997509),
    m = n(776479),
    x = n(389996),
    g = n(576705),
    h = n(486020),
    p = n(661191),
    A = n(427262),
    b = n(447066),
    f = n(998874),
    _ = n(657681),
    j = n(267001),
    N = n(652215),
    v = n(985018),
    T = n(234);
function C(e) {
    let { application: t, guild: n, integration: l, ...s } = e;
    return (0, i.jsx)(a.ConfirmModal, {
        ...s,
        title: v.intl.formatToPlainString(v.t["rL9d/1"], { applicationName: t.name }),
        subtitle: v.intl.format(v.t.FGE8ya, { applicationName: t.name }),
        confirmText: v.intl.string(v.t.ebGf4m),
        onConfirm: () => {
            u.A.disableIntegration(n.id, l.id).catch(() => {
                d.A.show({ title: v.intl.string(v.t.wYqMmI), body: v.intl.string(v.t.A4Mnst) });
            });
        },
    });
}
function E(e) {
    let {
            guild: t,
            applicationIntegration: n,
            selectableWebhookChannels: a,
            editedWebhook: d,
            errors: u,
            canNavigate: E,
        } = e,
        { application: I, integration: S, webhooks: y } = n,
        [O, w] = (0, r.yK)(
            [g.A],
            () => [g.A.can(N.xBc.MANAGE_ROLES, t), null == I.bot || g.A.canManageUser(N.xBc.MANAGE_GUILD, I.bot.id, t)],
            [I.bot, t],
        ),
        k = (0, r.bG)([g.A], () => g.A.can(N.xBc.MANAGE_WEBHOOKS, t), [t]),
        R = l.useCallback(() => {
            E() && (0, o.qfG)((e) => (0, i.jsx)(C, { guild: t, application: I, integration: S, ...e }));
        }, [I, E, t, S]),
        L = l.useMemo(() => {
            let e = [
                {
                    icon: o.O4,
                    text: v.intl.formatToPlainString(v.t.gcdJ8J, { timestamp: p.default.extractTimestamp(S.id) }),
                },
            ];
            return (
                null != S.user &&
                    e.push({
                        icon: o.nys,
                        text: v.intl.formatToPlainString(v.t.qE7oqs, { user: A.Ay.getUserTag(S.user) }),
                    }),
                e
            );
        }, [S.id, S.user]),
        M = l.useMemo(
            () =>
                null != I.bot && S.scopes?.includes(s.F.BOT)
                    ? (0, i.jsx)(_.A, { guild: t, applicationIntegration: n })
                    : (0, i.jsx)(o.ZpM, {
                          className: T.aM,
                          editable: !0,
                          children: (0, i.jsx)(o.Text, {
                              color: "text-muted",
                              variant: "text-sm/normal",
                              children: v.intl.string(v.t.pfLnza),
                          }),
                      }),
            [I.bot, n, t, S.scopes],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(b.A, {
                name: I.name,
                imageSrc: h.Ay.getApplicationIconURL({ id: I.id, icon: I.icon, size: 32 }),
                details: L,
                isHeader: !0,
            }),
            I?.description != null ? (0, i.jsx)(x.A, { userBio: I.description, className: T.ux }) : null,
            O ? (0, i.jsx)(m.A, { application: I, canNavigate: E, guildId: t.id }) : null,
            (0, i.jsx)(o.cGx, { className: T.zN }),
            null != I.bot
                ? (0, i.jsxs)("div", {
                      className: T.uW,
                      children: [
                          (0, i.jsx)(f.A, {
                              icon: (0, i.jsx)(o.CnV, { size: "xs", color: "currentColor" }),
                              title: v.intl.string(v.t.AOdOYr),
                          }),
                          M,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: T.uW,
                children: [
                    (0, i.jsx)(f.A, {
                        icon: (0, i.jsx)(o.XC7, { size: "md", color: "currentColor" }),
                        title: v.intl.string(v.t["t9ZX/I"]),
                    }),
                    y.length > 0
                        ? (0, i.jsx)(j.A, {
                              webhooks: y,
                              editedWebhook: d,
                              selectableWebhookChannels: a,
                              errors: u,
                              canNavigate: E,
                          })
                        : (0, i.jsx)(o.ZpM, {
                              className: T.aM,
                              editable: !0,
                              children: (0, i.jsx)(o.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: k ? v.intl.string(v.t.ahPd2Y) : v.intl.string(v.t.axqYMl),
                              }),
                          }),
                ],
            }),
            (0, i.jsx)(o.cGx, { className: T.zN }),
            (0, i.jsxs)(c.A, {
                className: T.uW,
                justify: c.A.Justify.BETWEEN,
                align: c.A.Align.CENTER,
                children: [
                    (0, i.jsx)(o.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: w ? v.intl.string(v.t.hdneL4) : v.intl.string(v.t.xRCMqx),
                    }),
                    (0, i.jsx)(c.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(o.Button, {
                            variant: "critical-primary",
                            size: "sm",
                            text: v.intl.string(v.t.ebGf4m),
                            disabled: !w,
                            onClick: R,
                        }),
                    }),
                ],
            }),
        ],
    });
}
