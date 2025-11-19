n.d(t, { V: () => U }), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
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
    b = n(333200),
    y = n(481060),
    O = n(393238),
    v = n(98650),
    I = n(383056),
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
let w = 44,
    L = { keys: ["label"] };
function x(e) {
    return e.label;
}
function M(e) {
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
function k(e, t) {
    return null == t
        ? []
        : (Array.isArray(t) ? t : [t])
              .map((t) => ("object" == typeof t && (null == t || "value" in t) ? t : e.find((e) => e.value === t)))
              .filter(Boolean);
}
let j = i.forwardRef(function (e, t) {
    var {
            options: n,
            value: a,
            onChange: l,
            clearable: d = !1,
            multi: h = !1,
            closeOnSelect: E = !0,
            onOpen: b,
            onClose: v,
            placeholder: I = T.intl.string(T.t.XqMe3N),
            wrapperClassName: A,
            className: N,
            isDisabled: D = !1,
            isProcessing: w = !1,
            maxVisibleItems: j = 7,
            autoFocus: U = !1,
            popoutPosition: B = "bottom",
            popoutWidth: V,
            filter: H = !0,
            debounceTime: K,
            renderOptionLabel: z = x,
            onSearchChange: q,
            renderOptionPrefix: X = () => null,
            renderOptionSuffix: Q = () => null,
            "aria-describedby": J,
            "aria-invalid": $,
            "aria-labelledby": ee,
            "aria-required": et,
            inputClassNames: en,
            onBlur: er,
            onFocus: ei,
            matchSorterOptions: ea,
            clearQueryOnSelect: eo = !1,
            hidePills: es,
            renderCustomPill: el,
            customPillContainerClassName: ec,
        } = e,
        eu = P(e, [
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
    let { fieldProps: ed, props: ef } = (0, p.XF_)(eu),
        { ref: e_, width: ep } = (0, O.ZP)(),
        { titleId: eh, errorId: em, error: eg } = (0, m.Gc)(),
        { ref: eE, width: eb } = (0, O.ZP)(),
        ey = i.useRef(null),
        [eO, ev] = i.useState(null),
        [eI, eT] = i.useState(!1),
        [eS, eA] = i.useState(null),
        [eC, eN] = i.useState(!1),
        eR = i.useRef(null),
        eP = i.useRef(null),
        {
            options: eD,
            loading: ew,
            onQueryChange: eL,
        } = M({
            active: eI,
            loadableOptions: n,
            debounceTime: K,
        }),
        ex = i.useMemo(() => k(eD, a), [eD, a]),
        eM = i.useMemo(() => ex.map((e) => e.value), [ex]),
        ek = ex[ex.length - 1],
        ej = (0, f.Z)(ek),
        eU = i.useId(),
        eG = i.useId(),
        eB = i.useCallback(
            (e) => {
                eI === e || D || (eT(e), e ? null == b || b() : null == v || v());
            },
            [D, v, b, eI],
        ),
        eZ = i.useCallback(
            (e) => {
                eI && !e && eB(!1);
            },
            [eB, eI],
        ),
        eF = (0, _.O)(eZ);
    i.useImperativeHandle(t, () => ({
        close() {
            eB(!1);
        },
    }));
    let eV = i.useCallback((e, t) => {
            let n = document.querySelector(e),
                r = eR.current;
            ev(t), null != r && null != n && r.scrollIntoViewNode({ node: n });
        }, []),
        eH = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eR.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eY = i.useCallback(
            () =>
                new Promise((e) => {
                    let t = eR.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            [],
        ),
        eW = (0, c.ZP)({
            id: eG,
            defaultFocused: null != ek ? String(ek.value) : void 0,
            scrollToStart: eH,
            scrollToEnd: eY,
            isEnabled: eI,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eV,
            disableClickOnSpace: !0,
        }),
        eK = (0, f.Z)(eW),
        ez = (0, f.Z)(eD);
    i.useEffect(() => {
        let e = ez.current,
            t = ej.current;
        eI &&
            null != t &&
            !ew &&
            requestAnimationFrame(() => {
                let n = eR.current,
                    r = e.indexOf(t);
                null == n ||
                    n.scrollToIndex({
                        section: 0,
                        row: r,
                    });
            });
    }, [eI, ew, ez, ej]),
        i.useEffect(() => {
            let e = eK.current;
            if (eI && !ew) {
                var t;
                let n = ey.current;
                if (null != n) {
                    n.focus();
                    let { value: e } = n;
                    (n.value = " "), (n.value = e);
                }
                ev(null != (t = e.focusedItemId()) ? t : null);
            } else {
                let t = ej.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), ev(null);
            }
        }, [eI, ew, eK, ej]),
        i.useLayoutEffect(() => {
            eI || (h ? eA("") : null != ek && eA(ek.label));
        }, [h, ek, eI]),
        i.useLayoutEffect(() => {
            h && eA("");
        }, [h, ex.length]);
    let eq = i.useCallback(
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
                    null == (o = ey.current) || o.focus();
                }
            } else l(i);
            ev(null), (!h || E) && eB(!1), eN(!1), eo && eA("");
        },
        [n, eD, h, E, eo, l, a, eB],
    );
    i.useLayoutEffect(() => {
        if (U) {
            var e;
            null == (e = ey.current) || e.focus();
        }
    }, [U]);
    let eX = i.useCallback(() => {
            eA(""), eq(null), eB(!0);
        }, [eq, eB]),
        eQ = i.useCallback(
            (e) => {
                switch (e.key) {
                    case "Escape":
                        eI && (e.stopPropagation(), eB(!1));
                        break;
                    case "ArrowDown":
                    case "ArrowUp":
                        eB(!0);
                }
            },
            [eB, eI],
        ),
        eJ = eD;
    eC && null != eS && !1 !== H && (eJ = "function" == typeof H ? H(eD, eS) : (0, s.Lu)(eD, eS, null != ea ? ea : L)),
        i.useEffect(() => {
            let e = eR.current;
            null == e || e.scrollToTop();
        }, [eS]),
        i.useEffect(() => {
            !ew && eC && null !== eS && requestAnimationFrame(() => eW.focusFirstVisibleItem());
        }, [ew, eC, eS, eW]);
    let e$ = h ? W : Y,
        e0 = i.useRef(null),
        { focusPreviousItem: e1, focusNextItem: e3 } = Z(e0, ey, ex);
    return (0, r.jsxs)(u.bG, {
        navigator: eW,
        children: [
            (0, r.jsx)(g.y, {
                targetElementRef: eP,
                spacing: 0,
                animation: g.y.Animation.NONE,
                shouldShow: eI,
                onRequestClose: () => eB(!1),
                layerContext: ef.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: t, position: n, updatePosition: i } = e;
                    return (0, r.jsx)(G, {
                        loading: ew,
                        multi: !!h,
                        listRef: eR,
                        listId: eU,
                        maxVisibleItems: j,
                        width: null != V && "auto" !== V ? V : eb,
                        selectedValues: eM,
                        closePopout: t,
                        onSelect: eq,
                        closeOnSelect: E,
                        options: eJ,
                        activeDescendant: eO,
                        renderOptionLabel: z,
                        updatePosition: i,
                        popoutPosition: n,
                        renderOptionPrefix: X,
                        renderOptionSuffix: Q,
                    });
                },
                position: B,
                children: (e, t) => {
                    let { "aria-expanded": n, "aria-controls": i } = e,
                        { isShown: a } = t,
                        s = a ? y.u04 : y.CJ0,
                        { ref: l, onKeyDown: c } = eW.containerProps,
                        u = (e) => {
                            var t;
                            null == (t = ef.onKeyDown) || t.call(ef, e), c(e), eQ(e);
                        };
                    return (0, r.jsx)(
                        p.gNt,
                        R(C({}, ed), {
                            children: (e) => {
                                var t;
                                let i = null == e ? void 0 : e.controlId;
                                return (0, r.jsxs)(p.UPk, {
                                    as: "div",
                                    disabled: D,
                                    ref: eP,
                                    className: o()(A, S.wrapper),
                                    containerClassName: N,
                                    style: { "--icons-width": "".concat(ep, "px") },
                                    onBlur: (e) => {
                                        var t, n, r;
                                        (null == (t = eP.current) ? void 0 : t.contains(e.relatedTarget)) ||
                                            (null == (r = eR.current) || null == (n = r.getScrollerNode())
                                                ? void 0
                                                : n.contains(e.relatedTarget)) ||
                                            (h || null == ek || eA(ek.label), eN(!1), eB(!1), null == er || er(e));
                                    },
                                    children: [
                                        (0, r.jsx)(p.tEY, {
                                            ringTarget: eE,
                                            focusTarget: ey,
                                            offset: 4,
                                            children: (0, r.jsx)("div", {
                                                onClick: D
                                                    ? void 0
                                                    : (e) => {
                                                          e.stopPropagation(), e.preventDefault(), eA(""), eB(!0);
                                                      },
                                                onMouseDown: (e) => {
                                                    e.preventDefault();
                                                },
                                                ref: (e) => {
                                                    (eE.current = e), (eF.current = e);
                                                },
                                                className: o()(S.select, S.searchable, { [S.multi]: h }),
                                                children: (0, r.jsx)("div", {
                                                    className: o()(S.value, { [S.multi]: h }),
                                                    children: (0, r.jsx)(e$, {
                                                        query: eS,
                                                        selectedOptions: ex,
                                                        loading: ew,
                                                        renderOptionPrefix: X,
                                                        renderOptionSuffix: Q,
                                                        isDisabled: D,
                                                        isEditing: eC,
                                                        isProcessing: w,
                                                        inputRef: ey,
                                                        "aria-describedby":
                                                            null != J ? J : null == e ? void 0 : e.describedById,
                                                        "aria-errormessage":
                                                            null != (t = null == e ? void 0 : e.errorMessageId)
                                                                ? t
                                                                : em,
                                                        "aria-invalid":
                                                            null != $
                                                                ? $
                                                                : (null == e ? void 0 : e.errorMessageId) != null ||
                                                                  null != eg,
                                                        "aria-required": null != et ? et : ed.required,
                                                        "aria-labelledby": null != ee ? ee : eh,
                                                        "aria-expanded": n,
                                                        setInputRef: (e) => {
                                                            (l.current = e), (ey.current = e);
                                                        },
                                                        onFocus: (e) => {
                                                            var t, n;
                                                            null == (t = ey.current) ||
                                                                t.setSelectionRange(
                                                                    0,
                                                                    null != (n = null == eS ? void 0 : eS.length)
                                                                        ? n
                                                                        : 0,
                                                                ),
                                                                null == ei || ei(e);
                                                        },
                                                        onChange: (e) => {
                                                            eL(e), null == q || q(e), eA(e), eB(!0), eN(!0);
                                                        },
                                                        onKeyDown: u,
                                                        activeDescendant: eO,
                                                        placeholder: I,
                                                        inputId: i,
                                                        listboxId: eU,
                                                        navigatorId: eG,
                                                        selectValue: function (e) {
                                                            let t =
                                                                !(arguments.length > 1) ||
                                                                void 0 === arguments[1] ||
                                                                arguments[1];
                                                            eq(e, t);
                                                        },
                                                        inputClassNames: en,
                                                        hidePills: es,
                                                    }),
                                                }),
                                            }),
                                        }),
                                        (0, r.jsx)("div", {
                                            className: o()(S.icons, S.iconsContainer, { [S.multi]: h }),
                                            ref: e_,
                                            children: w
                                                ? (0, r.jsx)(y.bbz, {
                                                      dotRadius: 3.5,
                                                      themed: !0,
                                                  })
                                                : (0, r.jsxs)(r.Fragment, {
                                                      children: [
                                                          d && ((null != eS && "" !== eS) || ex.length > 0)
                                                              ? (0, r.jsx)(p.P3F, {
                                                                    "aria-label": T.intl.string(T.t.VkKicb),
                                                                    "aria-controls": i,
                                                                    onClick: eX,
                                                                    children: (0, r.jsx)(y.Dio, {
                                                                        size: "xs",
                                                                        color: "currentColor",
                                                                        className: S.clear,
                                                                    }),
                                                                })
                                                              : null,
                                                          (0, r.jsx)(p.P3F, {
                                                              "aria-label": eI
                                                                  ? T.intl.string(T.t.cpT0Cq)
                                                                  : T.intl.string(T.t["3xjX0U"]),
                                                              "aria-controls": i,
                                                              onClick: () => {
                                                                  eB(!eI);
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
                        }),
                    );
                },
            }),
            ex.length > 0 &&
                null != el &&
                (0, r.jsx)("div", {
                    children: (0, r.jsx)(F, {
                        listRef: e0,
                        selectedOptions: ex,
                        selectValue: function (e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            eq(e, t);
                        },
                        focusNextItem: e3,
                        focusPreviousItem: e1,
                        renderCustomPill: el,
                        customPillContainerClassName: ec,
                    }),
                }),
        ],
    });
});
function U(e) {
    let t = (0, I.l)("SearchableSelect"),
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
            onFocus: y,
            onBlur: O,
            debounceTime: v,
            hidePills: T,
            renderOptionLabel: S,
            renderOptionPrefix: A,
            renderOptionSuffix: N,
        } = e,
        { fieldProps: P } = (0, p.XF_)(e),
        D = null != v || "function" == typeof i || null != S;
    if (t && !D) {
        let e = null != f && "function" == typeof f ? f : void 0;
        return (0, r.jsx)(
            b.V,
            R(
                C(
                    {
                        id: n,
                        selectionMode: c ? "multiple" : "single",
                        required: a || h,
                        disabled: o || s,
                        hideTags: T,
                    },
                    P,
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
                                null == N
                                    ? void 0
                                    : N(e, {
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
                    onFocus: y,
                    onBlur: O,
                    clearable: u,
                    closeOnSelect: d,
                },
            ),
        );
    }
    return (0, r.jsx)(j, C({}, e));
}
function G(e) {
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
            renderOptionPrefix: I = () => null,
            renderOptionSuffix: A = () => null,
        } = e,
        N = i.useRef(null),
        D = i.useCallback(
            (e) => {
                t(e), O && n();
            },
            [O, n, t],
        );
    return ((0, v.Z)(m), g)
        ? (0, r.jsx)("div", {
              "aria-busy": !0,
              className: o()(S.popout, S.loading, { [S.popoutPositionTop]: "top" === y }),
              style: { width: l },
              children: (0, r.jsx)(p.$jN, {
                  itemClassName: S.loadingSpinner,
                  type: p.RAz.PULSING_ELLIPSIS,
              }),
          })
        : 0 === s.length
          ? (0, r.jsx)("div", {
                className: o()(S.popout, S.noResults, { [S.popoutPositionTop]: "top" === y }),
                style: { width: l },
                children: (0, r.jsx)(E.x, {
                    color: "text-muted",
                    variant: "text-md/normal",
                    children: T.intl.string(T.t["Xe+fJM"]),
                }),
            })
          : (0, r.jsx)(u.SJ, {
                children: (e) => {
                    var { ref: t, onKeyDown: n } = e,
                        i = P(e, ["ref", "onKeyDown"]);
                    return (0, r.jsx)(
                        p._2F,
                        R(
                            C(
                                {
                                    className: o()(S.popout, S.searchableSelect, {
                                        [S.noScrollbar]: s.length <= c,
                                        [S.popoutPositionTop]: "top" === y,
                                    }),
                                    style: {
                                        width: l,
                                        maxHeight: c * w,
                                    },
                                    ref: (e) => {
                                        var n;
                                        f.current = e;
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
                                innerId: _,
                                rowHeight: w,
                                sections: [s.length],
                                sectionHeight: 0,
                                renderRow: (e) => {
                                    var t;
                                    let { row: n } = e,
                                        i = s[n],
                                        o = h(i);
                                    return (0, r.jsx)(
                                        V,
                                        {
                                            multi: b,
                                            "aria-posinset": n,
                                            "aria-setsize": s.length,
                                            isSelected: a.includes(i.value),
                                            isFocused: d === String(i.value),
                                            value: i.value,
                                            label: o,
                                            onSelect: D,
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
function B(e, t) {
    if (null == e || null == t) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(t) & n) === n;
}
function Z(e, t, n) {
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
function F(e) {
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
            null != a.current && B(a.current, t) && h(t.getAttribute("data-option-pill-value"));
        },
        onBlur: (e) => {
            let t = e.relatedTarget;
            B(a.current, t) || h(null);
        },
        children: t.map((e, t) => {
            var i;
            return (0, r.jsx)(
                "li",
                {
                    className: f ? void 0 : S.optionPillItem,
                    children: (0, r.jsx)(z, {
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
function V(e) {
    var { value: t, label: n, prefix: i, suffix: a, onSelect: s, isSelected: l, isFocused: c, multi: d } = e,
        f = P(e, ["value", "label", "prefix", "suffix", "onSelect", "isSelected", "isFocused", "multi"]);
    let _ = (0, u.JA)(String(t));
    return (0, r.jsxs)(
        p.P3F,
        R(
            C(
                {
                    tag: "li",
                    style: { height: w },
                    focusProps: { enabled: !1 },
                    className: o()(S.option, {
                        [S.focused]: c,
                        [S.multi]: d,
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
                    (0, r.jsx)(H, {
                        isSelected: l,
                        multi: d,
                    }),
                ],
            },
        ),
    );
}
function H(e) {
    let { isSelected: t, multi: n } = e,
        i = 24;
    return n
        ? (0, r.jsx)(p.FZ5, {
              checked: t,
              size: 20,
          })
        : t
          ? (0, r.jsx)(y.owK, {
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
function Y(e) {
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
            (0, r.jsx)(K, C({ selectedOptions: t }, a)),
            null != l
                ? (0, r.jsx)("div", {
                      "aria-hidden": !0,
                      children: l,
                  })
                : null,
        ],
    });
}
function W(e) {
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
        { focusPreviousItem: y, focusNextItem: O, focusLastItem: v } = Z(b, f, a);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            a.length > 0 &&
                !m &&
                (0, r.jsx)(F, {
                    listRef: b,
                    selectedOptions: a,
                    renderOptionPrefix: _,
                    renderOptionSuffix: p,
                    selectValue: s,
                    focusNextItem: O,
                    focusPreviousItem: y,
                }),
            (0, r.jsx)(
                K,
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
function K(e) {
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
function z(e) {
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
                (0, r.jsx)(p.nn4, { children: T.intl.string(T.t.N86XcP) }),
                !c &&
                    (0, r.jsx)(y.Dio, {
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
