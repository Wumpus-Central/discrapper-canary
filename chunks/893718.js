n.d(t, {
    O1: () => eO,
    Sg: () => eb,
    TE: () => eC,
    ZP: () => eL,
    ae: () => ey,
    bL: () => eE,
    hJ: () => eI,
    iV: () => eR,
    jx: () => eS,
    oR: () => eN,
    qz: () => eA,
    x2: () => eT,
}),
    n(388685),
    n(415506),
    n(781311);
var r = n(255367),
    i = n(73800),
    o = n(120356),
    a = n.n(o),
    s = n(836560),
    l = n(512722),
    c = n.n(l),
    u = n(94171),
    d = n(873546),
    f = n(149765),
    _ = n(442837),
    p = n(481060),
    h = n(430742),
    m = n(393238),
    g = n(607070),
    E = n(100527),
    b = n(906732),
    y = n(989573),
    O = n(541099),
    v = n(998698),
    I = n(271668),
    T = n(326133),
    S = n(106824),
    A = n(570220),
    N = n(28546),
    C = n(805680),
    R = n(368844),
    P = n(41776),
    w = n(849522),
    D = n(780291),
    L = n(328908),
    x = n(913663),
    M = n(268350),
    j = n(378233),
    k = n(665906),
    U = n(695346),
    G = n(271383),
    B = n(496675),
    Z = n(944486),
    F = n(398327),
    V = n(117530),
    H = n(594174),
    Y = n(626135),
    W = n(459273),
    K = n(700785),
    z = n(358085),
    q = n(746877),
    X = n(541716),
    Q = n(667829),
    J = n(562267),
    $ = n(376918),
    ee = n(760196),
    et = n(258696),
    en = n(303628),
    er = n(472243),
    ei = n(872635),
    eo = n(887490),
    ea = n(676108),
    es = n(981631),
    el = n(761652),
    ec = n(957825),
    eu = n(564355);
