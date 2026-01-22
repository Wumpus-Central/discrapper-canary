n(896048);
var r,
    i,
    l = n(311907),
    a = n(73153);
let s = new Set();

function o(e) {
    let { userActivities: t } = e;
    null != t && (s = new Set(t.map((e) => e.application_id)));
}
class c extends (r = l.Ay.Store) {
    get currentUserApplicationIds() {
        return s;
    }
}
(i = "displayName") in c
    ? Object.defineProperty(c, i, {
          value: "RecentUserActivityStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[i] = "RecentUserActivityStore"),
    new c(a.h, {
        CONNECTION_OPEN_SUPPLEMENTAL: o,
        CONNECTION_OPEN_STATE_UPDATE: o,
    });
