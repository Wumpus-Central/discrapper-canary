r.d(n, {
    Z: function () {
        return s;
    }
});
var i = r(47120);
var a = r(192379),
    o = r(920103);
function s(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
        [r] = (0, a.useState)(
            () =>
                new o.Z({
                    tension: 200,
                    friction: 35,
                    mass: 2,
                    clamp: !0,
                    callback: (r, i) => {
                        let { current: a } = e;
                        if (null == a) return i();
                        'horizontal' === n ? (a.scrollLeft = r) : (a.scrollTop = r);
                    },
                    getNodeWindow: () => {
                        var n, r, i;
                        return null !== (i = null === (r = e.current) || void 0 === r ? void 0 : null === (n = r.ownerDocument) || void 0 === n ? void 0 : n.defaultView) && void 0 !== i ? i : null;
                    }
                })
        );
    return r;
}
