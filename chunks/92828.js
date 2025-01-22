r.d(n, {
    Fb: function () {
        return _;
    },
    c: function () {
        return h;
    },
    fQ: function () {
        return g;
    }
});
var i = r(661763),
    a = r(202616),
    o = r(662845),
    s = r(766203),
    l = r(921336),
    u = r(192379),
    c = r(649859);
let d = new WeakMap();
function f(e, n) {
    let { id: r } = d.get(e);
    if (!r) throw Error('Unknown list');
    return `${r}-${p(n)}`;
}
function p(e) {
    return 'string' == typeof e ? e.replace(/\s*/g, '') : '' + e;
}
function h(e, n, r) {
    let { isVirtualized: l, keyboardDelegate: u, onAction: c, linkBehavior: f = 'action' } = e;
    !e['aria-label'] && !e['aria-labelledby'] && console.warn('An aria-label or aria-labelledby prop is required for accessibility.');
    let { listProps: p } = (0, s._t)({
            selectionManager: n.selectionManager,
            collection: n.collection,
            disabledKeys: n.disabledKeys,
            ref: r,
            keyboardDelegate: u,
            isVirtualized: l,
            selectOnFocus: 'replace' === n.selectionManager.selectionBehavior,
            shouldFocusWrap: e.shouldFocusWrap,
            linkBehavior: f
        }),
        h = (0, i.Me)(e.id);
    d.set(n, {
        id: h,
        onAction: c,
        linkBehavior: f
    });
    let _ = (0, a.jS)({
            selectionManager: n.selectionManager,
            hasItemActions: !!c
        }),
        m = (0, o.pu)(r, { isDisabled: 0 !== n.collection.size }),
        g = (0, i.zL)(e, { labelable: !0 }),
        E = (0, i.dG)(
            g,
            {
                role: 'grid',
                id: h,
                'aria-multiselectable': 'multiple' === n.selectionManager.selectionMode ? 'true' : void 0
            },
            0 === n.collection.size ? { tabIndex: m ? -1 : 0 } : p,
            _
        );
    return l && ((E['aria-rowcount'] = n.collection.size), (E['aria-colcount'] = 1)), (0, a.B6)({}, n), { gridProps: E };
}
function _(e, n, r) {
    let { node: a, isVirtualized: p, shouldSelectOnPressUp: h } = e,
        { direction: _ } = (0, c.bU)(),
        { onAction: g, linkBehavior: E } = d.get(n),
        v = (0, i.mp)(),
        y = (0, u.useRef)(null),
        b = () => {
            ((null != y.current && a.key !== y.current) || !r.current.contains(document.activeElement)) && (0, o.ex)(r.current);
        },
        { itemProps: I, ...T } = (0, s.Cs)({
            selectionManager: n.selectionManager,
            key: a.key,
            ref: r,
            isVirtualized: p,
            shouldSelectOnPressUp: h,
            onAction: g ? () => g(a.key) : void 0,
            focus: b,
            linkBehavior: E
        }),
        S = (e) => {
            if (!e.currentTarget.contains(e.target)) return;
            let n = (0, o.QL)(r.current);
            switch (((n.currentNode = document.activeElement), e.key)) {
                case 'ArrowLeft': {
                    let a = 'rtl' === _ ? n.nextNode() : n.previousNode();
                    if (a) e.preventDefault(), e.stopPropagation(), (0, o.ex)(a), (0, i.Gt)(a, { containingElement: (0, i.rP)(r.current) });
                    else if ((e.preventDefault(), e.stopPropagation(), 'rtl' === _)) (0, o.ex)(r.current), (0, i.Gt)(r.current, { containingElement: (0, i.rP)(r.current) });
                    else {
                        n.currentNode = r.current;
                        let e = m(n);
                        e && ((0, o.ex)(e), (0, i.Gt)(e, { containingElement: (0, i.rP)(r.current) }));
                    }
                    break;
                }
                case 'ArrowRight': {
                    let a = 'rtl' === _ ? n.previousNode() : n.nextNode();
                    if (a) e.preventDefault(), e.stopPropagation(), (0, o.ex)(a), (0, i.Gt)(a, { containingElement: (0, i.rP)(r.current) });
                    else if ((e.preventDefault(), e.stopPropagation(), 'ltr' === _)) (0, o.ex)(r.current), (0, i.Gt)(r.current, { containingElement: (0, i.rP)(r.current) });
                    else {
                        n.currentNode = r.current;
                        let e = m(n);
                        e && ((0, o.ex)(e), (0, i.Gt)(e, { containingElement: (0, i.rP)(r.current) }));
                    }
                    break;
                }
                case 'ArrowUp':
                case 'ArrowDown':
                    !e.altKey && r.current.contains(e.target) && (e.stopPropagation(), e.preventDefault(), r.current.parentElement.dispatchEvent(new KeyboardEvent(e.nativeEvent.type, e.nativeEvent)));
            }
        },
        A = (e) => {
            if (((y.current = a.key), e.target !== r.current)) {
                !(0, l.E)() && n.selectionManager.setFocusedKey(a.key);
                return;
            }
        },
        C = T.hasAction ? (0, i.ib)(a.props) : {},
        N = (0, i.dG)(I, C, {
            role: 'row',
            onKeyDownCapture: S,
            onFocus: A,
            'aria-label': a.textValue || void 0,
            'aria-selected': n.selectionManager.canSelectItem(a.key) ? n.selectionManager.isSelected(a.key) : void 0,
            'aria-disabled': n.selectionManager.isDisabled(a.key) || void 0,
            'aria-labelledby': v && a.textValue ? `${f(n, a.key)} ${v}` : void 0,
            id: f(n, a.key)
        });
    return (
        p && (N['aria-rowindex'] = a.index + 1),
        {
            rowProps: N,
            gridCellProps: {
                role: 'gridcell',
                'aria-colindex': 1
            },
            descriptionProps: { id: v },
            ...T
        }
    );
}
function m(e) {
    let n, r;
    do (r = e.lastChild()) && (n = r);
    while (r);
    return n;
}
function g(e, n) {
    let { key: r } = e,
        { checkboxProps: i } = (0, a.Ug)(e, n);
    return {
        checkboxProps: {
            ...i,
            'aria-labelledby': `${i.id} ${f(n, r)}`
        }
    };
}
