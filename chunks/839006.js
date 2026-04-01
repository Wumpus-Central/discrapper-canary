let a;
t.d(e, { B4: () => h, KB: () => u, V1: () => o });
var r = t(315847),
    i = t(848190),
    s = t(806897);
let u = /-u(?:-[0-9a-z]{2,8})+/gi;
function o(n, e, t = Error) {
    if (!n) throw new t(e);
}
function d(n, e, t) {
    let [a, r, i] = e.split("-"),
        u = !0;
    if (i && "$" === i[0]) {
        let e = "!" !== i[1],
            a = (e ? t[i.slice(1)] : t[i.slice(2)]).map((n) => s.E[n] || [n]).reduce((n, e) => [...n, ...e], []);
        u &&= a.indexOf(n.region || "") > -1 == e;
    } else u &&= !n.region || "*" === i || i === n.region;
    return (u &&= !n.script || "*" === r || r === n.script), (u &&= !n.language || "*" === a || a === n.language);
}
function l(n) {
    return [n.language, n.script, n.region].filter(Boolean).join("-");
}
function c(n, e, t) {
    for (let a of t.matches) {
        let r = d(n, a.desired, t.matchVariables) && d(e, a.supported, t.matchVariables);
        if ((a.oneway || r || (r = d(n, a.supported, t.matchVariables) && d(e, a.desired, t.matchVariables)), r)) {
            let r = 10 * a.distance;
            if (t.paradigmLocales.indexOf(l(n)) > -1 != t.paradigmLocales.indexOf(l(e)) > -1) return r - 1;
            return r;
        }
    }
    throw Error("No matching distance found");
}
let _ = (0, r.B)(
        function (n, e) {
            let t = new Intl.Locale(n).maximize(),
                r = new Intl.Locale(e).maximize(),
                s = { language: t.language, script: t.script || "", region: t.region || "" },
                u = { language: r.language, script: r.script || "", region: r.region || "" },
                o = 0,
                d = (function () {
                    if (!a) {
                        let n =
                                i.p.supplemental.languageMatching["written-new"]["0"]?.paradigmLocales?._locales.split(
                                    " ",
                                ),
                            e = i.p.supplemental.languageMatching["written-new"].slice(1, 5);
                        a = {
                            matches: i.p.supplemental.languageMatching["written-new"].slice(5).map((n) => {
                                let e = Object.keys(n)[0],
                                    t = n[e];
                                return {
                                    supported: e,
                                    desired: t._desired,
                                    distance: +t._distance,
                                    oneway: "true" === t.oneway,
                                };
                            }, {}),
                            matchVariables: e.reduce((n, e) => {
                                let t = Object.keys(e)[0],
                                    a = e[t];
                                return (n[t.slice(1)] = a._value.split("+")), n;
                            }, {}),
                            paradigmLocales: [
                                ...n,
                                ...n.map((n) => new Intl.Locale(n.replace(/_/g, "-")).maximize().toString()),
                            ],
                        };
                    }
                    return a;
                })();
            return (
                s.language !== u.language &&
                    (o += c(
                        { language: t.language, script: "", region: "" },
                        { language: r.language, script: "", region: "" },
                        d,
                    )),
                s.script !== u.script &&
                    (o += c(
                        { language: t.language, script: s.script, region: "" },
                        { language: r.language, script: u.script, region: "" },
                        d,
                    )),
                s.region !== u.region && (o += c(s, u, d)),
                o
            );
        },
        { serializer: (n) => `${n[0]}|${n[1]}` },
    ),
    f = new WeakMap();
function h(n, e, t = 838) {
    let a = 1 / 0,
        r = { matchedDesiredLocale: "", distances: {} },
        i = f.get(e);
    i ||
        ((i = e.map((n) => {
            try {
                return Intl.getCanonicalLocales([n])[0] || n;
            } catch {
                return n;
            }
        })),
        f.set(e, i));
    let s = new Set(i);
    for (let e = 0; e < n.length; e++) {
        let t = n[e];
        if (s.has(t)) {
            let n = 0 + 40 * e;
            if (
                ((r.distances[t] = { [t]: n }),
                n < a && ((a = n), (r.matchedDesiredLocale = t), (r.matchedSupportedLocale = t)),
                0 === e)
            )
                return r;
        }
    }
    for (let e = 0; e < n.length; e++) {
        let t = n[e];
        try {
            let n = new Intl.Locale(t).maximize().toString();
            if (n !== t) {
                let i = (function (n) {
                    let e = [],
                        t = n;
                    for (; t; ) {
                        e.push(t);
                        let n = t.lastIndexOf("-");
                        if (-1 === n) break;
                        t = t.substring(0, n);
                    }
                    return e;
                })(n);
                for (let u = 0; u < i.length; u++) {
                    let o = i[u];
                    if (o !== t && s.has(o)) {
                        let i;
                        try {
                            i = new Intl.Locale(o).maximize().toString() === n ? 0 + 40 * e : 10 * u + 40 * e;
                        } catch {
                            i = 10 * u + 40 * e;
                        }
                        r.distances[t] || (r.distances[t] = {}),
                            (r.distances[t][o] = i),
                            i < a && ((a = i), (r.matchedDesiredLocale = t), (r.matchedSupportedLocale = o));
                        break;
                    }
                }
            }
        } catch {}
    }
    return (
        (r.matchedSupportedLocale && 0 === a) ||
            (n.forEach((n, t) => {
                r.distances[n] || (r.distances[n] = {}),
                    i.forEach((i, s) => {
                        let u = e[s],
                            o = _(n, i) + 0 + 40 * t;
                        (r.distances[n][u] = o),
                            o < a && ((a = o), (r.matchedDesiredLocale = n), (r.matchedSupportedLocale = u));
                    });
            }),
            a >= t && ((r.matchedDesiredLocale = void 0), (r.matchedSupportedLocale = void 0))),
        r
    );
}
