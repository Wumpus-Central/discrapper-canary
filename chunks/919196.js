(n.d(t, { Z: () => S }), n(388685), n(539854), n(953529));
var i = n(255367),
    r = n(73800),
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
            i = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                var i;
                ((i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = i));
            }));
    }
    return e;
}
function N(e) {
    var t,
        n,
        { application: r, guild: l, integration: o } = e,
        c = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) ((n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]));
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++) ((n = l[i]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]));
            }
            return r;
        })(e, ['application', 'guild', 'integration']);
    return (0, i.jsx)(
        a.ConfirmModal,
        ((t = C({}, c)),
        (n = n =
            {
                header: y.intl.formatToPlainString(y.t['rL9d//'], { applicationName: r.name }),
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
                children: (0, i.jsx)(a.Text, {
                    variant: 'text-md/normal',
                    children: y.intl.format(y.t.FGE8yc, { applicationName: r.name })
                })
            }),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
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
    let { guild: n, applicationIntegration: s, selectableWebhookChannels: d, editedWebhook: S, errors: Z, canNavigate: I } = e,
        { application: E, integration: w, webhooks: T } = s,
        [P, k] = (0, o.Wu)([m.Z], () => [m.Z.can(O.Plq.MANAGE_ROLES, n), null == E.bot || m.Z.canManageUser(O.Plq.MANAGE_GUILD, E.bot.id, n)], [E.bot, n]),
        A = (0, o.e7)([m.Z], () => m.Z.can(O.Plq.MANAGE_WEBHOOKS, n), [n]),
        D = r.useCallback(() => {
            I() &&
                (0, a.h7j)((e) =>
                    (0, i.jsx)(
                        N,
                        C(
                            {
                                guild: n,
                                application: E,
                                integration: w
                            },
                            e
                        )
                    )
                );
        }, [E, I, n, w]),
        R = r.useMemo(() => {
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
        L = r.useMemo(() => {
            var e;
            return null != E.bot && (null == (e = w.scopes) ? void 0 : e.includes(l.x.BOT))
                ? (0, i.jsx)(j.Z, {
                      guild: n,
                      applicationIntegration: s
                  })
                : (0, i.jsx)(a.Zbd, {
                      className: _.emptyCard,
                      editable: !0,
                      children: (0, i.jsx)(a.Text, {
                          color: 'text-muted',
                          variant: 'text-sm/normal',
                          children: y.intl.string(y.t.pfLnzc)
                      })
                  });
        }, [E.bot, s, n, w.scopes]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.Z, {
                name: E.name,
                imageSrc: null != (t = E.getIconURL(32)) ? t : b.pK['0'],
                details: R,
                isHeader: !0
            }),
            (null == E ? void 0 : E.description) != null
                ? (0, i.jsx)(p.Z, {
                      userBio: E.description,
                      className: _.headerDescription
                  })
                : null,
            P
                ? (0, i.jsx)(u.Z, {
                      application: E,
                      canNavigate: I,
                      guildId: n.id
                  })
                : null,
            (0, i.jsx)(a.$i$, { className: _.headerDivider }),
            null != E.bot
                ? (0, i.jsxs)('div', {
                      className: _.section,
                      children: [
                          (0, i.jsx)(x.Z, {
                              icon: (0, i.jsx)(a.wGt, {
                                  size: 'xs',
                                  color: 'currentColor'
                              }),
                              title: y.intl.string(y.t.AOdOYm)
                          }),
                          L
                      ]
                  })
                : null,
            (0, i.jsxs)('div', {
                className: _.section,
                children: [
                    (0, i.jsx)(x.Z, {
                        icon: (0, i.jsx)(a.tYf, {
                            size: 'md',
                            color: 'currentColor'
                        }),
                        title: y.intl.string(y.t['t9ZX/P'])
                    }),
                    T.length > 0
                        ? (0, i.jsx)(v.Z, {
                              webhooks: T,
                              editedWebhook: S,
                              selectableWebhookChannels: d,
                              errors: Z,
                              canNavigate: I
                          })
                        : (0, i.jsx)(a.Zbd, {
                              className: _.emptyCard,
                              editable: !0,
                              children: (0, i.jsx)(a.Text, {
                                  color: 'text-muted',
                                  variant: 'text-sm/normal',
                                  children: A ? y.intl.string(y.t.ahPd2d) : y.intl.string(y.t.axqYMj)
                              })
                          })
                ]
            }),
            (0, i.jsx)(a.$i$, { className: _.headerDivider }),
            (0, i.jsxs)(c.Z, {
                className: _.section,
                justify: c.Z.Justify.BETWEEN,
                align: c.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-sm/normal',
                        children: k ? y.intl.string(y.t.hdneLy) : y.intl.string(y.t.xRCMq6)
                    }),
                    (0, i.jsx)(c.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(a.zxk, {
                            variant: 'critical-primary',
                            size: 'sm',
                            text: y.intl.string(y.t.ebGf4u),
                            disabled: !k,
                            onClick: D
                        })
                    })
                ]
            })
        ]
    });
}
