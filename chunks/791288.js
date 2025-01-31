n.d(t, { Z: () => z }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(512722),
    r = n.n(l),
    o = n(442837),
    a = n(481060),
    d = n(493683),
    c = n(13245),
    u = n(99690),
    h = n(835473),
    p = n(194082),
    g = n(442550),
    f = n(297781),
    m = n(371991),
    x = n(656709),
    v = n(561308),
    Z = n(593481),
    S = n(371651),
    E = n(703656),
    C = n(199902),
    I = n(592125),
    N = n(158776),
    y = n(594174),
    _ = n(237997),
    j = n(5192),
    O = n(145597),
    T = n(312839),
    b = n(981631),
    k = n(701488),
    M = n(987650),
    w = n(388032),
    P = n(522634);
function R(e) {
    let { game: t, trackClick: n, onDismissClick: l } = e,
        r = (0, h.q)(t.id),
        d = (0, o.e7)([_.Z], () => _.Z.showInviteNotification),
        u = s.useCallback(
            (e) => {
                e.stopPropagation(), n(d ? 'muted' : 'unmuted'), c.Z.setShowGameInviteNotification(!d);
            },
            [d, n]
        );
    if (null == r) return null;
    let p = r.getIconURL(k.Si.LARGE);
    return (0, i.jsxs)('div', {
        className: P.header,
        children: [
            (0, i.jsxs)('div', {
                className: P.headerLeft,
                children: [
                    (0, i.jsx)(g.f, {
                        src: p,
                        size: 16
                    }),
                    (0, i.jsx)(a.Text, {
                        className: P.gameInfo,
                        variant: 'text-sm/semibold',
                        color: 'header-primary',
                        children: r.name
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: P.headerRight,
                children: [
                    (0, i.jsx)(a.zxk, {
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.NONE,
                        className: P.muteButton,
                        onClick: u,
                        children: d
                            ? (0, i.jsx)(a.Dkj, {
                                  size: 'xs',
                                  color: a.TVs.colors.WHITE,
                                  className: P.muteIcon
                              })
                            : (0, i.jsx)(a.owu, {
                                  size: 'xs',
                                  color: a.TVs.colors.WHITE,
                                  className: P.muteIcon
                              })
                    }),
                    (0, i.jsx)(a.zxk, {
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.NONE,
                        onClick: l,
                        className: P.dismissButton,
                        children: (0, i.jsx)(a.CTb, {
                            size: 'xs',
                            color: a.TVs.colors.WHITE,
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
        l = (0, o.e7)([y.default], () => y.default.getUser(t.author_id)),
        h = (0, v.kr)(t),
        g = h ? a.TVs.colors.TEXT_POSITIVE : a.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
        [Z, S] = s.useState('unsent'),
        [O, T] = s.useState(!1),
        k = (0, o.e7)([_.Z], () => _.Z.customInviteMessage),
        M = (0, o.e7)([C.Z], () => (null != l ? C.Z.getAnyStreamForUser(l.id) : null), [l]),
        { isMobileOnline: R, status: A } = (0, o.cj)(
            [N.Z],
            () =>
                null == l
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: N.Z.isMobileOnline(l.id),
                          status: N.Z.getStatus(l.id)
                      },
            [l]
        );
    s.useEffect(() => {
        if ('sent' === Z) {
            let e = setTimeout(() => T(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [Z]);
    let D = async (e) => {
            if (null != l && 'unsent' === Z) {
                e.stopPropagation();
                try {
                    var i;
                    S('sending');
                    let e = await d.Z.getOrEnsurePrivateChannel(l.id),
                        s = null !== (i = I.Z.getChannel(e)) && void 0 !== i ? i : null;
                    r()(null != s, 'Send channel must be defined'),
                        (0, E.uL)(b.Z5c.CHANNEL(s.guild_id, s.id)),
                        await (0, x.p)({
                            channel: s,
                            content: null != k ? k : w.intl.string(w.t.DwAcMz),
                            entry: t,
                            whenReady: !0
                        }),
                        c.Z.track(b.rMx.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: l.id,
                            target_content_entry_id: t.id,
                            target_index: n,
                            sent_custom_message: null != k
                        }),
                        S('sent');
                } catch (e) {
                    S('unsent');
                }
            }
        },
        L = async () => {
            var e;
            if (null == l) return;
            let t = await d.Z.getOrEnsurePrivateChannel(l.id),
                n = null !== (e = I.Z.getChannel(t)) && void 0 !== e ? e : null;
            r()(null != n, 'Send channel must be defined'), (0, E.uL)(b.Z5c.CHANNEL(n.guild_id, n.id));
        };
    return null == l
        ? null
        : (0, i.jsxs)('div', {
              className: P.userRow,
              children: [
                  (0, i.jsx)(u.Z, {
                      className: P.avatarContainer,
                      user: l,
                      isMobile: R,
                      status: A
                  }),
                  (0, i.jsxs)('div', {
                      className: P.userInfo,
                      children: [
                          (0, i.jsxs)('div', {
                              className: P.usernameWrapper,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      className: P.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: j.ZP.getName(void 0, void 0, l)
                                  }),
                                  null != M && (0, i.jsx)(p.ZP, {})
                              ]
                          }),
                          (0, i.jsxs)(f.m7, {
                              children: [
                                  (0, i.jsx)(a.iWm, {
                                      size: 'xxs',
                                      color: g
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
                      children: (0, i.jsx)(a.zxk, {
                          submitting: 'sending' === Z,
                          onClick: O ? L : D,
                          className: P.inviteButton,
                          color: a.Ttl.PRIMARY,
                          look: 'sent' === Z ? a.iLD.OUTLINED : a.iLD.FILLED,
                          size: a.PhG.MAX,
                          children:
                              'sent' === Z
                                  ? O
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
function D(e) {
    let { onCancel: t, onSave: n } = e,
        l = (0, o.e7)([_.Z], () => _.Z.customInviteMessage),
        r = s.createRef(),
        [d, u] = s.useState(null != l ? l : w.intl.string(w.t.DwAcMz)),
        [h, p] = s.useState(d.length),
        g = (e) => {
            e.stopPropagation(), c.Z.setInviteMessage(d), n(e);
        };
    return (0, i.jsxs)('div', {
        className: P.editMessageContainer,
        children: [
            (0, i.jsx)(a.oil, {
                autoFocus: !0,
                inputRef: r,
                onClick: (e) => e.stopPropagation(),
                onKeyDown: (e) => {
                    if ((e.stopPropagation(), ' ' === e.key)) {
                        var n, i;
                        if ((e.preventDefault(), null == r.current)) return;
                        let t = r.current,
                            s = null !== (n = t.selectionStart) && void 0 !== n ? n : 0,
                            l = null !== (i = t.selectionEnd) && void 0 !== i ? i : 0,
                            o = t.value;
                        (t.value = o.substring(0, s) + ' ' + o.substring(l)), t.setSelectionRange(s + 1, s + 1), p(o.length);
                    }
                    'Enter' === e.key && g(e), 'Escape' === e.key && (e.preventDefault(), t(e));
                },
                onKeyUp: (e) => e.stopPropagation(),
                maxLength: 99,
                onChange: (e) => {
                    u(e), p(e.length);
                },
                value: d
            }),
            (0, i.jsxs)('div', {
                className: P.editMessageButtons,
                children: [
                    (0, i.jsxs)(a.Text, {
                        className: P.charCount,
                        variant: 'text-xs/normal',
                        color: 'header-muted',
                        children: [h, '/', 99]
                    }),
                    (0, i.jsx)(a.zxk, {
                        onClick: t,
                        className: P.cancelButton,
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.TINY,
                        children: w.intl.string(w.t['ETE/oK'])
                    }),
                    (0, i.jsx)(a.zxk, {
                        onClick: g,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.FILLED,
                        size: a.zxk.Sizes.TINY,
                        children: w.intl.string(w.t.R3BPHx)
                    })
                ]
            })
        ]
    });
}
function L(e) {
    let { entries: t } = e,
        n = t.slice(0, 5),
        l = (0, o.e7)([_.Z], () => _.Z.customInviteMessage),
        r = w.intl.formatToPlainString(w.t['5uzKGB'], { inviteMessage: null != l ? l : w.intl.string(w.t.DwAcMz) }),
        [d, u] = s.useState(!1);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(Z.iz, {}),
            (0, i.jsxs)(a.Text, {
                className: P.helpText,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: [
                    r,
                    (0, i.jsx)(a.zxk, {
                        onClick: (e) => {
                            e.stopPropagation(), u(!d), c.Z.setInstanceLocked(d);
                        },
                        className: P.editButton,
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.NONE,
                        children: (0, i.jsx)(a.vdY, {
                            color: 'currentColor',
                            size: 'xxs'
                        })
                    })
                ]
            }),
            d &&
                (0, i.jsx)(D, {
                    onSave: (e) => {
                        e.stopPropagation(), u(!1);
                    },
                    onCancel: (e) => {
                        e.stopPropagation(), u(!1), c.Z.setInstanceLocked(!0);
                    }
                }),
            !d &&
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
    let { trackView: n, trackClick: s } = (0, T.R)(M.n0.SendGameInvitesNotification, { notif_type: M.n0.SendGameInvitesNotification });
    return (
        r()(t.length > 0, 'Some entries must be present'),
        {
            icon: null,
            title: (t) =>
                (0, i.jsx)(R, {
                    game: e,
                    trackClick: s,
                    onDismissClick: t
                }),
            body: (0, i.jsx)(L, { entries: t }),
            onNotificationShow: () => {
                n(),
                    c.Z.track(b.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: t.map((e) => e.author_id),
                        entry_ids: t.map((e) => e.id)
                    });
            },
            onNotificationClick: (e, t) => {
                e.stopPropagation(), s('unlock'), S.Z.isOverlayOOPEnabledForPid((0, O.QF)()) ? c.Z.setInputLocked(!1, (0, O.QF)()) : c.Z.setInstanceLocked(!1);
            },
            onDismissClick: () => {
                s('dismiss');
            }
        }
    );
}
