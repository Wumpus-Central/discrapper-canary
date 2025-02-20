n.d(t, { Z: () => O });
var r = n(200651);
n(192379);
var i = n(120356),
    l = n.n(i),
    o = n(981631),
    a = n(94377);
let s = '1',
    c = '2',
    u = '3',
    d = '4',
    p = '5',
    h = '6',
    f = '1',
    g = '2',
    m = '3',
    b = '4',
    _ = '5',
    E = {
        [o.aIt.ESRB]: {
            [s]: a.esrbEveryone,
            [c]: a.esrbEveryoneTenPlus,
            [u]: a.esrbTeen,
            [d]: a.esrbMature,
            [p]: a.esrbAdult,
            [h]: a.esrbRatingPending
        },
        [o.aIt.PEGI]: {
            [f]: a.pegiThree,
            [g]: a.pegiSeven,
            [m]: a.pegiTwelve,
            [b]: a.pegiSixteen,
            [_]: a.pegiEighteen
        }
    },
    O = (e) => {
        let { agency: t, rating: n, className: i } = e,
            o = E[t][n];
        return null == o ? null : (0, r.jsx)('div', { className: l()(a.contentRating, o, i) });
    };
