"use strict";
n.d(t, { A: () => W });
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
    p = n(397927),
    h = n(817281),
    m = n(820284),
    g = n(761929),
    E = n(58149),
    A = n(379848),
    I = n(937773),
    T = n(855057),
    y = n(750506),
    S = n(267102),
    v = n(704591),
    C = n(989799),
    b = n(256449),
    N = n(679382),
    R = n(669201),
    O = n(964404),
    D = n(712687),
    L = n(203982),
    w = n(151271),
    x = n(698279),
    P = n(652215),
    M = n(49999),
    k = n(732139),
    U = n(307731),
    G = n(823894),
    V = n(985018),
    F = n(228539);
let B = 498 + k.as.MEDIUM,
    j = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: a = !1, "aria-controls": o, ...l } = e;
        return (0, r.jsx)(p.DUT, {
            role: "tab",
            autoFocus: a,
            "aria-controls": t ? o : void 0,
            ...l,
            onClick: () => {
                E.Ay.trackWithMetadata(P.HAw.EXPRESSION_PICKER_TAB_CLICKED, { tab: i, badged: !1 }), (0, w.U)(i);
            },
            "aria-current": t ? "page" : void 0,
            className: s()(n, F.oi, F.pc, { [F.Mv]: t }),
        });
    }),
    H = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            a = (0, d.bG)([O.Ay], () => O.Ay.expressionPickerWidth),
            [s, o] = i.useState(window.innerWidth),
            [u, c] = i.useState(a ?? x.wp.MIN),
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
                    let t = e >= s ? x.wp.MAX : e <= 498 ? x.wp.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ""),
                        h.Ay.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                        c(t);
                },
                [n, s],
            ),
            p = (0, g.A)({
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
            onSelectGIF: a,
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
        Q = i.useRef(!1),
        X = i.useRef(null),
        J = i.useRef(null),
        { drawerWidth: ee, handleDrawerResizeHandleMouseDown: et } = H({
            positionContainerRef: Z,
            drawerRef: J,
            orientation: "left" === K ? g.R.HORIZONTAL_RIGHT : g.R.HORIZONTAL_LEFT,
        }),
        en = (0, w.RQ)((e) => e.activeView),
        er = (0, b.ZO)(O),
        { renderWindow: ei, windowDispatch: ea } = i.useContext(S.Ay),
        es = (0, d.bG)([N.A], () => !N.A.hasLoadedStickerPacks),
        eo = (0, v.tj)({ location: "expression_picker" }),
        el = (0, d.bG)([D.A], () => D.A.isOpen()),
        eu = null != q,
        ec = (0, f.useIsModalAtTop)(q ?? ""),
        ed = Y.gifs?.allowSending && !u.Fr && null != a,
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
                (null == n || "BODY" === n.tagName) && L._.dispatchToLastSubscribed(P.jej.TEXTAREA_FOCUS);
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
            ea.subscribe(P.jej.POPOUT_CLOSE, eh),
            L._.subscribe(P.jej.CLOSE_GIF_PICKER, e),
            () => {
                ei.removeEventListener("mousedown", ep),
                    ei.removeEventListener("contextmenu", ep),
                    ea.unsubscribe(P.jej.POPOUT_CLOSE, eh),
                    L._.unsubscribe(P.jej.CLOSE_GIF_PICKER, e);
            }
        );
    }, [en, eh, ep, ei, ea]),
        (0, p.tjt)(Z);
    let [em, eg] = (0, A.kn)(eo ? [_.M.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eE, eA] = i.useState(!1);
    i.useEffect(() => {
        en === x.kx.SOUNDBOARD && eA(!0);
    }, [en]),
        i.useEffect(
            () => () => {
                eE && eg(M.i.TAKE_ACTION);
            },
            [eE, eg],
        ),
        i.useEffect(() => {
            (0, w.Ri)("");
        }, []),
        i.useEffect(() => {
            ((!eu && (0, f.hasAnyModalOpen)()) || (eu && !ec)) && (0, w.v8)();
        }, [ec, eu]),
        i.useEffect(() => {
            null != J.current &&
                !Q.current &&
                (en === x.kx.EMOJI
                    ? X?.current?.onPickerOpen != null && (X?.current?.onPickerOpen(), (Q.current = !0))
                    : en === x.kx.STICKER
                      ? X?.current?.onPickerOpen == null || es || (X?.current?.onPickerOpen(), (Q.current = !0))
                      : (E.Ay.trackWithMetadata(P.HAw.EXPRESSION_PICKER_OPENED, {
                            width: J.current.offsetWidth,
                            tab: en,
                            badged: !1,
                        }),
                        (Q.current = !0)));
        });
    let eI = i.useCallback((e, t) => h?.(e, "emoji_picker", t), [h]),
        eT = i.useCallback((e, t) => h?.(e, "soundboard_picker", t), [h]),
        ey = Y.soundmoji?.allowSending === !0 && null != h,
        eS = "left" === K ? "right" : "left",
        ev = null != z ? z : "left" === K ? F.sj : F.Jg,
        eC = ed
            ? (0, r.jsx)(j, {
                  id: k.g9,
                  "aria-controls": k.ni,
                  "aria-selected": en === x.kx.GIF,
                  isActive: en === x.kx.GIF,
                  viewType: x.kx.GIF,
                  children: V.intl.string(V.t["6gUTsS"]),
              })
            : null,
        eb = e_
            ? (0, r.jsx)(j, {
                  id: G.LD,
                  "aria-controls": G.GX,
                  "aria-selected": en === x.kx.STICKER,
                  isActive: en === x.kx.STICKER,
                  autoFocus: !er,
                  viewType: x.kx.STICKER,
                  children: (0, r.jsx)("div", { className: F.dG, children: V.intl.string(V.t.nf1s3u) }),
              })
            : null,
        eN = (0, r.jsx)(j, {
            id: k.k1,
            "aria-controls": k.Do,
            "aria-selected": en === x.kx.EMOJI,
            isActive: en === x.kx.EMOJI,
            viewType: x.kx.EMOJI,
            children: V.intl.string(V.t.Xu3wE3),
        });
    return (0, r.jsx)(m.A, {
        section: P.JJy.EXPRESSION_PICKER,
        children: (0, r.jsx)(y.nE, {
            className: s()(F.T8, ev),
            targetRef: t,
            position: W,
            align: K,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                let { isPositioned: t } = e;
                return (0, r.jsx)("section", {
                    className: s()(F.V6, { [F.D0]: !ef }),
                    ref: Z,
                    role: "dialog",
                    "aria-label": V.intl.string(V.t.Utlwvi),
                    children: t
                        ? (0, r.jsxs)("div", {
                              className: F.jP,
                              style: { width: null == ee ? void 0 : ee, [K]: 0 },
                              ref: J,
                              children: [
                                  (0, r.jsx)("div", { className: F.Di, onMouseDown: et, style: { [eS]: -2 } }),
                                  (0, r.jsxs)("div", {
                                      className: F.FG,
                                      children: [
                                          ef
                                              ? (0, r.jsx)("nav", {
                                                    className: F.C$,
                                                    children: (0, r.jsxs)("div", {
                                                        className: F.CT,
                                                        role: "tablist",
                                                        "aria-label": V.intl.string(V.t["2j4Vgd"]),
                                                        children: [
                                                            eC,
                                                            eb,
                                                            eN,
                                                            eo &&
                                                                ey &&
                                                                (0, r.jsx)(j, {
                                                                    id: k.N6,
                                                                    "aria-controls": k.AA,
                                                                    "aria-selected": en === x.kx.SOUNDBOARD,
                                                                    isActive: en === x.kx.SOUNDBOARD,
                                                                    viewType: x.kx.SOUNDBOARD,
                                                                    children: (0, r.jsxs)("div", {
                                                                        className: F.sd,
                                                                        children: [
                                                                            V.intl.string(V.t.EHlAMc),
                                                                            null != em &&
                                                                                (0, r.jsx)(p.LpS, {
                                                                                    text: V.intl.string(V.t.y2b7CA),
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
                                                    isLoading: es,
                                                    channel: O,
                                                    containerWidth: ee,
                                                    onSelectSticker: l,
                                                    closePopout: eh,
                                                    ref: (e) => {
                                                        X.current = e;
                                                    },
                                                })
                                              : null,
                                          en === x.kx.GIF && ed
                                              ? (0, r.jsx)(T.A, { onSelectGIF: a, hideFavorites: n, persistSearch: !0 })
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
                                                        X.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker: Y.soundmoji?.allowSending === !0,
                                                })
                                              : null,
                                          en === x.kx.SOUNDBOARD
                                              ? (0, r.jsx)("div", {
                                                    className: F.z,
                                                    children: (0, r.jsx)(C.A, {
                                                        guildId: O.guild_id,
                                                        channel: O,
                                                        containerWidth: ee,
                                                        onClose: eh,
                                                        onSelect: eT,
                                                        analyticsSource: "expression-picker",
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)("div", { className: F.BG, children: e }),
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
