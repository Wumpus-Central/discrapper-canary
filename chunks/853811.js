"use strict";
n.d(t, { U1: () => h, fS: () => _ }), n(321073);
var i,
    r,
    s =
        (((i = {})[(i.NO_CLASSIFICATION = 0)] = "NO_CLASSIFICATION"),
        (i[(i.MANUAL_CLASSIFICATION = 1)] = "MANUAL_CLASSIFICATION"),
        (i[(i.AUTOMATED_CLASSIFICATION = 2)] = "AUTOMATED_CLASSIFICATION"),
        (i[(i.AGENCY_CLASSIFICATION_ESRB = 3)] = "AGENCY_CLASSIFICATION_ESRB"),
        (i[(i.AGENCY_CLASSIFICATION_PEGI = 4)] = "AGENCY_CLASSIFICATION_PEGI"),
        (i[(i.DISCORD_CLASSIFICATION = 5)] = "DISCORD_CLASSIFICATION"),
        i),
    a = n(381438);
let o = { ALL: new Set([1, 2, 3, 4, 5, 6]), IS_ADULT_ONLY: new Set([5]) },
    l = { ALL: new Set([1, 2, 3, 4, 5]), IS_ADULT_ONLY: new Set([]) };
var u = n(136722);
let c = Object.freeze({
        EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED: u.vI(0),
        SEXUALLY_SUGGESTIVE_IMAGERY: u.vI(1),
        SEXUALLY_SUGGESTIVE_TEXT: u.vI(2),
        SEXUALLY_EXPLICIT_IMAGERY: u.vI(3),
        SEXUALLY_EXPLICIT_TEXT: u.vI(4),
        NUDITY: u.vI(5),
        DATING: u.vI(6),
        REGULATED_GOODS_USAGE: u.vI(7),
        REGULATED_GOODS_DEPICTION: u.vI(8),
        VIOLENCE_DOMESTIC_SIMULATED: u.vI(9),
        VIOLENCE_ANIMALS: u.vI(10),
        VIOLENCE_FANTASY: u.vI(11),
        VIOLENCE_GRAPHIC: u.vI(12),
        SELF_HARM_DEPICTION: u.vI(13),
        SELF_HARM_REFERENCE: u.vI(14),
        GAMBLING_REAL: u.vI(15),
        GAMBLING_SIMULATED: u.vI(16),
        PROFANITY_MILD: u.vI(17),
        PROFANITY_SEVERE: u.vI(18),
        SLURS: u.vI(19),
        DANGEROUS_PHYSICALLY_HARMFUL: u.vI(20),
        DANGEROUS_MENTALLY_HARMFUL: u.vI(21),
        TRAGEDY_SIMULATED_HISTORICAL: u.vI(22),
        TRAGEDY_SIMULATED_NATURAL_DISASTER: u.vI(23),
        TRAGEDY_REAL_MILITARY_CONFLICT: u.vI(24),
    }),
    d = Object.freeze({
        RESTRICTED_TO_ADULT: u.kg(
            c.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED,
            c.SEXUALLY_EXPLICIT_IMAGERY,
            c.SEXUALLY_EXPLICIT_TEXT,
        ),
    });
var _ = (((r = {}).FULL = "full"), (r.MINIMAL = "minimal"), r);
let f = { source: s.NO_CLASSIFICATION, status: a.Y.EVERYONE };
function h(e) {
    return (function (e) {
        var t, n;
        let i, r;
        if (null == e) return f;
        let u = [],
            { type: c, data: d } = e;
        return (
            "minimal" === c
                ? null != d.discord_classifications && u.push(p(s.DISCORD_CLASSIFICATION, d.discord_classifications))
                : null != d.manual_classifications
                  ? u.push(p(s.MANUAL_CLASSIFICATION, d.manual_classifications))
                  : null != d.automated_classifications &&
                    u.push(p(s.AUTOMATED_CLASSIFICATION, d.automated_classifications)),
            null != d.agency_ratings &&
                (null != d.agency_ratings.esrb &&
                    u.push(
                        ((t = d.agency_ratings.esrb),
                        (i = o.IS_ADULT_ONLY.has(t.rating) ? a.Y.ADULT : a.Y.EVERYONE),
                        { source: s.AGENCY_CLASSIFICATION_ESRB, status: i }),
                    ),
                null != d.agency_ratings.pegi &&
                    u.push(
                        ((n = d.agency_ratings.pegi),
                        (r = l.IS_ADULT_ONLY.has(n.rating) ? a.Y.ADULT : a.Y.EVERYONE),
                        { source: s.AGENCY_CLASSIFICATION_PEGI, status: r }),
                    )),
            (function (e) {
                let t = null;
                for (let r of e) {
                    var n, i;
                    if (null == t) {
                        t = r;
                        continue;
                    }
                    (n = r.status), (i = t.status), a.R.indexOf(n) - a.R.indexOf(i) > 0 && (t = r);
                }
                return t ?? f;
            })(u)
        );
    })(e).status;
}
function p(e, t) {
    let n = u.iu(t);
    return u.zy(n, c.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)
        ? { source: e, status: a.Y.ADULT }
        : { source: e, status: u.X8(n, d.RESTRICTED_TO_ADULT) ? a.Y.ADULT : a.Y.EVERYONE };
}
