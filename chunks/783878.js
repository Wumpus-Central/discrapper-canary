"use strict";
n.d(t, { Z: () => u });
var r = n(627968),
    i = n(641668),
    s = n(44482),
    a = n(452027),
    o = n(389723),
    l = n(930856);
function u(e) {
    let { hideTags: t, wrapTags: n, maxOptionsVisible: u = 5, ...d } = e,
        { fieldProps: c } = (0, a.n)(d),
        {
            disabled: _,
            required: f,
            onQueryChange: E,
            onKeyDown: h,
            onFocus: p,
            onBlur: m,
            placeholder: g,
            closeOnSelect: A,
            selectionMode: I,
        } = d,
        {
            isOpen: T,
            setIsOpen: S,
            refs: y,
            floatingStyles: N,
            getFloatingProps: O,
            getReferenceProps: R,
            transitionStyles: v,
        } = (0, i.G)();
    return (0, r.jsxs)(o.iS, {
        ...d,
        isCollapsible: !0,
        isOpen: T,
        setIsOpen: S,
        closeOnSelect: A ?? "single" === I,
        children: [
            (0, r.jsx)(o.a3, {
                hideTags: t,
                required: f,
                disabled: _,
                wrapTags: n,
                showChevronButton: !0,
                ref: y.setReference,
                placeholder: g,
                ...c,
                ...R(),
                onKeyDown: h,
                onBlur: m,
                onQueryChange: E,
                onFocus: p,
            }),
            T &&
                (0, r.jsx)("div", {
                    ref: y.setFloating,
                    className: l.S_,
                    style: { ...N, ...v },
                    ...O(),
                    children: (0, r.jsx)(o.X2, {
                        renderListItem: (e) => (0, r.jsx)(s.c, { ...e }),
                        maxVisibleItems: u,
                    }),
                }),
        ],
    });
}
