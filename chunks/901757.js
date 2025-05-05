n.d(t, { Z: () => o });
var r = n(544891),
    i = n(388032);
class a extends r.sX {
    constructor(e, t) {
        var n;
        super(e, t, i.intl.string(i.t.Mt8yDA));
        let r = this.getFieldErrors('asset');
        null != r && (null == (n = r[0]) ? void 0 : n.code) === 'BINARY_TYPE_MAX_SIZE' && (this.message = i.intl.string(i.t.mrlScX));
    }
}
let o = a;
