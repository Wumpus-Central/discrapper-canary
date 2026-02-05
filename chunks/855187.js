"use strict";
n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    s = n(952572),
    o = n(961350),
    l = n(430452),
    u = n(985018);
function c(e, t) {
    let c = (0, a.k34)(),
        { videoEnabled: d, hasVideoDevice: _ } = (0, i.cf)([l.A], () => ({
            videoEnabled: l.A.isVideoEnabled(),
            hasVideoDevice: l.A.isVideoAvailable(),
        })),
        f = (0, i.bG)([o.default], () => o.default.getId() === e),
        p = (0, s.A)();
    function h() {
        (0, a.mMO)(
            async () => {
                let { default: e } = await Promise.all([n.e("95782"), n.e("82277")]).then(n.bind(n, 308229));
                return (t) => (0, r.jsx)(e, { ...t, videoEnabled: d });
            },
            { modalKey: "camera-preview", contextKey: null != t ? (0, a.TId)(t) : c },
        );
    }
    return (!d || p) && f && _
        ? (0, r.jsx)(a.Drp, {
              id: "change-video-background",
              label: d ? u.intl.string(u.t.mZKxHb) : u.intl.string(u.t["vkV93/"]),
              action: h,
              icon: d ? a.fBX : a.bMW,
              leadingAccessory: { type: "icon", icon: d ? a.fBX : a.bMW },
          })
        : null;
}
