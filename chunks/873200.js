(n.d(t, { a3: () => v, iS: () => b, X2: () => M }), n(321073));
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(896170),
    o = n(612324),
    d = n(646514),
    c = n(603392),
    u = n(559106),
    _ = n(452027),
    E = n(15626),
    A = n(941030),
    f = n(992251),
    h = n(116711),
    I = n(431527),
    p = n(95477),
    m = n(991957),
    T = n(44482);
function g() {}
function S() {
    return r.useContext(N);
}
let N = r.createContext({
    value: void 0,
    options: [],
    selectedOptions: [],
    filteredOptions: [],
    groups: [],
    query: "",
    setQuery: g,
    activeDescendantIndex: null,
    setActiveDescendantIndex: g,
    loading: !1,
    selectionMode: "single",
    handleSelectionChange: g,
    onSelectionChange: g,
    isOpen: !1,
    setIsOpen: g,
    isEditing: !1,
    setIsEditing: g,
});
var C = n(601973),
    O = n(483084),
    R = n(715022),
    L = n(358983),
    y = n(470791);
let D = { keys: ["label"] };
function b(e) {
    let {
            children: t,
            isCollapsible: n = !1,
            maxOptionsVisible: a = 5,
            isOpen: s = !0,
            setIsOpen: o,
            options: d,
            ...c
        } = e,
        {
            selectionMode: u,
            disabled: _,
            readOnly: E,
            closeOnSelect: A,
            formatOption: f,
            onSelectionChange: h,
            value: I,
            customMatchSorter: p,
            matchSorterOptions: m,
            required: T,
        } = c,
        g = r.useId(),
        S = r.useRef(null),
        [C, R] = r.useState(null),
        [L, y] = r.useState(!1),
        [b, v] = r.useState(""),
        [P, M] = r.useState(""),
        {
            options: U,
            groups: w,
            loading: G,
            onQueryChange: x,
        } = (0, O.K)({ active: s ?? !0, options: d, renderOption: f }),
        k = r.useCallback((e, t) => {
            (M(e), v(t ?? e));
        }, []);
    r.useEffect(() => {
        x(b);
    }, [x, b]);
    let F = r.useCallback((e) => (null != p ? p(e, b) : (0, l.Ht)(e, b, m ?? D)), [b, p, m]),
        { flatOptions: B, groups: V } = r.useMemo(() => {
            if ("" === b) return { flatOptions: U, groups: w };
            if (0 === w.length) return { flatOptions: F(U), groups: [] };
            let e = [],
                t = [],
                n = 0;
            for (let i of w) {
                let r = F(U.slice(n, n + i.count));
                ((n += i.count), 0 !== r.length && (e.push(...r), t.push({ label: i.label, count: r.length })));
            }
            return { flatOptions: e, groups: t };
        }, [U, w, b, F]),
        H = r.useRef(void 0),
        j = r.useMemo(
            () =>
                ("single" === u ? (H.current = U.find((e) => e.value === I)) : (H.current = void 0),
                null == I || (Array.isArray(I) && 0 === I.length))
                    ? []
                    : (Array.isArray(I) ? I : [I]).map((e) => U.find((t) => t.value === e)).filter((e) => null != e),
            [I, U, u],
        );
    (r.useEffect(() => {
        L || ("single" === u && k(H.current?.label ?? "", ""));
    }, [k, j, u, L]),
        r.useEffect(() => {
            n && !s && "multiple" === u && k("", "");
        }, [n, s, u, k]),
        r.useEffect(() => {
            if (s && null != H.current) {
                let e = B.findIndex((e) => e.value === H.current?.value);
                R(-1 !== e ? e : null);
            }
        }, [s, R, B]));
    let W = _ || E,
        Y = r.useCallback(
            (e) => {
                if (W || (T && 0 === e.length)) return;
                let t = Array.from(e);
                ("multiple" === u && t.length < 1
                    ? h([])
                    : "multiple" === u
                      ? h(t.map((e) => e.value))
                      : h(t[0]?.value),
                    "multiple" !== u || n || k("", ""),
                    A && s && o?.(!1),
                    y(!1));
            },
            [W, u, n, h, A, s, o, T, k],
        ),
        K = j.length > 0;
    return (0, i.jsx)(N.Provider, {
        value: {
            activeDescendantIndex: C,
            setActiveDescendantIndex: R,
            listBoxId: g,
            inputFieldRef: S,
            isInert: W,
            isCollapsible: n,
            hasValue: K,
            value: I,
            options: U,
            filteredOptions: B,
            groups: V,
            selectedOptions: j,
            maxOptionsVisible: a,
            query: P,
            setQuery: k,
            loading: G,
            handleSelectionChange: Y,
            isOpen: s,
            setIsOpen: o,
            isEditing: L,
            setIsEditing: y,
            ...c,
        },
        children: t,
    });
}
function v(e) {
    let { ref: t, ...n } = e,
        { fieldProps: a, props: s } = (0, _.n)(n),
        l = (0, c.r)(d.A.modules.select.MAX_WIDTH),
        o = r.useMemo(() => ({ horizontalControlColumnWidth: `minmax(${l}px, auto)` }), [l]);
    return (0, i.jsx)(_.D, {
        ...a,
        "data-mana-component": "combobox",
        layoutConfig: o,
        children: (0, i.jsx)(P, { ...s, ref: t }),
    });
}
function P(e) {
    let {
            id: t,
            autoFocus: n,
            placeholder: a,
            hideTags: l,
            name: d,
            form: c,
            showChevronButton: _ = !1,
            onQueryChange: A,
            onFocus: f,
            onBlur: g,
            onKeyDown: N,
            wrapTags: O,
            ref: D,
        } = e,
        b = r.useRef(null),
        v = r.useRef(null),
        P = r.useRef(null),
        M = r.useContext(E._),
        { i18n: U } = r.useContext(h.VO),
        {
            activeDescendantIndex: w,
            setActiveDescendantIndex: G,
            selectionMode: x,
            disabled: k,
            readOnly: F,
            loading: B,
            clearable: V,
            required: H,
            listBoxId: j,
            inputFieldRef: W,
            shouldFocusWrap: Y,
            isInert: K,
            isCollapsible: $,
            hasValue: X,
            handleSelectionChange: z,
            onSelectionChange: q,
            isOpen: Q,
            setIsOpen: J,
            options: Z,
            selectedOptions: ee,
            filteredOptions: et,
            query: en,
            setQuery: ei,
            isEditing: er,
            setIsEditing: ea,
        } = S(),
        es = "multiple" === x && X,
        el = es && !0 !== l,
        eo = null != w ? (0, R.ZN)(j, w) : void 0,
        ed = r.useCallback(() => {
            K || J?.((e) => (e || v.current?.focus(), !e));
        }, [K, J]),
        ec = r.useCallback(() => {
            !0 === V && ("multiple" === x ? q([]) : q(null), ei(""), v.current?.focus());
        }, [q, x, V, ei]),
        eu = r.useCallback(
            (e) => {
                (ea(!0), f?.(e), v.current?.setSelectionRange(en?.length ?? 0, en?.length ?? 0));
            },
            [f, ea, en],
        ),
        e_ = r.useCallback(() => {
            K || J?.(!0);
        }, [J, K]),
        eE = r.useCallback(
            (e) => {
                e.relatedTarget?.closest(`[data-list-id="${j}"]`) == null && (ea(!1), J?.(!1), g?.(e));
            },
            [g, J, j, ea],
        );
    r.useEffect(() => {
        es &&
            !O &&
            (P.current = setTimeout(() => {
                v.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }, 10));
    }, [ee, es, O]);
    let eA = r.useCallback(() => {
            K || (J?.(!0), v.current?.focus());
        }, [J, K]),
        ef = r.useCallback(() => {
            v.current?.select();
        }, []),
        eh = r.useCallback(
            (e) => {
                if (K) return;
                let t = Array.from(e)[0];
                z(ee.filter((e) => e.id !== t));
            },
            [z, ee, K],
        ),
        eI = r.useCallback(
            (e) => {
                let t = et.length,
                    n = 1;
                switch ((N?.(e), e.key)) {
                    case "ArrowDown":
                    case "PageDown":
                        if (
                            ((n = "PageDown" === e.key ? 10 : 1),
                            0 === t || (e.preventDefault(), J?.(!0), e.altKey || !Q))
                        )
                            return;
                        G((e) => {
                            if (null === e) return 0;
                            let i = e + n;
                            return i >= t && Y ? 0 : Math.min(i, t - 1);
                        });
                        break;
                    case "ArrowUp":
                    case "PageUp":
                        if (((n = "PageUp" === e.key ? 10 : 1), 0 === t)) return;
                        (e.preventDefault(),
                            G((e) => {
                                if (null === e) return 0;
                                let i = e - n;
                                return i < 0 && Y ? t - 1 : Math.max(i, 0);
                            }),
                            J?.(!0));
                        break;
                    case "Enter":
                        if ((e.preventDefault(), e.stopPropagation(), !Q)) {
                            if (0 === t) return;
                            J?.(!0);
                            return;
                        }
                        if (null == w || t - 1 < w) return;
                        let i = et[w];
                        if (null == i || !0 === i.disabled) return;
                        if (H && 1 === ee.length && ee.includes(i)) return void z(ee);
                        z("single" === x ? [i] : (0, R.qH)(x, ee, i));
                        break;
                    case "Backspace":
                        "multiple" === x &&
                            "" === en &&
                            ee.length > 0 &&
                            null != b.current &&
                            (e.preventDefault(), e.stopPropagation(), b.current.lastChild?.focus());
                        break;
                    case "Escape":
                        X && V && (e.preventDefault(), e.stopPropagation(), ec());
                        break;
                    case "Home":
                        if ((e.preventDefault(), 0 === t)) return;
                        G(0);
                        break;
                    case "End":
                        if ((e.preventDefault(), 0 === t)) return;
                        G(t - 1);
                }
            },
            [x, H, V, X, Y, Q, N, ec, z, ee, en, J, et, w, G],
        ),
        ep = r.useCallback(
            (e) => {
                (ea(!0), ei(e.target.value), J?.(!0), A?.(e), G(null));
            },
            [A, ea, ei, J, G],
        ),
        em = r.useMemo(() => {
            if (0 === ee.length) return null;
            if ("single" === x) {
                if (er) return null;
                let e = Array.from(ee)[0];
                return (0, i.jsx)("div", {
                    className: y.OS,
                    children: (0, i.jsx)(T.c, { ...e, onClick: ef, "aria-hidden": !0, inInput: !0 }),
                });
            }
            if (l) return null;
            let e = Array.from(ee).map((e) => {
                let t;
                return (
                    null != e.leading && (t = e.leading),
                    {
                        id: e.id,
                        label: e.label,
                        icon: t,
                        isDisabled: k || e.disabled,
                        accessibilityHint: U.PRESS_DELETE_TO_REMOVE_TAG,
                    }
                );
            });
            return (0, i.jsx)(I.C, {
                listRef: b,
                label: U.SELECTED_TAGS_HEADING,
                items: e,
                layout: "inline",
                onRemove: eh,
            });
        }, [x, k, ef, eh, er, ee, l, U]),
        eT = (0, o.A)(W, D);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(C.p, {
                ref: eT,
                disabled: k,
                readOnly: F,
                loading: B,
                clearable: V,
                fullWidth: !0,
                showChevronButton: _,
                isOpen: !!Q,
                isInert: K,
                hasValue: X,
                hasError: M?.errorMessageId != null,
                handleToggle: ed,
                handleClear: ec,
                children: (0, i.jsx)("div", {
                    className: s()(y._U, { [y.kS]: es, [y.kj]: es && O }),
                    onClick: eA,
                    children: (0, i.jsxs)("div", {
                        className: y.P$,
                        children: [
                            em,
                            (0, i.jsx)(u.vN, {
                                ringTarget: W,
                                children: (0, i.jsx)(p.p, {
                                    ref: v,
                                    id: t,
                                    className: s()(L.input, y.kk, { [y.kK]: "single" === x && X && !er }),
                                    autoFocus: n,
                                    placeholder: el ? void 0 : (a ?? U.SELECT_PLACEHOLDER),
                                    role: "combobox",
                                    disabled: k,
                                    readOnly: F,
                                    "aria-haspopup": "listbox",
                                    "aria-autocomplete": "list",
                                    "aria-busy": B,
                                    "aria-controls": j,
                                    "aria-expanded": !$ || Q,
                                    "aria-activedescendant": eo,
                                    "aria-labelledby": M?.labelId,
                                    "aria-describedby": M?.describedById,
                                    "aria-errormessage": M?.errorMessageId,
                                    "aria-invalid": M?.errorMessageId != null,
                                    "aria-required": H,
                                    value: en ?? "",
                                    onChange: ep,
                                    onFocus: eu,
                                    onBlur: eE,
                                    onKeyDown: eI,
                                    onClick: e_,
                                }),
                            }),
                        ],
                    }),
                }),
            }),
            (0, i.jsx)(m.H, {
                name: d,
                form: c,
                disabled: K,
                selectionMode: x,
                selectedItems: ee,
                onSelectionChange: z,
                listItems: Z,
            }),
        ],
    });
}
function M(e) {
    let { renderListItem: t, renderEmptyState: n, maxVisibleItems: a = 5 } = e,
        {
            filteredOptions: s,
            selectedOptions: l,
            options: o,
            groups: d,
            activeDescendantIndex: c,
            selectionMode: u,
            listBoxId: _,
            required: E,
            disabled: I,
            handleSelectionChange: p,
            query: m,
            loading: T,
        } = S(),
        { i18n: g } = r.useContext(h.VO);
    return (0, i.jsx)(A.q, {
        id: _,
        required: E,
        disabled: I,
        items: s ?? o,
        groups: d,
        tabIndex: -1,
        selectionMode: u,
        selectedItems: l,
        onSelectionChange: p,
        activeDescendantIndex: c,
        renderListItem: t,
        renderEmptyState:
            n ??
            (() =>
                (0, i.jsx)(f.o, {
                    message: null == m || "" === m ? g.LISTBOX_EMPTY_STATE : g.LISTBOX_EMPTY_STATE_WITH_QUERY(m),
                })),
        maxVisibleItems: a,
        loading: T,
    });
}
