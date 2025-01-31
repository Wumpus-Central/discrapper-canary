e.d(t, { Z: () => c });
var i = e(200651),
    l = e(192379),
    a = e(481060),
    r = e(493683),
    d = e(699516),
    o = e(594174),
    s = e(933557),
    u = e(388032);
function c(n, t) {
    let c = l.useCallback(() => {
        let l = (0, s.F6)(n, o.default, d.Z),
            c = u.intl.formatToPlainString(u.t.hJ5Ap6, { name: l }),
            h = u.intl.format(u.t.SSIVOj, { name: l });
        n.isManaged() && ((c = u.intl.formatToPlainString(u.t.hVGjER, { name: l })), (h = u.intl.format(u.t.IK1Qvr, { name: l })));
        let f = function (e) {
            let i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
            r.Z.closePrivateChannel(n.id, t, i);
        };
        (0, a.ZDy)(async () => {
            let { default: n } = await e.e('14604').then(e.bind(e, 960670));
            return (t) =>
                (0, i.jsx)(n, {
                    header: c,
                    body: h,
                    onSubmit: f,
                    ...t
                });
        });
    }, [n, t]);
    return (0, i.jsx)(a.sNh, {
        id: 'leave-channel',
        label: u.intl.string(u.t['26C4oq']),
        action: c,
        color: 'danger'
    });
}
