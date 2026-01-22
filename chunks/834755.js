n.d(t, {
    A: () => $,
}),
    n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(735438),
    l = n.n(o),
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
    b = n(184761),
    y = n(379848),
    O = n(937773),
    A = n(855057),
    v = n(750506),
    S = n(267102),
    I = n(704591),
    T = n(989799),
    C = n(256449),
    N = n(679382),
    R = n(669201),
    w = n(964404),
    P = n(712687),
    D = n(203982),
    x = n(151271),
    L = n(698279),
    j = n(652215),
    M = n(49999),
    k = n(732139),
    U = n(307731),
    G = n(823894),
    V = n(985018),
    F = n(228539);

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
                B(e, t, n[t]);
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
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = z(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}

function z(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let q = 498 + k.as.MEDIUM,
    X = i.memo(function (e) {
        let { isActive: t, className: n, viewType: i, autoFocus: a = !1, "aria-controls": o } = e,
            l = K(e, ["isActive", "className", "viewType", "autoFocus", "aria-controls"]);
        return (0, r.jsx)(
            _.DUT,
            W(
                H(
                    {
                        role: "tab",
                        autoFocus: a,
                        "aria-controls": t ? o : void 0,
                    },
                    l,
                ),
                {
                    onClick: () => {
                        E.Ay.trackWithMetadata(j.HAw.EXPRESSION_PICKER_TAB_CLICKED, {
                            tab: i,
                            badged: !1,
                        }),
                            (0, x.U)(i);
                    },
                    "aria-current": t ? "page" : void 0,
                    className: s()(n, F.oi, F.pc, {
                        [F.Mv]: t,
                    }),
                },
            ),
        );
    }),
    Z = (e) => {
        let { positionContainerRef: t, drawerRef: n, orientation: r } = e,
            a = (0, d.bG)([w.Ay], () => w.Ay.expressionPickerWidth),
            [s, o] = i.useState(window.innerWidth),
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
                    let t = e >= s ? L.wp.MAX : e <= 498 ? L.wp.MIN : e;
                    null == t && null != n.current && (n.current.style.width = ""),
                        h.Ay.updatedUnsyncedSettings({
                            expressionPickerWidth: t,
                        }),
                        u(t);
                },
                [n, s],
            ),
            _ = (0, g.A)({
                initialElementDimension: f,
                maxDimension: s,
                minDimension: 498,
                resizableDomNodeRef: n,
                onElementResize: p,
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
                drawerWidth: f,
                handleDrawerResizeHandleMouseDown: i.useCallback(
                    (e) => {
                        e.stopPropagation(), null != t.current && o(t.current.offsetWidth), _(e);
                    },
                    [t, _],
                ),
            }
        );
    };

