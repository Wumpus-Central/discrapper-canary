function i(t, e, n) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = n),
        t
    );
}
n.d(e, { Z: () => r }), n(388685);
class r {
    register(t, e, n, i) {
        this.map.set(t.key, {
            node: t,
            parentPanelKey: e,
            parentCategoryKey: n,
            parentAccordionKey: i,
        });
    }
    entry(t) {
        return this.map.get(t);
    }
    get(t) {
        var e;
        return null == (e = this.entry(t)) ? void 0 : e.node;
    }
    typedEntry(t) {
        if (null != t) return this.map.get(t.key);
    }
    typedGet(t) {
        var e;
        return null == (e = this.typedEntry(t)) ? void 0 : e.node;
    }
    setDefaultPanel(t) {
        this.defaultPanel = t;
    }
    getDefaultPanel() {
        return this.defaultPanel;
    }
    constructor() {
        i(this, "map", new Map()), i(this, "defaultPanel", void 0);
    }
}
