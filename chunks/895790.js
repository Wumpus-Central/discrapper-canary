"use strict";
n.d(t, { A: () => i });
var l = n(627968);
function i(e) {
    let { media: t, ...n } = e;
    return (0, l.jsx)("img", {
        ...n,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
