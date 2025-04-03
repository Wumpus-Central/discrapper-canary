n.d(t, { Z: () => P }), n(301563), n(47120), n(653041);
var r = n(200651),
    i = n(192379),
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
    N = n(51144),
    O = n(486199),
    v = n(981631),
    y = n(388032),
    _ = n(368938);
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function I(e, t) {
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
let S = (e) => {
    if (null == e) return null;
    let t = new g.Z(e);
    return N.ZP.getUserTag(t);
};
function E(e, t) {
    return null != t && /^data:/.test(t)
        ? t
        : (0, h.ov)({
              id: e.id,
              avatar: t,
              discriminator: v.fo$
          });
}
function P(e) {
    let { id: t, webhook: n, editedWebhook: l, channelOptions: g, isExpanded: h, isNew: N, errors: P, onToggleExpand: w } = e,
        [T, Z] = i.useState(!1),
        [W] = i.useState(new s.V7());
    i.useEffect(() => () => W.stop(), [W]);
    let k = i.useMemo(() => E(n, n.avatar), [n]),
        A = i.useCallback(() => {
            let e = ''.concat((0, a.K0)(!1)).concat(v.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
            (0, x.JG)(e);
        }, [n]),
        D = i.useCallback(() => {
            (0, c.h7j)((e) =>
                (0, r.jsx)(
                    c.ConfirmModal,
                    I(C({}, e), {
                        header: y.NW.formatToPlainString(y.t.QVFjHh, { name: n.name }),
                        confirmText: y.NW.string(y.t['W+K1Fh']),
                        cancelText: y.NW.string(y.t.xNhj0N),
                        onConfirm: () => {
                            p.Z.delete(n.guild_id, n.id).catch((e) => {
                                let { status: t } = e;
                                429 === t
                                    ? d.Z.show({
                                          title: y.NW.string(y.t.N5riYm),
                                          body: y.NW.string(y.t.eAxcCQ)
                                      })
                                    : d.Z.show({
                                          title: y.NW.string(y.t.N5riYm),
                                          body: y.NW.string(y.t['/4TwKS'])
                                      });
                            });
                        },
                        children: (0, r.jsx)(c.Text, {
                            variant: 'text-md/normal',
                            children: y.NW.format(y.t['rIWe+/'], { name: n.name })
                        })
                    })
                )
            );
        }, [n.guild_id, n.id, n.name]),
        R = [];
    null != n.user
        ? R.push({
              icon: c.T39,
              text: y.NW.formatToPlainString(y.t['7EcUbm'], {
                  user: S(n.user),
                  timestamp: j.default.extractTimestamp(n.id)
              })
          })
        : R.push({
              icon: c.T39,
              text: y.NW.formatToPlainString(y.t['7mv59P'], { timestamp: j.default.extractTimestamp(n.id) })
          });
    let L = null;
    return (
        h &&
            null != l &&
            (L = (0, r.jsxs)('div', {
                className: _.body,
                children: [
                    (0, r.jsx)(c.$i$, { className: _.topDivider }),
                    (0, r.jsxs)(m.Z, {
                        children: [
                            (0, r.jsx)(m.Z.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, r.jsxs)(m.Z, {
                                    className: _.avatarWrapper,
                                    direction: m.Z.Direction.VERTICAL,
                                    children: [
                                        (0, r.jsx)(b.Z, {
                                            image: l.avatar,
                                            onChange: (e) => {
                                                u.Z.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => E(n, e),
                                            imageClassName: _.avatarUploaderInner,
                                            showIcon: !0
                                        }),
                                        null != P.avatar && '' !== P.avatar
                                            ? (0, r.jsx)(c.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-sm/normal',
                                                  children: P.avatar
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
                                                    title: y.NW.string(y.t.ukdxur),
                                                    children: (0, r.jsx)(c.oil, {
                                                        value: l.name,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ name: e });
                                                        },
                                                        maxLength: 80,
                                                        error: P.name
                                                    })
                                                })
                                            }),
                                            (0, r.jsx)(m.Z.Child, {
                                                basis: '50%',
                                                children: (0, r.jsx)(c.xJW, {
                                                    title: y.NW.string(y.t.GK18KC),
                                                    children: (0, r.jsx)(c.VcW, {
                                                        value: l.channel_id,
                                                        options: g,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: y.NW.string(y.t.r2pts7)
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    (0, r.jsx)(c.$i$, { className: _.bottomDivider }),
                                    (0, r.jsxs)(m.Z, {
                                        children: [
                                            (0, r.jsx)(c.ua7, {
                                                text: y.NW.string(y.t.wwdb3t),
                                                forceOpen: T,
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
                                                                    for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                                                    return i;
                                                                })(e, t);
                                                            if (Object.getOwnPropertySymbols) {
                                                                var l = Object.getOwnPropertySymbols(e);
                                                                for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                                            }
                                                            return i;
                                                        })(e, ['onClick', 'onMouseEnter', 'onMouseLeave', 'onBlur', 'onFocus']);
                                                    return (0, r.jsx)(
                                                        c.zxk,
                                                        I(C({}, s), {
                                                            'aria-label': '',
                                                            onClick: () => {
                                                                null == t || t(), Z(!0), c.uvj.announce(y.NW.string(y.t.wwdb3t)), W.start(1000, () => Z(!1)), A();
                                                            },
                                                            size: c.zxk.Sizes.SMALL,
                                                            color: c.zxk.Colors.PRIMARY,
                                                            look: c.zxk.Looks.FILLED,
                                                            className: _.copyButton,
                                                            disabled: null == n.token || '' === n.token,
                                                            children: y.NW.string(y.t.Ae9rUV)
                                                        })
                                                    );
                                                }
                                            }),
                                            (0, r.jsx)(c.zxk, {
                                                onClick: D,
                                                size: c.zxk.Sizes.SMALL,
                                                color: c.zxk.Colors.RED,
                                                look: c.zxk.Looks.LINK,
                                                children: y.NW.string(y.t.jVrUnJ)
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
            className: o()(_.card, N ? _.pulse : null),
            children: (0, r.jsxs)(m.Z, {
                direction: m.Z.Direction.VERTICAL,
                children: [
                    (0, r.jsx)(c.P3F, {
                        className: _.header,
                        'aria-expanded': h,
                        onClick: w,
                        children: (0, r.jsxs)(m.Z, {
                            align: m.Z.Align.CENTER,
                            children: [
                                (0, r.jsx)(O.Z, {
                                    name: n.name,
                                    imageSrc: k,
                                    details: R
                                }),
                                (0, r.jsx)(f.Z, {
                                    className: _.expandIcon,
                                    expanded: h,
                                    'aria-hidden': !0
                                })
                            ]
                        })
                    }),
                    L
                ]
            })
        })
    );
}
