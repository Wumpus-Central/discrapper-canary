n.d(t, { Z: () => C }), n(47120), n(653041), n(266796);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(481060),
    a = n(668781),
    s = n(600164),
    c = n(434404),
    d = n(590157),
    u = n(280885),
    p = n(496675),
    m = n(768581),
    b = n(709054),
    g = n(51144),
    f = n(486199),
    h = n(366598),
    x = n(125657),
    j = n(725875),
    N = n(981631),
    O = n(388032),
    v = n(704526);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function _(e) {
    var t,
        n,
        { application: i, guild: l, integration: s } = e,
        d = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
            }
            return i;
        })(e, ['application', 'guild', 'integration']);
    return (0, r.jsx)(
        o.ConfirmModal,
        ((t = y({}, d)),
        (n = n =
            {
                header: O.NW.formatToPlainString(O.t['rL9d//'], { applicationName: i.name }),
                confirmText: O.NW.string(O.t.ebGf4u),
                cancelText: O.NW.string(O.t['ETE/oK']),
                onConfirm: () => {
                    c.Z.disableIntegration(l.id, s.id).catch(() => {
                        a.Z.show({
                            title: O.NW.string(O.t.wYqMmJ),
                            body: O.NW.string(O.t.A4Mnsr)
                        });
                    });
                },
                children: (0, r.jsx)(o.Text, {
                    variant: 'text-md/normal',
                    children: O.NW.format(O.t.FGE8yc, { applicationName: i.name })
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(n)).forEach(function (e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
              }),
        t)
    );
}
function C(e) {
    var t;
    let { guild: n, applicationIntegration: a, selectableWebhookChannels: c, editedWebhook: C, errors: I, canNavigate: S } = e,
        { application: E, integration: P, webhooks: w } = a,
        [T, Z] = (0, l.Wu)([p.Z], () => [p.Z.can(N.Plq.MANAGE_ROLES, n), null == E.bot || p.Z.canManageUser(N.Plq.MANAGE_GUILD, E.bot.id, n)], [E.bot, n]),
        W = (0, l.e7)([p.Z], () => p.Z.can(N.Plq.MANAGE_WEBHOOKS, n), [n]),
        k = i.useCallback(() => {
            S() &&
                (0, o.h7j)((e) =>
                    (0, r.jsx)(
                        _,
                        y(
                            {
                                guild: n,
                                application: E,
                                integration: P
                            },
                            e
                        )
                    )
                );
        }, [E, S, n, P]),
        A = i.useMemo(() => {
            let e = [
                {
                    icon: o.T39,
                    text: O.NW.formatToPlainString(O.t.gcdJ8P, { timestamp: b.default.extractTimestamp(P.id) })
                }
            ];
            return (
                null != P.user &&
                    e.push({
                        icon: o.tBG,
                        text: O.NW.formatToPlainString(O.t.qE7oqq, { user: g.ZP.getUserTag(P.user) })
                    }),
                e
            );
        }, [P.id, P.user]),
        D = i.useMemo(
            () =>
                null != E.bot
                    ? (0, r.jsx)(x.Z, {
                          guild: n,
                          applicationIntegration: a
                      })
                    : (0, r.jsx)(o.Zbd, {
                          className: v.emptyCard,
                          editable: !0,
                          children: (0, r.jsx)(o.Text, {
                              color: 'text-muted',
                              variant: 'text-sm/normal',
                              children: O.NW.string(O.t.pfLnzc)
                          })
                      }),
            [E.bot, a, n]
        );
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(f.Z, {
                name: E.name,
                imageSrc: null != (t = E.getIconURL(32)) ? t : m.pK['0'],
                details: A,
                isHeader: !0
            }),
            (null == E ? void 0 : E.description) != null
                ? (0, r.jsx)(u.Z, {
                      userBio: E.description,
                      className: v.headerDescription
                  })
                : null,
            T
                ? (0, r.jsx)(d.Z, {
                      application: E,
                      canNavigate: S,
                      guildId: n.id
                  })
                : null,
            (0, r.jsx)(o.$i$, { className: v.headerDivider }),
            null != E.bot
                ? (0, r.jsxs)('div', {
                      className: v.section,
                      children: [
                          (0, r.jsx)(h.Z, {
                              icon: (0, r.jsx)(o.wGt, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              title: O.NW.string(O.t.AOdOYm)
                          }),
                          D
                      ]
                  })
                : null,
            (0, r.jsxs)('div', {
                className: v.section,
                children: [
                    (0, r.jsx)(h.Z, {
                        icon: (0, r.jsx)(o.tYf, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        title: O.NW.string(O.t['t9ZX/P'])
                    }),
                    w.length > 0
                        ? (0, r.jsx)(j.Z, {
                              webhooks: w,
                              editedWebhook: C,
                              selectableWebhookChannels: c,
                              errors: I,
                              canNavigate: S
                          })
                        : (0, r.jsx)(o.Zbd, {
                              className: v.emptyCard,
                              editable: !0,
                              children: (0, r.jsx)(o.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: W ? O.NW.string(O.t.ahPd2d) : O.NW.string(O.t.axqYMj)
                              })
                          })
                ]
            }),
            (0, r.jsx)(o.$i$, { className: v.headerDivider }),
            (0, r.jsxs)(s.Z, {
                className: v.section,
                justify: s.Z.Justify.BETWEEN,
                align: s.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(o.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: Z ? O.NW.string(O.t.hdneLy) : O.NW.string(O.t.xRCMq6)
                    }),
                    (0, r.jsx)(s.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, r.jsx)(o.zxk, {
                            size: o.zxk.Sizes.SMALL,
                            color: o.zxk.Colors.RED,
                            look: o.zxk.Looks.FILLED,
                            disabled: !Z,
                            onClick: k,
                            children: O.NW.string(O.t.ebGf4u)
                        })
                    })
                ]
            })
        ]
    });
}
