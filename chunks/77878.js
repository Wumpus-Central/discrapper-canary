n.d(t, { Z: () => O });
var r = n(54381);
n(473749);
var i = n(120356),
    l = n.n(i),
    a = n(981631),
    o = n(136569);
let s = "1",
    c = "2",
    u = "3",
    d = "4",
    p = "5",
    f = "6",
    g = "1",
    h = "2",
    m = "3",
    b = "4",
    _ = "5",
    E = {
        [a.aIt.ESRB]: {
            [s]: o.esrbEveryone,
            [c]: o.esrbEveryoneTenPlus,
            [u]: o.esrbTeen,
            [d]: o.esrbMature,
            [p]: o.esrbAdult,
            [f]: o.esrbRatingPending,
        },
        [a.aIt.PEGI]: {
            [g]: o.pegiThree,
            [h]: o.pegiSeven,
            [m]: o.pegiTwelve,
            [b]: o.pegiSixteen,
            [_]: o.pegiEighteen,
        },
    },
    O = (e) => {
        let { agency: t, rating: n, className: i } = e,
            a = E[t][n];
        return null == a ? null : (0, r.jsx)("div", { className: l()(o.contentRating, a, i) });
    };
