n.d(t, { Z: () => S }), n(388685), n(539854), n(953529);
var i = n(951288),
    r = n(647438),
    l = n(243814),
    a = n(442837),
    o = n(481060),
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
    _ = n(85541);
function C(e) {
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
function N(e) {
    var t,
        n,
        { application: r, guild: l, integration: a } = e,
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
        o.ConfirmModal,
        ((t = C({}, c)),
        (n = n =
            {
                header: y.intl.formatToPlainString(y.t["rL9d/1"], { applicationName: r.name }),
                confirmText: y.intl.string(y.t.ebGf4m),
                cancelText: y.intl.string(y.t["ETE/oC"]),
                onConfirm: () => {
                    d.Z.disableIntegration(l.id, a.id).catch(() => {
                        s.Z.show({
                            title: y.intl.string(y.t.wYqMmI),
                            body: y.intl.string(y.t.A4Mnst),
                        });
                    });
                },
                children: (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: y.intl.format(y.t.FGE8ya, { applicationName: r.name }),
                }),
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
function S(e) {
    var t;
    let {
            guild: n,
            applicationIntegration: s,
            selectableWebhookChannels: d,
            editedWebhook: S,
            errors: E,
            canNavigate: I,
        } = e,
        { application: P, integration: w, webhooks: T } = s,
        [Z, k] = (0, a.Wu)(
            [m.Z],
            () => [m.Z.can(O.Plq.MANAGE_ROLES, n), null == P.bot || m.Z.canManageUser(O.Plq.MANAGE_GUILD, P.bot.id, n)],
            [P.bot, n],
        ),
        A = (0, a.e7)([m.Z], () => m.Z.can(O.Plq.MANAGE_WEBHOOKS, n), [n]),
        D = r.useCallback(() => {
            I() &&
                (0, o.h7j)((e) =>
                    (0, i.jsx)(
                        N,
                        C(
                            {
                                guild: n,
                                application: P,
                                integration: w,
                            },
                            e,
                        ),
                    ),
                );
        }, [P, I, n, w]),
        R = r.useMemo(() => {
            let e = [
                {
                    icon: o.T39,
                    text: y.intl.formatToPlainString(y.t.gcdJ8J, { timestamp: g.default.extractTimestamp(w.id) }),
                },
            ];
            return (
                null != w.user &&
                    e.push({
                        icon: o.tBG,
                        text: y.intl.formatToPlainString(y.t.qE7oqs, { user: f.ZP.getUserTag(w.user) }),
                    }),
                e
            );
        }, [w.id, w.user]),
        L = r.useMemo(() => {
            var e;
            return null != P.bot && (null == (e = w.scopes) ? void 0 : e.includes(l.x.BOT))
                ? (0, i.jsx)(j.Z, {
                      guild: n,
                      applicationIntegration: s,
                  })
                : (0, i.jsx)(o.Zbd, {
                      className: _.emptyCard,
                      editable: !0,
                      children: (0, i.jsx)(o.Text, {
                          color: "text-muted",
                          variant: "text-sm/normal",
                          children: y.intl.string(y.t.pfLnza),
                      }),
                  });
        }, [P.bot, s, n, w.scopes]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.Z, {
                name: P.name,
                imageSrc: null != (t = P.getIconURL(32)) ? t : b.pK["0"],
                details: R,
                isHeader: !0,
            }),
            (null == P ? void 0 : P.description) != null
                ? (0, i.jsx)(p.Z, {
                      userBio: P.description,
                      className: _.headerDescription,
                  })
                : null,
            Z
                ? (0, i.jsx)(u.Z, {
                      application: P,
                      canNavigate: I,
                      guildId: n.id,
                  })
                : null,
            (0, i.jsx)(o.izJ, { className: _.headerDivider }),
            null != P.bot
                ? (0, i.jsxs)("div", {
                      className: _.section,
                      children: [
                          (0, i.jsx)(x.Z, {
                              icon: (0, i.jsx)(o.wGt, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                              title: y.intl.string(y.t.AOdOYr),
                          }),
                          L,
                      ],
                  })
                : null,
            (0, i.jsxs)("div", {
                className: _.section,
                children: [
                    (0, i.jsx)(x.Z, {
                        icon: (0, i.jsx)(o.tYf, {
                            size: "md",
                            color: "currentColor",
                        }),
                        title: y.intl.string(y.t["t9ZX/I"]),
                    }),
                    T.length > 0
                        ? (0, i.jsx)(v.Z, {
                              webhooks: T,
                              editedWebhook: S,
                              selectableWebhookChannels: d,
                              errors: E,
                              canNavigate: I,
                          })
                        : (0, i.jsx)(o.Zbd, {
                              className: _.emptyCard,
                              editable: !0,
                              children: (0, i.jsx)(o.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: A ? y.intl.string(y.t.ahPd2Y) : y.intl.string(y.t.axqYMl),
                              }),
                          }),
                ],
            }),
            (0, i.jsx)(o.izJ, { className: _.headerDivider }),
            (0, i.jsxs)(c.Z, {
                className: _.section,
                justify: c.Z.Justify.BETWEEN,
                align: c.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: k ? y.intl.string(y.t.hdneL4) : y.intl.string(y.t.xRCMqx),
                    }),
                    (0, i.jsx)(c.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(o.Button, {
                            variant: "critical-primary",
                            size: "sm",
                            text: y.intl.string(y.t.ebGf4m),
                            disabled: !k,
                            onClick: D,
                        }),
                    }),
                ],
            }),
        ],
    });
}
