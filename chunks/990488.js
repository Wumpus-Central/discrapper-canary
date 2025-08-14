n.d(t, {
    W: () => j,
    r: () => C,
}),
    n(388685);
var r = n(255367),
    i = n(73800),
    l = n(442837),
    s = n(430824),
    a = n(594174),
    o = n(246364),
    c = n(990686),
    u = n(118346),
    d = n(186078),
    m = n(73880),
    f = n(276486),
    h = n(196345),
    x = n(707592),
    p = n(981631);
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}
function b(e, t) {
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
function v(e) {
    let { guildId: t, formFields: n, updateFormFields: i } = e,
        a = (0, l.e7)([s.Z], () => {
            var e;
            return null == (e = s.Z.getGuild(t)) ? void 0 : e.rulesChannelId;
        }),
        c = (e, t) => {
            let r = n[e];
            i([...n.slice(0, e), b(g({}, r), { response: t }), ...n.slice(e + 1)]);
        };
    return (0, r.jsx)(r.Fragment, {
        children: n.map((e, t) =>
            ((e, t) => {
                switch (e.field_type) {
                    case o.QJ.TERMS:
                        return (0, r.jsx)(
                            h.dd,
                            {
                                channelId: a,
                                formField: e,
                                onChange: (e, r) =>
                                    ((e, t) => {
                                        let r = n[e];
                                        i([...n.slice(0, e), b(g({}, r), { response: t }), ...n.slice(e + 1)]);
                                    })(t, r),
                            },
                            t,
                        );
                    case o.QJ.TEXT_INPUT:
                        return (0, r.jsx)(
                            x.zY,
                            {
                                formField: e,
                                autofocus: 0 === t,
                                onChange: (e) => c(t, e),
                            },
                            t,
                        );
                    case o.QJ.PARAGRAPH:
                        return (0, r.jsx)(
                            m.lX,
                            {
                                formField: e,
                                autofocus: 0 === t,
                                onChange: (e) => c(t, e),
                            },
                            t,
                        );
                    case o.QJ.MULTIPLE_CHOICE:
                        return (0, r.jsx)(
                            d.sp,
                            {
                                formField: e,
                                onChange: (e) =>
                                    ((e, t) => {
                                        let { value: r } = t,
                                            l = n[e];
                                        i([...n.slice(0, e), b(g({}, l), { response: r }), ...n.slice(e + 1)]);
                                    })(t, e),
                            },
                            t,
                        );
                }
            })(e, t),
        ),
    });
}
function j(e) {
    let t,
        { guildId: n, formFields: i, updateFormFields: s, disableVerification: o } = e,
        d = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        m = (0, c.i)({ guildId: n });
    return ((t = m === p.sFg.NONE ? null : m === p.sFg.VERY_HIGH ? f.l : u.b), null == d)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !o && null != t && (0, r.jsx)(t, {}),
                  (0, r.jsx)(v, {
                      guildId: n,
                      formFields: i,
                      updateFormFields: s,
                  }),
              ],
          });
}
function C(e) {
    let t,
        { guildId: n, formFields: s, updateFormFields: o, disableVerification: d } = e,
        m = (0, l.e7)([a.default], () => a.default.getCurrentUser()),
        h = (0, c.i)({ guildId: n }),
        x = (null == m ? void 0 : m.isPhoneVerified()) || (null == m ? void 0 : m.isStaff()),
        g = (null == m ? void 0 : m.verified) || x,
        b = !1;
    h === p.sFg.NONE
        ? ((b = !0), (t = null))
        : h === p.sFg.VERY_HIGH
          ? ((b = null != x && x), (t = f.v))
          : ((b = null != g && g), (t = u.B));
    let j = i.useRef(b);
    return null == m
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !d && !j.current && null != t && (0, r.jsx)(t, { isUserVerified: b }),
                  (0, r.jsx)(v, {
                      guildId: n,
                      formFields: s,
                      updateFormFields: o,
                  }),
              ],
          });
}
