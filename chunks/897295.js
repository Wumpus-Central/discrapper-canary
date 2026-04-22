n.d(t, { A: () => m, B: () => o }), n(321073);
var i = n(64700),
    l = n(735438),
    s = n(198982),
    r = n(137207),
    a = n(985018);
let o = "_errors",
    d = "GENERIC_REGEX_ERROR";
async function c(e, t) {
    if (null == e.triggerMetadata.regexPatterns || 0 === e.triggerMetadata.regexPatterns.length) return void t([]);
    try {
        await (0, r.s6)(e), t([]);
    } catch (l) {
        let e,
            n = new s.LG(l).errors;
        if ("object" != typeof n || n?.trigger_metadata?.regex_patterns == null) return;
        let i =
            null == (e = n?.trigger_metadata?.regex_patterns)
                ? []
                : (function (e) {
                      let { [o]: t = [], ...n } = e,
                          i = Object.entries(n).map((e) => {
                              let [t, n] = e,
                                  i = n[o],
                                  { code: l, message: s } = i?.[0] ?? { code: d, message: a.intl.string(a.t.hDPEu1) };
                              return {
                                  pattern: t,
                                  message: s,
                                  code: l,
                                  description: n?.description,
                                  erroringCharacterLength: n?.erroring_character_length,
                                  erroringCharacterOffset: n?.erroring_character_offset,
                                  regexErrorCode: n?.regex_error_code,
                              };
                          });
                      return (
                          t.length > 0 &&
                              i.push({
                                  pattern: o,
                                  message: t[0]?.message ?? a.intl.string(a.t.hDPEu1),
                                  code: t[0]?.code ?? d,
                              }),
                          i
                      );
                  })(e);
        i.length > 0 && t(i);
    }
}
let u = (0, l.throttle)(c, 1e3, { leading: !1 });
function m(e, t) {
    let [n, s] = i.useState([]),
        [r, a] = i.useState(null),
        [o, d] = i.useState(e?.triggerMetadata?.regexPatterns ?? []),
        m = i.useCallback(
            (t) => {
                t.length < 3 ||
                    u({ ...e, triggerMetadata: { ...e.triggerMetadata, regexPatterns: [t] } }, (e) => a(e[0] ?? null));
            },
            [e],
        );
    return {
        patterns: o,
        errors: n,
        valueError: r,
        validatePatternsChanged: i.useCallback(
            (n, i) => {
                (0, l.isEqual)(n, i) ||
                    (u.cancel(),
                    c({ ...e, triggerMetadata: { ...e.triggerMetadata, regexPatterns: n } }, (e) => {
                        s(e), 0 === e.length && a(null);
                    }),
                    d(n),
                    t?.(n));
            },
            [e, t],
        ),
        validateEditingValueChanged: m,
    };
}
