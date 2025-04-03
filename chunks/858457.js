n.d(t, {
    Z: () => f,
    r: () => m
}),
    n(47120),
    n(266796),
    n(653041);
var r = n(192379),
    i = n(392711),
    s = n(881052),
    a = n(36459),
    l = n(388032);
function o(e) {
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
function c(e, t) {
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
function d(e) {
    var t = (function (e, t) {
        if ('object' !== u(e) || null === e) return e;
        var n = e[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(e, t || 'default');
            if ('object' !== u(r)) return r;
            throw TypeError('@@toPrimitive must return a primitive value.');
        }
        return ('string' === t ? String : Number)(e);
    })(e, 'string');
    return 'symbol' === u(t) ? t : String(t);
}
function u(e) {
    return e && 'undefined' != typeof Symbol && e.constructor === Symbol ? 'symbol' : typeof e;
}
let m = '_errors',
    g = 'GENERIC_REGEX_ERROR';
async function p(e, t) {
    if (null == e.triggerMetadata.regexPatterns || 0 === e.triggerMetadata.regexPatterns.length) return void t([]);
    try {
        await (0, a.qY)(e), t([]);
    } catch (i) {
        var n;
        let e = new s.Hx(i).errors;
        if ('object' != typeof e || (null == e || null == (n = e.trigger_metadata) ? void 0 : n.regex_patterns) == null) return;
        let r = (function (e) {
            var t;
            let n = null == e || null == (t = e.trigger_metadata) ? void 0 : t.regex_patterns;
            return null == n
                ? []
                : (function (e) {
                      let { [m]: t = [] } = e,
                          n = Object.entries(
                              (function (e, t) {
                                  if (null == e) return {};
                                  var n,
                                      r,
                                      i = (function (e, t) {
                                          if (null == e) return {};
                                          var n,
                                              r,
                                              i = {},
                                              s = Object.keys(e);
                                          for (r = 0; r < s.length; r++) (n = s[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                          return i;
                                      })(e, t);
                                  if (Object.getOwnPropertySymbols) {
                                      var s = Object.getOwnPropertySymbols(e);
                                      for (r = 0; r < s.length; r++) (n = s[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                  }
                                  return i;
                              })(e, [m].map(d))
                          ).map((e) => {
                              var t;
                              let [n, r] = e,
                                  i = r[m],
                                  { code: s, message: a } =
                                      null != (t = null == i ? void 0 : i[0])
                                          ? t
                                          : {
                                                code: g,
                                                message: l.NW.string(l.t.hDPEu7)
                                            };
                              return {
                                  pattern: n,
                                  message: a,
                                  code: s,
                                  description: null == r ? void 0 : r.description,
                                  erroringCharacterLength: null == r ? void 0 : r.erroring_character_length,
                                  erroringCharacterOffset: null == r ? void 0 : r.erroring_character_offset,
                                  regexErrorCode: null == r ? void 0 : r.regex_error_code
                              };
                          });
                      if (t.length > 0) {
                          var r, i, s, a;
                          n.push({
                              pattern: m,
                              message: null != (s = null == (r = t[0]) ? void 0 : r.message) ? s : l.NW.string(l.t.hDPEu7),
                              code: null != (a = null == (i = t[0]) ? void 0 : i.code) ? a : g
                          });
                      }
                      return n;
                  })(n);
        })(e);
        r.length > 0 && t(r);
    }
}
let h = (0, i.throttle)(p, 1000, { leading: !1 });
function f(e, t) {
    var n, s;
    let [a, l] = r.useState([]),
        [d, u] = r.useState(null),
        [m, g] = r.useState(null != (s = null == e || null == (n = e.triggerMetadata) ? void 0 : n.regexPatterns) ? s : []),
        f = r.useCallback(
            (t) => {
                t.length < 3 ||
                    h(c(o({}, e), { triggerMetadata: c(o({}, e.triggerMetadata), { regexPatterns: [t] }) }), (e) => {
                        var t;
                        return u(null != (t = e[0]) ? t : null);
                    });
            },
            [e]
        );
    return {
        patterns: m,
        errors: a,
        valueError: d,
        validatePatternsChanged: r.useCallback(
            (n, r) => {
                (0, i.isEqual)(n, r) ||
                    (h.cancel(),
                    p(c(o({}, e), { triggerMetadata: c(o({}, e.triggerMetadata), { regexPatterns: n }) }), (e) => {
                        l(e), 0 === e.length && u(null);
                    }),
                    g(n),
                    null == t || t(n));
            },
            [e, t]
        ),
        validateEditingValueChanged: f
    };
}
