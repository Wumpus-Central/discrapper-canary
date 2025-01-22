r.d(n, {
    z: function () {
        return s;
    }
});
var i = r(200651);
r(192379);
var a = r(206295),
    o = r(310712);
function s(e) {
    let { children: n, imageUrl: r } = e,
        { primaryColor: s, secondaryColor: l } = (0, a.Z)(''.concat(r, '?forColors'));
    return (0, i.jsxs)('div', {
        className: o.heroContainer,
        style: { backgroundImage: 'linear-gradient(180deg, '.concat(s, ' 0%, ').concat(l, ' 100%), radial-gradient(99.17% 98.53% at 0% 1.47%, #deca7b 0%, #c89b3c 30.5%, #785a28 100%)') },
        children: [
            (0, i.jsx)('img', {
                src: r,
                alt: '',
                className: o.heroSplash
            }),
            n
        ]
    });
}
