a.d(t, { default: () => q }), a(388685), a(539854);
var n = a(200651),
    i = a(192379),
    l = a(120356),
    r = a.n(l),
    s = a(218887),
    o = a.n(s),
    c = a(990547),
    d = a(442837),
    u = a(481060),
    m = a(493683),
    f = a(247272),
    p = a(166459),
    b = a(966390),
    g = a(476326),
    h = a(213609),
    _ = a(835473),
    y = a(43267),
    I = a(933557),
    w = a(957730),
    S = a(592125),
    E = a(703558),
    x = a(430824),
    N = a(751771),
    v = a(496675),
    C = a(699516),
    T = a(117530),
    j = a(594174),
    O = a(626135),
    Z = a(768581),
    P = a(971130),
    D = a(358085),
    A = a(624138),
    k = a(591759),
    M = a(51144),
    R = a(998502),
    U = a(317381),
    L = a(981631),
    F = a(245335),
    B = a(388032),
    z = a(239198);
async function G(e) {
    return e.type === P.bm.DM || e.type === P.bm.FRIEND ? await m.Z.ensurePrivateChannel(e.item.id) : e.item.id;
}
function q(e) {
    var t,
        a,
        { applicationId: l, mediaUrl: r, channelId: s, onClose: m, transitionState: y } = e,
        I = (function (e, t) {
            if (null == e) return {};
            var a,
                n,
                i = (function (e, t) {
                    if (null == e) return {};
                    var a,
                        n,
                        i = {},
                        l = Object.keys(e);
                    for (n = 0; n < l.length; n++) (a = l[n]), t.indexOf(a) >= 0 || (i[a] = e[a]);
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (n = 0; n < l.length; n++) (a = l[n]), !(t.indexOf(a) >= 0) && Object.prototype.propertyIsEnumerable.call(e, a) && (i[a] = e[a]);
            }
            return i;
        })(e, ['applicationId', 'mediaUrl', 'channelId', 'onClose', 'transitionState']);
    let x = (0, d.e7)([U.ZP], () => U.ZP.getSelfEmbeddedActivityForChannel(s));
    (0, h.Z)({
        type: c.ImpressionTypes.MODAL,
        name: c.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: {
            application_id: l,
            activity_session_id: null == x ? void 0 : x.compositeInstanceId
        }
    });
    let [C] = (0, _.Z)([l]),
        Z = (0, d.e7)([j.default], () => j.default.getCurrentUser()),
        [D, A] = i.useState(''),
        [M, R] = i.useState([]),
        [q, V] = i.useState(null),
        [X, Q] = i.useState(null);
    i.useEffect(() => {
        (async () => {
            let e = k.Z.toURLSafe(r);
            if (null == e) return;
            let t = o().basename(e.pathname),
                a = await fetch(r),
                n = new File([await a.arrayBuffer()], t);
            V(n);
            let i = new FileReader();
            (i.onload = () => {
                var e;
                return Q(null == i || null == (e = i.result) ? void 0 : e.toString());
            }),
                i.readAsDataURL(n);
        })();
    }, [r, V]);
    let W = (0, d.Wu)([N.Z, v.Z], () => N.Z.getInviteSuggestionRows().filter((e) => e.type === P.bm.FRIEND || e.type === P.bm.DM || v.Z.can(L.Plq.ATTACH_FILES, e.item)));
    i.useEffect(() => {
        (0, f.x)({
            omitUserIds: new Set(),
            applicationId: l,
            inviteTargetType: F.Iq.EMBEDDED_APPLICATION
        });
    }, [l]),
        i.useEffect(() => (0, f.C)(D), [D]);
    let Y = i.useCallback(async () => {
        await Promise.all(
            M.map(async (e) => {
                let t = W.find((t) => t.item.id === e);
                if (null != t) {
                    let e = await G(t);
                    p.Z.clearAll(e, E.d.ChannelMessage);
                }
            })
        );
    }, [M, W]);
    i.useEffect(() => {
        y === u.Dvm.EXITING && Y();
    }, [Y, y]);
    let J = i.useCallback(async () => {
            await Y(), m();
        }, [m, Y]),
        $ = i.useCallback(async () => {
            let e = 0,
                t = 0,
                a = 0;
            async function n(n) {
                switch (n.type) {
                    case P.bm.DM:
                    case P.bm.FRIEND:
                        e++;
                        break;
                    case P.bm.GROUP_DM:
                        t++;
                        break;
                    case P.bm.CHANNEL:
                        a++;
                }
                let i = await G(n),
                    r = T.Z.getUploads(i, E.d.ChannelMessage),
                    s = S.Z.getChannel(i);
                b.Z.uploadFiles({
                    channelId: i,
                    uploads: r,
                    parsedMessage: null != C ? w.ZP.parse(s, B.intl.formatToPlainString(B.t.jQULqK, { applicationName: '**'.concat(C.name, '**') })) : void 0,
                    draftType: E.d.ChannelMessage,
                    options: { applicationId: l }
                }),
                    p.Z.clearAll(i, E.d.ChannelMessage);
            }
            let i = N.Z.getInviteSuggestionRows()
                .filter((e) => M.includes(e.item.id))
                .map((e) => n(e));
            O.default.track(L.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == Z ? void 0 : Z.id,
                application_id: l,
                activity_session_id: null == x ? void 0 : x.compositeInstanceId,
                n_users: e,
                n_gdms: t,
                n_channels: a
            });
            try {
                await Promise.all(i), null != C && (0, u.showToast)((0, u.createToast)(B.intl.formatToPlainString(B.t.jQULqK, { applicationName: C.name }), u.ToastType.SUCCESS));
            } catch (e) {
                throw ((0, u.showToast)((0, u.createToast)(B.intl.string(B.t.PanA4O), u.ToastType.FAILURE)), e);
            }
            J();
        }, [x, C, l, M, J, Z]),
        ee = (e) => {
            let t = async () => {
                let t = await G(e),
                    a = [...M];
                if (a.includes(e.item.id)) p.Z.clearAll(t, E.d.ChannelMessage), (a = a.filter((t) => t !== e.item.id));
                else {
                    if (a.length >= 10) return;
                    null != q &&
                        (p.Z.addFile({
                            file: {
                                file: q,
                                platform: g.ow.WEB
                            },
                            channelId: t,
                            draftType: E.d.ChannelMessage
                        }),
                        a.push(e.item.id));
                }
                R(a);
            };
            return () => t();
        };
    return null == X
        ? (0, n.jsx)(u.$jN, {})
        : (0, n.jsxs)(
              u.Y0X,
              ((t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var a = null != arguments[t] ? arguments[t] : {},
                          n = Object.keys(a);
                      'function' == typeof Object.getOwnPropertySymbols &&
                          (n = n.concat(
                              Object.getOwnPropertySymbols(a).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(a, e).enumerable;
                              })
                          )),
                          n.forEach(function (t) {
                              var n;
                              (n = a[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: n,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[t] = n);
                          });
                  }
                  return e;
              })({ transitionState: y }, I)),
              (a = a =
                  {
                      className: z.modalRoot,
                      children: [
                          (0, n.jsxs)(u.xBx, {
                              className: z.header,
                              children: [
                                  (0, n.jsxs)('div', {
                                      className: z.headerTitle,
                                      children: [
                                          (0, n.jsx)(u.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: B.intl.string(B.t.r9qKo6)
                                          }),
                                          (0, n.jsx)(u.olH, { onClick: J })
                                      ]
                                  }),
                                  (0, n.jsx)('div', {
                                      children: (0, n.jsx)('img', {
                                          alt: r,
                                          className: z.img,
                                          src: X
                                      })
                                  })
                              ]
                          }),
                          (0, n.jsxs)(u.hzk, {
                              className: z.modalContent,
                              children: [
                                  (0, n.jsx)(u.Rj2, {
                                      className: z.searchBar,
                                      placeholder: B.intl.string(B.t['5h0QOD']),
                                      label: B.intl.string(B.t['5h0QOD']),
                                      searchTerm: D,
                                      onChange: (e) => A(e),
                                      onClear: () => A('')
                                  }),
                                  W.map((e, t) =>
                                      (0, n.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  0 === t ? null : (0, n.jsx)('div', { className: z.rowDivider }),
                                                  (0, n.jsx)(H, {
                                                      row: e,
                                                      onClick: ee(e),
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
                          (0, n.jsx)(u.mzw, {
                              className: z.footer,
                              children: (0, n.jsxs)('div', {
                                  className: z.copySendBar,
                                  children: [
                                      (0, n.jsx)(K, {
                                          applicationId: l,
                                          activitySessionId: null == x ? void 0 : x.compositeInstanceId,
                                          mediaUrl: r
                                      }),
                                      M.length >= 10
                                          ? (0, n.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                children: B.intl.format(B.t.mdE9iI, { maxShares: 10 })
                                            })
                                          : null,
                                      (0, n.jsx)(u.zxk, {
                                          onClick: $,
                                          disabled: M.length <= 0,
                                          children: B.intl.string(B.t.TXNS7e)
                                      })
                                  ]
                              })
                          })
                      ]
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a))
                  : (function (e, t) {
                        var a = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            a.push.apply(a, n);
                        }
                        return a;
                    })(Object(a)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e));
                    }),
              t)
          );
}
function H(e) {
    let { row: t, onClick: a, checked: i, disabled: l } = e,
        s = null,
        o = null,
        c = null;
    switch (t.type) {
        case P.bm.DM:
        case P.bm.FRIEND:
            (s = (0, n.jsx)(u.qEK, {
                size: u.EFr.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                'aria-label': t.item.username
            })),
                (o = M.ZP.getName(t.item)),
                (c = M.ZP.getUserTag(t.item));
            break;
        case P.bm.GROUP_DM: {
            let e = (0, y.x)(t.item),
                a = (0, I.F6)(t.item, j.default, C.Z);
            (s = (0, n.jsx)(u.qEK, {
                src: e,
                'aria-label': a,
                size: u.EFr.SIZE_40
            })),
                (o = (0, I.F6)(t.item, j.default, C.Z));
            break;
        }
        case P.bm.CHANNEL: {
            let e = t.item,
                a = x.Z.getGuild(e.guild_id);
            if (null == a) return null;
            if (((o = '#'.concat((0, I.F6)(e, j.default, C.Z))), (c = a.name), null != a.icon)) {
                let t = Z.ZP.getGuildIconURL({
                    id: e.guild_id,
                    icon: a.icon,
                    size: 40
                });
                s = (0, n.jsx)(u.qEK, {
                    src: t,
                    'aria-label': o,
                    size: u.EFr.SIZE_40
                });
            } else {
                let e = (0, A.Zg)(a.name);
                s = (0, n.jsx)('div', {
                    className: z.acronym,
                    'aria-hidden': !0,
                    children: (0, n.jsx)(u.Text, {
                        variant: 'text-md/semibold',
                        children: e
                    })
                });
            }
        }
    }
    return (0, n.jsxs)(u.P3F, {
        onClick: a,
        className: r()(z.rowContainer, { [z.disabled]: l }),
        children: [
            (0, n.jsxs)('div', {
                className: z.rowLeft,
                children: [
                    (0, n.jsx)('div', {
                        className: z.rowAvatar,
                        children: s
                    }),
                    (0, n.jsxs)('div', {
                        className: z.rowNameContainer,
                        children: [
                            (0, n.jsx)(u.Text, {
                                variant: 'text-md/semibold',
                                className: r()(z.rowName, { [z.disabled]: l }),
                                children: o
                            }),
                            (0, n.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                className: r()(z.rowSubName, { [z.disabled]: l }),
                                children: c
                            })
                        ]
                    })
                ]
            }),
            (0, n.jsx)(u.XZJ, {
                disabled: l,
                value: i,
                type: u.XZJ.Types.INVERTED,
                displayOnly: !0,
                className: z.rowRight
            })
        ]
    });
}
function K(e) {
    let { applicationId: t, mediaUrl: a, activitySessionId: l } = e,
        [r, s] = i.useState(!1),
        o = (0, d.e7)([j.default], () => j.default.getCurrentUser());
    async function c() {
        O.default.track(L.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
            user_id: null == o ? void 0 : o.id,
            application_id: t,
            activity_session_id: l
        }),
            await R.ZP.copyImage(a),
            s(!0);
    }
    return (i.useEffect(() => {
        let e;
        return (
            r &&
                (e = setTimeout(() => {
                    s(!1);
                }, 1000)),
            () => {
                null != e && clearTimeout(e);
            }
        );
    }, [r]),
    D.isPlatformEmbedded && R.ZP.canCopyImage(a))
        ? (0, n.jsxs)(u.zxk, {
              look: u.zxk.Looks.LINK,
              color: u.zxk.Colors.LINK,
              onClick: c,
              innerClassName: z.copyButton,
              children: [
                  r
                      ? (0, n.jsx)(u.owK, {
                            size: 'md',
                            color: 'currentColor'
                        })
                      : (0, n.jsx)(u.TIy, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                  r ? B.intl.string(B.t['t5VZ8/']) : B.intl.string(B.t.tvUqWl)
              ]
          })
        : (0, n.jsx)('div', {});
}
