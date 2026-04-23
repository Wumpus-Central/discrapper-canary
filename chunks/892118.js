n.d(t, { A: () => l, s: () => a });
var i = n(575593),
    r = n(149807);
let a = (e) => e instanceof l;
class l extends r.A {
    label;
    layers;
    constructor(e) {
        super(e), (this.type = i.R.PROFILE_FRAME), (this.label = e.label), (this.layers = e.layers);
    }
    static fromServer(e) {
        return new l({ ...super.fromServer(e), ...e });
    }
}
