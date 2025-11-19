n.d(t, { Z: () => $ }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    c = n(873546),
    u = n(374470),
    d = n(442837),
    f = n(704215),
    _ = n(952265),
    p = n(481060),
    h = n(153867),
    m = n(410575),
    g = n(347469),
    E = n(367907),
    b = n(713913),
    y = n(243778),
    O = n(907040),
    v = n(556019),
    I = n(455708),
    T = n(314910),
    S = n(728285),
    A = n(125900),
    C = n(603074),
    N = n(453070),
    R = n(926491),
    P = n(457040),
    D = n(740492),
    w = n(574254),
    L = n(585483),
    x = n(28546),
    M = n(957825),
    k = n(981631),
    j = n(921944),
    U = n(149203),
    G = n(185923),
    B = n(611480),
    Z = n(388032),
    F = n(364744);
function V(e, t, n) {
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
function H(e) {
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
                V(e, t, n[t]);
            });
    }
    return e;
}
function Y(e, t) {
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
function W(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function K(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = z(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let q = M.Om + U.Su.MEDIUM,
    X = i.memo(function (e) {
        var { isActive: t, className: n, viewType: i, autoFocus: a = !1, "aria-controls": s } = e,
            l = K(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
        return (0, r.jsx)(
            p.P3F,
            W(
                H(
                    {
                        role: "tab",
                        autoFocus: a,
                        "aria-controls": t ? s : void 0,
                    },
                    l,
                ),
                {
                    onClick: () => {
                        E.ZP.trackWithMetadata(k.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                            tab: i,
                            badged: !1,
                        }),
                            (0, x.hr)(i);
                    },
                    "aria-current": t ? "page" : void 0,
                    className: o()(n, F.navButton, F.navItem, { [F.navButtonActive]: t }),
                },
            ),
        );
    }),
    Q = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            a = (0, d.e7)([D.ZP], () => D.ZP.expressionPickerWidth),
            [o, s] = i.useState(window.innerWidth),
            [c, u] = i.useState(null != a ? a : M._j.MIN),
            f = i.useMemo(() => {
                switch (c) {
                    case M._j.MIN:
                        return M.Om;
                    case M._j.MAX:
                        return null;
                    default:
                        return c;
                }
            }, [c]),
            _ = i.useCallback(
                (e) => {
                    let t = e >= o ? M._j.MAX : e <= M.Om ? M._j.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ""),
                        h.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                        u(t);
                },
                [n, o],
            ),
            p = (0, g.Z)({
                initialElementDimension: f,
                maxDimension: o,
                minDimension: M.Om,
                resizableDomNodeRef: n,
                onElementResize: _,
                orientation: r,
            });
        return (
            i.useEffect(() => {
                let e = l().debounce(() => {
                    null != t.current && s(t.current.offsetWidth);
                }, 500);
                return (
                    window.addEventListener("resize", e),
                    () => {
                        window.removeEventListener("resize", e);
                    }
                );
            }, [t]),
            i.useLayoutEffect(() => {
                null != t.current && s(t.current.offsetWidth);
            }, [t]),
            {
                drawerWidth: f,
                handleDrawerResizeHandleMouseDown: i.useCallback(
                    (e) => {
                        e.stopPropagation(), null != t.current && s(t.current.offsetWidth), p(e);
                    },
                    [t, p],
                ),
            }
        );
    };
function J(e) {
    var t, n, a, s;
    let {
            positionTargetRef: l,
            hideGifFavorites: h,
            includeCreateEmojiButton: D,
            onSelectGIF: V,
            onSelectEmoji: H,
            onSelectSticker: Y,
            onSelectSound: W,
            channel: K,
            type: z,
            position: J,
            align: $,
            positionLayerClassName: ee,
            closeOnModalOuterClick: et = !1,
            parentModalKey: en,
        } = e,
        er = i.useRef(null),
        ei = i.useRef(!1),
        ea = i.useRef(null),
        eo = i.useRef(null),
        { drawerWidth: es, handleDrawerResizeHandleMouseDown: el } = Q({
            positionContainerRef: er,
            drawerRef: eo,
            orientation: "left" === $ ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT,
        }),
        ec = (0, x.Iu)((e) => e.activeView),
        eu = (0, N.fQ)(K),
        { renderWindow: ed, windowDispatch: ef } = i.useContext(S.ZP),
        e_ = (0, d.e7)([R.Z], () => !R.Z.hasLoadedStickerPacks),
        ep = (0, A.V2)({ location: "expression_picker" }),
        eh = (0, d.e7)([w.Z], () => w.Z.isOpen()),
        em = null != en,
        eg = (0, _.Jw)(null != en ? en : ""),
        { reorderExpressionPickerTabs: eE } = b.n.useConfig({ location: "expression_picker" }),
        eb = (null == (t = z.gifs) ? void 0 : t.allowSending) && !c.tq && null != V,
        ey = (null == (n = z.stickers) ? void 0 : n.allowSending) && null != Y,
        eO = !(null == (a = z.expressionPicker) ? void 0 : a.onlyEmojis) && (eb || ey),
        ev = (0, v.qt)({
            location: "expression_picker",
            autoTrackExposure: !0,
            disable: !eO || ec !== M.X1.EMOJI,
        }),
        eI = i.useCallback(
            (e) => {
                var t;
                if ((!em && (0, _.$s)()) || (em && !(eg && et)) || eh || e.defaultPrevented) return;
                let { target: n } = e;
                if ((0, u.kK)(n) && null != n.closest("." + M.CT)) return;
                for (; (0, u.kK)(n); ) {
                    if (
                        n === eo.current ||
                        "true" === n.getAttribute("data-menu-item") ||
                        "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                        "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                    )
                        return;
                    n = n.parentNode;
                }
                (0, x._Q)();
                let r = null == (t = (0, u.uB)(e)) ? void 0 : t.activeElement;
                (null == r || "BODY" === r.tagName) && L.S.dispatchToLastSubscribed(k.CkL.TEXTAREA_FOCUS);
            },
            [et, eg, em, eh],
        ),
        eT = i.useCallback(() => {
            (0, x._Q)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            ec === M.X1.GIF && (0, x._Q)();
        };
        return (
            ed.addEventListener("mousedown", eI),
            ed.addEventListener("contextmenu", eI),
            ef.subscribe(k.CkL.POPOUT_CLOSE, eT),
            L.S.subscribe(k.CkL.CLOSE_GIF_PICKER, e),
            () => {
                ed.removeEventListener("mousedown", eI),
                    ed.removeEventListener("contextmenu", eI),
                    ef.unsubscribe(k.CkL.POPOUT_CLOSE, eT),
                    L.S.unsubscribe(k.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [ec, eT, eI, ed, ef]),
        (0, p.Tbt)(er);
    let [eS, eA] = (0, y.US)(ep ? [f.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eC, eN] = i.useState(!1);
    i.useEffect(() => {
        ec === M.X1.SOUNDBOARD && eN(!0);
    }, [ec]),
        i.useEffect(
            () => () => {
                eC && eA(j.L.TAKE_ACTION);
            },
            [eC, eA],
        ),
        i.useEffect(() => {
            (0, x.ql)("");
        }, []),
        i.useEffect(() => {
            ((!em && (0, _.$s)()) || (em && !eg)) && (0, x._Q)();
        }, [eg, em]),
        i.useEffect(() => {
            if (null != eo.current && !ei.current) {
                var e, t, n, r;
                ec === M.X1.EMOJI
                    ? (null == ea || null == (e = ea.current) ? void 0 : e.onPickerOpen) != null &&
                      (null == ea || null == (t = ea.current) || t.onPickerOpen(), (ei.current = !0))
                    : ec === M.X1.STICKER
                      ? (null == ea || null == (n = ea.current) ? void 0 : n.onPickerOpen) == null ||
                        e_ ||
                        (null == ea || null == (r = ea.current) || r.onPickerOpen(), (ei.current = !0))
                      : (E.ZP.trackWithMetadata(k.rMx.EXPRESSION_PICKER_OPENED, {
                            width: eo.current.offsetWidth,
                            tab: ec,
                            badged: !1,
                        }),
                        (ei.current = !0));
            }
        });
    let eR = i.useCallback((e, t) => (null == W ? void 0 : W(e, "emoji_picker", t)), [W]),
        eP = i.useCallback((e, t) => (null == W ? void 0 : W(e, "soundboard_picker", t)), [W]),
        eD = (null == (s = z.soundmoji) ? void 0 : s.allowSending) === !0 && null != W,
        ew = "left" === $ ? "right" : "left",
        eL = null != ee ? ee : "left" === $ ? F.positionLayerDefaultAlignLeft : F.positionLayerDefaultAlignRight,
        ex = eb
            ? (0, r.jsx)(X, {
                  id: U._3,
                  "aria-controls": U.vO,
                  "aria-selected": ec === M.X1.GIF,
                  isActive: ec === M.X1.GIF,
                  viewType: M.X1.GIF,
                  children: Z.intl.string(Z.t["6gUTsS"]),
              })
            : null,
        eM = ey
            ? (0, r.jsx)(X, {
                  id: B.ED,
                  "aria-controls": B.nZ,
                  "aria-selected": ec === M.X1.STICKER,
                  isActive: ec === M.X1.STICKER,
                  autoFocus: !eu,
                  viewType: M.X1.STICKER,
                  children: (0, r.jsx)("div", {
                      className: F.stickersNavItem,
                      children: Z.intl.string(Z.t.nf1s3u),
                  }),
              })
            : null,
        ek = (0, r.jsx)(X, {
            id: U.td,
            "aria-controls": U.cZ,
            "aria-selected": ec === M.X1.EMOJI,
            isActive: ec === M.X1.EMOJI,
            viewType: M.X1.EMOJI,
            children: Z.intl.string(Z.t.Xu3wE3),
        });
    return (0, r.jsx)(m.Z, {
        section: k.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(T.W5, {
            className: o()(F.positionLayer, eL),
            targetRef: l,
            position: J,
            align: $,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var t;
                let { isPositioned: n } = e;
                return (0, r.jsx)("section", {
                    className: o()(F.positionContainer, { [F.positionContainerOnlyEmoji]: !eO }),
                    ref: er,
                    role: "dialog",
                    "aria-label": Z.intl.string(Z.t.Utlwvi),
                    children: n
                        ? (0, r.jsxs)("div", {
                              className: F.drawerSizingWrapper,
                              style: {
                                  width: null == es ? void 0 : es,
                                  [$]: 0,
                              },
                              ref: eo,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: F.resizeHandle,
                                      onMouseDown: el,
                                      style: { [ew]: -2 },
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: F.contentWrapper,
                                      children: [
                                          eO
                                              ? (0, r.jsx)("nav", {
                                                    className: F.nav,
                                                    children: (0, r.jsxs)("div", {
                                                        className: F.navList,
                                                        role: "tablist",
                                                        "aria-label": Z.intl.string(Z.t["2j4Vgd"]),
                                                        children: [
                                                            eE
                                                                ? (0, r.jsxs)(r.Fragment, {
                                                                      children: [ek, ex, eM],
                                                                  })
                                                                : (0, r.jsxs)(r.Fragment, {
                                                                      children: [ex, eM, ek],
                                                                  }),
                                                            ep &&
                                                                eD &&
                                                                (0, r.jsx)(X, {
                                                                    id: U.Hr,
                                                                    "aria-controls": U.gV,
                                                                    "aria-selected": ec === M.X1.SOUNDBOARD,
                                                                    isActive: ec === M.X1.SOUNDBOARD,
                                                                    viewType: M.X1.SOUNDBOARD,
                                                                    children: (0, r.jsxs)("div", {
                                                                        className: F.soundmojiLabelContainer,
                                                                        children: [
                                                                            Z.intl.string(Z.t.EHlAMc),
                                                                            null != eS &&
                                                                                (0, r.jsx)(p.IGR, {
                                                                                    text: Z.intl.string(Z.t.y2b7CA),
                                                                                }),
                                                                        ],
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                })
                                              : null,
                                          ec === M.X1.STICKER && ey
                                              ? (0, r.jsx)(P.Z, {
                                                    isLoading: e_,
                                                    channel: K,
                                                    containerWidth: es,
                                                    onSelectSticker: Y,
                                                    closePopout: eT,
                                                    ref: (e) => {
                                                        ea.current = e;
                                                    },
                                                })
                                              : null,
                                          ec === M.X1.GIF && eb
                                              ? (0, r.jsx)(I.Z, {
                                                    onSelectGIF: V,
                                                    hideFavorites: h,
                                                    persistSearch: !0,
                                                })
                                              : null,
                                          ec === M.X1.EMOJI
                                              ? (0, r.jsx)(O.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eO
                                                        ? O.v.TABS_EXPRESSION_PICKER
                                                        : O.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: K,
                                                    containerWidth: es,
                                                    includeCreateEmojiButton: D,
                                                    emojiSize: null != es && es < q ? U.Su.MEDIUM : U.Su.LARGE,
                                                    pickerIntention: G.Hz.CHAT,
                                                    closePopout: eT,
                                                    onSelectEmoji: H,
                                                    onSelectSoundmoji: eR,
                                                    ref: (e) => {
                                                        ea.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker:
                                                        (null == (t = z.soundmoji) ? void 0 : t.allowSending) === !0,
                                                    showAddEmojiButton: ev.enabled,
                                                })
                                              : null,
                                          ec === M.X1.SOUNDBOARD
                                              ? (0, r.jsx)("div", {
                                                    className: F.soundboardContainer,
                                                    children: (0, r.jsx)(C.Z, {
                                                        guildId: K.guild_id,
                                                        channel: K,
                                                        containerWidth: es,
                                                        onClose: eT,
                                                        onSelect: eP,
                                                        analyticsSource: "expression-picker",
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)("div", {
                                                                className: F.soundboardHeader,
                                                                children: e,
                                                            }),
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
let $ = i.memo(J);
