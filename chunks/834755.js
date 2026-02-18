"use strict";
n.d(t, { A: () => W });
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
    A = n(379848),
    I = n(937773),
    T = n(855057),
    S = n(750506),
    y = n(267102),
    v = n(704591),
    N = n(989799),
    C = n(256449),
    b = n(679382),
    R = n(669201),
    O = n(964404),
    D = n(712687),
    L = n(203982),
    w = n(151271),
    x = n(698279),
    M = n(652215),
    P = n(49999),
    k = n(732139),
    U = n(307731),
    G = n(823894),
    F = n(985018),
    V = n(228539);
let B = 498 + k.as.MEDIUM,
    H = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: s = !1, "aria-controls": o, ...l } = e;
        return (0, r.jsx)(p.DUT, {
            role: "tab",
            autoFocus: s,
            "aria-controls": t ? o : void 0,
            ...l,
            onClick: () => {
                g.Ay.trackWithMetadata(M.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, w.U)(i);
            },
            "aria-current": t ? "page" : void 0,
            className: a()(n, V.oi, V.pc, { [V.Mv]: t }),
        });
    }),
    j = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            s = (0, d.bG)([O.Ay], () => O.Ay.expressionPickerWidth),
            [a, o] = i.useState(window.innerWidth),
            [u, c] = i.useState(s ?? x.wp.MIN),
            _ = i.useMemo(() => {
                switch (u) {
                    case x.wp.MIN:
                        return 498;
                    case x.wp.MAX:
                        return null;
                    default:
                        return u;
                }
            }, [u]),
            f = i.useCallback(
                (e) => {
                    let t = e >= a ? x.wp.MAX : e <= 498 ? x.wp.MIN : e;
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
function Y(e) {
    let {
            positionTargetRef: t,
            hideGifFavorites: n,
            onSelectGIF: s,
            onSelectEmoji: o,
            onSelectSticker: l,
            onSelectSound: h,
            channel: O,
            type: Y,
            position: W,
            align: K,
            positionLayerClassName: z,
            closeOnModalOuterClick: $ = !1,
            parentModalKey: q,
        } = e,
        Z = i.useRef(null),
        X = i.useRef(!1),
        Q = i.useRef(null),
        J = i.useRef(null),
        { drawerWidth: ee, handleDrawerResizeHandleMouseDown: et } = j({
            positionContainerRef: Z,
            drawerRef: J,
            orientation: "left" === K ? E.R.HORIZONTAL_RIGHT : E.R.HORIZONTAL_LEFT,
        }),
        en = (0, w.RQ)((e) => e.activeView),
        er = (0, C.ZO)(O),
        { renderWindow: ei, windowDispatch: es } = i.useContext(y.Ay),
        ea = (0, d.bG)([b.A], () => !b.A.hasLoadedStickerPacks),
        eo = (0, v.tj)({ location: "expression_picker" }),
        el = (0, d.bG)([D.A], () => D.A.isOpen()),
        eu = null != q,
        ec = (0, f.useIsModalAtTop)(q ?? ""),
        ed = Y.gifs?.allowSending && !u.Fr && null != s,
        e_ = Y.stickers?.allowSending && null != l,
        ef = !Y.expressionPicker?.onlyEmojis && (ed || e_),
        ep = i.useCallback(
            (e) => {
                if ((!eu && (0, f.hasAnyModalOpen)()) || (eu && !(ec && $)) || el || e.defaultPrevented) return;
                let { target: t } = e;
                if ((0, c.vq)(t) && null != t.closest("." + x.VQ)) return;
                for (; (0, c.vq)(t); ) {
                    if (
                        t === J.current ||
                        "true" === t.getAttribute("data-menu-item") ||
                        "true" === t.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                        "true" === t.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                    )
                        return;
                    t = t.parentNode;
                }
                (0, w.v8)();
                let n = (0, c.BF)(e)?.activeElement;
                (null == n || "BODY" === n.tagName) && L._.dispatchToLastSubscribed(M.jej.TEXTAREA_FOCUS);
            },
            [$, ec, eu, el],
        ),
        eh = i.useCallback(() => {
            (0, w.v8)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            en === x.kx.GIF && (0, w.v8)();
        };
        return (
            ei.addEventListener("mousedown", ep),
            ei.addEventListener("contextmenu", ep),
            es.subscribe(M.jej.POPOUT_CLOSE, eh),
            L._.subscribe(M.jej.CLOSE_GIF_PICKER, e),
            () => {
                ei.removeEventListener("mousedown", ep),
                    ei.removeEventListener("contextmenu", ep),
                    es.unsubscribe(M.jej.POPOUT_CLOSE, eh),
                    L._.unsubscribe(M.jej.CLOSE_GIF_PICKER, e);
            }
        );
    }, [en, eh, ep, ei, es]),
        (0, p.tjt)(Z);
    let [em, eE] = (0, A.kn)(eo ? [_.M.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eg, eA] = i.useState(!1);
    i.useEffect(() => {
        en === x.kx.SOUNDBOARD && eA(!0);
    }, [en]),
        i.useEffect(
            () => () => {
                eg && eE(P.i.TAKE_ACTION);
            },
            [eg, eE],
        ),
        i.useEffect(() => {
            (0, w.Ri)("");
        }, []),
        i.useEffect(() => {
            ((!eu && (0, f.hasAnyModalOpen)()) || (eu && !ec)) && (0, w.v8)();
        }, [ec, eu]),
        i.useEffect(() => {
            null != J.current &&
                !X.current &&
                (en === x.kx.EMOJI
                    ? Q?.current?.onPickerOpen != null && (Q?.current?.onPickerOpen(), (X.current = !0))
                    : en === x.kx.STICKER
                      ? Q?.current?.onPickerOpen == null || ea || (Q?.current?.onPickerOpen(), (X.current = !0))
                      : (g.Ay.trackWithMetadata(M.HAw.EXPRESSION_PICKER_OPENED, {
                            width: J.current.offsetWidth,
                            tab: en,
                            badged: !1,
                        }),
                        (X.current = !0)));
        });
    let eI = i.useCallback((e, t) => h?.(e, "emoji_picker", t), [h]),
        eT = i.useCallback((e, t) => h?.(e, "soundboard_picker", t), [h]),
        eS = Y.soundmoji?.allowSending === !0 && null != h,
        ey = "left" === K ? "right" : "left",
        ev = null != z ? z : "left" === K ? V.sj : V.Jg,
        eN = ed
            ? (0, r.jsx)(H, {
                  id: k.g9,
                  "aria-controls": k.ni,
                  "aria-selected": en === x.kx.GIF,
                  isActive: en === x.kx.GIF,
                  viewType: x.kx.GIF,
                  children: F.intl.string(F.t["6gUTsS"]),
              })
            : null,
        eC = e_
            ? (0, r.jsx)(H, {
                  id: G.LD,
                  "aria-controls": G.GX,
                  "aria-selected": en === x.kx.STICKER,
                  isActive: en === x.kx.STICKER,
                  autoFocus: !er,
                  viewType: x.kx.STICKER,
                  children: (0, r.jsx)("div", { className: V.dG, children: F.intl.string(F.t.nf1s3u) }),
              })
            : null,
        eb = (0, r.jsx)(H, {
            id: k.k1,
            "aria-controls": k.Do,
            "aria-selected": en === x.kx.EMOJI,
            isActive: en === x.kx.EMOJI,
            viewType: x.kx.EMOJI,
            children: F.intl.string(F.t.Xu3wE3),
        });
    return (0, r.jsx)(m.A, {
        section: M.JJy.EXPRESSION_PICKER,
        children: (0, r.jsx)(S.nE, {
            className: a()(V.T8, ev),
            targetRef: t,
            position: W,
            align: K,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)("section", {
                    className: a()(V.V6, { [V.D0]: !ef }),
                    ref: Z,
                    role: "dialog",
                    "aria-label": F.intl.string(F.t.Utlwvi),
                    children: t
                        ? (0, r.jsxs)("div", {
                              className: V.jP,
                              style: { width: null == ee ? void 0 : ee, [K]: 0 },
                              ref: J,
                              children: [
                                  (0, r.jsx)("div", { className: V.Di, onMouseDown: et, style: { [ey]: -2 } }),
                                  (0, r.jsxs)("div", {
                                      className: V.FG,
                                      children: [
                                          ef
                                              ? (0, r.jsx)("nav", {
                                                    className: V.C$,
                                                    children: (0, r.jsxs)("div", {
                                                        className: V.CT,
                                                        role: "tablist",
                                                        "aria-label": F.intl.string(F.t["2j4Vgd"]),
                                                        children: [
                                                            eN,
                                                            eC,
                                                            eb,
                                                            eo &&
                                                                eS &&
                                                                (0, r.jsx)(H, {
                                                                    id: k.N6,
                                                                    "aria-controls": k.AA,
                                                                    "aria-selected": en === x.kx.SOUNDBOARD,
                                                                    isActive: en === x.kx.SOUNDBOARD,
                                                                    viewType: x.kx.SOUNDBOARD,
                                                                    children: (0, r.jsxs)("div", {
                                                                        className: V.sd,
                                                                        children: [
                                                                            F.intl.string(F.t.EHlAMc),
                                                                            null != em &&
                                                                                (0, r.jsx)(p.LpS, {
                                                                                    text: F.intl.string(F.t.y2b7CA),
                                                                                }),
                                                                        ],
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                })
                                              : null,
                                          en === x.kx.STICKER && e_
                                              ? (0, r.jsx)(R.A, {
                                                    isLoading: ea,
                                                    channel: O,
                                                    containerWidth: ee,
                                                    onSelectSticker: l,
                                                    closePopout: eh,
                                                    ref: (e) => {
                                                        Q.current = e;
                                                    },
                                                })
                                              : null,
                                          en === x.kx.GIF && ed
                                              ? (0, r.jsx)(T.A, { onSelectGIF: s, hideFavorites: n, persistSearch: !0 })
                                              : null,
                                          en === x.kx.EMOJI
                                              ? (0, r.jsx)(I.A, {
                                                    hasTabWrapper: !0,
                                                    containerContext: ef
                                                        ? I.f.TABS_EXPRESSION_PICKER
                                                        : I.f.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: O,
                                                    containerWidth: ee,
                                                    emojiSize: null != ee && ee < B ? k.as.MEDIUM : k.as.LARGE,
                                                    pickerIntention: U.b_.CHAT,
                                                    closePopout: eh,
                                                    onSelectEmoji: o,
                                                    onSelectSoundmoji: eI,
                                                    ref: (e) => {
                                                        Q.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker: Y.soundmoji?.allowSending === !0,
                                                })
                                              : null,
                                          en === x.kx.SOUNDBOARD
                                              ? (0, r.jsx)("div", {
                                                    className: V.z,
                                                    children: (0, r.jsx)(N.A, {
                                                        guildId: O.guild_id,
                                                        channel: O,
                                                        containerWidth: ee,
                                                        onClose: eh,
                                                        onSelect: eT,
                                                        analyticsSource: "expression-picker",
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)("div", { className: V.BG, children: e }),
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
let W = i.memo(Y);
