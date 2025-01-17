var i = r(47120);
var a = r(411104);
var s = r(200651),
    o = r(192379),
    l = r(120356),
    u = r.n(l),
    c = r(836560);
var d = r(512722),
    f = r.n(d),
    _ = r(232713),
    h = r(873546),
    p = r(149765),
    m = r(442837),
    g = r(481060),
    E = r(430742),
    v = r(738619),
    I = r(393238),
    T = r(607070),
    b = r(100527),
    y = r(906732),
    S = r(998698),
    A = r(271668),
    N = r(404295),
    C = r(326133),
    R = r(405701),
    O = r(570220),
    D = r(540059),
    L = r(28546),
    x = r(805680),
    w = r(278754),
    P = r(151574),
    M = r(368844),
    k = r(41776),
    U = r(849522),
    B = r(780291),
    G = r(111810),
    F = r(913663),
    Z = r(268350),
    V = r(378233),
    j = r(665906),
    H = r(695346),
    Y = r(271383),
    W = r(496675),
    K = r(944486),
    z = r(398327),
    q = r(117530),
    Q = r(594174),
    X = r(626135),
    J = r(459273),
    $ = r(700785),
    ee = r(358085),
    et = r(746877),
    en = r(541716),
    er = r(667829),
    ei = r(319417),
    ea = r(562267),
    es = r(376918),
    eo = r(760196),
    el = r(258696),
    eu = r(303628),
    ec = r(472243),
    ed = r(872635),
    ef = r(676108),
    e_ = r(981631),
    eh = r(665692),
    ep = r(957825),
    em = r(553796);
let eg = 44,
    eE = 450;
