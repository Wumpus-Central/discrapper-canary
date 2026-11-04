var i = n(575593),
    r = n(338535);
class a extends r.A {
    asset;
    label;
    constructor(e) {
        (super(e), (this.type = i.R.AVATAR_DECORATION), (this.asset = e.asset), (this.label = e.label));
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
        T: function (e) {
            return e instanceof a;
        },
    },
);
