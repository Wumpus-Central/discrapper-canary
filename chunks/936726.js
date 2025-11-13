n.d(t, { Z: () => w }), n(35282), n(388685), n(539854);
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
    O = n(486199),
    y = n(981631),
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
function E(e, t) {
    return null != t && /^data:/.test(t)
        ? t
        : (0, h.ov)({
              id: e.id,
              avatar: t,
              discriminator: y.fo$,
          });
}
function w(e) {
    let {
            id: t,
            webhook: n,
            editedWebhook: l,
            channelOptions: h,
            isExpanded: w,
            isNew: I,
            errors: P,
            onToggleExpand: T,
        } = e,
        [Z, k] = r.useState(!1),
        [D] = r.useState(new s.V7());
    r.useEffect(() => () => D.stop(), [D]);
    let A = r.useMemo(() => E(n, n.avatar), [n]),
        R = r.useCallback(() => {
            let e = "".concat((0, o.K0)(!1)).concat(y.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
            (0, x.JG)(e);
        }, [n]),
        L = r.useCallback(() => {
            (0, c.h7j)((e) =>
                (0, i.jsx)(
                    c.ConfirmModal,
                    S(N({}, e), {
                        header: _.intl.formatToPlainString(_.t.QVFjHh, { name: n.name }),
                        confirmText: _.intl.string(_.t["W+K1Fs"]),
                        cancelText: _.intl.string(_.t.xNhj0O),
                        onConfirm: () => {
                            p.Z.delete(n.guild_id, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t
                                    ? d.Z.show({
                                          title: _.intl.string(_.t.N5riYn),
                                          body: _.intl.string(_.t.eAxcCc),
                                      })
                                    : d.Z.show({
                                          title: _.intl.string(_.t.N5riYn),
                                          body: _.intl.string(_.t["/4TwKf"]),
                                      });
                            });
                        },
                        children: (0, i.jsx)(c.Text, {
                            variant: "text-md/normal",
                            children: _.intl.format(_.t["rIWe+5"], { name: n.name }),
                        }),
                    }),
                ),
            );
        }, [n.guild_id, n.id, n.name]),
        M = [];
    null != n.user
        ? M.push({
              icon: c.T39,
              text: _.intl.formatToPlainString(_.t["7EcUbr"], {
                  user: ((e) => {
                      if (null == e) return null;
                      let t = new g.Z(e);
                      return v.ZP.getUserTag(t);
                  })(n.user),
                  timestamp: j.default.extractTimestamp(n.id),
              }),
          })
        : M.push({
              icon: c.T39,
              text: _.intl.formatToPlainString(_.t["7mv59O"], { timestamp: j.default.extractTimestamp(n.id) }),
          });
    let U = null;
    return (
        w &&
            null != l &&
            (U = (0, i.jsxs)("div", {
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
                                            makeURL: (e) => E(n, e),
                                            imageClassName: C.avatarUploaderInner,
                                            showIcon: !0,
                                        }),
                                        null != P.avatar && "" !== P.avatar
                                            ? (0, i.jsx)(c.Text, {
                                                  color: "text-danger",
                                                  variant: "text-sm/normal",
                                                  children: P.avatar,
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
                                                    label: _.intl.string(_.t.ukdxuo),
                                                    value: l.name,
                                                    onChange: (e) => {
                                                        u.Z.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: P.name,
                                                }),
                                            }),
                                            (0, i.jsx)(m.Z.Child, {
                                                basis: "50%",
                                                children: (0, i.jsx)("div", {
                                                    children: (0, i.jsx)(c.VcW, {
                                                        label: _.intl.string(_.t.GK18KJ),
                                                        value: l.channel_id,
                                                        options: h,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: _.intl.string(_.t.r2ptsz),
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
                                                text: _.intl.string(_.t.wwdb3g),
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
                                                                        text: _.intl.string(_.t.Ae9rUW),
                                                                    },
                                                                    s,
                                                                ),
                                                                {
                                                                    "aria-label": "",
                                                                    onClick: () => {
                                                                        null == t || t(),
                                                                            k(!0),
                                                                            c.uvj.announce(_.intl.string(_.t.wwdb3g)),
                                                                            D.start(1000, () => k(!1)),
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
                                                text: _.intl.string(_.t.jVrUnC),
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
            className: a()(C.card, I ? C.pulse : null),
            children: (0, i.jsxs)(m.Z, {
                direction: m.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(c.P3F, {
                        className: C.header,
                        "aria-expanded": w,
                        onClick: T,
                        children: (0, i.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(O.Z, {
                                    name: n.name,
                                    imageSrc: A,
                                    details: M,
                                }),
                                (0, i.jsx)(f.Z, {
                                    className: C.expandIcon,
                                    expanded: w,
                                    "aria-hidden": !0,
                                }),
                            ],
                        }),
                    }),
                    U,
                ],
            }),
        })
    );
}
