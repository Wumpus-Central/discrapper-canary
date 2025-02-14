n.d(t, { Z: () => d });
var i = n(664081),
    l = n(570140),
    r = n(317770),
    a = n(863750),
    s = n(335131);
class o extends r.Z {
    _initialize() {
        l.Z.subscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen);
    }
    _terminate() {
        l.Z.unsubscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        let e = a.Z.get('shop_include_unpublished');
        (0, s.R2)({ release: e ? i.P.BETA : i.P.PROD });
    }
}
let d = new o();
