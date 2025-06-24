n.d(t, { Z: () => eP }), n(388685), n(415506), n(781311);
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
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
    y = n(541099),
    O = n(998698),
    v = n(271668),
    I = n(307508),
    T = n(326133),
    S = n(570220),
    A = n(28546),
    N = n(805680),
    C = n(368844),
    R = n(41776),
    P = n(849522),
    w = n(780291),
    D = n(328908),
    L = n(913663),
    x = n(268350),
    k = n(378233),
    M = n(665906),
    j = n(695346),
    U = n(271383),
    G = n(496675),
    B = n(944486),
    V = n(398327),
    F = n(117530),
    Z = n(594174),
    H = n(626135),
    Y = n(459273),
    W = n(700785),
    K = n(358085),
    z = n(746877),
    q = n(541716),
    X = n(667829),
    Q = n(562267),
    J = n(376918),
    $ = n(760196),
    ee = n(258696),
    et = n(303628),
    en = n(472243),
    er = n(872635),
    ei = n(676108),
    ea = n(981631),
    eo = n(761652),
    es = n(957825),
    el = n(302195);
function ec(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function eu(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                ec(e, t, n[t]);
            });
    }
    return e;
}
function ed(e, t) {
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
function ef(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ed(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let e_ = 450;
function ep(e) {
    return e !== B.Z.getChannelId();
}
function eh(e, t) {
    var n, r;
    return null != (r = e && (null == (n = t.submit) ? void 0 : n.clearOnSubmit)) && r;
}
function em(e, t, a, o) {
    let [s, l] = i.useState(!1),
        c = i.useCallback(
            (i, u, d, f, _) => {
                var m, g, E;
                if (s) return;
                l(!0);
                let b = null != (g = null == (m = L.Z.getStickerPreview(o, t.drafts.type)) ? void 0 : m.map((e) => e.id)) ? g : [],
                    y = null != (E = F.Z.getUploads(o, t.drafts.type)) ? E : [],
                    O = (0, D.q5)(o);
                if (null == u && !f && !_ && (0, C.CB)(y, o)) {
                    l(!1),
                        (0, p.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('25292'), n.e('90508'), n.e('28467'), n.e('38626'), n.e('40694'), n.e('56179'), n.e('22173'), n.e('21815')]).then(n.bind(n, 273602));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    ef(eu({}, t), {
                                        threadId: o,
                                        attachments: y,
                                        sendMessage: () => c(i, void 0, void 0, void 0, !0)
                                    })
                                );
                        });
                    return;
                }
                e({
                    value: i,
                    uploads: y,
                    stickers: b,
                    confettiPotionEmoji: O,
                    command: u,
                    commandOptionValues: d,
                    isGif: f
                }).then((e) => {
                    var n, r;
                    let { shouldClear: i, shouldRefocus: s } = e,
                        c = eh(i, t),
                        u = null != a.current;
                    c && (ep(o) ? h.Z.saveDraft(o, '', t.drafts.type) : u && (null == (r = a.current) || r.clearValue())), u && (l(!1), (0, A._Q)(), s && (null == (n = a.current) || n.focus()));
                });
            },
            [a, e, s, t, o]
        );
    return {
        submitting: s,
        submit: c,
        handleSubmit: i.useCallback(
            (e) => {
                var t;
                null == a || null == (t = a.current) || t.submit(e);
            },
            [a]
        )
    };
}
function eg(e, t, n) {
    return i.useCallback(
        (r) => {
            var i, a;
            t === q.Ie.CREATE_FORUM_POST ? null == (a = n.current) || a.insertGIF(r) : e(r.url, void 0, void 0, !0), (0, A._Q)(), null == (i = n.current) || i.focus();
        },
        [n, e, t]
    );
}
function eE(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: r } = t,
                i = e.current;
            null != n &&
                null != i &&
                i.insertEmoji({
                    emoji: n,
                    willClose: r
                }),
                r && (0, A._Q)();
        },
        [e]
    );
}
function eb(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: o, submit: s } = e,
        { analyticsLocations: l } = (0, b.ZP)();
    return i.useCallback(
        (e, i) => {
            var c, u;
            n ||
                ((0, k.Hc)(i, r, a, o.drafts.type)
                    ? ((0, J._H)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != L.Z.getStickerPreview(a, o.drafts.type),
                          analyticsLocations: l
                      }),
                      (0, x.eu)(a, e, o.drafts.type))
                    : (s({
                          value: '',
                          uploads: void 0,
                          stickers: [e.id]
                      }),
                      null == (u = t.current) || u.clearValue()),
                (0, A._Q)(),
                null == (c = t.current) || c.focus());
        },
        [n, r, a, o.drafts.type, t, l, s]
    );
}
function ey(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let a = e.current;
            null != n &&
                null != a &&
                (H.default.track(ea.rMx.SOUNDMOJI_SELECT, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    sound_guild_id: n.guildId,
                    sound_id: n.soundId,
                    source: r
                }),
                a.insertSound(n)),
                i && (0, A._Q)(),
                null == a || a.focus();
        },
        [e, t.id, t.guild_id]
    );
}
function eO(e, t) {
    let n = i.useCallback(() => {
            t || (0, A.RO)(es.X1.EMOJI, e);
        }, [t, e]),
        r = i.useCallback(() => {
            var n;
            !t && (null == (n = e.gifs) ? void 0 : n.allowSending) && (0, A.RO)(es.X1.GIF, e);
        }, [t, e]),
        a = i.useCallback(() => {
            var n;
            !t && (null == (n = e.stickers) ? void 0 : n.allowSending) && (0, A.RO)(es.X1.STICKER, e);
        }, [t, e]);
    (0, Y.yp)({
        event: ea.CkL.TOGGLE_EMOJI_POPOUT,
        handler: n
    }),
        (0, Y.yp)({
            event: ea.CkL.TOGGLE_GIF_PICKER,
            handler: r
        }),
        (0, Y.yp)({
            event: ea.CkL.TOGGLE_STICKER_PICKER,
            handler: a
        });
}
function ev(e, t, n) {
    let [r] = i.useState(() => new s.EventEmitter());
    i.useEffect(() => {
        r.emit('text-changed', t, n);
    }, [t, n, r]);
    let a = (t) => {
        null != e.current && r.emit('selection-changed', t);
    };
    return {
        eventEmitter: r,
        handleEditorSelectionChanged: a
    };
}
function eI() {
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
        handleHideAutocomplete: n
    };
}
function eT(e) {
    let t = i.useRef(null);
    if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
    return null == e ? t : e;
}
function eS(e) {
    let [t, n] = i.useState(0);
    return {
        editorHeight: t,
        handleResize: i.useCallback(
            (t) => {
                n(null != t ? t : 0), null == e || e(t);
            },
            [e]
        )
    };
}
function eA(e, t, n, r) {
    let i = e.getGuildId(),
        a = (0, _.e7)([R.Z], () => null != i && R.Z.isLurking(i), [i]),
        o = (0, _.e7)([U.ZP, Z.default], () => {
            var e, t;
            let n = Z.default.getCurrentUser();
            return null != (t = null != i && null != n ? (null == (e = U.ZP.getMember(i, n.id)) ? void 0 : e.isPending) : null) && t;
        }),
        s = (0, _.cj)(
            [G.Z],
            () => {
                var i, a;
                let s = e.isPrivate(),
                    l = G.Z.computePermissions(e),
                    c = f.e$(l, ea.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, ea.Plq.CREATE_PRIVATE_THREADS),
                    u = (!(null == (i = t.permissions) ? void 0 : i.requireCreateTherads) || c) && (!(null == (a = t.permissions) ? void 0 : a.requireSendMessages) || f.e$(l, ea.Plq.SEND_MESSAGES)),
                    d = u && f.e$(l, ea.Plq.ATTACH_FILES),
                    _ = null != n,
                    p = (0, M.xl)(e);
                return {
                    disabled: r || o || (!s && !u) || p,
                    canAttachFiles: !0 === t.attachments && (s || o || d || _),
                    canCreateThreads: c,
                    canEveryoneSendMessages: W.Uu(ea.Plq.SEND_MESSAGES, e)
                };
            },
            [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]
        );
    return eu(
        {
            isLurking: a,
            isPendingMember: o
        },
        s
    );
}
function eN(e, t, n) {
    let [r, a] = (0, A.Iu)((e) => [e.activeView, e.activeViewType], u.X),
        o = (0, _.e7)([y.Z], () => y.Z.shouldShowPopup() && y.Z.activeViewType() === e);
    i.useEffect(
        () => () => {
            (0, A._Q)(e);
        },
        [e]
    );
    let s = i.useCallback(
            (e) => {
                t.emit('autocomplete-visibility-change', e), e && (0, A._Q)();
            },
            [t]
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
        handleOuterClick: l
    };
}
function eC(e, t, n) {
    let r = i.useCallback(() => {
        var r, i;
        return !!(!n && (null == (r = t.current) ? void 0 : r.onTabOrEnter(!1))) || (null == (i = e.current) ? void 0 : i.onTabOrEnter(!1)) || !1;
    }, [n, t, e]);
    return {
        handleTab: r,
        handleEnter: i.useCallback(() => {
            var r, i;
            return !!(!n && (null == (r = t.current) ? void 0 : r.onTabOrEnter(!0))) || (null == (i = e.current) ? void 0 : i.onTabOrEnter(!0)) || !1;
        }, [n, t, e]),
        handleMoveSelection: i.useCallback(
            (r) => {
                var i, a;
                return !!(!n && (null == (i = t.current) ? void 0 : i.onMoveSelection(r))) || (null == (a = e.current) ? void 0 : a.onMoveSelection(r)) || !1;
            },
            [n, t, e]
        )
    };
}
function eR(e, t) {
    var n, a, s, l, u;
    let { textValue: f, richValue: h, className: y, innerClassName: A, editorClassName: C, id: R, required: D, disabled: L, placeholder: x, accessibilityLabel: k, channel: M, type: U, focused: G, renderAttachButton: B, renderApplicationCommandIcon: F, renderAppLauncherButton: Z, pendingReply: H, onChange: Y, onResize: W, onBlur: J, onFocus: es, onKeyDown: ec, onSubmit: eu, promptToUpload: ed, highlighted: ef, canMentionRoles: ep, canMentionChannels: eh, maxCharacterCount: eR, showRemainingCharsAfterCount: eP, allowNewLines: ew = !0, characterCountClassName: eD, 'aria-describedby': eL, 'aria-labelledby': ex, setEditorRef: ek, autoCompletePosition: eM, children: ej, disableThemedBackground: eU = !1, emojiPickerCloseOnModalOuterClick: eG, parentModalKey: eB, onCommandSentinelTyped: eV, pendingScheduledMessage: eF } = e;
    c()(null != U, 'chat input type must be set');
    let { analyticsLocations: eZ } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA),
        eH = eT(t),
        eY = i.useRef(null),
        eW = i.useRef(null),
        eK = i.useRef(null),
        ez = i.useRef(null);
    null == ek || ek(eW.current);
    let eq = (0, I.Q)(M.id),
        [eX, eQ] = i.useState(!eq);
    (0, m.PM)(eH, (e) => {
        let { width: t } = e;
        return eQ(!eq && (null == t || t > e_));
    });
    let { activeCommand: eJ, activeCommandSection: e$ } = (0, _.cj)([O.Z], () => {
            var e, t;
            return {
                activeCommand: (null == (e = U.commands) ? void 0 : e.enabled) ? O.Z.getActiveCommand(M.id) : null,
                activeCommandSection: (null == (t = U.commands) ? void 0 : t.enabled) ? O.Z.getActiveCommandSection(M.id) : null
            };
        }),
        { isLurking: e0, isPendingMember: e1, disabled: e2, canAttachFiles: e3, canCreateThreads: e4, canEveryoneSendMessages: e5 } = eA(M, U, eJ, L),
        e6 = U.toolbarType === q.OW.STATIC,
        e8 = !j.dN.useSetting() && !(0, K.isAndroidWeb)() && null != window.ResizeObserver,
        e7 = !e8 || !(null == (n = U.commands) ? void 0 : n.enabled) || !G || f !== eo.GI,
        e9 = (0, P.Z)(),
        { fontSize: te } = (0, _.cj)([g.Z], () => ({ fontSize: g.Z.fontSize })),
        tt = (0, _.e7)([V.Z], () => V.Z.isEnabled()),
        tn = i.useRef(f);
    tn.current = f;
    let tr = i.useCallback(
        (e, t, n) => {
            var r;
            t === eo.GI && '' === tn.current && (null == (r = U.commands) ? void 0 : r.enabled) && (null == eV || eV()), null == Y || Y(e, t, n);
        },
        [Y, eV, null == (a = U.commands) ? void 0 : a.enabled]
    );
    eO(U, e2);
    let { eventEmitter: ti, handleEditorSelectionChanged: ta } = ev(eW, f, h),
        { submitting: to, submit: ts, handleSubmit: tl } = em(eu, U, eW, M.id),
        { autocompleteRef: tc, handleMaybeShowAutocomplete: tu, handleHideAutocomplete: td } = eI(),
        tf = eg(ts, U, eW),
        t_ = eE(eW),
        tp = eb({
            editorRef: eW,
            disabled: e2,
            textValue: f,
            channelId: M.id,
            chatInputType: U,
            submit: eu
        }),
        th = ey(eW, M),
        tm = i.useCallback(() => {
            var e;
            return null == ez || null == (e = ez.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: tg, handleResize: tE } = eS(W),
        { handleTab: tb, handleEnter: ty, handleMoveSelection: tO } = eC(tc, eY, e7),
        { expressionPickerView: tv, shouldHideExpressionPicker: tI, handleAutocompleteVisibilityChange: tT, handleOuterClick: tS } = eN(U, ti, eW);
    (0, z.S)(ti, M.guild_id, M.id);
    let tA = null != H,
        tN = (e2 && !((e0 || e1) && e5)) || (to && (null == (s = U.submit) ? void 0 : s.useDisabledStylesOnSubmit)),
        tC = null;
    null != eJ ? (tC = null == F ? void 0 : F(eJ, e$, el.attachButton)) : (!e2 || e4) && (tC = null == B ? void 0 : B(tA, el.attachButton));
    let tR = e8 && null != h && !e2 && U.showCharacterCount && null == eJ,
        tP = e8 && !__OVERLAY__ && null != h && null == eJ && U.toolbarType !== q.OW.NONE,
        tw = (0, $.c)({
            channel: M,
            type: U,
            activeCommand: eJ,
            pendingReply: H,
            pendingScheduledMessage: eF
        }),
        tD = 0 === f.trim().length,
        tL = U.layout === q.gy.INLINE,
        tx = U.layout === q.gy.FLUSH,
        tk = (0, r.jsx)(ee.Z, {
            type: U,
            disabled: e2,
            channel: M,
            handleSubmit: tl,
            isEmpty: tD,
            showAllButtons: eX,
            children: null == Z ? void 0 : Z()
        }),
        tM = tR
            ? (0, r.jsx)(en.Z, {
                  type: U,
                  textValue: f,
                  className: eD,
                  maxCharacterCount: eR,
                  showRemainingCharsAfterCount: eP
              })
            : null;
    return (0, r.jsx)(S.f6, {
        value: ti,
        children: (0, r.jsxs)(b.Gt, {
            value: eZ,
            children: [
                tP && e6
                    ? (0, r.jsx)(ei.Z, {
                          editorRef: eW,
                          options: U.markdown,
                          channel: M
                      })
                    : tP
                      ? (0, r.jsx)(er.Z, {
                            ref: ez,
                            editorRef: eW,
                            containerRef: eK,
                            options: U.markdown
                        })
                      : null,
                (0, r.jsxs)('div', {
                    ref: eH,
                    className: o()(y, {
                        [el.channelTextArea]: !0,
                        [el.channelTextAreaDisabled]: tN,
                        [el.highlighted]: ef,
                        [el.textAreaMobileThemed]: d.tq,
                        [el.inlineContainer]: tL,
                        [el.flushContainer]: tx
                    }),
                    children: [
                        tL || tx ? null : (0, r.jsx)($.Z, { bars: tw }),
                        (0, r.jsxs)('div', {
                            ref: eK,
                            onScroll: tm,
                            className: o()(A, {
                                [el.scrollableContainer]: !0,
                                [el.themedBackground]: !eU,
                                [el.hasStackedBar]: tw.stacked.length > 0
                            }),
                            children: [
                                (0, r.jsx)(Q.Z, {
                                    channelId: M.id,
                                    chatInputType: U
                                }),
                                U.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(et.Z, {
                                          channelId: M.id,
                                          type: U,
                                          canAttachFiles: e3
                                      }),
                                (0, r.jsxs)('div', {
                                    className: o()(el.inner, {
                                        [el.innerDisabled]: tN,
                                        [el.sansAttachButton]: U !== q.Ie.EDIT && (null != tC || (tN && null == tC) || e0),
                                        [el.sansAttachButtonCreateThread]: U === q.Ie.THREAD_CREATION,
                                        [el.sansAttachButtonCreatePost]: U === q.Ie.CREATE_FORUM_POST || U === q.Ie.FORWARD_MESSAGE_INPUT,
                                        [el.sansAttachButtonUserProfileReply]: U === q.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tS,
                                    children: [
                                        tC,
                                        (0, r.jsx)(p.tEY, {
                                            ringTarget: eH,
                                            ringClassName: el.focusRing,
                                            children: (0, r.jsx)(X.Z, {
                                                ref: eW,
                                                id: R,
                                                focused: G,
                                                useSlate: e8,
                                                textValue: f,
                                                richValue: h,
                                                disabled: e2,
                                                placeholder: x,
                                                required: D,
                                                accessibilityLabel: k,
                                                isPreviewing: (e0 || e1) && e5,
                                                channel: M,
                                                type: U,
                                                canPasteFiles: e3,
                                                uploadPromptCharacterCount: ea.en1,
                                                maxCharacterCount: null != eR ? eR : e9,
                                                allowNewLines: ew,
                                                'aria-describedby': eL,
                                                onChange: tr,
                                                onResize: tE,
                                                onBlur: J,
                                                onFocus: es,
                                                onKeyDown: ec,
                                                onSubmit: ts,
                                                onTab: tb,
                                                onEnter: ty,
                                                onMoveSelection: tO,
                                                onSelectionChanged: ta,
                                                onMaybeShowAutocomplete: tu,
                                                onHideAutocomplete: td,
                                                promptToUpload: ed,
                                                fontSize: te,
                                                spellcheckEnabled: tt,
                                                canOnlyUseTextCommands: tA,
                                                className: o()(
                                                    {
                                                        [el.textAreaThreadCreation]: U === q.Ie.THREAD_CREATION,
                                                        [el.profileBioInput]: U === q.Ie.PROFILE_BIO_INPUT,
                                                        [el.overlayInlineReply]: U === q.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    C
                                                ),
                                                'aria-labelledby': ex
                                            })
                                        }),
                                        tk
                                    ]
                                })
                            ]
                        }),
                        e7
                            ? null
                            : (0, r.jsx)(v.Z, {
                                  ref: eY,
                                  channel: M,
                                  canOnlyUseTextCommands: tA
                              }),
                        (0, r.jsx)(T.Z, {
                            ref: tc,
                            channel: M,
                            canMentionRoles: ep,
                            canMentionChannels: eh,
                            useNewSlashCommands: e8,
                            canOnlyUseTextCommands: tA,
                            canSendStickers: null == (l = U.stickers) ? void 0 : l.allowSending,
                            canSendSoundmoji: null == (u = U.soundmoji) ? void 0 : u.allowSending,
                            textValue: f,
                            focused: G,
                            expressionPickerView: tv,
                            type: U,
                            targetRef: eH,
                            editorRef: eW,
                            onSendMessage: ts,
                            onSendSticker: tp,
                            onVisibilityChange: tT,
                            editorHeight: tg,
                            setValue: (e, t) => (null == tr ? void 0 : tr(null, e, t)),
                            position: eM
                        }),
                        (0, r.jsx)(w.Z, {
                            textValue: f,
                            editorHeight: tg,
                            channelId: M.id
                        }),
                        tM,
                        ej
                    ]
                }),
                tI
                    ? null
                    : (0, r.jsx)(N.Z, {
                          positionTargetRef: eH,
                          type: U,
                          onSelectGIF: tf,
                          onSelectEmoji: t_,
                          onSelectSticker: tp,
                          onSelectSound: th,
                          channel: M,
                          closeOnModalOuterClick: eG,
                          parentModalKey: eB,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: el.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
let eP = i.memo(i.forwardRef(eR));
