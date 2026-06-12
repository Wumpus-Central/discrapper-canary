"use strict";
n.d(t, { Z: () => u });
var i = n(627968),
    r = n(641668),
    s = n(44482),
    a = n(452027),
    o = n(732771),
    l = n(930856);
function u(e) {
    let { hideTags: t, wrapTags: n, maxOptionsVisible: u = 5, ...c } = e,
        { fieldProps: d } = (0, a.n)(c),
        {
            disabled: _,
            required: h,
            onQueryChange: f,
            onKeyDown: p,
            onFocus: E,
            onBlur: m,
            placeholder: g,
            closeOnSelect: A,
            selectionMode: I,
        } = c,
        {
            isOpen: T,
            setIsOpen: S,
            refs: y,
            floatingStyles: N,
            getFloatingProps: v,
            getReferenceProps: C,
            transitionStyles: R,
        } = (0, r.G)();
    return (0, i.jsxs)(o.iS, {
        ...c,
        isCollapsible: !0,
        isOpen: T,
        setIsOpen: S,
        closeOnSelect: A ?? "single" === I,
        children: [
            (0, i.jsx)(o.a3, {
                hideTags: t,
                required: h,
                disabled: _,
                wrapTags: n,
                showChevronButton: !0,
                ref: y.setReference,
                placeholder: g,
                ...d,
                ...C(),
                onKeyDown: p,
                onBlur: m,
                onQueryChange: f,
                onFocus: E,
            }),
            T &&
                (0, i.jsx)("div", {
                    ref: y.setFloating,
                    className: l.S_,
                    style: { ...N, ...R },
                    ...v(),
                    children: (0, i.jsx)(o.X2, {
                        renderListItem: (e) => (0, i.jsx)(s.c, { ...e }),
                        maxVisibleItems: u,
                    }),
                }),
        ],
    });
}
