n.d(t, { Z: () => ex }), n(388685), n(415506), n(781311);
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
    m = n(738619),
    g = n(393238),
    E = n(607070),
    b = n(100527),
    y = n(906732),
    O = n(541099),
    v = n(998698),
    I = n(271668),
    T = n(404295),
    S = n(326133),
    A = n(405701),
    N = n(570220),
    C = n(540059),
    R = n(28546),
    P = n(805680),
    w = n(368844),
    D = n(41776),
    L = n(849522),
    x = n(780291),
    M = n(328908),
    k = n(913663),
    j = n(268350),
    U = n(378233),
    G = n(665906),
    B = n(695346),
    V = n(271383),
    F = n(496675),
    Z = n(944486),
    H = n(398327),
    Y = n(117530),
    W = n(594174),
    K = n(626135),
    z = n(459273),
    q = n(700785),
    X = n(358085),
    Q = n(746877),
    J = n(541716),
    $ = n(667829),
    ee = n(319417),
    et = n(562267),
    en = n(376918),
    er = n(760196),
    ei = n(258696),
    ea = n(303628),
    eo = n(472243),
    es = n(872635),
    el = n(676108),
    ec = n(981631),
    eu = n(761652),
    ed = n(957825),
    e_ = n(302195);
function ef(e, t, n) {
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
function ep(e) {
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
                ef(e, t, n[t]);
            });
    }
    return e;
}
function eh(e, t) {
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
function em(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eh(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eg = 450;
function eE(e) {
    return e !== Z.Z.getChannelId();
}
function eb(e, t) {
    var n, r;
    return null != (r = e && (null == (n = t.submit) ? void 0 : n.clearOnSubmit)) && r;
}
function ey(e, t, a, o) {
    let [s, l] = i.useState(!1),
        c = i.useCallback(
            (i, u, d, _, f) => {
                var m, g, E;
                if (s) return;
                l(!0);
                let b = null != (g = null == (m = k.Z.getStickerPreview(o, t.drafts.type)) ? void 0 : m.map((e) => e.id)) ? g : [],
                    y = null != (E = Y.Z.getUploads(o, t.drafts.type)) ? E : [],
                    O = (0, M.q5)(o);
                if (null == u && !_ && !f && (0, w.CB)(y, o)) {
                    l(!1),
                        (0, p.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('25292'), n.e('90508'), n.e('28467'), n.e('22173'), n.e('40694'), n.e('21958')]).then(n.bind(n, 273602));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    em(ep({}, t), {
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
                    isGif: _
                }).then((e) => {
                    var n, r;
                    let { shouldClear: i, shouldRefocus: s } = e,
                        c = eb(i, t),
                        u = null != a.current;
                    c && (eE(o) ? h.Z.saveDraft(o, '', t.drafts.type) : u && (null == (r = a.current) || r.clearValue())), u && (l(!1), (0, R._Q)(), s && (null == (n = a.current) || n.focus()));
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
function eO(e, t, n) {
    return i.useCallback(
        (r) => {
            var i, a;
            t === J.Ie.CREATE_FORUM_POST ? null == (a = n.current) || a.insertGIF(r) : e(r.url, void 0, void 0, !0), (0, R._Q)(), null == (i = n.current) || i.focus();
        },
        [n, e, t]
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
                    willClose: r
                }),
                r && (0, R._Q)();
        },
        [e]
    );
}
function eI(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: o, submit: s } = e,
        { analyticsLocations: l } = (0, y.ZP)();
    return i.useCallback(
        (e, i) => {
            var c, u;
            n ||
                ((0, U.Hc)(i, r, a, o.drafts.type)
                    ? ((0, en._H)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != k.Z.getStickerPreview(a, o.drafts.type),
                          analyticsLocations: l
                      }),
                      (0, j.eu)(a, e, o.drafts.type))
                    : (s({
                          value: '',
                          uploads: void 0,
                          stickers: [e.id]
                      }),
                      null == (u = t.current) || u.clearValue()),
                (0, R._Q)(),
                null == (c = t.current) || c.focus());
        },
        [n, r, a, o.drafts.type, t, l, s]
    );
}
function eT(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let a = e.current;
            null != n &&
                null != a &&
                (K.default.track(ec.rMx.SOUNDMOJI_SELECT, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    sound_guild_id: n.guildId,
                    sound_id: n.soundId,
                    source: r
                }),
                a.insertSound(n)),
                i && (0, R._Q)(),
                null == a || a.focus();
        },
        [e, t.id, t.guild_id]
    );
}
function eS(e, t) {
    let n = i.useCallback(() => {
            t || (0, R.RO)(ed.X1.EMOJI, e);
        }, [t, e]),
        r = i.useCallback(() => {
            var n;
            !t && (null == (n = e.gifs) ? void 0 : n.allowSending) && (0, R.RO)(ed.X1.GIF, e);
        }, [t, e]),
        a = i.useCallback(() => {
            var n;
            !t && (null == (n = e.stickers) ? void 0 : n.allowSending) && (0, R.RO)(ed.X1.STICKER, e);
        }, [t, e]);
    (0, z.yp)({
        event: ec.CkL.TOGGLE_EMOJI_POPOUT,
        handler: n
    }),
        (0, z.yp)({
            event: ec.CkL.TOGGLE_GIF_PICKER,
            handler: r
        }),
        (0, z.yp)({
            event: ec.CkL.TOGGLE_STICKER_PICKER,
            handler: a
        });
}
function eA(e, t, n) {
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
function eN() {
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
function eC(e) {
    let t = i.useRef(null);
    if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
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
            [e]
        )
    };
}
function eP(e, t, n, r) {
    let i = e.getGuildId(),
        a = (0, f.e7)([D.Z], () => null != i && D.Z.isLurking(i), [i]),
        o = (0, f.e7)([V.ZP, W.default], () => {
            var e, t;
            let n = W.default.getCurrentUser();
            return null != (t = null != i && null != n ? (null == (e = V.ZP.getMember(i, n.id)) ? void 0 : e.isPending) : null) && t;
        }),
        s = (0, f.cj)(
            [F.Z],
            () => {
                var i, a;
                let s = e.isPrivate(),
                    l = F.Z.computePermissions(e),
                    c = _.e$(l, ec.Plq.CREATE_PUBLIC_THREADS) || _.e$(l, ec.Plq.CREATE_PRIVATE_THREADS),
                    u = (!(null == (i = t.permissions) ? void 0 : i.requireCreateTherads) || c) && (!(null == (a = t.permissions) ? void 0 : a.requireSendMessages) || _.e$(l, ec.Plq.SEND_MESSAGES)),
                    d = u && _.e$(l, ec.Plq.ATTACH_FILES),
                    f = null != n,
                    p = (0, G.xl)(e);
                return {
                    disabled: r || o || (!s && !u) || p,
                    canAttachFiles: !0 === t.attachments && (s || o || d || f),
                    canCreateThreads: c,
                    canEveryoneSendMessages: q.Uu(ec.Plq.SEND_MESSAGES, e)
                };
            },
            [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]
        );
    return ep(
        {
            isLurking: a,
            isPendingMember: o
        },
        s
    );
}
function ew(e, t, n) {
    let [r, a] = (0, R.Iu)((e) => [e.activeView, e.activeViewType], u.X),
        o = (0, f.e7)([O.Z], () => O.Z.shouldShowPopup() && O.Z.activeViewType() === e),
        s = (0, C.Q3)('ChannelTextAreaContainer');
    i.useEffect(
        () => () => {
            (0, R._Q)(e);
        },
        [e]
    );
    let l = i.useCallback(
            (e) => {
                t.emit('autocomplete-visibility-change', e), e && (0, R._Q)();
            },
            [t]
        ),
        c = i.useCallback(() => {
            var e;
            null != r || (s && o) || null == (e = n.current) || e.handleOuterClick();
        }, [r, s, o, n]),
        d = null == r || null == a || a !== e;
    return {
        expressionPickerView: r,
        shouldHideExpressionPicker: d,
        handleAutocompleteVisibilityChange: l,
        handleOuterClick: c
    };
}
function eD(e, t, n) {
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
function eL(e, t) {
    var n, a, s, l, u, _, h, O;
    let { textValue: R, richValue: w, className: D, innerClassName: M, editorClassName: k, id: j, required: U, disabled: G, placeholder: V, accessibilityLabel: F, channel: Z, type: Y, focused: W, renderAttachButton: K, renderApplicationCommandIcon: z, renderAppLauncherButton: q, renderAppCommandButton: en, renderLeftAccessories: ed, pendingReply: ef, onChange: ep, onResize: eh, onBlur: em, onFocus: eE, onKeyDown: eb, onSubmit: eL, promptToUpload: ex, highlighted: eM, canMentionRoles: ek, canMentionChannels: ej, maxCharacterCount: eU, showRemainingCharsAfterCount: eG, allowNewLines: eB = !0, characterCountClassName: eV, 'aria-describedby': eF, 'aria-labelledby': eZ, setEditorRef: eH, autoCompletePosition: eY, children: eW, disableThemedBackground: eK = !1, emojiPickerCloseOnModalOuterClick: ez, parentModalKey: eq, onCommandSentinelTyped: eX, pendingScheduledMessage: eQ } = e;
    c()(null != Y, 'chat input type must be set');
    let { analyticsLocations: eJ } = (0, y.ZP)(b.Z.CHANNEL_TEXT_AREA),
        e$ = (0, C.R6)('ChannelTextAreaContainer'),
        e0 = (0, C.Q3)('ChannelTextAreaContainer'),
        e1 = eC(t),
        e2 = i.useRef(null),
        e3 = i.useRef(null),
        e4 = i.useRef(null),
        e5 = i.useRef(null);
    null == eH || eH(e3.current);
    let e6 = (0, T.h9)(Z.id),
        [e8, e7] = i.useState(!e6);
    (0, g.PM)(e1, (e) => {
        let { width: t } = e;
        return e7(!e6 && (null == t || t > eg));
    });
    let { activeCommand: e9, activeCommandSection: te } = (0, f.cj)([v.Z], () => {
            var e, t;
            return {
                activeCommand: (null == (e = Y.commands) ? void 0 : e.enabled) ? v.Z.getActiveCommand(Z.id) : null,
                activeCommandSection: (null == (t = Y.commands) ? void 0 : t.enabled) ? v.Z.getActiveCommandSection(Z.id) : null
            };
        }),
        { isLurking: tt, isPendingMember: tn, disabled: tr, canAttachFiles: ti, canCreateThreads: ta, canEveryoneSendMessages: to } = eP(Z, Y, e9, G),
        ts = Y.toolbarType === J.OW.STATIC,
        tl = !B.dN.useSetting() && !(0, X.isAndroidWeb)() && null != window.ResizeObserver,
        tc = !tl || !(null == (n = Y.commands) ? void 0 : n.enabled) || !W || R !== eu.GI,
        tu = (0, L.Z)(),
        { isSubmitButtonEnabled: td, fontSize: t_ } = (0, f.cj)([E.Z], () => ({
            fontSize: E.Z.fontSize,
            isSubmitButtonEnabled: E.Z.isSubmitButtonEnabled
        })),
        tf = (0, f.e7)([H.Z], () => H.Z.isEnabled()),
        tp = i.useRef(R);
    tp.current = R;
    let th = i.useCallback(
        (e, t, n) => {
            var r;
            t === eu.GI && '' === tp.current && (null == (r = Y.commands) ? void 0 : r.enabled) && (null == eX || eX()), null == ep || ep(e, t, n);
        },
        [ep, eX, null == (a = Y.commands) ? void 0 : a.enabled]
    );
    eS(Y, tr);
    let { eventEmitter: tm, handleEditorSelectionChanged: tg } = eA(e3, R, w),
        { submitting: tE, submit: tb, handleSubmit: ty } = ey(eL, Y, e3, Z.id),
        { autocompleteRef: tO, handleMaybeShowAutocomplete: tv, handleHideAutocomplete: tI } = eN(),
        tT = eO(tb, Y, e3),
        tS = ev(e3),
        tA = eI({
            editorRef: e3,
            disabled: tr,
            textValue: R,
            channelId: Z.id,
            chatInputType: Y,
            submit: eL
        }),
        tN = eT(e3, Z),
        tC = i.useCallback(() => {
            var e;
            return null == e5 || null == (e = e5.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: tR, handleResize: tP } = eR(eh),
        { handleTab: tw, handleEnter: tD, handleMoveSelection: tL } = eD(tO, e2, tc),
        { expressionPickerView: tx, shouldHideExpressionPicker: tM, handleAutocompleteVisibilityChange: tk, handleOuterClick: tj } = ew(Y, tm, e3);
    (0, Q.S)(tm, Z.guild_id, Z.id);
    let tU = null != ef,
        tG = (tr && !((tt || tn) && to)) || (tE && (null == (s = Y.submit) ? void 0 : s.useDisabledStylesOnSubmit)),
        tB = null;
    null != e9 ? (tB = null == z ? void 0 : z(e9, te, e_.attachButton)) : (!tr || ta) && (tB = null == K ? void 0 : K(tU, e_.attachButton));
    let tV = tl && null != w && !tr && Y.showCharacterCount && null == e9,
        tF = tl && !__OVERLAY__ && null != w && null == e9 && Y.toolbarType !== J.OW.NONE,
        tZ = (0, er.c)({
            channel: Z,
            type: Y,
            activeCommand: e9,
            pendingReply: ef,
            pendingScheduledMessage: eQ
        }),
        tH = 0 === R.trim().length,
        tY = (0, ei.G)(Z.id, Y, tH),
        tW = !0 === Y.showSlowmodeIndicator,
        tK = !0 === Y.showTypingIndicator,
        tz = e0 && Y.layout === J.gy.INLINE,
        tq = e0 && Y.layout === J.gy.FLUSH,
        tX = i.useRef(null),
        tQ = i.useCallback((e) => {
            if (e.target === tX.current) {
                var t;
                null == (t = e3.current) || t.focus();
            }
        }, []),
        tJ = (0, r.jsx)(ei.Z, {
            type: Y,
            disabled: tr,
            channel: Z,
            handleSubmit: ty,
            isEmpty: tH,
            showAllButtons: e8,
            children: e0 ? (null == q ? void 0 : q()) : null
        }),
        t$ = tV
            ? (0, r.jsx)(eo.Z, {
                  type: Y,
                  textValue: R,
                  className: eV,
                  maxCharacterCount: eU,
                  showRemainingCharsAfterCount: eG
              })
            : null,
        t0 = e$
            ? tr
                ? null
                : (0, r.jsxs)('div', {
                      className: e_.accessoryBar,
                      onClick: tQ,
                      ref: tX,
                      children: [
                          (0, r.jsxs)('div', {
                              className: e_.accessoryBarLeft,
                              children: [
                                  null == ed ? void 0 : ed(),
                                  tB,
                                  tK
                                      ? (0, r.jsx)(m.Z, {
                                            channel: Z,
                                            poggermodeEnabled: !1
                                        })
                                      : null
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: e_.accessoryBarRight,
                              children: [t$, tJ]
                          })
                      ]
                  })
            : null;
    return (0, r.jsx)(N.f6, {
        value: tm,
        children: (0, r.jsxs)(y.Gt, {
            value: eJ,
            children: [
                tF && ts
                    ? (0, r.jsx)(el.Z, {
                          editorRef: e3,
                          options: Y.markdown,
                          channel: Z
                      })
                    : tF
                      ? (0, r.jsx)(es.Z, {
                            ref: e5,
                            editorRef: e3,
                            containerRef: e4,
                            options: Y.markdown
                        })
                      : null,
                (0, r.jsxs)('div', {
                    ref: e1,
                    className: o()(D, {
                        [e_.channelTextArea]: !0,
                        [e_.channelTextAreaDisabled]: tG,
                        [e_.highlighted]: eM,
                        [e_.textAreaMobileThemed]: d.tq,
                        [e_.inlineContainer]: tz,
                        [e_.flushContainer]: tq
                    }),
                    children: [
                        tz || tq ? null : (0, r.jsx)(er.Z, { bars: tZ }),
                        (0, r.jsxs)('div', {
                            ref: e4,
                            onScroll: tC,
                            className: o()(M, {
                                [e_.scrollableContainer]: !0,
                                [e_.themedBackground]: !eK,
                                [e_.hasStackedBar]: tZ.stacked.length > 0
                            }),
                            children: [
                                (0, r.jsx)(et.Z, {
                                    channelId: Z.id,
                                    chatInputType: Y
                                }),
                                Y.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(ea.Z, {
                                          channelId: Z.id,
                                          type: Y,
                                          canAttachFiles: ti
                                      }),
                                (0, r.jsxs)('div', {
                                    className: o()(e_.inner, {
                                        [e_.innerDisabled]: tG,
                                        [e_.sansAttachButton]: Y !== J.Ie.EDIT && (null != tB || (tG && null == tB) || tt),
                                        [e_.sansAttachButtonCreateThread]: Y === J.Ie.THREAD_CREATION,
                                        [e_.sansAttachButtonCreatePost]: Y === J.Ie.CREATE_FORUM_POST || Y === J.Ie.FORWARD_MESSAGE_INPUT,
                                        [e_.sansAttachButtonUserProfileReply]: Y === J.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tj,
                                    children: [
                                        e$ ? null : tB,
                                        (0, r.jsx)(p.tEY, {
                                            ringTarget: e1,
                                            ringClassName: e_.focusRing,
                                            children: (0, r.jsx)($.Z, {
                                                ref: e3,
                                                id: j,
                                                focused: W,
                                                useSlate: tl,
                                                textValue: R,
                                                richValue: w,
                                                disabled: tr,
                                                placeholder: V,
                                                required: U,
                                                accessibilityLabel: F,
                                                isPreviewing: (tt || tn) && to,
                                                channel: Z,
                                                type: Y,
                                                canPasteFiles: ti,
                                                uploadPromptCharacterCount: ec.en1,
                                                maxCharacterCount: null != eU ? eU : tu,
                                                allowNewLines: eB,
                                                'aria-describedby': eF,
                                                onChange: th,
                                                onResize: tP,
                                                onBlur: em,
                                                onFocus: eE,
                                                onKeyDown: eb,
                                                onSubmit: tb,
                                                onTab: tw,
                                                onEnter: tD,
                                                onMoveSelection: tL,
                                                onSelectionChanged: tg,
                                                onMaybeShowAutocomplete: tv,
                                                onHideAutocomplete: tI,
                                                promptToUpload: ex,
                                                fontSize: t_,
                                                spellcheckEnabled: tf,
                                                canOnlyUseTextCommands: tU,
                                                className: o()(
                                                    {
                                                        [e_.textAreaThreadCreation]: Y === J.Ie.THREAD_CREATION,
                                                        [e_.profileBioInput]: Y === J.Ie.PROFILE_BIO_INPUT,
                                                        [e_.overlayInlineReply]: Y === J.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    k
                                                ),
                                                'aria-labelledby': eZ
                                            })
                                        }),
                                        e$
                                            ? (0, r.jsxs)('div', {
                                                  className: e_.rightAccessories,
                                                  children: [
                                                      tW ? (0, r.jsx)(A.Z, { channel: Z }) : null,
                                                      null != (O = null == en ? void 0 : en()) ? O : null,
                                                      (null == (l = Y.submit) ? void 0 : l.button) != null && ((null == (u = Y.submit) ? void 0 : u.ignorePreference) || td)
                                                          ? (0, r.jsx)(ee.Z, {
                                                                onClick: ty,
                                                                disabled: tr || tY
                                                            })
                                                          : null
                                                  ]
                                              })
                                            : tJ
                                    ]
                                })
                            ]
                        }),
                        e$ && !Y.hideAccessoryBar ? t0 : null,
                        tc
                            ? null
                            : (0, r.jsx)(I.Z, {
                                  ref: e2,
                                  channel: Z,
                                  canOnlyUseTextCommands: tU
                              }),
                        (0, r.jsx)(S.Z, {
                            ref: tO,
                            channel: Z,
                            canMentionRoles: ek,
                            canMentionChannels: ej,
                            useNewSlashCommands: tl,
                            canOnlyUseTextCommands: tU,
                            canSendStickers: null == (_ = Y.stickers) ? void 0 : _.allowSending,
                            canSendSoundmoji: null == (h = Y.soundmoji) ? void 0 : h.allowSending,
                            textValue: R,
                            focused: W,
                            expressionPickerView: tx,
                            type: Y,
                            targetRef: e1,
                            editorRef: e3,
                            onSendMessage: tb,
                            onSendSticker: tA,
                            onVisibilityChange: tk,
                            editorHeight: tR,
                            setValue: (e, t) => (null == th ? void 0 : th(null, e, t)),
                            position: eY
                        }),
                        (0, r.jsx)(x.Z, {
                            textValue: R,
                            editorHeight: tR,
                            channelId: Z.id
                        }),
                        e$ ? null : t$,
                        eW
                    ]
                }),
                tM
                    ? null
                    : (0, r.jsx)(P.Z, {
                          positionTargetRef: e1,
                          type: Y,
                          onSelectGIF: tT,
                          onSelectEmoji: tS,
                          onSelectSticker: tA,
                          onSelectSound: tN,
                          channel: Z,
                          closeOnModalOuterClick: ez,
                          parentModalKey: eq,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: e_.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
let ex = i.memo(i.forwardRef(eL));
