c.d(e, { z: () => n });
var d = c(200651);
c(192379);
var a = c(206295),
    s = c(399015);
function n(t) {
    let { children: e, imageUrl: c } = t,
        { primaryColor: n, secondaryColor: o } = (0, a.Z)(''.concat(c, '?forColors'));
    return (0, d.jsxs)('div', {
        className: s.heroContainer,
        style: { backgroundImage: 'linear-gradient(180deg, '.concat(n, ' 0%, ').concat(o, ' 100%), radial-gradient(99.17% 98.53% at 0% 1.47%, #deca7b 0%, #c89b3c 30.5%, #785a28 100%)') },
        children: [
            (0, d.jsx)('img', {
                src: c,
                alt: '',
                className: s.heroSplash
            }),
            e
        ]
    });
}
