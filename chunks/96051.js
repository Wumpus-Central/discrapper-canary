var i = n(570140),
    r = n(317770),
    l = n(117984);
function a(e) {
    let {
        channel: { id: t }
    } = e;
    (0, l.oC)(t);
}
class s extends r.Z {
    _initialize() {
        i.Z.subscribe('CHANNEL_DELETE', a);
    }
    _terminate() {
        i.Z.unsubscribe('CHANNEL_DELETE', a);
    }
}
t.Z = new s();
