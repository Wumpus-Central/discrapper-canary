var i = n(477900),
    r = n(452027),
    a = n(873200),
    s = n(44482),
    l = n(641668),
    o = n(470791);
n.d(
    t,
    {},
    {
        Z: function (e) {
            let { hideTags: t, wrapTags: n, maxOptionsVisible: d = 5, ...c } = e,
                { fieldProps: u } = (0, r.n)(c),
                {
                    disabled: _,
                    required: E,
                    onQueryChange: A,
                    onKeyDown: f,
                    onFocus: h,
                    onBlur: I,
                    placeholder: p,
                    closeOnSelect: m,
                    selectionMode: g,
                } = c,
                {
                    isOpen: T,
                    setIsOpen: S,
                    refs: N,
                    floatingStyles: C,
                    getFloatingProps: O,
                    getReferenceProps: R,
                    transitionStyles: L,
                } = (0, l.G)();
            return (0, i.jsxs)(a.iS, {
                ...c,
                isCollapsible: !0,
                isOpen: T,
                setIsOpen: S,
                closeOnSelect: m ?? "single" === g,
                children: [
                    (0, i.jsx)(a.a3, {
                        hideTags: t,
                        required: E,
                        disabled: _,
                        wrapTags: n,
                        showChevronButton: !0,
                        ref: N.setReference,
                        placeholder: p,
                        ...u,
                        ...R(),
                        onKeyDown: f,
                        onBlur: I,
                        onQueryChange: A,
                        onFocus: h,
                    }),
                    T &&
                        (0, i.jsx)("div", {
                            ref: N.setFloating,
                            className: o.S_,
                            style: { ...C, ...L },
                            ...O(),
                            children: (0, i.jsx)(a.X2, {
                                renderListItem: (e) => (0, i.jsx)(s.c, { ...e }),
                                maxVisibleItems: d,
                            }),
                        }),
                ],
            });
        },
    },
);
