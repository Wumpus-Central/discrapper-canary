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
    S = r(541099),
    A = r(998698),
    C = r(271668),
    N = r(404295),
    R = r(326133),
    O = r(405701),
    D = r(570220),
    L = r(540059),
    x = r(28546),
    w = r(805680),
    P = r(278754),
    M = r(151574),
    k = r(368844),
    U = r(41776),
    B = r(849522),
    G = r(780291),
    Z = r(328908),
    F = r(135793),
    V = r(576645),
    j = r(111810),
    H = r(913663),
    Y = r(268350),
    W = r(378233),
    K = r(665906),
    z = r(695346),
    q = r(271383),
    Q = r(496675),
    X = r(944486),
    J = r(398327),
    $ = r(117530),
    ee = r(594174),
    et = r(626135),
    en = r(459273),
    er = r(700785),
    ei = r(358085),
    ea = r(746877),
    eo = r(541716),
    es = r(667829),
    el = r(319417),
    eu = r(562267),
    ec = r(376918),
    ed = r(760196),
    ef = r(258696),
    ep = r(303628),
    eh = r(472243),
    e_ = r(872635),
    em = r(676108),
    eg = r(981631),
    eE = r(665692),
    ev = r(957825),
    ey = r(553796);
let eb = 44,
    eI = 450;