function ev(e) {
    return e !== K.Z.getChannelId();
}
function eI(e, n) {
    var r, i;
    return null !== (i = e && (null === (r = n.submit) || void 0 === r ? void 0 : r.clearOnSubmit)) && void 0 !== i && i;
}
function eT(e, n, i, a) {
    let [l, u] = o.useState(!1),
        c = o.useCallback(
            (o, d, f, _, h) => {
                var p, m, v;
                if (l) return;
                u(!0);
                let I = null !== (m = null === (p = F.Z.getStickerPreview(a, n.drafts.type)) || void 0 === p ? void 0 : p.map((e) => e.id)) && void 0 !== m ? m : [],
                    T = null !== (v = q.Z.getUploads(a, n.drafts.type)) && void 0 !== v ? v : [];
                if (null == d && !_ && !h && (0, M.CB)(T, a)) {
                    u(!1),
                        (0, g.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([r.e('90508'), r.e('18895'), r.e('47512')]).then(r.bind(r, 273602));
                            return (n) =>
                                (0, s.jsx)(e, {
                                    ...n,
                                    threadId: a,
                                    attachments: T,
                                    sendMessage: () => c(o, void 0, void 0, void 0, !0)
                                });
                        });
                    return;
                }
                e({
                    value: o,
                    uploads: T,
                    stickers: I,
                    command: d,
                    commandOptionValues: f,
                    isGif: _
                }).then((e) => {
                    let { shouldClear: r, shouldRefocus: s } = e,
                        o = eI(r, n),
                        l = null != i.current;
                    o && (ev(a) ? E.Z.saveDraft(a, '', n.drafts.type) : l && i.current.clearValue()), l && (u(!1), (0, L._Q)(), s && i.current.focus());
                });
            },
            [i, e, l, n, a]
        );
    return {
        submitting: l,
        submit: c,
        handleSubmit: o.useCallback(
            (e) => {
                var n;
                null == i || null === (n = i.current) || void 0 === n || n.submit(e);
            },
            [i]
        )
    };
}
function eb(e, n, r) {
    return o.useCallback(
        (i) => {
            var a, s;
            n === en.Ie.CREATE_FORUM_POST ? null === (s = r.current) || void 0 === s || s.insertGIF(i) : e(i.url, void 0, void 0, !0), (0, L._Q)(), null === (a = r.current) || void 0 === a || a.focus();
        },
        [r, e, n]
    );
}
function ey(e) {
    return o.useCallback(
        function (n, r) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = e.current;
            null != n && null != a && a.insertEmoji(n, r, i), r && (0, L._Q)();
        },
        [e]
    );
}
function eS(e) {
    let { editorRef: n, disabled: r, textValue: i, channelId: a, chatInputType: s, submit: l } = e,
        { analyticsLocations: u } = (0, y.ZP)();
    return o.useCallback(
        (e, o) => {
            var c, d;
            !r &&
                ((0, V.Hc)(o, i, a, s.drafts.type)
                    ? ((0, es._H)({
                          sticker: e,
                          stickerSelectLocation: o,
                          isReplacement: null != F.Z.getStickerPreview(a, s.drafts.type),
                          analyticsLocations: u
                      }),
                      (0, Z.eu)(a, e, s.drafts.type))
                    : (l({
                          value: '',
                          uploads: void 0,
                          stickers: [e.id]
                      }),
                      null === (d = n.current) || void 0 === d || d.clearValue()),
                (0, L._Q)(),
                null === (c = n.current) || void 0 === c || c.focus());
        },
        [r, i, a, s.drafts.type, n, u, l]
    );
}
function eA(e, n) {
    return o.useCallback(
        (r, i) => {
            let a = e.current;
            null != r &&
                null != a &&
                (X.default.track(e_.rMx.SOUNDMOJI_SELECT, {
                    channel_id: n.id,
                    guild_id: n.guild_id,
                    sound_guild_id: r.guildId,
                    sound_id: r.soundId,
                    source: i
                }),
                a.insertSound(r)),
                (0, L._Q)(),
                null == a || a.focus();
        },
        [e, n.id, n.guild_id]
    );
}
function eN(e, n) {
    let r = o.useCallback(() => {
            if (!n) (0, L.RO)(ep.X1.EMOJI, e);
        }, [n, e]),
        i = o.useCallback(() => {
            var r;
            if (!n && !!(null === (r = e.gifs) || void 0 === r ? void 0 : r.allowSending)) (0, L.RO)(ep.X1.GIF, e);
        }, [n, e]),
        a = o.useCallback(() => {
            var r;
            if (!n && !!(null === (r = e.stickers) || void 0 === r ? void 0 : r.allowSending)) (0, L.RO)(ep.X1.STICKER, e);
        }, [n, e]);
    (0, J.yp)({
        event: e_.CkL.TOGGLE_EMOJI_POPOUT,
        handler: r
    }),
        (0, J.yp)({
            event: e_.CkL.TOGGLE_GIF_PICKER,
            handler: i
        }),
        (0, J.yp)({
            event: e_.CkL.TOGGLE_STICKER_PICKER,
            handler: a
        });
}
function eC(e, n, r) {
    let [i] = o.useState(() => new c.EventEmitter());
    o.useEffect(() => {
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
function eR() {
    let e = o.useRef(null),
        n = o.useCallback(() => {
            var n;
            null === (n = e.current) || void 0 === n || n.onMaybeShowAutocomplete();
        }, []),
        r = o.useCallback(() => {
            var n;
            null === (n = e.current) || void 0 === n || n.onHideAutocomplete();
        }, []);
    return {
        autocompleteRef: e,
        handleMaybeShowAutocomplete: n,
        handleHideAutocomplete: r
    };
}
function eO(e) {
    let n = o.useRef(null);
    if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
    return null == e ? n : e;
}
function eD(e) {
    let [n, r] = o.useState(0);
    return {
        editorHeight: n,
        handleResize: o.useCallback(
            (n) => {
                r(null != n ? n : 0), null == e || e(n);
            },
            [e]
        )
    };
}
function eL(e, n, r, i) {
    let a = e.getGuildId(),
        s = (0, m.e7)([k.Z], () => null != a && k.Z.isLurking(a), [a]),
        o = (0, m.e7)([Y.ZP, Q.default], () => {
            var e, n;
            let r = Q.default.getCurrentUser();
            return null !== (n = null != a && null != r ? (null === (e = Y.ZP.getMember(a, r.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
        }),
        l = (0, m.cj)(
            [W.Z],
            () => {
                var a, s;
                let l = e.isPrivate(),
                    u = W.Z.computePermissions(e),
                    c = p.e$(u, e_.Plq.CREATE_PUBLIC_THREADS) || p.e$(u, e_.Plq.CREATE_PRIVATE_THREADS),
                    d = (!(null === (a = n.permissions) || void 0 === a ? void 0 : a.requireCreateTherads) || c) && (!(null === (s = n.permissions) || void 0 === s ? void 0 : s.requireSendMessages) || p.e$(u, e_.Plq.SEND_MESSAGES)),
                    f = d && p.e$(u, e_.Plq.ATTACH_FILES),
                    _ = null != r,
                    h = (0, j.xl)(e);
                return {
                    disabled: i || o || (!l && !d) || h,
                    canAttachFiles: !0 === n.attachments && (l || o || f || _),
                    canCreateThreads: c,
                    canEveryoneSendMessages: $.Uu(e_.Plq.SEND_MESSAGES, e)
                };
            },
            [e, n.permissions.requireCreateTherads, n.permissions.requireSendMessages, n.attachments, r, i, o]
        );
    return {
        isLurking: s,
        isPendingMember: o,
        ...l
    };
}
function ex(e, n, r) {
    let [i, a] = (0, L.Iu)((e) => [e.activeView, e.activeViewType], _.X);
    o.useEffect(
        () => () => {
            (0, L._Q)(e);
        },
        [e]
    );
    let s = o.useCallback(
            (e) => {
                n.emit('autocomplete-visibility-change', e), e && (0, L._Q)();
            },
            [n]
        ),
        l = o.useCallback(() => {
            var e;
            null == i && (null === (e = r.current) || void 0 === e || e.handleOuterClick());
        }, [i, r]),
        u = null == i || null == a || a !== e;
    return {
        expressionPickerView: i,
        shouldHideExpressionPicker: u,
        handleAutocompleteVisibilityChange: s,
        handleOuterClick: l
    };
}
function ew(e, n, r) {
    let i = o.useCallback(() => {
            var i, a;
            return !!(!r && (null === (i = n.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onTabOrEnter(!1)) || !1;
        }, [r, n, e]),
        a = o.useCallback(() => {
            var i, a;
            return !!(!r && (null === (i = n.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onTabOrEnter(!0)) || !1;
        }, [r, n, e]);
    return {
        handleTab: i,
        handleEnter: a,
        handleMoveSelection: o.useCallback(
            (i) => {
                var a, s;
                return !!(!r && (null === (a = n.current) || void 0 === a ? void 0 : a.onMoveSelection(i))) || (null === (s = e.current) || void 0 === s ? void 0 : s.onMoveSelection(i)) || !1;
            },
            [r, n, e]
        )
    };
}
function eP(e, n, r, i) {
    var a, s;
    let o = (0, w.pR)(),
        l = (0, m.e7)([F.Z], () => F.Z.getStickerPreview(e.id, n.drafts.type)),
        u = null != l && l.length > 0;
    return o && (null === (a = n.stickers) || void 0 === a ? void 0 : a.autoSuggest) && !u && (null === (s = i.current) || void 0 === s ? void 0 : s.isVisible()) !== !0 && !__OVERLAY__ && null != r;
}
function eM(e, n) {
    var r, i, a, l, c, d, _, p, E, L, w, M, k, F, Z, V;
    let { textValue: j, richValue: Y, className: W, innerClassName: K, editorClassName: q, id: Q, required: X, disabled: J, placeholder: $, accessibilityLabel: es, channel: ep, type: ev, focused: eI, renderAttachButton: eM, renderApplicationCommandIcon: ek, renderAppLauncherButton: eU, renderAppCommandButton: eB, renderLeftAccessories: eG, pendingReply: eF, onChange: eZ, onResize: eV, onBlur: ej, onFocus: eH, onKeyDown: eY, onSubmit: eW, promptToUpload: eK, highlighted: ez, canMentionRoles: eq, canMentionChannels: eQ, maxCharacterCount: eX, showRemainingCharsAfterCount: eJ, allowNewLines: e$ = !0, characterCountClassName: e0, 'aria-describedby': e1, 'aria-labelledby': e2, setEditorRef: e3, autoCompletePosition: e4, children: e6, disableThemedBackground: e5 = !1, emojiPickerCloseOnModalOuterClick: e7, parentModalKey: e8, onCommandSentinelTyped: e9 } = e;
    f()(null != ev, 'chat input type must be set');
    let { analyticsLocations: te } = (0, y.ZP)(b.Z.CHANNEL_TEXT_AREA),
        tt = (0, D.R6)('ChannelTextAreaContainer'),
        tn = eO(n),
        tr = o.useRef(null),
        ti = o.useRef(null),
        ta = o.useRef(null),
        ts = o.useRef(null);
    null == e3 || e3(ti.current);
    let to = (0, G.V1)('ChannelTextAreaContainer'),
        tl = (0, N.h9)(ep.id),
        [tu, tc] = o.useState(!tl);
    (0, I.P)(tn, (e) => {
        let { width: n } = e;
        return tc(!tl && (null == n || n > eE));
    });
    let { activeCommand: td, activeCommandSection: tf } = (0, m.cj)([S.Z], () => {
            var e, n;
            return {
                activeCommand: (null === (e = ev.commands) || void 0 === e ? void 0 : e.enabled) ? S.Z.getActiveCommand(ep.id) : null,
                activeCommandSection: (null === (n = ev.commands) || void 0 === n ? void 0 : n.enabled) ? S.Z.getActiveCommandSection(ep.id) : null
            };
        }),
        { isLurking: t_, isPendingMember: th, disabled: tp, canAttachFiles: tm, canCreateThreads: tg, canEveryoneSendMessages: tE } = eL(ep, ev, td, J),
        tv = ev.toolbarType === en.OW.STATIC,
        tI = !H.dN.useSetting() && !(0, ee.isAndroidWeb)() && null != window.ResizeObserver,
        tT = !tI || !(null === (r = ev.commands) || void 0 === r ? void 0 : r.enabled) || !eI || j !== eh.GI,
        tb = (0, U.Z)(),
        { isSubmitButtonEnabled: ty, fontSize: tS } = (0, m.cj)([T.Z], () => ({
            fontSize: T.Z.fontSize,
            isSubmitButtonEnabled: T.Z.isSubmitButtonEnabled
        })),
        tA = (0, m.e7)([z.Z], () => z.Z.isEnabled()),
        tN = o.useRef(j);
    tN.current = j;
    let tC = o.useCallback(
        (e, n, r) => {
            var i;
            n === eh.GI && '' === tN.current && (null === (i = ev.commands) || void 0 === i ? void 0 : i.enabled) && (null == e9 || e9()), null == eZ || eZ(e, n, r);
        },
        [eZ, e9, null === (i = ev.commands) || void 0 === i ? void 0 : i.enabled]
    );
    eN(ev, tp);
    let { eventEmitter: tR, handleEditorSelectionChanged: tO } = eC(ti, j, Y),
        { submitting: tD, submit: tL, handleSubmit: tx } = eT(eW, ev, ti, ep.id),
        { autocompleteRef: tw, handleMaybeShowAutocomplete: tP, handleHideAutocomplete: tM } = eR(),
        tk = eb(tL, ev, ti),
        tU = ey(ti),
        tB = eS({
            editorRef: ti,
            disabled: tp,
            textValue: j,
            channelId: ep.id,
            chatInputType: ev,
            submit: eW
        }),
        tG = eA(ti, ep),
        tF = o.useCallback(() => {
            var e;
            return null == ts ? void 0 : null === (e = ts.current) || void 0 === e ? void 0 : e.hide();
        }, []),
        { editorHeight: tZ, handleResize: tV } = eD(eV),
        { handleTab: tj, handleEnter: tH, handleMoveSelection: tY } = ew(tw, tr, tT),
        { expressionPickerView: tW, shouldHideExpressionPicker: tK, handleAutocompleteVisibilityChange: tz, handleOuterClick: tq } = ex(ev, tR, ti);
    (0, et.S)(tR, ep.guild_id, ep.id);
    let tQ = null != eF,
        tX = (tp && !((t_ || th) && tE)) || (tD && (null === (a = ev.submit) || void 0 === a ? void 0 : a.useDisabledStylesOnSubmit)),
        tJ = null;
    null != td ? (tJ = null == ek ? void 0 : ek(td, tf, em.attachButton)) : (!tp || tg) && (tJ = null == eM ? void 0 : eM(tQ, em.attachButton));
    let t$ = tI && null != Y && !tp && ev.showCharacterCount && null == td,
        t0 = tI && !__OVERLAY__ && null != Y && null == td && ev.toolbarType !== en.OW.NONE,
        t1 = eP(ep, ev, Y, tw),
        t2 = (0, eo.c)({
            channel: ep,
            type: ev,
            activeCommand: td,
            pendingReply: eF
        }),
        t3 = !!(null === (l = ev.emojis) || void 0 === l ? void 0 : l.button) && tZ <= eg,
        t4 = 0 === j.trim().length,
        t6 = (0, el.G)(ep.id, ev, t4),
        t5 = !0 === ev.showSlowmodeIndicator,
        t7 = !0 === ev.showTypingIndicator,
        t8 = tt && ev.layout === en.gy.INLINE,
        t9 = tt && ev.layout === en.gy.FLUSH,
        ne = o.useRef(null),
        nt = o.useCallback((e) => {
            if (e.target === ne.current) {
                var n;
                null === (n = ti.current) || void 0 === n || n.focus();
            }
        }, []),
        nn = (0, s.jsx)(el.Z, {
            type: ev,
            disabled: tp,
            channel: ep,
            handleSubmit: tx,
            isEmpty: t4,
            showAllButtons: tu,
            children: tt ? (null == eU ? void 0 : eU()) : null
        }),
        nr = t$
            ? (0, s.jsx)(ec.Z, {
                  type: ev,
                  textValue: j,
                  className: u()(e0, { [em.indentCharacterCount]: t3 }),
                  maxCharacterCount: eX,
                  showRemainingCharsAfterCount: eJ
              })
            : null,
        ni = tt
            ? (0, s.jsxs)('div', {
                  className: em.accessoryBar,
                  onClick: nt,
                  ref: ne,
                  children: [
                      (0, s.jsxs)('div', {
                          className: em.accessoryBarLeft,
                          children: [
                              null == eG ? void 0 : eG(),
                              tJ,
                              t7
                                  ? (0, s.jsx)(v.Z, {
                                        channel: ep,
                                        poggermodeEnabled: !1
                                    })
                                  : null
                          ]
                      }),
                      (0, s.jsxs)('div', {
                          className: em.accessoryBarRight,
                          children: [nr, nn]
                      })
                  ]
              })
            : null;
    return (0, s.jsx)(O.f6, {
        value: tR,
        children: (0, s.jsxs)(y.Gt, {
            value: te,
            children: [
                t0 && tv
                    ? (0, s.jsx)(ef.Z, {
                          editorRef: ti,
                          options: ev.markdown,
                          channel: ep
                      })
                    : t0
                      ? (0, s.jsx)(ed.Z, {
                            ref: ts,
                            editorRef: ti,
                            containerRef: ta,
                            options: ev.markdown
                        })
                      : null,
                (0, s.jsxs)('div', {
                    ref: tn,
                    className: u()(W, {
                        [em.channelTextArea]: !0,
                        [em.channelTextAreaDisabled]: tX,
                        [em.highlighted]: ez,
                        [em.textAreaMobileThemed]: h.tq,
                        [em.inlineContainer]: t8,
                        [em.flushContainer]: t9
                    }),
                    children: [
                        t8 || t9 ? null : (0, s.jsx)(eo.Z, { bars: t2 }),
                        (0, s.jsxs)('div', {
                            ref: ta,
                            onScroll: tF,
                            className: u()(K, {
                                [em.scrollableContainer]: !0,
                                [em.themedBackground]: !e5,
                                [em.hasStackedBar]: t2.stacked.length > 0
                            }),
                            children: [
                                (0, s.jsx)(ea.Z, {
                                    channelId: ep.id,
                                    chatInputType: ev
                                }),
                                ev.hideAttachmentArea
                                    ? null
                                    : (0, s.jsx)(eu.Z, {
                                          channelId: ep.id,
                                          type: ev,
                                          canAttachFiles: tm
                                      }),
                                (0, s.jsxs)('div', {
                                    className: u()(em.inner, {
                                        [em.innerDisabled]: tX,
                                        [em.sansAttachButton]: ev !== en.Ie.EDIT && (null != tJ || (tX && null == tJ) || t_),
                                        [em.sansAttachButtonCreateThread]: ev === en.Ie.THREAD_CREATION,
                                        [em.sansAttachButtonCreatePost]: ev === en.Ie.CREATE_FORUM_POST || ev === en.Ie.FORWARD_MESSAGE_INPUT,
                                        [em.sansAttachButtonUserProfileReply]: ev === en.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tq,
                                    children: [
                                        tt ? null : tJ,
                                        (0, s.jsx)(g.FocusRing, {
                                            ringTarget: tn,
                                            ringClassName: em.focusRing,
                                            children: (0, s.jsx)(er.Z, {
                                                ref: ti,
                                                id: Q,
                                                focused: eI,
                                                useSlate: tI,
                                                textValue: j,
                                                richValue: Y,
                                                disabled: tp,
                                                placeholder: $,
                                                required: X,
                                                accessibilityLabel: es,
                                                isPreviewing: (t_ || th) && tE,
                                                channel: ep,
                                                type: ev,
                                                canPasteFiles: tm,
                                                uploadPromptCharacterCount: e_.en1,
                                                maxCharacterCount: null != eX ? eX : tb,
                                                allowNewLines: e$,
                                                'aria-describedby': e1,
                                                onChange: tC,
                                                onResize: tV,
                                                onBlur: ej,
                                                onFocus: eH,
                                                onKeyDown: eY,
                                                onSubmit: tL,
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
                                                        [em.textAreaThreadCreation]: ev === en.Ie.THREAD_CREATION,
                                                        [em.profileBioInput]: ev === en.Ie.PROFILE_BIO_INPUT,
                                                        [em.overlayInlineReply]: ev === en.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    q
                                                ),
                                                'aria-labelledby': e2
                                            })
                                        }),
                                        tt
                                            ? (0, s.jsxs)('div', {
                                                  className: em.rightAccessories,
                                                  children: [
                                                      t5 ? (0, s.jsx)(R.Z, { channel: ep }) : null,
                                                      null !== (k = null == eB ? void 0 : eB()) && void 0 !== k ? k : null,
                                                      (null === (c = ev.submit) || void 0 === c ? void 0 : c.button) != null && ((null === (d = ev.submit) || void 0 === d ? void 0 : d.ignorePreference) || ty)
                                                          ? (0, s.jsx)(ei.Z, {
                                                                onClick: tx,
                                                                disabled: tp || t6
                                                            })
                                                          : null
                                                  ]
                                              })
                                            : nn
                                    ]
                                })
                            ]
                        }),
                        tt && !ev.hideAccessoryBar ? ni : null,
                        tT
                            ? null
                            : (0, s.jsx)(A.Z, {
                                  ref: tr,
                                  channel: ep,
                                  canOnlyUseTextCommands: tQ
                              }),
                        (0, s.jsx)(C.Z, {
                            ref: tw,
                            channel: ep,
                            canMentionRoles: eq,
                            canMentionChannels: eQ,
                            useNewSlashCommands: tI,
                            canOnlyUseTextCommands: tQ,
                            canSendStickers: null === (_ = ev.stickers) || void 0 === _ ? void 0 : _.allowSending,
                            canSendSoundmoji: null === (p = ev.soundmoji) || void 0 === p ? void 0 : p.allowSending,
                            textValue: j,
                            focused: eI,
                            expressionPickerView: tW,
                            type: ev,
                            targetRef: tn,
                            editorRef: ti,
                            onSendMessage: tL,
                            onSendSticker: tB,
                            onVisibilityChange: tz,
                            editorHeight: tZ,
                            setValue: (e, n) => (null == tC ? void 0 : tC(null, e, n)),
                            position: e4
                        }),
                        (0, s.jsx)(B.Z, {
                            textValue: j,
                            editorHeight: tZ,
                            channelId: ep.id
                        }),
                        tt ? null : nr,
                        t1
                            ? (0, s.jsx)(P.Z, {
                                  editorRef: ti,
                                  channel: ep,
                                  isEditorFocused: eI,
                                  onSelectSticker: tB,
                                  submitButtonVisible: (null === (E = ev.submit) || void 0 === E ? void 0 : E.button) && (null !== (F = null === (L = ev.submit) || void 0 === L ? void 0 : L.ignorePreference) && void 0 !== F ? F : ty),
                                  stickerIconVisible: null !== (Z = null === (w = ev.stickers) || void 0 === w ? void 0 : w.button) && void 0 !== Z && Z && !(to && null !== (V = null === (M = ev.confetti) || void 0 === M ? void 0 : M.button) && void 0 !== V && V)
                              })
                            : null,
                        e6
                    ]
                }),
                tK
                    ? null
                    : (0, s.jsx)(x.Z, {
                          positionTargetRef: tn,
                          type: ev,
                          onSelectGIF: tk,
                          onSelectEmoji: tU,
                          onSelectSticker: tB,
                          onSelectSound: tG,
                          channel: ep,
                          closeOnModalOuterClick: e7,
                          parentModalKey: e8,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: em.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
n.Z = o.memo(o.forwardRef(eM));
