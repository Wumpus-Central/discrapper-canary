n.d(t, { z: () => s });
var i = n(200651);
n(192379);
var r = n(206295),
    a = n(310712);
function s(e) {
    let { children: t, imageUrl: n } = e,
        { primaryColor: s, secondaryColor: o } = (0, r.Z)(''.concat(n, '?forColors'));
    return (0, i.jsxs)('div', {
        className: a.heroContainer,
        style: { backgroundImage: 'linear-gradient(180deg, '.concat(s, ' 0%, ').concat(o, ' 100%), radial-gradient(99.17% 98.53% at 0% 1.47%, #deca7b 0%, #c89b3c 30.5%, #785a28 100%)') },
        children: [
            (0, i.jsx)('img', {
                src: n,
                alt: '',
                className: a.heroSplash
            }),
            t
        ]
    });
}
