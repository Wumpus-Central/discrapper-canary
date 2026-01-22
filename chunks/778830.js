n.d(t, {
    A: () => c,
});
var r = n(148803),
    i = n(73153),
    l = n(272355),
    a = n(115328),
    s = n(979286);
class o extends l.A {
    _initialize() {
        i.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        i.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        let e = a.A.get("shop_include_unpublished");
        (0, s.LX)({
            release: e ? r.P.BETA : r.P.PROD,
        });
    }
}
let c = new o();
