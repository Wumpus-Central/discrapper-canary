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
    p = n(952265),
    _ = n(481060),
    m = n(153867),
    h = n(410575),
    g = n(347469),
    E = n(367907),
    b = n(713913),
    y = n(243778),
    O = n(907040),
    v = n(556019),
    S = n(455708),
    I = n(314910),
    T = n(728285),
    C = n(125900),
    A = n(603074),
    N = n(453070),
    P = n(926491),
    R = n(457040),
    w = n(740492),
    D = n(574254),
    x = n(585483),
    L = n(28546),
    j = n(957825),
    M = n(981631),
    k = n(921944),
    U = n(149203),
    G = n(185923),
    Z = n(611480),
    F = n(388032),
    B = n(132775);
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
let q = j.Om + U.Su.MEDIUM,
    Q = i.memo(function (e) {
        var { isActive: t, className: n, viewType: i, autoFocus: a = !1, "aria-controls": s } = e,
            l = K(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
        return (0, r.jsx)(
            _.P3F,
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
                        E.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
                            tab: i,
                            badged: !1,
                        }),
                            (0, L.hr)(i);
                    },
                    "aria-current": t ? "page" : void 0,
                    className: o()(n, B.navButton, B.navItem, { [B.navButtonActive]: t }),
                },
            ),
        );
    }),
    X = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            a = (0, d.e7)([w.ZP], () => w.ZP.expressionPickerWidth),
            [o, s] = i.useState(window.innerWidth),
            [c, u] = i.useState(null != a ? a : j._j.MIN),
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
            p = i.useCallback(
                (e) => {
                    let t = e >= o ? j._j.MAX : e <= j.Om ? j._j.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ""),
                        m.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                        u(t);
                },
                [n, o],
            ),
            _ = (0, g.Z)({
                initialElementDimension: f,
                maxDimension: o,
                minDimension: j.Om,
                resizableDomNodeRef: n,
                onElementResize: p,
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
                        e.stopPropagation(), null != t.current && s(t.current.offsetWidth), _(e);
                    },
                    [t, _],
                ),
            }
        );
    };
