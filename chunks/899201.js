a.d(t, { default: () => G }), a(388685), a(539854);
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
    g = a(966390),
    b = a(476326),
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
    D = a(624138),
    A = a(591759),
    k = a(51144),
    M = a(998502),
    R = a(317381),
    U = a(981631),
    L = a(245335),
    F = a(388032),
    B = a(239198);
async function z(e) {
    return e.type === P.bm.DM || e.type === P.bm.FRIEND ? await m.Z.ensurePrivateChannel(e.item.id) : e.item.id;
}
function G(e) {
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
    let x = (0, d.e7)([R.ZP], () => R.ZP.getSelfEmbeddedActivityForChannel(s));
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
        [D, k] = i.useState(''),
        [M, G] = i.useState([]),
        [K, V] = i.useState(null),
        [X, Q] = i.useState(null);
    i.useEffect(() => {
        (async () => {
            let e = A.Z.toURLSafe(r);
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
    let W = (0, d.Wu)([N.Z, v.Z], () => N.Z.getInviteSuggestionRows().filter((e) => e.type === P.bm.FRIEND || e.type === P.bm.DM || v.Z.can(U.Plq.ATTACH_FILES, e.item)));
    i.useEffect(() => {
        (0, f.x)({
            omitUserIds: new Set(),
            applicationId: l,
            inviteTargetType: L.Iq.EMBEDDED_APPLICATION
        });
    }, [l]),
        i.useEffect(() => (0, f.C)(D), [D]);
    let Y = i.useCallback(async () => {
        await Promise.all(
            M.map(async (e) => {
                let t = W.find((t) => t.item.id === e);
                if (null != t) {
                    let e = await z(t);
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
                let i = await z(n),
                    r = T.Z.getUploads(i, E.d.ChannelMessage),
                    s = S.Z.getChannel(i);
                g.Z.uploadFiles({
                    channelId: i,
                    uploads: r,
                    parsedMessage: null != C ? w.ZP.parse(s, F.intl.formatToPlainString(F.t.jQULqK, { applicationName: '**'.concat(C.name, '**') })) : void 0,
                    draftType: E.d.ChannelMessage,
                    options: { applicationId: l }
                }),
                    p.Z.clearAll(i, E.d.ChannelMessage);
            }
            let i = N.Z.getInviteSuggestionRows()
                .filter((e) => M.includes(e.item.id))
                .map((e) => n(e));
            O.default.track(U.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == Z ? void 0 : Z.id,
                application_id: l,
                activity_session_id: null == x ? void 0 : x.compositeInstanceId,
                n_users: e,
                n_gdms: t,
                n_channels: a
            });
            try {
                await Promise.all(i), null != C && (0, u.showToast)((0, u.createToast)(F.intl.formatToPlainString(F.t.jQULqK, { applicationName: C.name }), u.ToastType.SUCCESS));
            } catch (e) {
                throw ((0, u.showToast)((0, u.createToast)(F.intl.string(F.t.PanA4O), u.ToastType.FAILURE)), e);
            }
            J();
        }, [x, C, l, M, J, Z]),
        ee = (e) => {
            let t = async () => {
                let t = await z(e),
                    a = [...M];
                if (a.includes(e.item.id)) p.Z.clearAll(t, E.d.ChannelMessage), (a = a.filter((t) => t !== e.item.id));
                else {
                    if (a.length >= 10) return;
                    null != K &&
                        (p.Z.addFile({
                            file: {
                                file: K,
                                platform: b.ow.WEB
                            },
                            channelId: t,
                            draftType: E.d.ChannelMessage
                        }),
                        a.push(e.item.id));
                }
                G(a);
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
                      className: B.modalRoot,
                      children: [
                          (0, n.jsxs)(u.xBx, {
                              className: B.header,
                              children: [
                                  (0, n.jsxs)('div', {
                                      className: B.headerTitle,
                                      children: [
                                          (0, n.jsx)(u.X6q, {
                                              variant: 'heading-md/semibold',
                                              children: F.intl.string(F.t.r9qKo6)
                                          }),
                                          (0, n.jsx)(u.olH, { onClick: J })
                                      ]
                                  }),
                                  (0, n.jsx)('div', {
                                      children: (0, n.jsx)('img', {
                                          alt: r,
                                          className: B.img,
                                          src: X
                                      })
                                  })
                              ]
                          }),
                          (0, n.jsxs)(u.hzk, {
                              className: B.modalContent,
                              children: [
                                  (0, n.jsx)(u.Rj2, {
                                      className: B.searchBar,
                                      placeholder: F.intl.string(F.t['5h0QOD']),
                                      label: F.intl.string(F.t['5h0QOD']),
                                      searchTerm: D,
                                      onChange: (e) => k(e),
                                      onClear: () => k('')
                                  }),
                                  W.map((e, t) =>
                                      (0, n.jsxs)(
                                          i.Fragment,
                                          {
                                              children: [
                                                  0 === t ? null : (0, n.jsx)('div', { className: B.rowDivider }),
                                                  (0, n.jsx)(q, {
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
                              className: B.footer,
                              children: (0, n.jsxs)('div', {
                                  className: B.copySendBar,
                                  children: [
                                      (0, n.jsx)(H, {
                                          applicationId: l,
                                          activitySessionId: null == x ? void 0 : x.compositeInstanceId,
                                          mediaUrl: r
                                      }),
                                      M.length >= 10
                                          ? (0, n.jsx)(u.Text, {
                                                variant: 'text-xs/normal',
                                                children: F.intl.format(F.t.mdE9iI, { maxShares: 10 })
                                            })
                                          : null,
                                      (0, n.jsx)(u.zxk, {
                                          onClick: $,
                                          disabled: M.length <= 0,
                                          children: F.intl.string(F.t.TXNS7e)
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
function q(e) {
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
                (o = k.ZP.getName(t.item)),
                (c = k.ZP.getUserTag(t.item));
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
                let e = (0, D.Zg)(a.name);
                s = (0, n.jsx)('div', {
                    className: B.acronym,
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
        className: r()(B.rowContainer, { [B.disabled]: l }),
        children: [
            (0, n.jsxs)('div', {
                className: B.rowLeft,
                children: [
                    (0, n.jsx)('div', {
                        className: B.rowAvatar,
                        children: s
                    }),
                    (0, n.jsxs)('div', {
                        className: B.rowNameContainer,
                        children: [
                            (0, n.jsx)(u.Text, {
                                variant: 'text-md/semibold',
                                className: r()(B.rowName, { [B.disabled]: l }),
                                children: o
                            }),
                            (0, n.jsx)(u.Text, {
                                variant: 'text-xs/medium',
                                className: r()(B.rowSubName, { [B.disabled]: l }),
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
                className: B.rowRight
            })
        ]
    });
}
function H(e) {
    let { applicationId: t, mediaUrl: a, activitySessionId: l } = e,
        [r, s] = i.useState(!1),
        o = (0, d.e7)([j.default], () => j.default.getCurrentUser());
    async function c() {
        O.default.track(U.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
            user_id: null == o ? void 0 : o.id,
            application_id: t,
            activity_session_id: l
        }),
            await M.ZP.copyImage(a),
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
    M.ZP.canCopyImage(a))
        ? (0, n.jsxs)(u.zxk, {
              look: u.zxk.Looks.LINK,
              color: u.zxk.Colors.LINK,
              onClick: c,
              innerClassName: B.copyButton,
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
                  r ? F.intl.string(F.t['t5VZ8/']) : F.intl.string(F.t.tvUqWl)
              ]
          })
        : (0, n.jsx)('div', {});
}
