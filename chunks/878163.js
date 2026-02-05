"use strict";
n.d(t, { A: () => E });
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(732955),
    o = n(397927),
    l = n(386406),
    u = n(964486),
    c = n(15285),
    d = n(942405),
    _ = n(430452),
    f = n(383501),
    p = n(975571),
    h = n(652215),
    m = n(985018);
function g(e) {
    let { currentGame: t, ...n } = e,
        [a, c] = i.useState(!1);
    return (
        (0, u.l0)(() => {
            a && l.A.clearPTTAdminWarning();
        }),
        (0, r.jsx)(s.aFV, {
            size: "md",
            title: m.intl.string(m.t.eotlXE),
            subtitle: m.intl.formatToPlainString(m.t.Lw6KXV, { game: t?.name }),
            actions: [
                {
                    text: m.intl.string(m.t.psXQHP),
                    onClick: () => {
                        n.onClose(), window.open(p.A.getArticleURL(h.MVz.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank");
                    },
                },
            ],
            actionBarInput: (0, r.jsx)(o.Checkbox, {
                checked: a,
                onChange: (e) => c(e),
                label: m.intl.string(m.t["5E9SB9"]),
                labelType: "secondary",
            }),
            ...n,
        })
    );
}
function E() {
    let [e, t] = (0, a.yK)([c.Ay], () => [c.Ay.canShowAdminWarning, c.Ay.getVisibleGame()], []),
        n = (0, a.bG)([f.A], () => f.A.isConnected(), []),
        s = (0, a.bG)([_.A], () => _.A.getMode() === h.TBI.PUSH_TO_TALK, []),
        l = null != t && t.elevated && n && s && e,
        u = i.useRef(null);
    return (
        i.useEffect(() => {
            if (!(0, d.yA)(c.Ay))
                return (
                    l ? (u.current = (0, o.qfG)((e) => (0, r.jsx)(g, { currentGame: t, ...e }))) : e(),
                    () => {
                        e();
                    }
                );
            function e() {
                null !== u.current && ((0, o.OoC)(u.current), (u.current = null));
            }
        }, [t, l]),
        null
    );
}