function Q(e) {
    var t, n, a, o;
    let {
            positionTargetRef: l,
            hideGifFavorites: h,
            onSelectGIF: w,
            onSelectEmoji: B,
            onSelectSticker: H,
            onSelectSound: Y,
            channel: W,
            type: K,
            position: z,
            align: Q,
            positionLayerClassName: $,
            closeOnModalOuterClick: J = !1,
            parentModalKey: ee,
        } = e,
        et = i.useRef(null),
        en = i.useRef(!1),
        er = i.useRef(null),
        ei = i.useRef(null),
        { drawerWidth: ea, handleDrawerResizeHandleMouseDown: es } = Z({
            positionContainerRef: et,
            drawerRef: ei,
            orientation: "left" === Q ? g.R.HORIZONTAL_RIGHT : g.R.HORIZONTAL_LEFT,
        }),
        eo = (0, x.RQ)((e) => e.activeView),
        el = (0, C.ZO)(W),
        { renderWindow: ec, windowDispatch: eu } = i.useContext(S.Ay),
        ed = (0, d.bG)([N.A], () => !N.A.hasLoadedStickerPacks),
        ef = (0, I.tj)({
            location: "expression_picker",
        }),
        ep = (0, d.bG)([P.A], () => P.A.isOpen()),
        e_ = null != ee,
        eh = (0, p.useIsModalAtTop)(null != ee ? ee : ""),
        { reorderExpressionPickerTabs: em } = b.C.useConfig({
            location: "expression_picker",
        }),
        eg = (null == (t = K.gifs) ? void 0 : t.allowSending) && !c.Fr && null != w,
        eE = (null == (n = K.stickers) ? void 0 : n.allowSending) && null != H,
        eb = !(null == (a = K.expressionPicker) ? void 0 : a.onlyEmojis) && (eg || eE),
        ey = i.useCallback(
            (e) => {
                var t;
                if ((!e_ && (0, p.hasAnyModalOpen)()) || (e_ && !(eh && J)) || ep || e.defaultPrevented) return;
                let { target: n } = e;
                if ((0, u.vq)(n) && null != n.closest("." + L.VQ)) return;
                for (; (0, u.vq)(n); ) {
                    if (
                        n === ei.current ||
                        "true" === n.getAttribute("data-menu-item") ||
                        "true" === n.getAttribute("data-premium-tutorial-expression-picker-tooltip") ||
                        "true" === n.getAttribute("data-premium-tutorial-persistent-coachmark-emoji-step")
                    )
                        return;
                    n = n.parentNode;
                }
                (0, x.v8)();
                let r = null == (t = (0, u.BF)(e)) ? void 0 : t.activeElement;
                (null == r || "BODY" === r.tagName) && D._.dispatchToLastSubscribed(j.jej.TEXTAREA_FOCUS);
            },
            [J, eh, e_, ep],
        ),
        eO = i.useCallback(() => {
            (0, x.v8)();
        }, []);
    i.useLayoutEffect(() => {
        let e = () => {
            eo === L.kx.GIF && (0, x.v8)();
        };
        return (
            ec.addEventListener("mousedown", ey),
            ec.addEventListener("contextmenu", ey),
            eu.subscribe(j.jej.POPOUT_CLOSE, eO),
            D._.subscribe(j.jej.CLOSE_GIF_PICKER, e),
            () => {
                ec.removeEventListener("mousedown", ey),
                    ec.removeEventListener("contextmenu", ey),
                    eu.unsubscribe(j.jej.POPOUT_CLOSE, eO),
                    D._.unsubscribe(j.jej.CLOSE_GIF_PICKER, e);
            }
        );
    }, [eo, eO, ey, ec, eu]),
        (0, _.tjt)(et);
    let [eA, ev] = (0, y.kn)(ef ? [f.M.SOUNDMOJI_BADGE] : [], void 0, !1),
        [eS, eI] = i.useState(!1);
    i.useEffect(() => {
        eo === L.kx.SOUNDBOARD && eI(!0);
    }, [eo]),
        i.useEffect(
            () => () => {
                eS && ev(M.i.TAKE_ACTION);
            },
            [eS, ev],
        ),
        i.useEffect(() => {
            (0, x.Ri)("");
        }, []),
        i.useEffect(() => {
            ((!e_ && (0, p.hasAnyModalOpen)()) || (e_ && !eh)) && (0, x.v8)();
        }, [eh, e_]),
        i.useEffect(() => {
            if (null != ei.current && !en.current) {
                var e, t, n, r;
                eo === L.kx.EMOJI
                    ? (null == er || null == (e = er.current) ? void 0 : e.onPickerOpen) != null &&
                      (null == er || null == (t = er.current) || t.onPickerOpen(), (en.current = !0))
                    : eo === L.kx.STICKER
                      ? (null == er || null == (n = er.current) ? void 0 : n.onPickerOpen) == null ||
                        ed ||
                        (null == er || null == (r = er.current) || r.onPickerOpen(), (en.current = !0))
                      : (E.Ay.trackWithMetadata(j.HAw.EXPRESSION_PICKER_OPENED, {
                            width: ei.current.offsetWidth,
                            tab: eo,
                            badged: !1,
                        }),
                        (en.current = !0));
            }
        });
    let eT = i.useCallback((e, t) => (null == Y ? void 0 : Y(e, "emoji_picker", t)), [Y]),
        eC = i.useCallback((e, t) => (null == Y ? void 0 : Y(e, "soundboard_picker", t)), [Y]),
        eN = (null == (o = K.soundmoji) ? void 0 : o.allowSending) === !0 && null != Y,
        eR = "left" === Q ? "right" : "left",
        ew = null != $ ? $ : "left" === Q ? F.sj : F.Jg,
        eP = eg
            ? (0, r.jsx)(X, {
                  id: k.g9,
                  "aria-controls": k.ni,
                  "aria-selected": eo === L.kx.GIF,
                  isActive: eo === L.kx.GIF,
                  viewType: L.kx.GIF,
                  children: V.intl.string(V.t["6gUTsS"]),
              })
            : null,
        eD = eE
            ? (0, r.jsx)(X, {
                  id: G.LD,
                  "aria-controls": G.GX,
                  "aria-selected": eo === L.kx.STICKER,
                  isActive: eo === L.kx.STICKER,
                  autoFocus: !el,
                  viewType: L.kx.STICKER,
                  children: (0, r.jsx)("div", {
                      className: F.dG,
                      children: V.intl.string(V.t.nf1s3u),
                  }),
              })
            : null,
        ex = (0, r.jsx)(X, {
            id: k.k1,
            "aria-controls": k.Do,
            "aria-selected": eo === L.kx.EMOJI,
            isActive: eo === L.kx.EMOJI,
            viewType: L.kx.EMOJI,
            children: V.intl.string(V.t.Xu3wE3),
        });
    return (0, r.jsx)(m.A, {
        section: j.JJy.EXPRESSION_PICKER,
        children: (0, r.jsx)(v.nE, {
            className: s()(F.T8, ew),
            targetRef: l,
            position: z,
            align: Q,
            spacing: 8,
            autoInvert: !0,
            clickTrap: !0,
            children: (e) => {
                var t;
                let { isPositioned: n } = e;
                return (0, r.jsx)("section", {
                    className: s()(F.V6, {
                        [F.D0]: !eb,
                    }),
                    ref: et,
                    role: "dialog",
                    "aria-label": V.intl.string(V.t.Utlwvi),
                    children: n
                        ? (0, r.jsxs)("div", {
                              className: F.jP,
                              style: {
                                  width: null == ea ? void 0 : ea,
                                  [Q]: 0,
                              },
                              ref: ei,
                              children: [
                                  (0, r.jsx)("div", {
                                      className: F.Di,
                                      onMouseDown: es,
                                      style: {
                                          [eR]: -2,
                                      },
                                  }),
                                  (0, r.jsxs)("div", {
                                      className: F.FG,
                                      children: [
                                          eb
                                              ? (0, r.jsx)("nav", {
                                                    className: F.C$,
                                                    children: (0, r.jsxs)("div", {
                                                        className: F.CT,
                                                        role: "tablist",
                                                        "aria-label": V.intl.string(V.t["2j4Vgd"]),
                                                        children: [
                                                            em
                                                                ? (0, r.jsxs)(r.Fragment, {
                                                                      children: [ex, eP, eD],
                                                                  })
                                                                : (0, r.jsxs)(r.Fragment, {
                                                                      children: [eP, eD, ex],
                                                                  }),
                                                            ef &&
                                                                eN &&
                                                                (0, r.jsx)(X, {
                                                                    id: k.N6,
                                                                    "aria-controls": k.AA,
                                                                    "aria-selected": eo === L.kx.SOUNDBOARD,
                                                                    isActive: eo === L.kx.SOUNDBOARD,
                                                                    viewType: L.kx.SOUNDBOARD,
                                                                    children: (0, r.jsxs)("div", {
                                                                        className: F.sd,
                                                                        children: [
                                                                            V.intl.string(V.t.EHlAMc),
                                                                            null != eA &&
                                                                                (0, r.jsx)(_.LpS, {
                                                                                    text: V.intl.string(V.t.y2b7CA),
                                                                                }),
                                                                        ],
                                                                    }),
                                                                }),
                                                        ],
                                                    }),
                                                })
                                              : null,
                                          eo === L.kx.STICKER && eE
                                              ? (0, r.jsx)(R.A, {
                                                    isLoading: ed,
                                                    channel: W,
                                                    containerWidth: ea,
                                                    onSelectSticker: H,
                                                    closePopout: eO,
                                                    ref: (e) => {
                                                        er.current = e;
                                                    },
                                                })
                                              : null,
                                          eo === L.kx.GIF && eg
                                              ? (0, r.jsx)(A.A, {
                                                    onSelectGIF: w,
                                                    hideFavorites: h,
                                                    persistSearch: !0,
                                                })
                                              : null,
                                          eo === L.kx.EMOJI
                                              ? (0, r.jsx)(O.A, {
                                                    hasTabWrapper: !0,
                                                    containerContext: eb
                                                        ? O.f.TABS_EXPRESSION_PICKER
                                                        : O.f.NO_TABS_EXPRESSION_PICKER,
                                                    persistSearch: !0,
                                                    channel: W,
                                                    containerWidth: ea,
                                                    emojiSize: null != ea && ea < q ? k.as.MEDIUM : k.as.LARGE,
                                                    pickerIntention: U.b_.CHAT,
                                                    closePopout: eO,
                                                    onSelectEmoji: B,
                                                    onSelectSoundmoji: eT,
                                                    ref: (e) => {
                                                        er.current = e;
                                                    },
                                                    shouldShowSoundmojiInEmojiPicker:
                                                        (null == (t = K.soundmoji) ? void 0 : t.allowSending) === !0,
                                                })
                                              : null,
                                          eo === L.kx.SOUNDBOARD
                                              ? (0, r.jsx)("div", {
                                                    className: F.z,
                                                    children: (0, r.jsx)(T.A, {
                                                        guildId: W.guild_id,
                                                        channel: W,
                                                        containerWidth: ea,
                                                        onClose: eO,
                                                        onSelect: eC,
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
let $ = i.memo(Q);
