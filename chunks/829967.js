var i = r(316138),
    a = r(882159);
function o(e) {
    var n = e.state;
    Object.keys(n.elements).forEach(function (e) {
        var r = n.styles[e] || {},
            o = n.attributes[e] || {},
            s = n.elements[e];
        if (!!(0, a.Re)(s) && !!(0, i.Z)(s))
            Object.assign(s.style, r),
                Object.keys(o).forEach(function (e) {
                    var n = o[e];
                    !1 === n ? s.removeAttribute(e) : s.setAttribute(e, !0 === n ? '' : n);
                });
    });
}
function s(e) {
    var n = e.state,
        r = {
            popper: {
                position: n.options.strategy,
                left: '0',
                top: '0',
                margin: '0'
            },
            arrow: { position: 'absolute' },
            reference: {}
        };
    return (
        Object.assign(n.elements.popper.style, r.popper),
        (n.styles = r),
        n.elements.arrow && Object.assign(n.elements.arrow.style, r.arrow),
        function () {
            Object.keys(n.elements).forEach(function (e) {
                var o = n.elements[e],
                    s = n.attributes[e] || {},
                    l = Object.keys(n.styles.hasOwnProperty(e) ? n.styles[e] : r[e]).reduce(function (e, n) {
                        return (e[n] = ''), e;
                    }, {});
                if (!!(0, a.Re)(o) && !!(0, i.Z)(o))
                    Object.assign(o.style, l),
                        Object.keys(s).forEach(function (e) {
                            o.removeAttribute(e);
                        });
            });
        }
    );
}
n.Z = {
    name: 'applyStyles',
    enabled: !0,
    phase: 'write',
    fn: o,
    effect: s,
    requires: ['computeStyles']
};
