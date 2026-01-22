n.d(t, {
    A: () => h,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(661191),
    o = n(734057);

function l(e, t, n) {
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

function c(e) {
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
                l(e, t, n[t]);
            });
    }
    return e;
}
let u = {},
    d = u;

function f(e) {
    let { channelId: t } = e;
    d[t] ? delete d[t] : (d[t] = !0), (d = c({}, d));
}

function p() {
    s.default.keys(d).forEach((e) => {
        null == o.A.getChannel(e) && delete d[e];
    });
}
class _ extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(o.A), (d = null != e ? e : u);
    }
    getState() {
        return d;
    }
    getCollapsed() {
        return d;
    }
    isCollapsed(e) {
        return d[e] || !1;
    }
}
l(_, "displayName", "CollapsedVoiceChannelStore"), l(_, "persistKey", "collapsedChannels");
let h = new _(a.h, {
    CONNECTION_OPEN: p,
    OVERLAY_INITIALIZE: p,
    CHANNEL_COLLAPSE: f,
});
