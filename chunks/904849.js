function r(e, t, n) {
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
n.d(t, { Z: () => i }), n(388685);
class i {
    register(e, t, n, r) {
        this.map.set(e.key, {
            node: e,
            parentPanelKey: t,
            parentCategoryKey: n,
            parentAccordionKey: r,
        });
    }
    entry(e) {
        return this.map.get(e);
    }
    get(e) {
        var t;
        return null == (t = this.entry(e)) ? void 0 : t.node;
    }
    typedEntry(e) {
        if (null != e) return this.map.get(e.key);
    }
    typedGet(e) {
        var t;
        return null == (t = this.typedEntry(e)) ? void 0 : t.node;
    }
    setDefaultPanel(e) {
        this.defaultPanel = e;
    }
    getDefaultPanel() {
        return this.defaultPanel;
    }
    constructor() {
        r(this, "map", new Map()), r(this, "defaultPanel", void 0);
    }
}
