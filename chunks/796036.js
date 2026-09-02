n.d(t, { h: () => m, s: () => w });
var i = n(91242),
    r = n(812901),
    l = n(649248),
    s = n(805332),
    o = n(783791),
    a = n(972786),
    u = n(120426),
    d = n(985451),
    c = n(171936),
    f = n(165610),
    h = n(600732);
let p = new Map(),
    g = !1;
function w() {
    g ||
        ((g = !0),
        o.Ay.addChangeListener(_),
        a.Ay.addChangeListener(_),
        i.A.addChangeListener(_),
        s.A.addChangeListener(_),
        (0, d.FQ)(_),
        _());
}
function m(e) {
    return p.has(e);
}
function _() {
    let e = new Map();
    for (let t of new Set([...o.Ay.getActivityOrderedProjectIds(), ...(0, d.k)()])) {
        if (!o.Ay.isThinking(t) && !(0, d.RW)(t)) continue;
        let n = (function (e) {
            let t = a.Ay.getProject(e)?.preview_application_id;
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
                (n.className = h.tF),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    v(n, s.A.isBuilderPreviewMobile()),
                    document.body.appendChild(n);
                let i = { frameId: t, element: n, unregisterLookup: () => {} };
                p.set(e, i),
                    (i.unregisterLookup = (0, c.mn)(e, () => (0, u.F)(n, t))),
                    l.A.registerFrameTarget(t, n, r.A.Backstage);
            })(t, n);
    let g = s.A.isBuilderPreviewMobile();
    for (let e of p.values()) v(e.element, g);
}
function v(e, t) {
    e.classList.toggle(h.lZ, t), e.classList.toggle(h.L_, !t);
}
