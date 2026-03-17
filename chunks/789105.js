n.d(t, { A: () => o });
var i = n(73153),
    a = n(272355),
    r = n(422258);
function l(e) {
    let {
        channel: { id: t },
    } = e;
    (0, r.i_)(t, { trackAnalytics: !1 });
}
class s extends a.A {
    _initialize() {
        i.h.subscribe("CHANNEL_DELETE", l);
    }
    _terminate() {
        i.h.unsubscribe("CHANNEL_DELETE", l);
    }
}
let o = new s();
