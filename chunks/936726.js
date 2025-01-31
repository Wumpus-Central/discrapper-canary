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
    p = n(598077),
    g = n(259580),
    f = n(768581),
    b = n(572004),
    v = n(709054),
    _ = n(51144),
    j = n(486199),
    N = n(981631),
    C = n(388032),
    I = n(475872);
let Z = (e) => {
    if (null == e) return null;
    let t = new p.Z(e);
    return _.ZP.getUserTag(t);
};
function T(e, t) {
    return null != t && /^data:/.test(t)
        ? t
        : (0, f.ov)({
              id: e.id,
              avatar: t,
              discriminator: N.fo$
          });
}
function E(e) {
    let { id: t, webhook: n, editedWebhook: a, channelOptions: p, isExpanded: f, isNew: _, errors: E, onToggleExpand: S } = e,
        [y, A] = l.useState(!1),
        [k] = l.useState(new o.V7());
    l.useEffect(() => () => k.stop(), [k]);
    let R = l.useMemo(() => T(n, n.avatar), [n]),
        L = l.useCallback(() => {
            let e = ''.concat((0, s.K0)(!1)).concat(N.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
            (0, b.JG)(e);
        }, [n]),
        O = l.useCallback(() => {
            (0, d.h7j)((e) =>
                (0, i.jsx)(d.ConfirmModal, {
                    ...e,
                    header: C.intl.formatToPlainString(C.t.QVFjHh, { name: n.name }),
                    confirmText: C.intl.string(C.t['W+K1Fh']),
                    cancelText: C.intl.string(C.t.xNhj0N),
                    onConfirm: () => {
                        m.Z.delete(n.guild_id, n.id).catch((e) => {
                            let { status: t } = e;
                            429 === t
                                ? c.Z.show({
                                      title: C.intl.string(C.t.N5riYm),
                                      body: C.intl.string(C.t.eAxcCQ)
                                  })
                                : c.Z.show({
                                      title: C.intl.string(C.t.N5riYm),
                                      body: C.intl.string(C.t['/4TwKS'])
                                  });
                        });
                    },
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        children: C.intl.format(C.t['rIWe+/'], { name: n.name })
                    })
                })
            );
        }, [n.guild_id, n.id, n.name]),
        w = [];
    null != n.user
        ? w.push({
              icon: d.T39,
              text: C.intl.formatToPlainString(C.t['7EcUbm'], {
                  user: Z(n.user),
                  timestamp: v.default.extractTimestamp(n.id)
              })
          })
        : w.push({
              icon: d.T39,
              text: C.intl.formatToPlainString(C.t['7mv59P'], { timestamp: v.default.extractTimestamp(n.id) })
          });
    let P = null;
    return (
        f &&
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
                                                    title: C.intl.string(C.t.ukdxur),
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
                                                    title: C.intl.string(C.t.GK18KC),
                                                    children: (0, i.jsx)(d.VcW, {
                                                        value: a.channel_id,
                                                        options: p,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: C.intl.string(C.t.r2pts7)
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(d.$i$, { className: I.bottomDivider }),
                                    (0, i.jsxs)(h.Z, {
                                        children: [
                                            (0, i.jsx)(d.ua7, {
                                                text: C.intl.string(C.t.wwdb3t),
                                                forceOpen: y,
                                                color: d.FGA.GREEN,
                                                disableTooltipPointerEvents: !0,
                                                children: (e) => {
                                                    let { onClick: t, onMouseEnter: l, onMouseLeave: a, onBlur: r, onFocus: s, ...o } = e;
                                                    return (0, i.jsx)(d.zxk, {
                                                        ...o,
                                                        'aria-label': '',
                                                        onClick: () => {
                                                            null == t || t(), A(!0), d.uvj.announce(C.intl.string(C.t.wwdb3t)), k.start(1000, () => A(!1)), L();
                                                        },
                                                        size: d.zxk.Sizes.SMALL,
                                                        color: d.zxk.Colors.PRIMARY,
                                                        look: d.zxk.Looks.FILLED,
                                                        className: I.copyButton,
                                                        disabled: null == n.token || '' === n.token,
                                                        children: C.intl.string(C.t.Ae9rUV)
                                                    });
                                                }
                                            }),
                                            (0, i.jsx)(d.zxk, {
                                                onClick: O,
                                                size: d.zxk.Sizes.SMALL,
                                                color: d.zxk.Colors.RED,
                                                look: d.zxk.Looks.LINK,
                                                children: C.intl.string(C.t.jVrUnJ)
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
            className: r()(I.card, _ ? I.pulse : null),
            children: (0, i.jsxs)(h.Z, {
                direction: h.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(d.P3F, {
                        className: I.header,
                        'aria-expanded': f,
                        onClick: S,
                        children: (0, i.jsxs)(h.Z, {
                            align: h.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(j.Z, {
                                    name: n.name,
                                    imageSrc: R,
                                    details: w
                                }),
                                (0, i.jsx)(g.Z, {
                                    className: I.expandIcon,
                                    expanded: f,
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
