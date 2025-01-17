r.d(n, {
    V: function () {
        return B;
    }
});
var i = r(47120);
var a = r(200651),
    s = r(192379),
    o = r(120356),
    l = r.n(o),
    u = r(423802),
    c = r(372817),
    d = r(924826),
    f = r(91192),
    _ = r(260866),
    h = r(693789),
    p = r(178940),
    m = r(1561),
    g = r(84735),
    E = r(15127),
    v = r(766646),
    I = r(742746),
    T = r(235874),
    b = r(922770),
    y = r(993365),
    S = r(481060),
    A = r(393238),
    N = r(434650),
    C = r(98650),
    R = r(237617),
    O = r(540059),
    D = r(748585),
    L = r(388032),
    x = r(736278);
let w = 44,
    P = { keys: ['label'] };
function M(e) {
    return e.label;
}
function k(e) {
    let { active: n, loadableOptions: r, debounceTime: i } = e,
        a = 'function' == typeof r,
        [o, l] = s.useState({
            options: a ? [] : r,
            query: '',
            debouncedQuery: '',
            loading: !1
        }),
        { options: u, loading: c, query: d, debouncedQuery: f } = o,
        _ = s.useCallback(
            (e) =>
                l((n) => ({
                    ...n,
                    loading: a,
                    query: e,
                    debouncedQuery: e
                })),
            [a]
        );
    return (
        s.useEffect(() => {
            n && _('');
        }, [n, _]),
        s.useEffect(() => {
            let e;
            return (
                a
                    ? (l((e) => ({
                          ...e,
                          loading: !0,
                          debouncedQuery: null
                      })),
                      (e = setTimeout(
                          () => {
                              _(d);
                          },
                          null != i ? i : 500
                      )))
                    : _(d),
                () => {
                    clearTimeout(e);
                }
            );
        }, [a, d, i, _]),
        s.useEffect(() => {
            let e = !1;
            function i() {
                return 'function' == typeof r ? r(f) : Promise.resolve(r);
            }
            return (
                n &&
                    null !== f &&
                    i().then((n) => {
                        !e &&
                            l((e) => ({
                                ...e,
                                options: n,
                                loading: !1
                            }));
                    }),
                () => {
                    e = !0;
                }
            );
        }, [n, r, f]),
        {
            options: u,
            loading: c,
            onQueryChange: s.useCallback((e) => {
                l((n) => ({
                    ...n,
                    query: e
                }));
            }, [])
        }
    );
}
function U(e, n) {
    return null == n ? [] : (Array.isArray(n) ? n : [n]).map((n) => ('object' == typeof n && (null == n || 'value' in n) ? n : e.find((e) => e.value === n))).filter(Boolean);
}
let B = s.forwardRef(function (e, n) {
    let { options: r, value: i, onChange: o, clearable: c = !1, multi: _ = !1, closeOnSelect: h = !0, onOpen: p, onClose: v, placeholder: I = L.intl.string(L.t.XqMe3N), wrapperClassName: b, className: y, isDisabled: C = !1, maxVisibleItems: O = 7, look: w = D.q.FILLED, autoFocus: B = !1, popoutPosition: Z = 'bottom', filter: j = !0, debounceTime: H, renderOptionLabel: K = M, onSearchChange: z, renderOptionPrefix: q = () => null, renderOptionSuffix: Q = () => null, 'aria-describedby': X, 'aria-invalid': J, 'aria-labelledby': $, 'aria-required': ee, inputClassNames: et, centerCaret: en = !1, onBlur: er, matchSorterOptions: ei, clearQueryOnSelect: ea = !1, hidePills: es, renderCustomPill: eo, customPillContainerClassName: el, ...eu } = e,
        { ref: ec, width: ed } = (0, A.Z)(),
        { titleId: ef, errorId: e_, error: eh } = (0, E.Gc)(),
        { ref: ep, width: em } = (0, A.Z)(),
        eg = s.useRef(null),
        [eE, ev] = s.useState(null),
        [eI, eT] = s.useState(!1),
        [eb, ey] = s.useState(null),
        [eS, eA] = s.useState(!1),
        eN = s.useRef(null),
        eC = s.useRef(null),
        {
            options: eR,
            loading: eO,
            onQueryChange: eD
        } = k({
            active: eI,
            loadableOptions: r,
            debounceTime: H
        }),
        eL = s.useMemo(() => U(eR, i), [eR, i]),
        ex = s.useMemo(() => eL.map((e) => e.value), [eL]),
        ew = eL[eL.length - 1],
        eP = (0, R.Z)(ew),
        eM = s.useId(),
        ek = s.useId(),
        eU = s.useId(),
        eB = s.useCallback(
            (e) => {
                eI !== e && !C && (eT(e), e ? null == p || p() : null == v || v());
            },
            [C, v, p, eI]
        ),
        eG = s.useCallback(
            (e) => {
                eI && !e && eB(!1);
            },
            [eB, eI]
        ),
        eZ = (0, N.O)(eG);
    s.useImperativeHandle(n, () => ({
        close() {
            eB(!1);
        }
    }));
    let eF = s.useCallback((e, n) => {
            let r = document.querySelector(e),
                i = eN.current;
            ev(n), null != i && null != r && i.scrollIntoViewNode({ node: r });
        }, []),
        eV = s.useCallback(
            () =>
                new Promise((e) => {
                    let n = eN.current;
                    if (null == n) return e();
                    n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        ej = s.useCallback(
            () =>
                new Promise((e) => {
                    let n = eN.current;
                    if (null == n) return e();
                    n.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        eH = (0, d.ZP)({
            id: ek,
            defaultFocused: null != ew ? String(ew.value) : void 0,
            scrollToStart: eV,
            scrollToEnd: ej,
            isEnabled: eI,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eF,
            disableClickOnSpace: !0
        }),
        eY = (0, R.Z)(eH),
        eW = (0, R.Z)(eR);
    s.useEffect(() => {
        let e = eW.current,
            n = eP.current;
        eI &&
            null != n &&
            !eO &&
            requestAnimationFrame(() => {
                let r = eN.current,
                    i = e.indexOf(n);
                null == r ||
                    r.scrollToIndex({
                        section: 0,
                        row: i
                    });
            });
    }, [eI, eO, eW, eP]),
        s.useEffect(() => {
            let e = eY.current;
            if (eI && !eO) {
                var n;
                let r = eg.current;
                if (null != r) {
                    r.focus();
                    let { value: e } = r;
                    (r.value = ' '), (r.value = e);
                }
                ev(null !== (n = e.focusedItemId()) && void 0 !== n ? n : null);
            } else {
                let n = eP.current,
                    r = null != n ? String(n.value) : null;
                e.setFocus(r), ev(null);
            }
        }, [eI, eO, eY, eP]),
        s.useLayoutEffect(() => {
            !eI && (_ ? ey('') : null != ew && ey(ew.label));
        }, [_, ew, eI]),
        s.useLayoutEffect(() => {
            _ && ey('');
        }, [_, eL.length]);
    let eK = s.useCallback(
        function (e) {
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) {
                o(_ ? [] : void 0);
                return;
            }
            let a = 'function' == typeof r,
                s = a ? eR.find((n) => n.value === e) : e;
            if (_) {
                let r = null != i ? i : [];
                if ((r.some((n) => (a ? n.value : n) === e) ? o(r.filter((n) => (a ? n.value : n) !== e)) : o([...r, s]), n)) {
                    var l;
                    null === (l = eg.current) || void 0 === l || l.focus();
                }
            } else o(s);
            ev(null), (!_ || h) && eB(!1), eA(!1), ea && ey('');
        },
        [r, eR, _, h, ea, o, i, eB]
    );
    s.useLayoutEffect(() => {
        if (B) {
            var e;
            null === (e = eg.current) || void 0 === e || e.focus();
        }
    }, [B]);
    let ez = s.useCallback(() => {
            ey(''), eK(null), eB(!0);
        }, [eK, eB]),
        eq = s.useCallback(
            (e) => {
                switch (e.key) {
                    case 'Escape':
                        eI && (e.stopPropagation(), eB(!1));
                        break;
                    case 'ArrowDown':
                    case 'ArrowUp':
                        eB(!0);
                }
            },
            [eB, eI]
        ),
        eQ = eR;
    eS && null != eb && !1 !== j && (eQ = 'function' == typeof j ? j(eR, eb) : (0, u.Lu)(eR, eb, null != ei ? ei : P)),
        s.useEffect(() => {
            let e = eN.current;
            null == e || e.scrollToTop();
        }, [eb]),
        s.useEffect(() => {
            !eO && eS && null !== eb && requestAnimationFrame(() => eH.focusFirstVisibleItem());
        }, [eO, eS, eb, eH]);
    let eX = _ ? W : Y,
        eJ = s.useRef(null),
        { focusPreviousItem: e$, focusNextItem: e0 } = F(eJ, eg, eL);
    return (0, a.jsxs)(f.bG, {
        navigator: eH,
        children: [
            (0, a.jsx)(T.y, {
                spacing: 0,
                animation: T.y.Animation.NONE,
                shouldShow: eI,
                onRequestClose: () => eB(!1),
                layerContext: eu.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: n, position: r, updatePosition: i } = e;
                    return (0, a.jsx)(G, {
                        loading: eO,
                        multi: !!_,
                        listRef: eN,
                        listId: eM,
                        maxVisibleItems: O,
                        width: em,
                        selectedValues: ex,
                        closePopout: n,
                        onSelect: eK,
                        closeOnSelect: h,
                        options: eQ,
                        activeDescendant: eE,
                        renderOptionLabel: K,
                        updatePosition: i,
                        popoutPosition: r,
                        renderOptionPrefix: q,
                        renderOptionSuffix: Q
                    });
                },
                position: Z,
                children: (e, n) => {
                    let { 'aria-expanded': r, 'aria-controls': i } = e,
                        { isShown: s, position: o } = n,
                        u = s ? S.ChevronSmallUpIcon : S.ChevronSmallDownIcon,
                        { ref: d, onKeyDown: f } = eH.containerProps,
                        h = (e) => {
                            var n;
                            null === (n = eu.onKeyDown) || void 0 === n || n.call(eu, e), f(e), eq(e);
                        };
                    return (0, a.jsxs)('div', {
                        ref: eC,
                        className: l()(b, x.wrapper),
                        style: { '--icons-width': ''.concat(ed, 'px') },
                        onBlur: (e) => {
                            var n, r, i;
                            if (!((null === (n = eC.current) || void 0 === n ? void 0 : n.contains(e.relatedTarget)) || (null === (i = eN.current) || void 0 === i ? void 0 : null === (r = i.getScrollerNode()) || void 0 === r ? void 0 : r.contains(e.relatedTarget)))) !_ && null != ew && ey(ew.label), eA(!1), eB(!1), null == er || er(e);
                        },
                        children: [
                            (0, a.jsx)(g.t, {
                                ringTarget: ep,
                                focusTarget: eg,
                                offset: 4,
                                children: (0, a.jsx)('div', {
                                    onClick: C
                                        ? void 0
                                        : (e) => {
                                              e.stopPropagation(), e.preventDefault(), ey(''), eB(!0);
                                          },
                                    onMouseDown: (e) => {
                                        e.preventDefault();
                                    },
                                    ref: (e) => {
                                        (ep.current = e), (eZ.current = e);
                                    },
                                    className: l()(x.select, x.searchable, y, {
                                        [x.open]: s,
                                        [x.lookFilled]: w === D.q.FILLED,
                                        [x.disabled]: C,
                                        [x.multi]: _,
                                        [x.selectPositionTop]: 'top' === o
                                    }),
                                    children: (0, a.jsx)('div', {
                                        className: l()(x.value, { [x.multi]: _ }),
                                        children: (0, a.jsx)(eX, {
                                            query: eb,
                                            selectedOptions: eL,
                                            loading: eO,
                                            renderOptionPrefix: q,
                                            renderOptionSuffix: Q,
                                            isDisabled: C,
                                            isEditing: eS,
                                            inputRef: eg,
                                            'aria-describedby': null != X ? X : e_,
                                            'aria-required': ee,
                                            'aria-invalid': null != J ? J : null != eh,
                                            'aria-labelledby': null != $ ? $ : ef,
                                            'aria-expanded': r,
                                            setInputRef: (e) => {
                                                (d.current = e), (eg.current = e);
                                            },
                                            onFocus: () => {
                                                var e, n;
                                                null === (e = eg.current) || void 0 === e || e.setSelectionRange(0, null !== (n = null == eb ? void 0 : eb.length) && void 0 !== n ? n : 0);
                                            },
                                            onChange: (e) => {
                                                eD(e), null == z || z(e), ey(e), eB(!0), eA(!0);
                                            },
                                            onKeyDown: h,
                                            activeDescendant: eE,
                                            placeholder: I,
                                            inputId: eU,
                                            listboxId: eM,
                                            navigatorId: ek,
                                            selectValue: function (e) {
                                                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                                eK(e, n);
                                            },
                                            inputClassNames: et,
                                            hidePills: es
                                        })
                                    })
                                })
                            }),
                            (0, a.jsxs)('div', {
                                className: l()(x.icons, {
                                    [x.multi]: _,
                                    [x.iconsContainer]: !en
                                }),
                                ref: ec,
                                children: [
                                    c && ((null != eb && '' !== eb) || eL.length > 0)
                                        ? (0, a.jsx)(m.P, {
                                              'aria-label': L.intl.string(L.t.VkKicX),
                                              'aria-controls': eU,
                                              onClick: ez,
                                              children: (0, a.jsx)(S.XSmallIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: x.clear
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)(m.P, {
                                        className: l()({ [x.iconsCenter]: en }),
                                        'aria-label': eI ? L.intl.string(L.t.cpT0Cg) : L.intl.string(L.t['3xjX0d']),
                                        'aria-controls': eU,
                                        onClick: () => {
                                            eB(!eI);
                                        },
                                        children: (0, a.jsx)(u, { className: x.dropdownIcon })
                                    })
                                ]
                            })
                        ]
                    });
                }
            }),
            eL.length > 0 &&
                null != eo &&
                (0, a.jsx)('div', {
                    children: (0, a.jsx)(V, {
                        listRef: eJ,
                        selectedOptions: eL,
                        selectValue: function (e) {
                            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            eK(e, n);
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
function G(e) {
    let { onSelect: n, closePopout: r, selectedValues: i, options: o, width: u, maxVisibleItems: c, activeDescendant: d, listRef: _, listId: h, renderOptionLabel: p, updatePosition: m, loading: g = !1, multi: E, popoutPosition: v, closeOnSelect: T, renderOptionPrefix: S = () => null, renderOptionSuffix: A = () => null } = e,
        N = s.useRef(null),
        R = s.useCallback(
            (e) => {
                n(e), T && r();
            },
            [T, r, n]
        );
    return ((0, C.Z)(m), g)
        ? (0, a.jsx)('div', {
              'aria-busy': !0,
              className: l()(x.popout, x.loading, { [x.popoutPositionTop]: 'top' === v }),
              style: { width: u },
              children: (0, a.jsx)(b.$, {
                  itemClassName: x.loadingSpinner,
                  type: b.R.PULSING_ELLIPSIS
              })
          })
        : 0 === o.length
          ? (0, a.jsx)('div', {
                className: l()(x.popout, x.noResults, { [x.popoutPositionTop]: 'top' === v }),
                style: { width: u },
                children: (0, a.jsx)(y.x, {
                    color: 'text-muted',
                    variant: 'text-md/normal',
                    children: L.intl.string(L.t['Xe+fJC'])
                })
            })
          : (0, a.jsx)(f.SJ, {
                children: (e) => {
                    let { ref: n, onKeyDown: r, ...s } = e;
                    return (0, a.jsx)(I._2, {
                        className: l()(x.popout, x.searchableSelect, {
                            [x.noScrollbar]: o.length <= c,
                            [x.popoutPositionTop]: 'top' === v
                        }),
                        style: {
                            width: u,
                            maxHeight: c * w
                        },
                        ref: (e) => {
                            var r;
                            _.current = e;
                            let i = null !== (r = null == e ? void 0 : e.getScrollerNode()) && void 0 !== r ? r : null;
                            (N.current = i), (n.current = i);
                        },
                        ...s,
                        role: void 0,
                        innerRole: 'listbox',
                        innerAriaMultiselectable: E,
                        innerId: h,
                        rowHeight: w,
                        sections: [o.length],
                        sectionHeight: 0,
                        renderRow: (e) => {
                            var n;
                            let { row: r } = e,
                                s = o[r],
                                l = p(s);
                            return (0, a.jsx)(
                                j,
                                {
                                    multi: E,
                                    'aria-posinset': r,
                                    'aria-setsize': o.length,
                                    isSelected: i.includes(s.value),
                                    isFocused: d === String(s.value),
                                    value: s.value,
                                    label: l,
                                    onSelect: R,
                                    prefix: S(s, {
                                        inPill: !1,
                                        inDropdown: !0
                                    }),
                                    suffix: A(s, {
                                        inPill: !1,
                                        inDropdown: !0
                                    })
                                },
                                null !== (n = s.key) && void 0 !== n ? n : r
                            );
                        },
                        renderSection: () => null
                    });
                }
            });
}
function Z(e, n) {
    if (null == e || null == n) return !1;
    let r = Node.DOCUMENT_POSITION_CONTAINED_BY | Node.DOCUMENT_POSITION_FOLLOWING;
    return (e.compareDocumentPosition(n) & r) === r;
}
function F(e, n, r) {
    let i = s.useMemo(
            () =>
                (0, c.E)({
                    getFocusableElements() {
                        let n = e.current;
                        return null != n ? Array.from(n.querySelectorAll('[data-option-pill-value]')) : [];
                    },
                    getActiveElement() {
                        var n, r;
                        return null == e ? void 0 : null === (r = e.current) || void 0 === r ? void 0 : null === (n = r.ownerDocument) || void 0 === n ? void 0 : n.activeElement;
                    }
                }),
            [r, e]
        ),
        a = s.useCallback(
            (n) => {
                var r, i;
                return n === (null === (i = e.current) || void 0 === i ? void 0 : null === (r = i.ownerDocument) || void 0 === r ? void 0 : r.activeElement);
            },
            [e]
        ),
        o = s.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    r = await i.getPreviousFocusableElement({ wrap: !e });
                if (e && ((null == r || a(r)) && (r = await i.getNextFocusableElement()), null == r || a(r))) {
                    var s;
                    return null === (s = n.current) || void 0 === s ? void 0 : s.focus();
                }
                return null == r ? void 0 : r.focus();
            },
            [i, a, n]
        ),
        l = s.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    r = await i.getNextFocusableElement({ wrap: !e });
                if (e && ((null == r || a(r)) && (r = await i.getPreviousFocusableElement()), null == r || a(r))) {
                    var s;
                    return null === (s = n.current) || void 0 === s ? void 0 : s.focus();
                }
                return null == r ? void 0 : r.focus();
            },
            [i, a, n]
        );
    return {
        focusPreviousItem: o,
        focusNextItem: l,
        focusLastItem: s.useCallback(async () => {
            let e = await i.getLastFocusableElement();
            return null == e ? void 0 : e.focus();
        }, [i])
    };
}
function V(e) {
    let { selectedOptions: n, selectValue: r, listRef: i, focusPreviousItem: o, focusNextItem: l, renderOptionSuffix: u, renderOptionPrefix: c, renderCustomPill: d, customPillContainerClassName: f } = e,
        _ = null != d,
        h = s.useCallback(
            (e) => {
                if (null != i.current)
                    switch (e.key) {
                        case 'ArrowRight':
                            return e.stopPropagation(), e.preventDefault(), l();
                        case 'ArrowLeft':
                            return e.stopPropagation(), e.preventDefault(), o();
                    }
            },
            [i, o, l]
        ),
        [p, m] = s.useState(null);
    return (0, a.jsx)('ul', {
        className: _ ? f : x.optionPillContainer,
        ref: i,
        onKeyDown: h,
        onFocus: (e) => {
            let n = e.target;
            null != i.current && Z(i.current, n) && m(n.getAttribute('data-option-pill-value'));
        },
        onBlur: (e) => {
            let n = e.relatedTarget;
            !Z(i.current, n) && m(null);
        },
        children: n.map((e, n) => {
            var i;
            return (0, a.jsx)(
                'li',
                {
                    className: _ ? void 0 : x.optionPillItem,
                    children: (0, a.jsx)(z, {
                        isCustomPill: _,
                        option: e,
                        focused: null == p ? 0 === n : p === String(e.value),
                        onClick: () => r(e.value),
                        renderOptionPrefix: c,
                        renderOptionSuffix: u,
                        onKeyDown: async (n) => {
                            'Backspace' === n.key ? (await o(!0), r(e.value, !1)) : 'Delete' === n.key && (await l(!0), r(e.value, !1));
                        },
                        children: _
                            ? d(e)
                            : (0, a.jsx)('div', {
                                  className: x.content,
                                  children: e.label
                              })
                    })
                },
                null !== (i = e.key) && void 0 !== i ? i : ''.concat(e.label, '-').concat(e.value)
            );
        })
    });
}
function j(e) {
    let { value: n, label: r, prefix: i, suffix: s, onSelect: o, isSelected: u, isFocused: c, multi: d, ..._ } = e,
        h = (0, f.JA)(String(n));
    return (0, a.jsxs)(m.P, {
        tag: 'li',
        style: { height: w },
        focusProps: { enabled: !1 },
        className: l()(x.option, {
            [x.focused]: c,
            [x.multi]: d
        }),
        onClick: () => o(n),
        ...h,
        ..._,
        'aria-selected': u,
        id: h['data-list-item-id'],
        role: 'option',
        children: [
            (0, a.jsxs)('div', {
                className: x.content,
                children: [r, '\xA0']
            }),
            null != i &&
                (0, a.jsx)('div', {
                    className: x.prefix,
                    children: i
                }),
            ' ',
            null != s &&
                (0, a.jsx)('div', {
                    className: x.suffix,
                    children: s
                }),
            ' ',
            (0, a.jsx)(H, {
                isSelected: u,
                multi: d
            })
        ]
    });
}
function H(e) {
    let { isSelected: n, multi: r } = e,
        i = (0, O.Q3)('SearchableSelectOption'),
        s = i ? 24 : 20;
    return r
        ? i
            ? (0, a.jsx)(p.F, {
                  value: n,
                  shape: p.X.Shapes.BOX,
                  size: 20,
                  disabled: !1,
                  indicatorClassName: l()(x.multiSelectCheckbox, {
                      [x.checked]: n,
                      [x.unchecked]: !n
                  })
              })
            : (0, a.jsx)('div', {
                  className: l()(x.multiSelectCheckbox, {
                      [x.checked]: n,
                      [x.unchecked]: !n
                  }),
                  children:
                      n &&
                      (0, a.jsx)(S.CheckmarkLargeIcon, {
                          size: 'md',
                          color: 'currentColor',
                          colorClass: x.multiSelectCheck
                      })
              })
        : n
          ? (0, a.jsx)(S.CircleCheckIcon, {
                size: 'custom',
                color: 'currentColor',
                'aria-hidden': !0,
                secondaryColor: 'white',
                className: x.selectedIcon,
                width: s,
                height: s
            })
          : null;
}
function Y(e) {
    let { selectedOptions: n, renderOptionPrefix: r, renderOptionSuffix: i, ...s } = e,
        o = n[0],
        l =
            null == r
                ? void 0
                : r(null != o ? o : null, {
                      inPill: !1,
                      inDropdown: !1
                  }),
        u =
            null == i
                ? void 0
                : i(null != o ? o : null, {
                      inPill: !1,
                      inDropdown: !1
                  });
    return (0, a.jsxs)(a.Fragment, {
        children: [
            null != l
                ? (0, a.jsx)('div', {
                      'aria-hidden': !0,
                      children: l
                  })
                : null,
            (0, a.jsx)(K, {
                selectedOptions: n,
                ...s
            }),
            null != u
                ? (0, a.jsx)('div', {
                      'aria-hidden': !0,
                      children: u
                  })
                : null
        ]
    });
}
function W(e) {
    let { query: n, placeholder: r, selectedOptions: i, selectValue: o, onKeyDown: u, isEditing: c, isDisabled: d, inputRef: f, renderOptionPrefix: _, renderOptionSuffix: h, inputClassNames: p, hidePills: m, ...g } = e,
        E = Math.max(r.length, (null != n ? n : '').length),
        v = s.useRef(null),
        { focusPreviousItem: I, focusNextItem: T, focusLastItem: b } = F(v, f, i);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            i.length > 0 &&
                !m &&
                (0, a.jsx)(V, {
                    listRef: v,
                    selectedOptions: i,
                    renderOptionPrefix: _,
                    renderOptionSuffix: h,
                    selectValue: o,
                    focusNextItem: T,
                    focusPreviousItem: I
                }),
            (0, a.jsx)(K, {
                style: { minWidth: ''.concat(E, 'ch') },
                className: l()(x.multi, p),
                query: n,
                placeholder: r,
                selectValue: o,
                selectedOptions: i,
                isEditing: c,
                isDisabled: d,
                inputRef: f,
                onKeyDown: (e) => {
                    ['ArrowLeft', 'Backspace'].includes(e.key) && ('' === n || null == n) && i.length > 0 ? b() : u(e);
                },
                ...g
            })
        ]
    });
}
function K(e) {
    let { query: n, inputId: r, 'aria-describedby': i, 'aria-invalid': s, 'aria-required': o, 'aria-labelledby': u, 'aria-expanded': c, isDisabled: d, listboxId: f, activeDescendant: h, navigatorId: p, onChange: m, onFocus: g, setInputRef: E, isEditing: v, onKeyDown: I, placeholder: T, loading: b, style: y, className: S } = e;
    return (0, a.jsx)('input', {
        role: 'combobox',
        id: r,
        'aria-haspopup': 'listbox',
        'aria-invalid': s,
        'aria-labelledby': u,
        'aria-autocomplete': 'list',
        'aria-expanded': c,
        'aria-describedby': i,
        'aria-disabled': d,
        'aria-controls': f,
        'aria-required': o,
        'aria-busy': b,
        style: null != y ? y : {},
        'aria-activedescendant': null != h ? (0, _.jb)(p, h) : '',
        disabled: d,
        value: null != n ? n : '',
        onChange: (e) => {
            m(e.target.value);
        },
        onFocus: g,
        className: l()(x.searchInput, S, {
            [x.editing]: v,
            [x.disabled]: d
        }),
        onKeyDown: I,
        placeholder: '' !== (null != n ? n : '').trim() ? void 0 : T,
        ref: E
    });
}
function z(e) {
    let { option: n, focused: r, onClick: i, onKeyDown: s, renderOptionPrefix: o, renderOptionSuffix: l, children: u, isCustomPill: c } = e,
        d =
            !c &&
            (null == o
                ? void 0
                : o(n, {
                      inPill: !0,
                      inDropdown: !1
                  })),
        f =
            !c &&
            (null == l
                ? void 0
                : l(n, {
                      inPill: !0,
                      inDropdown: !1
                  }));
    return (0, a.jsx)(g.t, {
        offset: 3,
        children: (0, a.jsxs)(h.zx, {
            look: h.zx.Looks.BLANK,
            tabIndex: r ? 0 : -1,
            'data-option-pill-value': n.value,
            className: x.optionPillBtn,
            innerClassName: c ? null : x.optionPill,
            onClick: () => (null == i ? void 0 : i(n.value)),
            onKeyDown: s,
            children: [
                u,
                null != d &&
                    (0, a.jsx)('div', {
                        className: x.prefix,
                        children: d
                    }),
                ' ',
                null != f &&
                    (0, a.jsx)('div', {
                        className: x.suffix,
                        children: f
                    }),
                (0, a.jsx)(v.n, { children: L.intl.string(L.t.N86XcH) }),
                !c &&
                    (0, a.jsx)(S.XSmallIcon, {
                        size: 'custom',
                        color: 'currentColor',
                        className: x.deleteOptionIcon,
                        width: 14,
                        height: 14
                    })
            ]
        })
    });
}
