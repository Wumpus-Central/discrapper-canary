"use strict";
n.d(t, { h: () => f, s: () => I });
var i = n(91242),
    r = n(812901),
    a = n(649248),
    s = n(805332),
    l = n(783791),
    o = n(972786),
    d = n(120426),
    c = n(985451),
    u = n(171936),
    _ = n(165610),
    E = n(600732);
let A = new Map(),
    h = !1;
function I() {
    h ||
        ((h = !0),
        l.Ay.addChangeListener(p),
        o.A.addChangeListener(p),
        i.A.addChangeListener(p),
        s.A.addChangeListener(p),
        (0, c.FQ)(p),
        p());
}
function f(e) {
    return A.has(e);
}
function p() {
    let e = new Map();
    for (let t of new Set([...l.Ay.getActivityOrderedProjectIds(), ...(0, c.k)()])) {
        if (!l.Ay.isThinking(t) && !(0, c.RW)(t)) continue;
        let n = (function (e) {
            let t = o.A.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, _.VA)(t, _.sd);
            return (0, _.x1)(i.A.getFrame(n)) ? n : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [i, r] of [...A]) {
        var t, n;
        e.get(i) !== r.frameId &&
            ((t = i),
            (n = r),
            A.delete(t),
            n.unregisterLookup(),
            a.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        A.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                (n.className = E.tF),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    T(n, s.A.isBuilderPreviewMobile()),
                    document.body.appendChild(n);
                let i = { frameId: t, element: n, unregisterLookup: () => {} };
                A.set(e, i),
                    (i.unregisterLookup = (0, u.mn)(e, () => (0, d.F)(n, t))),
                    a.A.registerFrameTarget(t, n, r.A.Backstage);
            })(t, n);
    let h = s.A.isBuilderPreviewMobile();
    for (let e of A.values()) T(e.element, h);
}
function T(e, t) {
    e.classList.toggle(E.lZ, t), e.classList.toggle(E.L_, !t);
}
