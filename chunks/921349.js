n.d(t, { V: () => B }), n(388685), n(953529), n(781311);
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
    O = n(755721),
    v = n(481060),
    I = n(393238),
    T = n(98650),
    S = n(383056),
    A = n(388032),
    C = n(361421);
function N(e, t, n) {
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
function R(e) {
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
                N(e, t, n[t]);
            });
    }
    return e;
}
function P(e, t) {
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
function w(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : P(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function D(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = x(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function x(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let L = 44,
    M = { keys: ["label"] };
function k(e) {
    return e.label;
}
function j(e) {
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
                    w(R({}, t), {
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
                          w(R({}, e), {
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
                                w(R({}, e), {
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
                s((t) => w(R({}, t), { query: e }));
            }, []),
        }
    );
}
function U(e, t) {
    return null == t
        ? []
        : (Array.isArray(t) ? t : [t])
              .map((t) => ("object" == typeof t && (null == t || "value" in t) ? t : e.find((e) => e.value === t)))
              .filter(Boolean);
}
let G = i.forwardRef(function (e, t) {
    var {
            options: n,
            value: a,
            onChange: l,
            clearable: d = !1,
            multi: h = !1,
            closeOnSelect: E = !0,
            onOpen: y,
            onClose: O,
            placeholder: T = A.intl.string(A.t.XqMe3N),
            wrapperClassName: S,
            className: N,
            isDisabled: R = !1,
            isProcessing: P = !1,
            maxVisibleItems: w = 7,
            autoFocus: x = !1,
            popoutPosition: L = "bottom",
            popoutWidth: G,
            filter: B = !0,
            debounceTime: F,
            renderOptionLabel: Y = k,
            onSearchChange: W,
            renderOptionPrefix: q = () => null,
            renderOptionSuffix: X = () => null,
            "aria-describedby": Q,
            "aria-invalid": J,
            "aria-labelledby": $,
            "aria-required": ee,
            inputClassNames: et,
            onBlur: en,
            onFocus: er,
            matchSorterOptions: ei,
            clearQueryOnSelect: ea = !1,
            hidePills: eo,
            renderCustomPill: es,
            customPillContainerClassName: el,
            label: ec,
            hideLabel: eu,
            required: ed,
            description: ef,
            helperText: e_,
            errorMessage: ep,
            successMessage: eh,
            layout: em,
        } = e,
        eg = D(e, [
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
            "label",
            "hideLabel",
            "required",
            "description",
            "helperText",
            "errorMessage",
            "successMessage",
            "layout",
        ]);
    let { ref: eE, width: eb } = (0, I.ZP)(),
        { titleId: ey, errorId: eO, error: ev } = (0, m.Gc)(),
        { ref: eI, width: eT } = (0, I.ZP)(),
        eS = i.useRef(null),
        [eA, eC] = i.useState(null),
        [eN, eR] = i.useState(!1),
        [eP, ew] = i.useState(null),
        [eD, ex] = i.useState(!1),
        eL = i.useRef(null),
        eM = i.useRef(null),
        {
            options: ek,
            loading: ej,
            onQueryChange: eU,
        } = j({
            active: eN,
            loadableOptions: n,
            debounceTime: F,
        }),
        eG = i.useMemo(() => U(ek, a), [ek, a]),
        eB = i.useMemo(() => eG.map((e) => e.value), [eG]),
        eZ = eG[eG.length - 1],
        eF = (0, f.Z)(eZ),
        eV = i.useId(),
        eH = i.useId(),
        eY = i.useCallback(
            (e) => {
                eN === e || R || (eR(e), e ? null == y || y() : null == O || O());
            },
            [R, O, y, eN],
        ),
        eW = i.useCallback(
            (e) => {
                eN && !e && eY(!1);
            },
            [eY, eN],
        ),
        eK = (0, _.O)(eW);
    i.useImperativeHandle(t, () => ({
        close() {
            eY(!1);
        },
    }));
    let ez = i.useCallback((e, t) => {
            let n = document.querySelector(e),
                r = eL.current;
            eC(t), null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        eq = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eL.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eX = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eL.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eQ = (0, c.ZP)({
            id: eH,
            defaultFocused: null != eZ ? String(eZ.value) : void 0,
            scrollToStart: eq,
            scrollToEnd: eX,
            isEnabled: eN,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: ez,
            disableClickOnSpace: !0,
        }),
        eJ = (0, f.Z)(eQ),
        e$ = (0, f.Z)(ek);
    i.useEffect(() => {
        let e = e$.current,
            t = eF.current;
        eN &&
            null != t &&
            !ej &&
            requestAnimationFrame(() => {
                let n = eL.current,
                    r = e.indexOf(t);
                null == n ||
                    n.scrollToIndex({
                        section: 0,
                        row: r,
                    });
            });
    }, [eN, ej, e$, eF]),
        i.useEffect(() => {
            let e = eJ.current;
            if (eN && !ej) {
                var t;
                let n = eS.current;
                if (null != n) {
                    n.focus();
                    let { value: e } = n;
                    (n.value = " "), (n.value = e);
                }
                eC(null != (t = e.focusedItemId()) ? t : null);
            } else {
                let t = eF.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), eC(null);
            }
        }, [eN, ej, eJ, eF]),
        i.useLayoutEffect(() => {
            eN || (h ? ew("") : null != eZ && ew(eZ.label));
        }, [h, eZ, eN]),
        i.useLayoutEffect(() => {
            h && ew("");
        }, [h, eG.length]);
    let e0 = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) return void l(h ? [] : void 0);
            let r = "function" == typeof n,
                i = r ? ek.find((t) => t.value === e) : e;
            if (h) {
                let n = null != a ? a : [];
                if (
                    (n.some((t) => (r ? t.value : t) === e)
                        ? l(n.filter((t) => (r ? t.value : t) !== e))
                        : l([...n, i]),
                    t)
                ) {
                    var o;
                    null == (o = eS.current) || o.focus();
                }
            } else l(i);
            eC(null), (!h || E) && eY(!1), ex(!1), ea && ew("");
        },
        [n, ek, h, E, ea, l, a, eY],
    );
    i.useLayoutEffect(() => {
        if (x) {
            var e;
            null == (e = eS.current) || e.focus();
        }
    }, [x]);
    let e1 = i.useCallback(() => {
            ew(""), e0(null), eY(!0);
        }, [e0, eY]),
        e2 = i.useCallback(
            (e) => {
                switch (e.key) {
                    case "Escape":
                        eN && (e.stopPropagation(), eY(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        eY(!0);
                }
            },
            [eY, eN],
        ),
        e3 = ek;
    eD && null != eP && !1 !== B && (e3 = "function" == typeof B ? B(ek, eP) : (0, s.Lu)(ek, eP, null != ei ? ei : M)),
        i.useEffect(() => {
            let e = eL.current;
            null == e || e.scrollToTop();
        }, [eP]),
        i.useEffect(() => {
            !ej && eD && null !== eP && requestAnimationFrame(() => eQ.focusFirstVisibleItem());
        }, [ej, eD, eP, eQ]);
    let e4 = h ? z : K,
        e8 = i.useRef(null),
        { focusPreviousItem: e5, focusNextItem: e6 } = V(e8, eS, eG);
    return (0, r.jsxs)(u.bG, {
        navigator: eQ,
        children: [
            (0, r.jsx)(g.y, {
                targetElementRef: eM,
                spacing: 0,
                animation: g.y.Animation.NONE,
                shouldShow: eN,
                onRequestClose: () => eY(!1),
                layerContext: eg.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: t, position: n, updatePosition: i } = e;
                    return (0, r.jsx)(Z, {
                        loading: ej,
                        multi: !!h,
                        listRef: eL,
                        listId: eV,
                        maxVisibleItems: w,
                        width: null != G && "auto" !== G ? G : eT,
                        selectedValues: eB,
                        closePopout: t,
                        onSelect: e0,
                        closeOnSelect: E,
                        options: e3,
                        activeDescendant: eA,
                        renderOptionLabel: Y,
                        updatePosition: i,
                        popoutPosition: n,
                        renderOptionPrefix: q,
                        renderOptionSuffix: X,
                    });
                },
                position: L,
                children: (e, t) => {
                    let { "aria-expanded": n, "aria-controls": i } = e,
                        { isShown: a } = t,
                        s = a ? v.u04 : v.CJ0,
                        { ref: l, onKeyDown: c } = eQ.containerProps,
                        u = (e) => {
                            var t;
                            null == (t = eg.onKeyDown) || t.call(eg, e), c(e), e2(e);
                        };
                    return (0, r.jsx)(p.gNt, {
                        label: ec,
                        hideLabel: eu,
                        required: ed,
                        description: ef,
                        helperText: e_,
                        errorMessage: ep,
                        successMessage: eh,
                        layout: em,
                        children: (e) => {
                            var t;
                            let i = null == e ? void 0 : e.controlId;
                            return (0, r.jsxs)(b.U, {
                                as: "div",
                                disabled: R,
                                ref: eM,
                                className: o()(S, C.wrapper),
                                containerClassName: N,
                                style: { "--icons-width": "".concat(eb, "px") },
                                onBlur: (e) => {
                                    var t, n, r;
                                    (null == (t = eM.current) ? void 0 : t.contains(e.relatedTarget)) ||
                                        (null == (r = eL.current) || null == (n = r.getScrollerNode())
                                            ? void 0
                                            : n.contains(e.relatedTarget)) ||
                                        (h || null == eZ || ew(eZ.label), ex(!1), eY(!1), null == en || en(e));
                                },
                                children: [
                                    (0, r.jsx)(p.tEY, {
                                        ringTarget: eI,
                                        focusTarget: eS,
                                        offset: 4,
                                        children: (0, r.jsx)("div", {
                                            onClick: R
                                                ? void 0
                                                : (e) => {
                                                      e.stopPropagation(), e.preventDefault(), ew(""), eY(!0);
                                                  },
                                            onMouseDown: (e) => {
                                                e.preventDefault();
                                            },
                                            ref: (e) => {
                                                (eI.current = e), (eK.current = e);
                                            },
                                            className: o()(C.select, C.searchable, { [C.multi]: h }),
                                            children: (0, r.jsx)("div", {
                                                className: o()(C.value, { [C.multi]: h }),
                                                children: (0, r.jsx)(e4, {
                                                    query: eP,
                                                    selectedOptions: eG,
                                                    loading: ej,
                                                    renderOptionPrefix: q,
                                                    renderOptionSuffix: X,
                                                    isDisabled: R,
                                                    isEditing: eD,
                                                    isProcessing: P,
                                                    inputRef: eS,
                                                    "aria-describedby":
                                                        null != Q ? Q : null == e ? void 0 : e.describedById,
                                                    "aria-errormessage":
                                                        null != (t = null == e ? void 0 : e.errorMessageId) ? t : eO,
                                                    "aria-invalid":
                                                        null != J
                                                            ? J
                                                            : (null == e ? void 0 : e.errorMessageId) != null ||
                                                              null != ev,
                                                    "aria-required": null != ee ? ee : ed,
                                                    "aria-labelledby": null != $ ? $ : ey,
                                                    "aria-expanded": n,
                                                    setInputRef: (e) => {
                                                        (l.current = e), (eS.current = e);
                                                    },
                                                    onFocus: (e) => {
                                                        var t, n;
                                                        null == (t = eS.current) ||
                                                            t.setSelectionRange(
                                                                0,
                                                                null != (n = null == eP ? void 0 : eP.length) ? n : 0,
                                                            ),
                                                            null == er || er(e);
                                                    },
                                                    onChange: (e) => {
                                                        eU(e), null == W || W(e), ew(e), eY(!0), ex(!0);
                                                    },
                                                    onKeyDown: u,
                                                    activeDescendant: eA,
                                                    placeholder: T,
                                                    inputId: i,
                                                    listboxId: eV,
                                                    navigatorId: eH,
                                                    selectValue: function (e) {
                                                        let t =
                                                            !(arguments.length > 1) ||
                                                            void 0 === arguments[1] ||
                                                            arguments[1];
                                                        e0(e, t);
                                                    },
                                                    inputClassNames: et,
                                                    hidePills: eo,
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: o()(C.icons, C.iconsContainer, { [C.multi]: h }),
                                        ref: eE,
                                        children: P
                                            ? (0, r.jsx)(v.bbz, {
                                                  dotRadius: 3.5,
                                                  themed: !0,
                                              })
                                            : (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      d && ((null != eP && "" !== eP) || eG.length > 0)
                                                          ? (0, r.jsx)(p.P3F, {
                                                                "aria-label": A.intl.string(A.t.VkKicX),
                                                                "aria-controls": i,
                                                                onClick: e1,
                                                                children: (0, r.jsx)(v.Dio, {
                                                                    size: "xs",
                                                                    color: "currentColor",
                                                                    className: C.clear,
                                                                }),
                                                            })
                                                          : null,
                                                      (0, r.jsx)(p.P3F, {
                                                          "aria-label": eN
                                                              ? A.intl.string(A.t.cpT0Cg)
                                                              : A.intl.string(A.t["3xjX0d"]),
                                                          "aria-controls": i,
                                                          onClick: () => {
                                                              eY(!eN);
                                                          },
                                                          children: (0, r.jsx)(s, {
                                                              className: C.dropdownIcon,
                                                              size: "sm",
                                                          }),
                                                      }),
                                                  ],
                                              }),
                                    }),
                                ],
                            });
                        },
                    });
                },
            }),
            eG.length > 0 &&
                null != es &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(H, {
                        listRef: e8,
                        selectedOptions: eG,
                        selectValue: function (e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            e0(e, t);
                        },
                        focusNextItem: e6,
                        focusPreviousItem: e5,
                        renderCustomPill: es,
                        customPillContainerClassName: el,
                    }),
                }),
        ],
    });
});
function B(e) {
    let t = (0, S.l)("SearchableSelect"),
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
            "aria-required": p,
            onChange: h,
            onSearchChange: m,
            onKeyDown: g,
            onFocus: E,
            onBlur: b,
            debounceTime: O,
            label: v,
            hideLabel: I,
            placeholder: T,
            hidePills: A,
            badge: C,
            icon: N,
            description: P,
            helperText: w,
            errorMessage: D,
            successMessage: x,
            renderOptionLabel: L,
            renderOptionPrefix: M,
            renderOptionSuffix: k,
        } = e,
        j = null != O || "function" == typeof i || null != L;
    if (t && !j) {
        let e = null != f && "function" == typeof f ? f : void 0;
        return (0, r.jsx)(y.V, {
            id: n,
            selectionMode: c ? "multiple" : "single",
            required: a || p,
            disabled: o || s,
            label: v,
            hideTags: A,
            hideLabel: I,
            placeholder: T,
            badge: C,
            icon: N,
            description: P,
            helperText: w,
            errorMessage: D,
            successMessage: x,
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
                        null == M
                            ? void 0
                            : M(e, {
                                  inPill: !1,
                                  inDropdown: !0,
                              }),
                    trailing:
                        null == k
                            ? void 0
                            : k(e, {
                                  inPill: !1,
                                  inDropdown: !0,
                              }),
                };
            },
            onSelectionChange: h,
            customMatchSorter: e,
            matchSorterOptions: _,
            onQueryChange: (e) => (null == m ? void 0 : m(e.target.value)),
            onKeyDown: g,
            onFocus: E,
            onBlur: b,
            clearable: u,
            closeOnSelect: d,
        });
    }
    return (0, r.jsx)(G, R({}, e));
}
function Z(e) {
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
            renderOptionSuffix: I = () => null,
        } = e,
        S = i.useRef(null),
        N = i.useCallback(
            (e) => {
                t(e), O && n();
            },
            [O, n, t],
        );
    return ((0, T.Z)(m), g)
        ? (0, r.jsx)("div", {
              "aria-busy": !0,
              className: o()(C.popout, C.loading, { [C.popoutPositionTop]: "top" === y }),
              style: { width: l },
              children: (0, r.jsx)(p.$jN, {
                  itemClassName: C.loadingSpinner,
                  type: p.RAz.PULSING_ELLIPSIS,
              }),
          })
        : 0 === s.length
          ? (0, r.jsx)("div", {
                className: o()(C.popout, C.noResults, { [C.popoutPositionTop]: "top" === y }),
                style: { width: l },
                children: (0, r.jsx)(E.x, {
                    color: "text-muted",
                    variant: "text-md/normal",
                    children: A.intl.string(A.t["Xe+fJC"]),
                }),
            })
          : (0, r.jsx)(u.SJ, {
                children: (e) => {
                    var { ref: t, onKeyDown: n } = e,
                        i = D(e, ["ref", "onKeyDown"]);
                    return (0, r.jsx)(
                        p._2F,
                        w(
                            R(
                                {
                                    className: o()(C.popout, C.searchableSelect, {
                                        [C.noScrollbar]: s.length <= c,
                                        [C.popoutPositionTop]: "top" === y,
                                    }),
                                    style: {
                                        width: l,
                                        maxHeight: c * L,
                                    },
                                    ref: (e) => {
                                        var n;
                                        f.current = e;
                                        let r = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null;
                                        (S.current = r), (t.current = r);
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
                                        Y,
                                        {
                                            multi: b,
                                            "aria-posinset": n,
                                            "aria-setsize": s.length,
                                            isSelected: a.includes(i.value),
                                            isFocused: d === String(i.value),
                                            value: i.value,
                                            label: o,
                                            onSelect: N,
                                            prefix: v(i, {
                                                inPill: !1,
                                                inDropdown: !0,
                                            }),
                                            suffix: I(i, {
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
function F(e, t) {
    if (null == e || null == t) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(t) & n) === n;
}
function V(e, t, n) {
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
function H(e) {
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
        className: f ? d : C.optionPillContainer,
        ref: a,
        onKeyDown: _,
        onFocus: (e) => {
            let t = e.target;
            null != a.current && F(a.current, t) && h(t.getAttribute("data-option-pill-value"));
        },
        onBlur: (e) => {
            let t = e.relatedTarget;
            F(a.current, t) || h(null);
        },
        children: t.map((e, t) => {
            var i;
            return (0, r.jsx)(
                "li",
                {
                    className: f ? void 0 : C.optionPillItem,
                    children: (0, r.jsx)(X, {
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
                                  className: C.content,
                                  children: e.label,
                              }),
                    }),
                },
                null != (i = e.key) ? i : "".concat(e.label, "-").concat(e.value),
            );
        }),
    });
}
function Y(e) {
    var { value: t, label: n, prefix: i, suffix: a, onSelect: s, isSelected: l, isFocused: c, multi: d } = e,
        f = D(e, ["value", "label", "prefix", "suffix", "onSelect", "isSelected", "isFocused", "multi"]);
    let _ = (0, u.JA)(String(t));
    return (0, r.jsxs)(
        p.P3F,
        w(
            R(
                {
                    tag: "li",
                    style: { height: L },
                    focusProps: { enabled: !1 },
                    className: o()(C.option, {
                        [C.focused]: c,
                        [C.multi]: d,
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
                        className: C.content,
                        children: [n, "\xA0"],
                    }),
                    null != i &&
                        (0, r.jsx)("div", {
                            className: C.prefix,
                            children: i,
                        }),
                    " ",
                    null != a &&
                        (0, r.jsx)("div", {
                            className: C.suffix,
                            children: a,
                        }),
                    " ",
                    (0, r.jsx)(W, {
                        isSelected: l,
                        multi: d,
                    }),
                ],
            },
        ),
    );
}
function W(e) {
    let { isSelected: t, multi: n } = e,
        i = 24;
    return n
        ? (0, r.jsx)(O.Ik, {
              value: t,
              shape: O.zV.BOX,
              size: 20,
              disabled: !1,
              indicatorClassName: o()(C.multiSelectCheckbox, {
                  [C.checked]: t,
                  [C.unchecked]: !t,
              }),
          })
        : t
          ? (0, r.jsx)(v.owK, {
                size: "custom",
                color: "currentColor",
                "aria-hidden": !0,
                secondaryColor: "white",
                className: C.selectedIcon,
                width: i,
                height: i,
            })
          : null;
}
function K(e) {
    var { selectedOptions: t, renderOptionPrefix: n, renderOptionSuffix: i } = e,
        a = D(e, ["selectedOptions", "renderOptionPrefix", "renderOptionSuffix"]);
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
            (0, r.jsx)(q, R({ selectedOptions: t }, a)),
            null != l
                ? (0, r.jsx)("div", {
                      "aria-hidden": !0,
                      children: l,
                  })
                : null,
        ],
    });
}
function z(e) {
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
        g = D(e, [
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
        { focusPreviousItem: y, focusNextItem: O, focusLastItem: v } = V(b, f, a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a.length > 0 &&
                !m &&
                (0, r.jsx)(H, {
                    listRef: b,
                    selectedOptions: a,
                    renderOptionPrefix: _,
                    renderOptionSuffix: p,
                    selectValue: s,
                    focusNextItem: O,
                    focusPreviousItem: y,
                }),
            (0, r.jsx)(
                q,
                R(
                    {
                        style: { width: "".concat(E, "ch") },
                        className: o()(C.multi, h),
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
function q(e) {
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
        hidePills: A,
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
        className: o()(C.searchInput, T, {
            [C.editing]: E,
            [C.disabled]: u,
        }),
        onKeyDown: b,
        placeholder: "" !== (null != t ? t : "").trim() || (S.length > 0 && !A) ? void 0 : y,
        ref: g,
    });
}
function X(e) {
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
        children: (0, r.jsxs)(h.zx, {
            "data-migration-pending": !0,
            look: h.zx.Looks.BLANK,
            tabIndex: n ? 0 : -1,
            "data-option-pill-value": t.value,
            className: C.optionPillBtn,
            innerClassName: c ? null : C.optionPill,
            onClick: () => (null == i ? void 0 : i(t.value)),
            onKeyDown: a,
            children: [
                l,
                null != u &&
                    (0, r.jsx)("div", {
                        className: C.prefix,
                        children: u,
                    }),
                " ",
                null != d &&
                    (0, r.jsx)("div", {
                        className: C.suffix,
                        children: d,
                    }),
                (0, r.jsx)(p.nn4, { children: A.intl.string(A.t.N86XcH) }),
                !c &&
                    (0, r.jsx)(v.Dio, {
                        size: "custom",
                        color: "currentColor",
                        className: C.deleteOptionIcon,
                        width: 14,
                        height: 14,
                    }),
            ],
        }),
    });
}
