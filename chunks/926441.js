n.d(t, { A: () => T });
var i = n(64700),
    r = n(498419),
    a = n.n(r),
    l = n(481613),
    s = n.n(l),
    o = n(311907),
    d = n(800828),
    u = n(912309),
    c = n(458294),
    A = n(803224),
    h = n(994500),
    _ = n(503509),
    E = n(723702),
    p = n(837921),
    m = n(726249),
    g = n(652215),
    I = n(985018);
let C = new Set(["Blink", "Gecko", "WebKit"]),
    f = g.tEg;
if (E.isPlatformEmbedded) f = (e) => p.Ay.setBadge(e);
else if (C.has(s().layout)) {
    let e = new (a())({ animation: "none" });
    f = (t) => {
        try {
            (0, m.sF)(t), e.badge(-1 === t ? "•" : t);
        } catch (e) {}
    };
}
function T() {
    let e = (0, o.bG)([_.A], () => _.A.hasIncomingCalls()),
        t = (0, o.bG)([c.default, h.A, A.A, d.A], () => {
            let e = c.default.getTotalMentionCount(),
                t = (0, u.dH)([h.A, d.A]),
                n = c.default.hasAnyUnread(),
                i = A.A.getDisableUnreadBadge(),
                r = e + t;
            return 0 === r && n && !i && (r = -1), r;
        });
    i.useEffect(() => {
        if (!e) return;
        let t = p.Ay.bounceDock("critical"),
            n = (0, m.iA)({ messages: [I.intl.string(I.t["fk1/bX"])], count: 50 });
        return () => {
            t?.(), n();
        };
    }, [e]),
        i.useEffect(() => {
            f(t);
        }, [t]),
        i.useEffect(() => () => f(0), []);
}
