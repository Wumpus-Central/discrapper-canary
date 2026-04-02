"use strict";
n.d(t, { Z: () => l });
var r = n(627968),
    i = n(978617),
    s = n(158954),
    a = n(389723),
    o = n(782587);
function l(e) {
    let { hideTags: t, wrapTags: n, maxOptionsVisible: l = 5, ...u } = e,
        { fieldProps: c } = (0, s.ndh)(u),
        {
            disabled: d,
            required: _,
            onQueryChange: f,
            onKeyDown: p,
            onFocus: h,
            onBlur: m,
            placeholder: E,
            closeOnSelect: g,
            selectionMode: A,
        } = u,
        {
            isOpen: I,
            setIsOpen: T,
            refs: S,
            floatingStyles: y,
            getFloatingProps: v,
            getReferenceProps: N,
            transitionStyles: C,
        } = (0, i.GY)();
    return (0, r.jsxs)(a.iS, {
        ...u,
        isCollapsible: !0,
        isOpen: I,
        setIsOpen: T,
        closeOnSelect: g ?? "single" === A,
        children: [
            (0, r.jsx)(a.a3, {
                hideTags: t,
                required: _,
                disabled: d,
                wrapTags: n,
                showChevronButton: !0,
                ref: S.setReference,
                placeholder: E,
                ...c,
                ...N(),
                onKeyDown: p,
                onBlur: m,
                onQueryChange: f,
                onFocus: h,
            }),
            I &&
                (0, r.jsx)("div", {
                    ref: S.setFloating,
                    className: o.S_,
                    style: { ...y, ...C },
                    ...v(),
                    children: (0, r.jsx)(a.X2, {
                        renderListItem: (e) => (0, r.jsx)(i.c$, { ...e }),
                        maxVisibleItems: l,
                    }),
                }),
        ],
    });
}
