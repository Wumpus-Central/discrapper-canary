"use strict";
let i;
n.d(t, { A: () => l });
var r = n(17928),
    s = n(228366);
let a = !1;
class o extends r.Ay.Store {
    static displayName = "DataHarvestStore";
    get harvestType() {
        return i;
    }
    get requestingHarvest() {
        return a;
    }
}
let l = new o(s.h, {
    CONNECTION_OPEN: function () {
        i = void 0;
    },
    UPDATE_DATA_HARVEST_TYPE: function (e) {
        let { harvestType: t } = e;
        (a = !1), (i = t);
    },
    LOAD_DATA_HARVEST_TYPE_START: function () {
        a = !0;
    },
    LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
        a = !1;
    },
    LOGOUT: function () {
        (a = !1), (i = null);
    },
});
