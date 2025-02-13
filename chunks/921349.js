n.d(t, { V: () => k }), n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    o = n(423802),
    l = n(372817),
    u = n(924826),
    c = n(91192),
    d = n(260866),
    f = n(693789),
    _ = n(178940),
    p = n(1561),
    h = n(84735),
    m = n(15127),
    g = n(766646),
    E = n(742746),
    v = n(235874),
    y = n(922770),
    I = n(993365),
    T = n(481060),
    b = n(393238),
    S = n(434650),
    A = n(98650),
    N = n(237617),
    C = n(540059),
    R = n(748585),
    O = n(388032),
    D = n(479057);
let L = 44,
    x = { keys: ['label'] };
function P(e) {
    return e.label;
}
function w(e) {
    let { active: t, loadableOptions: n, debounceTime: i } = e,
        a = 'function' == typeof n,
        [s, o] = r.useState({
            options: a ? [] : n,
            query: '',
            debouncedQuery: '',
            loading: !1
        }),
        { options: l, loading: u, query: c, debouncedQuery: d } = s,
        f = r.useCallback(
            (e) =>
                o((t) => ({
                    ...t,
                    loading: a,
                    query: e,
                    debouncedQuery: e
                })),
            [a]
        );
    return (
        r.useEffect(() => {
            t && f('');
        }, [t, f]),
        r.useEffect(() => {
            let e;
            return (
                a
                    ? (o((e) => ({
                          ...e,
                          loading: !0,
                          debouncedQuery: null
                      })),
                      (e = setTimeout(
                          () => {
                              f(c);
                          },
                          null != i ? i : 500
                      )))
                    : f(c),
                () => {
                    clearTimeout(e);
                }
            );
        }, [a, c, i, f]),
        r.useEffect(() => {
            let e = !1;
            function i() {
                return 'function' == typeof n ? n(d) : Promise.resolve(n);
            }
            return (
                t &&
                    null !== d &&
                    i().then((t) => {
                        e ||
                            o((e) => ({
                                ...e,
                                options: t,
                                loading: !1
                            }));
                    }),
                () => {
                    e = !0;
                }
            );
        }, [t, n, d]),
        {
            options: l,
            loading: u,
            onQueryChange: r.useCallback((e) => {
                o((t) => ({
                    ...t,
                    query: e
                }));
            }, [])
        }
    );
}
function M(e, t) {
    return null == t ? [] : (Array.isArray(t) ? t : [t]).map((t) => ('object' == typeof t && (null == t || 'value' in t) ? t : e.find((e) => e.value === t))).filter(Boolean);
}
let k = r.forwardRef(function (e, t) {
    let { options: n, value: a, onChange: l, clearable: d = !1, multi: f = !1, closeOnSelect: _ = !0, onOpen: g, onClose: E, placeholder: y = O.intl.string(O.t.XqMe3N), wrapperClassName: I, className: A, isDisabled: L = !1, maxVisibleItems: k = 7, look: G = R.q.FILLED, autoFocus: F = !1, popoutPosition: V = 'bottom', filter: Y = !0, debounceTime: W, renderOptionLabel: K = P, onSearchChange: z, renderOptionPrefix: q = () => null, renderOptionSuffix: Q = () => null, 'aria-describedby': X, 'aria-invalid': J, 'aria-labelledby': $, 'aria-required': ee, inputClassNames: et, centerCaret: en = !1, onBlur: ei, matchSorterOptions: er, clearQueryOnSelect: ea = !1, hidePills: es, renderCustomPill: eo, customPillContainerClassName: el, ...eu } = e,
        { ref: ec, width: ed } = (0, b.Z)(),
        { titleId: ef, errorId: e_, error: ep } = (0, m.Gc)(),
        { ref: eh, width: em } = (0, b.Z)(),
        eg = r.useRef(null),
        [eE, ev] = r.useState(null),
        [ey, eI] = r.useState(!1),
        [eT, eb] = r.useState(null),
        [eS, eA] = r.useState(!1),
        eN = r.useRef(null),
        eC = r.useRef(null),
        {
            options: eR,
            loading: eO,
            onQueryChange: eD
        } = w({
            active: ey,
            loadableOptions: n,
            debounceTime: W
        }),
        eL = r.useMemo(() => M(eR, a), [eR, a]),
        ex = r.useMemo(() => eL.map((e) => e.value), [eL]),
        eP = eL[eL.length - 1],
        ew = (0, N.Z)(eP),
        eM = r.useId(),
        ek = r.useId(),
        eU = r.useId(),
        eG = r.useCallback(
            (e) => {
                ey === e || L || (eI(e), e ? null == g || g() : null == E || E());
            },
            [L, E, g, ey]
        ),
        eB = r.useCallback(
            (e) => {
                ey && !e && eG(!1);
            },
            [eG, ey]
        ),
        eZ = (0, S.O)(eB);
    r.useImperativeHandle(t, () => ({
        close() {
            eG(!1);
        }
    }));
    let eF = r.useCallback((e, t) => {
            let n = document.querySelector(e),
                i = eN.current;
            ev(t), null != i && null != n && i.scrollIntoViewNode({ node: n });
        }, []),
        eV = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = eN.current;
                    if (null == t) return e();
                    t.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        ej = r.useCallback(
            () =>
                new Promise((e) => {
                    let t = eN.current;
                    if (null == t) return e();
                    t.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        eH = (0, u.ZP)({
            id: ek,
            defaultFocused: null != eP ? String(eP.value) : void 0,
            scrollToStart: eV,
            scrollToEnd: ej,
            isEnabled: ey,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eF,
            disableClickOnSpace: !0
        }),
        eY = (0, N.Z)(eH),
        eW = (0, N.Z)(eR);
    r.useEffect(() => {
        let e = eW.current,
            t = ew.current;
        ey &&
            null != t &&
            !eO &&
            requestAnimationFrame(() => {
                let n = eN.current,
                    i = e.indexOf(t);
                null == n ||
                    n.scrollToIndex({
                        section: 0,
                        row: i
                    });
            });
    }, [ey, eO, eW, ew]),
        r.useEffect(() => {
            let e = eY.current;
            if (ey && !eO) {
                var t;
                let n = eg.current;
                if (null != n) {
                    n.focus();
                    let { value: e } = n;
                    (n.value = ' '), (n.value = e);
                }
                ev(null !== (t = e.focusedItemId()) && void 0 !== t ? t : null);
            } else {
                let t = ew.current,
                    n = null != t ? String(t.value) : null;
                e.setFocus(n), ev(null);
            }
        }, [ey, eO, eY, ew]),
        r.useLayoutEffect(() => {
            ey || (f ? eb('') : null != eP && eb(eP.label));
        }, [f, eP, ey]),
        r.useLayoutEffect(() => {
            f && eb('');
        }, [f, eL.length]);
    let eK = r.useCallback(
        function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) {
                l(f ? [] : void 0);
                return;
            }
            let i = 'function' == typeof n,
                r = i ? eR.find((t) => t.value === e) : e;
            if (f) {
                let n = null != a ? a : [];
                if ((n.some((t) => (i ? t.value : t) === e) ? l(n.filter((t) => (i ? t.value : t) !== e)) : l([...n, r]), t)) {
                    var s;
                    null === (s = eg.current) || void 0 === s || s.focus();
                }
            } else l(r);
            ev(null), (!f || _) && eG(!1), eA(!1), ea && eb('');
        },
        [n, eR, f, _, ea, l, a, eG]
    );
    r.useLayoutEffect(() => {
        if (F) {
            var e;
            null === (e = eg.current) || void 0 === e || e.focus();
        }
    }, [F]);
    let ez = r.useCallback(() => {
            eb(''), eK(null), eG(!0);
        }, [eK, eG]),
        eq = r.useCallback(
            (e) => {
                switch (e.key) {
                    case 'Escape':
                        ey && (e.stopPropagation(), eG(!1));
                        break;
                    case 'ArrowDown':
                    case 'ArrowUp':
                        eG(!0);
                }
            },
            [eG, ey]
        ),
        eQ = eR;
    eS && null != eT && !1 !== Y && (eQ = 'function' == typeof Y ? Y(eR, eT) : (0, o.Lu)(eR, eT, null != er ? er : x)),
        r.useEffect(() => {
            let e = eN.current;
            null == e || e.scrollToTop();
        }, [eT]),
        r.useEffect(() => {
            !eO && eS && null !== eT && requestAnimationFrame(() => eH.focusFirstVisibleItem());
        }, [eO, eS, eT, eH]);
    let eX = f ? H : j,
        eJ = r.useRef(null),
        { focusPreviousItem: e$, focusNextItem: e0 } = B(eJ, eg, eL),
        e1 = (0, C.Q3)('SearchableSelect');
    return (0, i.jsxs)(c.bG, {
        navigator: eH,
        children: [
            (0, i.jsx)(v.y, {
                spacing: 0,
                animation: v.y.Animation.NONE,
                shouldShow: ey,
                onRequestClose: () => eG(!1),
                layerContext: eu.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: t, position: n, updatePosition: r } = e;
                    return (0, i.jsx)(U, {
                        loading: eO,
                        multi: !!f,
                        listRef: eN,
                        listId: eM,
                        maxVisibleItems: k,
                        width: em,
                        selectedValues: ex,
                        closePopout: t,
                        onSelect: eK,
                        closeOnSelect: _,
                        options: eQ,
                        activeDescendant: eE,
                        renderOptionLabel: K,
                        updatePosition: r,
                        popoutPosition: n,
                        renderOptionPrefix: q,
                        renderOptionSuffix: Q
                    });
                },
                position: V,
                children: (e, t) => {
                    let { 'aria-expanded': n, 'aria-controls': r } = e,
                        { isShown: a, position: o } = t,
                        l = a ? T.u04 : T.CJ0,
                        { ref: u, onKeyDown: c } = eH.containerProps,
                        _ = (e) => {
                            var t;
                            null === (t = eu.onKeyDown) || void 0 === t || t.call(eu, e), c(e), eq(e);
                        };
                    return (0, i.jsxs)('div', {
                        ref: eC,
                        className: s()(I, D.wrapper),
                        style: { '--icons-width': ''.concat(ed, 'px') },
                        onBlur: (e) => {
                            var t, n, i;
                            !((null === (t = eC.current) || void 0 === t ? void 0 : t.contains(e.relatedTarget)) || (null === (i = eN.current) || void 0 === i ? void 0 : null === (n = i.getScrollerNode()) || void 0 === n ? void 0 : n.contains(e.relatedTarget))) && (f || null == eP || eb(eP.label), eA(!1), eG(!1), null == ei || ei(e));
                        },
                        children: [
                            (0, i.jsx)(h.t, {
                                ringTarget: eh,
                                focusTarget: eg,
                                offset: 4,
                                children: (0, i.jsx)('div', {
                                    onClick: L
                                        ? void 0
                                        : (e) => {
                                              e.stopPropagation(), e.preventDefault(), eb(''), eG(!0);
                                          },
                                    onMouseDown: (e) => {
                                        e.preventDefault();
                                    },
                                    ref: (e) => {
                                        (eh.current = e), (eZ.current = e);
                                    },
                                    className: s()(D.select, D.searchable, A, {
                                        [D.open]: a,
                                        [D.lookFilled]: G === R.q.FILLED,
                                        [D.disabled]: L,
                                        [D.multi]: f,
                                        [D.selectPositionTop]: 'top' === o
                                    }),
                                    children: (0, i.jsx)('div', {
                                        className: s()(D.value, { [D.multi]: f }),
                                        children: (0, i.jsx)(eX, {
                                            query: eT,
                                            selectedOptions: eL,
                                            loading: eO,
                                            renderOptionPrefix: q,
                                            renderOptionSuffix: Q,
                                            isDisabled: L,
                                            isEditing: eS,
                                            inputRef: eg,
                                            'aria-describedby': null != X ? X : e_,
                                            'aria-required': ee,
                                            'aria-invalid': null != J ? J : null != ep,
                                            'aria-labelledby': null != $ ? $ : ef,
                                            'aria-expanded': n,
                                            setInputRef: (e) => {
                                                (u.current = e), (eg.current = e);
                                            },
                                            onFocus: () => {
                                                var e, t;
                                                null === (e = eg.current) || void 0 === e || e.setSelectionRange(0, null !== (t = null == eT ? void 0 : eT.length) && void 0 !== t ? t : 0);
                                            },
                                            onChange: (e) => {
                                                eD(e), null == z || z(e), eb(e), eG(!0), eA(!0);
                                            },
                                            onKeyDown: _,
                                            activeDescendant: eE,
                                            placeholder: y,
                                            inputId: eU,
                                            listboxId: eM,
                                            navigatorId: ek,
                                            selectValue: function (e) {
                                                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                                eK(e, t);
                                            },
                                            inputClassNames: et,
                                            hidePills: es
                                        })
                                    })
                                })
                            }),
                            (0, i.jsxs)('div', {
                                className: s()(D.icons, {
                                    [D.multi]: f,
                                    [D.iconsContainer]: !en
                                }),
                                ref: ec,
                                children: [
                                    d && ((null != eT && '' !== eT) || eL.length > 0)
                                        ? (0, i.jsx)(p.P, {
                                              'aria-label': O.intl.string(O.t.VkKicX),
                                              'aria-controls': eU,
                                              onClick: ez,
                                              children: (0, i.jsx)(T.Dio, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: D.clear
                                              })
                                          })
                                        : null,
                                    (0, i.jsx)(p.P, {
                                        className: s()({ [D.iconsCenter]: en }),
                                        'aria-label': ey ? O.intl.string(O.t.cpT0Cg) : O.intl.string(O.t['3xjX0d']),
                                        'aria-controls': eU,
                                        onClick: () => {
                                            eG(!ey);
                                        },
                                        children: (0, i.jsx)(l, {
                                            className: D.dropdownIcon,
                                            size: e1 ? 'sm' : void 0
                                        })
                                    })
                                ]
                            })
                        ]
                    });
                }
            }),
            eL.length > 0 &&
                null != eo &&
                (0, i.jsx)('div', {
                    children: (0, i.jsx)(Z, {
                        listRef: eJ,
                        selectedOptions: eL,
                        selectValue: function (e) {
                            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            eK(e, t);
                        },
                        focusNextItem: e0,
                        focusPreviousItem: e$,
                        renderCustomPill: eo,
                        customPillContainerClassName: el
                    })
                })
        ]
    });
});
function U(e) {
    let { onSelect: t, closePopout: n, selectedValues: a, options: o, width: l, maxVisibleItems: u, activeDescendant: d, listRef: f, listId: _, renderOptionLabel: p, updatePosition: h, loading: m = !1, multi: g, popoutPosition: v, closeOnSelect: T, renderOptionPrefix: b = () => null, renderOptionSuffix: S = () => null } = e,
        N = r.useRef(null),
        C = r.useCallback(
            (e) => {
                t(e), T && n();
            },
            [T, n, t]
        );
    return ((0, A.Z)(h), m)
        ? (0, i.jsx)('div', {
              'aria-busy': !0,
              className: s()(D.popout, D.loading, { [D.popoutPositionTop]: 'top' === v }),
              style: { width: l },
              children: (0, i.jsx)(y.$, {
                  itemClassName: D.loadingSpinner,
                  type: y.R.PULSING_ELLIPSIS
              })
          })
        : 0 === o.length
          ? (0, i.jsx)('div', {
                className: s()(D.popout, D.noResults, { [D.popoutPositionTop]: 'top' === v }),
                style: { width: l },
                children: (0, i.jsx)(I.x, {
                    color: 'text-muted',
                    variant: 'text-md/normal',
                    children: O.intl.string(O.t['Xe+fJC'])
                })
            })
          : (0, i.jsx)(c.SJ, {
                children: (e) => {
                    let { ref: t, onKeyDown: n, ...r } = e;
                    return (0, i.jsx)(E._2, {
                        className: s()(D.popout, D.searchableSelect, {
                            [D.noScrollbar]: o.length <= u,
                            [D.popoutPositionTop]: 'top' === v
                        }),
                        style: {
                            width: l,
                            maxHeight: u * L
                        },
                        ref: (e) => {
                            var n;
                            f.current = e;
                            let i = null !== (n = null == e ? void 0 : e.getScrollerNode()) && void 0 !== n ? n : null;
                            (N.current = i), (t.current = i);
                        },
                        ...r,
                        role: void 0,
                        innerRole: 'listbox',
                        innerAriaMultiselectable: g,
                        innerId: _,
                        rowHeight: L,
                        sections: [o.length],
                        sectionHeight: 0,
                        renderRow: (e) => {
                            var t;
                            let { row: n } = e,
                                r = o[n],
                                s = p(r);
                            return (0, i.jsx)(
                                F,
                                {
                                    multi: g,
                                    'aria-posinset': n,
                                    'aria-setsize': o.length,
                                    isSelected: a.includes(r.value),
                                    isFocused: d === String(r.value),
                                    value: r.value,
                                    label: s,
                                    onSelect: C,
                                    prefix: b(r, {
                                        inPill: !1,
                                        inDropdown: !0
                                    }),
                                    suffix: S(r, {
                                        inPill: !1,
                                        inDropdown: !0
                                    })
                                },
                                null !== (t = r.key) && void 0 !== t ? t : n
                            );
                        },
                        renderSection: () => null
                    });
                }
            });
}
function G(e, t) {
    if (null == e || null == t) return !1;
    let n = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(t) & n) === n;
}
function B(e, t, n) {
    let i = r.useMemo(
            () =>
                (0, l.E)({
                    getFocusableElements() {
                        let t = e.current;
                        return null != t ? Array.from(t.querySelectorAll('[data-option-pill-value]')) : [];
                    },
                    getActiveElement() {
                        var t, n;
                        return null == e ? void 0 : null === (n = e.current) || void 0 === n ? void 0 : null === (t = n.ownerDocument) || void 0 === t ? void 0 : t.activeElement;
                    }
                }),
            [n, e]
        ),
        a = r.useCallback(
            (t) => {
                var n, i;
                return t === (null === (i = e.current) || void 0 === i ? void 0 : null === (n = i.ownerDocument) || void 0 === n ? void 0 : n.activeElement);
            },
            [e]
        ),
        s = r.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await i.getPreviousFocusableElement({ wrap: !e });
                if (e && ((null == n || a(n)) && (n = await i.getNextFocusableElement()), null == n || a(n))) {
                    var r;
                    return null === (r = t.current) || void 0 === r ? void 0 : r.focus();
                }
                return null == n ? void 0 : n.focus();
            },
            [i, a, t]
        );
    return {
        focusPreviousItem: s,
        focusNextItem: r.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    n = await i.getNextFocusableElement({ wrap: !e });
                if (e && ((null == n || a(n)) && (n = await i.getPreviousFocusableElement()), null == n || a(n))) {
                    var r;
                    return null === (r = t.current) || void 0 === r ? void 0 : r.focus();
                }
                return null == n ? void 0 : n.focus();
            },
            [i, a, t]
        ),
        focusLastItem: r.useCallback(async () => {
            let e = await i.getLastFocusableElement();
            return null == e ? void 0 : e.focus();
        }, [i])
    };
}
function Z(e) {
    let { selectedOptions: t, selectValue: n, listRef: a, focusPreviousItem: s, focusNextItem: o, renderOptionSuffix: l, renderOptionPrefix: u, renderCustomPill: c, customPillContainerClassName: d } = e,
        f = null != c,
        _ = r.useCallback(
            (e) => {
                if (null != a.current)
                    switch (e.key) {
                        case 'ArrowRight':
                            return e.stopPropagation(), e.preventDefault(), o();
                        case 'ArrowLeft':
                            return e.stopPropagation(), e.preventDefault(), s();
                    }
            },
            [a, s, o]
        ),
        [p, h] = r.useState(null);
    return (0, i.jsx)('ul', {
        className: f ? d : D.optionPillContainer,
        ref: a,
        onKeyDown: _,
        onFocus: (e) => {
            let t = e.target;
            null != a.current && G(a.current, t) && h(t.getAttribute('data-option-pill-value'));
        },
        onBlur: (e) => {
            let t = e.relatedTarget;
            G(a.current, t) || h(null);
        },
        children: t.map((e, t) => {
            var r;
            return (0, i.jsx)(
                'li',
                {
                    className: f ? void 0 : D.optionPillItem,
                    children: (0, i.jsx)(W, {
                        isCustomPill: f,
                        option: e,
                        focused: null == p ? 0 === t : p === String(e.value),
                        onClick: () => n(e.value),
                        renderOptionPrefix: u,
                        renderOptionSuffix: l,
                        onKeyDown: async (t) => {
                            'Backspace' === t.key ? (await s(!0), n(e.value, !1)) : 'Delete' === t.key && (await o(!0), n(e.value, !1));
                        },
                        children: f
                            ? c(e)
                            : (0, i.jsx)('div', {
                                  className: D.content,
                                  children: e.label
                              })
                    })
                },
                null !== (r = e.key) && void 0 !== r ? r : ''.concat(e.label, '-').concat(e.value)
            );
        })
    });
}
function F(e) {
    let { value: t, label: n, prefix: r, suffix: a, onSelect: o, isSelected: l, isFocused: u, multi: d, ...f } = e,
        _ = (0, c.JA)(String(t));
    return (0, i.jsxs)(p.P, {
        tag: 'li',
        style: { height: L },
        focusProps: { enabled: !1 },
        className: s()(D.option, {
            [D.focused]: u,
            [D.multi]: d
        }),
        onClick: () => o(t),
        ..._,
        ...f,
        'aria-selected': l,
        id: _['data-list-item-id'],
        'data-searchable-select-option': !0,
        role: 'option',
        children: [
            (0, i.jsxs)('div', {
                className: D.content,
                children: [n, '\xA0']
            }),
            null != r &&
                (0, i.jsx)('div', {
                    className: D.prefix,
                    children: r
                }),
            ' ',
            null != a &&
                (0, i.jsx)('div', {
                    className: D.suffix,
                    children: a
                }),
            ' ',
            (0, i.jsx)(V, {
                isSelected: l,
                multi: d
            })
        ]
    });
}
function V(e) {
    let { isSelected: t, multi: n } = e,
        r = (0, C.Q3)('SearchableSelectOption'),
        a = r ? 24 : 20;
    return n
        ? r
            ? (0, i.jsx)(_.F, {
                  value: t,
                  shape: _.X.Shapes.BOX,
                  size: 20,
                  disabled: !1,
                  indicatorClassName: s()(D.multiSelectCheckbox, {
                      [D.checked]: t,
                      [D.unchecked]: !t
                  })
              })
            : (0, i.jsx)('div', {
                  className: s()(D.multiSelectCheckbox, {
                      [D.checked]: t,
                      [D.unchecked]: !t
                  }),
                  children:
                      t &&
                      (0, i.jsx)(T.dz2, {
                          size: 'md',
                          color: 'currentColor',
                          colorClass: D.multiSelectCheck
                      })
              })
        : t
          ? (0, i.jsx)(T.owK, {
                size: 'custom',
                color: 'currentColor',
                'aria-hidden': !0,
                secondaryColor: 'white',
                className: D.selectedIcon,
                width: a,
                height: a
            })
          : null;
}
function j(e) {
    let { selectedOptions: t, renderOptionPrefix: n, renderOptionSuffix: r, ...a } = e,
        s = t[0],
        o =
            null == n
                ? void 0
                : n(null != s ? s : null, {
                      inPill: !1,
                      inDropdown: !1
                  }),
        l =
            null == r
                ? void 0
                : r(null != s ? s : null, {
                      inPill: !1,
                      inDropdown: !1
                  });
    return (0, i.jsxs)(i.Fragment, {
        children: [
            null != o
                ? (0, i.jsx)('div', {
                      'aria-hidden': !0,
                      children: o
                  })
                : null,
            (0, i.jsx)(Y, {
                selectedOptions: t,
                ...a
            }),
            null != l
                ? (0, i.jsx)('div', {
                      'aria-hidden': !0,
                      children: l
                  })
                : null
        ]
    });
}
function H(e) {
    let { query: t, placeholder: n, selectedOptions: a, selectValue: o, onKeyDown: l, isEditing: u, isDisabled: c, inputRef: d, renderOptionPrefix: f, renderOptionSuffix: _, inputClassNames: p, hidePills: h, ...m } = e,
        g = Math.max(n.length, (null != t ? t : '').length),
        E = r.useRef(null),
        { focusPreviousItem: v, focusNextItem: y, focusLastItem: I } = B(E, d, a);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            a.length > 0 &&
                !h &&
                (0, i.jsx)(Z, {
                    listRef: E,
                    selectedOptions: a,
                    renderOptionPrefix: f,
                    renderOptionSuffix: _,
                    selectValue: o,
                    focusNextItem: y,
                    focusPreviousItem: v
                }),
            (0, i.jsx)(Y, {
                style: { minWidth: ''.concat(g, 'ch') },
                className: s()(D.multi, p),
                query: t,
                placeholder: n,
                selectValue: o,
                selectedOptions: a,
                isEditing: u,
                isDisabled: c,
                inputRef: d,
                onKeyDown: (e) => {
                    ['ArrowLeft', 'Backspace'].includes(e.key) && ('' === t || null == t) && a.length > 0 ? I() : l(e);
                },
                ...m
            })
        ]
    });
}
function Y(e) {
    let { query: t, inputId: n, 'aria-describedby': r, 'aria-invalid': a, 'aria-required': o, 'aria-labelledby': l, 'aria-expanded': u, isDisabled: c, listboxId: f, activeDescendant: _, navigatorId: p, onChange: h, onFocus: m, setInputRef: g, isEditing: E, onKeyDown: v, placeholder: y, loading: I, style: T, className: b } = e;
    return (0, i.jsx)('input', {
        role: 'combobox',
        id: n,
        'aria-haspopup': 'listbox',
        'aria-invalid': a,
        'aria-labelledby': l,
        'aria-autocomplete': 'list',
        'aria-expanded': u,
        'aria-describedby': r,
        'aria-disabled': c,
        'aria-controls': f,
        'aria-required': o,
        'aria-busy': I,
        style: null != T ? T : {},
        'aria-activedescendant': null != _ ? (0, d.jb)(p, _) : '',
        disabled: c,
        value: null != t ? t : '',
        onChange: (e) => {
            h(e.target.value);
        },
        onFocus: m,
        className: s()(D.searchInput, b, {
            [D.editing]: E,
            [D.disabled]: c
        }),
        onKeyDown: v,
        placeholder: '' !== (null != t ? t : '').trim() ? void 0 : y,
        ref: g
    });
}
function W(e) {
    let { option: t, focused: n, onClick: r, onKeyDown: a, renderOptionPrefix: s, renderOptionSuffix: o, children: l, isCustomPill: u } = e,
        c =
            !u &&
            (null == s
                ? void 0
                : s(t, {
                      inPill: !0,
                      inDropdown: !1
                  })),
        d =
            !u &&
            (null == o
                ? void 0
                : o(t, {
                      inPill: !0,
                      inDropdown: !1
                  }));
    return (0, i.jsx)(h.t, {
        offset: 3,
        children: (0, i.jsxs)(f.zx, {
            look: f.zx.Looks.BLANK,
            tabIndex: n ? 0 : -1,
            'data-option-pill-value': t.value,
            className: D.optionPillBtn,
            innerClassName: u ? null : D.optionPill,
            onClick: () => (null == r ? void 0 : r(t.value)),
            onKeyDown: a,
            children: [
                l,
                null != c &&
                    (0, i.jsx)('div', {
                        className: D.prefix,
                        children: c
                    }),
                ' ',
                null != d &&
                    (0, i.jsx)('div', {
                        className: D.suffix,
                        children: d
                    }),
                (0, i.jsx)(g.n, { children: O.intl.string(O.t.N86XcH) }),
                !u &&
                    (0, i.jsx)(T.Dio, {
                        size: 'custom',
                        color: 'currentColor',
                        className: D.deleteOptionIcon,
                        width: 14,
                        height: 14
                    })
            ]
        })
    });
}
