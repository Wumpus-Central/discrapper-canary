n.d(t, { Z: () => o });
var r = n(570140),
    i = n(317770),
    l = n(117984);
function a(e) {
    let {
        channel: { id: t },
    } = e;
    (0, l.oC)(t);
}
class s extends i.Z {
    _initialize() {
        r.Z.subscribe("CHANNEL_DELETE", a);
    }
    _terminate() {
        r.Z.unsubscribe("CHANNEL_DELETE", a);
    }
}
let o = new s();
