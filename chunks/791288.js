n.d(t, { Z: () => z }), n(47120);
var i = n(200651),
    s = n(192379),
    l = n(512722),
    a = n.n(l),
    o = n(442837),
    r = n(481060),
    d = n(493683),
    c = n(13245),
    u = n(99690),
    h = n(835473),
    p = n(194082),
    g = n(442550),
    m = n(297781),
    f = n(371991),
    v = n(656709),
    Z = n(561308),
    x = n(593481),
    S = n(371651),
    E = n(703656),
    C = n(199902),
    y = n(592125),
    N = n(158776),
    I = n(594174),
    _ = n(237997),
    O = n(5192),
    j = n(145597),
    T = n(312839),
    k = n(981631),
    M = n(701488),
    b = n(987650),
    P = n(388032),
    w = n(969396);
function R(e) {
    let { game: t, trackClick: n, onDismissClick: l } = e,
        a = (0, h.q)(t.id),
        d = (0, o.e7)([_.Z], () => _.Z.showInviteNotification),
        u = s.useCallback(
            (e) => {
                e.stopPropagation(), n(d ? 'muted' : 'unmuted'), c.Z.setShowGameInviteNotification(!d);
            },
            [d, n]
        );
    if (null == a) return null;
    let p = a.getIconURL(M.Si.LARGE);
    return (0, i.jsxs)('div', {
        className: w.header,
        children: [
            (0, i.jsxs)('div', {
                className: w.headerLeft,
                children: [
                    (0, i.jsx)(g.f, {
                        src: p,
                        size: 16
                    }),
                    (0, i.jsx)(r.Text, {
                        className: w.gameInfo,
                        variant: 'text-sm/semibold',
                        color: 'header-primary',
                        children: a.name
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: w.headerRight,
                children: [
                    (0, i.jsx)(r.zxk, {
                        look: r.zxk.Looks.BLANK,
                        size: r.zxk.Sizes.NONE,
                        className: w.muteButton,
                        onClick: u,
                        children: d
                            ? (0, i.jsx)(r.Dkj, {
                                  size: 'xs',
                                  color: r.TVs.colors.WHITE,
                                  className: w.muteIcon
                              })
                            : (0, i.jsx)(r.owu, {
                                  size: 'xs',
                                  color: r.TVs.colors.WHITE,
                                  className: w.muteIcon
                              })
                    }),
                    (0, i.jsx)(r.zxk, {
                        look: r.zxk.Looks.BLANK,
                        size: r.zxk.Sizes.NONE,
                        onClick: l,
                        className: w.dismissButton,
                        children: (0, i.jsx)(r.CTb, {
                            size: 'xs',
                            color: r.TVs.colors.WHITE,
                            className: w.dismissIcon
                        })
                    })
                ]
            })
        ]
    });
}
function D(e) {
    let { entry: t, idx: n } = e,
        l = (0, o.e7)([I.default], () => I.default.getUser(t.author_id)),
        h = (0, Z.kr)(t),
        g = h ? r.TVs.colors.TEXT_POSITIVE : r.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
        [x, S] = s.useState('unsent'),
        [j, T] = s.useState(!1),
        M = (0, o.e7)([_.Z], () => _.Z.customInviteMessage),
        b = (0, o.e7)([C.Z], () => (null != l ? C.Z.getAnyStreamForUser(l.id) : null), [l]),
        { isMobileOnline: R, status: D } = (0, o.cj)(
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
        if ('sent' === x) {
            let e = setTimeout(() => T(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [x]);
    let A = async (e) => {
            if (null != l && 'unsent' === x) {
                e.stopPropagation();
                try {
                    var i;
                    S('sending');
                    let e = await d.Z.getOrEnsurePrivateChannel(l.id),
                        s = null !== (i = y.Z.getChannel(e)) && void 0 !== i ? i : null;
                    a()(null != s, 'Send channel must be defined'),
                        (0, E.uL)(k.Z5c.CHANNEL(s.guild_id, s.id)),
                        await (0, v.p)({
                            channel: s,
                            content: null != M ? M : P.intl.string(P.t.DwAcMz),
                            entry: t,
                            whenReady: !0
                        }),
                        c.Z.track(k.rMx.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: l.id,
                            target_content_entry_id: t.id,
                            target_index: n,
                            sent_custom_message: null != M
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
                n = null !== (e = y.Z.getChannel(t)) && void 0 !== e ? e : null;
            a()(null != n, 'Send channel must be defined'), (0, E.uL)(k.Z5c.CHANNEL(n.guild_id, n.id));
        };
    return null == l
        ? null
        : (0, i.jsxs)('div', {
              className: w.userRow,
              children: [
                  (0, i.jsx)(u.Z, {
                      className: w.avatarContainer,
                      user: l,
                      isMobile: R,
                      status: D
                  }),
                  (0, i.jsxs)('div', {
                      className: w.userInfo,
                      children: [
                          (0, i.jsxs)('div', {
                              className: w.usernameWrapper,
                              children: [
                                  (0, i.jsx)(r.Text, {
                                      className: w.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: O.ZP.getName(void 0, void 0, l)
                                  }),
                                  null != b && (0, i.jsx)(p.ZP, {})
                              ]
                          }),
                          (0, i.jsxs)(m.m7, {
                              children: [
                                  (0, i.jsx)(r.iWm, {
                                      size: 'xxs',
                                      color: g
                                  }),
                                  (0, i.jsx)(f.ZP, {
                                      entry: t,
                                      textColor: h ? 'text-positive' : 'content-inventory-overlay-text-secondary',
                                      bold: !0
                                  })
                              ]
                          })
                      ]
                  }),
                  (0, i.jsx)('div', {
                      className: w.inviteButtonWrapper,
                      children: (0, i.jsx)(r.zxk, {
                          submitting: 'sending' === x,
                          onClick: j ? L : A,
                          className: w.inviteButton,
                          color: r.Ttl.PRIMARY,
                          look: 'sent' === x ? r.iLD.OUTLINED : r.iLD.FILLED,
                          size: r.PhG.MAX,
                          children:
                              'sent' === x
                                  ? j
                                      ? (0, i.jsx)(r.kBi, { size: 'sm' })
                                      : (0, i.jsx)(r.kSu, {
                                            size: 'sm',
                                            color: r.TVs.colors.WHITE
                                        })
                                  : (0, i.jsx)(r.Uuj, { size: 'sm' })
                      })
                  })
              ]
          });
}
function A(e) {
    let { onCancel: t, onSave: n } = e,
        l = (0, o.e7)([_.Z], () => _.Z.customInviteMessage),
        a = s.createRef(),
        [d, u] = s.useState(null != l ? l : P.intl.string(P.t.DwAcMz)),
        [h, p] = s.useState(d.length),
        g = (e) => {
            e.stopPropagation(), c.Z.setInviteMessage(d), n(e);
        };
    return (0, i.jsxs)('div', {
        className: w.editMessageContainer,
        children: [
            (0, i.jsx)(r.oil, {
                autoFocus: !0,
                inputRef: a,
                onClick: (e) => e.stopPropagation(),
                onKeyDown: (e) => {
                    if ((e.stopPropagation(), ' ' === e.key)) {
                        var n, i;
                        if ((e.preventDefault(), null == a.current)) return;
                        let t = a.current,
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
                className: w.editMessageButtons,
                children: [
                    (0, i.jsxs)(r.Text, {
                        className: w.charCount,
                        variant: 'text-xs/normal',
                        color: 'header-muted',
                        children: [h, '/', 99]
                    }),
                    (0, i.jsx)(r.zxk, {
                        onClick: t,
                        className: w.cancelButton,
                        look: r.zxk.Looks.BLANK,
                        size: r.zxk.Sizes.TINY,
                        children: P.intl.string(P.t['ETE/oK'])
                    }),
                    (0, i.jsx)(r.zxk, {
                        onClick: g,
                        color: r.zxk.Colors.PRIMARY,
                        look: r.zxk.Looks.FILLED,
                        size: r.zxk.Sizes.TINY,
                        children: P.intl.string(P.t.R3BPHx)
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
        a = P.intl.formatToPlainString(P.t['5uzKGB'], { inviteMessage: null != l ? l : P.intl.string(P.t.DwAcMz) }),
        [d, u] = s.useState(!1);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(x.iz, {}),
            (0, i.jsxs)(r.Text, {
                className: w.helpText,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: [
                    a,
                    (0, i.jsx)(r.zxk, {
                        onClick: (e) => {
                            e.stopPropagation(), u(!d), c.Z.setInstanceLocked(d);
                        },
                        className: w.editButton,
                        look: r.zxk.Looks.BLANK,
                        size: r.zxk.Sizes.NONE,
                        children: (0, i.jsx)(r.vdY, {
                            color: 'currentColor',
                            size: 'xxs'
                        })
                    })
                ]
            }),
            d &&
                (0, i.jsx)(A, {
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
                        D,
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
    let { trackView: n, trackClick: s } = (0, T.R)(b.n0.SendGameInvitesNotification, { notif_type: b.n0.SendGameInvitesNotification });
    return (
        a()(t.length > 0, 'Some entries must be present'),
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
                    c.Z.track(k.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: t.map((e) => e.author_id),
                        entry_ids: t.map((e) => e.id)
                    });
            },
            onNotificationClick: (e, t) => {
                e.stopPropagation(), s('unlock'), S.default.isOverlayOOPEnabledForPid((0, j.QF)()) ? c.Z.setInputLocked(!1, (0, j.QF)()) : c.Z.setInstanceLocked(!1);
            },
            onDismissClick: () => {
                s('dismiss');
            }
        }
    );
}
