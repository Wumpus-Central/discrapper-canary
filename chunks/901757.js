n.d(t, { Z: () => s });
var i = n(544891),
    r = n(388032);
class a extends i.sX {
    constructor(e, t) {
        var n;
        super(e, t, r.intl.string(r.t.Mt8yDA));
        let i = this.getFieldErrors('asset');
        null != i && (null === (n = i[0]) || void 0 === n ? void 0 : n.code) === 'BINARY_TYPE_MAX_SIZE' && (this.message = r.intl.string(r.t.mrlScX));
    }
}
let s = a;
