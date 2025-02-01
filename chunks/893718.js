n.d(t, { Z: () => eG }), n(47120), n(411104);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(836560),
    l = n(512722),
    u = n.n(l),
    c = n(232713),
    d = n(873546),
    f = n(149765),
    _ = n(442837),
    p = n(481060),
    h = n(430742),
    m = n(738619),
    g = n(393238),
    E = n(607070),
    v = n(100527),
    y = n(906732),
    I = n(541099),
    T = n(998698),
    b = n(271668),
    S = n(404295),
    A = n(326133),
    N = n(405701),
    C = n(570220),
    R = n(540059),
    O = n(28546),
    D = n(805680),
    x = n(278754),
    L = n(151574),
    P = n(368844),
    w = n(41776),
    M = n(849522),
    k = n(780291),
    U = n(823961),
    G = n(328908),
    B = n(135793),
    Z = n(576645),
    F = n(317951),
    V = n(111810),
    j = n(913663),
    H = n(268350),
    Y = n(378233),
    W = n(665906),
    K = n(695346),
    z = n(271383),
    q = n(496675),
    Q = n(944486),
    X = n(398327),
    J = n(117530),
    $ = n(594174),
    ee = n(626135),
    et = n(459273),
    en = n(700785),
    ei = n(358085),
    er = n(746877),
    ea = n(541716),
    es = n(667829),
    eo = n(319417),
    el = n(562267),
    eu = n(376918),
    ec = n(760196),
    ed = n(258696),
    ef = n(303628),
    e_ = n(472243),
    ep = n(872635),
    eh = n(676108),
    em = n(981631),
    eg = n(665692),
    eE = n(957825),
    ev = n(553796);
