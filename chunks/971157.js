n.d(t, { A: () => R }), n(321073);
var i = n(627968),
    l = n(64700),
    s = n(179771),
    a = n(732159),
    r = n(311907),
    o = n(192308),
    d = n(406810),
    c = n(950305),
    u = n(359778),
    m = n(834730),
    g = n(404778),
    h = n(430392),
    x = n(39619),
    p = n(821609),
    A = n(157559),
    b = n(235986),
    f = n(997509),
    _ = n(776479),
    j = n(389996),
    N = n(576705),
    v = n(486020),
    E = n(661191),
    C = n(427262),
    I = n(447066),
    T = n(998874),
    S = n(657681),
    y = n(267001),
    w = n(652215),
    O = n(985018),
    k = n(234);
function L(e) {
    let { application: t, guild: n, integration: l, ...s } = e;
    return (0, i.jsx)(a.ConfirmModal, {
        ...s,
        title: O.intl.formatToPlainString(O.t["rL9d/1"], { applicationName: t.name }),
        subtitle: O.intl.format(O.t.FGE8ya, { applicationName: t.name }),
        confirmText: O.intl.string(O.t.ebGf4m),
        onConfirm: () => {
            f.A.disableIntegration(n.id, l.id).catch(() => {
                A.A.show({ title: O.intl.string(O.t.wYqMmI), body: O.intl.string(O.t.A4Mnst) });
            });
        },
    });
}
function R(e) {
    let {
            guild: t,
            applicationIntegration: n,
            selectableWebhookChannels: a,
            editedWebhook: A,
            errors: f,
            canNavigate: R,
        } = e,
        { application: M, integration: D, webhooks: P } = n,
        [G, U] = (0, r.yK)(
            [N.A],
            () => [N.A.can(w.xBc.MANAGE_ROLES, t), null == M.bot || N.A.canManageUser(w.xBc.MANAGE_GUILD, M.bot.id, t)],
            [M.bot, t],
        ),
        W = (0, r.bG)([N.A], () => N.A.can(w.xBc.MANAGE_WEBHOOKS, t), [t]),
        B = l.useCallback(() => {
            R() && (0, o.openModal)((e) => (0, i.jsx)(L, { guild: t, application: M, integration: D, ...e }));
        }, [M, R, t, D]),
        H = l.useMemo(() => {
            let e = [
                {
                    icon: d.O,
                    text: O.intl.formatToPlainString(O.t.gcdJ8J, { timestamp: E.default.extractTimestamp(D.id) }),
                },
            ];
            return (
                null != D.user &&
                    e.push({
                        icon: c.n,
                        text: O.intl.formatToPlainString(O.t.qE7oqs, { user: C.Ay.getUserTag(D.user) }),
                    }),
                e
            );
        }, [D.id, D.user]),
        z = l.useMemo(
            () =>
                null != M.bot && D.scopes?.includes(s.F.BOT)
                    ? (0, i.jsx)(S.A, { guild: t, applicationIntegration: n })
                    : (0, i.jsx)(u.Z, {
                          className: k.aM,
                          editable: !0,
                          children: (0, i.jsx)(m.E, {
                              color: "text-muted",
                              variant: "text-sm/normal",
                              children: O.intl.string(O.t.pfLnza),
                          }),
                      }),
            [M.bot, n, t, D.scopes],
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(I.A, {
                name: M.name,
                imageSrc: v.Ay.getApplicationIconURL({ id: M.id, icon: M.icon, size: 32 }),
                details: H,
                isHeader: !0,
            }),
            M?.description != null ? (0, i.jsx)(j.A, { userBio: M.description, className: k.ux }) : null,
            G ? (0, i.jsx)(_.A, { application: M, canNavigate: R, guildId: t.id }) : null,
            (0, i.jsx)(g.c, { className: k.zN }),
            null != M.bot
                ? (0, i.jsxs)("div", {
                      className: k.uW,
                      children: [
                          (0, i.jsx)(T.A, {
                              icon: (0, i.jsx)(h.C, { size: "xs", color: "currentColor" }),
                              title: O.intl.string(O.t.AOdOYr),
                          }),
                          z,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: k.uW,
                children: [
                    (0, i.jsx)(T.A, {
                        icon: (0, i.jsx)(x.X, { size: "md", color: "currentColor" }),
                        title: O.intl.string(O.t["t9ZX/I"]),
                    }),
                    P.length > 0
                        ? (0, i.jsx)(y.A, {
                              webhooks: P,
                              editedWebhook: A,
                              selectableWebhookChannels: a,
                              errors: f,
                              canNavigate: R,
                          })
                        : (0, i.jsx)(u.Z, {
                              className: k.aM,
                              editable: !0,
                              children: (0, i.jsx)(m.E, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: W ? O.intl.string(O.t.ahPd2Y) : O.intl.string(O.t.axqYMl),
                              }),
                          }),
                ],
            }),
            (0, i.jsx)(g.c, { className: k.zN }),
            (0, i.jsxs)(b.A, {
                className: k.uW,
                justify: b.A.Justify.BETWEEN,
                align: b.A.Align.CENTER,
                children: [
                    (0, i.jsx)(m.E, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: U ? O.intl.string(O.t.hdneL4) : O.intl.string(O.t.xRCMqx),
                    }),
                    (0, i.jsx)(b.A.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(p.$, {
                            variant: "critical-primary",
                            size: "sm",
                            text: O.intl.string(O.t.ebGf4m),
                            disabled: !U,
                            onClick: B,
                        }),
                    }),
                ],
            }),
        ],
    });
}