function eT(e) {
    return e !== X.Z.getChannelId();
}
function eS(e, n) {
    var r, i;
    return null !== (i = e && (null === (r = n.submit) || void 0 === r ? void 0 : r.clearOnSubmit)) && void 0 !== i && i;
}
function eA(e, n, i, a) {
    let [l, u] = s.useState(!1),
        c = s.useCallback(
            (s, d, f, p, h, _) => {
                var m, v, y;
                if (l) return;
                u(!0);
                let b = null !== (v = null === (m = H.Z.getStickerPreview(a, n.drafts.type)) || void 0 === m ? void 0 : m.map((e) => e.id)) && void 0 !== v ? v : [],
                    I = null !== (y = $.Z.getUploads(a, n.drafts.type)) && void 0 !== y ? y : [],
                    T = (0, Z.q5)(a);
                if (null == d && !p && !h && (0, k.CB)(I, a)) {
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
                let S = (0, Z.rH)(a),
                    A = (0, V.tv)(s, p, d, I);
                if (S && A && !_) {
                    u(!1),
                        (0, F.openMessageConfettiModal)({
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
                        s = eS(r, n),
                        l = null != i.current;
                    s && (eT(a) ? E.Z.saveDraft(a, '', n.drafts.type) : l && i.current.clearValue()), l && (u(!1), (0, x._Q)(), o && i.current.focus());
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
function eC(e, n, r) {
    return s.useCallback(
        (i) => {
            var a, o;
            n === eo.Ie.CREATE_FORUM_POST ? null === (o = r.current) || void 0 === o || o.insertGIF(i) : e(i.url, void 0, void 0, !0), (0, x._Q)(), null === (a = r.current) || void 0 === a || a.focus();
        },
        [r, e, n]
    );
}
function eN(e) {
    return s.useCallback(
        function (n, r) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                a = e.current;
            null != n && null != a && a.insertEmoji(n, r, i), r && (0, x._Q)();
        },
        [e]
    );
}
function eR(e) {
    let { editorRef: n, disabled: r, textValue: i, channelId: a, chatInputType: o, submit: l } = e,
        { analyticsLocations: u } = (0, T.ZP)();
    return s.useCallback(
        (e, s) => {
            var c, d;
            !r &&
                ((0, W.Hc)(s, i, a, o.drafts.type)
                    ? ((0, ec._H)({
                          sticker: e,
                          stickerSelectLocation: s,
                          isReplacement: null != H.Z.getStickerPreview(a, o.drafts.type),
                          analyticsLocations: u
                      }),
                      (0, Y.eu)(a, e, o.drafts.type))
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
function eO(e, n) {
    return s.useCallback(
        (r, i, a) => {
            let o = e.current;
            null != r &&
                null != o &&
                (et.default.track(eg.rMx.SOUNDMOJI_SELECT, {
                    channel_id: n.id,
                    guild_id: n.guild_id,
                    sound_guild_id: r.guildId,
                    sound_id: r.soundId,
                    source: i
                }),
                o.insertSound(r)),
                a && (0, x._Q)(),
                null == o || o.focus();
        },
        [e, n.id, n.guild_id]
    );
}
function eD(e, n) {
    let r = s.useCallback(() => {
            if (!n) (0, x.RO)(ev.X1.EMOJI, e);
        }, [n, e]),
        i = s.useCallback(() => {
            var r;
            if (!n && !!(null === (r = e.gifs) || void 0 === r ? void 0 : r.allowSending)) (0, x.RO)(ev.X1.GIF, e);
        }, [n, e]),
        a = s.useCallback(() => {
            var r;
            if (!n && !!(null === (r = e.stickers) || void 0 === r ? void 0 : r.allowSending)) (0, x.RO)(ev.X1.STICKER, e);
        }, [n, e]);
    (0, en.yp)({
        event: eg.CkL.TOGGLE_EMOJI_POPOUT,
        handler: r
    }),
        (0, en.yp)({
            event: eg.CkL.TOGGLE_GIF_PICKER,
            handler: i
        }),
        (0, en.yp)({
            event: eg.CkL.TOGGLE_STICKER_PICKER,
            handler: a
        });
}
function eL(e, n, r) {
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
function ew(e) {
    let n = s.useRef(null);
    if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
    return null == e ? n : e;
}
function eP(e) {
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
function eM(e, n, r, i) {
    let a = e.getGuildId(),
        o = (0, m.e7)([U.Z], () => null != a && U.Z.isLurking(a), [a]),
        s = (0, m.e7)([q.ZP, ee.default], () => {
            var e, n;
            let r = ee.default.getCurrentUser();
            return null !== (n = null != a && null != r ? (null === (e = q.ZP.getMember(a, r.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== n && n;
        }),
        l = (0, m.cj)(
            [Q.Z],
            () => {
                var a, o;
                let l = e.isPrivate(),
                    u = Q.Z.computePermissions(e),
                    c = _.e$(u, eg.Plq.CREATE_PUBLIC_THREADS) || _.e$(u, eg.Plq.CREATE_PRIVATE_THREADS),
                    d = (!(null === (a = n.permissions) || void 0 === a ? void 0 : a.requireCreateTherads) || c) && (!(null === (o = n.permissions) || void 0 === o ? void 0 : o.requireSendMessages) || _.e$(u, eg.Plq.SEND_MESSAGES)),
                    f = d && _.e$(u, eg.Plq.ATTACH_FILES),
                    p = null != r,
                    h = (0, K.xl)(e);
                return {
                    disabled: i || s || (!l && !d) || h,
                    canAttachFiles: !0 === n.attachments && (l || s || f || p),
                    canCreateThreads: c,
                    canEveryoneSendMessages: er.Uu(eg.Plq.SEND_MESSAGES, e)
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
function ek(e, n, r) {
    let [i, a] = (0, x.Iu)((e) => [e.activeView, e.activeViewType], p.X),
        o = (0, m.e7)([S.Z], () => S.Z.shouldShowPopup() && S.Z.activeViewType() === e),
        l = (0, L.Q3)('ChannelTextAreaContainer');
    s.useEffect(
        () => () => {
            (0, x._Q)(e);
        },
        [e]
    );
    let u = s.useCallback(
            (e) => {
                n.emit('autocomplete-visibility-change', e), e && (0, x._Q)();
            },
            [n]
        ),
        c = s.useCallback(() => {
            var e;
            null == i && (!l || !o) && (null === (e = r.current) || void 0 === e || e.handleOuterClick());
        }, [i, l, o, r]),
        d = null == i || null == a || a !== e;
    return {
        expressionPickerView: i,
        shouldHideExpressionPicker: d,
        handleAutocompleteVisibilityChange: u,
        handleOuterClick: c
    };
}
function eU(e, n, r) {
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
function eB(e, n, r, i) {
    var a, o;
    let s = (0, P.pR)(),
        l = (0, m.e7)([H.Z], () => H.Z.getStickerPreview(e.id, n.drafts.type)),
        u = null != l && l.length > 0;
    return s && (null === (a = n.stickers) || void 0 === a ? void 0 : a.autoSuggest) && !u && (null === (o = i.current) || void 0 === o ? void 0 : o.isVisible()) !== !0 && !__OVERLAY__ && null != r;
}
function eG(e, n) {
    var r, i, a, l, c, d, p, _, E, S, x, P, k, U, Z, F;
    let { textValue: V, richValue: H, className: Y, innerClassName: W, editorClassName: K, id: q, required: Q, disabled: X, placeholder: $, accessibilityLabel: ee, channel: et, type: en, focused: er, renderAttachButton: ec, renderApplicationCommandIcon: ev, renderAppLauncherButton: eT, renderAppCommandButton: eS, renderLeftAccessories: eG, pendingReply: eZ, onChange: eF, onResize: eV, onBlur: ej, onFocus: eH, onKeyDown: eY, onSubmit: eW, promptToUpload: eK, highlighted: ez, canMentionRoles: eq, canMentionChannels: eQ, maxCharacterCount: eX, showRemainingCharsAfterCount: eJ, allowNewLines: e$ = !0, characterCountClassName: e0, 'aria-describedby': e1, 'aria-labelledby': e2, setEditorRef: e3, autoCompletePosition: e4, children: e6, disableThemedBackground: e5 = !1, emojiPickerCloseOnModalOuterClick: e7, parentModalKey: e8, onCommandSentinelTyped: e9 } = e;
    f()(null != en, 'chat input type must be set');
    let { analyticsLocations: te } = (0, T.ZP)(I.Z.CHANNEL_TEXT_AREA),
        tt = (0, L.R6)('ChannelTextAreaContainer'),
        tn = (0, L.Q3)('ChannelTextAreaContainer'),
        tr = ew(n),
        ti = s.useRef(null),
        ta = s.useRef(null),
        to = s.useRef(null),
        ts = s.useRef(null);
    null == e3 || e3(ta.current);
    let tl = (0, j.V1)('ChannelTextAreaContainer'),
        tu = (0, N.h9)(et.id),
        [tc, td] = s.useState(!tu);
    (0, y.P)(tr, (e) => {
        let { width: n } = e;
        return td(!tu && (null == n || n > eI));
    });
    let { activeCommand: tf, activeCommandSection: tp } = (0, m.cj)([A.Z], () => {
            var e, n;
            return {
                activeCommand: (null === (e = en.commands) || void 0 === e ? void 0 : e.enabled) ? A.Z.getActiveCommand(et.id) : null,
                activeCommandSection: (null === (n = en.commands) || void 0 === n ? void 0 : n.enabled) ? A.Z.getActiveCommandSection(et.id) : null
            };
        }),
        { isLurking: th, isPendingMember: t_, disabled: tm, canAttachFiles: tg, canCreateThreads: tE, canEveryoneSendMessages: tv } = eM(et, en, tf, X),
        ty = en.toolbarType === eo.OW.STATIC,
        tb = !z.dN.useSetting() && !(0, ei.isAndroidWeb)() && null != window.ResizeObserver,
        tI = !tb || !(null === (r = en.commands) || void 0 === r ? void 0 : r.enabled) || !er || V !== eE.GI,
        tT = (0, B.Z)(),
        { isSubmitButtonEnabled: tS, fontSize: tA } = (0, m.cj)([b.Z], () => ({
            fontSize: b.Z.fontSize,
            isSubmitButtonEnabled: b.Z.isSubmitButtonEnabled
        })),
        tC = (0, m.e7)([J.Z], () => J.Z.isEnabled()),
        tN = s.useRef(V);
    tN.current = V;
    let tR = s.useCallback(
        (e, n, r) => {
            var i;
            n === eE.GI && '' === tN.current && (null === (i = en.commands) || void 0 === i ? void 0 : i.enabled) && (null == e9 || e9()), null == eF || eF(e, n, r);
        },
        [eF, e9, null === (i = en.commands) || void 0 === i ? void 0 : i.enabled]
    );
    eD(en, tm);
    let { eventEmitter: tO, handleEditorSelectionChanged: tD } = eL(ta, V, H),
        { submitting: tL, submit: tx, handleSubmit: tw } = eA(eW, en, ta, et.id),
        { autocompleteRef: tP, handleMaybeShowAutocomplete: tM, handleHideAutocomplete: tk } = ex(),
        tU = eC(tx, en, ta),
        tB = eN(ta),
        tG = eR({
            editorRef: ta,
            disabled: tm,
            textValue: V,
            channelId: et.id,
            chatInputType: en,
            submit: eW
        }),
        tZ = eO(ta, et),
        tF = s.useCallback(() => {
            var e;
            return null == ts ? void 0 : null === (e = ts.current) || void 0 === e ? void 0 : e.hide();
        }, []),
        { editorHeight: tV, handleResize: tj } = eP(eV),
        { handleTab: tH, handleEnter: tY, handleMoveSelection: tW } = eU(tP, ti, tI),
        { expressionPickerView: tK, shouldHideExpressionPicker: tz, handleAutocompleteVisibilityChange: tq, handleOuterClick: tQ } = ek(en, tO, ta);
    (0, ea.S)(tO, et.guild_id, et.id);
    let tX = null != eZ,
        tJ = (tm && !((th || t_) && tv)) || (tL && (null === (a = en.submit) || void 0 === a ? void 0 : a.useDisabledStylesOnSubmit)),
        t$ = null;
    null != tf ? (t$ = null == ev ? void 0 : ev(tf, tp, ey.attachButton)) : (!tm || tE) && (t$ = null == ec ? void 0 : ec(tX, ey.attachButton));
    let t0 = tb && null != H && !tm && en.showCharacterCount && null == tf,
        t1 = tb && !__OVERLAY__ && null != H && null == tf && en.toolbarType !== eo.OW.NONE,
        t2 = eB(et, en, H, tP),
        t3 = (0, ed.c)({
            channel: et,
            type: en,
            activeCommand: tf,
            pendingReply: eZ
        }),
        t4 = !!(null === (l = en.emojis) || void 0 === l ? void 0 : l.button) && tV <= eb,
        t6 = 0 === V.trim().length,
        t5 = (0, ef.G)(et.id, en, t6),
        t7 = !0 === en.showSlowmodeIndicator,
        t8 = !0 === en.showTypingIndicator,
        t9 = tt && en.layout === eo.gy.INLINE,
        ne = tt && en.layout === eo.gy.FLUSH,
        nt = s.useRef(null),
        nn = s.useCallback((e) => {
            if (e.target === nt.current) {
                var n;
                null === (n = ta.current) || void 0 === n || n.focus();
            }
        }, []),
        nr = (0, o.jsx)(ef.Z, {
            type: en,
            disabled: tm,
            channel: et,
            handleSubmit: tw,
            isEmpty: t6,
            showAllButtons: tc,
            children: tn ? (null == eT ? void 0 : eT()) : null
        }),
        ni = t0
            ? (0, o.jsx)(eh.Z, {
                  type: en,
                  textValue: V,
                  className: u()(e0, { [ey.indentCharacterCount]: t4 }),
                  maxCharacterCount: eX,
                  showRemainingCharsAfterCount: eJ
              })
            : null,
        na = tt
            ? (0, o.jsxs)('div', {
                  className: ey.accessoryBar,
                  onClick: nn,
                  ref: nt,
                  children: [
                      (0, o.jsxs)('div', {
                          className: ey.accessoryBarLeft,
                          children: [
                              null == eG ? void 0 : eG(),
                              t$,
                              t8
                                  ? (0, o.jsx)(v.Z, {
                                        channel: et,
                                        poggermodeEnabled: !1
                                    })
                                  : null
                          ]
                      }),
                      (0, o.jsxs)('div', {
                          className: ey.accessoryBarRight,
                          children: [ni, nr]
                      })
                  ]
              })
            : null;
    return (0, o.jsx)(D.f6, {
        value: tO,
        children: (0, o.jsxs)(T.Gt, {
            value: te,
            children: [
                t1 && ty
                    ? (0, o.jsx)(em.Z, {
                          editorRef: ta,
                          options: en.markdown,
                          channel: et
                      })
                    : t1
                      ? (0, o.jsx)(e_.Z, {
                            ref: ts,
                            editorRef: ta,
                            containerRef: to,
                            options: en.markdown
                        })
                      : null,
                (0, o.jsxs)('div', {
                    ref: tr,
                    className: u()(Y, {
                        [ey.channelTextArea]: !0,
                        [ey.channelTextAreaDisabled]: tJ,
                        [ey.highlighted]: ez,
                        [ey.textAreaMobileThemed]: h.tq,
                        [ey.inlineContainer]: t9,
                        [ey.flushContainer]: ne
                    }),
                    children: [
                        t9 || ne ? null : (0, o.jsx)(ed.Z, { bars: t3 }),
                        (0, o.jsxs)('div', {
                            ref: to,
                            onScroll: tF,
                            className: u()(W, {
                                [ey.scrollableContainer]: !0,
                                [ey.themedBackground]: !e5,
                                [ey.hasStackedBar]: t3.stacked.length > 0
                            }),
                            children: [
                                (0, o.jsx)(eu.Z, {
                                    channelId: et.id,
                                    chatInputType: en
                                }),
                                en.hideAttachmentArea
                                    ? null
                                    : (0, o.jsx)(ep.Z, {
                                          channelId: et.id,
                                          type: en,
                                          canAttachFiles: tg
                                      }),
                                (0, o.jsxs)('div', {
                                    className: u()(ey.inner, {
                                        [ey.innerDisabled]: tJ,
                                        [ey.sansAttachButton]: en !== eo.Ie.EDIT && (null != t$ || (tJ && null == t$) || th),
                                        [ey.sansAttachButtonCreateThread]: en === eo.Ie.THREAD_CREATION,
                                        [ey.sansAttachButtonCreatePost]: en === eo.Ie.CREATE_FORUM_POST || en === eo.Ie.FORWARD_MESSAGE_INPUT,
                                        [ey.sansAttachButtonUserProfileReply]: en === eo.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tQ,
                                    children: [
                                        tt ? null : t$,
                                        (0, o.jsx)(g.FocusRing, {
                                            ringTarget: tr,
                                            ringClassName: ey.focusRing,
                                            children: (0, o.jsx)(es.Z, {
                                                ref: ta,
                                                id: q,
                                                focused: er,
                                                useSlate: tb,
                                                textValue: V,
                                                richValue: H,
                                                disabled: tm,
                                                placeholder: $,
                                                required: Q,
                                                accessibilityLabel: ee,
                                                isPreviewing: (th || t_) && tv,
                                                channel: et,
                                                type: en,
                                                canPasteFiles: tg,
                                                uploadPromptCharacterCount: eg.en1,
                                                maxCharacterCount: null != eX ? eX : tT,
                                                allowNewLines: e$,
                                                'aria-describedby': e1,
                                                onChange: tR,
                                                onResize: tj,
                                                onBlur: ej,
                                                onFocus: eH,
                                                onKeyDown: eY,
                                                onSubmit: tx,
                                                onTab: tH,
                                                onEnter: tY,
                                                onMoveSelection: tW,
                                                onSelectionChanged: tD,
                                                onMaybeShowAutocomplete: tM,
                                                onHideAutocomplete: tk,
                                                promptToUpload: eK,
                                                fontSize: tA,
                                                spellcheckEnabled: tC,
                                                canOnlyUseTextCommands: tX,
                                                className: u()(
                                                    {
                                                        [ey.textAreaThreadCreation]: en === eo.Ie.THREAD_CREATION,
                                                        [ey.profileBioInput]: en === eo.Ie.PROFILE_BIO_INPUT,
                                                        [ey.overlayInlineReply]: en === eo.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    K
                                                ),
                                                'aria-labelledby': e2
                                            })
                                        }),
                                        tt
                                            ? (0, o.jsxs)('div', {
                                                  className: ey.rightAccessories,
                                                  children: [
                                                      t7 ? (0, o.jsx)(O.Z, { channel: et }) : null,
                                                      null !== (k = null == eS ? void 0 : eS()) && void 0 !== k ? k : null,
                                                      (null === (c = en.submit) || void 0 === c ? void 0 : c.button) != null && ((null === (d = en.submit) || void 0 === d ? void 0 : d.ignorePreference) || tS)
                                                          ? (0, o.jsx)(el.Z, {
                                                                onClick: tw,
                                                                disabled: tm || t5
                                                            })
                                                          : null
                                                  ]
                                              })
                                            : nr
                                    ]
                                })
                            ]
                        }),
                        tt && !en.hideAccessoryBar ? na : null,
                        tI
                            ? null
                            : (0, o.jsx)(C.Z, {
                                  ref: ti,
                                  channel: et,
                                  canOnlyUseTextCommands: tX
                              }),
                        (0, o.jsx)(R.Z, {
                            ref: tP,
                            channel: et,
                            canMentionRoles: eq,
                            canMentionChannels: eQ,
                            useNewSlashCommands: tb,
                            canOnlyUseTextCommands: tX,
                            canSendStickers: null === (p = en.stickers) || void 0 === p ? void 0 : p.allowSending,
                            canSendSoundmoji: null === (_ = en.soundmoji) || void 0 === _ ? void 0 : _.allowSending,
                            textValue: V,
                            focused: er,
                            expressionPickerView: tK,
                            type: en,
                            targetRef: tr,
                            editorRef: ta,
                            onSendMessage: tx,
                            onSendSticker: tG,
                            onVisibilityChange: tq,
                            editorHeight: tV,
                            setValue: (e, n) => (null == tR ? void 0 : tR(null, e, n)),
                            position: e4
                        }),
                        (0, o.jsx)(G.Z, {
                            textValue: V,
                            editorHeight: tV,
                            channelId: et.id
                        }),
                        tt ? null : ni,
                        t2
                            ? (0, o.jsx)(M.Z, {
                                  editorRef: ta,
                                  channel: et,
                                  isEditorFocused: er,
                                  onSelectSticker: tG,
                                  submitButtonVisible: (null === (E = en.submit) || void 0 === E ? void 0 : E.button) && (null !== (U = null === (S = en.submit) || void 0 === S ? void 0 : S.ignorePreference) && void 0 !== U ? U : tS),
                                  stickerIconVisible: null !== (Z = null === (x = en.stickers) || void 0 === x ? void 0 : x.button) && void 0 !== Z && Z && !(tl && null !== (F = null === (P = en.confetti) || void 0 === P ? void 0 : P.button) && void 0 !== F && F)
                              })
                            : null,
                        e6
                    ]
                }),
                tz
                    ? null
                    : (0, o.jsx)(w.Z, {
                          positionTargetRef: tr,
                          type: en,
                          onSelectGIF: tU,
                          onSelectEmoji: tB,
                          onSelectSticker: tG,
                          onSelectSound: tZ,
                          channel: et,
                          closeOnModalOuterClick: e7,
                          parentModalKey: e8,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: ey.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
n.Z = s.memo(s.forwardRef(eG));
