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
    var r, i, a, l, c, d, _, p, E, L, w, M, k, F, Z;
    let { textValue: V, richValue: j, className: Y, innerClassName: W, editorClassName: K, id: q, required: Q, disabled: X, placeholder: J, accessibilityLabel: $, channel: es, type: ep, focused: ev, renderAttachButton: eI, renderApplicationCommandIcon: eM, renderAppLauncherButton: ek, renderLeftAccessories: eU, pendingReply: eB, onChange: eG, onResize: eF, onBlur: eZ, onFocus: eV, onKeyDown: ej, onSubmit: eH, promptToUpload: eY, highlighted: eW, canMentionRoles: eK, canMentionChannels: ez, maxCharacterCount: eq, showRemainingCharsAfterCount: eQ, allowNewLines: eX = !0, characterCountClassName: eJ, 'aria-describedby': e$, 'aria-labelledby': e0, setEditorRef: e1, autoCompletePosition: e2, children: e3, disableThemedBackground: e4 = !1, emojiPickerCloseOnModalOuterClick: e6, parentModalKey: e5, onCommandSentinelTyped: e7 } = e;
    f()(null != ep, 'chat input type must be set');
    let { analyticsLocations: e8 } = (0, y.ZP)(b.Z.CHANNEL_TEXT_AREA),
        e9 = (0, D.R6)('ChannelTextAreaContainer'),
        te = eO(n),
        tt = o.useRef(null),
        tn = o.useRef(null),
        tr = o.useRef(null),
        ti = o.useRef(null);
    null == e1 || e1(tn.current);
    let ta = (0, G.V1)('ChannelTextAreaContainer'),
        ts = (0, N.h9)(es.id),
        [to, tl] = o.useState(!ts);
    (0, I.P)(te, (e) => {
        let { width: n } = e;
        return tl(!ts && (null == n || n > eE));
    });
    let { activeCommand: tu, activeCommandSection: tc } = (0, m.cj)([S.Z], () => {
            var e, n;
            return {
                activeCommand: (null === (e = ep.commands) || void 0 === e ? void 0 : e.enabled) ? S.Z.getActiveCommand(es.id) : null,
                activeCommandSection: (null === (n = ep.commands) || void 0 === n ? void 0 : n.enabled) ? S.Z.getActiveCommandSection(es.id) : null
            };
        }),
        { isLurking: td, isPendingMember: tf, disabled: t_, canAttachFiles: th, canCreateThreads: tp, canEveryoneSendMessages: tm } = eL(es, ep, tu, X),
        tg = ep.toolbarType === en.OW.STATIC,
        tE = !H.dN.useSetting() && !(0, ee.isAndroidWeb)() && null != window.ResizeObserver,
        tv = !tE || !(null === (r = ep.commands) || void 0 === r ? void 0 : r.enabled) || !ev || V !== eh.GI,
        tI = (0, U.Z)(),
        { isSubmitButtonEnabled: tT, fontSize: tb } = (0, m.cj)([T.Z], () => ({
            fontSize: T.Z.fontSize,
            isSubmitButtonEnabled: T.Z.isSubmitButtonEnabled
        })),
        ty = (0, m.e7)([z.Z], () => z.Z.isEnabled()),
        tS = o.useRef(V);
    tS.current = V;
    let tA = o.useCallback(
        (e, n, r) => {
            var i;
            n === eh.GI && '' === tS.current && (null === (i = ep.commands) || void 0 === i ? void 0 : i.enabled) && (null == e7 || e7()), null == eG || eG(e, n, r);
        },
        [eG, e7, null === (i = ep.commands) || void 0 === i ? void 0 : i.enabled]
    );
    eN(ep, t_);
    let { eventEmitter: tN, handleEditorSelectionChanged: tC } = eC(tn, V, j),
        { submitting: tR, submit: tO, handleSubmit: tD } = eT(eH, ep, tn, es.id),
        { autocompleteRef: tL, handleMaybeShowAutocomplete: tx, handleHideAutocomplete: tw } = eR(),
        tP = eb(tO, ep, tn),
        tM = ey(tn),
        tk = eS({
            editorRef: tn,
            disabled: t_,
            textValue: V,
            channelId: es.id,
            chatInputType: ep,
            submit: eH
        }),
        tU = eA(tn, es),
        tB = o.useCallback(() => {
            var e;
            return null == ti ? void 0 : null === (e = ti.current) || void 0 === e ? void 0 : e.hide();
        }, []),
        { editorHeight: tG, handleResize: tF } = eD(eF),
        { handleTab: tZ, handleEnter: tV, handleMoveSelection: tj } = ew(tL, tt, tv),
        { expressionPickerView: tH, shouldHideExpressionPicker: tY, handleAutocompleteVisibilityChange: tW, handleOuterClick: tK } = ex(ep, tN, tn);
    (0, et.S)(tN, es.guild_id, es.id);
    let tz = null != eB,
        tq = (t_ && !((td || tf) && tm)) || (tR && (null === (a = ep.submit) || void 0 === a ? void 0 : a.useDisabledStylesOnSubmit)),
        tQ = null;
    null != tu ? (tQ = null == eM ? void 0 : eM(tu, tc, em.attachButton)) : (!t_ || tp) && (tQ = null == eI ? void 0 : eI(tz, em.attachButton));
    let tX = tE && null != j && !t_ && ep.showCharacterCount && null == tu,
        tJ = tE && !__OVERLAY__ && null != j && null == tu && ep.toolbarType !== en.OW.NONE,
        t$ = eP(es, ep, j, tL),
        t0 = (0, eo.c)({
            channel: es,
            type: ep,
            activeCommand: tu,
            pendingReply: eB
        }),
        t1 = !!(null === (l = ep.emojis) || void 0 === l ? void 0 : l.button) && tG <= eg,
        t2 = 0 === V.trim().length,
        t3 = (0, el.G)(es.id, ep, t2),
        t4 = !0 === ep.showSlowmodeIndicator,
        t6 = !0 === ep.showTypingIndicator,
        t5 = e9 && ep.layout === en.gy.INLINE,
        t7 = e9 && ep.layout === en.gy.FLUSH,
        t8 = o.useRef(null),
        t9 = o.useCallback((e) => {
            if (e.target === t8.current) {
                var n;
                null === (n = tn.current) || void 0 === n || n.focus();
            }
        }, []),
        ne = (0, s.jsx)(el.Z, {
            type: ep,
            disabled: t_,
            channel: es,
            handleSubmit: tD,
            isEmpty: t2,
            showAllButtons: to,
            children: e9 ? (null == ek ? void 0 : ek()) : null
        }),
        nt = tX
            ? (0, s.jsx)(ec.Z, {
                  type: ep,
                  textValue: V,
                  className: u()(eJ, { [em.indentCharacterCount]: t1 }),
                  maxCharacterCount: eq,
                  showRemainingCharsAfterCount: eQ
              })
            : null,
        nn = e9
            ? (0, s.jsxs)('div', {
                  className: em.accessoryBar,
                  onClick: t9,
                  ref: t8,
                  children: [
                      (0, s.jsxs)('div', {
                          className: em.accessoryBarLeft,
                          children: [
                              null == eU ? void 0 : eU(),
                              tQ,
                              t6
                                  ? (0, s.jsx)(v.Z, {
                                        channel: es,
                                        poggermodeEnabled: !1
                                    })
                                  : null
                          ]
                      }),
                      (0, s.jsxs)('div', {
                          className: em.accessoryBarRight,
                          children: [nt, ne]
                      })
                  ]
              })
            : null;
    return (0, s.jsx)(O.f6, {
        value: tN,
        children: (0, s.jsxs)(y.Gt, {
            value: e8,
            children: [
                tJ && tg
                    ? (0, s.jsx)(ef.Z, {
                          editorRef: tn,
                          options: ep.markdown,
                          channel: es
                      })
                    : tJ
                      ? (0, s.jsx)(ed.Z, {
                            ref: ti,
                            editorRef: tn,
                            containerRef: tr,
                            options: ep.markdown
                        })
                      : null,
                (0, s.jsxs)('div', {
                    ref: te,
                    className: u()(Y, {
                        [em.channelTextArea]: !0,
                        [em.channelTextAreaDisabled]: tq,
                        [em.highlighted]: eW,
                        [em.textAreaMobileThemed]: h.tq,
                        [em.inlineContainer]: t5,
                        [em.flushContainer]: t7
                    }),
                    children: [
                        t5 || t7 ? null : (0, s.jsx)(eo.Z, { bars: t0 }),
                        (0, s.jsxs)('div', {
                            ref: tr,
                            onScroll: tB,
                            className: u()(W, {
                                [em.scrollableContainer]: !0,
                                [em.themedBackground]: !e4,
                                [em.hasStackedBar]: t0.stacked.length > 0
                            }),
                            children: [
                                (0, s.jsx)(ea.Z, {
                                    channelId: es.id,
                                    chatInputType: ep
                                }),
                                ep.hideAttachmentArea
                                    ? null
                                    : (0, s.jsx)(eu.Z, {
                                          channelId: es.id,
                                          type: ep,
                                          canAttachFiles: th
                                      }),
                                (0, s.jsxs)('div', {
                                    className: u()(em.inner, {
                                        [em.innerDisabled]: tq,
                                        [em.sansAttachButton]: ep !== en.Ie.EDIT && (null != tQ || (tq && null == tQ) || td),
                                        [em.sansAttachButtonCreateThread]: ep === en.Ie.THREAD_CREATION,
                                        [em.sansAttachButtonCreatePost]: ep === en.Ie.CREATE_FORUM_POST || ep === en.Ie.FORWARD_MESSAGE_INPUT,
                                        [em.sansAttachButtonUserProfileReply]: ep === en.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tK,
                                    children: [
                                        e9 ? null : tQ,
                                        (0, s.jsx)(g.FocusRing, {
                                            ringTarget: te,
                                            ringClassName: em.focusRing,
                                            children: (0, s.jsx)(er.Z, {
                                                ref: tn,
                                                id: q,
                                                focused: ev,
                                                useSlate: tE,
                                                textValue: V,
                                                richValue: j,
                                                disabled: t_,
                                                placeholder: J,
                                                required: Q,
                                                accessibilityLabel: $,
                                                isPreviewing: (td || tf) && tm,
                                                channel: es,
                                                type: ep,
                                                canPasteFiles: th,
                                                uploadPromptCharacterCount: e_.en1,
                                                maxCharacterCount: null != eq ? eq : tI,
                                                allowNewLines: eX,
                                                'aria-describedby': e$,
                                                onChange: tA,
                                                onResize: tF,
                                                onBlur: eZ,
                                                onFocus: eV,
                                                onKeyDown: ej,
                                                onSubmit: tO,
                                                onTab: tZ,
                                                onEnter: tV,
                                                onMoveSelection: tj,
                                                onSelectionChanged: tC,
                                                onMaybeShowAutocomplete: tx,
                                                onHideAutocomplete: tw,
                                                promptToUpload: eY,
                                                fontSize: tb,
                                                spellcheckEnabled: ty,
                                                canOnlyUseTextCommands: tz,
                                                className: u()(
                                                    {
                                                        [em.textAreaThreadCreation]: ep === en.Ie.THREAD_CREATION,
                                                        [em.profileBioInput]: ep === en.Ie.PROFILE_BIO_INPUT,
                                                        [em.overlayInlineReply]: ep === en.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    K
                                                ),
                                                'aria-labelledby': e0
                                            })
                                        }),
                                        e9
                                            ? (0, s.jsxs)('div', {
                                                  className: em.rightAccessories,
                                                  children: [
                                                      t4 ? (0, s.jsx)(R.Z, { channel: es }) : null,
                                                      (null === (c = ep.submit) || void 0 === c ? void 0 : c.button) != null && ((null === (d = ep.submit) || void 0 === d ? void 0 : d.ignorePreference) || tT)
                                                          ? (0, s.jsx)(ei.Z, {
                                                                onClick: tD,
                                                                disabled: t_ || t3
                                                            })
                                                          : null
                                                  ]
                                              })
                                            : ne
                                    ]
                                })
                            ]
                        }),
                        e9 && !ep.hideAccessoryBar ? nn : null,
                        tv
                            ? null
                            : (0, s.jsx)(A.Z, {
                                  ref: tt,
                                  channel: es,
                                  canOnlyUseTextCommands: tz
                              }),
                        (0, s.jsx)(C.Z, {
                            ref: tL,
                            channel: es,
                            canMentionRoles: eK,
                            canMentionChannels: ez,
                            useNewSlashCommands: tE,
                            canOnlyUseTextCommands: tz,
                            canSendStickers: null === (_ = ep.stickers) || void 0 === _ ? void 0 : _.allowSending,
                            canSendSoundmoji: null === (p = ep.soundmoji) || void 0 === p ? void 0 : p.allowSending,
                            textValue: V,
                            focused: ev,
                            expressionPickerView: tH,
                            type: ep,
                            targetRef: te,
                            editorRef: tn,
                            onSendMessage: tO,
                            onSendSticker: tk,
                            onVisibilityChange: tW,
                            editorHeight: tG,
                            setValue: (e, n) => (null == tA ? void 0 : tA(null, e, n)),
                            position: e2
                        }),
                        (0, s.jsx)(B.Z, {
                            textValue: V,
                            editorHeight: tG,
                            channelId: es.id
                        }),
                        e9 ? null : nt,
                        t$
                            ? (0, s.jsx)(P.Z, {
                                  editorRef: tn,
                                  channel: es,
                                  isEditorFocused: ev,
                                  onSelectSticker: tk,
                                  submitButtonVisible: (null === (E = ep.submit) || void 0 === E ? void 0 : E.button) && (null !== (k = null === (L = ep.submit) || void 0 === L ? void 0 : L.ignorePreference) && void 0 !== k ? k : tT),
                                  stickerIconVisible: null !== (F = null === (w = ep.stickers) || void 0 === w ? void 0 : w.button) && void 0 !== F && F && !(ta && null !== (Z = null === (M = ep.confetti) || void 0 === M ? void 0 : M.button) && void 0 !== Z && Z)
                              })
                            : null,
                        e3
                    ]
                }),
                tY
                    ? null
                    : (0, s.jsx)(x.Z, {
                          positionTargetRef: te,
                          type: ep,
                          onSelectGIF: tP,
                          onSelectEmoji: tM,
                          onSelectSticker: tk,
                          onSelectSound: tU,
                          channel: es,
                          closeOnModalOuterClick: e6,
                          parentModalKey: e5,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: em.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
n.Z = o.memo(o.forwardRef(eM));
