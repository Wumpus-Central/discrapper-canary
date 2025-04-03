n.d(t, { Z: () => V }), n(47120);
var i = n(200651),
    r = n(192379),
    s = n(512722),
    o = n.n(s),
    l = n(442837),
    a = n(481060),
    c = n(493683),
    u = n(13245),
    d = n(99690),
    h = n(835473),
    p = n(194082),
    f = n(442550),
    g = n(297781),
    m = n(371991),
    y = n(656709),
    O = n(561308),
    v = n(593481),
    x = n(486016),
    b = n(371651),
    S = n(624864),
    E = n(703656),
    j = n(199902),
    N = n(592125),
    Z = n(158776),
    C = n(594174),
    I = n(237997),
    P = n(5192),
    _ = n(145597),
    w = n(312839),
    T = n(981631),
    D = n(701488),
    k = n(987650),
    M = n(388032),
    A = n(172519);
function R(e) {
    let { game: t, trackClick: n, onDismissClick: s } = e,
        o = (0, h.q)(t.id),
        c = (0, l.e7)([S.Z], () => !S.Z.isNotificationDisabled(x.OverlayNotificationDisabledSetting.GAME_ACTIVITY)),
        d = r.useCallback(
            (e) => {
                e.stopPropagation(), n(c ? 'muted' : 'unmuted'), u.Z.setNotificationDisabledSetting(x.OverlayNotificationDisabledSetting.GAME_ACTIVITY, !c);
            },
            [c, n]
        );
    if (null == o) return null;
    let p = o.getIconURL(D.Si.LARGE);
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
                        children: o.name
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
                        onClick: d,
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
                        onClick: s,
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
function L(e) {
    let { entry: t, idx: n } = e,
        s = (0, l.e7)([C.default], () => C.default.getUser(t.author_id)),
        h = (0, O.kr)(t),
        f = h ? a.TVs.colors.TEXT_POSITIVE : a.TVs.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
        [v, x] = r.useState('unsent'),
        [b, S] = r.useState(!1),
        _ = (0, l.e7)([I.default], () => I.default.customInviteMessage),
        w = (0, l.e7)([j.Z], () => (null != s ? j.Z.getAnyStreamForUser(s.id) : null), [s]),
        { isMobileOnline: D, status: k } = (0, l.cj)(
            [Z.Z],
            () =>
                null == s
                    ? {
                          isMobileOnline: void 0,
                          status: void 0
                      }
                    : {
                          isMobileOnline: Z.Z.isMobileOnline(s.id),
                          status: Z.Z.getStatus(s.id)
                      },
            [s]
        );
    r.useEffect(() => {
        if ('sent' === v) {
            let e = setTimeout(() => S(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [v]);
    let R = async (e) => {
            if (null != s && 'unsent' === v) {
                e.stopPropagation();
                try {
                    var i;
                    x('sending');
                    let e = await c.Z.getOrEnsurePrivateChannel(s.id),
                        r = null != (i = N.Z.getChannel(e)) ? i : null;
                    o()(null != r, 'Send channel must be defined'),
                        (0, E.uL)(T.Z5c.CHANNEL(r.guild_id, r.id)),
                        await (0, y.p)({
                            channel: r,
                            content: null != _ ? _ : M.NW.string(M.t.DwAcMz),
                            entry: t,
                            whenReady: !0
                        }),
                        u.Z.track(T.rMx.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: s.id,
                            target_content_entry_id: t.id,
                            target_index: n,
                            sent_custom_message: null != _
                        }),
                        x('sent');
                } catch (e) {
                    x('unsent');
                }
            }
        },
        L = async () => {
            var e;
            if (null == s) return;
            let t = await c.Z.getOrEnsurePrivateChannel(s.id),
                n = null != (e = N.Z.getChannel(t)) ? e : null;
            o()(null != n, 'Send channel must be defined'), (0, E.uL)(T.Z5c.CHANNEL(n.guild_id, n.id));
        };
    return null == s
        ? null
        : (0, i.jsxs)('div', {
              className: A.userRow,
              children: [
                  (0, i.jsx)(d.Z, {
                      className: A.avatarContainer,
                      user: s,
                      isMobile: D,
                      status: k
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
                                      children: P.ZP.getName(void 0, void 0, s)
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
                          onClick: b ? L : R,
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
        s = (0, l.e7)([I.default], () => I.default.customInviteMessage),
        o = r.createRef(),
        [c, d] = r.useState(null != s ? s : M.NW.string(M.t.DwAcMz)),
        [h, p] = r.useState(c.length),
        f = (e) => {
            e.stopPropagation(), u.Z.setInviteMessage(c), n(e);
        };
    return (0, i.jsxs)('div', {
        className: A.editMessageContainer,
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
                            r = null != (n = t.selectionStart) ? n : 0,
                            s = null != (i = t.selectionEnd) ? i : 0,
                            l = t.value;
                        (t.value = l.substring(0, r) + ' ' + l.substring(s)), t.setSelectionRange(r + 1, r + 1), p(l.length);
                    }
                    'Enter' === e.key && f(e), 'Escape' === e.key && (e.preventDefault(), t(e));
                },
                onKeyUp: (e) => e.stopPropagation(),
                maxLength: 99,
                onChange: (e) => {
                    d(e), p(e.length);
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
                        children: M.NW.string(M.t['ETE/oK'])
                    }),
                    (0, i.jsx)(a.zxk, {
                        onClick: f,
                        color: a.zxk.Colors.PRIMARY,
                        look: a.zxk.Looks.FILLED,
                        size: a.zxk.Sizes.TINY,
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
        s = (0, l.e7)([I.default], () => I.default.customInviteMessage),
        o = M.NW.formatToPlainString(M.t['5uzKGB'], { inviteMessage: null != s ? s : M.NW.string(M.t.DwAcMz) }),
        [c, d] = r.useState(!1);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(v.iz, {}),
            (0, i.jsxs)(a.Text, {
                className: A.helpText,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: [
                    o,
                    (0, i.jsx)(a.zxk, {
                        onClick: (e) => {
                            e.stopPropagation(), d(!c), u.Z.setInstanceLocked(c);
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
                        e.stopPropagation(), d(!1);
                    },
                    onCancel: (e) => {
                        e.stopPropagation(), d(!1), u.Z.setInstanceLocked(!0);
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
    let { trackView: n, trackClick: r } = (0, w.R)(k.n0.SendGameInvitesNotification, { notif_type: k.n0.SendGameInvitesNotification });
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
                    u.Z.track(T.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: t.map((e) => e.author_id),
                        entry_ids: t.map((e) => e.id)
                    });
            },
            onNotificationClick: (e, t) => {
                e.stopPropagation(), r('unlock'), b.default.isOverlayOOPEnabledForPid((0, _.getPID)()) ? u.Z.setInputLocked(!1, (0, _.getPID)()) : u.Z.setInstanceLocked(!1);
            },
            onDismissClick: () => {
                r('dismiss');
            }
        }
    );
}
