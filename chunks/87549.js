"use strict";
n.d(t, { A: () => i });
let r = (0, n(353640).v)((e) => ({
        utmSourceCurrent: void 0,
        utmMediumCurrent: void 0,
        utmCampaignCurrent: void 0,
        utmContentCurrent: void 0,
        setUtmCurrentContext: (t) => {
            let { utmSourceCurrent: n, utmMediumCurrent: r, utmCampaignCurrent: i, utmContentCurrent: s } = t;
            return e({ utmSourceCurrent: n, utmMediumCurrent: r, utmCampaignCurrent: i, utmContentCurrent: s });
        },
        getUtmCurrentContext: () => r.getState(),
    })),
    i = r;
