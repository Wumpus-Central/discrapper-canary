n.d(t, { Z: () => p });
var r = n(255367),
    i = n(73800),
    a = n(608787),
    o = n(442837),
    s = n(522474),
    l = n(906467),
    c = n(358085),
    u = n(31336),
    d = n(19759),
    f = n(981631);
let _ = (0, a.Un)({
    createPromise: () => Promise.all([n.e('14006'), n.e('19456'), n.e('8895'), n.e('70791'), n.e('50448'), n.e('80451'), n.e('75041'), n.e('25292'), n.e('22878'), n.e('80417'), n.e('31978'), n.e('74891'), n.e('85372'), n.e('6380'), n.e('90508'), n.e('8739'), n.e('18543'), n.e('28467'), n.e('86282'), n.e('17938'), n.e('38626'), n.e('30243'), n.e('37447'), n.e('53937'), n.e('23491'), n.e('76540'), n.e('39797'), n.e('15483'), n.e('69856'), n.e('86350'), n.e('11141'), n.e('94136'), n.e('49508'), n.e('22646'), n.e('64838'), n.e('25183'), n.e('3940'), n.e('40694'), n.e('43988'), n.e('88622'), n.e('94363'), n.e('88712'), n.e('30419'), n.e('66317'), n.e('18824'), n.e('89795'), n.e('74739'), n.e('45505'), n.e('3589'), n.e('99014'), n.e('64679'), n.e('92922'), n.e('30634'), n.e('89744'), n.e('93886')]).then(n.bind(n, 678717)),
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
