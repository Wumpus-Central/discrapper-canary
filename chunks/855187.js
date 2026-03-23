"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(952572),
    o = n(961350),
    l = n(430452),
    u = n(985018);
function c(e, t) {
    let c = (0, s.k34)(),
        { videoEnabled: d, hasVideoDevice: _ } = (0, i.cf)([l.Ay], () => ({
            videoEnabled: l.Ay.isVideoEnabled(),
            hasVideoDevice: l.Ay.isVideoAvailable(),
        })),
        f = (0, i.bG)([o.default], () => o.default.getId() === e),
        p = (0, a.A)();
    function h() {
        (0, s.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("95782"), n.e("82277")]).then(n.bind(n, 308229));
                return (t) => (0, r.jsx)(e, { ...t, videoEnabled: d });
            },
            { modalKey: "camera-preview", contextKey: null != t ? (0, s.TId)(t) : c },
        );
    }
    return (!d || p) && f && _
        ? (0, r.jsx)(s.Drp, {
              id: "change-video-background",
              label: d ? u.intl.string(u.t.mZKxHb) : u.intl.string(u.t["vkV93/"]),
              action: h,
              icon: d ? s.fBX : s.bMW,
              leadingAccessory: { type: "icon", icon: d ? s.fBX : s.bMW },
          })
        : null;
}
