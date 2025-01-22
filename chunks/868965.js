r.d(n, {
    P: function () {
        return u;
    }
});
var i = r(989103),
    a = r(155263),
    o = r(192379),
    s = r(239700),
    l = r(932143);
function u(e) {
    var n, r, i, u, d, f, p, h;
    let { defaultFilter: _, menuTrigger: m = 'input', allowsEmptyCollection: g = !1, allowsCustomValue: E, shouldCloseOnBlur: v = !0 } = e,
        [y, b] = (0, o.useState)(!1),
        [I, T] = (0, o.useState)(!1),
        S = (n) => {
            e.onSelectionChange && e.onSelectionChange(n), n === N && (Y(), j());
        },
        {
            collection: A,
            selectionManager: C,
            selectedKey: N,
            setSelectedKey: R,
            selectedItem: O,
            disabledKeys: D
        } = (0, a.BA)({
            ...e,
            onSelectionChange: S,
            items: null !== (i = e.items) && void 0 !== i ? i : e.defaultItems
        }),
        [L, x] = (0, s.zk)(e.inputValue, null !== (d = null !== (u = e.defaultInputValue) && void 0 !== u ? u : null === (n = A.getItem(N)) || void 0 === n ? void 0 : n.textValue) && void 0 !== d ? d : '', e.onInputChange),
        w = A,
        P = (0, o.useMemo)(() => (null == e.items && _ ? c(A, L, _) : A), [A, L, _, e.items]),
        [M, k] = (0, o.useState)(P),
        U = (0, o.useRef)('focus'),
        B = (n) => {
            e.onOpenChange && e.onOpenChange(n, n ? U.current : void 0), C.setFocused(n), !n && C.setFocusedKey(null);
        },
        G = (0, l.W)({
            ...e,
            onOpenChange: B,
            isOpen: void 0,
            defaultOpen: void 0
        }),
        Z = (n, r) => {
            let i = 'manual' === r || ('focus' === r && 'focus' === m);
            (g || P.size > 0 || (i && w.size > 0) || e.items) && (i && !G.isOpen && void 0 === e.items && b(!0), (U.current = r), G.open(n));
        },
        F = (n, r) => {
            let i = 'manual' === r || ('focus' === r && 'focus' === m);
            (g || P.size > 0 || (i && w.size > 0) || e.items || G.isOpen) && (i && !G.isOpen && void 0 === e.items && b(!0), !G.isOpen && (U.current = r), V(n));
        },
        V = (0, o.useCallback)(
            (e) => {
                G.isOpen && k(P), G.toggle(e);
            },
            [G, P]
        ),
        j = (0, o.useCallback)(() => {
            G.isOpen && (k(P), G.close());
        }, [G, P]),
        H = (0, o.useRef)(L),
        Y = () => {
            var e, n;
            let r = null !== (n = null === (e = A.getItem(N)) || void 0 === e ? void 0 : e.textValue) && void 0 !== n ? n : '';
            (H.current = r), x(r);
        },
        W = (0, o.useRef)(null !== (p = null !== (f = e.selectedKey) && void 0 !== f ? f : e.defaultSelectedKey) && void 0 !== p ? p : null),
        K = (0, o.useRef)(null !== (h = null === (r = A.getItem(N)) || void 0 === r ? void 0 : r.textValue) && void 0 !== h ? h : '');
    (0, o.useEffect)(() => {
        var n, r;
        I && (P.size > 0 || g) && !G.isOpen && L !== H.current && 'manual' !== m && Z(null, 'input'), !y && !g && G.isOpen && 0 === P.size && j(), null != N && N !== W.current && j(), L !== H.current && (C.setFocusedKey(null), b(!1), '' === L && (void 0 === e.inputValue || void 0 === e.selectedKey) && R(null)), N !== W.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? Y() : (H.current = L);
        let i = null !== (r = null === (n = A.getItem(N)) || void 0 === n ? void 0 : n.textValue) && void 0 !== r ? r : '';
        !I && null != N && void 0 === e.inputValue && N === W.current && K.current !== i && ((H.current = i), x(i)), (W.current = N), (K.current = i);
    });
    let z = () => {
            E && null == N ? q() : Q();
        },
        q = () => {
            (W.current = null), R(null), j();
        },
        Q = () => {
            if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
                var n, r;
                e.onSelectionChange(N);
                let i = null !== (r = null === (n = A.getItem(N)) || void 0 === n ? void 0 : n.textValue) && void 0 !== r ? r : '';
                (H.current = i), j();
            } else Y(), j();
        },
        X = () => {
            if (E) {
                var e, n;
                L === (null !== (n = null === (e = A.getItem(N)) || void 0 === e ? void 0 : e.textValue) && void 0 !== n ? n : '') ? Q() : q();
            } else Q();
        },
        J = () => {
            G.isOpen && null != C.focusedKey ? (N === C.focusedKey ? Q() : R(C.focusedKey)) : X();
        },
        $ = (e) => {
            e ? 'focus' === m && Z(null, 'focus') : v && X(), T(e);
        },
        ee = (0, o.useMemo)(() => (G.isOpen ? (y ? w : P) : M), [G.isOpen, w, P, y, M]);
    return {
        ...G,
        toggle: F,
        open: Z,
        close: X,
        selectionManager: C,
        selectedKey: N,
        setSelectedKey: R,
        disabledKeys: D,
        isFocused: I,
        setFocused: $,
        selectedItem: O,
        collection: ee,
        inputValue: L,
        setInputValue: x,
        commit: J,
        revert: z
    };
}
function c(e, n, r) {
    return new a.DC(d(e, e, n, r));
}
function d(e, n, r, a) {
    let o = [];
    for (let s of n)
        if ('section' === s.type && s.hasChildNodes) {
            let n = d(e, (0, i._P)(s, e), r, a);
            [...n].some((e) => 'item' === e.type) &&
                o.push({
                    ...s,
                    childNodes: n
                });
        } else 'item' === s.type && a(s.textValue, r) ? o.push({ ...s }) : 'item' !== s.type && o.push({ ...s });
    return o;
}
