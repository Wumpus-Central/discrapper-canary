n.d(t, { A: () => l, T: () => a });
var i = n(575593),
    r = n(149807);
let a = (e) => e instanceof l;
class l extends r.A {
    asset;
    label;
    constructor(e) {
        super(e), (this.type = i.R.AVATAR_DECORATION), (this.asset = e.asset), (this.label = e.label);
    }
    static fromServer(e) {
        return new l({ ...super.fromServer(e), ...e });
    }
}
