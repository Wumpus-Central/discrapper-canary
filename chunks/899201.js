(n.d(t, { default: () => H }), n(388685), n(539854));
var a = n(255367),
    i = n(73800),
    l = n(120356),
    r = n.n(l),
    s = n(218887),
    o = n.n(s),
    c = n(990547),
    d = n(442837),
    u = n(755721),
    m = n(481060),
    p = n(493683),
    f = n(247272),
    g = n(904245),
    h = n(166459),
    b = n(476326),
    _ = n(213609),
    y = n(835473),
    I = n(43267),
    w = n(933557),
    S = n(58873),
    E = n(957730),
    v = n(592125),
    x = n(703558),
    N = n(430824),
    C = n(751771),
    j = n(496675),
    T = n(699516),
    O = n(117530),
    Z = n(594174),
    D = n(626135),
    A = n(768581),
    P = n(971130),
    M = n(624138),
    U = n(591759),
    R = n(51144),
    k = n(998502),
    L = n(317381),
    F = n(981631),
    G = n(245335),
    B = n(388032),
    z = n(239198);
async function q(e) {
    return e.type === P.bm.DM || e.type === P.bm.FRIEND ? await p.Z.ensurePrivateChannel(e.item.id) : e.item.id;
}
function H(e) {
    var t,
        n,
        { applicationId: l, mediaUrl: r, onClose: s, transitionState: u } = e,
        p = (function (e, t) {
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
        })(e, ['applicationId', 'mediaUrl', 'onClose', 'transitionState']);
    let I = (0, d.e7)([L.ZP], () => L.ZP.getCurrentEmbeddedActivity());
    (0, _.Z)({
        type: c.ImpressionTypes.MODAL,
        name: c.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: {
            application_id: l,
            activity_session_id: null == I ? void 0 : I.compositeInstanceId
        }
    });
    let [w] = (0, y.Z)([l]),
        N = (0, d.e7)([Z.default], () => Z.default.getCurrentUser()),
        [T, A] = i.useState(''),
        [M, R] = i.useState([]),
        [k, H] = i.useState(null),
        [X, Q] = i.useState(null);
    i.useEffect(() => {
        (async () => {
            let e = U.Z.toURLSafe(r);
            if (null == e) return;
            let t = o().basename(e.pathname),
                n = await fetch(r),
                a = new File([await n.arrayBuffer()], t);
            H(a);
            let i = new FileReader();
            ((i.onload = () => {
                var e;
                return Q(null == i || null == (e = i.result) ? void 0 : e.toString());
            }),
                i.readAsDataURL(a));
        })();
    }, [r, H]);
    let Y = (0, d.Wu)([C.Z, j.Z], () => C.Z.getInviteSuggestionRows().filter((e) => e.type === P.bm.FRIEND || e.type === P.bm.DM || j.Z.can(F.Plq.ATTACH_FILES, e.item)));
    (i.useEffect(() => {
        (0, f.x)({
            omitUserIds: new Set(),
            applicationId: l,
            inviteTargetType: G.Iq.EMBEDDED_APPLICATION
        });
    }, [l]),
        i.useEffect(() => (0, f.C)(T), [T]));
    let W = i.useCallback(async () => {
        await Promise.all(
            M.map(async (e) => {
                let t = Y.find((t) => t.item.id === e);
                if (null != t) {
                    let e = await q(t);
                    h.Z.clearAll(e, x.d.ChannelMessage);
                }
            })
        );
    }, [M, Y]);
    i.useEffect(() => {
        u === m.Dvm.EXITING && W();
    }, [W, u]);
    let J = i.useCallback(async () => {
            (await W(), s());
        }, [s, W]),
        $ = i.useCallback(async () => {
            let e = 0,
                t = 0,
                n = 0;
            async function a(a) {
                switch (a.type) {
                    case P.bm.DM:
                    case P.bm.FRIEND:
                        e++;
                        break;
                    case P.bm.GROUP_DM:
                        t++;
                        break;
                    case P.bm.CHANNEL:
                        n++;
                }
                let i = await q(a),
                    r = O.Z.getUploads(i, x.d.ChannelMessage),
                    s = v.Z.getChannel(i);
                (g.Z.sendMessage(
                    i,
                    null != w
                        ? E.ZP.parse(s, B.intl.formatToPlainString(B.t.jQULqK, { applicationName: '**'.concat(w.name, '**') }))
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
                    h.Z.clearAll(i, x.d.ChannelMessage));
            }
            let i = C.Z.getInviteSuggestionRows()
                .filter((e) => M.includes(e.item.id))
                .map((e) => a(e));
            D.default.track(F.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == N ? void 0 : N.id,
                application_id: l,
                activity_session_id: null == I ? void 0 : I.compositeInstanceId,
                n_users: e,
                n_gdms: t,
                n_channels: n
            });
            try {
                (await Promise.all(i), null != w && (0, m.showToast)((0, m.createToast)(B.intl.formatToPlainString(B.t.jQULqK, { applicationName: w.name }), m.ToastType.SUCCESS)));
            } catch (e) {
                throw ((0, m.showToast)((0, m.createToast)(B.intl.string(B.t.PanA4O), m.ToastType.FAILURE)), e);
            }
            J();
        }, [I, w, l, M, J, N]),
        ee = (e) => {
            let t = async () => {
                let t = await q(e),
                    n = [...M];
                if (n.includes(e.item.id)) (h.Z.clearAll(t, x.d.ChannelMessage), (n = n.filter((t) => t !== e.item.id)));
                else {
                    if (n.length >= 10) return;
                    null != k &&
                        (h.Z.addFile({
                            file: {
                                file: k,
                                platform: b.ow.WEB
                            },
                            channelId: t,
                            draftType: x.d.ChannelMessage
                        }),
                        n.push(e.item.id));
                }
                R(n);
            };
            return () => t();
        };
    return null == X
        ? (0, a.jsx)(m.$jN, {})
        : (0, a.jsxs)(
              m.Y0X,
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
              })({ transitionState: u }, p)),
              (n = n =
                  {
                      className: z.modalRoot,
                      parentComponent: 'ActivityShareMomentModal',
                      children: [
                          (0, a.jsxs)(m.xBx, {
                              className: z.header,
                              children: [
                                  (0, a.jsxs)('div', {
                                      className: z.headerTitle,
                                      children: [
                                          (0, a.jsx)(m.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: B.intl.string(B.t.r9qKo6)
                                          }),
                                          (0, a.jsx)(m.olH, { onClick: J })
                                      ]
                                  }),
                                  (0, a.jsx)('div', {
                                      children: (0, a.jsx)('img', {
                                          alt: r,
                                          className: z.img,
                                          src: X
                                      })
                                  })
                              ]
                          }),
                          (0, a.jsxs)(m.hzk, {
                              className: z.modalContent,
                              children: [
                                  (0, a.jsx)(m.Rj2, {
                                      className: z.searchBar,
                                      placeholder: B.intl.string(B.t['5h0QOD']),
                                      label: B.intl.string(B.t['5h0QOD']),
                                      searchTerm: T,
                                      onChange: (e) => A(e),
                                      onClear: () => A('')
                                  }),
                                  Y.map((e, t) =>
                                      (0, a.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  0 === t ? null : (0, a.jsx)('div', { className: z.rowDivider }),
                                                  (0, a.jsx)(K, {
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
                          (0, a.jsx)(m.mzw, {
                              className: z.footer,
                              children: (0, a.jsxs)('div', {
                                  className: z.copySendBar,
                                  children: [
                                      (0, a.jsx)(V, {
                                          applicationId: l,
                                          activitySessionId: null == I ? void 0 : I.compositeInstanceId,
                                          mediaUrl: r
                                      }),
                                      M.length >= 10
                                          ? (0, a.jsx)(m.Text, {
                                                variant: 'text-xs/normal',
                                                children: B.intl.format(B.t.mdE9iI, { maxShares: 10 })
                                            })
                                          : null,
                                      (0, a.jsx)(m.zxk, {
                                          variant: 'primary',
                                          text: B.intl.string(B.t.TXNS7e),
                                          onClick: $,
                                          disabled: M.length <= 0
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
function K(e) {
    let { row: t, onClick: n, checked: i, disabled: l } = e,
        s = null,
        o = null,
        c = null;
    switch (t.type) {
        case P.bm.DM:
        case P.bm.FRIEND:
            ((s = (0, a.jsx)(m.qEK, {
                size: m.EFr.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                'aria-label': t.item.username
            })),
                (o = R.ZP.getName(t.item)),
                (c = R.ZP.getUserTag(t.item)));
            break;
        case P.bm.GROUP_DM: {
            let e = (0, I.x)(t.item),
                n = (0, w.F6)(t.item, Z.default, T.Z);
            ((s = (0, a.jsx)(m.qEK, {
                src: e,
                'aria-label': n,
                size: m.EFr.SIZE_40
            })),
                (o = (0, w.F6)(t.item, Z.default, T.Z)));
            break;
        }
        case P.bm.CHANNEL: {
            let e = t.item,
                n = N.Z.getGuild(e.guild_id);
            if (null == n) return null;
            if (((o = '#'.concat((0, w.F6)(e, Z.default, T.Z))), (c = n.name), null != n.icon)) {
                let t = A.ZP.getGuildIconURL({
                    id: e.guild_id,
                    icon: n.icon,
                    size: 40
                });
                s = (0, a.jsx)(m.qEK, {
                    src: t,
                    'aria-label': o,
                    size: m.EFr.SIZE_40
                });
            } else {
                let e = (0, M.Zg)(n.name);
                s = (0, a.jsx)('div', {
                    className: z.acronym,
                    'aria-hidden': !0,
                    children: (0, a.jsx)(m.Text, {
                        variant: 'text-md/semibold',
                        children: e
                    })
                });
            }
        }
    }
    return (0, a.jsxs)(m.P3F, {
        onClick: n,
        className: r()(z.rowContainer, { [z.disabled]: l }),
        children: [
            (0, a.jsxs)('div', {
                className: z.rowLeft,
                children: [
                    (0, a.jsx)('div', {
                        className: z.rowAvatar,
                        children: s
                    }),
                    (0, a.jsxs)('div', {
                        className: z.rowNameContainer,
                        children: [
                            (0, a.jsx)(m.Text, {
                                variant: 'text-md/semibold',
                                className: r()(z.rowName, { [z.disabled]: l }),
                                children: o
                            }),
                            (0, a.jsx)(m.Text, {
                                variant: 'text-xs/medium',
                                className: r()(z.rowSubName, { [z.disabled]: l }),
                                children: c
                            })
                        ]
                    })
                ]
            }),
            (0, a.jsx)(m.XZJ, {
                disabled: l,
                value: i,
                type: m.XZJ.Types.INVERTED,
                displayOnly: !0,
                className: z.rowRight
            })
        ]
    });
}
function V(e) {
    let { applicationId: t, mediaUrl: n, activitySessionId: l } = e,
        [r, s] = i.useState(!1),
        o = (0, d.e7)([Z.default], () => Z.default.getCurrentUser());
    async function c() {
        (D.default.track(F.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
            user_id: null == o ? void 0 : o.id,
            application_id: t,
            activity_session_id: l
        }),
            await k.ZP.copyImage(n),
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
    k.ZP.canCopyImage(n))
        ? (0, a.jsxs)(u.zx, {
              look: u.zx.Looks.LINK,
              color: u.zx.Colors.LINK,
              onClick: c,
              innerClassName: z.copyButton,
              children: [
                  r
                      ? (0, a.jsx)(m.owK, {
                            size: 'md',
                            color: 'currentColor'
                        })
                      : (0, a.jsx)(m.TIy, {
                            size: 'xs',
                            color: 'currentColor'
                        }),
                  r ? B.intl.string(B.t['t5VZ8/']) : B.intl.string(B.t.tvUqWl)
              ]
          })
        : (0, a.jsx)('div', {});
}
