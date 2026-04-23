"use strict";
n.d(t, { A: () => a });
var r = n(473145),
    i = n(927578),
    s = n(788868);
function a(e, t, n, a) {
    if (null == e || (null == e.quality && null == e.guildPremiumTier)) return !0;
    let o = !1;
    return (
        null != e.quality &&
            (e.quality === s.uP.HIGH_STREAMING_QUALITY
                ? (o = o || i.Ay.canStreamQuality(i.Ay.StreamQuality.HIGH, t))
                : e.quality === s.uP.MID_STREAMING_QUALITY &&
                  (o = o || i.Ay.canStreamQuality(i.Ay.StreamQuality.MID, t))),
        null != e.guildPremiumTier && (o = o || (0, r.yS)(n, e.guildPremiumTier)),
        o
    );
}
