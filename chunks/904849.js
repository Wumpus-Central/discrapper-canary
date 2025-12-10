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
    register(e) {
        let { node: t, parentPanelKey: n, parentTabKey: r, parentCategoryKey: i, parentAccordionKey: a } = e;
        this.map.set(t.key, {
            node: t,
            parentPanelKey: n,
            parentTabKey: r,
            parentCategoryKey: i,
            parentAccordionKey: a,
        });
    }
    entry(e) {
        return this.map.get(e);
    }
    get(e) {
        var t;
        return null == (t = this.entry(e)) ? void 0 : t.node;
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
