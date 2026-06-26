"use strict";
n.d(t, { A: () => a, s: () => s });
var i = n(575593),
    r = n(149807);
function s(e) {
    return e instanceof a;
}
class a extends r.A {
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
        let { inner_width: t, overflow_top: n, overflow_bottom: i, overflow_horizontal: r, ...s } = e;
        return new a({
            ...super.fromServer(s),
            ...s,
            innerWidth: t,
            overflowTop: n,
            overflowBottom: i,
            overflowHorizontal: r,
        });
    }
}
