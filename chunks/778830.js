n.d(t, { A: () => d });
var i = n(148803),
    r = n(73153),
    a = n(272355),
    l = n(115328),
    s = n(979286);
class o extends a.A {
    _initialize() {
        r.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        r.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        let e = l.A.get("shop_include_unpublished");
        (0, s.LX)({ release: e ? i.P.BETA : i.P.PROD });
    }
}
let d = new o();
