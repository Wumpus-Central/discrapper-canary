r.d(t, { t: () => l });
var a = r(248702),
    n = r(517e3),
    o = r(288552),
    d = r(489771);
r(55808);
var l = (0, a.a)(({ id: e, label: t, disabled: r, class: l, ...c }, i) => {
    let s = (e) => {
        if (!e || !("showPicker" in HTMLInputElement.prototype)) return !1;
        try {
            return e.showPicker(), !0;
        } catch {
            return !1;
        }
    };
    return (0, a.v)(d.t, {
        ref: i,
        id: e,
        type: "date",
        label: t,
        disabled: r,
        class: (0, n.n)("IncodeDateInputComposed", l),
        rightIcon: (0, a.v)("label", {
            htmlFor: e,
            class: "IncodeDateInputComposedIconButton",
            role: "button",
            "aria-label": "Open date picker",
            "aria-disabled": r ? "true" : void 0,
            tabIndex: r ? -1 : 0,
            "data-disabled": r ? "true" : void 0,
            onClick: (e) => {
                r ? e.preventDefault() : s(e.currentTarget.control);
            },
            onKeyDown: (e) => {
                if (r || ("Enter" !== e.key && " " !== e.key)) return;
                e.preventDefault();
                let t = e.currentTarget.control;
                !s(t) && t && t.click();
            },
            children: (0, a.v)("span", { class: "IncodeDateInputComposedIcon", children: (0, a.v)(o.m, {}) }),
        }),
        ...c,
    });
});
l.displayName = "DateInputComposed";
