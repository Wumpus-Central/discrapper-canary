n.d(t, {
    jD: () => s,
    kK: () => a,
    xj: () => r,
    zd: () => i
});
var i = function (e) {
        return e instanceof SVGElement && 'getBBox' in e;
    },
    r = function (e) {
        if (i(e)) {
            var t = e.getBBox(),
                n = t.width,
                r = t.height;
            return !n && !r;
        }
        var a = e,
            s = a.offsetWidth,
            o = a.offsetHeight;
        return !(s || o || e.getClientRects().length);
    },
    a = function (e) {
        if (e instanceof Element) return !0;
        var t,
            n = null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t ? void 0 : t.defaultView;
        return !!(n && e instanceof n.Element);
    },
    s = function (e) {
        switch (e.tagName) {
            case 'INPUT':
                if ('image' !== e.type) break;
            case 'VIDEO':
            case 'AUDIO':
            case 'EMBED':
            case 'OBJECT':
            case 'CANVAS':
            case 'IFRAME':
            case 'IMG':
                return !0;
        }
        return !1;
    };
