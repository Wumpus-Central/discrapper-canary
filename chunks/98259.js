d.d(t, { t: () => s });
var i = d(287822),
    e = d(898369),
    c = d(748158),
    a = d(96798);
d(425364);
var s = (0, i.a)(({ id: l, label: t, disabled: d, class: s, onInput: n, onBlur: Z, ...b }, m) => {
    let o = (0, i.l)(!1);
    return (0, i.v)(a.t, {
        ref: m,
        id: l,
        type: "date",
        label: t,
        disabled: d,
        class: (0, e.n)("IncodeDateInputComposed", s),
        onInput: (l) => {
            n(l), (o.current = !0);
        },
        onBlur: (l) => {
            if ((Z?.(l), !o.current || ((o.current = !1), null !== l.relatedTarget))) return;
            let t = l.currentTarget;
            t &&
                requestAnimationFrame(() => {
                    let l = document.activeElement;
                    (null === l || l === document.body) && t.focus();
                });
        },
        rightIcon: (0, i.v)("label", {
            htmlFor: l,
            class: "IncodeDateInputComposedIconButton",
            "aria-hidden": "true",
            tabIndex: -1,
            "data-disabled": d ? "true" : void 0,
            onClick: (l) => {
                d
                    ? l.preventDefault()
                    : ((l) => {
                          if (l && "showPicker" in HTMLInputElement.prototype)
                              try {
                                  return l.showPicker(), !0;
                              } catch {
                                  return !1;
                              }
                      })(l.currentTarget.control);
            },
            children: (0, i.v)("span", { class: "IncodeDateInputComposedIcon", children: (0, i.v)(c.m, {}) }),
        }),
        ...b,
    });
});
s.displayName = "DateInputComposed";
