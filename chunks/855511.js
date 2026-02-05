"use strict";
n.d(t, { A: () => a });
var r = n(61330),
    i = n(652215);
function a(e) {
    return null == e || null == e.type || e.type !== i.$pd.PLAYING
        ? null
        : (0, r.A)(e)
          ? i.yTV.XBOX
          : null != e.platform
            ? e.platform
            : i.yTV.DESKTOP;
}
