n.d(t, { Z: () => J }), n(388685);
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
    v = n(455708),
    S = n(314910),
    I = n(728285),
    T = n(125900),
    C = n(603074),
    A = n(453070),
    N = n(926491),
    P = n(457040),
    R = n(740492),
    w = n(574254),
    D = n(585483),
    x = n(28546),
    L = n(957825),
    j = n(981631),
    M = n(921944),
    k = n(149203),
    U = n(185923),
    G = n(611480),
    Z = n(388032),
    F = n(132775);
function B(e, t, n) {
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
                B(e, t, n[t]);
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
            _.P3F,
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
                        E.ZP.trackWithMetadata(j.rMx.EXPRESSION_PICKER_TAB_CLICKED, {
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
            a = (0, d.e7)([R.ZP], () => R.ZP.expressionPickerWidth),
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
            p = i.useCallback(
                (e) => {
                    let t = e >= o ? L._j.MAX : e <= L.Om ? L._j.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ""),
                        m.ZP.updatedUnsyncedSettings({ expressionPickerWidth: t }),
                        u(t);
                },
                [n, o],
            ),
            _ = (0, g.Z)({
                initialElementDimension: f,
                maxDimension: o,
                minDimension: L.Om,
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
function X(e) {
    var t, n, a, s;
    let {
            positionTargetRef: l,
            hideGifFavorites: m,
            onSelectGIF: R,
            onSelectEmoji: B,
            onSelectSticker: V,
            onSelectSound: H,
            channel: Y,
            type: W,
            position: K,
            align: X,
            positionLayerClassName: J,
            closeOnModalOuterClick: $ = !1,
            parentModalKey: ee,
        } = e,
        et = i.useRef(null),
        en = i.useRef(!1),
        er = i.useRef(null),
        ei = i.useRef(null),
        { drawerWidth: ea, handleDrawerResizeHandleMouseDown: eo } = Q({
            positionContainerRef: et,
            drawerRef: ei,
            orientation: "left" === X ? g.y.HORIZONTAL_RIGHT : g.y.HORIZONTAL_LEFT,
        }),
        es = (0, x.Iu)((e) => e.activeView),
        el = (0, A.fQ)(Y),
        { renderWindow: ec, windowDispatch: eu } = i.useContext(I.ZP),
        ed = (0, d.e7)([N.Z], () => !N.Z.hasLoadedStickerPacks),
        ef = (0, T.V2)({ location: "expression_picker" }),
        ep = (0, d.e7)([w.Z], () => w.Z.isOpen()),
        e_ = null != ee,
        em = (0, p.useIsModalAtTop)(null != ee ? ee : ""),
        { reorderExpressionPickerTabs: eh } = b.n.useConfig({ location: "expression_picker" }),
        eg = (null == (t = W.gifs) ? void 0 : t.allowSending) && !c.tq && null != R,
        eE = (null == (n = W.stickers) ? void 0 : n.allowSending) && null != V,
        eb = !(null == (a = W.expressionPicker) ? void 0 : a.onlyEmojis) && (eg || eE),
        ey = i.useCallback(
            (e) => {
                var t;
                if ((!e_ && (0, p.hasAnyModalOpen)()) || (e_ && !(em && $)) || ep || e.defaultPrevented) return;
                let { target: n } = e;
                if ((0, u.kK)(n) && null != n.closest("." + L.CT)) return;
                for (; (0, u.kK)(n); ) {
                    if (
                        n === ei.current ||
                        "true" === n.getAttribute("data-menu-item") ||
                        "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                        "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                    )
                        return;
                    n = n.parentNode;
                }
                (0, x._Q)();
                let r = null == (t = (0, u.uB)(e)) ? void 0 : t.activeElement;
                (null == r || "BODY" === r.tagName) && D.S.dispatchToLastSubscribed(j.CkL.TEXTAREA_FOCUS);
            },
            [$, em, e_, ep],
        ),
        eO = i.useCallback(() => {
            (0, x._Q)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            es === L.X1.GIF && (0, x._Q)();
        };
        return (
            ec.addEventListener("mousedown", ey),
            ec.addEventListener("contextmenu", ey),
            eu.subscribe(j.CkL.POPOUT_CLOSE, eO),
            D.S.subscribe(j.CkL.CLOSE_GIF_PICKER, e),
            () => {
                ec.removeEventListener("mousedown", ey),
                    ec.removeEventListener("contextmenu", ey),
                    eu.unsubscribe(j.CkL.POPOUT_CLOSE, eO),
                    D.S.unsubscribe(j.CkL.CLOSE_GIF_PICKER, e);
            }
        );
    }, [es, eO, ey, ec, eu]),
        (0, _.Tbt)(et);
    let [ev, eS] = (0, y.US)(ef ? [f.z.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eI, eT] = i.useState(!1);
    i.useEffect(() => {
        es === L.X1.SOUNDBOARD && eT(!0);
    }, [es]),
        i.useEffect(
            () => () => {
                eI && eS(M.L.TAKE_ACTION);
            },
            [eI, eS],
        ),
        i.useEffect(() => {
            (0, x.ql)("");
        }, []),
        i.useEffect(() => {
            ((!e_ && (0, p.hasAnyModalOpen)()) || (e_ && !em)) && (0, x._Q)();
        }, [em, e_]),
        i.useEffect(() => {
            if (null != ei.current && !en.current) {
                var e, t, n, r;
                es === L.X1.EMOJI
                    ? (null == er || null == (e = er.current) ? void 0 : e.onPickerOpen) != null &&
                      (null == er || null == (t = er.current) || t.onPickerOpen(), (en.current = !0))
                    : es === L.X1.STICKER
                      ? (null == er || null == (n = er.current) ? void 0 : n.onPickerOpen) == null ||
                        ed ||
                        (null == er || null == (r = er.current) || r.onPickerOpen(), (en.current = !0))
                      : (E.ZP.trackWithMetadata(j.rMx.EXPRESSION_PICKER_OPENED, {
                            width: ei.current.offsetWidth,
                            tab: es,
                            badged: !1,
                        }),
                        (en.current = !0));
            }
        });
    let eC = i.useCallback((e, t) => (null == H ? void 0 : H(e, "emoji_picker", t)), [H]),
        eA = i.useCallback((e, t) => (null == H ? void 0 : H(e, "soundboard_picker", t)), [H]),
        eN = (null == (s = W.soundmoji) ? void 0 : s.allowSending) === !0 && null != H,
        eP = "left" === X ? "right" : "left",
        eR = null != J ? J : "left" === X ? F.positionLayerDefaultAlignLeft : F.positionLayerDefaultAlignRight,
        ew = eg
            ? (0, r.jsx)(q, {
                  id: k._3,
                  "aria-controls": k.vO,
                  "aria-selected": es === L.X1.GIF,
                  isActive: es === L.X1.GIF,
                  viewType: L.X1.GIF,
                  children: Z.intl.string(Z.t["6gUTsS"]),
              })
            : null,
        eD = eE
            ? (0, r.jsx)(q, {
                  id: G.ED,
                  "aria-controls": G.nZ,
                  "aria-selected": es === L.X1.STICKER,
                  isActive: es === L.X1.STICKER,
                  autoFocus: !el,
                  viewType: L.X1.STICKER,
                  children: (0, r.jsx)("div", {
                      className: F.stickersNavItem,
                      children: Z.intl.string(Z.t.nf1s3u),
                  }),
              })
            : null,
        ex = (0, r.jsx)(q, {
            id: k.td,
            "aria-controls": k.cZ,
            "aria-selected": es === L.X1.EMOJI,
            isActive: es === L.X1.EMOJI,
            viewType: L.X1.EMOJI,
            children: Z.intl.string(Z.t.Xu3wE3),
        });
    return (0, r.jsx)(h.Z, {
        section: j.jXE.EXPRESSION_PICKER,
        children: (0, r.jsx)(S.W5, {
            className: o()(F.positionLayer, eR),
            targetRef: l,
            position: K,
            align: X,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var t;
                let { isPositioned: n } = e;
                return (0, r.jsx)("section", {
                    className: o()(F.positionContainer, { [F.positionContainerOnlyEmoji]: !eb }),
                    ref: et,
                    role: "dialog",
                    "aria-label": Z.intl.string(Z.t.Utlwvi),
                    children: n
                        ? (0, r.jsxs)("div", {
                              className: F.drawerSizingWrapper,
                              style: {
                                  width: null == ea ? void 0 : ea,
                                  [X]: 0,
                              },
                              ref: ei,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: F.resizeHandle,
                                      onMouseDown: eo,
                                      style: { [eP]: -2 },
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: F.contentWrapper,
                                      children: [
                                          eb
                                              ? (0, r.jsx)("nav", {
                                                    className: F.nav,
                                                    children: (0, r.jsxs)("div", {
                                                        className: F.navList,
                                                        role: "tablist",
                                                        "aria-label": Z.intl.string(Z.t["2j4Vgd"]),
                                                        children: [
                                                            eh
                                                                ? (0, r.jsxs)(r.Fragment, {
                                                                      children: [ex, ew, eD],
                                                                  })
                                                                : (0, r.jsxs)(r.Fragment, {
                                                                      children: [ew, eD, ex],
                                                                  }),
                                                            ef &&
                                                                eN &&
                                                                (0, r.jsx)(q, {
                                                                    id: k.Hr,
                                                                    "aria-controls": k.gV,
                                                                    "aria-selected": es === L.X1.SOUNDBOARD,
                                                                    isActive: es === L.X1.SOUNDBOARD,
                                                                    viewType: L.X1.SOUNDBOARD,
                                                                    children: (0, r.jsxs)("div", {
                                                                        className: F.soundmojiLabelContainer,
                                                                        children: [
                                                                            Z.intl.string(Z.t.EHlAMc),
                                                                            null != ev &&
                                                                                (0, r.jsx)(_.IGR, {
                                                                                    text: Z.intl.string(Z.t.y2b7CA),
                                                                                }),
                                                                        ],
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                })
                                              : null,
                                          es === L.X1.STICKER && eE
                                              ? (0, r.jsx)(P.Z, {
                                                    isLoading: ed,
                                                    channel: Y,
                                                    containerWidth: ea,
                                                    onSelectSticker: V,
                                                    closePopout: eO,
                                                    ref: (e) => {
                                                        er.current = e;
                                                    },
                                                })
                                              : null,
                                          es === L.X1.GIF && eg
                                              ? (0, r.jsx)(v.Z, {
                                                    onSelectGIF: R,
                                                    hideFavorites: m,
                                                    persistSearch: !0,
                                                })
                                              : null,
                                          es === L.X1.EMOJI
                                              ? (0, r.jsx)(O.Z, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eb
                                                        ? O.v.TABS_EXPRESSION_PICKER
                                                        : O.v.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: Y,
                                                    containerWidth: ea,
                                                    emojiSize: null != ea && ea < z ? k.Su.MEDIUM : k.Su.LARGE,
                                                    pickerIntention: U.Hz.CHAT,
                                                    closePopout: eO,
                                                    onSelectEmoji: B,
                                                    onSelectSoundmoji: eC,
                                                    ref: (e) => {
                                                        er.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker:
                                                        (null == (t = W.soundmoji) ? void 0 : t.allowSending) === !0,
                                                })
                                              : null,
                                          es === L.X1.SOUNDBOARD
                                              ? (0, r.jsx)("div", {
                                                    className: F.soundboardContainer,
                                                    children: (0, r.jsx)(C.Z, {
                                                        guildId: Y.guild_id,
                                                        channel: Y,
                                                        containerWidth: ea,
                                                        onClose: eO,
                                                        onSelect: eA,
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
let J = i.memo(X);
