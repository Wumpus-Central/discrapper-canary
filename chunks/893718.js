n.d(t, {
    O1: () => eA,
    Sg: () => eT,
    TE: () => eL,
    ZP: () => eF,
    aT: () => eU,
    ae: () => eC,
    bL: () => eI,
    hJ: () => eP,
    iV: () => ej,
    jx: () => ew,
    oR: () => ex,
    qz: () => eD,
    vB: () => eG,
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
    C = n(326133),
    A = n(106824),
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
    F = n(695346),
    B = n(271383),
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
    eo = n(175592),
    es = n(303628),
    el = n(472243),
    ec = n(872635),
    eu = n(887490),
    ed = n(676108),
    ef = n(981631),
    ep = n(761652),
    e_ = n(957825),
    em = n(72775);
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
function eg(e) {
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
function eb(e, t) {
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
let ey = 450,
    eO = 250;
function ev(e) {
    return e !== H.Z.getChannelId();
}
function eS(e, t) {
    var n, r;
    return null != (r = e && (null == (n = t.submit) ? void 0 : n.clearOnSubmit)) && r;
}
function eI(e, t, a, o, s) {
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
                                n.e("27381"),
                            ]).then(n.bind(n, 273602));
                            return (t) =>
                                (0, r.jsx)(
                                    e,
                                    eb(eg({}, t), {
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
                        d = eS(l, t),
                        f = null != a.current;
                    d &&
                        (ev(s)
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
function eT(e, t, n) {
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
function eC(e) {
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
function eN(e, t) {
    return i.useCallback(
        (n, r, i) => {
            let a = e.current;
            null != n &&
                null != a &&
                (z.default.track(ef.rMx.SOUNDMOJI_SELECT, {
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
function eP(e, t, n) {
    let r = i.useCallback(() => {
            t || (0, P.RO)(e_.X1.EMOJI, e, n);
        }, [t, e, n]),
        a = i.useCallback(() => {
            var r;
            !t && (null == (r = e.gifs) ? void 0 : r.allowSending) && (0, P.RO)(e_.X1.GIF, e, n);
        }, [t, e, n]),
        o = i.useCallback(() => {
            var r;
            !t && (null == (r = e.stickers) ? void 0 : r.allowSending) && (0, P.RO)(e_.X1.STICKER, e, n);
        }, [t, e, n]);
    (0, q.yp)({
        event: ef.CkL.TOGGLE_EMOJI_POPOUT,
        handler: r,
    }),
        (0, q.yp)({
            event: ef.CkL.TOGGLE_GIF_PICKER,
            handler: a,
        }),
        (0, q.yp)({
            event: ef.CkL.TOGGLE_STICKER_PICKER,
            handler: o,
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
function ew() {
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
function ex(e) {
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
        a = (0, p.e7)([D.Z], () => null != i && D.Z.isLurking(i), [i]),
        o = (0, p.e7)([B.ZP, K.default], () => {
            var e, t;
            let n = K.default.getCurrentUser();
            return (
                null !=
                    (t =
                        null != i && null != n
                            ? null == (e = B.ZP.getMember(i, n.id))
                                ? void 0
                                : e.isPending
                            : null) && t
            );
        }),
        s = (0, p.cj)([V.Z], () => {
            var i, a;
            let s = e.isPrivate(),
                l = V.Z.computePermissions(e),
                c = f.e$(l, ef.Plq.CREATE_PUBLIC_THREADS) || f.e$(l, ef.Plq.CREATE_PRIVATE_THREADS),
                u =
                    (!(null == (i = t.permissions) ? void 0 : i.requireCreateTherads) || c) &&
                    (!(null == (a = t.permissions) ? void 0 : a.requireSendMessages) || f.e$(l, ef.Plq.SEND_MESSAGES)),
                d = u && f.e$(l, ef.Plq.ATTACH_FILES),
                p = null != n,
                _ = (0, Z.xl)(e);
            return {
                disabled: r || o || (!s && !u) || _,
                canAttachFiles: !0 === t.attachments && (s || o || d || p),
                canCreateThreads: c,
                canEveryoneSendMessages: Q.Uu(ef.Plq.SEND_MESSAGES, e),
            };
        }, [e, t.permissions.requireCreateTherads, t.permissions.requireSendMessages, t.attachments, n, r, o]);
    return eg(
        {
            isLurking: a,
            isPendingMember: o,
        },
        s,
    );
}
function ej(e, t, n) {
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
    let [n, r] = i.useState({
            selectedAutocompleteInputType: null,
            selectedAutocompleteInputError: !1,
        }),
        a = i.useCallback(() => {
            var e, n, i, a;
            let o,
                s = null == (e = t.current) ? void 0 : e.getSlateEditor();
            null != s && (o = null == (n = eu.bN.getSelectedParentOfType(s, A.un)) ? void 0 : n[0]),
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
let eU = (e) => {
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
                    }, eO)));
            }, [n, t, e]),
            r
        );
    },
    eG = (e, t) => {
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
function eZ(e, t) {
    var n, a, s, l, u;
    let {
        textValue: f,
        richValue: m,
        className: O,
        innerClassName: A,
        editorClassName: P,
        id: w,
        required: D,
        disabled: x,
        placeholder: M,
        accessibilityLabel: k,
        channel: U,
        type: G,
        focused: Z,
        error: B,
        renderAttachButton: V,
        renderApplicationCommandIcon: H,
        renderButtons: W,
        pendingReply: K,
        onChange: z,
        onResize: q,
        onBlur: Q,
        onFocus: er,
        onKeyDown: eu,
        onSubmit: e_,
        promptToUpload: eh,
        highlighted: eg,
        canMentionRoles: eE,
        canMentionChannels: eb,
        maxCharacterCount: eO,
        showRemainingCharsAfterCount: ev,
        allowNewLines: eS = !0,
        characterCountClassName: eZ,
        "aria-describedby": eF,
        "aria-labelledby": eB,
        setEditorRef: eV,
        autoCompletePosition: eH,
        children: eY,
        disableThemedBackground: eW = !1,
        emojiPickerCloseOnModalOuterClick: eK,
        parentModalKey: ez,
        pendingScheduledMessage: eq,
        showValueWhenDisabled: eQ = !1,
    } = e;
    c()(null != G, "chat input type must be set");
    let { analyticsLocations: eX } = (0, b.ZP)(E.Z.CHANNEL_TEXT_AREA),
        eJ = eD(t),
        e$ = i.useRef(null),
        e0 = i.useRef(null),
        e1 = i.useRef(null),
        e3 = i.useRef(null),
        e2 = i.useRef(null);
    null == eV || eV(e1.current);
    let e4 = (0, y.Z)(U),
        [e5, e8] = i.useState(!e4);
    (0, h.PM)(eJ, (e) => {
        let { width: t } = e;
        return e8(!e4 && (null == t || t > ey));
    });
    let { activeCommand: e6, activeCommandSection: e7 } = (0, p.cj)([S.Z], () => {
            var e, t;
            return {
                activeCommand: (null == (e = G.commands) ? void 0 : e.enabled) ? S.Z.getActiveCommand(U.id) : null,
                activeCommandSection: (null == (t = G.commands) ? void 0 : t.enabled)
                    ? S.Z.getActiveCommandSection(U.id)
                    : null,
            };
        }),
        {
            isLurking: e9,
            isPendingMember: te,
            disabled: tt,
            canAttachFiles: tn,
            canCreateThreads: tr,
            canEveryoneSendMessages: ti,
        } = eL(U, G, e6, x),
        ta = G.toolbarType === ee.OW.STATIC,
        to = !F.dN.useSetting() && !(0, X.isAndroidWeb)() && null != window.ResizeObserver,
        ts = !to || !(null == (n = G.commands) ? void 0 : n.enabled) || !Z || f !== ep.GI,
        tl = (0, L.Z)(),
        { fontSize: tc } = (0, p.cj)([g.Z], () => ({ fontSize: g.Z.fontSize })),
        tu = (0, p.e7)([Y.Z], () => Y.Z.isEnabled());
    eP(G, tt, U.id);
    let { eventEmitter: td, handleEditorSelectionChanged: tf } = eR(e1, f, m),
        tp = i.useRef(f);
    tp.current = f;
    let t_ = i.useCallback(
            (e, t, n) => {
                var r;
                t === ep.GI &&
                    "" === tp.current &&
                    (null == (r = G.commands) ? void 0 : r.enabled) &&
                    td.emit("command-sentinel-typed"),
                    null == z || z(e, t, n);
            },
            [z, null == (a = G.commands) ? void 0 : a.enabled, td],
        ),
        { submitting: tm, submit: th, handleSubmit: tg } = eI(e_, G, e1, e2, U.id),
        { autocompleteRef: tE, handleMaybeShowAutocomplete: tb, handleHideAutocomplete: ty } = ew(),
        tO = eT(th, G, e1),
        tv = eC(e1),
        tS = eA({
            editorRef: e1,
            disabled: tt,
            textValue: f,
            channelId: U.id,
            chatInputType: G,
            submit: e_,
        }),
        tI = eN(e1, U),
        tT = i.useCallback(() => {
            var e;
            return null == e2 || null == (e = e2.current) ? void 0 : e.hide();
        }, []),
        { editorHeight: tC, handleResize: tA } = ex(q),
        { handleTab: tN, handleEnter: tP, handleMoveSelection: tR } = eM(tE, e$, ts),
        { expressionPickerView: tw, shouldHideExpressionPicker: tD, handleOuterClick: tx } = ej(G, e1, U.id),
        { selectedAutocompleteInputType: tL, selectedAutocompleteInputError: tj } = ek(td, e1),
        tM = eU(f),
        { currentAutocompleteType: tk, handleAutocompleteVisibilityChange: tU } = eG(G, U.id),
        { moveAppsEntrypointToOverflow: tG } = $.n.useConfig({ location: "ChannelAppLauncher" }),
        tZ = (0, T.Z)({
            type: G,
            channelId: U.id,
        }),
        tF = i.useCallback(() => {
            td.emit("submit-failure");
        }, [td]);
    (0, J.S)(td, U.guild_id, U.id);
    let tB = null != K,
        tV = (tt && !((e9 || te) && ti)) || (tm && (null == (s = G.submit) ? void 0 : s.useDisabledStylesOnSubmit)),
        tH = null;
    null != e6
        ? (tH = null == H ? void 0 : H(e6, e7, em.attachButton))
        : (!tt || tr) && (tH = null == V ? void 0 : V(tB, em.attachButton));
    let tY = to && null != m && !tt && G.showCharacterCount && null == e6,
        tW = to && !__OVERLAY__ && null != m && null == e6 && G.toolbarType !== ee.OW.NONE && !tt,
        tK = (0, ei.c)({
            channel: U,
            type: G,
            activeCommand: e6,
            pendingReply: K,
            pendingScheduledMessage: eq,
            selectedAutocompleteInputType: tL,
            selectedAutocompleteInputError: tj,
        }),
        tz = 0 === f.trim().length,
        tq = G.layout === ee.gy.INLINE,
        tQ = G.layout === ee.gy.FLUSH,
        tX = (0, r.jsx)("div", {
            ref: e0,
            className: em.hiddenAppLauncherAnchor,
        }),
        tJ = tZ
            ? (0, r.jsx)(v.Z, {
                  align: tG && G !== ee.Ie.SIDEBAR ? "left" : "right",
                  positionTargetRef: e0,
                  channel: U,
              })
            : null,
        t$ =
            null != W
                ? W()
                : (0, r.jsx)(ea.Z, {
                      type: G,
                      disabled: tt,
                      channel: U,
                      handleSubmit: tg,
                      isEmpty: tz,
                      showAllButtons: e5,
                  }),
        t0 = tY
            ? (0, r.jsx)(el.Z, {
                  type: G,
                  textValue: f,
                  className: eZ,
                  maxCharacterCount: eO,
                  showRemainingCharsAfterCount: ev,
              })
            : null;
    return (0, r.jsx)(N.f6, {
        value: td,
        children: (0, r.jsxs)(b.Gt, {
            value: eX,
            children: [
                tW && ta
                    ? (0, r.jsx)(ed.Z, {
                          editorRef: e1,
                          options: G.markdown,
                          channel: U,
                      })
                    : tW
                      ? (0, r.jsx)(ec.Z, {
                            ref: e2,
                            editorRef: e1,
                            containerRef: e3,
                            options: G.markdown,
                        })
                      : null,
                (0, r.jsxs)("div", {
                    ref: eJ,
                    className: o()(O, {
                        [em.channelTextArea]: !0,
                        [em.channelTextAreaDisabled]: tV,
                        [em.highlighted]: eg,
                        [em.textAreaMobileThemed]: d.tq,
                        [em.inlineContainer]: tq,
                        [em.flushContainer]: tQ,
                        [em.error]: null != B,
                    }),
                    children: [
                        tq || tQ ? null : (0, r.jsx)(ei.Z, { bars: tK }),
                        (0, r.jsxs)("div", {
                            ref: e3,
                            onScroll: tT,
                            className: o()(A, {
                                [em.scrollableContainer]: !0,
                                [em.themedBackground]: !eW,
                                [em.hasStackedBar]: tK.stacked.length > 0,
                            }),
                            children: [
                                (0, r.jsx)(en.Z, {
                                    channelId: U.id,
                                    chatInputType: G,
                                }),
                                G.hideAttachmentArea
                                    ? null
                                    : (0, r.jsx)(es.Z, {
                                          channelId: U.id,
                                          type: G,
                                          canAttachFiles: tn,
                                      }),
                                (0, r.jsxs)("div", {
                                    className: o()(em.inner, {
                                        [em.innerDisabled]: tV,
                                        [em.sansAttachButton]:
                                            G !== ee.Ie.EDIT && (null != tH || (tV && null == tH) || e9),
                                        [em.sansAttachButtonCreateThread]: G === ee.Ie.THREAD_CREATION,
                                        [em.sansAttachButtonCreatePost]:
                                            G === ee.Ie.CREATE_FORUM_POST || G === ee.Ie.FORWARD_MESSAGE_INPUT,
                                        [em.sansAttachButtonUserProfileReply]: G === ee.Ie.USER_PROFILE_REPLY,
                                    }),
                                    onMouseDown: tx,
                                    children: [
                                        tJ,
                                        tG && tX,
                                        tH,
                                        (0, r.jsx)(_.tEY, {
                                            ringTarget: eJ,
                                            ringClassName: em.focusRing,
                                            children: (0, r.jsx)(et.Z, {
                                                ref: e1,
                                                id: w,
                                                focused: Z,
                                                useSlate: to,
                                                textValue: f,
                                                richValue: m,
                                                disabled: tt,
                                                placeholder: M,
                                                required: D,
                                                accessibilityLabel: k,
                                                isPreviewing: (e9 || te) && ti,
                                                channel: U,
                                                type: G,
                                                canPasteFiles: tn,
                                                uploadPromptCharacterCount: ef.en1,
                                                maxCharacterCount: null != eO ? eO : tl,
                                                allowNewLines: eS,
                                                "aria-describedby": eF,
                                                onChange: t_,
                                                onResize: tA,
                                                onBlur: Q,
                                                onFocus: er,
                                                onKeyDown: eu,
                                                onSubmit: th,
                                                onSubmitFailure: tF,
                                                onTab: tN,
                                                onEnter: tP,
                                                onMoveSelection: tR,
                                                onSelectionChanged: tf,
                                                onMaybeShowAutocomplete: tb,
                                                onHideAutocomplete: ty,
                                                promptToUpload: eh,
                                                fontSize: tc,
                                                spellcheckEnabled: tu,
                                                canOnlyUseTextCommands: tB,
                                                isEditorIdle: tM,
                                                currentAutocompleteType: tk,
                                                className: o()(
                                                    {
                                                        [em.textAreaThreadCreation]: G === ee.Ie.THREAD_CREATION,
                                                        [em.profileBioInput]: G === ee.Ie.PROFILE_BIO_INPUT,
                                                        [em.overlayInlineReply]: G === ee.Ie.OVERLAY_INLINE_REPLY,
                                                    },
                                                    P,
                                                ),
                                                "aria-labelledby": eB,
                                                showValueWhenDisabled: eQ,
                                            }),
                                        }),
                                        t$,
                                        !tG && tX,
                                    ],
                                }),
                            ],
                        }),
                        (0, r.jsx)(eo.P, {
                            channel: U,
                            type: G,
                            pendingScheduledMessage: eq,
                        }),
                        ts
                            ? null
                            : (0, r.jsx)(I.Z, {
                                  ref: e$,
                                  channel: U,
                                  canOnlyUseTextCommands: tB,
                              }),
                        (0, r.jsx)(C.Z, {
                            ref: tE,
                            channel: U,
                            canMentionRoles: eE,
                            canMentionChannels: eb,
                            useNewSlashCommands: to,
                            canOnlyUseTextCommands: tB,
                            canSendStickers: null == (l = G.stickers) ? void 0 : l.allowSending,
                            canSendSoundmoji: null == (u = G.soundmoji) ? void 0 : u.allowSending,
                            textValue: f,
                            focused: Z,
                            isEditorIdle: tM,
                            expressionPickerView: tw,
                            type: G,
                            targetRef: eJ,
                            editorRef: e1,
                            onSendMessage: th,
                            onSendSticker: tS,
                            onVisibilityChange: tU,
                            editorScrollerRef: e3,
                            editorHeight: tC,
                            barsHeight: 40 * tK.floating.length,
                            setValue: (e, t) => (null == t_ ? void 0 : t_(null, e, t)),
                            position: eH,
                        }),
                        (0, r.jsx)(j.Z, {
                            textValue: f,
                            editorHeight: tC,
                            channelId: U.id,
                        }),
                        t0,
                        eY,
                    ],
                }),
                (0, r.jsx)(_.pdY, { error: B }),
                tD
                    ? null
                    : (0, r.jsx)(R.Z, {
                          positionTargetRef: eJ,
                          type: G,
                          onSelectGIF: tO,
                          onSelectEmoji: tv,
                          onSelectSticker: tS,
                          onSelectSound: tI,
                          channel: U,
                          closeOnModalOuterClick: eK,
                          parentModalKey: ez,
                          position: "top",
                          align: "right",
                          positionLayerClassName: em.expressionPickerPositionLayer,
                      }),
            ],
        }),
    });
}
let eF = i.memo(i.forwardRef(eZ));
