"use strict";
n.d(t, { U1: () => h, fS: () => c }), n(321073);
var i,
    r,
    s,
    a =
        (((i = {})[(i.NO_CLASSIFICATION = 0)] = "NO_CLASSIFICATION"),
        (i[(i.MANUAL_CLASSIFICATION = 1)] = "MANUAL_CLASSIFICATION"),
        (i[(i.AUTOMATED_CLASSIFICATION = 2)] = "AUTOMATED_CLASSIFICATION"),
        (i[(i.AGENCY_CLASSIFICATION_ESRB = 3)] = "AGENCY_CLASSIFICATION_ESRB"),
        (i[(i.AGENCY_CLASSIFICATION_PEGI = 4)] = "AGENCY_CLASSIFICATION_PEGI"),
        (i[(i.DISCORD_CLASSIFICATION = 5)] = "DISCORD_CLASSIFICATION"),
        i),
    o = n(381438);
let l = { ALL: new Set([1, 2, 3, 4, 5, 6]), IS_ADULT_ONLY: new Set([5]) },
    d = { ALL: new Set([1, 2, 3, 4, 5]), IS_ADULT_ONLY: new Set([]) };
var _ =
        (((r = {})[(r.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED = 1)] =
            "EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED"),
        (r[(r.SEXUALLY_SUGGESTIVE_IMAGERY = 2)] = "SEXUALLY_SUGGESTIVE_IMAGERY"),
        (r[(r.SEXUALLY_SUGGESTIVE_TEXT = 4)] = "SEXUALLY_SUGGESTIVE_TEXT"),
        (r[(r.SEXUALLY_EXPLICIT_IMAGERY = 8)] = "SEXUALLY_EXPLICIT_IMAGERY"),
        (r[(r.SEXUALLY_EXPLICIT_TEXT = 16)] = "SEXUALLY_EXPLICIT_TEXT"),
        (r[(r.NUDITY = 32)] = "NUDITY"),
        (r[(r.DATING = 64)] = "DATING"),
        (r[(r.REGULATED_GOODS_USAGE = 128)] = "REGULATED_GOODS_USAGE"),
        (r[(r.REGULATED_GOODS_DEPICTION = 256)] = "REGULATED_GOODS_DEPICTION"),
        (r[(r.VIOLENCE_DOMESTIC_SIMULATED = 512)] = "VIOLENCE_DOMESTIC_SIMULATED"),
        (r[(r.VIOLENCE_ANIMALS = 1024)] = "VIOLENCE_ANIMALS"),
        (r[(r.VIOLENCE_FANTASY = 2048)] = "VIOLENCE_FANTASY"),
        (r[(r.VIOLENCE_GRAPHIC = 4096)] = "VIOLENCE_GRAPHIC"),
        (r[(r.SELF_HARM_DEPICTION = 8192)] = "SELF_HARM_DEPICTION"),
        (r[(r.SELF_HARM_REFERENCE = 16384)] = "SELF_HARM_REFERENCE"),
        (r[(r.GAMBLING_REAL = 32768)] = "GAMBLING_REAL"),
        (r[(r.GAMBLING_SIMULATED = 65536)] = "GAMBLING_SIMULATED"),
        (r[(r.PROFANITY_MILD = 131072)] = "PROFANITY_MILD"),
        (r[(r.PROFANITY_SEVERE = 262144)] = "PROFANITY_SEVERE"),
        (r[(r.SLURS = 524288)] = "SLURS"),
        (r[(r.DANGEROUS_PHYSICALLY_HARMFUL = 1048576)] = "DANGEROUS_PHYSICALLY_HARMFUL"),
        (r[(r.DANGEROUS_MENTALLY_HARMFUL = 2097152)] = "DANGEROUS_MENTALLY_HARMFUL"),
        (r[(r.TRAGEDY_SIMULATED_HISTORICAL = 4194304)] = "TRAGEDY_SIMULATED_HISTORICAL"),
        (r[(r.TRAGEDY_SIMULATED_NATURAL_DISASTER = 8388608)] = "TRAGEDY_SIMULATED_NATURAL_DISASTER"),
        (r[(r.TRAGEDY_REAL_MILITARY_CONFLICT = 0x1000000)] = "TRAGEDY_REAL_MILITARY_CONFLICT"),
        r),
    u = n(665260),
    c = (((s = {}).FULL = "full"), (s.MINIMAL = "minimal"), s);
let E = { source: a.NO_CLASSIFICATION, status: o.Y.EVERYONE };
function h(e) {
    return (function (e) {
        var t, n;
        let i, r;
        if (null == e) return E;
        let s = [],
            { type: _, data: u } = e;
        return (
            "minimal" === _
                ? null != u.discord_classifications && s.push(m(a.DISCORD_CLASSIFICATION, u.discord_classifications))
                : null != u.manual_classifications
                  ? s.push(m(a.MANUAL_CLASSIFICATION, u.manual_classifications))
                  : null != u.automated_classifications &&
                    s.push(m(a.AUTOMATED_CLASSIFICATION, u.automated_classifications)),
            null != u.agency_ratings &&
                (null != u.agency_ratings.esrb &&
                    s.push(
                        ((t = u.agency_ratings.esrb),
                        (i = l.IS_ADULT_ONLY.has(t.rating) ? o.Y.ADULT : o.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_ESRB, status: i }),
                    ),
                null != u.agency_ratings.pegi &&
                    s.push(
                        ((n = u.agency_ratings.pegi),
                        (r = d.IS_ADULT_ONLY.has(n.rating) ? o.Y.ADULT : o.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_PEGI, status: r }),
                    )),
            (function (e) {
                let t = null;
                for (let r of e) {
                    var n, i;
                    if (null == t) {
                        t = r;
                        continue;
                    }
                    (n = r.status), (i = t.status), o.R.indexOf(n) - o.R.indexOf(i) > 0 && (t = r);
                }
                return t ?? E;
            })(s)
        );
    })(e).status;
}
function m(e, t) {
    return u.Lt(t, _.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)
        ? { source: e, status: o.Y.ADULT }
        : { source: e, status: u.br(t, 25) ? o.Y.ADULT : o.Y.EVERYONE };
}
