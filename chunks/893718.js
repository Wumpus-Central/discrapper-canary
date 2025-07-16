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
                    (l(!1),
                        (0, p.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('25292'), n.e('28467'), n.e('90508'), n.e('38626'), n.e('40694'), n.e('46653'), n.e('22173'), n.e('13653')]).then(n.bind(n, 273602));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    ef(eu({}, t), {
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
                    isGif: f
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
    let { textValue: f, richValue: h, className: y, innerClassName: A, editorClassName: C, id: R, required: D, disabled: L, placeholder: x, accessibilityLabel: k, channel: M, type: U, focused: G, error: B, renderAttachButton: F, renderApplicationCommandIcon: Z, renderAppLauncherButton: H, pendingReply: Y, onChange: W, onResize: J, onBlur: es, onFocus: ec, onKeyDown: eu, onSubmit: ed, promptToUpload: ef, highlighted: ep, canMentionRoles: eh, canMentionChannels: eR, maxCharacterCount: eP, showRemainingCharsAfterCount: ew, allowNewLines: eD = !0, characterCountClassName: eL, 'aria-describedby': ex, 'aria-labelledby': ek, setEditorRef: eM, autoCompletePosition: ej, children: eU, disableThemedBackground: eG = !1, emojiPickerCloseOnModalOuterClick: eB, parentModalKey: eV, onCommandSentinelTyped: eF, pendingScheduledMessage: eZ } = e;
    c()(null != U, 'chat input type must be set');
    let { analyticsLocations: eH } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA),
        eY = eT(t),
        eW = i.useRef(null),
        eK = i.useRef(null),
        ez = i.useRef(null),
        eq = i.useRef(null);
    null == eM || eM(eK.current);
    let eX = (0, I.Q)(M.id),
        [eQ, eJ] = i.useState(!eX);
    (0, m.PM)(eY, (e) => {
        let { width: t } = e;
        return eJ(!eX && (null == t || t > e_));
    });
    let { activeCommand: e$, activeCommandSection: e0 } = (0, _.cj)([O.Z], () => {
            var e, t;
            return {
                activeCommand: (null == (e = U.commands) ? void 0 : e.enabled) ? O.Z.getActiveCommand(M.id) : null,
                activeCommandSection: (null == (t = U.commands) ? void 0 : t.enabled) ? O.Z.getActiveCommandSection(M.id) : null
            };
        }),
        { isLurking: e1, isPendingMember: e2, disabled: e3, canAttachFiles: e4, canCreateThreads: e5, canEveryoneSendMessages: e6 } = eA(M, U, e$, L),
        e8 = U.toolbarType === q.OW.STATIC,
        e7 = !j.dN.useSetting() && !(0, K.isAndroidWeb)() && null != window.ResizeObserver,
        e9 = !e7 || !(null == (n = U.commands) ? void 0 : n.enabled) || !G || f !== eo.GI,
        te = (0, P.Z)(),
        { fontSize: tt } = (0, _.cj)([g.Z], () => ({ fontSize: g.Z.fontSize })),
        tn = (0, _.e7)([V.Z], () => V.Z.isEnabled()),
        tr = i.useRef(f);
    tr.current = f;
    let ti = i.useCallback(
        (e, t, n) => {
            var r;
            (t === eo.GI && '' === tr.current && (null == (r = U.commands) ? void 0 : r.enabled) && (null == eF || eF()), null == W || W(e, t, n));
        },
        [W, eF, null == (a = U.commands) ? void 0 : a.enabled]
    );
    eO(U, e3);
    let { eventEmitter: ta, handleEditorSelectionChanged: to } = ev(eK, f, h),
        { submitting: ts, submit: tl, handleSubmit: tc } = em(ed, U, eK, M.id),
        { autocompleteRef: tu, handleMaybeShowAutocomplete: td, handleHideAutocomplete: tf } = eI(),
        t_ = eg(tl, U, eK),
        tp = eE(eK),
        th = eb({
            editorRef: eK,
            disabled: e3,
            textValue: f,
            channelId: M.id,
            chatInputType: U,
            submit: ed
        }),
        tm = ey(eK, M),
        tg = i.useCallback(() => {
            var e;
            return null == eq || null == (e = eq.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: tE, handleResize: tb } = eS(J),
        { handleTab: ty, handleEnter: tO, handleMoveSelection: tv } = eC(tu, eW, e9),
        { expressionPickerView: tI, shouldHideExpressionPicker: tT, handleAutocompleteVisibilityChange: tS, handleOuterClick: tA } = eN(U, ta, eK);
    (0, z.S)(ta, M.guild_id, M.id);
    let tN = null != Y,
        tC = (e3 && !((e1 || e2) && e6)) || (ts && (null == (s = U.submit) ? void 0 : s.useDisabledStylesOnSubmit)),
        tR = null;
    null != e$ ? (tR = null == Z ? void 0 : Z(e$, e0, el.attachButton)) : (!e3 || e5) && (tR = null == F ? void 0 : F(tN, el.attachButton));
    let tP = e7 && null != h && !e3 && U.showCharacterCount && null == e$,
        tw = e7 && !__OVERLAY__ && null != h && null == e$ && U.toolbarType !== q.OW.NONE,
        tD = (0, $.c)({
            channel: M,
            type: U,
            activeCommand: e$,
            pendingReply: Y,
            pendingScheduledMessage: eZ
        }),
        tL = 0 === f.trim().length,
        tx = U.layout === q.gy.INLINE,
        tk = U.layout === q.gy.FLUSH,
        tM = (0, r.jsx)(ee.Z, {
            type: U,
            disabled: e3,
            channel: M,
            handleSubmit: tc,
            isEmpty: tL,
            showAllButtons: eQ,
            children: null == H ? void 0 : H()
        }),
        tj = tP
            ? (0, r.jsx)(en.Z, {
                  type: U,
                  textValue: f,
                  className: eL,
                  maxCharacterCount: eP,
                  showRemainingCharsAfterCount: ew
              })
            : null;
    return (0, r.jsx)(S.f6, {
        value: ta,
        children: (0, r.jsxs)(b.Gt, {
            value: eH,
            children: [
                tw && e8
                    ? (0, r.jsx)(ei.Z, {
                          editorRef: eK,
                          options: U.markdown,
                          channel: M
                      })
                    : tw
                      ? (0, r.jsx)(er.Z, {
                            ref: eq,
                            editorRef: eK,
                            containerRef: ez,
                            options: U.markdown
                        })
                      : null,
                (0, r.jsxs)('div', {
                    ref: eY,
                    className: o()(y, {
                        [el.channelTextArea]: !0,
                        [el.channelTextAreaDisabled]: tC,
                        [el.highlighted]: ep,
                        [el.textAreaMobileThemed]: d.tq,
                        [el.inlineContainer]: tx,
                        [el.flushContainer]: tk,
                        [el.error]: null != B
                    }),
                    children: [
                        tx || tk ? null : (0, r.jsx)($.Z, { bars: tD }),
                        (0, r.jsxs)('div', {
                            ref: ez,
                            onScroll: tg,
                            className: o()(A, {
                                [el.scrollableContainer]: !0,
                                [el.themedBackground]: !eG,
                                [el.hasStackedBar]: tD.stacked.length > 0
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
                                          canAttachFiles: e4
                                      }),
                                (0, r.jsxs)('div', {
                                    className: o()(el.inner, {
                                        [el.innerDisabled]: tC,
                                        [el.sansAttachButton]: U !== q.Ie.EDIT && (null != tR || (tC && null == tR) || e1),
                                        [el.sansAttachButtonCreateThread]: U === q.Ie.THREAD_CREATION,
                                        [el.sansAttachButtonCreatePost]: U === q.Ie.CREATE_FORUM_POST || U === q.Ie.FORWARD_MESSAGE_INPUT,
                                        [el.sansAttachButtonUserProfileReply]: U === q.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tA,
                                    children: [
                                        tR,
                                        (0, r.jsx)(p.tEY, {
                                            ringTarget: eY,
                                            ringClassName: el.focusRing,
                                            children: (0, r.jsx)(X.Z, {
                                                ref: eK,
                                                id: R,
                                                focused: G,
                                                useSlate: e7,
                                                textValue: f,
                                                richValue: h,
                                                disabled: e3,
                                                placeholder: x,
                                                required: D,
                                                accessibilityLabel: k,
                                                isPreviewing: (e1 || e2) && e6,
                                                channel: M,
                                                type: U,
                                                canPasteFiles: e4,
                                                uploadPromptCharacterCount: ea.en1,
                                                maxCharacterCount: null != eP ? eP : te,
                                                allowNewLines: eD,
                                                'aria-describedby': ex,
                                                onChange: ti,
                                                onResize: tb,
                                                onBlur: es,
                                                onFocus: ec,
                                                onKeyDown: eu,
                                                onSubmit: tl,
                                                onTab: ty,
                                                onEnter: tO,
                                                onMoveSelection: tv,
                                                onSelectionChanged: to,
                                                onMaybeShowAutocomplete: td,
                                                onHideAutocomplete: tf,
                                                promptToUpload: ef,
                                                fontSize: tt,
                                                spellcheckEnabled: tn,
                                                canOnlyUseTextCommands: tN,
                                                className: o()(
                                                    {
                                                        [el.textAreaThreadCreation]: U === q.Ie.THREAD_CREATION,
                                                        [el.profileBioInput]: U === q.Ie.PROFILE_BIO_INPUT,
                                                        [el.overlayInlineReply]: U === q.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    C
                                                ),
                                                'aria-labelledby': ek
                                            })
                                        }),
                                        tM
                                    ]
                                })
                            ]
                        }),
                        e9
                            ? null
                            : (0, r.jsx)(v.Z, {
                                  ref: eW,
                                  channel: M,
                                  canOnlyUseTextCommands: tN
                              }),
                        (0, r.jsx)(T.Z, {
                            ref: tu,
                            channel: M,
                            canMentionRoles: eh,
                            canMentionChannels: eR,
                            useNewSlashCommands: e7,
                            canOnlyUseTextCommands: tN,
                            canSendStickers: null == (l = U.stickers) ? void 0 : l.allowSending,
                            canSendSoundmoji: null == (u = U.soundmoji) ? void 0 : u.allowSending,
                            textValue: f,
                            focused: G,
                            expressionPickerView: tI,
                            type: U,
                            targetRef: eY,
                            editorRef: eK,
                            onSendMessage: tl,
                            onSendSticker: th,
                            onVisibilityChange: tS,
                            editorHeight: tE,
                            setValue: (e, t) => (null == ti ? void 0 : ti(null, e, t)),
                            position: ej
                        }),
                        (0, r.jsx)(w.Z, {
                            textValue: f,
                            editorHeight: tE,
                            channelId: M.id
                        }),
                        tj,
                        eU
                    ]
                }),
                (0, r.jsx)(p.pdY, { error: B }),
                tT
                    ? null
                    : (0, r.jsx)(N.Z, {
                          positionTargetRef: eY,
                          type: U,
                          onSelectGIF: t_,
                          onSelectEmoji: tp,
                          onSelectSticker: th,
                          onSelectSound: tm,
                          channel: M,
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
