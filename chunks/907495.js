n.d(t, { A: () => ey });
var i = n(627968),
    l = n(64700),
    a = n(503698),
    s = n.n(a),
    r = n(111956),
    o = n.n(r),
    c = n(311283),
    d = n(311907),
    u = n(834730),
    h = n(473935),
    m = n(173936),
    A = n(290136),
    g = n(666492),
    _ = n(606096),
    p = n(997146),
    f = n(366605),
    E = n(163328),
    C = n(110384),
    x = n(22231),
    S = n(563119),
    I = n(581925),
    v = n(778492),
    N = n(241326),
    T = n(265872),
    y = n(365199),
    b = n(417270),
    j = n(843472),
    R = n(565645),
    M = n(775602),
    L = n(812930),
    D = n(822123),
    P = n(7584),
    O = n(635222),
    w = n(969043),
    U = n(843626),
    k = n(427209),
    G = n(93474),
    F = n(296043),
    H = n(857071),
    B = n(649963),
    V = n(815807),
    W = n(429433),
    z = n(517997),
    K = n(966597),
    Y = n(85109),
    q = n(406704),
    J = n(253932),
    $ = n(961350),
    Z = n(580745),
    X = n(71393),
    Q = n(834942),
    ee = n(576705),
    et = n(954571),
    en = n(957565),
    ei = n(690521),
    el = n(403362),
    ea = n(628691),
    es = n(521427),
    er = n(697470),
    eo = n(492841),
    ec = n(143413),
    ed = n(707985),
    eu = n(194085),
    eh = n(519222),
    em = n(427868),
    eA = n(547983),
    eg = n(652215),
    e_ = n(307731),
    ep = n(985018),
    ef = n(15393);
