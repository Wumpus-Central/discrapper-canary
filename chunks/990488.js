r.d(t, {
    W: () => E,
    r: () => C
}),
    r(47120);
var n = r(200651),
    i = r(192379),
    o = r(442837),
    l = r(430824),
    s = r(594174),
    c = r(63568),
    u = r(246364),
    a = r(990686),
    f = r(118346),
    d = r(186078),
    b = r(73880),
    j = r(276486),
    O = r(196345),
    g = r(707592),
    p = r(23262),
    y = r(483760),
    m = r(465588),
    v = r(842310),
    h = r(644929),
    P = r(814960),
    x = r(981631);
function N(e) {
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
function w(e, t) {
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
function S(e) {
    let { guildId: t, formFields: r, updateFormFields: i, v2Enabled: s } = e,
        c = (0, o.e7)([l.Z], () => {
            var e;
            return null == (e = l.Z.getGuild(t)) ? void 0 : e.rulesChannelId;
        }),
        a = (e, t) => {
            let n = r[e];
            i([...r.slice(0, e), w(N({}, n), { response: t }), ...r.slice(e + 1)]);
        },
        f = (e, t) => {
            let n = r[e];
            i([...r.slice(0, e), w(N({}, n), { response: t }), ...r.slice(e + 1)]);
        },
        j = (e, t) => {
            let { value: n } = t,
                o = r[e];
            i([...r.slice(0, e), w(N({}, o), { response: n }), ...r.slice(e + 1)]);
        },
        p = (e, t) => {
            switch (e.field_type) {
                case u.QJ.TERMS:
                    return (0, n.jsx)(
                        O.dd,
                        {
                            channelId: c,
                            formField: e,
                            onChange: (e, r) => a(t, r)
                        },
                        t
                    );
                case u.QJ.TEXT_INPUT:
                    return (0, n.jsx)(
                        g.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => f(t, e)
                        },
                        t
                    );
                case u.QJ.PARAGRAPH:
                    return (0, n.jsx)(
                        b.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => f(t, e)
                        },
                        t
                    );
                case u.QJ.MULTIPLE_CHOICE:
                    return (0, n.jsx)(
                        d.sp,
                        {
                            formField: e,
                            onChange: (e) => j(t, e)
                        },
                        t
                    );
            }
        },
        v = (e, t) => {
            switch (e.field_type) {
                case u.QJ.TERMS:
                    return (0, n.jsx)(
                        h.dd,
                        {
                            channelId: c,
                            formField: e,
                            onChange: (e, r) => a(t, r)
                        },
                        t
                    );
                case u.QJ.TEXT_INPUT:
                    return (0, n.jsx)(
                        P.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => f(t, e)
                        },
                        t
                    );
                case u.QJ.PARAGRAPH:
                    return (0, n.jsx)(
                        m.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => f(t, e)
                        },
                        t
                    );
                case u.QJ.MULTIPLE_CHOICE:
                    return (0, n.jsx)(
                        y.sp,
                        {
                            formField: e,
                            onChange: (e) => j(t, e)
                        },
                        t
                    );
            }
        };
    return (0, n.jsx)(n.Fragment, { children: r.map((e, t) => (s ? v(e, t) : p(e, t))) });
}
function E(e) {
    let t,
        { guildId: r, formFields: i, updateFormFields: l, disableVerification: u } = e,
        d = (0, o.e7)([s.default], () => s.default.getCurrentUser()),
        b = (0, a.i)({ guildId: r }),
        O = (0, c.jS)(r, 'PreviewFormRenderer');
    return ((t = b === x.sFg.NONE ? null : b === x.sFg.VERY_HIGH ? (O ? v.l : j.l) : O ? p.b : f.b), null == d)
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !u && null != t && (0, n.jsx)(t, {}),
                  (0, n.jsx)(S, {
                      guildId: r,
                      formFields: i,
                      updateFormFields: l,
                      v2Enabled: O
                  })
              ]
          });
}
function C(e) {
    let t,
        { guildId: r, formFields: l, updateFormFields: u, disableVerification: d } = e,
        b = (0, o.e7)([s.default], () => s.default.getCurrentUser()),
        O = (0, a.i)({ guildId: r }),
        g = (0, c.jS)(r, 'PreviewFormRenderer'),
        y = (null == b ? void 0 : b.isPhoneVerified()) || (null == b ? void 0 : b.isStaff()),
        m = (null == b ? void 0 : b.verified) || y,
        h = !1;
    O === x.sFg.NONE ? ((h = !0), (t = null)) : O === x.sFg.VERY_HIGH ? ((h = null != y && y), (t = g ? v.v : j.v)) : ((h = null != m && m), (t = g ? p.B : f.B));
    let P = i.useRef(h);
    return null == b
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !d && !P.current && null != t && (0, n.jsx)(t, { isUserVerified: h }),
                  (0, n.jsx)(S, {
                      guildId: r,
                      formFields: l,
                      updateFormFields: u,
                      v2Enabled: g
                  })
              ]
          });
}
