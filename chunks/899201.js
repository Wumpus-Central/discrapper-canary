n.d(t, { default: () => V }), n(388685);
var i = n(951288),
    a = n(647438),
    r = n(120356),
    l = n.n(r),
    s = n(218887),
    o = n.n(s),
    c = n(990547),
    d = n(442837),
    u = n(82659),
    m = n(481060),
    p = n(493683),
    g = n(247272),
    f = n(904245),
    b = n(166459),
    h = n(476326),
    I = n(213609),
    y = n(835473),
    w = n(43267),
    _ = n(933557),
    S = n(58873),
    v = n(957730),
    E = n(592125),
    T = n(703558),
    O = n(430824),
    N = n(751771),
    C = n(496675),
    j = n(699516),
    x = n(117530),
    Z = n(594174),
    A = n(626135),
    P = n(768581),
    D = n(971130),
    U = n(624138),
    M = n(591759),
    k = n(51144),
    R = n(998502),
    L = n(317381),
    F = n(981631),
    G = n(245335),
    q = n(959517),
    B = n(388032),
    H = n(989201);
function V(e) {
    var t,
        n,
        { applicationId: r, mediaUrl: l, onClose: s, transitionState: w } = e,
        _ = (function (e, t) {
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
    let O = (0, d.e7)([L.ZP], () => L.ZP.getCurrentEmbeddedActivity());
    (0, I.Z)({
        type: c.ImpressionTypes.MODAL,
        name: c.ImpressionNames.ACTIVITY_SHARE_MOMENT_MODAL,
        properties: {
            application_id: r,
            activity_session_id: null == O ? void 0 : O.compositeInstanceId,
        },
    });
    let [j] = (0, y.Z)([r]),
        P = (0, d.e7)([Z.default], () => Z.default.getCurrentUser()),
        [U, k] = a.useState(""),
        [V, K] = a.useState([]),
        [Q, Y] = a.useState(null),
        [W, X] = a.useState(null),
        [J, $] = a.useState(!1);
    a.useEffect(() => {
        (async () => {
            let e = M.Z.toURLSafe(l);
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
    let ee = (0, d.Wu)([N.Z, C.Z], () =>
        N.Z.getInviteSuggestionRows().filter(
            (e) => e.type === D.bm.FRIEND || e.type === D.bm.DM || C.Z.can(F.Plq.ATTACH_FILES, e.item),
        ),
    );
    a.useEffect(() => {
        (0, g.x)({
            omitUserIds: new Set(),
            applicationId: r,
            inviteTargetType: G.Iq.EMBEDDED_APPLICATION,
        });
    }, [r]),
        a.useEffect(() => (0, g.C)(U), [U]),
        a.useEffect(() => {
            let e;
            return (
                J &&
                    (e = setTimeout(() => {
                        $(!1);
                    }, 1000)),
                () => {
                    null != e && clearTimeout(e);
                }
            );
        }, [J]);
    let et = a.useCallback(async () => {
            await s();
        }, [s]),
        en = a.useCallback(async () => {
            A.default.track(F.rMx.ACTIVITY_SHARE_MOMENT_COPY, {
                user_id: null == P ? void 0 : P.id,
                application_id: r,
                activity_session_id: null == O ? void 0 : O.compositeInstanceId,
            }),
                await R.ZP.copyImage(l),
                $(!0);
        }, [null == O ? void 0 : O.compositeInstanceId, r, l, null == P ? void 0 : P.id]),
        ei = a.useCallback(async () => {
            let e = 0,
                t = 0,
                n = 0;
            async function i(i) {
                let a;
                switch (i.type) {
                    case D.bm.DM:
                    case D.bm.FRIEND:
                        (a = await p.Z.ensurePrivateChannel(i.id)), e++;
                        break;
                    case D.bm.GROUP_DM:
                        (a = i.id), t++;
                        break;
                    case D.bm.CHANNEL:
                        (a = i.id), n++;
                        break;
                    default:
                        return;
                }
                let l = E.Z.getChannel(a);
                if (null != Q) {
                    let e = new File([Q], Q.name, { type: Q.type });
                    b.Z.addFile({
                        file: {
                            file: e,
                            platform: h.ow.WEB,
                            origin: "unknown:activity_share",
                        },
                        channelId: a,
                        draftType: T.d.ChannelMessage,
                    });
                }
                let s = x.Z.getUploads(a, T.d.ChannelMessage);
                f.Z.sendMessage(
                    a,
                    null != j
                        ? v.ZP.parse(
                              l,
                              B.intl.formatToPlainString(B.t.jQULqK, { applicationName: "**".concat(j.name, "**") }),
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
                        applicationId: r,
                        attachmentsToUpload: s,
                        onAttachmentUploadError: (e, t, n) => {
                            var i;
                            (0, S.A)({
                                file: e,
                                guildId: null != (i = null == l ? void 0 : l.getGuildId()) ? i : null,
                                analyticsLocations: [],
                                code: t,
                                reason: n,
                            });
                        },
                    },
                ),
                    b.Z.clearAll(a, T.d.ChannelMessage);
            }
            let a = V.map((e) => i(e));
            A.default.track(F.rMx.ACTIVITY_SHARE_MOMENT_SEND, {
                user_id: null == P ? void 0 : P.id,
                application_id: r,
                activity_session_id: null == O ? void 0 : O.compositeInstanceId,
                n_users: e,
                n_gdms: t,
                n_channels: n,
            });
            try {
                await Promise.all(a),
                    null != j &&
                        (0, m.showToast)(
                            (0, m.createToast)(
                                B.intl.formatToPlainString(B.t.jQULqK, { applicationName: j.name }),
                                m.ToastType.SUCCESS,
                            ),
                        );
            } catch (e) {
                throw ((0, m.showToast)((0, m.createToast)(B.intl.string(B.t.PanA4O), m.ToastType.FAILURE)), e);
            }
            et();
        }, [O, j, r, V, Q, et, P]);
    return null == W
        ? (0, i.jsx)(m.$jN, {})
        : (0, i.jsx)(
              u.Modal,
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
                      transitionState: w,
                      onClose: et,
                      size: "md",
                      title: B.intl.string(B.t.r9qKo6),
                      input: (0, i.jsx)(m.Rj2, {
                          className: H.searchBar,
                          placeholder: B.intl.string(B.t["5h0QOD"]),
                          label: B.intl.string(B.t["5h0QOD"]),
                          searchTerm: U,
                          onChange: (e) => k(e),
                          onClear: () => k(""),
                      }),
                      preview: (0, i.jsxs)(m.Kqy, {
                          direction: "vertical",
                          align: "center",
                          gap: 12,
                          children: [
                              (0, i.jsx)("img", {
                                  alt: l,
                                  src: W,
                                  className: H.previewImage,
                              }),
                              V.length >= 10
                                  ? (0, i.jsx)(m.Text, {
                                        variant: "text-xs/normal",
                                        children: B.intl.format(B.t.mdE9iI, { maxShares: 10 }),
                                    })
                                  : null,
                          ],
                      }),
                      actions: [
                          ...(R.ZP.canCopyImage(l)
                              ? [
                                    {
                                        text: J ? B.intl.string(B.t["t5VZ8/"]) : B.intl.string(B.t.tvUqWl),
                                        onClick: en,
                                        variant: "secondary",
                                        disabled: J,
                                    },
                                ]
                              : []),
                          {
                              text: B.intl.string(B.t.TXNS7e),
                              onClick: ei,
                              variant: "primary",
                              disabled: V.length <= 0,
                          },
                      ],
                  },
                  _,
              )),
              (n = n =
                  {
                      children: ee.map((e, t) =>
                          (0, i.jsxs)(
                              a.Fragment,
                              {
                                  children: [
                                      0 === t ? null : (0, i.jsx)("div", { className: H.rowDivider }),
                                      (0, i.jsx)(z, {
                                          row: e,
                                          onClick: () =>
                                              (() => {
                                                  if (-1 !== V.findIndex((t) => t.id === e.item.id))
                                                      K(V.filter((t) => t.id !== e.item.id));
                                                  else {
                                                      if (V.length >= 10) return;
                                                      null != Q &&
                                                          K([
                                                              ...V,
                                                              {
                                                                  id: e.item.id,
                                                                  type: e.type,
                                                              },
                                                          ]);
                                                  }
                                              })(),
                                          checked: V.some((t) => t.id === e.item.id),
                                          disabled: !V.some((t) => t.id === e.item.id) && V.length >= 10,
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
function z(e) {
    let { row: t, onClick: n, checked: a, disabled: r } = e,
        s = null,
        o = null,
        c = null;
    switch (t.type) {
        case D.bm.DM:
        case D.bm.FRIEND:
            (s = (0, i.jsx)(m.qEK, {
                size: m.EFr.SIZE_40,
                src: t.item.getAvatarURL(null, 128, !1),
                "aria-label": t.item.username,
            })),
                (o = k.ZP.getName(t.item)),
                (c = k.ZP.getUserTag(t.item));
            break;
        case D.bm.GROUP_DM: {
            let e = (0, w.x)(t.item),
                n = (0, _.F6)(t.item, Z.default, j.Z);
            (s = (0, i.jsx)(m.qEK, {
                src: e,
                "aria-label": n,
                size: m.EFr.SIZE_40,
            })),
                (o = (0, _.F6)(t.item, Z.default, j.Z));
            break;
        }
        case D.bm.CHANNEL: {
            let e = t.item,
                n = O.Z.getGuild(e.guild_id);
            if (null == n) return null;
            if (((o = "#".concat((0, _.F6)(e, Z.default, j.Z))), (c = n.name), null != n.icon)) {
                let t = P.ZP.getGuildIconURL({
                    id: e.guild_id,
                    icon: n.icon,
                    size: 40,
                });
                s = (0, i.jsx)(m.qEK, {
                    src: t,
                    "aria-label": o,
                    size: m.EFr.SIZE_40,
                });
            } else {
                let e = (0, U.Zg)(n.name);
                s = (0, i.jsx)("div", {
                    className: H.acronym,
                    "aria-hidden": !0,
                    children: (0, i.jsx)(m.Text, {
                        variant: "text-md/semibold",
                        children: e,
                    }),
                });
            }
        }
    }
    return (0, i.jsxs)(m.P3F, {
        onClick: n,
        className: l()(H.rowContainer, { [H.disabled]: r }),
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
                            (0, i.jsx)(m.Text, {
                                variant: "text-md/semibold",
                                className: l()(H.rowName, { [H.disabled]: r }),
                                children: o,
                            }),
                            (0, i.jsx)(m.Text, {
                                variant: "text-xs/medium",
                                className: l()(H.rowSubName, { [H.disabled]: r }),
                                children: c,
                            }),
                        ],
                    }),
                ],
            }),
            (0, i.jsx)(m.XZJ, {
                disabled: r,
                value: a,
                type: m.XZJ.Types.INVERTED,
                displayOnly: !0,
                className: H.rowRight,
            }),
        ],
    });
}