let eE = [P.Ay.getByName("100"), P.Ay.getByName("laughing"), P.Ay.getByName("sparkling_heart")].filter(el.Vq);
function eC(e) {
    e.stopPropagation();
}
function ex(e) {
    let { message: t, channel: n, canReport: i, onClose: l, updatePosition: a } = e;
    return (0, eA.c)({
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
        ariaLabel: ep.intl.string(ep.t.Lv7LxN),
    });
}
let eS = l.memo(function (e) {
    let { channel: t, message: n } = e,
        l = (0, D.QZ)(t.guild_id).filter(
            (e) =>
                !ei.Ay.isEmojiFilteredOrLocked({
                    emoji: e,
                    channel: t,
                    intention: e_.EmojiIntention.REACTION,
                    guildId: t.guild_id,
                }),
        ),
        a = (l.length >= 3 ? l : [...(0, O.A)(l.concat(eE)).values()]).slice(0, 3),
        s = n.reactions.filter((e) => e.me);
    return (0, i.jsx)(i.Fragment, {
        children: a.map((e) => {
            let l = s.find((t) => (0, V.i6)(t.emoji, (0, V.jq)(e))),
                a = null != l ? ep.intl.string(ep.t.wunKKA) : ep.intl.string(ep.t.XVx5BN),
                r = null == e.id ? e.uniqueName : e.name,
                o =
                    null != l
                        ? ep.intl.formatToPlainString(ep.t.vjeruO, { emojiName: r })
                        : ep.intl.formatToPlainString(ep.t.L1JQwE, { emojiName: r });
            return (0, i.jsx)(
                eu.qv,
                {
                    tooltipText: (0, i.jsxs)(i.Fragment, {
                        children: [
                            (0, i.jsx)(u.E, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                className: ef.zM,
                                children: `:${e.name}:`,
                            }),
                            (0, i.jsx)(u.E, {
                                variant: "text-xs/normal",
                                color: "text-default",
                                className: ef.zM,
                                children: a,
                            }),
                        ],
                    }),
                    label: o,
                    onClick: () =>
                        eN({
                            type: null != l ? "remove" : "add",
                            emoji: e,
                            channel: t,
                            message: n,
                            location: B.qN.MESSAGE_HOVER_BAR,
                        }),
                    children: (0, i.jsx)(R.A, {
                        emojiId: e.id,
                        emojiName: null == e.id ? e.surrogates : e.name,
                        animated: e.animated,
                        size: "reaction",
                        alt: "",
                        className: ef.Zg,
                        canSelect: !1,
                    }),
                },
                `${e.id ?? 0}:${e.name}`,
            );
        }),
    });
});
function eI(e) {
    let {
            channel: t,
            message: n,
            canCopy: a,
            canPin: s,
            canDelete: r,
            canReport: o,
            canEdit: u,
            canPublish: b,
            canReact: R,
            canConfigureJoin: D,
            canReply: P,
            canStartThread: O,
            canViewThread: G,
            canForward: F,
            canManageOfficialMessages: B,
            isGuildOfficial: V,
            isExpanded: W,
            showMoreUtilities: Z,
            showEmojiPicker: ei,
            showMessageBookmarksActions: el,
            isMessageBookmark: eA,
            setPopout: e_,
            hasDeveloperMode: ef,
            isFocused: eE,
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
                h = (0, d.bG)([X.A], () => X.A.getGuild(t.guild_id), [t.guild_id]),
                m = (0, d.bG)([$.default], () => $.default.getId()),
                A = (0, q.Id)(t),
                g = (0, q.s5)(t),
                { firstMessage: _ } = (0, d.bG)([w.A], () => w.A.getMessage(t.id), [t.id]),
                p = J.jW.useSetting(),
                f = J.Q_.useSetting(),
                E = (0, d.bG)([Q.A], () => null == t.guild_id || Q.A.canChatInGuild(t.guild_id), [t]),
                { canManageMessages: C, canAddNewReactions: x } = (0, d.cf)(
                    [ee.A],
                    () => ({
                        canAddNewReactions: E && ee.A.can(eg.xBc.ADD_REACTIONS, t),
                        canManageMessages: ee.A.can(eg.xBc.MANAGE_MESSAGES, t),
                    }),
                    [t, E],
                ),
                S = (0, z.u)(t, n),
                I = (0, q.n)(t, n),
                v = (0, q.R)(n),
                N = (0, d.bG)([H.A], () => null != t.guild_id && H.A.isLurking(t.guild_id), [t]),
                T = u.id === m,
                y = (C || n.canDeleteOwnMessage(m)) && A && !eg.MRS.UNDELETABLE.has(n.type);
            n.type === eg.lAJ.AUTO_MODERATION_ACTION && (y = y && C),
                t.isModeratorReportChannel() && (y = y && n.id !== _?.id && !(0, ec.A)(n));
            let b = (0, ea.ul)(n),
                j = (0, eo.A)(n, t),
                R = !t.isSystemDM() && (0, er.A)(n, m) && A && !g,
                { disableReactionCreates: D } = (0, ed.A)({
                    channel: t,
                    canChat: E,
                    renderReactions: p,
                    canAddNewReactions: x,
                    isLurking: N,
                    isActiveChannelOrUnarchivableThread: A,
                }),
                P =
                    t.type === eg.rbe.GUILD_ANNOUNCEMENT &&
                    null != h &&
                    h.features.has(eg.GuildFeatures.NEWS) &&
                    (T || C) &&
                    (0, L.A)(n),
                O = t.getGuildId(),
                k =
                    null != O &&
                    n.type === eg.lAJ.USER_JOIN &&
                    ee.A.canWithPartialContext(eg.xBc.MANAGE_GUILD, { guildId: O }),
                G = (0, U.m)(n),
                F = (0, es.Vc)(t.guild_id, t, "MessageHoverBar"),
                B = n.hasFlag(eg.pr7.IS_GUILD_OFFICIAL),
                { enabled: V } = K.A.useConfig({ location: "message_utilities" }),
                W = (0, d.bG)([Y.A], () => null != Y.A.getSavedMessage(t.id, n.id)),
                Z = (0, c.A)(s),
                et = (0, d.bG)([M.A], () => M.A.keyboardModeEnabled);
            return {
                channel: t,
                message: n,
                canPin: j,
                canEdit: R,
                canDelete: y,
                canReport: b,
                canReply: S,
                canStartThread: I,
                canViewThread: v,
                canForward: G,
                canManageOfficialMessages: F,
                isGuildOfficial: B,
                canCopy: en.p5,
                hasDeveloperMode: f,
                canReact: !D && p,
                canPublish: P,
                canConfigureJoin: k,
                isExpanded: Z && !et && !i && !l && !a,
                showEmojiPicker: i,
                showEmojiBurstPicker: l,
                showMoreUtilities: a,
                showMessageBookmarksActions: V,
                isMessageBookmark: W,
                setPopout: r,
                isFocused: o,
            };
        })(e),
        eC = l.useRef(null),
        eI = l.useCallback(() => {
            Z ||
                et.default.track(eg.HAw.MESSAGE_POPOUT_MENU_OPENED_DESKTOP, {
                    message_id: n.id,
                    channel: n.channel_id,
                    location: "expanding_buttons",
                }),
                e_({ moreUtilities: !Z });
        }, [Z, e_, n]),
        ev = l.useCallback(() => {
            e_({ emojiPicker: !ei });
        }, [ei, e_]),
        eN = (0, q.Id)(t),
        ey = n.hasFlag(eg.pr7.CROSSPOSTED);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            W
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          a && ef
                              ? (0, i.jsx)(
                                    eu.qv,
                                    {
                                        label: ep.intl.string(ep.t.zBoHlf),
                                        icon: h.L,
                                        onClick: (e) => (0, eh.DT)(t, n, e),
                                    },
                                    "copy-id",
                                )
                              : null,
                          a
                              ? (0, i.jsx)(
                                    eu.qv,
                                    { label: ep.intl.string(ep.t.WqhZss), icon: m.q, onClick: () => (0, eh.S)(t, n) },
                                    "copy-link",
                                )
                              : null,
                          D
                              ? (0, i.jsx)(
                                    eu.qv,
                                    { label: ep.intl.string(ep.t.NpHUi1), icon: A.c, onClick: () => (0, eh.vc)(t) },
                                    "configure",
                                )
                              : null,
                          eN
                              ? (0, i.jsx)(
                                    eu.qv,
                                    { label: ep.intl.string(ep.t.RpE9k7), icon: g.Q, onClick: () => (0, eh.cl)(t, n) },
                                    "mark-unread",
                                )
                              : null,
                          el
                              ? (0, i.jsx)(
                                    eu.qv,
                                    {
                                        label: eA ? ep.intl.string(ep.t.LHUP9D) : ep.intl.string(ep.t["9p3D9p"]),
                                        icon: eA ? _.c : p.c,
                                        onClick: () => (eA ? (0, eh.r7)(t, n) : (0, eh.wF)(t, n)),
                                    },
                                    "bookmark",
                                )
                              : null,
                          s
                              ? (0, i.jsx)(
                                    eu.qv,
                                    {
                                        label: n.pinned ? ep.intl.string(ep.t["Bse+F/"]) : ep.intl.string(ep.t.CvQ18w),
                                        icon: f.t,
                                        onClick: (e) => (0, eh.rS)(t, n, e),
                                    },
                                    "pin",
                                )
                              : null,
                          O && F
                              ? (0, i.jsx)(
                                    eu.qv,
                                    { label: ep.intl.string(ep.t.rBIGBL), icon: E.y, onClick: () => (0, eh.Nw)(t, n) },
                                    "thread",
                                )
                              : null,
                          P && u
                              ? (0, i.jsx)(
                                    eu.qv,
                                    {
                                        label: ep.intl.string(ep.t["5IEsGx"]),
                                        icon: C.W,
                                        onClick: (e) => (0, eh.$b)(t, n, e),
                                    },
                                    "reply-self",
                                )
                              : null,
                      ],
                  })
                : null,
            R
                ? (0, i.jsxs)(i.Fragment, {
                      children: [
                          W
                              ? null
                              : (0, i.jsxs)(i.Fragment, {
                                    children: [(0, i.jsx)(eS, { channel: t, message: n }), (0, i.jsx)(eu.$$, {})],
                                }),
                          (0, i.jsx)(em.A, {
                              togglePopout: ev,
                              renderEmojiPicker: eT,
                              shouldShow: ei,
                              isFocused: eE,
                              channel: t,
                              message: n,
                          }),
                      ],
                  })
                : null,
            P && !u
                ? (0, i.jsx)(
                      eu.qv,
                      { label: ep.intl.string(ep.t["5IEsGx"]), icon: C.W, onClick: (e) => (0, eh.$b)(t, n, e) },
                      "reply-other",
                  )
                : null,
            u
                ? (0, i.jsx)(
                      eu.qv,
                      { label: ep.intl.string(ep.t.bt75uw), icon: x.R, onClick: () => (0, eh.u_)(t, n) },
                      "edit",
                  )
                : null,
            F
                ? (0, i.jsx)(
                      eu.qv,
                      { label: ep.intl.string(ep.t.I3ltXO), icon: k.A, onClick: () => (0, eh.Z4)(t, n) },
                      "forward",
                  )
                : null,
            O && !F
                ? (0, i.jsx)(
                      eu.qv,
                      { label: ep.intl.string(ep.t.rBIGBL), icon: E.y, onClick: () => (0, eh.Nw)(t, n) },
                      "thread",
                  )
                : null,
            !O && G
                ? (0, i.jsx)(
                      eu.qv,
                      { label: ep.intl.string(ep.t["39d0Wj"]), icon: E.y, onClick: () => (0, eh.mF)(t, n) },
                      "view-thread",
                  )
                : null,
            B
                ? (0, i.jsx)(
                      eu.qv,
                      {
                          label: V ? ep.intl.string(ep.t["2km5Gf"]) : ep.intl.string(ep.t["lE/PG3"]),
                          icon: V ? S.$ : I.L,
                          onClick: () => j.A.patchMessageGuildOfficial(t.id, n.id, !V),
                      },
                      "guild-official",
                  )
                : null,
            b
                ? (0, i.jsx)(
                      eu.qv,
                      {
                          label: ey ? ep.intl.string(ep.t["1kWJAr"]) : ep.intl.string(ep.t.MFGE51),
                          icon: v.k,
                          onClick: () => (0, eh.Le)(t, n),
                          disabled: ey,
                      },
                      "publish",
                  )
                : null,
            r && W
                ? (0, i.jsx)(
                      eu.qv,
                      {
                          label: ep.intl.string(ep.t.oyYWHE),
                          icon: N.u,
                          onClick: (e) => (0, eh.RC)(t, n, e),
                          dangerous: !0,
                          separator: !W,
                      },
                      "delete",
                  )
                : null,
            W && r
                ? null
                : (0, i.jsx)(T.Y, {
                      targetElementRef: eC,
                      renderPopout: (e) => {
                          let { updatePosition: l, closePopout: a } = e;
                          return (0, i.jsx)(ex, {
                              channel: t,
                              message: n,
                              canReport: o,
                              onClose: a,
                              updatePosition: l,
                          });
                      },
                      shouldShow: Z,
                      onRequestClose: eI,
                      position: "left",
                      align: "top",
                      animation: T.Y.Animation.NONE,
                      children: (e, t) => {
                          let { onClick: n, ...l } = e,
                              { isShown: a } = t;
                          return (0, i.jsx)(
                              eu.qv,
                              {
                                  ref: eC,
                                  label: ep.intl.string(ep.t["UKOtz+"]),
                                  icon: y.j,
                                  selected: a,
                                  onClick: eI,
                                  ...l,
                              },
                              "more",
                          );
                      },
                  }),
        ],
    });
}
function ev(e) {
    let { channel: t, message: n } = e,
        l = (0, d.bG)([G.A], () => null != G.A.getMessage(n.id), [n.id]),
        a = null == n.interaction || (null != n.interactionData && (0, F.Bl)(n.interactionData));
    return (0, i.jsxs)(i.Fragment, {
        children: [
            !l &&
                a &&
                (0, i.jsx)(
                    eu.qv,
                    { label: ep.intl.string(ep.t["5911Lb"]), icon: b.m, onClick: () => (0, eh.Io)(t, n) },
                    "retry",
                ),
            (0, i.jsx)(
                eu.qv,
                { label: ep.intl.string(ep.t.oyYWHE), icon: N.u, onClick: (e) => (0, eh.RC)(t, n, e) },
                "delete-usent",
            ),
        ],
    });
}
function eN(e) {
    let { type: t, emoji: n, channel: i, message: l, location: a, isBurst: s = !1 } = e;
    if (null == n) return;
    let r = (0, V.jq)(n);
    "add" === t
        ? (0, B.BB)(i.id, l.id, r, a, { burst: s })
        : (0, B.et)({ channelId: i.id, messageId: l.id, emoji: r, location: a, options: { burst: s } });
}
function eT(e, t, n) {
    let l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = {
            openPopoutType: "message_reaction_emoji_picker",
            ...(l && {
                openPopoutType: "message_super_reaction_emoji_picker",
                page: null != e.getGuildId() ? eg.liQ.GUILD_CHANNEL : eg.liQ.DM_CHANNEL,
                section: (0, V.sn)(e),
                object: eg.ZSU.EMOJI_REACTION_PICKER_POPOUT,
            }),
        };
    return (0, i.jsx)(W.C, {
        channel: e,
        closePopout: n,
        onSelectEmoji: (i) => {
            let { emoji: l, willClose: a, isBurst: s } = i;
            eN({ type: "add", emoji: l, channel: e, message: t, location: B.qN.MESSAGE_REACTION_PICKER, isBurst: s }),
                a && (s ? o()(n, 150)() : n());
        },
        analyticsOverride: a,
        messageId: t.id,
    });
}
let ey = l.memo(function (e) {
    let { channel: t, message: n, isHeader: l, isReply: a } = e,
        r = (0, d.bG)([Z.A], () => Z.A.isEditing(t.id, n.id), [t.id, n.id]),
        o = (function (e) {
            let { channel: t, message: n } = e;
            return n.state === eg.cmJ.SEND_FAILED ? (0, i.jsx)(ev, { channel: t, message: n }) : null;
        })(e),
        c = (function (e) {
            let { message: t } = e;
            return t.state !== eg.cmJ.SEND_FAILED ? (0, i.jsx)(eI, { ...e }) : null;
        })(e);
    return r || (null == o && null == c)
        ? null
        : (0, i.jsx)("div", {
              className: s()(e.className, { [ef.kL]: !0, [ef.gN]: l, [ef.nK]: a }),
              onClick: eC,
              onContextMenu: eC,
              role: "group",
              "aria-label": ep.intl.string(ep.t.Lv7LxN),
              children: (0, i.jsxs)(eu.Ay, { className: e.innerClassName, children: [o, c] }),
          });
});
