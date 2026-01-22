n.d(t, { r: () => a }), n(65821);
var r = n(390225);
function i(e, t, n) {
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
class a {
    attach(e) {
        let { stores: t } = this;
        t.forEach((t, n) => {
            if (null == t)
                throw Error(
                    ""
                        .concat(
                            e,
                            " tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ",
                        )
                        .concat(n, " stores before error."),
                );
            t.addReactChangeListener(this.handleStoreChange);
        });
    }
    detach() {
        let { stores: e } = this;
        e.forEach((e) => e.removeReactChangeListener(this.handleStoreChange));
    }
    constructor(e, t) {
        i(this, "stores", void 0),
            i(this, "changeCallback", void 0),
            i(this, "storeVersionHandled", void 0),
            i(this, "handleStoreChange", () => {
                let e = r.A.getChangeSentinel();
                this.storeVersionHandled !== e && (this.changeCallback(), (this.storeVersionHandled = e));
            }),
            (this.stores = e),
            (this.changeCallback = t);
    }
}
