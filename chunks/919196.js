n.d(t, { Z: () => T }), n(388685), n(539854), n(953529);
var i = n(54381),
    r = n(473749),
    l = n(243814),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    c = n(668781),
    d = n(600164),
    u = n(434404),
    m = n(590157),
    b = n(280885),
    p = n(496675),
    g = n(768581),
    f = n(709054),
    h = n(51144),
    x = n(486199),
    j = n(366598),
    v = n(125657),
    O = n(725875),
    y = n(981631),
    C = n(388032),
    N = n(27260);
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: i,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = i);
            });
    }
    return e;
}
function I(e) {
    var t,
        n,
        { application: r, guild: l, integration: o } = e,
        s = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                r = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        r = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                    return r;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            }
            return r;
        })(e, ["application", "guild", "integration"]);
    return (0, i.jsx)(
        a.ConfirmModal,
        ((t = S({}, s)),
        (n = n =
            {
                title: C.intl.formatToPlainString(C.t["rL9d/1"], { applicationName: r.name }),
                subtitle: C.intl.format(C.t.FGE8ya, { applicationName: r.name }),
                confirmText: C.intl.string(C.t.ebGf4m),
                onConfirm: () => {
                    u.Z.disableIntegration(l.id, o.id).catch(() => {
                        c.Z.show({
                            title: C.intl.string(C.t.wYqMmI),
                            body: C.intl.string(C.t.A4Mnst),
                        });
                    });
                },
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
        t),
    );
}
function T(e) {
    let {
            guild: t,
            applicationIntegration: n,
            selectableWebhookChannels: a,
            editedWebhook: c,
            errors: u,
            canNavigate: T,
        } = e,
        { application: E, integration: Z, webhooks: w } = n,
        [P, _] = (0, o.Wu)(
            [p.Z],
            () => [p.Z.can(y.Plq.MANAGE_ROLES, t), null == E.bot || p.Z.canManageUser(y.Plq.MANAGE_GUILD, E.bot.id, t)],
            [E.bot, t],
        ),
        k = (0, o.e7)([p.Z], () => p.Z.can(y.Plq.MANAGE_WEBHOOKS, t), [t]),
        A = r.useCallback(() => {
            T() &&
                (0, s.h7j)((e) =>
                    (0, i.jsx)(
                        I,
                        S(
                            {
                                guild: t,
                                application: E,
                                integration: Z,
                            },
                            e,
                        ),
                    ),
                );
        }, [E, T, t, Z]),
        D = r.useMemo(() => {
            let e = [
                {
                    icon: s.T39,
                    text: C.intl.formatToPlainString(C.t.gcdJ8J, { timestamp: f.default.extractTimestamp(Z.id) }),
                },
            ];
            return (
                null != Z.user &&
                    e.push({
                        icon: s.tBG,
                        text: C.intl.formatToPlainString(C.t.qE7oqs, { user: h.ZP.getUserTag(Z.user) }),
                    }),
                e
            );
        }, [Z.id, Z.user]),
        R = r.useMemo(() => {
            var e;
            return null != E.bot && (null == (e = Z.scopes) ? void 0 : e.includes(l.x.BOT))
                ? (0, i.jsx)(v.Z, {
                      guild: t,
                      applicationIntegration: n,
                  })
                : (0, i.jsx)(s.Zbd, {
                      className: N.emptyCard,
                      editable: !0,
                      children: (0, i.jsx)(s.Text, {
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children: C.intl.string(C.t.pfLnza),
                      }),
                  });
        }, [E.bot, n, t, Z.scopes]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(x.Z, {
                name: E.name,
                imageSrc: g.ZP.getApplicationIconURL({
                    id: E.id,
                    icon: E.icon,
                    size: 32,
                }),
                details: D,
                isHeader: !0,
            }),
            (null == E ? void 0 : E.description) != null
                ? (0, i.jsx)(b.Z, {
                      userBio: E.description,
                      className: N.headerDescription,
                  })
                : null,
            P
                ? (0, i.jsx)(m.Z, {
                      application: E,
                      canNavigate: T,
                      guildId: t.id,
                  })
                : null,
            (0, i.jsx)(s.izJ, { className: N.headerDivider }),
            null != E.bot
                ? (0, i.jsxs)("div", {
                      className: N.section,
                      children: [
                          (0, i.jsx)(j.Z, {
                              icon: (0, i.jsx)(s.wGt, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                              title: C.intl.string(C.t.AOdOYr),
                          }),
                          R,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: N.section,
                children: [
                    (0, i.jsx)(j.Z, {
                        icon: (0, i.jsx)(s.tYf, {
                            size: "md",
                            color: "currentColor",
                        }),
                        title: C.intl.string(C.t["t9ZX/I"]),
                    }),
                    w.length > 0
                        ? (0, i.jsx)(O.Z, {
                              webhooks: w,
                              editedWebhook: c,
                              selectableWebhookChannels: a,
                              errors: u,
                              canNavigate: T,
                          })
                        : (0, i.jsx)(s.Zbd, {
                              className: N.emptyCard,
                              editable: !0,
                              children: (0, i.jsx)(s.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: k ? C.intl.string(C.t.ahPd2Y) : C.intl.string(C.t.axqYMl),
                              }),
                          }),
                ],
            }),
            (0, i.jsx)(s.izJ, { className: N.headerDivider }),
            (0, i.jsxs)(d.Z, {
                className: N.section,
                justify: d.Z.Justify.BETWEEN,
                align: d.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(s.Text, {
                        color: "text-default",
                        variant: "text-sm/normal",
                        children: _ ? C.intl.string(C.t.hdneL4) : C.intl.string(C.t.xRCMqx),
                    }),
                    (0, i.jsx)(d.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(s.Button, {
                            variant: "critical-primary",
                            size: "sm",
                            text: C.intl.string(C.t.ebGf4m),
                            disabled: !_,
                            onClick: A,
                        }),
                    }),
                ],
            }),
        ],
    });
}
