n.d(t, { Z: () => O }), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
    a = n(906732),
    o = n(541716),
    s = n(752305),
    l = n(893718),
    c = n(131704),
    u = n(5192),
    d = n(785717),
    f = n(698305),
    p = n(981631),
    _ = n(388032),
    m = n(391022);
function h(e, t, n) {
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
function g(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function E(e, t) {
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
function b(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : E(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let y = (0, c.createChannelRecord)({
    id: "1",
    type: p.d4z.DM,
});
function O(e) {
    let { user: t, guildId: n, channelId: c, onClose: p, disableAutoFocus: h = !1 } = e,
        { newestAnalyticsLocation: E } = (0, a.ZP)(),
        { trackUserProfileAction: O } = (0, d.KZ)(),
        [v, S] = i.useState(""),
        [I, T] = i.useState((0, s.JM)(v)),
        C = i.useRef(!1),
        A = i.useMemo(() => b(g({}, o.Ie.USER_PROFILE), { disableAutoFocus: h }), [h]);
    return (0, r.jsx)(l.ZP, {
        className: m.container,
        editorClassName: m.editor,
        type: A,
        placeholder: _.intl.formatToPlainString(_.t["0ZQw/X"], { name: u.ZP.getName(n, c, t) }),
        channel: y,
        textValue: v,
        richValue: I,
        onChange: (e, t, n) => {
            t !== v && (S(t), T(n));
        },
        focused: C.current,
        onFocus: () => {
            C.current = !0;
        },
        onBlur: () => {
            C.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e;
            try {
                return (
                    O({ action: "SEND_DIRECT_MESSAGE" }),
                    await (0, f.Z)({
                        userId: t.id,
                        content: n.trim(),
                        openChannel: !0,
                        whenReady: !0,
                        location: E,
                    }),
                    null == p || p(),
                    {
                        shouldClear: !0,
                        shouldRefocus: !1,
                    }
                );
            } catch (e) {
                return {
                    shouldClear: !1,
                    shouldRefocus: !1,
                };
            }
        },
    });
}
