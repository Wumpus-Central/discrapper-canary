let r;
n.d(t, {
    A: () => d,
});
var i,
    l,
    s = n(311907),
    a = n(73153);
let o = !1;
class c extends (l = s.Ay.Store) {
    get harvestType() {
        return r;
    }
    get requestingHarvest() {
        return o;
    }
}
(i = "displayName") in c
    ? Object.defineProperty(c, i, {
          value: "DataHarvestStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[i] = "DataHarvestStore");
let d = new c(a.h, {
    CONNECTION_OPEN: function () {
        r = void 0;
    },
    UPDATE_DATA_HARVEST_TYPE: function (e) {
        let { harvestType: t } = e;
        (o = !1), (r = t);
    },
    LOAD_DATA_HARVEST_TYPE_START: function () {
        o = !0;
    },
    LOAD_DATA_HARVEST_TYPE_FAILURE: function () {
        o = !1;
    },
    LOGOUT: function () {
        (o = !1), (r = null);
    },
});
