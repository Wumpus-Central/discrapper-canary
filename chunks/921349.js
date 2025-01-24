r.d(n, {
    V: function () {
        return B;
    }
});
var i = r(47120);
var a = r(200651),
    o = r(192379),
    s = r(120356),
    l = r.n(s),
    u = r(423802),
    c = r(372817),
    d = r(924826),
    f = r(91192),
    p = r(260866),
    h = r(693789),
    _ = r(178940),
    m = r(1561),
    g = r(84735),
    E = r(15127),
    v = r(766646),
    y = r(742746),
    b = r(235874),
    I = r(922770),
    T = r(993365),
    S = r(481060),
    A = r(393238),
    C = r(434650),
    N = r(98650),
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
        [s, l] = o.useState({
            options: a ? [] : r,
            query: '',
            debouncedQuery: '',
            loading: !1
        }),
        { options: u, loading: c, query: d, debouncedQuery: f } = s,
        p = o.useCallback(
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
        o.useEffect(() => {
            n && p('');
        }, [n, p]),
        o.useEffect(() => {
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
                              p(d);
                          },
                          null != i ? i : 500
                      )))
                    : p(d),
                () => {
                    clearTimeout(e);
                }
            );
        }, [a, d, i, p]),
        o.useEffect(() => {
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
            onQueryChange: o.useCallback((e) => {
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
let B = o.forwardRef(function (e, n) {
    let { options: r, value: i, onChange: s, clearable: c = !1, multi: p = !1, closeOnSelect: h = !0, onOpen: _, onClose: v, placeholder: y = L.intl.string(L.t.XqMe3N), wrapperClassName: I, className: T, isDisabled: N = !1, maxVisibleItems: w = 7, look: B = D.q.FILLED, autoFocus: Z = !1, popoutPosition: j = 'bottom', filter: H = !0, debounceTime: K, renderOptionLabel: z = M, onSearchChange: q, renderOptionPrefix: Q = () => null, renderOptionSuffix: X = () => null, 'aria-describedby': J, 'aria-invalid': $, 'aria-labelledby': ee, 'aria-required': et, inputClassNames: en, centerCaret: er = !1, onBlur: ei, matchSorterOptions: ea, clearQueryOnSelect: eo = !1, hidePills: es, renderCustomPill: el, customPillContainerClassName: eu, ...ec } = e,
        { ref: ed, width: ef } = (0, A.Z)(),
        { titleId: ep, errorId: eh, error: e_ } = (0, E.Gc)(),
        { ref: em, width: eg } = (0, A.Z)(),
        eE = o.useRef(null),
        [ev, ey] = o.useState(null),
        [eb, eI] = o.useState(!1),
        [eT, eS] = o.useState(null),
        [eA, eC] = o.useState(!1),
        eN = o.useRef(null),
        eR = o.useRef(null),
        {
            options: eO,
            loading: eD,
            onQueryChange: eL
        } = k({
            active: eb,
            loadableOptions: r,
            debounceTime: K
        }),
        ex = o.useMemo(() => U(eO, i), [eO, i]),
        ew = o.useMemo(() => ex.map((e) => e.value), [ex]),
        eP = ex[ex.length - 1],
        eM = (0, R.Z)(eP),
        ek = o.useId(),
        eU = o.useId(),
        eB = o.useId(),
        eG = o.useCallback(
            (e) => {
                eb !== e && !N && (eI(e), e ? null == _ || _() : null == v || v());
            },
            [N, v, _, eb]
        ),
        eZ = o.useCallback(
            (e) => {
                eb && !e && eG(!1);
            },
            [eG, eb]
        ),
        eF = (0, C.O)(eZ);
    o.useImperativeHandle(n, () => ({
        close() {
            eG(!1);
        }
    }));
    let eV = o.useCallback((e, n) => {
            let r = document.querySelector(e),
                i = eN.current;
            ey(n), null != i && null != r && i.scrollIntoViewNode({ node: r });
        }, []),
        ej = o.useCallback(
            () =>
                new Promise((e) => {
                    let n = eN.current;
                    if (null == n) return e();
                    n.scrollToTop({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        eH = o.useCallback(
            () =>
                new Promise((e) => {
                    let n = eN.current;
                    if (null == n) return e();
                    n.scrollToBottom({ callback: () => requestAnimationFrame(() => e()) });
                }),
            []
        ),
        eY = (0, d.ZP)({
            id: eU,
            defaultFocused: null != eP ? String(eP.value) : void 0,
            scrollToStart: ej,
            scrollToEnd: eH,
            isEnabled: eb,
            wrap: !0,
            useVirtualFocus: !0,
            setFocus: eV,
            disableClickOnSpace: !0
        }),
        eW = (0, R.Z)(eY),
        eK = (0, R.Z)(eO);
    o.useEffect(() => {
        let e = eK.current,
            n = eM.current;
        eb &&
            null != n &&
            !eD &&
            requestAnimationFrame(() => {
                let r = eN.current,
                    i = e.indexOf(n);
                null == r ||
                    r.scrollToIndex({
                        section: 0,
                        row: i
                    });
            });
    }, [eb, eD, eK, eM]),
        o.useEffect(() => {
            let e = eW.current;
            if (eb && !eD) {
                var n;
                let r = eE.current;
                if (null != r) {
                    r.focus();
                    let { value: e } = r;
                    (r.value = ' '), (r.value = e);
                }
                ey(null !== (n = e.focusedItemId()) && void 0 !== n ? n : null);
            } else {
                let n = eM.current,
                    r = null != n ? String(n.value) : null;
                e.setFocus(r), ey(null);
            }
        }, [eb, eD, eW, eM]),
        o.useLayoutEffect(() => {
            !eb && (p ? eS('') : null != eP && eS(eP.label));
        }, [p, eP, eb]),
        o.useLayoutEffect(() => {
            p && eS('');
        }, [p, ex.length]);
    let ez = o.useCallback(
        function (e) {
            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
            if (null == e) {
                s(p ? [] : void 0);
                return;
            }
            let a = 'function' == typeof r,
                o = a ? eO.find((n) => n.value === e) : e;
            if (p) {
                let r = null != i ? i : [];
                if ((r.some((n) => (a ? n.value : n) === e) ? s(r.filter((n) => (a ? n.value : n) !== e)) : s([...r, o]), n)) {
                    var l;
                    null === (l = eE.current) || void 0 === l || l.focus();
                }
            } else s(o);
            ey(null), (!p || h) && eG(!1), eC(!1), eo && eS('');
        },
        [r, eO, p, h, eo, s, i, eG]
    );
    o.useLayoutEffect(() => {
        if (Z) {
            var e;
            null === (e = eE.current) || void 0 === e || e.focus();
        }
    }, [Z]);
    let eq = o.useCallback(() => {
            eS(''), ez(null), eG(!0);
        }, [ez, eG]),
        eQ = o.useCallback(
            (e) => {
                switch (e.key) {
                    case 'Escape':
                        eb && (e.stopPropagation(), eG(!1));
                        break;
                    case 'ArrowDown':
                    case 'ArrowUp':
                        eG(!0);
                }
            },
            [eG, eb]
        ),
        eX = eO;
    eA && null != eT && !1 !== H && (eX = 'function' == typeof H ? H(eO, eT) : (0, u.Lu)(eO, eT, null != ea ? ea : P)),
        o.useEffect(() => {
            let e = eN.current;
            null == e || e.scrollToTop();
        }, [eT]),
        o.useEffect(() => {
            !eD && eA && null !== eT && requestAnimationFrame(() => eY.focusFirstVisibleItem());
        }, [eD, eA, eT, eY]);
    let eJ = p ? W : Y,
        e$ = o.useRef(null),
        { focusPreviousItem: e0, focusNextItem: e1 } = F(e$, eE, ex),
        e2 = (0, O.Q3)('SearchableSelect');
    return (0, a.jsxs)(f.bG, {
        navigator: eY,
        children: [
            (0, a.jsx)(b.y, {
                spacing: 0,
                animation: b.y.Animation.NONE,
                shouldShow: eb,
                onRequestClose: () => eG(!1),
                layerContext: ec.popoutLayerContext,
                renderPopout: (e) => {
                    let { closePopout: n, position: r, updatePosition: i } = e;
                    return (0, a.jsx)(G, {
                        loading: eD,
                        multi: !!p,
                        listRef: eN,
                        listId: ek,
                        maxVisibleItems: w,
                        width: eg,
                        selectedValues: ew,
                        closePopout: n,
                        onSelect: ez,
                        closeOnSelect: h,
                        options: eX,
                        activeDescendant: ev,
                        renderOptionLabel: z,
                        updatePosition: i,
                        popoutPosition: r,
                        renderOptionPrefix: Q,
                        renderOptionSuffix: X
                    });
                },
                position: j,
                children: (e, n) => {
                    let { 'aria-expanded': r, 'aria-controls': i } = e,
                        { isShown: o, position: s } = n,
                        u = o ? S.ChevronSmallUpIcon : S.ChevronSmallDownIcon,
                        { ref: d, onKeyDown: f } = eY.containerProps,
                        h = (e) => {
                            var n;
                            null === (n = ec.onKeyDown) || void 0 === n || n.call(ec, e), f(e), eQ(e);
                        };
                    return (0, a.jsxs)('div', {
                        ref: eR,
                        className: l()(I, x.wrapper),
                        style: { '--icons-width': ''.concat(ef, 'px') },
                        onBlur: (e) => {
                            var n, r, i;
                            if (!((null === (n = eR.current) || void 0 === n ? void 0 : n.contains(e.relatedTarget)) || (null === (i = eN.current) || void 0 === i ? void 0 : null === (r = i.getScrollerNode()) || void 0 === r ? void 0 : r.contains(e.relatedTarget)))) !p && null != eP && eS(eP.label), eC(!1), eG(!1), null == ei || ei(e);
                        },
                        children: [
                            (0, a.jsx)(g.t, {
                                ringTarget: em,
                                focusTarget: eE,
                                offset: 4,
                                children: (0, a.jsx)('div', {
                                    onClick: N
                                        ? void 0
                                        : (e) => {
                                              e.stopPropagation(), e.preventDefault(), eS(''), eG(!0);
                                          },
                                    onMouseDown: (e) => {
                                        e.preventDefault();
                                    },
                                    ref: (e) => {
                                        (em.current = e), (eF.current = e);
                                    },
                                    className: l()(x.select, x.searchable, T, {
                                        [x.open]: o,
                                        [x.lookFilled]: B === D.q.FILLED,
                                        [x.disabled]: N,
                                        [x.multi]: p,
                                        [x.selectPositionTop]: 'top' === s
                                    }),
                                    children: (0, a.jsx)('div', {
                                        className: l()(x.value, { [x.multi]: p }),
                                        children: (0, a.jsx)(eJ, {
                                            query: eT,
                                            selectedOptions: ex,
                                            loading: eD,
                                            renderOptionPrefix: Q,
                                            renderOptionSuffix: X,
                                            isDisabled: N,
                                            isEditing: eA,
                                            inputRef: eE,
                                            'aria-describedby': null != J ? J : eh,
                                            'aria-required': et,
                                            'aria-invalid': null != $ ? $ : null != e_,
                                            'aria-labelledby': null != ee ? ee : ep,
                                            'aria-expanded': r,
                                            setInputRef: (e) => {
                                                (d.current = e), (eE.current = e);
                                            },
                                            onFocus: () => {
                                                var e, n;
                                                null === (e = eE.current) || void 0 === e || e.setSelectionRange(0, null !== (n = null == eT ? void 0 : eT.length) && void 0 !== n ? n : 0);
                                            },
                                            onChange: (e) => {
                                                eL(e), null == q || q(e), eS(e), eG(!0), eC(!0);
                                            },
                                            onKeyDown: h,
                                            activeDescendant: ev,
                                            placeholder: y,
                                            inputId: eB,
                                            listboxId: ek,
                                            navigatorId: eU,
                                            selectValue: function (e) {
                                                let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                                                ez(e, n);
                                            },
                                            inputClassNames: en,
                                            hidePills: es
                                        })
                                    })
                                })
                            }),
                            (0, a.jsxs)('div', {
                                className: l()(x.icons, {
                                    [x.multi]: p,
                                    [x.iconsContainer]: !er
                                }),
                                ref: ed,
                                children: [
                                    c && ((null != eT && '' !== eT) || ex.length > 0)
                                        ? (0, a.jsx)(m.P, {
                                              'aria-label': L.intl.string(L.t.VkKicX),
                                              'aria-controls': eB,
                                              onClick: eq,
                                              children: (0, a.jsx)(S.XSmallIcon, {
                                                  size: 'xs',
                                                  color: 'currentColor',
                                                  className: x.clear
                                              })
                                          })
                                        : null,
                                    (0, a.jsx)(m.P, {
                                        className: l()({ [x.iconsCenter]: er }),
                                        'aria-label': eb ? L.intl.string(L.t.cpT0Cg) : L.intl.string(L.t['3xjX0d']),
                                        'aria-controls': eB,
                                        onClick: () => {
                                            eG(!eb);
                                        },
                                        children: (0, a.jsx)(u, {
                                            className: x.dropdownIcon,
                                            size: e2 ? 'sm' : void 0
                                        })
                                    })
                                ]
                            })
                        ]
                    });
                }
            }),
            ex.length > 0 &&
                null != el &&
                (0, a.jsx)('div', {
                    children: (0, a.jsx)(V, {
                        listRef: e$,
                        selectedOptions: ex,
                        selectValue: function (e) {
                            let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                            ez(e, n);
                        },
                        focusNextItem: e1,
                        focusPreviousItem: e0,
                        renderCustomPill: el,
                        customPillContainerClassName: eu
                    })
                })
        ]
    });
});
function G(e) {
    let { onSelect: n, closePopout: r, selectedValues: i, options: s, width: u, maxVisibleItems: c, activeDescendant: d, listRef: p, listId: h, renderOptionLabel: _, updatePosition: m, loading: g = !1, multi: E, popoutPosition: v, closeOnSelect: b, renderOptionPrefix: S = () => null, renderOptionSuffix: A = () => null } = e,
        C = o.useRef(null),
        R = o.useCallback(
            (e) => {
                n(e), b && r();
            },
            [b, r, n]
        );
    return ((0, N.Z)(m), g)
        ? (0, a.jsx)('div', {
              'aria-busy': !0,
              className: l()(x.popout, x.loading, { [x.popoutPositionTop]: 'top' === v }),
              style: { width: u },
              children: (0, a.jsx)(I.$, {
                  itemClassName: x.loadingSpinner,
                  type: I.R.PULSING_ELLIPSIS
              })
          })
        : 0 === s.length
          ? (0, a.jsx)('div', {
                className: l()(x.popout, x.noResults, { [x.popoutPositionTop]: 'top' === v }),
                style: { width: u },
                children: (0, a.jsx)(T.x, {
                    color: 'text-muted',
                    variant: 'text-md/normal',
                    children: L.intl.string(L.t['Xe+fJC'])
                })
            })
          : (0, a.jsx)(f.SJ, {
                children: (e) => {
                    let { ref: n, onKeyDown: r, ...o } = e;
                    return (0, a.jsx)(y._2, {
                        className: l()(x.popout, x.searchableSelect, {
                            [x.noScrollbar]: s.length <= c,
                            [x.popoutPositionTop]: 'top' === v
                        }),
                        style: {
                            width: u,
                            maxHeight: c * w
                        },
                        ref: (e) => {
                            var r;
                            p.current = e;
                            let i = null !== (r = null == e ? void 0 : e.getScrollerNode()) && void 0 !== r ? r : null;
                            (C.current = i), (n.current = i);
                        },
                        ...o,
                        role: void 0,
                        innerRole: 'listbox',
                        innerAriaMultiselectable: E,
                        innerId: h,
                        rowHeight: w,
                        sections: [s.length],
                        sectionHeight: 0,
                        renderRow: (e) => {
                            var n;
                            let { row: r } = e,
                                o = s[r],
                                l = _(o);
                            return (0, a.jsx)(
                                j,
                                {
                                    multi: E,
                                    'aria-posinset': r,
                                    'aria-setsize': s.length,
                                    isSelected: i.includes(o.value),
                                    isFocused: d === String(o.value),
                                    value: o.value,
                                    label: l,
                                    onSelect: R,
                                    prefix: S(o, {
                                        inPill: !1,
                                        inDropdown: !0
                                    }),
                                    suffix: A(o, {
                                        inPill: !1,
                                        inDropdown: !0
                                    })
                                },
                                null !== (n = o.key) && void 0 !== n ? n : r
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
    let i = o.useMemo(
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
        a = o.useCallback(
            (n) => {
                var r, i;
                return n === (null === (i = e.current) || void 0 === i ? void 0 : null === (r = i.ownerDocument) || void 0 === r ? void 0 : r.activeElement);
            },
            [e]
        ),
        s = o.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    r = await i.getPreviousFocusableElement({ wrap: !e });
                if (e && ((null == r || a(r)) && (r = await i.getNextFocusableElement()), null == r || a(r))) {
                    var o;
                    return null === (o = n.current) || void 0 === o ? void 0 : o.focus();
                }
                return null == r ? void 0 : r.focus();
            },
            [i, a, n]
        ),
        l = o.useCallback(
            async function () {
                let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    r = await i.getNextFocusableElement({ wrap: !e });
                if (e && ((null == r || a(r)) && (r = await i.getPreviousFocusableElement()), null == r || a(r))) {
                    var o;
                    return null === (o = n.current) || void 0 === o ? void 0 : o.focus();
                }
                return null == r ? void 0 : r.focus();
            },
            [i, a, n]
        );
    return {
        focusPreviousItem: s,
        focusNextItem: l,
        focusLastItem: o.useCallback(async () => {
            let e = await i.getLastFocusableElement();
            return null == e ? void 0 : e.focus();
        }, [i])
    };
}
function V(e) {
    let { selectedOptions: n, selectValue: r, listRef: i, focusPreviousItem: s, focusNextItem: l, renderOptionSuffix: u, renderOptionPrefix: c, renderCustomPill: d, customPillContainerClassName: f } = e,
        p = null != d,
        h = o.useCallback(
            (e) => {
                if (null != i.current)
                    switch (e.key) {
                        case 'ArrowRight':
                            return e.stopPropagation(), e.preventDefault(), l();
                        case 'ArrowLeft':
                            return e.stopPropagation(), e.preventDefault(), s();
                    }
            },
            [i, s, l]
        ),
        [_, m] = o.useState(null);
    return (0, a.jsx)('ul', {
        className: p ? f : x.optionPillContainer,
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
                    className: p ? void 0 : x.optionPillItem,
                    children: (0, a.jsx)(z, {
                        isCustomPill: p,
                        option: e,
                        focused: null == _ ? 0 === n : _ === String(e.value),
                        onClick: () => r(e.value),
                        renderOptionPrefix: c,
                        renderOptionSuffix: u,
                        onKeyDown: async (n) => {
                            'Backspace' === n.key ? (await s(!0), r(e.value, !1)) : 'Delete' === n.key && (await l(!0), r(e.value, !1));
                        },
                        children: p
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
    let { value: n, label: r, prefix: i, suffix: o, onSelect: s, isSelected: u, isFocused: c, multi: d, ...p } = e,
        h = (0, f.JA)(String(n));
    return (0, a.jsxs)(m.P, {
        tag: 'li',
        style: { height: w },
        focusProps: { enabled: !1 },
        className: l()(x.option, {
            [x.focused]: c,
            [x.multi]: d
        }),
        onClick: () => s(n),
        ...h,
        ...p,
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
            null != o &&
                (0, a.jsx)('div', {
                    className: x.suffix,
                    children: o
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
        o = i ? 24 : 20;
    return r
        ? i
            ? (0, a.jsx)(_.F, {
                  value: n,
                  shape: _.X.Shapes.BOX,
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
                width: o,
                height: o
            })
          : null;
}
function Y(e) {
    let { selectedOptions: n, renderOptionPrefix: r, renderOptionSuffix: i, ...o } = e,
        s = n[0],
        l =
            null == r
                ? void 0
                : r(null != s ? s : null, {
                      inPill: !1,
                      inDropdown: !1
                  }),
        u =
            null == i
                ? void 0
                : i(null != s ? s : null, {
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
                ...o
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
    let { query: n, placeholder: r, selectedOptions: i, selectValue: s, onKeyDown: u, isEditing: c, isDisabled: d, inputRef: f, renderOptionPrefix: p, renderOptionSuffix: h, inputClassNames: _, hidePills: m, ...g } = e,
        E = Math.max(r.length, (null != n ? n : '').length),
        v = o.useRef(null),
        { focusPreviousItem: y, focusNextItem: b, focusLastItem: I } = F(v, f, i);
    return (0, a.jsxs)(a.Fragment, {
        children: [
            i.length > 0 &&
                !m &&
                (0, a.jsx)(V, {
                    listRef: v,
                    selectedOptions: i,
                    renderOptionPrefix: p,
                    renderOptionSuffix: h,
                    selectValue: s,
                    focusNextItem: b,
                    focusPreviousItem: y
                }),
            (0, a.jsx)(K, {
                style: { minWidth: ''.concat(E, 'ch') },
                className: l()(x.multi, _),
                query: n,
                placeholder: r,
                selectValue: s,
                selectedOptions: i,
                isEditing: c,
                isDisabled: d,
                inputRef: f,
                onKeyDown: (e) => {
                    ['ArrowLeft', 'Backspace'].includes(e.key) && ('' === n || null == n) && i.length > 0 ? I() : u(e);
                },
                ...g
            })
        ]
    });
}
function K(e) {
    let { query: n, inputId: r, 'aria-describedby': i, 'aria-invalid': o, 'aria-required': s, 'aria-labelledby': u, 'aria-expanded': c, isDisabled: d, listboxId: f, activeDescendant: h, navigatorId: _, onChange: m, onFocus: g, setInputRef: E, isEditing: v, onKeyDown: y, placeholder: b, loading: I, style: T, className: S } = e;
    return (0, a.jsx)('input', {
        role: 'combobox',
        id: r,
        'aria-haspopup': 'listbox',
        'aria-invalid': o,
        'aria-labelledby': u,
        'aria-autocomplete': 'list',
        'aria-expanded': c,
        'aria-describedby': i,
        'aria-disabled': d,
        'aria-controls': f,
        'aria-required': s,
        'aria-busy': I,
        style: null != T ? T : {},
        'aria-activedescendant': null != h ? (0, p.jb)(_, h) : '',
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
        onKeyDown: y,
        placeholder: '' !== (null != n ? n : '').trim() ? void 0 : b,
        ref: E
    });
}
function z(e) {
    let { option: n, focused: r, onClick: i, onKeyDown: o, renderOptionPrefix: s, renderOptionSuffix: l, children: u, isCustomPill: c } = e,
        d =
            !c &&
            (null == s
                ? void 0
                : s(n, {
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
            onKeyDown: o,
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