function J(e) {
    var t, n, a, s;
    let {
            positionTargetRef: l,
            hideGifFavorites: m,
            includeCreateEmojiButton: w,
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
        { drawerWidth: es, handleDrawerResizeHandleMouseDown: el } = X({
            positionContainerRef: er,
            drawerRef: eo,
            orientation: "left" === $ ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT,
        }),
        ec = (0, L.Iu)((e) => e.activeView),
        eu = (0, N.fQ)(K),
        { renderWindow: ed, windowDispatch: ef } = i.useContext(T.ZP),
        ep = (0, d.e7)([P.Z], () => !P.Z.hasLoadedStickerPacks),
        e_ = (0, C.V2)({ location: "expression_picker" }),
        em = (0, d.e7)([D.Z], () => D.Z.isOpen()),
        eh = null != en,
        eg = (0, p.useIsModalAtTop)(null != en ? en : ""),
        { reorderExpressionPickerTabs: eE } = b.n.useConfig({ location: "expression_picker" }),
        eb = (null == (t = z.gifs) ? void 0 : t.allowSending) && !c.tq && null != V,
        ey = (null == (n = z.stickers) ? void 0 : n.allowSending) && null != Y,
        eO = !(null == (a = z.expressionPicker) ? void 0 : a.onlyEmojis) && (eb || ey),
        ev = (0, v.qt)({
            location: "expression_picker",
            autoTrackExposure: !0,
            disable: !eO || ec !== j.X1.EMOJI,
        }),
        eS = i.useCallback(
            (e) => {
                var t;
                if ((!eh && (0, p.hasAnyModalOpen)()) || (eh && !(eg && et)) || em || e.defaultPrevented) return;
                let { target: n } = e;
                if ((0, u.kK)(n) && null != n.closest("." + j.CT)) return;
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
                (0, L._Q)();
                let r = null == (t = (0, u.uB)(e)) ? void 0 : t.activeElement;
                (null == r || "BODY" === r.tagName) && x.S.dispatchToLastSubscribed(M.CkL.TEXTAREA_FOCUS);
            },
            [et, eg, eh, em],
        ),
        eI = i.useCallback(() => {
            (0, L._Q)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            ec === j.X1.GIF && (0, L._Q)();
        };
        return (
            ed.addEventListener("mousedown", eS),
            ed.addEventListener("contextmenu", eS),
            ef.subscribe(M.CkL.POPOUT_CLOSE, eI),
            x.S.subscribe(M.CkL.CLOSE_GIF_PICKER, e),
            () => {
                ed.removeEventListener("mousedown", eS),
                    ed.removeEventListener("contextmenu", eS),
                    ef.unsubscribe(M.CkL.POPOUT_CLOSE, eI),
                    x.S.unsubscribe(M.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [ec, eI, eS, ed, ef]),
        (0, _.Tbt)(er);
    let [eT, eC] = (0, y.US)(e_ ? [f.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eA, eN] = i.useState(!1);
    i.useEffect(() => {
        ec === j.X1.SOUNDBOARD && eN(!0);
    }, [ec]),
        i.useEffect(
            () => () => {
                eA && eC(k.L.TAKE_ACTION);
            },
            [eA, eC],
        ),
        i.useEffect(() => {
            (0, L.ql)("");
        }, []),
        i.useEffect(() => {
            ((!eh && (0, p.hasAnyModalOpen)()) || (eh && !eg)) && (0, L._Q)();
        }, [eg, eh]),
        i.useEffect(() => {
            if (null != eo.current && !ei.current) {
                var e, t, n, r;
                ec === j.X1.EMOJI
                    ? (null == ea || null == (e = ea.current) ? void 0 : e.onPickerOpen) != null &&
                      (null == ea || null == (t = ea.current) || t.onPickerOpen(), (ei.current = !0))
                    : ec === j.X1.STICKER
                      ? (null == ea || null == (n = ea.current) ? void 0 : n.onPickerOpen) == null ||
                        ep ||
                        (null == ea || null == (r = ea.current) || r.onPickerOpen(), (ei.current = !0))
                      : (E.ZP.trackWithMetadata(M.rMx.EXPRESSION_PICKER_OPENED, {
                            width: eo.current.offsetWidth,
                            tab: ec,
                            badged: !1,
                        }),
                        (ei.current = !0));
            }
        });
    let eP = i.useCallback((e, t) => (null == W ? void 0 : W(e, "emoji_picker", t)), [W]),
        eR = i.useCallback((e, t) => (null == W ? void 0 : W(e, "soundboard_picker", t)), [W]),
        ew = (null == (s = z.soundmoji) ? void 0 : s.allowSending) === !0 && null != W,
        eD = "left" === $ ? "right" : "left",
        ex = null != ee ? ee : "left" === $ ? B.positionLayerDefaultAlignLeft : B.positionLayerDefaultAlignRight,
        eL = eb
            ? (0, r.jsx)(Q, {
                  id: U._3,
                  "aria-controls": U.vO,
                  "aria-selected": ec === j.X1.GIF,
                  isActive: ec === j.X1.GIF,
                  viewType: j.X1.GIF,
                  children: F.intl.string(F.t["6gUTsS"]),
              })
            : null,
        ej = ey
            ? (0, r.jsx)(Q, {
                  id: Z.ED,
                  "aria-controls": Z.nZ,
                  "aria-selected": ec === j.X1.STICKER,
                  isActive: ec === j.X1.STICKER,
                  autoFocus: !eu,
                  viewType: j.X1.STICKER,
                  children: (0, r.jsx)("div", {
                      className: B.stickersNavItem,
                      children: F.intl.string(F.t.nf1s3u),
                  }),
              })
            : null,
        eM = (0, r.jsx)(Q, {
            id: U.td,
            "aria-controls": U.cZ,
            "aria-selected": ec === j.X1.EMOJI,
            isActive: ec === j.X1.EMOJI,
            viewType: j.X1.EMOJI,
            children: F.intl.string(F.t.Xu3wE3),
        });
    return (0, r.jsx)(h.Z, {
        section: M.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(I.W5, {
            className: o()(B.positionLayer, ex),
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
                    className: o()(B.positionContainer, { [B.positionContainerOnlyEmoji]: !eO }),
                    ref: er,
                    role: "dialog",
                    "aria-label": F.intl.string(F.t.Utlwvi),
                    children: n
                        ? (0, r.jsxs)("div", {
                              className: B.drawerSizingWrapper,
                              style: {
                                  width: null == es ? void 0 : es,
                                  [$]: 0,
                              },
                              ref: eo,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: B.resizeHandle,
                                      onMouseDown: el,
                                      style: { [eD]: -2 },
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: B.contentWrapper,
                                      children: [
                                          eO
                                              ? (0, r.jsx)("nav", {
                                                    className: B.nav,
                                                    children: (0, r.jsxs)("div", {
                                                        className: B.navList,
                                                        role: "tablist",
                                                        "aria-label": F.intl.string(F.t["2j4Vgd"]),
                                                        children: [
                                                            eE
                                                                ? (0, r.jsxs)(r.Fragment, {
                                                                      children: [eM, eL, ej],
                                                                  })
                                                                : (0, r.jsxs)(r.Fragment, {
                                                                      children: [eL, ej, eM],
                                                                  }),
                                                            e_ &&
                                                                ew &&
                                                                (0, r.jsx)(Q, {
                                                                    id: U.Hr,
                                                                    "aria-controls": U.gV,
                                                                    "aria-selected": ec === j.X1.SOUNDBOARD,
                                                                    isActive: ec === j.X1.SOUNDBOARD,
                                                                    viewType: j.X1.SOUNDBOARD,
                                                                    children: (0, r.jsxs)("div", {
                                                                        className: B.soundmojiLabelContainer,
                                                                        children: [
                                                                            F.intl.string(F.t.EHlAMc),
                                                                            null != eT &&
                                                                                (0, r.jsx)(_.IGR, {
                                                                                    text: F.intl.string(F.t.y2b7CA),
                                                                                }),
                                                                        ],
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                })
                                              : null,
                                          ec === j.X1.STICKER && ey
                                              ? (0, r.jsx)(R.Z, {
                                                    isLoading: ep,
                                                    channel: K,
                                                    containerWidth: es,
                                                    onSelectSticker: Y,
                                                    closePopout: eI,
                                                    ref: (e) => {
                                                        ea.current = e;
                                                    },
                                                })
                                              : null,
                                          ec === j.X1.GIF && eb
                                              ? (0, r.jsx)(S.Z, {
                                                    onSelectGIF: V,
                                                    hideFavorites: m,
                                                    persistSearch: !0,
                                                })
                                              : null,
                                          ec === j.X1.EMOJI
                                              ? (0, r.jsx)(O.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eO
                                                        ? O.v.TABS_EXPRESSION_PICKER
                                                        : O.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: K,
                                                    containerWidth: es,
                                                    includeCreateEmojiButton: w,
                                                    emojiSize: null != es && es < q ? U.Su.MEDIUM : U.Su.LARGE,
                                                    pickerIntention: G.Hz.CHAT,
                                                    closePopout: eI,
                                                    onSelectEmoji: H,
                                                    onSelectSoundmoji: eP,
                                                    ref: (e) => {
                                                        ea.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker:
                                                        (null == (t = z.soundmoji) ? void 0 : t.allowSending) === !0,
                                                    showAddEmojiButton: ev.enabled,
                                                })
                                              : null,
                                          ec === j.X1.SOUNDBOARD
                                              ? (0, r.jsx)("div", {
                                                    className: B.soundboardContainer,
                                                    children: (0, r.jsx)(A.Z, {
                                                        guildId: K.guild_id,
                                                        channel: K,
                                                        containerWidth: es,
                                                        onClose: eI,
                                                        onSelect: eR,
                                                        analyticsSource: "expression-picker",
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)("div", {
                                                                className: B.soundboardHeader,
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
