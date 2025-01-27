r.d(n, {
    Z: function () {
        return p;
    }
});
var i = r(200651),
    a = r(192379),
    o = r(608787),
    s = r(442837),
    l = r(906467),
    u = r(358085),
    c = r(31336),
    d = r(19759);
let f = (0, o.Un)({
    createPromise: () => Promise.all([r.e('50506'), r.e('96211'), r.e('23217'), r.e('84605'), r.e('80451'), r.e('38597'), r.e('8016'), r.e('51269'), r.e('22878'), r.e('90508'), r.e('13351'), r.e('66711'), r.e('17938'), r.e('21628'), r.e('6380'), r.e('46097'), r.e('76540'), r.e('8739'), r.e('58059'), r.e('86282'), r.e('18543'), r.e('18895'), r.e('68445'), r.e('19652'), r.e('99393'), r.e('99008'), r.e('37229'), r.e('22646'), r.e('95393'), r.e('3940'), r.e('25183'), r.e('80284'), r.e('81463'), r.e('58191'), r.e('31135'), r.e('48923'), r.e('30419'), r.e('69174'), r.e('18824'), r.e('30203'), r.e('25343'), r.e('64679'), r.e('30634'), r.e('92922'), r.e('56097')]).then(r.bind(r, 678717)),
    webpackId: 678717
});
function p(e) {
    let { mobile: n } = e,
        r = (0, s.e7)([l.Z], () => l.Z.isDeveloper),
        o = (0, s.e7)([d.Z], () => d.Z.displayTools),
        p = a.useCallback((e) => {
            ((0, u.isMac)() ? e.metaKey : e.ctrlKey) && e.altKey && 'KeyO' === e.code && (0, c.SO)();
        }, []);
    return (a.useLayoutEffect(
        () => (
            window.addEventListener('keydown', p),
            () => {
                window.removeEventListener('keydown', p);
            }
        ),
        [p]
    ),
    n ? r : o)
        ? (0, i.jsx)(f, { mobile: n })
        : null;
}
