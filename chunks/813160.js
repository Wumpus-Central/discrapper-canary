n.d(t, {
    A: () => u,
});
var r,
    i,
    l = n(607399),
    a = n(311907),
    s = n(73153);
let o = !1;
class c extends (i = a.Ay.Store) {
    getIsOpen() {
        return !l.Fr || o;
    }
}
(r = "displayName") in c
    ? Object.defineProperty(c, r, {
          value: "MobileWebSidebarStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (c[r] = "MobileWebSidebarStore");
let u = new c(s.h, {
    MOBILE_WEB_SIDEBAR_OPEN: function () {
        o = !0;
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function () {
        o = !1;
    },
});
