n.d(t, { Z: () => J }), n(388685);
var r = n(951288),
    i = n(647438),
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
    b = n(243778),
    y = n(907040),
    O = n(556019),
    v = n(455708),
    I = n(314910),
    S = n(728285),
    T = n(125900),
    A = n(603074),
    C = n(453070),
    N = n(926491),
    R = n(457040),
    P = n(740492),
    w = n(574254),
    D = n(585483),
    x = n(28546),
    L = n(957825),
    M = n(981631),
    j = n(921944),
    k = n(149203),
    U = n(185923),
    G = n(611480),
    B = n(388032),
    Z = n(887648);
function F(e, t, n) {
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
function V(e) {
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
                F(e, t, n[t]);
            });
    }
    return e;
}
function H(e, t) {
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
function Y(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : H(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function W(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = K(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function K(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let z = L.Om + k.Su.MEDIUM,
    q = i.memo(function (e) {
        var { isActive: t, className: n, viewType: i, autoFocus: a = !1, "aria-controls": s } = e,
            l = W(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
        return (0, r.jsx)(
            p.P3F,
            Y(
                V(
                    {
                        role: "tab",
                        autoFocus: a,
                        "aria-controls": t ? s : void 0,
                    },
                    l,
                ),
                {
                    onClick: () => {
                        E.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                            tab: i,
                            badged: !1,
                        }),
                            (0, x.hr)(i);
                    },
                    "aria-current": t ? "page" : void 0,
                    className: o()(n, Z.navButton, Z.navItem, { [Z.navButtonActive]: t }),
                },
            ),
        );
    }),
    X = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            a = (0, d.e7)([P.ZP], () => P.ZP.expressionPickerWidth),
            [o, s] = i.useState(window.innerWidth),
            [c, u] = i.useState(null != a ? a : L._j.MIN),
            f = i.useMemo(() => {
                switch (c) {
                    case L._j.MIN:
                        return L.Om;
                    case L._j.MAX:
                        return null;
                    default:
                        return c;
                }
            }, [c]),
            _ = i.useCallback(
                (e) => {
                    let t = e >= o ? L._j.MAX : e <= L.Om ? L._j.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ""),
                        h.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                        u(t);
                },
                [n, o],
            ),
            p = (0, g.Z)({
                initialElementDimension: f,
                maxDimension: o,
                minDimension: L.Om,
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
function Q(e) {
    var t, n, a, s;
    let {
            positionTargetRef: l,
            hideGifFavorites: h,
            includeCreateEmojiButton: P,
            onSelectGIF: F,
            onSelectEmoji: V,
            onSelectSticker: H,
            onSelectSound: Y,
            channel: W,
            type: K,
            position: Q,
            align: J,
            positionLayerClassName: $,
            closeOnModalOuterClick: ee = !1,
            parentModalKey: et,
        } = e,
        en = i.useRef(null),
        er = i.useRef(!1),
        ei = i.useRef(null),
        ea = i.useRef(null),
        { drawerWidth: eo, handleDrawerResizeHandleMouseDown: es } = X({
            positionContainerRef: en,
            drawerRef: ea,
            orientation: "left" === J ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT,
        }),
        el = (0, x.Iu)((e) => e.activeView),
        ec = (0, C.fQ)(W),
        { renderWindow: eu, windowDispatch: ed } = i.useContext(S.ZP),
        ef = (0, d.e7)([N.Z], () => !N.Z.hasLoadedStickerPacks),
        e_ = (0, T.V2)({ location: "expression_picker" }),
        ep = (0, d.e7)([w.Z], () => w.Z.isOpen()),
        eh = null != et,
        em = (0, _.Jw)(null != et ? et : ""),
        eg = (null == (t = K.gifs) ? void 0 : t.allowSending) && !c.tq && null != F,
        eE = (null == (n = K.stickers) ? void 0 : n.allowSending) && null != H,
        eb = !(null == (a = K.expressionPicker) ? void 0 : a.onlyEmojis) && (eg || eE),
        ey = (0, O.qt)({
            location: "expression_picker",
            autoTrackExposure: !0,
            disable: !eb || el !== L.X1.EMOJI,
        }),
        eO = i.useCallback(
            (e) => {
                var t;
                if ((!eh && (0, _.$s)()) || (eh && !(em && ee)) || ep || e.defaultPrevented) return;
                let { target: n } = e;
                if ((0, u.kK)(n) && null != n.closest("." + L.CT)) return;
                for (; (0, u.kK)(n); ) {
                    if (
                        n === ea.current ||
                        "true" === n.getAttribute("data-menu-item") ||
                        "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                        "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                    )
                        return;
                    n = n.parentNode;
                }
                (0, x._Q)();
                let r = null == (t = (0, u.uB)(e)) ? void 0 : t.activeElement;
                (null == r || "BODY" === r.tagName) && D.S.dispatchToLastSubscribed(M.CkL.TEXTAREA_FOCUS);
            },
            [ee, em, eh, ep],
        ),
        ev = i.useCallback(() => {
            (0, x._Q)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            el === L.X1.GIF && (0, x._Q)();
        };
        return (
            eu.addEventListener("mousedown", eO),
            eu.addEventListener("contextmenu", eO),
            ed.subscribe(M.CkL.POPOUT_CLOSE, ev),
            D.S.subscribe(M.CkL.CLOSE_GIF_PICKER, e),
            () => {
                eu.removeEventListener("mousedown", eO),
                    eu.removeEventListener("contextmenu", eO),
                    ed.unsubscribe(M.CkL.POPOUT_CLOSE, ev),
                    D.S.unsubscribe(M.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [el, ev, eO, eu, ed]),
        (0, p.Tbt)(en);
    let [eI, eS] = (0, b.US)(e_ ? [f.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eT, eA] = i.useState(!1);
    i.useEffect(() => {
        el === L.X1.SOUNDBOARD && eA(!0);
    }, [el]),
        i.useEffect(
            () => () => {
                eT && eS(j.L.TAKE_ACTION);
            },
            [eT, eS],
        ),
        i.useEffect(() => {
            (0, x.ql)("");
        }, []),
        i.useEffect(() => {
            ((!eh && (0, _.$s)()) || (eh && !em)) && (0, x._Q)();
        }, [em, eh]),
        i.useEffect(() => {
            if (null != ea.current && !er.current) {
                var e, t, n, r;
                el === L.X1.EMOJI
                    ? (null == ei || null == (e = ei.current) ? void 0 : e.onPickerOpen) != null &&
                      (null == ei || null == (t = ei.current) || t.onPickerOpen(), (er.current = !0))
                    : el === L.X1.STICKER
                      ? (null == ei || null == (n = ei.current) ? void 0 : n.onPickerOpen) == null ||
                        ef ||
                        (null == ei || null == (r = ei.current) || r.onPickerOpen(), (er.current = !0))
                      : (E.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_OPENED, {
                            width: ea.current.offsetWidth,
                            tab: el,
                            badged: !1,
                        }),
                        (er.current = !0));
            }
        });
    let eC = i.useCallback((e, t) => (null == Y ? void 0 : Y(e, "emoji_picker", t)), [Y]),
        eN = i.useCallback((e, t) => (null == Y ? void 0 : Y(e, "soundboard_picker", t)), [Y]),
        eR = (null == (s = K.soundmoji) ? void 0 : s.allowSending) === !0 && null != Y,
        eP = "left" === J ? "right" : "left",
        ew = null != $ ? $ : "left" === J ? Z.positionLayerDefaultAlignLeft : Z.positionLayerDefaultAlignRight;
    return (0, r.jsx)(m.Z, {
        section: M.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(I.W5, {
            className: o()(Z.positionLayer, ew),
            targetRef: l,
            position: Q,
            align: J,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var t;
                let { isPositioned: n } = e;
                return (0, r.jsx)("section", {
                    className: o()(Z.positionContainer, { [Z.positionContainerOnlyEmoji]: !eb }),
                    ref: en,
                    role: "dialog",
                    "aria-label": B.intl.string(B.t.Utlwvi),
                    children: n
                        ? (0, r.jsxs)("div", {
                              className: Z.drawerSizingWrapper,
                              style: {
                                  width: null == eo ? void 0 : eo,
                                  [J]: 0,
                              },
                              ref: ea,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: Z.resizeHandle,
                                      onMouseDown: es,
                                      style: { [eP]: -2 },
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: Z.contentWrapper,
                                      children: [
                                          eb
                                              ? (0, r.jsx)("nav", {
                                                    className: Z.nav,
                                                    children: (0, r.jsxs)("div", {
                                                        className: Z.navList,
                                                        role: "tablist",
                                                        "aria-label": B.intl.string(B.t["2j4Vgd"]),
                                                        children: [
                                                            eg
                                                                ? (0, r.jsx)(q, {
                                                                      id: k._3,
                                                                      "aria-controls": k.vO,
                                                                      "aria-selected": el === L.X1.GIF,
                                                                      isActive: el === L.X1.GIF,
                                                                      viewType: L.X1.GIF,
                                                                      children: B.intl.string(B.t["6gUTsS"]),
                                                                  })
                                                                : null,
                                                            eE
                                                                ? (0, r.jsx)(q, {
                                                                      id: G.ED,
                                                                      "aria-controls": G.nZ,
                                                                      "aria-selected": el === L.X1.STICKER,
                                                                      isActive: el === L.X1.STICKER,
                                                                      autoFocus: !ec,
                                                                      viewType: L.X1.STICKER,
                                                                      children: (0, r.jsx)("div", {
                                                                          className: Z.stickersNavItem,
                                                                          children: B.intl.string(B.t.nf1s3u),
                                                                      }),
                                                                  })
                                                                : null,
                                                            (0, r.jsx)(q, {
                                                                id: k.td,
                                                                "aria-controls": k.cZ,
                                                                "aria-selected": el === L.X1.EMOJI,
                                                                isActive: el === L.X1.EMOJI,
                                                                viewType: L.X1.EMOJI,
                                                                children: B.intl.string(B.t.Xu3wE3),
                                                            }),
                                                            e_ &&
                                                                eR &&
                                                                (0, r.jsx)(q, {
                                                                    id: k.Hr,
                                                                    "aria-controls": k.gV,
                                                                    "aria-selected": el === L.X1.SOUNDBOARD,
                                                                    isActive: el === L.X1.SOUNDBOARD,
                                                                    viewType: L.X1.SOUNDBOARD,
                                                                    children: (0, r.jsxs)("div", {
                                                                        className: Z.soundmojiLabelContainer,
                                                                        children: [
                                                                            B.intl.string(B.t.EHlAMc),
                                                                            null != eI &&
                                                                                (0, r.jsx)(p.IGR, {
                                                                                    text: B.intl.string(B.t.y2b7CA),
                                                                                }),
                                                                        ],
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                })
                                              : null,
                                          el === L.X1.STICKER && eE
                                              ? (0, r.jsx)(R.Z, {
                                                    isLoading: ef,
                                                    channel: W,
                                                    containerWidth: eo,
                                                    onSelectSticker: H,
                                                    closePopout: ev,
                                                    ref: (e) => {
                                                        ei.current = e;
                                                    },
                                                })
                                              : null,
                                          el === L.X1.GIF && eg
                                              ? (0, r.jsx)(v.Z, {
                                                    onSelectGIF: F,
                                                    hideFavorites: h,
                                                    persistSearch: !0,
                                                })
                                              : null,
                                          el === L.X1.EMOJI
                                              ? (0, r.jsx)(y.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eb
                                                        ? y.v.TABS_EXPRESSION_PICKER
                                                        : y.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: W,
                                                    containerWidth: eo,
                                                    includeCreateEmojiButton: P,
                                                    emojiSize: null != eo && eo < z ? k.Su.MEDIUM : k.Su.LARGE,
                                                    pickerIntention: U.Hz.CHAT,
                                                    closePopout: ev,
                                                    onSelectEmoji: V,
                                                    onSelectSoundmoji: eC,
                                                    ref: (e) => {
                                                        ei.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker:
                                                        (null == (t = K.soundmoji) ? void 0 : t.allowSending) === !0,
                                                    showAddEmojiButton: ey.enabled,
                                                })
                                              : null,
                                          el === L.X1.SOUNDBOARD
                                              ? (0, r.jsx)("div", {
                                                    className: Z.soundboardContainer,
                                                    children: (0, r.jsx)(A.Z, {
                                                        guildId: W.guild_id,
                                                        channel: W,
                                                        containerWidth: eo,
                                                        onClose: ev,
                                                        onSelect: eN,
                                                        analyticsSource: "expression-picker",
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)("div", {
                                                                className: Z.soundboardHeader,
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
let J = i.memo(Q);
