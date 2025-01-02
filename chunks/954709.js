var i = n(664081),
    r = n(570140),
    l = n(317770),
    a = n(863750),
    o = n(960048),
    s = n(335131);
class c extends l.Z {
    _initialize() {
        r.Z.subscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen);
    }
    _terminate() {
        r.Z.unsubscribe('POST_CONNECTION_OPEN', this.handlePostConnectionOpen);
    }
    handlePostConnectionOpen() {
        let e = a.Z.get('shop_include_unpublished');
        try {
            (0, s.R2)({ release: e ? i.P.BETA : i.P.PROD });
        } catch (e) {
            o.Z.captureException(e);
        }
    }
}
t.Z = new c();
