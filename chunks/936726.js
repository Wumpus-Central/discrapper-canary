n.d(t, { Z: () => E }), n(47120), n(653041);
var i = n(200651),
    l = n(192379),
    a = n(120356),
    r = n.n(a),
    s = n(544891),
    o = n(846519),
    d = n(481060),
    c = n(668781),
    u = n(139387),
    m = n(308063),
    h = n(600164),
    x = n(208567),
    g = n(598077),
    p = n(259580),
    b = n(768581),
    _ = n(572004),
    f = n(709054),
    v = n(51144),
    C = n(486199),
    j = n(981631),
    N = n(388032),
    I = n(355438);
let Z = (e) => {
    if (null == e) return null;
    let t = new g.Z(e);
    return v.ZP.getUserTag(t);
};
function T(e, t) {
    return null != t && /^data:/.test(t)
        ? t
        : (0, b.ov)({
              id: e.id,
              avatar: t,
              discriminator: j.fo$
          });
}
function E(e) {
    let { id: t, webhook: n, editedWebhook: a, channelOptions: g, isExpanded: b, isNew: v, errors: E, onToggleExpand: S } = e,
        [y, A] = l.useState(!1),
        [k] = l.useState(new o.V7());
    l.useEffect(() => () => k.stop(), [k]);
    let R = l.useMemo(() => T(n, n.avatar), [n]),
        L = l.useCallback(() => {
            let e = ''.concat((0, s.K0)(!1)).concat(j.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
            (0, _.JG)(e);
        }, [n]),
        w = l.useCallback(() => {
            (0, d.h7j)((e) =>
                (0, i.jsx)(d.ConfirmModal, {
                    ...e,
                    header: N.intl.formatToPlainString(N.t.QVFjHh, { name: n.name }),
                    confirmText: N.intl.string(N.t['W+K1Fh']),
                    cancelText: N.intl.string(N.t.xNhj0N),
                    onConfirm: () => {
                        m.Z.delete(n.guild_id, n.id).catch((e) => {
                            let { status: t } = e;
                            429 === t
                                ? c.Z.show({
                                      title: N.intl.string(N.t.N5riYm),
                                      body: N.intl.string(N.t.eAxcCQ)
                                  })
                                : c.Z.show({
                                      title: N.intl.string(N.t.N5riYm),
                                      body: N.intl.string(N.t['/4TwKS'])
                                  });
                        });
                    },
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        children: N.intl.format(N.t['rIWe+/'], { name: n.name })
                    })
                })
            );
        }, [n.guild_id, n.id, n.name]),
        O = [];
    null != n.user
        ? O.push({
              icon: d.T39,
              text: N.intl.formatToPlainString(N.t['7EcUbm'], {
                  user: Z(n.user),
                  timestamp: f.default.extractTimestamp(n.id)
              })
          })
        : O.push({
              icon: d.T39,
              text: N.intl.formatToPlainString(N.t['7mv59P'], { timestamp: f.default.extractTimestamp(n.id) })
          });
    let P = null;
    return (
        b &&
            null != a &&
            (P = (0, i.jsxs)('div', {
                className: I.body,
                children: [
                    (0, i.jsx)(d.$i$, { className: I.topDivider }),
                    (0, i.jsxs)(h.Z, {
                        children: [
                            (0, i.jsx)(h.Z.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, i.jsxs)(h.Z, {
                                    className: I.avatarWrapper,
                                    direction: h.Z.Direction.VERTICAL,
                                    children: [
                                        (0, i.jsx)(x.Z, {
                                            image: a.avatar,
                                            onChange: (e) => {
                                                u.Z.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => T(n, e),
                                            imageClassName: I.avatarUploaderInner,
                                            showIcon: !0
                                        }),
                                        null != E.avatar && '' !== E.avatar
                                            ? (0, i.jsx)(d.Text, {
                                                  color: 'text-danger',
                                                  variant: 'text-sm/normal',
                                                  children: E.avatar
                                              })
                                            : null
                                    ]
                                })
                            }),
                            (0, i.jsxs)(h.Z, {
                                direction: h.Z.Direction.VERTICAL,
                                children: [
                                    (0, i.jsxs)(h.Z, {
                                        children: [
                                            (0, i.jsx)(h.Z.Child, {
                                                basis: '50%',
                                                children: (0, i.jsx)(d.xJW, {
                                                    title: N.intl.string(N.t.ukdxur),
                                                    children: (0, i.jsx)(d.oil, {
                                                        value: a.name,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ name: e });
                                                        },
                                                        maxLength: 80,
                                                        error: E.name
                                                    })
                                                })
                                            }),
                                            (0, i.jsx)(h.Z.Child, {
                                                basis: '50%',
                                                children: (0, i.jsx)(d.xJW, {
                                                    title: N.intl.string(N.t.GK18KC),
                                                    children: (0, i.jsx)(d.VcW, {
                                                        value: a.channel_id,
                                                        options: g,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: N.intl.string(N.t.r2pts7)
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(d.$i$, { className: I.bottomDivider }),
                                    (0, i.jsxs)(h.Z, {
                                        children: [
                                            (0, i.jsx)(d.ua7, {
                                                text: N.intl.string(N.t.wwdb3t),
                                                forceOpen: y,
                                                color: d.FGA.GREEN,
                                                disableTooltipPointerEvents: !0,
                                                children: (e) => {
                                                    let { onClick: t, onMouseEnter: l, onMouseLeave: a, onBlur: r, onFocus: s, ...o } = e;
                                                    return (0, i.jsx)(d.zxk, {
                                                        ...o,
                                                        'aria-label': '',
                                                        onClick: () => {
                                                            null == t || t(), A(!0), d.uvj.announce(N.intl.string(N.t.wwdb3t)), k.start(1000, () => A(!1)), L();
                                                        },
                                                        size: d.zxk.Sizes.SMALL,
                                                        color: d.zxk.Colors.PRIMARY,
                                                        look: d.zxk.Looks.FILLED,
                                                        className: I.copyButton,
                                                        disabled: null == n.token || '' === n.token,
                                                        children: N.intl.string(N.t.Ae9rUV)
                                                    });
                                                }
                                            }),
                                            (0, i.jsx)(d.zxk, {
                                                onClick: w,
                                                size: d.zxk.Sizes.SMALL,
                                                color: d.zxk.Colors.RED,
                                                look: d.zxk.Looks.LINK,
                                                children: N.intl.string(N.t.jVrUnJ)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })),
        (0, i.jsx)(d.Zbd, {
            editable: !0,
            id: t,
            className: r()(I.card, v ? I.pulse : null),
            children: (0, i.jsxs)(h.Z, {
                direction: h.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(d.P3F, {
                        className: I.header,
                        'aria-expanded': b,
                        onClick: S,
                        children: (0, i.jsxs)(h.Z, {
                            align: h.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(C.Z, {
                                    name: n.name,
                                    imageSrc: R,
                                    details: O
                                }),
                                (0, i.jsx)(p.Z, {
                                    className: I.expandIcon,
                                    expanded: b,
                                    'aria-hidden': !0
                                })
                            ]
                        })
                    }),
                    P
                ]
            })
        })
    );
}
