n.d(t, { A: () => s, s: () => a });
var i = n(575593),
    r = n(338535);
function a(e) {
    return e instanceof s;
}
class s extends r.A {
    label;
    layers;
    innerWidth;
    overflowTop;
    overflowBottom;
    overflowHorizontal;
    constructor(e) {
        super(e),
            (this.type = i.R.PROFILE_FRAME),
            (this.label = e.label),
            (this.layers = e.layers),
            (this.innerWidth = e.innerWidth),
            (this.overflowTop = e.overflowTop),
            (this.overflowBottom = e.overflowBottom),
            (this.overflowHorizontal = e.overflowHorizontal);
    }
    static fromServer(e) {
        let { inner_width: t, overflow_top: n, overflow_bottom: i, overflow_horizontal: r, ...a } = e;
        return new s({
            ...super.fromServer(a),
            ...a,
            innerWidth: t,
            overflowTop: n,
            overflowBottom: i,
            overflowHorizontal: r,
        });
    }
}
