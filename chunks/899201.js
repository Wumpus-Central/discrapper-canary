n.d(t, { default: () => B }), n(388685);
var i = n(951288),
    a = n(647438),
    r = n(120356),
    l = n.n(r),
    s = n(218887),
    o = n.n(s),
    c = n(990547),
    d = n(793030),
    u = n(442837),
    m = n(755721),
    p = n(481060),
    f = n(493683),
    g = n(247272),
    b = n(904245),
    I = n(166459),
    y = n(476326),
    h = n(213609),
    w = n(835473),
    S = n(43267),
    _ = n(933557),
    v = n(58873),
    E = n(957730),
    O = n(592125),
    T = n(703558),
    N = n(430824),
    C = n(751771),
    j = n(496675),
    x = n(699516),
    Z = n(117530),
    A = n(594174),
    P = n(626135),
    D = n(768581),
    U = n(971130),
    M = n(624138),
    k = n(591759),
    R = n(51144),
    L = n(998502),
    F = n(317381),
    G = n(981631),
    q = n(245335),
    H = n(959517),
    V = n(388032),
    z = n(989201);
function B(e) {
    var t,
        n,
        { applicationId: r, mediaUrl: l, onClose: s, transitionState: m } = e,
        S = (function (e, t) {
            if (null == e) return {};
            var n,
                i,
                a = (function (e, t) {
                    if (null == e) return {};
                    var n,
                        i,
                        a = {},
                        r = Object.keys(e);
                    for (i = 0; i < r.length; i++) (n = r[i]), t.indexOf(n) >= 0 || (a[n] = e[n]);
                    return a;
                })(e, t);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                for (i = 0; i < r.length; i++)
                    (n = r[i]),
                        !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (a[n] = e[n]);
            }
            return a;
        })(e, ["applicationId", "mediaUrl", "onClose", "transitionState"]);
    let _ = (0, u.e7)([F.ZP], () => F.ZP.getCurrentEmbeddedActivity());
    (0, h.Z)({
        type: c.ImpressionTypes.MODAL,
        name: c.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: {
            application_id: r,
            activity_session_id: null == _ ? void 0 : _.compositeInstanceId,
        },
    });
    let [N] = (0, w.Z)([r]),
        x = (0, u.e7)([A.default], () => A.default.getCurrentUser()),
        [D, M] = a.useState(""),
        [R, B] = a.useState([]),
        [Q, Y] = a.useState(null),
        [W, X] = a.useState(null),
        [$, J] = a.useState(!1);
    a.useEffect(() => {
        (async () => {
            let e = k.Z.toURLSafe(l);
            if (null == e) return;
            let t = o().basename(e.pathname),
                n = await fetch(l),
                i = new File([await n.arrayBuffer()], t);
            Y(i);
            let a = new FileReader();
            (a.onload = () => {
                var e;
                return X(null == a || null == (e = a.result) ? void 0 : e.toString());
            }),
                a.readAsDataURL(i);
        })();
    }, [l, Y]);
    let ee = (0, u.Wu)([C.Z, j.Z], () =>
        C.Z.getInviteSuggestionRows().filter(
            (e) => e.type === U.bm.FRIEND || e.type === U.bm.DM || j.Z.can(G.Plq.ATTACH_FILES, e.item),
        ),
    );
    a.useEffect(() => {
        (0, g.x)({
            omitUserIds: new Set(),
            applicationId: r,
            inviteTargetType: q.Iq.EMBEDDED_APPLICATION,
        });
    }, [r]),
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
            P.default.track(G.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
                user_id: null == x ? void 0 : x.id,
                application_id: r,
                activity_session_id: null == _ ? void 0 : _.compositeInstanceId,
            }),
                await L.ZP.copyImage(l),
                J(!0);
        }, [null == _ ? void 0 : _.compositeInstanceId, r, l, null == x ? void 0 : x.id]),
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
                let l = O.Z.getChannel(a);
                if (null != Q) {
                    let e = new File([Q], Q.name, { type: Q.type });
                    I.Z.addFile({
                        file: {
                            file: e,
                            platform: y.ow.WEB,
                            origin: "unknown:activity_share",
                        },
                        channelId: a,
                        draftType: T.d.ChannelMessage,
                    });
                }
                let s = Z.Z.getUploads(a, T.d.ChannelMessage);
                b.Z.sendMessage(
                    a,
                    null != N
                        ? E.ZP.parse(
                              l,
                              V.intl.formatToPlainString(V.t.jQULqK, { applicationName: "**".concat(N.name, "**") }),
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
                        location: H.dy.ACTIVITY_SHARE,
                        applicationId: r,
                        attachmentsToUpload: s,
                        onAttachmentUploadError: (e, t, n) => {
                            var i;
                            (0, v.A)({
                                file: e,
                                guildId: null != (i = null == l ? void 0 : l.getGuildId()) ? i : null,
                                analyticsLocations: [],
                                code: t,
                                reason: n,
                            });
                        },
                    },
                ),
                    I.Z.clearAll(a, T.d.ChannelMessage);
            }
            let a = R.map((e) => i(e));
            P.default.track(G.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == x ? void 0 : x.id,
                application_id: r,
                activity_session_id: null == _ ? void 0 : _.compositeInstanceId,
                n_users: e,
                n_gdms: t,
                n_channels: n,
            });
            try {
                await Promise.all(a),
                    null != N &&
                        (0, p.showToast)(
                            (0, p.createToast)(
                                V.intl.formatToPlainString(V.t.jQULqK, { applicationName: N.name }),
                                p.ToastType.SUCCESS,
                            ),
                        );
            } catch (e) {
                throw ((0, p.showToast)((0, p.createToast)(V.intl.string(V.t.PanA4O), p.ToastType.FAILURE)), e);
            }
            et();
        }, [_, N, r, R, Q, et, x]);
    return null == W
        ? (0, i.jsx)(p.$jN, {})
        : (0, i.jsx)(
              d.Modal,
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
                      title: V.intl.string(V.t.r9qKo6),
                      input: (0, i.jsx)(p.E1j, {
                          placeholder: V.intl.string(V.t["5h0QOD"]),
                          "aria-label": V.intl.string(V.t["5h0QOD"]),
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
                                  alt: l,
                                  src: W,
                                  className: z.previewImage,
                              }),
                              R.length >= 10
                                  ? (0, i.jsx)(p.Text, {
                                        variant: "text-xs/normal",
                                        children: V.intl.format(V.t.mdE9iI, { maxShares: 10 }),
                                    })
                                  : null,
                          ],
                      }),
                      actions: [
                          ...(L.ZP.canCopyImage(l)
                              ? [
                                    {
                                        text: $ ? V.intl.string(V.t["t5VZ8/"]) : V.intl.string(V.t.tvUqWl),
                                        onClick: en,
                                        variant: "secondary",
                                        disabled: $,
                                    },
                                ]
                              : []),
                          {
                              text: V.intl.string(V.t.TXNS7e),
                              onClick: ei,
                              variant: "primary",
                              disabled: R.length <= 0,
                          },
                      ],
                  },
                  S,
              )),
              (n = n =
                  {
                      children: ee.map((e, t) =>
                          (0, i.jsxs)(
                              a.Fragment,
                              {
                                  children: [
                                      0 === t ? null : (0, i.jsx)("div", { className: z.rowDivider }),
                                      (0, i.jsx)(K, {
                                          row: e,
                                          onClick: () =>
                                              (() => {
                                                  if (-1 !== R.findIndex((t) => t.id === e.item.id))
                                                      B(R.filter((t) => t.id !== e.item.id));
                                                  else {
                                                      if (R.length >= 10) return;
                                                      null != Q &&
                                                          B([
                                                              ...R,
                                                              {
                                                                  id: e.item.id,
                                                                  type: e.type,
                                                              },
                                                          ]);
                                                  }
                                              })(),
                                          checked: R.some((t) => t.id === e.item.id),
                                          disabled: !R.some((t) => t.id === e.item.id) && R.length >= 10,
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
function K(e) {
    let { row: t, onClick: n, checked: a, disabled: r } = e,
        s = null,
        o = null,
        c = null;
    switch (t.type) {
        case U.bm.DM:
        case U.bm.FRIEND:
            (s = (0, i.jsx)(p.qEK, {
                size: p.EFr.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                "aria-label": t.item.username,
            })),
                (o = R.ZP.getName(t.item)),
                (c = R.ZP.getUserTag(t.item));
            break;
        case U.bm.GROUP_DM: {
            let e = (0, S.x)(t.item),
                n = (0, _.F6)(t.item, A.default, x.Z);
            (s = (0, i.jsx)(p.qEK, {
                src: e,
                "aria-label": n,
                size: p.EFr.SIZE_40,
            })),
                (o = (0, _.F6)(t.item, A.default, x.Z));
            break;
        }
        case U.bm.CHANNEL: {
            let e = t.item,
                n = N.Z.getGuild(e.guild_id);
            if (null == n) return null;
            if (((o = "#".concat((0, _.F6)(e, A.default, x.Z))), (c = n.name), null != n.icon)) {
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
        className: l()(z.rowContainer, { [z.disabled]: r }),
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
                                className: l()(z.rowName, { [z.disabled]: r }),
                                children: o,
                            }),
                            (0, i.jsx)(p.Text, {
                                variant: "text-xs/medium",
                                className: l()(z.rowSubName, { [z.disabled]: r }),
                                children: c,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(m.$q, {
                disabled: r,
                value: a,
                type: m.M0.INVERTED,
                displayOnly: !0,
                className: z.rowRight,
            }),
        ],
    });
}
