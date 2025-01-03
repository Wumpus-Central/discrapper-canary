var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(981631),
    s = n(368043);
let o = {
        EVERYONE: '1',
        EVERYONE_TEN_PLUS: '2',
        TEEN: '3',
        MATURE: '4',
        ADULT: '5',
        RATING_PENDING: '6'
    },
    c = {
        THREE: '1',
        SEVEN: '2',
        TWELVE: '3',
        SIXTEEN: '4',
        EIGHTEEN: '5'
    },
    d = {
        [a.aIt.ESRB]: {
            [o.EVERYONE]: s.esrbEveryone,
            [o.EVERYONE_TEN_PLUS]: s.esrbEveryoneTenPlus,
            [o.TEEN]: s.esrbTeen,
            [o.MATURE]: s.esrbMature,
            [o.ADULT]: s.esrbAdult,
            [o.RATING_PENDING]: s.esrbRatingPending
        },
        [a.aIt.PEGI]: {
            [c.THREE]: s.pegiThree,
            [c.SEVEN]: s.pegiSeven,
            [c.TWELVE]: s.pegiTwelve,
            [c.SIXTEEN]: s.pegiSixteen,
            [c.EIGHTEEN]: s.pegiEighteen
        }
    };
t.Z = (e) => {
    let { agency: t, rating: n, className: r } = e,
        a = d[t][n];
    return null == a ? null : (0, i.jsx)('div', { className: l()(s.contentRating, a, r) });
};
