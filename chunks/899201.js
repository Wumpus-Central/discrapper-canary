a.d(t, { default: () => q }), a(388685), a(539854);
var n = a(255367),
    i = a(73800),
    l = a(120356),
    r = a.n(l),
    s = a(218887),
    o = a.n(s),
    c = a(990547),
    d = a(442837),
    u = a(481060),
    m = a(493683),
    f = a(247272),
    p = a(904245),
    g = a(166459),
    h = a(476326),
    b = a(213609),
    _ = a(835473),
    y = a(43267),
    I = a(933557),
    S = a(58873),
    w = a(957730),
    E = a(592125),
    v = a(703558),
    N = a(430824),
    x = a(751771),
    C = a(496675),
    j = a(699516),
    T = a(117530),
    O = a(594174),
    Z = a(626135),
    A = a(768581),
    P = a(971130),
    D = a(624138),
    k = a(591759),
    M = a(51144),
    U = a(998502),
    R = a(317381),
    L = a(981631),
    F = a(245335),
    B = a(388032),
    G = a(239198);
async function z(e) {
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
        A = (0, d.e7)([O.default], () => O.default.getCurrentUser()),
        [D, M] = i.useState(''),
        [U, q] = i.useState([]),
        [V, X] = i.useState(null),
        [Q, W] = i.useState(null);
    i.useEffect(() => {
        (async () => {
            let e = k.Z.toURLSafe(r);
            if (null == e) return;
            let t = o().basename(e.pathname),
                a = await fetch(r),
                n = new File([await a.arrayBuffer()], t);
            X(n);
            let i = new FileReader();
            (i.onload = () => {
                var e;
                return W(null == i || null == (e = i.result) ? void 0 : e.toString());
            }),
                i.readAsDataURL(n);
        })();
    }, [r, X]);
    let Y = (0, d.Wu)([x.Z, C.Z], () => x.Z.getInviteSuggestionRows().filter((e) => e.type === P.bm.FRIEND || e.type === P.bm.DM || C.Z.can(L.Plq.ATTACH_FILES, e.item)));
    i.useEffect(() => {
        (0, f.x)({
            omitUserIds: new Set(),
            applicationId: l,
            inviteTargetType: F.Iq.EMBEDDED_APPLICATION
        });
    }, [l]),
        i.useEffect(() => (0, f.C)(D), [D]);
    let J = i.useCallback(async () => {
        await Promise.all(
            U.map(async (e) => {
                let t = Y.find((t) => t.item.id === e);
                if (null != t) {
                    let e = await z(t);
                    g.Z.clearAll(e, v.d.ChannelMessage);
                }
            })
        );
    }, [U, Y]);
    i.useEffect(() => {
        y === u.Dvm.EXITING && J();
    }, [J, y]);
    let $ = i.useCallback(async () => {
            await J(), m();
        }, [m, J]),
        ee = i.useCallback(async () => {
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
                let i = await z(n),
                    r = T.Z.getUploads(i, v.d.ChannelMessage),
                    s = E.Z.getChannel(i);
                p.Z.sendMessage(
                    i,
                    null != j
                        ? w.ZP.parse(s, B.intl.formatToPlainString(B.t.jQULqK, { applicationName: '**'.concat(j.name, '**') }))
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
                        onAttachmentUploadError: (e, t, a) => {
                            var n;
                            (0, S.A)({
                                file: e,
                                guildId: null != (n = null == s ? void 0 : s.getGuildId()) ? n : null,
                                analyticsLocations: [],
                                code: t,
                                reason: a
                            });
                        }
                    }
                ),
                    g.Z.clearAll(i, v.d.ChannelMessage);
            }
            let i = x.Z.getInviteSuggestionRows()
                .filter((e) => U.includes(e.item.id))
                .map((e) => n(e));
            Z.default.track(L.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == A ? void 0 : A.id,
                application_id: l,
                activity_session_id: null == N ? void 0 : N.compositeInstanceId,
                n_users: e,
                n_gdms: t,
                n_channels: a
            });
            try {
                await Promise.all(i), null != j && (0, u.showToast)((0, u.createToast)(B.intl.formatToPlainString(B.t.jQULqK, { applicationName: j.name }), u.ToastType.SUCCESS));
            } catch (e) {
                throw ((0, u.showToast)((0, u.createToast)(B.intl.string(B.t.PanA4O), u.ToastType.FAILURE)), e);
            }
            $();
        }, [N, j, l, U, $, A]),
        et = (e) => {
            let t = async () => {
                let t = await z(e),
                    a = [...U];
                if (a.includes(e.item.id)) g.Z.clearAll(t, v.d.ChannelMessage), (a = a.filter((t) => t !== e.item.id));
                else {
                    if (a.length >= 10) return;
                    null != V &&
                        (g.Z.addFile({
                            file: {
                                file: V,
                                platform: h.ow.WEB
                            },
                            channelId: t,
                            draftType: v.d.ChannelMessage
                        }),
                        a.push(e.item.id));
                }
                q(a);
            };
            return () => t();
        };
    return null == Q
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
                      className: G.modalRoot,
                      parentComponent: 'ActivityShareMomentModal',
                      children: [
                          (0, n.jsxs)(u.xBx, {
                              className: G.header,
                              children: [
                                  (0, n.jsxs)('div', {
                                      className: G.headerTitle,
                                      children: [
                                          (0, n.jsx)(u.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: B.intl.string(B.t.r9qKo6)
                                          }),
                                          (0, n.jsx)(u.olH, { onClick: $ })
                                      ]
                                  }),
                                  (0, n.jsx)('div', {
                                      children: (0, n.jsx)('img', {
                                          alt: r,
                                          className: G.img,
                                          src: Q
                                      })
                                  })
                              ]
                          }),
                          (0, n.jsxs)(u.hzk, {
                              className: G.modalContent,
                              children: [
                                  (0, n.jsx)(u.Rj2, {
                                      className: G.searchBar,
                                      placeholder: B.intl.string(B.t['5h0QOD']),
                                      label: B.intl.string(B.t['5h0QOD']),
                                      searchTerm: D,
                                      onChange: (e) => M(e),
                                      onClear: () => M('')
                                  }),
                                  Y.map((e, t) =>
                                      (0, n.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  0 === t ? null : (0, n.jsx)('div', { className: G.rowDivider }),
                                                  (0, n.jsx)(H, {
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
                          (0, n.jsx)(u.mzw, {
                              className: G.footer,
                              children: (0, n.jsxs)('div', {
                                  className: G.copySendBar,
                                  children: [
                                      (0, n.jsx)(K, {
                                          applicationId: l,
                                          activitySessionId: null == N ? void 0 : N.compositeInstanceId,
                                          mediaUrl: r
                                      }),
                                      U.length >= 10
                                          ? (0, n.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                children: B.intl.format(B.t.mdE9iI, { maxShares: 10 })
                                            })
                                          : null,
                                      (0, n.jsx)(u.zxk, {
                                          onClick: ee,
                                          disabled: U.length <= 0,
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
                a = (0, I.F6)(t.item, O.default, j.Z);
            (s = (0, n.jsx)(u.qEK, {
                src: e,
                'aria-label': a,
                size: u.EFr.SIZE_40
            })),
                (o = (0, I.F6)(t.item, O.default, j.Z));
            break;
        }
        case P.bm.CHANNEL: {
            let e = t.item,
                a = N.Z.getGuild(e.guild_id);
            if (null == a) return null;
            if (((o = '#'.concat((0, I.F6)(e, O.default, j.Z))), (c = a.name), null != a.icon)) {
                let t = A.ZP.getGuildIconURL({
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
                let e = (0, D.Zg)(a.name);
                s = (0, n.jsx)('div', {
                    className: G.acronym,
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
        className: r()(G.rowContainer, { [G.disabled]: l }),
        children: [
            (0, n.jsxs)('div', {
                className: G.rowLeft,
                children: [
                    (0, n.jsx)('div', {
                        className: G.rowAvatar,
                        children: s
                    }),
                    (0, n.jsxs)('div', {
                        className: G.rowNameContainer,
                        children: [
                            (0, n.jsx)(u.Text, {
                                variant: 'text-md/semibold',
                                className: r()(G.rowName, { [G.disabled]: l }),
                                children: o
                            }),
                            (0, n.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                className: r()(G.rowSubName, { [G.disabled]: l }),
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
                className: G.rowRight
            })
        ]
    });
}
function K(e) {
    let { applicationId: t, mediaUrl: a, activitySessionId: l } = e,
        [r, s] = i.useState(!1),
        o = (0, d.e7)([O.default], () => O.default.getCurrentUser());
    async function c() {
        Z.default.track(L.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
            user_id: null == o ? void 0 : o.id,
            application_id: t,
            activity_session_id: l
        }),
            await U.ZP.copyImage(a),
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
    U.ZP.canCopyImage(a))
        ? (0, n.jsxs)(u.zxk, {
              look: u.zxk.Looks.LINK,
              color: u.zxk.Colors.LINK,
              onClick: c,
              innerClassName: G.copyButton,
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
