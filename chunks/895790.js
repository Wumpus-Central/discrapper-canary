n.d(t, { A: () => a });
var i = n(627968);
function a(e) {
    let { media: t, ...n } = e;
    return (0, i.jsx)("img", {
        ...n,
        src: t.url,
        style: { ...e.style, width: "100%", aspectRatio: e.media.width / e.media.height },
        alt: e.alt ?? "",
    });
}
