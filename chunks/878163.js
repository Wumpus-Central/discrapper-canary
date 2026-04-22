"use strict";
n.d(t, { A: () => A });
var r = n(627968),
    i = n(64700),
    s = n(311907),
    a = n(189213),
    o = n(150934),
    l = n(192308),
    u = n(386406),
    d = n(964486),
    c = n(15285),
    _ = n(942405),
    f = n(430452),
    E = n(383501),
    h = n(975571),
    p = n(652215),
    m = n(985018);
function g(e) {
    let { currentGame: t, ...n } = e,
        [s, l] = i.useState(!1);
    return (
        (0, d.l0)(() => {
            s && u.A.clearPTTAdminWarning();
        }),
        (0, r.jsx)(a.Modal, {
            size: "md",
            title: m.intl.string(m.t.eotlXE),
            subtitle: m.intl.formatToPlainString(m.t.Lw6KXV, { game: t?.name }),
            actions: [
                {
                    text: m.intl.string(m.t.psXQHP),
                    onClick: () => {
                        n.onClose(), window.open(h.A.getArticleURL(p.MVz.PUSH_TO_TALK_ADMINISTRATOR_MODE), "_blank");
                    },
                },
            ],
            actionBarInput: (0, r.jsx)(o.S, {
                checked: s,
                onChange: (e) => l(e),
                label: m.intl.string(m.t["5E9SB9"]),
                labelType: "secondary",
            }),
            ...n,
        })
    );
}
function A() {
    let [e, t] = (0, s.yK)([c.Ay], () => [c.Ay.canShowAdminWarning, c.Ay.getVisibleGame()], []),
        n = (0, s.bG)([E.A], () => E.A.isConnected(), []),
        a = (0, s.bG)([f.Ay], () => f.Ay.getMode() === p.TBI.PUSH_TO_TALK, []),
        o = null != t && t.elevated && n && a && e,
        u = i.useRef(null);
    return (
        i.useEffect(() => {
            if (!(0, _.yA)(c.Ay))
                return (
                    o ? (u.current = (0, l.openModal)((e) => (0, r.jsx)(g, { currentGame: t, ...e }))) : e(),
                    () => {
                        e();
                    }
                );
            function e() {
                null !== u.current && ((0, l.closeModal)(u.current), (u.current = null));
            }
        }, [t, o]),
        null
    );
}
