n.d(t, { A: () => I }), n(321073);
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
    g = n(389996),
    x = n(576705),
    h = n(486020),
    p = n(661191),
    A = n(427262),
    b = n(447066),
    f = n(998874),
    _ = n(657681),
    N = n(267001),
    j = n(652215),
    v = n(985018),
    T = n(64250);
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
function I(e) {
    let {
            guild: t,
            applicationIntegration: n,
            selectableWebhookChannels: a,
            editedWebhook: d,
            errors: u,
            canNavigate: I,
        } = e,
        { application: E, integration: S, webhooks: y } = n,
        [O, w] = (0, r.yK)(
            [x.A],
            () => [x.A.can(j.xBc.MANAGE_ROLES, t), null == E.bot || x.A.canManageUser(j.xBc.MANAGE_GUILD, E.bot.id, t)],
            [E.bot, t],
        ),
        R = (0, r.bG)([x.A], () => x.A.can(j.xBc.MANAGE_WEBHOOKS, t), [t]),
        k = l.useCallback(() => {
            I() && (0, o.qfG)((e) => (0, i.jsx)(C, { guild: t, application: E, integration: S, ...e }));
        }, [E, I, t, S]),
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
                null != E.bot && S.scopes?.includes(s.F.BOT)
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
            [E.bot, n, t, S.scopes],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(b.A, {
                name: E.name,
                imageSrc: h.Ay.getApplicationIconURL({ id: E.id, icon: E.icon, size: 32 }),
                details: L,
                isHeader: !0,
            }),
            E?.description != null ? (0, i.jsx)(g.A, { userBio: E.description, className: T.ux }) : null,
            O ? (0, i.jsx)(m.A, { application: E, canNavigate: I, guildId: t.id }) : null,
            (0, i.jsx)(o.cGx, { className: T.zN }),
            null != E.bot
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
                        ? (0, i.jsx)(N.A, {
                              webhooks: y,
                              editedWebhook: d,
                              selectableWebhookChannels: a,
                              errors: u,
                              canNavigate: I,
                          })
                        : (0, i.jsx)(o.ZpM, {
                              className: T.aM,
                              editable: !0,
                              children: (0, i.jsx)(o.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: R ? v.intl.string(v.t.ahPd2Y) : v.intl.string(v.t.axqYMl),
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
                            onClick: k,
                        }),
                    }),
                ],
            }),
        ],
    });
}
