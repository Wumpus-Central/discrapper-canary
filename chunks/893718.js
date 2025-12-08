n.d(t, {
    O1: () => eA,
    Sg: () => eI,
    TE: () => ex,
    ZP: () => eZ,
    aT: () => ek,
    ae: () => eT,
    bL: () => eS,
    hJ: () => eN,
    iV: () => eL,
    jx: () => eR,
    oR: () => eD,
    qz: () => ew,
    vB: () => eU,
    x2: () => eP,
}),
    n(388685),
    n(415506),
    n(781311);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(836560),
    l = n(512722),
    c = n.n(l),
    u = n(55160),
    d = n(873546),
    f = n(149765),
    p = n(442837),
    _ = n(481060),
    m = n(430742),
    h = n(393238),
    g = n(607070),
    E = n(100527),
    b = n(906732),
    y = n(989573),
    O = n(541099),
    v = n(663924),
    S = n(998698),
    I = n(271668),
    T = n(61356),
    A = n(326133),
    C = n(106824),
    N = n(570220),
    P = n(28546),
    R = n(805680),
    w = n(368844),
    D = n(41776),
    x = n(657871),
    L = n(849522),
    j = n(780291),
    M = n(328908),
    k = n(913663),
    U = n(268350),
    G = n(378233),
    Z = n(665906),
    B = n(695346),
    F = n(271383),
    V = n(496675),
    H = n(944486),
    Y = n(398327),
    W = n(117530),
    K = n(594174),
    z = n(626135),
    q = n(459273),
    Q = n(700785),
    X = n(358085),
    J = n(746877),
    $ = n(713913),
    ee = n(541716),
    et = n(667829),
    en = n(562267),
    er = n(376918),
    ei = n(760196),
    ea = n(258696),
    eo = n(303628),
    es = n(472243),
    el = n(872635),
    ec = n(887490),
    eu = n(676108),
    ed = n(981631),
    ef = n(761652),
    ep = n(957825),
    e_ = n(564355);
