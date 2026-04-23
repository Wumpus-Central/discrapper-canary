"use strict";
n.d(t, { A: () => s });
var r = n(559374),
    i = { passive: !0 };
let s = {
    name: "eventListeners",
    enabled: !0,
    phase: "write",
    fn: function () {},
    effect: function (e) {
        var t = e.state,
            n = e.instance,
            s = e.options,
            a = s.scroll,
            o = void 0 === a || a,
            l = s.resize,
            u = void 0 === l || l,
            c = (0, r.A)(t.elements.popper),
            d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
            o &&
                d.forEach(function (e) {
                    e.addEventListener("scroll", n.update, i);
                }),
            u && c.addEventListener("resize", n.update, i),
            function () {
                o &&
                    d.forEach(function (e) {
                        e.removeEventListener("scroll", n.update, i);
                    }),
                    u && c.removeEventListener("resize", n.update, i);
            }
        );
    },
    data: {},
};
