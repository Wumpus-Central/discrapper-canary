"use strict";
n.d(t, { r: () => i });
var r = n(390225);
class i {
    stores;
    changeCallback;
    storeVersionHandled;
    constructor(e, t) {
        (this.stores = e), (this.changeCallback = t);
    }
    attach(e) {
        let { stores: t } = this;
        t.forEach((t, n) => {
            if (null == t)
                throw Error(
                    `${e} tried to load a non-existent store. Either it isn't defined or there is a circular dependency. Loaded ${n} stores before error.`,
                );
            t.addReactChangeListener(this.handleStoreChange);
        });
    }
    handleStoreChange = () => {
        let e = r.A.getChangeSentinel();
        this.storeVersionHandled !== e && (this.changeCallback(), (this.storeVersionHandled = e));
    };
    detach() {
        let { stores: e } = this;
        e.forEach((e) => e.removeReactChangeListener(this.handleStoreChange));
    }
}
