n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(512722),
    a = n.n(r),
    o = n(442837),
    l = n(481060),
    d = n(493683),
    c = n(13245),
    u = n(99690),
    h = n(835473),
    p = n(194082),
    f = n(442550),
    g = n(297781),
    m = n(371991),
    v = n(656709),
    x = n(561308),
    Z = n(593481),
    S = n(371651),
    _ = n(703656),
    E = n(199902),
    C = n(592125),
    I = n(158776),
    y = n(594174),
    N = n(5192),
    b = n(145597),
    T = n(312839),
    O = n(981631),
    j = n(701488),
    M = n(987650),
    w = n(388032),
    P = n(66989);
function R(e) {
    let { game: t } = e,
        n = (0, h.q)(t.id);
    if (null == n) return null;
    let s = n.getIconURL(j.Si.LARGE);
    return (0, i.jsx)(i.Fragment, {
        children: (0, i.jsxs)('div', {
            className: P.header,
            children: [
                (0, i.jsx)(f.f, {
                    src: s,
                    size: 32
                }),
                (0, i.jsx)(l.Text, {
                    className: P.gameInfo,
                    variant: 'text-md/semibold',
                    color: 'header-primary',
                    children: n.name
                })
            ]
        })
    });
}
function k(e) {
    let { entry: t, idx: n } = e,
        r = (0, o.e7)([y.default], () => y.default.getUser(t.author_id)),
        h = (0, x.kr)(t),
        f = h ? l.tokens.colors.TEXT_POSITIVE : l.tokens.colors.CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY,
        [Z, S] = s.useState('unsent'),
        [b, T] = s.useState(!1),
        j = (0, o.e7)([E.Z], () => (null != r ? E.Z.getAnyStreamForUser(r.id) : null), [r]),
        { isMobileOnline: M, status: R } = (0, o.cj)(
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
        if ('sent' === Z) {
            let e = setTimeout(() => T(!0), 2000);
            return () => clearTimeout(e);
        }
    }, [Z]);
    let k = async (e) => {
            if (null != r && 'unsent' === Z) {
                e.stopPropagation();
                try {
                    var i;
                    S('sending');
                    let e = await d.Z.getOrEnsurePrivateChannel(r.id),
                        s = null !== (i = C.Z.getChannel(e)) && void 0 !== i ? i : null;
                    a()(null != s, 'Send channel must be defined'),
                        (0, _.uL)(O.Z5c.CHANNEL(s.guild_id, s.id)),
                        await (0, v.p)({
                            channel: s,
                            content: w.intl.string(w.t.DwAcMz),
                            entry: t,
                            whenReady: !0
                        }),
                        c.Z.track(O.rMx.OVERLAY_GAME_INVITE_SENT, {
                            target_user_id: r.id,
                            target_content_entry_id: t.id,
                            target_index: n
                        }),
                        S('sent');
                } catch (e) {
                    S('unsent');
                }
            }
        },
        A = async () => {
            var e;
            if (null == r) return;
            let t = await d.Z.getOrEnsurePrivateChannel(r.id),
                n = null !== (e = C.Z.getChannel(t)) && void 0 !== e ? e : null;
            a()(null != n, 'Send channel must be defined'), (0, _.uL)(O.Z5c.CHANNEL(n.guild_id, n.id));
        };
    return null == r
        ? null
        : (0, i.jsxs)('div', {
              className: P.userRow,
              children: [
                  (0, i.jsx)(u.Z, {
                      className: P.avatarContainer,
                      user: r,
                      isMobile: M,
                      status: R
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
                                      children: N.ZP.getName(void 0, void 0, r)
                                  }),
                                  null != j && (0, i.jsx)(p.ZP, {})
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
                          submitting: 'sending' === Z,
                          onClick: b ? A : k,
                          className: P.inviteButton,
                          color: l.ButtonColors.PRIMARY,
                          look: 'sent' === Z ? l.ButtonLooks.OUTLINED : l.ButtonLooks.FILLED,
                          size: l.ButtonSizes.MAX,
                          children:
                              'sent' === Z
                                  ? b
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
function A(e) {
    let { entries: t } = e,
        n = t.slice(0, 5);
    return (0, i.jsxs)('div', {
        children: [
            (0, i.jsx)(Z.iz, {}),
            (0, i.jsxs)(l.Text, {
                className: P.helpText,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                children: [(0, i.jsx)(l.ChatPlusIcon, { size: 'xxs' }), w.intl.string(w.t.y9eo7e)]
            }),
            n.map((e, t) =>
                (0, i.jsx)(
                    k,
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
function D(e, t) {
    let { trackView: n, trackClick: s } = (0, T.R)(M.n0.SendGameInvitesNotification, { notif_type: M.n0.SendGameInvitesNotification });
    return (
        a()(t.length > 0, 'Some entries must be present'),
        {
            icon: null,
            title: (0, i.jsx)(R, { game: e }),
            body: (0, i.jsx)(A, { entries: t }),
            onNotificationShow: () => {
                n(),
                    c.Z.track(O.rMx.OVERLAY_GAME_INVITE_NOTIFICATION_SHOWN, {
                        user_ids: t.map((e) => e.author_id),
                        entry_ids: t.map((e) => e.id)
                    });
            },
            onNotificationClick: (e, t) => {
                s('unlock'), S.Z.isOverlayOOPEnabledForPid((0, b.QF)()) ? c.Z.setInputLocked(!1, (0, b.QF)()) : c.Z.setInstanceLocked(!1);
            },
            onDismissClick: () => {
                s('dismiss');
            }
        }
    );
}
