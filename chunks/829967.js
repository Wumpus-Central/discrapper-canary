n.d(t, { Z: () => o });
var r = n(316138),
    i = n(882159);
let o = {
    name: 'applyStyles',
    enabled: !0,
    phase: 'write',
    fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
            var n = t.styles[e] || {},
                o = t.attributes[e] || {},
                a = t.elements[e];
            (0, i.Re)(a) &&
                (0, r.Z)(a) &&
                (Object.assign(a.style, n),
                Object.keys(o).forEach(function (e) {
                    var t = o[e];
                    !1 === t ? a.removeAttribute(e) : a.setAttribute(e, !0 === t ? '' : t);
                }));
        });
    },
    effect: function (e) {
        var t = e.state,
            n = {
                popper: {
                    position: t.options.strategy,
                    left: '0',
                    top: '0',
                    margin: '0'
                },
                arrow: { position: 'absolute' },
                reference: {}
            };
        return (
            Object.assign(t.elements.popper.style, n.popper),
            (t.styles = n),
            t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
            function () {
                Object.keys(t.elements).forEach(function (e) {
                    var o = t.elements[e],
                        a = t.attributes[e] || {},
                        s = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce(function (e, t) {
                            return (e[t] = ''), e;
                        }, {});
                    (0, i.Re)(o) &&
                        (0, r.Z)(o) &&
                        (Object.assign(o.style, s),
                        Object.keys(a).forEach(function (e) {
                            o.removeAttribute(e);
                        }));
                });
            }
        );
    },
    requires: ['computeStyles']
};
