n.d(t, { default: () => B }), n(388685);
var i = n(951288),
    a = n(647438),
    r = n(120356),
    l = n.n(r),
    s = n(218887),
    o = n.n(s),
    d = n(990547),
    c = n(793030),
    u = n(442837),
    m = n(755721),
    p = n(481060),
    g = n(493683),
    f = n(247272),
    b = n(904245),
    I = n(166459),
    v = n(476326),
    _ = n(213609),
    y = n(835473),
    S = n(43267),
    h = n(933557),
    w = n(58873),
    E = n(957730),
    C = n(592125),
    O = n(703558),
    T = n(430824),
    N = n(751771),
    x = n(496675),
    j = n(699516),
    Z = n(117530),
    A = n(594174),
    D = n(626135),
    P = n(768581),
    U = n(971130),
    M = n(624138),
    k = n(591759),
    R = n(51144),
    F = n(998502),
    L = n(317381),
    G = n(981631),
    q = n(245335),
    V = n(959517),
    H = n(388032),
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
    let h = (0, u.e7)([L.ZP], () => L.ZP.getCurrentEmbeddedActivity());
    (0, _.Z)({
        type: d.ImpressionTypes.MODAL,
        name: d.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: {
            application_id: r,
            activity_session_id: null == h ? void 0 : h.compositeInstanceId,
        },
    });
    let [T] = (0, y.Z)([r]),
        j = (0, u.e7)([A.default], () => A.default.getCurrentUser()),
        [P, M] = a.useState(""),
        [R, B] = a.useState([]),
        [W, Q] = a.useState(null),
        [Y, X] = a.useState(null),
        [$, J] = a.useState(!1);
    a.useEffect(() => {
        (async () => {
            let e = k.Z.toURLSafe(l);
            if (null == e) return;
            let t = o().basename(e.pathname),
                n = await fetch(l),
                i = new File([await n.arrayBuffer()], t);
            Q(i);
            let a = new FileReader();
            (a.onload = () => {
                var e;
                return X(null == a || null == (e = a.result) ? void 0 : e.toString());
            }),
                a.readAsDataURL(i);
        })();
    }, [l, Q]);
    let ee = (0, u.Wu)([N.Z, x.Z], () =>
        N.Z.getInviteSuggestionRows().filter(
            (e) => e.type === U.bm.FRIEND || e.type === U.bm.DM || x.Z.can(G.Plq.ATTACH_FILES, e.item),
        ),
    );
    a.useEffect(() => {
        (0, f.x)({
            omitUserIds: new Set(),
            applicationId: r,
            inviteTargetType: q.Iq.EMBEDDED_APPLICATION,
        });
    }, [r]),
        a.useEffect(() => (0, f.C)(P), [P]),
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
            D.default.track(G.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
                user_id: null == j ? void 0 : j.id,
                application_id: r,
                activity_session_id: null == h ? void 0 : h.compositeInstanceId,
            }),
                await F.ZP.copyImage(l),
                J(!0);
        }, [null == h ? void 0 : h.compositeInstanceId, r, l, null == j ? void 0 : j.id]),
        ei = a.useCallback(async () => {
            let e = 0,
                t = 0,
                n = 0;
            async function i(i) {
                let a;
                switch (i.type) {
                    case U.bm.DM:
                    case U.bm.FRIEND:
                        (a = await g.Z.ensurePrivateChannel(i.id)), e++;
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
                let l = C.Z.getChannel(a);
                if (null != W) {
                    let e = new File([W], W.name, { type: W.type });
                    I.Z.addFile({
                        file: {
                            file: e,
                            platform: v.ow.WEB,
                            origin: "unknown:activity_share",
                        },
                        channelId: a,
                        draftType: O.d.ChannelMessage,
                    });
                }
                let s = Z.Z.getUploads(a, O.d.ChannelMessage);
                b.Z.sendMessage(
                    a,
                    null != T
                        ? E.ZP.parse(
                              l,
                              H.intl.formatToPlainString(H.t.jQULqK, { applicationName: "**".concat(T.name, "**") }),
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
                        applicationId: r,
                        attachmentsToUpload: s,
                        onAttachmentUploadError: (e, t, n) => {
                            var i;
                            (0, w.A)({
                                file: e,
                                guildId: null != (i = null == l ? void 0 : l.getGuildId()) ? i : null,
                                analyticsLocations: [],
                                code: t,
                                reason: n,
                            });
                        },
                    },
                ),
                    I.Z.clearAll(a, O.d.ChannelMessage);
            }
            let a = R.map((e) => i(e));
            D.default.track(G.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == j ? void 0 : j.id,
                application_id: r,
                activity_session_id: null == h ? void 0 : h.compositeInstanceId,
                n_users: e,
                n_gdms: t,
                n_channels: n,
            });
            try {
                await Promise.all(a),
                    null != T &&
                        (0, p.showToast)(
                            (0, p.createToast)(
                                H.intl.formatToPlainString(H.t.jQULqK, { applicationName: T.name }),
                                p.ToastType.SUCCESS,
                            ),
                        );
            } catch (e) {
                throw ((0, p.showToast)((0, p.createToast)(H.intl.string(H.t.PanA4O), p.ToastType.FAILURE)), e);
            }
            et();
        }, [h, T, r, R, W, et, j]);
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
                      title: H.intl.string(H.t.r9qKo6),
                      input: (0, i.jsx)(p.E1j, {
                          placeholder: H.intl.string(H.t["5h0QOD"]),
                          "aria-label": H.intl.string(H.t["5h0QOD"]),
                          query: P,
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
                                  src: Y,
                                  className: z.previewImage,
                              }),
                              R.length >= 10
                                  ? (0, i.jsx)(p.Text, {
                                        variant: "text-xs/normal",
                                        children: H.intl.format(H.t.mdE9iI, { maxShares: 10 }),
                                    })
                                  : null,
                          ],
                      }),
                      actions: [
                          ...(F.ZP.canCopyImage(l)
                              ? [
                                    {
                                        text: $ ? H.intl.string(H.t["t5VZ8/"]) : H.intl.string(H.t.tvUqWl),
                                        onClick: en,
                                        variant: "secondary",
                                        disabled: $,
                                    },
                                ]
                              : []),
                          {
                              text: H.intl.string(H.t.TXNS7e),
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
                                                      null != W &&
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
        d = null;
    switch (t.type) {
        case U.bm.DM:
        case U.bm.FRIEND:
            (s = (0, i.jsx)(p.qEK, {
                size: p.EFr.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                "aria-label": t.item.username,
            })),
                (o = R.ZP.getName(t.item)),
                (d = R.ZP.getUserTag(t.item));
            break;
        case U.bm.GROUP_DM: {
            let e = (0, S.x)(t.item),
                n = (0, h.F6)(t.item, A.default, j.Z);
            (s = (0, i.jsx)(p.qEK, {
                src: e,
                "aria-label": n,
                size: p.EFr.SIZE_40,
            })),
                (o = (0, h.F6)(t.item, A.default, j.Z));
            break;
        }
        case U.bm.CHANNEL: {
            let e = t.item,
                n = T.Z.getGuild(e.guild_id);
            if (null == n) return null;
            if (((o = "#".concat((0, h.F6)(e, A.default, j.Z))), (d = n.name), null != n.icon)) {
                let t = P.ZP.getGuildIconURL({
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
                                children: d,
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
