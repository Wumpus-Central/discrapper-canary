"use strict";
n.d(t, { $b: () => i, FT: () => s, UN: () => a });
var r = n(602034);
function i(e, t) {
    return new Promise((n) => {
        let i = new IntersectionObserver(
            (e) => {
                let t = 0,
                    s = null;
                for (let { isIntersecting: a, intersectionRatio: o, target: l } of e) {
                    if (a && 1 === o) {
                        i.disconnect();
                        let e = l.getAttribute(r.eM);
                        if (null != e) return n(e);
                    }
                    o > t && ((t = o), (s = l.getAttribute(r.eM)));
                }
                i.disconnect(), n(s);
            },
            { root: e },
        );
        for (let e of t) i.observe(e);
    });
}
function s(e, t) {
    return new Promise((n) => {
        let i = new IntersectionObserver(
            (e) => {
                let t = 0,
                    s = null;
                for (let a = e.length - 1; a >= 0; a--) {
                    let { isIntersecting: o, intersectionRatio: l, target: u } = e[a];
                    if (o && 1 === l) {
                        i.disconnect();
                        let e = u.getAttribute(r.eM);
                        if (null != e) return n(e);
                    }
                    l > t && ((t = l), (s = u.getAttribute(r.eM)));
                }
                i.disconnect(), n(s);
            },
            { root: e },
        );
        for (let e of t) i.observe(e);
    });
}
function a(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0.5;
    return new Promise((r) => {
        let i = new IntersectionObserver(
            (e) => {
                let t = e[0];
                i.disconnect(), r(t.intersectionRatio >= n);
            },
            { root: e },
        );
        i.observe(t);
    });
}
