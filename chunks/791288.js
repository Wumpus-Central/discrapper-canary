n.d(t, { Z: () => W }), n(388685);
var i = n(255367),
    r = n(73800),
    o = n(512722),
    s = n.n(o),
    l = n(442837),
    a = n(481060),
    c = n(493683),
    d = n(13245),
    u = n(99690),
    h = n(835473),
    p = n(194082),
    f = n(442550),
    g = n(297781),
    m = n(371991),
    y = n(656709),
    _ = n(561308),
    v = n(593481),
    O = n(486016),
    b = n(371651),
    E = n(624864),
    x = n(703656),
    S = n(199902),
    C = n(592125),
    j = n(158776),
    Z = n(594174),
    I = n(237997),
    P = n(5192),
    N = n(145597),
    w = n(312839),
    T = n(981631),
    k = n(701488),
    D = n(987650),
    R = n(388032),
    A = n(172519);
function L(e) {
    let { game: t, trackClick: n, onDismissClick: o } = e,
        s = (0, h.q)(t.id),
        c = (0, l.e7)([E.Z], () => !E.Z.isNotificationDisabled(O.OverlayNotificationDisabledSetting.GAME_ACTIVITY)),
        u = r.useCallback(
            (e) => {
                e.stopPropagation(), n(c ? 'muted' : 'unmuted'), d.Z.setNotificationDisabledSetting(O.OverlayNotificationDisabledSetting.GAME_ACTIVITY, !c);
            },
            [c, n]
        );
    if (null == s) return null;
    let p = s.getIconURL(k.Si.LARGE);
    return (0, i.jsxs)('div', {
        className: A.header,
        children: [
            (0, i.jsxs)('div', {
                className: A.headerLeft,
                children: [
                    (0, i.jsx)(f.f, {
                        src: p,
                        size: 16
                    }),
                    (0, i.jsx)(a.Text, {
                        className: A.gameInfo,
                        variant: 'text-sm/semibold',
                        color: 'header-primary',
                        children: s.name
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: A.headerRight,
                children: [
                    (0, i.jsx)(a.zxk, {
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.NONE,
                        className: A.muteButton,
                        onClick: u,
                        children: c
                            ? (0, i.jsx)(a.Dkj, {
                                  size: 'xs',
                                  color: a.TVs.colors.WHITE,
                                  className: A.muteIcon
                              })
                            : (0, i.jsx)(a.owu, {
                                  size: 'xs',
                                  color: a.TVs.colors.WHITE,
                                  className: A.muteIcon
                              })
                    }),
                    (0, i.jsx)(a.zxk, {
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.NONE,
                        onClick: o,
                        className: A.dismissButton,
                        children: (0, i.jsx)(a.CTb, {
                            size: 'xs',
                            color: a.TVs.colors.WHITE,
                            className: A.dismissIcon
                        })
                    })
                ]
            })
        ]
    });
}
function M(e) {
    let { entry: t, idx: n } = e,
        o = (0, l.e7)([Z.default], () => Z.default.getUser(t.author_id)),
        h = (0, _.kr)(t),
        f = h ? a.TVs.colors.TEXT_POSITIVE : a.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
        [v, O] = r.useState('unsent'),
        [b, E] = r.useState(!1),
        N = (0, l.e7)([I.default], () => I.default.customInviteMessage),
        w = (0, l.e7)([S.Z], () => (null != o ? S.Z.getAnyStreamForUser(o.id) : null), [o]),
        { isMobileOnline: k, status: D } = (0, l.cj)(
            [j.Z],
            () =>
                null == o
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: j.Z.isMobileOnline(o.id),
                          status: j.Z.getStatus(o.id)
                      },
            [o]
        );
    r.useEffect(() => {
        if ('sent' === v) {
            let e = setTimeout(() => E(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [v]);
    let L = async (e) => {
            if (null != o && 'unsent' === v) {
                e.stopPropagation();
                try {
                    var i;
                    O('sending');
                    let e = await c.Z.getOrEnsurePrivateChannel(o.id),
                        r = null != (i = C.Z.getChannel(e)) ? i : null;
                    s()(null != r, 'Send channel must be defined'),
                        (0, x.uL)(T.Z5c.CHANNEL(r.guild_id, r.id)),
                        await (0, y.p)({
                            channel: r,
                            content: null != N ? N : R.intl.string(R.t.DwAcMz),
                            entry: t,
                            whenReady: !0
                        }),
                        d.Z.track(T.rMx.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: o.id,
                            target_content_entry_id: t.id,
                            target_index: n,
                            sent_custom_message: null != N
                        }),
                        O('sent');
                } catch (e) {
                    O('unsent');
                }
            }
        },
        M = async () => {
            var e;
            if (null == o) return;
            let t = await c.Z.getOrEnsurePrivateChannel(o.id),
                n = null != (e = C.Z.getChannel(t)) ? e : null;
            s()(null != n, 'Send channel must be defined'), (0, x.uL)(T.Z5c.CHANNEL(n.guild_id, n.id));
        };
    return null == o
        ? null
        : (0, i.jsxs)('div', {
              className: A.userRow,
              children: [
                  (0, i.jsx)(u.Z, {
                      className: A.avatarContainer,
                      user: o,
                      isMobile: k,
                      status: D
                  }),
                  (0, i.jsxs)('div', {
                      className: A.userInfo,
                      children: [
                          (0, i.jsxs)('div', {
                              className: A.usernameWrapper,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      className: A.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: P.ZP.getName(void 0, void 0, o)
                                  }),
                                  null != w && (0, i.jsx)(p.ZP, {})
                              ]
                          }),
                          (0, i.jsxs)(g.m7, {
                              children: [
                                  (0, i.jsx)(a.iWm, {
                                      size: 'xxs',
                                      color: f
                                  }),
                                  (0, i.jsx)(m.ZP, {
                                      entry: t,
                                      textColor: h ? 'text-positive' : 'content-inventory-overlay-text-secondary',
                                      bold: !0
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: A.inviteButtonWrapper,
                      children: (0, i.jsx)(a.zxk, {
                          submitting: 'sending' === v,
                          onClick: b ? M : L,
                          className: A.inviteButton,
                          color: a.Ttl.PRIMARY,
                          look: 'sent' === v ? a.iLD.OUTLINED : a.iLD.FILLED,
                          size: a.PhG.MAX,
                          children:
                              'sent' === v
                                  ? b
                                      ? (0, i.jsx)(a.kBi, { size: 'sm' })
                                      : (0, i.jsx)(a.kSu, {
                                            size: 'sm',
                                            color: a.TVs.colors.WHITE
                                        })
                                  : (0, i.jsx)(a.Uuj, { size: 'sm' })
                      })
                  })
              ]
          });
}
function z(e) {
    let { onCancel: t, onSave: n } = e,
        o = (0, l.e7)([I.default], () => I.default.customInviteMessage),
        s = r.useRef(null),
        [c, u] = r.useState(null != o ? o : R.intl.string(R.t.DwAcMz)),
        [h, p] = r.useState(c.length),
        f = (e) => {
            e.stopPropagation(), d.Z.setInviteMessage(c), n(e);
        };
    return (0, i.jsxs)('div', {
        className: A.editMessageContainer,
        children: [
            (0, i.jsx)(a.oil, {
                autoFocus: !0,
                inputRef: s,
                onClick: (e) => e.stopPropagation(),
                onKeyDown: (e) => {
                    if ((e.stopPropagation(), ' ' === e.key)) {
                        var n, i;
                        if ((e.preventDefault(), null == s.current)) return;
                        let t = s.current,
                            r = null != (n = t.selectionStart) ? n : 0,
                            o = null != (i = t.selectionEnd) ? i : 0,
                            l = t.value;
                        (t.value = l.substring(0, r) + ' ' + l.substring(o)), t.setSelectionRange(r + 1, r + 1), p(l.length);
                    }
                    'Enter' === e.key && f(e), 'Escape' === e.key && (e.preventDefault(), t(e));
                },
                onKeyUp: (e) => e.stopPropagation(),
                maxLength: 99,
                onChange: (e) => {
                    u(e), p(e.length);
                },
                value: c
            }),
            (0, i.jsxs)('div', {
                className: A.editMessageButtons,
                children: [
                    (0, i.jsxs)(a.Text, {
                        className: A.charCount,
                        variant: 'text-xs/normal',
                        color: 'header-muted',
                        children: [h, '/', 99]
                    }),
                    (0, i.jsx)(a.zxk, {
                        onClick: t,
                        className: A.cancelButton,
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.TINY,
                        children: R.intl.string(R.t['ETE/oK'])
                    }),
                    (0, i.jsx)(a.zxk, {
                        onClick: f,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.FILLED,
                        size: a.zxk.Sizes.TINY,
                        children: R.intl.string(R.t.R3BPHx)
                    })
                ]
            })
        ]
    });
}
function V(e) {
    let { entries: t } = e,
        n = t.slice(0, 5),
        o = (0, l.e7)([I.default], () => I.default.customInviteMessage),
        s = R.intl.formatToPlainString(R.t['5uzKGB'], { inviteMessage: null != o ? o : R.intl.string(R.t.DwAcMz) }),
        [c, u] = r.useState(!1);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(v.iz, {}),
            (0, i.jsxs)(a.Text, {
                className: A.helpText,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: [
                    s,
                    (0, i.jsx)(a.zxk, {
                        onClick: (e) => {
                            e.stopPropagation(), u(!c), d.Z.setInstanceLocked(c);
                        },
                        className: A.editButton,
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.NONE,
                        children: (0, i.jsx)(a.vdY, {
                            color: 'currentColor',
                            size: 'xxs'
                        })
                    })
                ]
            }),
            c &&
                (0, i.jsx)(z, {
                    onSave: (e) => {
                        e.stopPropagation(), u(!1);
                    },
                    onCancel: (e) => {
                        e.stopPropagation(), u(!1), d.Z.setInstanceLocked(!0);
                    }
                }),
            !c &&
                n.map((e, t) =>
                    (0, i.jsx)(
                        M,
                        {
                            idx: t,
                            entry: e
                        },
                        t
                    )
                )
        ]
    });
}
function W(e, t) {
    let { trackView: n, trackClick: r } = (0, w.R)(D.n0.SendGameInvitesNotification, { notif_type: D.n0.SendGameInvitesNotification });
    return (
        s()(t.length > 0, 'Some entries must be present'),
        {
            icon: null,
            title: (t) =>
                (0, i.jsx)(L, {
                    game: e,
                    trackClick: r,
                    onDismissClick: t
                }),
            body: (0, i.jsx)(V, { entries: t }),
            onNotificationShow: () => {
                n(),
                    d.Z.track(T.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: t.map((e) => e.author_id),
                        entry_ids: t.map((e) => e.id)
                    });
            },
            onNotificationClick: (e, t) => {
                e.stopPropagation(), r('unlock'), b.default.isOverlayOOPEnabledForPid((0, N.getPID)()) ? d.Z.setInputLocked(!1, (0, N.getPID)()) : d.Z.setInstanceLocked(!1);
            },
            onDismissClick: () => {
                r('dismiss');
            }
        }
    );
}
