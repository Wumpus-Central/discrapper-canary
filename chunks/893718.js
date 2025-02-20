n.d(t, { Z: () => eU }), n(47120), n(411104), n(566702);
var r = n(200651),
    i = n(192379),
    o = n(120356),
    a = n.n(o),
    s = n(836560),
    l = n(512722),
    c = n.n(l),
    u = n(232713),
    d = n(873546),
    f = n(149765),
    p = n(442837),
    _ = n(481060),
    h = n(430742),
    m = n(738619),
    g = n(393238),
    E = n(607070),
    v = n(100527),
    b = n(906732),
    y = n(541099),
    O = n(998698),
    S = n(271668),
    I = n(404295),
    T = n(326133),
    N = n(405701),
    A = n(570220),
    C = n(540059),
    R = n(28546),
    P = n(805680),
    w = n(278754),
    D = n(151574),
    x = n(368844),
    L = n(41776),
    M = n(849522),
    k = n(780291),
    j = n(328908),
    U = n(576645),
    G = n(913663),
    B = n(268350),
    Z = n(378233),
    F = n(665906),
    V = n(695346),
    H = n(271383),
    W = n(496675),
    Y = n(944486),
    K = n(398327),
    z = n(117530),
    q = n(594174),
    Q = n(626135),
    X = n(459273),
    J = n(700785),
    $ = n(358085),
    ee = n(746877),
    et = n(541716),
    en = n(667829),
    er = n(319417),
    ei = n(562267),
    eo = n(376918),
    ea = n(760196),
    es = n(258696),
    el = n(303628),
    ec = n(472243),
    eu = n(872635),
    ed = n(676108),
    ef = n(981631),
    ep = n(665692),
    e_ = n(957825),
    eh = n(342203);
