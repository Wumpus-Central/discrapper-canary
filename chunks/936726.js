n.d(t, { Z: () => w }), n(35282), n(388685), n(539854);
var i = n(54381),
    r = n(473749),
    l = n(120356),
    a = n.n(l),
    o = n(544891),
    s = n(846519),
    c = n(668339),
    d = n(248514),
    u = n(481060),
    p = n(668781),
    m = n(139387),
    b = n(308063),
    g = n(600164),
    f = n(208567),
    h = n(598077),
    x = n(259580),
    j = n(768581),
    v = n(572004),
    O = n(709054),
    y = n(51144),
    _ = n(486199),
    C = n(981631),
    N = n(388032),
    S = n(632256);
function I(e, t) {
    return null != t && /^data:/.test(t)
        ? t
        : (0, j.ov)({
              id: e.id,
              avatar: t,
              discriminator: C.fo$,
          });
}
function w(e) {
    let {
            id: t,
            webhook: n,
            editedWebhook: l,
            channelOptions: j,
            isExpanded: w,
            isNew: E,
            errors: P,
            onToggleExpand: T,
        } = e,
        [Z, k] = r.useState(!1),
        [A] = r.useState(new s.V7());
    r.useEffect(() => () => A.stop(), [A]);
    let D = r.useMemo(() => I(n, n.avatar), [n]),
        R = r.useCallback(() => {
            let e = "".concat((0, o.K0)(!1)).concat(C.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
            (0, v.JG)(e);
        }, [n]),
        L = r.useCallback(() => {
            (0, d.Z)({
                title: N.intl.formatToPlainString(N.t.QVFjHh, { name: n.name }),
                subtitle: N.intl.format(N.t["rIWe+5"], { name: n.name }),
                confirmText: N.intl.string(N.t["W+K1Fs"]),
                cancelText: N.intl.string(N.t.xNhj0O),
                onConfirm: () => {
                    b.Z.delete(n.guild_id, n.id).catch((e) => {
                        let { status: t } = e;
                        429 === t
                            ? p.Z.show({
                                  title: N.intl.string(N.t.N5riYn),
                                  body: N.intl.string(N.t.eAxcCc),
                              })
                            : p.Z.show({
                                  title: N.intl.string(N.t.N5riYn),
                                  body: N.intl.string(N.t["/4TwKf"]),
                              });
                    });
                },
            });
        }, [n.guild_id, n.id, n.name]),
        M = [];
    null != n.user
        ? M.push({
              icon: u.T39,
              text: N.intl.formatToPlainString(N.t["7EcUbr"], {
                  user: ((e) => {
                      if (null == e) return null;
                      let t = new h.Z(e);
                      return y.ZP.getUserTag(t);
                  })(n.user),
                  timestamp: O.default.extractTimestamp(n.id),
              }),
          })
        : M.push({
              icon: u.T39,
              text: N.intl.formatToPlainString(N.t["7mv59O"], { timestamp: O.default.extractTimestamp(n.id) }),
          });
    let U = null;
    return (
        w &&
            null != l &&
            (U = (0, i.jsxs)("div", {
                className: S.body,
                children: [
                    (0, i.jsx)(u.izJ, { className: S.topDivider }),
                    (0, i.jsxs)(g.Z, {
                        children: [
                            (0, i.jsx)(g.Z.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, i.jsxs)(g.Z, {
                                    className: S.avatarWrapper,
                                    direction: g.Z.Direction.VERTICAL,
                                    children: [
                                        (0, i.jsx)(f.Z, {
                                            image: l.avatar,
                                            onChange: (e) => {
                                                m.Z.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => I(n, e),
                                            imageClassName: S.avatarUploaderInner,
                                            showIcon: !0,
                                        }),
                                        null != P.avatar && "" !== P.avatar
                                            ? (0, i.jsx)(u.Text, {
                                                  color: "text-feedback-critical",
                                                  variant: "text-sm/normal",
                                                  children: P.avatar,
                                              })
                                            : null,
                                    ],
                                }),
                            }),
                            (0, i.jsxs)(g.Z, {
                                direction: g.Z.Direction.VERTICAL,
                                children: [
                                    (0, i.jsxs)(g.Z, {
                                        children: [
                                            (0, i.jsx)(g.Z.Child, {
                                                wrap: !0,
                                                basis: "50%",
                                                children: (0, i.jsx)(u.oil, {
                                                    label: N.intl.string(N.t.ukdxuo),
                                                    value: l.name,
                                                    onChange: (e) => {
                                                        m.Z.updateWebhook({ name: e });
                                                    },
                                                    maxLength: 80,
                                                    error: P.name,
                                                }),
                                            }),
                                            (0, i.jsx)(g.Z.Child, {
                                                basis: "50%",
                                                children: (0, i.jsx)("div", {
                                                    children: (0, i.jsx)(c.d, {
                                                        label: N.intl.string(N.t.GK18KJ),
                                                        value: l.channel_id,
                                                        options: j,
                                                        onChange: (e) => {
                                                            m.Z.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: N.intl.string(N.t.r2ptsz),
                                                    }),
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, i.jsx)(u.izJ, { className: S.bottomDivider }),
                                    (0, i.jsxs)(g.Z, {
                                        children: [
                                            (0, i.jsx)(u.aML, {
                                                "data-migration-pending": !0,
                                                text: N.intl.string(N.t.wwdb3g),
                                                forceOpen: Z,
                                                color: u.r6K.GREEN,
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
                                                        d = (function (e, t) {
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
                                                        className: S.copyButton,
                                                        children: (0, i.jsx)(
                                                            u.Button,
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
                                                                    text: N.intl.string(N.t.Ae9rUW),
                                                                },
                                                                d,
                                                            )),
                                                            (r = r =
                                                                {
                                                                    "aria-label": "",
                                                                    onClick: () => {
                                                                        null == l || l(),
                                                                            k(!0),
                                                                            u.uvj.announce(N.intl.string(N.t.wwdb3g)),
                                                                            A.start(1000, () => k(!1)),
                                                                            R();
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
                                            (0, i.jsx)(u.Button, {
                                                variant: "critical-secondary",
                                                size: "sm",
                                                text: N.intl.string(N.t.jVrUnC),
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
        (0, i.jsx)(u.Zbd, {
            editable: !0,
            id: t,
            className: a()(S.card, E ? S.pulse : null),
            children: (0, i.jsxs)(g.Z, {
                direction: g.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(u.P3F, {
                        className: S.header,
                        "aria-expanded": w,
                        onClick: T,
                        children: (0, i.jsxs)(g.Z, {
                            align: g.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(_.Z, {
                                    name: n.name,
                                    imageSrc: D,
                                    details: M,
                                }),
                                (0, i.jsx)(x.Z, {
                                    className: S.expandIcon,
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
