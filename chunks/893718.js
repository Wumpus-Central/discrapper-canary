n.d(t, { Z: () => eV }), n(47120), n(411104), n(566702);
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
    j = n(823961),
    U = n(328908),
    G = n(992970),
    B = n(135793),
    Z = n(576645),
    F = n(317951),
    V = n(111810),
    H = n(913663),
    W = n(268350),
    Y = n(378233),
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
    er = n(700785),
    ei = n(358085),
    eo = n(746877),
    ea = n(541716),
    es = n(667829),
    el = n(319417),
    ec = n(562267),
    eu = n(376918),
    ed = n(760196),
    ef = n(258696),
    ep = n(303628),
    e_ = n(472243),
    eh = n(872635),
    em = n(676108),
    eg = n(981631),
    eE = n(665692),
    ev = n(957825),
    eb = n(342203);
function ey(e, t, n) {
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
function eO(e) {
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
                ey(e, t, n[t]);
            });
    }
    return e;
}
function eS(e, t) {
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
function eI(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eS(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eT = 450;
function eN(e) {
    return e !== X.Z.getChannelId();
}
function eA(e, t) {
    var n, r;
    return null !== (r = e && (null === (n = t.submit) || void 0 === n ? void 0 : n.clearOnSubmit)) && void 0 !== r && r;
}
function eC(e, t, o, a) {
    let [s, l] = i.useState(!1),
        c = (0, p.e7)([j.Z], () => j.Z.fetchPotionCount(F.D1)),
        u = i.useCallback(
            (i, d, f, p, m, g) => {
                var E, v, b;
                if (s) return;
                l(!0);
                let y = null !== (v = null === (E = H.Z.getStickerPreview(a, t.drafts.type)) || void 0 === E ? void 0 : E.map((e) => e.id)) && void 0 !== v ? v : [],
                    O = null !== (b = $.Z.getUploads(a, t.drafts.type)) && void 0 !== b ? b : [],
                    S = (0, U.q5)(a);
                if (null == d && !p && !m && (0, x.CB)(O, a)) {
                    l(!1),
                        (0, _.ZDy)(async () => {
                            let { default: e } = await Promise.all([n.e('25292'), n.e('90508'), n.e('95477'), n.e('28467'), n.e('22173'), n.e('63045')]).then(n.bind(n, 273602));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    eI(eO({}, t), {
                                        threadId: a,
                                        attachments: O,
                                        sendMessage: () => u(i, void 0, void 0, void 0, !0)
                                    })
                                );
                        });
                    return;
                }
                let I = (0, Z.tv)(i, p, d, O),
                    T = (0, U.b7)(a, g, c);
                if (I && T) {
                    l(!1),
                        (0, B.s)({
                            channelId: a,
                            onRedeem: () => u(i, d, f, p, m, !0),
                            source: G.YD.MessageSubmit
                        });
                    return;
                }
                e({
                    value: i,
                    uploads: O,
                    stickers: y,
                    confettiPotionEmoji: S,
                    command: d,
                    commandOptionValues: f,
                    isGif: p
                }).then((e) => {
                    let { shouldClear: n, shouldRefocus: r } = e,
                        i = eA(n, t),
                        s = null != o.current;
                    i && (eN(a) ? h.Z.saveDraft(a, '', t.drafts.type) : s && o.current.clearValue()), s && (l(!1), (0, R._Q)(), r && o.current.focus());
                });
            },
            [o, e, s, t, a, c]
        );
    return {
        submitting: s,
        submit: u,
        handleSubmit: i.useCallback(
            (e) => {
                var t;
                null == o || null === (t = o.current) || void 0 === t || t.submit(e);
            },
            [o]
        )
    };
}
function eR(e, t, n) {
    return i.useCallback(
        (r) => {
            var i, o;
            t === ea.Ie.CREATE_FORUM_POST ? null === (o = n.current) || void 0 === o || o.insertGIF(r) : e(r.url, void 0, void 0, !0), (0, R._Q)(), null === (i = n.current) || void 0 === i || i.focus();
        },
        [n, e, t]
    );
}
function eP(e) {
    return i.useCallback(
        function (t, n) {
            let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = e.current;
            null != t && null != i && i.insertEmoji(t, n, r), n && (0, R._Q)();
        },
        [e]
    );
}
function ew(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: o, chatInputType: a, submit: s } = e,
        { analyticsLocations: l } = (0, b.ZP)();
    return i.useCallback(
        (e, i) => {
            var c, u;
            n ||
                ((0, Y.Hc)(i, r, o, a.drafts.type)
                    ? ((0, eu._H)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != H.Z.getStickerPreview(o, a.drafts.type),
                          analyticsLocations: l
                      }),
                      (0, W.eu)(o, e, a.drafts.type))
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
function eD(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let o = e.current;
            null != n &&
                null != o &&
                (et.default.track(eg.rMx.SOUNDMOJI_SELECT, {
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
function ex(e, t) {
    let n = i.useCallback(() => {
            !t && (0, R.RO)(ev.X1.EMOJI, e);
        }, [t, e]),
        r = i.useCallback(() => {
            var n;
            !t && (null === (n = e.gifs) || void 0 === n ? void 0 : n.allowSending) && (0, R.RO)(ev.X1.GIF, e);
        }, [t, e]),
        o = i.useCallback(() => {
            var n;
            !t && (null === (n = e.stickers) || void 0 === n ? void 0 : n.allowSending) && (0, R.RO)(ev.X1.STICKER, e);
        }, [t, e]);
    (0, en.yp)({
        event: eg.CkL.TOGGLE_EMOJI_POPOUT,
        handler: n
    }),
        (0, en.yp)({
            event: eg.CkL.TOGGLE_GIF_PICKER,
            handler: r
        }),
        (0, en.yp)({
            event: eg.CkL.TOGGLE_STICKER_PICKER,
            handler: o
        });
}
function eL(e, t, n) {
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
function eM() {
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
function ek(e) {
    let t = i.useRef(null);
    if (null != e && 'function' == typeof e) throw Error('Only Ref objects are supported');
    return null == e ? t : e;
}
function ej(e) {
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
function eU(e, t, n, r) {
    let i = e.getGuildId(),
        o = (0, p.e7)([L.Z], () => null != i && L.Z.isLurking(i), [i]),
        a = (0, p.e7)([q.ZP, ee.default], () => {
            var e, t;
            let n = ee.default.getCurrentUser();
            return null !== (t = null != i && null != n ? (null === (e = q.ZP.getMember(i, n.id)) || void 0 === e ? void 0 : e.isPending) : null) && void 0 !== t && t;
        }),
        s = (0, p.cj)(
            [Q.Z],
            () => {
                var i, o;
                let s = e.isPrivate(),
                    l = Q.Z.computePermissions(e),
                    c = f.e$(l, eg.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, eg.Plq.CREATE_PRIVATE_THREADS),
                    u = (!(null === (i = t.permissions) || void 0 === i ? void 0 : i.requireCreateTherads) || c) && (!(null === (o = t.permissions) || void 0 === o ? void 0 : o.requireSendMessages) || f.e$(l, eg.Plq.SEND_MESSAGES)),
                    d = u && f.e$(l, eg.Plq.ATTACH_FILES),
                    p = null != n,
                    _ = (0, K.xl)(e);
                return {
                    disabled: r || a || (!s && !u) || _,
                    canAttachFiles: !0 === t.attachments && (s || a || d || p),
                    canCreateThreads: c,
                    canEveryoneSendMessages: er.Uu(eg.Plq.SEND_MESSAGES, e)
                };
            },
            [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, a]
        );
    return eO(
        {
            isLurking: o,
            isPendingMember: a
        },
        s
    );
}
function eG(e, t, n) {
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
function eB(e, t, n) {
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
function eZ(e, t, n, r) {
    var i, o;
    let a = (0, w.pR)(),
        s = (0, p.e7)([H.Z], () => H.Z.getStickerPreview(e.id, t.drafts.type)),
        l = null != s && s.length > 0;
    return a && (null === (i = t.stickers) || void 0 === i ? void 0 : i.autoSuggest) && !l && (null === (o = r.current) || void 0 === o ? void 0 : o.isVisible()) !== !0 && !__OVERLAY__ && null != n;
}
function eF(e, t) {
    var n, o, s, l, u, f, h, y, R, w, x, L, j, U, G;
    let { textValue: B, richValue: Z, className: F, innerClassName: H, editorClassName: W, id: Y, required: K, disabled: q, placeholder: Q, accessibilityLabel: X, channel: $, type: ee, focused: et, renderAttachButton: en, renderApplicationCommandIcon: er, renderAppLauncherButton: eu, renderAppCommandButton: ev, renderLeftAccessories: ey, pendingReply: eO, onChange: eS, onResize: eI, onBlur: eN, onFocus: eA, onKeyDown: eF, onSubmit: eV, promptToUpload: eH, highlighted: eW, canMentionRoles: eY, canMentionChannels: eK, maxCharacterCount: ez, showRemainingCharsAfterCount: eq, allowNewLines: eQ = !0, characterCountClassName: eX, 'aria-describedby': eJ, 'aria-labelledby': e$, setEditorRef: e0, autoCompletePosition: e1, children: e2, disableThemedBackground: e3 = !1, emojiPickerCloseOnModalOuterClick: e4, parentModalKey: e6, onCommandSentinelTyped: e5, pendingScheduledMessage: e7 } = e;
    c()(null != ee, 'chat input type must be set');
    let { analyticsLocations: e8 } = (0, b.ZP)(v.Z.CHANNEL_TEXT_AREA),
        e9 = (0, C.R6)('ChannelTextAreaContainer'),
        te = (0, C.Q3)('ChannelTextAreaContainer'),
        tt = ek(t),
        tn = i.useRef(null),
        tr = i.useRef(null),
        ti = i.useRef(null),
        to = i.useRef(null);
    null == e0 || e0(tr.current);
    let ta = (0, V.V1)('ChannelTextAreaContainer'),
        ts = (0, I.h9)($.id),
        [tl, tc] = i.useState(!ts);
    (0, g.P)(tt, (e) => {
        let { width: t } = e;
        return tc(!ts && (null == t || t > eT));
    });
    let { activeCommand: tu, activeCommandSection: td } = (0, p.cj)([O.Z], () => {
            var e, t;
            return {
                activeCommand: (null === (e = ee.commands) || void 0 === e ? void 0 : e.enabled) ? O.Z.getActiveCommand($.id) : null,
                activeCommandSection: (null === (t = ee.commands) || void 0 === t ? void 0 : t.enabled) ? O.Z.getActiveCommandSection($.id) : null
            };
        }),
        { isLurking: tf, isPendingMember: tp, disabled: t_, canAttachFiles: th, canCreateThreads: tm, canEveryoneSendMessages: tg } = eU($, ee, tu, q),
        tE = ee.toolbarType === ea.OW.STATIC,
        tv = !z.dN.useSetting() && !(0, ei.isAndroidWeb)() && null != window.ResizeObserver,
        tb = !tv || !(null === (n = ee.commands) || void 0 === n ? void 0 : n.enabled) || !et || B !== eE.GI,
        ty = (0, M.Z)(),
        { isSubmitButtonEnabled: tO, fontSize: tS } = (0, p.cj)([E.Z], () => ({
            fontSize: E.Z.fontSize,
            isSubmitButtonEnabled: E.Z.isSubmitButtonEnabled
        })),
        tI = (0, p.e7)([J.Z], () => J.Z.isEnabled()),
        tT = i.useRef(B);
    tT.current = B;
    let tN = i.useCallback(
        (e, t, n) => {
            var r;
            t === eE.GI && '' === tT.current && (null === (r = ee.commands) || void 0 === r ? void 0 : r.enabled) && (null == e5 || e5()), null == eS || eS(e, t, n);
        },
        [eS, e5, null === (o = ee.commands) || void 0 === o ? void 0 : o.enabled]
    );
    ex(ee, t_);
    let { eventEmitter: tA, handleEditorSelectionChanged: tC } = eL(tr, B, Z),
        { submitting: tR, submit: tP, handleSubmit: tw } = eC(eV, ee, tr, $.id),
        { autocompleteRef: tD, handleMaybeShowAutocomplete: tx, handleHideAutocomplete: tL } = eM(),
        tM = eR(tP, ee, tr),
        tk = eP(tr),
        tj = ew({
            editorRef: tr,
            disabled: t_,
            textValue: B,
            channelId: $.id,
            chatInputType: ee,
            submit: eV
        }),
        tU = eD(tr, $),
        tG = i.useCallback(() => {
            var e;
            return null == to ? void 0 : null === (e = to.current) || void 0 === e ? void 0 : e.hide();
        }, []),
        { editorHeight: tB, handleResize: tZ } = ej(eI),
        { handleTab: tF, handleEnter: tV, handleMoveSelection: tH } = eB(tD, tn, tb),
        { expressionPickerView: tW, shouldHideExpressionPicker: tY, handleAutocompleteVisibilityChange: tK, handleOuterClick: tz } = eG(ee, tA, tr);
    (0, eo.S)(tA, $.guild_id, $.id);
    let tq = null != eO,
        tQ = (t_ && !((tf || tp) && tg)) || (tR && (null === (s = ee.submit) || void 0 === s ? void 0 : s.useDisabledStylesOnSubmit)),
        tX = null;
    null != tu ? (tX = null == er ? void 0 : er(tu, td, eb.attachButton)) : (!t_ || tm) && (tX = null == en ? void 0 : en(tq, eb.attachButton));
    let tJ = tv && null != Z && !t_ && ee.showCharacterCount && null == tu,
        t$ = tv && !__OVERLAY__ && null != Z && null == tu && ee.toolbarType !== ea.OW.NONE,
        t0 = eZ($, ee, Z, tD),
        t1 = (0, ed.c)({
            channel: $,
            type: ee,
            activeCommand: tu,
            pendingReply: eO,
            pendingScheduledMessage: e7
        }),
        t2 = 0 === B.trim().length,
        t3 = (0, ef.G)($.id, ee, t2),
        t4 = !0 === ee.showSlowmodeIndicator,
        t6 = !0 === ee.showTypingIndicator,
        t5 = te && ee.layout === ea.gy.INLINE,
        t7 = te && ee.layout === ea.gy.FLUSH,
        t8 = i.useRef(null),
        t9 = i.useCallback((e) => {
            if (e.target === t8.current) {
                var t;
                null === (t = tr.current) || void 0 === t || t.focus();
            }
        }, []),
        ne = (0, r.jsx)(ef.Z, {
            type: ee,
            disabled: t_,
            channel: $,
            handleSubmit: tw,
            isEmpty: t2,
            showAllButtons: tl,
            children: te ? (null == eu ? void 0 : eu()) : null
        }),
        nt = tJ
            ? (0, r.jsx)(e_.Z, {
                  type: ee,
                  textValue: B,
                  className: eX,
                  maxCharacterCount: ez,
                  showRemainingCharsAfterCount: eq
              })
            : null,
        nn = e9
            ? t_
                ? null
                : (0, r.jsxs)('div', {
                      className: eb.accessoryBar,
                      onClick: t9,
                      ref: t8,
                      children: [
                          (0, r.jsxs)('div', {
                              className: eb.accessoryBarLeft,
                              children: [
                                  null == ey ? void 0 : ey(),
                                  tX,
                                  t6
                                      ? (0, r.jsx)(m.Z, {
                                            channel: $,
                                            poggermodeEnabled: !1
                                        })
                                      : null
                              ]
                          }),
                          (0, r.jsxs)('div', {
                              className: eb.accessoryBarRight,
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
                    ? (0, r.jsx)(em.Z, {
                          editorRef: tr,
                          options: ee.markdown,
                          channel: $
                      })
                    : t$
                      ? (0, r.jsx)(eh.Z, {
                            ref: to,
                            editorRef: tr,
                            containerRef: ti,
                            options: ee.markdown
                        })
                      : null,
                (0, r.jsxs)('div', {
                    ref: tt,
                    className: a()(F, {
                        [eb.channelTextArea]: !0,
                        [eb.channelTextAreaDisabled]: tQ,
                        [eb.highlighted]: eW,
                        [eb.textAreaMobileThemed]: d.tq,
                        [eb.inlineContainer]: t5,
                        [eb.flushContainer]: t7
                    }),
                    children: [
                        t5 || t7 ? null : (0, r.jsx)(ed.Z, { bars: t1 }),
                        (0, r.jsxs)('div', {
                            ref: ti,
                            onScroll: tG,
                            className: a()(H, {
                                [eb.scrollableContainer]: !0,
                                [eb.themedBackground]: !e3,
                                [eb.hasStackedBar]: t1.stacked.length > 0
                            }),
                            children: [
                                (0, r.jsx)(ec.Z, {
                                    channelId: $.id,
                                    chatInputType: ee
                                }),
                                ee.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(ep.Z, {
                                          channelId: $.id,
                                          type: ee,
                                          canAttachFiles: th
                                      }),
                                (0, r.jsxs)('div', {
                                    className: a()(eb.inner, {
                                        [eb.innerDisabled]: tQ,
                                        [eb.sansAttachButton]: ee !== ea.Ie.EDIT && (null != tX || (tQ && null == tX) || tf),
                                        [eb.sansAttachButtonCreateThread]: ee === ea.Ie.THREAD_CREATION,
                                        [eb.sansAttachButtonCreatePost]: ee === ea.Ie.CREATE_FORUM_POST || ee === ea.Ie.FORWARD_MESSAGE_INPUT,
                                        [eb.sansAttachButtonUserProfileReply]: ee === ea.Ie.USER_PROFILE_REPLY
                                    }),
                                    onMouseDown: tz,
                                    children: [
                                        e9 ? null : tX,
                                        (0, r.jsx)(_.tEY, {
                                            ringTarget: tt,
                                            ringClassName: eb.focusRing,
                                            children: (0, r.jsx)(es.Z, {
                                                ref: tr,
                                                id: Y,
                                                focused: et,
                                                useSlate: tv,
                                                textValue: B,
                                                richValue: Z,
                                                disabled: t_,
                                                placeholder: Q,
                                                required: K,
                                                accessibilityLabel: X,
                                                isPreviewing: (tf || tp) && tg,
                                                channel: $,
                                                type: ee,
                                                canPasteFiles: th,
                                                uploadPromptCharacterCount: eg.en1,
                                                maxCharacterCount: null != ez ? ez : ty,
                                                allowNewLines: eQ,
                                                'aria-describedby': eJ,
                                                onChange: tN,
                                                onResize: tZ,
                                                onBlur: eN,
                                                onFocus: eA,
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
                                                        [eb.textAreaThreadCreation]: ee === ea.Ie.THREAD_CREATION,
                                                        [eb.profileBioInput]: ee === ea.Ie.PROFILE_BIO_INPUT,
                                                        [eb.overlayInlineReply]: ee === ea.Ie.OVERLAY_INLINE_REPLY
                                                    },
                                                    W
                                                ),
                                                'aria-labelledby': e$
                                            })
                                        }),
                                        e9
                                            ? (0, r.jsxs)('div', {
                                                  className: eb.rightAccessories,
                                                  children: [
                                                      t4 ? (0, r.jsx)(N.Z, { channel: $ }) : null,
                                                      null !== (L = null == ev ? void 0 : ev()) && void 0 !== L ? L : null,
                                                      (null === (l = ee.submit) || void 0 === l ? void 0 : l.button) != null && ((null === (u = ee.submit) || void 0 === u ? void 0 : u.ignorePreference) || tO)
                                                          ? (0, r.jsx)(el.Z, {
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
                        e9 && !ee.hideAccessoryBar ? nn : null,
                        tb
                            ? null
                            : (0, r.jsx)(S.Z, {
                                  ref: tn,
                                  channel: $,
                                  canOnlyUseTextCommands: tq
                              }),
                        (0, r.jsx)(T.Z, {
                            ref: tD,
                            channel: $,
                            canMentionRoles: eY,
                            canMentionChannels: eK,
                            useNewSlashCommands: tv,
                            canOnlyUseTextCommands: tq,
                            canSendStickers: null === (f = ee.stickers) || void 0 === f ? void 0 : f.allowSending,
                            canSendSoundmoji: null === (h = ee.soundmoji) || void 0 === h ? void 0 : h.allowSending,
                            textValue: B,
                            focused: et,
                            expressionPickerView: tW,
                            type: ee,
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
                            textValue: B,
                            editorHeight: tB,
                            channelId: $.id
                        }),
                        e9 ? null : nt,
                        t0
                            ? (0, r.jsx)(D.Z, {
                                  editorRef: tr,
                                  channel: $,
                                  isEditorFocused: et,
                                  onSelectSticker: tj,
                                  submitButtonVisible: (null === (y = ee.submit) || void 0 === y ? void 0 : y.button) && (null !== (j = null === (R = ee.submit) || void 0 === R ? void 0 : R.ignorePreference) && void 0 !== j ? j : tO),
                                  stickerIconVisible: null !== (U = null === (w = ee.stickers) || void 0 === w ? void 0 : w.button) && void 0 !== U && U && !(ta && null !== (G = null === (x = ee.confetti) || void 0 === x ? void 0 : x.button) && void 0 !== G && G)
                              })
                            : null,
                        e2
                    ]
                }),
                tY
                    ? null
                    : (0, r.jsx)(P.Z, {
                          positionTargetRef: tt,
                          type: ee,
                          onSelectGIF: tM,
                          onSelectEmoji: tk,
                          onSelectSticker: tj,
                          onSelectSound: tU,
                          channel: $,
                          closeOnModalOuterClick: e4,
                          parentModalKey: e6,
                          position: 'top',
                          align: 'right',
                          positionLayerClassName: eb.expressionPickerPositionLayer
                      })
            ]
        })
    });
}
let eV = i.memo(i.forwardRef(eF));
