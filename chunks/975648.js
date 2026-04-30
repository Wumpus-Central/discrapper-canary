let l;
t.d(n, { A: () => _ });
var E = t(17928),
    i = t(228366);
let A = !1;
class a extends E.Ay.Store {
    static displayName = "DataHarvestStore";
    get harvestType() {
        return l;
    }
    get requestingHarvest() {
        return A;
    }
}
let _ = new a(i.h, {
    CONNECTION_OPEN: function () {
        l = void 0;
    },
    UPDATE_DATA_HARVEST_TYPE: function (e) {
        let { harvestType: n } = e;
        (A = !1), (l = n);
    },
    LOAD_DATA_HARVEST_TYPE_START: function () {
        A = !0;
    },
    LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
        A = !1;
    },
    LOGOUT: function () {
        (A = !1), (l = null);
    },
});
