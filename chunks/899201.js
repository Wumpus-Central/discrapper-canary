n.d(t, { default: () => B }), n(388685);
var i = n(951288),
    a = n(647438),
    l = n(120356),
    r = n.n(l),
    s = n(218887),
    o = n.n(s),
    d = n(990547),
    c = n(793030),
    u = n(442837),
    m = n(755721),
    p = n(481060),
    f = n(493683),
    g = n(247272),
    I = n(904245),
    b = n(166459),
    y = n(476326),
    E = n(213609),
    S = n(835473),
    h = n(43267),
    v = n(933557),
    C = n(58873),
    w = n(957730),
    T = n(592125),
    _ = n(703558),
    O = n(430824),
    x = n(751771),
    Z = n(496675),
    j = n(699516),
    N = n(117530),
    P = n(594174),
    A = n(626135),
    D = n(768581),
    U = n(971130),
    M = n(624138),
    k = n(591759),
    F = n(51144),
    L = n(998502),
    R = n(317381),
    G = n(981631),
    q = n(245335),
    V = n(959517),
    H = n(388032),
    z = n(989201);
function B(e) {
    var t,
        n,
        { applicationId: l, mediaUrl: r, onClose: s, transitionState: m } = e,
        h = (function (e, t) {
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
    let v = (0, u.e7)([R.ZP], () => R.ZP.getCurrentEmbeddedActivity());
    (0, E.Z)({
        type: d.ImpressionTypes.MODAL,
        name: d.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: {
            application_id: l,
            activity_session_id: null == v ? void 0 : v.compositeInstanceId,
        },
    });
    let [O] = (0, S.Z)([l]),
        j = (0, u.e7)([P.default], () => P.default.getCurrentUser()),
        [D, M] = a.useState(""),
        [F, B] = a.useState([]),
        [K, Q] = a.useState(null),
        [Y, X] = a.useState(null),
        [$, J] = a.useState(!1);
    a.useEffect(() => {
        (async () => {
            let e = k.Z.toURLSafe(r);
            if (null == e) return;
            let t = o().basename(e.pathname),
                n = await fetch(r),
                i = new File([await n.arrayBuffer()], t);
            Q(i);
            let a = new FileReader();
            (a.onload = () => {
                var e;
                return X(null == a || null == (e = a.result) ? void 0 : e.toString());
            }),
                a.readAsDataURL(i);
        })();
    }, [r, Q]);
    let ee = (0, u.Wu)([x.Z, Z.Z], () =>
        x.Z.getInviteSuggestionRows().filter(
            (e) => e.type === U.bm.FRIEND || e.type === U.bm.DM || Z.Z.can(G.Plq.ATTACH_FILES, e.item),
        ),
    );
    a.useEffect(() => {
        (0, g.x)({
            omitUserIds: new Set(),
            applicationId: l,
            inviteTargetType: q.Iq.EMBEDDED_APPLICATION,
        });
    }, [l]),
        a.useEffect(() => (0, g.C)(D), [D]),
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
            await s();
        }, [s]),
        en = a.useCallback(async () => {
            A.default.track(G.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
                user_id: null == j ? void 0 : j.id,
                application_id: l,
                activity_session_id: null == v ? void 0 : v.compositeInstanceId,
            }),
                await L.ZP.copyImage(r),
                J(!0);
        }, [null == v ? void 0 : v.compositeInstanceId, l, r, null == j ? void 0 : j.id]),
        ei = a.useCallback(async () => {
            let e = 0,
                t = 0,
                n = 0;
            async function i(i) {
                let a;
                switch (i.type) {
                    case U.bm.DM:
                    case U.bm.FRIEND:
                        (a = await f.Z.ensurePrivateChannel(i.id)), e++;
                        break;
                    case U.bm.GROUP_DM:
                        (a = i.id), t++;
                        break;
                    case U.bm.CHANNEL:
                        (a = i.id), n++;
                        break;
                    default:
                        return;
                }
                let r = T.Z.getChannel(a);
                if (null != K) {
                    let e = new File([K], K.name, { type: K.type });
                    b.Z.addFile({
                        file: {
                            file: e,
                            platform: y.ow.WEB,
                            origin: "unknown:activity_share",
                        },
                        channelId: a,
                        draftType: _.d.ChannelMessage,
                    });
                }
                let s = N.Z.getUploads(a, _.d.ChannelMessage);
                I.Z.sendMessage(
                    a,
                    null != O
                        ? w.ZP.parse(
                              r,
                              H.intl.formatToPlainString(H.t.jQULqL, { applicationName: "**".concat(O.name, "**") }),
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
                        location: V.dy.ACTIVITY_SHARE,
                        applicationId: l,
                        attachmentsToUpload: s,
                        onAttachmentUploadError: (e, t, n) => {
                            var i;
                            (0, C.A)({
                                file: e,
                                guildId: null != (i = null == r ? void 0 : r.getGuildId()) ? i : null,
                                analyticsLocations: [],
                                code: t,
                                reason: n,
                            });
                        },
                    },
                ),
                    b.Z.clearAll(a, _.d.ChannelMessage);
            }
            let a = F.map((e) => i(e));
            A.default.track(G.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == j ? void 0 : j.id,
                application_id: l,
                activity_session_id: null == v ? void 0 : v.compositeInstanceId,
                n_users: e,
                n_gdms: t,
                n_channels: n,
            });
            try {
                await Promise.all(a),
                    null != O &&
                        (0, p.showToast)(
                            (0, p.createToast)(
                                H.intl.formatToPlainString(H.t.jQULqL, { applicationName: O.name }),
                                p.ToastType.SUCCESS,
                            ),
                        );
            } catch (e) {
                throw ((0, p.showToast)((0, p.createToast)(H.intl.string(H.t.PanA4J), p.ToastType.FAILURE)), e);
            }
            et();
        }, [v, O, l, F, K, et, j]);
    return null == Y
        ? (0, i.jsx)(p.$jN, {})
        : (0, i.jsx)(
              c.Modal,
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
                      transitionState: m,
                      onClose: et,
                      size: "md",
                      title: H.intl.string(H.t.r9qKow),
                      input: (0, i.jsx)(p.E1j, {
                          placeholder: H.intl.string(H.t["5h0QOP"]),
                          "aria-label": H.intl.string(H.t["5h0QOP"]),
                          query: D,
                          onChange: (e) => M(e),
                          onClear: () => M(""),
                      }),
                      preview: (0, i.jsxs)(p.Kqy, {
                          direction: "vertical",
                          align: "center",
                          gap: 12,
                          children: [
                              (0, i.jsx)("img", {
                                  alt: r,
                                  src: Y,
                                  className: z.previewImage,
                              }),
                              F.length >= 10
                                  ? (0, i.jsx)(p.Text, {
                                        variant: "text-xs/normal",
                                        children: H.intl.format(H.t.mdE9iE, { maxShares: 10 }),
                                    })
                                  : null,
                          ],
                      }),
                      actions: [
                          ...(L.ZP.canCopyImage(r)
                              ? [
                                    {
                                        text: $ ? H.intl.string(H.t.t5VZ88) : H.intl.string(H.t.tvUqWn),
                                        onClick: en,
                                        variant: "secondary",
                                        disabled: $,
                                    },
                                ]
                              : []),
                          {
                              text: H.intl.string(H.t.TXNS7S),
                              onClick: ei,
                              variant: "primary",
                              disabled: F.length <= 0,
                          },
                      ],
                  },
                  h,
              )),
              (n = n =
                  {
                      children: ee.map((e, t) =>
                          (0, i.jsxs)(
                              a.Fragment,
                              {
                                  children: [
                                      0 === t ? null : (0, i.jsx)("div", { className: z.rowDivider }),
                                      (0, i.jsx)(W, {
                                          row: e,
                                          onClick: () =>
                                              (() => {
                                                  if (-1 !== F.findIndex((t) => t.id === e.item.id))
                                                      B(F.filter((t) => t.id !== e.item.id));
                                                  else {
                                                      if (F.length >= 10) return;
                                                      null != K &&
                                                          B([
                                                              ...F,
                                                              {
                                                                  id: e.item.id,
                                                                  type: e.type,
                                                              },
                                                          ]);
                                                  }
                                              })(),
                                          checked: F.some((t) => t.id === e.item.id),
                                          disabled: !F.some((t) => t.id === e.item.id) && F.length >= 10,
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
function W(e) {
    let { row: t, onClick: n, checked: a, disabled: l } = e,
        s = null,
        o = null,
        d = null;
    switch (t.type) {
        case U.bm.DM:
        case U.bm.FRIEND:
            (s = (0, i.jsx)(p.qEK, {
                size: p.EFr.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                "aria-label": t.item.username,
            })),
                (o = F.ZP.getName(t.item)),
                (d = F.ZP.getUserTag(t.item));
            break;
        case U.bm.GROUP_DM: {
            let e = (0, h.x)(t.item),
                n = (0, v.F6)(t.item, P.default, j.Z);
            (s = (0, i.jsx)(p.qEK, {
                src: e,
                "aria-label": n,
                size: p.EFr.SIZE_40,
            })),
                (o = (0, v.F6)(t.item, P.default, j.Z));
            break;
        }
        case U.bm.CHANNEL: {
            let e = t.item,
                n = O.Z.getGuild(e.guild_id);
            if (null == n) return null;
            if (((o = "#".concat((0, v.F6)(e, P.default, j.Z))), (d = n.name), null != n.icon)) {
                let t = D.ZP.getGuildIconURL({
                    id: e.guild_id,
                    icon: n.icon,
                    size: 40,
                });
                s = (0, i.jsx)(p.qEK, {
                    src: t,
                    "aria-label": o,
                    size: p.EFr.SIZE_40,
                });
            } else {
                let e = (0, M.Zg)(n.name);
                s = (0, i.jsx)("div", {
                    className: z.acronym,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(p.Text, {
                        variant: "text-md/semibold",
                        children: e,
                    }),
                });
            }
        }
    }
    return (0, i.jsxs)(p.P3F, {
        onClick: n,
        className: r()(z.rowContainer, { [z.disabled]: l }),
        children: [
            (0, i.jsxs)("div", {
                className: z.rowLeft,
                children: [
                    (0, i.jsx)("div", {
                        className: z.rowAvatar,
                        children: s,
                    }),
                    (0, i.jsxs)("div", {
                        className: z.rowNameContainer,
                        children: [
                            (0, i.jsx)(p.Text, {
                                variant: "text-md/semibold",
                                className: r()(z.rowName, { [z.disabled]: l }),
                                children: o,
                            }),
                            (0, i.jsx)(p.Text, {
                                variant: "text-xs/medium",
                                className: r()(z.rowSubName, { [z.disabled]: l }),
                                children: d,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(m.$q, {
                disabled: l,
                value: a,
                type: m.M0.INVERTED,
                displayOnly: !0,
                className: z.rowRight,
            }),
        ],
    });
}
