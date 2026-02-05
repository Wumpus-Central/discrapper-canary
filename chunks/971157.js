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
    g = n(389996),
    x = n(576705),
    h = n(486020),
    p = n(661191),
    A = n(427262),
    b = n(447066),
    _ = n(998874),
    f = n(657681),
    N = n(267001),
    j = n(652215),
    T = n(985018),
    C = n(882441);
function v(e) {
    let { application: t, guild: n, integration: l, ...s } = e;
    return (0, i.jsx)(a.ConfirmModal, {
        ...s,
        title: T.intl.formatToPlainString(T.t["rL9d/1"], { applicationName: t.name }),
        subtitle: T.intl.format(T.t.FGE8ya, { applicationName: t.name }),
        confirmText: T.intl.string(T.t.ebGf4m),
        onConfirm: () => {
            u.A.disableIntegration(n.id, l.id).catch(() => {
                d.A.show({ title: T.intl.string(T.t.wYqMmI), body: T.intl.string(T.t.A4Mnst) });
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
            [x.A],
            () => [x.A.can(j.xBc.MANAGE_ROLES, t), null == I.bot || x.A.canManageUser(j.xBc.MANAGE_GUILD, I.bot.id, t)],
            [I.bot, t],
        ),
        R = (0, r.bG)([x.A], () => x.A.can(j.xBc.MANAGE_WEBHOOKS, t), [t]),
        k = l.useCallback(() => {
            E() && (0, o.qfG)((e) => (0, i.jsx)(v, { guild: t, application: I, integration: S, ...e }));
        }, [I, E, t, S]),
        L = l.useMemo(() => {
            let e = [
                {
                    icon: o.O4,
                    text: T.intl.formatToPlainString(T.t.gcdJ8J, { timestamp: p.default.extractTimestamp(S.id) }),
                },
            ];
            return (
                null != S.user &&
                    e.push({
                        icon: o.nys,
                        text: T.intl.formatToPlainString(T.t.qE7oqs, { user: A.Ay.getUserTag(S.user) }),
                    }),
                e
            );
        }, [S.id, S.user]),
        M = l.useMemo(
            () =>
                null != I.bot && S.scopes?.includes(s.F.BOT)
                    ? (0, i.jsx)(f.A, { guild: t, applicationIntegration: n })
                    : (0, i.jsx)(o.ZpM, {
                          className: C.aM,
                          editable: !0,
                          children: (0, i.jsx)(o.Text, {
                              color: "text-muted",
                              variant: "text-sm/normal",
                              children: T.intl.string(T.t.pfLnza),
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
            I?.description != null ? (0, i.jsx)(g.A, { userBio: I.description, className: C.ux }) : null,
            O ? (0, i.jsx)(m.A, { application: I, canNavigate: E, guildId: t.id }) : null,
            (0, i.jsx)(o.cGx, { className: C.zN }),
            null != I.bot
                ? (0, i.jsxs)("div", {
                      className: C.uW,
                      children: [
                          (0, i.jsx)(_.A, {
                              icon: (0, i.jsx)(o.CnV, { size: "xs", color: "currentColor" }),
                              title: T.intl.string(T.t.AOdOYr),
                          }),
                          M,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: C.uW,
                children: [
                    (0, i.jsx)(_.A, {
                        icon: (0, i.jsx)(o.XC7, { size: "md", color: "currentColor" }),
                        title: T.intl.string(T.t["t9ZX/I"]),
                    }),
                    y.length > 0
                        ? (0, i.jsx)(N.A, {
                              webhooks: y,
                              editedWebhook: d,
                              selectableWebhookChannels: a,
                              errors: u,
                              canNavigate: E,
                          })
                        : (0, i.jsx)(o.ZpM, {
                              className: C.aM,
                              editable: !0,
                              children: (0, i.jsx)(o.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: R ? T.intl.string(T.t.ahPd2Y) : T.intl.string(T.t.axqYMl),
                              }),
                          }),
                ],
            }),
            (0, i.jsx)(o.cGx, { className: C.zN }),
            (0, i.jsxs)(c.A, {
                className: C.uW,
                justify: c.A.Justify.BETWEEN,
                align: c.A.Align.CENTER,
                children: [
                    (0, i.jsx)(o.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: w ? T.intl.string(T.t.hdneL4) : T.intl.string(T.t.xRCMqx),
                    }),
                    (0, i.jsx)(c.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(o.Button, {
                            variant: "critical-primary",
                            size: "sm",
                            text: T.intl.string(T.t.ebGf4m),
                            disabled: !w,
                            onClick: k,
                        }),
                    }),
                ],
            }),
        ],
    });
}