function em(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eh(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                em(e, t, n[t]);
            });
    }
    return e;
}
function eg(e, t) {
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
function eE(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eg(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let eb = 450,
    ey = 250;
function eO(e) {
    return e !== H.Z.getChannelId();
}
function ev(e, t) {
    var n, r;
    return null != (r = e && (null == (n = t.submit) ? void 0 : n.clearOnSubmit)) && r;
}
function eS(e, t, a, o, s) {
    let [l, c] = i.useState(!1),
        u = i.useCallback(
            (i, d, f, p, h) => {
                var g, E, b;
                if (l) return;
                c(!0);
                let y =
                        null !=
                        (E = null == (g = k.Z.getStickerPreview(s, t.drafts.type)) ? void 0 : g.map((e) => e.id))
                            ? E
                            : [],
                    O = null != (b = W.Z.getUploads(s, t.drafts.type)) ? b : [],
                    v = (0, M.q5)(s);
                if (null == d && !p && !h && (0, w.CB)(O, s)) {
                    c(!1),
                        (0, _.ZDy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("57804"),
                                n.e("90508"),
                                n.e("22173"),
                                n.e("95546"),
                                n.e("48890"),
                            ]).then(n.bind(n, 273602));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    eE(eh({}, t), {
                                        threadId: s,
                                        attachments: O,
                                        sendMessage: () => u(i, void 0, void 0, void 0, !0),
                                    }),
                                );
                        });
                    return;
                }
                e({
                    value: i,
                    uploads: O,
                    stickers: y,
                    confettiPotionEmoji: v,
                    command: d,
                    commandOptionValues: f,
                    isGif: p,
                }).then((e) => {
                    var n, r, i;
                    let { shouldClear: l, shouldRefocus: u } = e,
                        d = ev(l, t),
                        f = null != a.current;
                    d &&
                        (eO(s)
                            ? m.Z.saveDraft(s, "", t.drafts.type)
                            : f && (null == (r = a.current) || r.clearValue(), null == (i = o.current) || i.hide())),
                        f && (c(!1), (0, P._Q)(), u && (null == (n = a.current) || n.focus()));
                });
            },
            [a, o, e, l, t, s],
        );
    return {
        submitting: l,
        submit: u,
        handleSubmit: i.useCallback(
            (e) => {
                var t;
                null == a || null == (t = a.current) || t.submit(e);
            },
            [a],
        ),
    };
}
function eI(e, t, n) {
    return i.useCallback(
        (r) => {
            var i, a;
            t === ee.Ie.CREATE_FORUM_POST || t === ee.Ie.CREATE_ANNOUNCEMENT_POST
                ? null == (a = n.current) || a.insertGIF(r)
                : e(r.url, void 0, void 0, !0),
                (0, P._Q)(),
                null == (i = n.current) || i.focus();
        },
        [n, e, t],
    );
}
function eT(e) {
    return i.useCallback(
        (t) => {
            let { emoji: n, willClose: r } = t,
                i = e.current;
            null != n &&
                null != i &&
                i.insertEmoji({
                    emoji: n,
                    willClose: r,
                }),
                r && (0, P._Q)();
        },
        [e],
    );
}
function eA(e) {
    let { editorRef: t, disabled: n, textValue: r, channelId: a, chatInputType: o, submit: s } = e,
        { analyticsLocations: l } = (0, b.ZP)();
    return i.useCallback(
        (e, i) => {
            var c, u;
            n ||
                (o === ee.Ie.CREATE_ANNOUNCEMENT_POST || (0, G.Hc)(i, r, a, o.drafts.type)
                    ? ((0, er._H)({
                          sticker: e,
                          stickerSelectLocation: i,
                          isReplacement: null != k.Z.getStickerPreview(a, o.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, U.eu)(a, e, o.drafts.type))
                    : (s({
                          value: "",
                          uploads: void 0,
                          stickers: [e.id],
                      }),
                      null == (u = t.current) || u.clearValue()),
                (0, P._Q)(),
                null == (c = t.current) || c.focus());
        },
        [n, r, a, t, l, s, o],
    );
}
function eC(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let a = e.current;
            null != n &&
                null != a &&
                (z.default.track(ed.rMx.SOUNDMOJI_SELECT, {
                    channel_id: t.id,
                    guild_id: t.guild_id,
                    sound_guild_id: n.guildId,
                    sound_id: n.soundId,
                    source: r,
                }),
                a.insertSound(n)),
                i && (0, P._Q)(),
                null == a || a.focus();
        },
        [e, t.id, t.guild_id],
    );
}
function eN(e, t, n) {
    let r = i.useCallback(() => {
            t || (0, P.RO)(ep.X1.EMOJI, e, n);
        }, [t, e, n]),
        a = i.useCallback(() => {
            var r;
            !t && (null == (r = e.gifs) ? void 0 : r.allowSending) && (0, P.RO)(ep.X1.GIF, e, n);
        }, [t, e, n]),
        o = i.useCallback(() => {
            var r;
            !t && (null == (r = e.stickers) ? void 0 : r.allowSending) && (0, P.RO)(ep.X1.STICKER, e, n);
        }, [t, e, n]);
    (0, q.yp)({
        event: ed.CkL.TOGGLE_EMOJI_POPOUT,
        handler: r,
    }),
        (0, q.yp)({
            event: ed.CkL.TOGGLE_GIF_PICKER,
            handler: a,
        }),
        (0, q.yp)({
            event: ed.CkL.TOGGLE_STICKER_PICKER,
            handler: o,
        });
}
function eP(e, t, n) {
    let [r] = i.useState(() => new s.EventEmitter());
    i.useEffect(() => {
        r.emit("text-changed", t, n);
    }, [t, n, r]);
    let a = (t) => {
        null != e.current && r.emit("selection-changed", t);
    };
    return {
        eventEmitter: r,
        handleEditorSelectionChanged: a,
    };
}
function eR() {
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
        handleHideAutocomplete: n,
    };
}
function ew(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
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
            [e],
        ),
    };
}
function ex(e, t, n, r) {
    let i = e.getGuildId(),
        a = (0, p.e7)([D.Z], () => null != i && D.Z.isLurking(i), [i]),
        o = (0, p.e7)([F.ZP, K.default], () => {
            var e, t;
            let n = K.default.getCurrentUser();
            return (
                null !=
                    (t =
                        null != i && null != n
                            ? null == (e = F.ZP.getMember(i, n.id))
                                ? void 0
                                : e.isPending
                            : null) && t
            );
        }),
        s = (0, p.cj)([V.Z], () => {
            var i, a;
            let s = e.isPrivate(),
                l = V.Z.computePermissions(e),
                c = f.e$(l, ed.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, ed.Plq.CREATE_PRIVATE_THREADS),
                u =
                    (!(null == (i = t.permissions) ? void 0 : i.requireCreateTherads) || c) &&
                    (!(null == (a = t.permissions) ? void 0 : a.requireSendMessages) || f.e$(l, ed.Plq.SEND_MESSAGES)),
                d = u && f.e$(l, ed.Plq.ATTACH_FILES),
                p = null != n,
                _ = (0, Z.xl)(e);
            return {
                disabled: r || o || (!s && !u) || _,
                canAttachFiles: !0 === t.attachments && (s || o || d || p),
                canCreateThreads: c,
                canEveryoneSendMessages: Q.Uu(ed.Plq.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]);
    return eh(
        {
            isLurking: a,
            isPendingMember: o,
        },
        s,
    );
}
function eL(e, t, n) {
    let [r, a, o] = (0, P.Iu)((e) => [e.activeView, e.activeViewType, e.activeChannelId], u.X),
        s = (0, p.e7)([O.Z], () => O.Z.shouldShowPopup() && O.Z.activeViewType() === e && O.Z.activeChannelId() === n);
    i.useEffect(
        () => () => {
            (0, P._Q)(e, n);
        },
        [e, n],
    );
    let l = i.useCallback(() => {
            var e;
            null != r || s || null == (e = t.current) || e.handleOuterClick();
        }, [r, s, t]),
        c = null == r || null == a || a !== e || o !== n;
    return {
        expressionPickerView: r,
        shouldHideExpressionPicker: c,
        handleOuterClick: l,
    };
}
function ej(e, t, n) {
    let r = i.useCallback(() => {
        var r, i;
        return (
            !!(!n && (null == (r = t.current) ? void 0 : r.onTabOrEnter(!1))) ||
            (null == (i = e.current) ? void 0 : i.onTabOrEnter(!1)) ||
            !1
        );
    }, [n, t, e]);
    return {
        handleTab: r,
        handleEnter: i.useCallback(() => {
            var r, i;
            return (
                !!(!n && (null == (r = t.current) ? void 0 : r.onTabOrEnter(!0))) ||
                (null == (i = e.current) ? void 0 : i.onTabOrEnter(!0)) ||
                !1
            );
        }, [n, t, e]),
        handleMoveSelection: i.useCallback(
            (r) => {
                var i, a;
                return (
                    !!(!n && (null == (i = t.current) ? void 0 : i.onMoveSelection(r))) ||
                    (null == (a = e.current) ? void 0 : a.onMoveSelection(r)) ||
                    !1
                );
            },
            [n, t, e],
        ),
    };
}
function eM(e, t) {
    let [n, r] = i.useState({
            selectedAutocompleteInputType: null,
            selectedAutocompleteInputError: !1,
        }),
        a = i.useCallback(() => {
            var e, n, i, a;
            let o,
                s = null == (e = t.current) ? void 0 : e.getSlateEditor();
            null != s && (o = null == (n = ec.bN.getSelectedParentOfType(s, C.un)) ? void 0 : n[0]),
                r({
                    selectedAutocompleteInputType: null != (i = null == o ? void 0 : o.type) ? i : null,
                    selectedAutocompleteInputError: null != (a = null == o ? void 0 : o.error) && a,
                });
        }, [t]);
    return (
        i.useEffect(
            () => (
                e.on("selection-changed", a),
                e.on("submit-failure", a),
                a(),
                () => {
                    e.off("selection-changed", a), e.on("submit-failure", a);
                }
            ),
            [a, e],
        ),
        n
    );
}
let ek = (e) => {
        let { enabled: t, onlyExactMatch: n } = (0, x.zM)("ChannelTextAreaContainer", { autoTrackExposure: !1 }),
            [r, a] = i.useState(!0),
            o = i.useRef(null);
        return (
            i.useLayoutEffect(() => {
                t &&
                    !n &&
                    (clearTimeout(o.current),
                    a(!1),
                    (o.current = setTimeout(() => {
                        a(!0);
                    }, ey)));
            }, [n, t, e]),
            r
        );
    },
    eU = (e, t) => {
        let { enabled: n } = (0, x.zM)("ChannelTextAreaContainer", { autoTrackExposure: !1 }),
            [r, a] = i.useState(null);
        return {
            currentAutocompleteType: r,
            handleAutocompleteVisibilityChange: i.useCallback(
                (r, i) => {
                    n && a(i), r && (0, P._Q)(e, t);
                },
                [n, e, t],
            ),
        };
    };
function eG(e, t) {
    var n, a, s, l, u;
    let {
        textValue: f,
        richValue: m,
        className: O,
        innerClassName: C,
        editorClassName: P,
        id: w,
        required: D,
        disabled: x,
        placeholder: M,
        accessibilityLabel: k,
        channel: U,
        type: G,
        focused: Z,
        error: F,
        renderAttachButton: V,
        renderApplicationCommandIcon: H,
        pendingReply: W,
        onChange: K,
        onResize: z,
        onBlur: q,
        onFocus: Q,
        onKeyDown: er,
        onSubmit: ec,
        promptToUpload: ep,
        highlighted: em,
        canMentionRoles: eh,
        canMentionChannels: eg,
        maxCharacterCount: eE,
        showRemainingCharsAfterCount: ey,
        allowNewLines: eO = !0,
        characterCountClassName: ev,
        "aria-describedby": eG,
        "aria-labelledby": eZ,
        setEditorRef: eB,
        autoCompletePosition: eF,
        children: eV,
        disableThemedBackground: eH = !1,
        emojiPickerCloseOnModalOuterClick: eY,
        parentModalKey: eW,
        pendingScheduledMessage: eK,
        showValueWhenDisabled: ez = !1,
    } = e;
    c()(null != G, "chat input type must be set");
    let { analyticsLocations: eq } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA),
        eQ = ew(t),
        eX = i.useRef(null),
        eJ = i.useRef(null),
        e$ = i.useRef(null),
        e0 = i.useRef(null),
        e1 = i.useRef(null);
    null == eB || eB(e$.current);
    let e3 = (0, y.Z)(U),
        [e2, e4] = i.useState(!e3);
    (0, h.PM)(eQ, (e) => {
        let { width: t } = e;
        return e4(!e3 && (null == t || t > eb));
    });
    let { activeCommand: e5, activeCommandSection: e8 } = (0, p.cj)([S.Z], () => {
            var e, t;
            return {
                activeCommand: (null == (e = G.commands) ? void 0 : e.enabled) ? S.Z.getActiveCommand(U.id) : null,
                activeCommandSection: (null == (t = G.commands) ? void 0 : t.enabled)
                    ? S.Z.getActiveCommandSection(U.id)
                    : null,
            };
        }),
        {
            isLurking: e6,
            isPendingMember: e7,
            disabled: e9,
            canAttachFiles: te,
            canCreateThreads: tt,
            canEveryoneSendMessages: tn,
        } = ex(U, G, e5, x),
        tr = G.toolbarType === ee.OW.STATIC,
        ti = !B.dN.useSetting() && !(0, X.isAndroidWeb)() && null != window.ResizeObserver,
        ta = !ti || !(null == (n = G.commands) ? void 0 : n.enabled) || !Z || f !== ef.GI,
        to = (0, L.Z)(),
        { fontSize: ts } = (0, p.cj)([g.Z], () => ({ fontSize: g.Z.fontSize })),
        tl = (0, p.e7)([Y.Z], () => Y.Z.isEnabled());
    eN(G, e9, U.id);
    let { eventEmitter: tc, handleEditorSelectionChanged: tu } = eP(e$, f, m),
        td = i.useRef(f);
    td.current = f;
    let tf = i.useCallback(
            (e, t, n) => {
                var r;
                t === ef.GI &&
                    "" === td.current &&
                    (null == (r = G.commands) ? void 0 : r.enabled) &&
                    tc.emit("command-sentinel-typed"),
                    null == K || K(e, t, n);
            },
            [K, null == (a = G.commands) ? void 0 : a.enabled, tc],
        ),
        { submitting: tp, submit: t_, handleSubmit: tm } = eS(ec, G, e$, e1, U.id),
        { autocompleteRef: th, handleMaybeShowAutocomplete: tg, handleHideAutocomplete: tE } = eR(),
        tb = eI(t_, G, e$),
        ty = eT(e$),
        tO = eA({
            editorRef: e$,
            disabled: e9,
            textValue: f,
            channelId: U.id,
            chatInputType: G,
            submit: ec,
        }),
        tv = eC(e$, U),
        tS = i.useCallback(() => {
            var e;
            return null == e1 || null == (e = e1.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: tI, handleResize: tT } = eD(z),
        { handleTab: tA, handleEnter: tC, handleMoveSelection: tN } = ej(th, eX, ta),
        { expressionPickerView: tP, shouldHideExpressionPicker: tR, handleOuterClick: tw } = eL(G, e$, U.id),
        { selectedAutocompleteInputType: tD, selectedAutocompleteInputError: tx } = eM(tc, e$),
        tL = ek(f),
        { currentAutocompleteType: tj, handleAutocompleteVisibilityChange: tM } = eU(G, U.id),
        { moveAppsEntrypointToOverflow: tk } = $.n.useConfig({ location: "ChannelAppLauncher" }),
        tU = (0, T.Z)({
            type: G,
            channelId: U.id,
        }),
        tG = i.useCallback(() => {
            tc.emit("submit-failure");
        }, [tc]);
    (0, J.S)(tc, U.guild_id, U.id);
    let tZ = null != W,
        tB = (e9 && !((e6 || e7) && tn)) || (tp && (null == (s = G.submit) ? void 0 : s.useDisabledStylesOnSubmit)),
        tF = null;
    null != e5
        ? (tF = null == H ? void 0 : H(e5, e8, e_.attachButton))
        : (!e9 || tt) && (tF = null == V ? void 0 : V(tZ, e_.attachButton));
    let tV = ti && null != m && !e9 && G.showCharacterCount && null == e5,
        tH = ti && !__OVERLAY__ && null != m && null == e5 && G.toolbarType !== ee.OW.NONE && !e9,
        tY = (0, ei.c)({
            channel: U,
            type: G,
            activeCommand: e5,
            pendingReply: W,
            pendingScheduledMessage: eK,
            selectedAutocompleteInputType: tD,
            selectedAutocompleteInputError: tx,
        }),
        tW = 0 === f.trim().length,
        tK = G.layout === ee.gy.INLINE,
        tz = G.layout === ee.gy.FLUSH,
        tq = (0, r.jsx)("div", {
            ref: eJ,
            className: e_.hiddenAppLauncherAnchor,
        }),
        tQ = tU
            ? (0, r.jsx)(v.Z, {
                  align: tk && G !== ee.Ie.SIDEBAR ? "left" : "right",
                  positionTargetRef: eJ,
                  channel: U,
              })
            : null,
        tX = (0, r.jsx)(ea.Z, {
            type: G,
            disabled: e9,
            channel: U,
            handleSubmit: tm,
            isEmpty: tW,
            showAllButtons: e2,
        }),
        tJ = tV
            ? (0, r.jsx)(es.Z, {
                  type: G,
                  textValue: f,
                  className: ev,
                  maxCharacterCount: eE,
                  showRemainingCharsAfterCount: ey,
              })
            : null;
    return (0, r.jsx)(N.f6, {
        value: tc,
        children: (0, r.jsxs)(b.Gt, {
            value: eq,
            children: [
                tH && tr
                    ? (0, r.jsx)(eu.Z, {
                          editorRef: e$,
                          options: G.markdown,
                          channel: U,
                      })
                    : tH
                      ? (0, r.jsx)(el.Z, {
                            ref: e1,
                            editorRef: e$,
                            containerRef: e0,
                            options: G.markdown,
                        })
                      : null,
                (0, r.jsxs)("div", {
                    ref: eQ,
                    className: o()(O, {
                        [e_.channelTextArea]: !0,
                        [e_.channelTextAreaDisabled]: tB,
                        [e_.highlighted]: em,
                        [e_.textAreaMobileThemed]: d.tq,
                        [e_.inlineContainer]: tK,
                        [e_.flushContainer]: tz,
                        [e_.error]: null != F,
                    }),
                    children: [
                        tK || tz ? null : (0, r.jsx)(ei.Z, { bars: tY }),
                        (0, r.jsxs)("div", {
                            ref: e0,
                            onScroll: tS,
                            className: o()(C, {
                                [e_.scrollableContainer]: !0,
                                [e_.themedBackground]: !eH,
                                [e_.hasStackedBar]: tY.stacked.length > 0,
                            }),
                            children: [
                                (0, r.jsx)(en.Z, {
                                    channelId: U.id,
                                    chatInputType: G,
                                }),
                                G.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(eo.Z, {
                                          channelId: U.id,
                                          type: G,
                                          canAttachFiles: te,
                                      }),
                                (0, r.jsxs)("div", {
                                    className: o()(e_.inner, {
                                        [e_.innerDisabled]: tB,
                                        [e_.sansAttachButton]:
                                            G !== ee.Ie.EDIT && (null != tF || (tB && null == tF) || e6),
                                        [e_.sansAttachButtonCreateThread]: G === ee.Ie.THREAD_CREATION,
                                        [e_.sansAttachButtonCreatePost]:
                                            G === ee.Ie.CREATE_FORUM_POST || G === ee.Ie.FORWARD_MESSAGE_INPUT,
                                        [e_.sansAttachButtonUserProfileReply]: G === ee.Ie.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tw,
                                    children: [
                                        tQ,
                                        tk && tq,
                                        tF,
                                        (0, r.jsx)(_.tEY, {
                                            ringTarget: eQ,
                                            ringClassName: e_.focusRing,
                                            children: (0, r.jsx)(et.Z, {
                                                ref: e$,
                                                id: w,
                                                focused: Z,
                                                useSlate: ti,
                                                textValue: f,
                                                richValue: m,
                                                disabled: e9,
                                                placeholder: M,
                                                required: D,
                                                accessibilityLabel: k,
                                                isPreviewing: (e6 || e7) && tn,
                                                channel: U,
                                                type: G,
                                                canPasteFiles: te,
                                                uploadPromptCharacterCount: ed.en1,
                                                maxCharacterCount: null != eE ? eE : to,
                                                allowNewLines: eO,
                                                "aria-describedby": eG,
                                                onChange: tf,
                                                onResize: tT,
                                                onBlur: q,
                                                onFocus: Q,
                                                onKeyDown: er,
                                                onSubmit: t_,
                                                onSubmitFailure: tG,
                                                onTab: tA,
                                                onEnter: tC,
                                                onMoveSelection: tN,
                                                onSelectionChanged: tu,
                                                onMaybeShowAutocomplete: tg,
                                                onHideAutocomplete: tE,
                                                promptToUpload: ep,
                                                fontSize: ts,
                                                spellcheckEnabled: tl,
                                                canOnlyUseTextCommands: tZ,
                                                isEditorIdle: tL,
                                                currentAutocompleteType: tj,
                                                className: o()(
                                                    {
                                                        [e_.textAreaThreadCreation]: G === ee.Ie.THREAD_CREATION,
                                                        [e_.profileBioInput]: G === ee.Ie.PROFILE_BIO_INPUT,
                                                        [e_.overlayInlineReply]: G === ee.Ie.OVERLAY_INLINE_REPLY,
                                                    },
                                                    P,
                                                ),
                                                "aria-labelledby": eZ,
                                                showValueWhenDisabled: ez,
                                            }),
                                        }),
                                        tX,
                                        !tk && tq,
                                    ],
                                }),
                            ],
                        }),
                        ta
                            ? null
                            : (0, r.jsx)(I.Z, {
                                  ref: eX,
                                  channel: U,
                                  canOnlyUseTextCommands: tZ,
                              }),
                        (0, r.jsx)(A.Z, {
                            ref: th,
                            channel: U,
                            canMentionRoles: eh,
                            canMentionChannels: eg,
                            useNewSlashCommands: ti,
                            canOnlyUseTextCommands: tZ,
                            canSendStickers: null == (l = G.stickers) ? void 0 : l.allowSending,
                            canSendSoundmoji: null == (u = G.soundmoji) ? void 0 : u.allowSending,
                            textValue: f,
                            focused: Z,
                            isEditorIdle: tL,
                            expressionPickerView: tP,
                            type: G,
                            targetRef: eQ,
                            editorRef: e$,
                            onSendMessage: t_,
                            onSendSticker: tO,
                            onVisibilityChange: tM,
                            editorScrollerRef: e0,
                            editorHeight: tI,
                            barsHeight: 40 * tY.floating.length,
                            setValue: (e, t) => (null == tf ? void 0 : tf(null, e, t)),
                            position: eF,
                        }),
                        (0, r.jsx)(j.Z, {
                            textValue: f,
                            editorHeight: tI,
                            channelId: U.id,
                        }),
                        tJ,
                        eV,
                    ],
                }),
                (0, r.jsx)(_.pdY, { error: F }),
                tR
                    ? null
                    : (0, r.jsx)(R.Z, {
                          positionTargetRef: eQ,
                          type: G,
                          onSelectGIF: tb,
                          onSelectEmoji: ty,
                          onSelectSticker: tO,
                          onSelectSound: tv,
                          channel: U,
                          closeOnModalOuterClick: eY,
                          parentModalKey: eW,
                          position: "top",
                          align: "right",
                          positionLayerClassName: e_.expressionPickerPositionLayer,
                      }),
            ],
        }),
    });
}
let eZ = i.memo(i.forwardRef(eG));
