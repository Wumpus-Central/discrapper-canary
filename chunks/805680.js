n.d(t, { Z: () => $ }), n(388685);
var r = n(951288),
    i = n(647438),
    o = n(120356),
    a = n.n(o),
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
    E = n(40851),
    b = n(367907),
    y = n(243778),
    O = n(907040),
    v = n(556019),
    I = n(455708),
    T = n(314910),
    S = n(125900),
    A = n(603074),
    C = n(453070),
    N = n(926491),
    R = n(457040),
    P = n(740492),
    w = n(574254),
    D = n(585483),
    x = n(5967),
    L = n(28546),
    j = n(957825),
    M = n(981631),
    k = n(921944),
    U = n(149203),
    G = n(185923),
    B = n(611480),
    Z = n(388032),
    F = n(887648);
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
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++)
            (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let q = j.Om + U.Su.MEDIUM,
    X = i.memo(function (e) {
        var { isActive: t, className: n, viewType: i, autoFocus: o = !1, "aria-controls": s } = e,
            l = K(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
        return (0, r.jsx)(
            p.P3F,
            W(
                H(
                    {
                        role: "tab",
                        autoFocus: o,
                        "aria-controls": t ? s : void 0,
                    },
                    l,
                ),
                {
                    onClick: () => {
                        b.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                            tab: i,
                            badged: !1,
                        }),
                            (0, L.hr)(i);
                    },
                    "aria-current": t ? "page" : void 0,
                    className: a()(n, F.navButton, F.navItem, { [F.navButtonActive]: t }),
                },
            ),
        );
    }),
    Q = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            o = (0, d.e7)([P.ZP], () => P.ZP.expressionPickerWidth),
            [a, s] = i.useState(window.innerWidth),
            [c, u] = i.useState(null != o ? o : j._j.MIN),
            f = i.useMemo(() => {
                switch (c) {
                    case j._j.MIN:
                        return j.Om;
                    case j._j.MAX:
                        return null;
                    default:
                        return c;
                }
            }, [c]),
            _ = i.useCallback(
                (e) => {
                    let t = e >= a ? j._j.MAX : e <= j.Om ? j._j.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ""),
                        h.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                        u(t);
                },
                [n, a],
            ),
            p = (0, g.Z)({
                initialElementDimension: f,
                maxDimension: a,
                minDimension: j.Om,
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
    var t, n, o, s;
    let {
            positionTargetRef: l,
            hideGifFavorites: h,
            includeCreateEmojiButton: P,
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
        eo = i.useRef(null),
        ea = i.useRef(null),
        { drawerWidth: es, handleDrawerResizeHandleMouseDown: el } = Q({
            positionContainerRef: er,
            drawerRef: ea,
            orientation: "left" === $ ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT,
        }),
        ec = (0, L.Iu)((e) => e.activeView),
        eu = (0, C.fQ)(K),
        { renderWindow: ed, windowDispatch: ef } = i.useContext(E.ZP),
        e_ = (0, d.e7)([N.Z], () => !N.Z.hasLoadedStickerPacks),
        ep = (0, S.V2)({ location: "expression_picker" }),
        eh = (0, d.e7)([w.Z], () => w.Z.isOpen()),
        em = null != en,
        eg = (0, _.Jw)(null != en ? en : ""),
        eE = (null == (t = z.gifs) ? void 0 : t.allowSending) && !c.tq && null != V,
        eb = (null == (n = z.stickers) ? void 0 : n.allowSending) && null != Y,
        ey = !(null == (o = z.expressionPicker) ? void 0 : o.onlyEmojis) && (eE || eb),
        eO = (0, v.qt)({
            location: "expression_picker",
            autoTrackExposure: !0,
            disable: !ey || ec !== j.X1.EMOJI,
        }),
        ev = null == K.guild_id ? eO.isEntrypointEnabledInDMs : eO.isEntrypointEnabled,
        eI = i.useCallback(
            (e) => {
                var t;
                if ((!em && (0, _.$s)()) || (em && !(eg && et)) || eh || e.defaultPrevented) return;
                let { target: n } = e;
                if ((0, u.k)(n) && null != n.closest("." + j.CT)) return;
                for (; (0, u.k)(n); ) {
                    if (
                        n === ea.current ||
                        "true" === n.getAttribute("data-menu-item") ||
                        "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                        "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                    )
                        return;
                    n = n.parentNode;
                }
                (0, L._Q)();
                let r = null == (t = (0, x.uB)(e)) ? void 0 : t.activeElement;
                (null == r || "BODY" === r.tagName) && D.S.dispatchToLastSubscribed(M.CkL.TEXTAREA_FOCUS);
            },
            [et, eg, em, eh],
        ),
        eT = i.useCallback(() => {
            (0, L._Q)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            ec === j.X1.GIF && (0, L._Q)();
        };
        return (
            ed.addEventListener("mousedown", eI),
            ed.addEventListener("contextmenu", eI),
            ef.subscribe(M.CkL.POPOUT_CLOSE, eT),
            D.S.subscribe(M.CkL.CLOSE_GIF_PICKER, e),
            () => {
                ed.removeEventListener("mousedown", eI),
                    ed.removeEventListener("contextmenu", eI),
                    ef.unsubscribe(M.CkL.POPOUT_CLOSE, eT),
                    D.S.unsubscribe(M.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [ec, eT, eI, ed, ef]),
        (0, p.Tbt)(er);
    let [eS, eA] = (0, y.US)(ep ? [f.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eC, eN] = i.useState(!1);
    i.useEffect(() => {
        ec === j.X1.SOUNDBOARD && eN(!0);
    }, [ec]),
        i.useEffect(
            () => () => {
                eC && eA(k.L.TAKE_ACTION);
            },
            [eC, eA],
        ),
        i.useEffect(() => {
            (0, L.ql)("");
        }, []),
        i.useEffect(() => {
            ((!em && (0, _.$s)()) || (em && !eg)) && (0, L._Q)();
        }, [eg, em]),
        i.useEffect(() => {
            if (null != ea.current && !ei.current) {
                var e, t, n, r;
                ec === j.X1.EMOJI
                    ? (null == eo || null == (e = eo.current) ? void 0 : e.onPickerOpen) != null &&
                      (null == eo || null == (t = eo.current) || t.onPickerOpen(), (ei.current = !0))
                    : ec === j.X1.STICKER
                      ? (null == eo || null == (n = eo.current) ? void 0 : n.onPickerOpen) == null ||
                        e_ ||
                        (null == eo || null == (r = eo.current) || r.onPickerOpen(), (ei.current = !0))
                      : (b.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_OPENED, {
                            width: ea.current.offsetWidth,
                            tab: ec,
                            badged: !1,
                        }),
                        (ei.current = !0));
            }
        });
    let eR = i.useCallback((e, t) => (null == W ? void 0 : W(e, "emoji_picker", t)), [W]),
        eP = i.useCallback((e, t) => (null == W ? void 0 : W(e, "soundboard_picker", t)), [W]),
        ew = (null == (s = z.soundmoji) ? void 0 : s.allowSending) === !0 && null != W,
        eD = "left" === $ ? "right" : "left",
        ex = null != ee ? ee : "left" === $ ? F.positionLayerDefaultAlignLeft : F.positionLayerDefaultAlignRight;
    return (0, r.jsx)(m.Z, {
        section: M.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(T.W5, {
            className: a()(F.positionLayer, ex),
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
                    className: a()(F.positionContainer, { [F.positionContainerOnlyEmoji]: !ey }),
                    ref: er,
                    role: "dialog",
                    "aria-label": Z.intl.string(Z.t.Utlwvr),
                    children: n
                        ? (0, r.jsxs)("div", {
                              className: F.drawerSizingWrapper,
                              style: {
                                  width: null == es ? void 0 : es,
                                  [$]: 0,
                              },
                              ref: ea,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: F.resizeHandle,
                                      onMouseDown: el,
                                      style: { [eD]: -2 },
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: F.contentWrapper,
                                      children: [
                                          ey
                                              ? (0, r.jsx)("nav", {
                                                    className: F.nav,
                                                    children: (0, r.jsxs)("div", {
                                                        className: F.navList,
                                                        role: "tablist",
                                                        "aria-label": Z.intl.string(Z.t["2j4VgY"]),
                                                        children: [
                                                            eE
                                                                ? (0, r.jsx)(X, {
                                                                      id: U._3,
                                                                      "aria-controls": U.vO,
                                                                      "aria-selected": ec === j.X1.GIF,
                                                                      isActive: ec === j.X1.GIF,
                                                                      viewType: j.X1.GIF,
                                                                      children: Z.intl.string(Z.t["6gUTsb"]),
                                                                  })
                                                                : null,
                                                            eb
                                                                ? (0, r.jsx)(X, {
                                                                      id: B.ED,
                                                                      "aria-controls": B.nZ,
                                                                      "aria-selected": ec === j.X1.STICKER,
                                                                      isActive: ec === j.X1.STICKER,
                                                                      autoFocus: !eu,
                                                                      viewType: j.X1.STICKER,
                                                                      children: (0, r.jsx)("div", {
                                                                          className: F.stickersNavItem,
                                                                          children: Z.intl.string(Z.t.nf1s3t),
                                                                      }),
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(X, {
                                                                id: U.td,
                                                                "aria-controls": U.cZ,
                                                                "aria-selected": ec === j.X1.EMOJI,
                                                                isActive: ec === j.X1.EMOJI,
                                                                viewType: j.X1.EMOJI,
                                                                children: Z.intl.string(Z.t.Xu3wEx),
                                                            }),
                                                            ep &&
                                                                ew &&
                                                                (0, r.jsx)(X, {
                                                                    id: U.Hr,
                                                                    "aria-controls": U.gV,
                                                                    "aria-selected": ec === j.X1.SOUNDBOARD,
                                                                    isActive: ec === j.X1.SOUNDBOARD,
                                                                    viewType: j.X1.SOUNDBOARD,
                                                                    children: (0, r.jsxs)("div", {
                                                                        className: F.soundmojiLabelContainer,
                                                                        children: [
                                                                            Z.intl.string(Z.t.EHlAMT),
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
                                          ec === j.X1.STICKER && eb
                                              ? (0, r.jsx)(R.Z, {
                                                    isLoading: e_,
                                                    channel: K,
                                                    containerWidth: es,
                                                    onSelectSticker: Y,
                                                    closePopout: eT,
                                                    ref: (e) => {
                                                        eo.current = e;
                                                    },
                                                })
                                              : null,
                                          ec === j.X1.GIF && eE
                                              ? (0, r.jsx)(I.Z, {
                                                    onSelectGIF: V,
                                                    hideFavorites: h,
                                                    persistSearch: !0,
                                                })
                                              : null,
                                          ec === j.X1.EMOJI
                                              ? (0, r.jsx)(O.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: ey
                                                        ? O.v.TABS_EXPRESSION_PICKER
                                                        : O.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: K,
                                                    containerWidth: es,
                                                    includeCreateEmojiButton: P,
                                                    emojiSize: null != es && es < q ? U.Su.MEDIUM : U.Su.LARGE,
                                                    pickerIntention: G.Hz.CHAT,
                                                    closePopout: eT,
                                                    onSelectEmoji: H,
                                                    onSelectSoundmoji: eR,
                                                    ref: (e) => {
                                                        eo.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker:
                                                        (null == (t = z.soundmoji) ? void 0 : t.allowSending) === !0,
                                                    showAddEmojiButton: ev,
                                                })
                                              : null,
                                          ec === j.X1.SOUNDBOARD
                                              ? (0, r.jsx)("div", {
                                                    className: F.soundboardContainer,
                                                    children: (0, r.jsx)(A.Z, {
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
