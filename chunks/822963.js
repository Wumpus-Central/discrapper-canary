"use strict";
n.d(t, { U1: () => p, fS: () => f }), n(321073);
var i,
    r,
    s =
        (((i = {})[(i.NO_CLASSIFICATION = 0)] = "NO_CLASSIFICATION"),
        (i[(i.MANUAL_CLASSIFICATION = 1)] = "MANUAL_CLASSIFICATION"),
        (i[(i.AUTOMATED_CLASSIFICATION = 2)] = "AUTOMATED_CLASSIFICATION"),
        (i[(i.AGENCY_CLASSIFICATION_ESRB = 3)] = "AGENCY_CLASSIFICATION_ESRB"),
        (i[(i.AGENCY_CLASSIFICATION_PEGI = 4)] = "AGENCY_CLASSIFICATION_PEGI"),
        (i[(i.DISCORD_CLASSIFICATION = 5)] = "DISCORD_CLASSIFICATION"),
        (i[(i.AGENCY_CLASSIFICATION_GOP = 6)] = "AGENCY_CLASSIFICATION_GOP"),
        (i[(i.AGENCY_CLASSIFICATION_IGDB = 7)] = "AGENCY_CLASSIFICATION_IGDB"),
        i),
    a = n(381438);
let o = { ALL: new Set([1, 2, 3, 4, 5, 6]), IS_ADULT_ONLY: new Set([5]) },
    l = { ALL: new Set([1]), IS_ADULT: new Set([1]) },
    u = {
        ALL: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]),
        ADULT_THEMES: new Set([21]),
    },
    c = { ALL: new Set([1, 2, 3, 4, 5]), IS_ADULT_ONLY: new Set([]) };
var d = n(136722);
let _ = Object.freeze({
        EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED: d.vI(0),
        SEXUALLY_SUGGESTIVE_IMAGERY: d.vI(1),
        SEXUALLY_SUGGESTIVE_TEXT: d.vI(2),
        SEXUALLY_EXPLICIT_IMAGERY: d.vI(3),
        SEXUALLY_EXPLICIT_TEXT: d.vI(4),
        NUDITY: d.vI(5),
        DATING: d.vI(6),
        REGULATED_GOODS_USAGE: d.vI(7),
        REGULATED_GOODS_DEPICTION: d.vI(8),
        VIOLENCE_DOMESTIC_SIMULATED: d.vI(9),
        VIOLENCE_ANIMALS: d.vI(10),
        VIOLENCE_FANTASY: d.vI(11),
        VIOLENCE_GRAPHIC: d.vI(12),
        SELF_HARM_DEPICTION: d.vI(13),
        SELF_HARM_REFERENCE: d.vI(14),
        GAMBLING_REAL: d.vI(15),
        GAMBLING_SIMULATED: d.vI(16),
        PROFANITY_MILD: d.vI(17),
        PROFANITY_SEVERE: d.vI(18),
        SLURS: d.vI(19),
        DANGEROUS_PHYSICALLY_HARMFUL: d.vI(20),
        DANGEROUS_MENTALLY_HARMFUL: d.vI(21),
        TRAGEDY_SIMULATED_HISTORICAL: d.vI(22),
        TRAGEDY_SIMULATED_NATURAL_DISASTER: d.vI(23),
        TRAGEDY_REAL_MILITARY_CONFLICT: d.vI(24),
    }),
    h = Object.freeze({
        RESTRICTED_TO_ADULT: d.kg(
            _.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED,
            _.SEXUALLY_EXPLICIT_IMAGERY,
            _.SEXUALLY_EXPLICIT_TEXT,
        ),
    });
var f = (((r = {}).FULL = "full"), (r.MINIMAL = "minimal"), r);
let E = { source: s.NO_CLASSIFICATION, status: a.Y.EVERYONE };
function p(e) {
    return (function (e) {
        var t, n, i;
        let r, d, _, h;
        if (null == e) return E;
        let f = [],
            { type: p, data: g } = e;
        return (
            "minimal" === p
                ? null != g.discord_classifications && f.push(m(s.DISCORD_CLASSIFICATION, g.discord_classifications))
                : null != g.manual_classifications
                  ? f.push(m(s.MANUAL_CLASSIFICATION, g.manual_classifications))
                  : null != g.automated_classifications &&
                    f.push(m(s.AUTOMATED_CLASSIFICATION, g.automated_classifications)),
            null != g.agency_ratings &&
                (null != g.agency_ratings.esrb &&
                    f.push(
                        ((t = g.agency_ratings.esrb),
                        (r = o.IS_ADULT_ONLY.has(t.rating) ? a.Y.ADULT : a.Y.EVERYONE),
                        { source: s.AGENCY_CLASSIFICATION_ESRB, status: r }),
                    ),
                null != g.agency_ratings.pegi &&
                    f.push(
                        ((n = g.agency_ratings.pegi),
                        (d = c.IS_ADULT_ONLY.has(n.rating) ? a.Y.ADULT : a.Y.EVERYONE),
                        { source: s.AGENCY_CLASSIFICATION_PEGI, status: d }),
                    ),
                null != g.agency_ratings.gop &&
                    f.push(
                        ((i = g.agency_ratings.gop),
                        (_ = l.IS_ADULT.has(i.classification) ? a.Y.ADULT : a.Y.EVERYONE),
                        { source: s.AGENCY_CLASSIFICATION_GOP, status: _ }),
                    ),
                null != g.agency_ratings.igdb &&
                    f.push(
                        ((h = (g.agency_ratings.igdb.themes ?? []).some((e) => u.ADULT_THEMES.has(e))
                            ? a.Y.ADULT
                            : a.Y.EVERYONE),
                        { source: s.AGENCY_CLASSIFICATION_IGDB, status: h }),
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
                return t ?? E;
            })(f)
        );
    })(e).status;
}
function m(e, t) {
    let n = d.iu(t);
    return d.zy(n, _.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)
        ? { source: e, status: a.Y.ADULT }
        : { source: e, status: d.X8(n, h.RESTRICTED_TO_ADULT) ? a.Y.ADULT : a.Y.EVERYONE };
}
