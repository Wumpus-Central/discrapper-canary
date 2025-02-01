n.d(t, { Z: () => l });
var i = n(200651),
    r = n(192379),
    a = n(481060),
    s = n(149203);
let o = (e) => {
        switch (e) {
            case s.UX.RECENT:
                return a.T39;
            case s.UX.FAVORITES:
                return a.r7p;
            case s.UX.TOP_GUILD_EMOJI:
                return a.rm8;
            case s.UX.PEOPLE:
                return a.EO4;
            case s.UX.NATURE:
                return a.NQW;
            case s.UX.FOOD:
                return a.ED8;
            case s.UX.ACTIVITY:
                return a.iWm;
            case s.UX.TRAVEL:
                return a.QhB;
            case s.UX.OBJECTS:
                return a.Xbz;
            case s.UX.SYMBOLS:
                return a.h_8;
            case s.UX.FLAGS:
                return a.U65;
            case s.UX.PREMIUM_UPSELL:
                return a.SrA;
            case s.UX.SOUNDMOJI:
                return a.KY1;
            default:
                return;
        }
    },
    l = r.memo(function (e) {
        let { categoryId: t, ...n } = e,
            r = o(t);
        return null == r
            ? null
            : (0, i.jsx)(r, {
                  color: 'currentColor',
                  ...n
              });
    });
