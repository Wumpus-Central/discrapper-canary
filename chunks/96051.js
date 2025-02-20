n.d(t, { Z: () => s });
var r = n(570140),
    i = n(317770),
    l = n(117984);
function o(e) {
    let {
        channel: { id: t }
    } = e;
    (0, l.oC)(t);
}
class a extends i.Z {
    _initialize() {
        r.Z.subscribe('CHANNEL_DELETE', o);
    }
    _terminate() {
        r.Z.unsubscribe('CHANNEL_DELETE', o);
    }
}
let s = new a();
