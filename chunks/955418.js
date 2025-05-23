n.d(t, { Z: () => O }), n(388685), n(781311);
var r = n(255367),
    i = n(73800),
    o = n(906732),
    a = n(541716),
    s = n(752305),
    l = n(893718),
    c = n(131704),
    u = n(5192),
    d = n(785717),
    f = n(698305),
    _ = n(981631),
    p = n(388032),
    h = n(582970);
function m(e, t, n) {
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
function g(e) {
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
                m(e, t, n[t]);
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
let y = (0, c.kt)({
    id: '1',
    type: _.d4z.DM
});
function O(e) {
    let { user: t, guildId: n, channelId: c, onClose: _, disableAutoFocus: m = !1 } = e,
        { newestAnalyticsLocation: E } = (0, o.ZP)(),
        { trackUserProfileAction: O } = (0, d.KZ)(),
        [v, I] = i.useState(''),
        [S, T] = i.useState((0, s.JM)(v)),
        A = i.useRef(!1),
        N = i.useMemo(() => b(g({}, a.Ie.USER_PROFILE), { disableAutoFocus: m }), [m]);
    return (0, r.jsx)(l.Z, {
        className: h.container,
        editorClassName: h.editor,
        type: N,
        placeholder: p.intl.formatToPlainString(p.t['0ZQw/f'], { name: u.ZP.getName(n, c, t) }),
        channel: y,
        textValue: v,
        richValue: S,
        onChange: (e, t, n) => {
            t !== v && (I(t), T(n));
        },
        focused: A.current,
        onFocus: () => {
            A.current = !0;
        },
        onBlur: () => {
            A.current = !1;
        },
        onSubmit: async (e) => {
            let { value: n } = e;
            try {
                return (
                    O({ action: 'SEND_DIRECT_MESSAGE' }),
                    await (0, f.Z)({
                        userId: t.id,
                        content: n.trim(),
                        location: E
                    }),
                    null == _ || _(),
                    {
                        shouldClear: !0,
                        shouldRefocus: !1
                    }
                );
            } catch (e) {
                return {
                    shouldClear: !1,
                    shouldRefocus: !1
                };
            }
        }
    });
}