let ey = 450;
function eI(e) {
    return e !== Q.Z.getChannelId();
}
function eT(e, t) {
    var n, i;
    return null !== (i = e && (null === (n = t.submit) || void 0 === n ? void 0 : n.clearOnSubmit)) && void 0 !== i && i;
}
function eb(e, t, a, s) {
    let [o, l] = r.useState(!1),
        u = (0, _.e7)([U.Z], () => U.Z.fetchPotionCount(F.D1)),
        c = r.useCallback(
            (r, d, f, _, m, g) => {
                var E, v, y;
                if (o) return;
                l(!0);
                let I = null !== (v = null === (E = j.Z.getStickerPreview(s, t.drafts.type)) || void 0 === E ? void 0 : E.map((e) => e.id)) && void 0 !== v ? v : [],
                    T = null !== (y = J.Z.getUploads(s, t.drafts.type)) && void 0 !== y ? y : [],
                    b = (0, G.q5)(s);
                if (null == d && !_ && !m && (0, P.CB)(T, s)) {
                    l(!1),
                        (0, p.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('90508'), n.e('18895'), n.e('27173')]).then(n.bind(n, 273602));
                            return (t) =>
                                (0, i.jsx)(e, {
                                    ...t,
                                    threadId: s,
                                    attachments: T,
                                    sendMessage: () => c(r, void 0, void 0, void 0, !0)
                                });
                        });
                    return;
                }
                let S = (0, Z.tv)(r, _, d, T),
                    A = (0, G.b7)(s, g, u);
                if (S && A) {
                    l(!1),
                        (0, B.s)({
                            channelId: s,
                            onRedeem: () => c(r, d, f, _, m, !0)
                        });
                    return;
                }
                e({
                    value: r,
                    uploads: T,
                    stickers: I,
                    confettiPotionEmoji: b,
                    command: d,
                    commandOptionValues: f,
                    isGif: _
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: i } = e,
                        r = eT(n, t),
                        o = null != a.current;
                    r && (eI(s) ? h.Z.saveDraft(s, '', t.drafts.type) : o && a.current.clearValue()), o && (l(!1), (0, O._Q)(), i && a.current.focus());
                });
            },
            [a, e, o, t, s, u]
        );
    return {
        submitting: o,
        submit: c,
        handleSubmit: r.useCallback(
            (e) => {
                var t;
                null == a || null === (t = a.current) || void 0 === t || t.submit(e);
            },
            [a]
        )
    };
}
function eS(e, t, n) {
    return r.useCallback(
        (i) => {
            var r, a;
            t === ea.Ie.CREATE_FORUM_POST ? null === (a = n.current) || void 0 === a || a.insertGIF(i) : e(i.url, void 0, void 0, !0), (0, O._Q)(), null === (r = n.current) || void 0 === r || r.focus();
        },
        [n, e, t]
    );
}
function eA(e) {
    return r.useCallback(
        function (t, n) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = e.current;
            null != t && null != r && r.insertEmoji(t, n, i), n && (0, O._Q)();
        },
        [e]
    );
}
function eN(e) {
    let { editorRef: t, disabled: n, textValue: i, channelId: a, chatInputType: s, submit: o } = e,
        { analyticsLocations: l } = (0, y.ZP)();
    return r.useCallback(
        (e, r) => {
            var u, c;
            n ||
                ((0, Y.Hc)(r, i, a, s.drafts.type)
                    ? ((0, eu._H)({
                          sticker: e,
                          stickerSelectLocation: r,
                          isReplacement: null != j.Z.getStickerPreview(a, s.drafts.type),
                          analyticsLocations: l
                      }),
                      (0, H.eu)(a, e, s.drafts.type))
                    : (o({
                          value: '',
                          uploads: void 0,
                          stickers: [e.id]
                      }),
                      null === (c = t.current) || void 0 === c || c.clearValue()),
                (0, O._Q)(),
                null === (u = t.current) || void 0 === u || u.focus());
        },
        [n, i, a, s.drafts.type, t, l, o]
    );
}
function eC(e, t) {
    return r.useCallback(
        (n, i, r) => {
            let a = e.current;
            null != n &&
                null != a &&
                (ee.default.track(em.rMx.SOUNDMOJI_SELECT, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    sound_guild_id: n.guildId,
                    sound_id: n.soundId,
                    source: i
                }),
                a.insertSound(n)),
                r && (0, O._Q)(),
                null == a || a.focus();
        },
        [e, t.id, t.guild_id]
    );
}
function eR(e, t) {
    let n = r.useCallback(() => {
            !t && (0, O.RO)(eE.X1.EMOJI, e);
        }, [t, e]),
        i = r.useCallback(() => {
            var n;
            !t && (null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending) && (0, O.RO)(eE.X1.GIF, e);
        }, [t, e]),
        a = r.useCallback(() => {
            var n;
            !t && (null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending) && (0, O.RO)(eE.X1.STICKER, e);
        }, [t, e]);
    (0, et.yp)({
        event: em.CkL.TOGGLE_EMOJI_POPOUT,
        handler: n
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
function eO(e, t, n) {
    let [i] = r.useState(() => new o.EventEmitter());
    r.useEffect(() => {
        i.emit('text-changed', t, n);
    }, [t, n, i]);
    let a = (t) => {
        null != e.current && i.emit('selection-changed', t);
    };
    return {
        eventEmitter: i,
        handleEditorSelectionChanged: a
    };
}
function eD() {
    let e = r.useRef(null),
        t = r.useCallback(() => {
            var t;
            null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete();
        }, []),
        n = r.useCallback(() => {
            var t;
            null === (t = e.current) || void 0 === t || t.onHideAutocomplete();
        }, []);
    return {
        autocompleteRef: e,
        handleMaybeShowAutocomplete: t,
        handleHideAutocomplete: n
    };
}
function ex(e) {
    let t = r.useRef(null);
    if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
    return null == e ? t : e;
}
function eL(e) {
    let [t, n] = r.useState(0);
    return {
        editorHeight: t,
        handleResize: r.useCallback(
            (t) => {
                n(null != t ? t : 0), null == e || e(t);
            },
            [e]
        )
    };
}
function eP(e, t, n, i) {
    let r = e.getGuildId(),
        a = (0, _.e7)([w.Z], () => null != r && w.Z.isLurking(r), [r]),
        s = (0, _.e7)([z.ZP, $.default], () => {
            var e, t;
            let n = $.default.getCurrentUser();
            return null !== (t = null != r && null != n ? (null === (e = z.ZP.getMember(r, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        o = (0, _.cj)(
            [q.Z],
            () => {
                var r, a;
                let o = e.isPrivate(),
                    l = q.Z.computePermissions(e),
                    u = f.e$(l, em.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, em.Plq.CREATE_PRIVATE_THREADS),
                    c = (!(null === (r = t.permissions) || void 0 === r ? void 0 : r.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || f.e$(l, em.Plq.SEND_MESSAGES)),
                    d = c && f.e$(l, em.Plq.ATTACH_FILES),
                    _ = null != n,
                    p = (0, W.xl)(e);
                return {
                    disabled: i || s || (!o && !c) || p,
                    canAttachFiles: !0 === t.attachments && (o || s || d || _),
                    canCreateThreads: u,
                    canEveryoneSendMessages: en.Uu(em.Plq.SEND_MESSAGES, e)
                };
            },
            [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, i, s]
        );
    return {
        isLurking: a,
        isPendingMember: s,
        ...o
    };
}
function ew(e, t, n) {
    let [i, a] = (0, O.Iu)((e) => [e.activeView, e.activeViewType], c.X),
        s = (0, _.e7)([I.Z], () => I.Z.shouldShowPopup() && I.Z.activeViewType() === e),
        o = (0, R.Q3)('ChannelTextAreaContainer');
    r.useEffect(
        () => () => {
            (0, O._Q)(e);
        },
        [e]
    );
    let l = r.useCallback(
            (e) => {
                t.emit('autocomplete-visibility-change', e), e && (0, O._Q)();
            },
            [t]
        ),
        u = r.useCallback(() => {
            var e;
            null != i || (o && s) || null === (e = n.current) || void 0 === e || e.handleOuterClick();
        }, [i, o, s, n]),
        d = null == i || null == a || a !== e;
    return {
        expressionPickerView: i,
        shouldHideExpressionPicker: d,
        handleAutocompleteVisibilityChange: l,
        handleOuterClick: u
    };
}
function eM(e, t, n) {
    let i = r.useCallback(() => {
        var i, r;
        return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1))) || (null === (r = e.current) || void 0 === r ? void 0 : r.onTabOrEnter(!1)) || !1;
    }, [n, t, e]);
    return {
        handleTab: i,
        handleEnter: r.useCallback(() => {
            var i, r;
            return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0))) || (null === (r = e.current) || void 0 === r ? void 0 : r.onTabOrEnter(!0)) || !1;
        }, [n, t, e]),
        handleMoveSelection: r.useCallback(
            (i) => {
                var r, a;
                return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onMoveSelection(i))) || (null === (a = e.current) || void 0 === a ? void 0 : a.onMoveSelection(i)) || !1;
            },
            [n, t, e]
        )
    };
}
function ek(e, t, n, i) {
    var r, a;
    let s = (0, x.pR)(),
        o = (0, _.e7)([j.Z], () => j.Z.getStickerPreview(e.id, t.drafts.type)),
        l = null != o && o.length > 0;
    return s && (null === (r = t.stickers) || void 0 === r ? void 0 : r.autoSuggest) && !l && (null === (a = i.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n;
}
function eU(e, t) {
    var n, a, o, l, c, f, h, I, O, x, P, w, U, G, B;
    let { textValue: Z, richValue: F, className: j, innerClassName: H, editorClassName: Y, id: W, required: z, disabled: q, placeholder: Q, accessibilityLabel: J, channel: $, type: ee, focused: et, renderAttachButton: en, renderApplicationCommandIcon: eu, renderAppLauncherButton: eE, renderAppCommandButton: eI, renderLeftAccessories: eT, pendingReply: eU, onChange: eG, onResize: eB, onBlur: eZ, onFocus: eF, onKeyDown: eV, onSubmit: ej, promptToUpload: eH, highlighted: eY, canMentionRoles: eW, canMentionChannels: eK, maxCharacterCount: ez, showRemainingCharsAfterCount: eq, allowNewLines: eQ = !0, characterCountClassName: eX, 'aria-describedby': eJ, 'aria-labelledby': e$, setEditorRef: e0, autoCompletePosition: e1, children: e2, disableThemedBackground: e3 = !1, emojiPickerCloseOnModalOuterClick: e4, parentModalKey: e6, onCommandSentinelTyped: e5, pendingScheduledMessage: e7 } = e;
    u()(null != ee, 'chat input type must be set');
    let { analyticsLocations: e8 } = (0, y.ZP)(v.Z.CHANNEL_TEXT_AREA),
        e9 = (0, R.R6)('ChannelTextAreaContainer'),
        te = (0, R.Q3)('ChannelTextAreaContainer'),
        tt = ex(t),
        tn = r.useRef(null),
        ti = r.useRef(null),
        tr = r.useRef(null),
        ta = r.useRef(null);
    null == e0 || e0(ti.current);
    let ts = (0, V.V1)('ChannelTextAreaContainer'),
        to = (0, S.h9)($.id),
        [tl, tu] = r.useState(!to);
    (0, g.P)(tt, (e) => {
        let { width: t } = e;
        return tu(!to && (null == t || t > ey));
    });
    let { activeCommand: tc, activeCommandSection: td } = (0, _.cj)([T.Z], () => {
            var e, t;
            return {
                activeCommand: (null === (e = ee.commands) || void 0 === e ? void 0 : e.enabled) ? T.Z.getActiveCommand($.id) : null,
                activeCommandSection: (null === (t = ee.commands) || void 0 === t ? void 0 : t.enabled) ? T.Z.getActiveCommandSection($.id) : null
            };
        }),
        { isLurking: tf, isPendingMember: t_, disabled: tp, canAttachFiles: th, canCreateThreads: tm, canEveryoneSendMessages: tg } = eP($, ee, tc, q),
        tE = ee.toolbarType === ea.OW.STATIC,
        tv = !K.dN.useSetting() && !(0, ei.isAndroidWeb)() && null != window.ResizeObserver,
        ty = !tv || !(null === (n = ee.commands) || void 0 === n ? void 0 : n.enabled) || !et || Z !== eg.GI,
        tI = (0, M.Z)(),
        { isSubmitButtonEnabled: tT, fontSize: tb } = (0, _.cj)([E.Z], () => ({
            fontSize: E.Z.fontSize,
            isSubmitButtonEnabled: E.Z.isSubmitButtonEnabled
        })),
        tS = (0, _.e7)([X.Z], () => X.Z.isEnabled()),
        tA = r.useRef(Z);
    tA.current = Z;
    let tN = r.useCallback(
        (e, t, n) => {
            var i;
            t === eg.GI && '' === tA.current && (null === (i = ee.commands) || void 0 === i ? void 0 : i.enabled) && (null == e5 || e5()), null == eG || eG(e, t, n);
        },
        [eG, e5, null === (a = ee.commands) || void 0 === a ? void 0 : a.enabled]
    );
    eR(ee, tp);
    let { eventEmitter: tC, handleEditorSelectionChanged: tR } = eO(ti, Z, F),
        { submitting: tO, submit: tD, handleSubmit: tx } = eb(ej, ee, ti, $.id),
        { autocompleteRef: tL, handleMaybeShowAutocomplete: tP, handleHideAutocomplete: tw } = eD(),
        tM = eS(tD, ee, ti),
        tk = eA(ti),
        tU = eN({
            editorRef: ti,
            disabled: tp,
            textValue: Z,
            channelId: $.id,
            chatInputType: ee,
            submit: ej
        }),
        tG = eC(ti, $),
        tB = r.useCallback(() => {
            var e;
            return null == ta ? void 0 : null === (e = ta.current) || void 0 === e ? void 0 : e.hide();
        }, []),
        { editorHeight: tZ, handleResize: tF } = eL(eB),
        { handleTab: tV, handleEnter: tj, handleMoveSelection: tH } = eM(tL, tn, ty),
        { expressionPickerView: tY, shouldHideExpressionPicker: tW, handleAutocompleteVisibilityChange: tK, handleOuterClick: tz } = ew(ee, tC, ti);
    (0, er.S)(tC, $.guild_id, $.id);
    let tq = null != eU,
        tQ = (tp && !((tf || t_) && tg)) || (tO && (null === (o = ee.submit) || void 0 === o ? void 0 : o.useDisabledStylesOnSubmit)),
        tX = null;
    null != tc ? (tX = null == eu ? void 0 : eu(tc, td, ev.attachButton)) : (!tp || tm) && (tX = null == en ? void 0 : en(tq, ev.attachButton));
    let tJ = tv && null != F && !tp && ee.showCharacterCount && null == tc,
        t$ = tv && !__OVERLAY__ && null != F && null == tc && ee.toolbarType !== ea.OW.NONE,
        t0 = ek($, ee, F, tL),
        t1 = (0, ec.c)({
            channel: $,
            type: ee,
            activeCommand: tc,
            pendingReply: eU,
            pendingScheduledMessage: e7
        }),
        t2 = 0 === Z.trim().length,
        t3 = (0, ed.G)($.id, ee, t2),
        t4 = !0 === ee.showSlowmodeIndicator,
        t6 = !0 === ee.showTypingIndicator,
        t5 = te && ee.layout === ea.gy.INLINE,
        t7 = te && ee.layout === ea.gy.FLUSH,
        t8 = r.useRef(null),
        t9 = r.useCallback((e) => {
            if (e.target === t8.current) {
                var t;
                null === (t = ti.current) || void 0 === t || t.focus();
            }
        }, []),
        ne = (0, i.jsx)(ed.Z, {
            type: ee,
            disabled: tp,
            channel: $,
            handleSubmit: tx,
            isEmpty: t2,
            showAllButtons: tl,
            children: te ? (null == eE ? void 0 : eE()) : null
        }),
        nt = tJ
            ? (0, i.jsx)(e_.Z, {
                  type: ee,
                  textValue: Z,
                  className: eX,
                  maxCharacterCount: ez,
                  showRemainingCharsAfterCount: eq
              })
            : null,
        nn = e9
            ? tp
                ? null
                : (0, i.jsxs)('div', {
                      className: ev.accessoryBar,
                      onClick: t9,
                      ref: t8,
                      children: [
                          (0, i.jsxs)('div', {
                              className: ev.accessoryBarLeft,
                              children: [
                                  null == eT ? void 0 : eT(),
                                  tX,
                                  t6
                                      ? (0, i.jsx)(m.Z, {
                                            channel: $,
                                            poggermodeEnabled: !1
                                        })
                                      : null
                              ]
                          }),
                          (0, i.jsxs)('div', {
                              className: ev.accessoryBarRight,
                              children: [nt, ne]
                          })
                      ]
                  })
            : null;
    return (0, i.jsx)(C.f6, {
        value: tC,
        children: (0, i.jsxs)(y.Gt, {
            value: e8,
            children: [
                t$ && tE
                    ? (0, i.jsx)(eh.Z, {
                          editorRef: ti,
                          options: ee.markdown,
                          channel: $
                      })
                    : t$
                      ? (0, i.jsx)(ep.Z, {
                            ref: ta,
                            editorRef: ti,
                            containerRef: tr,
                            options: ee.markdown
                        })
                      : null,
                (0, i.jsxs)('div', {
                    ref: tt,
                    className: s()(j, {
                        [ev.channelTextArea]: !0,
                        [ev.channelTextAreaDisabled]: tQ,
                        [ev.highlighted]: eY,
                        [ev.textAreaMobileThemed]: d.tq,
                        [ev.inlineContainer]: t5,
                        [ev.flushContainer]: t7
                    }),
                    children: [
                        t5 || t7 ? null : (0, i.jsx)(ec.Z, { bars: t1 }),
                        (0, i.jsxs)('div', {
                            ref: tr,
                            onScroll: tB,
                            className: s()(H, {
                                [ev.scrollableContainer]: !0,
                                [ev.themedBackground]: !e3,
                                [ev.hasStackedBar]: t1.stacked.length > 0
                            }),
                            children: [
                                (0, i.jsx)(el.Z, {
                                    channelId: $.id,
                                    chatInputType: ee
                                }),
                                ee.hideAttachmentArea
                                    ? null
                                    : (0, i.jsx)(ef.Z, {
                                          channelId: $.id,
                                          type: ee,
                                          canAttachFiles: th
                                      }),
                                (0, i.jsxs)('div', {
                                    className: s()(ev.inner, {
                                        [ev.innerDisabled]: tQ,
                                        [ev.sansAttachButton]: ee !== ea.Ie.EDIT && (null != tX || (tQ && null == tX) || tf),
                                        [ev.sansAttachButtonCreateThread]: ee === ea.Ie.THREAD_CREATION,
                                        [ev.sansAttachButtonCreatePost]: ee === ea.Ie.CREATE_FORUM_POST || ee === ea.Ie.FORWARD_MESSAGE_INPUT,
                                        [ev.sansAttachButtonUserProfileReply]: ee === ea.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tz,
                                    children: [
                                        e9 ? null : tX,
                                        (0, i.jsx)(p.tEY, {
                                            ringTarget: tt,
                                            ringClassName: ev.focusRing,
                                            children: (0, i.jsx)(es.Z, {
                                                ref: ti,
                                                id: W,
                                                focused: et,
                                                useSlate: tv,
                                                textValue: Z,
                                                richValue: F,
                                                disabled: tp,
                                                placeholder: Q,
                                                required: z,
                                                accessibilityLabel: J,
                                                isPreviewing: (tf || t_) && tg,
                                                channel: $,
                                                type: ee,
                                                canPasteFiles: th,
                                                uploadPromptCharacterCount: em.en1,
                                                maxCharacterCount: null != ez ? ez : tI,
                                                allowNewLines: eQ,
                                                'aria-describedby': eJ,
                                                onChange: tN,
                                                onResize: tF,
                                                onBlur: eZ,
                                                onFocus: eF,
                                                onKeyDown: eV,
                                                onSubmit: tD,
                                                onTab: tV,
                                                onEnter: tj,
                                                onMoveSelection: tH,
                                                onSelectionChanged: tR,
                                                onMaybeShowAutocomplete: tP,
                                                onHideAutocomplete: tw,
                                                promptToUpload: eH,
                                                fontSize: tb,
                                                spellcheckEnabled: tS,
                                                canOnlyUseTextCommands: tq,
                                                className: s()(
                                                    {
                                                        [ev.textAreaThreadCreation]: ee === ea.Ie.THREAD_CREATION,
                                                        [ev.profileBioInput]: ee === ea.Ie.PROFILE_BIO_INPUT,
                                                        [ev.overlayInlineReply]: ee === ea.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    Y
                                                ),
                                                'aria-labelledby': e$
                                            })
                                        }),
                                        e9
                                            ? (0, i.jsxs)('div', {
                                                  className: ev.rightAccessories,
                                                  children: [
                                                      t4 ? (0, i.jsx)(N.Z, { channel: $ }) : null,
                                                      null !== (w = null == eI ? void 0 : eI()) && void 0 !== w ? w : null,
                                                      (null === (l = ee.submit) || void 0 === l ? void 0 : l.button) != null && ((null === (c = ee.submit) || void 0 === c ? void 0 : c.ignorePreference) || tT)
                                                          ? (0, i.jsx)(eo.Z, {
                                                                onClick: tx,
                                                                disabled: tp || t3
                                                            })
                                                          : null
                                                  ]
                                              })
                                            : ne
                                    ]
                                })
                            ]
                        }),
                        e9 && !ee.hideAccessoryBar ? nn : null,
                        ty
                            ? null
                            : (0, i.jsx)(b.Z, {
                                  ref: tn,
                                  channel: $,
                                  canOnlyUseTextCommands: tq
                              }),
                        (0, i.jsx)(A.Z, {
                            ref: tL,
                            channel: $,
                            canMentionRoles: eW,
                            canMentionChannels: eK,
                            useNewSlashCommands: tv,
                            canOnlyUseTextCommands: tq,
                            canSendStickers: null === (f = ee.stickers) || void 0 === f ? void 0 : f.allowSending,
                            canSendSoundmoji: null === (h = ee.soundmoji) || void 0 === h ? void 0 : h.allowSending,
                            textValue: Z,
                            focused: et,
                            expressionPickerView: tY,
                            type: ee,
                            targetRef: tt,
                            editorRef: ti,
                            onSendMessage: tD,
                            onSendSticker: tU,
                            onVisibilityChange: tK,
                            editorHeight: tZ,
                            setValue: (e, t) => (null == tN ? void 0 : tN(null, e, t)),
                            position: e1
                        }),
                        (0, i.jsx)(k.Z, {
                            textValue: Z,
                            editorHeight: tZ,
                            channelId: $.id
                        }),
                        e9 ? null : nt,
                        t0
                            ? (0, i.jsx)(L.Z, {
                                  editorRef: ti,
                                  channel: $,
                                  isEditorFocused: et,
                                  onSelectSticker: tU,
                                  submitButtonVisible: (null === (I = ee.submit) || void 0 === I ? void 0 : I.button) && (null !== (U = null === (O = ee.submit) || void 0 === O ? void 0 : O.ignorePreference) && void 0 !== U ? U : tT),
                                  stickerIconVisible: null !== (G = null === (x = ee.stickers) || void 0 === x ? void 0 : x.button) && void 0 !== G && G && !(ts && null !== (B = null === (P = ee.confetti) || void 0 === P ? void 0 : P.button) && void 0 !== B && B)
                              })
                            : null,
                        e2
                    ]
                }),
                tW
                    ? null
                    : (0, i.jsx)(D.Z, {
                          positionTargetRef: tt,
                          type: ee,
                          onSelectGIF: tM,
                          onSelectEmoji: tk,
                          onSelectSticker: tU,
                          onSelectSound: tG,
                          channel: $,
                          closeOnModalOuterClick: e4,
                          parentModalKey: e6,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: ev.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
let eG = r.memo(r.forwardRef(eU));
