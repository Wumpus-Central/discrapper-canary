n.d(t, { A: () => eu }), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(111956),
    o = n.n(s),
    c = n(311283),
    u = n(311907),
    d = n(397927),
    f = n(565645),
    p = n(775602),
    h = n(812930),
    b = n(822123),
    g = n(7584),
    m = n(635222),
    A = n(969043),
    y = n(843626),
    O = n(427209),
    j = n(93474),
    v = n(296043),
    x = n(857071),
    E = n(649963),
    _ = n(815807),
    C = n(429433),
    S = n(517997),
    I = n(966597),
    N = n(85109),
    T = n(406704),
    P = n(253932),
    w = n(961350),
    R = n(580745),
    D = n(696451),
    M = n(71393),
    L = n(834942),
    G = n(576705),
    k = n(954571),
    U = n(957565),
    V = n(690521),
    F = n(403362),
    H = n(628691),
    B = n(697470),
    K = n(492841),
    W = n(143413),
    z = n(707985),
    Y = n(194085),
    q = n(519222),
    X = n(427868),
    J = n(547983),
    Q = n(652215),
    Z = n(307731),
    $ = n(985018),
    ee = n(127999);
function et(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
let en = [g.Ay.getByName("100"), g.Ay.getByName("laughing"), g.Ay.getByName("sparkling_heart")].filter(F.Vq);
function er(e) {
    e.stopPropagation();
}
function el(e) {
    let { message: t, channel: n, canReport: r, onClose: l, updatePosition: i } = e;
    return (0, J.c)({
        message: t,
        channel: n,
        textSelection: "",
        favoriteableType: null,
        favoriteableId: null,
        favoriteableName: null,
        itemHref: void 0,
        itemSrc: void 0,
        itemSafeSrc: void 0,
        itemTextContent: void 0,
        canReport: r,
        onHeightUpdate: i,
        onClose: l,
        navId: "message-actions",
        ariaLabel: $.intl.string($.t.Lv7LxN),
    });
}
let ei = l.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, b.QZ)(t.guild_id).filter(
            (e) =>
                !V.Ay.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: Z.b_.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        i = (l.length >= 3 ? l : [...(0, m.A)(l.concat(en)).values()]).slice(0, 3),
        a = n.reactions.filter((e) => e.me);
    return (0, r.jsx)(r.Fragment, {
        children: i.map((e) => {
            var l;
            let i = a.find((t) => (0, _.i6)(t.emoji, (0, _.jq)(e))),
                s = null != i ? $.intl.string($.t.wunKKA) : $.intl.string($.t.XVx5BN),
                o = null == e.id ? e.uniqueName : e.name,
                c =
                    null != i
                        ? $.intl.formatToPlainString($.t.vjeruO, { emojiName: o })
                        : $.intl.formatToPlainString($.t.L1JQwE, { emojiName: o });
            return (0, r.jsx)(
                Y.qv,
                {
                    tooltipText: (0, r.jsxs)(r.Fragment, {
                        children: [
                            (0, r.jsx)(d.Text, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: ee.zM,
                                children: ":".concat(e.name, ":"),
                            }),
                            (0, r.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: ee.zM,
                                children: s,
                            }),
                        ],
                    }),
                    label: c,
                    onClick: () =>
                        eo({
                            type: null != i ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: E.qN.MESSAGE_HOVER_BAR,
                        }),
                    children: (0, r.jsx)(f.A, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: ee.Zg,
                        canSelect: !1,
                    }),
                },
                "".concat(null != (l = e.id) ? l : 0, ":").concat(e.name),
            );
        }),
    });
});
function ea(e) {
    let {
            channel: t,
            message: n,
            canCopy: i,
            canPin: a,
            canDelete: s,
            canReport: o,
            canEdit: f,
            canPublish: b,
            canReact: g,
            canConfigureJoin: m,
            canReply: j,
            canStartThread: v,
            canViewThread: E,
            canForward: _,
            isExpanded: C,
            showMoreUtilities: R,
            showEmojiPicker: V,
            showMessageBookmarksActions: F,
            isMessageBookmark: J,
            setPopout: Z,
            hasDeveloperMode: ee,
            isFocused: en,
        } = (function (e) {
            let {
                    channel: t,
                    message: n,
                    showEmojiPicker: r,
                    showEmojiBurstPicker: l,
                    showMoreUtilities: i,
                    messageWindow: a,
                    setPopout: s,
                    isFocused: o,
                } = e,
                { author: d } = n,
                f = (0, u.bG)([M.A], () => M.A.getGuild(t.guild_id), [t.guild_id]),
                b = (0, u.bG)([w.default], () => w.default.getId()),
                g = (0, T.Id)(t),
                m = (0, T.s5)(t),
                { firstMessage: O } = (0, u.bG)([A.A], () => A.A.getMessage(t.id), [t.id]),
                j = P.jW.useSetting(),
                v = P.Q_.useSetting(),
                E = (0, u.bG)([L.A], () => null == t.guild_id || L.A.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: _, canAddNewReactions: C } = (0, u.cf)(
                    [G.A],
                    () => ({
                        canAddNewReactions: E && G.A.can(Q.xBc.ADD_REACTIONS, t),
                        canManageMessages: G.A.can(Q.xBc.MANAGE_MESSAGES, t),
                    }),
                    [t, E],
                ),
                R = (0, S.u)(t, n),
                k = (0, T.n)(t, n),
                V = (0, T.R)(n),
                F = (0, u.bG)([x.A], () => null != t.guild_id && x.A.isLurking(t.guild_id), [t]),
                Y = (0, u.bG)([D.Ay], () => null != t.guild_id && D.Ay.isCurrentUserGuest(t.guild_id), [t]),
                q = d.id === b,
                X = (_ || n.canDeleteOwnMessage(b)) && g && !Q.MRS.UNDELETABLE.has(n.type);
            n.type === Q.lAJ.AUTO_MODERATION_ACTION && (X = X && _),
                t.isModeratorReportChannel() && (X = X && n.id !== (null == O ? void 0 : O.id) && !(0, W.A)(n));
            let J = (0, H.ul)(n),
                Z = (0, K.A)(n, t),
                $ = !t.isSystemDM() && (0, B.A)(n, b) && g && !m,
                { disableReactionCreates: ee } = (0, z.A)({
                    channel: t,
                    canChat: E,
                    renderReactions: j,
                    canAddNewReactions: C,
                    isLurking: F,
                    isGuest: Y,
                    isActiveChannelOrUnarchivableThread: g,
                }),
                et =
                    t.type === Q.rbe.GUILD_ANNOUNCEMENT &&
                    null != f &&
                    f.features.has(Q.GuildFeatures.NEWS) &&
                    (q || _) &&
                    (0, h.A)(n),
                en = t.getGuildId(),
                er =
                    null != en &&
                    n.type === Q.lAJ.USER_JOIN &&
                    G.A.canWithPartialContext(Q.xBc.MANAGE_GUILD, { guildId: en }),
                el = (0, y.m)(n),
                { enabled: ei } = I.A.useExperiment({ location: "message_utilities" }),
                ea = (0, u.bG)([N.A], () => null != N.A.getSavedMessage(t.id, n.id)),
                es = (0, c.A)(a),
                eo = (0, u.bG)([p.A], () => p.A.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: Z,
                canEdit: $,
                canDelete: X,
                canReport: J,
                canReply: R,
                canStartThread: k,
                canViewThread: V,
                canForward: el,
                canCopy: U.p5,
                hasDeveloperMode: v,
                canReact: !ee && j,
                canPublish: et,
                canConfigureJoin: er,
                isExpanded: es && !eo && !r && !l && !i,
                showEmojiPicker: r,
                showEmojiBurstPicker: l,
                showMoreUtilities: i,
                showMessageBookmarksActions: ei,
                isMessageBookmark: ea,
                setPopout: s,
                isFocused: o,
            };
        })(e),
        er = l.useRef(null),
        ea = l.useCallback(() => {
            R ||
                k.default.track(Q.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                Z({ moreUtilities: !R });
        }, [R, Z, n]),
        es = l.useCallback(() => {
            Z({ emojiPicker: !V });
        }, [V, Z]),
        eo = (0, T.Id)(t),
        eu = n.hasFlag(Q.pr7.CROSSPOSTED);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            C
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          i && ee
                              ? (0, r.jsx)(
                                    Y.qv,
                                    {
                                        label: $.intl.string($.t.zBoHlf),
                                        icon: d.L9S,
                                        onClick: (e) => (0, q.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          i
                              ? (0, r.jsx)(
                                    Y.qv,
                                    {
                                        label: $.intl.string($.t.WqhZss),
                                        icon: d.qYV,
                                        onClick: () => (0, q.S)(t, n),
                                    },
                                    "copy-link",
                                )
                              : null,
                          m
                              ? (0, r.jsx)(
                                    Y.qv,
                                    {
                                        label: $.intl.string($.t.NpHUi1),
                                        icon: d.cBN,
                                        onClick: () => (0, q.vc)(t),
                                    },
                                    "configure",
                                )
                              : null,
                          eo
                              ? (0, r.jsx)(
                                    Y.qv,
                                    {
                                        label: $.intl.string($.t.RpE9k7),
                                        icon: d.QTh,
                                        onClick: () => (0, q.cl)(t, n),
                                    },
                                    "mark-unread",
                                )
                              : null,
                          F
                              ? (0, r.jsx)(
                                    Y.qv,
                                    {
                                        label: J ? $.intl.string($.t.LHUP9D) : $.intl.string($.t["9p3D9p"]),
                                        icon: J ? d.cFy : d.c$8,
                                        onClick: () => (J ? (0, q.r7)(t, n) : (0, q.wF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          a
                              ? (0, r.jsx)(
                                    Y.qv,
                                    {
                                        label: n.pinned ? $.intl.string($.t["Bse+F/"]) : $.intl.string($.t.CvQ18w),
                                        icon: d.tsw,
                                        onClick: (e) => (0, q.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          v && _
                              ? (0, r.jsx)(
                                    Y.qv,
                                    {
                                        label: $.intl.string($.t.rBIGBL),
                                        icon: d.ysw,
                                        onClick: () => (0, q.Nw)(t, n),
                                    },
                                    "thread",
                                )
                              : null,
                          j && f
                              ? (0, r.jsx)(
                                    Y.qv,
                                    {
                                        label: $.intl.string($.t["5IEsGx"]),
                                        icon: d.W4J,
                                        onClick: (e) => (0, q.$b)(t, n, e),
                                    },
                                    "reply-self",
                                )
                              : null,
                      ],
                  })
                : null,
            g
                ? (0, r.jsxs)(r.Fragment, {
                      children: [
                          C
                              ? null
                              : (0, r.jsxs)(r.Fragment, {
                                    children: [
                                        (0, r.jsx)(ei, {
                                            channel: t,
                                            message: n,
                                        }),
                                        (0, r.jsx)(Y.$$, {}),
                                    ],
                                }),
                          (0, r.jsx)(X.A, {
                              togglePopout: es,
                              renderEmojiPicker: ec,
                              shouldShow: V,
                              isFocused: en,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            j && !f
                ? (0, r.jsx)(
                      Y.qv,
                      {
                          label: $.intl.string($.t["5IEsGx"]),
                          icon: d.W4J,
                          onClick: (e) => (0, q.$b)(t, n, e),
                      },
                      "reply-other",
                  )
                : null,
            f
                ? (0, r.jsx)(
                      Y.qv,
                      {
                          label: $.intl.string($.t.bt75uw),
                          icon: d.R2l,
                          onClick: () => (0, q.u_)(t, n),
                      },
                      "edit",
                  )
                : null,
            _
                ? (0, r.jsx)(
                      Y.qv,
                      {
                          label: $.intl.string($.t.I3ltXO),
                          icon: O.A,
                          onClick: () => (0, q.Z4)(t, n),
                      },
                      "forward",
                  )
                : null,
            v && !_
                ? (0, r.jsx)(
                      Y.qv,
                      {
                          label: $.intl.string($.t.rBIGBL),
                          icon: d.ysw,
                          onClick: () => (0, q.Nw)(t, n),
                      },
                      "thread",
                  )
                : null,
            !v && E
                ? (0, r.jsx)(
                      Y.qv,
                      {
                          label: $.intl.string($.t["39d0Wj"]),
                          icon: d.ysw,
                          onClick: () => (0, q.mF)(t, n),
                      },
                      "view-thread",
                  )
                : null,
            b
                ? (0, r.jsx)(
                      Y.qv,
                      {
                          label: eu ? $.intl.string($.t["1kWJAr"]) : $.intl.string($.t.MFGE51),
                          icon: d.koX,
                          onClick: () => (0, q.Le)(t, n),
                          disabled: eu,
                      },
                      "publish",
                  )
                : null,
            s && C
                ? (0, r.jsx)(
                      Y.qv,
                      {
                          label: $.intl.string($.t.oyYWHE),
                          icon: d.ucK,
                          onClick: (e) => (0, q.RC)(t, n, e),
                          dangerous: !0,
                          separator: !C,
                      },
                      "delete",
                  )
                : null,
            C && s
                ? null
                : (0, r.jsx)(d.YNO, {
                      targetElementRef: er,
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: i } = e;
                          return (0, r.jsx)(el, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: i,
                              updatePosition: l,
                          });
                      },
                      shouldShow: R,
                      onRequestClose: ea,
                      position: "left",
                      align: "top",
                      animation: d.YNO.Animation.NONE,
                      children: (e, t) => {
                          let [n, ...l] = [e, t],
                              { onClick: i } = n,
                              a = (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      l,
                                      i = {};
                                  if ("u" > typeof Reflect && Reflect.ownKeys) {
                                      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++)
                                          (r = n[l]),
                                              !(t.indexOf(r) >= 0) &&
                                                  Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                  (i[r] = e[r]);
                                      return i;
                                  }
                                  if (
                                      ((i = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              r,
                                              l = {},
                                              i = Object.getOwnPropertyNames(e);
                                          for (r = 0; r < i.length; r++)
                                              (n = i[r]),
                                                  !(t.indexOf(n) >= 0) &&
                                                      Object.prototype.propertyIsEnumerable.call(e, n) &&
                                                      (l[n] = e[n]);
                                          return l;
                                      })(e, t)),
                                      Object.getOwnPropertySymbols)
                                  )
                                      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++)
                                          (r = n[l]),
                                              !(t.indexOf(r) >= 0) &&
                                                  Object.prototype.propertyIsEnumerable.call(e, r) &&
                                                  (i[r] = e[r]);
                                  return i;
                              })(n, ["onClick"]),
                              [{ isShown: s }] = l;
                          return (0, r.jsx)(
                              Y.qv,
                              et(
                                  {
                                      ref: er,
                                      label: $.intl.string($.t["UKOtz+"]),
                                      icon: d.jNK,
                                      selected: s,
                                      onClick: ea,
                                  },
                                  a,
                              ),
                              "more",
                          );
                      },
                  }),
        ],
    });
}
function es(e) {
    let { channel: t, message: n } = e,
        l = (0, u.bG)([j.A], () => null != j.A.getMessage(n.id), [n.id]),
        i = null == n.interaction || (null != n.interactionData && (0, v.Bl)(n.interactionData));
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !l &&
                i &&
                (0, r.jsx)(
                    Y.qv,
                    {
                        label: $.intl.string($.t["5911Lb"]),
                        icon: d.mqY,
                        onClick: () => (0, q.Io)(t, n),
                    },
                    "retry",
                ),
            (0, r.jsx)(
                Y.qv,
                {
                    label: $.intl.string($.t.oyYWHE),
                    icon: d.ucK,
                    onClick: (e) => (0, q.RC)(t, n, e),
                },
                "delete-usent",
            ),
        ],
    });
}
function eo(e) {
    let { type: t, emoji: n, channel: r, message: l, location: i, isBurst: a = !1 } = e;
    if (null == n) return;
    let s = (0, _.jq)(n);
    "add" === t
        ? (0, E.BB)(r.id, l.id, s, i, { burst: a })
        : (0, E.et)({
              channelId: r.id,
              messageId: l.id,
              emoji: s,
              location: i,
              options: { burst: a },
          });
}
function ec(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = et(
            { openPopoutType: "message_reaction_emoji_picker" },
            l && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? Q.liQ.GUILD_CHANNEL : Q.liQ.DM_CHANNEL,
                section: (0, _.sn)(e),
                object: Q.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            },
        );
    return (0, r.jsx)(C.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (r) => {
            let { emoji: l, willClose: i, isBurst: a } = r;
            eo({
                type: "add",
                emoji: l,
                channel: e,
                message: t,
                location: E.qN.MESSAGE_REACTION_PICKER,
                isBurst: a,
            }),
                i && (a ? o()(n, 150)() : n());
        },
        analyticsOverride: i,
        messageId: t.id,
    });
}
let eu = l.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: i } = e,
        s = (0, u.bG)([R.A], () => R.A.isEditing(t.id, n.id), [t.id, n.id]),
        o = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === Q.cmJ.SEND_FAILED
                ? (0, r.jsx)(es, {
                      channel: t,
                      message: n,
                  })
                : null;
        })(e),
        c = (function (e) {
            let { message: t } = e;
            return t.state !== Q.cmJ.SEND_FAILED ? (0, r.jsx)(ea, et({}, e)) : null;
        })(e);
    return s || (null == o && null == c)
        ? null
        : (0, r.jsx)("div", {
              className: a()(e.className, {
                  [ee.kL]: !0,
                  [ee.gN]: l,
                  [ee.nK]: i,
              }),
              onClick: er,
              onContextMenu: er,
              role: "group",
              "aria-label": $.intl.string($.t.Lv7LxN),
              children: (0, r.jsxs)(Y.Ay, {
                  className: e.innerClassName,
                  children: [o, c],
              }),
          });
});
