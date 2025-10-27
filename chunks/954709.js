n.d(t, { Z: () => c });
var r = n(664081),
    i = n(570140),
    l = n(317770),
    a = n(863750),
    s = n(335131);
class o extends l.Z {
    _initialize() {
        i.Z.subscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    _terminate() {
        i.Z.unsubscribe("POST_CONNECTION_OPEN", this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        let e = a.Z.get("shop_include_unpublished");
        (0, s.R2)({ release: e ? r.P.BETA : r.P.PROD });
    }
}
let c = new o();
