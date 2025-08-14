n.d(t, { Z: () => Z }), n(388685), n(539854), n(953529);
var i = n(255367),
    r = n(73800),
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
    y = n(981631),
    O = n(388032),
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
                header: O.intl.formatToPlainString(O.t["rL9d//"], { applicationName: r.name }),
                confirmText: O.intl.string(O.t.ebGf4u),
                cancelText: O.intl.string(O.t["ETE/oK"]),
                onConfirm: () => {
                    d.Z.disableIntegration(l.id, a.id).catch(() => {
                        s.Z.show({
                            title: O.intl.string(O.t.wYqMmJ),
                            body: O.intl.string(O.t.A4Mnsr),
                        });
                    });
                },
                children: (0, i.jsx)(o.Text, {
                    variant: "text-md/normal",
                    children: O.intl.format(O.t.FGE8yc, { applicationName: r.name }),
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
function Z(e) {
    var t;
    let {
            guild: n,
            applicationIntegration: s,
            selectableWebhookChannels: d,
            editedWebhook: Z,
            errors: S,
            canNavigate: w,
        } = e,
        { application: I, integration: P, webhooks: T } = s,
        [E, k] = (0, a.Wu)(
            [m.Z],
            () => [m.Z.can(y.Plq.MANAGE_ROLES, n), null == I.bot || m.Z.canManageUser(y.Plq.MANAGE_GUILD, I.bot.id, n)],
            [I.bot, n],
        ),
        A = (0, a.e7)([m.Z], () => m.Z.can(y.Plq.MANAGE_WEBHOOKS, n), [n]),
        D = r.useCallback(() => {
            w() &&
                (0, o.h7j)((e) =>
                    (0, i.jsx)(
                        N,
                        C(
                            {
                                guild: n,
                                application: I,
                                integration: P,
                            },
                            e,
                        ),
                    ),
                );
        }, [I, w, n, P]),
        R = r.useMemo(() => {
            let e = [
                {
                    icon: o.T39,
                    text: O.intl.formatToPlainString(O.t.gcdJ8P, { timestamp: g.default.extractTimestamp(P.id) }),
                },
            ];
            return (
                null != P.user &&
                    e.push({
                        icon: o.tBG,
                        text: O.intl.formatToPlainString(O.t.qE7oqq, { user: f.ZP.getUserTag(P.user) }),
                    }),
                e
            );
        }, [P.id, P.user]),
        L = r.useMemo(() => {
            var e;
            return null != I.bot && (null == (e = P.scopes) ? void 0 : e.includes(l.x.BOT))
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
                          children: O.intl.string(O.t.pfLnzc),
                      }),
                  });
        }, [I.bot, s, n, P.scopes]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(h.Z, {
                name: I.name,
                imageSrc: null != (t = I.getIconURL(32)) ? t : b.pK["0"],
                details: R,
                isHeader: !0,
            }),
            (null == I ? void 0 : I.description) != null
                ? (0, i.jsx)(p.Z, {
                      userBio: I.description,
                      className: _.headerDescription,
                  })
                : null,
            E
                ? (0, i.jsx)(u.Z, {
                      application: I,
                      canNavigate: w,
                      guildId: n.id,
                  })
                : null,
            (0, i.jsx)(o.$i$, { className: _.headerDivider }),
            null != I.bot
                ? (0, i.jsxs)("div", {
                      className: _.section,
                      children: [
                          (0, i.jsx)(x.Z, {
                              icon: (0, i.jsx)(o.wGt, {
                                  size: "xs",
                                  color: "currentColor",
                              }),
                              title: O.intl.string(O.t.AOdOYm),
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
                        title: O.intl.string(O.t["t9ZX/P"]),
                    }),
                    T.length > 0
                        ? (0, i.jsx)(v.Z, {
                              webhooks: T,
                              editedWebhook: Z,
                              selectableWebhookChannels: d,
                              errors: S,
                              canNavigate: w,
                          })
                        : (0, i.jsx)(o.Zbd, {
                              className: _.emptyCard,
                              editable: !0,
                              children: (0, i.jsx)(o.Text, {
                                  color: "text-muted",
                                  variant: "text-sm/normal",
                                  children: A ? O.intl.string(O.t.ahPd2d) : O.intl.string(O.t.axqYMj),
                              }),
                          }),
                ],
            }),
            (0, i.jsx)(o.$i$, { className: _.headerDivider }),
            (0, i.jsxs)(c.Z, {
                className: _.section,
                justify: c.Z.Justify.BETWEEN,
                align: c.Z.Align.CENTER,
                children: [
                    (0, i.jsx)(o.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: k ? O.intl.string(O.t.hdneLy) : O.intl.string(O.t.xRCMq6),
                    }),
                    (0, i.jsx)(c.Z.Child, {
                        grow: 0,
                        shrink: 0,
                        children: (0, i.jsx)(o.zxk, {
                            variant: "critical-primary",
                            size: "sm",
                            text: O.intl.string(O.t.ebGf4u),
                            disabled: !k,
                            onClick: D,
                        }),
                    }),
                ],
            }),
        ],
    });
}
