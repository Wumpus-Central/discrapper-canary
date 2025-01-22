r.d(n, {
    jD: function () {
        return s;
    },
    kK: function () {
        return o;
    },
    xj: function () {
        return a;
    },
    zd: function () {
        return i;
    }
});
var i = function (e) {
        return e instanceof SVGElement && 'getBBox' in e;
    },
    a = function (e) {
        if (i(e)) {
            var n = e.getBBox(),
                r = n.width,
                a = n.height;
            return !r && !a;
        }
        var o = e,
            s = o.offsetWidth,
            l = o.offsetHeight;
        return !(s || l || e.getClientRects().length);
    },
    o = function (e) {
        if (e instanceof Element) return !0;
        var n,
            r = null === (n = null == e ? void 0 : e.ownerDocument) || void 0 === n ? void 0 : n.defaultView;
        return !!(r && e instanceof r.Element);
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
