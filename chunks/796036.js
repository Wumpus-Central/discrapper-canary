n.d(t, { h: () => w, s: () => g });
var i = n(91242),
    r = n(812901),
    l = n(649248),
    o = n(559676),
    s = n(805332),
    u = n(783791),
    a = n(972786),
    d = n(120426),
    c = n(171936),
    f = n(165610),
    p = n(600732);
let h = new Map(),
    _ = !1;
function g() {
    _ ||
        ((_ = !0),
        u.Ay.addChangeListener(m),
        a.Ay.addChangeListener(m),
        i.A.addChangeListener(m),
        s.A.addChangeListener(m),
        (0, o.FQ)(m),
        m());
}
function w(e) {
    return h.has(e);
}
function m() {
    let e = new Map();
    for (let t of new Set([...u.Ay.getActivityOrderedProjectIds(), ...(0, o.k)()])) {
        if (!u.Ay.isThinking(t) && !(0, o.RW)(t)) continue;
        let n = (function (e) {
            let t = a.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, f.VA)(t, f.sd);
            return (0, f.x1)(i.A.getFrame(n)) ? n : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [i, r] of [...h]) {
        var t, n;
        e.get(i) !== r.frameId &&
            ((t = i),
            (n = r),
            h.delete(t),
            n.unregisterLookup(),
            l.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        h.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = p.tF),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    E(n, s.A.isBuilderPreviewMobile()),
                    document.body.appendChild(n));
                let i = { frameId: t, element: n, unregisterLookup: () => {} };
                (h.set(e, i),
                    (i.unregisterLookup = (0, c.mn)(e, () => (0, d.F)(n, t))),
                    l.A.registerFrameTarget(t, n, r.A.Backstage));
            })(t, n);
    let _ = s.A.isBuilderPreviewMobile();
    for (let e of h.values()) E(e.element, _);
}
function E(e, t) {
    (e.classList.toggle(p.lZ, t), e.classList.toggle(p.L_, !t));
}
