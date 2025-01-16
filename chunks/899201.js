a.r(t),
    a.d(t, {
        default: function () {
            return H;
        }
    }),
    a(47120),
    a(653041);
var i = a(200651),
    n = a(192379),
    l = a(120356),
    s = a.n(l),
    r = a(218887),
    o = a.n(r),
    c = a(990547),
    d = a(442837),
    u = a(481060),
    m = a(493683),
    h = a(247272),
    f = a(166459),
    g = a(966390),
    p = a(476326),
    I = a(213609),
    S = a(835473),
    b = a(43267),
    C = a(933557),
    _ = a(957730),
    N = a(592125),
    w = a(703558),
    T = a(430824),
    x = a(751771),
    v = a(496675),
    E = a(699516),
    y = a(117530),
    Z = a(594174),
    A = a(626135),
    j = a(768581),
    M = a(971130),
    D = a(358085),
    R = a(624138),
    P = a(591759),
    U = a(51144),
    k = a(998502),
    L = a(317381),
    O = a(981631),
    B = a(245335),
    F = a(388032),
    G = a(613897);
async function z(e) {
    return e.type === M.bm.DM || e.type === M.bm.FRIEND ? await m.Z.ensurePrivateChannel(e.item.id) : e.item.id;
}
function H(e) {
    let { applicationId: t, mediaUrl: a, channelId: l, onClose: s, transitionState: r, ...m } = e,
        b = (0, d.e7)([L.ZP], () => L.ZP.getSelfEmbeddedActivityForChannel(l));
    (0, I.Z)({
        type: c.ImpressionTypes.MODAL,
        name: c.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: {
            application_id: t,
            activity_session_id: null == b ? void 0 : b.compositeInstanceId
        }
    });
    let [C] = (0, S.Z)([t]),
        T = (0, d.e7)([Z.default], () => Z.default.getCurrentUser()),
        [E, j] = n.useState(''),
        [D, R] = n.useState([]),
        [U, k] = n.useState(null),
        [H, K] = n.useState(null);
    n.useEffect(() => {
        (async () => {
            let e = P.Z.toURLSafe(a);
            if (null == e) return;
            let t = o().basename(e.pathname),
                i = await fetch(a),
                n = new File([await i.arrayBuffer()], t);
            k(n);
            let l = new FileReader();
            (l.onload = () => {
                var e;
                return K(null == l ? void 0 : null === (e = l.result) || void 0 === e ? void 0 : e.toString());
            }),
                l.readAsDataURL(n);
        })();
    }, [a, k]);
    let Q = (0, d.Wu)([x.Z, v.Z], () => x.Z.getInviteSuggestionRows().filter((e) => e.type === M.bm.FRIEND || e.type === M.bm.DM || v.Z.can(O.Plq.ATTACH_FILES, e.item)));
    n.useEffect(() => {
        (0, h.x)({
            omitUserIds: new Set(),
            applicationId: t,
            inviteTargetType: B.Iq.EMBEDDED_APPLICATION
        });
    }, [t]),
        n.useEffect(() => (0, h.C)(E), [E]);
    let W = n.useCallback(async () => {
        await Promise.all(
            D.map(async (e) => {
                let t = Q.find((t) => t.item.id === e);
                if (null != t) {
                    let e = await z(t);
                    f.Z.clearAll(e, w.d.ChannelMessage);
                }
            })
        );
    }, [D, Q]);
    n.useEffect(() => {
        r === u.ModalTransitionState.EXITING && W();
    }, [W, r]);
    let Y = n.useCallback(async () => {
            await W(), s();
        }, [s, W]),
        X = n.useCallback(async () => {
            let e = 0,
                a = 0,
                i = 0;
            async function n(n) {
                switch (n.type) {
                    case M.bm.DM:
                    case M.bm.FRIEND:
                        e++;
                        break;
                    case M.bm.GROUP_DM:
                        a++;
                        break;
                    case M.bm.CHANNEL:
                        i++;
                }
                let l = await z(n),
                    s = y.Z.getUploads(l, w.d.ChannelMessage),
                    r = N.Z.getChannel(l);
                g.Z.uploadFiles({
                    channelId: l,
                    uploads: s,
                    parsedMessage: null != C ? _.ZP.parse(r, F.intl.formatToPlainString(F.t.jQULqK, { applicationName: '**'.concat(C.name, '**') })) : void 0,
                    draftType: w.d.ChannelMessage,
                    options: { applicationId: t }
                }),
                    f.Z.clearAll(l, w.d.ChannelMessage);
            }
            let l = x.Z.getInviteSuggestionRows()
                .filter((e) => D.includes(e.item.id))
                .map((e) => n(e));
            A.default.track(O.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == T ? void 0 : T.id,
                application_id: t,
                activity_session_id: null == b ? void 0 : b.compositeInstanceId,
                n_users: e,
                n_gdms: a,
                n_channels: i
            });
            try {
                await Promise.all(l), null != C && (0, u.showToast)((0, u.createToast)(F.intl.formatToPlainString(F.t.jQULqK, { applicationName: C.name }), u.ToastType.SUCCESS));
            } catch (e) {
                throw ((0, u.showToast)((0, u.createToast)(F.intl.string(F.t.PanA4O), u.ToastType.FAILURE)), e);
            }
            Y();
        }, [b, C, t, D, Y, T]),
        J = (e) => {
            let t = async () => {
                let t = await z(e),
                    a = [...D];
                if (a.includes(e.item.id)) f.Z.clearAll(t, w.d.ChannelMessage), (a = a.filter((t) => t !== e.item.id));
                else {
                    if (a.length >= 10) return;
                    null != U &&
                        (f.Z.addFile({
                            file: {
                                file: U,
                                platform: p.ow.WEB
                            },
                            channelId: t,
                            draftType: w.d.ChannelMessage
                        }),
                        a.push(e.item.id));
                }
                R(a);
            };
            return () => t();
        };
    return null == H
        ? (0, i.jsx)(u.Spinner, {})
        : (0, i.jsxs)(u.ModalRoot, {
              transitionState: r,
              ...m,
              className: G.modalRoot,
              children: [
                  (0, i.jsxs)(u.ModalHeader, {
                      className: G.header,
                      children: [
                          (0, i.jsxs)('div', {
                              className: G.headerTitle,
                              children: [
                                  (0, i.jsx)(u.Heading, {
                                      variant: 'heading-md/semibold',
                                      children: F.intl.string(F.t.r9qKo6)
                                  }),
                                  (0, i.jsx)(u.ModalCloseButton, { onClick: Y })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              children: (0, i.jsx)('img', {
                                  alt: a,
                                  className: G.img,
                                  src: H
                              })
                          })
                      ]
                  }),
                  (0, i.jsxs)(u.ModalContent, {
                      className: G.modalContent,
                      children: [
                          (0, i.jsx)(u.SearchBox, {
                              className: G.searchBar,
                              placeholder: F.intl.string(F.t['5h0QOD']),
                              label: F.intl.string(F.t['5h0QOD']),
                              searchTerm: E,
                              onChange: (e) => j(e),
                              onClear: () => j('')
                          }),
                          Q.map((e, t) =>
                              (0, i.jsxs)(
                                  n.Fragment,
                                  {
                                      children: [
                                          0 === t ? null : (0, i.jsx)('div', { className: G.rowDivider }),
                                          (0, i.jsx)(q, {
                                              row: e,
                                              onClick: J(e),
                                              checked: D.includes(e.item.id),
                                              disabled: !D.includes(e.item.id) && D.length >= 10
                                          })
                                      ]
                                  },
                                  e.item.id
                              )
                          )
                      ]
                  }),
                  (0, i.jsx)(u.ModalFooter, {
                      className: G.footer,
                      children: (0, i.jsxs)('div', {
                          className: G.copySendBar,
                          children: [
                              (0, i.jsx)(V, {
                                  applicationId: t,
                                  activitySessionId: null == b ? void 0 : b.compositeInstanceId,
                                  mediaUrl: a
                              }),
                              D.length >= 10
                                  ? (0, i.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        children: F.intl.format(F.t.mdE9iI, { maxShares: 10 })
                                    })
                                  : null,
                              (0, i.jsx)(u.Button, {
                                  onClick: X,
                                  disabled: D.length <= 0,
                                  children: F.intl.string(F.t.TXNS7e)
                              })
                          ]
                      })
                  })
              ]
          });
}
function q(e) {
    let { row: t, onClick: a, checked: n, disabled: l } = e,
        r = null,
        o = null,
        c = null;
    switch (t.type) {
        case M.bm.DM:
        case M.bm.FRIEND:
            (r = (0, i.jsx)(u.Avatar, {
                size: u.AvatarSizes.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                'aria-label': t.item.username
            })),
                (o = U.ZP.getName(t.item)),
                (c = U.ZP.getUserTag(t.item));
            break;
        case M.bm.GROUP_DM: {
            let e = (0, b.x)(t.item),
                a = (0, C.F6)(t.item, Z.default, E.Z);
            (r = (0, i.jsx)(u.Avatar, {
                src: e,
                'aria-label': a,
                size: u.AvatarSizes.SIZE_40
            })),
                (o = (0, C.F6)(t.item, Z.default, E.Z));
            break;
        }
        case M.bm.CHANNEL: {
            let e = t.item,
                a = T.Z.getGuild(e.guild_id);
            if (null == a) return null;
            if (((o = '#'.concat((0, C.F6)(e, Z.default, E.Z))), (c = a.name), null != a.icon)) {
                let t = j.ZP.getGuildIconURL({
                    id: e.guild_id,
                    icon: a.icon,
                    size: 40
                });
                r = (0, i.jsx)(u.Avatar, {
                    src: t,
                    'aria-label': o,
                    size: u.AvatarSizes.SIZE_40
                });
            } else {
                let e = (0, R.Zg)(a.name);
                r = (0, i.jsx)('div', {
                    className: G.acronym,
                    'aria-hidden': !0,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-md/semibold',
                        children: e
                    })
                });
            }
        }
    }
    return (0, i.jsxs)(u.Clickable, {
        onClick: a,
        className: s()(G.rowContainer, { [G.disabled]: l }),
        children: [
            (0, i.jsxs)('div', {
                className: G.rowLeft,
                children: [
                    (0, i.jsx)('div', {
                        className: G.rowAvatar,
                        children: r
                    }),
                    (0, i.jsxs)('div', {
                        className: G.rowNameContainer,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-md/semibold',
                                className: s()(G.rowName, { [G.disabled]: l }),
                                children: o
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                className: s()(G.rowSubName, { [G.disabled]: l }),
                                children: c
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(u.Checkbox, {
                disabled: l,
                value: n,
                type: u.Checkbox.Types.INVERTED,
                displayOnly: !0,
                className: G.rowRight
            })
        ]
    });
}
function V(e) {
    let { applicationId: t, mediaUrl: a, activitySessionId: l } = e,
        [s, r] = n.useState(!1),
        o = (0, d.e7)([Z.default], () => Z.default.getCurrentUser());
    async function c() {
        A.default.track(O.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
            user_id: null == o ? void 0 : o.id,
            application_id: t,
            activity_session_id: l
        }),
            await k.ZP.copyImage(a),
            r(!0);
    }
    return (n.useEffect(() => {
        let e;
        return (
            s &&
                (e = setTimeout(() => {
                    r(!1);
                }, 1000)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [s]),
    D.isPlatformEmbedded && k.ZP.canCopyImage(a))
        ? (0, i.jsxs)(u.Button, {
              look: u.Button.Looks.LINK,
              color: u.Button.Colors.LINK,
              onClick: c,
              innerClassName: G.copyButton,
              children: [
                  s
                      ? (0, i.jsx)(u.CircleCheckIcon, {
                            size: 'md',
                            color: 'currentColor'
                        })
                      : (0, i.jsx)(u.CopyIcon, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                  s ? F.intl.string(F.t['t5VZ8/']) : F.intl.string(F.t.tvUqWl)
              ]
          })
        : (0, i.jsx)('div', {});
}
