n.d(t, {
    Km: function () {
        return l;
    },
    bC: function () {
        return a;
    },
    md: function () {
        return s;
    }
});
var i = n(192379),
    r = n(772848);
let l = 262,
    s = 100;
function a(e, t) {
    let n = i.useMemo(() => 'clan-banner-container-'.concat((0, r.Z)()), []);
    return {
        styleContent: i.useMemo(() => {
            let i = e.map((e, t) => '--primary-'.concat(t, ': ').concat(e, ';')).join('\n'),
                r = t.map((e, t) => '--secondary-'.concat(t, ': ').concat(e, ';')).join('\n');
            return '#'.concat(n, ' {\n        ').concat(i, '\n        ').concat(r, '\n      }');
        }, [n, e, t]),
        containerId: n
    };
}
