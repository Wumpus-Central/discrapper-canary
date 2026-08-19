"use strict";
n.d(t, { U1: () => I, fS: () => A }), n(321073);
var i,
    r,
    a =
        (((i = {})[(i.NO_CLASSIFICATION = 0)] = "NO_CLASSIFICATION"),
        (i[(i.MANUAL_CLASSIFICATION = 1)] = "MANUAL_CLASSIFICATION"),
        (i[(i.AUTOMATED_CLASSIFICATION = 2)] = "AUTOMATED_CLASSIFICATION"),
        (i[(i.AGENCY_CLASSIFICATION_ESRB = 3)] = "AGENCY_CLASSIFICATION_ESRB"),
        (i[(i.AGENCY_CLASSIFICATION_PEGI = 4)] = "AGENCY_CLASSIFICATION_PEGI"),
        (i[(i.DISCORD_CLASSIFICATION = 5)] = "DISCORD_CLASSIFICATION"),
        (i[(i.AGENCY_CLASSIFICATION_GOP = 6)] = "AGENCY_CLASSIFICATION_GOP"),
        (i[(i.AGENCY_CLASSIFICATION_IGDB = 7)] = "AGENCY_CLASSIFICATION_IGDB"),
        i),
    s = n(381438);
let l = { ALL: new Set([1, 2, 3, 4, 5, 6]), IS_ADULT_ONLY: new Set([5]) },
    o = { ALL: new Set([1]), IS_ADULT: new Set([1]) },
    d = {
        ALL: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]),
        ADULT_THEMES: new Set([21]),
    },
    c = { ALL: new Set([1, 2, 3, 4, 5]), IS_ADULT_ONLY: new Set([]) };
var u = n(136722);
let _ = Object.freeze({
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
    E = Object.freeze({
        RESTRICTED_TO_ADULT: u.kg(
            _.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED,
            _.SEXUALLY_EXPLICIT_IMAGERY,
            _.SEXUALLY_EXPLICIT_TEXT,
        ),
    });
var A = (((r = {}).FULL = "full"), (r.MINIMAL = "minimal"), r);
let h = { source: a.NO_CLASSIFICATION, status: s.Y.EVERYONE };
function I(e) {
    return (function (e) {
        var t, n, i;
        let r, u, _, E;
        if (null == e) return h;
        let A = [],
            { type: I, data: p } = e;
        return (
            "minimal" === I
                ? null != p.discord_classifications && A.push(f(a.DISCORD_CLASSIFICATION, p.discord_classifications))
                : null != p.manual_classifications
                  ? A.push(f(a.MANUAL_CLASSIFICATION, p.manual_classifications))
                  : null != p.automated_classifications &&
                    A.push(f(a.AUTOMATED_CLASSIFICATION, p.automated_classifications)),
            null != p.agency_ratings &&
                (null != p.agency_ratings.esrb &&
                    A.push(
                        ((t = p.agency_ratings.esrb),
                        (r = l.IS_ADULT_ONLY.has(t.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_ESRB, status: r }),
                    ),
                null != p.agency_ratings.pegi &&
                    A.push(
                        ((n = p.agency_ratings.pegi),
                        (u = c.IS_ADULT_ONLY.has(n.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_PEGI, status: u }),
                    ),
                null != p.agency_ratings.gop &&
                    A.push(
                        ((i = p.agency_ratings.gop),
                        (_ = o.IS_ADULT.has(i.classification) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_GOP, status: _ }),
                    ),
                null != p.agency_ratings.igdb &&
                    A.push(
                        ((E = (p.agency_ratings.igdb.themes ?? []).some((e) => d.ADULT_THEMES.has(e))
                            ? s.Y.ADULT
                            : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_IGDB, status: E }),
                    )),
            (function (e) {
                let t = null;
                for (let r of e) {
                    var n, i;
                    if (null == t) {
                        t = r;
                        continue;
                    }
                    (n = r.status), (i = t.status), s.R.indexOf(n) - s.R.indexOf(i) > 0 && (t = r);
                }
                return t ?? h;
            })(A)
        );
    })(e).status;
}
function f(e, t) {
    let n = u.iu(t);
    return u.zy(n, _.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)
        ? { source: e, status: s.Y.ADULT }
        : { source: e, status: u.X8(n, E.RESTRICTED_TO_ADULT) ? s.Y.ADULT : s.Y.EVERYONE };
}
