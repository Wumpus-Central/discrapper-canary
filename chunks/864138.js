r.d(n, {
    z: function () {
        return o;
    }
});
var i = r(200651);
r(192379);
var a = r(206295),
    s = r(310712);
function o(e) {
    let { children: n, imageUrl: r } = e,
        { primaryColor: o, secondaryColor: l } = (0, a.Z)(''.concat(r, '?forColors'));
    return (0, i.jsxs)('div', {
        className: s.heroContainer,
        style: { backgroundImage: 'linear-gradient(180deg, '.concat(o, ' 0%, ').concat(l, ' 100%), radial-gradient(99.17% 98.53% at 0% 1.47%, #deca7b 0%, #c89b3c 30.5%, #785a28 100%)') },
        children: [
            (0, i.jsx)('img', {
                src: r,
                alt: '',
                className: s.heroSplash
            }),
            n
        ]
    });
}
