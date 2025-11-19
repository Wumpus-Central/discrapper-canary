n.d(t, {
    O1: () => eA,
    Sg: () => eT,
    TE: () => eL,
    ZP: () => eB,
    aT: () => ej,
    ae: () => eS,
    bL: () => eI,
    hJ: () => eN,
    iV: () => ex,
    jx: () => eP,
    oR: () => ew,
    qz: () => eD,
    vB: () => eU,
    x2: () => eR,
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
    _ = n(442837),
    p = n(481060),
    h = n(430742),
    m = n(393238),
    g = n(607070),
    E = n(100527),
    b = n(906732),
    y = n(989573),
    O = n(541099),
    v = n(663924),
    I = n(998698),
    T = n(271668),
    S = n(61356),
    A = n(326133),
    C = n(106824),
    N = n(570220),
    R = n(28546),
    P = n(805680),
    D = n(368844),
    w = n(41776),
    L = n(657871),
    x = n(849522),
    M = n(780291),
    k = n(328908),
    j = n(913663),
    U = n(268350),
    G = n(378233),
    B = n(665906),
    Z = n(695346),
    F = n(271383),
    V = n(496675),
    H = n(944486),
    Y = n(398327),
    W = n(117530),
    K = n(594174),
    z = n(626135),
    q = n(459273),
    X = n(700785),
    Q = n(358085),
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
    e_ = n(957825),
    ep = n(744114);
function eh(e, t, n) {
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
function em(e) {
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
                eh(e, t, n[t]);
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
function eI(e, t, a, o, s) {
    let [l, c] = i.useState(!1),
        u = i.useCallback(
            (i, d, f, _, m) => {
                var g, E, b;
                if (l) return;
                c(!0);
                let y =
                        null !=
                        (E = null == (g = j.Z.getStickerPreview(s, t.drafts.type)) ? void 0 : g.map((e) => e.id))
                            ? E
                            : [],
                    O = null != (b = W.Z.getUploads(s, t.drafts.type)) ? b : [],
                    v = (0, k.q5)(s);
                if (null == d && !_ && !m && (0, D.CB)(O, s)) {
                    c(!1),
                        (0, p.ZDy)(async () => {
                            let { default: e } = await Promise.all([
                                n.e("57804"),
                                n.e("90508"),
                                n.e("22173"),
                                n.e("95546"),
                                n.e("44576"),
                            ]).then(n.bind(n, 273602));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    eE(em({}, t), {
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
                    isGif: _,
                }).then((e) => {
                    var n, r, i;
                    let { shouldClear: l, shouldRefocus: u } = e,
                        d = ev(l, t),
                        f = null != a.current;
                    d &&
                        (eO(s)
                            ? h.Z.saveDraft(s, "", t.drafts.type)
                            : f && (null == (r = a.current) || r.clearValue(), null == (i = o.current) || i.hide())),
                        f && (c(!1), (0, R._Q)(), u && (null == (n = a.current) || n.focus()));
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
function eT(e, t, n) {
    return i.useCallback(
        (r) => {
            var i, a;
            t === ee.Ie.CREATE_FORUM_POST || t === ee.Ie.CREATE_ANNOUNCEMENT_POST
                ? null == (a = n.current) || a.insertGIF(r)
                : e(r.url, void 0, void 0, !0),
                (0, R._Q)(),
                null == (i = n.current) || i.focus();
        },
        [n, e, t],
    );
}
function eS(e) {
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
                r && (0, R._Q)();
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
                          isReplacement: null != j.Z.getStickerPreview(a, o.drafts.type),
                          analyticsLocations: l,
                      }),
                      (0, U.eu)(a, e, o.drafts.type))
                    : (s({
                          value: "",
                          uploads: void 0,
                          stickers: [e.id],
                      }),
                      null == (u = t.current) || u.clearValue()),
                (0, R._Q)(),
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
                i && (0, R._Q)(),
                null == a || a.focus();
        },
        [e, t.id, t.guild_id],
    );
}
function eN(e, t) {
    let n = i.useCallback(() => {
            t || (0, R.RO)(e_.X1.EMOJI, e);
        }, [t, e]),
        r = i.useCallback(() => {
            var n;
            !t && (null == (n = e.gifs) ? void 0 : n.allowSending) && (0, R.RO)(e_.X1.GIF, e);
        }, [t, e]),
        a = i.useCallback(() => {
            var n;
            !t && (null == (n = e.stickers) ? void 0 : n.allowSending) && (0, R.RO)(e_.X1.STICKER, e);
        }, [t, e]);
    (0, q.yp)({
        event: ed.CkL.TOGGLE_EMOJI_POPOUT,
        handler: n,
    }),
        (0, q.yp)({
            event: ed.CkL.TOGGLE_GIF_PICKER,
            handler: r,
        }),
        (0, q.yp)({
            event: ed.CkL.TOGGLE_STICKER_PICKER,
            handler: a,
        });
}
function eR(e, t, n) {
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
function eP() {
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
function eD(e) {
    let t = i.useRef(null);
    if (null != e && "function" == typeof e) throw Error("Only Ref objects are supported");
    return null == e ? t : e;
}
function ew(e) {
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
function eL(e, t, n, r) {
    let i = e.getGuildId(),
        a = (0, _.e7)([w.Z], () => null != i && w.Z.isLurking(i), [i]),
        o = (0, _.e7)([F.ZP, K.default], () => {
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
        s = (0, _.cj)([V.Z], () => {
            var i, a;
            let s = e.isPrivate(),
                l = V.Z.computePermissions(e),
                c = f.e$(l, ed.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, ed.Plq.CREATE_PRIVATE_THREADS),
                u =
                    (!(null == (i = t.permissions) ? void 0 : i.requireCreateTherads) || c) &&
                    (!(null == (a = t.permissions) ? void 0 : a.requireSendMessages) || f.e$(l, ed.Plq.SEND_MESSAGES)),
                d = u && f.e$(l, ed.Plq.ATTACH_FILES),
                _ = null != n,
                p = (0, B.xl)(e);
            return {
                disabled: r || o || (!s && !u) || p,
                canAttachFiles: !0 === t.attachments && (s || o || d || _),
                canCreateThreads: c,
                canEveryoneSendMessages: X.Uu(ed.Plq.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]);
    return em(
        {
            isLurking: a,
            isPendingMember: o,
        },
        s,
    );
}
function ex(e, t) {
    let [n, r] = (0, R.Iu)((e) => [e.activeView, e.activeViewType], u.X),
        a = (0, _.e7)([O.Z], () => O.Z.shouldShowPopup() && O.Z.activeViewType() === e);
    i.useEffect(
        () => () => {
            (0, R._Q)(e);
        },
        [e],
    );
    let o = i.useCallback(() => {
            var e;
            null != n || a || null == (e = t.current) || e.handleOuterClick();
        }, [n, a, t]),
        s = null == n || null == r || r !== e;
    return {
        expressionPickerView: n,
        shouldHideExpressionPicker: s,
        handleOuterClick: o,
    };
}
function eM(e, t, n) {
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
function ek(e, t) {
    let [n, r] = i.useState(null),
        a = i.useCallback(() => {
            var e, n;
            let i,
                a = null == (e = t.current) ? void 0 : e.getSlateEditor();
            null != a && (i = null == (n = ec.bN.getSelectedParentOfType(a, C.un)) ? void 0 : n[0].type),
                r(null != i ? i : null);
        }, [t]);
    return (
        i.useEffect(
            () => (
                e.on("selection-changed", a),
                a(),
                () => {
                    e.off("selection-changed", a);
                }
            ),
            [a, e],
        ),
        n
    );
}
let ej = (e) => {
        let { enabled: t, onlyExactMatch: n } = (0, L.zM)("ChannelTextAreaContainer", { autoTrackExposure: !1 }),
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
    eU = () => {
        let { enabled: e } = (0, L.zM)("ChannelTextAreaContainer", { autoTrackExposure: !1 }),
            [t, n] = i.useState(null);
        return {
            currentAutocompleteType: t,
            handleAutocompleteVisibilityChange: i.useCallback(
                (t, r) => {
                    e && n(r), t && (0, R._Q)();
                },
                [e],
            ),
        };
    };
function eG(e, t) {
    var n, a, s, l, u;
    let {
        textValue: f,
        richValue: h,
        className: O,
        innerClassName: C,
        editorClassName: R,
        id: D,
        required: w,
        disabled: L,
        placeholder: k,
        accessibilityLabel: j,
        channel: U,
        type: G,
        focused: B,
        error: F,
        renderAttachButton: V,
        renderApplicationCommandIcon: H,
        pendingReply: W,
        onChange: K,
        onResize: z,
        onBlur: q,
        onFocus: X,
        onKeyDown: er,
        onSubmit: ec,
        promptToUpload: e_,
        highlighted: eh,
        canMentionRoles: em,
        canMentionChannels: eg,
        maxCharacterCount: eE,
        showRemainingCharsAfterCount: ey,
        allowNewLines: eO = !0,
        characterCountClassName: ev,
        "aria-describedby": eG,
        "aria-labelledby": eB,
        setEditorRef: eZ,
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
        eX = eD(t),
        eQ = i.useRef(null),
        eJ = i.useRef(null),
        e$ = i.useRef(null),
        e0 = i.useRef(null),
        e1 = i.useRef(null);
    null == eZ || eZ(e$.current);
    let e3 = (0, y.Z)(U),
        [e2, e4] = i.useState(!e3);
    (0, m.PM)(eX, (e) => {
        let { width: t } = e;
        return e4(!e3 && (null == t || t > eb));
    });
    let { activeCommand: e5, activeCommandSection: e8 } = (0, _.cj)([I.Z], () => {
            var e, t;
            return {
                activeCommand: (null == (e = G.commands) ? void 0 : e.enabled) ? I.Z.getActiveCommand(U.id) : null,
                activeCommandSection: (null == (t = G.commands) ? void 0 : t.enabled)
                    ? I.Z.getActiveCommandSection(U.id)
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
        } = eL(U, G, e5, L),
        tr = G.toolbarType === ee.OW.STATIC,
        ti = !Z.dN.useSetting() && !(0, Q.isAndroidWeb)() && null != window.ResizeObserver,
        ta = !ti || !(null == (n = G.commands) ? void 0 : n.enabled) || !B || f !== ef.GI,
        to = (0, x.Z)(),
        { fontSize: ts } = (0, _.cj)([g.Z], () => ({ fontSize: g.Z.fontSize })),
        tl = (0, _.e7)([Y.Z], () => Y.Z.isEnabled());
    eN(G, e9);
    let { eventEmitter: tc, handleEditorSelectionChanged: tu } = eR(e$, f, h),
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
        { submitting: t_, submit: tp, handleSubmit: th } = eI(ec, G, e$, e1, U.id),
        { autocompleteRef: tm, handleMaybeShowAutocomplete: tg, handleHideAutocomplete: tE } = eP(),
        tb = eT(tp, G, e$),
        ty = eS(e$),
        tO = eA({
            editorRef: e$,
            disabled: e9,
            textValue: f,
            channelId: U.id,
            chatInputType: G,
            submit: ec,
        }),
        tv = eC(e$, U),
        tI = i.useCallback(() => {
            var e;
            return null == e1 || null == (e = e1.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: tT, handleResize: tS } = ew(z),
        { handleTab: tA, handleEnter: tC, handleMoveSelection: tN } = eM(tm, eQ, ta),
        { expressionPickerView: tR, shouldHideExpressionPicker: tP, handleOuterClick: tD } = ex(G, e$),
        tw = ek(tc, e$),
        tL = ej(f),
        { currentAutocompleteType: tx, handleAutocompleteVisibilityChange: tM } = eU(),
        { moveAppsEntrypointToOverflow: tk } = $.n.useConfig({ location: "ChannelAppLauncher" }),
        tj = (0, S.Z)({ type: G });
    (0, J.S)(tc, U.guild_id, U.id);
    let tU = null != W,
        tG = (e9 && !((e6 || e7) && tn)) || (t_ && (null == (s = G.submit) ? void 0 : s.useDisabledStylesOnSubmit)),
        tB = null;
    null != e5
        ? (tB = null == H ? void 0 : H(e5, e8, ep.attachButton))
        : (!e9 || tt) && (tB = null == V ? void 0 : V(tU, ep.attachButton));
    let tZ = ti && null != h && !e9 && G.showCharacterCount && null == e5,
        tF = ti && !__OVERLAY__ && null != h && null == e5 && G.toolbarType !== ee.OW.NONE && !e9,
        tV = (0, ei.c)({
            channel: U,
            type: G,
            activeCommand: e5,
            pendingReply: W,
            pendingScheduledMessage: eK,
            selectedAutocompleteInputType: tw,
        }),
        tH = 0 === f.trim().length,
        tY = G.layout === ee.gy.INLINE,
        tW = G.layout === ee.gy.FLUSH,
        tK = (0, r.jsx)("div", {
            ref: eJ,
            className: ep.hiddenAppLauncherAnchor,
        }),
        tz = tj
            ? (0, r.jsx)(v.Z, {
                  align: tk && G !== ee.Ie.SIDEBAR ? "left" : "right",
                  positionTargetRef: eJ,
                  channel: U,
              })
            : null,
        tq = (0, r.jsx)(ea.Z, {
            type: G,
            disabled: e9,
            channel: U,
            handleSubmit: th,
            isEmpty: tH,
            showAllButtons: e2,
        }),
        tX = tZ
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
                tF && tr
                    ? (0, r.jsx)(eu.Z, {
                          editorRef: e$,
                          options: G.markdown,
                          channel: U,
                      })
                    : tF
                      ? (0, r.jsx)(el.Z, {
                            ref: e1,
                            editorRef: e$,
                            containerRef: e0,
                            options: G.markdown,
                        })
                      : null,
                (0, r.jsxs)("div", {
                    ref: eX,
                    className: o()(O, {
                        [ep.channelTextArea]: !0,
                        [ep.channelTextAreaDisabled]: tG,
                        [ep.highlighted]: eh,
                        [ep.textAreaMobileThemed]: d.tq,
                        [ep.inlineContainer]: tY,
                        [ep.flushContainer]: tW,
                        [ep.error]: null != F,
                    }),
                    children: [
                        tY || tW ? null : (0, r.jsx)(ei.Z, { bars: tV }),
                        (0, r.jsxs)("div", {
                            ref: e0,
                            onScroll: tI,
                            className: o()(C, {
                                [ep.scrollableContainer]: !0,
                                [ep.themedBackground]: !eH,
                                [ep.hasStackedBar]: tV.stacked.length > 0,
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
                                    className: o()(ep.inner, {
                                        [ep.innerDisabled]: tG,
                                        [ep.sansAttachButton]:
                                            G !== ee.Ie.EDIT && (null != tB || (tG && null == tB) || e6),
                                        [ep.sansAttachButtonCreateThread]: G === ee.Ie.THREAD_CREATION,
                                        [ep.sansAttachButtonCreatePost]:
                                            G === ee.Ie.CREATE_FORUM_POST || G === ee.Ie.FORWARD_MESSAGE_INPUT,
                                        [ep.sansAttachButtonUserProfileReply]: G === ee.Ie.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tD,
                                    children: [
                                        tz,
                                        tk && tK,
                                        tB,
                                        (0, r.jsx)(p.tEY, {
                                            ringTarget: eX,
                                            ringClassName: ep.focusRing,
                                            children: (0, r.jsx)(et.Z, {
                                                ref: e$,
                                                id: D,
                                                focused: B,
                                                useSlate: ti,
                                                textValue: f,
                                                richValue: h,
                                                disabled: e9,
                                                placeholder: k,
                                                required: w,
                                                accessibilityLabel: j,
                                                isPreviewing: (e6 || e7) && tn,
                                                channel: U,
                                                type: G,
                                                canPasteFiles: te,
                                                uploadPromptCharacterCount: ed.en1,
                                                maxCharacterCount: null != eE ? eE : to,
                                                allowNewLines: eO,
                                                "aria-describedby": eG,
                                                onChange: tf,
                                                onResize: tS,
                                                onBlur: q,
                                                onFocus: X,
                                                onKeyDown: er,
                                                onSubmit: tp,
                                                onTab: tA,
                                                onEnter: tC,
                                                onMoveSelection: tN,
                                                onSelectionChanged: tu,
                                                onMaybeShowAutocomplete: tg,
                                                onHideAutocomplete: tE,
                                                promptToUpload: e_,
                                                fontSize: ts,
                                                spellcheckEnabled: tl,
                                                canOnlyUseTextCommands: tU,
                                                isEditorIdle: tL,
                                                currentAutocompleteType: tx,
                                                className: o()(
                                                    {
                                                        [ep.textAreaThreadCreation]: G === ee.Ie.THREAD_CREATION,
                                                        [ep.profileBioInput]: G === ee.Ie.PROFILE_BIO_INPUT,
                                                        [ep.overlayInlineReply]: G === ee.Ie.OVERLAY_INLINE_REPLY,
                                                    },
                                                    R,
                                                ),
                                                "aria-labelledby": eB,
                                                showValueWhenDisabled: ez,
                                            }),
                                        }),
                                        tq,
                                        !tk && tK,
                                    ],
                                }),
                            ],
                        }),
                        ta
                            ? null
                            : (0, r.jsx)(T.Z, {
                                  ref: eQ,
                                  channel: U,
                                  canOnlyUseTextCommands: tU,
                              }),
                        (0, r.jsx)(A.Z, {
                            ref: tm,
                            channel: U,
                            canMentionRoles: em,
                            canMentionChannels: eg,
                            useNewSlashCommands: ti,
                            canOnlyUseTextCommands: tU,
                            canSendStickers: null == (l = G.stickers) ? void 0 : l.allowSending,
                            canSendSoundmoji: null == (u = G.soundmoji) ? void 0 : u.allowSending,
                            textValue: f,
                            focused: B,
                            isEditorIdle: tL,
                            expressionPickerView: tR,
                            type: G,
                            targetRef: eX,
                            editorRef: e$,
                            onSendMessage: tp,
                            onSendSticker: tO,
                            onVisibilityChange: tM,
                            editorScrollerRef: e0,
                            editorHeight: tT,
                            barsHeight: 40 * tV.floating.length,
                            setValue: (e, t) => (null == tf ? void 0 : tf(null, e, t)),
                            position: eF,
                        }),
                        (0, r.jsx)(M.Z, {
                            textValue: f,
                            editorHeight: tT,
                            channelId: U.id,
                        }),
                        tX,
                        eV,
                    ],
                }),
                (0, r.jsx)(p.pdY, { error: F }),
                tP
                    ? null
                    : (0, r.jsx)(P.Z, {
                          positionTargetRef: eX,
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
                          positionLayerClassName: ep.expressionPickerPositionLayer,
                      }),
            ],
        }),
    });
}
let eB = i.memo(i.forwardRef(eG));
