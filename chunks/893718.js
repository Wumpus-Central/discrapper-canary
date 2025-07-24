(n.d(t, { Z: () => eP }), n(388685), n(415506), n(781311));
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(836560),
    l = n(512722),
    c = n.n(l),
    u = n(94171),
    d = n(873546),
    _ = n(149765),
    f = n(442837),
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
    M = n(378233),
    k = n(665906),
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
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                ec(e, t, n[t]);
            }));
    }
    return e;
}
function ed(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function e_(e, t) {
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
let ef = 450;
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
            (i, u, d, _, f) => {
                var m, g, E;
                if (s) return;
                l(!0);
                let b = null != (g = null == (m = L.Z.getStickerPreview(o, t.drafts.type)) ? void 0 : m.map((e) => e.id)) ? g : [],
                    y = null != (E = F.Z.getUploads(o, t.drafts.type)) ? E : [],
                    O = (0, D.q5)(o);
                if (null == u && !_ && !f && (0, C.CB)(y, o)) {
                    (l(!1),
                        (0, p.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('25292'), n.e('28467'), n.e('90508'), n.e('73057'), n.e('40694'), n.e('46653'), n.e('22173'), n.e('80416')]).then(n.bind(n, 273602));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    e_(eu({}, t), {
                                        threadId: o,
                                        attachments: y,
                                        sendMessage: () => c(i, void 0, void 0, void 0, !0)
                                    })
                                );
                        }));
                    return;
                }
                e({
                    value: i,
                    uploads: y,
                    stickers: b,
                    confettiPotionEmoji: O,
                    command: u,
                    commandOptionValues: d,
                    isGif: _
                }).then((e) => {
                    var n, r;
                    let { shouldClear: i, shouldRefocus: s } = e,
                        c = eh(i, t),
                        u = null != a.current;
                    (c && (ep(o) ? h.Z.saveDraft(o, '', t.drafts.type) : u && (null == (r = a.current) || r.clearValue())), u && (l(!1), (0, A._Q)(), s && (null == (n = a.current) || n.focus())));
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
            (t === q.Ie.CREATE_FORUM_POST ? null == (a = n.current) || a.insertGIF(r) : e(r.url, void 0, void 0, !0), (0, A._Q)(), null == (i = n.current) || i.focus());
        },
        [n, e, t]
    );
}
function eE(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: r } = t,
                i = e.current;
            (null != n &&
                null != i &&
                i.insertEmoji({
                    emoji: n,
                    willClose: r
                }),
                r && (0, A._Q)());
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
                ((0, M.Hc)(i, r, a, o.drafts.type)
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
            (null != n &&
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
                null == a || a.focus());
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
    ((0, Y.yp)({
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
        }));
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
                (n(null != t ? t : 0), null == e || e(t));
            },
            [e]
        )
    };
}
function eA(e, t, n, r) {
    let i = e.getGuildId(),
        a = (0, f.e7)([R.Z], () => null != i && R.Z.isLurking(i), [i]),
        o = (0, f.e7)([U.ZP, Z.default], () => {
            var e, t;
            let n = Z.default.getCurrentUser();
            return null != (t = null != i && null != n ? (null == (e = U.ZP.getMember(i, n.id)) ? void 0 : e.isPending) : null) && t;
        }),
        s = (0, f.cj)(
            [G.Z],
            () => {
                var i, a;
                let s = e.isPrivate(),
                    l = G.Z.computePermissions(e),
                    c = _.e$(l, ea.Plq.CREATE_PUBLIC_THREADS) || _.e$(l, ea.Plq.CREATE_PRIVATE_THREADS),
                    u = (!(null == (i = t.permissions) ? void 0 : i.requireCreateTherads) || c) && (!(null == (a = t.permissions) ? void 0 : a.requireSendMessages) || _.e$(l, ea.Plq.SEND_MESSAGES)),
                    d = u && _.e$(l, ea.Plq.ATTACH_FILES),
                    f = null != n,
                    p = (0, k.xl)(e);
                return {
                    disabled: r || o || (!s && !u) || p,
                    canAttachFiles: !0 === t.attachments && (s || o || d || f),
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
        o = (0, f.e7)([y.Z], () => y.Z.shouldShowPopup() && y.Z.activeViewType() === e);
    i.useEffect(
        () => () => {
            (0, A._Q)(e);
        },
        [e]
    );
    let s = i.useCallback(
            (e) => {
                (t.emit('autocomplete-visibility-change', e), e && (0, A._Q)());
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
    let { textValue: _, richValue: h, className: y, innerClassName: A, editorClassName: C, id: R, required: D, disabled: L, placeholder: x, accessibilityLabel: M, channel: k, type: U, focused: G, error: B, renderAttachButton: F, renderApplicationCommandIcon: Z, renderAppLauncherButton: H, pendingReply: Y, onChange: W, onResize: J, onBlur: es, onFocus: ec, onKeyDown: eu, onSubmit: ed, promptToUpload: e_, highlighted: ep, canMentionRoles: eh, canMentionChannels: eR, maxCharacterCount: eP, showRemainingCharsAfterCount: ew, allowNewLines: eD = !0, characterCountClassName: eL, 'aria-describedby': ex, 'aria-labelledby': eM, setEditorRef: ek, autoCompletePosition: ej, children: eU, disableThemedBackground: eG = !1, emojiPickerCloseOnModalOuterClick: eB, parentModalKey: eV, onCommandSentinelTyped: eF, pendingScheduledMessage: eZ, parseCustomEmojisForCharCount: eH = !1 } = e;
    c()(null != U, 'chat input type must be set');
    let { analyticsLocations: eY } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA),
        eW = eT(t),
        eK = i.useRef(null),
        ez = i.useRef(null),
        eq = i.useRef(null),
        eX = i.useRef(null);
    null == ek || ek(ez.current);
    let eQ = (0, I.Q)(k.id),
        [eJ, e$] = i.useState(!eQ);
    (0, m.PM)(eW, (e) => {
        let { width: t } = e;
        return e$(!eQ && (null == t || t > ef));
    });
    let { activeCommand: e0, activeCommandSection: e1 } = (0, f.cj)([O.Z], () => {
            var e, t;
            return {
                activeCommand: (null == (e = U.commands) ? void 0 : e.enabled) ? O.Z.getActiveCommand(k.id) : null,
                activeCommandSection: (null == (t = U.commands) ? void 0 : t.enabled) ? O.Z.getActiveCommandSection(k.id) : null
            };
        }),
        { isLurking: e2, isPendingMember: e3, disabled: e4, canAttachFiles: e5, canCreateThreads: e6, canEveryoneSendMessages: e8 } = eA(k, U, e0, L),
        e7 = U.toolbarType === q.OW.STATIC,
        e9 = !j.dN.useSetting() && !(0, K.isAndroidWeb)() && null != window.ResizeObserver,
        te = !e9 || !(null == (n = U.commands) ? void 0 : n.enabled) || !G || _ !== eo.GI,
        tt = (0, P.Z)(),
        { fontSize: tn } = (0, f.cj)([g.Z], () => ({ fontSize: g.Z.fontSize })),
        tr = (0, f.e7)([V.Z], () => V.Z.isEnabled()),
        ti = i.useRef(_);
    ti.current = _;
    let ta = i.useCallback(
        (e, t, n) => {
            var r;
            (t === eo.GI && '' === ti.current && (null == (r = U.commands) ? void 0 : r.enabled) && (null == eF || eF()), null == W || W(e, t, n));
        },
        [W, eF, null == (a = U.commands) ? void 0 : a.enabled]
    );
    eO(U, e4);
    let { eventEmitter: to, handleEditorSelectionChanged: ts } = ev(ez, _, h),
        { submitting: tl, submit: tc, handleSubmit: tu } = em(ed, U, ez, k.id),
        { autocompleteRef: td, handleMaybeShowAutocomplete: t_, handleHideAutocomplete: tf } = eI(),
        tp = eg(tc, U, ez),
        th = eE(ez),
        tm = eb({
            editorRef: ez,
            disabled: e4,
            textValue: _,
            channelId: k.id,
            chatInputType: U,
            submit: ed
        }),
        tg = ey(ez, k),
        tE = i.useCallback(() => {
            var e;
            return null == eX || null == (e = eX.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: tb, handleResize: ty } = eS(J),
        { handleTab: tO, handleEnter: tv, handleMoveSelection: tI } = eC(td, eK, te),
        { expressionPickerView: tT, shouldHideExpressionPicker: tS, handleAutocompleteVisibilityChange: tA, handleOuterClick: tN } = eN(U, to, ez);
    (0, z.S)(to, k.guild_id, k.id);
    let tC = null != Y,
        tR = (e4 && !((e2 || e3) && e8)) || (tl && (null == (s = U.submit) ? void 0 : s.useDisabledStylesOnSubmit)),
        tP = null;
    null != e0 ? (tP = null == Z ? void 0 : Z(e0, e1, el.attachButton)) : (!e4 || e6) && (tP = null == F ? void 0 : F(tC, el.attachButton));
    let tw = e9 && null != h && !e4 && U.showCharacterCount && null == e0,
        tD = e9 && !__OVERLAY__ && null != h && null == e0 && U.toolbarType !== q.OW.NONE,
        tL = (0, $.c)({
            channel: k,
            type: U,
            activeCommand: e0,
            pendingReply: Y,
            pendingScheduledMessage: eZ
        }),
        tx = 0 === _.trim().length,
        tM = U.layout === q.gy.INLINE,
        tk = U.layout === q.gy.FLUSH,
        tj = (0, r.jsx)(ee.Z, {
            type: U,
            disabled: e4,
            channel: k,
            handleSubmit: tu,
            isEmpty: tx,
            showAllButtons: eJ,
            children: null == H ? void 0 : H()
        }),
        tU = tw
            ? (0, r.jsx)(en.Z, {
                  type: U,
                  textValue: _,
                  className: eL,
                  maxCharacterCount: eP,
                  showRemainingCharsAfterCount: ew,
                  parseCustomEmojisForCharCount: eH
              })
            : null;
    return (0, r.jsx)(S.f6, {
        value: to,
        children: (0, r.jsxs)(b.Gt, {
            value: eY,
            children: [
                tD && e7
                    ? (0, r.jsx)(ei.Z, {
                          editorRef: ez,
                          options: U.markdown,
                          channel: k
                      })
                    : tD
                      ? (0, r.jsx)(er.Z, {
                            ref: eX,
                            editorRef: ez,
                            containerRef: eq,
                            options: U.markdown
                        })
                      : null,
                (0, r.jsxs)('div', {
                    ref: eW,
                    className: o()(y, {
                        [el.channelTextArea]: !0,
                        [el.channelTextAreaDisabled]: tR,
                        [el.highlighted]: ep,
                        [el.textAreaMobileThemed]: d.tq,
                        [el.inlineContainer]: tM,
                        [el.flushContainer]: tk,
                        [el.error]: null != B
                    }),
                    children: [
                        tM || tk ? null : (0, r.jsx)($.Z, { bars: tL }),
                        (0, r.jsxs)('div', {
                            ref: eq,
                            onScroll: tE,
                            className: o()(A, {
                                [el.scrollableContainer]: !0,
                                [el.themedBackground]: !eG,
                                [el.hasStackedBar]: tL.stacked.length > 0
                            }),
                            children: [
                                (0, r.jsx)(Q.Z, {
                                    channelId: k.id,
                                    chatInputType: U
                                }),
                                U.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(et.Z, {
                                          channelId: k.id,
                                          type: U,
                                          canAttachFiles: e5
                                      }),
                                (0, r.jsxs)('div', {
                                    className: o()(el.inner, {
                                        [el.innerDisabled]: tR,
                                        [el.sansAttachButton]: U !== q.Ie.EDIT && (null != tP || (tR && null == tP) || e2),
                                        [el.sansAttachButtonCreateThread]: U === q.Ie.THREAD_CREATION,
                                        [el.sansAttachButtonCreatePost]: U === q.Ie.CREATE_FORUM_POST || U === q.Ie.FORWARD_MESSAGE_INPUT,
                                        [el.sansAttachButtonUserProfileReply]: U === q.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tN,
                                    children: [
                                        tP,
                                        (0, r.jsx)(p.tEY, {
                                            ringTarget: eW,
                                            ringClassName: el.focusRing,
                                            children: (0, r.jsx)(X.Z, {
                                                ref: ez,
                                                id: R,
                                                focused: G,
                                                useSlate: e9,
                                                textValue: _,
                                                richValue: h,
                                                disabled: e4,
                                                placeholder: x,
                                                required: D,
                                                accessibilityLabel: M,
                                                isPreviewing: (e2 || e3) && e8,
                                                channel: k,
                                                type: U,
                                                canPasteFiles: e5,
                                                uploadPromptCharacterCount: ea.en1,
                                                maxCharacterCount: null != eP ? eP : tt,
                                                allowNewLines: eD,
                                                'aria-describedby': ex,
                                                onChange: ta,
                                                onResize: ty,
                                                onBlur: es,
                                                onFocus: ec,
                                                onKeyDown: eu,
                                                onSubmit: tc,
                                                onTab: tO,
                                                onEnter: tv,
                                                onMoveSelection: tI,
                                                onSelectionChanged: ts,
                                                onMaybeShowAutocomplete: t_,
                                                onHideAutocomplete: tf,
                                                promptToUpload: e_,
                                                fontSize: tn,
                                                spellcheckEnabled: tr,
                                                canOnlyUseTextCommands: tC,
                                                className: o()(
                                                    {
                                                        [el.textAreaThreadCreation]: U === q.Ie.THREAD_CREATION,
                                                        [el.profileBioInput]: U === q.Ie.PROFILE_BIO_INPUT,
                                                        [el.overlayInlineReply]: U === q.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    C
                                                ),
                                                'aria-labelledby': eM
                                            })
                                        }),
                                        tj
                                    ]
                                })
                            ]
                        }),
                        te
                            ? null
                            : (0, r.jsx)(v.Z, {
                                  ref: eK,
                                  channel: k,
                                  canOnlyUseTextCommands: tC
                              }),
                        (0, r.jsx)(T.Z, {
                            ref: td,
                            channel: k,
                            canMentionRoles: eh,
                            canMentionChannels: eR,
                            useNewSlashCommands: e9,
                            canOnlyUseTextCommands: tC,
                            canSendStickers: null == (l = U.stickers) ? void 0 : l.allowSending,
                            canSendSoundmoji: null == (u = U.soundmoji) ? void 0 : u.allowSending,
                            textValue: _,
                            focused: G,
                            expressionPickerView: tT,
                            type: U,
                            targetRef: eW,
                            editorRef: ez,
                            onSendMessage: tc,
                            onSendSticker: tm,
                            onVisibilityChange: tA,
                            editorHeight: tb,
                            setValue: (e, t) => (null == ta ? void 0 : ta(null, e, t)),
                            position: ej
                        }),
                        (0, r.jsx)(w.Z, {
                            textValue: _,
                            editorHeight: tb,
                            channelId: k.id
                        }),
                        tU,
                        eU
                    ]
                }),
                (0, r.jsx)(p.pdY, { error: B }),
                tS
                    ? null
                    : (0, r.jsx)(N.Z, {
                          positionTargetRef: eW,
                          type: U,
                          onSelectGIF: tp,
                          onSelectEmoji: th,
                          onSelectSticker: tm,
                          onSelectSound: tg,
                          channel: k,
                          closeOnModalOuterClick: eB,
                          parentModalKey: eV,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: el.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
let eP = i.memo(i.forwardRef(eR));
