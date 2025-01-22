var i = r(200651),
    a = r(192379),
    o = r(481060),
    s = r(149203);
let l = (e) => {
        switch (e) {
            case s.UX.RECENT:
                return o.ClockIcon;
            case s.UX.FAVORITES:
                return o.StarIcon;
            case s.UX.TOP_GUILD_EMOJI:
                return o.TrophyIcon;
            case s.UX.PEOPLE:
                return o.ReactionIcon;
            case s.UX.NATURE:
                return o.NatureIcon;
            case s.UX.FOOD:
                return o.FoodIcon;
            case s.UX.ACTIVITY:
                return o.GameControllerIcon;
            case s.UX.TRAVEL:
                return o.BicycleIcon;
            case s.UX.OBJECTS:
                return o.ObjectIcon;
            case s.UX.SYMBOLS:
                return o.HeartIcon;
            case s.UX.FLAGS:
                return o.FlagIcon;
            case s.UX.PREMIUM_UPSELL:
                return o.NitroWheelIcon;
            case s.UX.SOUNDMOJI:
                return o.SoundboardIcon;
            default:
                return;
        }
    },
    u = a.memo(function (e) {
        let { categoryId: n, ...r } = e,
            a = l(n);
        return null == a
            ? null
            : (0, i.jsx)(a, {
                  color: 'currentColor',
                  ...r
              });
    });
n.Z = u;
