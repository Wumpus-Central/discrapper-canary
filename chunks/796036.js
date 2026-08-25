n.d(t, { h: () => w, s: () => m });
var l = n(91242),
    i = n(812901),
    r = n(649248),
    s = n(805332),
    o = n(783791),
    u = n(972786),
    a = n(120426),
    d = n(985451),
    c = n(171936),
    f = n(165610),
    p = n(600732);
let g = new Map(),
    h = !1;
function m() {
    h ||
        ((h = !0),
        o.Ay.addChangeListener(_),
        u.A.addChangeListener(_),
        l.A.addChangeListener(_),
        s.A.addChangeListener(_),
        (0, d.FQ)(_),
        _());
}
function w(e) {
    return g.has(e);
}
function _() {
    let e = new Map();
    for (let t of new Set([...o.Ay.getActivityOrderedProjectIds(), ...(0, d.k)()])) {
        if (!o.Ay.isThinking(t) && !(0, d.RW)(t)) continue;
        let n = (function (e) {
            let t = u.A.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, f.VA)(t, f.sd);
            return (0, f.x1)(l.A.getFrame(n)) ? n : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [l, i] of [...g]) {
        var t, n;
        e.get(l) !== i.frameId &&
            ((t = l),
            (n = i),
            g.delete(t),
            n.unregisterLookup(),
            r.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        g.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                (n.className = p.tF),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    A(n, s.A.isBuilderPreviewMobile()),
                    document.body.appendChild(n);
                let l = { frameId: t, element: n, unregisterLookup: () => {} };
                g.set(e, l),
                    (l.unregisterLookup = (0, c.mn)(e, () => (0, a.F)(n, t))),
                    r.A.registerFrameTarget(t, n, i.A.Backstage);
            })(t, n);
    let h = s.A.isBuilderPreviewMobile();
    for (let e of g.values()) A(e.element, h);
}
function A(e, t) {
    e.classList.toggle(p.lZ, t), e.classList.toggle(p.L_, !t);
}
