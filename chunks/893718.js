n.d(t, {
    O1: () => eO,
    Sg: () => eb,
    TE: () => eN,
    ZP: () => ex,
    ae: () => ey,
    bL: () => eE,
    hJ: () => eI,
    iV: () => eR,
    jx: () => eS,
    oR: () => eC,
    qz: () => eA,
    x2: () => eT,
}),
    n(388685),
    n(415506),
    n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(836560),
    l = n(512722),
    c = n.n(l),
    u = n(524825),
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
    C = n(28546),
    N = n(805680),
    R = n(368844),
    P = n(41776),
    w = n(849522),
    D = n(780291),
    x = n(328908),
    L = n(913663),
    j = n(268350),
    M = n(378233),
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
    ea = n(887490),
    eo = n(676108),
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
function eE(e, t, a, o, s) {
    let [l, c] = i.useState(!1),
        u = i.useCallback(
            (i, d, f, _, m) => {
                var g, E, b;
                if (l) return;
                c(!0);
                let y =
                        null !=
                        (E = null == (g = L.Z.getStickerPreview(s, t.drafts.type)) ? void 0 : g.map((e) => e.id))
                            ? E
                            : [],
                    O = null != (b = V.Z.getUploads(s, t.drafts.type)) ? b : [],
                    v = (0, x.q5)(s);
                if (null == d && !_ && !m && (0, R.CB)(O, s)) {
                    c(!1),
                        (0, p.ZDy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("57804"),
                                n.e("90508"),
                                n.e("46653"),
                                n.e("22173"),
                                n.e("6198"),
                            ]).then(n.bind(n, 273602));
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
                        f = null != a.current;
                    d &&
                        (em(s)
                            ? h.Z.saveDraft(s, "", t.drafts.type)
                            : f && (null == (r = a.current) || r.clearValue(), null == (i = o.current) || i.hide())),
                        f && (c(!1), (0, C._Q)(), u && (null == (n = a.current) || n.focus()));
                });
            },
            [a, o, e, l, t, s],
        );
    return {
        submitting: l,
        submit: u,
        handleSubmit: i.useCallback(
            (e) => {
                var t;
                null == a || null == (t = a.current) || t.submit(e);
            },
            [a],
        ),
    };
}
function eb(e, t, n) {
    return i.useCallback(
        (r) => {
            var i, a;
            t === X.Ie.CREATE_FORUM_POST || t === X.Ie.CREATE_ANNOUNCEMENT_POST
                ? null == (a = n.current) || a.insertGIF(r)
                : e(r.url, void 0, void 0, !0),
                (0, C._Q)(),
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
                r && (0, C._Q)();
        },
        [e],
    );
}
function eO(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: o, submit: s } = e,
        { analyticsLocations: l } = (0, b.ZP)();
    return i.useCallback(
        (e, i) => {
            var c, u;
            n ||
                (o === X.Ie.CREATE_ANNOUNCEMENT_POST || (0, M.Hc)(i, r, a, o.drafts.type)
                    ? ((0, $._H)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != L.Z.getStickerPreview(a, o.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, j.eu)(a, e, o.drafts.type))
                    : (s({
                          value: "",
                          uploads: void 0,
                          stickers: [e.id],
                      }),
                      null == (u = t.current) || u.clearValue()),
                (0, C._Q)(),
                null == (c = t.current) || c.focus());
        },
        [n, r, a, t, l, s, o],
    );
}
function ev(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let a = e.current;
            null != n &&
                null != a &&
                (Y.default.track(es.rMx.SOUNDMOJI_SELECT, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    sound_guild_id: n.guildId,
                    sound_id: n.soundId,
                    source: r,
                }),
                a.insertSound(n)),
                i && (0, C._Q)(),
                null == a || a.focus();
        },
        [e, t.id, t.guild_id],
    );
}
function eI(e, t) {
    let n = i.useCallback(() => {
            t || (0, C.RO)(ec.X1.EMOJI, e);
        }, [t, e]),
        r = i.useCallback(() => {
            var n;
            !t && (null == (n = e.gifs) ? void 0 : n.allowSending) && (0, C.RO)(ec.X1.GIF, e);
        }, [t, e]),
        a = i.useCallback(() => {
            var n;
            !t && (null == (n = e.stickers) ? void 0 : n.allowSending) && (0, C.RO)(ec.X1.STICKER, e);
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
            handler: a,
        });
}
function eT(e, t, n) {
    let [r] = i.useState(() => new s.EventEmitter());
    i.useEffect(() => {
        r.emit("text-changed", t, n);
    }, [t, n, r]);
    let a = (t) => {
        null != e.current && r.emit("selection-changed", t);
    };
    return {
        eventEmitter: r,
        handleEditorSelectionChanged: a,
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
function eC(e) {
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
function eN(e, t, n, r) {
    let i = e.getGuildId(),
        a = (0, _.e7)([P.Z], () => null != i && P.Z.isLurking(i), [i]),
        o = (0, _.e7)([G.ZP, H.default], () => {
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
            var i, a;
            let s = e.isPrivate(),
                l = B.Z.computePermissions(e),
                c = f.e$(l, es.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, es.Plq.CREATE_PRIVATE_THREADS),
                u =
                    (!(null == (i = t.permissions) ? void 0 : i.requireCreateTherads) || c) &&
                    (!(null == (a = t.permissions) ? void 0 : a.requireSendMessages) || f.e$(l, es.Plq.SEND_MESSAGES)),
                d = u && f.e$(l, es.Plq.ATTACH_FILES),
                _ = null != n,
                p = (0, k.xl)(e);
            return {
                disabled: r || o || (!s && !u) || p,
                canAttachFiles: !0 === t.attachments && (s || o || d || _),
                canCreateThreads: c,
                canEveryoneSendMessages: K.Uu(es.Plq.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]);
    return ef(
        {
            isLurking: a,
            isPendingMember: o,
        },
        s,
    );
}
function eR(e, t, n) {
    let [r, a] = (0, C.Iu)((e) => [e.activeView, e.activeViewType], u.X),
        o = (0, _.e7)([O.Z], () => O.Z.shouldShowPopup() && O.Z.activeViewType() === e);
    i.useEffect(
        () => () => {
            (0, C._Q)(e);
        },
        [e],
    );
    let s = i.useCallback(
            (e) => {
                t.emit("autocomplete-visibility-change", e), e && (0, C._Q)();
            },
            [t],
        ),
        l = i.useCallback(() => {
            var e;
            null != r || o || null == (e = n.current) || e.handleOuterClick();
        }, [r, o, n]),
        c = null == r || null == a || a !== e;
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
                var i, a;
                return (
                    !!(!n && (null == (i = t.current) ? void 0 : i.onMoveSelection(r))) ||
                    (null == (a = e.current) ? void 0 : a.onMoveSelection(r)) ||
                    !1
                );
            },
            [n, t, e],
        ),
    };
}
function ew(e, t) {
    let [n, r] = i.useState(null),
        a = i.useCallback(() => {
            var e, n;
            let i,
                a = null == (e = t.current) ? void 0 : e.getSlateEditor();
            null != a && (i = null == (n = ea.bN.getSelectedParentOfType(a, S.un)) ? void 0 : n[0].type),
                r(null != i ? i : null);
        }, [t]);
    return (
        i.useEffect(
            () => (
                e.on("selection-changed", a),
                a(),
                () => {
                    e.off("selection-changed", a);
                }
            ),
            [a, e],
        ),
        n
    );
}
function eD(e, t) {
    var n, a, s, l, u;
    let {
        textValue: f,
        richValue: h,
        className: O,
        innerClassName: S,
        editorClassName: C,
        id: R,
        required: P,
        disabled: x,
        placeholder: L,
        accessibilityLabel: j,
        channel: M,
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
        onFocus: ea,
        onKeyDown: ec,
        onSubmit: ed,
        promptToUpload: ef,
        highlighted: e_,
        canMentionRoles: ep,
        canMentionChannels: em,
        maxCharacterCount: eg,
        showRemainingCharsAfterCount: eD,
        allowNewLines: ex = !0,
        characterCountClassName: eL,
        "aria-describedby": ej,
        "aria-labelledby": eM,
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
    let eQ = (0, y.Z)(M),
        [eJ, e$] = i.useState(!eQ);
    (0, m.PM)(eW, (e) => {
        let { width: t } = e;
        return e$(!eQ && (null == t || t > eh));
    });
    let { activeCommand: e0, activeCommandSection: e1 } = (0, _.cj)([v.Z], () => {
            var e, t;
            return {
                activeCommand: (null == (e = k.commands) ? void 0 : e.enabled) ? v.Z.getActiveCommand(M.id) : null,
                activeCommandSection: (null == (t = k.commands) ? void 0 : t.enabled)
                    ? v.Z.getActiveCommandSection(M.id)
                    : null,
            };
        }),
        {
            isLurking: e2,
            isPendingMember: e3,
            disabled: e4,
            canAttachFiles: e8,
            canCreateThreads: e6,
            canEveryoneSendMessages: e5,
        } = eN(M, k, e0, x),
        e7 = k.toolbarType === X.OW.STATIC,
        e9 = !U.dN.useSetting() && !(0, z.isAndroidWeb)() && null != window.ResizeObserver,
        te = !e9 || !(null == (n = k.commands) ? void 0 : n.enabled) || !G || f !== el.GI,
        tt = (0, w.Z)(),
        { fontSize: tn } = (0, _.cj)([g.Z], () => ({ fontSize: g.Z.fontSize })),
        tr = (0, _.e7)([F.Z], () => F.Z.isEnabled()),
        ti = i.useRef(f);
    ti.current = f;
    let ta = i.useCallback(
        (e, t, n) => {
            var r;
            t === el.GI && "" === ti.current && (null == (r = k.commands) ? void 0 : r.enabled) && (null == eV || eV()),
                null == W || W(e, t, n);
        },
        [W, eV, null == (a = k.commands) ? void 0 : a.enabled],
    );
    eI(k, e4);
    let { eventEmitter: to, handleEditorSelectionChanged: ts } = eT(ez, f, h),
        { submitting: tl, submit: tc, handleSubmit: tu } = eE(ed, k, ez, eX, M.id),
        { autocompleteRef: td, handleMaybeShowAutocomplete: tf, handleHideAutocomplete: t_ } = eS(),
        tp = eb(tc, k, ez),
        th = ey(ez),
        tm = eO({
            editorRef: ez,
            disabled: e4,
            textValue: f,
            channelId: M.id,
            chatInputType: k,
            submit: ed,
        }),
        tg = ev(ez, M),
        tE = i.useCallback(() => {
            var e;
            return null == eX || null == (e = eX.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: tb, handleResize: ty } = eC(K),
        { handleTab: tO, handleEnter: tv, handleMoveSelection: tI } = eP(td, eK, te),
        {
            expressionPickerView: tT,
            shouldHideExpressionPicker: tS,
            handleAutocompleteVisibilityChange: tA,
            handleOuterClick: tC,
        } = eR(k, to, ez),
        tN = ew(to, ez);
    (0, q.S)(to, M.guild_id, M.id);
    let tR = null != Y,
        tP = (e4 && !((e2 || e3) && e5)) || (tl && (null == (s = k.submit) ? void 0 : s.useDisabledStylesOnSubmit)),
        tw = null;
    null != e0
        ? (tw = null == V ? void 0 : V(e0, e1, eu.attachButton))
        : (!e4 || e6) && (tw = null == Z ? void 0 : Z(tR, eu.attachButton));
    let tD = e9 && null != h && !e4 && k.showCharacterCount && null == e0,
        tx = e9 && !__OVERLAY__ && null != h && null == e0 && k.toolbarType !== X.OW.NONE,
        tL = (0, ee.c)({
            channel: M,
            type: k,
            activeCommand: e0,
            pendingReply: Y,
            pendingScheduledMessage: eH,
            selectedAutocompleteInputType: tN,
        }),
        tj = 0 === f.trim().length,
        tM = k.layout === X.gy.INLINE,
        tk = k.layout === X.gy.FLUSH,
        tU = (0, r.jsx)(et.Z, {
            type: k,
            disabled: e4,
            channel: M,
            handleSubmit: tu,
            isEmpty: tj,
            showAllButtons: eJ,
            children: null == H ? void 0 : H(),
        }),
        tG = tD
            ? (0, r.jsx)(er.Z, {
                  type: k,
                  textValue: f,
                  className: eL,
                  maxCharacterCount: eg,
                  showRemainingCharsAfterCount: eD,
              })
            : null;
    return (0, r.jsx)(A.f6, {
        value: to,
        children: (0, r.jsxs)(b.Gt, {
            value: eY,
            children: [
                tx && e7
                    ? (0, r.jsx)(eo.Z, {
                          editorRef: ez,
                          options: k.markdown,
                          channel: M,
                      })
                    : tx
                      ? (0, r.jsx)(ei.Z, {
                            ref: eX,
                            editorRef: ez,
                            containerRef: eq,
                            options: k.markdown,
                        })
                      : null,
                (0, r.jsxs)("div", {
                    ref: eW,
                    className: o()(O, {
                        [eu.channelTextArea]: !0,
                        [eu.channelTextAreaDisabled]: tP,
                        [eu.highlighted]: e_,
                        [eu.textAreaMobileThemed]: d.tq,
                        [eu.inlineContainer]: tM,
                        [eu.flushContainer]: tk,
                        [eu.error]: null != B,
                    }),
                    children: [
                        tM || tk ? null : (0, r.jsx)(ee.Z, { bars: tL }),
                        (0, r.jsxs)("div", {
                            ref: eq,
                            onScroll: tE,
                            className: o()(S, {
                                [eu.scrollableContainer]: !0,
                                [eu.themedBackground]: !eB,
                                [eu.hasStackedBar]: tL.stacked.length > 0,
                            }),
                            children: [
                                (0, r.jsx)(J.Z, {
                                    channelId: M.id,
                                    chatInputType: k,
                                }),
                                k.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(en.Z, {
                                          channelId: M.id,
                                          type: k,
                                          canAttachFiles: e8,
                                      }),
                                (0, r.jsxs)("div", {
                                    className: o()(eu.inner, {
                                        [eu.innerDisabled]: tP,
                                        [eu.sansAttachButton]:
                                            k !== X.Ie.EDIT && (null != tw || (tP && null == tw) || e2),
                                        [eu.sansAttachButtonCreateThread]: k === X.Ie.THREAD_CREATION,
                                        [eu.sansAttachButtonCreatePost]:
                                            k === X.Ie.CREATE_FORUM_POST || k === X.Ie.FORWARD_MESSAGE_INPUT,
                                        [eu.sansAttachButtonUserProfileReply]: k === X.Ie.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tC,
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
                                                disabled: e4,
                                                placeholder: L,
                                                required: P,
                                                accessibilityLabel: j,
                                                isPreviewing: (e2 || e3) && e5,
                                                channel: M,
                                                type: k,
                                                canPasteFiles: e8,
                                                uploadPromptCharacterCount: es.en1,
                                                maxCharacterCount: null != eg ? eg : tt,
                                                allowNewLines: ex,
                                                "aria-describedby": ej,
                                                onChange: ta,
                                                onResize: ty,
                                                onBlur: $,
                                                onFocus: ea,
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
                                                className: o()(
                                                    {
                                                        [eu.textAreaThreadCreation]: k === X.Ie.THREAD_CREATION,
                                                        [eu.profileBioInput]: k === X.Ie.PROFILE_BIO_INPUT,
                                                        [eu.overlayInlineReply]: k === X.Ie.OVERLAY_INLINE_REPLY,
                                                    },
                                                    C,
                                                ),
                                                "aria-labelledby": eM,
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
                                  channel: M,
                                  canOnlyUseTextCommands: tR,
                              }),
                        (0, r.jsx)(T.Z, {
                            ref: td,
                            channel: M,
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
                            barsHeight: 40 * tL.floating.length,
                            setValue: (e, t) => (null == ta ? void 0 : ta(null, e, t)),
                            position: eU,
                        }),
                        (0, r.jsx)(D.Z, {
                            textValue: f,
                            editorHeight: tb,
                            channelId: M.id,
                        }),
                        tG,
                        eG,
                    ],
                }),
                (0, r.jsx)(p.pdY, { error: B }),
                tS
                    ? null
                    : (0, r.jsx)(N.Z, {
                          positionTargetRef: eW,
                          type: k,
                          onSelectGIF: tp,
                          onSelectEmoji: th,
                          onSelectSticker: tm,
                          onSelectSound: tg,
                          channel: M,
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
let ex = i.memo(i.forwardRef(eD));
