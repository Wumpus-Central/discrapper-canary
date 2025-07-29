(n.d(t, { Z: () => T }), n(35282), n(388685), n(539854));
var r = n(255367),
    i = n(73800),
    l = n(120356),
    o = n.n(l),
    a = n(544891),
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
    C = n(368938);
function N(e) {
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
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let E = (e) => {
    if (null == e) return null;
    let t = new g.Z(e);
    return v.ZP.getUserTag(t);
};
function I(e, t) {
    return null != t && /^data:/.test(t)
        ? t
        : (0, h.ov)({
              id: e.id,
              avatar: t,
              discriminator: y.fo$
          });
}
function T(e) {
    let { id: t, webhook: n, editedWebhook: l, channelOptions: g, isExpanded: h, isNew: v, errors: T, onToggleExpand: w } = e,
        [Z, P] = i.useState(!1),
        [A] = i.useState(new s.V7());
    i.useEffect(() => () => A.stop(), [A]);
    let k = i.useMemo(() => I(n, n.avatar), [n]),
        D = i.useCallback(() => {
            let e = ''.concat((0, a.K0)(!1)).concat(y.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
            (0, x.JG)(e);
        }, [n]),
        R = i.useCallback(() => {
            (0, c.h7j)((e) =>
                (0, r.jsx)(
                    c.ConfirmModal,
                    S(N({}, e), {
                        header: _.intl.formatToPlainString(_.t.QVFjHh, { name: n.name }),
                        confirmText: _.intl.string(_.t['W+K1Fh']),
                        cancelText: _.intl.string(_.t.xNhj0N),
                        onConfirm: () => {
                            p.Z.delete(n.guild_id, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t
                                    ? d.Z.show({
                                          title: _.intl.string(_.t.N5riYm),
                                          body: _.intl.string(_.t.eAxcCQ)
                                      })
                                    : d.Z.show({
                                          title: _.intl.string(_.t.N5riYm),
                                          body: _.intl.string(_.t['/4TwKS'])
                                      });
                            });
                        },
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            children: _.intl.format(_.t['rIWe+/'], { name: n.name })
                        })
                    })
                )
            );
        }, [n.guild_id, n.id, n.name]),
        L = [];
    null != n.user
        ? L.push({
              icon: c.T39,
              text: _.intl.formatToPlainString(_.t['7EcUbm'], {
                  user: E(n.user),
                  timestamp: j.default.extractTimestamp(n.id)
              })
          })
        : L.push({
              icon: c.T39,
              text: _.intl.formatToPlainString(_.t['7mv59P'], { timestamp: j.default.extractTimestamp(n.id) })
          });
    let M = null;
    return (
        h &&
            null != l &&
            (M = (0, r.jsxs)('div', {
                className: C.body,
                children: [
                    (0, r.jsx)(c.$i$, { className: C.topDivider }),
                    (0, r.jsxs)(m.Z, {
                        children: [
                            (0, r.jsx)(m.Z.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, r.jsxs)(m.Z, {
                                    className: C.avatarWrapper,
                                    direction: m.Z.Direction.VERTICAL,
                                    children: [
                                        (0, r.jsx)(b.Z, {
                                            image: l.avatar,
                                            onChange: (e) => {
                                                u.Z.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => I(n, e),
                                            imageClassName: C.avatarUploaderInner,
                                            showIcon: !0
                                        }),
                                        null != T.avatar && '' !== T.avatar
                                            ? (0, r.jsx)(c.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-sm/normal',
                                                  children: T.avatar
                                              })
                                            : null
                                    ]
                                })
                            }),
                            (0, r.jsxs)(m.Z, {
                                direction: m.Z.Direction.VERTICAL,
                                children: [
                                    (0, r.jsxs)(m.Z, {
                                        children: [
                                            (0, r.jsx)(m.Z.Child, {
                                                basis: '50%',
                                                children: (0, r.jsx)(c.xJW, {
                                                    title: _.intl.string(_.t.ukdxur),
                                                    children: (0, r.jsx)(c.oil, {
                                                        value: l.name,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ name: e });
                                                        },
                                                        maxLength: 80,
                                                        error: T.name
                                                    })
                                                })
                                            }),
                                            (0, r.jsx)(m.Z.Child, {
                                                basis: '50%',
                                                children: (0, r.jsx)(c.xJW, {
                                                    title: _.intl.string(_.t.GK18KC),
                                                    children: (0, r.jsx)(c.VcW, {
                                                        value: l.channel_id,
                                                        options: g,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: _.intl.string(_.t.r2pts7)
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(c.$i$, { className: C.bottomDivider }),
                                    (0, r.jsxs)(m.Z, {
                                        children: [
                                            (0, r.jsx)(c.ua7, {
                                                text: _.intl.string(_.t.wwdb3t),
                                                forceOpen: Z,
                                                color: c.FGA.GREEN,
                                                disableTooltipPointerEvents: !0,
                                                children: (e) => {
                                                    var { onClick: t, onMouseEnter: i, onMouseLeave: l, onBlur: o, onFocus: a } = e,
                                                        s = (function (e, t) {
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
                                                        })(e, ['onClick', 'onMouseEnter', 'onMouseLeave', 'onBlur', 'onFocus']);
                                                    return (0, r.jsx)('div', {
                                                        'data-button-hoisted-classname-wrapper': !0,
                                                        className: C.copyButton,
                                                        children: (0, r.jsx)(
                                                            c.zxk,
                                                            S(
                                                                N(
                                                                    {
                                                                        variant: 'secondary',
                                                                        size: 'sm',
                                                                        text: _.intl.string(_.t.Ae9rUV)
                                                                    },
                                                                    s
                                                                ),
                                                                {
                                                                    'aria-label': '',
                                                                    onClick: () => {
                                                                        (null == t || t(), P(!0), c.uvj.announce(_.intl.string(_.t.wwdb3t)), A.start(1000, () => P(!1)), D());
                                                                    },
                                                                    disabled: null == n.token || '' === n.token
                                                                }
                                                            )
                                                        )
                                                    });
                                                }
                                            }),
                                            (0, r.jsx)(c.zxk, {
                                                variant: 'critical-secondary',
                                                size: 'sm',
                                                text: _.intl.string(_.t.jVrUnJ),
                                                onClick: R
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })),
        (0, r.jsx)(c.Zbd, {
            editable: !0,
            id: t,
            className: o()(C.card, v ? C.pulse : null),
            children: (0, r.jsxs)(m.Z, {
                direction: m.Z.Direction.VERTICAL,
                children: [
                    (0, r.jsx)(c.P3F, {
                        className: C.header,
                        'aria-expanded': h,
                        onClick: w,
                        children: (0, r.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, r.jsx)(O.Z, {
                                    name: n.name,
                                    imageSrc: k,
                                    details: L
                                }),
                                (0, r.jsx)(f.Z, {
                                    className: C.expandIcon,
                                    expanded: h,
                                    'aria-hidden': !0
                                })
                            ]
                        })
                    }),
                    M
                ]
            })
        })
    );
}
