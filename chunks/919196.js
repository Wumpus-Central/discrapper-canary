n.d(t, { Z: () => I }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(442837),
    r = n(481060),
    s = n(668781),
    o = n(600164),
    d = n(434404),
    c = n(590157),
    u = n(280885),
    m = n(496675),
    h = n(768581),
    x = n(709054),
    g = n(51144),
    p = n(486199),
    b = n(366598),
    _ = n(125657),
    f = n(725875),
    v = n(981631),
    C = n(388032),
    j = n(29682);
function N(e) {
    let { application: t, guild: n, integration: l, ...a } = e;
    return (0, i.jsx)(r.ConfirmModal, {
        ...a,
        header: C.intl.formatToPlainString(C.t['rL9d//'], { applicationName: t.name }),
        confirmText: C.intl.string(C.t.ebGf4u),
        cancelText: C.intl.string(C.t['ETE/oK']),
        onConfirm: () => {
            d.Z.disableIntegration(n.id, l.id).catch(() => {
                s.Z.show({
                    title: C.intl.string(C.t.wYqMmJ),
                    body: C.intl.string(C.t.A4Mnsr)
                });
            });
        },
        children: (0, i.jsx)(r.Text, {
            variant: 'text-md/normal',
            children: C.intl.format(C.t.FGE8yc, { applicationName: t.name })
        })
    });
}
function I(e) {
    var t;
    let { guild: n, applicationIntegration: s, selectableWebhookChannels: d, editedWebhook: I, errors: Z, canNavigate: T } = e,
        { application: E, integration: S, webhooks: y } = s,
        [A, k] = (0, a.Wu)([m.Z], () => [m.Z.can(v.Plq.MANAGE_ROLES, n), null == E.bot || m.Z.canManageUser(v.Plq.MANAGE_GUILD, E.bot.id, n)], [E.bot, n]),
        R = (0, a.e7)([m.Z], () => m.Z.can(v.Plq.MANAGE_WEBHOOKS, n), [n]),
        L = l.useCallback(() => {
            T() &&
                (0, r.h7j)((e) =>
                    (0, i.jsx)(N, {
                        guild: n,
                        application: E,
                        integration: S,
                        ...e
                    })
                );
        }, [E, T, n, S]),
        w = l.useMemo(() => {
            let e = [
                {
                    icon: r.T39,
                    text: C.intl.formatToPlainString(C.t.gcdJ8P, { timestamp: x.default.extractTimestamp(S.id) })
                }
            ];
            return (
                null != S.user &&
                    e.push({
                        icon: r.tBG,
                        text: C.intl.formatToPlainString(C.t.qE7oqq, { user: g.ZP.getUserTag(S.user) })
                    }),
                e
            );
        }, [S.id, S.user]),
        O = l.useMemo(
            () =>
                null != E.bot
                    ? (0, i.jsx)(_.Z, {
                          guild: n,
                          applicationIntegration: s
                      })
                    : (0, i.jsx)(r.Zbd, {
                          className: j.emptyCard,
                          editable: !0,
                          children: (0, i.jsx)(r.Text, {
                              color: 'text-muted',
                              variant: 'text-sm/normal',
                              children: C.intl.string(C.t.pfLnzc)
                          })
                      }),
            [E.bot, s, n]
        );
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.Z, {
                name: E.name,
                imageSrc: null !== (t = E.getIconURL(32)) && void 0 !== t ? t : h.pK['0'],
                details: w,
                isHeader: !0
            }),
            (null == E ? void 0 : E.description) != null
                ? (0, i.jsx)(u.Z, {
                      userBio: E.description,
                      className: j.headerDescription
                  })
                : null,
            A
                ? (0, i.jsx)(c.Z, {
                      application: E,
                      canNavigate: T,
                      guildId: n.id
                  })
                : null,
            (0, i.jsx)(r.$i$, { className: j.headerDivider }),
            null != E.bot
                ? (0, i.jsxs)('div', {
                      className: j.section,
                      children: [
                          (0, i.jsx)(b.Z, {
                              icon: (0, i.jsx)(r.wGt, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              title: C.intl.string(C.t.AOdOYm)
                          }),
                          O
                      ]
                  })
                : null,
            (0, i.jsxs)('div', {
                className: j.section,
                children: [
                    (0, i.jsx)(b.Z, {
                        icon: (0, i.jsx)(r.tYf, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        title: C.intl.string(C.t['t9ZX/P'])
                    }),
                    y.length > 0
                        ? (0, i.jsx)(f.Z, {
                              webhooks: y,
                              editedWebhook: I,
                              selectableWebhookChannels: d,
                              errors: Z,
                              canNavigate: T
                          })
                        : (0, i.jsx)(r.Zbd, {
                              className: j.emptyCard,
                              editable: !0,
                              children: (0, i.jsx)(r.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: R ? C.intl.string(C.t.ahPd2d) : C.intl.string(C.t.axqYMj)
                              })
                          })
                ]
            }),
            (0, i.jsx)(r.$i$, { className: j.headerDivider }),
            (0, i.jsxs)(o.Z, {
                className: j.section,
                justify: o.Z.Justify.BETWEEN,
                align: o.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: k ? C.intl.string(C.t.hdneLy) : C.intl.string(C.t.xRCMq6)
                    }),
                    (0, i.jsx)(o.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(r.zxk, {
                            size: r.zxk.Sizes.SMALL,
                            color: r.zxk.Colors.RED,
                            look: r.zxk.Looks.FILLED,
                            disabled: !k,
                            onClick: L,
                            children: C.intl.string(C.t.ebGf4u)
                        })
                    })
                ]
            })
        ]
    });
}
