n.d(t, {
    A: () => o,
});
var r = n(73153),
    i = n(272355),
    l = n(422258);

function a(e) {
    let {
        channel: { id: t },
    } = e;
    (0, l.i_)(t);
}
class s extends i.A {
    _initialize() {
        r.h.subscribe("CHANNEL_DELETE", a);
    }
    _terminate() {
        r.h.unsubscribe("CHANNEL_DELETE", a);
    }
}
let o = new s();
