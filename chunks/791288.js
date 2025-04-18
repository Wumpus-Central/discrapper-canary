n.d(t, { Z: () => V }), n(388685);
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
    v = n(561308),
    _ = n(593481),
    O = n(486016),
    b = n(371651),
    x = n(624864),
    E = n(703656),
    S = n(199902),
    C = n(592125),
    N = n(158776),
    Z = n(594174),
    j = n(237997),
    I = n(5192),
    P = n(145597),
    w = n(312839),
    T = n(981631),
    k = n(701488),
    D = n(987650),
    A = n(388032),
    R = n(868724);
function L(e) {
    let { game: t, trackClick: n, onDismissClick: s } = e,
        o = (0, h.q)(t.id),
        c = (0, a.e7)([x.Z], () => !x.Z.isNotificationDisabled(O.OverlayNotificationDisabledSetting.GAME_ACTIVITY)),
        u = r.useCallback(
            (e) => {
                e.stopPropagation(), n(c ? 'muted' : 'unmuted'), d.Z.setNotificationDisabledSetting(O.OverlayNotificationDisabledSetting.GAME_ACTIVITY, !c);
            },
            [c, n]
        );
    if (null == o) return null;
    let p = o.getIconURL(k.Si.LARGE);
    return (0, i.jsxs)('div', {
        className: R.header,
        children: [
            (0, i.jsxs)('div', {
                className: R.headerLeft,
                children: [
                    (0, i.jsx)(f.f, {
                        src: p,
                        size: 16
                    }),
                    (0, i.jsx)(l.Text, {
                        className: R.gameInfo,
                        variant: 'text-sm/semibold',
                        color: 'header-primary',
                        children: o.name
                    })
                ]
            }),
            (0, i.jsxs)('div', {
                className: R.headerRight,
                children: [
                    (0, i.jsx)(l.zxk, {
                        look: l.zxk.Looks.BLANK,
                        size: l.zxk.Sizes.NONE,
                        className: R.muteButton,
                        onClick: u,
                        children: c
                            ? (0, i.jsx)(l.Dkj, {
                                  size: 'xs',
                                  color: l.TVs.colors.WHITE,
                                  className: R.muteIcon
                              })
                            : (0, i.jsx)(l.owu, {
                                  size: 'xs',
                                  color: l.TVs.colors.WHITE,
                                  className: R.muteIcon
                              })
                    }),
                    (0, i.jsx)(l.zxk, {
                        look: l.zxk.Looks.BLANK,
                        size: l.zxk.Sizes.NONE,
                        onClick: s,
                        className: R.dismissButton,
                        children: (0, i.jsx)(l.CTb, {
                            size: 'xs',
                            color: l.TVs.colors.WHITE,
                            className: R.dismissIcon
                        })
                    })
                ]
            })
        ]
    });
}
function M(e) {
    let { entry: t, idx: n } = e,
        s = (0, a.e7)([Z.default], () => Z.default.getUser(t.author_id)),
        h = (0, v.kr)(t),
        f = h ? l.TVs.colors.TEXT_POSITIVE : l.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
        [_, O] = r.useState('unsent'),
        [b, x] = r.useState(!1),
        P = (0, a.e7)([j.default], () => j.default.customInviteMessage),
        w = (0, a.e7)([S.Z], () => (null != s ? S.Z.getAnyStreamForUser(s.id) : null), [s]),
        { isMobileOnline: k, status: D } = (0, a.cj)(
            [N.Z],
            () =>
                null == s
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: N.Z.isMobileOnline(s.id),
                          status: N.Z.getStatus(s.id)
                      },
            [s]
        );
    r.useEffect(() => {
        if ('sent' === _) {
            let e = setTimeout(() => x(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [_]);
    let L = async (e) => {
            if (null != s && 'unsent' === _) {
                e.stopPropagation();
                try {
                    var i;
                    O('sending');
                    let e = await c.Z.getOrEnsurePrivateChannel(s.id),
                        r = null != (i = C.Z.getChannel(e)) ? i : null;
                    o()(null != r, 'Send channel must be defined'),
                        (0, E.uL)(T.Z5c.CHANNEL(r.guild_id, r.id)),
                        await (0, y.p)({
                            channel: r,
                            content: null != P ? P : A.NW.string(A.t.DwAcMz),
                            entry: t,
                            whenReady: !0
                        }),
                        d.Z.track(T.rMx.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: s.id,
                            target_content_entry_id: t.id,
                            target_index: n,
                            sent_custom_message: null != P
                        }),
                        O('sent');
                } catch (e) {
                    O('unsent');
                }
            }
        },
        M = async () => {
            var e;
            if (null == s) return;
            let t = await c.Z.getOrEnsurePrivateChannel(s.id),
                n = null != (e = C.Z.getChannel(t)) ? e : null;
            o()(null != n, 'Send channel must be defined'), (0, E.uL)(T.Z5c.CHANNEL(n.guild_id, n.id));
        };
    return null == s
        ? null
        : (0, i.jsxs)('div', {
              className: R.userRow,
              children: [
                  (0, i.jsx)(u.Z, {
                      className: R.avatarContainer,
                      user: s,
                      isMobile: k,
                      status: D
                  }),
                  (0, i.jsxs)('div', {
                      className: R.userInfo,
                      children: [
                          (0, i.jsxs)('div', {
                              className: R.usernameWrapper,
                              children: [
                                  (0, i.jsx)(l.Text, {
                                      className: R.username,
                                      variant: 'text-md/medium',
                                      color: 'header-primary',
                                      children: I.ZP.getName(void 0, void 0, s)
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
                      className: R.inviteButtonWrapper,
                      children: (0, i.jsx)(l.zxk, {
                          submitting: 'sending' === _,
                          onClick: b ? M : L,
                          className: R.inviteButton,
                          color: l.Ttl.PRIMARY,
                          look: 'sent' === _ ? l.iLD.OUTLINED : l.iLD.FILLED,
                          size: l.PhG.MAX,
                          children:
                              'sent' === _
                                  ? b
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
function W(e) {
    let { onCancel: t, onSave: n } = e,
        s = (0, a.e7)([j.default], () => j.default.customInviteMessage),
        o = r.createRef(),
        [c, u] = r.useState(null != s ? s : A.NW.string(A.t.DwAcMz)),
        [h, p] = r.useState(c.length),
        f = (e) => {
            e.stopPropagation(), d.Z.setInviteMessage(c), n(e);
        };
    return (0, i.jsxs)('div', {
        className: R.editMessageContainer,
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
                            r = null != (n = t.selectionStart) ? n : 0,
                            s = null != (i = t.selectionEnd) ? i : 0,
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
                className: R.editMessageButtons,
                children: [
                    (0, i.jsxs)(l.Text, {
                        className: R.charCount,
                        variant: 'text-xs/normal',
                        color: 'header-muted',
                        children: [h, '/', 99]
                    }),
                    (0, i.jsx)(l.zxk, {
                        onClick: t,
                        className: R.cancelButton,
                        look: l.zxk.Looks.BLANK,
                        size: l.zxk.Sizes.TINY,
                        children: A.NW.string(A.t['ETE/oK'])
                    }),
                    (0, i.jsx)(l.zxk, {
                        onClick: f,
                        color: l.zxk.Colors.PRIMARY,
                        look: l.zxk.Looks.FILLED,
                        size: l.zxk.Sizes.TINY,
                        children: A.NW.string(A.t.R3BPHx)
                    })
                ]
            })
        ]
    });
}
function z(e) {
    let { entries: t } = e,
        n = t.slice(0, 5),
        s = (0, a.e7)([j.default], () => j.default.customInviteMessage),
        o = A.NW.formatToPlainString(A.t['5uzKGB'], { inviteMessage: null != s ? s : A.NW.string(A.t.DwAcMz) }),
        [c, u] = r.useState(!1);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(_.iz, {}),
            (0, i.jsxs)(l.Text, {
                className: R.helpText,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: [
                    o,
                    (0, i.jsx)(l.zxk, {
                        onClick: (e) => {
                            e.stopPropagation(), u(!c), d.Z.setInstanceLocked(c);
                        },
                        className: R.editButton,
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
                (0, i.jsx)(W, {
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
function V(e, t) {
    let { trackView: n, trackClick: r } = (0, w.R)(D.n0.SendGameInvitesNotification, { notif_type: D.n0.SendGameInvitesNotification });
    return (
        o()(t.length > 0, 'Some entries must be present'),
        {
            icon: null,
            title: (t) =>
                (0, i.jsx)(L, {
                    game: e,
                    trackClick: r,
                    onDismissClick: t
                }),
            body: (0, i.jsx)(z, { entries: t }),
            onNotificationShow: () => {
                n(),
                    d.Z.track(T.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: t.map((e) => e.author_id),
                        entry_ids: t.map((e) => e.id)
                    });
            },
            onNotificationClick: (e, t) => {
                e.stopPropagation(), r('unlock'), b.default.isOverlayOOPEnabledForPid((0, P.getPID)()) ? d.Z.setInputLocked(!1, (0, P.getPID)()) : d.Z.setInstanceLocked(!1);
            },
            onDismissClick: () => {
                r('dismiss');
            }
        }
    );
}
