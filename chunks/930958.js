n.d(t, { k: () => s }), n(747238), n(812715), n(733351);
let r = /(!|\.|;|,|-|—|–|\?|"|')/g,
    i = /(\n|\t|\s)/g,
    a = (e) => e.replace(r, "").replace(i, " "),
    s = (e) => (null == e ? [] : a(e).trim().split(" "));
