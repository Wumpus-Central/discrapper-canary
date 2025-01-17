r.d(n, {
    P: function () {
        return u;
    }
});
var i = r(989103),
    a = r(155263),
    s = r(192379),
    o = r(239700),
    l = r(932143);
function u(e) {
    var n, r, i, u, d, f, _, h;
    let { defaultFilter: p, menuTrigger: m = 'input', allowsEmptyCollection: g = !1, allowsCustomValue: E, shouldCloseOnBlur: v = !0 } = e,
        [I, T] = (0, s.useState)(!1),
        [b, y] = (0, s.useState)(!1),
        S = (n) => {
            e.onSelectionChange && e.onSelectionChange(n), n === C && (Y(), j());
        },
        {
            collection: A,
            selectionManager: N,
            selectedKey: C,
            setSelectedKey: R,
            selectedItem: O,
            disabledKeys: D
        } = (0, a.BA)({
            ...e,
            onSelectionChange: S,
            items: null !== (i = e.items) && void 0 !== i ? i : e.defaultItems
        }),
        [L, x] = (0, o.zk)(e.inputValue, null !== (d = null !== (u = e.defaultInputValue) && void 0 !== u ? u : null === (n = A.getItem(C)) || void 0 === n ? void 0 : n.textValue) && void 0 !== d ? d : '', e.onInputChange),
        w = A,
        P = (0, s.useMemo)(() => (null == e.items && p ? c(A, L, p) : A), [A, L, p, e.items]),
        [M, k] = (0, s.useState)(P),
        U = (0, s.useRef)('focus'),
        B = (n) => {
            e.onOpenChange && e.onOpenChange(n, n ? U.current : void 0), N.setFocused(n), !n && N.setFocusedKey(null);
        },
        G = (0, l.W)({
            ...e,
            onOpenChange: B,
            isOpen: void 0,
            defaultOpen: void 0
        }),
        Z = (n, r) => {
            let i = 'manual' === r || ('focus' === r && 'focus' === m);
            (g || P.size > 0 || (i && w.size > 0) || e.items) && (i && !G.isOpen && void 0 === e.items && T(!0), (U.current = r), G.open(n));
        },
        F = (n, r) => {
            let i = 'manual' === r || ('focus' === r && 'focus' === m);
            (g || P.size > 0 || (i && w.size > 0) || e.items || G.isOpen) && (i && !G.isOpen && void 0 === e.items && T(!0), !G.isOpen && (U.current = r), V(n));
        },
        V = (0, s.useCallback)(
            (e) => {
                G.isOpen && k(P), G.toggle(e);
            },
            [G, P]
        ),
        j = (0, s.useCallback)(() => {
            G.isOpen && (k(P), G.close());
        }, [G, P]),
        H = (0, s.useRef)(L),
        Y = () => {
            var e, n;
            let r = null !== (n = null === (e = A.getItem(C)) || void 0 === e ? void 0 : e.textValue) && void 0 !== n ? n : '';
            (H.current = r), x(r);
        },
        W = (0, s.useRef)(null !== (_ = null !== (f = e.selectedKey) && void 0 !== f ? f : e.defaultSelectedKey) && void 0 !== _ ? _ : null),
        K = (0, s.useRef)(null !== (h = null === (r = A.getItem(C)) || void 0 === r ? void 0 : r.textValue) && void 0 !== h ? h : '');
    (0, s.useEffect)(() => {
        var n, r;
        b && (P.size > 0 || g) && !G.isOpen && L !== H.current && 'manual' !== m && Z(null, 'input'), !I && !g && G.isOpen && 0 === P.size && j(), null != C && C !== W.current && j(), L !== H.current && (N.setFocusedKey(null), T(!1), '' === L && (void 0 === e.inputValue || void 0 === e.selectedKey) && R(null)), C !== W.current && (void 0 === e.inputValue || void 0 === e.selectedKey) ? Y() : (H.current = L);
        let i = null !== (r = null === (n = A.getItem(C)) || void 0 === n ? void 0 : n.textValue) && void 0 !== r ? r : '';
        !b && null != C && void 0 === e.inputValue && C === W.current && K.current !== i && ((H.current = i), x(i)), (W.current = C), (K.current = i);
    });
    let z = () => {
            E && null == C ? q() : Q();
        },
        q = () => {
            (W.current = null), R(null), j();
        },
        Q = () => {
            if (void 0 !== e.selectedKey && void 0 !== e.inputValue) {
                var n, r;
                e.onSelectionChange(C);
                let i = null !== (r = null === (n = A.getItem(C)) || void 0 === n ? void 0 : n.textValue) && void 0 !== r ? r : '';
                (H.current = i), j();
            } else Y(), j();
        },
        X = () => {
            if (E) {
                var e, n;
                L === (null !== (n = null === (e = A.getItem(C)) || void 0 === e ? void 0 : e.textValue) && void 0 !== n ? n : '') ? Q() : q();
            } else Q();
        },
        J = () => {
            G.isOpen && null != N.focusedKey ? (C === N.focusedKey ? Q() : R(N.focusedKey)) : X();
        },
        $ = (e) => {
            e ? 'focus' === m && Z(null, 'focus') : v && X(), y(e);
        },
        ee = (0, s.useMemo)(() => (G.isOpen ? (I ? w : P) : M), [G.isOpen, w, P, I, M]);
    return {
        ...G,
        toggle: F,
        open: Z,
        close: X,
        selectionManager: N,
        selectedKey: C,
        setSelectedKey: R,
        disabledKeys: D,
        isFocused: b,
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
    let s = [];
    for (let o of n)
        if ('section' === o.type && o.hasChildNodes) {
            let n = d(e, (0, i._P)(o, e), r, a);
            [...n].some((e) => 'item' === e.type) &&
                s.push({
                    ...o,
                    childNodes: n
                });
        } else 'item' === o.type && a(o.textValue, r) ? s.push({ ...o }) : 'item' !== o.type && s.push({ ...o });
    return s;
}
