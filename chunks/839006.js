"use strict";
let r;
n.d(t, { B4: () => p, KB: () => u, V1: () => s });
var i = n(315847),
    a = n(848190),
    o = n(806897);
let u = /-u(?:-[0-9a-z]{2,8})+/gi;
function s(e, t, n = Error) {
    if (!e) throw new n(t);
}
function l(e, t, n) {
    let [r, i, a] = t.split("-"),
        u = !0;
    if (a && "$" === a[0]) {
        let t = "!" !== a[1],
            r = (t ? n[a.slice(1)] : n[a.slice(2)]).map((e) => o.E[e] || [e]).reduce((e, t) => [...e, ...t], []);
        u &&= r.indexOf(e.region || "") > -1 == t;
    } else u &&= !e.region || "*" === a || a === e.region;
    return (u &&= !e.script || "*" === i || i === e.script), (u &&= !e.language || "*" === r || r === e.language);
}
function d(e) {
    return [e.language, e.script, e.region].filter(Boolean).join("-");
}
function c(e, t, n) {
    for (let r of n.matches) {
        let i = l(e, r.desired, n.matchVariables) && l(t, r.supported, n.matchVariables);
        if ((r.oneway || i || (i = l(e, r.supported, n.matchVariables) && l(t, r.desired, n.matchVariables)), i)) {
            let i = 10 * r.distance;
            if (n.paradigmLocales.indexOf(d(e)) > -1 != n.paradigmLocales.indexOf(d(t)) > -1) return i - 1;
            return i;
        }
    }
    throw Error("No matching distance found");
}
let f = (0, i.B)(
        function (e, t) {
            let n = new Intl.Locale(e).maximize(),
                i = new Intl.Locale(t).maximize(),
                o = { language: n.language, script: n.script || "", region: n.region || "" },
                u = { language: i.language, script: i.script || "", region: i.region || "" },
                s = 0,
                l = (function () {
                    if (!r) {
                        let e =
                                a.p.supplemental.languageMatching["written-new"]["0"]?.paradigmLocales?._locales.split(
                                    " ",
                                ),
                            t = a.p.supplemental.languageMatching["written-new"].slice(1, 5);
                        r = {
                            matches: a.p.supplemental.languageMatching["written-new"].slice(5).map((e) => {
                                let t = Object.keys(e)[0],
                                    n = e[t];
                                return {
                                    supported: t,
                                    desired: n._desired,
                                    distance: +n._distance,
                                    oneway: "true" === n.oneway,
                                };
                            }, {}),
                            matchVariables: t.reduce((e, t) => {
                                let n = Object.keys(t)[0],
                                    r = t[n];
                                return (e[n.slice(1)] = r._value.split("+")), e;
                            }, {}),
                            paradigmLocales: [
                                ...e,
                                ...e.map((e) => new Intl.Locale(e.replace(/_/g, "-")).maximize().toString()),
                            ],
                        };
                    }
                    return r;
                })();
            return (
                o.language !== u.language &&
                    (s += c(
                        { language: n.language, script: "", region: "" },
                        { language: i.language, script: "", region: "" },
                        l,
                    )),
                o.script !== u.script &&
                    (s += c(
                        { language: n.language, script: o.script, region: "" },
                        { language: i.language, script: u.script, region: "" },
                        l,
                    )),
                o.region !== u.region && (s += c(o, u, l)),
                s
            );
        },
        { serializer: (e) => `${e[0]}|${e[1]}` },
    ),
    h = new WeakMap();
function p(e, t, n = 838) {
    let r = 1 / 0,
        i = { matchedDesiredLocale: "", distances: {} },
        a = h.get(t);
    a ||
        ((a = t.map((e) => {
            try {
                return Intl.getCanonicalLocales([e])[0] || e;
            } catch {
                return e;
            }
        })),
        h.set(t, a));
    let o = new Set(a);
    for (let t = 0; t < e.length; t++) {
        let n = e[t];
        if (o.has(n)) {
            let e = 0 + 40 * t;
            if (
                ((i.distances[n] = { [n]: e }),
                e < r && ((r = e), (i.matchedDesiredLocale = n), (i.matchedSupportedLocale = n)),
                0 === t)
            )
                return i;
        }
    }
    for (let t = 0; t < e.length; t++) {
        let n = e[t];
        try {
            let e = new Intl.Locale(n).maximize().toString();
            if (e !== n) {
                let a = (function (e) {
                    let t = [],
                        n = e;
                    for (; n; ) {
                        t.push(n);
                        let e = n.lastIndexOf("-");
                        if (-1 === e) break;
                        n = n.substring(0, e);
                    }
                    return t;
                })(e);
                for (let u = 0; u < a.length; u++) {
                    let s = a[u];
                    if (s !== n && o.has(s)) {
                        let a;
                        try {
                            a = new Intl.Locale(s).maximize().toString() === e ? 0 + 40 * t : 10 * u + 40 * t;
                        } catch {
                            a = 10 * u + 40 * t;
                        }
                        i.distances[n] || (i.distances[n] = {}),
                            (i.distances[n][s] = a),
                            a < r && ((r = a), (i.matchedDesiredLocale = n), (i.matchedSupportedLocale = s));
                        break;
                    }
                }
            }
        } catch {}
    }
    return (
        (i.matchedSupportedLocale && 0 === r) ||
            (e.forEach((e, n) => {
                i.distances[e] || (i.distances[e] = {}),
                    a.forEach((a, o) => {
                        let u = t[o],
                            s = f(e, a) + 0 + 40 * n;
                        (i.distances[e][u] = s),
                            s < r && ((r = s), (i.matchedDesiredLocale = e), (i.matchedSupportedLocale = u));
                    });
            }),
            r >= n && ((i.matchedDesiredLocale = void 0), (i.matchedSupportedLocale = void 0))),
        i
    );
}
