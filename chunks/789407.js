n.d(t, {
    XB: () => l,
    ZP: () => o,
    r9: () => s
});
var r = n(726542),
    i = n(973616);
let l = 'spotify',
    a = r.Z.get(l);
class o extends i.ZP {
    getIconURL(e) {
        return a.icon.lightPNG;
    }
    getWhiteIconURL() {
        return a.icon.whitePNG;
    }
    constructor() {
        super({}), (this.id = l), (this.name = a.name);
    }
}
let s = new o();
