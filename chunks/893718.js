n.d(t, {
    O1: () => eI,
    Sg: () => eO,
    TE: () => eP,
    ZP: () => ek,
    aT: () => eL,
    ae: () => ev,
    bL: () => ey,
    hJ: () => eT,
    iV: () => ew,
    jx: () => eC,
    oR: () => eR,
    qz: () => eN,
    vB: () => eM,
    x2: () => eA,
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
    u = n(574583),
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
    S = n(326133),
    T = n(106824),
    A = n(570220),
    C = n(28546),
    N = n(805680),
    R = n(368844),
    P = n(41776),
    w = n(657871),
    D = n(849522),
    x = n(780291),
    L = n(328908),
    M = n(913663),
    j = n(268350),
    k = n(378233),
    U = n(665906),
    G = n(695346),
    B = n(271383),
    Z = n(496675),
    F = n(944486),
    V = n(398327),
    H = n(117530),
    Y = n(594174),
    W = n(626135),
    K = n(459273),
    z = n(700785),
    q = n(358085),
    X = n(746877),
    Q = n(541716),
    J = n(667829),
    $ = n(562267),
    ee = n(376918),
    et = n(760196),
    en = n(258696),
    er = n(303628),
    ei = n(472243),
    ea = n(872635),
    eo = n(887490),
    es = n(676108),
    el = n(981631),
    ec = n(761652),
    eu = n(957825),
    ed = n(564355);
function ef(e, t, n) {
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
function e_(e) {
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
                ef(e, t, n[t]);
            });
    }
    return e;
}
function ep(e, t) {
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
function eh(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ep(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let em = 450,
    eg = 250;
function eE(e) {
    return e !== F.Z.getChannelId();
}
function eb(e, t) {
    var n, r;
    return null != (r = e && (null == (n = t.submit) ? void 0 : n.clearOnSubmit)) && r;
}
function ey(e, t, a, o, s) {
    let [l, c] = i.useState(!1),
        u = i.useCallback(
            (i, d, f, _, m) => {
                var g, E, b;
                if (l) return;
                c(!0);
                let y =
                        null !=
                        (E = null == (g = M.Z.getStickerPreview(s, t.drafts.type)) ? void 0 : g.map((e) => e.id))
                            ? E
                            : [],
                    O = null != (b = H.Z.getUploads(s, t.drafts.type)) ? b : [],
                    v = (0, L.q5)(s);
                if (null == d && !_ && !m && (0, R.CB)(O, s)) {
                    c(!1),
                        (0, p.ZDy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("57804"),
                                n.e("90508"),
                                n.e("95546"),
                                n.e("22173"),
                                n.e("48890"),
                            ]).then(n.bind(n, 273602));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    eh(e_({}, t), {
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
                        d = eb(l, t),
                        f = null != a.current;
                    d &&
                        (eE(s)
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
function eO(e, t, n) {
    return i.useCallback(
        (r) => {
            var i, a;
            t === Q.Ie.CREATE_FORUM_POST || t === Q.Ie.CREATE_ANNOUNCEMENT_POST
                ? null == (a = n.current) || a.insertGIF(r)
                : e(r.url, void 0, void 0, !0),
                (0, C._Q)(),
                null == (i = n.current) || i.focus();
        },
        [n, e, t],
    );
}
function ev(e) {
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
function eI(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: o, submit: s } = e,
        { analyticsLocations: l } = (0, b.ZP)();
    return i.useCallback(
        (e, i) => {
            var c, u;
            n ||
                (o === Q.Ie.CREATE_ANNOUNCEMENT_POST || (0, k.Hc)(i, r, a, o.drafts.type)
                    ? ((0, ee._H)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != M.Z.getStickerPreview(a, o.drafts.type),
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
function eS(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let a = e.current;
            null != n &&
                null != a &&
                (W.default.track(el.rMx.SOUNDMOJI_SELECT, {
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
function eT(e, t) {
    let n = i.useCallback(() => {
            t || (0, C.RO)(eu.X1.EMOJI, e);
        }, [t, e]),
        r = i.useCallback(() => {
            var n;
            !t && (null == (n = e.gifs) ? void 0 : n.allowSending) && (0, C.RO)(eu.X1.GIF, e);
        }, [t, e]),
        a = i.useCallback(() => {
            var n;
            !t && (null == (n = e.stickers) ? void 0 : n.allowSending) && (0, C.RO)(eu.X1.STICKER, e);
        }, [t, e]);
    (0, K.yp)({
        event: el.CkL.TOGGLE_EMOJI_POPOUT,
        handler: n,
    }),
        (0, K.yp)({
            event: el.CkL.TOGGLE_GIF_PICKER,
            handler: r,
        }),
        (0, K.yp)({
            event: el.CkL.TOGGLE_STICKER_PICKER,
            handler: a,
        });
}
function eA(e, t, n) {
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
function eC() {
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
function eN(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function eR(e) {
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
function eP(e, t, n, r) {
    let i = e.getGuildId(),
        a = (0, _.e7)([P.Z], () => null != i && P.Z.isLurking(i), [i]),
        o = (0, _.e7)([B.ZP, Y.default], () => {
            var e, t;
            let n = Y.default.getCurrentUser();
            return (
                null !=
                    (t =
                        null != i && null != n
                            ? null == (e = B.ZP.getMember(i, n.id))
                                ? void 0
                                : e.isPending
                            : null) && t
            );
        }),
        s = (0, _.cj)([Z.Z], () => {
            var i, a;
            let s = e.isPrivate(),
                l = Z.Z.computePermissions(e),
                c = f.e$(l, el.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, el.Plq.CREATE_PRIVATE_THREADS),
                u =
                    (!(null == (i = t.permissions) ? void 0 : i.requireCreateTherads) || c) &&
                    (!(null == (a = t.permissions) ? void 0 : a.requireSendMessages) || f.e$(l, el.Plq.SEND_MESSAGES)),
                d = u && f.e$(l, el.Plq.ATTACH_FILES),
                _ = null != n,
                p = (0, U.xl)(e);
            return {
                disabled: r || o || (!s && !u) || p,
                canAttachFiles: !0 === t.attachments && (s || o || d || _),
                canCreateThreads: c,
                canEveryoneSendMessages: z.Uu(el.Plq.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]);
    return e_(
        {
            isLurking: a,
            isPendingMember: o,
        },
        s,
    );
}
function ew(e, t) {
    let [n, r] = (0, C.Iu)((e) => [e.activeView, e.activeViewType], u.X),
        a = (0, _.e7)([O.Z], () => O.Z.shouldShowPopup() && O.Z.activeViewType() === e);
    i.useEffect(
        () => () => {
            (0, C._Q)(e);
        },
        [e],
    );
    let o = i.useCallback(() => {
            var e;
            null != n || a || null == (e = t.current) || e.handleOuterClick();
        }, [n, a, t]),
        s = null == n || null == r || r !== e;
    return {
        expressionPickerView: n,
        shouldHideExpressionPicker: s,
        handleOuterClick: o,
    };
}
function eD(e, t, n) {
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
function ex(e, t) {
    let [n, r] = i.useState(null),
        a = i.useCallback(() => {
            var e, n;
            let i,
                a = null == (e = t.current) ? void 0 : e.getSlateEditor();
            null != a && (i = null == (n = eo.bN.getSelectedParentOfType(a, T.un)) ? void 0 : n[0].type),
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
let eL = (e) => {
        let { enabled: t, onlyExactMatch: n } = (0, w.zM)("ChannelTextAreaContainer", { autoTrackExposure: !1 }),
            [r, a] = i.useState(!0),
            o = i.useRef(null);
        return (
            i.useLayoutEffect(() => {
                t &&
                    !n &&
                    (clearTimeout(o.current),
                    a(!1),
                    (o.current = setTimeout(() => {
                        a(!0);
                    }, eg)));
            }, [n, t, e]),
            r
        );
    },
    eM = () => {
        let { enabled: e } = (0, w.zM)("ChannelTextAreaContainer", { autoTrackExposure: !1 }),
            [t, n] = i.useState(null);
        return {
            currentAutocompleteType: t,
            handleAutocompleteVisibilityChange: i.useCallback(
                (t, r) => {
                    e && n(r), t && (0, C._Q)();
                },
                [e],
            ),
        };
    };
function ej(e, t) {
    var n, a, s, l, u;
    let {
        textValue: f,
        richValue: h,
        className: O,
        innerClassName: T,
        editorClassName: C,
        id: R,
        required: P,
        disabled: w,
        placeholder: L,
        accessibilityLabel: M,
        channel: j,
        type: k,
        focused: U,
        error: B,
        renderAttachButton: Z,
        renderApplicationCommandIcon: F,
        pendingReply: H,
        onChange: Y,
        onResize: W,
        onBlur: K,
        onFocus: z,
        onKeyDown: ee,
        onSubmit: eo,
        promptToUpload: eu,
        highlighted: ef,
        canMentionRoles: e_,
        canMentionChannels: ep,
        maxCharacterCount: eh,
        showRemainingCharsAfterCount: eg,
        allowNewLines: eE = !0,
        characterCountClassName: eb,
        "aria-describedby": ej,
        "aria-labelledby": ek,
        setEditorRef: eU,
        autoCompletePosition: eG,
        children: eB,
        disableThemedBackground: eZ = !1,
        emojiPickerCloseOnModalOuterClick: eF,
        parentModalKey: eV,
        pendingScheduledMessage: eH,
        showValueWhenDisabled: eY = !1,
    } = e;
    c()(null != k, "chat input type must be set");
    let { analyticsLocations: eW } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA),
        eK = eN(t),
        ez = i.useRef(null),
        eq = i.useRef(null),
        eX = i.useRef(null),
        eQ = i.useRef(null);
    null == eU || eU(eq.current);
    let eJ = (0, y.Z)(j),
        [e$, e0] = i.useState(!eJ);
    (0, m.PM)(eK, (e) => {
        let { width: t } = e;
        return e0(!eJ && (null == t || t > em));
    });
    let { activeCommand: e1, activeCommandSection: e2 } = (0, _.cj)([v.Z], () => {
            var e, t;
            return {
                activeCommand: (null == (e = k.commands) ? void 0 : e.enabled) ? v.Z.getActiveCommand(j.id) : null,
                activeCommandSection: (null == (t = k.commands) ? void 0 : t.enabled)
                    ? v.Z.getActiveCommandSection(j.id)
                    : null,
            };
        }),
        {
            isLurking: e3,
            isPendingMember: e4,
            disabled: e8,
            canAttachFiles: e5,
            canCreateThreads: e6,
            canEveryoneSendMessages: e7,
        } = eP(j, k, e1, w),
        e9 = k.toolbarType === Q.OW.STATIC,
        te = !G.dN.useSetting() && !(0, q.isAndroidWeb)() && null != window.ResizeObserver,
        tt = !te || !(null == (n = k.commands) ? void 0 : n.enabled) || !U || f !== ec.GI,
        tn = (0, D.Z)(),
        { fontSize: tr } = (0, _.cj)([g.Z], () => ({ fontSize: g.Z.fontSize })),
        ti = (0, _.e7)([V.Z], () => V.Z.isEnabled());
    eT(k, e8);
    let { eventEmitter: ta, handleEditorSelectionChanged: to } = eA(eq, f, h),
        ts = i.useRef(f);
    ts.current = f;
    let tl = i.useCallback(
            (e, t, n) => {
                var r;
                t === ec.GI &&
                    "" === ts.current &&
                    (null == (r = k.commands) ? void 0 : r.enabled) &&
                    ta.emit("command-sentinel-typed"),
                    null == Y || Y(e, t, n);
            },
            [Y, null == (a = k.commands) ? void 0 : a.enabled, ta],
        ),
        { submitting: tc, submit: tu, handleSubmit: td } = ey(eo, k, eq, eQ, j.id),
        { autocompleteRef: tf, handleMaybeShowAutocomplete: t_, handleHideAutocomplete: tp } = eC(),
        th = eO(tu, k, eq),
        tm = ev(eq),
        tg = eI({
            editorRef: eq,
            disabled: e8,
            textValue: f,
            channelId: j.id,
            chatInputType: k,
            submit: eo,
        }),
        tE = eS(eq, j),
        tb = i.useCallback(() => {
            var e;
            return null == eQ || null == (e = eQ.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: ty, handleResize: tO } = eR(W),
        { handleTab: tv, handleEnter: tI, handleMoveSelection: tS } = eD(tf, ez, tt),
        { expressionPickerView: tT, shouldHideExpressionPicker: tA, handleOuterClick: tC } = ew(k, eq),
        tN = ex(ta, eq),
        tR = eL(f),
        { currentAutocompleteType: tP, handleAutocompleteVisibilityChange: tw } = eM();
    (0, X.S)(ta, j.guild_id, j.id);
    let tD = null != H,
        tx = (e8 && !((e3 || e4) && e7)) || (tc && (null == (s = k.submit) ? void 0 : s.useDisabledStylesOnSubmit)),
        tL = null;
    null != e1
        ? (tL = null == F ? void 0 : F(e1, e2, ed.attachButton))
        : (!e8 || e6) && (tL = null == Z ? void 0 : Z(tD, ed.attachButton));
    let tM = te && null != h && !e8 && k.showCharacterCount && null == e1,
        tj = te && !__OVERLAY__ && null != h && null == e1 && k.toolbarType !== Q.OW.NONE && !e8,
        tk = (0, et.c)({
            channel: j,
            type: k,
            activeCommand: e1,
            pendingReply: H,
            pendingScheduledMessage: eH,
            selectedAutocompleteInputType: tN,
        }),
        tU = 0 === f.trim().length,
        tG = k.layout === Q.gy.INLINE,
        tB = k.layout === Q.gy.FLUSH,
        tZ = (0, r.jsx)(en.Z, {
            type: k,
            disabled: e8,
            channel: j,
            handleSubmit: td,
            isEmpty: tU,
            showAllButtons: e$,
        }),
        tF = tM
            ? (0, r.jsx)(ei.Z, {
                  type: k,
                  textValue: f,
                  className: eb,
                  maxCharacterCount: eh,
                  showRemainingCharsAfterCount: eg,
              })
            : null;
    return (0, r.jsx)(A.f6, {
        value: ta,
        children: (0, r.jsxs)(b.Gt, {
            value: eW,
            children: [
                tj && e9
                    ? (0, r.jsx)(es.Z, {
                          editorRef: eq,
                          options: k.markdown,
                          channel: j,
                      })
                    : tj
                      ? (0, r.jsx)(ea.Z, {
                            ref: eQ,
                            editorRef: eq,
                            containerRef: eX,
                            options: k.markdown,
                        })
                      : null,
                (0, r.jsxs)("div", {
                    ref: eK,
                    className: o()(O, {
                        [ed.channelTextArea]: !0,
                        [ed.channelTextAreaDisabled]: tx,
                        [ed.highlighted]: ef,
                        [ed.textAreaMobileThemed]: d.tq,
                        [ed.inlineContainer]: tG,
                        [ed.flushContainer]: tB,
                        [ed.error]: null != B,
                    }),
                    children: [
                        tG || tB ? null : (0, r.jsx)(et.Z, { bars: tk }),
                        (0, r.jsxs)("div", {
                            ref: eX,
                            onScroll: tb,
                            className: o()(T, {
                                [ed.scrollableContainer]: !0,
                                [ed.themedBackground]: !eZ,
                                [ed.hasStackedBar]: tk.stacked.length > 0,
                            }),
                            children: [
                                (0, r.jsx)($.Z, {
                                    channelId: j.id,
                                    chatInputType: k,
                                }),
                                k.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(er.Z, {
                                          channelId: j.id,
                                          type: k,
                                          canAttachFiles: e5,
                                      }),
                                (0, r.jsxs)("div", {
                                    className: o()(ed.inner, {
                                        [ed.innerDisabled]: tx,
                                        [ed.sansAttachButton]:
                                            k !== Q.Ie.EDIT && (null != tL || (tx && null == tL) || e3),
                                        [ed.sansAttachButtonCreateThread]: k === Q.Ie.THREAD_CREATION,
                                        [ed.sansAttachButtonCreatePost]:
                                            k === Q.Ie.CREATE_FORUM_POST || k === Q.Ie.FORWARD_MESSAGE_INPUT,
                                        [ed.sansAttachButtonUserProfileReply]: k === Q.Ie.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tC,
                                    children: [
                                        tL,
                                        (0, r.jsx)(p.tEY, {
                                            ringTarget: eK,
                                            ringClassName: ed.focusRing,
                                            children: (0, r.jsx)(J.Z, {
                                                ref: eq,
                                                id: R,
                                                focused: U,
                                                useSlate: te,
                                                textValue: f,
                                                richValue: h,
                                                disabled: e8,
                                                placeholder: L,
                                                required: P,
                                                accessibilityLabel: M,
                                                isPreviewing: (e3 || e4) && e7,
                                                channel: j,
                                                type: k,
                                                canPasteFiles: e5,
                                                uploadPromptCharacterCount: el.en1,
                                                maxCharacterCount: null != eh ? eh : tn,
                                                allowNewLines: eE,
                                                "aria-describedby": ej,
                                                onChange: tl,
                                                onResize: tO,
                                                onBlur: K,
                                                onFocus: z,
                                                onKeyDown: ee,
                                                onSubmit: tu,
                                                onTab: tv,
                                                onEnter: tI,
                                                onMoveSelection: tS,
                                                onSelectionChanged: to,
                                                onMaybeShowAutocomplete: t_,
                                                onHideAutocomplete: tp,
                                                promptToUpload: eu,
                                                fontSize: tr,
                                                spellcheckEnabled: ti,
                                                canOnlyUseTextCommands: tD,
                                                isEditorIdle: tR,
                                                currentAutocompleteType: tP,
                                                className: o()(
                                                    {
                                                        [ed.textAreaThreadCreation]: k === Q.Ie.THREAD_CREATION,
                                                        [ed.profileBioInput]: k === Q.Ie.PROFILE_BIO_INPUT,
                                                        [ed.overlayInlineReply]: k === Q.Ie.OVERLAY_INLINE_REPLY,
                                                    },
                                                    C,
                                                ),
                                                "aria-labelledby": ek,
                                                showValueWhenDisabled: eY,
                                            }),
                                        }),
                                        tZ,
                                    ],
                                }),
                            ],
                        }),
                        tt
                            ? null
                            : (0, r.jsx)(I.Z, {
                                  ref: ez,
                                  channel: j,
                                  canOnlyUseTextCommands: tD,
                              }),
                        (0, r.jsx)(S.Z, {
                            ref: tf,
                            channel: j,
                            canMentionRoles: e_,
                            canMentionChannels: ep,
                            useNewSlashCommands: te,
                            canOnlyUseTextCommands: tD,
                            canSendStickers: null == (l = k.stickers) ? void 0 : l.allowSending,
                            canSendSoundmoji: null == (u = k.soundmoji) ? void 0 : u.allowSending,
                            textValue: f,
                            focused: U,
                            isEditorIdle: tR,
                            expressionPickerView: tT,
                            type: k,
                            targetRef: eK,
                            editorRef: eq,
                            onSendMessage: tu,
                            onSendSticker: tg,
                            onVisibilityChange: tw,
                            editorScrollerRef: eX,
                            editorHeight: ty,
                            barsHeight: 40 * tk.floating.length,
                            setValue: (e, t) => (null == tl ? void 0 : tl(null, e, t)),
                            position: eG,
                        }),
                        (0, r.jsx)(x.Z, {
                            textValue: f,
                            editorHeight: ty,
                            channelId: j.id,
                        }),
                        tF,
                        eB,
                    ],
                }),
                (0, r.jsx)(p.pdY, { error: B }),
                tA
                    ? null
                    : (0, r.jsx)(N.Z, {
                          positionTargetRef: eK,
                          type: k,
                          onSelectGIF: th,
                          onSelectEmoji: tm,
                          onSelectSticker: tg,
                          onSelectSound: tE,
                          channel: j,
                          closeOnModalOuterClick: eF,
                          parentModalKey: eV,
                          position: "top",
                          align: "right",
                          positionLayerClassName: ed.expressionPickerPositionLayer,
                      }),
            ],
        }),
    });
}
let ek = i.memo(i.forwardRef(ej));
