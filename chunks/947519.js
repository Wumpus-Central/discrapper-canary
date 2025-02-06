n.d(t, { Z: () => f });
var i = n(200651),
    r = n(192379),
    a = n(608787),
    s = n(442837),
    o = n(906467),
    l = n(358085),
    u = n(31336),
    c = n(19759);
let d = (0, a.Un)({
    createPromise: () => Promise.all([n.e('50506'), n.e('68880'), n.e('23217'), n.e('84605'), n.e('80451'), n.e('38597'), n.e('51269'), n.e('8016'), n.e('22878'), n.e('90508'), n.e('13351'), n.e('66711'), n.e('78447'), n.e('17938'), n.e('53937'), n.e('83366'), n.e('6380'), n.e('46097'), n.e('76540'), n.e('8739'), n.e('58059'), n.e('86282'), n.e('18543'), n.e('22173'), n.e('68445'), n.e('99624'), n.e('30243'), n.e('99393'), n.e('49508'), n.e('22646'), n.e('68241'), n.e('3940'), n.e('25183'), n.e('80284'), n.e('47903'), n.e('40103'), n.e('48923'), n.e('30419'), n.e('18824'), n.e('60691'), n.e('41070'), n.e('45161'), n.e('63158'), n.e('84466'), n.e('86133'), n.e('28986'), n.e('64679'), n.e('92922'), n.e('91523'), n.e('30634'), n.e('93886')]).then(n.bind(n, 678717)),
    webpackId: 678717
});
function f(e) {
    let { mobile: t } = e,
        n = (0, s.e7)([o.Z], () => o.Z.isDeveloper),
        a = (0, s.e7)([c.Z], () => c.Z.displayTools),
        f = r.useCallback((e) => {
            ((0, l.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && 'KeyO' === e.code && (0, u.SO)();
        }, []);
    return (r.useLayoutEffect(
        () => (
            window.addEventListener('keydown', f),
            () => {
                window.removeEventListener('keydown', f);
            }
        ),
        [f]
    ),
    t ? n : a)
        ? (0, i.jsx)(d, { mobile: t })
        : null;
}
