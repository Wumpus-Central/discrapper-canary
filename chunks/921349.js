n.d(t, { V: () => k }), n(388685), n(953529), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(120356),
    o = n.n(a),
    s = n(423802),
    l = n(372817),
    c = n(924826),
    u = n(91192),
    d = n(260866),
    f = n(793030),
    _ = n(693789),
    p = n(15127),
    h = n(235874),
    m = n(993365),
    g = n(74655),
    E = n(755721),
    b = n(481060),
    y = n(393238),
    O = n(434650),
    v = n(98650),
    I = n(237617),
    T = n(388032),
    S = n(361421);
function A(e, t, n) {
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
function C(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
function R(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = w(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function w(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let D = 44,
    L = { keys: ["label"] };
function x(e) {
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
                    R(C({}, t), {
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
                          R(C({}, e), {
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
                                R(C({}, e), {
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
                s((t) => R(C({}, t), { query: e }));
            }, []),
        }
    );
}
function M(e, t) {
    return null == t
        ? []
        : (Array.isArray(t) ? t : [t])
              .map((t) => ("object" == typeof t && (null == t || "value" in t) ? t : e.find((e) => e.value === t)))
              .filter(Boolean);
}
let k = i.forwardRef(function (e, t) {
    var {
            options: n,
            value: a,
            onChange: l,
            clearable: d = !1,
            multi: _ = !1,
            closeOnSelect: m = !0,
            onOpen: E,
            onClose: v,
            placeholder: A = T.intl.string(T.t.XqMe3N),
            wrapperClassName: C,
            className: N,
            isDisabled: R = !1,
            isProcessing: w = !1,
            maxVisibleItems: D = 7,
            autoFocus: k = !1,
            popoutPosition: G = "bottom",
            popoutWidth: F,
            filter: V = !0,
            debounceTime: W,
            renderOptionLabel: K = x,
            onSearchChange: z,
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
        } = e,
        em = P(e, [
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
        ]);
    let { ref: eg, width: eE } = (0, y.ZP)(),
        { titleId: eb, errorId: ey, error: eO } = (0, p.Gc)(),
        { ref: ev, width: eI } = (0, y.ZP)(),
        eT = i.useRef(null),
        [eS, eA] = i.useState(null),
        [eC, eN] = i.useState(!1),
        [eR, eP] = i.useState(null),
        [ew, eD] = i.useState(!1),
        eL = i.useRef(null),
        ex = i.useRef(null),
        {
            options: ej,
            loading: eM,
            onQueryChange: ek,
        } = j({
            active: eC,
            loadableOptions: n,
            debounceTime: W,
        }),
        eU = i.useMemo(() => M(ej, a), [ej, a]),
        eG = i.useMemo(() => eU.map((e) => e.value), [eU]),
        eB = eU[eU.length - 1],
        eZ = (0, I.Z)(eB),
        eF = i.useId(),
        eV = i.useId(),
        eH = i.useCallback(
            (e) => {
                eC === e || R || (eN(e), e ? null == E || E() : null == v || v());
            },
            [R, v, E, eC],
        ),
        eY = i.useCallback(
            (e) => {
                eC && !e && eH(!1);
            },
            [eH, eC],
        ),
        eW = (0, O.O)(eY);
    i.useImperativeHandle(t, () => ({
        close() {
            eH(!1);
        },
    }));
    let eK = i.useCallback((e, t) => {
            let n = document.querySelector(e),
                r = eL.current;
            eA(t), null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        ez = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eL.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eq = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eL.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eX = (0, c.ZP)({
            id: eV,
            defaultFocused: null != eB ? String(eB.value) : void 0,
            scrollToStart: ez,
            scrollToEnd: eq,
            isEnabled: eC,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eK,
            disableClickOnSpace: !0,
        }),
        eQ = (0, I.Z)(eX),
        eJ = (0, I.Z)(ej);
    i.useEffect(() => {
        let e = eJ.current,
            t = eZ.current;
        eC &&
            null != t &&
            !eM &&
            requestAnimationFrame(() => {
                let n = eL.current,
                    r = e.indexOf(t);
                null == n ||
                    n.scrollToIndex({
                        section: 0,
                        row: r,
                    });
            });
    }, [eC, eM, eJ, eZ]),
        i.useEffect(() => {
            let e = eQ.current;
            if (eC && !eM) {
                var t;
                let n = eT.current;
                if (null != n) {
                    n.focus();
                    let { value: e } = n;
                    (n.value = " "), (n.value = e);
                }
                eA(null != (t = e.focusedItemId()) ? t : null);
            } else {
                let t = eZ.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), eA(null);
            }
        }, [eC, eM, eQ, eZ]),
        i.useLayoutEffect(() => {
            eC || (_ ? eP("") : null != eB && eP(eB.label));
        }, [_, eB, eC]),
        i.useLayoutEffect(() => {
            _ && eP("");
        }, [_, eU.length]);
    let e$ = i.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) return void l(_ ? [] : void 0);
            let r = "function" == typeof n,
                i = r ? ej.find((t) => t.value === e) : e;
            if (_) {
                let n = null != a ? a : [];
                if (
                    (n.some((t) => (r ? t.value : t) === e)
                        ? l(n.filter((t) => (r ? t.value : t) !== e))
                        : l([...n, i]),
                    t)
                ) {
                    var o;
                    null == (o = eT.current) || o.focus();
                }
            } else l(i);
            eA(null), (!_ || m) && eH(!1), eD(!1), ea && eP("");
        },
        [n, ej, _, m, ea, l, a, eH],
    );
    i.useLayoutEffect(() => {
        if (k) {
            var e;
            null == (e = eT.current) || e.focus();
        }
    }, [k]);
    let e0 = i.useCallback(() => {
            eP(""), e$(null), eH(!0);
        }, [e$, eH]),
        e1 = i.useCallback(
            (e) => {
                switch (e.key) {
                    case "Escape":
                        eC && (e.stopPropagation(), eH(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        eH(!0);
                }
            },
            [eH, eC],
        ),
        e2 = ej;
    ew && null != eR && !1 !== V && (e2 = "function" == typeof V ? V(ej, eR) : (0, s.Lu)(ej, eR, null != ei ? ei : L)),
        i.useEffect(() => {
            let e = eL.current;
            null == e || e.scrollToTop();
        }, [eR]),
        i.useEffect(() => {
            !eM && ew && null !== eR && requestAnimationFrame(() => eX.focusFirstVisibleItem());
        }, [eM, ew, eR, eX]);
    let e3 = _ ? Y : H,
        e4 = i.useRef(null),
        { focusPreviousItem: e8, focusNextItem: e5 } = B(e4, eT, eU);
    return (0, r.jsxs)(u.bG, {
        navigator: eX,
        children: [
            (0, r.jsx)(h.y, {
                targetElementRef: ex,
                spacing: 0,
                animation: h.y.Animation.NONE,
                shouldShow: eC,
                onRequestClose: () => eH(!1),
                layerContext: em.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: t, position: n, updatePosition: i } = e;
                    return (0, r.jsx)(U, {
                        loading: eM,
                        multi: !!_,
                        listRef: eL,
                        listId: eF,
                        maxVisibleItems: D,
                        width: null != F && "auto" !== F ? F : eI,
                        selectedValues: eG,
                        closePopout: t,
                        onSelect: e$,
                        closeOnSelect: m,
                        options: e2,
                        activeDescendant: eS,
                        renderOptionLabel: K,
                        updatePosition: i,
                        popoutPosition: n,
                        renderOptionPrefix: q,
                        renderOptionSuffix: X,
                    });
                },
                position: G,
                children: (e, t) => {
                    let { "aria-expanded": n, "aria-controls": i } = e,
                        { isShown: a } = t,
                        s = a ? b.u04 : b.CJ0,
                        { ref: l, onKeyDown: c } = eX.containerProps,
                        u = (e) => {
                            var t;
                            null == (t = em.onKeyDown) || t.call(em, e), c(e), e1(e);
                        };
                    return (0, r.jsx)(f.NIc, {
                        label: ec,
                        hideLabel: eu,
                        required: ed,
                        description: ef,
                        helperText: e_,
                        errorMessage: ep,
                        successMessage: eh,
                        children: (e) => {
                            var t;
                            let i = null == e ? void 0 : e.controlId;
                            return (0, r.jsxs)(g.U, {
                                as: "div",
                                disabled: R,
                                ref: ex,
                                className: o()(C, S.wrapper),
                                containerClassName: N,
                                style: { "--icons-width": "".concat(eE, "px") },
                                onBlur: (e) => {
                                    var t, n, r;
                                    (null == (t = ex.current) ? void 0 : t.contains(e.relatedTarget)) ||
                                        (null == (r = eL.current) || null == (n = r.getScrollerNode())
                                            ? void 0
                                            : n.contains(e.relatedTarget)) ||
                                        (_ || null == eB || eP(eB.label), eD(!1), eH(!1), null == en || en(e));
                                },
                                children: [
                                    (0, r.jsx)(f.tEY, {
                                        ringTarget: ev,
                                        focusTarget: eT,
                                        offset: 4,
                                        children: (0, r.jsx)("div", {
                                            onClick: R
                                                ? void 0
                                                : (e) => {
                                                      e.stopPropagation(), e.preventDefault(), eP(""), eH(!0);
                                                  },
                                            onMouseDown: (e) => {
                                                e.preventDefault();
                                            },
                                            ref: (e) => {
                                                (ev.current = e), (eW.current = e);
                                            },
                                            className: o()(S.select, S.searchable, { [S.multi]: _ }),
                                            children: (0, r.jsx)("div", {
                                                className: o()(S.value, { [S.multi]: _ }),
                                                children: (0, r.jsx)(e3, {
                                                    query: eR,
                                                    selectedOptions: eU,
                                                    loading: eM,
                                                    renderOptionPrefix: q,
                                                    renderOptionSuffix: X,
                                                    isDisabled: R,
                                                    isEditing: ew,
                                                    isProcessing: w,
                                                    inputRef: eT,
                                                    "aria-describedby":
                                                        null != Q ? Q : null == e ? void 0 : e.describedById,
                                                    "aria-errormessage":
                                                        null != (t = null == e ? void 0 : e.errorMessageId) ? t : ey,
                                                    "aria-invalid":
                                                        null != J
                                                            ? J
                                                            : (null == e ? void 0 : e.errorMessageId) != null ||
                                                              null != eO,
                                                    "aria-required": null != ee ? ee : ed,
                                                    "aria-labelledby": null != $ ? $ : eb,
                                                    "aria-expanded": n,
                                                    setInputRef: (e) => {
                                                        (l.current = e), (eT.current = e);
                                                    },
                                                    onFocus: (e) => {
                                                        var t, n;
                                                        null == (t = eT.current) ||
                                                            t.setSelectionRange(
                                                                0,
                                                                null != (n = null == eR ? void 0 : eR.length) ? n : 0,
                                                            ),
                                                            null == er || er(e);
                                                    },
                                                    onChange: (e) => {
                                                        ek(e), null == z || z(e), eP(e), eH(!0), eD(!0);
                                                    },
                                                    onKeyDown: u,
                                                    activeDescendant: eS,
                                                    placeholder: A,
                                                    inputId: i,
                                                    listboxId: eF,
                                                    navigatorId: eV,
                                                    selectValue: function (e) {
                                                        let t =
                                                            !(arguments.length > 1) ||
                                                            void 0 === arguments[1] ||
                                                            arguments[1];
                                                        e$(e, t);
                                                    },
                                                    inputClassNames: et,
                                                    hidePills: eo,
                                                }),
                                            }),
                                        }),
                                    }),
                                    (0, r.jsx)("div", {
                                        className: o()(S.icons, S.iconsContainer, { [S.multi]: _ }),
                                        ref: eg,
                                        children: w
                                            ? (0, r.jsx)(b.bbz, {
                                                  dotRadius: 3.5,
                                                  themed: !0,
                                              })
                                            : (0, r.jsxs)(r.Fragment, {
                                                  children: [
                                                      d && ((null != eR && "" !== eR) || eU.length > 0)
                                                          ? (0, r.jsx)(f.P3F, {
                                                                "aria-label": T.intl.string(T.t.VkKicX),
                                                                "aria-controls": i,
                                                                onClick: e0,
                                                                children: (0, r.jsx)(b.Dio, {
                                                                    size: "xs",
                                                                    color: "currentColor",
                                                                    className: S.clear,
                                                                }),
                                                            })
                                                          : null,
                                                      (0, r.jsx)(f.P3F, {
                                                          "aria-label": eC
                                                              ? T.intl.string(T.t.cpT0Cg)
                                                              : T.intl.string(T.t["3xjX0d"]),
                                                          "aria-controls": i,
                                                          onClick: () => {
                                                              eH(!eC);
                                                          },
                                                          children: (0, r.jsx)(s, {
                                                              className: S.dropdownIcon,
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
            eU.length > 0 &&
                null != es &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(Z, {
                        listRef: e4,
                        selectedOptions: eU,
                        selectValue: function (e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            e$(e, t);
                        },
                        focusNextItem: e5,
                        focusPreviousItem: e8,
                        renderCustomPill: es,
                        customPillContainerClassName: el,
                    }),
                }),
        ],
    });
});
function U(e) {
    let {
            onSelect: t,
            closePopout: n,
            selectedValues: a,
            options: s,
            width: l,
            maxVisibleItems: c,
            activeDescendant: d,
            listRef: _,
            listId: p,
            renderOptionLabel: h,
            updatePosition: g,
            loading: E = !1,
            multi: b,
            popoutPosition: y,
            closeOnSelect: O,
            renderOptionPrefix: I = () => null,
            renderOptionSuffix: A = () => null,
        } = e,
        N = i.useRef(null),
        w = i.useCallback(
            (e) => {
                t(e), O && n();
            },
            [O, n, t],
        );
    return ((0, v.Z)(g), E)
        ? (0, r.jsx)("div", {
              "aria-busy": !0,
              className: o()(S.popout, S.loading, { [S.popoutPositionTop]: "top" === y }),
              style: { width: l },
              children: (0, r.jsx)(f.$jN, {
                  itemClassName: S.loadingSpinner,
                  type: f.RAz.PULSING_ELLIPSIS,
              }),
          })
        : 0 === s.length
          ? (0, r.jsx)("div", {
                className: o()(S.popout, S.noResults, { [S.popoutPositionTop]: "top" === y }),
                style: { width: l },
                children: (0, r.jsx)(m.x, {
                    color: "text-muted",
                    variant: "text-md/normal",
                    children: T.intl.string(T.t["Xe+fJC"]),
                }),
            })
          : (0, r.jsx)(u.SJ, {
                children: (e) => {
                    var { ref: t, onKeyDown: n } = e,
                        i = P(e, ["ref", "onKeyDown"]);
                    return (0, r.jsx)(
                        f._2F,
                        R(
                            C(
                                {
                                    className: o()(S.popout, S.searchableSelect, {
                                        [S.noScrollbar]: s.length <= c,
                                        [S.popoutPositionTop]: "top" === y,
                                    }),
                                    style: {
                                        width: l,
                                        maxHeight: c * D,
                                    },
                                    ref: (e) => {
                                        var n;
                                        _.current = e;
                                        let r = null != (n = null == e ? void 0 : e.getScrollerNode()) ? n : null;
                                        (N.current = r), (t.current = r);
                                    },
                                },
                                i,
                            ),
                            {
                                role: void 0,
                                innerRole: "listbox",
                                innerAriaMultiselectable: b,
                                innerId: p,
                                rowHeight: D,
                                sections: [s.length],
                                sectionHeight: 0,
                                renderRow: (e) => {
                                    var t;
                                    let { row: n } = e,
                                        i = s[n],
                                        o = h(i);
                                    return (0, r.jsx)(
                                        F,
                                        {
                                            multi: b,
                                            "aria-posinset": n,
                                            "aria-setsize": s.length,
                                            isSelected: a.includes(i.value),
                                            isFocused: d === String(i.value),
                                            value: i.value,
                                            label: o,
                                            onSelect: w,
                                            prefix: I(i, {
                                                inPill: !1,
                                                inDropdown: !0,
                                            }),
                                            suffix: A(i, {
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
function G(e, t) {
    if (null == e || null == t) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(t) & n) === n;
}
function B(e, t, n) {
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
function Z(e) {
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
        className: f ? d : S.optionPillContainer,
        ref: a,
        onKeyDown: _,
        onFocus: (e) => {
            let t = e.target;
            null != a.current && G(a.current, t) && h(t.getAttribute("data-option-pill-value"));
        },
        onBlur: (e) => {
            let t = e.relatedTarget;
            G(a.current, t) || h(null);
        },
        children: t.map((e, t) => {
            var i;
            return (0, r.jsx)(
                "li",
                {
                    className: f ? void 0 : S.optionPillItem,
                    children: (0, r.jsx)(K, {
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
                                  className: S.content,
                                  children: e.label,
                              }),
                    }),
                },
                null != (i = e.key) ? i : "".concat(e.label, "-").concat(e.value),
            );
        }),
    });
}
function F(e) {
    var { value: t, label: n, prefix: i, suffix: a, onSelect: s, isSelected: l, isFocused: c, multi: d } = e,
        _ = P(e, ["value", "label", "prefix", "suffix", "onSelect", "isSelected", "isFocused", "multi"]);
    let p = (0, u.JA)(String(t));
    return (0, r.jsxs)(
        f.P3F,
        R(
            C(
                {
                    tag: "li",
                    style: { height: D },
                    focusProps: { enabled: !1 },
                    className: o()(S.option, {
                        [S.focused]: c,
                        [S.multi]: d,
                    }),
                    onClick: () => s(t),
                },
                p,
                _,
            ),
            {
                "aria-selected": l,
                id: p["data-list-item-id"],
                "data-searchable-select-option": !0,
                role: "option",
                children: [
                    (0, r.jsxs)("div", {
                        className: S.content,
                        children: [n, "\xA0"],
                    }),
                    null != i &&
                        (0, r.jsx)("div", {
                            className: S.prefix,
                            children: i,
                        }),
                    " ",
                    null != a &&
                        (0, r.jsx)("div", {
                            className: S.suffix,
                            children: a,
                        }),
                    " ",
                    (0, r.jsx)(V, {
                        isSelected: l,
                        multi: d,
                    }),
                ],
            },
        ),
    );
}
function V(e) {
    let { isSelected: t, multi: n } = e,
        i = 24;
    return n
        ? (0, r.jsx)(E.Ik, {
              value: t,
              shape: E.zV.BOX,
              size: 20,
              disabled: !1,
              indicatorClassName: o()(S.multiSelectCheckbox, {
                  [S.checked]: t,
                  [S.unchecked]: !t,
              }),
          })
        : t
          ? (0, r.jsx)(b.owK, {
                size: "custom",
                color: "currentColor",
                "aria-hidden": !0,
                secondaryColor: "white",
                className: S.selectedIcon,
                width: i,
                height: i,
            })
          : null;
}
function H(e) {
    var { selectedOptions: t, renderOptionPrefix: n, renderOptionSuffix: i } = e,
        a = P(e, ["selectedOptions", "renderOptionPrefix", "renderOptionSuffix"]);
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
            (0, r.jsx)(W, C({ selectedOptions: t }, a)),
            null != l
                ? (0, r.jsx)("div", {
                      "aria-hidden": !0,
                      children: l,
                  })
                : null,
        ],
    });
}
function Y(e) {
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
        g = P(e, [
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
        { focusPreviousItem: y, focusNextItem: O, focusLastItem: v } = B(b, f, a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a.length > 0 &&
                !m &&
                (0, r.jsx)(Z, {
                    listRef: b,
                    selectedOptions: a,
                    renderOptionPrefix: _,
                    renderOptionSuffix: p,
                    selectValue: s,
                    focusNextItem: O,
                    focusPreviousItem: y,
                }),
            (0, r.jsx)(
                W,
                C(
                    {
                        style: { width: "".concat(E, "ch") },
                        className: o()(S.multi, h),
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
function W(e) {
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
        selectedOptions: A,
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
        className: o()(S.searchInput, T, {
            [S.editing]: E,
            [S.disabled]: u,
        }),
        onKeyDown: b,
        placeholder: "" !== (null != t ? t : "").trim() || (A.length > 0 && !C) ? void 0 : y,
        ref: g,
    });
}
function K(e) {
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
    return (0, r.jsx)(f.tEY, {
        offset: 3,
        children: (0, r.jsxs)(_.zx, {
            look: _.zx.Looks.BLANK,
            tabIndex: n ? 0 : -1,
            "data-option-pill-value": t.value,
            className: S.optionPillBtn,
            innerClassName: c ? null : S.optionPill,
            onClick: () => (null == i ? void 0 : i(t.value)),
            onKeyDown: a,
            children: [
                l,
                null != u &&
                    (0, r.jsx)("div", {
                        className: S.prefix,
                        children: u,
                    }),
                " ",
                null != d &&
                    (0, r.jsx)("div", {
                        className: S.suffix,
                        children: d,
                    }),
                (0, r.jsx)(f.nn4, { children: T.intl.string(T.t.N86XcH) }),
                !c &&
                    (0, r.jsx)(b.Dio, {
                        size: "custom",
                        color: "currentColor",
                        className: S.deleteOptionIcon,
                        width: 14,
                        height: 14,
                    }),
            ],
        }),
    });
}
