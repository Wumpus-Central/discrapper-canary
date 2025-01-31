n.d(t, { Z: () => o });
var i = n(570140),
    l = n(317770),
    r = n(117984);
function a(e) {
    let {
        channel: { id: t }
    } = e;
    (0, r.oC)(t);
}
class s extends l.Z {
    _initialize() {
        i.Z.subscribe('CHANNEL_DELETE', a);
    }
    _terminate() {
        i.Z.unsubscribe('CHANNEL_DELETE', a);
    }
}
let o = new s();
