r.d(t, {
    W: () => _,
    r: () => S
}),
    r(388685);
var n = r(200651),
    i = r(192379),
    o = r(442837),
    s = r(430824),
    l = r(594174),
    c = r(63568),
    a = r(246364),
    u = r(990686),
    d = r(118346),
    f = r(186078),
    m = r(73880),
    h = r(276486),
    p = r(196345),
    j = r(707592),
    b = r(23262),
    g = r(483760),
    O = r(465588),
    x = r(842310),
    y = r(644929),
    v = r(814960),
    N = r(981631);
function P(e) {
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
function E(e, t) {
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
function C(e) {
    let { guildId: t, formFields: r, updateFormFields: i, v2Enabled: l } = e,
        c = (0, o.e7)([s.Z], () => {
            var e;
            return null == (e = s.Z.getGuild(t)) ? void 0 : e.rulesChannelId;
        }),
        u = (e, t) => {
            let n = r[e];
            i([...r.slice(0, e), E(P({}, n), { response: t }), ...r.slice(e + 1)]);
        },
        d = (e, t) => {
            let n = r[e];
            i([...r.slice(0, e), E(P({}, n), { response: t }), ...r.slice(e + 1)]);
        },
        h = (e, t) => {
            let { value: n } = t,
                o = r[e];
            i([...r.slice(0, e), E(P({}, o), { response: n }), ...r.slice(e + 1)]);
        },
        b = (e, t) => {
            switch (e.field_type) {
                case a.QJ.TERMS:
                    return (0, n.jsx)(
                        p.dd,
                        {
                            channelId: c,
                            formField: e,
                            onChange: (e, r) => u(t, r)
                        },
                        t
                    );
                case a.QJ.TEXT_INPUT:
                    return (0, n.jsx)(
                        j.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => d(t, e)
                        },
                        t
                    );
                case a.QJ.PARAGRAPH:
                    return (0, n.jsx)(
                        m.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => d(t, e)
                        },
                        t
                    );
                case a.QJ.MULTIPLE_CHOICE:
                    return (0, n.jsx)(
                        f.sp,
                        {
                            formField: e,
                            onChange: (e) => h(t, e)
                        },
                        t
                    );
            }
        },
        x = (e, t) => {
            switch (e.field_type) {
                case a.QJ.TERMS:
                    return (0, n.jsx)(
                        y.dd,
                        {
                            channelId: c,
                            formField: e,
                            onChange: (e, r) => u(t, r)
                        },
                        t
                    );
                case a.QJ.TEXT_INPUT:
                    return (0, n.jsx)(
                        v.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => d(t, e)
                        },
                        t
                    );
                case a.QJ.PARAGRAPH:
                    return (0, n.jsx)(
                        O.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => d(t, e)
                        },
                        t
                    );
                case a.QJ.MULTIPLE_CHOICE:
                    return (0, n.jsx)(
                        g.sp,
                        {
                            formField: e,
                            onChange: (e) => h(t, e)
                        },
                        t
                    );
            }
        };
    return (0, n.jsx)(n.Fragment, { children: r.map((e, t) => (l ? x(e, t) : b(e, t))) });
}
function _(e) {
    let t,
        { guildId: r, formFields: i, updateFormFields: s, disableVerification: a } = e,
        f = (0, o.e7)([l.default], () => l.default.getCurrentUser()),
        m = (0, u.i)({ guildId: r }),
        p = (0, c.jS)(r, 'PreviewFormRenderer');
    return ((t = m === N.sFg.NONE ? null : m === N.sFg.VERY_HIGH ? (p ? x.l : h.l) : p ? b.b : d.b), null == f)
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !a && null != t && (0, n.jsx)(t, {}),
                  (0, n.jsx)(C, {
                      guildId: r,
                      formFields: i,
                      updateFormFields: s,
                      v2Enabled: p
                  })
              ]
          });
}
function S(e) {
    let t,
        { guildId: r, formFields: s, updateFormFields: a, disableVerification: f } = e,
        m = (0, o.e7)([l.default], () => l.default.getCurrentUser()),
        p = (0, u.i)({ guildId: r }),
        j = (0, c.jS)(r, 'PreviewFormRenderer'),
        g = (null == m ? void 0 : m.isPhoneVerified()) || (null == m ? void 0 : m.isStaff()),
        O = (null == m ? void 0 : m.verified) || g,
        y = !1;
    p === N.sFg.NONE ? ((y = !0), (t = null)) : p === N.sFg.VERY_HIGH ? ((y = null != g && g), (t = j ? x.v : h.v)) : ((y = null != O && O), (t = j ? b.B : d.B));
    let v = i.useRef(y);
    return null == m
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !f && !v.current && null != t && (0, n.jsx)(t, { isUserVerified: y }),
                  (0, n.jsx)(C, {
                      guildId: r,
                      formFields: s,
                      updateFormFields: a,
                      v2Enabled: j
                  })
              ]
          });
}
