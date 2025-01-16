n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(442837),
    a = n(481060),
    o = n(668781),
    s = n(600164),
    d = n(434404),
    c = n(590157),
    u = n(280885),
    m = n(496675),
    h = n(768581),
    p = n(709054),
    g = n(51144),
    x = n(486199),
    f = n(366598),
    b = n(125657),
    v = n(725875),
    C = n(981631),
    N = n(388032),
    I = n(380813);
function j(e) {
    let { application: t, guild: n, integration: l, ...r } = e;
    return (0, i.jsx)(a.ConfirmModal, {
        ...r,
        header: N.intl.formatToPlainString(N.t['rL9d//'], { applicationName: t.name }),
        confirmText: N.intl.string(N.t.ebGf4u),
        cancelText: N.intl.string(N.t['ETE/oK']),
        onConfirm: () => {
            d.Z.disableIntegration(n.id, l.id).catch(() => {
                o.Z.show({
                    title: N.intl.string(N.t.wYqMmJ),
                    body: N.intl.string(N.t.A4Mnsr)
                });
            });
        },
        children: (0, i.jsx)(a.Text, {
            variant: 'text-md/normal',
            children: N.intl.format(N.t.FGE8yc, { applicationName: t.name })
        })
    });
}
function T(e) {
    var t;
    let { guild: n, applicationIntegration: o, selectableWebhookChannels: d, editedWebhook: T, errors: _, canNavigate: Z } = e,
        { application: E, integration: S, webhooks: y } = o,
        [A, R] = (0, r.Wu)([m.Z], () => [m.Z.can(C.Plq.MANAGE_ROLES, n), null == E.bot || m.Z.canManageUser(C.Plq.MANAGE_GUILD, E.bot.id, n)], [E.bot, n]),
        L = (0, r.e7)([m.Z], () => m.Z.can(C.Plq.MANAGE_WEBHOOKS, n), [n]),
        k = l.useCallback(() => {
            Z() &&
                (0, a.openModal)((e) =>
                    (0, i.jsx)(j, {
                        guild: n,
                        application: E,
                        integration: S,
                        ...e
                    })
                );
        }, [E, Z, n, S]),
        O = l.useMemo(() => {
            let e = [
                {
                    icon: a.ClockIcon,
                    text: N.intl.formatToPlainString(N.t.gcdJ8P, { timestamp: p.default.extractTimestamp(S.id) })
                }
            ];
            return (
                null != S.user &&
                    e.push({
                        icon: a.UserIcon,
                        text: N.intl.formatToPlainString(N.t.qE7oqq, { user: g.ZP.getUserTag(S.user) })
                    }),
                e
            );
        }, [S.id, S.user]),
        w = l.useMemo(
            () =>
                null != E.bot
                    ? (0, i.jsx)(b.Z, {
                          guild: n,
                          applicationIntegration: o
                      })
                    : (0, i.jsx)(a.Card, {
                          className: I.emptyCard,
                          editable: !0,
                          children: (0, i.jsx)(a.Text, {
                              color: 'text-muted',
                              variant: 'text-sm/normal',
                              children: N.intl.string(N.t.pfLnzc)
                          })
                      }),
            [E.bot, o, n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.Z, {
                name: E.name,
                imageSrc: null !== (t = E.getIconURL(32)) && void 0 !== t ? t : h.pK['0'],
                details: O,
                isHeader: !0
            }),
            (null == E ? void 0 : E.description) != null
                ? (0, i.jsx)(u.Z, {
                      userBio: E.description,
                      className: I.headerDescription
                  })
                : null,
            A
                ? (0, i.jsx)(c.Z, {
                      application: E,
                      canNavigate: Z,
                      guildId: n.id
                  })
                : null,
            (0, i.jsx)(a.FormDivider, { className: I.headerDivider }),
            null != E.bot
                ? (0, i.jsxs)('div', {
                      className: I.section,
                      children: [
                          (0, i.jsx)(f.Z, {
                              icon: (0, i.jsx)(a.RobotIcon, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              title: N.intl.string(N.t.AOdOYm)
                          }),
                          w
                      ]
                  })
                : null,
            (0, i.jsxs)('div', {
                className: I.section,
                children: [
                    (0, i.jsx)(f.Z, {
                        icon: (0, i.jsx)(a.WebhookIcon, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        title: N.intl.string(N.t['t9ZX/P'])
                    }),
                    y.length > 0
                        ? (0, i.jsx)(v.Z, {
                              webhooks: y,
                              editedWebhook: T,
                              selectableWebhookChannels: d,
                              errors: _,
                              canNavigate: Z
                          })
                        : (0, i.jsx)(a.Card, {
                              className: I.emptyCard,
                              editable: !0,
                              children: (0, i.jsx)(a.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: L ? N.intl.string(N.t.ahPd2d) : N.intl.string(N.t.axqYMj)
                              })
                          })
                ]
            }),
            (0, i.jsx)(a.FormDivider, { className: I.headerDivider }),
            (0, i.jsxs)(s.Z, {
                className: I.section,
                justify: s.Z.Justify.BETWEEN,
                align: s.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: R ? N.intl.string(N.t.hdneLy) : N.intl.string(N.t.xRCMq6)
                    }),
                    (0, i.jsx)(s.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(a.Button, {
                            size: a.Button.Sizes.SMALL,
                            color: a.Button.Colors.RED,
                            look: a.Button.Looks.FILLED,
                            disabled: !R,
                            onClick: k,
                            children: N.intl.string(N.t.ebGf4u)
                        })
                    })
                ]
            })
        ]
    });
}
