n.d(t, { Z: () => p });
var r = n(255367);
n(73800);
var i = n(481060),
    a = n(199902),
    o = n(314897),
    s = n(19780),
    l = n(20528),
    c = n(960861),
    u = n(803647);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function f(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                d(e, t, n[t]);
            });
    }
    return e;
}
class _ extends l.Z {
    _initialize() {
        super._initialize(), c.ZP.initializeIfNeeded();
    }
    platformShowStreamFull() {
        (0, i.ZDy)(async () => {
            let { default: e } = await n.e('63757').then(n.bind(n, 309690));
            return (t) => (0, r.jsx)(e, f({}, t));
        });
    }
    platformHandleStreamStart() {}
    platformHandleVoiceStateUpdate(e) {
        let { userId: t, sessionId: n } = e;
        if (t !== o.default.getId() || n !== o.default.getSessionId()) return;
        let r = a.Z.getAllActiveStreams(),
            i = s.Z.getChannelId();
        r.forEach((e) => {
            e.channelId !== i && (0, u.Z)(e, !1);
        });
    }
}
let p = new _();
