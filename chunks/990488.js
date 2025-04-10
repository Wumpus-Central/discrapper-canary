r.d(t, {
    W: () => N,
    r: () => O
}),
    r(388685);
var n = r(200651),
    i = r(192379),
    o = r(442837),
    l = r(430824),
    s = r(594174),
    a = r(246364),
    c = r(990686),
    u = r(23262),
    d = r(483760),
    f = r(465588),
    m = r(842310),
    h = r(644929),
    p = r(814960),
    j = r(981631);
function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        'function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0
                          })
                        : (e[t] = n);
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
                  var r = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      r.push.apply(r, n);
                  }
                  return r;
              })(Object(t)).forEach(function (r) {
                  Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
              }),
        e
    );
}
function x(e) {
    let { guildId: t, formFields: r, updateFormFields: i } = e,
        s = (0, o.e7)([l.Z], () => {
            var e;
            return null == (e = l.Z.getGuild(t)) ? void 0 : e.rulesChannelId;
        }),
        c = (e, t) => {
            let n = r[e];
            i([...r.slice(0, e), b(g({}, n), { response: t }), ...r.slice(e + 1)]);
        },
        u = (e, t) => {
            let n = r[e];
            i([...r.slice(0, e), b(g({}, n), { response: t }), ...r.slice(e + 1)]);
        },
        m = (e, t) => {
            let { value: n } = t,
                o = r[e];
            i([...r.slice(0, e), b(g({}, o), { response: n }), ...r.slice(e + 1)]);
        },
        j = (e, t) => {
            switch (e.field_type) {
                case a.QJ.TERMS:
                    return (0, n.jsx)(
                        h.dd,
                        {
                            channelId: s,
                            formField: e,
                            onChange: (e, r) => c(t, r)
                        },
                        t
                    );
                case a.QJ.TEXT_INPUT:
                    return (0, n.jsx)(
                        p.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => u(t, e)
                        },
                        t
                    );
                case a.QJ.PARAGRAPH:
                    return (0, n.jsx)(
                        f.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => u(t, e)
                        },
                        t
                    );
                case a.QJ.MULTIPLE_CHOICE:
                    return (0, n.jsx)(
                        d.sp,
                        {
                            formField: e,
                            onChange: (e) => m(t, e)
                        },
                        t
                    );
            }
        };
    return (0, n.jsx)(n.Fragment, { children: r.map((e, t) => j(e, t)) });
}
function N(e) {
    let t,
        { guildId: r, formFields: i, updateFormFields: l, disableVerification: a } = e,
        d = (0, o.e7)([s.default], () => s.default.getCurrentUser()),
        f = (0, c.i)({ guildId: r });
    return ((t = f === j.sFg.NONE ? null : f === j.sFg.VERY_HIGH ? m.l : u.b), null == d)
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !a && null != t && (0, n.jsx)(t, {}),
                  (0, n.jsx)(x, {
                      guildId: r,
                      formFields: i,
                      updateFormFields: l
                  })
              ]
          });
}
function O(e) {
    let t,
        { guildId: r, formFields: l, updateFormFields: a, disableVerification: d } = e,
        f = (0, o.e7)([s.default], () => s.default.getCurrentUser()),
        h = (0, c.i)({ guildId: r }),
        p = (null == f ? void 0 : f.isPhoneVerified()) || (null == f ? void 0 : f.isStaff()),
        g = (null == f ? void 0 : f.verified) || p,
        b = !1;
    h === j.sFg.NONE ? ((b = !0), (t = null)) : h === j.sFg.VERY_HIGH ? ((b = null != p && p), (t = m.v)) : ((b = null != g && g), (t = u.B));
    let N = i.useRef(b);
    return null == f
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !d && !N.current && null != t && (0, n.jsx)(t, { isUserVerified: b }),
                  (0, n.jsx)(x, {
                      guildId: r,
                      formFields: l,
                      updateFormFields: a
                  })
              ]
          });
}
