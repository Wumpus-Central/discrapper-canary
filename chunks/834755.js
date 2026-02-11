"use strict";
n.d(t, { A: () => K });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
    u = n(607399),
    c = n(621466),
    d = n(311907),
    _ = n(554146),
    f = n(192308),
    h = n(397927),
    p = n(817281),
    g = n(820284),
    E = n(761929),
    A = n(58149),
    I = n(379848),
    T = n(937773),
    y = n(855057),
    S = n(750506),
    v = n(267102),
    C = n(704591),
    b = n(989799),
    N = n(256449),
    R = n(679382),
    O = n(669201),
    D = n(964404),
    L = n(712687),
    w = n(203982),
    x = n(151271),
    P = n(698279),
    M = n(652215),
    k = n(49999),
    U = n(732139),
    G = n(307731),
    F = n(823894),
    V = n(985018),
    B = n(228539);
let j = 498 + U.as.MEDIUM,
    H = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: a = !1, "aria-controls": o, ...l } = e;
        return (0, r.jsx)(h.DUT, {
            role: "tab",
            autoFocus: a,
            "aria-controls": t ? o : void 0,
            ...l,
            onClick: () => {
                A.Ay.trackWithMetadata(M.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, x.U)(i);
            },
            "aria-current": t ? "page" : void 0,
            className: s()(n, B.oi, B.pc, { [B.Mv]: t }),
        });
    }),
    Y = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            a = (0, d.bG)([D.Ay], () => D.Ay.expressionPickerWidth),
            [s, o] = i.useState(window.innerWidth),
            [u, c] = i.useState(a ?? P.wp.MIN),
            _ = i.useMemo(() => {
                switch (u) {
                    case P.wp.MIN:
                        return 498;
                    case P.wp.MAX:
                        return null;
                    default:
                        return u;
                }
            }, [u]),
            f = i.useCallback(
                (e) => {
                    let t = e >= s ? P.wp.MAX : e <= 498 ? P.wp.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ""),
                        p.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                        c(t);
                },
                [n, s],
            ),
            h = (0, E.A)({
                initialElementDimension: _,
                maxDimension: s,
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
                        e.stopPropagation(), null != t.current && o(t.current.offsetWidth), h(e);
                    },
                    [t, h],
                ),
            }
        );
    };
