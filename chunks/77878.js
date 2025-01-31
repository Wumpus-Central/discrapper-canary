n.d(t, { Z: () => C });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(981631),
    s = n(368043);
let o = '1',
    c = '2',
    d = '3',
    u = '4',
    h = '5',
    m = '6',
    p = '1',
    g = '2',
    _ = '3',
    f = '4',
    E = '5',
    I = {
        [a.aIt.ESRB]: {
            [o]: s.esrbEveryone,
            [c]: s.esrbEveryoneTenPlus,
            [d]: s.esrbTeen,
            [u]: s.esrbMature,
            [h]: s.esrbAdult,
            [m]: s.esrbRatingPending
        },
        [a.aIt.PEGI]: {
            [p]: s.pegiThree,
            [g]: s.pegiSeven,
            [_]: s.pegiTwelve,
            [f]: s.pegiSixteen,
            [E]: s.pegiEighteen
        }
    },
    C = (e) => {
        let { agency: t, rating: n, className: l } = e,
            a = I[t][n];
        return null == a ? null : (0, i.jsx)('div', { className: r()(s.contentRating, a, l) });
    };
