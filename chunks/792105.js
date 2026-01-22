n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(311907),
    l = n(397927),
    c = n(201275),
    u = n(141468),
    d = n(963852),
    f = n(20851),
    p = n(287809),
    _ = n(562153),
    h = n(652215),
    m = n(985018),
    g = n(147297);
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
function A(e) {
    let { guildId: t, role: n, theme: a, content: E = m.intl.string(m.t["6OSasb"]), className: y } = e,
        A = (0, o.bG)([p.default], () => p.default.getCurrentUser()),
        v = _.Ay.useName(t, null, A),
        S = (0, c.ox)(n),
        I = i.useMemo(
            () =>
                (0, u.rh)(
                    O(
                        b(
                            {},
                            (0, d.Ay)({
                                channelId: "0",
                                content: E,
                                tts: void 0,
                                type: void 0,
                                messageReference: void 0,
                                allowedMentions: void 0,
                                author: A,
                            }),
                        ),
                        {
                            state: h.cmJ.SENT,
                            id: "0",
                        },
                    ),
                ),
            [A, E],
        ),
        T = {
            nick: v,
            colorString: n.colorString,
            colorStrings: n.colorStrings,
        };
    return (0, r.jsx)(l.NPJ, {
        theme: a,
        children: (e) =>
            (0, r.jsx)("div", {
                className: s()(e, g.k, y),
                children: (0, r.jsx)(f.A, {
                    hideTimestamp: !0,
                    author: T,
                    roleIcon: S,
                    message: I,
                    isGroupStart: !0,
                    disableInteraction: !0,
                }),
            }),
    });
}
