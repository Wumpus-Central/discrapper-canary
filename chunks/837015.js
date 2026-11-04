var i = n(575593),
    r = n(338535);
class a extends r.A {
    asset;
    label;
    palette;
    constructor(e) {
        (super(e),
            (this.type = i.R.NAMEPLATE),
            (this.asset = e.asset),
            (this.label = e.label),
            (this.palette = e.palette));
    }
    static fromServer(e) {
        return new a({ ...super.fromServer(e), ...e });
    }
}
n.d(
    t,
    {},
    {
        A: a,
        F: function (e) {
            return e instanceof a;
        },
    },
);
