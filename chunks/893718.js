n.d(t, { Z: () => eB }), n(47120), n(411104);
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
    L = n(278754),
    x = n(151574),
    P = n(368844),
    w = n(41776),
    M = n(849522),
    k = n(780291),
    U = n(823961),
    G = n(328908),
    B = n(992970),
    Z = n(135793),
    F = n(576645),
    V = n(317951),
    j = n(111810),
    H = n(913663),
    Y = n(268350),
    W = n(378233),
    K = n(665906),
    z = n(695346),
    q = n(271383),
    Q = n(496675),
    X = n(944486),
    J = n(398327),
    $ = n(117530),
    ee = n(594174),
    et = n(626135),
    en = n(459273),
    ei = n(700785),
    er = n(358085),
    ea = n(746877),
    es = n(541716),
    eo = n(667829),
    el = n(319417),
    eu = n(562267),
    ec = n(376918),
    ed = n(760196),
    ef = n(258696),
    e_ = n(303628),
    ep = n(472243),
    eh = n(872635),
    em = n(676108),
    eg = n(981631),
    eE = n(665692),
    ev = n(957825),
    ey = n(513632);
let eI = 450;
function eT(e) {
    return e !== X.Z.getChannelId();
}
function eb(e, t) {
    var n, i;
    return null !== (i = e && (null === (n = t.submit) || void 0 === n ? void 0 : n.clearOnSubmit)) && void 0 !== i && i;
}
function eS(e, t, a, s) {
    let [o, l] = r.useState(!1),
        u = (0, _.e7)([U.Z], () => U.Z.fetchPotionCount(V.D1)),
        c = r.useCallback(
            (r, d, f, _, m, g) => {
                var E, v, y;
                if (o) return;
                l(!0);
                let I = null !== (v = null === (E = H.Z.getStickerPreview(s, t.drafts.type)) || void 0 === E ? void 0 : E.map((e) => e.id)) && void 0 !== v ? v : [],
                    T = null !== (y = $.Z.getUploads(s, t.drafts.type)) && void 0 !== y ? y : [],
                    b = (0, G.q5)(s);
                if (null == d && !_ && !m && (0, P.CB)(T, s)) {
                    l(!1),
                        (0, p.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('25292'), n.e('90508'), n.e('95477'), n.e('28467'), n.e('22173'), n.e('43641')]).then(n.bind(n, 273602));
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
                let S = (0, F.tv)(r, _, d, T),
                    A = (0, G.b7)(s, g, u);
                if (S && A) {
                    l(!1),
                        (0, Z.s)({
                            channelId: s,
                            onRedeem: () => c(r, d, f, _, m, !0),
                            source: B.YD.MessageSubmit
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
                        r = eb(n, t),
                        o = null != a.current;
                    r && (eT(s) ? h.Z.saveDraft(s, '', t.drafts.type) : o && a.current.clearValue()), o && (l(!1), (0, O._Q)(), i && a.current.focus());
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
function eA(e, t, n) {
    return r.useCallback(
        (i) => {
            var r, a;
            t === es.Ie.CREATE_FORUM_POST ? null === (a = n.current) || void 0 === a || a.insertGIF(i) : e(i.url, void 0, void 0, !0), (0, O._Q)(), null === (r = n.current) || void 0 === r || r.focus();
        },
        [n, e, t]
    );
}
function eN(e) {
    return r.useCallback(
        function (t, n) {
            let i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                r = e.current;
            null != t && null != r && r.insertEmoji(t, n, i), n && (0, O._Q)();
        },
        [e]
    );
}
function eC(e) {
    let { editorRef: t, disabled: n, textValue: i, channelId: a, chatInputType: s, submit: o } = e,
        { analyticsLocations: l } = (0, y.ZP)();
    return r.useCallback(
        (e, r) => {
            var u, c;
            n ||
                ((0, W.Hc)(r, i, a, s.drafts.type)
                    ? ((0, ec._H)({
                          sticker: e,
                          stickerSelectLocation: r,
                          isReplacement: null != H.Z.getStickerPreview(a, s.drafts.type),
                          analyticsLocations: l
                      }),
                      (0, Y.eu)(a, e, s.drafts.type))
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
function eR(e, t) {
    return r.useCallback(
        (n, i, r) => {
            let a = e.current;
            null != n &&
                null != a &&
                (et.default.track(eg.rMx.SOUNDMOJI_SELECT, {
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
function eO(e, t) {
    let n = r.useCallback(() => {
            !t && (0, O.RO)(ev.X1.EMOJI, e);
        }, [t, e]),
        i = r.useCallback(() => {
            var n;
            !t && (null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending) && (0, O.RO)(ev.X1.GIF, e);
        }, [t, e]),
        a = r.useCallback(() => {
            var n;
            !t && (null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending) && (0, O.RO)(ev.X1.STICKER, e);
        }, [t, e]);
    (0, en.yp)({
        event: eg.CkL.TOGGLE_EMOJI_POPOUT,
        handler: n
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
function eD(e, t, n) {
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
function eL() {
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
function eP(e) {
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
function ew(e, t, n, i) {
    let r = e.getGuildId(),
        a = (0, _.e7)([w.Z], () => null != r && w.Z.isLurking(r), [r]),
        s = (0, _.e7)([q.ZP, ee.default], () => {
            var e, t;
            let n = ee.default.getCurrentUser();
            return null !== (t = null != r && null != n ? (null === (e = q.ZP.getMember(r, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        o = (0, _.cj)(
            [Q.Z],
            () => {
                var r, a;
                let o = e.isPrivate(),
                    l = Q.Z.computePermissions(e),
                    u = f.e$(l, eg.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, eg.Plq.CREATE_PRIVATE_THREADS),
                    c = (!(null === (r = t.permissions) || void 0 === r ? void 0 : r.requireCreateTherads) || u) && (!(null === (a = t.permissions) || void 0 === a ? void 0 : a.requireSendMessages) || f.e$(l, eg.Plq.SEND_MESSAGES)),
                    d = c && f.e$(l, eg.Plq.ATTACH_FILES),
                    _ = null != n,
                    p = (0, K.xl)(e);
                return {
                    disabled: i || s || (!o && !c) || p,
                    canAttachFiles: !0 === t.attachments && (o || s || d || _),
                    canCreateThreads: u,
                    canEveryoneSendMessages: ei.Uu(eg.Plq.SEND_MESSAGES, e)
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
function eM(e, t, n) {
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
function ek(e, t, n) {
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
function eU(e, t, n, i) {
    var r, a;
    let s = (0, L.pR)(),
        o = (0, _.e7)([H.Z], () => H.Z.getStickerPreview(e.id, t.drafts.type)),
        l = null != o && o.length > 0;
    return s && (null === (r = t.stickers) || void 0 === r ? void 0 : r.autoSuggest) && !l && (null === (a = i.current) || void 0 === a ? void 0 : a.isVisible()) !== !0 && !__OVERLAY__ && null != n;
}
function eG(e, t) {
    var n, a, o, l, c, f, h, I, O, L, P, w, U, G, B;
    let { textValue: Z, richValue: F, className: V, innerClassName: H, editorClassName: Y, id: W, required: K, disabled: q, placeholder: Q, accessibilityLabel: X, channel: $, type: ee, focused: et, renderAttachButton: en, renderApplicationCommandIcon: ei, renderAppLauncherButton: ec, renderAppCommandButton: ev, renderLeftAccessories: eT, pendingReply: eb, onChange: eG, onResize: eB, onBlur: eZ, onFocus: eF, onKeyDown: eV, onSubmit: ej, promptToUpload: eH, highlighted: eY, canMentionRoles: eW, canMentionChannels: eK, maxCharacterCount: ez, showRemainingCharsAfterCount: eq, allowNewLines: eQ = !0, characterCountClassName: eX, 'aria-describedby': eJ, 'aria-labelledby': e$, setEditorRef: e0, autoCompletePosition: e1, children: e2, disableThemedBackground: e3 = !1, emojiPickerCloseOnModalOuterClick: e4, parentModalKey: e6, onCommandSentinelTyped: e5, pendingScheduledMessage: e7 } = e;
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
    let ts = (0, j.V1)('ChannelTextAreaContainer'),
        to = (0, S.h9)($.id),
        [tl, tu] = r.useState(!to);
    (0, g.P)(tt, (e) => {
        let { width: t } = e;
        return tu(!to && (null == t || t > eI));
    });
    let { activeCommand: tc, activeCommandSection: td } = (0, _.cj)([T.Z], () => {
            var e, t;
            return {
                activeCommand: (null === (e = ee.commands) || void 0 === e ? void 0 : e.enabled) ? T.Z.getActiveCommand($.id) : null,
                activeCommandSection: (null === (t = ee.commands) || void 0 === t ? void 0 : t.enabled) ? T.Z.getActiveCommandSection($.id) : null
            };
        }),
        { isLurking: tf, isPendingMember: t_, disabled: tp, canAttachFiles: th, canCreateThreads: tm, canEveryoneSendMessages: tg } = ew($, ee, tc, q),
        tE = ee.toolbarType === es.OW.STATIC,
        tv = !z.dN.useSetting() && !(0, er.isAndroidWeb)() && null != window.ResizeObserver,
        ty = !tv || !(null === (n = ee.commands) || void 0 === n ? void 0 : n.enabled) || !et || Z !== eE.GI,
        tI = (0, M.Z)(),
        { isSubmitButtonEnabled: tT, fontSize: tb } = (0, _.cj)([E.Z], () => ({
            fontSize: E.Z.fontSize,
            isSubmitButtonEnabled: E.Z.isSubmitButtonEnabled
        })),
        tS = (0, _.e7)([J.Z], () => J.Z.isEnabled()),
        tA = r.useRef(Z);
    tA.current = Z;
    let tN = r.useCallback(
        (e, t, n) => {
            var i;
            t === eE.GI && '' === tA.current && (null === (i = ee.commands) || void 0 === i ? void 0 : i.enabled) && (null == e5 || e5()), null == eG || eG(e, t, n);
        },
        [eG, e5, null === (a = ee.commands) || void 0 === a ? void 0 : a.enabled]
    );
    eO(ee, tp);
    let { eventEmitter: tC, handleEditorSelectionChanged: tR } = eD(ti, Z, F),
        { submitting: tO, submit: tD, handleSubmit: tL } = eS(ej, ee, ti, $.id),
        { autocompleteRef: tx, handleMaybeShowAutocomplete: tP, handleHideAutocomplete: tw } = eL(),
        tM = eA(tD, ee, ti),
        tk = eN(ti),
        tU = eC({
            editorRef: ti,
            disabled: tp,
            textValue: Z,
            channelId: $.id,
            chatInputType: ee,
            submit: ej
        }),
        tG = eR(ti, $),
        tB = r.useCallback(() => {
            var e;
            return null == ta ? void 0 : null === (e = ta.current) || void 0 === e ? void 0 : e.hide();
        }, []),
        { editorHeight: tZ, handleResize: tF } = eP(eB),
        { handleTab: tV, handleEnter: tj, handleMoveSelection: tH } = ek(tx, tn, ty),
        { expressionPickerView: tY, shouldHideExpressionPicker: tW, handleAutocompleteVisibilityChange: tK, handleOuterClick: tz } = eM(ee, tC, ti);
    (0, ea.S)(tC, $.guild_id, $.id);
    let tq = null != eb,
        tQ = (tp && !((tf || t_) && tg)) || (tO && (null === (o = ee.submit) || void 0 === o ? void 0 : o.useDisabledStylesOnSubmit)),
        tX = null;
    null != tc ? (tX = null == ei ? void 0 : ei(tc, td, ey.attachButton)) : (!tp || tm) && (tX = null == en ? void 0 : en(tq, ey.attachButton));
    let tJ = tv && null != F && !tp && ee.showCharacterCount && null == tc,
        t$ = tv && !__OVERLAY__ && null != F && null == tc && ee.toolbarType !== es.OW.NONE,
        t0 = eU($, ee, F, tx),
        t1 = (0, ed.c)({
            channel: $,
            type: ee,
            activeCommand: tc,
            pendingReply: eb,
            pendingScheduledMessage: e7
        }),
        t2 = 0 === Z.trim().length,
        t3 = (0, ef.G)($.id, ee, t2),
        t4 = !0 === ee.showSlowmodeIndicator,
        t6 = !0 === ee.showTypingIndicator,
        t5 = te && ee.layout === es.gy.INLINE,
        t7 = te && ee.layout === es.gy.FLUSH,
        t8 = r.useRef(null),
        t9 = r.useCallback((e) => {
            if (e.target === t8.current) {
                var t;
                null === (t = ti.current) || void 0 === t || t.focus();
            }
        }, []),
        ne = (0, i.jsx)(ef.Z, {
            type: ee,
            disabled: tp,
            channel: $,
            handleSubmit: tL,
            isEmpty: t2,
            showAllButtons: tl,
            children: te ? (null == ec ? void 0 : ec()) : null
        }),
        nt = tJ
            ? (0, i.jsx)(ep.Z, {
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
                      className: ey.accessoryBar,
                      onClick: t9,
                      ref: t8,
                      children: [
                          (0, i.jsxs)('div', {
                              className: ey.accessoryBarLeft,
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
                              className: ey.accessoryBarRight,
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
                    ? (0, i.jsx)(em.Z, {
                          editorRef: ti,
                          options: ee.markdown,
                          channel: $
                      })
                    : t$
                      ? (0, i.jsx)(eh.Z, {
                            ref: ta,
                            editorRef: ti,
                            containerRef: tr,
                            options: ee.markdown
                        })
                      : null,
                (0, i.jsxs)('div', {
                    ref: tt,
                    className: s()(V, {
                        [ey.channelTextArea]: !0,
                        [ey.channelTextAreaDisabled]: tQ,
                        [ey.highlighted]: eY,
                        [ey.textAreaMobileThemed]: d.tq,
                        [ey.inlineContainer]: t5,
                        [ey.flushContainer]: t7
                    }),
                    children: [
                        t5 || t7 ? null : (0, i.jsx)(ed.Z, { bars: t1 }),
                        (0, i.jsxs)('div', {
                            ref: tr,
                            onScroll: tB,
                            className: s()(H, {
                                [ey.scrollableContainer]: !0,
                                [ey.themedBackground]: !e3,
                                [ey.hasStackedBar]: t1.stacked.length > 0
                            }),
                            children: [
                                (0, i.jsx)(eu.Z, {
                                    channelId: $.id,
                                    chatInputType: ee
                                }),
                                ee.hideAttachmentArea
                                    ? null
                                    : (0, i.jsx)(e_.Z, {
                                          channelId: $.id,
                                          type: ee,
                                          canAttachFiles: th
                                      }),
                                (0, i.jsxs)('div', {
                                    className: s()(ey.inner, {
                                        [ey.innerDisabled]: tQ,
                                        [ey.sansAttachButton]: ee !== es.Ie.EDIT && (null != tX || (tQ && null == tX) || tf),
                                        [ey.sansAttachButtonCreateThread]: ee === es.Ie.THREAD_CREATION,
                                        [ey.sansAttachButtonCreatePost]: ee === es.Ie.CREATE_FORUM_POST || ee === es.Ie.FORWARD_MESSAGE_INPUT,
                                        [ey.sansAttachButtonUserProfileReply]: ee === es.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tz,
                                    children: [
                                        e9 ? null : tX,
                                        (0, i.jsx)(p.tEY, {
                                            ringTarget: tt,
                                            ringClassName: ey.focusRing,
                                            children: (0, i.jsx)(eo.Z, {
                                                ref: ti,
                                                id: W,
                                                focused: et,
                                                useSlate: tv,
                                                textValue: Z,
                                                richValue: F,
                                                disabled: tp,
                                                placeholder: Q,
                                                required: K,
                                                accessibilityLabel: X,
                                                isPreviewing: (tf || t_) && tg,
                                                channel: $,
                                                type: ee,
                                                canPasteFiles: th,
                                                uploadPromptCharacterCount: eg.en1,
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
                                                        [ey.textAreaThreadCreation]: ee === es.Ie.THREAD_CREATION,
                                                        [ey.profileBioInput]: ee === es.Ie.PROFILE_BIO_INPUT,
                                                        [ey.overlayInlineReply]: ee === es.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    Y
                                                ),
                                                'aria-labelledby': e$
                                            })
                                        }),
                                        e9
                                            ? (0, i.jsxs)('div', {
                                                  className: ey.rightAccessories,
                                                  children: [
                                                      t4 ? (0, i.jsx)(N.Z, { channel: $ }) : null,
                                                      null !== (w = null == ev ? void 0 : ev()) && void 0 !== w ? w : null,
                                                      (null === (l = ee.submit) || void 0 === l ? void 0 : l.button) != null && ((null === (c = ee.submit) || void 0 === c ? void 0 : c.ignorePreference) || tT)
                                                          ? (0, i.jsx)(el.Z, {
                                                                onClick: tL,
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
                            ref: tx,
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
                            ? (0, i.jsx)(x.Z, {
                                  editorRef: ti,
                                  channel: $,
                                  isEditorFocused: et,
                                  onSelectSticker: tU,
                                  submitButtonVisible: (null === (I = ee.submit) || void 0 === I ? void 0 : I.button) && (null !== (U = null === (O = ee.submit) || void 0 === O ? void 0 : O.ignorePreference) && void 0 !== U ? U : tT),
                                  stickerIconVisible: null !== (G = null === (L = ee.stickers) || void 0 === L ? void 0 : L.button) && void 0 !== G && G && !(ts && null !== (B = null === (P = ee.confetti) || void 0 === P ? void 0 : P.button) && void 0 !== B && B)
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
                          positionLayerClassName: ey.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
let eB = r.memo(r.forwardRef(eG));
