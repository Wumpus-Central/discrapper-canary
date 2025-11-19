n.d(t, { Z: () => v });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(442837),
    l = n(481060),
    c = n(518738),
    u = n(786761),
    d = n(3148),
    f = n(753206),
    _ = n(594174),
    p = n(5192),
    h = n(981631),
    m = n(388032),
    g = n(554165);
function E(e, t, n) {
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
function b(e) {
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
                E(e, t, n[t]);
            });
    }
    return e;
}
function y(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function O(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : y(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function v(e) {
    let { guildId: t, role: n, theme: a, content: E = m.intl.string(m.t["6OSasb"]), className: y } = e,
        v = (0, s.e7)([_.default], () => _.default.getCurrentUser()),
        I = p.ZP.useName(t, null, v),
        T = (0, c.Kz)(n),
        S = i.useMemo(
            () =>
                (0, u.e5)(
                    O(
                        b(
                            {},
                            (0, d.ZP)({
                                channelId: "0",
                                content: E,
                                tts: void 0,
                                type: void 0,
                                messageReference: void 0,
                                allowedMentions: void 0,
                                author: v,
                            }),
                        ),
                        {
                            state: h.yb.SENT,
                            id: "0",
                        },
                    ),
                ),
            [v, E],
        ),
        A = {
            nick: I,
            colorString: n.colorString,
            colorStrings: n.colorStrings,
        };
    return (0, r.jsx)(l.f6W, {
        theme: a,
        children: (e) =>
            (0, r.jsx)("div", {
                className: o()(e, g.container, y),
                children: (0, r.jsx)(f.Z, {
                    hideTimestamp: !0,
                    author: A,
                    roleIcon: T,
                    message: S,
                    isGroupStart: !0,
                    disableInteraction: !0,
                }),
            }),
    });
}
