(n.d(t, { fS: () => h, U1: () => m }), n(321073));
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
        (i[(i.AGENCY_CLASSIFICATION_ROBLOX = 9)] = "AGENCY_CLASSIFICATION_ROBLOX"),
        (i[(i.AGENCY_CLASSIFICATION_IGDB_CSR = 10)] = "AGENCY_CLASSIFICATION_IGDB_CSR"),
        (i[(i.DEVELOPER_SELF_LABEL = 11)] = "DEVELOPER_SELF_LABEL"),
        i),
    s = n(381438);
let l = { ALL: new Set([1, 2, 3, 4, 5, 6, 7]), IS_ADULT_ONLY: new Set([]) },
    o = { ALL: new Set([1, 2, 3, 4, 5, 6]), IS_ADULT_ONLY: new Set([5]) },
    d = { ALL: new Set([1]), IS_ADULT: new Set([1]) },
    c = {
        ALL: new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]),
        ADULT_THEMES: new Set([21]),
    },
    u = { ALL: new Set([1, 2, 3, 4, 5]), IS_ADULT_ONLY: new Set([]) },
    _ = { ALL: new Set([1, 2, 3, 4, 5, 6, 7]), IS_ADULT_ONLY: new Set([]) };
var E = n(136722);
let A = Object.freeze({
        EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED: E.vI(0),
        SEXUALLY_SUGGESTIVE_IMAGERY: E.vI(1),
        SEXUALLY_SUGGESTIVE_TEXT: E.vI(2),
        SEXUALLY_EXPLICIT_IMAGERY: E.vI(3),
        SEXUALLY_EXPLICIT_TEXT: E.vI(4),
        NUDITY: E.vI(5),
        DATING: E.vI(6),
        REGULATED_GOODS_USAGE: E.vI(7),
        REGULATED_GOODS_DEPICTION: E.vI(8),
        VIOLENCE_DOMESTIC_SIMULATED: E.vI(9),
        VIOLENCE_ANIMALS: E.vI(10),
        VIOLENCE_FANTASY: E.vI(11),
        VIOLENCE_GRAPHIC: E.vI(12),
        SELF_HARM_DEPICTION: E.vI(13),
        SELF_HARM_REFERENCE: E.vI(14),
        GAMBLING_REAL: E.vI(15),
        GAMBLING_SIMULATED: E.vI(16),
        PROFANITY_MILD: E.vI(17),
        PROFANITY_SEVERE: E.vI(18),
        SLURS: E.vI(19),
        DANGEROUS_PHYSICALLY_HARMFUL: E.vI(20),
        DANGEROUS_MENTALLY_HARMFUL: E.vI(21),
        TRAGEDY_SIMULATED_HISTORICAL: E.vI(22),
        TRAGEDY_SIMULATED_NATURAL_DISASTER: E.vI(23),
        TRAGEDY_REAL_MILITARY_CONFLICT: E.vI(24),
    }),
    f = Object.freeze({
        RESTRICTED_TO_ADULT: E.kg(
            A.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED,
            A.SEXUALLY_EXPLICIT_IMAGERY,
            A.SEXUALLY_EXPLICIT_TEXT,
        ),
    });
var h = (((r = {}).FULL = "full"), (r.MINIMAL = "minimal"), r);
let I = { source: a.NO_CLASSIFICATION, status: s.Y.EVERYONE },
    p = {};
function m(e) {
    return (function (e) {
        var t, n, i, r, E, A;
        let f, h, m, T, S, N, C, O;
        if (null == e) return I;
        let R = [],
            { type: L, data: y } = e;
        return (
            "minimal" === L
                ? null != y.discord_classifications && R.push(g(a.DISCORD_CLASSIFICATION, y.discord_classifications))
                : null != y.manual_classifications
                  ? R.push(g(a.MANUAL_CLASSIFICATION, y.manual_classifications))
                  : null != y.automated_classifications &&
                    R.push(g(a.AUTOMATED_CLASSIFICATION, y.automated_classifications)),
            null != y.agency_ratings &&
                (null != y.agency_ratings.esrb &&
                    R.push(
                        ((t = y.agency_ratings.esrb),
                        (f = o.IS_ADULT_ONLY.has(t.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_ESRB, status: f }),
                    ),
                null != y.agency_ratings.pegi &&
                    R.push(
                        ((n = y.agency_ratings.pegi),
                        (h = u.IS_ADULT_ONLY.has(n.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_PEGI, status: h }),
                    ),
                null != y.agency_ratings.gop &&
                    R.push(
                        ((i = y.agency_ratings.gop),
                        (m = d.IS_ADULT.has(i.classification) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_GOP, status: m }),
                    ),
                null != y.agency_ratings.igdb &&
                    R.push(
                        ((T = (y.agency_ratings.igdb.themes ?? []).some((e) => c.ADULT_THEMES.has(e))
                            ? s.Y.ADULT
                            : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_IGDB, status: T }),
                    ),
                null != y.agency_ratings.apple &&
                    R.push(
                        ((r = y.agency_ratings.apple),
                        (S = l.IS_ADULT_ONLY.has(r.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_APPLE, status: S }),
                    ),
                null != y.agency_ratings.roblox &&
                    R.push(
                        ((E = y.agency_ratings.roblox),
                        (N = _.IS_ADULT_ONLY.has(E.rating) ? s.Y.ADULT : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_ROBLOX, status: N }),
                    ),
                "full" === L &&
                    null != y.agency_ratings.igdb_csr &&
                    R.push(
                        ((C = y.agency_ratings.igdb_csr.ratings.some((e) => {
                            let t = p[e.category];
                            return null != t && e.severity >= t;
                        })
                            ? s.Y.ADULT
                            : s.Y.EVERYONE),
                        { source: a.AGENCY_CLASSIFICATION_IGDB_CSR, status: C }),
                    )),
            "minimal" === L
                ? !0 === y.developer_age_restricted && R.push({ source: a.DEVELOPER_SELF_LABEL, status: s.Y.ADULT })
                : (y.developer_self_labels?.length ?? 0) > 0 &&
                  R.push(
                      ((A = y.developer_self_labels),
                      (O = (A?.length ?? 0) > 0 ? s.Y.ADULT : s.Y.EVERYONE),
                      { source: a.DEVELOPER_SELF_LABEL, status: O }),
                  ),
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
            })(R)
        );
    })(e).status;
}
function g(e, t) {
    let n = E.iu(t);
    return E.zy(n, A.EMERGENCY_ONLY_USE_IF_YOU_HAVE_TO_FORCE_MARK_AGE_RESTRICTED)
        ? { source: e, status: s.Y.ADULT }
        : { source: e, status: E.X8(n, f.RESTRICTED_TO_ADULT) ? s.Y.ADULT : s.Y.EVERYONE };
}
