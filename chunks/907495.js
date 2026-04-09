n.d(t, { A: () => ed });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(111956),
    o = n.n(r),
    c = n(311283),
    d = n(311907),
    u = n(397927),
    h = n(843472),
    m = n(565645),
    A = n(775602),
    g = n(812930),
    p = n(822123),
    _ = n(7584),
    f = n(635222),
    E = n(969043),
    x = n(843626),
    C = n(427209),
    S = n(93474),
    I = n(296043),
    T = n(857071),
    N = n(649963),
    v = n(815807),
    y = n(429433),
    b = n(517997),
    j = n(966597),
    R = n(85109),
    M = n(406704),
    D = n(253932),
    O = n(961350),
    L = n(580745),
    P = n(71393),
    k = n(834942),
    w = n(576705),
    U = n(954571),
    G = n(957565),
    F = n(690521),
    B = n(403362),
    H = n(628691),
    V = n(697470),
    K = n(475481),
    W = n(492841),
    z = n(143413),
    q = n(707985),
    Y = n(194085),
    J = n(519222),
    $ = n(427868),
    Z = n(547983),
    X = n(652215),
    Q = n(307731),
    ee = n(985018),
    et = n(410110);
let en = [_.Ay.getByName("100"), _.Ay.getByName("laughing"), _.Ay.getByName("sparkling_heart")].filter(B.Vq);
function ei(e) {
    e.stopPropagation();
}
function el(e) {
    let { message: t, channel: n, canReport: i, onClose: l, updatePosition: s } = e;
    return (0, Z.c)({
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
        canReport: i,
        onHeightUpdate: s,
        onClose: l,
        navId: "message-actions",
        ariaLabel: ee.intl.string(ee.t.Lv7LxN),
    });
}
let es = l.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, p.QZ)(t.guild_id).filter(
            (e) =>
                !F.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: t, intention: Q.b_.REACTION, guildId: t.guild_id }),
        ),
        s = (l.length >= 3 ? l : [...(0, f.A)(l.concat(en)).values()]).slice(0, 3),
        a = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: s.map((e) => {
            let l = a.find((t) => (0, v.i6)(t.emoji, (0, v.jq)(e))),
                s = null != l ? ee.intl.string(ee.t.wunKKA) : ee.intl.string(ee.t.XVx5BN),
                r = null == e.id ? e.uniqueName : e.name,
                o =
                    null != l
                        ? ee.intl.formatToPlainString(ee.t.vjeruO, { emojiName: r })
                        : ee.intl.formatToPlainString(ee.t.L1JQwE, { emojiName: r });
            return (0, i.jsx)(
                Y.qv,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: et.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: et.zM,
                                children: s,
                            }),
                        ],
                    }),
                    label: o,
                    onClick: () =>
                        eo({
                            type: null != l ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: N.qN.MESSAGE_HOVER_BAR,
                        }),
                    children: (0, i.jsx)(m.A, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: et.Zg,
                        canSelect: !1,
                    }),
                },
                `${e.id ?? 0}:${e.name}`,
            );
        }),
    });
});
function ea(e) {
    let {
            channel: t,
            message: n,
            canCopy: s,
            canPin: a,
            canDelete: r,
            canReport: o,
            canEdit: m,
            canPublish: p,
            canReact: _,
            canConfigureJoin: f,
            canReply: S,
            canStartThread: I,
            canViewThread: N,
            canForward: v,
            canManageOfficialMessages: y,
            isGuildOfficial: L,
            isExpanded: F,
            showMoreUtilities: B,
            showEmojiPicker: Z,
            showMessageBookmarksActions: Q,
            isMessageBookmark: et,
            setPopout: en,
            hasDeveloperMode: ei,
            isFocused: ea,
        } = (function (e) {
            let {
                    channel: t,
                    message: n,
                    showEmojiPicker: i,
                    showEmojiBurstPicker: l,
                    showMoreUtilities: s,
                    messageWindow: a,
                    setPopout: r,
                    isFocused: o,
                } = e,
                { author: u } = n,
                h = (0, d.bG)([P.A], () => P.A.getGuild(t.guild_id), [t.guild_id]),
                m = (0, d.bG)([O.default], () => O.default.getId()),
                p = (0, M.Id)(t),
                _ = (0, M.s5)(t),
                { firstMessage: f } = (0, d.bG)([E.A], () => E.A.getMessage(t.id), [t.id]),
                C = D.jW.useSetting(),
                S = D.Q_.useSetting(),
                I = (0, d.bG)([k.A], () => null == t.guild_id || k.A.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: N, canAddNewReactions: v } = (0, d.cf)(
                    [w.A],
                    () => ({
                        canAddNewReactions: I && w.A.can(X.xBc.ADD_REACTIONS, t),
                        canManageMessages: w.A.can(X.xBc.MANAGE_MESSAGES, t),
                    }),
                    [t, I],
                ),
                y = (0, b.u)(t, n),
                L = (0, M.n)(t, n),
                U = (0, M.R)(n),
                F = (0, d.bG)([T.A], () => null != t.guild_id && T.A.isLurking(t.guild_id), [t]),
                B = u.id === m,
                Y = (N || n.canDeleteOwnMessage(m)) && p && !X.MRS.UNDELETABLE.has(n.type);
            n.type === X.lAJ.AUTO_MODERATION_ACTION && (Y = Y && N),
                t.isModeratorReportChannel() && (Y = Y && n.id !== f?.id && !(0, z.A)(n));
            let J = (0, H.ul)(n),
                $ = (0, W.A)(n, t),
                Z = !t.isSystemDM() && (0, V.A)(n, m) && p && !_,
                { disableReactionCreates: Q } = (0, q.A)({
                    channel: t,
                    canChat: I,
                    renderReactions: C,
                    canAddNewReactions: v,
                    isLurking: F,
                    isActiveChannelOrUnarchivableThread: p,
                }),
                ee =
                    t.type === X.rbe.GUILD_ANNOUNCEMENT &&
                    null != h &&
                    h.features.has(X.GuildFeatures.NEWS) &&
                    (B || N) &&
                    (0, g.A)(n),
                et = t.getGuildId(),
                en =
                    null != et &&
                    n.type === X.lAJ.USER_JOIN &&
                    w.A.canWithPartialContext(X.xBc.MANAGE_GUILD, { guildId: et }),
                ei = (0, x.m)(n),
                el = (0, K.Vc)(t.guild_id, t, "MessageHoverBar"),
                es = n.hasFlag(X.pr7.IS_GUILD_OFFICIAL),
                { enabled: ea } = j.A.useConfig({ location: "message_utilities" }),
                er = (0, d.bG)([R.A], () => null != R.A.getSavedMessage(t.id, n.id)),
                eo = (0, c.A)(a),
                ec = (0, d.bG)([A.A], () => A.A.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: $,
                canEdit: Z,
                canDelete: Y,
                canReport: J,
                canReply: y,
                canStartThread: L,
                canViewThread: U,
                canForward: ei,
                canManageOfficialMessages: el,
                isGuildOfficial: es,
                canCopy: G.p5,
                hasDeveloperMode: S,
                canReact: !Q && C,
                canPublish: ee,
                canConfigureJoin: en,
                isExpanded: eo && !ec && !i && !l && !s,
                showEmojiPicker: i,
                showEmojiBurstPicker: l,
                showMoreUtilities: s,
                showMessageBookmarksActions: ea,
                isMessageBookmark: er,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        er = l.useRef(null),
        eo = l.useCallback(() => {
            B ||
                U.default.track(X.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                en({ moreUtilities: !B });
        }, [B, en, n]),
        ed = l.useCallback(() => {
            en({ emojiPicker: !Z });
        }, [Z, en]),
        eu = (0, M.Id)(t),
        eh = n.hasFlag(X.pr7.CROSSPOSTED);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            F
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          s && ei
                              ? (0, i.jsx)(
                                    Y.qv,
                                    {
                                        label: ee.intl.string(ee.t.zBoHlf),
                                        icon: u.L9S,
                                        onClick: (e) => (0, J.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          s
                              ? (0, i.jsx)(
                                    Y.qv,
                                    { label: ee.intl.string(ee.t.WqhZss), icon: u.qYV, onClick: () => (0, J.S)(t, n) },
                                    "copy-link",
                                )
                              : null,
                          f
                              ? (0, i.jsx)(
                                    Y.qv,
                                    { label: ee.intl.string(ee.t.NpHUi1), icon: u.cBN, onClick: () => (0, J.vc)(t) },
                                    "configure",
                                )
                              : null,
                          eu
                              ? (0, i.jsx)(
                                    Y.qv,
                                    { label: ee.intl.string(ee.t.RpE9k7), icon: u.QTh, onClick: () => (0, J.cl)(t, n) },
                                    "mark-unread",
                                )
                              : null,
                          Q
                              ? (0, i.jsx)(
                                    Y.qv,
                                    {
                                        label: et ? ee.intl.string(ee.t.LHUP9D) : ee.intl.string(ee.t["9p3D9p"]),
                                        icon: et ? u.cFy : u.c$8,
                                        onClick: () => (et ? (0, J.r7)(t, n) : (0, J.wF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          a
                              ? (0, i.jsx)(
                                    Y.qv,
                                    {
                                        label: n.pinned ? ee.intl.string(ee.t["Bse+F/"]) : ee.intl.string(ee.t.CvQ18w),
                                        icon: u.tsw,
                                        onClick: (e) => (0, J.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          I && v
                              ? (0, i.jsx)(
                                    Y.qv,
                                    { label: ee.intl.string(ee.t.rBIGBL), icon: u.ysw, onClick: () => (0, J.Nw)(t, n) },
                                    "thread",
                                )
                              : null,
                          S && m
                              ? (0, i.jsx)(
                                    Y.qv,
                                    {
                                        label: ee.intl.string(ee.t["5IEsGx"]),
                                        icon: u.W4J,
                                        onClick: (e) => (0, J.$b)(t, n, e),
                                    },
                                    "reply-self",
                                )
                              : null,
                      ],
                  })
                : null,
            _
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          F
                              ? null
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(es, { channel: t, message: n }), (0, i.jsx)(Y.$$, {})],
                                }),
                          (0, i.jsx)($.A, {
                              togglePopout: ed,
                              renderEmojiPicker: ec,
                              shouldShow: Z,
                              isFocused: ea,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            S && !m
                ? (0, i.jsx)(
                      Y.qv,
                      { label: ee.intl.string(ee.t["5IEsGx"]), icon: u.W4J, onClick: (e) => (0, J.$b)(t, n, e) },
                      "reply-other",
                  )
                : null,
            m
                ? (0, i.jsx)(
                      Y.qv,
                      { label: ee.intl.string(ee.t.bt75uw), icon: u.R2l, onClick: () => (0, J.u_)(t, n) },
                      "edit",
                  )
                : null,
            v
                ? (0, i.jsx)(
                      Y.qv,
                      { label: ee.intl.string(ee.t.I3ltXO), icon: C.A, onClick: () => (0, J.Z4)(t, n) },
                      "forward",
                  )
                : null,
            I && !v
                ? (0, i.jsx)(
                      Y.qv,
                      { label: ee.intl.string(ee.t.rBIGBL), icon: u.ysw, onClick: () => (0, J.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !I && N
                ? (0, i.jsx)(
                      Y.qv,
                      { label: ee.intl.string(ee.t["39d0Wj"]), icon: u.ysw, onClick: () => (0, J.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            y
                ? (0, i.jsx)(
                      Y.qv,
                      {
                          label: L ? ee.intl.string(ee.t["2km5Gf"]) : ee.intl.string(ee.t["lE/PG3"]),
                          icon: u.LV2,
                          onClick: () => h.A.patchMessageGuildOfficial(t.id, n.id, !L),
                      },
                      "guild-official",
                  )
                : null,
            p
                ? (0, i.jsx)(
                      Y.qv,
                      {
                          label: eh ? ee.intl.string(ee.t["1kWJAr"]) : ee.intl.string(ee.t.MFGE51),
                          icon: u.koX,
                          onClick: () => (0, J.Le)(t, n),
                          disabled: eh,
                      },
                      "publish",
                  )
                : null,
            r && F
                ? (0, i.jsx)(
                      Y.qv,
                      {
                          label: ee.intl.string(ee.t.oyYWHE),
                          icon: u.ucK,
                          onClick: (e) => (0, J.RC)(t, n, e),
                          dangerous: !0,
                          separator: !F,
                      },
                      "delete",
                  )
                : null,
            F && r
                ? null
                : (0, i.jsx)(u.YNO, {
                      targetElementRef: er,
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: s } = e;
                          return (0, i.jsx)(el, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: s,
                              updatePosition: l,
                          });
                      },
                      shouldShow: B,
                      onRequestClose: eo,
                      position: "left",
                      align: "top",
                      animation: u.YNO.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: s } = t;
                          return (0, i.jsx)(
                              Y.qv,
                              {
                                  ref: er,
                                  label: ee.intl.string(ee.t["UKOtz+"]),
                                  icon: u.jNK,
                                  selected: s,
                                  onClick: eo,
                                  ...l,
                              },
                              "more",
                          );
                      },
                  }),
        ],
    });
}
function er(e) {
    let { channel: t, message: n } = e,
        l = (0, d.bG)([S.A], () => null != S.A.getMessage(n.id), [n.id]),
        s = null == n.interaction || (null != n.interactionData && (0, I.Bl)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !l &&
                s &&
                (0, i.jsx)(
                    Y.qv,
                    { label: ee.intl.string(ee.t["5911Lb"]), icon: u.mqY, onClick: () => (0, J.Io)(t, n) },
                    "retry",
                ),
            (0, i.jsx)(
                Y.qv,
                { label: ee.intl.string(ee.t.oyYWHE), icon: u.ucK, onClick: (e) => (0, J.RC)(t, n, e) },
                "delete-usent",
            ),
        ],
    });
}
function eo(e) {
    let { type: t, emoji: n, channel: i, message: l, location: s, isBurst: a = !1 } = e;
    if (null == n) return;
    let r = (0, v.jq)(n);
    "add" === t
        ? (0, N.BB)(i.id, l.id, r, s, { burst: a })
        : (0, N.et)({ channelId: i.id, messageId: l.id, emoji: r, location: s, options: { burst: a } });
}
function ec(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(l && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? X.liQ.GUILD_CHANNEL : X.liQ.DM_CHANNEL,
                section: (0, v.sn)(e),
                object: X.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, i.jsx)(y.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i) => {
            let { emoji: l, willClose: s, isBurst: a } = i;
            eo({ type: "add", emoji: l, channel: e, message: t, location: N.qN.MESSAGE_REACTION_PICKER, isBurst: a }),
                s && (a ? o()(n, 150)() : n());
        },
        analyticsOverride: s,
        messageId: t.id,
    });
}
let ed = l.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: s } = e,
        r = (0, d.bG)([L.A], () => L.A.isEditing(t.id, n.id), [t.id, n.id]),
        o = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === X.cmJ.SEND_FAILED ? (0, i.jsx)(er, { channel: t, message: n }) : null;
        })(e),
        c = (function (e) {
            let { message: t } = e;
            return t.state !== X.cmJ.SEND_FAILED ? (0, i.jsx)(ea, { ...e }) : null;
        })(e);
    return r || (null == o && null == c)
        ? null
        : (0, i.jsx)("div", {
              className: a()(e.className, { [et.kL]: !0, [et.gN]: l, [et.nK]: s }),
              onClick: ei,
              onContextMenu: ei,
              role: "group",
              "aria-label": ee.intl.string(ee.t.Lv7LxN),
              children: (0, i.jsxs)(Y.Ay, { className: e.innerClassName, children: [o, c] }),
          });
});
