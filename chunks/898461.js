n.d(t, { A: () => s, T: () => a });
var i = n(575593),
    r = n(338535);
function a(e) {
    return e instanceof s;
}
class s extends r.A {
    asset;
    label;
    constructor(e) {
        super(e), (this.type = i.R.AVATAR_DECORATION), (this.asset = e.asset), (this.label = e.label);
    }
    static fromServer(e) {
        return new s({ ...super.fromServer(e), ...e });
    }
}
