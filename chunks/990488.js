n.d(t, {
    W: () => v,
    r: () => _
}),
    n(388685);
var r = n(200651),
    i = n(192379),
    l = n(442837),
    o = n(430824),
    s = n(594174),
    a = n(246364),
    c = n(990686),
    u = n(118346),
    d = n(186078),
    m = n(73880),
    f = n(276486),
    h = n(196345),
    p = n(707592),
    b = n(981631);
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
}
function x(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function j(e) {
    let { guildId: t, formFields: n, updateFormFields: i } = e,
        s = (0, l.e7)([o.Z], () => {
            var e;
            return null == (e = o.Z.getGuild(t)) ? void 0 : e.rulesChannelId;
        }),
        c = (e, t) => {
            let r = n[e];
            i([...n.slice(0, e), x(g({}, r), { response: t }), ...n.slice(e + 1)]);
        },
        u = (e, t) => {
            let r = n[e];
            i([...n.slice(0, e), x(g({}, r), { response: t }), ...n.slice(e + 1)]);
        },
        f = (e, t) => {
            let { value: r } = t,
                l = n[e];
            i([...n.slice(0, e), x(g({}, l), { response: r }), ...n.slice(e + 1)]);
        },
        b = (e, t) => {
            switch (e.field_type) {
                case a.QJ.TERMS:
                    return (0, r.jsx)(
                        h.dd,
                        {
                            channelId: s,
                            formField: e,
                            onChange: (e, n) => c(t, n)
                        },
                        t
                    );
                case a.QJ.TEXT_INPUT:
                    return (0, r.jsx)(
                        p.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => u(t, e)
                        },
                        t
                    );
                case a.QJ.PARAGRAPH:
                    return (0, r.jsx)(
                        m.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => u(t, e)
                        },
                        t
                    );
                case a.QJ.MULTIPLE_CHOICE:
                    return (0, r.jsx)(
                        d.sp,
                        {
                            formField: e,
                            onChange: (e) => f(t, e)
                        },
                        t
                    );
            }
        };
    return (0, r.jsx)(r.Fragment, { children: n.map((e, t) => b(e, t)) });
}
function v(e) {
    let t,
        { guildId: n, formFields: i, updateFormFields: o, disableVerification: a } = e,
        d = (0, l.e7)([s.default], () => s.default.getCurrentUser()),
        m = (0, c.i)({ guildId: n });
    return ((t = m === b.sFg.NONE ? null : m === b.sFg.VERY_HIGH ? f.l : u.b), null == d)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !a && null != t && (0, r.jsx)(t, {}),
                  (0, r.jsx)(j, {
                      guildId: n,
                      formFields: i,
                      updateFormFields: o
                  })
              ]
          });
}
function _(e) {
    let t,
        { guildId: n, formFields: o, updateFormFields: a, disableVerification: d } = e,
        m = (0, l.e7)([s.default], () => s.default.getCurrentUser()),
        h = (0, c.i)({ guildId: n }),
        p = (null == m ? void 0 : m.isPhoneVerified()) || (null == m ? void 0 : m.isStaff()),
        g = (null == m ? void 0 : m.verified) || p,
        x = !1;
    h === b.sFg.NONE ? ((x = !0), (t = null)) : h === b.sFg.VERY_HIGH ? ((x = null != p && p), (t = f.v)) : ((x = null != g && g), (t = u.B));
    let v = i.useRef(x);
    return null == m
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !d && !v.current && null != t && (0, r.jsx)(t, { isUserVerified: x }),
                  (0, r.jsx)(j, {
                      guildId: n,
                      formFields: o,
                      updateFormFields: a
                  })
              ]
          });
}
