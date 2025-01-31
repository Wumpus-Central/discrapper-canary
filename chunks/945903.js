n.d(t, { default: () => p });
var o = n(200651),
    a = n(192379),
    l = n(704215),
    r = n(481060),
    i = n(211266),
    s = n(605236),
    c = n(624659),
    d = n(626135),
    u = n(652463),
    m = n(709243),
    _ = n(981631),
    x = n(388032);
let h = { [m.U.OTHER]: {} };
function p(e) {
    let { transitionState: t, onClose: p, guildId: f } = e,
        b = (0, i.Z)(m.e);
    return (
        a.useEffect(() => {
            d.default.track(_.rMx.OPEN_MODAL, { type: 'Guild Delete Report' });
        }, []),
        (0, o.jsx)(c.Z, {
            header: x.intl.string(x.t.WCzx1t),
            body: x.intl.string(x.t.UCmWhY),
            problems: b,
            feedbackProblems: h,
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: a, feedback: i } = e;
                a && (0, s.EW)(l.z.GUILD_DELETE_FEEDBACK);
                let c = null == t;
                (0, u.Z)(f, t, i, c),
                    c ||
                        (0, r.ZDy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, o.jsx)(e, {
                                    body: x.intl.string(x.t['aMoJ+P']),
                                    ...t
                                });
                        });
            },
            onClose: p,
            transitionState: t,
            otherKey: m.U.OTHER
        })
    );
}
