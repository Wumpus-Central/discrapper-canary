n.d(t, { Z: () => V }), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(512722),
    o = n.n(s),
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
    y = n(656709),
    _ = n(561308),
    v = n(593481),
    b = n(486016),
    O = n(371651),
    x = n(624864),
    S = n(703656),
    E = n(199902),
    N = n(592125),
    j = n(158776),
    C = n(594174),
    I = n(237997),
    Z = n(5192),
    P = n(145597),
    w = n(312839),
    T = n(981631),
    k = n(701488),
    D = n(987650),
    M = n(388032),
    A = n(538917);
function R(e) {
    let { game: t, trackClick: n, onDismissClick: s } = e,
        o = (0, h.q)(t.id),
        c = (0, a.e7)([x.Z], () => !x.Z.isNotificationDisabled(b.OverlayNotificationDisabledSetting.GAME_ACTIVITY)),
        u = r.useCallback(
            (e) => {
                e.stopPropagation(), n(c ? 'muted' : 'unmuted'), d.Z.setNotificationDisabledSetting(b.OverlayNotificationDisabledSetting.GAME_ACTIVITY, !c);
            },
            [c, n]
        );
    if (null == o) return null;
    let p = o.getIconURL(k.Si.LARGE);
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
                    (0, i.jsx)(l.Text, {
                        className: A.gameInfo,
                        variant: 'text-sm/semibold',
                        color: 'header-primary',
                        children: o.name
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: A.headerRight,
                children: [
                    (0, i.jsx)(l.zxk, {
                        look: l.zxk.Looks.BLANK,
                        size: l.zxk.Sizes.NONE,
                        className: A.muteButton,
                        onClick: u,
                        children: c
                            ? (0, i.jsx)(l.Dkj, {
                                  size: 'xs',
                                  color: l.TVs.colors.WHITE,
                                  className: A.muteIcon
                              })
                            : (0, i.jsx)(l.owu, {
                                  size: 'xs',
                                  color: l.TVs.colors.WHITE,
                                  className: A.muteIcon
                              })
                    }),
                    (0, i.jsx)(l.zxk, {
                        look: l.zxk.Looks.BLANK,
                        size: l.zxk.Sizes.NONE,
                        onClick: s,
                        className: A.dismissButton,
                        children: (0, i.jsx)(l.CTb, {
                            size: 'xs',
                            color: l.TVs.colors.WHITE,
                            className: A.dismissIcon
                        })
                    })
                ]
            })
        ]
    });
}
function L(e) {
    let { entry: t, idx: n } = e,
        s = (0, a.e7)([C.default], () => C.default.getUser(t.author_id)),
        h = (0, _.kr)(t),
        f = h ? l.TVs.colors.TEXT_POSITIVE : l.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
        [v, b] = r.useState('unsent'),
        [O, x] = r.useState(!1),
        P = (0, a.e7)([I.default], () => I.default.customInviteMessage),
        w = (0, a.e7)([E.Z], () => (null != s ? E.Z.getAnyStreamForUser(s.id) : null), [s]),
        { isMobileOnline: k, status: D } = (0, a.cj)(
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
            let e = setTimeout(() => x(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [v]);
    let R = async (e) => {
            if (null != s && 'unsent' === v) {
                e.stopPropagation();
                try {
                    var i;
                    b('sending');
                    let e = await c.Z.getOrEnsurePrivateChannel(s.id),
                        r = null !== (i = N.Z.getChannel(e)) && void 0 !== i ? i : null;
                    o()(null != r, 'Send channel must be defined'),
                        (0, S.uL)(T.Z5c.CHANNEL(r.guild_id, r.id)),
                        await (0, y.p)({
                            channel: r,
                            content: null != P ? P : M.NW.string(M.t.DwAcMz),
                            entry: t,
                            whenReady: !0
                        }),
                        d.Z.track(T.rMx.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: s.id,
                            target_content_entry_id: t.id,
                            target_index: n,
                            sent_custom_message: null != P
                        }),
                        b('sent');
                } catch (e) {
                    b('unsent');
                }
            }
        },
        L = async () => {
            var e;
            if (null == s) return;
            let t = await c.Z.getOrEnsurePrivateChannel(s.id),
                n = null !== (e = N.Z.getChannel(t)) && void 0 !== e ? e : null;
            o()(null != n, 'Send channel must be defined'), (0, S.uL)(T.Z5c.CHANNEL(n.guild_id, n.id));
        };
    return null == s
        ? null
        : (0, i.jsxs)('div', {
              className: A.userRow,
              children: [
                  (0, i.jsx)(u.Z, {
                      className: A.avatarContainer,
                      user: s,
                      isMobile: k,
                      status: D
                  }),
                  (0, i.jsxs)('div', {
                      className: A.userInfo,
                      children: [
                          (0, i.jsxs)('div', {
                              className: A.usernameWrapper,
                              children: [
                                  (0, i.jsx)(l.Text, {
                                      className: A.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: Z.ZP.getName(void 0, void 0, s)
                                  }),
                                  null != w && (0, i.jsx)(p.ZP, {})
                              ]
                          }),
                          (0, i.jsxs)(g.m7, {
                              children: [
                                  (0, i.jsx)(l.iWm, {
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
                      children: (0, i.jsx)(l.zxk, {
                          submitting: 'sending' === v,
                          onClick: O ? L : R,
                          className: A.inviteButton,
                          color: l.Ttl.PRIMARY,
                          look: 'sent' === v ? l.iLD.OUTLINED : l.iLD.FILLED,
                          size: l.PhG.MAX,
                          children:
                              'sent' === v
                                  ? O
                                      ? (0, i.jsx)(l.kBi, { size: 'sm' })
                                      : (0, i.jsx)(l.kSu, {
                                            size: 'sm',
                                            color: l.TVs.colors.WHITE
                                        })
                                  : (0, i.jsx)(l.Uuj, { size: 'sm' })
                      })
                  })
              ]
          });
}
function z(e) {
    let { onCancel: t, onSave: n } = e,
        s = (0, a.e7)([I.default], () => I.default.customInviteMessage),
        o = r.createRef(),
        [c, u] = r.useState(null != s ? s : M.NW.string(M.t.DwAcMz)),
        [h, p] = r.useState(c.length),
        f = (e) => {
            e.stopPropagation(), d.Z.setInviteMessage(c), n(e);
        };
    return (0, i.jsxs)('div', {
        className: A.editMessageContainer,
        children: [
            (0, i.jsx)(l.oil, {
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
                            a = t.value;
                        (t.value = a.substring(0, r) + ' ' + a.substring(s)), t.setSelectionRange(r + 1, r + 1), p(a.length);
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
                    (0, i.jsxs)(l.Text, {
                        className: A.charCount,
                        variant: 'text-xs/normal',
                        color: 'header-muted',
                        children: [h, '/', 99]
                    }),
                    (0, i.jsx)(l.zxk, {
                        onClick: t,
                        className: A.cancelButton,
                        look: l.zxk.Looks.BLANK,
                        size: l.zxk.Sizes.TINY,
                        children: M.NW.string(M.t['ETE/oK'])
                    }),
                    (0, i.jsx)(l.zxk, {
                        onClick: f,
                        color: l.zxk.Colors.PRIMARY,
                        look: l.zxk.Looks.FILLED,
                        size: l.zxk.Sizes.TINY,
                        children: M.NW.string(M.t.R3BPHx)
                    })
                ]
            })
        ]
    });
}
function W(e) {
    let { entries: t } = e,
        n = t.slice(0, 5),
        s = (0, a.e7)([I.default], () => I.default.customInviteMessage),
        o = M.NW.formatToPlainString(M.t['5uzKGB'], { inviteMessage: null != s ? s : M.NW.string(M.t.DwAcMz) }),
        [c, u] = r.useState(!1);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(v.iz, {}),
            (0, i.jsxs)(l.Text, {
                className: A.helpText,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: [
                    o,
                    (0, i.jsx)(l.zxk, {
                        onClick: (e) => {
                            e.stopPropagation(), u(!c), d.Z.setInstanceLocked(c);
                        },
                        className: A.editButton,
                        look: l.zxk.Looks.BLANK,
                        size: l.zxk.Sizes.NONE,
                        children: (0, i.jsx)(l.vdY, {
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
                        L,
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
function V(e, t) {
    let { trackView: n, trackClick: r } = (0, w.R)(D.n0.SendGameInvitesNotification, { notif_type: D.n0.SendGameInvitesNotification });
    return (
        o()(t.length > 0, 'Some entries must be present'),
        {
            icon: null,
            title: (t) =>
                (0, i.jsx)(R, {
                    game: e,
                    trackClick: r,
                    onDismissClick: t
                }),
            body: (0, i.jsx)(W, { entries: t }),
            onNotificationShow: () => {
                n(),
                    d.Z.track(T.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: t.map((e) => e.author_id),
                        entry_ids: t.map((e) => e.id)
                    });
            },
            onNotificationClick: (e, t) => {
                e.stopPropagation(), r('unlock'), O.default.isOverlayOOPEnabledForPid((0, P.getPID)()) ? d.Z.setInputLocked(!1, (0, P.getPID)()) : d.Z.setInstanceLocked(!1);
            },
            onDismissClick: () => {
                r('dismiss');
            }
        }
    );
}