function em(e, t, n) {
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
function eg(e) {
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
                em(e, t, n[t]);
            });
    }
    return e;
}
function eE(e, t) {
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
function ev(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eE(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eb = 450;
function ey(e) {
    return e !== Y.Z.getChannelId();
}
function eO(e, t) {
    var n, r;
    return null !== (r = e && (null === (n = t.submit) || void 0 === n ? void 0 : n.clearOnSubmit)) && void 0 !== r && r;
}
function eS(e, t, o, a) {
    let [s, l] = i.useState(!1),
        c = i.useCallback(
            (i, u, d, f, p) => {
                var m, g, E;
                if (s) return;
                l(!0);
                let v = null !== (g = null === (m = G.Z.getStickerPreview(a, t.drafts.type)) || void 0 === m ? void 0 : m.map((e) => e.id)) && void 0 !== g ? g : [],
                    b = null !== (E = z.Z.getUploads(a, t.drafts.type)) && void 0 !== E ? E : [],
                    y = (0, j.q5)(a);
                if (null == u && !f && !p && (0, x.CB)(b, a)) {
                    l(!1),
                        (0, _.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('25292'), n.e('90508'), n.e('95477'), n.e('28467'), n.e('22173'), n.e('63045')]).then(n.bind(n, 273602));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    ev(eg({}, t), {
                                        threadId: a,
                                        attachments: b,
                                        sendMessage: () => c(i, void 0, void 0, void 0, !0)
                                    })
                                );
                        });
                    return;
                }
                e({
                    value: i,
                    uploads: b,
                    stickers: v,
                    confettiPotionEmoji: y,
                    command: u,
                    commandOptionValues: d,
                    isGif: f
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: r } = e,
                        i = eO(n, t),
                        s = null != o.current;
                    i && (ey(a) ? h.Z.saveDraft(a, '', t.drafts.type) : s && o.current.clearValue()), s && (l(!1), (0, R._Q)(), r && o.current.focus());
                });
            },
            [o, e, s, t, a]
        );
    return {
        submitting: s,
        submit: c,
        handleSubmit: i.useCallback(
            (e) => {
                var t;
                null == o || null === (t = o.current) || void 0 === t || t.submit(e);
            },
            [o]
        )
    };
}
function eI(e, t, n) {
    return i.useCallback(
        (r) => {
            var i, o;
            t === et.Ie.CREATE_FORUM_POST ? null === (o = n.current) || void 0 === o || o.insertGIF(r) : e(r.url, void 0, void 0, !0), (0, R._Q)(), null === (i = n.current) || void 0 === i || i.focus();
        },
        [n, e, t]
    );
}
function eT(e) {
    return i.useCallback(
        function (t, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = e.current;
            null != t && null != i && i.insertEmoji(t, n, r), n && (0, R._Q)();
        },
        [e]
    );
}
function eN(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: o, chatInputType: a, submit: s } = e,
        { analyticsLocations: l } = (0, b.ZP)();
    return i.useCallback(
        (e, i) => {
            var c, u;
            n ||
                ((0, Z.Hc)(i, r, o, a.drafts.type)
                    ? ((0, eo._H)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != G.Z.getStickerPreview(o, a.drafts.type),
                          analyticsLocations: l
                      }),
                      (0, B.eu)(o, e, a.drafts.type))
                    : (s({
                          value: '',
                          uploads: void 0,
                          stickers: [e.id]
                      }),
                      null === (u = t.current) || void 0 === u || u.clearValue()),
                (0, R._Q)(),
                null === (c = t.current) || void 0 === c || c.focus());
        },
        [n, r, o, a.drafts.type, t, l, s]
    );
}
function eA(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let o = e.current;
            null != n &&
                null != o &&
                (Q.default.track(ef.rMx.SOUNDMOJI_SELECT, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    sound_guild_id: n.guildId,
                    sound_id: n.soundId,
                    source: r
                }),
                o.insertSound(n)),
                i && (0, R._Q)(),
                null == o || o.focus();
        },
        [e, t.id, t.guild_id]
    );
}
function eC(e, t) {
    let n = i.useCallback(() => {
            !t && (0, R.RO)(e_.X1.EMOJI, e);
        }, [t, e]),
        r = i.useCallback(() => {
            var n;
            !t && (null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending) && (0, R.RO)(e_.X1.GIF, e);
        }, [t, e]),
        o = i.useCallback(() => {
            var n;
            !t && (null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending) && (0, R.RO)(e_.X1.STICKER, e);
        }, [t, e]);
    (0, X.yp)({
        event: ef.CkL.TOGGLE_EMOJI_POPOUT,
        handler: n
    }),
        (0, X.yp)({
            event: ef.CkL.TOGGLE_GIF_PICKER,
            handler: r
        }),
        (0, X.yp)({
            event: ef.CkL.TOGGLE_STICKER_PICKER,
            handler: o
        });
}
function eR(e, t, n) {
    let [r] = i.useState(() => new s.EventEmitter());
    i.useEffect(() => {
        r.emit('text-changed', t, n);
    }, [t, n, r]);
    let o = (t) => {
        null != e.current && r.emit('selection-changed', t);
    };
    return {
        eventEmitter: r,
        handleEditorSelectionChanged: o
    };
}
function eP() {
    let e = i.useRef(null),
        t = i.useCallback(() => {
            var t;
            null === (t = e.current) || void 0 === t || t.onMaybeShowAutocomplete();
        }, []),
        n = i.useCallback(() => {
            var t;
            null === (t = e.current) || void 0 === t || t.onHideAutocomplete();
        }, []);
    return {
        autocompleteRef: e,
        handleMaybeShowAutocomplete: t,
        handleHideAutocomplete: n
    };
}
function ew(e) {
    let t = i.useRef(null);
    if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
    return null == e ? t : e;
}
function eD(e) {
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
function ex(e, t, n, r) {
    let i = e.getGuildId(),
        o = (0, p.e7)([L.Z], () => null != i && L.Z.isLurking(i), [i]),
        a = (0, p.e7)([H.ZP, q.default], () => {
            var e, t;
            let n = q.default.getCurrentUser();
            return null !== (t = null != i && null != n ? (null === (e = H.ZP.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        s = (0, p.cj)(
            [W.Z],
            () => {
                var i, o;
                let s = e.isPrivate(),
                    l = W.Z.computePermissions(e),
                    c = f.e$(l, ef.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, ef.Plq.CREATE_PRIVATE_THREADS),
                    u = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || c) && (!(null === (o = t.permissions) || void 0 === o ? void 0 : o.requireSendMessages) || f.e$(l, ef.Plq.SEND_MESSAGES)),
                    d = u && f.e$(l, ef.Plq.ATTACH_FILES),
                    p = null != n,
                    _ = (0, F.xl)(e);
                return {
                    disabled: r || a || (!s && !u) || _,
                    canAttachFiles: !0 === t.attachments && (s || a || d || p),
                    canCreateThreads: c,
                    canEveryoneSendMessages: J.Uu(ef.Plq.SEND_MESSAGES, e)
                };
            },
            [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, a]
        );
    return eg(
        {
            isLurking: o,
            isPendingMember: a
        },
        s
    );
}
function eL(e, t, n) {
    let [r, o] = (0, R.Iu)((e) => [e.activeView, e.activeViewType], u.X),
        a = (0, p.e7)([y.Z], () => y.Z.shouldShowPopup() && y.Z.activeViewType() === e),
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
            null != r || (s && a) || null === (e = n.current) || void 0 === e || e.handleOuterClick();
        }, [r, s, a, n]),
        d = null == r || null == o || o !== e;
    return {
        expressionPickerView: r,
        shouldHideExpressionPicker: d,
        handleAutocompleteVisibilityChange: l,
        handleOuterClick: c
    };
}
function eM(e, t, n) {
    let r = i.useCallback(() => {
        var r, i;
        return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!1))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!1)) || !1;
    }, [n, t, e]);
    return {
        handleTab: r,
        handleEnter: i.useCallback(() => {
            var r, i;
            return !!(!n && (null === (r = t.current) || void 0 === r ? void 0 : r.onTabOrEnter(!0))) || (null === (i = e.current) || void 0 === i ? void 0 : i.onTabOrEnter(!0)) || !1;
        }, [n, t, e]),
        handleMoveSelection: i.useCallback(
            (r) => {
                var i, o;
                return !!(!n && (null === (i = t.current) || void 0 === i ? void 0 : i.onMoveSelection(r))) || (null === (o = e.current) || void 0 === o ? void 0 : o.onMoveSelection(r)) || !1;
            },
            [n, t, e]
        )
    };
}
function ek(e, t, n, r) {
    var i, o;
    let a = (0, w.pR)(),
        s = (0, p.e7)([G.Z], () => G.Z.getStickerPreview(e.id, t.drafts.type)),
        l = null != s && s.length > 0;
    return a && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (o = r.current) || void 0 === o ? void 0 : o.isVisible()) !== !0 && !__OVERLAY__ && null != n;
}
function ej(e, t) {
    var n, o, s, l, u, f, h, y, R, w, x, L, j, G, B;
    let { textValue: Z, richValue: F, className: H, innerClassName: W, editorClassName: Y, id: z, required: q, disabled: Q, placeholder: X, accessibilityLabel: J, channel: eo, type: e_, focused: em, renderAttachButton: eg, renderApplicationCommandIcon: eE, renderAppLauncherButton: ev, renderAppCommandButton: ey, renderLeftAccessories: eO, pendingReply: ej, onChange: eU, onResize: eG, onBlur: eB, onFocus: eZ, onKeyDown: eF, onSubmit: eV, promptToUpload: eH, highlighted: eW, canMentionRoles: eY, canMentionChannels: eK, maxCharacterCount: ez, showRemainingCharsAfterCount: eq, allowNewLines: eQ = !0, characterCountClassName: eX, 'aria-describedby': eJ, 'aria-labelledby': e$, setEditorRef: e0, autoCompletePosition: e1, children: e2, disableThemedBackground: e3 = !1, emojiPickerCloseOnModalOuterClick: e4, parentModalKey: e6, onCommandSentinelTyped: e5, pendingScheduledMessage: e7 } = e;
    c()(null != e_, 'chat input type must be set');
    let { analyticsLocations: e8 } = (0, b.ZP)(v.Z.CHANNEL_TEXT_AREA),
        e9 = (0, C.R6)('ChannelTextAreaContainer'),
        te = (0, C.Q3)('ChannelTextAreaContainer'),
        tt = ew(t),
        tn = i.useRef(null),
        tr = i.useRef(null),
        ti = i.useRef(null),
        to = i.useRef(null);
    null == e0 || e0(tr.current);
    let ta = (0, U.Nt)(),
        ts = (0, I.h9)(eo.id),
        [tl, tc] = i.useState(!ts);
    (0, g.P)(tt, (e) => {
        let { width: t } = e;
        return tc(!ts && (null == t || t > eb));
    });
    let { activeCommand: tu, activeCommandSection: td } = (0, p.cj)([O.Z], () => {
            var e, t;
            return {
                activeCommand: (null === (e = e_.commands) || void 0 === e ? void 0 : e.enabled) ? O.Z.getActiveCommand(eo.id) : null,
                activeCommandSection: (null === (t = e_.commands) || void 0 === t ? void 0 : t.enabled) ? O.Z.getActiveCommandSection(eo.id) : null
            };
        }),
        { isLurking: tf, isPendingMember: tp, disabled: t_, canAttachFiles: th, canCreateThreads: tm, canEveryoneSendMessages: tg } = ex(eo, e_, tu, Q),
        tE = e_.toolbarType === et.OW.STATIC,
        tv = !V.dN.useSetting() && !(0, $.isAndroidWeb)() && null != window.ResizeObserver,
        tb = !tv || !(null === (n = e_.commands) || void 0 === n ? void 0 : n.enabled) || !em || Z !== ep.GI,
        ty = (0, M.Z)(),
        { isSubmitButtonEnabled: tO, fontSize: tS } = (0, p.cj)([E.Z], () => ({
            fontSize: E.Z.fontSize,
            isSubmitButtonEnabled: E.Z.isSubmitButtonEnabled
        })),
        tI = (0, p.e7)([K.Z], () => K.Z.isEnabled()),
        tT = i.useRef(Z);
    tT.current = Z;
    let tN = i.useCallback(
        (e, t, n) => {
            var r;
            t === ep.GI && '' === tT.current && (null === (r = e_.commands) || void 0 === r ? void 0 : r.enabled) && (null == e5 || e5()), null == eU || eU(e, t, n);
        },
        [eU, e5, null === (o = e_.commands) || void 0 === o ? void 0 : o.enabled]
    );
    eC(e_, t_);
    let { eventEmitter: tA, handleEditorSelectionChanged: tC } = eR(tr, Z, F),
        { submitting: tR, submit: tP, handleSubmit: tw } = eS(eV, e_, tr, eo.id),
        { autocompleteRef: tD, handleMaybeShowAutocomplete: tx, handleHideAutocomplete: tL } = eP(),
        tM = eI(tP, e_, tr),
        tk = eT(tr),
        tj = eN({
            editorRef: tr,
            disabled: t_,
            textValue: Z,
            channelId: eo.id,
            chatInputType: e_,
            submit: eV
        }),
        tU = eA(tr, eo),
        tG = i.useCallback(() => {
            var e;
            return null == to ? void 0 : null === (e = to.current) || void 0 === e ? void 0 : e.hide();
        }, []),
        { editorHeight: tB, handleResize: tZ } = eD(eG),
        { handleTab: tF, handleEnter: tV, handleMoveSelection: tH } = eM(tD, tn, tb),
        { expressionPickerView: tW, shouldHideExpressionPicker: tY, handleAutocompleteVisibilityChange: tK, handleOuterClick: tz } = eL(e_, tA, tr);
    (0, ee.S)(tA, eo.guild_id, eo.id);
    let tq = null != ej,
        tQ = (t_ && !((tf || tp) && tg)) || (tR && (null === (s = e_.submit) || void 0 === s ? void 0 : s.useDisabledStylesOnSubmit)),
        tX = null;
    null != tu ? (tX = null == eE ? void 0 : eE(tu, td, eh.attachButton)) : (!t_ || tm) && (tX = null == eg ? void 0 : eg(tq, eh.attachButton));
    let tJ = tv && null != F && !t_ && e_.showCharacterCount && null == tu,
        t$ = tv && !__OVERLAY__ && null != F && null == tu && e_.toolbarType !== et.OW.NONE,
        t0 = ek(eo, e_, F, tD),
        t1 = (0, ea.c)({
            channel: eo,
            type: e_,
            activeCommand: tu,
            pendingReply: ej,
            pendingScheduledMessage: e7
        }),
        t2 = 0 === Z.trim().length,
        t3 = (0, es.G)(eo.id, e_, t2),
        t4 = !0 === e_.showSlowmodeIndicator,
        t6 = !0 === e_.showTypingIndicator,
        t5 = te && e_.layout === et.gy.INLINE,
        t7 = te && e_.layout === et.gy.FLUSH,
        t8 = i.useRef(null),
        t9 = i.useCallback((e) => {
            if (e.target === t8.current) {
                var t;
                null === (t = tr.current) || void 0 === t || t.focus();
            }
        }, []),
        ne = (0, r.jsx)(es.Z, {
            type: e_,
            disabled: t_,
            channel: eo,
            handleSubmit: tw,
            isEmpty: t2,
            showAllButtons: tl,
            children: te ? (null == ev ? void 0 : ev()) : null
        }),
        nt = tJ
            ? (0, r.jsx)(ec.Z, {
                  type: e_,
                  textValue: Z,
                  className: eX,
                  maxCharacterCount: ez,
                  showRemainingCharsAfterCount: eq
              })
            : null,
        nn = e9
            ? t_
                ? null
                : (0, r.jsxs)('div', {
                      className: eh.accessoryBar,
                      onClick: t9,
                      ref: t8,
                      children: [
                          (0, r.jsxs)('div', {
                              className: eh.accessoryBarLeft,
                              children: [
                                  null == eO ? void 0 : eO(),
                                  tX,
                                  t6
                                      ? (0, r.jsx)(m.Z, {
                                            channel: eo,
                                            poggermodeEnabled: !1
                                        })
                                      : null
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: eh.accessoryBarRight,
                              children: [nt, ne]
                          })
                      ]
                  })
            : null;
    return (0, r.jsx)(A.f6, {
        value: tA,
        children: (0, r.jsxs)(b.Gt, {
            value: e8,
            children: [
                t$ && tE
                    ? (0, r.jsx)(ed.Z, {
                          editorRef: tr,
                          options: e_.markdown,
                          channel: eo
                      })
                    : t$
                      ? (0, r.jsx)(eu.Z, {
                            ref: to,
                            editorRef: tr,
                            containerRef: ti,
                            options: e_.markdown
                        })
                      : null,
                (0, r.jsxs)('div', {
                    ref: tt,
                    className: a()(H, {
                        [eh.channelTextArea]: !0,
                        [eh.channelTextAreaDisabled]: tQ,
                        [eh.highlighted]: eW,
                        [eh.textAreaMobileThemed]: d.tq,
                        [eh.inlineContainer]: t5,
                        [eh.flushContainer]: t7
                    }),
                    children: [
                        t5 || t7 ? null : (0, r.jsx)(ea.Z, { bars: t1 }),
                        (0, r.jsxs)('div', {
                            ref: ti,
                            onScroll: tG,
                            className: a()(W, {
                                [eh.scrollableContainer]: !0,
                                [eh.themedBackground]: !e3,
                                [eh.hasStackedBar]: t1.stacked.length > 0
                            }),
                            children: [
                                (0, r.jsx)(ei.Z, {
                                    channelId: eo.id,
                                    chatInputType: e_
                                }),
                                e_.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(el.Z, {
                                          channelId: eo.id,
                                          type: e_,
                                          canAttachFiles: th
                                      }),
                                (0, r.jsxs)('div', {
                                    className: a()(eh.inner, {
                                        [eh.innerDisabled]: tQ,
                                        [eh.sansAttachButton]: e_ !== et.Ie.EDIT && (null != tX || (tQ && null == tX) || tf),
                                        [eh.sansAttachButtonCreateThread]: e_ === et.Ie.THREAD_CREATION,
                                        [eh.sansAttachButtonCreatePost]: e_ === et.Ie.CREATE_FORUM_POST || e_ === et.Ie.FORWARD_MESSAGE_INPUT,
                                        [eh.sansAttachButtonUserProfileReply]: e_ === et.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tz,
                                    children: [
                                        e9 ? null : tX,
                                        (0, r.jsx)(_.tEY, {
                                            ringTarget: tt,
                                            ringClassName: eh.focusRing,
                                            children: (0, r.jsx)(en.Z, {
                                                ref: tr,
                                                id: z,
                                                focused: em,
                                                useSlate: tv,
                                                textValue: Z,
                                                richValue: F,
                                                disabled: t_,
                                                placeholder: X,
                                                required: q,
                                                accessibilityLabel: J,
                                                isPreviewing: (tf || tp) && tg,
                                                channel: eo,
                                                type: e_,
                                                canPasteFiles: th,
                                                uploadPromptCharacterCount: ef.en1,
                                                maxCharacterCount: null != ez ? ez : ty,
                                                allowNewLines: eQ,
                                                'aria-describedby': eJ,
                                                onChange: tN,
                                                onResize: tZ,
                                                onBlur: eB,
                                                onFocus: eZ,
                                                onKeyDown: eF,
                                                onSubmit: tP,
                                                onTab: tF,
                                                onEnter: tV,
                                                onMoveSelection: tH,
                                                onSelectionChanged: tC,
                                                onMaybeShowAutocomplete: tx,
                                                onHideAutocomplete: tL,
                                                promptToUpload: eH,
                                                fontSize: tS,
                                                spellcheckEnabled: tI,
                                                canOnlyUseTextCommands: tq,
                                                className: a()(
                                                    {
                                                        [eh.textAreaThreadCreation]: e_ === et.Ie.THREAD_CREATION,
                                                        [eh.profileBioInput]: e_ === et.Ie.PROFILE_BIO_INPUT,
                                                        [eh.overlayInlineReply]: e_ === et.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    Y
                                                ),
                                                'aria-labelledby': e$
                                            })
                                        }),
                                        e9
                                            ? (0, r.jsxs)('div', {
                                                  className: eh.rightAccessories,
                                                  children: [
                                                      t4 ? (0, r.jsx)(N.Z, { channel: eo }) : null,
                                                      null !== (L = null == ey ? void 0 : ey()) && void 0 !== L ? L : null,
                                                      (null === (l = e_.submit) || void 0 === l ? void 0 : l.button) != null && ((null === (u = e_.submit) || void 0 === u ? void 0 : u.ignorePreference) || tO)
                                                          ? (0, r.jsx)(er.Z, {
                                                                onClick: tw,
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
                        e9 && !e_.hideAccessoryBar ? nn : null,
                        tb
                            ? null
                            : (0, r.jsx)(S.Z, {
                                  ref: tn,
                                  channel: eo,
                                  canOnlyUseTextCommands: tq
                              }),
                        (0, r.jsx)(T.Z, {
                            ref: tD,
                            channel: eo,
                            canMentionRoles: eY,
                            canMentionChannels: eK,
                            useNewSlashCommands: tv,
                            canOnlyUseTextCommands: tq,
                            canSendStickers: null === (f = e_.stickers) || void 0 === f ? void 0 : f.allowSending,
                            canSendSoundmoji: null === (h = e_.soundmoji) || void 0 === h ? void 0 : h.allowSending,
                            textValue: Z,
                            focused: em,
                            expressionPickerView: tW,
                            type: e_,
                            targetRef: tt,
                            editorRef: tr,
                            onSendMessage: tP,
                            onSendSticker: tj,
                            onVisibilityChange: tK,
                            editorHeight: tB,
                            setValue: (e, t) => (null == tN ? void 0 : tN(null, e, t)),
                            position: e1
                        }),
                        (0, r.jsx)(k.Z, {
                            textValue: Z,
                            editorHeight: tB,
                            channelId: eo.id
                        }),
                        e9 ? null : nt,
                        t0
                            ? (0, r.jsx)(D.Z, {
                                  editorRef: tr,
                                  channel: eo,
                                  isEditorFocused: em,
                                  onSelectSticker: tj,
                                  submitButtonVisible: (null === (y = e_.submit) || void 0 === y ? void 0 : y.button) && (null !== (j = null === (R = e_.submit) || void 0 === R ? void 0 : R.ignorePreference) && void 0 !== j ? j : tO),
                                  stickerIconVisible: null !== (G = null === (w = e_.stickers) || void 0 === w ? void 0 : w.button) && void 0 !== G && G && !(ta && null !== (B = null === (x = e_.confetti) || void 0 === x ? void 0 : x.button) && void 0 !== B && B)
                              })
                            : null,
                        e2
                    ]
                }),
                tY
                    ? null
                    : (0, r.jsx)(P.Z, {
                          positionTargetRef: tt,
                          type: e_,
                          onSelectGIF: tM,
                          onSelectEmoji: tk,
                          onSelectSticker: tj,
                          onSelectSound: tU,
                          channel: eo,
                          closeOnModalOuterClick: e4,
                          parentModalKey: e6,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: eh.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
let eU = i.memo(i.forwardRef(ej));
