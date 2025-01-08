var a = r(760919),
    n = r(757028);
let o = (Math.log2(65504) + 9.72) / 17.52;
t.Z = new a.Z({
    id: 'acescc',
    cssId: '--acescc',
    name: 'ACEScc',
    coords: {
        r: {
            range: [-0.35828683, o],
            name: 'Red'
        },
        g: {
            range: [-0.35828683, o],
            name: 'Green'
        },
        b: {
            range: [-0.35828683, o],
            name: 'Blue'
        }
    },
    referred: 'scene',
    base: n.Z,
    toBase(e) {
        let t = (9.72 - 15) / 17.52;
        return e.map(function (e) {
            return e <= t ? (2 ** (17.52 * e - 9.72) - 0.0000152587890625) * 2 : e < o ? 2 ** (17.52 * e - 9.72) : 65504;
        });
    },
    fromBase: (e) =>
        e.map(function (e) {
            return e <= 0 ? (Math.log2(0.0000152587890625) + 9.72) / 17.52 : e < 0.0000152587890625 ? (Math.log2(0.0000152587890625 + 0.5 * e) + 9.72) / 17.52 : (Math.log2(e) + 9.72) / 17.52;
        })
});
