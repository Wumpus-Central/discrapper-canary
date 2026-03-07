n.d(t, { A: () => eo });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(111956),
    o = n.n(r),
    c = n(311283),
    d = n(311907),
    u = n(397927),
    h = n(565645),
    m = n(775602),
    A = n(812930),
    g = n(822123),
    p = n(7584),
    f = n(635222),
    _ = n(969043),
    E = n(843626),
    x = n(427209),
    C = n(93474),
    S = n(296043),
    I = n(857071),
    T = n(649963),
    N = n(815807),
    y = n(429433),
    b = n(517997),
    v = n(966597),
    j = n(85109),
    R = n(406704),
    M = n(253932),
    D = n(961350),
    O = n(580745),
    L = n(71393),
    P = n(834942),
    w = n(576705),
    k = n(954571),
    U = n(957565),
    G = n(690521),
    F = n(403362),
    H = n(628691),
    B = n(697470),
    V = n(492841),
    K = n(143413),
    W = n(707985),
    z = n(194085),
    Y = n(519222),
    q = n(427868),
    J = n(547983),
    $ = n(652215),
    Z = n(307731),
    X = n(985018),
    Q = n(225049);
let ee = [p.Ay.getByName("100"), p.Ay.getByName("laughing"), p.Ay.getByName("sparkling_heart")].filter(F.Vq);
function et(e) {
    e.stopPropagation();
}
function en(e) {
    let { message: t, channel: n, canReport: i, onClose: l, updatePosition: s } = e;
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
        canReport: i,
        onHeightUpdate: s,
        onClose: l,
        navId: "message-actions",
        ariaLabel: X.intl.string(X.t.Lv7LxN),
    });
}
let ei = l.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, g.QZ)(t.guild_id).filter(
            (e) =>
                !G.Ay.isEmojiFilteredOrLocked({ emoji: e, channel: t, intention: Z.b_.REACTION, guildId: t.guild_id }),
        ),
        s = (l.length >= 3 ? l : [...(0, f.A)(l.concat(ee)).values()]).slice(0, 3),
        a = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: s.map((e) => {
            let l = a.find((t) => (0, N.i6)(t.emoji, (0, N.jq)(e))),
                s = null != l ? X.intl.string(X.t.wunKKA) : X.intl.string(X.t.XVx5BN),
                r = null == e.id ? e.uniqueName : e.name,
                o =
                    null != l
                        ? X.intl.formatToPlainString(X.t.vjeruO, { emojiName: r })
                        : X.intl.formatToPlainString(X.t.L1JQwE, { emojiName: r });
            return (0, i.jsx)(
                z.qv,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(u.Text, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: Q.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, i.jsx)(u.Text, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: Q.zM,
                                children: s,
                            }),
                        ],
                    }),
                    label: o,
                    onClick: () =>
                        ea({
                            type: null != l ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: T.qN.MESSAGE_HOVER_BAR,
                        }),
                    children: (0, i.jsx)(h.A, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: Q.Zg,
                        canSelect: !1,
                    }),
                },
                `${e.id ?? 0}:${e.name}`,
            );
        }),
    });
});
function el(e) {
    let {
            channel: t,
            message: n,
            canCopy: s,
            canPin: a,
            canDelete: r,
            canReport: o,
            canEdit: h,
            canPublish: g,
            canReact: p,
            canConfigureJoin: f,
            canReply: C,
            canStartThread: S,
            canViewThread: T,
            canForward: N,
            isExpanded: y,
            showMoreUtilities: O,
            showEmojiPicker: G,
            showMessageBookmarksActions: F,
            isMessageBookmark: J,
            setPopout: Z,
            hasDeveloperMode: Q,
            isFocused: ee,
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
                h = (0, d.bG)([L.A], () => L.A.getGuild(t.guild_id), [t.guild_id]),
                g = (0, d.bG)([D.default], () => D.default.getId()),
                p = (0, R.Id)(t),
                f = (0, R.s5)(t),
                { firstMessage: x } = (0, d.bG)([_.A], () => _.A.getMessage(t.id), [t.id]),
                C = M.jW.useSetting(),
                S = M.Q_.useSetting(),
                T = (0, d.bG)([P.A], () => null == t.guild_id || P.A.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: N, canAddNewReactions: y } = (0, d.cf)(
                    [w.A],
                    () => ({
                        canAddNewReactions: T && w.A.can($.xBc.ADD_REACTIONS, t),
                        canManageMessages: w.A.can($.xBc.MANAGE_MESSAGES, t),
                    }),
                    [t, T],
                ),
                O = (0, b.u)(t, n),
                k = (0, R.n)(t, n),
                G = (0, R.R)(n),
                F = (0, d.bG)([I.A], () => null != t.guild_id && I.A.isLurking(t.guild_id), [t]),
                z = u.id === g,
                Y = (N || n.canDeleteOwnMessage(g)) && p && !$.MRS.UNDELETABLE.has(n.type);
            n.type === $.lAJ.AUTO_MODERATION_ACTION && (Y = Y && N),
                t.isModeratorReportChannel() && (Y = Y && n.id !== x?.id && !(0, K.A)(n));
            let q = (0, H.ul)(n),
                J = (0, V.A)(n, t),
                Z = !t.isSystemDM() && (0, B.A)(n, g) && p && !f,
                { disableReactionCreates: X } = (0, W.A)({
                    channel: t,
                    canChat: T,
                    renderReactions: C,
                    canAddNewReactions: y,
                    isLurking: F,
                    isActiveChannelOrUnarchivableThread: p,
                }),
                Q =
                    t.type === $.rbe.GUILD_ANNOUNCEMENT &&
                    null != h &&
                    h.features.has($.GuildFeatures.NEWS) &&
                    (z || N) &&
                    (0, A.A)(n),
                ee = t.getGuildId(),
                et =
                    null != ee &&
                    n.type === $.lAJ.USER_JOIN &&
                    w.A.canWithPartialContext($.xBc.MANAGE_GUILD, { guildId: ee }),
                en = (0, E.m)(n),
                { enabled: ei } = v.A.useConfig({ location: "message_utilities" }),
                el = (0, d.bG)([j.A], () => null != j.A.getSavedMessage(t.id, n.id)),
                es = (0, c.A)(a),
                ea = (0, d.bG)([m.A], () => m.A.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: J,
                canEdit: Z,
                canDelete: Y,
                canReport: q,
                canReply: O,
                canStartThread: k,
                canViewThread: G,
                canForward: en,
                canCopy: U.p5,
                hasDeveloperMode: S,
                canReact: !X && C,
                canPublish: Q,
                canConfigureJoin: et,
                isExpanded: es && !ea && !i && !l && !s,
                showEmojiPicker: i,
                showEmojiBurstPicker: l,
                showMoreUtilities: s,
                showMessageBookmarksActions: ei,
                isMessageBookmark: el,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        et = l.useRef(null),
        el = l.useCallback(() => {
            O ||
                k.default.track($.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                Z({ moreUtilities: !O });
        }, [O, Z, n]),
        es = l.useCallback(() => {
            Z({ emojiPicker: !G });
        }, [G, Z]),
        ea = (0, R.Id)(t),
        eo = n.hasFlag($.pr7.CROSSPOSTED);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            y
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          s && Q
                              ? (0, i.jsx)(
                                    z.qv,
                                    {
                                        label: X.intl.string(X.t.zBoHlf),
                                        icon: u.L9S,
                                        onClick: (e) => (0, Y.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          s
                              ? (0, i.jsx)(
                                    z.qv,
                                    { label: X.intl.string(X.t.WqhZss), icon: u.qYV, onClick: () => (0, Y.S)(t, n) },
                                    "copy-link",
                                )
                              : null,
                          f
                              ? (0, i.jsx)(
                                    z.qv,
                                    { label: X.intl.string(X.t.NpHUi1), icon: u.cBN, onClick: () => (0, Y.vc)(t) },
                                    "configure",
                                )
                              : null,
                          ea
                              ? (0, i.jsx)(
                                    z.qv,
                                    { label: X.intl.string(X.t.RpE9k7), icon: u.QTh, onClick: () => (0, Y.cl)(t, n) },
                                    "mark-unread",
                                )
                              : null,
                          F
                              ? (0, i.jsx)(
                                    z.qv,
                                    {
                                        label: J ? X.intl.string(X.t.LHUP9D) : X.intl.string(X.t["9p3D9p"]),
                                        icon: J ? u.cFy : u.c$8,
                                        onClick: () => (J ? (0, Y.r7)(t, n) : (0, Y.wF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          a
                              ? (0, i.jsx)(
                                    z.qv,
                                    {
                                        label: n.pinned ? X.intl.string(X.t["Bse+F/"]) : X.intl.string(X.t.CvQ18w),
                                        icon: u.tsw,
                                        onClick: (e) => (0, Y.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          S && N
                              ? (0, i.jsx)(
                                    z.qv,
                                    { label: X.intl.string(X.t.rBIGBL), icon: u.ysw, onClick: () => (0, Y.Nw)(t, n) },
                                    "thread",
                                )
                              : null,
                          C && h
                              ? (0, i.jsx)(
                                    z.qv,
                                    {
                                        label: X.intl.string(X.t["5IEsGx"]),
                                        icon: u.W4J,
                                        onClick: (e) => (0, Y.$b)(t, n, e),
                                    },
                                    "reply-self",
                                )
                              : null,
                      ],
                  })
                : null,
            p
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          y
                              ? null
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(ei, { channel: t, message: n }), (0, i.jsx)(z.$$, {})],
                                }),
                          (0, i.jsx)(q.A, {
                              togglePopout: es,
                              renderEmojiPicker: er,
                              shouldShow: G,
                              isFocused: ee,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            C && !h
                ? (0, i.jsx)(
                      z.qv,
                      { label: X.intl.string(X.t["5IEsGx"]), icon: u.W4J, onClick: (e) => (0, Y.$b)(t, n, e) },
                      "reply-other",
                  )
                : null,
            h
                ? (0, i.jsx)(
                      z.qv,
                      { label: X.intl.string(X.t.bt75uw), icon: u.R2l, onClick: () => (0, Y.u_)(t, n) },
                      "edit",
                  )
                : null,
            N
                ? (0, i.jsx)(
                      z.qv,
                      { label: X.intl.string(X.t.I3ltXO), icon: x.A, onClick: () => (0, Y.Z4)(t, n) },
                      "forward",
                  )
                : null,
            S && !N
                ? (0, i.jsx)(
                      z.qv,
                      { label: X.intl.string(X.t.rBIGBL), icon: u.ysw, onClick: () => (0, Y.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !S && T
                ? (0, i.jsx)(
                      z.qv,
                      { label: X.intl.string(X.t["39d0Wj"]), icon: u.ysw, onClick: () => (0, Y.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            g
                ? (0, i.jsx)(
                      z.qv,
                      {
                          label: eo ? X.intl.string(X.t["1kWJAr"]) : X.intl.string(X.t.MFGE51),
                          icon: u.koX,
                          onClick: () => (0, Y.Le)(t, n),
                          disabled: eo,
                      },
                      "publish",
                  )
                : null,
            r && y
                ? (0, i.jsx)(
                      z.qv,
                      {
                          label: X.intl.string(X.t.oyYWHE),
                          icon: u.ucK,
                          onClick: (e) => (0, Y.RC)(t, n, e),
                          dangerous: !0,
                          separator: !y,
                      },
                      "delete",
                  )
                : null,
            y && r
                ? null
                : (0, i.jsx)(u.YNO, {
                      targetElementRef: et,
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: s } = e;
                          return (0, i.jsx)(en, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: s,
                              updatePosition: l,
                          });
                      },
                      shouldShow: O,
                      onRequestClose: el,
                      position: "left",
                      align: "top",
                      animation: u.YNO.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: s } = t;
                          return (0, i.jsx)(
                              z.qv,
                              {
                                  ref: et,
                                  label: X.intl.string(X.t["UKOtz+"]),
                                  icon: u.jNK,
                                  selected: s,
                                  onClick: el,
                                  ...l,
                              },
                              "more",
                          );
                      },
                  }),
        ],
    });
}
function es(e) {
    let { channel: t, message: n } = e,
        l = (0, d.bG)([C.A], () => null != C.A.getMessage(n.id), [n.id]),
        s = null == n.interaction || (null != n.interactionData && (0, S.Bl)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !l &&
                s &&
                (0, i.jsx)(
                    z.qv,
                    { label: X.intl.string(X.t["5911Lb"]), icon: u.mqY, onClick: () => (0, Y.Io)(t, n) },
                    "retry",
                ),
            (0, i.jsx)(
                z.qv,
                { label: X.intl.string(X.t.oyYWHE), icon: u.ucK, onClick: (e) => (0, Y.RC)(t, n, e) },
                "delete-usent",
            ),
        ],
    });
}
function ea(e) {
    let { type: t, emoji: n, channel: i, message: l, location: s, isBurst: a = !1 } = e;
    if (null == n) return;
    let r = (0, N.jq)(n);
    "add" === t
        ? (0, T.BB)(i.id, l.id, r, s, { burst: a })
        : (0, T.et)({ channelId: i.id, messageId: l.id, emoji: r, location: s, options: { burst: a } });
}
function er(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        s = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(l && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? $.liQ.GUILD_CHANNEL : $.liQ.DM_CHANNEL,
                section: (0, N.sn)(e),
                object: $.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, i.jsx)(y.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i) => {
            let { emoji: l, willClose: s, isBurst: a } = i;
            ea({ type: "add", emoji: l, channel: e, message: t, location: T.qN.MESSAGE_REACTION_PICKER, isBurst: a }),
                s && (a ? o()(n, 150)() : n());
        },
        analyticsOverride: s,
        messageId: t.id,
    });
}
let eo = l.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: s } = e,
        r = (0, d.bG)([O.A], () => O.A.isEditing(t.id, n.id), [t.id, n.id]),
        o = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === $.cmJ.SEND_FAILED ? (0, i.jsx)(es, { channel: t, message: n }) : null;
        })(e),
        c = (function (e) {
            let { message: t } = e;
            return t.state !== $.cmJ.SEND_FAILED ? (0, i.jsx)(el, { ...e }) : null;
        })(e);
    return r || (null == o && null == c)
        ? null
        : (0, i.jsx)("div", {
              className: a()(e.className, { [Q.kL]: !0, [Q.gN]: l, [Q.nK]: s }),
              onClick: et,
              onContextMenu: et,
              role: "group",
              "aria-label": X.intl.string(X.t.Lv7LxN),
              children: (0, i.jsxs)(z.Ay, { className: e.innerClassName, children: [o, c] }),
          });
});
