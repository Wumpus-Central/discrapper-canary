a.d(e, { z: () => n });
var c = a(200651);
a(192379);
var d = a(206295),
    s = a(650623);
function n(t) {
    let { children: e, imageUrl: a } = t,
        { primaryColor: n, secondaryColor: f } = (0, d.Z)(''.concat(a, '?forColors'));
    return (0, c.jsxs)('div', {
        className: s.heroContainer,
        style: { backgroundImage: 'linear-gradient(180deg, '.concat(n, ' 0%, ').concat(f, ' 100%), radial-gradient(99.17% 98.53% at 0% 1.47%, #deca7b 0%, #c89b3c 30.5%, #785a28 100%)') },
        children: [
            (0, c.jsx)('img', {
                src: a,
                alt: '',
                className: s.heroSplash
            }),
            e
        ]
    });
}
