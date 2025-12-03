n.d(t, { Z: () => I }), n(388685), n(539854), n(953529);
var i = n(54381),
    r = n(473749),
    l = n(243814),
    a = n(793030),
    o = n(442837),
    s = n(481060),
    c = n(668781),
    d = n(600164),
    u = n(434404),
    p = n(590157),
    m = n(280885),
    b = n(496675),
    g = n(768581),
    f = n(709054),
    h = n(51144),
    x = n(486199),
    j = n(366598),
    v = n(125657),
    O = n(725875),
    y = n(981631),
    _ = n(388032),
    C = n(85541);
function N(e) {
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
function S(e) {
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
        ((t = N({}, s)),
        (n = n =
            {
                title: _.intl.formatToPlainString(_.t["rL9d/1"], { applicationName: r.name }),
                subtitle: _.intl.format(_.t.FGE8ya, { applicationName: r.name }),
                confirmText: _.intl.string(_.t.ebGf4m),
                onConfirm: () => {
                    u.Z.disableIntegration(l.id, o.id).catch(() => {
                        c.Z.show({
                            title: _.intl.string(_.t.wYqMmI),
                            body: _.intl.string(_.t.A4Mnst),
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
function I(e) {
    let {
            guild: t,
            applicationIntegration: n,
            selectableWebhookChannels: a,
            editedWebhook: c,
            errors: u,
            canNavigate: I,
        } = e,
        { application: E, integration: w, webhooks: P } = n,
        [T, Z] = (0, o.Wu)(
            [b.Z],
            () => [b.Z.can(y.Plq.MANAGE_ROLES, t), null == E.bot || b.Z.canManageUser(y.Plq.MANAGE_GUILD, E.bot.id, t)],
            [E.bot, t],
        ),
        k = (0, o.e7)([b.Z], () => b.Z.can(y.Plq.MANAGE_WEBHOOKS, t), [t]),
        A = r.useCallback(() => {
            I() &&
                (0, s.h7j)((e) =>
                    (0, i.jsx)(
                        S,
                        N(
                            {
                                guild: t,
                                application: E,
                                integration: w,
                            },
                            e,
                        ),
                    ),
                );
        }, [E, I, t, w]),
        D = r.useMemo(() => {
            let e = [
                {
                    icon: s.T39,
                    text: _.intl.formatToPlainString(_.t.gcdJ8J, { timestamp: f.default.extractTimestamp(w.id) }),
                },
            ];
            return (
                null != w.user &&
                    e.push({
                        icon: s.tBG,
                        text: _.intl.formatToPlainString(_.t.qE7oqs, { user: h.ZP.getUserTag(w.user) }),
                    }),
                e
            );
        }, [w.id, w.user]),
        R = r.useMemo(() => {
            var e;
            return null != E.bot && (null == (e = w.scopes) ? void 0 : e.includes(l.x.BOT))
                ? (0, i.jsx)(v.Z, {
                      guild: t,
                      applicationIntegration: n,
                  })
                : (0, i.jsx)(s.Zbd, {
                      className: C.emptyCard,
                      editable: !0,
                      children: (0, i.jsx)(s.Text, {
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children: _.intl.string(_.t.pfLnza),
                      }),
                  });
        }, [E.bot, n, t, w.scopes]);
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
                ? (0, i.jsx)(m.Z, {
                      userBio: E.description,
                      className: C.headerDescription,
                  })
                : null,
            T
                ? (0, i.jsx)(p.Z, {
                      application: E,
                      canNavigate: I,
                      guildId: t.id,
                  })
                : null,
            (0, i.jsx)(s.izJ, { className: C.headerDivider }),
            null != E.bot
                ? (0, i.jsxs)("div", {
                      className: C.section,
                      children: [
                          (0, i.jsx)(j.Z, {
                              icon: (0, i.jsx)(s.wGt, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                              title: _.intl.string(_.t.AOdOYr),
                          }),
                          R,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: C.section,
                children: [
                    (0, i.jsx)(j.Z, {
                        icon: (0, i.jsx)(s.tYf, {
                            size: "md",
                            color: "currentColor",
                        }),
                        title: _.intl.string(_.t["t9ZX/I"]),
                    }),
                    P.length > 0
                        ? (0, i.jsx)(O.Z, {
                              webhooks: P,
                              editedWebhook: c,
                              selectableWebhookChannels: a,
                              errors: u,
                              canNavigate: I,
                          })
                        : (0, i.jsx)(s.Zbd, {
                              className: C.emptyCard,
                              editable: !0,
                              children: (0, i.jsx)(s.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: k ? _.intl.string(_.t.ahPd2Y) : _.intl.string(_.t.axqYMl),
                              }),
                          }),
                ],
            }),
            (0, i.jsx)(s.izJ, { className: C.headerDivider }),
            (0, i.jsxs)(d.Z, {
                className: C.section,
                justify: d.Z.Justify.BETWEEN,
                align: d.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(s.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: Z ? _.intl.string(_.t.hdneL4) : _.intl.string(_.t.xRCMqx),
                    }),
                    (0, i.jsx)(d.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(s.Button, {
                            variant: "critical-primary",
                            size: "sm",
                            text: _.intl.string(_.t.ebGf4m),
                            disabled: !Z,
                            onClick: A,
                        }),
                    }),
                ],
            }),
        ],
    });
}
