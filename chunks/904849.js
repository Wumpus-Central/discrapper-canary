n.d(t, { Z: () => s }), n(388685);
var r = n(512722),
    i = n.n(r),
    a = n(28682);
function o(e, t, n) {
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
class s {
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
    getPanelOrThrow(e) {
        let t = this.get(e);
        return (
            i()((null == t ? void 0 : t.type) === a.Jq.PANEL, "[SettingsDirectory] key is not for a panel: ".concat(e)),
            t
        );
    }
    constructor() {
        o(this, "map", new Map()), o(this, "defaultPanel", void 0);
    }
}
