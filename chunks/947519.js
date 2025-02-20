n.d(t, { Z: () => f });
var r = n(200651),
    i = n(192379),
    o = n(608787),
    a = n(442837),
    s = n(906467),
    l = n(358085),
    c = n(31336),
    u = n(19759);
let d = (0, o.Un)({
    createPromise: () => Promise.all([n.e('50506'), n.e('68880'), n.e('23217'), n.e('84605'), n.e('80451'), n.e('38597'), n.e('25292'), n.e('8016'), n.e('22878'), n.e('90508'), n.e('13351'), n.e('95477'), n.e('11212'), n.e('66711'), n.e('78447'), n.e('97349'), n.e('55186'), n.e('17938'), n.e('53937'), n.e('83366'), n.e('6380'), n.e('46097'), n.e('76540'), n.e('84335'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('22173'), n.e('68445'), n.e('46906'), n.e('30243'), n.e('99393'), n.e('68241'), n.e('49508'), n.e('22646'), n.e('3940'), n.e('25183'), n.e('80284'), n.e('85574'), n.e('11814'), n.e('48923'), n.e('89444'), n.e('30419'), n.e('99839'), n.e('18824'), n.e('60691'), n.e('624'), n.e('17961'), n.e('84466'), n.e('71864'), n.e('27805'), n.e('64679'), n.e('92922'), n.e('78553'), n.e('30634'), n.e('93886')]).then(n.bind(n, 678717)),
    webpackId: 678717
});
function f(e) {
    let { mobile: t } = e,
        n = (0, a.e7)([s.Z], () => s.Z.isDeveloper),
        o = (0, a.e7)([u.Z], () => u.Z.displayTools),
        f = i.useCallback((e) => {
            ((0, l.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && 'KeyO' === e.code && (0, c.SO)();
        }, []);
    return (i.useLayoutEffect(
        () => (
            window.addEventListener('keydown', f),
            () => {
                window.removeEventListener('keydown', f);
            }
        ),
        [f]
    ),
    t ? n : o)
        ? (0, r.jsx)(d, { mobile: t })
        : null;
}
