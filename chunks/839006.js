"use strict";
let r;
n.d(t, { B4: () => p, KB: () => o, V1: () => l });
var i = n(315847),
    s = n(848190),
    a = n(806897);
let o = /-u(?:-[0-9a-z]{2,8})+/gi;
function l(e, t, n = Error) {
    if (!e) throw new n(t);
}
function u(e, t, n) {
    let [r, i, s] = t.split("-"),
        o = !0;
    if (s && "$" === s[0]) {
        let t = "!" !== s[1],
            r = (t ? n[s.slice(1)] : n[s.slice(2)]).map((e) => a.E[e] || [e]).reduce((e, t) => [...e, ...t], []);
        o &&= r.indexOf(e.region || "") > -1 == t;
    } else o &&= !e.region || "*" === s || s === e.region;
    return (o &&= !e.script || "*" === i || i === e.script), (o &&= !e.language || "*" === r || r === e.language);
}
function c(e) {
    return [e.language, e.script, e.region].filter(Boolean).join("-");
}
function d(e, t, n) {
    for (let r of n.matches) {
        let i = u(e, r.desired, n.matchVariables) && u(t, r.supported, n.matchVariables);
        if ((r.oneway || i || (i = u(e, r.supported, n.matchVariables) && u(t, r.desired, n.matchVariables)), i)) {
            let i = 10 * r.distance;
            if (n.paradigmLocales.indexOf(c(e)) > -1 != n.paradigmLocales.indexOf(c(t)) > -1) return i - 1;
            return i;
        }
    }
    throw Error("No matching distance found");
}
let _ = (0, i.B)(
        function (e, t) {
            let n = new Intl.Locale(e).maximize(),
                i = new Intl.Locale(t).maximize(),
                a = { language: n.language, script: n.script || "", region: n.region || "" },
                o = { language: i.language, script: i.script || "", region: i.region || "" },
                l = 0,
                u = (function () {
                    if (!r) {
                        let e =
                                s.p.supplemental.languageMatching["written-new"]["0"]?.paradigmLocales?._locales.split(
                                    " ",
                                ),
                            t = s.p.supplemental.languageMatching["written-new"].slice(1, 5);
                        r = {
                            matches: s.p.supplemental.languageMatching["written-new"].slice(5).map((e) => {
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
                a.language !== o.language &&
                    (l += d(
                        { language: n.language, script: "", region: "" },
                        { language: i.language, script: "", region: "" },
                        u,
                    )),
                a.script !== o.script &&
                    (l += d(
                        { language: n.language, script: a.script, region: "" },
                        { language: i.language, script: o.script, region: "" },
                        u,
                    )),
                a.region !== o.region && (l += d(a, o, u)),
                l
            );
        },
        { serializer: (e) => `${e[0]}|${e[1]}` },
    ),
    f = new WeakMap();
function p(e, t, n = 838) {
    let r = 1 / 0,
        i = { matchedDesiredLocale: "", distances: {} },
        s = f.get(t);
    s ||
        ((s = t.map((e) => {
            try {
                return Intl.getCanonicalLocales([e])[0] || e;
            } catch {
                return e;
            }
        })),
        f.set(t, s));
    let a = new Set(s);
    for (let t = 0; t < e.length; t++) {
        let n = e[t];
        if (a.has(n)) {
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
                let s = (function (e) {
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
                for (let o = 0; o < s.length; o++) {
                    let l = s[o];
                    if (l !== n && a.has(l)) {
                        let s;
                        try {
                            s = new Intl.Locale(l).maximize().toString() === e ? 0 + 40 * t : 10 * o + 40 * t;
                        } catch {
                            s = 10 * o + 40 * t;
                        }
                        i.distances[n] || (i.distances[n] = {}),
                            (i.distances[n][l] = s),
                            s < r && ((r = s), (i.matchedDesiredLocale = n), (i.matchedSupportedLocale = l));
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
                    s.forEach((s, a) => {
                        let o = t[a],
                            l = _(e, s) + 0 + 40 * n;
                        (i.distances[e][o] = l),
                            l < r && ((r = l), (i.matchedDesiredLocale = e), (i.matchedSupportedLocale = o));
                    });
            }),
            r >= n && ((i.matchedDesiredLocale = void 0), (i.matchedSupportedLocale = void 0))),
        i
    );
}
