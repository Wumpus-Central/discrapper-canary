n.d(t, {
    Z: () => f,
    r: () => m
}),
    n(388685),
    n(953529),
    n(539854);
var r = n(192379),
    i = n(392711),
    l = n(881052),
    s = n(36459),
    a = n(388032);
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
        await (0, s.qY)(e), t([]);
    } catch (i) {
        var n;
        let e = new l.Hx(i).errors;
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
                                              l = Object.keys(e);
                                          for (r = 0; r < l.length; r++) (n = l[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
                                          return i;
                                      })(e, t);
                                  if (Object.getOwnPropertySymbols) {
                                      var l = Object.getOwnPropertySymbols(e);
                                      for (r = 0; r < l.length; r++) (n = l[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
                                  }
                                  return i;
                              })(e, [m].map(d))
                          ).map((e) => {
                              var t;
                              let [n, r] = e,
                                  i = r[m],
                                  { code: l, message: s } =
                                      null != (t = null == i ? void 0 : i[0])
                                          ? t
                                          : {
                                                code: g,
                                                message: a.intl.string(a.t.hDPEu7)
                                            };
                              return {
                                  pattern: n,
                                  message: s,
                                  code: l,
                                  description: null == r ? void 0 : r.description,
                                  erroringCharacterLength: null == r ? void 0 : r.erroring_character_length,
                                  erroringCharacterOffset: null == r ? void 0 : r.erroring_character_offset,
                                  regexErrorCode: null == r ? void 0 : r.regex_error_code
                              };
                          });
                      if (t.length > 0) {
                          var r, i, l, s;
                          n.push({
                              pattern: m,
                              message: null != (l = null == (r = t[0]) ? void 0 : r.message) ? l : a.intl.string(a.t.hDPEu7),
                              code: null != (s = null == (i = t[0]) ? void 0 : i.code) ? s : g
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
    var n, l;
    let [s, a] = r.useState([]),
        [d, u] = r.useState(null),
        [m, g] = r.useState(null != (l = null == e || null == (n = e.triggerMetadata) ? void 0 : n.regexPatterns) ? l : []),
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
        errors: s,
        valueError: d,
        validatePatternsChanged: r.useCallback(
            (n, r) => {
                (0, i.isEqual)(n, r) ||
                    (h.cancel(),
                    p(c(o({}, e), { triggerMetadata: c(o({}, e.triggerMetadata), { regexPatterns: n }) }), (e) => {
                        a(e), 0 === e.length && u(null);
                    }),
                    g(n),
                    null == t || t(n));
            },
            [e, t]
        ),
        validateEditingValueChanged: f
    };
}
