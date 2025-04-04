n.d(t, { Z: () => o }), n(47120);
var r = n(192379),
    i = n(920103);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'vertical',
        [n] = (0, r.useState)(
            () =>
                new i.Z({
                    tension: 200,
                    friction: 35,
                    mass: 2,
                    clamp: !0,
                    callback: (n, r) => {
                        let { current: i } = e;
                        if (null == i) return r();
                        'horizontal' === t ? (i.scrollLeft = n) : (i.scrollTop = n);
                    },
                    getNodeWindow: () => {
                        var t, n, r;
                        return null != (r = null == (n = e.current) || null == (t = n.ownerDocument) ? void 0 : t.defaultView) ? r : null;
                    }
                })
        );
    return n;
}
