var i,
    a,
    o = r(544891),
    s = r(388032);
!(function (e) {
    e.ASSET_SIZE = 'BINARY_TYPE_MAX_SIZE';
})(i || (i = {})),
    !(function (e) {
        e.ASSET = 'asset';
    })(a || (a = {}));
class l extends o.sX {
    constructor(e, n) {
        var r;
        super(e, n, s.intl.string(s.t.Mt8yDA));
        let i = this.getFieldErrors('asset');
        null != i && (null === (r = i[0]) || void 0 === r ? void 0 : r.code) === 'BINARY_TYPE_MAX_SIZE' && (this.message = s.intl.string(s.t.mrlScX));
    }
}
n.Z = l;
