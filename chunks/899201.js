n.d(t, { default: () => z }), n(388685);
var i = n(54381),
    a = n(473749),
    l = n(120356),
    r = n.n(l),
    s = n(990547),
    o = n(793030),
    c = n(442837),
    d = n(755721),
    u = n(481060),
    m = n(493683),
    p = n(247272),
    f = n(904245),
    g = n(166459),
    I = n(476326),
    y = n(213609),
    h = n(835473),
    S = n(43267),
    b = n(933557),
    E = n(58873),
    v = n(957730),
    w = n(592125),
    O = n(703558),
    T = n(430824),
    _ = n(751771),
    C = n(496675),
    Z = n(699516),
    j = n(117530),
    N = n(594174),
    x = n(626135),
    P = n(768581),
    A = n(971130),
    D = n(137058),
    U = n(624138),
    M = n(591759),
    k = n(51144),
    L = n(998502),
    R = n(317381),
    F = n(981631),
    G = n(245335),
    q = n(959517),
    V = n(388032),
    H = n(989201);
function z(e) {
    var t,
        n,
        { applicationId: l, mediaUrl: r, onClose: d, transitionState: S } = e,
        b = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        a = {},
                        l = Object.keys(e);
                    for (i = 0; i < l.length; i++) (n = l[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                for (i = 0; i < l.length; i++)
                    (n = l[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ["applicationId", "mediaUrl", "onClose", "transitionState"]);
    let T = (0, c.e7)([R.ZP], () => R.ZP.getCurrentEmbeddedActivity());
    (0, y.Z)({
        type: s.ImpressionTypes.MODAL,
        name: s.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: {
            application_id: l,
            activity_session_id: null == T ? void 0 : T.compositeInstanceId,
        },
    });
    let [Z] = (0, h.Z)([l]),
        P = (0, c.e7)([N.default], () => N.default.getCurrentUser()),
        [U, k] = a.useState(""),
        [z, K] = a.useState([]),
        [Q, Y] = a.useState(null),
        [W, X] = a.useState(null),
        [$, J] = a.useState(!1);
    a.useEffect(() => {
        (async () => {
            let e = M.Z.toURLSafe(r);
            if (null == e) return;
            let t = (0, D.eP)(e.pathname),
                n = await fetch(r),
                i = new File([await n.arrayBuffer()], t);
            Y(i);
            let a = new FileReader();
            (a.onload = () => {
                var e;
                return X(null == a || null == (e = a.result) ? void 0 : e.toString());
            }),
                a.readAsDataURL(i);
        })();
    }, [r, Y]);
    let ee = (0, c.Wu)([_.Z, C.Z], () =>
        _.Z.getInviteSuggestionRows().filter(
            (e) => e.type === A.bm.FRIEND || e.type === A.bm.DM || C.Z.can(F.Plq.ATTACH_FILES, e.item),
        ),
    );
    a.useEffect(() => {
        (0, p.x)({
            omitUserIds: new Set(),
            applicationId: l,
            inviteTargetType: G.Iq.EMBEDDED_APPLICATION,
        });
    }, [l]),
        a.useEffect(() => (0, p.C)(U), [U]),
        a.useEffect(() => {
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
    let et = a.useCallback(async () => {
            await d();
        }, [d]),
        en = a.useCallback(async () => {
            x.default.track(F.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
                user_id: null == P ? void 0 : P.id,
                application_id: l,
                activity_session_id: null == T ? void 0 : T.compositeInstanceId,
            }),
                await L.ZP.copyImage(r),
                J(!0);
        }, [null == T ? void 0 : T.compositeInstanceId, l, r, null == P ? void 0 : P.id]),
        ei = a.useCallback(async () => {
            let e = 0,
                t = 0,
                n = 0;
            async function i(i) {
                let a;
                switch (i.type) {
                    case A.bm.DM:
                    case A.bm.FRIEND:
                        (a = await m.Z.ensurePrivateChannel(i.id)), e++;
                        break;
                    case A.bm.GROUP_DM:
                        (a = i.id), t++;
                        break;
                    case A.bm.CHANNEL:
                        (a = i.id), n++;
                        break;
                    default:
                        return;
                }
                let r = w.Z.getChannel(a);
                if (null != Q) {
                    let e = new File([Q], Q.name, { type: Q.type });
                    g.Z.addFile({
                        file: {
                            file: e,
                            platform: I.ow.WEB,
                            origin: "unknown:activity_share",
                        },
                        channelId: a,
                        draftType: O.d.ChannelMessage,
                    });
                }
                let s = j.Z.getUploads(a, O.d.ChannelMessage);
                f.Z.sendMessage(
                    a,
                    null != Z
                        ? v.ZP.parse(
                              r,
                              V.intl.formatToPlainString(V.t.jQULqL, { applicationName: "**".concat(Z.name, "**") }),
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
                        applicationId: l,
                        attachmentsToUpload: s,
                        onAttachmentUploadError: (e, t, n) => {
                            var i;
                            (0, E.A)({
                                file: e,
                                guildId: null != (i = null == r ? void 0 : r.getGuildId()) ? i : null,
                                analyticsLocations: [],
                                code: t,
                                reason: n,
                            });
                        },
                    },
                ),
                    g.Z.clearAll(a, O.d.ChannelMessage);
            }
            let a = z.map((e) => i(e));
            x.default.track(F.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == P ? void 0 : P.id,
                application_id: l,
                activity_session_id: null == T ? void 0 : T.compositeInstanceId,
                n_users: e,
                n_gdms: t,
                n_channels: n,
            });
            try {
                await Promise.all(a),
                    null != Z &&
                        (0, u.showToast)(
                            (0, u.createToast)(
                                V.intl.formatToPlainString(V.t.jQULqL, { applicationName: Z.name }),
                                u.ToastType.SUCCESS,
                            ),
                        );
            } catch (e) {
                throw ((0, u.showToast)((0, u.createToast)(V.intl.string(V.t.PanA4J), u.ToastType.FAILURE)), e);
            }
            et();
        }, [T, Z, l, z, Q, et, P]);
    return null == W
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
                      transitionState: S,
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
                                  src: W,
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
                          ...(L.ZP.canCopyImage(r)
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
                  b,
              )),
              (n = n =
                  {
                      children: ee.map((e, t) =>
                          (0, i.jsxs)(
                              a.Fragment,
                              {
                                  children: [
                                      0 === t ? null : (0, i.jsx)("div", { className: H.rowDivider }),
                                      (0, i.jsx)(B, {
                                          row: e,
                                          onClick: () =>
                                              (() => {
                                                  if (-1 !== z.findIndex((t) => t.id === e.item.id))
                                                      K(z.filter((t) => t.id !== e.item.id));
                                                  else {
                                                      if (z.length >= 10) return;
                                                      null != Q &&
                                                          K([
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
    let { row: t, onClick: n, checked: a, disabled: l } = e,
        s = null,
        o = null,
        c = null;
    switch (t.type) {
        case A.bm.DM:
        case A.bm.FRIEND:
            (s = (0, i.jsx)(u.qEK, {
                size: u.EFr.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                "aria-label": t.item.username,
            })),
                (o = k.ZP.getName(t.item)),
                (c = k.ZP.getUserTag(t.item));
            break;
        case A.bm.GROUP_DM: {
            let e = (0, S.x)(t.item),
                n = (0, b.F6)(t.item, N.default, Z.Z);
            (s = (0, i.jsx)(u.qEK, {
                src: e,
                "aria-label": n,
                size: u.EFr.SIZE_40,
            })),
                (o = (0, b.F6)(t.item, N.default, Z.Z));
            break;
        }
        case A.bm.CHANNEL: {
            let e = t.item,
                n = T.Z.getGuild(e.guild_id);
            if (null == n) return null;
            if (((o = "#".concat((0, b.F6)(e, N.default, Z.Z))), (c = n.name), null != n.icon)) {
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
        className: r()(H.rowContainer, { [H.disabled]: l }),
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
                                className: r()(H.rowName, { [H.disabled]: l }),
                                children: o,
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-xs/medium",
                                className: r()(H.rowSubName, { [H.disabled]: l }),
                                children: c,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(d.$q, {
                disabled: l,
                value: a,
                type: d.M0.INVERTED,
                displayOnly: !0,
                className: H.rowRight,
            }),
        ],
    });
}
