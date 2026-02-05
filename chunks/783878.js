"use strict";
n.d(t, { Z: () => l });
var r = n(627968),
    i = n(978617),
    a = n(158954),
    s = n(389723),
    o = n(594597);
function l(e) {
    let { hideTags: t, wrapTags: n, maxOptionsVisible: l = 5, ...u } = e,
        { fieldProps: c } = (0, a.ndh)(u),
        {
            disabled: d,
            required: _,
            onQueryChange: f,
            onKeyDown: p,
            onFocus: h,
            onBlur: m,
            placeholder: g,
            closeOnSelect: E,
            selectionMode: A,
        } = u,
        {
            isOpen: I,
            setIsOpen: T,
            refs: y,
            floatingStyles: S,
            getFloatingProps: v,
            getReferenceProps: C,
            transitionStyles: b,
        } = (0, i.GY)();
    return (0, r.jsxs)(s.iS, {
        ...u,
        isCollapsible: !0,
        isOpen: I,
        setIsOpen: T,
        closeOnSelect: E ?? "single" === A,
        children: [
            (0, r.jsx)(s.a3, {
                hideTags: t,
                required: _,
                disabled: d,
                wrapTags: n,
                showChevronButton: !0,
                ref: y.setReference,
                placeholder: g,
                ...c,
                ...C(),
                onKeyDown: p,
                onBlur: m,
                onQueryChange: f,
                onFocus: h,
            }),
            I &&
                (0, r.jsx)("div", {
                    ref: y.setFloating,
                    className: o.S_,
                    style: { ...S, ...b },
                    ...v(),
                    children: (0, r.jsx)(s.X2, {
                        renderListItem: (e) => (0, r.jsx)(i.c$, { ...e }),
                        maxVisibleItems: l,
                    }),
                }),
        ],
    });
}
