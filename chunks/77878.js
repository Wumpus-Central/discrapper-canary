n.d(t, { Z: () => O });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(981631),
    s = n(365778);
let o = "1",
    c = "2",
    u = "3",
    d = "4",
    p = "5",
    f = "6",
    h = "1",
    g = "2",
    m = "3",
    _ = "4",
    b = "5",
    E = {
        [a.aIt.ESRB]: {
            [o]: s.esrbEveryone,
            [c]: s.esrbEveryoneTenPlus,
            [u]: s.esrbTeen,
            [d]: s.esrbMature,
            [p]: s.esrbAdult,
            [f]: s.esrbRatingPending,
        },
        [a.aIt.PEGI]: {
            [h]: s.pegiThree,
            [g]: s.pegiSeven,
            [m]: s.pegiTwelve,
            [_]: s.pegiSixteen,
            [b]: s.pegiEighteen,
        },
    },
    O = (e) => {
        let { agency: t, rating: n, className: i } = e,
            a = E[t][n];
        return null == a ? null : (0, r.jsx)("div", { className: l()(s.contentRating, a, i) });
    };
