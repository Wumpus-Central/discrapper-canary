"use strict";
n.d(t, { A: () => s });
var i = n(61330),
    r = n(652215);
function s(e) {
    return null == e || null == e.type || e.type !== r.$pd.PLAYING
        ? null
        : (0, i.A)(e)
          ? r.yTV.XBOX
          : null != e.platform
            ? e.platform
            : r.yTV.DESKTOP;
}
