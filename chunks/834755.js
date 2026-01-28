n.d(t, {
    A: () => X,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(607399),
    u = n(621466),
    d = n(311907),
    f = n(554146),
    p = n(192308),
    _ = n(397927),
    h = n(817281),
    m = n(820284),
    g = n(761929),
    E = n(58149),
    y = n(379848),
    b = n(937773),
    O = n(855057),
    v = n(750506),
    A = n(267102),
    I = n(704591),
    S = n(989799),
    T = n(256449),
    C = n(679382),
    N = n(669201),
    w = n(964404),
    R = n(712687),
    P = n(203982),
    D = n(151271),
    L = n(698279),
    x = n(652215),
    M = n(49999),
    j = n(732139),
    k = n(307731),
    U = n(823894),
    G = n(985018),
    F = n(228539);

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

function B(e) {
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = K(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function K(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let z = 498 + j.as.MEDIUM,
    q = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: a = !1, "aria-controls": s } = e,
            l = W(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
        return (0, r.jsx)(
            _.DUT,
            Y(
                B(
                    {
                        role: "tab",
                        autoFocus: a,
                        "aria-controls": t ? s : void 0,
                    },
                    l,
                ),
                {
                    onClick: () => {
                        E.Ay.trackWithMetadata(x.HAw.EXPRESSION_PICKER_TAB_CLICKED, {
                            tab: i,
                            badged: !1,
                        }),
                            (0, D.U)(i);
                    },
                    "aria-current": t ? "page" : void 0,
                    className: o()(n, F.oi, F.pc, {
                        [F.Mv]: t,
                    }),
                },
            ),
        );
    }),
    Z = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            a = (0, d.bG)([w.Ay], () => w.Ay.expressionPickerWidth),
            [o, s] = i.useState(window.innerWidth),
            [c, u] = i.useState(null != a ? a : L.wp.MIN),
            f = i.useMemo(() => {
                switch (c) {
                    case L.wp.MIN:
                        return 498;
                    case L.wp.MAX:
                        return null;
                    default:
                        return c;
                }
            }, [c]),
            p = i.useCallback(
                (e) => {
                    let t = e >= o ? L.wp.MAX : e <= 498 ? L.wp.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ""),
                        h.Ay.updatedUnsyncedSettings({
                            expressionPickerWidth: t,
                        }),
                        u(t);
                },
                [n, o],
            ),
            _ = (0, g.A)({
                initialElementDimension: f,
                maxDimension: o,
                minDimension: 498,
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

function Q(e) {
    var t, n, a, s;
    let {
            positionTargetRef: l,
            hideGifFavorites: h,
            onSelectGIF: w,
            onSelectEmoji: V,
            onSelectSticker: B,
            onSelectSound: H,
            channel: Y,
            type: W,
            position: K,
            align: Q,
            positionLayerClassName: X,
            closeOnModalOuterClick: J = !1,
            parentModalKey: $,
        } = e,
        ee = i.useRef(null),
        et = i.useRef(!1),
        en = i.useRef(null),
        er = i.useRef(null),
        { drawerWidth: ei, handleDrawerResizeHandleMouseDown: ea } = Z({
            positionContainerRef: ee,
            drawerRef: er,
            orientation: "left" === Q ? g.R.HORIZONTAL_RIGHT : g.R.HORIZONTAL_LEFT,
        }),
        eo = (0, D.RQ)((e) => e.activeView),
        es = (0, T.ZO)(Y),
        { renderWindow: el, windowDispatch: ec } = i.useContext(A.Ay),
        eu = (0, d.bG)([C.A], () => !C.A.hasLoadedStickerPacks),
        ed = (0, I.tj)({
            location: "expression_picker",
        }),
        ef = (0, d.bG)([R.A], () => R.A.isOpen()),
        ep = null != $,
        e_ = (0, p.useIsModalAtTop)(null != $ ? $ : ""),
        eh = (null == (t = W.gifs) ? void 0 : t.allowSending) && !c.Fr && null != w,
        em = (null == (n = W.stickers) ? void 0 : n.allowSending) && null != B,
        eg = !(null == (a = W.expressionPicker) ? void 0 : a.onlyEmojis) && (eh || em),
        eE = i.useCallback(
            (e) => {
                var t;
                if ((!ep && (0, p.hasAnyModalOpen)()) || (ep && !(e_ && J)) || ef || e.defaultPrevented) return;
                let { target: n } = e;
                if ((0, u.vq)(n) && null != n.closest("." + L.VQ)) return;
                for (; (0, u.vq)(n); ) {
                    if (
                        n === er.current ||
                        "true" === n.getAttribute("data-menu-item") ||
                        "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                        "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                    )
                        return;
                    n = n.parentNode;
                }
                (0, D.v8)();
                let r = null == (t = (0, u.BF)(e)) ? void 0 : t.activeElement;
                (null == r || "BODY" === r.tagName) && P._.dispatchToLastSubscribed(x.jej.TEXTAREA_FOCUS);
            },
            [J, e_, ep, ef],
        ),
        ey = i.useCallback(() => {
            (0, D.v8)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            eo === L.kx.GIF && (0, D.v8)();
        };
        return (
            el.addEventListener("mousedown", eE),
            el.addEventListener("contextmenu", eE),
            ec.subscribe(x.jej.POPOUT_CLOSE, ey),
            P._.subscribe(x.jej.CLOSE_GIF_PICKER, e),
            () => {
                el.removeEventListener("mousedown", eE),
                    el.removeEventListener("contextmenu", eE),
                    ec.unsubscribe(x.jej.POPOUT_CLOSE, ey),
                    P._.unsubscribe(x.jej.CLOSE_GIF_PICKER, e);
            }
        );
    }, [eo, ey, eE, el, ec]),
        (0, _.tjt)(ee);
    let [eb, eO] = (0, y.kn)(ed ? [f.M.SOUNDMOJI_BADGE] : [], void 0, !1),
        [ev, eA] = i.useState(!1);
    i.useEffect(() => {
        eo === L.kx.SOUNDBOARD && eA(!0);
    }, [eo]),
        i.useEffect(
            () => () => {
                ev && eO(M.i.TAKE_ACTION);
            },
            [ev, eO],
        ),
        i.useEffect(() => {
            (0, D.Ri)("");
        }, []),
        i.useEffect(() => {
            ((!ep && (0, p.hasAnyModalOpen)()) || (ep && !e_)) && (0, D.v8)();
        }, [e_, ep]),
        i.useEffect(() => {
            if (null != er.current && !et.current) {
                var e, t, n, r;
                eo === L.kx.EMOJI
                    ? (null == en || null == (e = en.current) ? void 0 : e.onPickerOpen) != null &&
                      (null == en || null == (t = en.current) || t.onPickerOpen(), (et.current = !0))
                    : eo === L.kx.STICKER
                      ? (null == en || null == (n = en.current) ? void 0 : n.onPickerOpen) == null ||
                        eu ||
                        (null == en || null == (r = en.current) || r.onPickerOpen(), (et.current = !0))
                      : (E.Ay.trackWithMetadata(x.HAw.EXPRESSION_PICKER_OPENED, {
                            width: er.current.offsetWidth,
                            tab: eo,
                            badged: !1,
                        }),
                        (et.current = !0));
            }
        });
    let eI = i.useCallback((e, t) => (null == H ? void 0 : H(e, "emoji_picker", t)), [H]),
        eS = i.useCallback((e, t) => (null == H ? void 0 : H(e, "soundboard_picker", t)), [H]),
        eT = (null == (s = W.soundmoji) ? void 0 : s.allowSending) === !0 && null != H,
        eC = "left" === Q ? "right" : "left",
        eN = null != X ? X : "left" === Q ? F.sj : F.Jg,
        ew = eh
            ? (0, r.jsx)(q, {
                  id: j.g9,
                  "aria-controls": j.ni,
                  "aria-selected": eo === L.kx.GIF,
                  isActive: eo === L.kx.GIF,
                  viewType: L.kx.GIF,
                  children: G.intl.string(G.t["6gUTsS"]),
              })
            : null,
        eR = em
            ? (0, r.jsx)(q, {
                  id: U.LD,
                  "aria-controls": U.GX,
                  "aria-selected": eo === L.kx.STICKER,
                  isActive: eo === L.kx.STICKER,
                  autoFocus: !es,
                  viewType: L.kx.STICKER,
                  children: (0, r.jsx)("div", {
                      className: F.dG,
                      children: G.intl.string(G.t.nf1s3u),
                  }),
              })
            : null,
        eP = (0, r.jsx)(q, {
            id: j.k1,
            "aria-controls": j.Do,
            "aria-selected": eo === L.kx.EMOJI,
            isActive: eo === L.kx.EMOJI,
            viewType: L.kx.EMOJI,
            children: G.intl.string(G.t.Xu3wE3),
        });
    return (0, r.jsx)(m.A, {
        section: x.JJy.EXPRESSION_PICKER,
        children: (0, r.jsx)(v.nE, {
            className: o()(F.T8, eN),
            targetRef: l,
            position: K,
            align: Q,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var t;
                let { isPositioned: n } = e;
                return (0, r.jsx)("section", {
                    className: o()(F.V6, {
                        [F.D0]: !eg,
                    }),
                    ref: ee,
                    role: "dialog",
                    "aria-label": G.intl.string(G.t.Utlwvi),
                    children: n
                        ? (0, r.jsxs)("div", {
                              className: F.jP,
                              style: {
                                  width: null == ei ? void 0 : ei,
                                  [Q]: 0,
                              },
                              ref: er,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: F.Di,
                                      onMouseDown: ea,
                                      style: {
                                          [eC]: -2,
                                      },
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: F.FG,
                                      children: [
                                          eg
                                              ? (0, r.jsx)("nav", {
                                                    className: F.C$,
                                                    children: (0, r.jsxs)("div", {
                                                        className: F.CT,
                                                        role: "tablist",
                                                        "aria-label": G.intl.string(G.t["2j4Vgd"]),
                                                        children: [
                                                            ew,
                                                            eR,
                                                            eP,
                                                            ed &&
                                                                eT &&
                                                                (0, r.jsx)(q, {
                                                                    id: j.N6,
                                                                    "aria-controls": j.AA,
                                                                    "aria-selected": eo === L.kx.SOUNDBOARD,
                                                                    isActive: eo === L.kx.SOUNDBOARD,
                                                                    viewType: L.kx.SOUNDBOARD,
                                                                    children: (0, r.jsxs)("div", {
                                                                        className: F.sd,
                                                                        children: [
                                                                            G.intl.string(G.t.EHlAMc),
                                                                            null != eb &&
                                                                                (0, r.jsx)(_.LpS, {
                                                                                    text: G.intl.string(G.t.y2b7CA),
                                                                                }),
                                                                        ],
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                })
                                              : null,
                                          eo === L.kx.STICKER && em
                                              ? (0, r.jsx)(N.A, {
                                                    isLoading: eu,
                                                    channel: Y,
                                                    containerWidth: ei,
                                                    onSelectSticker: B,
                                                    closePopout: ey,
                                                    ref: (e) => {
                                                        en.current = e;
                                                    },
                                                })
                                              : null,
                                          eo === L.kx.GIF && eh
                                              ? (0, r.jsx)(O.A, {
                                                    onSelectGIF: w,
                                                    hideFavorites: h,
                                                    persistSearch: !0,
                                                })
                                              : null,
                                          eo === L.kx.EMOJI
                                              ? (0, r.jsx)(b.A, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eg
                                                        ? b.f.TABS_EXPRESSION_PICKER
                                                        : b.f.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: Y,
                                                    containerWidth: ei,
                                                    emojiSize: null != ei && ei < z ? j.as.MEDIUM : j.as.LARGE,
                                                    pickerIntention: k.b_.CHAT,
                                                    closePopout: ey,
                                                    onSelectEmoji: V,
                                                    onSelectSoundmoji: eI,
                                                    ref: (e) => {
                                                        en.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker:
                                                        (null == (t = W.soundmoji) ? void 0 : t.allowSending) === !0,
                                                })
                                              : null,
                                          eo === L.kx.SOUNDBOARD
                                              ? (0, r.jsx)("div", {
                                                    className: F.z,
                                                    children: (0, r.jsx)(S.A, {
                                                        guildId: Y.guild_id,
                                                        channel: Y,
                                                        containerWidth: ei,
                                                        onClose: ey,
                                                        onSelect: eS,
                                                        analyticsSource: "expression-picker",
                                                        renderHeader: (e) =>
                                                            (0, r.jsx)("div", {
                                                                className: F.BG,
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
let X = i.memo(Q);
