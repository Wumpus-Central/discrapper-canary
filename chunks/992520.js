n.d(t, {
    A: () => u,
}),
    n(896048);
var r = n(944181),
    a = n(685357),
    l = n(597807),
    o = n(763424),
    i = n(292177);
let u = {
    id: "aria-allowed-attributes",
    selector: i.vN,
    tags: ["wcag2a", "wcag412"],
    metadata: {
        description: "Only use supported ARIA attributes",
        help: "Using ARIA attributes in roles where they are not allowed can interfere with the accessibility of the web page.",
    },
    check: function (e) {
        let t = (0, a.Lw)(e),
            n = r.roles.get(t);
        if (null == n) return o.o;
        for (let r of i.ye)
            if (e.hasAttribute(r) && !n.props.hasOwnProperty(r)) {
                if ("aria-expanded" === r && e.hasAttribute("aria-controls")) continue;
                if (!(0, l.z)(e)) return o.o;
                return "'".concat(t, "' does not support the ").concat(r, " attribute");
            }
        return o.o;
    },
};
