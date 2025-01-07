n.r(t),
    n.d(t, {
        default: function () {
            return x;
        }
    });
var o = n(200651),
    r = n(192379),
    a = n(704215),
    l = n(481060),
    i = n(211266),
    s = n(605236),
    c = n(624659),
    u = n(626135),
    d = n(652463),
    b = n(709243),
    m = n(981631),
    h = n(388032);
let f = { [b.U.OTHER]: {} };
function x(e) {
    let { transitionState: t, onClose: x, guildId: p } = e,
        v = (0, i.Z)(b.e);
    return (
        r.useEffect(() => {
            u.default.track(m.rMx.OPEN_MODAL, { type: 'Guild Delete Report' });
        }, []),
        (0, o.jsx)(c.Z, {
            header: h.intl.string(h.t.WCzx1t),
            body: h.intl.string(h.t.UCmWhY),
            problems: v,
            feedbackProblems: f,
            onSubmit: function (e) {
                let { problem: t, dontShowAgain: r, feedback: i } = e;
                r && (0, s.EW)(a.z.GUILD_DELETE_FEEDBACK);
                let c = null == t;
                (0, d.Z)(p, t, i, c),
                    !c &&
                        (0, l.openModalLazy)(async () => {
                            let { default: e } = await n.e('14466').then(n.bind(n, 729328));
                            return (t) =>
                                (0, o.jsx)(e, {
                                    body: h.intl.string(h.t['aMoJ+P']),
                                    ...t
                                });
                        });
            },
            onClose: x,
            transitionState: t,
            otherKey: b.U.OTHER
        })
    );
}