function ed(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function ef(e) {
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
                ed(e, t, n[t]);
            });
    }
    return e;
}
function e_(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function ep(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : e_(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eh = 450;
function em(e) {
    return e !== Z.Z.getChannelId();
}
function eg(e, t) {
    var n, r;
    return null != (r = e && (null == (n = t.submit) ? void 0 : n.clearOnSubmit)) && r;
}
function eE(e, t, o, a, s) {
    let [l, c] = i.useState(!1),
        u = i.useCallback(
            (i, d, f, _, m) => {
                var g, E, b;
                if (l) return;
                c(!0);
                let y =
                        null !=
                        (E = null == (g = x.Z.getStickerPreview(s, t.drafts.type)) ? void 0 : g.map((e) => e.id))
                            ? E
                            : [],
                    O = null != (b = V.Z.getUploads(s, t.drafts.type)) ? b : [],
                    v = (0, L.q5)(s);
                if (null == d && !_ && !m && (0, R.CB)(O, s)) {
                    c(!1),
                        (0, p.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e("66549"), n.e("22173"), n.e("39810")]).then(
                                n.bind(n, 273602),
                            );
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    ep(ef({}, t), {
                                        threadId: s,
                                        attachments: O,
                                        sendMessage: () => u(i, void 0, void 0, void 0, !0),
                                    }),
                                );
                        });
                    return;
                }
                e({
                    value: i,
                    uploads: O,
                    stickers: y,
                    confettiPotionEmoji: v,
                    command: d,
                    commandOptionValues: f,
                    isGif: _,
                }).then((e) => {
                    var n, r, i;
                    let { shouldClear: l, shouldRefocus: u } = e,
                        d = eg(l, t),
                        f = null != o.current;
                    d &&
                        (em(s)
                            ? h.Z.saveDraft(s, "", t.drafts.type)
                            : f && (null == (r = o.current) || r.clearValue(), null == (i = a.current) || i.hide())),
                        f && (c(!1), (0, N._Q)(), u && (null == (n = o.current) || n.focus()));
                });
            },
            [o, a, e, l, t, s],
        );
    return {
        submitting: l,
        submit: u,
        handleSubmit: i.useCallback(
            (e) => {
                var t;
                null == o || null == (t = o.current) || t.submit(e);
            },
            [o],
        ),
    };
}
function eb(e, t, n) {
    return i.useCallback(
        (r) => {
            var i, o;
            t === X.Ie.CREATE_FORUM_POST || t === X.Ie.CREATE_ANNOUNCEMENT_POST
                ? null == (o = n.current) || o.insertGIF(r)
                : e(r.url, void 0, void 0, !0),
                (0, N._Q)(),
                null == (i = n.current) || i.focus();
        },
        [n, e, t],
    );
}
function ey(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: r } = t,
                i = e.current;
            null != n &&
                null != i &&
                i.insertEmoji({
                    emoji: n,
                    willClose: r,
                }),
                r && (0, N._Q)();
        },
        [e],
    );
}
function eO(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: o, chatInputType: a, submit: s } = e,
        { analyticsLocations: l } = (0, b.ZP)();
    return i.useCallback(
        (e, i) => {
            var c, u;
            n ||
                (a === X.Ie.CREATE_ANNOUNCEMENT_POST || (0, j.Hc)(i, r, o, a.drafts.type)
                    ? ((0, $._H)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != x.Z.getStickerPreview(o, a.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, M.eu)(o, e, a.drafts.type))
                    : (s({
                          value: "",
                          uploads: void 0,
                          stickers: [e.id],
                      }),
                      null == (u = t.current) || u.clearValue()),
                (0, N._Q)(),
                null == (c = t.current) || c.focus());
        },
        [n, r, o, t, l, s, a],
    );
}
function ev(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let o = e.current;
            null != n &&
                null != o &&
                (Y.default.track(es.rMx.SOUNDMOJI_SELECT, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    sound_guild_id: n.guildId,
                    sound_id: n.soundId,
                    source: r,
                }),
                o.insertSound(n)),
                i && (0, N._Q)(),
                null == o || o.focus();
        },
        [e, t.id, t.guild_id],
    );
}
function eI(e, t) {
    let n = i.useCallback(() => {
            t || (0, N.RO)(ec.X1.EMOJI, e);
        }, [t, e]),
        r = i.useCallback(() => {
            var n;
            !t && (null == (n = e.gifs) ? void 0 : n.allowSending) && (0, N.RO)(ec.X1.GIF, e);
        }, [t, e]),
        o = i.useCallback(() => {
            var n;
            !t && (null == (n = e.stickers) ? void 0 : n.allowSending) && (0, N.RO)(ec.X1.STICKER, e);
        }, [t, e]);
    (0, W.yp)({
        event: es.CkL.TOGGLE_EMOJI_POPOUT,
        handler: n,
    }),
        (0, W.yp)({
            event: es.CkL.TOGGLE_GIF_PICKER,
            handler: r,
        }),
        (0, W.yp)({
            event: es.CkL.TOGGLE_STICKER_PICKER,
            handler: o,
        });
}
function eT(e, t, n) {
    let [r] = i.useState(() => new s.EventEmitter());
    i.useEffect(() => {
        r.emit("text-changed", t, n);
    }, [t, n, r]);
    let o = (t) => {
        null != e.current && r.emit("selection-changed", t);
    };
    return {
        eventEmitter: r,
        handleEditorSelectionChanged: o,
    };
}
function eS() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            var t;
            null == (t = e.current) || t.onMaybeShowAutocomplete();
        }, []),
        n = i.useCallback(() => {
            var t;
            null == (t = e.current) || t.onHideAutocomplete();
        }, []);
    return {
        autocompleteRef: e,
        handleMaybeShowAutocomplete: t,
        handleHideAutocomplete: n,
    };
}
function eA(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function eN(e) {
    let [t, n] = i.useState(0);
    return {
        editorHeight: t,
        handleResize: i.useCallback(
            (t) => {
                n(null != t ? t : 0), null == e || e(t);
            },
            [e],
        ),
    };
}
function eC(e, t, n, r) {
    let i = e.getGuildId(),
        o = (0, _.e7)([P.Z], () => null != i && P.Z.isLurking(i), [i]),
        a = (0, _.e7)([G.ZP, H.default], () => {
            var e, t;
            let n = H.default.getCurrentUser();
            return (
                null !=
                    (t =
                        null != i && null != n
                            ? null == (e = G.ZP.getMember(i, n.id))
                                ? void 0
                                : e.isPending
                            : null) && t
            );
        }),
        s = (0, _.cj)([B.Z], () => {
            var i, o;
            let s = e.isPrivate(),
                l = B.Z.computePermissions(e),
                c = f.e$(l, es.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, es.Plq.CREATE_PRIVATE_THREADS),
                u =
                    (!(null == (i = t.permissions) ? void 0 : i.requireCreateTherads) || c) &&
                    (!(null == (o = t.permissions) ? void 0 : o.requireSendMessages) || f.e$(l, es.Plq.SEND_MESSAGES)),
                d = u && f.e$(l, es.Plq.ATTACH_FILES),
                _ = null != n,
                p = (0, k.xl)(e);
            return {
                disabled: r || a || (!s && !u) || p,
                canAttachFiles: !0 === t.attachments && (s || a || d || _),
                canCreateThreads: c,
                canEveryoneSendMessages: K.Uu(es.Plq.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, a]);
    return ef(
        {
            isLurking: o,
            isPendingMember: a,
        },
        s,
    );
}
function eR(e, t, n) {
    let [r, o] = (0, N.Iu)((e) => [e.activeView, e.activeViewType], u.X),
        a = (0, _.e7)([O.Z], () => O.Z.shouldShowPopup() && O.Z.activeViewType() === e);
    i.useEffect(
        () => () => {
            (0, N._Q)(e);
        },
        [e],
    );
    let s = i.useCallback(
            (e) => {
                t.emit("autocomplete-visibility-change", e), e && (0, N._Q)();
            },
            [t],
        ),
        l = i.useCallback(() => {
            var e;
            null != r || a || null == (e = n.current) || e.handleOuterClick();
        }, [r, a, n]),
        c = null == r || null == o || o !== e;
    return {
        expressionPickerView: r,
        shouldHideExpressionPicker: c,
        handleAutocompleteVisibilityChange: s,
        handleOuterClick: l,
    };
}
function eP(e, t, n) {
    let r = i.useCallback(() => {
        var r, i;
        return (
            !!(!n && (null == (r = t.current) ? void 0 : r.onTabOrEnter(!1))) ||
            (null == (i = e.current) ? void 0 : i.onTabOrEnter(!1)) ||
            !1
        );
    }, [n, t, e]);
    return {
        handleTab: r,
        handleEnter: i.useCallback(() => {
            var r, i;
            return (
                !!(!n && (null == (r = t.current) ? void 0 : r.onTabOrEnter(!0))) ||
                (null == (i = e.current) ? void 0 : i.onTabOrEnter(!0)) ||
                !1
            );
        }, [n, t, e]),
        handleMoveSelection: i.useCallback(
            (r) => {
                var i, o;
                return (
                    !!(!n && (null == (i = t.current) ? void 0 : i.onMoveSelection(r))) ||
                    (null == (o = e.current) ? void 0 : o.onMoveSelection(r)) ||
                    !1
                );
            },
            [n, t, e],
        ),
    };
}
function ew(e, t) {
    let [n, r] = i.useState(null),
        o = i.useCallback(() => {
            var e, n;
            let i,
                o = null == (e = t.current) ? void 0 : e.getSlateEditor();
            null != o && (i = null == (n = eo.bN.getSelectedParentOfType(o, S.un)) ? void 0 : n[0].type),
                r(null != i ? i : null);
        }, [t]);
    return (
        i.useEffect(
            () => (
                e.on("selection-changed", o),
                o(),
                () => {
                    e.off("selection-changed", o);
                }
            ),
            [o, e],
        ),
        n
    );
}
function eD(e, t) {
    var n, o, s, l, u;
    let {
        textValue: f,
        richValue: h,
        className: O,
        innerClassName: S,
        editorClassName: N,
        id: R,
        required: P,
        disabled: L,
        placeholder: x,
        accessibilityLabel: M,
        channel: j,
        type: k,
        focused: G,
        error: B,
        renderAttachButton: Z,
        renderApplicationCommandIcon: V,
        renderAppLauncherButton: H,
        pendingReply: Y,
        onChange: W,
        onResize: K,
        onBlur: $,
        onFocus: eo,
        onKeyDown: ec,
        onSubmit: ed,
        promptToUpload: ef,
        highlighted: e_,
        canMentionRoles: ep,
        canMentionChannels: em,
        maxCharacterCount: eg,
        showRemainingCharsAfterCount: eD,
        allowNewLines: eL = !0,
        characterCountClassName: ex,
        "aria-describedby": eM,
        "aria-labelledby": ej,
        setEditorRef: ek,
        autoCompletePosition: eU,
        children: eG,
        disableThemedBackground: eB = !1,
        emojiPickerCloseOnModalOuterClick: eZ,
        parentModalKey: eF,
        onCommandSentinelTyped: eV,
        pendingScheduledMessage: eH,
    } = e;
    c()(null != k, "chat input type must be set");
    let { analyticsLocations: eY } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA),
        eW = eA(t),
        eK = i.useRef(null),
        ez = i.useRef(null),
        eq = i.useRef(null),
        eX = i.useRef(null);
    null == ek || ek(ez.current);
    let eQ = (0, y.Z)(j),
        [eJ, e$] = i.useState(!eQ);
    (0, m.PM)(eW, (e) => {
        let { width: t } = e;
        return e$(!eQ && (null == t || t > eh));
    });
    let { activeCommand: e0, activeCommandSection: e1 } = (0, _.cj)([v.Z], () => {
            var e, t;
            return {
                activeCommand: (null == (e = k.commands) ? void 0 : e.enabled) ? v.Z.getActiveCommand(j.id) : null,
                activeCommandSection: (null == (t = k.commands) ? void 0 : t.enabled)
                    ? v.Z.getActiveCommandSection(j.id)
                    : null,
            };
        }),
        {
            isLurking: e2,
            isPendingMember: e3,
            disabled: e5,
            canAttachFiles: e4,
            canCreateThreads: e6,
            canEveryoneSendMessages: e8,
        } = eC(j, k, e0, L),
        e7 = k.toolbarType === X.OW.STATIC,
        e9 = !U.dN.useSetting() && !(0, z.isAndroidWeb)() && null != window.ResizeObserver,
        te = !e9 || !(null == (n = k.commands) ? void 0 : n.enabled) || !G || f !== el.GI,
        tt = (0, w.Z)(),
        { fontSize: tn } = (0, _.cj)([g.Z], () => ({ fontSize: g.Z.fontSize })),
        tr = (0, _.e7)([F.Z], () => F.Z.isEnabled()),
        ti = i.useRef(f);
    ti.current = f;
    let to = i.useCallback(
        (e, t, n) => {
            var r;
            t === el.GI && "" === ti.current && (null == (r = k.commands) ? void 0 : r.enabled) && (null == eV || eV()),
                null == W || W(e, t, n);
        },
        [W, eV, null == (o = k.commands) ? void 0 : o.enabled],
    );
    eI(k, e5);
    let { eventEmitter: ta, handleEditorSelectionChanged: ts } = eT(ez, f, h),
        { submitting: tl, submit: tc, handleSubmit: tu } = eE(ed, k, ez, eX, j.id),
        { autocompleteRef: td, handleMaybeShowAutocomplete: tf, handleHideAutocomplete: t_ } = eS(),
        tp = eb(tc, k, ez),
        th = ey(ez),
        tm = eO({
            editorRef: ez,
            disabled: e5,
            textValue: f,
            channelId: j.id,
            chatInputType: k,
            submit: ed,
        }),
        tg = ev(ez, j),
        tE = i.useCallback(() => {
            var e;
            return null == eX || null == (e = eX.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: tb, handleResize: ty } = eN(K),
        { handleTab: tO, handleEnter: tv, handleMoveSelection: tI } = eP(td, eK, te),
        {
            expressionPickerView: tT,
            shouldHideExpressionPicker: tS,
            handleAutocompleteVisibilityChange: tA,
            handleOuterClick: tN,
        } = eR(k, ta, ez),
        tC = ew(ta, ez);
    (0, q.S)(ta, j.guild_id, j.id);
    let tR = null != Y,
        tP = (e5 && !((e2 || e3) && e8)) || (tl && (null == (s = k.submit) ? void 0 : s.useDisabledStylesOnSubmit)),
        tw = null;
    null != e0
        ? (tw = null == V ? void 0 : V(e0, e1, eu.attachButton))
        : (!e5 || e6) && (tw = null == Z ? void 0 : Z(tR, eu.attachButton));
    let tD = e9 && null != h && !e5 && k.showCharacterCount && null == e0,
        tL = e9 && !__OVERLAY__ && null != h && null == e0 && k.toolbarType !== X.OW.NONE,
        tx = (0, ee.c)({
            channel: j,
            type: k,
            activeCommand: e0,
            pendingReply: Y,
            pendingScheduledMessage: eH,
            selectedAutocompleteInputType: tC,
        }),
        tM = 0 === f.trim().length,
        tj = k.layout === X.gy.INLINE,
        tk = k.layout === X.gy.FLUSH,
        tU = (0, r.jsx)(et.Z, {
            type: k,
            disabled: e5,
            channel: j,
            handleSubmit: tu,
            isEmpty: tM,
            showAllButtons: eJ,
            children: null == H ? void 0 : H(),
        }),
        tG = tD
            ? (0, r.jsx)(er.Z, {
                  type: k,
                  textValue: f,
                  className: ex,
                  maxCharacterCount: eg,
                  showRemainingCharsAfterCount: eD,
              })
            : null;
    return (0, r.jsx)(A.f6, {
        value: ta,
        children: (0, r.jsxs)(b.Gt, {
            value: eY,
            children: [
                tL && e7
                    ? (0, r.jsx)(ea.Z, {
                          editorRef: ez,
                          options: k.markdown,
                          channel: j,
                      })
                    : tL
                      ? (0, r.jsx)(ei.Z, {
                            ref: eX,
                            editorRef: ez,
                            containerRef: eq,
                            options: k.markdown,
                        })
                      : null,
                (0, r.jsxs)("div", {
                    ref: eW,
                    className: a()(O, {
                        [eu.channelTextArea]: !0,
                        [eu.channelTextAreaDisabled]: tP,
                        [eu.highlighted]: e_,
                        [eu.textAreaMobileThemed]: d.tq,
                        [eu.inlineContainer]: tj,
                        [eu.flushContainer]: tk,
                        [eu.error]: null != B,
                    }),
                    children: [
                        tj || tk ? null : (0, r.jsx)(ee.Z, { bars: tx }),
                        (0, r.jsxs)("div", {
                            ref: eq,
                            onScroll: tE,
                            className: a()(S, {
                                [eu.scrollableContainer]: !0,
                                [eu.themedBackground]: !eB,
                                [eu.hasStackedBar]: tx.stacked.length > 0,
                            }),
                            children: [
                                (0, r.jsx)(J.Z, {
                                    channelId: j.id,
                                    chatInputType: k,
                                }),
                                k.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(en.Z, {
                                          channelId: j.id,
                                          type: k,
                                          canAttachFiles: e4,
                                      }),
                                (0, r.jsxs)("div", {
                                    className: a()(eu.inner, {
                                        [eu.innerDisabled]: tP,
                                        [eu.sansAttachButton]:
                                            k !== X.Ie.EDIT && (null != tw || (tP && null == tw) || e2),
                                        [eu.sansAttachButtonCreateThread]: k === X.Ie.THREAD_CREATION,
                                        [eu.sansAttachButtonCreatePost]:
                                            k === X.Ie.CREATE_FORUM_POST || k === X.Ie.FORWARD_MESSAGE_INPUT,
                                        [eu.sansAttachButtonUserProfileReply]: k === X.Ie.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tN,
                                    children: [
                                        tw,
                                        (0, r.jsx)(p.tEY, {
                                            ringTarget: eW,
                                            ringClassName: eu.focusRing,
                                            children: (0, r.jsx)(Q.Z, {
                                                ref: ez,
                                                id: R,
                                                focused: G,
                                                useSlate: e9,
                                                textValue: f,
                                                richValue: h,
                                                disabled: e5,
                                                placeholder: x,
                                                required: P,
                                                accessibilityLabel: M,
                                                isPreviewing: (e2 || e3) && e8,
                                                channel: j,
                                                type: k,
                                                canPasteFiles: e4,
                                                uploadPromptCharacterCount: es.en1,
                                                maxCharacterCount: null != eg ? eg : tt,
                                                allowNewLines: eL,
                                                "aria-describedby": eM,
                                                onChange: to,
                                                onResize: ty,
                                                onBlur: $,
                                                onFocus: eo,
                                                onKeyDown: ec,
                                                onSubmit: tc,
                                                onTab: tO,
                                                onEnter: tv,
                                                onMoveSelection: tI,
                                                onSelectionChanged: ts,
                                                onMaybeShowAutocomplete: tf,
                                                onHideAutocomplete: t_,
                                                promptToUpload: ef,
                                                fontSize: tn,
                                                spellcheckEnabled: tr,
                                                canOnlyUseTextCommands: tR,
                                                className: a()(
                                                    {
                                                        [eu.textAreaThreadCreation]: k === X.Ie.THREAD_CREATION,
                                                        [eu.profileBioInput]: k === X.Ie.PROFILE_BIO_INPUT,
                                                        [eu.overlayInlineReply]: k === X.Ie.OVERLAY_INLINE_REPLY,
                                                    },
                                                    N,
                                                ),
                                                "aria-labelledby": ej,
                                            }),
                                        }),
                                        tU,
                                    ],
                                }),
                            ],
                        }),
                        te
                            ? null
                            : (0, r.jsx)(I.Z, {
                                  ref: eK,
                                  channel: j,
                                  canOnlyUseTextCommands: tR,
                              }),
                        (0, r.jsx)(T.Z, {
                            ref: td,
                            channel: j,
                            canMentionRoles: ep,
                            canMentionChannels: em,
                            useNewSlashCommands: e9,
                            canOnlyUseTextCommands: tR,
                            canSendStickers: null == (l = k.stickers) ? void 0 : l.allowSending,
                            canSendSoundmoji: null == (u = k.soundmoji) ? void 0 : u.allowSending,
                            textValue: f,
                            focused: G,
                            expressionPickerView: tT,
                            type: k,
                            targetRef: eW,
                            editorRef: ez,
                            onSendMessage: tc,
                            onSendSticker: tm,
                            onVisibilityChange: tA,
                            editorScrollerRef: eq,
                            editorHeight: tb,
                            barsHeight: 40 * tx.floating.length,
                            setValue: (e, t) => (null == to ? void 0 : to(null, e, t)),
                            position: eU,
                        }),
                        (0, r.jsx)(D.Z, {
                            textValue: f,
                            editorHeight: tb,
                            channelId: j.id,
                        }),
                        tG,
                        eG,
                    ],
                }),
                (0, r.jsx)(p.pdY, { error: B }),
                tS
                    ? null
                    : (0, r.jsx)(C.Z, {
                          positionTargetRef: eW,
                          type: k,
                          onSelectGIF: tp,
                          onSelectEmoji: th,
                          onSelectSticker: tm,
                          onSelectSound: tg,
                          channel: j,
                          closeOnModalOuterClick: eZ,
                          parentModalKey: eF,
                          position: "top",
                          align: "right",
                          positionLayerClassName: eu.expressionPickerPositionLayer,
                      }),
            ],
        }),
    });
}
let eL = i.memo(i.forwardRef(eD));
