(n.d(t, { Z: () => S }), n(388685), n(539854), n(953529));
var r = n(255367),
    i = n(73800),
    l = n(243814),
    o = n(442837),
    a = n(481060),
    s = n(668781),
    c = n(600164),
    d = n(434404),
    u = n(590157),
    p = n(280885),
    m = n(496675),
    b = n(768581),
    g = n(709054),
    f = n(51144),
    h = n(486199),
    x = n(366598),
    j = n(125657),
    v = n(725875),
    O = n(981631),
    y = n(388032),
    _ = n(704526);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                ((r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r));
            }));
    }
    return e;
}
function N(e) {
    var t,
        n,
        { application: i, guild: l, integration: o } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                r,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        r,
                        i = {},
                        l = Object.keys(e);
                    for (r = 0; r < l.length; r++) ((n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (r = 0; r < l.length; r++) ((n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['application', 'guild', 'integration']);
    return (0, r.jsx)(
        a.ConfirmModal,
        ((t = C({}, c)),
        (n = n =
            {
                header: y.intl.formatToPlainString(y.t['rL9d//'], { applicationName: i.name }),
                confirmText: y.intl.string(y.t.ebGf4u),
                cancelText: y.intl.string(y.t['ETE/oK']),
                onConfirm: () => {
                    d.Z.disableIntegration(l.id, o.id).catch(() => {
                        s.Z.show({
                            title: y.intl.string(y.t.wYqMmJ),
                            body: y.intl.string(y.t.A4Mnsr)
                        });
                    });
                },
                children: (0, r.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: y.intl.format(y.t.FGE8yc, { applicationName: i.name })
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
function S(e) {
    var t;
    let { guild: n, applicationIntegration: s, selectableWebhookChannels: d, editedWebhook: S, errors: E, canNavigate: I } = e,
        { application: T, integration: w, webhooks: Z } = s,
        [P, A] = (0, o.Wu)([m.Z], () => [m.Z.can(O.Plq.MANAGE_ROLES, n), null == T.bot || m.Z.canManageUser(O.Plq.MANAGE_GUILD, T.bot.id, n)], [T.bot, n]),
        k = (0, o.e7)([m.Z], () => m.Z.can(O.Plq.MANAGE_WEBHOOKS, n), [n]),
        D = i.useCallback(() => {
            I() &&
                (0, a.h7j)((e) =>
                    (0, r.jsx)(
                        N,
                        C(
                            {
                                guild: n,
                                application: T,
                                integration: w
                            },
                            e
                        )
                    )
                );
        }, [T, I, n, w]),
        R = i.useMemo(() => {
            let e = [
                {
                    icon: a.T39,
                    text: y.intl.formatToPlainString(y.t.gcdJ8P, { timestamp: g.default.extractTimestamp(w.id) })
                }
            ];
            return (
                null != w.user &&
                    e.push({
                        icon: a.tBG,
                        text: y.intl.formatToPlainString(y.t.qE7oqq, { user: f.ZP.getUserTag(w.user) })
                    }),
                e
            );
        }, [w.id, w.user]),
        L = i.useMemo(() => {
            var e;
            return null != T.bot && (null == (e = w.scopes) ? void 0 : e.includes(l.x.BOT))
                ? (0, r.jsx)(j.Z, {
                      guild: n,
                      applicationIntegration: s
                  })
                : (0, r.jsx)(a.Zbd, {
                      className: _.emptyCard,
                      editable: !0,
                      children: (0, r.jsx)(a.Text, {
                          color: 'text-muted',
                          variant: 'text-sm/normal',
                          children: y.intl.string(y.t.pfLnzc)
                      })
                  });
        }, [T.bot, s, n, w.scopes]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(h.Z, {
                name: T.name,
                imageSrc: null != (t = T.getIconURL(32)) ? t : b.pK['0'],
                details: R,
                isHeader: !0
            }),
            (null == T ? void 0 : T.description) != null
                ? (0, r.jsx)(p.Z, {
                      userBio: T.description,
                      className: _.headerDescription
                  })
                : null,
            P
                ? (0, r.jsx)(u.Z, {
                      application: T,
                      canNavigate: I,
                      guildId: n.id
                  })
                : null,
            (0, r.jsx)(a.$i$, { className: _.headerDivider }),
            null != T.bot
                ? (0, r.jsxs)('div', {
                      className: _.section,
                      children: [
                          (0, r.jsx)(x.Z, {
                              icon: (0, r.jsx)(a.wGt, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              title: y.intl.string(y.t.AOdOYm)
                          }),
                          L
                      ]
                  })
                : null,
            (0, r.jsxs)('div', {
                className: _.section,
                children: [
                    (0, r.jsx)(x.Z, {
                        icon: (0, r.jsx)(a.tYf, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        title: y.intl.string(y.t['t9ZX/P'])
                    }),
                    Z.length > 0
                        ? (0, r.jsx)(v.Z, {
                              webhooks: Z,
                              editedWebhook: S,
                              selectableWebhookChannels: d,
                              errors: E,
                              canNavigate: I
                          })
                        : (0, r.jsx)(a.Zbd, {
                              className: _.emptyCard,
                              editable: !0,
                              children: (0, r.jsx)(a.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: k ? y.intl.string(y.t.ahPd2d) : y.intl.string(y.t.axqYMj)
                              })
                          })
                ]
            }),
            (0, r.jsx)(a.$i$, { className: _.headerDivider }),
            (0, r.jsxs)(c.Z, {
                className: _.section,
                justify: c.Z.Justify.BETWEEN,
                align: c.Z.Align.CENTER,
                children: [
                    (0, r.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: A ? y.intl.string(y.t.hdneLy) : y.intl.string(y.t.xRCMq6)
                    }),
                    (0, r.jsx)(c.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, r.jsx)(a.zxk, {
                            variant: 'critical-primary',
                            size: 'sm',
                            text: y.intl.string(y.t.ebGf4u),
                            disabled: !A,
                            onClick: D
                        })
                    })
                ]
            })
        ]
    });
}
