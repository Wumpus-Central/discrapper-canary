n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120),
    n(653041);
var i = n(200651),
    l = n(192379),
    r = n(120356),
    a = n.n(r),
    o = n(544891),
    s = n(846519),
    d = n(481060),
    c = n(668781),
    u = n(139387),
    m = n(308063),
    h = n(600164),
    p = n(208567),
    g = n(598077),
    x = n(259580),
    f = n(768581),
    b = n(572004),
    v = n(709054),
    C = n(51144),
    N = n(486199),
    I = n(981631),
    j = n(388032),
    T = n(475872);
let _ = (e) => {
    if (null == e) return null;
    let t = new g.Z(e);
    return C.ZP.getUserTag(t);
};
function Z(e, t) {
    return null != t && /^data:/.test(t)
        ? t
        : (0, f.ov)({
              id: e.id,
              avatar: t,
              discriminator: I.fo$
          });
}
function E(e) {
    let { id: t, webhook: n, editedWebhook: r, channelOptions: g, isExpanded: f, isNew: C, errors: E, onToggleExpand: S } = e,
        [y, A] = l.useState(!1),
        [R] = l.useState(new s.V7());
    l.useEffect(() => () => R.stop(), [R]);
    let L = l.useMemo(() => Z(n, n.avatar), [n]),
        k = l.useCallback(() => {
            let e = ''.concat((0, o.K0)(!1)).concat(I.ANM.WEBHOOK_INTEGRATION(n.id, n.token));
            (0, b.JG)(e);
        }, [n]),
        O = l.useCallback(() => {
            (0, d.openModal)((e) =>
                (0, i.jsx)(d.ConfirmModal, {
                    ...e,
                    header: j.intl.formatToPlainString(j.t.QVFjHh, { name: n.name }),
                    confirmText: j.intl.string(j.t['W+K1Fh']),
                    cancelText: j.intl.string(j.t.xNhj0N),
                    onConfirm: () => {
                        m.Z.delete(n.guild_id, n.id).catch((e) => {
                            let { status: t } = e;
                            429 === t
                                ? c.Z.show({
                                      title: j.intl.string(j.t.N5riYm),
                                      body: j.intl.string(j.t.eAxcCQ)
                                  })
                                : c.Z.show({
                                      title: j.intl.string(j.t.N5riYm),
                                      body: j.intl.string(j.t['/4TwKS'])
                                  });
                        });
                    },
                    children: (0, i.jsx)(d.Text, {
                        variant: 'text-md/normal',
                        children: j.intl.format(j.t['rIWe+/'], { name: n.name })
                    })
                })
            );
        }, [n.guild_id, n.id, n.name]),
        w = [];
    null != n.user
        ? w.push({
              icon: d.ClockIcon,
              text: j.intl.formatToPlainString(j.t['7EcUbm'], {
                  user: _(n.user),
                  timestamp: v.default.extractTimestamp(n.id)
              })
          })
        : w.push({
              icon: d.ClockIcon,
              text: j.intl.formatToPlainString(j.t['7mv59P'], { timestamp: v.default.extractTimestamp(n.id) })
          });
    let M = null;
    return (
        f &&
            null != r &&
            (M = (0, i.jsxs)('div', {
                className: T.body,
                children: [
                    (0, i.jsx)(d.FormDivider, { className: T.topDivider }),
                    (0, i.jsxs)(h.Z, {
                        children: [
                            (0, i.jsx)(h.Z.Child, {
                                shrink: 1,
                                grow: 0,
                                children: (0, i.jsxs)(h.Z, {
                                    className: T.avatarWrapper,
                                    direction: h.Z.Direction.VERTICAL,
                                    children: [
                                        (0, i.jsx)(p.Z, {
                                            image: r.avatar,
                                            onChange: (e) => {
                                                u.Z.updateWebhook({ avatar: e });
                                            },
                                            makeURL: (e) => Z(n, e),
                                            imageClassName: T.avatarUploaderInner,
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
                                                children: (0, i.jsx)(d.FormItem, {
                                                    title: j.intl.string(j.t.ukdxur),
                                                    children: (0, i.jsx)(d.TextInput, {
                                                        value: r.name,
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
                                                children: (0, i.jsx)(d.FormItem, {
                                                    title: j.intl.string(j.t.GK18KC),
                                                    children: (0, i.jsx)(d.SearchableSelect, {
                                                        value: r.channel_id,
                                                        options: g,
                                                        onChange: (e) => {
                                                            u.Z.updateWebhook({ channelId: e });
                                                        },
                                                        placeholder: j.intl.string(j.t.r2pts7)
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    (0, i.jsx)(d.FormDivider, { className: T.bottomDivider }),
                                    (0, i.jsxs)(h.Z, {
                                        children: [
                                            (0, i.jsx)(d.Tooltip, {
                                                text: j.intl.string(j.t.wwdb3t),
                                                forceOpen: y,
                                                color: d.TooltipColors.GREEN,
                                                disableTooltipPointerEvents: !0,
                                                children: (e) => {
                                                    let { onClick: t, onMouseEnter: l, onMouseLeave: r, onBlur: a, onFocus: o, ...s } = e;
                                                    return (0, i.jsx)(d.Button, {
                                                        ...s,
                                                        'aria-label': '',
                                                        onClick: () => {
                                                            null == t || t(), A(!0), d.AccessibilityAnnouncer.announce(j.intl.string(j.t.wwdb3t)), R.start(1000, () => A(!1)), k();
                                                        },
                                                        size: d.Button.Sizes.SMALL,
                                                        color: d.Button.Colors.PRIMARY,
                                                        look: d.Button.Looks.FILLED,
                                                        className: T.copyButton,
                                                        disabled: null == n.token || '' === n.token,
                                                        children: j.intl.string(j.t.Ae9rUV)
                                                    });
                                                }
                                            }),
                                            (0, i.jsx)(d.Button, {
                                                onClick: O,
                                                size: d.Button.Sizes.SMALL,
                                                color: d.Button.Colors.RED,
                                                look: d.Button.Looks.LINK,
                                                children: j.intl.string(j.t.jVrUnJ)
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })),
        (0, i.jsx)(d.Card, {
            editable: !0,
            id: t,
            className: a()(T.card, C ? T.pulse : null),
            children: (0, i.jsxs)(h.Z, {
                direction: h.Z.Direction.VERTICAL,
                children: [
                    (0, i.jsx)(d.Clickable, {
                        className: T.header,
                        'aria-expanded': f,
                        onClick: S,
                        children: (0, i.jsxs)(h.Z, {
                            align: h.Z.Align.CENTER,
                            children: [
                                (0, i.jsx)(N.Z, {
                                    name: n.name,
                                    imageSrc: L,
                                    details: w
                                }),
                                (0, i.jsx)(x.Z, {
                                    className: T.expandIcon,
                                    expanded: f,
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
