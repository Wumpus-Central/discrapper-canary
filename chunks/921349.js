n.d(t, { V: () => G }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(423802),
    l = n(372817),
    c = n(924826),
    u = n(91192),
    d = n(260866),
    f = n(872175),
    _ = n(907331),
    p = n(793030),
    h = n(693789),
    m = n(15127),
    g = n(235874),
    E = n(993365),
    b = n(74655),
    y = n(333200),
    O = n(481060),
    v = n(393238),
    I = n(98650),
    T = n(383056),
    S = n(388032),
    A = n(361421);
function C(e, t, n) {
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
function N(e) {
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
                C(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = D(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let L = 44,
    x = { keys: ["label"] };
function M(e) {
    return e.label;
}
function k(e) {
    let { active: t, loadableOptions: n, debounceTime: r } = e,
        a = "function" == typeof n,
        [o, s] = i.useState({
            options: a ? [] : n,
            query: "",
            debouncedQuery: "",
            loading: !1,
        }),
        { options: l, loading: c, query: u, debouncedQuery: d } = o,
        f = i.useCallback(
            (e) =>
                s((t) =>
                    P(N({}, t), {
                        loading: a,
                        query: e,
                        debouncedQuery: e,
                    }),
                ),
            [a],
        );
    return (
        i.useEffect(() => {
            t && f("");
        }, [t, f]),
        i.useEffect(() => {
            let e;
            return (
                a
                    ? (s((e) =>
                          P(N({}, e), {
                              loading: !0,
                              debouncedQuery: null,
                          }),
                      ),
                      (e = setTimeout(
                          () => {
                              f(u);
                          },
                          null != r ? r : 500,
                      )))
                    : f(u),
                () => {
                    clearTimeout(e);
                }
            );
        }, [a, u, r, f]),
        i.useEffect(() => {
            let e = !1;
            function r() {
                return "function" == typeof n ? n(d) : Promise.resolve(n);
            }
            return (
                t &&
                    null !== d &&
                    r().then((t) => {
                        e ||
                            s((e) =>
                                P(N({}, e), {
                                    options: t,
                                    loading: !1,
                                }),
                            );
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, n, d]),
        {
            options: l,
            loading: c,
            onQueryChange: i.useCallback((e) => {
                s((t) => P(N({}, t), { query: e }));
            }, []),
        }
    );
}
function j(e, t) {
    return null == t
        ? []
        : (Array.isArray(t) ? t : [t])
              .map((t) => ("object" == typeof t && (null == t || "value" in t) ? t : e.find((e) => e.value === t)))
              .filter(Boolean);
}
let U = i.forwardRef(function (e, t) {
    var {
            options: n,
            value: a,
            onChange: l,
            clearable: d = !1,
            multi: h = !1,
            closeOnSelect: E = !0,
            onOpen: y,
            onClose: I,
            placeholder: T = S.intl.string(S.t.XqMe3N),
            wrapperClassName: C,
            className: R,
            isDisabled: D = !1,
            isProcessing: L = !1,
            maxVisibleItems: U = 7,
            autoFocus: G = !1,
            popoutPosition: Z = "bottom",
            popoutWidth: H,
            filter: Y = !0,
            debounceTime: z,
            renderOptionLabel: q = M,
            onSearchChange: X,
            renderOptionPrefix: Q = () => null,
            renderOptionSuffix: J = () => null,
            "aria-describedby": $,
            "aria-invalid": ee,
            "aria-labelledby": et,
            "aria-required": en,
            inputClassNames: er,
            onBlur: ei,
            onFocus: ea,
            matchSorterOptions: eo,
            clearQueryOnSelect: es = !1,
            hidePills: el,
            renderCustomPill: ec,
            customPillContainerClassName: eu,
        } = e,
        ed = w(e, [
            "options",
            "value",
            "onChange",
            "clearable",
            "multi",
            "closeOnSelect",
            "onOpen",
            "onClose",
            "placeholder",
            "wrapperClassName",
            "className",
            "isDisabled",
            "isProcessing",
            "maxVisibleItems",
            "autoFocus",
            "popoutPosition",
            "popoutWidth",
            "filter",
            "debounceTime",
            "renderOptionLabel",
            "onSearchChange",
            "renderOptionPrefix",
            "renderOptionSuffix",
            "aria-describedby",
            "aria-invalid",
            "aria-labelledby",
            "aria-required",
            "inputClassNames",
            "onBlur",
            "onFocus",
            "matchSorterOptions",
            "clearQueryOnSelect",
            "hidePills",
            "renderCustomPill",
            "customPillContainerClassName",
        ]);
    let { fieldProps: ef, props: e_ } = (0, p.XF_)(ed),
        { ref: ep, width: eh } = (0, v.ZP)(),
        { titleId: em, errorId: eg, error: eE } = (0, m.Gc)(),
        { ref: eb, width: ey } = (0, v.ZP)(),
        eO = i.useRef(null),
        [ev, eI] = i.useState(null),
        [eT, eS] = i.useState(!1),
        [eA, eC] = i.useState(null),
        [eN, eR] = i.useState(!1),
        eP = i.useRef(null),
        ew = i.useRef(null),
        {
            options: eD,
            loading: eL,
            onQueryChange: ex,
        } = k({
            active: eT,
            loadableOptions: n,
            debounceTime: z,
        }),
        eM = i.useMemo(() => j(eD, a), [eD, a]),
        ek = i.useMemo(() => eM.map((e) => e.value), [eM]),
        ej = eM[eM.length - 1],
        eU = (0, f.Z)(ej),
        eG = i.useId(),
        eB = i.useId(),
        eZ = i.useCallback(
            (e) => {
                eT === e || D || (eS(e), e ? null == y || y() : null == I || I());
            },
            [D, I, y, eT],
        ),
        eF = i.useCallback(
            (e) => {
                eT && !e && eZ(!1);
            },
            [eZ, eT],
        ),
        eV = (0, _.O)(eF);
    i.useImperativeHandle(t, () => ({
        close() {
            eZ(!1);
        },
    }));
    let eH = i.useCallback((e, t) => {
            let n = document.querySelector(e),
                r = eP.current;
            eI(t), null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        eY = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eP.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eW = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eP.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eK = (0, c.ZP)({
            id: eB,
            defaultFocused: null != ej ? String(ej.value) : void 0,
            scrollToStart: eY,
            scrollToEnd: eW,
            isEnabled: eT,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eH,
            disableClickOnSpace: !0,
        }),
        ez = (0, f.Z)(eK),
        eq = (0, f.Z)(eD);
    i.useEffect(() => {
        let e = eq.current,
            t = eU.current;
        eT &&
            null != t &&
            !eL &&
            requestAnimationFrame(() => {
                let n = eP.current,
                    r = e.indexOf(t);
                null == n ||
                    n.scrollToIndex({
                        section: 0,
                        row: r,
                    });
            });
    }, [eT, eL, eq, eU]),
        i.useEffect(() => {
            let e = ez.current;
            if (eT && !eL) {
                var t;
                let n = eO.current;
                if (null != n) {
                    n.focus();
                    let { value: e } = n;
                    (n.value = " "), (n.value = e);
                }
                eI(null != (t = e.focusedItemId()) ? t : null);
            } else {
                let t = eU.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), eI(null);
            }
        }, [eT, eL, ez, eU]),
        i.useLayoutEffect(() => {
            eT || (h ? eC("") : null != ej && eC(ej.label));
        }, [h, ej, eT]),
        i.useLayoutEffect(() => {
            h && eC("");
        }, [h, eM.length]);
    let eX = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) return void l(h ? [] : void 0);
            let r = "function" == typeof n,
                i = r ? eD.find((t) => t.value === e) : e;
            if (h) {
                let n = null != a ? a : [];
                if (
                    (n.some((t) => (r ? t.value : t) === e)
                        ? l(n.filter((t) => (r ? t.value : t) !== e))
                        : l([...n, i]),
                    t)
                ) {
                    var o;
                    null == (o = eO.current) || o.focus();
                }
            } else l(i);
            eI(null), (!h || E) && eZ(!1), eR(!1), es && eC("");
        },
        [n, eD, h, E, es, l, a, eZ],
    );
    i.useLayoutEffect(() => {
        if (G) {
            var e;
            null == (e = eO.current) || e.focus();
        }
    }, [G]);
    let eQ = i.useCallback(() => {
            eC(""), eX(null), eZ(!0);
        }, [eX, eZ]),
        eJ = i.useCallback(
            (e) => {
                switch (e.key) {
                    case "Escape":
                        eT && (e.stopPropagation(), eZ(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        eZ(!0);
                }
            },
            [eZ, eT],
        ),
        e$ = eD;
    eN && null != eA && !1 !== Y && (e$ = "function" == typeof Y ? Y(eD, eA) : (0, s.Lu)(eD, eA, null != eo ? eo : x)),
        i.useEffect(() => {
            let e = eP.current;
            null == e || e.scrollToTop();
        }, [eA]),
        i.useEffect(() => {
            !eL && eN && null !== eA && requestAnimationFrame(() => eK.focusFirstVisibleItem());
        }, [eL, eN, eA, eK]);
    let e0 = h ? K : W,
        e1 = i.useRef(null),
        { focusPreviousItem: e2, focusNextItem: e3 } = F(e1, eO, eM);
    return (0, r.jsxs)(u.bG, {
        navigator: eK,
        children: [
            (0, r.jsx)(g.y, {
                targetElementRef: ew,
                spacing: 0,
                animation: g.y.Animation.NONE,
                shouldShow: eT,
                onRequestClose: () => eZ(!1),
                layerContext: e_.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: t, position: n, updatePosition: i } = e;
                    return (0, r.jsx)(B, {
                        loading: eL,
                        multi: !!h,
                        listRef: eP,
                        listId: eG,
                        maxVisibleItems: U,
                        width: null != H && "auto" !== H ? H : ey,
                        selectedValues: ek,
                        closePopout: t,
                        onSelect: eX,
                        closeOnSelect: E,
                        options: e$,
                        activeDescendant: ev,
                        renderOptionLabel: q,
                        updatePosition: i,
                        popoutPosition: n,
                        renderOptionPrefix: Q,
                        renderOptionSuffix: J,
                    });
                },
                position: Z,
                children: (e, t) => {
                    let { "aria-expanded": n, "aria-controls": i } = e,
                        { isShown: a } = t,
                        s = a ? O.u04 : O.CJ0,
                        { ref: l, onKeyDown: c } = eK.containerProps,
                        u = (e) => {
                            var t;
                            null == (t = e_.onKeyDown) || t.call(e_, e), c(e), eJ(e);
                        };
                    return (0, r.jsx)(
                        p.gNt,
                        P(N({}, ef), {
                            children: (e) => {
                                var t;
                                let i = null == e ? void 0 : e.controlId;
                                return (0, r.jsxs)(b.U, {
                                    as: "div",
                                    disabled: D,
                                    ref: ew,
                                    className: o()(C, A.wrapper),
                                    containerClassName: R,
                                    style: { "--icons-width": "".concat(eh, "px") },
                                    onBlur: (e) => {
                                        var t, n, r;
                                        (null == (t = ew.current) ? void 0 : t.contains(e.relatedTarget)) ||
                                            (null == (r = eP.current) || null == (n = r.getScrollerNode())
                                                ? void 0
                                                : n.contains(e.relatedTarget)) ||
                                            (h || null == ej || eC(ej.label), eR(!1), eZ(!1), null == ei || ei(e));
                                    },
                                    children: [
                                        (0, r.jsx)(p.tEY, {
                                            ringTarget: eb,
                                            focusTarget: eO,
                                            offset: 4,
                                            children: (0, r.jsx)("div", {
                                                onClick: D
                                                    ? void 0
                                                    : (e) => {
                                                          e.stopPropagation(), e.preventDefault(), eC(""), eZ(!0);
                                                      },
                                                onMouseDown: (e) => {
                                                    e.preventDefault();
                                                },
                                                ref: (e) => {
                                                    (eb.current = e), (eV.current = e);
                                                },
                                                className: o()(A.select, A.searchable, { [A.multi]: h }),
                                                children: (0, r.jsx)("div", {
                                                    className: o()(A.value, { [A.multi]: h }),
                                                    children: (0, r.jsx)(e0, {
                                                        query: eA,
                                                        selectedOptions: eM,
                                                        loading: eL,
                                                        renderOptionPrefix: Q,
                                                        renderOptionSuffix: J,
                                                        isDisabled: D,
                                                        isEditing: eN,
                                                        isProcessing: L,
                                                        inputRef: eO,
                                                        "aria-describedby":
                                                            null != $ ? $ : null == e ? void 0 : e.describedById,
                                                        "aria-errormessage":
                                                            null != (t = null == e ? void 0 : e.errorMessageId)
                                                                ? t
                                                                : eg,
                                                        "aria-invalid":
                                                            null != ee
                                                                ? ee
                                                                : (null == e ? void 0 : e.errorMessageId) != null ||
                                                                  null != eE,
                                                        "aria-required": null != en ? en : ef.required,
                                                        "aria-labelledby": null != et ? et : em,
                                                        "aria-expanded": n,
                                                        setInputRef: (e) => {
                                                            (l.current = e), (eO.current = e);
                                                        },
                                                        onFocus: (e) => {
                                                            var t, n;
                                                            null == (t = eO.current) ||
                                                                t.setSelectionRange(
                                                                    0,
                                                                    null != (n = null == eA ? void 0 : eA.length)
                                                                        ? n
                                                                        : 0,
                                                                ),
                                                                null == ea || ea(e);
                                                        },
                                                        onChange: (e) => {
                                                            ex(e), null == X || X(e), eC(e), eZ(!0), eR(!0);
                                                        },
                                                        onKeyDown: u,
                                                        activeDescendant: ev,
                                                        placeholder: T,
                                                        inputId: i,
                                                        listboxId: eG,
                                                        navigatorId: eB,
                                                        selectValue: function (e) {
                                                            let t =
                                                                !(arguments.length > 1) ||
                                                                void 0 === arguments[1] ||
                                                                arguments[1];
                                                            eX(e, t);
                                                        },
                                                        inputClassNames: er,
                                                        hidePills: el,
                                                    }),
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: o()(A.icons, A.iconsContainer, { [A.multi]: h }),
                                            ref: ep,
                                            children: L
                                                ? (0, r.jsx)(O.bbz, {
                                                      dotRadius: 3.5,
                                                      themed: !0,
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          d && ((null != eA && "" !== eA) || eM.length > 0)
                                                              ? (0, r.jsx)(p.P3F, {
                                                                    "aria-label": S.intl.string(S.t.VkKicX),
                                                                    "aria-controls": i,
                                                                    onClick: eQ,
                                                                    children: (0, r.jsx)(O.Dio, {
                                                                        size: "xs",
                                                                        color: "currentColor",
                                                                        className: A.clear,
                                                                    }),
                                                                })
                                                              : null,
                                                          (0, r.jsx)(p.P3F, {
                                                              "aria-label": eT
                                                                  ? S.intl.string(S.t.cpT0Cg)
                                                                  : S.intl.string(S.t["3xjX0d"]),
                                                              "aria-controls": i,
                                                              onClick: () => {
                                                                  eZ(!eT);
                                                              },
                                                              children: (0, r.jsx)(s, {
                                                                  className: A.dropdownIcon,
                                                                  size: "sm",
                                                              }),
                                                          }),
                                                      ],
                                                  }),
                                        }),
                                    ],
                                });
                            },
                        }),
                    );
                },
            }),
            eM.length > 0 &&
                null != ec &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(V, {
                        listRef: e1,
                        selectedOptions: eM,
                        selectValue: function (e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            eX(e, t);
                        },
                        focusNextItem: e3,
                        focusPreviousItem: e2,
                        renderCustomPill: ec,
                        customPillContainerClassName: eu,
                    }),
                }),
        ],
    });
});
function G(e) {
    let t = (0, T.l)("SearchableSelect"),
        {
            id: n,
            options: i,
            required: a,
            disabled: o,
            isDisabled: s,
            value: l,
            multi: c,
            clearable: u,
            closeOnSelect: d = !0,
            filter: f,
            matchSorterOptions: _,
            "aria-required": h,
            onChange: m,
            onSearchChange: g,
            onKeyDown: E,
            onFocus: b,
            onBlur: O,
            debounceTime: v,
            hidePills: I,
            renderOptionLabel: S,
            renderOptionPrefix: A,
            renderOptionSuffix: C,
        } = e,
        { fieldProps: R } = (0, p.XF_)(e),
        w = null != v || "function" == typeof i || null != S;
    if (t && !w) {
        let e = null != f && "function" == typeof f ? f : void 0;
        return (0, r.jsx)(
            y.V,
            P(
                N(
                    {
                        id: n,
                        selectionMode: c ? "multiple" : "single",
                        required: a || h,
                        disabled: o || s,
                        hideTags: I,
                    },
                    R,
                ),
                {
                    value: l,
                    options: i,
                    formatOption: (e) => {
                        let { key: t, value: n, label: r, disabled: i } = e;
                        return {
                            id: null != t ? t : n,
                            value: n,
                            label: r,
                            disabled: i,
                            leading:
                                null == A
                                    ? void 0
                                    : A(e, {
                                          inPill: !1,
                                          inDropdown: !0,
                                      }),
                            trailing:
                                null == C
                                    ? void 0
                                    : C(e, {
                                          inPill: !1,
                                          inDropdown: !0,
                                      }),
                        };
                    },
                    onSelectionChange: m,
                    customMatchSorter: e,
                    matchSorterOptions: _,
                    onQueryChange: (e) => (null == g ? void 0 : g(e.target.value)),
                    onKeyDown: E,
                    onFocus: b,
                    onBlur: O,
                    clearable: u,
                    closeOnSelect: d,
                },
            ),
        );
    }
    return (0, r.jsx)(U, N({}, e));
}
function B(e) {
    let {
            onSelect: t,
            closePopout: n,
            selectedValues: a,
            options: s,
            width: l,
            maxVisibleItems: c,
            activeDescendant: d,
            listRef: f,
            listId: _,
            renderOptionLabel: h,
            updatePosition: m,
            loading: g = !1,
            multi: b,
            popoutPosition: y,
            closeOnSelect: O,
            renderOptionPrefix: v = () => null,
            renderOptionSuffix: T = () => null,
        } = e,
        C = i.useRef(null),
        R = i.useCallback(
            (e) => {
                t(e), O && n();
            },
            [O, n, t],
        );
    return ((0, I.Z)(m), g)
        ? (0, r.jsx)("div", {
              "aria-busy": !0,
              className: o()(A.popout, A.loading, { [A.popoutPositionTop]: "top" === y }),
              style: { width: l },
              children: (0, r.jsx)(p.$jN, {
                  itemClassName: A.loadingSpinner,
                  type: p.RAz.PULSING_ELLIPSIS,
              }),
          })
        : 0 === s.length
          ? (0, r.jsx)("div", {
                className: o()(A.popout, A.noResults, { [A.popoutPositionTop]: "top" === y }),
                style: { width: l },
                children: (0, r.jsx)(E.x, {
                    color: "text-muted",
                    variant: "text-md/normal",
                    children: S.intl.string(S.t["Xe+fJC"]),
                }),
            })
          : (0, r.jsx)(u.SJ, {
                children: (e) => {
                    var { ref: t, onKeyDown: n } = e,
                        i = w(e, ["ref", "onKeyDown"]);
                    return (0, r.jsx)(
                        p._2F,
                        P(
                            N(
                                {
                                    className: o()(A.popout, A.searchableSelect, {
                                        [A.noScrollbar]: s.length <= c,
                                        [A.popoutPositionTop]: "top" === y,
                                    }),
                                    style: {
                                        width: l,
                                        maxHeight: c * L,
                                    },
                                    ref: (e) => {
                                        var n;
                                        f.current = e;
                                        let r = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null;
                                        (C.current = r), (t.current = r);
                                    },
                                },
                                i,
                            ),
                            {
                                role: void 0,
                                innerRole: "listbox",
                                innerAriaMultiselectable: b,
                                innerId: _,
                                rowHeight: L,
                                sections: [s.length],
                                sectionHeight: 0,
                                renderRow: (e) => {
                                    var t;
                                    let { row: n } = e,
                                        i = s[n],
                                        o = h(i);
                                    return (0, r.jsx)(
                                        H,
                                        {
                                            multi: b,
                                            "aria-posinset": n,
                                            "aria-setsize": s.length,
                                            isSelected: a.includes(i.value),
                                            isFocused: d === String(i.value),
                                            value: i.value,
                                            label: o,
                                            onSelect: R,
                                            prefix: v(i, {
                                                inPill: !1,
                                                inDropdown: !0,
                                            }),
                                            suffix: T(i, {
                                                inPill: !1,
                                                inDropdown: !0,
                                            }),
                                        },
                                        null != (t = i.key) ? t : n,
                                    );
                                },
                                renderSection: () => null,
                            },
                        ),
                    );
                },
            });
}
function Z(e, t) {
    if (null == e || null == t) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(t) & n) === n;
}
function F(e, t, n) {
    let r = i.useMemo(
            () =>
                (0, l.E)({
                    getFocusableElements() {
                        let t = e.current;
                        return null != t ? Array.from(t.querySelectorAll("[data-option-pill-value]")) : [];
                    },
                    getActiveElement() {
                        var t, n;
                        return null == e || null == (n = e.current) || null == (t = n.ownerDocument)
                            ? void 0
                            : t.activeElement;
                    },
                }),
            [n, e],
        ),
        a = i.useCallback(
            (t) => {
                var n, r;
                return t === (null == (r = e.current) || null == (n = r.ownerDocument) ? void 0 : n.activeElement);
            },
            [e],
        ),
        o = i.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await r.getPreviousFocusableElement({ wrap: !e });
                if (e && ((null == n || a(n)) && (n = await r.getNextFocusableElement()), null == n || a(n))) {
                    var i;
                    return null == (i = t.current) ? void 0 : i.focus();
                }
                return null == n ? void 0 : n.focus();
            },
            [r, a, t],
        );
    return {
        focusPreviousItem: o,
        focusNextItem: i.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await r.getNextFocusableElement({ wrap: !e });
                if (e && ((null == n || a(n)) && (n = await r.getPreviousFocusableElement()), null == n || a(n))) {
                    var i;
                    return null == (i = t.current) ? void 0 : i.focus();
                }
                return null == n ? void 0 : n.focus();
            },
            [r, a, t],
        ),
        focusLastItem: i.useCallback(async () => {
            let e = await r.getLastFocusableElement();
            return null == e ? void 0 : e.focus();
        }, [r]),
    };
}
function V(e) {
    let {
            selectedOptions: t,
            selectValue: n,
            listRef: a,
            focusPreviousItem: o,
            focusNextItem: s,
            renderOptionSuffix: l,
            renderOptionPrefix: c,
            renderCustomPill: u,
            customPillContainerClassName: d,
        } = e,
        f = null != u,
        _ = i.useCallback(
            (e) => {
                if (null != a.current)
                    switch (e.key) {
                        case "ArrowRight":
                            return e.stopPropagation(), e.preventDefault(), s();
                        case "ArrowLeft":
                            return e.stopPropagation(), e.preventDefault(), o();
                    }
            },
            [a, o, s],
        ),
        [p, h] = i.useState(null);
    return (0, r.jsx)("ul", {
        className: f ? d : A.optionPillContainer,
        ref: a,
        onKeyDown: _,
        onFocus: (e) => {
            let t = e.target;
            null != a.current && Z(a.current, t) && h(t.getAttribute("data-option-pill-value"));
        },
        onBlur: (e) => {
            let t = e.relatedTarget;
            Z(a.current, t) || h(null);
        },
        children: t.map((e, t) => {
            var i;
            return (0, r.jsx)(
                "li",
                {
                    className: f ? void 0 : A.optionPillItem,
                    children: (0, r.jsx)(q, {
                        isCustomPill: f,
                        option: e,
                        focused: null == p ? 0 === t : p === String(e.value),
                        onClick: () => n(e.value),
                        renderOptionPrefix: c,
                        renderOptionSuffix: l,
                        onKeyDown: async (t) => {
                            "Backspace" === t.key
                                ? (await o(!0), n(e.value, !1))
                                : "Delete" === t.key && (await s(!0), n(e.value, !1));
                        },
                        children: f
                            ? u(e)
                            : (0, r.jsx)("div", {
                                  className: A.content,
                                  children: e.label,
                              }),
                    }),
                },
                null != (i = e.key) ? i : "".concat(e.label, "-").concat(e.value),
            );
        }),
    });
}
function H(e) {
    var { value: t, label: n, prefix: i, suffix: a, onSelect: s, isSelected: l, isFocused: c, multi: d } = e,
        f = w(e, ["value", "label", "prefix", "suffix", "onSelect", "isSelected", "isFocused", "multi"]);
    let _ = (0, u.JA)(String(t));
    return (0, r.jsxs)(
        p.P3F,
        P(
            N(
                {
                    tag: "li",
                    style: { height: L },
                    focusProps: { enabled: !1 },
                    className: o()(A.option, {
                        [A.focused]: c,
                        [A.multi]: d,
                    }),
                    onClick: () => s(t),
                },
                _,
                f,
            ),
            {
                "aria-selected": l,
                id: _["data-list-item-id"],
                "data-searchable-select-option": !0,
                role: "option",
                children: [
                    (0, r.jsxs)("div", {
                        className: A.content,
                        children: [n, "\xA0"],
                    }),
                    null != i &&
                        (0, r.jsx)("div", {
                            className: A.prefix,
                            children: i,
                        }),
                    " ",
                    null != a &&
                        (0, r.jsx)("div", {
                            className: A.suffix,
                            children: a,
                        }),
                    " ",
                    (0, r.jsx)(Y, {
                        isSelected: l,
                        multi: d,
                    }),
                ],
            },
        ),
    );
}
function Y(e) {
    let { isSelected: t, multi: n } = e,
        i = 24;
    return n
        ? (0, r.jsx)(p.FZ5, {
              checked: t,
              size: 20,
          })
        : t
          ? (0, r.jsx)(O.owK, {
                size: "custom",
                color: "currentColor",
                "aria-hidden": !0,
                secondaryColor: "white",
                className: A.selectedIcon,
                width: i,
                height: i,
            })
          : null;
}
function W(e) {
    var { selectedOptions: t, renderOptionPrefix: n, renderOptionSuffix: i } = e,
        a = w(e, ["selectedOptions", "renderOptionPrefix", "renderOptionSuffix"]);
    let o = t[0],
        s =
            null == n
                ? void 0
                : n(null != o ? o : null, {
                      inPill: !1,
                      inDropdown: !1,
                  }),
        l =
            null == i
                ? void 0
                : i(null != o ? o : null, {
                      inPill: !1,
                      inDropdown: !1,
                  });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            null != s
                ? (0, r.jsx)("div", {
                      "aria-hidden": !0,
                      children: s,
                  })
                : null,
            (0, r.jsx)(z, N({ selectedOptions: t }, a)),
            null != l
                ? (0, r.jsx)("div", {
                      "aria-hidden": !0,
                      children: l,
                  })
                : null,
        ],
    });
}
function K(e) {
    var {
            query: t,
            placeholder: n,
            selectedOptions: a,
            selectValue: s,
            onKeyDown: l,
            isEditing: c,
            isDisabled: u,
            isProcessing: d,
            inputRef: f,
            renderOptionPrefix: _,
            renderOptionSuffix: p,
            inputClassNames: h,
            hidePills: m,
        } = e,
        g = w(e, [
            "query",
            "placeholder",
            "selectedOptions",
            "selectValue",
            "onKeyDown",
            "isEditing",
            "isDisabled",
            "isProcessing",
            "inputRef",
            "renderOptionPrefix",
            "renderOptionSuffix",
            "inputClassNames",
            "hidePills",
        ]);
    let E = Math.max(n.length, (null != t ? t : "").length),
        b = i.useRef(null),
        { focusPreviousItem: y, focusNextItem: O, focusLastItem: v } = F(b, f, a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a.length > 0 &&
                !m &&
                (0, r.jsx)(V, {
                    listRef: b,
                    selectedOptions: a,
                    renderOptionPrefix: _,
                    renderOptionSuffix: p,
                    selectValue: s,
                    focusNextItem: O,
                    focusPreviousItem: y,
                }),
            (0, r.jsx)(
                z,
                N(
                    {
                        style: { width: "".concat(E, "ch") },
                        className: o()(A.multi, h),
                        query: t,
                        placeholder: n,
                        selectValue: s,
                        selectedOptions: a,
                        hidePills: m,
                        isEditing: c,
                        isDisabled: u,
                        isProcessing: d,
                        inputRef: f,
                        onKeyDown: (e) => {
                            ["ArrowLeft", "Backspace"].includes(e.key) && ("" === t || null == t) && a.length > 0
                                ? v()
                                : l(e);
                        },
                    },
                    g,
                ),
            ),
        ],
    });
}
function z(e) {
    let {
        query: t,
        inputId: n,
        "aria-describedby": i,
        "aria-invalid": a,
        "aria-required": s,
        "aria-labelledby": l,
        "aria-expanded": c,
        isDisabled: u,
        listboxId: f,
        activeDescendant: _,
        navigatorId: p,
        onChange: h,
        onFocus: m,
        setInputRef: g,
        isEditing: E,
        onKeyDown: b,
        placeholder: y,
        isProcessing: O,
        loading: v,
        style: I,
        className: T,
        selectedOptions: S,
        hidePills: C,
    } = e;
    return (0, r.jsx)("input", {
        role: "combobox",
        id: n,
        "aria-haspopup": "listbox",
        "aria-invalid": a,
        "aria-labelledby": l,
        "aria-autocomplete": "list",
        "aria-expanded": c,
        "aria-describedby": i,
        "aria-disabled": u,
        "aria-controls": f,
        "aria-required": s,
        "aria-busy": v || O,
        style: null != I ? I : {},
        "aria-activedescendant": null != _ ? (0, d.jb)(p, _) : "",
        disabled: u,
        value: null != t ? t : "",
        onChange: (e) => {
            h(e.target.value);
        },
        onFocus: m,
        className: o()(A.searchInput, T, {
            [A.editing]: E,
            [A.disabled]: u,
        }),
        onKeyDown: b,
        placeholder: "" !== (null != t ? t : "").trim() || (S.length > 0 && !C) ? void 0 : y,
        ref: g,
    });
}
function q(e) {
    let {
            option: t,
            focused: n,
            onClick: i,
            onKeyDown: a,
            renderOptionPrefix: o,
            renderOptionSuffix: s,
            children: l,
            isCustomPill: c,
        } = e,
        u =
            !c &&
            (null == o
                ? void 0
                : o(t, {
                      inPill: !0,
                      inDropdown: !1,
                  })),
        d =
            !c &&
            (null == s
                ? void 0
                : s(t, {
                      inPill: !0,
                      inDropdown: !1,
                  }));
    return (0, r.jsx)(p.tEY, {
        offset: 3,
        children: (0, r.jsxs)(h.Button, {
            "data-migration-pending": !0,
            look: h.Button.Looks.BLANK,
            tabIndex: n ? 0 : -1,
            "data-option-pill-value": t.value,
            className: A.optionPillBtn,
            innerClassName: c ? null : A.optionPill,
            onClick: () => (null == i ? void 0 : i(t.value)),
            onKeyDown: a,
            children: [
                l,
                null != u &&
                    (0, r.jsx)("div", {
                        className: A.prefix,
                        children: u,
                    }),
                " ",
                null != d &&
                    (0, r.jsx)("div", {
                        className: A.suffix,
                        children: d,
                    }),
                (0, r.jsx)(p.nn4, { children: S.intl.string(S.t.N86XcH) }),
                !c &&
                    (0, r.jsx)(O.Dio, {
                        size: "custom",
                        color: "currentColor",
                        className: A.deleteOptionIcon,
                        width: 14,
                        height: 14,
                    }),
            ],
        }),
    });
}
