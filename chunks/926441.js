n.d(t, { A: () => N });
var i = n(64700),
    r = n(498419),
    a = n.n(r),
    l = n(481613),
    s = n.n(l),
    o = n(311907),
    d = n(800828),
    c = n(912309),
    u = n(458294),
    A = n(803224),
    h = n(994500),
    _ = n(503509),
    m = n(723702),
    p = n(837921),
    g = n(726249),
    E = n(652215),
    f = n(985018);
let I = new Set(["Blink", "Gecko", "WebKit"]),
    C = E.tEg;
if (m.isPlatformEmbedded) C = (e) => p.Ay.setBadge(e);
else if (I.has(s().layout)) {
    let e = new (a())({ animation: "none" });
    C = (t) => {
        try {
            (0, g.sF)(t), e.badge(-1 === t ? "•" : t);
        } catch (e) {}
    };
}
function N() {
    let e = (0, o.bG)([_.A], () => _.A.hasIncomingCalls()),
        t = (0, o.bG)([u.default, h.A, A.A, d.A], () => {
            let e = u.default.getTotalMentionCount(),
                t = (0, c.dH)([h.A, d.A]),
                n = u.default.hasAnyUnread(),
                i = A.A.getDisableUnreadBadge(),
                r = e + t;
            return 0 === r && n && !i && (r = -1), r;
        });
    i.useEffect(() => {
        if (!e) return;
        let t = p.Ay.bounceDock("critical"),
            n = (0, g.iA)({ messages: [f.intl.string(f.t["fk1/bX"])], count: 50 });
        return () => {
            t?.(), n();
        };
    }, [e]),
        i.useEffect(() => {
            C(t);
        }, [t]),
        i.useEffect(() => () => C(0), []);
}
