n.d(t, {
    A: () => g,
}),
    n(896048);
var i,
    s = n(311907),
    r = n(73153),
    l = n(661191),
    o = n(734057);

function a(e, t, n) {
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
let d = {},
    u = d;

function c() {
    l.default.keys(u).forEach((e) => {
        null == o.A.getChannel(e) && delete u[e];
    });
}
class h extends (i = s.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(o.A), (u = null != e ? e : d);
    }
    getState() {
        return u;
    }
    getCollapsed() {
        return u;
    }
    isCollapsed(e) {
        return u[e] || !1;
    }
}
a(h, "displayName", "CollapsedVoiceChannelStore"), a(h, "persistKey", "collapsedChannels");
let g = new h(r.h, {
    CONNECTION_OPEN: c,
    OVERLAY_INITIALIZE: c,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        u[t] ? delete u[t] : (u[t] = !0),
            (u = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols &&
                        (i = i.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            }),
                        )),
                        i.forEach(function (t) {
                            a(e, t, n[t]);
                        });
                }
                return e;
            })({}, u));
    },
});
