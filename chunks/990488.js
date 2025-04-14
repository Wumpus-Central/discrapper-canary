r.d(t, {
    W: () => m,
    r: () => E
}),
    r(388685);
var n = r(200651),
    i = r(192379),
    o = r(442837),
    l = r(430824),
    s = r(594174),
    u = r(246364),
    c = r(990686),
    a = r(118346),
    d = r(186078),
    f = r(73880),
    p = r(276486),
    b = r(196345),
    O = r(707592),
    g = r(981631);
function h(e) {
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
function j(e, t) {
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
function y(e) {
    let { guildId: t, formFields: r, updateFormFields: i } = e,
        s = (0, o.e7)([l.Z], () => {
            var e;
            return null == (e = l.Z.getGuild(t)) ? void 0 : e.rulesChannelId;
        }),
        c = (e, t) => {
            let n = r[e];
            i([...r.slice(0, e), j(h({}, n), { response: t }), ...r.slice(e + 1)]);
        },
        a = (e, t) => {
            let n = r[e];
            i([...r.slice(0, e), j(h({}, n), { response: t }), ...r.slice(e + 1)]);
        },
        p = (e, t) => {
            let { value: n } = t,
                o = r[e];
            i([...r.slice(0, e), j(h({}, o), { response: n }), ...r.slice(e + 1)]);
        },
        g = (e, t) => {
            switch (e.field_type) {
                case u.QJ.TERMS:
                    return (0, n.jsx)(
                        b.dd,
                        {
                            channelId: s,
                            formField: e,
                            onChange: (e, r) => c(t, r)
                        },
                        t
                    );
                case u.QJ.TEXT_INPUT:
                    return (0, n.jsx)(
                        O.zY,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => a(t, e)
                        },
                        t
                    );
                case u.QJ.PARAGRAPH:
                    return (0, n.jsx)(
                        f.lX,
                        {
                            formField: e,
                            autofocus: 0 === t,
                            onChange: (e) => a(t, e)
                        },
                        t
                    );
                case u.QJ.MULTIPLE_CHOICE:
                    return (0, n.jsx)(
                        d.sp,
                        {
                            formField: e,
                            onChange: (e) => p(t, e)
                        },
                        t
                    );
            }
        };
    return (0, n.jsx)(n.Fragment, { children: r.map((e, t) => g(e, t)) });
}
function m(e) {
    let t,
        { guildId: r, formFields: i, updateFormFields: l, disableVerification: u } = e,
        d = (0, o.e7)([s.default], () => s.default.getCurrentUser()),
        f = (0, c.i)({ guildId: r });
    return ((t = f === g.sFg.NONE ? null : f === g.sFg.VERY_HIGH ? p.l : a.b), null == d)
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !u && null != t && (0, n.jsx)(t, {}),
                  (0, n.jsx)(y, {
                      guildId: r,
                      formFields: i,
                      updateFormFields: l
                  })
              ]
          });
}
function E(e) {
    let t,
        { guildId: r, formFields: l, updateFormFields: u, disableVerification: d } = e,
        f = (0, o.e7)([s.default], () => s.default.getCurrentUser()),
        b = (0, c.i)({ guildId: r }),
        O = (null == f ? void 0 : f.isPhoneVerified()) || (null == f ? void 0 : f.isStaff()),
        h = (null == f ? void 0 : f.verified) || O,
        j = !1;
    b === g.sFg.NONE ? ((j = !0), (t = null)) : b === g.sFg.VERY_HIGH ? ((j = null != O && O), (t = p.v)) : ((j = null != h && h), (t = a.B));
    let m = i.useRef(j);
    return null == f
        ? null
        : (0, n.jsxs)(n.Fragment, {
              children: [
                  !d && !m.current && null != t && (0, n.jsx)(t, { isUserVerified: j }),
                  (0, n.jsx)(y, {
                      guildId: r,
                      formFields: l,
                      updateFormFields: u
                  })
              ]
          });
}
