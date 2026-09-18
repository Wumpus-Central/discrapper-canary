n.d(t, { h: () => m, s: () => w });
var i = n(91242),
    r = n(812901),
    l = n(649248),
    s = n(559676),
    o = n(805332),
    a = n(783791),
    u = n(972786),
    d = n(120426),
    c = n(171936),
    f = n(165610),
    h = n(600732);
let p = new Map(),
    g = !1;
function w() {
    g ||
        ((g = !0),
        a.Ay.addChangeListener(v),
        u.Ay.addChangeListener(v),
        i.A.addChangeListener(v),
        o.A.addChangeListener(v),
        (0, s.FQ)(v),
        v());
}
function m(e) {
    return p.has(e);
}
function v() {
    let e = new Map();
    for (let t of new Set([...a.Ay.getActivityOrderedProjectIds(), ...(0, s.k)()])) {
        if (!a.Ay.isThinking(t) && !(0, s.RW)(t)) continue;
        let n = (function (e) {
            let t = u.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, f.VA)(t, f.sd);
            return (0, f.x1)(i.A.getFrame(n)) ? n : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [i, r] of [...p]) {
        var t, n;
        e.get(i) !== r.frameId &&
            ((t = i),
            (n = r),
            p.delete(t),
            n.unregisterLookup(),
            l.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        p.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = h.tF),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    _(n, o.A.isBuilderPreviewMobile()),
                    document.body.appendChild(n));
                let i = { frameId: t, element: n, unregisterLookup: () => {} };
                (p.set(e, i),
                    (i.unregisterLookup = (0, c.mn)(e, () => (0, d.F)(n, t))),
                    l.A.registerFrameTarget(t, n, r.A.Backstage));
            })(t, n);
    let g = o.A.isBuilderPreviewMobile();
    for (let e of p.values()) _(e.element, g);
}
function _(e, t) {
    (e.classList.toggle(h.lZ, t), e.classList.toggle(h.L_, !t));
}
