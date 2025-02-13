a.d(t, { default: () => q }), a(47120), a(653041);
var i = a(200651),
    n = a(192379),
    l = a(120356),
    s = a.n(l),
    r = a(218887),
    o = a.n(r),
    d = a(990547),
    c = a(442837),
    u = a(481060),
    m = a(493683),
    _ = a(247272),
    h = a(166459),
    f = a(966390),
    g = a(476326),
    p = a(213609),
    I = a(835473),
    S = a(43267),
    b = a(933557),
    w = a(957730),
    N = a(592125),
    E = a(703558),
    x = a(430824),
    C = a(751771),
    T = a(496675),
    y = a(699516),
    v = a(117530),
    Z = a(594174),
    j = a(626135),
    A = a(768581),
    D = a(971130),
    M = a(358085),
    P = a(624138),
    R = a(591759),
    k = a(51144),
    U = a(998502),
    L = a(317381),
    O = a(981631),
    F = a(245335),
    B = a(388032),
    z = a(738418);
async function G(e) {
    return e.type === D.bm.DM || e.type === D.bm.FRIEND ? await m.Z.ensurePrivateChannel(e.item.id) : e.item.id;
}
function q(e) {
    let { applicationId: t, mediaUrl: a, channelId: l, onClose: s, transitionState: r, ...m } = e,
        S = (0, c.e7)([L.ZP], () => L.ZP.getSelfEmbeddedActivityForChannel(l));
    (0, p.Z)({
        type: d.ImpressionTypes.MODAL,
        name: d.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: {
            application_id: t,
            activity_session_id: null == S ? void 0 : S.compositeInstanceId
        }
    });
    let [b] = (0, I.Z)([t]),
        x = (0, c.e7)([Z.default], () => Z.default.getCurrentUser()),
        [y, A] = n.useState(''),
        [M, P] = n.useState([]),
        [k, U] = n.useState(null),
        [q, V] = n.useState(null);
    n.useEffect(() => {
        (async () => {
            let e = R.Z.toURLSafe(a);
            if (null == e) return;
            let t = o().basename(e.pathname),
                i = await fetch(a),
                n = new File([await i.arrayBuffer()], t);
            U(n);
            let l = new FileReader();
            (l.onload = () => {
                var e;
                return V(null == l ? void 0 : null === (e = l.result) || void 0 === e ? void 0 : e.toString());
            }),
                l.readAsDataURL(n);
        })();
    }, [a, U]);
    let X = (0, c.Wu)([C.Z, T.Z], () => C.Z.getInviteSuggestionRows().filter((e) => e.type === D.bm.FRIEND || e.type === D.bm.DM || T.Z.can(O.Plq.ATTACH_FILES, e.item)));
    n.useEffect(() => {
        (0, _.x)({
            omitUserIds: new Set(),
            applicationId: t,
            inviteTargetType: F.Iq.EMBEDDED_APPLICATION
        });
    }, [t]),
        n.useEffect(() => (0, _.C)(y), [y]);
    let Q = n.useCallback(async () => {
        await Promise.all(
            M.map(async (e) => {
                let t = X.find((t) => t.item.id === e);
                if (null != t) {
                    let e = await G(t);
                    h.Z.clearAll(e, E.d.ChannelMessage);
                }
            })
        );
    }, [M, X]);
    n.useEffect(() => {
        r === u.Dvm.EXITING && Q();
    }, [Q, r]);
    let W = n.useCallback(async () => {
            await Q(), s();
        }, [s, Q]),
        Y = n.useCallback(async () => {
            let e = 0,
                a = 0,
                i = 0;
            async function n(n) {
                switch (n.type) {
                    case D.bm.DM:
                    case D.bm.FRIEND:
                        e++;
                        break;
                    case D.bm.GROUP_DM:
                        a++;
                        break;
                    case D.bm.CHANNEL:
                        i++;
                }
                let l = await G(n),
                    s = v.Z.getUploads(l, E.d.ChannelMessage),
                    r = N.Z.getChannel(l);
                f.Z.uploadFiles({
                    channelId: l,
                    uploads: s,
                    parsedMessage: null != b ? w.ZP.parse(r, B.intl.formatToPlainString(B.t.jQULqK, { applicationName: '**'.concat(b.name, '**') })) : void 0,
                    draftType: E.d.ChannelMessage,
                    options: { applicationId: t }
                }),
                    h.Z.clearAll(l, E.d.ChannelMessage);
            }
            let l = C.Z.getInviteSuggestionRows()
                .filter((e) => M.includes(e.item.id))
                .map((e) => n(e));
            j.default.track(O.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == x ? void 0 : x.id,
                application_id: t,
                activity_session_id: null == S ? void 0 : S.compositeInstanceId,
                n_users: e,
                n_gdms: a,
                n_channels: i
            });
            try {
                await Promise.all(l), null != b && (0, u.showToast)((0, u.createToast)(B.intl.formatToPlainString(B.t.jQULqK, { applicationName: b.name }), u.ToastType.SUCCESS));
            } catch (e) {
                throw ((0, u.showToast)((0, u.createToast)(B.intl.string(B.t.PanA4O), u.ToastType.FAILURE)), e);
            }
            W();
        }, [S, b, t, M, W, x]),
        J = (e) => {
            let t = async () => {
                let t = await G(e),
                    a = [...M];
                if (a.includes(e.item.id)) h.Z.clearAll(t, E.d.ChannelMessage), (a = a.filter((t) => t !== e.item.id));
                else {
                    if (a.length >= 10) return;
                    null != k &&
                        (h.Z.addFile({
                            file: {
                                file: k,
                                platform: g.ow.WEB
                            },
                            channelId: t,
                            draftType: E.d.ChannelMessage
                        }),
                        a.push(e.item.id));
                }
                P(a);
            };
            return () => t();
        };
    return null == q
        ? (0, i.jsx)(u.$jN, {})
        : (0, i.jsxs)(u.Y0X, {
              transitionState: r,
              ...m,
              className: z.modalRoot,
              children: [
                  (0, i.jsxs)(u.xBx, {
                      className: z.header,
                      children: [
                          (0, i.jsxs)('div', {
                              className: z.headerTitle,
                              children: [
                                  (0, i.jsx)(u.X6q, {
                                      variant: 'heading-md/semibold',
                                      children: B.intl.string(B.t.r9qKo6)
                                  }),
                                  (0, i.jsx)(u.olH, { onClick: W })
                              ]
                          }),
                          (0, i.jsx)('div', {
                              children: (0, i.jsx)('img', {
                                  alt: a,
                                  className: z.img,
                                  src: q
                              })
                          })
                      ]
                  }),
                  (0, i.jsxs)(u.hzk, {
                      className: z.modalContent,
                      children: [
                          (0, i.jsx)(u.Rj2, {
                              className: z.searchBar,
                              placeholder: B.intl.string(B.t['5h0QOD']),
                              label: B.intl.string(B.t['5h0QOD']),
                              searchTerm: y,
                              onChange: (e) => A(e),
                              onClear: () => A('')
                          }),
                          X.map((e, t) =>
                              (0, i.jsxs)(
                                  n.Fragment,
                                  {
                                      children: [
                                          0 === t ? null : (0, i.jsx)('div', { className: z.rowDivider }),
                                          (0, i.jsx)(H, {
                                              row: e,
                                              onClick: J(e),
                                              checked: M.includes(e.item.id),
                                              disabled: !M.includes(e.item.id) && M.length >= 10
                                          })
                                      ]
                                  },
                                  e.item.id
                              )
                          )
                      ]
                  }),
                  (0, i.jsx)(u.mzw, {
                      className: z.footer,
                      children: (0, i.jsxs)('div', {
                          className: z.copySendBar,
                          children: [
                              (0, i.jsx)(K, {
                                  applicationId: t,
                                  activitySessionId: null == S ? void 0 : S.compositeInstanceId,
                                  mediaUrl: a
                              }),
                              M.length >= 10
                                  ? (0, i.jsx)(u.Text, {
                                        variant: 'text-xs/normal',
                                        children: B.intl.format(B.t.mdE9iI, { maxShares: 10 })
                                    })
                                  : null,
                              (0, i.jsx)(u.zxk, {
                                  onClick: Y,
                                  disabled: M.length <= 0,
                                  children: B.intl.string(B.t.TXNS7e)
                              })
                          ]
                      })
                  })
              ]
          });
}
function H(e) {
    let { row: t, onClick: a, checked: n, disabled: l } = e,
        r = null,
        o = null,
        d = null;
    switch (t.type) {
        case D.bm.DM:
        case D.bm.FRIEND:
            (r = (0, i.jsx)(u.qEK, {
                size: u.EFr.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                'aria-label': t.item.username
            })),
                (o = k.ZP.getName(t.item)),
                (d = k.ZP.getUserTag(t.item));
            break;
        case D.bm.GROUP_DM: {
            let e = (0, S.x)(t.item),
                a = (0, b.F6)(t.item, Z.default, y.Z);
            (r = (0, i.jsx)(u.qEK, {
                src: e,
                'aria-label': a,
                size: u.EFr.SIZE_40
            })),
                (o = (0, b.F6)(t.item, Z.default, y.Z));
            break;
        }
        case D.bm.CHANNEL: {
            let e = t.item,
                a = x.Z.getGuild(e.guild_id);
            if (null == a) return null;
            if (((o = '#'.concat((0, b.F6)(e, Z.default, y.Z))), (d = a.name), null != a.icon)) {
                let t = A.ZP.getGuildIconURL({
                    id: e.guild_id,
                    icon: a.icon,
                    size: 40
                });
                r = (0, i.jsx)(u.qEK, {
                    src: t,
                    'aria-label': o,
                    size: u.EFr.SIZE_40
                });
            } else {
                let e = (0, P.Zg)(a.name);
                r = (0, i.jsx)('div', {
                    className: z.acronym,
                    'aria-hidden': !0,
                    children: (0, i.jsx)(u.Text, {
                        variant: 'text-md/semibold',
                        children: e
                    })
                });
            }
        }
    }
    return (0, i.jsxs)(u.P3F, {
        onClick: a,
        className: s()(z.rowContainer, { [z.disabled]: l }),
        children: [
            (0, i.jsxs)('div', {
                className: z.rowLeft,
                children: [
                    (0, i.jsx)('div', {
                        className: z.rowAvatar,
                        children: r
                    }),
                    (0, i.jsxs)('div', {
                        className: z.rowNameContainer,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: 'text-md/semibold',
                                className: s()(z.rowName, { [z.disabled]: l }),
                                children: o
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                className: s()(z.rowSubName, { [z.disabled]: l }),
                                children: d
                            })
                        ]
                    })
                ]
            }),
            (0, i.jsx)(u.XZJ, {
                disabled: l,
                value: n,
                type: u.XZJ.Types.INVERTED,
                displayOnly: !0,
                className: z.rowRight
            })
        ]
    });
}
function K(e) {
    let { applicationId: t, mediaUrl: a, activitySessionId: l } = e,
        [s, r] = n.useState(!1),
        o = (0, c.e7)([Z.default], () => Z.default.getCurrentUser());
    async function d() {
        j.default.track(O.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
            user_id: null == o ? void 0 : o.id,
            application_id: t,
            activity_session_id: l
        }),
            await U.ZP.copyImage(a),
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
    M.isPlatformEmbedded && U.ZP.canCopyImage(a))
        ? (0, i.jsxs)(u.zxk, {
              look: u.zxk.Looks.LINK,
              color: u.zxk.Colors.LINK,
              onClick: d,
              innerClassName: z.copyButton,
              children: [
                  s
                      ? (0, i.jsx)(u.owK, {
                            size: 'md',
                            color: 'currentColor'
                        })
                      : (0, i.jsx)(u.TIy, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                  s ? B.intl.string(B.t['t5VZ8/']) : B.intl.string(B.t.tvUqWl)
              ]
          })
        : (0, i.jsx)('div', {});
}
