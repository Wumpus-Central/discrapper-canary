n.d(t, { Z: () => r }), n(388685);
class r {
    register(e, t, n, r) {
        this.map.set(e.key, {
            node: e,
            parentPanel: t,
            parentCategory: n,
            parentAccordion: r,
        });
    }
    entry(e) {
        if (null != e) return this.map.get(e.key);
    }
    get(e) {
        var t;
        return null == (t = this.entry(e)) ? void 0 : t.node;
    }
    constructor() {
        !(function (e, t, n) {
            "map" in e
                ? Object.defineProperty(e, "map", {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                  })
                : (e[t] = n);
        })(this, "map", new Map());
    }
}
