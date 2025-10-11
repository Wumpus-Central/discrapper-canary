n.d(t, { Z: () => E }), n(35282), n(388685), n(539854);
var i = n(951288),
    r = n(647438),
    l = n(120356),
    a = n.n(l),
    o = n(544891),
    s = n(846519),
    c = n(481060),
    d = n(668781),
    u = n(139387),
    p = n(308063),
    m = n(600164),
    b = n(208567),
    g = n(598077),
    f = n(259580),
    h = n(768581),
    x = n(572004),
    j = n(709054),
    v = n(51144),
    y = n(486199),
    O = n(981631),
    _ = n(388032),
    C = n(632256);
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, i);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function I(e, t) {
    return null != t && /^data:/.test(t)
        ? t
        : (0, h.ov)({
              id: e.id,
              avatar: t,
              discriminator: O.fo$,
          });
}
function E(e) {
    let {
            id: t,
            webhook: n,
            editedWebhook: l,
            channelOptions: h,
            isExpanded: E,
            isNew: P,
            errors: w,
            onToggleExpand: T,
        } = e,
        [Z, k] = r.useState(!1),
        [A] = r.useState(new s.V7());
    r.useEffect(() => () => A.stop(), [A]);
    let D = r.useMemo(() => I(n, n.avatar), [n]),
        R = r.useCallback(() => {
            let e = "".concat((0, o.K0)(!1)).concat(O.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
            (0, x.JG)(e);
        }, [n]),
        L = r.useCallback(() => {
            (0, c.h7j)((e) =>
                (0, i.jsx)(
                    c.ConfirmModal,
                    S(N({}, e), {
                        header: _.intl.formatToPlainString(_.t.QVFjHh, { name: n.name }),
                        confirmText: _.intl.string(_.t["W+K1Fh"]),
                        cancelText: _.intl.string(_.t.xNhj0N),
                        onConfirm: () => {
                            p.Z.delete(n.guild_id, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t
                                    ? d.Z.show({
                                          title: _.intl.string(_.t.N5riYm),
                                          body: _.intl.string(_.t.eAxcCQ),
                                      })
                                    : d.Z.show({
                                          title: _.intl.string(_.t.N5riYm),
                                          body: _.intl.string(_.t["/4TwKS"]),
                                      });
                            });
                        },
                        children: (0, i.jsx)(c.Text, {
                            variant: "text-md/normal",
                            children: _.intl.format(_.t["rIWe+/"], { name: n.name }),
                        }),
                    }),
                ),
            );
        }, [n.guild_id, n.id, n.name]),
        M = [];
    null != n.user
        ? M.push({
              icon: c.T39,
              text: _.intl.formatToPlainString(_.t["7EcUbm"], {
                  user: ((e) => {
                      if (null == e) return null;
                      let t = new g.default(e);
                      return v.ZP.getUserTag(t);
                  })(n.user),
                  timestamp: j.default.extractTimestamp(n.id),
              }),
          })
        : M.push({
              icon: c.T39,
              text: _.intl.formatToPlainString(_.t["7mv59P"], { timestamp: j.default.extractTimestamp(n.id) }),
          });
    let B = null;
    return (
        E &&
            null != l &&
            (B = (0, i.jsxs)("div", {
                className: C.body,
                children: [
                    (0, i.jsx)(c.izJ, { className: C.topDivider }),
                    (0, i.jsxs)(m.Z, {
                        children: [
                            (0, i.jsx)(m.Z.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, i.jsxs)(m.Z, {
                                    className: C.avatarWrapper,
                                    direction: m.Z.Direction.VERTICAL,
                                    children: [
                                        (0, i.jsx)(b.Z, {
                                            image: l.avatar,
                                            onChange: (e) => {
                                                u.Z.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => I(n, e),
                                            imageClassName: C.avatarUploaderInner,
                                            showIcon: !0,
                                        }),
                                        null != w.avatar && "" !== w.avatar
                                            ? (0, i.jsx)(c.Text, {
                                                  color: "text-danger",
                                                  variant: "text-sm/normal",
                                                  children: w.avatar,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, i.jsxs)(m.Z, {
                                direction: m.Z.Direction.VERTICAL,
                                children: [
                                    (0, i.jsxs)(m.Z, {
                                        children: [
                                            (0, i.jsx)(m.Z.Child, {
                                                wrap: !0,
                                                basis: "50%",
                                                children: (0, i.jsx)(c.oil, {
                                                    label: _.intl.string(_.t.ukdxur),
                                                    value: l.name,
                                                    onChange: (e) => {
                                                        u.Z.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: w.name,
                                                }),
                                            }),
                                            (0, i.jsx)(m.Z.Child, {
                                                basis: "50%",
                                                children: (0, i.jsx)("div", {
                                                    children: (0, i.jsx)(c.VcW, {
                                                        label: _.intl.string(_.t.GK18KC),
                                                        value: l.channel_id,
                                                        options: h,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: _.intl.string(_.t.r2pts7),
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(c.izJ, { className: C.bottomDivider }),
                                    (0, i.jsxs)(m.Z, {
                                        children: [
                                            (0, i.jsx)(c.aML, {
                                                "data-migration-pending": !0,
                                                text: _.intl.string(_.t.wwdb3t),
                                                forceOpen: Z,
                                                color: c.r6K.GREEN,
                                                disableTooltipPointerEvents: !0,
                                                children: (e) => {
                                                    var {
                                                            onClick: t,
                                                            onMouseEnter: r,
                                                            onMouseLeave: l,
                                                            onBlur: a,
                                                            onFocus: o,
                                                        } = e,
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
                                                                    for (i = 0; i < l.length; i++)
                                                                        (n = l[i]), t.indexOf(n) >= 0 || (r[n] = e[n]);
                                                                    return r;
                                                                })(e, t);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var l = Object.getOwnPropertySymbols(e);
                                                                for (i = 0; i < l.length; i++)
                                                                    (n = l[i]),
                                                                        !(t.indexOf(n) >= 0) &&
                                                                            Object.prototype.propertyIsEnumerable.call(
                                                                                e,
                                                                                n,
                                                                            ) &&
                                                                            (r[n] = e[n]);
                                                            }
                                                            return r;
                                                        })(e, [
                                                            "onClick",
                                                            "onMouseEnter",
                                                            "onMouseLeave",
                                                            "onBlur",
                                                            "onFocus",
                                                        ]);
                                                    return (0, i.jsx)("div", {
                                                        "data-button-hoisted-classname-wrapper": !0,
                                                        className: C.copyButton,
                                                        children: (0, i.jsx)(
                                                            c.Button,
                                                            S(
                                                                N(
                                                                    {
                                                                        variant: "secondary",
                                                                        size: "sm",
                                                                        text: _.intl.string(_.t.Ae9rUV),
                                                                    },
                                                                    s,
                                                                ),
                                                                {
                                                                    "aria-label": "",
                                                                    onClick: () => {
                                                                        null == t || t(),
                                                                            k(!0),
                                                                            c.uvj.announce(_.intl.string(_.t.wwdb3t)),
                                                                            A.start(1000, () => k(!1)),
                                                                            R();
                                                                    },
                                                                    disabled: null == n.token || "" === n.token,
                                                                },
                                                            ),
                                                        ),
                                                    });
                                                },
                                            }),
                                            (0, i.jsx)(c.Button, {
                                                variant: "critical-secondary",
                                                size: "sm",
                                                text: _.intl.string(_.t.jVrUnJ),
                                                onClick: L,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })),
        (0, i.jsx)(c.Zbd, {
            editable: !0,
            id: t,
            className: a()(C.card, P ? C.pulse : null),
            children: (0, i.jsxs)(m.Z, {
                direction: m.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(c.P3F, {
                        className: C.header,
                        "aria-expanded": E,
                        onClick: T,
                        children: (0, i.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(y.Z, {
                                    name: n.name,
                                    imageSrc: D,
                                    details: M,
                                }),
                                (0, i.jsx)(f.Z, {
                                    className: C.expandIcon,
                                    expanded: E,
                                    "aria-hidden": !0,
                                }),
                            ],
                        }),
                    }),
                    B,
                ],
            }),
        })
    );
}
