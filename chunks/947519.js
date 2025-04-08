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
    createPromise: () => Promise.all([n.e('94342'), n.e('86029'), n.e('16172'), n.e('84605'), n.e('50448'), n.e('80451'), n.e('38597'), n.e('25292'), n.e('90508'), n.e('95477'), n.e('11212'), n.e('22878'), n.e('13351'), n.e('86328'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('28467'), n.e('86282'), n.e('18895'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('23491'), n.e('76540'), n.e('80284'), n.e('20875'), n.e('85574'), n.e('37658'), n.e('17938'), n.e('9710'), n.e('93602'), n.e('24967'), n.e('62117'), n.e('49508'), n.e('22646'), n.e('60691'), n.e('64838'), n.e('3940'), n.e('25183'), n.e('27458'), n.e('41851'), n.e('49751'), n.e('69606'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('89730'), n.e('32'), n.e('19948'), n.e('83957'), n.e('38299'), n.e('64679'), n.e('28543'), n.e('30634'), n.e('93886')]).then(n.bind(n, 678717)),
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
