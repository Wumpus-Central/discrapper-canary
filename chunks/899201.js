(n.d(t, { default: () => q }), n(388685), n(539854));
var a = n(255367),
    i = n(73800),
    l = n(120356),
    r = n.n(l),
    s = n(218887),
    o = n.n(s),
    c = n(990547),
    d = n(442837),
    u = n(481060),
    m = n(493683),
    p = n(247272),
    f = n(904245),
    g = n(166459),
    h = n(476326),
    b = n(213609),
    _ = n(835473),
    y = n(43267),
    I = n(933557),
    S = n(58873),
    w = n(957730),
    E = n(592125),
    v = n(703558),
    N = n(430824),
    x = n(751771),
    C = n(496675),
    j = n(699516),
    T = n(117530),
    O = n(594174),
    Z = n(626135),
    D = n(768581),
    A = n(971130),
    P = n(624138),
    k = n(591759),
    M = n(51144),
    U = n(998502),
    R = n(317381),
    L = n(981631),
    F = n(245335),
    G = n(388032),
    B = n(239198);
async function z(e) {
    return e.type === A.bm.DM || e.type === A.bm.FRIEND ? await m.Z.ensurePrivateChannel(e.item.id) : e.item.id;
}
function q(e) {
    var t,
        n,
        { applicationId: l, mediaUrl: r, channelId: s, onClose: m, transitionState: y } = e,
        I = (function (e, t) {
            if (null == e) return {};
            var n,
                a,
                i = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        a,
                        i = {},
                        l = Object.keys(e);
                    for (a = 0; a < l.length; a++) ((n = l[a]), t.indexOf(n) >= 0 || (i[n] = e[n]));
                    return i;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (a = 0; a < l.length; a++) ((n = l[a]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
            }
            return i;
        })(e, ['applicationId', 'mediaUrl', 'channelId', 'onClose', 'transitionState']);
    let N = (0, d.e7)([R.ZP], () => R.ZP.getSelfEmbeddedActivityForChannel(s));
    (0, b.Z)({
        type: c.ImpressionTypes.MODAL,
        name: c.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: {
            application_id: l,
            activity_session_id: null == N ? void 0 : N.compositeInstanceId
        }
    });
    let [j] = (0, _.Z)([l]),
        D = (0, d.e7)([O.default], () => O.default.getCurrentUser()),
        [P, M] = i.useState(''),
        [U, q] = i.useState([]),
        [V, X] = i.useState(null),
        [Q, Y] = i.useState(null);
    i.useEffect(() => {
        (async () => {
            let e = k.Z.toURLSafe(r);
            if (null == e) return;
            let t = o().basename(e.pathname),
                n = await fetch(r),
                a = new File([await n.arrayBuffer()], t);
            X(a);
            let i = new FileReader();
            ((i.onload = () => {
                var e;
                return Y(null == i || null == (e = i.result) ? void 0 : e.toString());
            }),
                i.readAsDataURL(a));
        })();
    }, [r, X]);
    let W = (0, d.Wu)([x.Z, C.Z], () => x.Z.getInviteSuggestionRows().filter((e) => e.type === A.bm.FRIEND || e.type === A.bm.DM || C.Z.can(L.Plq.ATTACH_FILES, e.item)));
    (i.useEffect(() => {
        (0, p.x)({
            omitUserIds: new Set(),
            applicationId: l,
            inviteTargetType: F.Iq.EMBEDDED_APPLICATION
        });
    }, [l]),
        i.useEffect(() => (0, p.C)(P), [P]));
    let J = i.useCallback(async () => {
        await Promise.all(
            U.map(async (e) => {
                let t = W.find((t) => t.item.id === e);
                if (null != t) {
                    let e = await z(t);
                    g.Z.clearAll(e, v.d.ChannelMessage);
                }
            })
        );
    }, [U, W]);
    i.useEffect(() => {
        y === u.Dvm.EXITING && J();
    }, [J, y]);
    let $ = i.useCallback(async () => {
            (await J(), m());
        }, [m, J]),
        ee = i.useCallback(async () => {
            let e = 0,
                t = 0,
                n = 0;
            async function a(a) {
                switch (a.type) {
                    case A.bm.DM:
                    case A.bm.FRIEND:
                        e++;
                        break;
                    case A.bm.GROUP_DM:
                        t++;
                        break;
                    case A.bm.CHANNEL:
                        n++;
                }
                let i = await z(a),
                    r = T.Z.getUploads(i, v.d.ChannelMessage),
                    s = E.Z.getChannel(i);
                (f.Z.sendMessage(
                    i,
                    null != j
                        ? w.ZP.parse(s, G.intl.formatToPlainString(G.t.jQULqK, { applicationName: '**'.concat(j.name, '**') }))
                        : {
                              content: '',
                              tts: !1,
                              invalidEmojis: [],
                              validNonShortcutEmojis: []
                          },
                    void 0,
                    {
                        eagerDispatch: !1,
                        applicationId: l,
                        attachmentsToUpload: r,
                        onAttachmentUploadError: (e, t, n) => {
                            var a;
                            (0, S.A)({
                                file: e,
                                guildId: null != (a = null == s ? void 0 : s.getGuildId()) ? a : null,
                                analyticsLocations: [],
                                code: t,
                                reason: n
                            });
                        }
                    }
                ),
                    g.Z.clearAll(i, v.d.ChannelMessage));
            }
            let i = x.Z.getInviteSuggestionRows()
                .filter((e) => U.includes(e.item.id))
                .map((e) => a(e));
            Z.default.track(L.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == D ? void 0 : D.id,
                application_id: l,
                activity_session_id: null == N ? void 0 : N.compositeInstanceId,
                n_users: e,
                n_gdms: t,
                n_channels: n
            });
            try {
                (await Promise.all(i), null != j && (0, u.showToast)((0, u.createToast)(G.intl.formatToPlainString(G.t.jQULqK, { applicationName: j.name }), u.ToastType.SUCCESS)));
            } catch (e) {
                throw ((0, u.showToast)((0, u.createToast)(G.intl.string(G.t.PanA4O), u.ToastType.FAILURE)), e);
            }
            $();
        }, [N, j, l, U, $, D]),
        et = (e) => {
            let t = async () => {
                let t = await z(e),
                    n = [...U];
                if (n.includes(e.item.id)) (g.Z.clearAll(t, v.d.ChannelMessage), (n = n.filter((t) => t !== e.item.id)));
                else {
                    if (n.length >= 10) return;
                    null != V &&
                        (g.Z.addFile({
                            file: {
                                file: V,
                                platform: h.ow.WEB
                            },
                            channelId: t,
                            draftType: v.d.ChannelMessage
                        }),
                        n.push(e.item.id));
                }
                q(n);
            };
            return () => t();
        };
    return null == Q
        ? (0, a.jsx)(u.$jN, {})
        : (0, a.jsxs)(
              u.Y0X,
              ((t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          a = Object.keys(n);
                      ('function' == typeof Object.getOwnPropertySymbols &&
                          (a = a.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              })
                          )),
                          a.forEach(function (t) {
                              var a;
                              ((a = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: a,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        })
                                      : (e[t] = a));
                          }));
                  }
                  return e;
              })({ transitionState: y }, I)),
              (n = n =
                  {
                      className: B.modalRoot,
                      parentComponent: 'ActivityShareMomentModal',
                      children: [
                          (0, a.jsxs)(u.xBx, {
                              className: B.header,
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: B.headerTitle,
                                      children: [
                                          (0, a.jsx)(u.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: G.intl.string(G.t.r9qKo6)
                                          }),
                                          (0, a.jsx)(u.olH, { onClick: $ })
                                      ]
                                  }),
                                  (0, a.jsx)('div', {
                                      children: (0, a.jsx)('img', {
                                          alt: r,
                                          className: B.img,
                                          src: Q
                                      })
                                  })
                              ]
                          }),
                          (0, a.jsxs)(u.hzk, {
                              className: B.modalContent,
                              children: [
                                  (0, a.jsx)(u.Rj2, {
                                      className: B.searchBar,
                                      placeholder: G.intl.string(G.t['5h0QOD']),
                                      label: G.intl.string(G.t['5h0QOD']),
                                      searchTerm: P,
                                      onChange: (e) => M(e),
                                      onClear: () => M('')
                                  }),
                                  W.map((e, t) =>
                                      (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  0 === t ? null : (0, a.jsx)('div', { className: B.rowDivider }),
                                                  (0, a.jsx)(H, {
                                                      row: e,
                                                      onClick: et(e),
                                                      checked: U.includes(e.item.id),
                                                      disabled: !U.includes(e.item.id) && U.length >= 10
                                                  })
                                              ]
                                          },
                                          e.item.id
                                      )
                                  )
                              ]
                          }),
                          (0, a.jsx)(u.mzw, {
                              className: B.footer,
                              children: (0, a.jsxs)('div', {
                                  className: B.copySendBar,
                                  children: [
                                      (0, a.jsx)(K, {
                                          applicationId: l,
                                          activitySessionId: null == N ? void 0 : N.compositeInstanceId,
                                          mediaUrl: r
                                      }),
                                      U.length >= 10
                                          ? (0, a.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                children: G.intl.format(G.t.mdE9iI, { maxShares: 10 })
                                            })
                                          : null,
                                      (0, a.jsx)(u.zxk, {
                                          onClick: ee,
                                          disabled: U.length <= 0,
                                          children: G.intl.string(G.t.TXNS7e)
                                      })
                                  ]
                              })
                          })
                      ]
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, a);
                        }
                        return n;
                    })(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    }),
              t)
          );
}
function H(e) {
    let { row: t, onClick: n, checked: i, disabled: l } = e,
        s = null,
        o = null,
        c = null;
    switch (t.type) {
        case A.bm.DM:
        case A.bm.FRIEND:
            ((s = (0, a.jsx)(u.qEK, {
                size: u.EFr.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                'aria-label': t.item.username
            })),
                (o = M.ZP.getName(t.item)),
                (c = M.ZP.getUserTag(t.item)));
            break;
        case A.bm.GROUP_DM: {
            let e = (0, y.x)(t.item),
                n = (0, I.F6)(t.item, O.default, j.Z);
            ((s = (0, a.jsx)(u.qEK, {
                src: e,
                'aria-label': n,
                size: u.EFr.SIZE_40
            })),
                (o = (0, I.F6)(t.item, O.default, j.Z)));
            break;
        }
        case A.bm.CHANNEL: {
            let e = t.item,
                n = N.Z.getGuild(e.guild_id);
            if (null == n) return null;
            if (((o = '#'.concat((0, I.F6)(e, O.default, j.Z))), (c = n.name), null != n.icon)) {
                let t = D.ZP.getGuildIconURL({
                    id: e.guild_id,
                    icon: n.icon,
                    size: 40
                });
                s = (0, a.jsx)(u.qEK, {
                    src: t,
                    'aria-label': o,
                    size: u.EFr.SIZE_40
                });
            } else {
                let e = (0, P.Zg)(n.name);
                s = (0, a.jsx)('div', {
                    className: B.acronym,
                    'aria-hidden': !0,
                    children: (0, a.jsx)(u.Text, {
                        variant: 'text-md/semibold',
                        children: e
                    })
                });
            }
        }
    }
    return (0, a.jsxs)(u.P3F, {
        onClick: n,
        className: r()(B.rowContainer, { [B.disabled]: l }),
        children: [
            (0, a.jsxs)('div', {
                className: B.rowLeft,
                children: [
                    (0, a.jsx)('div', {
                        className: B.rowAvatar,
                        children: s
                    }),
                    (0, a.jsxs)('div', {
                        className: B.rowNameContainer,
                        children: [
                            (0, a.jsx)(u.Text, {
                                variant: 'text-md/semibold',
                                className: r()(B.rowName, { [B.disabled]: l }),
                                children: o
                            }),
                            (0, a.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                className: r()(B.rowSubName, { [B.disabled]: l }),
                                children: c
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(u.XZJ, {
                disabled: l,
                value: i,
                type: u.XZJ.Types.INVERTED,
                displayOnly: !0,
                className: B.rowRight
            })
        ]
    });
}
function K(e) {
    let { applicationId: t, mediaUrl: n, activitySessionId: l } = e,
        [r, s] = i.useState(!1),
        o = (0, d.e7)([O.default], () => O.default.getCurrentUser());
    async function c() {
        (Z.default.track(L.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
            user_id: null == o ? void 0 : o.id,
            application_id: t,
            activity_session_id: l
        }),
            await U.ZP.copyImage(n),
            s(!0));
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
    U.ZP.canCopyImage(n))
        ? (0, a.jsxs)(u.zxk, {
              look: u.zxk.Looks.LINK,
              color: u.zxk.Colors.LINK,
              onClick: c,
              innerClassName: B.copyButton,
              children: [
                  r
                      ? (0, a.jsx)(u.owK, {
                            size: 'md',
                            color: 'currentColor'
                        })
                      : (0, a.jsx)(u.TIy, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                  r ? G.intl.string(G.t['t5VZ8/']) : G.intl.string(G.t.tvUqWl)
              ]
          })
        : (0, a.jsx)('div', {});
}
