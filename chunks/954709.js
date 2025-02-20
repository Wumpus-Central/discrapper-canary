n.d(t, { Z: () => c });
var r = n(664081),
    i = n(570140),
    l = n(317770),
    o = n(863750),
    a = n(335131);
class s extends l.Z {
    _initialize() {
        i.Z.subscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen);
    }
    _terminate() {
        i.Z.unsubscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        let e = o.Z.get('shop_include_unpublished');
        (0, a.R2)({ release: e ? r.P.BETA : r.P.PROD });
    }
}
let c = new s();
