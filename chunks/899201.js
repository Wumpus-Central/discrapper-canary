n.d(t, { default: () => z }), n(388685);
var i = n(54381),
    l = n(473749),
    a = n(120356),
    r = n.n(a),
    s = n(990547),
    o = n(793030),
    d = n(442837),
    c = n(755721),
    u = n(481060),
    m = n(493683),
    p = n(247272),
    f = n(904245),
    g = n(166459),
    I = n(476326),
    b = n(213609),
    y = n(835473),
    E = n(43267),
    S = n(933557),
    h = n(58873),
    v = n(957730),
    C = n(592125),
    w = n(703558),
    T = n(430824),
    _ = n(751771),
    O = n(496675),
    x = n(699516),
    Z = n(117530),
    j = n(594174),
    N = n(626135),
    P = n(768581),
    A = n(971130),
    D = n(137058),
    U = n(624138),
    M = n(591759),
    k = n(51144),
    F = n(998502),
    L = n(317381),
    R = n(981631),
    G = n(245335),
    q = n(959517),
    V = n(388032),
    H = n(989201);
function z(e) {
    var t,
        n,
        { applicationId: a, mediaUrl: r, onClose: c, transitionState: E } = e,
        S = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                l = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        l = {},
                        a = Object.keys(e);
                    for (i = 0; i < a.length; i++) (n = a[i]), t.indexOf(n) >= 0 || (l[n] = e[n]);
                    return l;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var a = Object.getOwnPropertySymbols(e);
                for (i = 0; i < a.length; i++)
                    (n = a[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
            }
            return l;
        })(e, ["applicationId", "mediaUrl", "onClose", "transitionState"]);
    let T = (0, d.e7)([L.ZP], () => L.ZP.getCurrentEmbeddedActivity());
    (0, b.Z)({
        type: s.ImpressionTypes.MODAL,
        name: s.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: {
            application_id: a,
            activity_session_id: null == T ? void 0 : T.compositeInstanceId,
        },
    });
    let [x] = (0, y.Z)([a]),
        P = (0, d.e7)([j.default], () => j.default.getCurrentUser()),
        [U, k] = l.useState(""),
        [z, W] = l.useState([]),
        [K, Q] = l.useState(null),
        [Y, X] = l.useState(null),
        [$, J] = l.useState(!1);
    l.useEffect(() => {
        (async () => {
            let e = M.Z.toURLSafe(r);
            if (null == e) return;
            let t = (0, D.eP)(e.pathname),
                n = await fetch(r),
                i = new File([await n.arrayBuffer()], t);
            Q(i);
            let l = new FileReader();
            (l.onload = () => {
                var e;
                return X(null == l || null == (e = l.result) ? void 0 : e.toString());
            }),
                l.readAsDataURL(i);
        })();
    }, [r, Q]);
    let ee = (0, d.Wu)([_.Z, O.Z], () =>
        _.Z.getInviteSuggestionRows().filter(
            (e) => e.type === A.bm.FRIEND || e.type === A.bm.DM || O.Z.can(R.Plq.ATTACH_FILES, e.item),
        ),
    );
    l.useEffect(() => {
        (0, p.x)({
            omitUserIds: new Set(),
            applicationId: a,
            inviteTargetType: G.Iq.EMBEDDED_APPLICATION,
        });
    }, [a]),
        l.useEffect(() => (0, p.C)(U), [U]),
        l.useEffect(() => {
            let e;
            return (
                $ &&
                    (e = setTimeout(() => {
                        J(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [$]);
    let et = l.useCallback(async () => {
            await c();
        }, [c]),
        en = l.useCallback(async () => {
            N.default.track(R.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
                user_id: null == P ? void 0 : P.id,
                application_id: a,
                activity_session_id: null == T ? void 0 : T.compositeInstanceId,
            }),
                await F.ZP.copyImage(r),
                J(!0);
        }, [null == T ? void 0 : T.compositeInstanceId, a, r, null == P ? void 0 : P.id]),
        ei = l.useCallback(async () => {
            let e = 0,
                t = 0,
                n = 0;
            async function i(i) {
                let l;
                switch (i.type) {
                    case A.bm.DM:
                    case A.bm.FRIEND:
                        (l = await m.Z.ensurePrivateChannel(i.id)), e++;
                        break;
                    case A.bm.GROUP_DM:
                        (l = i.id), t++;
                        break;
                    case A.bm.CHANNEL:
                        (l = i.id), n++;
                        break;
                    default:
                        return;
                }
                let r = C.Z.getChannel(l);
                if (null != K) {
                    let e = new File([K], K.name, { type: K.type });
                    g.Z.addFile({
                        file: {
                            file: e,
                            platform: I.ow.WEB,
                            origin: "unknown:activity_share",
                        },
                        channelId: l,
                        draftType: w.d.ChannelMessage,
                    });
                }
                let s = Z.Z.getUploads(l, w.d.ChannelMessage);
                f.Z.sendMessage(
                    l,
                    null != x
                        ? v.ZP.parse(
                              r,
                              V.intl.formatToPlainString(V.t.jQULqL, { applicationName: "**".concat(x.name, "**") }),
                          )
                        : {
                              content: "",
                              tts: !1,
                              invalidEmojis: [],
                              validNonShortcutEmojis: [],
                          },
                    !1,
                    {
                        eagerDispatch: !1,
                        location: q.dy.ACTIVITY_SHARE,
                        applicationId: a,
                        attachmentsToUpload: s,
                        onAttachmentUploadError: (e, t, n) => {
                            var i;
                            (0, h.A)({
                                file: e,
                                guildId: null != (i = null == r ? void 0 : r.getGuildId()) ? i : null,
                                analyticsLocations: [],
                                code: t,
                                reason: n,
                            });
                        },
                    },
                ),
                    g.Z.clearAll(l, w.d.ChannelMessage);
            }
            let l = z.map((e) => i(e));
            N.default.track(R.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == P ? void 0 : P.id,
                application_id: a,
                activity_session_id: null == T ? void 0 : T.compositeInstanceId,
                n_users: e,
                n_gdms: t,
                n_channels: n,
            });
            try {
                await Promise.all(l),
                    null != x &&
                        (0, u.showToast)(
                            (0, u.createToast)(
                                V.intl.formatToPlainString(V.t.jQULqL, { applicationName: x.name }),
                                u.ToastType.SUCCESS,
                            ),
                        );
            } catch (e) {
                throw ((0, u.showToast)((0, u.createToast)(V.intl.string(V.t.PanA4J), u.ToastType.FAILURE)), e);
            }
            et();
        }, [T, x, a, z, K, et, P]);
    return null == Y
        ? (0, i.jsx)(u.$jN, {})
        : (0, i.jsx)(
              o.Modal,
              ((t = (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = null != arguments[t] ? arguments[t] : {},
                          i = Object.keys(n);
                      "function" == typeof Object.getOwnPropertySymbols &&
                          (i = i.concat(
                              Object.getOwnPropertySymbols(n).filter(function (e) {
                                  return Object.getOwnPropertyDescriptor(n, e).enumerable;
                              }),
                          )),
                          i.forEach(function (t) {
                              var i;
                              (i = n[t]),
                                  t in e
                                      ? Object.defineProperty(e, t, {
                                            value: i,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0,
                                        })
                                      : (e[t] = i);
                          });
                  }
                  return e;
              })(
                  {
                      transitionState: E,
                      onClose: et,
                      size: "md",
                      title: V.intl.string(V.t.r9qKow),
                      input: (0, i.jsx)(u.E1j, {
                          placeholder: V.intl.string(V.t["5h0QOP"]),
                          "aria-label": V.intl.string(V.t["5h0QOP"]),
                          query: U,
                          onChange: (e) => k(e),
                          onClear: () => k(""),
                      }),
                      preview: (0, i.jsxs)(u.Kqy, {
                          direction: "vertical",
                          align: "center",
                          gap: 12,
                          children: [
                              (0, i.jsx)("img", {
                                  alt: r,
                                  src: Y,
                                  className: H.previewImage,
                              }),
                              z.length >= 10
                                  ? (0, i.jsx)(u.Text, {
                                        variant: "text-xs/normal",
                                        children: V.intl.format(V.t.mdE9iE, { maxShares: 10 }),
                                    })
                                  : null,
                          ],
                      }),
                      actions: [
                          ...(F.ZP.canCopyImage(r)
                              ? [
                                    {
                                        text: $ ? V.intl.string(V.t.t5VZ88) : V.intl.string(V.t.tvUqWn),
                                        onClick: en,
                                        variant: "secondary",
                                        disabled: $,
                                    },
                                ]
                              : []),
                          {
                              text: V.intl.string(V.t.TXNS7S),
                              onClick: ei,
                              variant: "primary",
                              disabled: z.length <= 0,
                          },
                      ],
                  },
                  S,
              )),
              (n = n =
                  {
                      children: ee.map((e, t) =>
                          (0, i.jsxs)(
                              l.Fragment,
                              {
                                  children: [
                                      0 === t ? null : (0, i.jsx)("div", { className: H.rowDivider }),
                                      (0, i.jsx)(B, {
                                          row: e,
                                          onClick: () =>
                                              (() => {
                                                  if (-1 !== z.findIndex((t) => t.id === e.item.id))
                                                      W(z.filter((t) => t.id !== e.item.id));
                                                  else {
                                                      if (z.length >= 10) return;
                                                      null != K &&
                                                          W([
                                                              ...z,
                                                              {
                                                                  id: e.item.id,
                                                                  type: e.type,
                                                              },
                                                          ]);
                                                  }
                                              })(),
                                          checked: z.some((t) => t.id === e.item.id),
                                          disabled: !z.some((t) => t.id === e.item.id) && z.length >= 10,
                                      }),
                                  ],
                              },
                              e.item.id,
                          ),
                      ),
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                  : (function (e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, i);
                        }
                        return n;
                    })(Object(n)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                    }),
              t),
          );
}
function B(e) {
    let { row: t, onClick: n, checked: l, disabled: a } = e,
        s = null,
        o = null,
        d = null;
    switch (t.type) {
        case A.bm.DM:
        case A.bm.FRIEND:
            (s = (0, i.jsx)(u.qEK, {
                size: u.EFr.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                "aria-label": t.item.username,
            })),
                (o = k.ZP.getName(t.item)),
                (d = k.ZP.getUserTag(t.item));
            break;
        case A.bm.GROUP_DM: {
            let e = (0, E.x)(t.item),
                n = (0, S.F6)(t.item, j.default, x.Z);
            (s = (0, i.jsx)(u.qEK, {
                src: e,
                "aria-label": n,
                size: u.EFr.SIZE_40,
            })),
                (o = (0, S.F6)(t.item, j.default, x.Z));
            break;
        }
        case A.bm.CHANNEL: {
            let e = t.item,
                n = T.Z.getGuild(e.guild_id);
            if (null == n) return null;
            if (((o = "#".concat((0, S.F6)(e, j.default, x.Z))), (d = n.name), null != n.icon)) {
                let t = P.ZP.getGuildIconURL({
                    id: e.guild_id,
                    icon: n.icon,
                    size: 40,
                });
                s = (0, i.jsx)(u.qEK, {
                    src: t,
                    "aria-label": o,
                    size: u.EFr.SIZE_40,
                });
            } else {
                let e = (0, U.Zg)(n.name);
                s = (0, i.jsx)("div", {
                    className: H.acronym,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(u.Text, {
                        variant: "text-md/semibold",
                        children: e,
                    }),
                });
            }
        }
    }
    return (0, i.jsxs)(u.P3F, {
        onClick: n,
        className: r()(H.rowContainer, { [H.disabled]: a }),
        children: [
            (0, i.jsxs)("div", {
                className: H.rowLeft,
                children: [
                    (0, i.jsx)("div", {
                        className: H.rowAvatar,
                        children: s,
                    }),
                    (0, i.jsxs)("div", {
                        className: H.rowNameContainer,
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: "text-md/semibold",
                                className: r()(H.rowName, { [H.disabled]: a }),
                                children: o,
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                className: r()(H.rowSubName, { [H.disabled]: a }),
                                children: d,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(c.$q, {
                disabled: a,
                value: l,
                type: c.M0.INVERTED,
                displayOnly: !0,
                className: H.rowRight,
            }),
        ],
    });
}
