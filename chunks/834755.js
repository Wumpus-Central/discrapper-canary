"use strict";
n.d(t, { A: () => $ });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(735438),
    l = n.n(o),
    u = n(607399),
    c = n(621466),
    d = n(311907),
    _ = n(554146),
    f = n(192308),
    p = n(939249),
    h = n(315710),
    E = n(777666),
    m = n(817281),
    g = n(820284),
    A = n(761929),
    I = n(58149),
    T = n(932001),
    S = n(937773),
    y = n(855057),
    N = n(750506),
    v = n(267102),
    C = n(704591),
    O = n(989799),
    R = n(256449),
    b = n(679382),
    D = n(669201),
    L = n(964404),
    w = n(712687),
    M = n(203982),
    P = n(151271),
    x = n(634),
    k = n(999061),
    U = n(698279),
    G = n(652215),
    F = n(49999),
    V = n(732139),
    B = n(307731),
    H = n(823894),
    j = n(985018),
    Y = n(645264);
let W = 498 + V.as.MEDIUM,
    K = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: s = !1, "aria-controls": o, ...l } = e;
        return (0, r.jsx)(p.D, {
            role: "tab",
            autoFocus: s,
            "aria-controls": t ? o : void 0,
            ...l,
            onClick: () => {
                I.Ay.trackWithMetadata(G.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, P.U)(i);
            },
            "aria-current": t ? "page" : void 0,
            className: a()(n, Y.oi, Y.pc, { [Y.Mv]: t }),
        });
    }),
    $ = i.memo(function (e) {
        let {
                positionTargetRef: t,
                hideGifFavorites: n,
                onSelectGIF: s,
                onSelectEmoji: o,
                onSelectSticker: p,
                onSelectSound: $,
                onSelectKaomoji: z,
                channel: q,
                type: X,
                position: Q,
                align: Z,
                positionLayerClassName: J,
                closeOnModalOuterClick: ee = !1,
                parentModalKey: et,
            } = e,
            en = i.useRef(null),
            er = i.useRef(!1),
            ei = i.useRef(null),
            es = i.useRef(null),
            { drawerWidth: ea, handleDrawerResizeHandleMouseDown: eo } = ((e) => {
                let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
                    s = (0, d.bG)([L.Ay], () => L.Ay.expressionPickerWidth),
                    [a, o] = i.useState(window.innerWidth),
                    [u, c] = i.useState(s ?? U.wp.MIN),
                    _ = i.useMemo(() => {
                        switch (u) {
                            case U.wp.MIN:
                                return 498;
                            case U.wp.MAX:
                                return null;
                            default:
                                return u;
                        }
                    }, [u]),
                    f = i.useCallback(
                        (e) => {
                            let t = e >= a ? U.wp.MAX : e <= 498 ? U.wp.MIN : e;
                            null == t && null != n.current && (n.current.style.width = ""),
                                m.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                                c(t);
                        },
                        [n, a],
                    ),
                    p = (0, A.A)({
                        initialElementDimension: _,
                        maxDimension: a,
                        minDimension: 498,
                        resizableDomNodeRef: n,
                        onElementResize: f,
                        orientation: r,
                    });
                return (
                    i.useEffect(() => {
                        let e = l().debounce(() => {
                            null != t.current && o(t.current.offsetWidth);
                        }, 500);
                        return (
                            window.addEventListener("resize", e),
                            () => {
                                window.removeEventListener("resize", e);
                            }
                        );
                    }, [t]),
                    i.useLayoutEffect(() => {
                        null != t.current && o(t.current.offsetWidth);
                    }, [t]),
                    {
                        drawerWidth: _,
                        handleDrawerResizeHandleMouseDown: i.useCallback(
                            (e) => {
                                e.stopPropagation(), null != t.current && o(t.current.offsetWidth), p(e);
                            },
                            [t, p],
                        ),
                    }
                );
            })({
                positionContainerRef: en,
                drawerRef: es,
                orientation: "left" === Z ? A.R.HORIZONTAL_RIGHT : A.R.HORIZONTAL_LEFT,
            }),
            el = (0, P.RQ)((e) => e.activeView),
            eu = (0, R.ZO)(q),
            { renderWindow: ec, windowDispatch: ed } = i.useContext(v.Ay),
            e_ = (0, d.bG)([b.A], () => !b.A.hasLoadedStickerPacks),
            ef = (0, C.tj)({ location: "expression_picker" }),
            ep = (0, x.z)("expression_picker"),
            eh = (0, d.bG)([w.A], () => w.A.isOpen()),
            eE = null != et,
            em = (0, f.useIsModalAtTop)(et ?? ""),
            eg = X.gifs?.allowSending && !u.Fr && null != s,
            eA = X.stickers?.allowSending && null != p,
            eI = !X.expressionPicker?.onlyEmojis && (eg || eA),
            eT = i.useCallback(
                (e) => {
                    if ((!eE && (0, f.hasAnyModalOpen)()) || (eE && !(em && ee)) || eh || e.defaultPrevented) return;
                    let { target: t } = e;
                    if ((0, c.vq)(t) && null != t.closest("." + U.VQ)) return;
                    for (; (0, c.vq)(t); ) {
                        if (
                            t === es.current ||
                            "true" === t.getAttribute("data-menu-item") ||
                            "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                            "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                        )
                            return;
                        t = t.parentNode;
                    }
                    (0, P.v8)();
                    let n = (0, c.BF)(e)?.activeElement;
                    (null == n || "BODY" === n.tagName) && M._.dispatchToLastSubscribed(G.jej.TEXTAREA_FOCUS);
                },
                [ee, em, eE, eh],
            ),
            eS = i.useCallback(() => {
                (0, P.v8)();
            }, []);
        i.useLayoutEffect(() => {
            let e = () => {
                el === U.kx.GIF && (0, P.v8)();
            };
            return (
                ec.addEventListener("mousedown", eT),
                ec.addEventListener("contextmenu", eT),
                ed.subscribe(G.jej.POPOUT_CLOSE, eS),
                M._.subscribe(G.jej.CLOSE_GIF_PICKER, e),
                () => {
                    ec.removeEventListener("mousedown", eT),
                        ec.removeEventListener("contextmenu", eT),
                        ed.unsubscribe(G.jej.POPOUT_CLOSE, eS),
                        M._.unsubscribe(G.jej.CLOSE_GIF_PICKER, e);
                }
            );
        }, [el, eS, eT, ec, ed]),
            (0, h.t)(en);
        let [ey, eN] = (0, T.kn)(ef ? [_.M.SOUNDMOJI_BADGE] : [], void 0, !1),
            [ev, eC] = i.useState(!1);
        i.useEffect(() => {
            el === U.kx.SOUNDBOARD && eC(!0);
        }, [el]),
            i.useEffect(
                () => () => {
                    ev && eN(F.i.TAKE_ACTION);
                },
                [ev, eN],
            ),
            i.useEffect(() => {
                (0, P.Ri)("");
            }, []),
            i.useEffect(() => {
                ((!eE && (0, f.hasAnyModalOpen)()) || (eE && !em)) && (0, P.v8)();
            }, [em, eE]),
            i.useEffect(() => {
                null != es.current &&
                    !er.current &&
                    (el === U.kx.EMOJI
                        ? ei?.current?.onPickerOpen != null && (ei?.current?.onPickerOpen(), (er.current = !0))
                        : el === U.kx.STICKER
                          ? ei?.current?.onPickerOpen == null || e_ || (ei?.current?.onPickerOpen(), (er.current = !0))
                          : (I.Ay.trackWithMetadata(G.HAw.EXPRESSION_PICKER_OPENED, {
                                width: es.current.offsetWidth,
                                tab: el,
                                badged: !1,
                            }),
                            (er.current = !0)));
            });
        let eO = i.useCallback((e, t) => $?.(e, "emoji_picker", t), [$]),
            eR = i.useCallback((e, t) => $?.(e, "soundboard_picker", t), [$]),
            eb = X.soundmoji?.allowSending === !0 && null != $,
            eD = ep && null != z && X.expressionPicker?.onlyEmojis !== !0;
        i.useEffect(() => {
            el !== U.kx.KAOMOJI || eD || (0, P.U)(U.kx.EMOJI);
        }, [el, eD]);
        let eL = "left" === Z ? "right" : "left",
            ew = null != J ? J : "left" === Z ? Y.sj : Y.Jg,
            eM = eg
                ? (0, r.jsx)(K, {
                      id: V.g9,
                      "aria-controls": V.ni,
                      "aria-selected": el === U.kx.GIF,
                      isActive: el === U.kx.GIF,
                      viewType: U.kx.GIF,
                      children: j.intl.string(j.t["6gUTsS"]),
                  })
                : null,
            eP = eA
                ? (0, r.jsx)(K, {
                      id: H.LD,
                      "aria-controls": H.GX,
                      "aria-selected": el === U.kx.STICKER,
                      isActive: el === U.kx.STICKER,
                      autoFocus: !eu,
                      viewType: U.kx.STICKER,
                      children: (0, r.jsx)("div", { className: Y.dG, children: j.intl.string(j.t.nf1s3u) }),
                  })
                : null,
            ex = (0, r.jsx)(K, {
                id: V.k1,
                "aria-controls": V.Do,
                "aria-selected": el === U.kx.EMOJI,
                isActive: el === U.kx.EMOJI,
                viewType: U.kx.EMOJI,
                children: j.intl.string(j.t.Xu3wE3),
            });
        return (0, r.jsx)(g.A, {
            section: G.JJy.EXPRESSION_PICKER,
            children: (0, r.jsx)(N.nE, {
                className: a()(Y.T8, ew),
                targetRef: t,
                position: Q,
                align: Z,
                spacing: 8,
                autoInvert: !0,
                clickTrap: !0,
                children: (e) => {
                    let { isPositioned: t } = e;
                    return (0, r.jsx)("section", {
                        className: a()(Y.V6, { [Y.D0]: !eI }),
                        ref: en,
                        role: "dialog",
                        "aria-label": j.intl.string(j.t.Utlwvi),
                        children: t
                            ? (0, r.jsxs)("div", {
                                  className: Y.jP,
                                  style: { width: null == ea ? void 0 : ea, [Z]: 0 },
                                  ref: es,
                                  children: [
                                      (0, r.jsx)("div", { className: Y.Di, onMouseDown: eo, style: { [eL]: -2 } }),
                                      (0, r.jsxs)("div", {
                                          className: Y.FG,
                                          children: [
                                              eI
                                                  ? (0, r.jsx)("nav", {
                                                        className: Y.C$,
                                                        children: (0, r.jsxs)("div", {
                                                            className: Y.CT,
                                                            role: "tablist",
                                                            "aria-label": j.intl.string(j.t["2j4Vgd"]),
                                                            children: [
                                                                eM,
                                                                eP,
                                                                ex,
                                                                ef &&
                                                                    eb &&
                                                                    (0, r.jsx)(K, {
                                                                        id: V.N6,
                                                                        "aria-controls": V.AA,
                                                                        "aria-selected": el === U.kx.SOUNDBOARD,
                                                                        isActive: el === U.kx.SOUNDBOARD,
                                                                        viewType: U.kx.SOUNDBOARD,
                                                                        children: (0, r.jsxs)("div", {
                                                                            className: Y.sd,
                                                                            children: [
                                                                                j.intl.string(j.t.EHlAMc),
                                                                                null != ey &&
                                                                                    (0, r.jsx)(E.Lp, {
                                                                                        text: j.intl.string(j.t.y2b7CA),
                                                                                    }),
                                                                            ],
                                                                        }),
                                                                    }),
                                                                eD
                                                                    ? (0, r.jsx)(K, {
                                                                          id: V.W3,
                                                                          "aria-controls": V.pE,
                                                                          "aria-selected": el === U.kx.KAOMOJI,
                                                                          isActive: el === U.kx.KAOMOJI,
                                                                          viewType: U.kx.KAOMOJI,
                                                                          "aria-label": j.intl.string(j.t["2pR2JI"]),
                                                                          children: "^▽^",
                                                                      })
                                                                    : null,
                                                            ],
                                                        }),
                                                    })
                                                  : null,
                                              el === U.kx.STICKER && eA
                                                  ? (0, r.jsx)(D.A, {
                                                        isLoading: e_,
                                                        channel: q,
                                                        containerWidth: ea,
                                                        onSelectSticker: p,
                                                        closePopout: eS,
                                                        ref: (e) => {
                                                            ei.current = e;
                                                        },
                                                    })
                                                  : null,
                                              el === U.kx.GIF && eg
                                                  ? (0, r.jsx)(y.A, {
                                                        onSelectGIF: s,
                                                        hideFavorites: n,
                                                        persistSearch: !0,
                                                    })
                                                  : null,
                                              el === U.kx.EMOJI
                                                  ? (0, r.jsx)(S.A, {
                                                        hasTabWrapper: !0,
                                                        persistSearch: !0,
                                                        channel: q,
                                                        containerWidth: ea,
                                                        emojiSize: null != ea && ea < W ? V.as.MEDIUM : V.as.LARGE,
                                                        pickerIntention:
                                                            X.expressionPicker?.emojiIntention ?? B.EmojiIntention.CHAT,
                                                        showAddEmojiButton: null == q || null != q.guild_id,
                                                        closePopout: eS,
                                                        onSelectEmoji: o,
                                                        onSelectSoundmoji: eO,
                                                        ref: (e) => {
                                                            ei.current = e;
                                                        },
                                                        shouldShowSoundmojiInEmojiPicker:
                                                            X.soundmoji?.allowSending === !0,
                                                    })
                                                  : null,
                                              el === U.kx.SOUNDBOARD
                                                  ? (0, r.jsx)("div", {
                                                        className: Y.z,
                                                        children: (0, r.jsx)(O.A, {
                                                            guildId: q.guild_id,
                                                            channel: q,
                                                            containerWidth: ea,
                                                            onClose: eS,
                                                            onSelect: eR,
                                                            analyticsSource: "expression-picker",
                                                            renderHeader: (e) =>
                                                                (0, r.jsx)("div", { className: Y.BG, children: e }),
                                                            inExpressionPicker: !0,
                                                            shouldValidateSelectedSound: !0,
                                                        }),
                                                    })
                                                  : null,
                                              eD && el === U.kx.KAOMOJI ? (0, r.jsx)(k.A, { onSelect: z }) : null,
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
