n.d(t, { Z: () => I }), n(35282), n(388685), n(539854);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(544891),
    s = n(846519),
    c = n(248514),
    d = n(481060),
    u = n(668781),
    p = n(139387),
    m = n(308063),
    b = n(600164),
    g = n(208567),
    f = n(598077),
    h = n(259580),
    x = n(768581),
    j = n(572004),
    v = n(709054),
    O = n(51144),
    y = n(486199),
    _ = n(981631),
    C = n(388032),
    N = n(632256);
function S(e, t) {
    return null != t && /^data:/.test(t)
        ? t
        : (0, x.ov)({
              id: e.id,
              avatar: t,
              discriminator: _.fo$,
          });
}
function I(e) {
    let {
            id: t,
            webhook: n,
            editedWebhook: l,
            channelOptions: x,
            isExpanded: I,
            isNew: E,
            errors: w,
            onToggleExpand: P,
        } = e,
        [T, Z] = r.useState(!1),
        [k] = r.useState(new s.V7());
    r.useEffect(() => () => k.stop(), [k]);
    let A = r.useMemo(() => S(n, n.avatar), [n]),
        D = r.useCallback(() => {
            let e = "".concat((0, o.K0)(!1)).concat(_.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
            (0, j.JG)(e);
        }, [n]),
        R = r.useCallback(() => {
            (0, c.Z)({
                title: C.intl.formatToPlainString(C.t.QVFjHh, { name: n.name }),
                subtitle: C.intl.format(C.t["rIWe+5"], { name: n.name }),
                confirmText: C.intl.string(C.t["W+K1Fs"]),
                cancelText: C.intl.string(C.t.xNhj0O),
                onConfirm: () => {
                    m.Z.delete(n.guild_id, n.id).catch((e) => {
                        let { status: t } = e;
                        429 === t
                            ? u.Z.show({
                                  title: C.intl.string(C.t.N5riYn),
                                  body: C.intl.string(C.t.eAxcCc),
                              })
                            : u.Z.show({
                                  title: C.intl.string(C.t.N5riYn),
                                  body: C.intl.string(C.t["/4TwKf"]),
                              });
                    });
                },
            });
        }, [n.guild_id, n.id, n.name]),
        L = [];
    null != n.user
        ? L.push({
              icon: d.T39,
              text: C.intl.formatToPlainString(C.t["7EcUbr"], {
                  user: ((e) => {
                      if (null == e) return null;
                      let t = new f.Z(e);
                      return O.ZP.getUserTag(t);
                  })(n.user),
                  timestamp: v.default.extractTimestamp(n.id),
              }),
          })
        : L.push({
              icon: d.T39,
              text: C.intl.formatToPlainString(C.t["7mv59O"], { timestamp: v.default.extractTimestamp(n.id) }),
          });
    let M = null;
    return (
        I &&
            null != l &&
            (M = (0, i.jsxs)("div", {
                className: N.body,
                children: [
                    (0, i.jsx)(d.izJ, { className: N.topDivider }),
                    (0, i.jsxs)(b.Z, {
                        children: [
                            (0, i.jsx)(b.Z.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, i.jsxs)(b.Z, {
                                    className: N.avatarWrapper,
                                    direction: b.Z.Direction.VERTICAL,
                                    children: [
                                        (0, i.jsx)(g.Z, {
                                            image: l.avatar,
                                            onChange: (e) => {
                                                p.Z.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => S(n, e),
                                            imageClassName: N.avatarUploaderInner,
                                            showIcon: !0,
                                        }),
                                        null != w.avatar && "" !== w.avatar
                                            ? (0, i.jsx)(d.Text, {
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/normal",
                                                  children: w.avatar,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, i.jsxs)(b.Z, {
                                direction: b.Z.Direction.VERTICAL,
                                children: [
                                    (0, i.jsxs)(b.Z, {
                                        children: [
                                            (0, i.jsx)(b.Z.Child, {
                                                wrap: !0,
                                                basis: "50%",
                                                children: (0, i.jsx)(d.oil, {
                                                    label: C.intl.string(C.t.ukdxuo),
                                                    value: l.name,
                                                    onChange: (e) => {
                                                        p.Z.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: w.name,
                                                }),
                                            }),
                                            (0, i.jsx)(b.Z.Child, {
                                                basis: "50%",
                                                children: (0, i.jsx)("div", {
                                                    children: (0, i.jsx)(d.VcW, {
                                                        label: C.intl.string(C.t.GK18KJ),
                                                        value: l.channel_id,
                                                        options: x,
                                                        onChange: (e) => {
                                                            p.Z.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: C.intl.string(C.t.r2ptsz),
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(d.izJ, { className: N.bottomDivider }),
                                    (0, i.jsxs)(b.Z, {
                                        children: [
                                            (0, i.jsx)(d.aML, {
                                                "data-migration-pending": !0,
                                                text: C.intl.string(C.t.wwdb3g),
                                                forceOpen: T,
                                                color: d.r6K.GREEN,
                                                disableTooltipPointerEvents: !0,
                                                children: (e) => {
                                                    var t,
                                                        r,
                                                        {
                                                            onClick: l,
                                                            onMouseEnter: a,
                                                            onMouseLeave: o,
                                                            onBlur: s,
                                                            onFocus: c,
                                                        } = e,
                                                        u = (function (e, t) {
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
                                                        className: N.copyButton,
                                                        children: (0, i.jsx)(
                                                            d.Button,
                                                            ((t = (function (e) {
                                                                for (var t = 1; t < arguments.length; t++) {
                                                                    var n = null != arguments[t] ? arguments[t] : {},
                                                                        i = Object.keys(n);
                                                                    "function" == typeof Object.getOwnPropertySymbols &&
                                                                        (i = i.concat(
                                                                            Object.getOwnPropertySymbols(n).filter(
                                                                                function (e) {
                                                                                    return Object.getOwnPropertyDescriptor(
                                                                                        n,
                                                                                        e,
                                                                                    ).enumerable;
                                                                                },
                                                                            ),
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
                                                            })(
                                                                {
                                                                    variant: "secondary",
                                                                    size: "sm",
                                                                    text: C.intl.string(C.t.Ae9rUW),
                                                                },
                                                                u,
                                                            )),
                                                            (r = r =
                                                                {
                                                                    "aria-label": "",
                                                                    onClick: () => {
                                                                        null == l || l(),
                                                                            Z(!0),
                                                                            d.uvj.announce(C.intl.string(C.t.wwdb3g)),
                                                                            k.start(1000, () => Z(!1)),
                                                                            D();
                                                                    },
                                                                    disabled: null == n.token || "" === n.token,
                                                                }),
                                                            Object.getOwnPropertyDescriptors
                                                                ? Object.defineProperties(
                                                                      t,
                                                                      Object.getOwnPropertyDescriptors(r),
                                                                  )
                                                                : (function (e, t) {
                                                                      var n = Object.keys(e);
                                                                      if (Object.getOwnPropertySymbols) {
                                                                          var i = Object.getOwnPropertySymbols(e);
                                                                          n.push.apply(n, i);
                                                                      }
                                                                      return n;
                                                                  })(Object(r)).forEach(function (e) {
                                                                      Object.defineProperty(
                                                                          t,
                                                                          e,
                                                                          Object.getOwnPropertyDescriptor(r, e),
                                                                      );
                                                                  }),
                                                            t),
                                                        ),
                                                    });
                                                },
                                            }),
                                            (0, i.jsx)(d.Button, {
                                                variant: "critical-secondary",
                                                size: "sm",
                                                text: C.intl.string(C.t.jVrUnC),
                                                onClick: R,
                                            }),
                                        ],
                                    }),
                                ],
                            }),
                        ],
                    }),
                ],
            })),
        (0, i.jsx)(d.Zbd, {
            editable: !0,
            id: t,
            className: a()(N.card, E ? N.pulse : null),
            children: (0, i.jsxs)(b.Z, {
                direction: b.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(d.P3F, {
                        className: N.header,
                        "aria-expanded": I,
                        onClick: P,
                        children: (0, i.jsxs)(b.Z, {
                            align: b.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(y.Z, {
                                    name: n.name,
                                    imageSrc: A,
                                    details: L,
                                }),
                                (0, i.jsx)(h.Z, {
                                    className: N.expandIcon,
                                    expanded: I,
                                    "aria-hidden": !0,
                                }),
                            ],
                        }),
                    }),
                    M,
                ],
            }),
        })
    );
}
