"use strict";
n.d(t, { A: () => Z });
var i = n(627968),
    l = n(64700),
    s = n(503698),
    r = n.n(s),
    a = n(735438),
    o = n.n(a),
    c = n(607399),
    u = n(621466),
    d = n(311907),
    h = n(554146),
    m = n(192308),
    p = n(939249),
    f = n(315710),
    g = n(777666),
    _ = n(817281),
    x = n(820284),
    A = n(761929),
    C = n(58149),
    E = n(932001),
    I = n(937773),
    v = n(855057),
    y = n(750506),
    S = n(267102),
    b = n(704591),
    N = n(989799),
    T = n(256449),
    j = n(679382),
    R = n(669201),
    w = n(964404),
    L = n(712687),
    M = n(203982),
    k = n(151271),
    O = n(634),
    P = n(999061),
    D = n(698279),
    U = n(652215),
    V = n(49999),
    G = n(732139),
    F = n(307731),
    B = n(823894),
    H = n(985018),
    W = n(645264);
let K = 498 + G.as.MEDIUM,
    z = l.memo(function (e) {
        let { isActive: t, className: n, viewType: l, autoFocus: s = !1, "aria-controls": a, ...o } = e;
        return (0, i.jsx)(p.D, {
            role: "tab",
            autoFocus: s,
            "aria-controls": t ? a : void 0,
            ...o,
            onClick: () => {
                C.Ay.trackWithMetadata(U.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: l, badged: !1 }), (0, k.U)(l);
            },
            "aria-current": t ? "page" : void 0,
            className: r()(n, W.oi, W.pc, { [W.Mv]: t }),
        });
    }),
    Z = l.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: s,
                onSelectEmoji: a,
                onSelectSticker: p,
                onSelectSound: Z,
                onSelectKaomoji: q,
                channel: Y,
                type: J,
                position: $,
                align: X,
                positionLayerClassName: Q,
                closeOnModalOuterClick: ee = !1,
                parentModalKey: et,
            } = e,
            en = l.useRef(null),
            ei = l.useRef(!1),
            el = l.useRef(null),
            es = l.useRef(null),
            { drawerWidth: er, handleDrawerResizeHandleMouseDown: ea } = ((e) => {
                let { positionContainerRef: t, drawerRef: n, orientation: i } = e,
                    s = (0, d.bG)([w.Ay], () => w.Ay.expressionPickerWidth),
                    [r, a] = l.useState(window.innerWidth),
                    [c, u] = l.useState(s ?? D.wp.MIN),
                    h = l.useMemo(() => {
                        switch (c) {
                            case D.wp.MIN:
                                return 498;
                            case D.wp.MAX:
                                return null;
                            default:
                                return c;
                        }
                    }, [c]),
                    m = l.useCallback(
                        (e) => {
                            let t = e >= r ? D.wp.MAX : e <= 498 ? D.wp.MIN : e;
                            null == t && null != n.current && (n.current.style.width = ""),
                                _.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                u(t);
                        },
                        [n, r],
                    ),
                    p = (0, A.A)({
                        initialElementDimension: h,
                        maxDimension: r,
                        minDimension: 498,
                        resizableDomNodeRef: n,
                        onElementResize: m,
                        orientation: i,
                    });
                return (
                    l.useEffect(() => {
                        let e = o().debounce(() => {
                            null != t.current && a(t.current.offsetWidth);
                        }, 500);
                        return (
                            window.addEventListener("resize", e),
                            () => {
                                window.removeEventListener("resize", e);
                            }
                        );
                    }, [t]),
                    l.useLayoutEffect(() => {
                        null != t.current && a(t.current.offsetWidth);
                    }, [t]),
                    {
                        drawerWidth: h,
                        handleDrawerResizeHandleMouseDown: l.useCallback(
                            (e) => {
                                e.stopPropagation(), null != t.current && a(t.current.offsetWidth), p(e);
                            },
                            [t, p],
                        ),
                    }
                );
            })({
                positionContainerRef: en,
                drawerRef: es,
                orientation: "left" === X ? A.R.HORIZONTAL_RIGHT : A.R.HORIZONTAL_LEFT,
            }),
            eo = (0, k.RQ)((e) => e.activeView),
            ec = (0, T.ZO)(Y),
            { renderWindow: eu, windowDispatch: ed } = l.useContext(S.Ay),
            eh = (0, d.bG)([j.A], () => !j.A.hasLoadedStickerPacks),
            em = (0, b.tj)({ location: "expression_picker" }),
            ep = (0, O.z)("expression_picker"),
            ef = (0, d.bG)([L.A], () => L.A.isOpen()),
            eg = null != et,
            e_ = (0, m.useIsModalAtTop)(et ?? ""),
            ex = J.gifs?.allowSending && !c.Fr && null != s,
            eA = J.stickers?.allowSending && null != p,
            eC = !J.expressionPicker?.onlyEmojis && (ex || eA),
            eE = l.useCallback(
                (e) => {
                    if ((!eg && (0, m.hasAnyModalOpen)()) || (eg && !(e_ && ee)) || ef || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, u.vq)(t) && null != t.closest("." + D.VQ)) return;
                    for (; (0, u.vq)(t); ) {
                        if (
                            t === es.current ||
                            "true" === t.getAttribute("data-menu-item") ||
                            "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                            "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                        )
                            return;
                        t = t.parentNode;
                    }
                    (0, k.v8)();
                    let n = (0, u.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && M._.dispatchToLastSubscribed(U.jej.TEXTAREA_FOCUS);
                },
                [ee, e_, eg, ef],
            ),
            eI = l.useCallback(() => {
                (0, k.v8)();
            }, []);
        l.useLayoutEffect(() => {
            let e = () => {
                eo === D.kx.GIF && (0, k.v8)();
            };
            return (
                eu.addEventListener("mousedown", eE),
                eu.addEventListener("contextmenu", eE),
                ed.subscribe(U.jej.POPOUT_CLOSE, eI),
                M._.subscribe(U.jej.CLOSE_GIF_PICKER, e),
                () => {
                    eu.removeEventListener("mousedown", eE),
                        eu.removeEventListener("contextmenu", eE),
                        ed.unsubscribe(U.jej.POPOUT_CLOSE, eI),
                        M._.unsubscribe(U.jej.CLOSE_GIF_PICKER, e);
                }
            );
        }, [eo, eI, eE, eu, ed]),
            (0, f.t)(en);
        let [ev, ey] = (0, E.kn)(em ? [h.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [eS, eb] = l.useState(!1);
        l.useEffect(() => {
            eo === D.kx.SOUNDBOARD && eb(!0);
        }, [eo]),
            l.useEffect(
                () => () => {
                    eS && ey(V.i.TAKE_ACTION);
                },
                [eS, ey],
            ),
            l.useEffect(() => {
                (0, k.Ri)("");
            }, []),
            l.useEffect(() => {
                ((!eg && (0, m.hasAnyModalOpen)()) || (eg && !e_)) && (0, k.v8)();
            }, [e_, eg]),
            l.useEffect(() => {
                null != es.current &&
                    !ei.current &&
                    (eo === D.kx.EMOJI
                        ? el?.current?.onPickerOpen != null && (el?.current?.onPickerOpen(), (ei.current = !0))
                        : eo === D.kx.STICKER
                          ? el?.current?.onPickerOpen == null || eh || (el?.current?.onPickerOpen(), (ei.current = !0))
                          : (C.Ay.trackWithMetadata(U.HAw.EXPRESSION_PICKER_OPENED, {
                                width: es.current.offsetWidth,
                                tab: eo,
                                badged: !1,
                            }),
                            (ei.current = !0)));
            });
        let eN = l.useCallback((e, t) => Z?.(e, "emoji_picker", t), [Z]),
            eT = l.useCallback((e, t) => Z?.(e, "soundboard_picker", t), [Z]),
            ej = J.soundmoji?.allowSending === !0 && null != Z,
            eR = ep && null != q && J.expressionPicker?.onlyEmojis !== !0;
        l.useEffect(() => {
            eo !== D.kx.KAOMOJI || eR || (0, k.U)(D.kx.EMOJI);
        }, [eo, eR]);
        let ew = "left" === X ? "right" : "left",
            eL = null != Q ? Q : "left" === X ? W.sj : W.Jg,
            eM = ex
                ? (0, i.jsx)(z, {
                      id: G.g9,
                      "aria-controls": G.ni,
                      "aria-selected": eo === D.kx.GIF,
                      isActive: eo === D.kx.GIF,
                      viewType: D.kx.GIF,
                      children: H.intl.string(H.t["6gUTsS"]),
                  })
                : null,
            ek = eA
                ? (0, i.jsx)(z, {
                      id: B.LD,
                      "aria-controls": B.GX,
                      "aria-selected": eo === D.kx.STICKER,
                      isActive: eo === D.kx.STICKER,
                      autoFocus: !ec,
                      viewType: D.kx.STICKER,
                      children: (0, i.jsx)("div", { className: W.dG, children: H.intl.string(H.t.nf1s3u) }),
                  })
                : null,
            eO = (0, i.jsx)(z, {
                id: G.k1,
                "aria-controls": G.Do,
                "aria-selected": eo === D.kx.EMOJI,
                isActive: eo === D.kx.EMOJI,
                viewType: D.kx.EMOJI,
                children: H.intl.string(H.t.Xu3wE3),
            });
        return (0, i.jsx)(x.A, {
            section: U.JJy.EXPRESSION_PICKER,
            children: (0, i.jsx)(y.nE, {
                className: r()(W.T8, eL),
                targetRef: t,
                position: $,
                align: X,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, i.jsx)("section", {
                        className: r()(W.V6, { [W.D0]: !eC }),
                        ref: en,
                        role: "dialog",
                        "aria-label": H.intl.string(H.t.Utlwvi),
                        children: t
                            ? (0, i.jsxs)("div", {
                                  className: W.jP,
                                  style: { width: null == er ? void 0 : er, [X]: 0 },
                                  ref: es,
                                  children: [
                                      (0, i.jsx)("div", { className: W.Di, onMouseDown: ea, style: { [ew]: -2 } }),
                                      (0, i.jsxs)("div", {
                                          className: W.FG,
                                          children: [
                                              eC
                                                  ? (0, i.jsx)("nav", {
                                                        className: W.C$,
                                                        children: (0, i.jsxs)("div", {
                                                            className: W.CT,
                                                            role: "tablist",
                                                            "aria-label": H.intl.string(H.t["2j4Vgd"]),
                                                            children: [
                                                                eM,
                                                                ek,
                                                                eO,
                                                                em &&
                                                                    ej &&
                                                                    (0, i.jsx)(z, {
                                                                        id: G.N6,
                                                                        "aria-controls": G.AA,
                                                                        "aria-selected": eo === D.kx.SOUNDBOARD,
                                                                        isActive: eo === D.kx.SOUNDBOARD,
                                                                        viewType: D.kx.SOUNDBOARD,
                                                                        children: (0, i.jsxs)("div", {
                                                                            className: W.sd,
                                                                            children: [
                                                                                H.intl.string(H.t.EHlAMc),
                                                                                null != ev &&
                                                                                    (0, i.jsx)(g.Lp, {
                                                                                        text: H.intl.string(H.t.y2b7CA),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                eR
                                                                    ? (0, i.jsx)(z, {
                                                                          id: G.W3,
                                                                          "aria-controls": G.pE,
                                                                          "aria-selected": eo === D.kx.KAOMOJI,
                                                                          isActive: eo === D.kx.KAOMOJI,
                                                                          viewType: D.kx.KAOMOJI,
                                                                          "aria-label": H.intl.string(H.t["2pR2JI"]),
                                                                          children: "^▽^",
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              eo === D.kx.STICKER && eA
                                                  ? (0, i.jsx)(R.A, {
                                                        isLoading: eh,
                                                        channel: Y,
                                                        containerWidth: er,
                                                        onSelectSticker: p,
                                                        closePopout: eI,
                                                        ref: (e) => {
                                                            el.current = e;
                                                        },
                                                    })
                                                  : null,
                                              eo === D.kx.GIF && ex
                                                  ? (0, i.jsx)(v.A, {
                                                        onSelectGIF: s,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              eo === D.kx.EMOJI
                                                  ? (0, i.jsx)(I.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: Y,
                                                        containerWidth: er,
                                                        emojiSize: null != er && er < K ? G.as.MEDIUM : G.as.LARGE,
                                                        pickerIntention:
                                                            J.expressionPicker?.emojiIntention ?? F.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == Y || null != Y.guild_id,
                                                        closePopout: eI,
                                                        onSelectEmoji: a,
                                                        onSelectSoundmoji: eN,
                                                        ref: (e) => {
                                                            el.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            J.soundmoji?.allowSending === !0,
                                                    })
                                                  : null,
                                              eo === D.kx.SOUNDBOARD
                                                  ? (0, i.jsx)("div", {
                                                        className: W.z,
                                                        children: (0, i.jsx)(N.A, {
                                                            guildId: Y.guild_id,
                                                            channel: Y,
                                                            containerWidth: er,
                                                            onClose: eI,
                                                            onSelect: eT,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, i.jsx)("div", { className: W.BG, children: e }),
                                                            inExpressionPicker: !0,
                                                            shouldValidateSelectedSound: !0,
                                                        }),
                                                    })
                                                  : null,
                                              eR && eo === D.kx.KAOMOJI ? (0, i.jsx)(P.A, { onSelect: q }) : null,
                                          ],
                                      }),
                                  ],
                              })
                            : null,
                    });
                },
            }),
        });
    });
