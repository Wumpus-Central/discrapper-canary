n.d(t, {
    W: () => j,
    r: () => C,
}),
    n(388685);
var r = n(54381),
    l = n(473749),
    i = n(442837),
    a = n(430824),
    s = n(594174),
    o = n(246364),
    c = n(990686),
    u = n(118346),
    d = n(186078),
    m = n(73880),
    f = n(276486),
    b = n(196345),
    x = n(707592),
    h = n(981631);
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
function p(e, t) {
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
    let { guildId: t, formFields: n, updateFormFields: l } = e,
        s = (0, i.e7)([a.Z], () => {
            var e;
            return null == (e = a.Z.getGuild(t)) ? void 0 : e.rulesChannelId;
        }),
        c = (e, t) => {
            let r = n[e];
            l([...n.slice(0, e), p(g({}, r), { response: t }), ...n.slice(e + 1)]);
        };
    return (0, r.jsx)(r.Fragment, {
        children: n.map((e, t) =>
            ((e, t) => {
                switch (e.field_type) {
                    case o.QJ.TERMS:
                        return (0, r.jsx)(
                            b.dd,
                            {
                                channelId: s,
                                formField: e,
                                onChange: (e) =>
                                    ((e, t) => {
                                        let r = n[e];
                                        l([...n.slice(0, e), p(g({}, r), { response: t }), ...n.slice(e + 1)]);
                                    })(t, e),
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
                                            i = n[e];
                                        l([...n.slice(0, e), p(g({}, i), { response: r }), ...n.slice(e + 1)]);
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
        { guildId: n, formFields: l, updateFormFields: a, disableVerification: o } = e,
        d = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        m = (0, c.i)({ guildId: n });
    return ((t = m === h.sFg.NONE ? null : m === h.sFg.VERY_HIGH ? f.l : u.b), null == d)
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !o && null != t && (0, r.jsx)(t, {}),
                  (0, r.jsx)(v, {
                      guildId: n,
                      formFields: l,
                      updateFormFields: a,
                  }),
              ],
          });
}
function C(e) {
    let t,
        { guildId: n, formFields: a, updateFormFields: o, disableVerification: d } = e,
        m = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
        b = (0, c.i)({ guildId: n }),
        x = (null == m ? void 0 : m.isPhoneVerified()) || (null == m ? void 0 : m.isStaff()),
        g = (null == m ? void 0 : m.verified) || x,
        p = !1;
    b === h.sFg.NONE
        ? ((p = !0), (t = null))
        : b === h.sFg.VERY_HIGH
          ? ((p = null != x && x), (t = f.v))
          : ((p = null != g && g), (t = u.B));
    let j = l.useRef(p);
    return null == m
        ? null
        : (0, r.jsxs)(r.Fragment, {
              children: [
                  !d && !j.current && null != t && (0, r.jsx)(t, { isUserVerified: p }),
                  (0, r.jsx)(v, {
                      guildId: n,
                      formFields: a,
                      updateFormFields: o,
                  }),
              ],
          });
}
