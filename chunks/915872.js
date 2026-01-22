n.d(t, { A: () => _ });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(616356),
    s = n(961350),
    o = n(383501),
    l = n(310323),
    c = n(571044),
    u = n(338771);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
class p extends l.A {
    _initialize() {
        super._initialize(), c.Ay.initializeIfNeeded();
    }
    platformShowStreamFull() {
        (0, i.mMO)(async () => {
            let { default: e } = await n.e("25894").then(n.bind(n, 389170));
            return (t) => (0, r.jsx)(e, f({}, t));
        });
    }
    platformHandleStreamStart() {}
    platformHandleVoiceStateUpdate(e) {
        let { userId: t, sessionId: n } = e;
        if (t !== s.default.getId() || n !== s.default.getSessionId()) return;
        let r = a.A.getAllActiveStreams(),
            i = o.A.getChannelId();
        r.forEach((e) => {
            e.channelId !== i && (0, u.A)(e, !1);
        });
    }
}
let _ = new p();
