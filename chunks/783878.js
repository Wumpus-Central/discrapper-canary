"use strict";
n.d(t, { Z: () => d });
var i = n(477900),
    r = n(641668),
    a = n(44482),
    s = n(452027),
    l = n(732771),
    o = n(470791);
function d(e) {
    let { hideTags: t, wrapTags: n, maxOptionsVisible: d = 5, ...c } = e,
        { fieldProps: u } = (0, s.n)(c),
        {
            disabled: _,
            required: E,
            onQueryChange: A,
            onKeyDown: h,
            onFocus: I,
            onBlur: f,
            placeholder: p,
            closeOnSelect: T,
            selectionMode: m,
        } = c,
        {
            isOpen: g,
            setIsOpen: S,
            refs: N,
            floatingStyles: C,
            getFloatingProps: R,
            getReferenceProps: O,
            transitionStyles: L,
        } = (0, r.G)();
    return (0, i.jsxs)(l.iS, {
        ...c,
        isCollapsible: !0,
        isOpen: g,
        setIsOpen: S,
        closeOnSelect: T ?? "single" === m,
        children: [
            (0, i.jsx)(l.a3, {
                hideTags: t,
                required: E,
                disabled: _,
                wrapTags: n,
                showChevronButton: !0,
                ref: N.setReference,
                placeholder: p,
                ...u,
                ...O(),
                onKeyDown: h,
                onBlur: f,
                onQueryChange: A,
                onFocus: I,
            }),
            g &&
                (0, i.jsx)("div", {
                    ref: N.setFloating,
                    className: o.S_,
                    style: { ...C, ...L },
                    ...R(),
                    children: (0, i.jsx)(l.X2, {
                        renderListItem: (e) => (0, i.jsx)(a.c, { ...e }),
                        maxVisibleItems: d,
                    }),
                }),
        ],
    });
}
