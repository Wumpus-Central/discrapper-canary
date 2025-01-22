n.d(t, {
    Z: function () {
        return z;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(512722),
    o = n.n(r),
    a = n(442837),
    l = n(481060),
    c = n(493683),
    d = n(13245),
    u = n(99690),
    h = n(835473),
    p = n(194082),
    f = n(442550),
    g = n(297781),
    m = n(371991),
    v = n(656709),
    x = n(561308),
    S = n(593481),
    Z = n(371651),
    _ = n(703656),
    E = n(199902),
    C = n(592125),
    I = n(158776),
    N = n(594174),
    y = n(237997),
    b = n(5192),
    T = n(145597),
    O = n(312839),
    j = n(981631),
    M = n(701488),
    k = n(987650),
    w = n(388032),
    P = n(522634);
function R(e) {
    let { game: t, trackClick: n, onDismissClick: r } = e,
        o = (0, h.q)(t.id),
        c = (0, a.e7)([y.Z], () => y.Z.showInviteNotification),
        u = s.useCallback(
            (e) => {
                e.stopPropagation(), n(c ? 'muted' : 'unmuted'), d.Z.setShowGameInviteNotification(!c);
            },
            [c, n]
        );
    if (null == o) return null;
    let p = o.getIconURL(M.Si.LARGE);
    return (0, i.jsxs)('div', {
        className: P.header,
        children: [
            (0, i.jsxs)('div', {
                className: P.headerLeft,
                children: [
                    (0, i.jsx)(f.f, {
                        src: p,
                        size: 16
                    }),
                    (0, i.jsx)(l.Text, {
                        className: P.gameInfo,
                        variant: 'text-sm/semibold',
                        color: 'header-primary',
                        children: o.name
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: P.headerRight,
                children: [
                    (0, i.jsx)(l.Button, {
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.NONE,
                        className: P.muteButton,
                        onClick: u,
                        children: c
                            ? (0, i.jsx)(l.BellIcon, {
                                  size: 'xs',
                                  color: l.tokens.colors.WHITE,
                                  className: P.muteIcon
                              })
                            : (0, i.jsx)(l.BellSlashIcon, {
                                  size: 'xs',
                                  color: l.tokens.colors.WHITE,
                                  className: P.muteIcon
                              })
                    }),
                    (0, i.jsx)(l.Button, {
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.NONE,
                        onClick: r,
                        className: P.dismissButton,
                        children: (0, i.jsx)(l.XLargeBoldIcon, {
                            size: 'xs',
                            color: l.tokens.colors.WHITE,
                            className: P.dismissIcon
                        })
                    })
                ]
            })
        ]
    });
}
function A(e) {
    let { entry: t, idx: n } = e,
        r = (0, a.e7)([N.default], () => N.default.getUser(t.author_id)),
        h = (0, x.kr)(t),
        f = h ? l.tokens.colors.TEXT_POSITIVE : l.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
        [S, Z] = s.useState('unsent'),
        [T, O] = s.useState(!1),
        M = (0, a.e7)([y.Z], () => y.Z.customInviteMessage),
        k = (0, a.e7)([E.Z], () => (null != r ? E.Z.getAnyStreamForUser(r.id) : null), [r]),
        { isMobileOnline: R, status: A } = (0, a.cj)(
            [I.Z],
            () =>
                null == r
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: I.Z.isMobileOnline(r.id),
                          status: I.Z.getStatus(r.id)
                      },
            [r]
        );
    s.useEffect(() => {
        if ('sent' === S) {
            let e = setTimeout(() => O(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [S]);
    let L = async (e) => {
            if (null != r && 'unsent' === S) {
                e.stopPropagation();
                try {
                    var i;
                    Z('sending');
                    let e = await c.Z.getOrEnsurePrivateChannel(r.id),
                        s = null !== (i = C.Z.getChannel(e)) && void 0 !== i ? i : null;
                    o()(null != s, 'Send channel must be defined'),
                        (0, _.uL)(j.Z5c.CHANNEL(s.guild_id, s.id)),
                        await (0, v.p)({
                            channel: s,
                            content: null != M ? M : w.intl.string(w.t.DwAcMz),
                            entry: t,
                            whenReady: !0
                        }),
                        d.Z.track(j.rMx.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: r.id,
                            target_content_entry_id: t.id,
                            target_index: n,
                            sent_custom_message: null != M
                        }),
                        Z('sent');
                } catch (e) {
                    Z('unsent');
                }
            }
        },
        D = async () => {
            var e;
            if (null == r) return;
            let t = await c.Z.getOrEnsurePrivateChannel(r.id),
                n = null !== (e = C.Z.getChannel(t)) && void 0 !== e ? e : null;
            o()(null != n, 'Send channel must be defined'), (0, _.uL)(j.Z5c.CHANNEL(n.guild_id, n.id));
        };
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: P.userRow,
              children: [
                  (0, i.jsx)(u.Z, {
                      className: P.avatarContainer,
                      user: r,
                      isMobile: R,
                      status: A
                  }),
                  (0, i.jsxs)('div', {
                      className: P.userInfo,
                      children: [
                          (0, i.jsxs)('div', {
                              className: P.usernameWrapper,
                              children: [
                                  (0, i.jsx)(l.Text, {
                                      className: P.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: b.ZP.getName(void 0, void 0, r)
                                  }),
                                  null != k && (0, i.jsx)(p.ZP, {})
                              ]
                          }),
                          (0, i.jsxs)(g.m7, {
                              children: [
                                  (0, i.jsx)(l.GameControllerIcon, {
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
                      className: P.inviteButtonWrapper,
                      children: (0, i.jsx)(l.Button, {
                          submitting: 'sending' === S,
                          onClick: T ? D : L,
                          className: P.inviteButton,
                          color: l.ButtonColors.PRIMARY,
                          look: 'sent' === S ? l.ButtonLooks.OUTLINED : l.ButtonLooks.FILLED,
                          size: l.ButtonSizes.MAX,
                          children:
                              'sent' === S
                                  ? T
                                      ? (0, i.jsx)(l.ChatIcon, { size: 'sm' })
                                      : (0, i.jsx)(l.CheckmarkSmallBoldIcon, {
                                            size: 'sm',
                                            color: l.tokens.colors.WHITE
                                        })
                                  : (0, i.jsx)(l.SendMessageIcon, { size: 'sm' })
                      })
                  })
              ]
          });
}
function L(e) {
    let { onCancel: t, onSave: n } = e,
        r = (0, a.e7)([y.Z], () => y.Z.customInviteMessage),
        o = s.createRef(),
        [c, u] = s.useState(null != r ? r : w.intl.string(w.t.DwAcMz)),
        [h, p] = s.useState(c.length),
        f = (e) => {
            e.stopPropagation(), d.Z.setInviteMessage(c), n(e);
        };
    return (0, i.jsxs)('div', {
        className: P.editMessageContainer,
        children: [
            (0, i.jsx)(l.TextInput, {
                autoFocus: !0,
                inputRef: o,
                onClick: (e) => e.stopPropagation(),
                onKeyDown: (e) => {
                    if ((e.stopPropagation(), ' ' === e.key)) {
                        var n, i;
                        if ((e.preventDefault(), null == o.current)) return;
                        let t = o.current,
                            s = null !== (n = t.selectionStart) && void 0 !== n ? n : 0,
                            r = null !== (i = t.selectionEnd) && void 0 !== i ? i : 0,
                            a = t.value;
                        (t.value = a.substring(0, s) + ' ' + a.substring(r)), t.setSelectionRange(s + 1, s + 1), p(a.length);
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
                className: P.editMessageButtons,
                children: [
                    (0, i.jsxs)(l.Text, {
                        className: P.charCount,
                        variant: 'text-xs/normal',
                        color: 'header-muted',
                        children: [h, '/', 99]
                    }),
                    (0, i.jsx)(l.Button, {
                        onClick: t,
                        className: P.cancelButton,
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.TINY,
                        children: w.intl.string(w.t['ETE/oK'])
                    }),
                    (0, i.jsx)(l.Button, {
                        onClick: f,
                        color: l.Button.Colors.PRIMARY,
                        look: l.Button.Looks.FILLED,
                        size: l.Button.Sizes.TINY,
                        children: w.intl.string(w.t.R3BPHx)
                    })
                ]
            })
        ]
    });
}
function D(e) {
    let { entries: t } = e,
        n = t.slice(0, 5),
        r = (0, a.e7)([y.Z], () => y.Z.customInviteMessage),
        o = w.intl.formatToPlainString(w.t['5uzKGB'], { inviteMessage: null != r ? r : w.intl.string(w.t.DwAcMz) }),
        [c, u] = s.useState(!1);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(S.iz, {}),
            (0, i.jsxs)(l.Text, {
                className: P.helpText,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: [
                    o,
                    (0, i.jsx)(l.Button, {
                        onClick: (e) => {
                            e.stopPropagation(), u(!c), d.Z.setInstanceLocked(c);
                        },
                        className: P.editButton,
                        look: l.Button.Looks.BLANK,
                        size: l.Button.Sizes.NONE,
                        children: (0, i.jsx)(l.PencilIcon, {
                            color: 'currentColor',
                            size: 'xxs'
                        })
                    })
                ]
            }),
            c &&
                (0, i.jsx)(L, {
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
                        A,
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
function z(e, t) {
    let { trackView: n, trackClick: s } = (0, O.R)(k.n0.SendGameInvitesNotification, { notif_type: k.n0.SendGameInvitesNotification });
    return (
        o()(t.length > 0, 'Some entries must be present'),
        {
            icon: null,
            title: (t) =>
                (0, i.jsx)(R, {
                    game: e,
                    trackClick: s,
                    onDismissClick: t
                }),
            body: (0, i.jsx)(D, { entries: t }),
            onNotificationShow: () => {
                n(),
                    d.Z.track(j.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: t.map((e) => e.author_id),
                        entry_ids: t.map((e) => e.id)
                    });
            },
            onNotificationClick: (e, t) => {
                e.stopPropagation(), s('unlock'), Z.Z.isOverlayOOPEnabledForPid((0, T.QF)()) ? d.Z.setInputLocked(!1, (0, T.QF)()) : d.Z.setInstanceLocked(!1);
            },
            onDismissClick: () => {
                s('dismiss');
            }
        }
    );
}
