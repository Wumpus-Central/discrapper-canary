n.d(t, { A: () => ed });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
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
    C = n(843626),
    x = n(427209),
    S = n(93474),
    I = n(296043),
    T = n(857071),
    v = n(649963),
    N = n(815807),
    y = n(429433),
    b = n(517997),
    j = n(966597),
    R = n(85109),
    M = n(406704),
    L = n(253932),
    O = n(961350),
    D = n(580745),
    P = n(71393),
    k = n(834942),
    U = n(576705),
    w = n(954571),
    G = n(957565),
    F = n(690521),
    H = n(403362),
    B = n(628691),
    V = n(501255),
    W = n(697470),
    K = n(492841),
    z = n(143413),
    Y = n(707985),
    J = n(194085),
    q = n(519222),
    $ = n(427868),
    Z = n(547983),
    X = n(652215),
    Q = n(307731),
    ee = n(985018),
    et = n(410110);
let en = [_.Ay.getByName("100"), _.Ay.getByName("laughing"), _.Ay.getByName("sparkling_heart")].filter(H.Vq);
function ei(e) {
    e.stopPropagation();
}
function el(e) {
    let { message: t, channel: n, canReport: i, onClose: l, updatePosition: a } = e;
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
        onHeightUpdate: a,
        onClose: l,
        navId: "message-actions",
        ariaLabel: ee.intl.string(ee.t.Lv7LxN),
    });
}
let ea = l.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, p.QZ)(t.guild_id).filter(
            (e) =>
                !F.Ay.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: Q.EmojiIntention.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        a = (l.length >= 3 ? l : [...(0, f.A)(l.concat(en)).values()]).slice(0, 3),
        s = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: a.map((e) => {
            let l = s.find((t) => (0, N.i6)(t.emoji, (0, N.jq)(e))),
                a = null != l ? ee.intl.string(ee.t.wunKKA) : ee.intl.string(ee.t.XVx5BN),
                r = null == e.id ? e.uniqueName : e.name,
                o =
                    null != l
                        ? ee.intl.formatToPlainString(ee.t.vjeruO, { emojiName: r })
                        : ee.intl.formatToPlainString(ee.t.L1JQwE, { emojiName: r });
            return (0, i.jsx)(
                J.qv,
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
                                children: a,
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
                            location: v.qN.MESSAGE_HOVER_BAR,
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
function es(e) {
    let {
            channel: t,
            message: n,
            canCopy: a,
            canPin: s,
            canDelete: r,
            canReport: o,
            canEdit: m,
            canPublish: p,
            canReact: _,
            canConfigureJoin: f,
            canReply: S,
            canStartThread: I,
            canViewThread: v,
            canForward: N,
            canManageOfficialMessages: y,
            isGuildOfficial: D,
            isExpanded: F,
            showMoreUtilities: H,
            showEmojiPicker: Z,
            showMessageBookmarksActions: Q,
            isMessageBookmark: et,
            setPopout: en,
            hasDeveloperMode: ei,
            isFocused: es,
        } = (function (e) {
            let {
                    channel: t,
                    message: n,
                    showEmojiPicker: i,
                    showEmojiBurstPicker: l,
                    showMoreUtilities: a,
                    messageWindow: s,
                    setPopout: r,
                    isFocused: o,
                } = e,
                { author: u } = n,
                h = (0, d.bG)([P.A], () => P.A.getGuild(t.guild_id), [t.guild_id]),
                m = (0, d.bG)([O.default], () => O.default.getId()),
                p = (0, M.Id)(t),
                _ = (0, M.s5)(t),
                { firstMessage: f } = (0, d.bG)([E.A], () => E.A.getMessage(t.id), [t.id]),
                x = L.jW.useSetting(),
                S = L.Q_.useSetting(),
                I = (0, d.bG)([k.A], () => null == t.guild_id || k.A.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: v, canAddNewReactions: N } = (0, d.cf)(
                    [U.A],
                    () => ({
                        canAddNewReactions: I && U.A.can(X.xBc.ADD_REACTIONS, t),
                        canManageMessages: U.A.can(X.xBc.MANAGE_MESSAGES, t),
                    }),
                    [t, I],
                ),
                y = (0, b.u)(t, n),
                D = (0, M.n)(t, n),
                w = (0, M.R)(n),
                F = (0, d.bG)([T.A], () => null != t.guild_id && T.A.isLurking(t.guild_id), [t]),
                H = u.id === m,
                J = (v || n.canDeleteOwnMessage(m)) && p && !X.MRS.UNDELETABLE.has(n.type);
            n.type === X.lAJ.AUTO_MODERATION_ACTION && (J = J && v),
                t.isModeratorReportChannel() && (J = J && n.id !== f?.id && !(0, z.A)(n));
            let q = (0, B.ul)(n),
                $ = (0, K.A)(n, t),
                Z = !t.isSystemDM() && (0, W.A)(n, m) && p && !_,
                { disableReactionCreates: Q } = (0, Y.A)({
                    channel: t,
                    canChat: I,
                    renderReactions: x,
                    canAddNewReactions: N,
                    isLurking: F,
                    isActiveChannelOrUnarchivableThread: p,
                }),
                ee =
                    t.type === X.rbe.GUILD_ANNOUNCEMENT &&
                    null != h &&
                    h.features.has(X.GuildFeatures.NEWS) &&
                    (H || v) &&
                    (0, g.A)(n),
                et = t.getGuildId(),
                en =
                    null != et &&
                    n.type === X.lAJ.USER_JOIN &&
                    U.A.canWithPartialContext(X.xBc.MANAGE_GUILD, { guildId: et }),
                ei = (0, C.m)(n),
                el = (0, V.Vc)(t.guild_id, t, "MessageHoverBar"),
                ea = n.hasFlag(X.pr7.IS_GUILD_OFFICIAL),
                { enabled: es } = j.A.useConfig({ location: "message_utilities" }),
                er = (0, d.bG)([R.A], () => null != R.A.getSavedMessage(t.id, n.id)),
                eo = (0, c.A)(s),
                ec = (0, d.bG)([A.A], () => A.A.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: $,
                canEdit: Z,
                canDelete: J,
                canReport: q,
                canReply: y,
                canStartThread: D,
                canViewThread: w,
                canForward: ei,
                canManageOfficialMessages: el,
                isGuildOfficial: ea,
                canCopy: G.p5,
                hasDeveloperMode: S,
                canReact: !Q && x,
                canPublish: ee,
                canConfigureJoin: en,
                isExpanded: eo && !ec && !i && !l && !a,
                showEmojiPicker: i,
                showEmojiBurstPicker: l,
                showMoreUtilities: a,
                showMessageBookmarksActions: es,
                isMessageBookmark: er,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        er = l.useRef(null),
        eo = l.useCallback(() => {
            H ||
                w.default.track(X.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                en({ moreUtilities: !H });
        }, [H, en, n]),
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
                          a && ei
                              ? (0, i.jsx)(
                                    J.qv,
                                    {
                                        label: ee.intl.string(ee.t.zBoHlf),
                                        icon: u.L9S,
                                        onClick: (e) => (0, q.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          a
                              ? (0, i.jsx)(
                                    J.qv,
                                    { label: ee.intl.string(ee.t.WqhZss), icon: u.qYV, onClick: () => (0, q.S)(t, n) },
                                    "copy-link",
                                )
                              : null,
                          f
                              ? (0, i.jsx)(
                                    J.qv,
                                    { label: ee.intl.string(ee.t.NpHUi1), icon: u.cBN, onClick: () => (0, q.vc)(t) },
                                    "configure",
                                )
                              : null,
                          eu
                              ? (0, i.jsx)(
                                    J.qv,
                                    { label: ee.intl.string(ee.t.RpE9k7), icon: u.QTh, onClick: () => (0, q.cl)(t, n) },
                                    "mark-unread",
                                )
                              : null,
                          Q
                              ? (0, i.jsx)(
                                    J.qv,
                                    {
                                        label: et ? ee.intl.string(ee.t.LHUP9D) : ee.intl.string(ee.t["9p3D9p"]),
                                        icon: et ? u.cFy : u.c$8,
                                        onClick: () => (et ? (0, q.r7)(t, n) : (0, q.wF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          s
                              ? (0, i.jsx)(
                                    J.qv,
                                    {
                                        label: n.pinned ? ee.intl.string(ee.t["Bse+F/"]) : ee.intl.string(ee.t.CvQ18w),
                                        icon: u.tsw,
                                        onClick: (e) => (0, q.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          I && N
                              ? (0, i.jsx)(
                                    J.qv,
                                    { label: ee.intl.string(ee.t.rBIGBL), icon: u.ysw, onClick: () => (0, q.Nw)(t, n) },
                                    "thread",
                                )
                              : null,
                          S && m
                              ? (0, i.jsx)(
                                    J.qv,
                                    {
                                        label: ee.intl.string(ee.t["5IEsGx"]),
                                        icon: u.W4J,
                                        onClick: (e) => (0, q.$b)(t, n, e),
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
                                    children: [(0, i.jsx)(ea, { channel: t, message: n }), (0, i.jsx)(J.$$, {})],
                                }),
                          (0, i.jsx)($.A, {
                              togglePopout: ed,
                              renderEmojiPicker: ec,
                              shouldShow: Z,
                              isFocused: es,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            S && !m
                ? (0, i.jsx)(
                      J.qv,
                      { label: ee.intl.string(ee.t["5IEsGx"]), icon: u.W4J, onClick: (e) => (0, q.$b)(t, n, e) },
                      "reply-other",
                  )
                : null,
            m
                ? (0, i.jsx)(
                      J.qv,
                      { label: ee.intl.string(ee.t.bt75uw), icon: u.R2l, onClick: () => (0, q.u_)(t, n) },
                      "edit",
                  )
                : null,
            N
                ? (0, i.jsx)(
                      J.qv,
                      { label: ee.intl.string(ee.t.I3ltXO), icon: x.A, onClick: () => (0, q.Z4)(t, n) },
                      "forward",
                  )
                : null,
            I && !N
                ? (0, i.jsx)(
                      J.qv,
                      { label: ee.intl.string(ee.t.rBIGBL), icon: u.ysw, onClick: () => (0, q.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !I && v
                ? (0, i.jsx)(
                      J.qv,
                      { label: ee.intl.string(ee.t["39d0Wj"]), icon: u.ysw, onClick: () => (0, q.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            y
                ? (0, i.jsx)(
                      J.qv,
                      {
                          label: D ? ee.intl.string(ee.t["2km5Gf"]) : ee.intl.string(ee.t["lE/PG3"]),
                          icon: u.LV2,
                          onClick: () => h.A.patchMessageGuildOfficial(t.id, n.id, !D),
                      },
                      "guild-official",
                  )
                : null,
            p
                ? (0, i.jsx)(
                      J.qv,
                      {
                          label: eh ? ee.intl.string(ee.t["1kWJAr"]) : ee.intl.string(ee.t.MFGE51),
                          icon: u.koX,
                          onClick: () => (0, q.Le)(t, n),
                          disabled: eh,
                      },
                      "publish",
                  )
                : null,
            r && F
                ? (0, i.jsx)(
                      J.qv,
                      {
                          label: ee.intl.string(ee.t.oyYWHE),
                          icon: u.ucK,
                          onClick: (e) => (0, q.RC)(t, n, e),
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
                          let { updatePosition: l, closePopout: a } = e;
                          return (0, i.jsx)(el, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: a,
                              updatePosition: l,
                          });
                      },
                      shouldShow: H,
                      onRequestClose: eo,
                      position: "left",
                      align: "top",
                      animation: u.YNO.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: a } = t;
                          return (0, i.jsx)(
                              J.qv,
                              {
                                  ref: er,
                                  label: ee.intl.string(ee.t["UKOtz+"]),
                                  icon: u.jNK,
                                  selected: a,
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
        a = null == n.interaction || (null != n.interactionData && (0, I.Bl)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !l &&
                a &&
                (0, i.jsx)(
                    J.qv,
                    { label: ee.intl.string(ee.t["5911Lb"]), icon: u.mqY, onClick: () => (0, q.Io)(t, n) },
                    "retry",
                ),
            (0, i.jsx)(
                J.qv,
                { label: ee.intl.string(ee.t.oyYWHE), icon: u.ucK, onClick: (e) => (0, q.RC)(t, n, e) },
                "delete-usent",
            ),
        ],
    });
}
function eo(e) {
    let { type: t, emoji: n, channel: i, message: l, location: a, isBurst: s = !1 } = e;
    if (null == n) return;
    let r = (0, N.jq)(n);
    "add" === t
        ? (0, v.BB)(i.id, l.id, r, a, { burst: s })
        : (0, v.et)({ channelId: i.id, messageId: l.id, emoji: r, location: a, options: { burst: s } });
}
function ec(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(l && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? X.liQ.GUILD_CHANNEL : X.liQ.DM_CHANNEL,
                section: (0, N.sn)(e),
                object: X.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, i.jsx)(y.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i) => {
            let { emoji: l, willClose: a, isBurst: s } = i;
            eo({ type: "add", emoji: l, channel: e, message: t, location: v.qN.MESSAGE_REACTION_PICKER, isBurst: s }),
                a && (s ? o()(n, 150)() : n());
        },
        analyticsOverride: a,
        messageId: t.id,
    });
}
let ed = l.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: a } = e,
        r = (0, d.bG)([D.A], () => D.A.isEditing(t.id, n.id), [t.id, n.id]),
        o = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === X.cmJ.SEND_FAILED ? (0, i.jsx)(er, { channel: t, message: n }) : null;
        })(e),
        c = (function (e) {
            let { message: t } = e;
            return t.state !== X.cmJ.SEND_FAILED ? (0, i.jsx)(es, { ...e }) : null;
        })(e);
    return r || (null == o && null == c)
        ? null
        : (0, i.jsx)("div", {
              className: s()(e.className, { [et.kL]: !0, [et.gN]: l, [et.nK]: a }),
              onClick: ei,
              onContextMenu: ei,
              role: "group",
              "aria-label": ee.intl.string(ee.t.Lv7LxN),
              children: (0, i.jsxs)(J.Ay, { className: e.innerClassName, children: [o, c] }),
          });
});
