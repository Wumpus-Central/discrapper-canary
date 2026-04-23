t.d(l, { A: () => u }), t(508300);
var r = t(627968),
    s = t(64700),
    n = t(607470),
    i = t(643612),
    a = t(652215),
    o = t(985018);
function d(e) {
    let {
            poster: l,
            src: t,
            width: i,
            height: o,
            naturalWidth: d,
            naturalHeight: u,
            play: h = !0,
            className: c,
            alt: m,
            responsive: p,
        } = e,
        g = s.useRef(null);
    return (s.useEffect(() => {
        let { current: e } = g;
        h
            ? e?.play()?.catch((e) => {
                  if (!(e instanceof DOMException) || "NotAllowedError" !== e.name) throw e;
              })
            : e?.pause();
    }, [h]),
    (d <= a.AaC && u <= a.oJQ) || (d <= a.oJQ && u <= a.AaC))
        ? (0, r.jsx)(n.A, {
              ref: g,
              className: c,
              poster: l,
              src: t,
              width: i,
              height: o,
              responsive: p,
              muted: !0,
              loop: !0,
              autoPlay: h,
              playsInline: !0,
              preload: "none",
              "aria-label": m,
          })
        : (0, r.jsx)("img", { alt: "", src: l, width: i, height: o });
}
function u(e) {
    let {
        src: l,
        poster: t,
        naturalWidth: s,
        naturalHeight: n,
        responsive: a,
        autoPlay: u,
        className: h,
        playable: c = !0,
        renderImageComponent: m,
        alt: p = o.intl.string(o.t.I5gL2H),
        sourceMetadata: g,
        ...x
    } = e;
    return (0, r.jsx)(i.G.Consumer, {
        children: (e) =>
            m({
                ...x,
                alt: p,
                src: t,
                containerClassName: h,
                autoPlay: u,
                animated: c,
                responsive: a,
                renderAccessory: e,
                tabIndex: c ? 0 : -1,
                dataSafeSrc: l,
                children(e) {
                    let { src: t, size: i, animating: o, alt: u } = e;
                    return (0, r.jsx)(d, {
                        alt: u,
                        className: h,
                        poster: t,
                        src: l,
                        width: i.width,
                        height: i.height,
                        naturalWidth: s,
                        naturalHeight: n,
                        responsive: a,
                        play: c && o,
                    });
                },
                sourceMetadata: g,
                analyticsSource: "LazyGIFV",
            }),
    });
}
