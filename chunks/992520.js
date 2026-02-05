r.d(t, { A: () => u });
var n = r(944181),
    a = r(685357),
    l = r(597807),
    i = r(763424),
    o = r(292177);
let u = {
    id: "aria-allowed-attributes",
    selector: o.vN,
    tags: ["wcag2a", "wcag412"],
    metadata: {
        description: "Only use supported ARIA attributes",
        help: "Using ARIA attributes in roles where they are not allowed can interfere with the accessibility of the web page.",
    },
    check: function (e) {
        let t = (0, a.Lw)(e),
            r = n.roles.get(t);
        if (null == r) return i.o;
        for (let n of o.ye)
            if (e.hasAttribute(n) && !r.props.hasOwnProperty(n)) {
                if ("aria-expanded" === n && e.hasAttribute("aria-controls")) continue;
                if (!(0, l.z)(e)) return i.o;
                return `'${t}' does not support the ${n} attribute`;
            }
        return i.o;
    },
};
