n.d(t, { Z: () => p });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(493683),
    o = n(599059),
    a = n(933557),
    s = n(210975),
    c = n(981631),
    u = n(388032),
    d = n(791293);
let p = (e) => {
    let { channel: t } = e,
        n = (0, a.ZP)(t),
        p = (0, s.m$)({ channelId: t.id });
    return (0, r.jsxs)('div', {
        className: d.container,
        onDoubleClick: (e) => e.stopPropagation(),
        children: [
            (0, r.jsx)(o.Z, {
                minLen: 1,
                maxLen: c.HN8,
                className: d.channelName,
                name: 'channel_name',
                autoComplete: 'off',
                value: null != n ? n : '',
                onBlur: (e) => {
                    n !== e.currentTarget.value && l.Z.setName(t.id, e.currentTarget.value);
                }
            }),
            p &&
                (0, r.jsx)(i.ua7, {
                    text: u.NW.string(u.t.QyZ4TU),
                    children: (e) => {
                        var t, n;
                        return (0, r.jsx)(
                            i.tQf,
                            ((t = (function (e) {
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
                                            var r;
                                            (r = n[t]),
                                                t in e
                                                    ? Object.defineProperty(e, t, {
                                                          value: r,
                                                          enumerable: !0,
                                                          configurable: !0,
                                                          writable: !0
                                                      })
                                                    : (e[t] = r);
                                        });
                                }
                                return e;
                            })({}, e)),
                            (n = n =
                                {
                                    size: 'xs',
                                    'aria-label': u.NW.string(u.t.VHXh8f),
                                    color: i.TVs.colors.INTERACTIVE_NORMAL
                                }),
                            Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                                : (function (e, t) {
                                      var n = Object.keys(e);
                                      if (Object.getOwnPropertySymbols) {
                                          var r = Object.getOwnPropertySymbols(e);
                                          n.push.apply(n, r);
                                      }
                                      return n;
                                  })(Object(n)).forEach(function (e) {
                                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                  }),
                            t)
                        );
                    }
                })
        ]
    });
};
