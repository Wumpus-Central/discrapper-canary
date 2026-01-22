n.d(t, {
    A: () => y,
}),
    n(896048);
var r = n(64700),
    i = n(498419),
    l = n.n(i),
    a = n(481613),
    s = n.n(a),
    o = n(311907),
    c = n(800828),
    u = n(912309),
    d = n(458294),
    p = n(803224),
    f = n(994500),
    h = n(503509),
    A = n(723702),
    g = n(837921),
    m = n(726249),
    b = n(652215),
    _ = n(985018);
let E = new Set(["Blink", "Gecko", "WebKit"]),
    O = b.tEg;
if (A.isPlatformEmbedded) O = (e) => g.Ay.setBadge(e);
else if (E.has(s().layout)) {
    let e = new (l())({
        animation: "none",
    });
    O = (t) => {
        try {
            (0, m.sF)(t), e.badge(-1 === t ? "•" : t);
        } catch (e) {}
    };
}

function y() {
    let e = (0, o.bG)([h.A], () => h.A.hasIncomingCalls()),
        t = (0, o.bG)([d.default, f.A, p.A, c.A], () => {
            let e = d.default.getTotalMentionCount(),
                t = (0, u.dH)([f.A, c.A]),
                n = d.default.hasAnyUnread(),
                r = p.A.getDisableUnreadBadge(),
                i = e + t;
            return 0 === i && n && !r && (i = -1), i;
        });
    r.useEffect(() => {
        if (!e) return;
        let t = g.Ay.bounceDock("critical"),
            n = (0, m.iA)({
                messages: [_.intl.string(_.t["fk1/bX"])],
                count: 50,
            });
        return () => {
            null == t || t(), n();
        };
    }, [e]),
        r.useEffect(() => {
            O(t);
        }, [t]),
        r.useEffect(() => () => O(0), []);
}
