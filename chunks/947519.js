n.d(t, { Z: () => p });
var r = n(200651),
    i = n(192379),
    a = n(608787),
    o = n(442837),
    s = n(522474),
    l = n(906467),
    c = n(358085),
    u = n(31336),
    d = n(19759),
    f = n(981631);
let _ = (0, a.Un)({
    createPromise: () => Promise.all([n.e('94342'), n.e('86029'), n.e('16172'), n.e('84605'), n.e('50448'), n.e('80451'), n.e('38597'), n.e('25292'), n.e('90508'), n.e('95477'), n.e('22878'), n.e('13351'), n.e('91245'), n.e('74891'), n.e('6380'), n.e('46097'), n.e('8739'), n.e('18543'), n.e('58059'), n.e('20875'), n.e('28467'), n.e('86282'), n.e('22173'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('76540'), n.e('23491'), n.e('80284'), n.e('15483'), n.e('48157'), n.e('17938'), n.e('93602'), n.e('27146'), n.e('49508'), n.e('22646'), n.e('85679'), n.e('25183'), n.e('64838'), n.e('3940'), n.e('2286'), n.e('27458'), n.e('31975'), n.e('78900'), n.e('74028'), n.e('88712'), n.e('30419'), n.e('18824'), n.e('82081'), n.e('44114'), n.e('62117'), n.e('11252'), n.e('40419'), n.e('76346'), n.e('43498'), n.e('3589'), n.e('64679'), n.e('28543'), n.e('30634'), n.e('93886')]).then(n.bind(n, 678717)),
    webpackId: 678717
});
function p(e) {
    let { mobile: t } = e,
        n = (0, o.e7)([l.Z], () => l.Z.isDeveloper),
        a = (0, o.e7)([d.Z], () => d.Z.displayTools),
        p = (0, o.e7)([s.Z], () => s.Z.getWindowOpen(f.KJ3.DEVTOOLS_POPOUT)),
        h = i.useCallback((e) => {
            ((0, c.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && 'KeyO' === e.code && (0, u.SO)();
        }, []);
    return (i.useLayoutEffect(
        () => (
            window.addEventListener('keydown', h),
            () => {
                window.removeEventListener('keydown', h);
            }
        ),
        [h]
    ),
    (t ? n : a) && !p)
        ? (0, r.jsx)(_, { mobile: t })
        : null;
}
