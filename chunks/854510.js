n.d(e, { default: () => a }), n(388685);
var r = n(54381);
n(473749);
var i = n(793030),
    s = n(930180),
    o = n(320596),
    l = n(388032);
function a(t) {
    let { channel: e, onAccept: n, transitionState: a, onClose: c } = t,
        d = (0, s.z)(e.id),
        u = (0, s.bA)(e.id);
    return (0, r.jsx)(i.Modal, {
        onClose: c,
        transitionState: a,
        actions: [
            {
                text: l.intl.string(l.t.CZGqeT),
                variant: "secondary",
                onClick: c,
            },
            {
                text: l.intl.string(l.t.mbD50D),
                variant: "primary",
                onClick: () => {
                    n(e), c();
                },
            },
        ],
        title: (function (t) {
            let { blockedUsersCount: e, ignoredUsersCount: n } = t;
            return e > 0 && n > 0
                ? l.intl.formatToPlainString(l.t.Uzdyho, { number: e + n })
                : n > 0
                  ? l.intl.formatToPlainString(l.t.wvygk8, { number: n })
                  : l.intl.formatToPlainString(l.t.HviVA9, { number: e });
        })({
            blockedUsersCount: d.length,
            ignoredUsersCount: u.length,
        }),
        subtitle: (function (t) {
            let { blockedUsersCount: e, ignoredUsersCount: n } = t;
            return e > 0 && n > 0
                ? l.intl.string(l.t["P/KFXz"])
                : n > 0
                  ? l.intl.format(l.t.Ri3o33, { number: n })
                  : l.intl.format(l.t["28qZMU"], { number: e });
        })({
            blockedUsersCount: d.length,
            ignoredUsersCount: u.length,
        }),
        children: [...d, ...u].map((t) => {
            let { user: n, id: i, speaker: s } = t;
            return (0, r.jsx)(
                o.Ie,
                {
                    user: n,
                    speaker: s,
                    showStatus: !0,
                    channelId: e.id,
                },
                i,
            );
        }),
    });
}
