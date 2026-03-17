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
    p = n(397927),
    h = n(817281),
    m = n(820284),
    E = n(761929),
    g = n(58149),
    A = n(932001),
    I = n(937773),
    T = n(855057),
    S = n(750506),
    y = n(267102),
    v = n(704591),
    N = n(989799),
    C = n(256449),
    R = n(679382),
    O = n(669201),
    b = n(964404),
    D = n(712687),
    L = n(203982),
    w = n(151271),
    M = n(634),
    x = n(999061),
    P = n(698279),
    k = n(652215),
    U = n(49999),
    G = n(732139),
    F = n(307731),
    V = n(823894),
    B = n(985018),
    H = n(228539);
let j = 498 + G.as.MEDIUM,
    Y = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: s = !1, "aria-controls": o, ...l } = e;
        return (0, r.jsx)(p.DUT, {
            role: "tab",
            autoFocus: s,
            "aria-controls": t ? o : void 0,
            ...l,
            onClick: () => {
                g.Ay.trackWithMetadata(k.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, w.U)(i);
            },
            "aria-current": t ? "page" : void 0,
            className: a()(n, H.oi, H.pc, { [H.Mv]: t }),
        });
    }),
    W = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            s = (0, d.bG)([b.Ay], () => b.Ay.expressionPickerWidth),
            [a, o] = i.useState(window.innerWidth),
            [u, c] = i.useState(s ?? P.wp.MIN),
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
                    let t = e >= a ? P.wp.MAX : e <= 498 ? P.wp.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ""),
                        h.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                        c(t);
                },
                [n, a],
            ),
            p = (0, E.A)({
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
    };
function K(e) {
    let {
            positionTargetRef: t,
            hideGifFavorites: n,
            onSelectGIF: s,
            onSelectEmoji: o,
            onSelectSticker: l,
            onSelectSound: h,
            onSelectKaomoji: b,
            channel: K,
            type: $,
            position: z,
            align: q,
            positionLayerClassName: Z,
            closeOnModalOuterClick: X = !1,
            parentModalKey: Q,
        } = e,
        J = i.useRef(null),
        ee = i.useRef(!1),
        et = i.useRef(null),
        en = i.useRef(null),
        { drawerWidth: er, handleDrawerResizeHandleMouseDown: ei } = W({
            positionContainerRef: J,
            drawerRef: en,
            orientation: "left" === q ? E.R.HORIZONTAL_RIGHT : E.R.HORIZONTAL_LEFT,
        }),
        es = (0, w.RQ)((e) => e.activeView),
        ea = (0, C.ZO)(K),
        { renderWindow: eo, windowDispatch: el } = i.useContext(y.Ay),
        eu = (0, d.bG)([R.A], () => !R.A.hasLoadedStickerPacks),
        ec = (0, v.tj)({ location: "expression_picker" }),
        ed = (0, M.z)("expression_picker"),
        e_ = (0, d.bG)([D.A], () => D.A.isOpen()),
        ef = null != Q,
        ep = (0, f.useIsModalAtTop)(Q ?? ""),
        eh = $.gifs?.allowSending && !u.Fr && null != s,
        em = $.stickers?.allowSending && null != l,
        eE = !$.expressionPicker?.onlyEmojis && (eh || em),
        eg = i.useCallback(
            (e) => {
                if ((!ef && (0, f.hasAnyModalOpen)()) || (ef && !(ep && X)) || e_ || e.defaultPrevented) return;
                let { target: t } = e;
                if ((0, c.vq)(t) && null != t.closest("." + P.VQ)) return;
                for (; (0, c.vq)(t); ) {
                    if (
                        t === en.current ||
                        "true" === t.getAttribute("data-menu-item") ||
                        "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                        "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                    )
                        return;
                    t = t.parentNode;
                }
                (0, w.v8)();
                let n = (0, c.BF)(e)?.activeElement;
                (null == n || "BODY" === n.tagName) && L._.dispatchToLastSubscribed(k.jej.TEXTAREA_FOCUS);
            },
            [X, ep, ef, e_],
        ),
        eA = i.useCallback(() => {
            (0, w.v8)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            es === P.kx.GIF && (0, w.v8)();
        };
        return (
            eo.addEventListener("mousedown", eg),
            eo.addEventListener("contextmenu", eg),
            el.subscribe(k.jej.POPOUT_CLOSE, eA),
            L._.subscribe(k.jej.CLOSE_GIF_PICKER, e),
            () => {
                eo.removeEventListener("mousedown", eg),
                    eo.removeEventListener("contextmenu", eg),
                    el.unsubscribe(k.jej.POPOUT_CLOSE, eA),
                    L._.unsubscribe(k.jej.CLOSE_GIF_PICKER, e);
            }
        );
    }, [es, eA, eg, eo, el]),
        (0, p.tjt)(J);
    let [eI, eT] = (0, A.kn)(ec ? [_.M.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eS, ey] = i.useState(!1);
    i.useEffect(() => {
        es === P.kx.SOUNDBOARD && ey(!0);
    }, [es]),
        i.useEffect(
            () => () => {
                eS && eT(U.i.TAKE_ACTION);
            },
            [eS, eT],
        ),
        i.useEffect(() => {
            (0, w.Ri)("");
        }, []),
        i.useEffect(() => {
            ((!ef && (0, f.hasAnyModalOpen)()) || (ef && !ep)) && (0, w.v8)();
        }, [ep, ef]),
        i.useEffect(() => {
            null != en.current &&
                !ee.current &&
                (es === P.kx.EMOJI
                    ? et?.current?.onPickerOpen != null && (et?.current?.onPickerOpen(), (ee.current = !0))
                    : es === P.kx.STICKER
                      ? et?.current?.onPickerOpen == null || eu || (et?.current?.onPickerOpen(), (ee.current = !0))
                      : (g.Ay.trackWithMetadata(k.HAw.EXPRESSION_PICKER_OPENED, {
                            width: en.current.offsetWidth,
                            tab: es,
                            badged: !1,
                        }),
                        (ee.current = !0)));
        });
    let ev = i.useCallback((e, t) => h?.(e, "emoji_picker", t), [h]),
        eN = i.useCallback((e, t) => h?.(e, "soundboard_picker", t), [h]),
        eC = $.soundmoji?.allowSending === !0 && null != h,
        eR = ed && null != b && $.expressionPicker?.onlyEmojis !== !0;
    i.useEffect(() => {
        es !== P.kx.KAOMOJI || eR || (0, w.U)(P.kx.EMOJI);
    }, [es, eR]);
    let eO = "left" === q ? "right" : "left",
        eb = null != Z ? Z : "left" === q ? H.sj : H.Jg,
        eD = eh
            ? (0, r.jsx)(Y, {
                  id: G.g9,
                  "aria-controls": G.ni,
                  "aria-selected": es === P.kx.GIF,
                  isActive: es === P.kx.GIF,
                  viewType: P.kx.GIF,
                  children: B.intl.string(B.t["6gUTsS"]),
              })
            : null,
        eL = em
            ? (0, r.jsx)(Y, {
                  id: V.LD,
                  "aria-controls": V.GX,
                  "aria-selected": es === P.kx.STICKER,
                  isActive: es === P.kx.STICKER,
                  autoFocus: !ea,
                  viewType: P.kx.STICKER,
                  children: (0, r.jsx)("div", { className: H.dG, children: B.intl.string(B.t.nf1s3u) }),
              })
            : null,
        ew = (0, r.jsx)(Y, {
            id: G.k1,
            "aria-controls": G.Do,
            "aria-selected": es === P.kx.EMOJI,
            isActive: es === P.kx.EMOJI,
            viewType: P.kx.EMOJI,
            children: B.intl.string(B.t.Xu3wE3),
        });
    return (0, r.jsx)(m.A, {
        section: k.JJy.EXPRESSION_PICKER,
        children: (0, r.jsx)(S.nE, {
            className: a()(H.T8, eb),
            targetRef: t,
            position: z,
            align: q,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)("section", {
                    className: a()(H.V6, { [H.D0]: !eE }),
                    ref: J,
                    role: "dialog",
                    "aria-label": B.intl.string(B.t.Utlwvi),
                    children: t
                        ? (0, r.jsxs)("div", {
                              className: H.jP,
                              style: { width: null == er ? void 0 : er, [q]: 0 },
                              ref: en,
                              children: [
                                  (0, r.jsx)("div", { className: H.Di, onMouseDown: ei, style: { [eO]: -2 } }),
                                  (0, r.jsxs)("div", {
                                      className: H.FG,
                                      children: [
                                          eE
                                              ? (0, r.jsx)("nav", {
                                                    className: H.C$,
                                                    children: (0, r.jsxs)("div", {
                                                        className: H.CT,
                                                        role: "tablist",
                                                        "aria-label": B.intl.string(B.t["2j4Vgd"]),
                                                        children: [
                                                            eD,
                                                            eL,
                                                            ew,
                                                            ec &&
                                                                eC &&
                                                                (0, r.jsx)(Y, {
                                                                    id: G.N6,
                                                                    "aria-controls": G.AA,
                                                                    "aria-selected": es === P.kx.SOUNDBOARD,
                                                                    isActive: es === P.kx.SOUNDBOARD,
                                                                    viewType: P.kx.SOUNDBOARD,
                                                                    children: (0, r.jsxs)("div", {
                                                                        className: H.sd,
                                                                        children: [
                                                                            B.intl.string(B.t.EHlAMc),
                                                                            null != eI &&
                                                                                (0, r.jsx)(p.LpS, {
                                                                                    text: B.intl.string(B.t.y2b7CA),
                                                                                }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            eR
                                                                ? (0, r.jsx)(Y, {
                                                                      id: G.W3,
                                                                      "aria-controls": G.pE,
                                                                      "aria-selected": es === P.kx.KAOMOJI,
                                                                      isActive: es === P.kx.KAOMOJI,
                                                                      viewType: P.kx.KAOMOJI,
                                                                      "aria-label": B.intl.string(B.t["2pR2JI"]),
                                                                      children: "^▽^",
                                                                  })
                                                                : null,
                                                        ],
                                                    }),
                                                })
                                              : null,
                                          es === P.kx.STICKER && em
                                              ? (0, r.jsx)(O.A, {
                                                    isLoading: eu,
                                                    channel: K,
                                                    containerWidth: er,
                                                    onSelectSticker: l,
                                                    closePopout: eA,
                                                    ref: (e) => {
                                                        et.current = e;
                                                    },
                                                })
                                              : null,
                                          es === P.kx.GIF && eh
                                              ? (0, r.jsx)(T.A, { onSelectGIF: s, hideFavorites: n, persistSearch: !0 })
                                              : null,
                                          es === P.kx.EMOJI
                                              ? (0, r.jsx)(I.A, {
                                                    hasTabWrapper: !0,
                                                    persistSearch: !0,
                                                    channel: K,
                                                    containerWidth: er,
                                                    emojiSize: null != er && er < j ? G.as.MEDIUM : G.as.LARGE,
                                                    pickerIntention: $.expressionPicker?.emojiIntention ?? F.b_.CHAT,
                                                    closePopout: eA,
                                                    onSelectEmoji: o,
                                                    onSelectSoundmoji: ev,
                                                    ref: (e) => {
                                                        et.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker: $.soundmoji?.allowSending === !0,
                                                })
                                              : null,
                                          es === P.kx.SOUNDBOARD
                                              ? (0, r.jsx)("div", {
                                                    className: H.z,
                                                    children: (0, r.jsx)(N.A, {
                                                        guildId: K.guild_id,
                                                        channel: K,
                                                        containerWidth: er,
                                                        onClose: eA,
                                                        onSelect: eN,
                                                        analyticsSource: "expression-picker",
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)("div", { className: H.BG, children: e }),
                                                        inExpressionPicker: !0,
                                                        shouldValidateSelectedSound: !0,
                                                    }),
                                                })
                                              : null,
                                          eR && es === P.kx.KAOMOJI ? (0, r.jsx)(x.A, { onSelect: b }) : null,
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
let $ = i.memo(K);
