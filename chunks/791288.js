n.d(t, { Z: () => W }), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(512722),
    o = n.n(s),
    l = n(442837),
    a = n(481060),
    c = n(493683),
    d = n(13245),
    u = n(99690),
    h = n(835473),
    p = n(194082),
    g = n(442550),
    f = n(297781),
    m = n(371991),
    y = n(656709),
    O = n(561308),
    v = n(593481),
    S = n(371651),
    b = n(703656),
    x = n(199902),
    Z = n(592125),
    j = n(158776),
    E = n(594174),
    N = n(237997),
    C = n(5192),
    I = n(145597),
    P = n(312839),
    w = n(981631),
    _ = n(701488),
    T = n(987650),
    k = n(388032),
    D = n(995816);
function M(e) {
    let { game: t, trackClick: n, onDismissClick: s } = e,
        o = (0, h.q)(t.id),
        c = (0, l.e7)([N.Z], () => N.Z.showInviteNotification),
        u = r.useCallback(
            (e) => {
                e.stopPropagation(), n(c ? 'muted' : 'unmuted'), d.Z.setShowGameInviteNotification(!c);
            },
            [c, n]
        );
    if (null == o) return null;
    let p = o.getIconURL(_.Si.LARGE);
    return (0, i.jsxs)('div', {
        className: D.header,
        children: [
            (0, i.jsxs)('div', {
                className: D.headerLeft,
                children: [
                    (0, i.jsx)(g.f, {
                        src: p,
                        size: 16
                    }),
                    (0, i.jsx)(a.Text, {
                        className: D.gameInfo,
                        variant: 'text-sm/semibold',
                        color: 'header-primary',
                        children: o.name
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: D.headerRight,
                children: [
                    (0, i.jsx)(a.zxk, {
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.NONE,
                        className: D.muteButton,
                        onClick: u,
                        children: c
                            ? (0, i.jsx)(a.Dkj, {
                                  size: 'xs',
                                  color: a.TVs.colors.WHITE,
                                  className: D.muteIcon
                              })
                            : (0, i.jsx)(a.owu, {
                                  size: 'xs',
                                  color: a.TVs.colors.WHITE,
                                  className: D.muteIcon
                              })
                    }),
                    (0, i.jsx)(a.zxk, {
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.NONE,
                        onClick: s,
                        className: D.dismissButton,
                        children: (0, i.jsx)(a.CTb, {
                            size: 'xs',
                            color: a.TVs.colors.WHITE,
                            className: D.dismissIcon
                        })
                    })
                ]
            })
        ]
    });
}
function R(e) {
    let { entry: t, idx: n } = e,
        s = (0, l.e7)([E.default], () => E.default.getUser(t.author_id)),
        h = (0, O.kr)(t),
        g = h ? a.TVs.colors.TEXT_POSITIVE : a.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
        [v, S] = r.useState('unsent'),
        [I, P] = r.useState(!1),
        _ = (0, l.e7)([N.Z], () => N.Z.customInviteMessage),
        T = (0, l.e7)([x.Z], () => (null != s ? x.Z.getAnyStreamForUser(s.id) : null), [s]),
        { isMobileOnline: M, status: R } = (0, l.cj)(
            [j.Z],
            () =>
                null == s
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: j.Z.isMobileOnline(s.id),
                          status: j.Z.getStatus(s.id)
                      },
            [s]
        );
    r.useEffect(() => {
        if ('sent' === v) {
            let e = setTimeout(() => P(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [v]);
    let A = async (e) => {
            if (null != s && 'unsent' === v) {
                e.stopPropagation();
                try {
                    var i;
                    S('sending');
                    let e = await c.Z.getOrEnsurePrivateChannel(s.id),
                        r = null !== (i = Z.Z.getChannel(e)) && void 0 !== i ? i : null;
                    o()(null != r, 'Send channel must be defined'),
                        (0, b.uL)(w.Z5c.CHANNEL(r.guild_id, r.id)),
                        await (0, y.p)({
                            channel: r,
                            content: null != _ ? _ : k.NW.string(k.t.DwAcMz),
                            entry: t,
                            whenReady: !0
                        }),
                        d.Z.track(w.rMx.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: s.id,
                            target_content_entry_id: t.id,
                            target_index: n,
                            sent_custom_message: null != _
                        }),
                        S('sent');
                } catch (e) {
                    S('unsent');
                }
            }
        },
        L = async () => {
            var e;
            if (null == s) return;
            let t = await c.Z.getOrEnsurePrivateChannel(s.id),
                n = null !== (e = Z.Z.getChannel(t)) && void 0 !== e ? e : null;
            o()(null != n, 'Send channel must be defined'), (0, b.uL)(w.Z5c.CHANNEL(n.guild_id, n.id));
        };
    return null == s
        ? null
        : (0, i.jsxs)('div', {
              className: D.userRow,
              children: [
                  (0, i.jsx)(u.Z, {
                      className: D.avatarContainer,
                      user: s,
                      isMobile: M,
                      status: R
                  }),
                  (0, i.jsxs)('div', {
                      className: D.userInfo,
                      children: [
                          (0, i.jsxs)('div', {
                              className: D.usernameWrapper,
                              children: [
                                  (0, i.jsx)(a.Text, {
                                      className: D.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: C.ZP.getName(void 0, void 0, s)
                                  }),
                                  null != T && (0, i.jsx)(p.ZP, {})
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
                      className: D.inviteButtonWrapper,
                      children: (0, i.jsx)(a.zxk, {
                          submitting: 'sending' === v,
                          onClick: I ? L : A,
                          className: D.inviteButton,
                          color: a.Ttl.PRIMARY,
                          look: 'sent' === v ? a.iLD.OUTLINED : a.iLD.FILLED,
                          size: a.PhG.MAX,
                          children:
                              'sent' === v
                                  ? I
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
function A(e) {
    let { onCancel: t, onSave: n } = e,
        s = (0, l.e7)([N.Z], () => N.Z.customInviteMessage),
        o = r.createRef(),
        [c, u] = r.useState(null != s ? s : k.NW.string(k.t.DwAcMz)),
        [h, p] = r.useState(c.length),
        g = (e) => {
            e.stopPropagation(), d.Z.setInviteMessage(c), n(e);
        };
    return (0, i.jsxs)('div', {
        className: D.editMessageContainer,
        children: [
            (0, i.jsx)(a.oil, {
                autoFocus: !0,
                inputRef: o,
                onClick: (e) => e.stopPropagation(),
                onKeyDown: (e) => {
                    if ((e.stopPropagation(), ' ' === e.key)) {
                        var n, i;
                        if ((e.preventDefault(), null == o.current)) return;
                        let t = o.current,
                            r = null !== (n = t.selectionStart) && void 0 !== n ? n : 0,
                            s = null !== (i = t.selectionEnd) && void 0 !== i ? i : 0,
                            l = t.value;
                        (t.value = l.substring(0, r) + ' ' + l.substring(s)), t.setSelectionRange(r + 1, r + 1), p(l.length);
                    }
                    'Enter' === e.key && g(e), 'Escape' === e.key && (e.preventDefault(), t(e));
                },
                onKeyUp: (e) => e.stopPropagation(),
                maxLength: 99,
                onChange: (e) => {
                    u(e), p(e.length);
                },
                value: c
            }),
            (0, i.jsxs)('div', {
                className: D.editMessageButtons,
                children: [
                    (0, i.jsxs)(a.Text, {
                        className: D.charCount,
                        variant: 'text-xs/normal',
                        color: 'header-muted',
                        children: [h, '/', 99]
                    }),
                    (0, i.jsx)(a.zxk, {
                        onClick: t,
                        className: D.cancelButton,
                        look: a.zxk.Looks.BLANK,
                        size: a.zxk.Sizes.TINY,
                        children: k.NW.string(k.t['ETE/oK'])
                    }),
                    (0, i.jsx)(a.zxk, {
                        onClick: g,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.FILLED,
                        size: a.zxk.Sizes.TINY,
                        children: k.NW.string(k.t.R3BPHx)
                    })
                ]
            })
        ]
    });
}
function L(e) {
    let { entries: t } = e,
        n = t.slice(0, 5),
        s = (0, l.e7)([N.Z], () => N.Z.customInviteMessage),
        o = k.NW.formatToPlainString(k.t['5uzKGB'], { inviteMessage: null != s ? s : k.NW.string(k.t.DwAcMz) }),
        [c, u] = r.useState(!1);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(v.iz, {}),
            (0, i.jsxs)(a.Text, {
                className: D.helpText,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: [
                    o,
                    (0, i.jsx)(a.zxk, {
                        onClick: (e) => {
                            e.stopPropagation(), u(!c), d.Z.setInstanceLocked(c);
                        },
                        className: D.editButton,
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
                (0, i.jsx)(A, {
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
                        R,
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
    let { trackView: n, trackClick: r } = (0, P.R)(T.n0.SendGameInvitesNotification, { notif_type: T.n0.SendGameInvitesNotification });
    return (
        o()(t.length > 0, 'Some entries must be present'),
        {
            icon: null,
            title: (t) =>
                (0, i.jsx)(M, {
                    game: e,
                    trackClick: r,
                    onDismissClick: t
                }),
            body: (0, i.jsx)(L, { entries: t }),
            onNotificationShow: () => {
                n(),
                    d.Z.track(w.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: t.map((e) => e.author_id),
                        entry_ids: t.map((e) => e.id)
                    });
            },
            onNotificationClick: (e, t) => {
                e.stopPropagation(), r('unlock'), S.default.isOverlayOOPEnabledForPid((0, I.QF)()) ? d.Z.setInputLocked(!1, (0, I.QF)()) : d.Z.setInstanceLocked(!1);
            },
            onDismissClick: () => {
                r('dismiss');
            }
        }
    );
}
