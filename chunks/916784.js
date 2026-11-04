var u = function (e) {
    return e instanceof SVGElement && "getBBox" in e;
};
r.d(
    t,
    {},
    {
        XJ: u,
        dK: function (e) {
            if (u(e)) {
                var t = e.getBBox(),
                    r = t.width,
                    n = t.height;
                return !r && !n;
            }
            var a = e.offsetWidth,
                o = e.offsetHeight;
            return !(a || o || e.getClientRects().length);
        },
        td: function (e) {
            switch (e.tagName) {
                case "INPUT":
                    if ("image" !== e.type) break;
                case "VIDEO":
                case "AUDIO":
                case "EMBED":
                case "OBJECT":
                case "CANVAS":
                case "IFRAME":
                case "IMG":
                    return !0;
            }
            return !1;
        },
        vq: function (e) {
            if (e instanceof Element) return !0;
            var t,
                r = null == (t = null == e ? void 0 : e.ownerDocument) ? void 0 : t.defaultView;
            return !!(r && e instanceof r.Element);
        },
    },
);
