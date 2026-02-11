let i;
n.d(t, { A: () => d });
var r = n(148803),
    l = n(73153),
    a = n(272355),
    s = n(979286);
{
    let e = n(154323).A;
    i = () => e.get("shop_include_unpublished");
}
class o extends a.A {
    _initialize() {
        l.h.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        l.h.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        let e = i();
        (0, s.LX)({ release: e ? r.P.BETA : r.P.PROD });
    }
}
let d = new o();
