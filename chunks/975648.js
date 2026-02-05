let i;
n.d(t, { A: () => o });
var s = n(311907),
    r = n(73153);
let a = !1;
class l extends s.Ay.Store {
    static displayName = "DataHarvestStore";
    get harvestType() {
        return i;
    }
    get requestingHarvest() {
        return a;
    }
}
let o = new l(r.h, {
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
