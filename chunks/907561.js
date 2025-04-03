n.d(t, {
    Km: () => s,
    bC: () => l,
    md: () => a
});
var r = n(192379),
    i = n(772848);
let s = 262,
    a = 100;
function l(e, t) {
    let n = r.useMemo(() => 'clan-banner-container-'.concat((0, i.Z)()), []);
    return {
        styleContent: r.useMemo(() => {
            let r = e.map((e, t) => '--primary-'.concat(t, ': ').concat(e, ';')).join('\n'),
                i = t.map((e, t) => '--secondary-'.concat(t, ': ').concat(e, ';')).join('\n');
            return '#'.concat(n, ' {\n        ').concat(r, '\n        ').concat(i, '\n      }');
        }, [n, e, t]),
        containerId: n
    };
}
