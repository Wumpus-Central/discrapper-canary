var i = r(47120);
var a = r(411104);
var o = r(200651),
    s = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(836560);
var d = r(512722),
    f = r.n(d),
    p = r(232713),
    h = r(873546),
    _ = r(149765),
    m = r(442837),
    g = r(481060),
    E = r(430742),
    v = r(738619),
    y = r(393238),
    b = r(607070),
    I = r(100527),
    T = r(906732),
    S = r(998698),
    A = r(271668),
    C = r(404295),
    N = r(326133),
    R = r(405701),
    O = r(570220),
    D = r(540059),
    x = r(28546),
    L = r(805680),
    w = r(278754),
    P = r(151574),
    M = r(368844),
    k = r(41776),
    U = r(849522),
    B = r(780291),
    G = r(328908),
    Z = r(135793),
    F = r(576645),
    V = r(111810),
    j = r(913663),
    H = r(268350),
    Y = r(378233),
    W = r(665906),
    K = r(695346),
    z = r(271383),
    q = r(496675),
    Q = r(944486),
    X = r(398327),
    J = r(117530),
    $ = r(594174),
    ee = r(626135),
    et = r(459273),
    en = r(700785),
    er = r(358085),
    ei = r(746877),
    ea = r(541716),
    eo = r(667829),
    es = r(319417),
    el = r(562267),
    eu = r(376918),
    ec = r(760196),
    ed = r(258696),
    ef = r(303628),
    ep = r(472243),
    eh = r(872635),
    e_ = r(676108),
    em = r(981631),
    eg = r(665692),
    eE = r(957825),
    ev = r(553796);
let ey = 44,
    eb = 450;
