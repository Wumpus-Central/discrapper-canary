"use strict";
n.d(t, { A: () => l });
var r = n(627968);
n(64700);
var i = n(506774),
    s = n(192308),
    a = n(386936),
    o = n(364496);
let l = {
    openDmSettingsUpsellModal(e) {
        let t = i.w.get(o.J),
            l = Date.now();
        null == t || l - t > o.z
            ? (i.w.set(o.J, l),
              (0, s.openModalLazy)(async () => {
                  let { default: t } = await n.e("62684").then(n.bind(n, 228855));
                  return (n) => (0, r.jsx)(t, { ...n, guildId: e });
              }))
            : (0, a.$)(a.s.SUPPRESSED_BY_COOLDOWN, e);
    },
};
