n.d(t, { W: () => s });
var i = n(481060),
    l = n(812206),
    r = n(710845),
    a = n(51025);
function s(e, t, s) {
    !(function (e, t) {
        let a = l.Z.getApplication(e);
        if (null == a) {
            new r.Z('DispatchUninstallActionCreators').log('Application not found for game '.concat(e));
            return;
        }
        (0, i.ZDy)(async () => {
            let { default: e } = await n.e('70061').then(n.bind(n, 764998));
            return (n) =>
                e({
                    game: a,
                    onConfirmUninstall: t,
                    ...n
                });
        });
    })(e, () => (0, a.pC)(e, t, s));
}
