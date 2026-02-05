n.d(t, { A: () => o });
var i = n(607399),
    r = n(311907),
    a = n(73153);
let l = !1;
class s extends r.Ay.Store {
    static displayName = "MobileWebSidebarStore";
    getIsOpen() {
        return !i.Fr || l;
    }
}
let o = new s(a.h, {
    MOBILE_WEB_SIDEBAR_OPEN: function () {
        l = !0;
    },
    MOBILE_WEB_SIDEBAR_CLOSE: function () {
        l = !1;
    },
});