function eI(e) {
    return e !== Q.Z.getChannelId();
}
function eT(e, n) {
    var r, i;
    return null !== (i = e && (null === (r = n.submit) || void 0 === r ? void 0 : r.clearOnSubmit)) && void 0 !== i && i;
}
function eS(e, n, i, a) {
    let [l, u] = s.useState(!1),
        c = s.useCallback(
            (s, d, f, p, h, _) => {
                var m, v, y;
                if (l) return;
                u(!0);
                let b = null !== (v = null === (m = j.Z.getStickerPreview(a, n.drafts.type)) || void 0 === m ? void 0 : m.map((e) => e.id)) && void 0 !== v ? v : [],
                    I = null !== (y = J.Z.getUploads(a, n.drafts.type)) && void 0 !== y ? y : [],
                    T = (0, G.q5)(a);
                if (null == d && !p && !h && (0, M.CB)(I, a)) {
                    u(!1),
                        (0, g.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([r.e('90508'), r.e('18895'), r.e('27173')]).then(r.bind(r, 273602));
                            return (n) =>
                                (0, o.jsx)(e, {
                                    ...n,
                                    threadId: a,
                                    attachments: I,
                                    sendMessage: () => c(s, void 0, void 0, void 0, !0)
                                });
                        });
                    return;
                }
                let S = (0, G.rH)(a),
                    A = (0, F.tv)(s, p, d, I);
                if (S && A && !_) {
                    u(!1),
                        (0, Z.openMessageConfettiModal)({
                            channelId: a,
                            onRedeem: () => c(s, d, f, p, h, !0)
                        });
                    return;
                }
                e({
                    value: s,
                    uploads: I,
                    stickers: b,
                    confettiPotionEmoji: T,
                    command: d,
                    commandOptionValues: f,
                    isGif: p
                }).then((e) => {
                    let { shouldClear: r, shouldRefocus: o } = e,
                        s = eT(r, n),
                        l = null != i.current;
                    s && (eI(a) ? E.Z.saveDraft(a, '', n.drafts.type) : l && i.current.clearValue()), l && (u(!1), (0, x._Q)(), o && i.current.focus());
                });
            },
            [i, e, l, n, a]
        );
    return {
        submitting: l,
        submit: c,
        handleSubmit: s.useCallback(
            (e) => {
                var n;
                null == i || null === (n = i.current) || void 0 === n || n.submit(e);
            },
            [i]
        )
    };
}
function eA(e, n, r) {
    return s.useCallback(
        (i) => {
            var a, o;
            n === ea.Ie.CREATE_FORUM_POST ? null === (o = r.current) || void 0 === o || o.insertGIF(i) : e(i.url, void 0, void 0, !0), (0, x._Q)(), null === (a = r.current) || void 0 === a || a.focus();
        },
        [r, e, n]
    );
}
function eC(e) {
    return s.useCallback(
        function (n, r) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = e.current;
            null != n && null != a && a.insertEmoji(n, r, i), r && (0, x._Q)();
        },
        [e]
    );
}
function eN(e) {
    let { editorRef: n, disabled: r, textValue: i, channelId: a, chatInputType: o, submit: l } = e,
        { analyticsLocations: u } = (0, T.ZP)();
    return s.useCallback(
        (e, s) => {
            var c, d;
            !r &&
                ((0, Y.Hc)(s, i, a, o.drafts.type)
                    ? ((0, eu._H)({
                          sticker: e,
                          stickerSelectLocation: s,
                          isReplacement: null != j.Z.getStickerPreview(a, o.drafts.type),
                          analyticsLocations: u
                      }),
                      (0, H.eu)(a, e, o.drafts.type))
                    : (l({
                          value: '',
                          uploads: void 0,
                          stickers: [e.id]
                      }),
                      null === (d = n.current) || void 0 === d || d.clearValue()),
                (0, x._Q)(),
                null === (c = n.current) || void 0 === c || c.focus());
        },
        [r, i, a, o.drafts.type, n, u, l]
    );
}
function eR(e, n) {
    return s.useCallback(
        (r, i) => {
            let a = e.current;
            null != r &&
                null != a &&
                (ee.default.track(em.rMx.SOUNDMOJI_SELECT, {
                    channel_id: n.id,
                    guild_id: n.guild_id,
                    sound_guild_id: r.guildId,
                    sound_id: r.soundId,
                    source: i
                }),
                a.insertSound(r)),
                (0, x._Q)(),
                null == a || a.focus();
        },
        [e, n.id, n.guild_id]
    );
}
function eO(e, n) {
    let r = s.useCallback(() => {
            if (!n) (0, x.RO)(eE.X1.EMOJI, e);
        }, [n, e]),
        i = s.useCallback(() => {
            var r;
            if (!n && !!(null === (r = e.gifs) || void 0 === r ? void 0 : r.allowSending)) (0, x.RO)(eE.X1.GIF, e);
        }, [n, e]),
        a = s.useCallback(() => {
            var r;
            if (!n && !!(null === (r = e.stickers) || void 0 === r ? void 0 : r.allowSending)) (0, x.RO)(eE.X1.STICKER, e);
        }, [n, e]);
    (0, et.yp)({
        event: em.CkL.TOGGLE_EMOJI_POPOUT,
        handler: r
    }),
        (0, et.yp)({
            event: em.CkL.TOGGLE_GIF_PICKER,
            handler: i
        }),
        (0, et.yp)({
            event: em.CkL.TOGGLE_STICKER_PICKER,
            handler: a
        });
}
function eD(e, n, r) {
    let [i] = s.useState(() => new c.EventEmitter());
    s.useEffect(() => {
        i.emit('text-changed', n, r);
    }, [n, r, i]);
    let a = (n) => {
        null != e.current && i.emit('selection-changed', n);
    };
    return {
        eventEmitter: i,
        handleEditorSelectionChanged: a
    };
}
function ex() {
    let e = s.useRef(null),
        n = s.useCallback(() => {
            var n;
            null === (n = e.current) || void 0 === n || n.onMaybeShowAutocomplete();
        }, []),
        r = s.useCallback(() => {
            var n;
            null === (n = e.current) || void 0 === n || n.onHideAutocomplete();
        }, []);
    return {
        autocompleteRef: e,
        handleMaybeShowAutocomplete: n,
        handleHideAutocomplete: r
    };
}
function eL(e) {
    let n = s.useRef(null);
    if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
    return null == e ? n : e;
}
function ew(e) {
    let [n, r] = s.useState(0);
    return {
        editorHeight: n,
        handleResize: s.useCallback(
            (n) => {
                r(null != n ? n : 0), null == e || e(n);
            },
            [e]
        )
    };
}
function eP(e, n, r, i) {
    let a = e.getGuildId(),
        o = (0, m.e7)([k.Z], () => null != a && k.Z.isLurking(a), [a]),
        s = (0, m.e7)([z.ZP, $.default], () => {
            var e, n;
            let r = $.default.getCurrentUser();
            return null !== (n = null != a && null != r ? (null === (e = z.ZP.getMember(a, r.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
        }),
        l = (0, m.cj)(
            [q.Z],
            () => {
                var a, o;
                let l = e.isPrivate(),
                    u = q.Z.computePermissions(e),
                    c = _.e$(u, em.Plq.CREATE_PUBLIC_THREADS) || _.e$(u, em.Plq.CREATE_PRIVATE_THREADS),
                    d = (!(null === (a = n.permissions) || void 0 === a ? void 0 : a.requireCreateTherads) || c) && (!(null === (o = n.permissions) || void 0 === o ? void 0 : o.requireSendMessages) || _.e$(u, em.Plq.SEND_MESSAGES)),
                    f = d && _.e$(u, em.Plq.ATTACH_FILES),
                    p = null != r,
                    h = (0, W.xl)(e);
                return {
                    disabled: i || s || (!l && !d) || h,
                    canAttachFiles: !0 === n.attachments && (l || s || f || p),
                    canCreateThreads: c,
                    canEveryoneSendMessages: en.Uu(em.Plq.SEND_MESSAGES, e)
                };
            },
            [e, n.permissions.requireCreateTherads, n.permissions.requireSendMessages, n.attachments, r, i, s]
        );
    return {
        isLurking: o,
        isPendingMember: s,
        ...l
    };
}
function eM(e, n, r) {
    let [i, a] = (0, x.Iu)((e) => [e.activeView, e.activeViewType], p.X);
    s.useEffect(
        () => () => {
            (0, x._Q)(e);
        },
        [e]
    );
    let o = s.useCallback(
            (e) => {
                n.emit('autocomplete-visibility-change', e), e && (0, x._Q)();
            },
            [n]
        ),
        l = s.useCallback(() => {
            var e;
            null == i && (null === (e = r.current) || void 0 === e || e.handleOuterClick());
        }, [i, r]),
        u = null == i || null == a || a !== e;
    return {
        expressionPickerView: i,
        shouldHideExpressionPicker: u,
        handleAutocompleteVisibilityChange: o,
        handleOuterClick: l
    };
}
function ek(e, n, r) {
    let i = s.useCallback(() => {
            var i, a;
            return !!(!r && (null === (i = n.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onTabOrEnter(!1)) || !1;
        }, [r, n, e]),
        a = s.useCallback(() => {
            var i, a;
            return !!(!r && (null === (i = n.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onTabOrEnter(!0)) || !1;
        }, [r, n, e]);
    return {
        handleTab: i,
        handleEnter: a,
        handleMoveSelection: s.useCallback(
            (i) => {
                var a, o;
                return !!(!r && (null === (a = n.current) || void 0 === a ? void 0 : a.onMoveSelection(i))) || (null === (o = e.current) || void 0 === o ? void 0 : o.onMoveSelection(i)) || !1;
            },
            [r, n, e]
        )
    };
}
function eU(e, n, r, i) {
    var a, o;
    let s = (0, w.pR)(),
        l = (0, m.e7)([j.Z], () => j.Z.getStickerPreview(e.id, n.drafts.type)),
        u = null != l && l.length > 0;
    return s && (null === (a = n.stickers) || void 0 === a ? void 0 : a.autoSuggest) && !u && (null === (o = i.current) || void 0 === o ? void 0 : o.isVisible()) !== !0 && !__OVERLAY__ && null != r;
}
function eB(e, n) {
    var r, i, a, l, c, d, p, _, E, x, w, M, k, G, Z, F;
    let { textValue: j, richValue: H, className: Y, innerClassName: W, editorClassName: z, id: q, required: Q, disabled: J, placeholder: $, accessibilityLabel: ee, channel: et, type: en, focused: eu, renderAttachButton: eE, renderApplicationCommandIcon: eI, renderAppLauncherButton: eT, renderAppCommandButton: eB, renderLeftAccessories: eG, pendingReply: eZ, onChange: eF, onResize: eV, onBlur: ej, onFocus: eH, onKeyDown: eY, onSubmit: eW, promptToUpload: eK, highlighted: ez, canMentionRoles: eq, canMentionChannels: eQ, maxCharacterCount: eX, showRemainingCharsAfterCount: eJ, allowNewLines: e$ = !0, characterCountClassName: e0, 'aria-describedby': e1, 'aria-labelledby': e2, setEditorRef: e3, autoCompletePosition: e4, children: e6, disableThemedBackground: e5 = !1, emojiPickerCloseOnModalOuterClick: e7, parentModalKey: e8, onCommandSentinelTyped: e9 } = e;
    f()(null != en, 'chat input type must be set');
    let { analyticsLocations: te } = (0, T.ZP)(I.Z.CHANNEL_TEXT_AREA),
        tt = (0, D.R6)('ChannelTextAreaContainer'),
        tn = eL(n),
        tr = s.useRef(null),
        ti = s.useRef(null),
        ta = s.useRef(null),
        to = s.useRef(null);
    null == e3 || e3(ti.current);
    let ts = (0, V.V1)('ChannelTextAreaContainer'),
        tl = (0, C.h9)(et.id),
        [tu, tc] = s.useState(!tl);
    (0, y.P)(tn, (e) => {
        let { width: n } = e;
        return tc(!tl && (null == n || n > eb));
    });
    let { activeCommand: td, activeCommandSection: tf } = (0, m.cj)([S.Z], () => {
            var e, n;
            return {
                activeCommand: (null === (e = en.commands) || void 0 === e ? void 0 : e.enabled) ? S.Z.getActiveCommand(et.id) : null,
                activeCommandSection: (null === (n = en.commands) || void 0 === n ? void 0 : n.enabled) ? S.Z.getActiveCommandSection(et.id) : null
            };
        }),
        { isLurking: tp, isPendingMember: th, disabled: t_, canAttachFiles: tm, canCreateThreads: tg, canEveryoneSendMessages: tE } = eP(et, en, td, J),
        tv = en.toolbarType === ea.OW.STATIC,
        ty = !K.dN.useSetting() && !(0, er.isAndroidWeb)() && null != window.ResizeObserver,
        tb = !ty || !(null === (r = en.commands) || void 0 === r ? void 0 : r.enabled) || !eu || j !== eg.GI,
        tI = (0, U.Z)(),
        { isSubmitButtonEnabled: tT, fontSize: tS } = (0, m.cj)([b.Z], () => ({
            fontSize: b.Z.fontSize,
            isSubmitButtonEnabled: b.Z.isSubmitButtonEnabled
        })),
        tA = (0, m.e7)([X.Z], () => X.Z.isEnabled()),
        tC = s.useRef(j);
    tC.current = j;
    let tN = s.useCallback(
        (e, n, r) => {
            var i;
            n === eg.GI && '' === tC.current && (null === (i = en.commands) || void 0 === i ? void 0 : i.enabled) && (null == e9 || e9()), null == eF || eF(e, n, r);
        },
        [eF, e9, null === (i = en.commands) || void 0 === i ? void 0 : i.enabled]
    );
    eO(en, t_);
    let { eventEmitter: tR, handleEditorSelectionChanged: tO } = eD(ti, j, H),
        { submitting: tD, submit: tx, handleSubmit: tL } = eS(eW, en, ti, et.id),
        { autocompleteRef: tw, handleMaybeShowAutocomplete: tP, handleHideAutocomplete: tM } = ex(),
        tk = eA(tx, en, ti),
        tU = eC(ti),
        tB = eN({
            editorRef: ti,
            disabled: t_,
            textValue: j,
            channelId: et.id,
            chatInputType: en,
            submit: eW
        }),
        tG = eR(ti, et),
        tZ = s.useCallback(() => {
            var e;
            return null == to ? void 0 : null === (e = to.current) || void 0 === e ? void 0 : e.hide();
        }, []),
        { editorHeight: tF, handleResize: tV } = ew(eV),
        { handleTab: tj, handleEnter: tH, handleMoveSelection: tY } = ek(tw, tr, tb),
        { expressionPickerView: tW, shouldHideExpressionPicker: tK, handleAutocompleteVisibilityChange: tz, handleOuterClick: tq } = eM(en, tR, ti);
    (0, ei.S)(tR, et.guild_id, et.id);
    let tQ = null != eZ,
        tX = (t_ && !((tp || th) && tE)) || (tD && (null === (a = en.submit) || void 0 === a ? void 0 : a.useDisabledStylesOnSubmit)),
        tJ = null;
    null != td ? (tJ = null == eI ? void 0 : eI(td, tf, ev.attachButton)) : (!t_ || tg) && (tJ = null == eE ? void 0 : eE(tQ, ev.attachButton));
    let t$ = ty && null != H && !t_ && en.showCharacterCount && null == td,
        t0 = ty && !__OVERLAY__ && null != H && null == td && en.toolbarType !== ea.OW.NONE,
        t1 = eU(et, en, H, tw),
        t2 = (0, ec.c)({
            channel: et,
            type: en,
            activeCommand: td,
            pendingReply: eZ
        }),
        t3 = !!(null === (l = en.emojis) || void 0 === l ? void 0 : l.button) && tF <= ey,
        t4 = 0 === j.trim().length,
        t6 = (0, ed.G)(et.id, en, t4),
        t5 = !0 === en.showSlowmodeIndicator,
        t7 = !0 === en.showTypingIndicator,
        t8 = tt && en.layout === ea.gy.INLINE,
        t9 = tt && en.layout === ea.gy.FLUSH,
        ne = s.useRef(null),
        nt = s.useCallback((e) => {
            if (e.target === ne.current) {
                var n;
                null === (n = ti.current) || void 0 === n || n.focus();
            }
        }, []),
        nn = (0, o.jsx)(ed.Z, {
            type: en,
            disabled: t_,
            channel: et,
            handleSubmit: tL,
            isEmpty: t4,
            showAllButtons: tu,
            children: tt ? (null == eT ? void 0 : eT()) : null
        }),
        nr = t$
            ? (0, o.jsx)(ep.Z, {
                  type: en,
                  textValue: j,
                  className: u()(e0, { [ev.indentCharacterCount]: t3 }),
                  maxCharacterCount: eX,
                  showRemainingCharsAfterCount: eJ
              })
            : null,
        ni = tt
            ? (0, o.jsxs)('div', {
                  className: ev.accessoryBar,
                  onClick: nt,
                  ref: ne,
                  children: [
                      (0, o.jsxs)('div', {
                          className: ev.accessoryBarLeft,
                          children: [
                              null == eG ? void 0 : eG(),
                              tJ,
                              t7
                                  ? (0, o.jsx)(v.Z, {
                                        channel: et,
                                        poggermodeEnabled: !1
                                    })
                                  : null
                          ]
                      }),
                      (0, o.jsxs)('div', {
                          className: ev.accessoryBarRight,
                          children: [nr, nn]
                      })
                  ]
              })
            : null;
    return (0, o.jsx)(O.f6, {
        value: tR,
        children: (0, o.jsxs)(T.Gt, {
            value: te,
            children: [
                t0 && tv
                    ? (0, o.jsx)(e_.Z, {
                          editorRef: ti,
                          options: en.markdown,
                          channel: et
                      })
                    : t0
                      ? (0, o.jsx)(eh.Z, {
                            ref: to,
                            editorRef: ti,
                            containerRef: ta,
                            options: en.markdown
                        })
                      : null,
                (0, o.jsxs)('div', {
                    ref: tn,
                    className: u()(Y, {
                        [ev.channelTextArea]: !0,
                        [ev.channelTextAreaDisabled]: tX,
                        [ev.highlighted]: ez,
                        [ev.textAreaMobileThemed]: h.tq,
                        [ev.inlineContainer]: t8,
                        [ev.flushContainer]: t9
                    }),
                    children: [
                        t8 || t9 ? null : (0, o.jsx)(ec.Z, { bars: t2 }),
                        (0, o.jsxs)('div', {
                            ref: ta,
                            onScroll: tZ,
                            className: u()(W, {
                                [ev.scrollableContainer]: !0,
                                [ev.themedBackground]: !e5,
                                [ev.hasStackedBar]: t2.stacked.length > 0
                            }),
                            children: [
                                (0, o.jsx)(el.Z, {
                                    channelId: et.id,
                                    chatInputType: en
                                }),
                                en.hideAttachmentArea
                                    ? null
                                    : (0, o.jsx)(ef.Z, {
                                          channelId: et.id,
                                          type: en,
                                          canAttachFiles: tm
                                      }),
                                (0, o.jsxs)('div', {
                                    className: u()(ev.inner, {
                                        [ev.innerDisabled]: tX,
                                        [ev.sansAttachButton]: en !== ea.Ie.EDIT && (null != tJ || (tX && null == tJ) || tp),
                                        [ev.sansAttachButtonCreateThread]: en === ea.Ie.THREAD_CREATION,
                                        [ev.sansAttachButtonCreatePost]: en === ea.Ie.CREATE_FORUM_POST || en === ea.Ie.FORWARD_MESSAGE_INPUT,
                                        [ev.sansAttachButtonUserProfileReply]: en === ea.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tq,
                                    children: [
                                        tt ? null : tJ,
                                        (0, o.jsx)(g.FocusRing, {
                                            ringTarget: tn,
                                            ringClassName: ev.focusRing,
                                            children: (0, o.jsx)(eo.Z, {
                                                ref: ti,
                                                id: q,
                                                focused: eu,
                                                useSlate: ty,
                                                textValue: j,
                                                richValue: H,
                                                disabled: t_,
                                                placeholder: $,
                                                required: Q,
                                                accessibilityLabel: ee,
                                                isPreviewing: (tp || th) && tE,
                                                channel: et,
                                                type: en,
                                                canPasteFiles: tm,
                                                uploadPromptCharacterCount: em.en1,
                                                maxCharacterCount: null != eX ? eX : tI,
                                                allowNewLines: e$,
                                                'aria-describedby': e1,
                                                onChange: tN,
                                                onResize: tV,
                                                onBlur: ej,
                                                onFocus: eH,
                                                onKeyDown: eY,
                                                onSubmit: tx,
                                                onTab: tj,
                                                onEnter: tH,
                                                onMoveSelection: tY,
                                                onSelectionChanged: tO,
                                                onMaybeShowAutocomplete: tP,
                                                onHideAutocomplete: tM,
                                                promptToUpload: eK,
                                                fontSize: tS,
                                                spellcheckEnabled: tA,
                                                canOnlyUseTextCommands: tQ,
                                                className: u()(
                                                    {
                                                        [ev.textAreaThreadCreation]: en === ea.Ie.THREAD_CREATION,
                                                        [ev.profileBioInput]: en === ea.Ie.PROFILE_BIO_INPUT,
                                                        [ev.overlayInlineReply]: en === ea.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    z
                                                ),
                                                'aria-labelledby': e2
                                            })
                                        }),
                                        tt
                                            ? (0, o.jsxs)('div', {
                                                  className: ev.rightAccessories,
                                                  children: [
                                                      t5 ? (0, o.jsx)(R.Z, { channel: et }) : null,
                                                      null !== (k = null == eB ? void 0 : eB()) && void 0 !== k ? k : null,
                                                      (null === (c = en.submit) || void 0 === c ? void 0 : c.button) != null && ((null === (d = en.submit) || void 0 === d ? void 0 : d.ignorePreference) || tT)
                                                          ? (0, o.jsx)(es.Z, {
                                                                onClick: tL,
                                                                disabled: t_ || t6
                                                            })
                                                          : null
                                                  ]
                                              })
                                            : nn
                                    ]
                                })
                            ]
                        }),
                        tt && !en.hideAccessoryBar ? ni : null,
                        tb
                            ? null
                            : (0, o.jsx)(A.Z, {
                                  ref: tr,
                                  channel: et,
                                  canOnlyUseTextCommands: tQ
                              }),
                        (0, o.jsx)(N.Z, {
                            ref: tw,
                            channel: et,
                            canMentionRoles: eq,
                            canMentionChannels: eQ,
                            useNewSlashCommands: ty,
                            canOnlyUseTextCommands: tQ,
                            canSendStickers: null === (p = en.stickers) || void 0 === p ? void 0 : p.allowSending,
                            canSendSoundmoji: null === (_ = en.soundmoji) || void 0 === _ ? void 0 : _.allowSending,
                            textValue: j,
                            focused: eu,
                            expressionPickerView: tW,
                            type: en,
                            targetRef: tn,
                            editorRef: ti,
                            onSendMessage: tx,
                            onSendSticker: tB,
                            onVisibilityChange: tz,
                            editorHeight: tF,
                            setValue: (e, n) => (null == tN ? void 0 : tN(null, e, n)),
                            position: e4
                        }),
                        (0, o.jsx)(B.Z, {
                            textValue: j,
                            editorHeight: tF,
                            channelId: et.id
                        }),
                        tt ? null : nr,
                        t1
                            ? (0, o.jsx)(P.Z, {
                                  editorRef: ti,
                                  channel: et,
                                  isEditorFocused: eu,
                                  onSelectSticker: tB,
                                  submitButtonVisible: (null === (E = en.submit) || void 0 === E ? void 0 : E.button) && (null !== (G = null === (x = en.submit) || void 0 === x ? void 0 : x.ignorePreference) && void 0 !== G ? G : tT),
                                  stickerIconVisible: null !== (Z = null === (w = en.stickers) || void 0 === w ? void 0 : w.button) && void 0 !== Z && Z && !(ts && null !== (F = null === (M = en.confetti) || void 0 === M ? void 0 : M.button) && void 0 !== F && F)
                              })
                            : null,
                        e6
                    ]
                }),
                tK
                    ? null
                    : (0, o.jsx)(L.Z, {
                          positionTargetRef: tn,
                          type: en,
                          onSelectGIF: tk,
                          onSelectEmoji: tU,
                          onSelectSticker: tB,
                          onSelectSound: tG,
                          channel: et,
                          closeOnModalOuterClick: e7,
                          parentModalKey: e8,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: ev.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
n.Z = s.memo(s.forwardRef(eB));
