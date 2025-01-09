n.d(t, {
    Z: function () {
        return m;
    },
    r: function () {
        return o;
    }
}),
    n(47120),
    n(653041);
var i = n(192379),
    r = n(392711),
    l = n(881052),
    s = n(36459),
    a = n(388032);
let o = '_errors',
    c = 'GENERIC_REGEX_ERROR';
async function d(e, t) {
    if (null == e.triggerMetadata.regexPatterns || 0 === e.triggerMetadata.regexPatterns.length) {
        t([]);
        return;
    }
    try {
        await (0, s.qY)(e), t([]);
    } catch (s) {
        var n, i;
        let e = new l.Hx(s).errors;
        if (!('object' == typeof (n = e) && (null == n ? void 0 : null === (i = n.trigger_metadata) || void 0 === i ? void 0 : i.regex_patterns) != null)) return;
        let r = (function (e) {
            var t;
            let n = null == e ? void 0 : null === (t = e.trigger_metadata) || void 0 === t ? void 0 : t.regex_patterns;
            return null == n
                ? []
                : (function (e) {
                      let { [o]: t = [], ...n } = e,
                          i = Object.entries(n).map((e) => {
                              var t;
                              let [n, i] = e,
                                  r = i[o],
                                  { code: l, message: s } =
                                      null !== (t = null == r ? void 0 : r[0]) && void 0 !== t
                                          ? t
                                          : {
                                                code: c,
                                                message: a.intl.string(a.t.hDPEu7)
                                            };
                              return {
                                  pattern: n,
                                  message: s,
                                  code: l,
                                  description: null == i ? void 0 : i.description,
                                  erroringCharacterLength: null == i ? void 0 : i.erroring_character_length,
                                  erroringCharacterOffset: null == i ? void 0 : i.erroring_character_offset,
                                  regexErrorCode: null == i ? void 0 : i.regex_error_code
                              };
                          });
                      if (t.length > 0) {
                          var r, l, s, d;
                          i.push({
                              pattern: o,
                              message: null !== (s = null === (r = t[0]) || void 0 === r ? void 0 : r.message) && void 0 !== s ? s : a.intl.string(a.t.hDPEu7),
                              code: null !== (d = null === (l = t[0]) || void 0 === l ? void 0 : l.code) && void 0 !== d ? d : c
                          });
                      }
                      return i;
                  })(n);
        })(e);
        r.length > 0 && t(r);
    }
}
let u = (0, r.throttle)(d, 1000, { leading: !1 });
function m(e, t) {
    var n, l;
    let [s, a] = i.useState([]),
        [o, c] = i.useState(null),
        [m, h] = i.useState(null !== (l = null == e ? void 0 : null === (n = e.triggerMetadata) || void 0 === n ? void 0 : n.regexPatterns) && void 0 !== l ? l : []),
        g = i.useCallback(
            (t) => {
                if (!(t.length < 3))
                    u(
                        {
                            ...e,
                            triggerMetadata: {
                                ...e.triggerMetadata,
                                regexPatterns: [t]
                            }
                        },
                        (e) => {
                            var t;
                            return c(null !== (t = e[0]) && void 0 !== t ? t : null);
                        }
                    );
            },
            [e]
        );
    return {
        patterns: m,
        errors: s,
        valueError: o,
        validatePatternsChanged: i.useCallback(
            (n, i) => {
                if (!(0, r.isEqual)(n, i))
                    u.cancel(),
                        d(
                            {
                                ...e,
                                triggerMetadata: {
                                    ...e.triggerMetadata,
                                    regexPatterns: n
                                }
                            },
                            (e) => {
                                a(e), 0 === e.length && c(null);
                            }
                        ),
                        h(n),
                        null == t || t(n);
            },
            [e, t]
        ),
        validateEditingValueChanged: g
    };
}
