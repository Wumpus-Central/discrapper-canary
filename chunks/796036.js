n.d(t, { h: () => w, s: () => g });
var i = n(343030),
    r = n(91242),
    l = n(558960),
    o = n(559676),
    s = n(805332),
    u = n(783791),
    a = n(972786),
    d = n(120426),
    c = n(171936),
    f = n(165610),
    h = n(600732);
let _ = new Map(),
    p = !1;
function g() {
    p ||
        ((p = !0),
        u.Ay.addChangeListener(E),
        a.Ay.addChangeListener(E),
        r.A.addChangeListener(E),
        s.A.addChangeListener(E),
        (0, o.FQ)(E),
        E());
}
function w(e) {
    return _.has(e);
}
function E() {
    let e = new Map();
    for (let t of new Set([...u.Ay.getActivityOrderedProjectIds(), ...(0, o.k)()])) {
        if (!u.Ay.isThinking(t) && !(0, o.RW)(t)) continue;
        let n = (function (e) {
            let t = a.Ay.getProject(e)?.preview_application_id;
            if (null == t) return null;
            let n = (0, f.VA)(t, f.sd);
            return (0, f.x1)(r.A.getFrame(n)) ? n : null;
        })(t);
        null != n && e.set(t, n);
    }
    for (let [i, r] of [..._]) {
        var t, n;
        e.get(i) !== r.frameId &&
            ((t = i),
            (n = r),
            _.delete(t),
            n.unregisterLookup(),
            l.A.removeFrameTarget(n.frameId, n.element),
            n.element.remove());
    }
    for (let [t, n] of e)
        _.has(t) ||
            (function (e, t) {
                let n = document.createElement("div");
                ((n.className = h.tF),
                    n.setAttribute("inert", ""),
                    n.setAttribute("aria-hidden", "true"),
                    T(n, s.A.isBuilderPreviewMobile()),
                    document.body.appendChild(n));
                let r = { frameId: t, element: n, unregisterLookup: () => {} };
                (_.set(e, r),
                    (r.unregisterLookup = (0, c.mn)(e, () => (0, d.F)(n, t))),
                    l.A.registerFrameTarget(t, n, i.A.Backstage, void 0));
            })(t, n);
    let p = s.A.isBuilderPreviewMobile();
    for (let e of _.values()) T(e.element, p);
}
function T(e, t) {
    (e.classList.toggle(h.lZ, t), e.classList.toggle(h.L_, !t));
}
