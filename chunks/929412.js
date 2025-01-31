n.d(t, { _: () => r });
var i = n(36056);
function r(e, t) {
    switch (t) {
        case i.pz.BIGINT:
            return e.toBigInt();
        case i.pz.NUMBER:
            return e.toNumber();
        default:
            return e.toString();
    }
}
