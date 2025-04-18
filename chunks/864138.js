n.d(t, { z: () => a });
var r = n(200651);
n(192379);
var i = n(206295),
    o = n(799789);
function a(e) {
    let { children: t, imageUrl: n } = e,
        { primaryColor: a, secondaryColor: s } = (0, i.Z)(''.concat(n, '?forColors'));
    return (0, r.jsxs)('div', {
        className: o.heroContainer,
        style: { backgroundImage: 'linear-gradient(180deg, '.concat(a, ' 0%, ').concat(s, ' 100%), radial-gradient(99.17% 98.53% at 0% 1.47%, #deca7b 0%, #c89b3c 30.5%, #785a28 100%)') },
        children: [
            (0, r.jsx)('img', {
                src: n,
                alt: '',
                className: o.heroSplash
            }),
            t
        ]
    });
}
