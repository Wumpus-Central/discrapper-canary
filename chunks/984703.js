(n.d(t, { U1: () => f, fS: () => h }), n(321073));
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
        (i[(i.AGENCY_CLASSIFICATION_APPLE = 8)] = "AGENCY_CLASSIFICATION_APPLE"),
        i),
    s = n(381438);
let l = { ALL: new Set([1, 2, 3, 4, 5, 6, 7]), IS_ADULT_ONLY: new Set([]) },
    o = { ALL: new Set([1, 2, 3, 4, 5, 6]), IS_ADULT_ONLY: new Set([5]) },
    d = { ALL: new Set([1]), IS_ADULT: new Set([1]) },
    c = {
        ALL: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]),
        ADULT_THEMES: new Set([21]),
    },
    u = { ALL: new Set([1, 2, 3, 4, 5]), IS_ADULT_ONLY: new Set([]) };
var _ = n(136722);
let E = Object.freeze({
        EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED: _.vI(0),
        SEXUALLY_SUGGESTIVE_IMAGERY: _.vI(1),
        SEXUALLY_SUGGESTIVE_TEXT: _.vI(2),
        SEXUALLY_EXPLICIT_IMAGERY: _.vI(3),
        SEXUALLY_EXPLICIT_TEXT: _.vI(4),
        NUDITY: _.vI(5),
        DATING: _.vI(6),
        REGULATED_GOODS_USAGE: _.vI(7),
        REGULATED_GOODS_DEPICTION: _.vI(8),
        VIOLENCE_DOMESTIC_SIMULATED: _.vI(9),
        VIOLENCE_ANIMALS: _.vI(10),
        VIOLENCE_FANTASY: _.vI(11),
        VIOLENCE_GRAPHIC: _.vI(12),
        SELF_HARM_DEPICTION: _.vI(13),
        SELF_HARM_REFERENCE: _.vI(14),
        GAMBLING_REAL: _.vI(15),
        GAMBLING_SIMULATED: _.vI(16),
        PROFANITY_MILD: _.vI(17),
        PROFANITY_SEVERE: _.vI(18),
        SLURS: _.vI(19),
        DANGEROUS_PHYSICALLY_HARMFUL: _.vI(20),
        DANGEROUS_MENTALLY_HARMFUL: _.vI(21),
        TRAGEDY_SIMULATED_HISTORICAL: _.vI(22),
        TRAGEDY_SIMULATED_NATURAL_DISASTER: _.vI(23),
        TRAGEDY_REAL_MILITARY_CONFLICT: _.vI(24),
    }),
    A = Object.freeze({
        RESTRICTED_TO_ADULT: _.kg(
            E.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED,
            E.SEXUALLY_EXPLICIT_IMAGERY,
            E.SEXUALLY_EXPLICIT_TEXT,
        ),
    });
var h = (((r = {}).FULL = "full"), (r.MINIMAL = "minimal"), r);
let I = { source: a.NO_CLASSIFICATION, status: s.Y.EVERYONE };
function f(e) {
    return (function (e) {
        var t, n, i, r;
        let _, E, A, h, f;
        if (null == e) return I;
        let T = [],
            { type: m, data: g } = e;
        return (
            "minimal" === m
                ? null != g.discord_classifications && T.push(p(a.DISCORD_CLASSIFICATION, g.discord_classifications))
                : null != g.manual_classifications
                  ? T.push(p(a.MANUAL_CLASSIFICATION, g.manual_classifications))
                  : null != g.automated_classifications &&
                    T.push(p(a.AUTOMATED_CLASSIFICATION, g.automated_classifications)),
            null != g.agency_ratings &&
                (null != g.agency_ratings.esrb &&
                    T.push(
                        ((t = g.agency_ratings.esrb),
                        (_ = o.IS_ADULT_ONLY.has(t.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_ESRB, status: _ }),
                    ),
                null != g.agency_ratings.pegi &&
                    T.push(
                        ((n = g.agency_ratings.pegi),
                        (E = u.IS_ADULT_ONLY.has(n.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_PEGI, status: E }),
                    ),
                null != g.agency_ratings.gop &&
                    T.push(
                        ((i = g.agency_ratings.gop),
                        (A = d.IS_ADULT.has(i.classification) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_GOP, status: A }),
                    ),
                null != g.agency_ratings.igdb &&
                    T.push(
                        ((h = (g.agency_ratings.igdb.themes ?? []).some((e) => c.ADULT_THEMES.has(e))
                            ? s.Y.ADULT
                            : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_IGDB, status: h }),
                    ),
                null != g.agency_ratings.apple &&
                    T.push(
                        ((r = g.agency_ratings.apple),
                        (f = l.IS_ADULT_ONLY.has(r.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_APPLE, status: f }),
                    )),
            (function (e) {
                let t = null;
                for (let r of e) {
                    var n, i;
                    if (null == t) {
                        t = r;
                        continue;
                    }
                    ((n = r.status), (i = t.status), s.R.indexOf(n) - s.R.indexOf(i) > 0 && (t = r));
                }
                return t ?? I;
            })(T)
        );
    })(e).status;
}
function p(e, t) {
    let n = _.iu(t);
    return _.zy(n, E.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)
        ? { source: e, status: s.Y.ADULT }
        : { source: e, status: _.X8(n, A.RESTRICTED_TO_ADULT) ? s.Y.ADULT : s.Y.EVERYONE };
}
