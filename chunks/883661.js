var i = r(200651),
    a = r(192379),
    s = r(481060),
    o = r(149203);
let l = (e) => {
        switch (e) {
            case o.UX.RECENT:
                return s.ClockIcon;
            case o.UX.FAVORITES:
                return s.StarIcon;
            case o.UX.TOP_GUILD_EMOJI:
                return s.TrophyIcon;
            case o.UX.PEOPLE:
                return s.ReactionIcon;
            case o.UX.NATURE:
                return s.NatureIcon;
            case o.UX.FOOD:
                return s.FoodIcon;
            case o.UX.ACTIVITY:
                return s.GameControllerIcon;
            case o.UX.TRAVEL:
                return s.BicycleIcon;
            case o.UX.OBJECTS:
                return s.ObjectIcon;
            case o.UX.SYMBOLS:
                return s.HeartIcon;
            case o.UX.FLAGS:
                return s.FlagIcon;
            case o.UX.PREMIUM_UPSELL:
                return s.NitroWheelIcon;
            case o.UX.SOUNDMOJI:
                return s.SoundboardIcon;
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
