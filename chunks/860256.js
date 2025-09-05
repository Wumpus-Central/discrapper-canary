n.d(t, { $: () => s }),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(953529),
    n(388685);
var r = n(605387),
    i = n.n(r);
function a(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let o = n(4667);
class s {
    static create(e) {
        let t = null;
        try {
            let n = i().decode(e);
            t = new s(n, e);
        } catch (e) {}
        return t;
    }
    hasTransparency() {
        if (4 !== this.img.ctype && 6 !== this.img.ctype) return !1;
        let e = new Uint8Array(i().toRGBA8(this.img));
        for (let t = 3; t < e.length; t += 4) if (e[t] < 255) return !0;
        return !1;
    }
    isAnimated() {
        return null != this.img.tabs.acTL;
    }
    isPng8() {
        return 3 === this.img.ctype && this.img.depth <= 8;
    }
    async hasSrgbIccProfile() {
        let e = await o.load(this.originalBuffer, {
            async: !0,
            expanded: !0,
            includeUnknown: !0,
        });
        if (null == e.icc) return !0;
        let t = e.icc;
        for (let e of Object.keys(t)) {
            var n;
            if (
                "ICC Description" === e &&
                (null == (n = t[e]) ? void 0 : n.description) != null &&
                "" !== t[e].description
            ) {
                if (t[e].description.toLowerCase().includes("srgb")) return !0;
                break;
            }
        }
        return !1;
    }
    getBuffer() {
        return this.originalBuffer;
    }
    constructor(e, t) {
        a(this, "img", void 0), a(this, "originalBuffer", void 0), (this.img = e), (this.originalBuffer = t);
    }
}
