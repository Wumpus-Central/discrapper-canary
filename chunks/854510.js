n.d(e, { default: () => a }), n(388685);
var r = n(54381);
n(473749);
var i = n(793030),
    s = n(930180),
    l = n(320596),
    o = n(388032);
function a(t) {
    let { channel: e, onAccept: n, transitionState: a, onClose: c } = t,
        d = (0, s.z)(e.id),
        u = (0, s.bA)(e.id);
    return (0, r.jsx)(i.Modal, {
        onClose: c,
        transitionState: a,
        actions: [
            {
                text: o.intl.string(o.t.CZGqeT),
                variant: "secondary",
                onClick: c,
            },
            {
                text: o.intl.string(o.t.mbD50D),
                variant: "primary",
                onClick: () => {
                    n(e), c();
                },
            },
        ],
        title: (function (t) {
            let { blockedUsersCount: e, ignoredUsersCount: n } = t;
            return e > 0 && n > 0
                ? o.intl.formatToPlainString(o.t.Uzdyho, { number: e + n })
                : n > 0
                  ? o.intl.formatToPlainString(o.t.wvygk8, { number: n })
                  : o.intl.formatToPlainString(o.t.HviVA9, { number: e });
        })({
            blockedUsersCount: d.length,
            ignoredUsersCount: u.length,
        }),
        subtitle: (function (t) {
            let { blockedUsersCount: e, ignoredUsersCount: n } = t;
            return e > 0 && n > 0
                ? o.intl.string(o.t["P/KFXz"])
                : n > 0
                  ? o.intl.format(o.t.Ri3o33, { number: n })
                  : o.intl.format(o.t["28qZMU"], { number: e });
        })({
            blockedUsersCount: d.length,
            ignoredUsersCount: u.length,
        }),
        children: [...d, ...u].map((t) => {
            let { user: n, id: i, speaker: s } = t;
            return (0, r.jsx)(
                l.Ie,
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