function W(e) {
    let {
            positionTargetRef: t,
            hideGifFavorites: n,
            onSelectGIF: a,
            onSelectEmoji: o,
            onSelectSticker: l,
            onSelectSound: p,
            channel: D,
            type: W,
            position: K,
            align: $,
            positionLayerClassName: z,
            closeOnModalOuterClick: q = !1,
            parentModalKey: X,
        } = e,
        Z = i.useRef(null),
        Q = i.useRef(!1),
        J = i.useRef(null),
        ee = i.useRef(null),
        { drawerWidth: et, handleDrawerResizeHandleMouseDown: en } = Y({
            positionContainerRef: Z,
            drawerRef: ee,
            orientation: "left" === $ ? E.R.HORIZONTAL_RIGHT : E.R.HORIZONTAL_LEFT,
        }),
        er = (0, x.RQ)((e) => e.activeView),
        ei = (0, N.ZO)(D),
        { renderWindow: ea, windowDispatch: es } = i.useContext(v.Ay),
        eo = (0, d.bG)([R.A], () => !R.A.hasLoadedStickerPacks),
        el = (0, C.tj)({ location: "expression_picker" }),
        eu = (0, d.bG)([L.A], () => L.A.isOpen()),
        ec = null != X,
        ed = (0, f.useIsModalAtTop)(X ?? ""),
        e_ = W.gifs?.allowSending && !u.Fr && null != a,
        ef = W.stickers?.allowSending && null != l,
        eh = !W.expressionPicker?.onlyEmojis && (e_ || ef),
        ep = i.useCallback(
            (e) => {
                if ((!ec && (0, f.hasAnyModalOpen)()) || (ec && !(ed && q)) || eu || e.defaultPrevented) return;
                let { target: t } = e;
                if ((0, c.vq)(t) && null != t.closest("." + P.VQ)) return;
                for (; (0, c.vq)(t); ) {
                    if (
                        t === ee.current ||
                        "true" === t.getAttribute("data-menu-item") ||
                        "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                        "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                    )
                        return;
                    t = t.parentNode;
                }
                (0, x.v8)();
                let n = (0, c.BF)(e)?.activeElement;
                (null == n || "BODY" === n.tagName) && w._.dispatchToLastSubscribed(M.jej.TEXTAREA_FOCUS);
            },
            [q, ed, ec, eu],
        ),
        em = i.useCallback(() => {
            (0, x.v8)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            er === P.kx.GIF && (0, x.v8)();
        };
        return (
            ea.addEventListener("mousedown", ep),
            ea.addEventListener("contextmenu", ep),
            es.subscribe(M.jej.POPOUT_CLOSE, em),
            w._.subscribe(M.jej.CLOSE_GIF_PICKER, e),
            () => {
                ea.removeEventListener("mousedown", ep),
                    ea.removeEventListener("contextmenu", ep),
                    es.unsubscribe(M.jej.POPOUT_CLOSE, em),
                    w._.unsubscribe(M.jej.CLOSE_GIF_PICKER, e);
            }
        );
    }, [er, em, ep, ea, es]),
        (0, h.tjt)(Z);
    let [eg, eE] = (0, I.kn)(el ? [_.M.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eA, eI] = i.useState(!1);
    i.useEffect(() => {
        er === P.kx.SOUNDBOARD && eI(!0);
    }, [er]),
        i.useEffect(
            () => () => {
                eA && eE(k.i.TAKE_ACTION);
            },
            [eA, eE],
        ),
        i.useEffect(() => {
            (0, x.Ri)("");
        }, []),
        i.useEffect(() => {
            ((!ec && (0, f.hasAnyModalOpen)()) || (ec && !ed)) && (0, x.v8)();
        }, [ed, ec]),
        i.useEffect(() => {
            null != ee.current &&
                !Q.current &&
                (er === P.kx.EMOJI
                    ? J?.current?.onPickerOpen != null && (J?.current?.onPickerOpen(), (Q.current = !0))
                    : er === P.kx.STICKER
                      ? J?.current?.onPickerOpen == null || eo || (J?.current?.onPickerOpen(), (Q.current = !0))
                      : (A.Ay.trackWithMetadata(M.HAw.EXPRESSION_PICKER_OPENED, {
                            width: ee.current.offsetWidth,
                            tab: er,
                            badged: !1,
                        }),
                        (Q.current = !0)));
        });
    let eT = i.useCallback((e, t) => p?.(e, "emoji_picker", t), [p]),
        ey = i.useCallback((e, t) => p?.(e, "soundboard_picker", t), [p]),
        eS = W.soundmoji?.allowSending === !0 && null != p,
        ev = "left" === $ ? "right" : "left",
        eC = null != z ? z : "left" === $ ? B.sj : B.Jg,
        eb = e_
            ? (0, r.jsx)(H, {
                  id: U.g9,
                  "aria-controls": U.ni,
                  "aria-selected": er === P.kx.GIF,
                  isActive: er === P.kx.GIF,
                  viewType: P.kx.GIF,
                  children: V.intl.string(V.t["6gUTsS"]),
              })
            : null,
        eN = ef
            ? (0, r.jsx)(H, {
                  id: F.LD,
                  "aria-controls": F.GX,
                  "aria-selected": er === P.kx.STICKER,
                  isActive: er === P.kx.STICKER,
                  autoFocus: !ei,
                  viewType: P.kx.STICKER,
                  children: (0, r.jsx)("div", { className: B.dG, children: V.intl.string(V.t.nf1s3u) }),
              })
            : null,
        eR = (0, r.jsx)(H, {
            id: U.k1,
            "aria-controls": U.Do,
            "aria-selected": er === P.kx.EMOJI,
            isActive: er === P.kx.EMOJI,
            viewType: P.kx.EMOJI,
            children: V.intl.string(V.t.Xu3wE3),
        });
    return (0, r.jsx)(g.A, {
        section: M.JJy.EXPRESSION_PICKER,
        children: (0, r.jsx)(S.nE, {
            className: s()(B.T8, eC),
            targetRef: t,
            position: K,
            align: $,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)("section", {
                    className: s()(B.V6, { [B.D0]: !eh }),
                    ref: Z,
                    role: "dialog",
                    "aria-label": V.intl.string(V.t.Utlwvi),
                    children: t
                        ? (0, r.jsxs)("div", {
                              className: B.jP,
                              style: { width: null == et ? void 0 : et, [$]: 0 },
                              ref: ee,
                              children: [
                                  (0, r.jsx)("div", { className: B.Di, onMouseDown: en, style: { [ev]: -2 } }),
                                  (0, r.jsxs)("div", {
                                      className: B.FG,
                                      children: [
                                          eh
                                              ? (0, r.jsx)("nav", {
                                                    className: B.C$,
                                                    children: (0, r.jsxs)("div", {
                                                        className: B.CT,
                                                        role: "tablist",
                                                        "aria-label": V.intl.string(V.t["2j4Vgd"]),
                                                        children: [
                                                            eb,
                                                            eN,
                                                            eR,
                                                            el &&
                                                                eS &&
                                                                (0, r.jsx)(H, {
                                                                    id: U.N6,
                                                                    "aria-controls": U.AA,
                                                                    "aria-selected": er === P.kx.SOUNDBOARD,
                                                                    isActive: er === P.kx.SOUNDBOARD,
                                                                    viewType: P.kx.SOUNDBOARD,
                                                                    children: (0, r.jsxs)("div", {
                                                                        className: B.sd,
                                                                        children: [
                                                                            V.intl.string(V.t.EHlAMc),
                                                                            null != eg &&
                                                                                (0, r.jsx)(h.LpS, {
                                                                                    text: V.intl.string(V.t.y2b7CA),
                                                                                }),
                                                                        ],
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                })
                                              : null,
                                          er === P.kx.STICKER && ef
                                              ? (0, r.jsx)(O.A, {
                                                    isLoading: eo,
                                                    channel: D,
                                                    containerWidth: et,
                                                    onSelectSticker: l,
                                                    closePopout: em,
                                                    ref: (e) => {
                                                        J.current = e;
                                                    },
                                                })
                                              : null,
                                          er === P.kx.GIF && e_
                                              ? (0, r.jsx)(y.A, { onSelectGIF: a, hideFavorites: n, persistSearch: !0 })
                                              : null,
                                          er === P.kx.EMOJI
                                              ? (0, r.jsx)(T.A, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eh
                                                        ? T.f.TABS_EXPRESSION_PICKER
                                                        : T.f.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: D,
                                                    containerWidth: et,
                                                    emojiSize: null != et && et < j ? U.as.MEDIUM : U.as.LARGE,
                                                    pickerIntention: G.b_.CHAT,
                                                    closePopout: em,
                                                    onSelectEmoji: o,
                                                    onSelectSoundmoji: eT,
                                                    ref: (e) => {
                                                        J.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker: W.soundmoji?.allowSending === !0,
                                                })
                                              : null,
                                          er === P.kx.SOUNDBOARD
                                              ? (0, r.jsx)("div", {
                                                    className: B.z,
                                                    children: (0, r.jsx)(b.A, {
                                                        guildId: D.guild_id,
                                                        channel: D,
                                                        containerWidth: et,
                                                        onClose: em,
                                                        onSelect: ey,
                                                        analyticsSource: "expression-picker",
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)("div", { className: B.BG, children: e }),
                                                        inExpressionPicker: !0,
                                                        shouldValidateSelectedSound: !0,
                                                    }),
                                                })
                                              : null,
                                      ],
                                  }),
                              ],
                          })
                        : null,
                });
            },
        }),
    });
}
let K = i.memo(W);
