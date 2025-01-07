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
    G = r(913663),
    Z = r(268350),
    F = r(378233),
    V = r(665906),
    j = r(695346),
    H = r(271383),
    Y = r(496675),
    W = r(944486),
    K = r(398327),
    z = r(117530),
    q = r(594174),
    Q = r(626135),
    X = r(459273),
    J = r(700785),
    $ = r(358085),
    ee = r(746877),
    et = r(541716),
    en = r(667829),
    er = r(319417),
    ei = r(562267),
    ea = r(376918),
    es = r(760196),
    eo = r(258696),
    el = r(303628),
    eu = r(472243),
    ec = r(872635),
    ed = r(676108),
    ef = r(981631),
    e_ = r(665692),
    eh = r(957825),
    ep = r(553796);
let em = 44,
    eg = 450;
function eE(e) {
    return e !== W.Z.getChannelId();
}
function ev(e, n) {
    var r, i;
    return null !== (i = e && (null === (r = n.submit) || void 0 === r ? void 0 : r.clearOnSubmit)) && void 0 !== i && i;
}
function eI(e, n, i, a) {
    let [l, u] = o.useState(!1),
        c = o.useCallback(
            (o, d, f, _, h) => {
                var p, m, v;
                if (l) return;
                u(!0);
                let I = null !== (m = null === (p = G.Z.getStickerPreview(a, n.drafts.type)) || void 0 === p ? void 0 : p.map((e) => e.id)) && void 0 !== m ? m : [],
                    T = null !== (v = z.Z.getUploads(a, n.drafts.type)) && void 0 !== v ? v : [];
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
                        o = ev(r, n),
                        l = null != i.current;
                    o && (eE(a) ? E.Z.saveDraft(a, '', n.drafts.type) : l && i.current.clearValue()), l && (u(!1), (0, L._Q)(), s && i.current.focus());
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
function eT(e, n, r) {
    return o.useCallback(
        (i) => {
            var a, s;
            n === et.Ie.CREATE_FORUM_POST ? null === (s = r.current) || void 0 === s || s.insertGIF(i) : e(i.url, void 0, void 0, !0), (0, L._Q)(), null === (a = r.current) || void 0 === a || a.focus();
        },
        [r, e, n]
    );
}
function eb(e) {
    return o.useCallback(
        function (n, r) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = e.current;
            null != n && null != a && a.insertEmoji(n, r, i), r && (0, L._Q)();
        },
        [e]
    );
}
function ey(e) {
    let { editorRef: n, disabled: r, textValue: i, channelId: a, chatInputType: s, submit: l } = e,
        { analyticsLocations: u } = (0, y.ZP)();
    return o.useCallback(
        (e, o) => {
            var c, d;
            !r &&
                ((0, F.Hc)(o, i, a, s.drafts.type)
                    ? ((0, ea._H)({
                          sticker: e,
                          stickerSelectLocation: o,
                          isReplacement: null != G.Z.getStickerPreview(a, s.drafts.type),
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
function eS(e, n) {
    return o.useCallback(
        (r) => {
            let i = e.current;
            null != r &&
                null != i &&
                (Q.default.track(ef.rMx.SOUNDMOJI_SELECT, {
                    channel_id: n.id,
                    guild_id: n.guild_id,
                    sound_guild_id: r.guildId,
                    sound_id: r.soundId,
                    source: 'expression_picker'
                }),
                i.insertSound(r)),
                (0, L._Q)(),
                null == i || i.focus();
        },
        [e, n.id, n.guild_id]
    );
}
function eA(e, n) {
    let r = o.useCallback(() => {
            if (!n) (0, L.RO)(eh.X1.EMOJI, e);
        }, [n, e]),
        i = o.useCallback(() => {
            var r;
            if (!n && !!(null === (r = e.gifs) || void 0 === r ? void 0 : r.allowSending)) (0, L.RO)(eh.X1.GIF, e);
        }, [n, e]),
        a = o.useCallback(() => {
            var r;
            if (!n && !!(null === (r = e.stickers) || void 0 === r ? void 0 : r.allowSending)) (0, L.RO)(eh.X1.STICKER, e);
        }, [n, e]);
    (0, X.yp)({
        event: ef.CkL.TOGGLE_EMOJI_POPOUT,
        handler: r
    }),
        (0, X.yp)({
            event: ef.CkL.TOGGLE_GIF_PICKER,
            handler: i
        }),
        (0, X.yp)({
            event: ef.CkL.TOGGLE_STICKER_PICKER,
            handler: a
        });
}
function eN(e, n, r) {
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
function eC() {
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
function eR(e) {
    let n = o.useRef(null);
    if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
    return null == e ? n : e;
}
function eO(e) {
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
function eD(e, n, r, i) {
    let a = e.getGuildId(),
        s = (0, m.e7)([k.Z], () => null != a && k.Z.isLurking(a), [a]),
        o = (0, m.e7)([H.ZP, q.default], () => {
            var e, n;
            let r = q.default.getCurrentUser();
            return null !== (n = null != a && null != r ? (null === (e = H.ZP.getMember(a, r.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
        }),
        l = (0, m.cj)(
            [Y.Z],
            () => {
                var a, s;
                let l = e.isPrivate(),
                    u = Y.Z.computePermissions(e),
                    c = p.e$(u, ef.Plq.CREATE_PUBLIC_THREADS) || p.e$(u, ef.Plq.CREATE_PRIVATE_THREADS),
                    d = (!(null === (a = n.permissions) || void 0 === a ? void 0 : a.requireCreateTherads) || c) && (!(null === (s = n.permissions) || void 0 === s ? void 0 : s.requireSendMessages) || p.e$(u, ef.Plq.SEND_MESSAGES)),
                    f = d && p.e$(u, ef.Plq.ATTACH_FILES),
                    _ = null != r,
                    h = (0, V.xl)(e);
                return {
                    disabled: i || o || (!l && !d) || h,
                    canAttachFiles: !0 === n.attachments && (l || o || f || _),
                    canCreateThreads: c,
                    canEveryoneSendMessages: J.Uu(ef.Plq.SEND_MESSAGES, e)
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
function eL(e, n, r) {
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
function ex(e, n, r) {
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
function ew(e, n, r, i) {
    var a, s;
    let o = (0, w.pR)(),
        l = (0, m.e7)([G.Z], () => G.Z.getStickerPreview(e.id, n.drafts.type)),
        u = null != l && l.length > 0;
    return o && (null === (a = n.stickers) || void 0 === a ? void 0 : a.autoSuggest) && !u && (null === (s = i.current) || void 0 === s ? void 0 : s.isVisible()) !== !0 && !__OVERLAY__ && null != r;
}
function eP(e, n) {
    var r, i, a, l, c, d, _, p, E, L, w, M, k;
    let { textValue: G, richValue: Z, className: F, innerClassName: V, editorClassName: H, id: Y, required: W, disabled: z, placeholder: q, accessibilityLabel: Q, channel: X, type: J, focused: ea, renderAttachButton: eh, renderApplicationCommandIcon: eE, renderAppLauncherButton: ev, renderLeftAccessories: eP, pendingReply: eM, onChange: ek, onResize: eU, onBlur: eB, onFocus: eG, onKeyDown: eZ, onSubmit: eF, promptToUpload: eV, highlighted: ej, canMentionRoles: eH, canMentionChannels: eY, maxCharacterCount: eW, showRemainingCharsAfterCount: eK, allowNewLines: ez = !0, characterCountClassName: eq, 'aria-describedby': eQ, 'aria-labelledby': eX, setEditorRef: eJ, autoCompletePosition: e$, children: e0, disableThemedBackground: e1 = !1, emojiPickerCloseOnModalOuterClick: e2, parentModalKey: e3, onCommandSentinelTyped: e4 } = e;
    f()(null != J, 'chat input type must be set');
    let { analyticsLocations: e6 } = (0, y.ZP)(b.Z.CHANNEL_TEXT_AREA),
        e5 = (0, D.Q3)('ChannelTextAreaContainer'),
        e7 = eR(n),
        e8 = o.useRef(null),
        e9 = o.useRef(null),
        te = o.useRef(null),
        tt = o.useRef(null);
    null == eJ || eJ(e9.current);
    let tn = (0, N.h9)(X.id, 'ChannelTextAreaContainer'),
        [tr, ti] = o.useState(!tn);
    (0, I.P)(e7, (e) => {
        let { width: n } = e;
        return ti(!tn && (null == n || n > eg));
    });
    let { activeCommand: ta, activeCommandSection: ts } = (0, m.cj)([S.Z], () => {
            var e, n;
            return {
                activeCommand: (null === (e = J.commands) || void 0 === e ? void 0 : e.enabled) ? S.Z.getActiveCommand(X.id) : null,
                activeCommandSection: (null === (n = J.commands) || void 0 === n ? void 0 : n.enabled) ? S.Z.getActiveCommandSection(X.id) : null
            };
        }),
        { isLurking: to, isPendingMember: tl, disabled: tu, canAttachFiles: tc, canCreateThreads: td, canEveryoneSendMessages: tf } = eD(X, J, ta, z),
        t_ = J.toolbarType === et.OW.STATIC,
        th = !j.dN.useSetting() && !(0, $.isAndroidWeb)() && null != window.ResizeObserver,
        tp = !th || !(null === (r = J.commands) || void 0 === r ? void 0 : r.enabled) || !ea || G !== e_.GI,
        tm = (0, U.Z)(),
        { isSubmitButtonEnabled: tg, fontSize: tE } = (0, m.cj)([T.Z], () => ({
            fontSize: T.Z.fontSize,
            isSubmitButtonEnabled: T.Z.isSubmitButtonEnabled
        })),
        tv = (0, m.e7)([K.Z], () => K.Z.isEnabled()),
        tI = o.useRef(G);
    tI.current = G;
    let tT = o.useCallback(
        (e, n, r) => {
            var i;
            n === e_.GI && '' === tI.current && (null === (i = J.commands) || void 0 === i ? void 0 : i.enabled) && (null == e4 || e4()), null == ek || ek(e, n, r);
        },
        [ek, e4, null === (i = J.commands) || void 0 === i ? void 0 : i.enabled]
    );
    eA(J, tu);
    let { eventEmitter: tb, handleEditorSelectionChanged: ty } = eN(e9, G, Z),
        { submitting: tS, submit: tA, handleSubmit: tN } = eI(eF, J, e9, X.id),
        { autocompleteRef: tC, handleMaybeShowAutocomplete: tR, handleHideAutocomplete: tO } = eC(),
        tD = eT(tA, J, e9),
        tL = eb(e9),
        tx = ey({
            editorRef: e9,
            disabled: tu,
            textValue: G,
            channelId: X.id,
            chatInputType: J,
            submit: eF
        }),
        tw = eS(e9, X),
        tP = o.useCallback(() => {
            var e;
            return null == tt ? void 0 : null === (e = tt.current) || void 0 === e ? void 0 : e.hide();
        }, []),
        { editorHeight: tM, handleResize: tk } = eO(eU),
        { handleTab: tU, handleEnter: tB, handleMoveSelection: tG } = ex(tC, e8, tp),
        { expressionPickerView: tZ, shouldHideExpressionPicker: tF, handleAutocompleteVisibilityChange: tV, handleOuterClick: tj } = eL(J, tb, e9);
    (0, ee.S)(tb, X.guild_id, X.id);
    let tH = null != eM,
        tY = (tu && !((to || tl) && tf)) || (tS && (null === (a = J.submit) || void 0 === a ? void 0 : a.useDisabledStylesOnSubmit)),
        tW = null;
    null != ta ? (tW = null == eE ? void 0 : eE(ta, ts, ep.attachButton)) : (!tu || td) && (tW = null == eh ? void 0 : eh(tH, ep.attachButton));
    let tK = th && null != Z && !tu && J.showCharacterCount && null == ta,
        tz = th && !__OVERLAY__ && null != Z && null == ta && J.toolbarType !== et.OW.NONE,
        tq = ew(X, J, Z, tC),
        tQ = (0, es.c)({
            channel: X,
            type: J,
            activeCommand: ta,
            pendingReply: eM
        }),
        tX = !!(null === (l = J.emojis) || void 0 === l ? void 0 : l.button) && tM <= em,
        tJ = 0 === G.trim().length,
        t$ = (0, eo.G)(X.id, J, tJ),
        t0 = !0 === J.showSlowmodeIndicator,
        t1 = !0 === J.showTypingIndicator,
        t2 = e5 && J.layout === et.gy.INLINE,
        t3 = e5 && J.layout === et.gy.FLUSH,
        t4 = (0, s.jsx)(eo.Z, {
            type: J,
            disabled: tu,
            channel: X,
            handleSubmit: tN,
            isEmpty: tJ,
            showAllButtons: tr,
            children: e5 ? (null == ev ? void 0 : ev()) : null
        }),
        t6 = tK
            ? (0, s.jsx)(eu.Z, {
                  type: J,
                  textValue: G,
                  className: u()(eq, { [ep.indentCharacterCount]: tX }),
                  maxCharacterCount: eW,
                  showRemainingCharsAfterCount: eK
              })
            : null,
        t5 = e5
            ? (0, s.jsxs)('div', {
                  className: ep.accessoryBar,
                  children: [
                      (0, s.jsxs)('div', {
                          className: ep.accessoryBarLeft,
                          children: [
                              null == eP ? void 0 : eP(),
                              tW,
                              t1
                                  ? (0, s.jsx)(v.Z, {
                                        channel: X,
                                        poggermodeEnabled: !1
                                    })
                                  : null
                          ]
                      }),
                      (0, s.jsxs)('div', {
                          className: ep.accessoryBarRight,
                          children: [t6, t4]
                      })
                  ]
              })
            : null;
    return (0, s.jsx)(O.f6, {
        value: tb,
        children: (0, s.jsxs)(y.Gt, {
            value: e6,
            children: [
                tz && t_
                    ? (0, s.jsx)(ed.Z, {
                          editorRef: e9,
                          options: J.markdown,
                          channel: X
                      })
                    : tz
                      ? (0, s.jsx)(ec.Z, {
                            ref: tt,
                            editorRef: e9,
                            containerRef: te,
                            options: J.markdown
                        })
                      : null,
                (0, s.jsxs)('div', {
                    ref: e7,
                    className: u()(F, {
                        [ep.channelTextArea]: !0,
                        [ep.channelTextAreaDisabled]: tY,
                        [ep.highlighted]: ej,
                        [ep.textAreaMobileThemed]: h.tq,
                        [ep.inlineContainer]: t2,
                        [ep.flushContainer]: t3
                    }),
                    children: [
                        t2 || t3 ? null : (0, s.jsx)(es.Z, { bars: tQ }),
                        (0, s.jsxs)('div', {
                            ref: te,
                            onScroll: tP,
                            className: u()(V, {
                                [ep.scrollableContainer]: !0,
                                [ep.themedBackground]: !e1,
                                [ep.hasStackedBar]: tQ.stacked.length > 0
                            }),
                            children: [
                                (0, s.jsx)(ei.Z, {
                                    channelId: X.id,
                                    chatInputType: J
                                }),
                                J.hideAttachmentArea
                                    ? null
                                    : (0, s.jsx)(el.Z, {
                                          channelId: X.id,
                                          type: J,
                                          canAttachFiles: tc
                                      }),
                                (0, s.jsxs)('div', {
                                    className: u()(ep.inner, {
                                        [ep.innerDisabled]: tY,
                                        [ep.sansAttachButton]: J !== et.Ie.EDIT && (null != tW || (tY && null == tW) || to),
                                        [ep.sansAttachButtonCreateThread]: J === et.Ie.THREAD_CREATION,
                                        [ep.sansAttachButtonCreatePost]: J === et.Ie.CREATE_FORUM_POST || J === et.Ie.FORWARD_MESSAGE_INPUT,
                                        [ep.sansAttachButtonUserProfileReply]: J === et.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tj,
                                    children: [
                                        e5 ? null : tW,
                                        (0, s.jsx)(g.FocusRing, {
                                            ringTarget: e7,
                                            ringClassName: ep.focusRing,
                                            children: (0, s.jsx)(en.Z, {
                                                ref: e9,
                                                id: Y,
                                                focused: ea,
                                                useSlate: th,
                                                textValue: G,
                                                richValue: Z,
                                                disabled: tu,
                                                placeholder: q,
                                                required: W,
                                                accessibilityLabel: Q,
                                                isPreviewing: (to || tl) && tf,
                                                channel: X,
                                                type: J,
                                                canPasteFiles: tc,
                                                uploadPromptCharacterCount: ef.en1,
                                                maxCharacterCount: null != eW ? eW : tm,
                                                allowNewLines: ez,
                                                'aria-describedby': eQ,
                                                onChange: tT,
                                                onResize: tk,
                                                onBlur: eB,
                                                onFocus: eG,
                                                onKeyDown: eZ,
                                                onSubmit: tA,
                                                onTab: tU,
                                                onEnter: tB,
                                                onMoveSelection: tG,
                                                onSelectionChanged: ty,
                                                onMaybeShowAutocomplete: tR,
                                                onHideAutocomplete: tO,
                                                promptToUpload: eV,
                                                fontSize: tE,
                                                spellcheckEnabled: tv,
                                                canOnlyUseTextCommands: tH,
                                                className: u()(
                                                    {
                                                        [ep.textAreaThreadCreation]: J === et.Ie.THREAD_CREATION,
                                                        [ep.profileBioInput]: J === et.Ie.PROFILE_BIO_INPUT,
                                                        [ep.overlayInlineReply]: J === et.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    H
                                                ),
                                                'aria-labelledby': eX
                                            })
                                        }),
                                        e5
                                            ? (0, s.jsxs)('div', {
                                                  className: ep.rightAccessories,
                                                  children: [
                                                      t0 ? (0, s.jsx)(R.Z, { channel: X }) : null,
                                                      (null === (c = J.submit) || void 0 === c ? void 0 : c.button) != null && ((null === (d = J.submit) || void 0 === d ? void 0 : d.ignorePreference) || tg)
                                                          ? (0, s.jsx)(er.Z, {
                                                                onClick: tN,
                                                                disabled: tu || t$
                                                            })
                                                          : null
                                                  ]
                                              })
                                            : t4
                                    ]
                                })
                            ]
                        }),
                        e5 ? t5 : null,
                        tp
                            ? null
                            : (0, s.jsx)(A.Z, {
                                  ref: e8,
                                  channel: X,
                                  canOnlyUseTextCommands: tH
                              }),
                        (0, s.jsx)(C.Z, {
                            ref: tC,
                            channel: X,
                            canMentionRoles: eH,
                            canMentionChannels: eY,
                            useNewSlashCommands: th,
                            canOnlyUseTextCommands: tH,
                            canSendStickers: null === (_ = J.stickers) || void 0 === _ ? void 0 : _.allowSending,
                            canSendSoundmoji: null === (p = J.soundmoji) || void 0 === p ? void 0 : p.allowSending,
                            textValue: G,
                            focused: ea,
                            expressionPickerView: tZ,
                            type: J,
                            targetRef: e7,
                            editorRef: e9,
                            onSendMessage: tA,
                            onSendSticker: tx,
                            onVisibilityChange: tV,
                            editorHeight: tM,
                            setValue: (e, n) => (null == tT ? void 0 : tT(null, e, n)),
                            position: e$
                        }),
                        (0, s.jsx)(B.Z, {
                            textValue: G,
                            editorHeight: tM,
                            channelId: X.id
                        }),
                        e5 ? null : t6,
                        tq
                            ? (0, s.jsx)(P.Z, {
                                  editorRef: e9,
                                  channel: X,
                                  isEditorFocused: ea,
                                  onSelectSticker: tx,
                                  submitButtonVisible: (null === (E = J.submit) || void 0 === E ? void 0 : E.button) && (null !== (M = null === (L = J.submit) || void 0 === L ? void 0 : L.ignorePreference) && void 0 !== M ? M : tg),
                                  stickerIconVisible: null !== (k = null === (w = J.stickers) || void 0 === w ? void 0 : w.button) && void 0 !== k && k
                              })
                            : null,
                        e0
                    ]
                }),
                tF
                    ? null
                    : (0, s.jsx)(x.Z, {
                          positionTargetRef: e7,
                          type: J,
                          onSelectGIF: tD,
                          onSelectEmoji: tL,
                          onSelectSticker: tx,
                          onSelectSound: tw,
                          channel: X,
                          closeOnModalOuterClick: e2,
                          parentModalKey: e3,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: ep.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
n.Z = o.memo(o.forwardRef(eP));
